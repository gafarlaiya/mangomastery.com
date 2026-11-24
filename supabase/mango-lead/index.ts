import { createClient } from "npm:@supabase/supabase-js@2";

// Mango Mastery v2: saves every answer per question (mango_answers), the full assessment,
// the tool's diagnosis (mango_diagnoses) and "Ask a Mango Expert" call-back requests.
const db = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!);
const ALLOWED = /^https:\/\/((www\.)?mangofarming\.in|(www\.)?mangomastery\.com|([a-z0-9-]+\.)?mangomastery-com\.pages\.dev|([a-z0-9-]+\.)?mango-mastery\.pages\.dev)$|^http:\/\/localhost(:\d+)?$/;
const str = (v: unknown, n: number) => typeof v === "string" ? v.trim().slice(0, n) : "";
const KEY = /^[a-zA-Z][a-zA-Z0-9_]{0,39}$/;
const LEVELS = new Set(["likely", "possible", "info"]);
async function sha(x: string) {
  const b = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(x));
  return [...new Uint8Array(b)].map((v) => v.toString(16).padStart(2, "0")).join("");
}
// Signed-in farmer (mango-auth session token) -> user id
async function userId(t: unknown): Promise<string | null> {
  const s = typeof t === "string" ? t : "";
  if (!/^[a-f0-9]{64}$/.test(s)) return null;
  const { data } = await db.from("farmer_sessions").select("user_id,expires_at").eq("token_hash", await sha(s)).maybeSingle();
  return data && Date.parse(data.expires_at) > Date.now() ? data.user_id : null;
}

type Ans = { g?: number; k?: string; v?: unknown };
function cleanAnswers(list: unknown, session_id: string, lang: string, flow: string) {
  if (!Array.isArray(list)) return [];
  const now = new Date().toISOString();
  return list.slice(0, 120).filter((a: Ans) => a && typeof a.k === "string" && KEY.test(a.k)).map((a: Ans) => {
    const arr = Array.isArray(a.v);
    return {
      session_id, group_no: Math.max(0, Math.min(20, Math.floor(Number(a.g) || 0))), question_key: a.k as string,
      value: arr ? null : str(String(a.v ?? ""), 200),
      vals: arr ? (a.v as unknown[]).slice(0, 30).map((x) => str(String(x), 60)) : [],
      lang, flow_version: flow, updated_at: now,
    };
  });
}

Deno.serve(async (req) => {
  const origin = req.headers.get("origin") ?? "";
  const cors = {
    "Access-Control-Allow-Origin": ALLOWED.test(origin) ? origin : "https://mangofarming.in",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "content-type",
    "Vary": "Origin",
    "Content-Type": "application/json",
  };
  const reply = (status: number, body: unknown) => new Response(JSON.stringify(body), { status, headers: cors });
  if (req.method === "OPTIONS") return new Response(null, { status: 204, headers: cors });
  if (req.method !== "POST") return reply(405, { ok: false });
  if (!ALLOWED.test(origin)) return reply(403, { ok: false });

  const raw = await req.text();
  if (raw.length > 60000) return reply(413, { ok: false });
  let p: Record<string, any>;
  try { p = JSON.parse(raw); } catch { return reply(400, { ok: false }); }
  if (p.website) return reply(200, { ok: true }); // honeypot

  const session_id = str(p.session_id, 60);
  if (!/^[a-zA-Z0-9-]{8,60}$/.test(session_id)) return reply(400, { ok: false, error: "session" });
  const lang = str(p.lang, 5), flow = str(p.flow_version, 10) || "v1";
  const now = new Date().toISOString();

  // 1) answers saved step by step (no contact details needed)
  if (p.event === "answers") {
    const rows = cleanAnswers(p.answers, session_id, lang, flow);
    if (!rows.length) return reply(200, { ok: true });
    const { error } = await db.from("mango_answers").upsert(rows, { onConflict: "session_id,group_no,question_key" });
    if (error) { console.error(error.message); return reply(500, { ok: false }); }
    return reply(200, { ok: true });
  }

  // 2) WhatsApp click: stamps the assessment
  if (p.event === "whatsapp_click") {
    const { error } = await db.from("mango_assessments").update({ whatsapp_clicked_at: now, updated_at: now }).eq("session_id", session_id);
    return error ? reply(500, { ok: false }) : reply(200, { ok: true });
  }

  const mobile = str(p.mobile, 15).replace(/\D/g, "").slice(-10);
  const name = str(p.name, 80);
  if (!/^[6-9]\d{9}$/.test(mobile)) return reply(400, { ok: false, error: "mobile" });
  if (name.length < 2) return reply(400, { ok: false, error: "name" });

  const uid = await userId(p.auth);
  if (uid) {  // fill empty profile fields from what the farmer typed
    const { data: u } = await db.from("farmer_users").select("name,village,district").eq("id", uid).maybeSingle();
    const fill: Record<string, string> = {};
    if (u && !u.name) fill.name = name;
    if (u && !u.village && str(p.village, 120)) fill.village = str(p.village, 120);
    if (u && !u.district && str(p.district, 120)) fill.district = str(p.district, 120);
    if (Object.keys(fill).length) await db.from("farmer_users").update(fill).eq("id", uid);
  }

  // 3) Ask a Mango Expert: call-back request
  if (p.event === "expert") {
    const { error } = await db.from("mango_expert_requests").insert({
      session_id, name, mobile, village: str(p.village, 120), district: str(p.district, 120),
      question: str(p.question, 1000), topic: str(p.topic, 200), lang, source_page: str(p.source_page, 200), user_id: uid,
    });
    if (error) { console.error(error.message); return reply(500, { ok: false }); }
    await db.from("mango_assessments").update({ expert_requested_at: now, updated_at: now }).eq("session_id", session_id);
    return reply(200, { ok: true });
  }

  // 4) full assessment (on result, and again when the farmer adjusts the plan)
  const diagnosis = Array.isArray(p.diagnosis) ? p.diagnosis.slice(0, 12)
    .filter((d: any) => d && KEY.test(String(d.k)) && LEVELS.has(String(d.l))).map((d: any) => ({ k: String(d.k), l: String(d.l) })) : [];
  const answers = cleanAnswers(p.answers, session_id, lang, flow);
  const ansObj: Record<string, unknown> = {};
  for (const a of answers) ansObj[`${a.group_no}.${a.question_key}`] = a.vals.length ? a.vals : a.value;
  const month = Number.isFinite(+p.month) ? Math.max(1, Math.min(12, Math.round(+p.month))) : null;

  const { error } = await db.from("mango_assessments").upsert({
    session_id, name, mobile, lang,
    village: str(p.village, 120), district: str(p.district, 120), farm_name: str(p.farm_name, 120),
    total_plants: Number.isFinite(+p.total_plants) ? Math.min(Math.round(+p.total_plants), 10000000) : null,
    problems: Array.isArray(p.problems) ? p.problems.slice(0, 30).map((x: unknown) => str(x, 40)) : [],
    groups: Array.isArray(p.groups) ? p.groups.slice(0, 20) : [],
    totals: p.totals && typeof p.totals === "object" ? p.totals : {},
    plan_options: p.plan_options && typeof p.plan_options === "object" ? p.plan_options : {},
    diagnosis, answers: ansObj, urgent: !!p.urgent, month, flow_version: flow, ...(uid ? { user_id: uid } : {}),
    utm: p.utm && typeof p.utm === "object" ? p.utm : {},
    page_url: str(p.page_url, 500), referrer: str(p.referrer, 500),
    user_agent: str(req.headers.get("user-agent"), 300), updated_at: now,
  }, { onConflict: "session_id" });
  if (error) { console.error(error.message); return reply(500, { ok: false }); }

  if (answers.length) {
    const r = await db.from("mango_answers").upsert(answers, { onConflict: "session_id,group_no,question_key" });
    if (r.error) console.error(r.error.message);
  }
  // keep the diagnosis table in step with the latest result, without touching rows the team has reviewed
  const keys = diagnosis.map((d: any) => d.k);
  await db.from("mango_diagnoses").delete().eq("session_id", session_id).is("team_verdict", null).not("cause_key", "in", `(${keys.length ? keys.join(",") : "_"})`);
  if (diagnosis.length) {
    const r = await db.from("mango_diagnoses").upsert(diagnosis.map((d: any) => ({ session_id, cause_key: d.k, level: d.l, rule_version: flow, evidence: {} })), { onConflict: "session_id,cause_key", ignoreDuplicates: false });
    if (r.error) console.error(r.error.message);
  }
  return reply(200, { ok: true });
});
