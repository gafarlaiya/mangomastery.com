// Gujarat Bio Organics: DoubleTick incoming-message webhook (Meta Cloud API format).
// 1) A customer replies -> mark their recent lead(s) as replied (stops automatic follow-ups).
// 2) A NEW number messages us -> create a lead in the dashboard. If the chat came from a Click-to-WhatsApp ad,
//    store the ad id, headline and ctwa_clid so Qualified/Won can be reported back to Meta for that exact click.
// 3) Every message is saved in wa_messages (which wakes the WhatsApp AI agent). Delivery statuses are saved too,
//    so we can see messages the team sent from the DoubleTick inbox.
// 4) Farmer login codes ("MM-1234" mangomastery.com, "GN-1234" ganna.in) go to the mango-auth function, which WhatsApps back an OTP.
//    These messages create no lead and do not wake the AI agent.
// URL (DoubleTick > Settings > Webhooks):
//   https://filbmvtclfcrrvxckema.supabase.co/functions/v1/dt-webhook?k=<key in the KEY constant below>
import { createClient } from "jsr:@supabase/supabase-js@2";

const db = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!);
const KEY = "0272daa0e38231a782fd9b2fe15d66d1";
const OUR = ["9978791167", "9978511167"];

type Msg = { from: string; name: string; text: string; referral: any; type: string; wa_id: string; media: string; raw: any };
type Status = { wa_id: string; status: string; to: string; raw: any };

function mediaUrl(m: any): string {
  const t = m?.type;
  const o = t ? m?.[t] : null;
  return String(o?.url ?? o?.link ?? o?.mediaUrl ?? m?.url ?? "");
}

function parse(b: any): { msgs: Msg[]; statuses: Status[] } {
  const msgs: Msg[] = [], statuses: Status[] = [];
  for (const e of b?.entry ?? []) for (const c of e?.changes ?? []) {
    const v = c?.value ?? {};
    const names = new Map<string, string>();
    for (const ct of v.contacts ?? []) names.set(String(ct?.wa_id ?? ""), String(ct?.profile?.name ?? ""));
    for (const m of v.messages ?? []) {
      const from = String(m?.from ?? "").replace(/\D/g, "");
      if (!from) continue;
      const cap = m?.image?.caption ?? m?.video?.caption ?? m?.document?.caption ?? "";
      const text = m?.text?.body ?? m?.button?.text ?? m?.interactive?.button_reply?.title ?? m?.interactive?.list_reply?.title ?? cap ?? "";
      msgs.push({ from, name: names.get(from) ?? "", text: String(text).slice(0, 2000), referral: m?.referral ?? null, type: String(m?.type ?? "text"),
        wa_id: String(m?.id ?? ""), media: mediaUrl(m), raw: m });
    }
    for (const s of v.statuses ?? []) statuses.push({ wa_id: String(s?.id ?? ""), status: String(s?.status ?? ""), to: String(s?.recipient_id ?? "").replace(/\D/g, ""), raw: s });
  }
  const flat = String(b?.from ?? b?.customerNumber ?? b?.customer?.phoneNumber ?? "").replace(/\D/g, "");
  if (!msgs.length && flat) {
    const t = String(b?.message?.type ?? "TEXT").toLowerCase();
    msgs.push({ from: flat, name: String(b?.contact?.name ?? b?.customer?.name ?? b?.contactName ?? ""), text: String(b?.message?.text ?? b?.text ?? "").slice(0, 2000),
      referral: b?.referral ?? null, type: t, wa_id: String(b?.messageId ?? ""), media: String(b?.message?.url ?? ""), raw: b });
  }
  return { msgs: msgs.filter((m) => m.from.length >= 10 && !OUR.some((o) => m.from.endsWith(o))), statuses };
}

const KIND: Record<string, string> = { text: "text", image: "image", video: "video", audio: "audio", voice: "audio", document: "document", button: "button", interactive: "button", location: "location", sticker: "image" };

Deno.serve(async (req) => {
  const url = new URL(req.url);
  if (url.searchParams.get("k") !== KEY) return new Response("forbidden", { status: 403 });
  if (req.method !== "POST") return new Response("ok");
  let b: any = {}; try { b = await req.json(); } catch { return new Response("ok"); }

  const { msgs, statuses } = parse(b);
  const since = new Date(Date.now() - 30 * 24 * 3600e3).toISOString();
  let marked = 0, created = 0, logged = 0;
  for (const m of msgs) {
    const last10 = m.from.slice(-10);
    // Ignore WhatsApp re-deliveries of the same message.
    if (m.wa_id) { const { data: dup } = await db.from("wa_messages").select("id").eq("wa_id", m.wa_id).limit(1); if (dup?.length) continue; }

    // Farmer login code (MM = mangomastery.com, GN = ganna.in): hand it to mango-auth (sends the OTP) and stop here.
    const lc = m.type === "text" && m.text.length < 200 ? m.text.match(/\b(MM|GN)[\s-]?(\d{4})\b/i) : null;
    if (lc) {
      const lang = /[\u0A80-\u0AFF]/.test(m.text) ? "gu" : /[\u0A00-\u0A7F]/.test(m.text) ? "pa" : /[\u0C80-\u0CFF]/.test(m.text) ? "kn" : /[\u0900-\u097F]/.test(m.text) ? "hi" : "en";
      const sk = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
      await fetch(`${Deno.env.get("SUPABASE_URL")}/functions/v1/mango-auth`, {
        method: "POST", headers: { "Content-Type": "application/json", "x-internal": sk, Authorization: `Bearer ${sk}` },
        body: JSON.stringify({ action: "inbound", prefix: lc[1].toUpperCase(), code: lc[2], from: m.from, lang }),
      }).catch((e) => console.error("mango-auth", e));
      // logged as a system message: keeps the duplicate check working and does not wake the AI agent
      await db.from("wa_messages").insert({ phone: m.from, direction: "in", origin: "system", kind: "text", body: m.text, wa_id: m.wa_id || null, payload: { mango_login: true } });
      continue;
    }

    const { data: recent } = await db.from("leads").select("id,phone,site,wa_replied_at,created_at")
      .gte("created_at", since).ilike("phone", `%${last10.slice(-4)}`).order("created_at", { ascending: false });
    const mine = (recent ?? []).filter((l: any) => String(l.phone ?? "").replace(/\D/g, "").endsWith(last10));
    let leadId: string | null = mine[0]?.id ?? null;

    if (mine.length) {
      const ids = mine.filter((l: any) => !l.wa_replied_at && !(l.site === "whatsapp" && Date.now() - new Date(l.created_at).getTime() < 60e3)).map((l: any) => l.id);
      if (ids.length) { await db.from("leads").update({ wa_replied_at: new Date().toISOString() }).in("id", ids); marked += ids.length; }
    } else {
      const r = m.referral ?? {};
      const fromAd = !!(r.ctwa_clid || r.source_type === "ad" || r.source_id);
      const row: Record<string, unknown> = {
        name: m.name || null,
        phone: "+" + m.from,
        country: m.from.startsWith("91") ? (fromAd ? "Gujarat, India" : "India") : null,
        interest: fromAd ? (String(r.headline ?? "").slice(0, 200) || "WhatsApp ad enquiry") : "WhatsApp enquiry",
        form: fromAd ? "Farmer site: WhatsApp ad chat" : "Farmer site: WhatsApp direct chat",
        channel: "whatsapp", site: "whatsapp",
        message: m.text || null,
        utm_source: fromAd ? "facebook" : "whatsapp",
        utm_medium: fromAd ? "click_to_whatsapp" : "direct",
        utm_campaign: fromAd ? String(r.source_id ?? "") || null : null,
        utm_content: fromAd ? String(r.headline ?? "").slice(0, 200) || null : null,
        landing: r.source_url ?? null,
        raw: { source: "doubletick_webhook", referral: fromAd ? r : null, ctwa_clid: r.ctwa_clid ?? null, first_message_type: m.type },
      };
      const { data: ins, error } = await db.from("leads").insert(row).select("id").single();
      if (!error && ins) { created++; leadId = ins.id; } else console.error("insert", error?.message);
    }

    // Save the message; this wakes the AI agent.
    const { error: le } = await db.from("wa_messages").insert({
      phone: m.from, lead_id: leadId, direction: "in", origin: "customer", kind: KIND[m.type] ?? m.type,
      body: m.text || null, media_url: m.media || null, wa_id: m.wa_id || null, payload: m.raw,
    });
    if (!le) logged++; else console.error("wa_messages", le.message);
  }

  // Delivery statuses for messages we (or the team in the DoubleTick inbox) sent.
  for (const s of statuses) {
    if (!s.wa_id || !s.to) continue;
    await db.from("wa_messages").insert({ phone: s.to, direction: "status", origin: "system", kind: "status", body: s.status, wa_id: s.wa_id, payload: s.raw });
  }
  return new Response(JSON.stringify({ marked, created, logged, statuses: statuses.length }), { headers: { "Content-Type": "application/json" } });
});
