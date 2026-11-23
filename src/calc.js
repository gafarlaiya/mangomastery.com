/* Dosage logic. All product numbers live here so they can be reviewed and changed in one place. */
(function (root) {
  // Source: mango_master_recommendation_sheet_v3.xlsx, "Dosage Master" (8 June 2026). g and ml per plant.
  var DOSE = {
    '0-1': { g: 100, ml: 10 }, '1-2': { g: 200, ml: 15 }, '2-4': { g: 300, ml: 20 }, '4-7': { g: 400, ml: 30 },
    '7-12': { g: 750, ml: 60 }, '12-20': { g: 1250, ml: 75 }, '20-30': { g: 1750, ml: 90 }, '30-40': { g: 2000, ml: 125 },
    '40-50': { g: 2500, ml: 150 }, '50-60': { g: 3000, ml: 175 }, '60+': { g: 3500, ml: 200 }
  };
  var CARE = { basic: 0.75, balanced: 1, strong: 1.2, best: 1.35 };
  // Source: "Spray Master". ml of Mango Special and of Gold per tank.
  var SPRAY = { '15': { w: 15, ml: 40 }, '20': { w: 20, ml: 50 }, '200': { w: 200, ml: 250 }, '500': { w: 500, ml: 500 }, '1000': { w: 1000, ml: 1000 }, '2000': { w: 2000, ml: 2000 } };
  var BAG_KG = 8;
  // Extra dose from the old website's logic (App.tsx v12). These are not in the sheet.
  var ADD_NO_CROP = 0.10, ADD_IRREGULAR = 0.05, ADD_CULTAR = 0.05;

  function multiplier(g) {
    var m = CARE[g.care] || 1;
    var severe = g.bearing === 'misses' || g.bearing === 'noProduction2' || (g.problems || []).indexOf('noProduction2') >= 0;
    var irregular = ['inconsistent', 'sometimes'].indexOf(g.bearing) >= 0 || (g.problems || []).indexOf('alternate') >= 0;
    if (severe) m += ADD_NO_CROP; else if (irregular) m += ADD_IRREGULAR;
    if (g.cultar === 'regular' || g.cultar === 'occasionally') m += ADD_CULTAR;
    return Math.round(m * 100) / 100;
  }
  function calcGroup(g, plainMultiplier) {
    var base = DOSE[g.age]; if (!base) return null;
    var m = plainMultiplier != null ? plainMultiplier : multiplier(g);
    var plants = Math.max(0, Math.floor(+g.plants || 0));
    var gram = Math.round(base.g * m);
    var ml = Math.round(base.ml * m * 10) / 10;
    var npk = g.npk === 'yes' ? Math.round(ml * 0.5 * 10) / 10 : 0;
    var s = g.spray === 'yes' ? SPRAY[g.tank] : null;
    var tanks = s ? Math.max(0, +g.tanks || 0) : 0, rounds = s ? Math.max(1, +g.rounds || 1) : 0;
    var sprayMl = s ? s.ml * tanks * rounds : 0;
    return {
      multiplier: m, plants: plants, gram: gram, ml: ml, npk: npk,
      granKg: gram * plants / 1000, drenchL: ml * plants / 1000, npkL: npk * plants / 1000,
      water: s ? s.w * tanks * rounds : 0, sprayL: sprayMl / 1000, goldL: sprayMl / 1000, tankMl: s ? s.ml : 0, tanks: tanks, rounds: rounds
    };
  }
  function packs(l) {
    var left = Math.round(Math.ceil(l * 2 - 1e-9)); // count of 500 ml units, rounded up
    var out = [], five = Math.floor(left / 10); left -= five * 10;
    var one = Math.floor(left / 2); left -= one * 2;
    if (five) out.push(five + ' × 5 L'); if (one) out.push(one + ' × 1 L'); if (left) out.push(left + ' × 500 ml');
    return out.join(' + ');
  }
  function totals(groups) {
    var t = { granKg: 0, mangoL: 0, npkL: 0, goldL: 0, water: 0, plants: 0 };
    groups.forEach(function (g) { var c = calcGroup(g); if (!c) return; t.granKg += c.granKg; t.mangoL += c.drenchL + c.sprayL; t.npkL += c.npkL; t.goldL += c.goldL; t.water += c.water; t.plants += c.plants; });
    t.bags = Math.ceil(t.granKg / BAG_KG - 1e-9);
    Object.keys(t).forEach(function (k) { t[k] = Math.round(t[k] * 1000) / 1000; });
    return t;
  }
  var api = { DOSE: DOSE, CARE: CARE, SPRAY: SPRAY, multiplier: multiplier, calcGroup: calcGroup, packs: packs, totals: totals };
  if (typeof module !== 'undefined') module.exports = api; else root.MMCalc = api;
})(this);
