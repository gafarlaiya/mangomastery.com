# -*- coding: utf-8 -*-
"""Builds mangofarming.in (was mangomastery.com) into dist/. Run: python3 build.py"""
import os, re, json, shutil, html, datetime
from content import *

ROOT = os.path.dirname(os.path.abspath(__file__))
SRC, OUT = os.path.join(ROOT, "src"), os.path.join(ROOT, "dist")
SITE = "https://mangofarming.in"
BUILD_MONTH = datetime.date.today().month - 1  # 0-based
esc = html.escape
GTM = "GTM-5R35GWSQ"
VID = "https://www.gujaratbio.com/assets/media/mango"
FONTS = {
 "gu": "family=Baloo+Bhai+2:wght@700;800&family=Noto+Sans+Gujarati:wght@400;600",
 "hi": "family=Baloo+2:wght@700;800&family=Noto+Sans+Devanagari:wght@400;600",
 "en": "family=Baloo+2:wght@700;800&family=Noto+Sans:wght@400;600",
}
LANGNAME = [("gu", "ગુજરાતી", "/"), ("hi", "हिन्दी", "/hi/"), ("en", "EN", "/en/")]
WA_ICON = '<svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path fill="currentColor" d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.8 11.9 11.9 0 0 0 4.6 4c1.7.7 2.3.8 3.2.6a2.7 2.7 0 0 0 1.8-1.2 2.2 2.2 0 0 0 .2-1.2c-.1-.1-.3-.2-.5-.3z"/></svg>'
MANGO = '<svg viewBox="0 0 32 32" width="28" height="28" aria-hidden="true"><path d="M16.5 7c6 0 10.5 4.6 10.5 10.6C27 24 22.6 28 16.8 28 9.6 28 5 23 5 17.4 5 11.4 10 7 16.5 7z" fill="#F7A600"/><path d="M16.5 7c-1-2.7-.2-4.6 1.6-5.6" stroke="#5b3a1a" stroke-width="1.6" fill="none" stroke-linecap="round"/><path d="M17.8 6.6c2.3-3.5 6.4-4.4 9.4-3.3-1.4 3.1-5.1 4.9-9.4 3.3z" fill="#3E8E41"/></svg>'

def wa(text=""):
    return f"https://wa.me/{WA}" + (f"?text={html.escape(__import__('urllib.parse').parse.quote(text))}" if text else "")

def head(lang, title, desc, path, extra_ld=(), alt=None, img="/media/og.jpg", robots=None):
    ld = "".join(f'<script type="application/ld+json">{json.dumps(x, ensure_ascii=False)}</script>' for x in extra_ld)
    alts = "".join(f'<link rel="alternate" hreflang="{l}" href="{SITE}{u}">' for l, u in (alt or ())) + (f'<link rel="alternate" hreflang="x-default" href="{SITE}/">' if alt else "")
    return f"""<!doctype html>
<html lang="{lang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{esc(title)}</title>
<meta name="description" content="{esc(desc)}">
<link rel="canonical" href="{SITE}{path}">{alts}
{f'<meta name="robots" content="{robots}">' if robots else ''}
<meta property="og:title" content="{esc(title)}">
<meta property="og:description" content="{esc(desc)}">
<meta property="og:type" content="website">
<meta property="og:url" content="{SITE}{path}">
<meta property="og:image" content="{SITE}{img}">
<meta property="og:locale" content="{ {'gu':'gu_IN','hi':'hi_IN','en':'en_IN'}[lang] }">
<meta name="twitter:card" content="summary_large_image">
<meta name="theme-color" content="#123524">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<script>
window.dataLayer=window.dataLayer||[];function gtag(){{dataLayer.push(arguments)}}
var c=null;try{{c=localStorage.getItem('mm_consent')}}catch(e){{}}
var g=c==='yes'?'granted':'denied';
gtag('consent','default',{{ad_storage:g,analytics_storage:g,ad_user_data:g,ad_personalization:g}});
</script>
<script>(function(){{var done=0,ev=['scroll','pointerdown','touchstart','keydown','mousemove'];function go(){{if(done)return;done=1;(function(w,d,s,l,i){{w[l]=w[l]||[];w[l].push({{'gtm.start':new Date().getTime(),event:'gtm.js'}});var f=d.getElementsByTagName(s)[0],j=d.createElement(s);j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i;f.parentNode.insertBefore(j,f)}})(window,document,'script','dataLayer','{GTM}')}}function t(){{ev.forEach(function(e){{addEventListener(e,go,{{passive:true,once:true}})}});setTimeout(go,10000)}}if(document.readyState==='complete')t();else addEventListener('load',t)}})();</script>
<link rel="stylesheet" href="/site.css?v={VER}">
<script>(function(){{function f(){{var l=document.createElement('link');l.rel='stylesheet';l.href='/fonts.css?v={VER}';document.head.appendChild(l)}}if(document.readyState==='complete')f();else addEventListener('load',f)}})();</script><noscript><link rel="stylesheet" href="/fonts.css?v={VER}"></noscript>
{ld}
</head>
"""

def header(lang, here):
    h = HOME[lang]
    home = {"gu": "/", "hi": "/hi/", "en": "/en/"}[lang]
    nav = "".join(f'<a href="{u}"{" aria-current=\"page\"" if u == here else ""}>{t}</a>' for u, t in h["nav"])
    langs = "".join(f'<a href="{u}" lang="{l}" class="{"on" if l == lang else ""}">{n}</a>' for l, n, u in LANGNAME)
    return f"""<body class="l-{lang}">
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id={GTM}" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<header class="top"><div class="wrap top-in"><a class="mark" href="{home}">{MANGO}<span>Mango Farming</span></a><nav class="nav" aria-label="Main">{nav}</nav><div class="langs" aria-label="Language">{langs}</div><a class="acct" id="acct" href="/login/" data-in="{ {"gu":"મારું ખાતું","hi":"मेरा खाता","en":"My account"}[lang] }">{ {"gu":"લૉગિન","hi":"लॉगिन","en":"Login"}[lang] }</a></div></header>
"""

def footer(lang):
    h = HOME[lang]
    t = {"gu": ("મફત ચકાસણી", "ગોપનીયતા", "અમારા વિશે", "આંબાની માર્ગદર્શિકા સામાન્ય માહિતી માટે છે. તમારા વિસ્તાર માટે કૃષિ યુનિવર્સિટી કે KVK ની ભલામણ પણ જુઓ."),
         "hi": ("मुफ़्त जाँच", "गोपनीयता", "हमारे बारे में", "जानकारी सामान्य मार्गदर्शन के लिए है. अपने क्षेत्र के लिए कृषि विश्वविद्यालय या KVK की सिफ़ारिश भी देखें."),
         "en": ("Free check", "Privacy", "About us", "Guides are general information. Also follow your agricultural university or KVK for your area.")}[lang]
    chk = "/check/" + ("" if lang == "gu" else f"?lang={lang}")
    return f"""<footer class="foot"><div class="wrap foot-in">
<div><a class="mark" href="/">{MANGO}<span>Mango Farming</span></a><p>{esc(h['co_s'])}</p></div>
<ul><li><a href="{chk}">{t[0]}</a></li><li><a href="/guides/">{"માર્ગદર્શિકા" if lang=="gu" else "Guides (ગુજરાતી)"}</a></li><li><a href="/calendar/">{"કેલેન્ડર" if lang=="gu" else "Calendar (ગુજરાતી)"}</a></li><li><a href="/about/">{t[2]}</a></li><li><a href="/privacy/">{t[1]}</a></li></ul>
<div><p><b>WhatsApp / {"ફોન" if lang=="gu" else "फ़ोन" if lang=="hi" else "Phone"}</b><br><a href="{wa()}">99787 91167</a></p><p class="small">© Gujarat Bio Organics Pvt. Ltd., Bhavnagar, Gujarat</p></div>
</div><p class="wrap small disclaim">{t[3]}</p></footer>
<div class="sticky" id="sticky"><a class="btn" href="{chk}" data-track="sticky_check">{h['sticky']}</a><a class="btn wa" href="{wa()}" data-track="whatsapp_direct" aria-label="WhatsApp">{WA_ICON}</a></div>
<div class="consent" id="consent" hidden><span>{ {'gu':'વેબસાઇટ સુધારવા અને જાહેરાત માપવા અમે cookies વાપરીએ છીએ.','hi':'वेबसाइट सुधारने और विज्ञापन मापने के लिए हम cookies का उपयोग करते हैं।','en':'We use cookies to improve the site and measure ads.'}[lang] }</span><div><button data-consent="no">{ {'gu':'જરૂરી જ','hi':'केवल जरूरी','en':'Necessary only'}[lang] }</button><button class="y" data-consent="yes">{ {'gu':'બરાબર','hi':'ठीक है','en':'OK'}[lang] }</button></div></div>
<script src="/site.js?v={VER}" defer></script>
</body></html>"""

STAGE_IMG = {"flush": "orchard-wide.webp", "rest": "old-orchard.webp", "flower": "flowering.webp", "fruit": "raw-mango.webp", "harvest": "harvest.webp"}

def sm(f):
    return f if f in ("fruit-on-tree.webp",) or f.endswith(".jpg") else f[:-5] + "-s.webp"

def stage_of(m):  # m 1..12
    for k, a, b in STAGES:
        if (a <= b and a <= m <= b) or (a > b and (m >= a or m <= b)): return k
    return "rest"

def season_json(lang):
    return json.dumps({"m": MONTH[lang], "s": [list(x) for x in SEASON[lang]], "st": [stage_of(i + 1) for i in range(12)], "sn": STAGE_NAME[lang],
                       "g": {"gu": "/guides/", "hi": "/guides/", "en": "/guides/"}[lang], "w": HOME[lang]["watch"], "img": STAGE_IMG, "now": HOME[lang]["now"]}, ensure_ascii=False)

def month_card(lang, i):
    hd, tasks, watch, slug = SEASON[lang][i]
    href = "/calendar/" if slug == "calendar" else f"/guides/{slug}/"
    more = {"gu": "વિગત વાંચો", "hi": "विस्तार से (ગુજરાતી)", "en": "Read more (Gujarati)"}[lang]
    return (f'<p class="mc-k"><span class="dot"></span><span id="mc-m">{MONTH[lang][i]}</span> · <span id="mc-s">{STAGE_NAME[lang][stage_of(i+1)]}</span></p>'
            f'<h3 id="mc-h">{esc(hd)}</h3><ul class="ticks" id="mc-t">' + "".join(f"<li>{esc(t)}</li>" for t in tasks) + "</ul>"
            f'<p class="watch" id="mc-w"><b>{HOME[lang]["watch"]}:</b> {esc(watch)}</p><a class="more" id="mc-a" href="{href}">{more}</a>')

def yearbar(lang):
    cells = []
    for i in range(12):
        st = stage_of(i + 1)
        cells.append(f'<button class="yb-m st-{st}{" on" if i == BUILD_MONTH else ""}" data-m="{i}" aria-pressed="{"true" if i == BUILD_MONTH else "false"}"><span class="yb-n">{MONTH[lang][i][:3] if lang=="en" else MONTH[lang][i]}</span></button>')
    legend = "".join(f'<li><i class="st-{k}"></i>{STAGE_NAME[lang][k]}</li>' for k, _, _ in STAGES)
    return f'<div class="yb" role="group" aria-label="{HOME[lang]["year_t"]}">{"".join(cells)}</div><ul class="legend">{legend}</ul>'

def reels(lang, with_gafar=False):
    idx = {"gu": 0, "hi": 1, "en": 2}[lang]
    items = []
    for f, name, line in VIDEOS:
        items.append(f'<figure class="reel"><button class="reel-b" data-src="{VID}/{f}.mp4" data-v="{f}" aria-label="{esc(name[idx])}: {esc(line[idx])}"><img src="/media/{f}-poster.webp" alt="" width="400" height="711" loading="lazy" decoding="async"><span class="play"></span></button><figcaption><b>{esc(name[idx])}</b>{esc(line[idx])}</figcaption></figure>')
    if with_gafar:
        cap = {"gu": ("ગફાર લૈયા, Gujarat Bio Organics", "સારી કેરી કેમ જરૂરી છે (હિન્દી)"), "hi": ("गफ़ार लैया, Gujarat Bio Organics", "अच्छा आम क्यों ज़रूरी है"), "en": ("Gafar Laiya, Gujarat Bio Organics", "Why good mangoes matter (Hindi)")}[lang]
        items.append(f'<figure class="reel"><button class="reel-b" data-src="{VID}/gafar-message.mp4" data-v="gafar" aria-label="{esc(cap[0])}"><img src="/media/gafar-poster.webp" alt="" width="400" height="711" loading="lazy" decoding="async"><span class="play"></span></button><figcaption><b>{esc(cap[0])}</b>{esc(cap[1])}</figcaption></figure>')
    return f'<div class="reels">{"".join(items)}</div>'

def faq_ld(pairs): return {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": q, "acceptedAnswer": {"@type": "Answer", "text": a}} for q, a in pairs]}
def faq_html(pairs): return '<div class="faq">' + "".join(f"<details><summary>{esc(q)}</summary><p>{esc(a)}</p></details>" for q, a in pairs) + "</div>"
ORG = {"@context": "https://schema.org", "@type": "Organization", "@id": SITE + "/#org", "name": "Gujarat Bio Organics Pvt. Ltd.", "url": "https://www.gujaratbio.com/",
       "telephone": "+91-9978791167", "address": {"@type": "PostalAddress", "addressLocality": "Bhavnagar", "addressRegion": "Gujarat", "addressCountry": "IN"}, "foundingDate": "2006"}

def home(lang):
    h = HOME[lang]; i = BUILD_MONTH; path = {"gu": "/", "hi": "/hi/", "en": "/en/"}[lang]
    chk = "/check/" + ("?" if lang == "gu" else f"?lang={lang}&")
    ages = "".join(f'<a class="age" href="{chk}age={a}" data-track="age_chip">{a}<small> {h["yr"]}</small></a>' for a in AGES)
    idx = {"gu": 0, "hi": 1, "en": 2}[lang]
    tiles = "".join(f'<a class="tile" href="/guides/{s}/"><img src="/media/{sm(im)}" alt="" width="320" height="200" loading="lazy" decoding="async"><span>{esc(t[idx])}{h["gu_only"] and "<small>" + h["gu_only"] + "</small>"}</span></a>' for t, s, im in PROBLEMS)
    how = "".join(f'<li><b>{esc(a)}</b><span>{esc(b)}</span></li>' for a, b in h["how"])
    guides = ""
    if lang == "gu":
        guides = '<section class="sec"><div class="wrap"><h2>' + h["guides_t"] + '</h2><ul class="glist">' + "".join(
            f'<li><a href="/guides/{g["slug"]}/"><b>{esc(g["h1"])}</b><span>{esc(g["desc"][:110])}…</span></a></li>' for g in sorted(GUIDES, key=lambda g: GUIDE_ORDER.index(g["slug"]))) + '</ul></div></section>'
    ld = [ORG, {"@context": "https://schema.org", "@type": "WebSite", "name": "Mango Farming", "url": SITE + "/", "inLanguage": lang, "publisher": {"@id": SITE + "/#org"}}, faq_ld(h["faq"])]
    alt = [("gu", "/"), ("hi", "/hi/"), ("en", "/en/")]
    body = header(lang, path) + f"""<main>
<section class="hero"><div class="wrap hero-in">
<div class="hero-t">
<p class="live"><span class="pulse"></span><span id="hero-m">{MONTH[lang][i]}</span> · {h['month_label']}</p>
<h1 id="hero-h">{esc(SEASON[lang][i][0])}</h1>
<p class="hero-lead">{h['lead']}</p>
<div class="hero-b"><a class="btn" href="{chk[:-1]}" data-track="hero_check">{h['cta']}</a><a class="ghost" href="#year">{h['see']}</a></div>
</div>
<figure class="hero-p"><picture><source media="(max-width:820px)" srcset="/media/orchard-16x10-s.webp 400w, /media/orchard-16x10.webp 640w" sizes="92vw" width="640" height="400"><img src="/media/orchard-4x5.webp" srcset="/media/orchard-4x5-s.webp 480w, /media/orchard-4x5.webp 640w" sizes="40vw" alt="{ {'gu':'ફળથી લદાયેલો આંબાનો બગીચો','hi':'फलों से लदा आम का बाग़','en':'A mango orchard heavy with fruit'}[lang] }" width="640" height="800" fetchpriority="high"></picture><figcaption>{ {'gu':'દિવ્યેશભાઈનો બગીચો, વલસાડ','hi':'दिव्येशभाई का बाग़, वलसाड','en':'Divyeshbhai’s orchard, Valsad'}[lang] }</figcaption></figure>
</div></section>
<section class="agebox"><div class="wrap"><div class="agecard"><h2>{h['ages_q']}</h2><p>{h['ages_hint']}</p><div class="ages">{ages}</div></div></div></section>
<section class="sec" id="year"><div class="wrap"><h2>{h['year_t']}</h2><p class="sub">{h['year_s']}</p>{yearbar(lang)}
<div class="mrow"><div class="mcard" id="mcard">{month_card(lang, i)}</div><figure class="mimg"><img id="mc-img" src="/media/{STAGE_IMG[stage_of(i+1)]}" alt="" width="640" height="400" loading="lazy"></figure></div>{f'<p><a class="more" href="/calendar/">{h["read"]}</a></p>' if h['read'] else ''}</div></section>
<section class="sec tint"><div class="wrap"><h2>{h['prob_t']}</h2><p class="sub">{h['prob_s']}</p><div class="tiles">{tiles}</div></div></section>
<section class="sec dark" id="videos"><div class="wrap"><h2>{h['vid_t']}</h2><p class="sub">{h['vid_s']}</p>{reels(lang, lang == 'hi')}<p class="note">{h['vid_note']}</p></div></section>
<section class="sec"><div class="wrap narrow"><h2>{h['how_t']}</h2><ol class="how">{how}</ol><a class="btn" href="{chk[:-1]}" data-track="how_check">{h['cta']}</a></div></section>
{kit_band(lang)}
{ask_band(lang)}
{guides}
<section class="sec tint"><div class="wrap narrow"><h2>{h['faq_t']}</h2>{faq_html(h['faq'])}</div></section>
<section class="sec"><div class="wrap narrow co"><img src="/media/bottle.jpg" alt="Immunity Mango Special" width="80" height="184" loading="lazy"><div><h2 class="h3">{h['co_t']}</h2><p>{h['co_s']}</p><a class="btn wa" href="{wa()}" data-track="whatsapp_direct">{WA_ICON} WhatsApp 99787 91167</a></div></div></section>
</main>
<script type="application/json" id="season">{season_json(lang)}</script>
""" + footer(lang)
    return head(lang, h["title"], h["desc"], path, ld, alt) + body

def kit_band(lang):
    t = KIT_T[lang]
    imgs = "".join(f'<img src="/media/{p["img"]}" alt="{p["name"]}" width="{w}" height="300" loading="lazy">' for p, w in zip([x for x in KIT_PRODUCTS if x["img"]], (250, 130, 130)))
    return f'<section class="sec tint"><div class="wrap kitband"><div><h2>{t[0]}</h2><p class="sub">{t[1]}</p><a class="btn" href="/mango-kit/" data-track="home_kit">{t[2]}</a></div><div class="kitimgs">{imgs}</div></div></section>'

def ask_band(lang):
    t = ASK[lang]; chk = "/check/" + ("" if lang == "gu" else f"?lang={lang}")
    return f'''<section class="sec dark askband" id="ask"><div class="wrap"><h2>👨‍🌾 {t[0]}</h2><p class="sub">{t[1]}</p>
<div class="askb"><a class="btn wa" href="{wa("નમસ્તે, મારા આંબાનો ફોટો મોકલું છું.")}" data-track="ask_whatsapp">{WA_ICON} {t[2][0]}</a><a class="btn light" href="tel:+919978791167" data-track="ask_call">📞 {t[2][1]}: 99787 91167</a><a class="btn" href="/ask/" data-track="ask_form">{t[2][2]}</a></div></div></section>'''

def dose_rows():
    js = open(os.path.join(SRC, "calc.js"), encoding="utf-8").read()
    d = re.findall(r"'([0-9+\-]+)':\s*\{\s*g:\s*(\d+),\s*ml:\s*(\d+)\s*\}", js)
    sp = re.findall(r"'(\d+)':\s*\{\s*w:\s*(\d+),\s*ml:\s*(\d+)\s*\}", js)
    return d, sp

def kit():
    p = "/mango-kit/"
    d, sp = dose_rows()
    cards = ""
    for x in KIT_PRODUCTS:
        img = f'<img src="/media/{x["img"]}" alt="{x["name"]}" loading="lazy" width="200" height="300">' if x["img"] else '<div class="noimg">🧪</div>'
        cards += f'<article class="pcard"><div class="pimg">{img}</div><div><p class="role">{x["role"]}</p><h3>{x["name"]}</h3><p>{x["what"]}</p><p class="small"><b>કોના માટે:</b> {", ".join(x["for_"])}</p><p class="pack"><b>પૅક સાઇઝ:</b> {x["pack"]}</p><p class="small"><a href="https://www.gujaratbio.com/gu/products/{x["slug"]}">{x["name"]}: લેબલ અને વિગત gujaratbio.com પર</a></p></div></article>'
    drows = "".join(f"<tr><td>{a} વર્ષ</td><td>{g} g</td><td>{ml} ml</td><td>{int(ml)/2:g} ml</td></tr>" for a, g, ml in d)
    srows = "".join(f"<tr><td>{w} L</td><td>{ml} ml</td><td>{ml} ml</td></tr>" for k, w, ml in sp)
    steps = ["આંબાના ઘેરાવા / ડ્રિપ લાઇન પાસે ગોળ રિંગ બનાવો.", "Immunity Granules રિંગમાં સરખા આપો.", "Mango Special અને (લીધું હોય તો) NPK Biofertilizer પાણીમાં ભેળવો.", "આ દ્રાવણ રિંગમાં આપો, માટીથી ઢાંકો અને પિયત આપો."]
    ld = [crumbs([("Mango Farming", "/"), ("Immunity Mango Kit", p)]), faq_ld(KIT_FAQ), ORG]
    return p, head("gu", "Immunity Mango Kit: આંબા માટે ઉત્પાદનો, ડોઝ, પૅક સાઇઝ | Mango Farming", "Immunity Mango Kit: Granules, Mango Special, NPK Biofertilizer અને Gold. આંબાની ઉંમર પ્રમાણે છોડ દીઠ ડોઝ, વાપરવાની રીત, પૅક સાઇઝ અને ખેડૂતોના વિડિયો.", p, ld, img="/media/p-immunity-mango-special.webp") + header("gu", p) + f"""<main>
<section class="ghero"><div class="wrap ghero-in"><div><nav class="bc"><a href="/">Mango Farming</a> › મેંગો કિટ</nav><h1>Immunity Mango Kit</h1>
<p class="lead">જમીન, મૂળ અને આંબા માટે ચાર ઉત્પાદનો. તમારા આંબાની ઉંમર અને સંખ્યા પ્રમાણે જથ્થો, મફત ચકાસણીમાં તરત.</p>
<div class="hero-b"><a class="btn" href="/check/" data-track="kit_check">મારો જથ્થો ગણો</a><a class="ghost" href="{wa("નમસ્તે, Immunity Mango Kit વિશે જાણવું છે.")}" data-track="kit_whatsapp">ભાવ WhatsApp પર પૂછો</a></div></div>
<figure class="kitfig">{"".join(f'<img src="/media/{x["img"]}" alt="{x["name"]}" width="{w}" height="300">' for x, w in zip([y for y in KIT_PRODUCTS if y["img"]], (250, 130, 130)))}</figure></div></section>
<section class="sec"><div class="wrap"><h2>કિટમાં શું છે</h2><div class="pcards">{cards}</div></div></section>
<section class="sec tint"><div class="wrap narrow prose"><h2 id="how">વાપરવાની રીત</h2><ol>{"".join(f"<li>{s}</li>" for s in steps)}</ol>
<h3>આંબાની ઉંમર પ્રમાણે છોડ દીઠ જથ્થો</h3><p class="small">આ અમારા ડોઝ ચાર્ટનો સામાન્ય ("આપની સલાહ પ્રમાણે") જથ્થો છે. તમારા જવાબો પ્રમાણે ચકાસણીમાં જથ્થો થોડો બદલાઈ શકે.</p>
<table><thead><tr><th>આંબાની ઉંમર</th><th>Immunity Granules (રિંગમાં)</th><th>Mango Special (ડ્રેન્ચિંગ)</th><th>NPK Biofertilizer (લીધું હોય તો)</th></tr></thead><tbody>{drows}</tbody></table>
<h3>ફોલિયર સ્પ્રે: એક ટાંકી/પંપ દીઠ</h3><table><thead><tr><th>પંપ / ટાંકી</th><th>Mango Special</th><th>Immunity Gold</th></tr></thead><tbody>{srows}</tbody></table>
<p class="small">ક્યારે આપવું અને કેટલા રાઉન્ડ તે તમારા બગીચાની સ્થિતિ અને મહિના પ્રમાણે ટીમ જણાવશે.</p></div></section>
<section class="sec dark" id="videos"><div class="wrap"><h2>ખેડૂતો પોતે શું કહે છે</h2><p class="sub">તેમના બગીચા, તેમના શબ્દો.</p>{reels("gu")}<p class="note">{HOME['gu']['vid_note']}</p></div></section>
<section class="sec"><div class="wrap narrow"><h2>વારંવાર પુછાતા પ્રશ્નો</h2>{faq_html(KIT_FAQ)}{cta_card("તમારા બગીચા માટે કેટલું જોઈએ?")}</div></section>
{ask_band("gu")}
</main>""" + footer("gu")

def ask():
    p = "/ask/"
    topics = [("flowering", "મોર / ફૂલ"), ("drop", "ફળ ખરવાં"), ("dying", "આંબા સુકાવા"), ("pest", "જીવાત / રોગ"), ("soil", "જમીન / ખાતર"), ("kit", "મેંગો કિટ / ભાવ"), ("other", "બીજું")]
    chips = "".join(f'<label class="chip"><input type="checkbox" name="topic" value="{k}"><span>{t}</span></label>' for k, t in topics)
    return p, head("gu", "મેંગો એક્સપર્ટને પૂછો: આંબાની તકલીફ માટે મફત સલાહ | Mango Farming", "આંબાની કોઈ પણ તકલીફ માટે Gujarat Bio Organics ના મેંગો એક્સપર્ટ સાથે વાત કરો: WhatsApp પર ફોટો, ફોન, અથવા કૉલ-બૅક ફોર્મ. મફત.", p, [crumbs([("Mango Farming", "/"), ("નિષ્ણાતને પૂછો", p)]), ORG]) + header("gu", p) + f"""<main>
<section class="ghero plain"><div class="wrap"><nav class="bc"><a href="/">Mango Farming</a> › નિષ્ણાતને પૂછો</nav><h1>મેંગો એક્સપર્ટને પૂછો</h1><p class="lead">આંબાની કોઈ પણ તકલીફ માટે અમારા નિષ્ણાત સાથે સીધી વાત કરો. મફત.</p></div></section>
<section class="sec"><div class="wrap askgrid">
<div class="askcol"><h2 class="h3">સૌથી ઝડપી રસ્તા</h2>
<a class="btn wa" href="{wa("નમસ્તે, મારા આંબાનો ફોટો મોકલું છું.")}" data-track="ask_whatsapp">{WA_ICON} WhatsApp પર ફોટો મોકલો</a>
<a class="btn light2" href="tel:+919978791167" data-track="ask_call">📞 ફોન કરો: 99787 91167</a>
<p class="small">ફોટા મોકલો તો આ ચાર: આખો આંબો, તકલીફ નજીકથી, થડનો નીચલો ભાગ, થડ પાસેની જમીન.</p></div>
<form class="askform" id="askform" novalidate><h2 class="h3">અથવા અમે તમને ફોન કરીએ</h2>
<label>તમારું નામ<input name="name" autocomplete="name" required></label>
<label>મોબાઇલ નંબર (WhatsApp)<input name="mobile" type="tel" inputmode="numeric" maxlength="14" required></label>
<label>ગામ<input name="village" required></label>
<label>તાલુકો / જિલ્લો (મરજિયાત)<input name="district"></label>
<fieldset><legend>શેના વિશે?</legend><div class="chips">{chips}</div></fieldset>
<label>તમારો સવાલ (મરજિયાત)<textarea name="question" rows="3" maxlength="800"></textarea></label>
<input class="hp" name="website" tabindex="-1" autocomplete="off" aria-hidden="true">
<p class="err" id="askerr" hidden></p>
<button class="btn" type="submit">મને ફોન કરો</button>
<p class="small">તમારી માહિતી ફક્ત અમારી ટીમ તમને ફોન કરવા વાપરશે. <a href="/privacy/">ગોપનીયતા</a></p>
</form>
<div class="askok" id="askok" hidden><h2 class="h3">✅ થઈ ગયું</h2><p>અમારા મેંગો એક્સપર્ટ જલ્દી ફોન કરશે. ત્યાં સુધી તમારા બગીચાની <a href="/check/">મફત ચકાસણી</a> કરી લો.</p></div>
</div></section></main>""" + footer("gu")

CONSENT_GU = "હું સંમતિ આપું છું કે Gujarat Bio Organics (Mango Farming) મને આ ઈમેઇલ પર આંબાની સારી ખેતી માટે શૈક્ષણિક માહિતી, જ્ઞાન અને અપડેટ્સ સમયાંતરે મોકલે. હું ગમે ત્યારે બંધ કરી શકું છું."

def login():
    p = "/login/"
    return p, head("gu", "લૉગિન | Mango Farming", "મોબાઇલ (WhatsApp OTP) થી લૉગિન કરો અથવા ઈમેઇલથી જોડાઓ અને આંબાની ખેતી માટે માહિતી મેળવો.", p, robots="noindex,follow") + header("gu", p) + f"""<main>
<section class="ghero plain"><div class="wrap"><h1>Mango Farming માં લૉગિન</h1><p class="lead">તમારી ચકાસણીઓ અને પ્લાન સાચવો, અને ફરી ફોર્મ ભર્યા વગર ચકાસણી કરો.</p></div></section>
<section class="sec"><div class="wrap narrow">
<div class="tabs" role="tablist"><button role="tab" class="tab on" data-tab="mob" aria-selected="true">📱 મોબાઇલ (WhatsApp)</button><button role="tab" class="tab" data-tab="mail" aria-selected="false">✉️ ઈમેઇલથી જોડાઓ</button></div>

<div class="panel" id="p-mob">
 <form id="m1" class="authf" novalidate>
  <label>તમારો WhatsApp મોબાઇલ નંબર<input id="m-mobile" type="tel" inputmode="numeric" maxlength="14" autocomplete="tel-national" placeholder="દા.ત. 98765 43210"></label>
  <p class="err" id="m-err" hidden></p>
  <button class="btn" type="submit">WhatsApp પર લૉગિન કોડ મેળવો</button>
  <p class="small">અમે કોઈ SMS નથી મોકલતા. તમે અમને WhatsApp પર કોડ મોકલશો અને અમે WhatsApp પર જ OTP મોકલીશું.</p>
 </form>
 <div id="m2" hidden>
  <ol class="authsteps">
   <li><b>આ કોડ WhatsApp પર મોકલો</b><span class="bigcode" id="m-code">MM-0000</span><a class="btn wa" id="m-wa" href="#" target="_blank" rel="noopener" data-track="login_whatsapp">{WA_ICON} WhatsApp ખોલો અને મોકલો</a><span class="small">મેસેજ તૈયાર હશે, ફક્ત "Send" દબાવો. <b>+91 99787 91167</b> પર, <span id="m-num"></span> નંબરથી જ મોકલવો.</span></li>
   <li><b>WhatsApp પર આવેલો 6 આંકડાનો OTP અહીં લખો</b><span class="wait" id="m-wait">⏳ તમારા મેસેજની રાહ જોઈએ છીએ…</span>
    <form id="m3" class="authf" novalidate><input id="m-otp" class="otp" inputmode="numeric" autocomplete="one-time-code" maxlength="6" placeholder="••••••" aria-label="OTP"><p class="err" id="m-err2" hidden></p><button class="btn" type="submit">લૉગિન કરો</button></form></li>
  </ol>
  <button class="link" id="m-back" type="button">← નંબર બદલો / નવો કોડ</button>
 </div>
</div>

<div class="panel" id="p-mail" hidden>
 <form id="e1" class="authf" novalidate>
  <label>તમારું નામ<input name="name" autocomplete="name" required></label>
  <label>ઈમેઇલ<input name="email" type="email" autocomplete="email" required></label>
  <label>ગામ<input name="village"></label>
  <label>તાલુકો / જિલ્લો (મરજિયાત)<input name="district"></label>
  <div class="newsnote"><b>📬 આંબાની ખેતી માટે ઈમેઇલ અપડેટ્સ</b><p>આ ઈમેઇલ પર અમે આંબાની સારી ખેતી માટે શૈક્ષણિક માહિતી, જ્ઞાન, મહિના પ્રમાણે માવજત અને નવી માહિતી સમયાંતરે મોકલીશું.</p></div>
  <label class="chk"><input type="checkbox" name="consent" id="e-consent"><span>{CONSENT_GU}</span></label>
  <input class="hp" name="website" tabindex="-1" autocomplete="off" aria-hidden="true">
  <p class="err" id="e-err" hidden></p>
  <button class="btn" type="submit">જોડાઓ</button>
  <p class="small">બીજા ફોન પર લૉગિન કરવા મોબાઇલ (WhatsApp) વાપરો. <a href="/privacy/">ગોપનીયતા</a></p>
 </form>
 <div id="e-ok" class="okbox" hidden><h2 class="h3">✅ તમે જોડાઈ ગયા</h2><p id="e-okmsg">આંબાની ખેતી માટેની માહિતી તમારા ઈમેઇલ પર આવશે.</p><a class="btn" href="/account/">મારું ખાતું</a></div>
</div>
</div></section></main>
<script>window.MM_CONSENT={json.dumps(CONSENT_GU, ensure_ascii=False)}</script>""" + footer("gu")

def account():
    p = "/account/"
    return p, head("gu", "મારું ખાતું | Mango Farming", "તમારું Mango Farming ખાતું.", p, robots="noindex,nofollow") + header("gu", p) + f"""<main>
<section class="ghero plain"><div class="wrap"><h1 id="a-hi">મારું ખાતું</h1><p class="lead" id="a-sub"></p></div></section>
<section class="sec"><div class="wrap narrow" id="acctbox">
<p id="a-load">⏳ લોડ થાય છે…</p>
<div id="a-main" hidden>
 <div class="card2"><h2 class="h3">મારી વિગત</h2>
  <form id="a-prof" class="authf"><label>નામ<input name="name"></label><label>ગામ<input name="village"></label><label>તાલુકો / જિલ્લો<input name="district"></label><button class="btn" type="submit">સાચવો</button><span class="small" id="a-saved" hidden>✅ સાચવ્યું</span></form>
  <p class="small" id="a-ids"></p></div>
 <div class="card2" id="a-news"><h2 class="h3">📬 આંબાની ખેતી માટે ઈમેઇલ અપડેટ્સ</h2><div id="a-newsbody"></div></div>
 <div class="card2"><h2 class="h3">મારી ચકાસણીઓ</h2><div id="a-hist"></div><a class="btn" href="/check/?new=1" data-track="account_check">નવી ચકાસણી કરો</a></div>
 <div class="card2"><h2 class="h3">👨‍🌾 મેંગો એક્સપર્ટને પૂછો</h2><p>WhatsApp પર ફોટો મોકલો અથવા <a href="/ask/">ફોન માટે વિનંતી કરો</a>.</p><a class="btn wa" href="{wa("નમસ્તે, મારા આંબાનો ફોટો મોકલું છું.")}">{WA_ICON} WhatsApp</a></div>
 <button class="link" id="a-out" type="button">લૉગ આઉટ</button>
</div></div></section></main>
<script>window.MM_CONSENT={json.dumps(CONSENT_GU, ensure_ascii=False)}</script>""" + footer("gu")

def crumbs(items):
    return {"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": n + 1, "name": t, "item": SITE + u} for n, (t, u) in enumerate(items)]}

def cta_card(text="તમારા બગીચા માટે છોડ દીઠ પ્લાન જોઈએ છે?", p=""):
    return f'<aside class="cta"><p><b>{text}</b> આંબાની ઉંમર અને તકલીફ જણાવો, 2 મિનિટમાં પ્લાન મેળવો. મફત.</p><div class="cta-b"><a class="btn" href="/check/{"?p=" + p if p else ""}" data-track="guide_check">મફત ચકાસણી</a><a class="btn wa" href="{wa("નમસ્તે, મારા આંબાના બગીચા વિશે પૂછવું છે.")}" data-track="guide_whatsapp">{WA_ICON} ફોટો મોકલો</a></div></aside>'

def guide(g):
    p = f"/guides/{g['slug']}/"
    others = [x for x in sorted(GUIDES, key=lambda x: GUIDE_ORDER.index(x["slug"])) if x["slug"] != g["slug"]][:4]
    body = g["body"]
    # CTA after the second h2
    parts = body.split("<h2>")
    if len(parts) > 3: body = "<h2>".join(parts[:3]) + cta_card(p=GUIDE_PROBLEM.get(g["slug"], "")) + "<h2>" + "<h2>".join(parts[3:])
    toc = "".join(f'<li><a href="#s{n}">{t}</a></li>' for n, t in enumerate(re.findall(r"<h2>(.*?)</h2>", body)))
    n = [0]
    def rep(m): n[0] += 1; return f'<h2 id="s{n[0]-1}">'
    body = re.sub(r"<h2>", rep, body)
    words = len(re.sub("<[^>]+>", " ", body).split())
    ld = [{"@context": "https://schema.org", "@type": "Article", "headline": g["h1"], "description": g["desc"], "inLanguage": "gu", "image": SITE + "/media/" + g["img"],
           "datePublished": UPDATED, "dateModified": UPDATED, "author": {"@id": SITE + "/#org"}, "publisher": {"@id": SITE + "/#org"}, "mainEntityOfPage": SITE + p},
          crumbs([("Mango Farming", "/"), ("માર્ગદર્શિકા", "/guides/"), (g["h1"], p)]), faq_ld(g["faq"]), ORG]
    rel = "".join(f'<li><a href="/guides/{x["slug"]}/"><img src="/media/{sm(x["img"])}" alt="" width="160" height="100" loading="lazy"><span>{esc(x["h1"])}</span></a></li>' for x in others)
    src = "".join(f'<li><a href="{u}" rel="noopener" target="_blank">{esc(t)}</a></li>' for t, u in SOURCES)
    html_ = head("gu", g["title"], g["desc"], p, ld, img="/media/" + g["img"]) + header("gu", "/guides/") + f"""<main>
<section class="ghero"><div class="wrap ghero-in"><div>
<nav class="bc" aria-label="Breadcrumb"><a href="/">Mango Farming</a> › <a href="/guides/">માર્ગદર્શિકા</a></nav>
<h1>{esc(g['h1'])}</h1><p class="meta">Gujarat Bio Organics ટીમ · {max(2, words // 180)} મિનિટ વાંચન · અપડેટ: 19 નવેમ્બર 2026</p></div>
<figure><img src="/media/{g['img']}" srcset="/media/{sm(g['img'])} 480w, /media/{g['img']} 900w" sizes="(max-width:820px) 92vw, 40vw" alt="{esc(g['alt'])}" width="640" height="400" fetchpriority="high"></figure></div></section>
<div class="wrap art">
<article class="prose">
<div class="answer"><p class="ans-k">ટૂંકો જવાબ</p><p>{esc(g['answer'])}</p></div>
{body}
<h2 id="faq">વારંવાર પુછાતા પ્રશ્નો</h2>{faq_html(g['faq'])}
{cta_card("તમારા આંબા માટે ચોક્કસ સલાહ જોઈએ છે?", GUIDE_PROBLEM.get(g["slug"], ""))}
<p class="src-h">વધુ માહિતી માટે</p><ul class="src">{src}</ul>
<p class="small">આ માર્ગદર્શિકા સામાન્ય માહિતી માટે છે. દવા કે ખાતરનો ડોઝ હંમેશાં લેબલ અને તમારા વિસ્તારની કૃષિ યુનિવર્સિટી કે KVK ની ભલામણ પ્રમાણે નક્કી કરો.</p>
</article>
<aside class="side"><nav class="toc" aria-label="આ પાનામાં"><p>આ પાનામાં</p><ol>{toc}<li><a href="#faq">પ્રશ્નો</a></li></ol></nav>
<div class="ask"><p><b>બગીચામાં તકલીફ છે?</b></p><p>આંબાનો ફોટો WhatsApp પર મોકલો. અમારી ટીમ શું તપાસવું તે કહેશે.</p><a class="btn wa" href="{wa("નમસ્તે, મારા આંબાનો ફોટો મોકલું છું.")}" data-track="side_whatsapp">{WA_ICON} ફોટો મોકલો</a></div></aside>
</div>
<section class="sec tint"><div class="wrap"><h2>બીજી માર્ગદર્શિકા</h2><ul class="rel">{rel}</ul></div></section>
</main>
""" + footer("gu")
    return p, html_

def guides_index():
    p = "/guides/"
    items = "".join(f'<li><a href="/guides/{g["slug"]}/"><img src="/media/{sm(g["img"])}" alt="" width="320" height="200" loading="lazy"><div><b>{esc(g["h1"])}</b><span>{esc(g["answer"][:150])}…</span></div></a></li>' for g in sorted(GUIDES, key=lambda g: GUIDE_ORDER.index(g["slug"])))
    ld = [crumbs([("Mango Farming", "/"), ("માર્ગદર્શિકા", p)]), {"@context": "https://schema.org", "@type": "ItemList", "itemListElement": [{"@type": "ListItem", "position": n + 1, "url": f"{SITE}/guides/{s}/"} for n, s in enumerate(GUIDE_ORDER)]}]
    return p, head("gu", "આંબાની માર્ગદર્શિકા: મોર, ફળ ખરવા, મધિયો, સુકારો | Mango Farming", "કેસર આંબાના ખેડૂતો માટે ગુજરાતીમાં સરળ માર્ગદર્શિકા: મોર ઓછો, કેરી ખરવી, એકાંતરે પાક, મધિયો અને ભૂકી છારો, આંબા સુકાવા, Cultar.", p, ld) + header("gu", p) + f"""<main>
<section class="ghero plain"><div class="wrap"><h1>આંબાની માર્ગદર્શિકા</h1><p class="lead">બગીચામાં જે તકલીફ દેખાય તેનું કારણ અને પહેલું પગલું, સરળ ગુજરાતીમાં.</p></div></section>
<section class="sec"><div class="wrap"><ul class="gcards">{items}</ul>{cta_card()}</div></section></main>""" + footer("gu")

def calendar():
    p = "/calendar/"
    rows = ""
    for i in range(12):
        hd, tasks, watch, slug = SEASON["gu"][i]; st = stage_of(i + 1)
        link = "" if slug == "calendar" else f' <a href="/guides/{slug}/">વિગત</a>'
        rows += f'<article class="cal st-{st}" id="m{i+1}"><header><h2>{MONTH["gu"][i]}</h2><span class="tag st-{st}">{STAGE_NAME["gu"][st]}</span></header><p class="cal-h">{esc(hd)}</p><ul class="ticks">{"".join(f"<li>{esc(t)}</li>" for t in tasks)}</ul><p class="watch"><b>ધ્યાન રાખો:</b> {esc(watch)}{link}</p></article>'
    ld = [crumbs([("Mango Farming", "/"), ("કેલેન્ડર", p)]), {"@context": "https://schema.org", "@type": "Article", "headline": "આંબાનું વાર્ષિક કેલેન્ડર: કેસર આંબામાં મહિના પ્રમાણે શું કરવું", "inLanguage": "gu", "datePublished": UPDATED, "dateModified": UPDATED, "author": {"@id": SITE + "/#org"}, "publisher": {"@id": SITE + "/#org"}, "image": SITE + "/media/orchard-wide.webp"}, ORG]
    return p, head("gu", "આંબાનું વાર્ષિક કેલેન્ડર: કેસરમાં મહિના પ્રમાણે શું કરવું | Mango Farming", "કેસર આંબા માટે જાન્યુઆરીથી ડિસેમ્બર સુધી દર મહિને શું કરવું: પિયત, મોર, ફળ ખરવા, ઉતારો, છટણી, ખાતર અને જીવાત-રોગની તપાસ.", p, ld) + header("gu", p) + f"""<main>
<section class="ghero plain"><div class="wrap"><nav class="bc"><a href="/">Mango Farming</a> › કેલેન્ડર</nav><h1>આંબાનું વાર્ષિક કેલેન્ડર</h1><p class="lead">કેસર આંબા માટે, સૌરાષ્ટ્ર અને દક્ષિણ ગુજરાતના હવામાન પ્રમાણે. તમારા વિસ્તાર અને વર્ષના હવામાન પ્રમાણે સમય 2 થી 4 અઠવાડિયા આગળ-પાછળ થઈ શકે.</p></div></section>
<section class="sec"><div class="wrap">{yearbar("gu")}<div class="cals">{rows}</div>{cta_card()}</div></section></main>
<script type="application/json" id="season">{season_json("gu")}</script>""" + footer("gu")

def stories():
    p = "/stories/"
    return p, head("gu", "આંબાના ખેડૂતોના અનુભવ: વિડિયો | Mango Farming", "ગુજરાતના આંબાના ખેડૂતો પોતાના બગીચા અને પોતાના શબ્દોમાં: નબળા આંબા, મોર અને ફળ વિશેના અનુભવ.", p, [crumbs([("Mango Farming", "/"), ("ખેડૂતોના અનુભવ", p)]), ORG]) + header("gu", p) + f"""<main>
<section class="ghero plain"><div class="wrap"><h1>ખેડૂતોના અનુભવ</h1><p class="lead">તેમના બગીચા, તેમના શબ્દો. વિડિયો પર ટૅપ કરો.</p></div></section>
<section class="sec dark"><div class="wrap">{reels("gu", True)}<p class="note">{HOME['gu']['vid_note']}</p></div></section>
<section class="sec"><div class="wrap narrow"><h2>તમારો અનુભવ પણ મોકલો</h2><p>તમારા બગીચાનો ફોટો કે વિડિયો WhatsApp પર મોકલો. તમારી પરવાનગીથી જ અહીં મૂકીશું.</p><a class="btn wa" href="{wa("નમસ્તે, મારા આંબાના બગીચાનો અનુભવ મોકલું છું.")}">{WA_ICON} WhatsApp પર મોકલો</a></div></section>
<section class="sec tint"><div class="wrap narrow"><figure class="wide"><img src="/media/old-orchard.webp" alt="જૂના આંબાના બગીચામાં ખેડૂત સાથે Gujarat Bio Organics ની ટીમ" width="600" height="800" loading="lazy"></figure></div></section>
</main>""" + footer("gu")

def about():
    p = "/about/"
    return p, head("gu", "અમારા વિશે | Mango Farming, Gujarat Bio Organics", "Mango Farming એ Gujarat Bio Organics Pvt. Ltd., ભાવનગરની આંબાના ખેડૂતો માટેની મફત સેવા છે.", p, [ORG]) + header("gu", p) + f"""<main>
<section class="ghero plain"><div class="wrap"><h1>અમારા વિશે</h1></div></section>
<section class="sec"><div class="wrap narrow prose">
<p>Mango Farming એ <b>Gujarat Bio Organics Pvt. Ltd., ભાવનગર</b> ની આંબાના ખેડૂતો માટેની મફત સેવા છે. અમે 2006 થી ખેડૂતો માટે જૈવિક ખાતર અને બાયોસ્ટિમ્યુલન્ટ બનાવીએ છીએ.</p>
<p>આ વેબસાઇટ પર બે વસ્તુ છે: આંબાની ઉંમર અને તકલીફ પ્રમાણે <a href="/check/">મફત ચકાસણી</a>, અને મહિના પ્રમાણે બગીચાની માવજત માટે ગુજરાતીમાં <a href="/guides/">માર્ગદર્શિકા</a>.</p>
<p>ખેડૂતોના વિડિયો તેમના પોતાના અનુભવ છે. જમીન, હવામાન અને માવજત પ્રમાણે પરિણામ અલગ હોઈ શકે, તેથી અમે કોઈ ઉત્પાદન કે પરિણામની ગેરંટી આપતા નથી.</p>
<p><b>સંપર્ક:</b> WhatsApp / ફોન <a href="{wa()}">99787 91167</a> · <a href="https://www.gujaratbio.com/gu/about">ગુજરાત બાયો ઓર્ગેનિક્સ (gujaratbio.com)</a></p>
</div></section></main>""" + footer("gu")

def privacy():
    p = "/privacy/"
    return p, head("gu", "ગોપનીયતા નીતિ | Mango Farming", "Mango Farming તમારી માહિતી કેવી રીતે વાપરે છે.", p, robots="noindex,follow") + header("gu", p) + f"""<main>
<section class="ghero plain"><div class="wrap"><h1>ગોપનીયતા નીતિ</h1></div></section>
<section class="sec"><div class="wrap narrow prose">
<p>ચકાસણીમાં તમે આપેલું નામ, મોબાઇલ નંબર, ગામ અને બગીચાની વિગત Gujarat Bio Organics Pvt. Ltd. ની ટીમ તમારો પ્લાન સમજાવવા અને તમારો સંપર્ક કરવા માટે વાપરે છે. આ માહિતી અમે વેચતા નથી કે બીજાને આપતા નથી.</p>
<p>તમે "બરાબર" પસંદ કરો તો વેબસાઇટ સુધારવા અને જાહેરાત માપવા cookies (Google Tag Manager) વપરાય છે. "જરૂરી જ" પસંદ કરો તો તે બંધ રહે છે.</p>
<p>તમારી માહિતી કાઢી નાખવા WhatsApp <a href="{wa()}">99787 91167</a> પર જણાવો.</p>
<h2>લૉગિન અને ઈમેઇલ</h2>
<p>મોબાઇલથી લૉગિન માટે તમે અમારા WhatsApp નંબર પર કોડ મોકલો છો અને અમે WhatsApp પર OTP મોકલીએ છીએ. તમારો નંબર ફક્ત લૉગિન, તમારા પરિણામો સાચવવા અને તમારો સંપર્ક કરવા વપરાય છે.</p>
<p>ઈમેઇલથી જોડાઓ તો તમારી સંમતિથી અમે આંબાની ખેતી માટે માહિતી, જ્ઞાન અને અપડેટ્સ સમયાંતરે મોકલીએ છીએ. તમારા ખાતામાંથી અથવા WhatsApp પર જણાવીને ગમે ત્યારે બંધ કરી શકો.</p>
<h2>English</h2>
<p>Your name, mobile number, village and orchard details from the check are used by Gujarat Bio Organics Pvt. Ltd. to explain your plan and contact you. We do not sell or share them. Analytics and ad cookies run only if you choose OK. Mobile login works by sending a code to our WhatsApp, which replies with a one-time password. If you sign up with email, we send mango farming information and updates with your consent; you can stop them any time from your account. To delete your data, message 99787 91167 on WhatsApp.</p>
</div></section></main>""" + footer("gu")

def check_page():
    raw = open(os.path.join(SRC, "index_check.html"), encoding="utf-8").read()
    seas = "<script>window.MMSEASON=" + json.dumps({l: json.loads(season_json(l)) for l in ("gu", "hi", "en")}, ensure_ascii=False) + "</script>"
    return "/check/", raw.replace("{VER}", VER).replace('<script src="/calc.js', seas + '\n<script src="/calc.js')

def notfound():
    return head("gu", "પાનું મળ્યું નહીં | Mango Farming", "", "/404", robots="noindex") + header("gu", "") + """<main><section class="ghero plain"><div class="wrap"><h1>આ પાનું મળ્યું નહીં</h1><p class="lead"><a href="/">હોમ પેજ</a> પર જાઓ અથવા <a href="/check/">મફત ચકાસણી</a> શરૂ કરો.</p></div></section></main>""" + footer("gu")

def build():
    global VER
    VER = datetime.datetime.now().strftime("%m%d%H%M")
    if os.path.exists(OUT): shutil.rmtree(OUT)
    shutil.copytree(os.path.join(SRC, "media"), os.path.join(OUT, "media"))
    from PIL import Image
    for f in os.listdir(os.path.join(OUT, "media")):
        if f.endswith(".webp") and not f.endswith("-s.webp"):
            im = Image.open(os.path.join(OUT, "media", f))
            if im.width > 480: im.convert("RGB").resize((480, round(im.height * 480 / im.width)), Image.LANCZOS).save(os.path.join(OUT, "media", f[:-5] + "-s.webp"), "WEBP", quality=52, method=6)
            if f == "orchard-4x5.webp":  # hero on phones is shown 16:10, so ship a 16:10 centre crop instead of the tall photo
                c = im.convert("RGB").crop((0, 200, 640, 600))
                c.save(os.path.join(OUT, "media", "orchard-16x10.webp"), "WEBP", quality=55, method=6)
                c.resize((400, 250), Image.LANCZOS).save(os.path.join(OUT, "media", "orchard-16x10-s.webp"), "WEBP", quality=55, method=6)
    for f in ("site.css", "site.js", "app.js", "calc.js", "styles.css", "favicon.svg", "_headers"):
        shutil.copy(os.path.join(SRC, f), os.path.join(OUT, f))
    # self-hosted fonts: files in /fonts/, @font-face rules placed at the top of both stylesheets
    # self-hosted fonts, applied after the page has loaded (text shows at once in the phone's own font, then switches)
    shutil.copytree(os.path.join(SRC, "fonts"), os.path.join(OUT, "fonts"))
    shutil.copy(os.path.join(SRC, "fonts.css"), os.path.join(OUT, "fonts.css"))
    pages = {"/": home("gu"), "/hi/": home("hi"), "/en/": home("en")}
    for g in GUIDES: k, v = guide(g); pages[k] = v
    for fn in (guides_index, calendar, stories, about, privacy, check_page, kit, ask, login, account): k, v = fn(); pages[k] = v
    for path, h in pages.items():
        d = os.path.join(OUT, path.strip("/")); os.makedirs(d, exist_ok=True)
        open(os.path.join(d, "index.html"), "w", encoding="utf-8").write(h)
    open(os.path.join(OUT, "404.html"), "w", encoding="utf-8").write(notfound())
    sm = [p for p in pages if p not in ("/privacy/", "/login/", "/account/", "/check/")]
    open(os.path.join(OUT, "sitemap.xml"), "w").write('<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' + "".join(f"<url><loc>{SITE}{p}</loc><lastmod>{UPDATED}</lastmod></url>" for p in sm) + "</urlset>\n")
    open(os.path.join(OUT, "robots.txt"), "w").write(f"User-agent: *\nAllow: /\nSitemap: {SITE}/sitemap.xml\n")
    open(os.path.join(OUT, "llms.txt"), "w", encoding="utf-8").write(
        "# Mango Farming\n\n> Free mango orchard check and Gujarati month-by-month care guides for Kesar mango farmers, by Gujarat Bio Organics Pvt. Ltd., Bhavnagar (WhatsApp 9978791167).\n\n## Pages\n"
        + "".join(f"- [{g['h1']}]({SITE}/guides/{g['slug']}/): {g['desc']}\n" for g in GUIDES)
        + f"- [Mango calendar]({SITE}/calendar/): what to do each month\n- [Free orchard check]({SITE}/check/): per-tree plan by tree age and problem\n")
    print(len(pages), "pages")

if __name__ == "__main__":
    build()
