import { createClient } from "npm:@supabase/supabase-js@2";

// Farmer login for GBO farmer sites: mangofarming.in (formerly mangomastery.com) (site "mango", codes MM-1234) and ganna.in (site "ganna", codes GN-1234).
// Mobile: the site asks for a short code (start) -> the farmer WhatsApps it to +91 99787 91167 (DoubleTick)
// -> dt-webhook forwards it here (inbound) -> we WhatsApp back a 6-digit OTP -> the site checks it (verify) -> session token.
// Email: signup with consent for that site's email updates (email_signup) -> session token.
// One account per farmer across both sites (table farmer_users). Email is unverified until a sending domain works.
const SB_URL = Deno.env.get("SUPABASE_URL")!, SERVICE = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
const db = createClient(SB_URL, SERVICE);
const ALLOWED = /^https:\/\/((www\.)?mangofarming\.in|(www\.)?mangomastery\.com|([a-z0-9-]+\.)?mangomastery-com\.pages\.dev|([a-z0-9-]+\.)?mango-mastery\.pages\.dev|(www\.)?ganna\.in)$|^http:\/\/localhost(:\d+)?$/;
const FROM = "919978791167";
const DT = "https://public.doubletick.io/whatsapp/message/text";
type Site = "mango" | "ganna";
const SITES: Record<Site, { prefix: string; name: string; list: string; url: string; icon: string }> = {
  mango: { prefix: "MM", name: "Mango Farming", list: "mango", url: "mangofarming.in/login", icon: "🥭" },
  ganna: { prefix: "GN", name: "ganna.in", list: "sugarcane", url: "ganna.in/login", icon: "🌾" },
};
const siteOf = (v: unknown): Site => (v === "ganna" ? "ganna" : "mango");
const siteByPrefix = (v: unknown): Site => (String(v).toUpperCase() === "GN" ? "ganna" : "mango");
const str = (v: unknown, n: number) => typeof v === "string" ? v.trim().slice(0, n) : "";
const mob10 = (v: unknown) => str(v, 20).replace(/\D/g, "").slice(-10);
const okMob = (m: string) => /^[6-9]\d{9}$/.test(m);
async function sha(s: string) {
  const b = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(s));
  return [...new Uint8Array(b)].map((x) => x.toString(16).padStart(2, "0")).join("");
}
function rnd(n: number) { const a = new Uint32Array(n); crypto.getRandomValues(a); return [...a].map((x) => String(x % 10)).join(""); }
function token() { const a = new Uint8Array(32); crypto.getRandomValues(a); return [...a].map((x) => x.toString(16).padStart(2, "0")).join(""); }

type Lang = "gu" | "hi" | "en" | "mr" | "pa" | "kn";
const L = (l: unknown): Lang => (["hi", "en", "mr", "pa", "kn"].includes(String(l)) ? l as Lang : "gu");
const OTP: Record<Lang, (o: string) => string> = {
  gu: (o) => `તમારો લૉગિન OTP: *${o}*\n15 મિનિટ માટે માન્ય. આ OTP કોઈને આપશો નહીં.`,
  hi: (o) => `आपका लॉगिन OTP: *${o}*\n15 मिनट के लिए मान्य. यह OTP किसी को न दें.`,
  en: (o) => `Your login OTP: *${o}*\nValid for 15 minutes. Do not share it with anyone.`,
  mr: (o) => `तुमचा लॉगिन OTP: *${o}*\n15 मिनिटांसाठी वैध. हा OTP कोणालाही देऊ नका.`,
  pa: (o) => `ਤੁਹਾਡਾ ਲੌਗਇਨ OTP: *${o}*\n15 ਮਿੰਟ ਲਈ ਵੈਧ. ਇਹ OTP ਕਿਸੇ ਨੂੰ ਨਾ ਦਿਓ.`,
  kn: (o) => `ನಿಮ್ಮ ಲಾಗಿನ್ OTP: *${o}*\n15 ನಿಮಿಷ ಮಾನ್ಯ. ಈ OTP ಯನ್ನು ಯಾರಿಗೂ ಹೇಳಬೇಡಿ.`,
};
const OTHER: Record<Lang, string> = {
  gu: "આ કોડ બીજા મોબાઇલ નંબર માટે માંગ્યો છે. વેબસાઇટ પર આ જ WhatsApp નંબર લખીને ફરી કોડ મેળવો.",
  hi: "यह कोड किसी दूसरे मोबाइल नंबर के लिए माँगा गया है. वेबसाइट पर यही WhatsApp नंबर लिखकर फिर से कोड लें.",
  en: "This code was requested for a different mobile number. Enter this WhatsApp number on the website and get a new code.",
  mr: "हा कोड दुसऱ्या मोबाइल नंबरसाठी मागितला आहे. वेबसाइटवर हाच WhatsApp नंबर लिहून पुन्हा कोड घ्या.",
  pa: "ਇਹ ਕੋਡ ਕਿਸੇ ਹੋਰ ਮੋਬਾਈਲ ਨੰਬਰ ਲਈ ਮੰਗਿਆ ਗਿਆ ਹੈ. ਵੈੱਬਸਾਈਟ 'ਤੇ ਇਹੀ WhatsApp ਨੰਬਰ ਲਿਖ ਕੇ ਦੁਬਾਰਾ ਕੋਡ ਲਓ.",
  kn: "ಈ ಕೋಡ್ ಬೇರೆ ಮೊಬೈಲ್ ಸಂಖ್ಯೆಗೆ ಕೇಳಲಾಗಿದೆ. ವೆಬ್‌ಸೈಟ್‌ನಲ್ಲಿ ಇದೇ WhatsApp ಸಂಖ್ಯೆ ಬರೆದು ಮತ್ತೆ ಕೋಡ್ ಪಡೆಯಿರಿ.",
};
const OLD: Record<Lang, (u: string) => string> = {
  gu: (u) => `આ કોડ જૂનો થઈ ગયો છે. ${u} પર ફરી કોડ મેળવો.`, hi: (u) => `यह कोड पुराना हो गया है. ${u} पर फिर से कोड लें.`,
  en: (u) => `This code has expired. Get a new one at ${u}.`, mr: (u) => `हा कोड जुना झाला आहे. ${u} वर पुन्हा कोड घ्या.`,
  pa: (u) => `ਇਹ ਕੋਡ ਪੁਰਾਣਾ ਹੋ ਗਿਆ ਹੈ. ${u} 'ਤੇ ਦੁਬਾਰਾ ਕੋਡ ਲਓ.`, kn: (u) => `ಈ ಕೋಡ್ ಅವಧಿ ಮೀರಿದೆ. ${u} ನಲ್ಲಿ ಹೊಸ ಕೋಡ್ ಪಡೆಯಿರಿ.`,
};

async function wa(to: string, text: string) {
  const key = Deno.env.get("DOUBLETICK_API_KEY");
  if (!key) { console.error("no DoubleTick key"); return false; }
  const r = await fetch(DT, { method: "POST", headers: { Authorization: key, "Content-Type": "application/json", accept: "application/json" },
    body: JSON.stringify({ to, from: FROM, messageId: crypto.randomUUID(), content: { text } }) }).catch(() => null);
  const t = r ? await r.text() : "network";
  if (!r?.ok || /"status"\s*:\s*"(FAILED|ERROR)"/i.test(t)) { console.error("dt", r?.status, t.slice(0, 200)); return false; }
  return true;
}

async function addSite(user_id: string, site: Site) {
  const { data } = await db.from("farmer_users").select("sites").eq("id", user_id).maybeSingle();
  const s = new Set<string>(data?.sites ?? []); if (!s.has(site)) { s.add(site); await db.from("farmer_users").update({ sites: [...s] }).eq("id", user_id); }
}
async function newSession(user_id: string, ua: string, site: Site) {
  const t = token();
  await db.from("farmer_sessions").insert({ token_hash: await sha(t), user_id, user_agent: ua, site });
  await db.from("farmer_users").update({ last_login_at: new Date().toISOString() }).eq("id", user_id);
  await addSite(user_id, site);
  return t;
}
async function userFromToken(t: unknown) {
  const s = str(t, 100);
  if (!/^[a-f0-9]{64}$/.test(s)) return null;
  const h = await sha(s);
  const { data } = await db.from("farmer_sessions").select("user_id,expires_at").eq("token_hash", h).maybeSingle();
  if (!data || Date.parse(data.expires_at) < Date.now()) return null;
  await db.from("farmer_sessions").update({ last_seen_at: new Date().toISOString() }).eq("token_hash", h);
  const { data: u } = await db.from("farmer_users").select("id,mobile,mobile_verified_at,email,name,village,district,state,lang").eq("id", data.user_id).maybeSingle();
  if (!u) return null;
  const { data: subs } = await db.from("farmer_subscriptions").select("list").eq("user_id", u.id).is("unsubscribed_at", null);
  return { ...u, lists: (subs ?? []).map((x: any) => x.list) };
}
const pub = (u: any) => u && ({ name: u.name, mobile: u.mobile, mobile_verified: !!u.mobile_verified_at, email: u.email, village: u.village, district: u.district, state: u.state, lang: u.lang, lists: u.lists ?? [] });
async function subscribe(user_id: string, list: string, text: string, site: Site) {
  await db.from("farmer_subscriptions").upsert({ user_id, list, consent_text: text, consent_at: new Date().toISOString(), site, unsubscribed_at: null }, { onConflict: "user_id,list" });
}
async function linkSessions(user_id: string, mobile: string | null, sessions: unknown) {
  if (!Array.isArray(sessions)) return;
  const ids = sessions.slice(0, 10).map((x) => str(x, 60)).filter((x) => /^[a-zA-Z0-9-]{8,60}$/.test(x));
  if (!ids.length) return;
  let q = db.from("mango_assessments").update({ user_id }).in("session_id", ids).is("user_id", null);
  if (mobile) q = q.eq("mobile", mobile);
  await q;
}

Deno.serve(async (req) => {
  const origin = req.headers.get("origin") ?? "";
  const cors = { "Access-Control-Allow-Origin": ALLOWED.test(origin) ? origin : "https://mangofarming.in", "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "content-type", "Vary": "Origin", "Content-Type": "application/json" };
  const reply = (s: number, b: unknown) => new Response(JSON.stringify(b), { status: s, headers: cors });
  if (req.method === "OPTIONS") return new Response(null, { status: 204, headers: cors });
  if (req.method !== "POST") return reply(405, { ok: false });
  let p: Record<string, any>;
  try { const raw = await req.text(); if (raw.length > 8000) return reply(413, { ok: false }); p = JSON.parse(raw); } catch { return reply(400, { ok: false }); }
  const ua = str(req.headers.get("user-agent"), 300);

  // ---- called by dt-webhook (server to server) when a farmer WhatsApps a login code ----
  if (p.action === "inbound") {
    if (req.headers.get("x-internal") !== SERVICE) return reply(403, { ok: false });
    const site = siteByPrefix(p.prefix), code = str(p.code, 10), from = str(p.from, 20).replace(/\D/g, "");
    const since = new Date(Date.now() - 15 * 60e3).toISOString();
    const { data: rq } = await db.from("farmer_auth_requests").select("*").eq("site", site).eq("code", code).in("status", ["waiting", "otp_sent"]).gte("created_at", since)
      .order("created_at", { ascending: false }).limit(1).maybeSingle();
    if (!rq) { await wa(from, OLD[L(p.lang)](SITES[site].url)); return reply(200, { ok: true, result: "no request" }); }
    const lang = L(rq.lang);
    if (from.slice(-10) !== rq.mobile) { await wa(from, OTHER[lang]); return reply(200, { ok: true, result: "other number" }); }
    const otp = rnd(6);
    await db.from("farmer_auth_requests").update({ status: "otp_sent", otp_hash: await sha(rq.id + ":" + otp), otp_sent_at: new Date().toISOString(),
      expires_at: new Date(Date.now() + 15 * 60e3).toISOString(), wa_from: from, attempts: 0 }).eq("id", rq.id);
    const sent = await wa(from, `${SITES[site].icon} ${SITES[site].name}\n` + OTP[lang](otp));
    if (!sent) await db.from("farmer_auth_requests").update({ status: "failed" }).eq("id", rq.id);
    return reply(200, { ok: true, result: sent ? "otp sent" : "send failed" });
  }

  if (!ALLOWED.test(origin)) return reply(403, { ok: false });
  const site = siteOf(p.site);

  // ---- mobile: start ----
  if (p.action === "start") {
    const mobile = mob10(p.mobile);
    if (!okMob(mobile)) return reply(400, { ok: false, error: "mobile" });
    const hour = new Date(Date.now() - 3600e3).toISOString();
    const { count } = await db.from("farmer_auth_requests").select("id", { count: "exact", head: true }).eq("mobile", mobile).gte("created_at", hour);
    if ((count ?? 0) >= 6) return reply(429, { ok: false, error: "too_many" });
    let code = "";
    for (let i = 0; i < 5 && !code; i++) {
      const c = rnd(4);
      const { count: used } = await db.from("farmer_auth_requests").select("id", { count: "exact", head: true }).eq("site", site).eq("code", c).in("status", ["waiting", "otp_sent"]).gte("created_at", new Date(Date.now() - 15 * 60e3).toISOString());
      if (!used) code = c;
    }
    if (!code) return reply(503, { ok: false, error: "busy" });
    const { data, error } = await db.from("farmer_auth_requests").insert({ mobile, code, site, lang: L(p.lang), user_agent: ua }).select("id").single();
    if (error) { console.error(error.message); return reply(500, { ok: false }); }
    return reply(200, { ok: true, request_id: data.id, code: SITES[site].prefix + "-" + code, wa: FROM });
  }

  // ---- mobile: has the OTP gone out yet? (polled by the site) ----
  if (p.action === "status") {
    const { data } = await db.from("farmer_auth_requests").select("status,expires_at").eq("id", str(p.request_id, 40)).maybeSingle();
    if (!data) return reply(404, { ok: false });
    return reply(200, { ok: true, status: Date.parse(data.expires_at) < Date.now() && data.status !== "verified" ? "expired" : data.status });
  }

  // ---- mobile: verify OTP ----
  if (p.action === "verify") {
    const id = str(p.request_id, 40), otp = str(p.otp, 10).replace(/\D/g, "");
    const { data: rq } = await db.from("farmer_auth_requests").select("*").eq("id", id).maybeSingle();
    if (!rq || rq.status !== "otp_sent") return reply(400, { ok: false, error: "no_otp" });
    if (Date.parse(rq.expires_at) < Date.now()) return reply(400, { ok: false, error: "expired" });
    if (rq.attempts >= 5) return reply(429, { ok: false, error: "too_many" });
    await db.from("farmer_auth_requests").update({ attempts: rq.attempts + 1 }).eq("id", id);
    if (await sha(rq.id + ":" + otp) !== rq.otp_hash) return reply(400, { ok: false, error: "wrong", left: 4 - rq.attempts });
    await db.from("farmer_auth_requests").update({ status: "verified" }).eq("id", id);
    const now = new Date().toISOString();
    let { data: u } = await db.from("farmer_users").select("*").eq("mobile", rq.mobile).maybeSingle();
    const cur = await userFromToken(p.token); // signed up by email on this device: add the mobile to that account
    if (!u && cur && !cur.mobile) { await db.from("farmer_users").update({ mobile: rq.mobile, mobile_verified_at: now, updated_at: now }).eq("id", cur.id); u = { ...cur, mobile: rq.mobile }; }
    if (!u) { const r = await db.from("farmer_users").insert({ mobile: rq.mobile, mobile_verified_at: now, lang: rq.lang, source: rq.site + ":whatsapp_otp" }).select("*").single(); u = r.data; }
    else await db.from("farmer_users").update({ mobile_verified_at: now, updated_at: now }).eq("id", u.id);
    if (!u) return reply(500, { ok: false });
    if (rq.site === "mango") await linkSessions(u.id, rq.mobile, p.sessions);
    const t = await newSession(u.id, ua, rq.site as Site);
    return reply(200, { ok: true, token: t, user: pub(await userFromToken(t)) });
  }

  // ---- email signup with consent for this site's email updates ----
  if (p.action === "email_signup") {
    const email = str(p.email, 160).toLowerCase(), name = str(p.name, 80), village = str(p.village, 120);
    if (!/^[^\s@]+@[^\s@]+\.[a-z]{2,}$/.test(email)) return reply(400, { ok: false, error: "email" });
    if (name.length < 2) return reply(400, { ok: false, error: "name" });
    if (p.consent !== true) return reply(400, { ok: false, error: "consent" });
    const now = new Date().toISOString(), text = str(p.consent_text, 600), list = SITES[site].list;
    const profile = { name, village: village || null, district: str(p.district, 120) || null, state: str(p.state, 60) || null, lang: L(p.lang), updated_at: now };
    const cur = await userFromToken(p.token);
    let id: string | null = null;
    const { data: byEmail } = await db.from("farmer_users").select("id").eq("email", email).maybeSingle();
    if (byEmail) { id = byEmail.id; if (cur && cur.id === id) await db.from("farmer_users").update(profile).eq("id", id); }
    else if (cur && !cur.email) { id = cur.id; await db.from("farmer_users").update({ ...profile, email }).eq("id", id); }
    else { const r = await db.from("farmer_users").insert({ ...profile, email, source: site + ":email_signup", sites: [site] }).select("id").single(); id = r.data?.id ?? null; }
    if (!id) return reply(500, { ok: false });
    await subscribe(id, list, text, site);
    if (cur && cur.id === id) return reply(200, { ok: true, token: str(p.token, 100), user: pub(await userFromToken(p.token)) });
    // An email someone already registered only renews the subscription; it does not log this device in (email is not verified yet).
    if (byEmail) return reply(200, { ok: true, subscribed: true });
    const t = await newSession(id, ua, site);
    return reply(200, { ok: true, token: t, user: pub(await userFromToken(t)) });
  }

  // ---- signed-in actions ----
  const u = await userFromToken(p.token);
  if (!u) return reply(401, { ok: false, error: "login" });
  if (p.action === "me") { await addSite(u.id, site); return reply(200, { ok: true, user: pub(u) }); }
  if (p.action === "update") {
    const patch: Record<string, unknown> = { updated_at: new Date().toISOString() };
    for (const k of ["name", "village", "district", "state"]) if (typeof p[k] === "string") patch[k] = str(p[k], 120) || null;
    if (typeof p.lang === "string") patch.lang = L(p.lang);
    await db.from("farmer_users").update(patch).eq("id", u.id);
    if (typeof p.subscribed === "boolean") {
      const list = SITES[site].list;
      if (p.subscribed) await subscribe(u.id, list, str(p.consent_text, 600), site);
      else await db.from("farmer_subscriptions").update({ unsubscribed_at: new Date().toISOString() }).eq("user_id", u.id).eq("list", list);
    }
    return reply(200, { ok: true, user: pub(await userFromToken(p.token)) });
  }
  if (p.action === "history") {
    const { data } = await db.from("mango_assessments").select("created_at,total_plants,urgent,diagnosis,problems,totals").eq("user_id", u.id).order("created_at", { ascending: false }).limit(10);
    const { data: ex } = await db.from("mango_expert_requests").select("created_at,status").eq("user_id", u.id).order("created_at", { ascending: false }).limit(5);
    return reply(200, { ok: true, checks: data ?? [], expert: ex ?? [] });
  }
  if (p.action === "logout") { await db.from("farmer_sessions").delete().eq("token_hash", await sha(str(p.token, 100))); return reply(200, { ok: true }); }
  return reply(400, { ok: false, error: "action" });
});
