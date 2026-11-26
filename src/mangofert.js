/* Mango fertilizer calculator (mangofarming.in/en/mango-fertilizer/).
   Official per-tree doses by tree age: NHB, TNAU, KAU; TNAU drip fertigation for high-density bearing trees.
   N, P and K are read as N, P2O5 and K2O (as in Indian packages of practices). Soil test +/-25% (Soil Health Card brackets).
   Pure functions first (tested in Node), then page wiring with Gujarati / Hindi / English labels. */
(function (root) {
  "use strict";
  // g per tree per year and kg FYM, by age (years). Each preset returns {n,p,k,fym,note}.
  function nhb(a) {      // NHB man007: 1..7 = 100:50:100 x age (P 300,400,500,500), 10+ = 1000:500:1000, FYM 5 x age, 50 from 10. Ages 8-9 not listed: year-7 dose kept.
    var P = { 1: 50, 2: 100, 3: 200, 4: 300, 5: 400, 6: 500, 7: 500 };
    if (a >= 10) return { n: 1000, p: 500, k: 1000, fym: 50 };
    var y = Math.min(a, 7);
    return { n: 100 * y, p: P[y], k: 100 * y, fym: 5 * y, gap: a > 7 };
  }
  function tnau(a) {     // TNAU: year 1 = 0.2 : 0.2 : 0.3 kg N:P:K + 10 kg FYM, rising to 1.0 : 1.0 : 1.5 kg + 50 kg FYM from year 6. Years 2-5 raised evenly.
    var y = Math.min(a, 6) - 1;
    return { n: 200 + 160 * y, p: 200 + 160 * y, k: 300 + 240 * y, fym: 10 + 8 * y };
  }
  function kau(a) {      // KAU manuring table (bands)
    if (a <= 1) return { n: 20, p: 18, k: 50, fym: 10 };
    if (a === 2) return { n: 50, p: 27, k: 75, fym: 15 };
    if (a <= 5) return { n: 100, p: 36, k: 100, fym: 25 };
    if (a <= 7) return { n: 250, p: 172, k: 200, fym: 40 };
    if (a <= 10) return { n: 400, p: 144, k: 400, fym: 50 };
    return { n: 500, p: 360, k: 750, fym: 75 };
  }
  function hdp() { return { n: 1000, p: 500, k: 1000, fym: 0 }; }   // TNAU HDP drip, per bearing tree
  var PRESETS = { nhb: nhb, tnau: tnau, kau: kau, hdp: hdp };
  var UNITS = { acre: 4046.86, ha: 10000, vigha16: 1618.7, vigha24: 2428.1, guntha: 101.17 };
  var LEVEL = { low: 1.25, med: 1, high: 0.75 };
  var G = { urea: { n: 0.46, bag: 45 }, ssp: { p: 0.16, bag: 50 }, dap: { n: 0.18, p: 0.46, bag: 50 }, mop: { k: 0.60, bag: 50 } };
  // TNAU HDP fertigation shares by stage (N, P, K)
  var DRIP = [
    { key: "post", n: 0.25, p: 0.50, k: 0.25, months: 2 },
    { key: "pre", n: 0.40, p: 0.30, k: 0.20, months: 2 },
    { key: "set", n: 0.20, p: 0.20, k: 0.25, months: 2 },
    { key: "dev", n: 0.15, p: 0.00, k: 0.30, months: 4 }
  ];
  function round(x, d) { var f = Math.pow(10, d || 0); return Math.round(x * f) / f; }

  function calculate(inp) {
    var age = Math.max(1, Math.floor(inp.age || 1));
    var d = PRESETS[inp.preset](age);
    var g = { n: d.n * LEVEL[inp.soilN || "med"], p: d.p * LEVEL[inp.soilP || "med"], k: d.k * LEVEL[inp.soilK || "med"] };
    var trees = inp.trees > 0 ? Math.round(inp.trees) : Math.max(1, Math.round(inp.area * UNITS[inp.unit] / (inp.row * inp.plant)));
    var tot = { n: g.n * trees / 1000, p: g.p * trees / 1000, k: g.k * trees / 1000, fym: d.fym * trees };
    var prod = {};
    if (inp.psrc === "dap") { prod.dap = tot.p / G.dap.p; prod.urea = Math.max(0, tot.n - prod.dap * G.dap.n) / G.urea.n; }
    else { prod.ssp = tot.p / G.ssp.p; prod.urea = tot.n / G.urea.n; }
    prod.mop = tot.k / G.mop.k;
    var per = {}; Object.keys(prod).forEach(function (k) { per[k] = prod[k] * 1000 / trees; });
    var splits;
    if (inp.preset === "hdp") {
      splits = DRIP.map(function (s) {
        var o = { key: s.key, months: s.months, weekly: {} };
        // urea for this stage after any DAP nitrogen in the same stage
        var pKg = tot.p * s.p, nKg = tot.n * s.n, kKg = tot.k * s.k;
        var pr = {};
        if (inp.psrc === "dap") { pr.dap = pKg / G.dap.p; pr.urea = Math.max(0, nKg - pr.dap * G.dap.n) / G.urea.n; } else { pr.ssp = pKg / G.ssp.p; pr.urea = nKg / G.urea.n; }
        pr.mop = kKg / G.mop.k;
        var weeks = Math.max(6, s.months * 4);
        Object.keys(pr).forEach(function (k) { o.weekly[k] = pr[k] / weeks; o[k] = pr[k]; });
        o.weeks = weeks; o.nut = { n: nKg / weeks, p: pKg / weeks, k: kKg / weeks };
        return o;
      });
    } else if (inp.preset === "tnau") {
      splits = [{ key: "sepoct", share: 1 }];
    } else if (inp.preset === "kau") {
      splits = inp.bearing ? [{ key: "mayjun", share: 0.5, fym: true }, { key: "augsep", share: 0.5 }] : [{ key: "mayjun", share: 1, fym: true }];
    } else {
      splits = [{ key: "monsoon", share: 0.5, fym: true }, { key: "endmonsoon", share: 0.5 }];
    }
    return { age: age, d: d, g: g, trees: trees, tot: tot, prod: prod, per: per, splits: splits, gap: !!d.gap };
  }

  var api = { calculate: calculate, PRESETS: PRESETS, UNITS: UNITS, G: G, round: round };
  if (typeof module !== "undefined" && module.exports) { module.exports = api; return; }

  var $ = function (id) { return document.getElementById(id); };
  if (!$("mfcalc")) return;
  var L = document.documentElement.lang || "en";
  var T = {
    en: { trees: "trees", n: "kg N", p: "kg P₂O₅", k: "kg K₂O", per: "Per tree", fym: "FYM", tot: "For your orchard", when: "When to give it",
          urea: "Urea (46% N)", ssp: "SSP (16% P₂O₅)", dap: "DAP (18:46:0)", mop: "MOP (60% K₂O)", bags: "bags", t: "tonnes", kgt: "kg per tree", gpt: "g per tree", week: "per week",
          monsoon: "Start of monsoon (June–July): all FYM + half the fertilizer", endmonsoon: "End of monsoon (September–October): the other half",
          sepoct: "September–October: FYM and all fertilizer (TNAU)", mayjun: "May–June, as the monsoon begins", augsep: "August–September: second half",
          post: "After harvest (2 months)", pre: "Pre-flowering (2 months)", set: "Flowering to fruit set (2 months)", dev: "Fruit development (4 months)",
          gap: "The NHB table skips years 8–9, so the calculator keeps the year-7 dose until year 10.",
          drip: "Through drip, use water-soluble (drip-grade) fertilizers to supply these nutrients each week; SSP does not dissolve and DAP clogs drippers.",
          stress: "Stop fertilizer and irrigation about 30 days before flowering is expected (TNAU), so the tree flowers instead of putting out new leaves.",
          place: "Spread in a ring from about 45–90 cm from the trunk out to the edge of the canopy, or in 25–30 cm deep trenches about 2 m from the trunk on older trees, and mix into the soil.",
          wa: "Mango fertilizer plan" },
    gu: { trees: "ઝાડ", n: "કિલો N", p: "કિલો P₂O₅", k: "કિલો K₂O", per: "ઝાડ દીઠ", fym: "છાણિયું ખાતર", tot: "તમારા બગીચા માટે", when: "ક્યારે આપવું",
          urea: "યુરિયા (46% N)", ssp: "SSP (16% P₂O₅)", dap: "DAP (18:46:0)", mop: "MOP (60% K₂O)", bags: "બેગ", t: "ટન", kgt: "કિલો / ઝાડ", gpt: "ગ્રામ / ઝાડ", week: "દર અઠવાડિયે",
          monsoon: "ચોમાસાની શરૂઆત (જૂન–જુલાઈ): બધું છાણિયું ખાતર + અડધું ખાતર", endmonsoon: "ચોમાસાના અંતે (સપ્ટેમ્બર–ઓક્ટોબર): બાકીનું અડધું",
          sepoct: "સપ્ટેમ્બર–ઓક્ટોબર: બધું ખાતર (TNAU)", mayjun: "મે–જૂન, ચોમાસાની શરૂઆતમાં", augsep: "ઑગસ્ટ–સપ્ટેમ્બર: બીજું અડધું",
          post: "ફળ ઉતાર્યા પછી (2 મહિના)", pre: "મોર પહેલાં (2 મહિના)", set: "મોરથી ફળ બેસવા સુધી (2 મહિના)", dev: "ફળ મોટા થાય (4 મહિના)",
          gap: "NHB ની કોષ્ટકમાં 8–9 વર્ષનો ડોઝ નથી, તેથી 10 વર્ષ સુધી 7મા વર્ષનો ડોઝ રાખ્યો છે.",
          drip: "ટપકમાં આ તત્વો દર અઠવાડિયે પાણીમાં ઓગળે તેવા (ડ્રીપ ગ્રેડ) ખાતરથી આપો; SSP ઓગળતું નથી અને DAP ટપકના છિદ્રો બંધ કરે છે.",
          stress: "મોર આવવાના આશરે 30 દિવસ પહેલાં ખાતર અને પિયત બંધ કરો (TNAU), જેથી નવા પાનને બદલે મોર આવે.",
          place: "થડથી આશરે 45–90 સે.મી. દૂરથી ઘેરાના છેડા સુધી વરતુળમાં, અથવા જૂના ઝાડમાં થડથી 2 મી. દૂર 25–30 સે.મી. ઊંડી નીકમાં આપી માટીમાં ભેળવો.",
          wa: "આંબા ખાતર પ્લાન" },
    hi: { trees: "पेड़", n: "किलो N", p: "किलो P₂O₅", k: "किलो K₂O", per: "प्रति पेड़", fym: "गोबर खाद", tot: "आपके बाग के लिए", when: "कब दें",
          urea: "यूरिया (46% N)", ssp: "SSP (16% P₂O₅)", dap: "DAP (18:46:0)", mop: "MOP (60% K₂O)", bags: "बोरी", t: "टन", kgt: "किलो / पेड़", gpt: "ग्राम / पेड़", week: "हर हफ़्ते",
          monsoon: "मानसून की शुरुआत (जून–जुलाई): पूरी गोबर खाद + आधी खाद", endmonsoon: "मानसून के अंत में (सितंबर–अक्टूबर): बाकी आधी",
          sepoct: "सितंबर–अक्टूबर: पूरी खाद (TNAU)", mayjun: "मई–जून, मानसून की शुरुआत में", augsep: "अगस्त–सितंबर: दूसरी आधी",
          post: "तुड़ाई के बाद (2 महीने)", pre: "बौर से पहले (2 महीने)", set: "बौर से फल लगने तक (2 महीने)", dev: "फल बढ़ने का समय (4 महीने)",
          gap: "NHB तालिका में 8–9 साल की मात्रा नहीं है, इसलिए 10 साल तक 7वें साल की मात्रा रखी गई है।",
          drip: "ड्रिप में ये तत्व हर हफ़्ते पानी में घुलने वाले (ड्रिप ग्रेड) उर्वरक से दें; SSP घुलता नहीं और DAP ड्रिपर बंद करता है.",
          stress: "बौर आने से लगभग 30 दिन पहले खाद और सिंचाई बंद करें (TNAU), ताकि नए पत्तों की जगह बौर आए।",
          place: "तने से लगभग 45–90 सेमी दूर से छतरी के किनारे तक घेरे में, या बड़े पेड़ों में तने से 2 मी. दूर 25–30 सेमी गहरी नाली में डालकर मिट्टी में मिलाएं।",
          wa: "आम खाद योजना" }
  }[L] || null;
  if (!T) return;
  var SP = { s10: [10, 10], s8: [8, 8], s7: [7, 7], s5: [5, 5], s3: [3, 2.5] };
  function fmt(x) { return x >= 100 ? Math.round(x).toLocaleString("en-IN") : round(x, 1).toLocaleString("en-IN"); }
  function line(k, kg, unit) { return T[k] + ": <b>" + fmt(kg) + "</b> " + (unit || "kg") + (G[k] ? " (" + round(kg / G[k].bag, 1) + " " + T.bags + ")" : ""); }
  function render() {
    var sp = SP[$("mf-sp").value] || [+$("mf-row").value || 8, +$("mf-plant").value || 8];
    $("mf-custom").hidden = $("mf-sp").value !== "custom";
    var inp = { preset: $("mf-preset").value, age: +$("mf-age").value || 1, area: +$("mf-area").value || 1, unit: $("mf-unit").value, row: sp[0], plant: sp[1],
                trees: +$("mf-trees").value || 0, psrc: $("mf-psrc").value, bearing: $("mf-bearing").checked,
                soilN: $("mf-sn").value, soilP: $("mf-sp2").value, soilK: $("mf-sk").value };
    var r = calculate(inp), h = "";
    h += '<div class="mf-top"><div><b>' + r.trees.toLocaleString("en-IN") + '</b><span>' + T.trees + '</span></div><div><b>' + fmt(r.tot.n) + '</b><span>' + T.n + '</span></div><div><b>' + fmt(r.tot.p) + '</b><span>' + T.p + '</span></div><div><b>' + fmt(r.tot.k) + '</b><span>' + T.k + '</span></div></div>';
    h += '<p class="mf-note">' + T.per + ': ' + round(r.g.n) + ' g N, ' + round(r.g.p) + ' g P₂O₅, ' + round(r.g.k) + ' g K₂O' + (r.d.fym ? ', ' + r.d.fym + ' kg ' + T.fym : '') + '</p>';
    if (r.gap) h += '<p class="mf-note">' + T.gap + '</p>';
    h += inp.preset === 'hdp' ? '<ul class="mf-list">' : '<h3>' + T.tot + '</h3><ul class="mf-list">';
    if (r.tot.fym) h += '<li>' + T.fym + ': <b>' + round(r.tot.fym / 1000, 1) + '</b> ' + T.t + '</li>';
    if (inp.preset !== 'hdp') Object.keys(r.prod).forEach(function (k) { h += '<li>' + line(k, r.prod[k]) + ' · ' + round(r.per[k] * 1000 / 1000) + ' ' + T.gpt + '</li>'; });
    h += '</ul><h3>' + T.when + '</h3><ul class="mf-list">';
    r.splits.forEach(function (s) {
      if (s.weekly) {
        h += '<li><b>' + T[s.key] + '</b>: ' + ['n', 'p', 'k'].filter(function (k) { return s.nut[k] > 0; }).map(function (k) { return fmt(s.nut[k]) + ' ' + T[k]; }).join(', ') + ' ' + T.week + '</li>';
      } else {
        h += '<li><b>' + T[s.key] + '</b>: ' + Object.keys(r.prod).map(function (k) { return T[k] + ' ' + fmt(r.prod[k] * s.share) + ' kg'; }).join(', ') + '</li>';
      }
    });
    h += '</ul>' + (inp.preset === 'hdp' ? '<p class="mf-note">' + T.drip + '</p>' : '') + '<p class="mf-note">' + T.place + '</p><p class="mf-note">' + T.stress + '</p>';
    $("mf-out").innerHTML = h;
    var msg = T.wa + ": " + inp.area + " " + inp.unit + ", " + r.trees + " " + T.trees + ", age " + r.age + ", " + inp.preset.toUpperCase() + ". N " + fmt(r.tot.n) + " kg, P " + fmt(r.tot.p) + " kg, K " + fmt(r.tot.k) + " kg.";
    $("mf-wa").href = "https://wa.me/919978791167?text=" + encodeURIComponent(msg);
  }
  $("mfcalc").addEventListener("input", render); $("mfcalc").addEventListener("change", render); render();
})(typeof window !== "undefined" ? window : this);
