(function(){
var dl=window.dataLayer=window.dataLayer||[];
function track(ev,x){var o={event:ev,app_name:'Mango Farming',crop:'mango',lang:document.documentElement.lang};for(var k in(x||{}))o[k]=x[k];dl.push(o)}
function $(id){return document.getElementById(id)}
function esc(s){return String(s).replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}

/* season: current month for the visitor, tap any month */
var sd=$('season'),S=sd?JSON.parse(sd.textContent):null;
function showMonth(i,first){
  if(!S)return;var m=S.s[i];
  document.querySelectorAll('.yb-m').forEach(function(b){var on=+b.dataset.m===i;b.classList.toggle('on',on);b.setAttribute('aria-pressed',on)});
  if($('mc-m')){$('mc-m').textContent=S.m[i];$('mc-s').textContent=S.sn[S.st[i]];$('mc-h').textContent=m[0];
    $('mc-t').innerHTML=m[1].map(function(t){return'<li>'+esc(t)+'</li>'}).join('');
    $('mc-w').innerHTML='<b>'+esc(S.w)+':</b> '+esc(m[2]);$('mc-a').href=m[3]==='calendar'?'/calendar/':'/guides/'+m[3]+'/';if($('mc-img'))$('mc-img').src='/media/'+S.img[S.st[i]]}
  var c=document.querySelectorAll('.cal');if(c.length){c.forEach(function(x){x.classList.remove('now')});var el=$('m'+(i+1));if(el){el.classList.add('now');if(!first)el.scrollIntoView({behavior:'smooth',block:'center'})}}
}
var now=new Date().getMonth();
if(S){
  if($('hero-h')){var m=S.s[now];$('hero-m').textContent=S.m[now];$('hero-h').textContent=m[0]}
  showMonth(now,true);
  document.addEventListener('click',function(e){var b=e.target.closest('.yb-m');if(b){showMonth(+b.dataset.m);track('month_selected',{month:+b.dataset.m+1})}});
}

/* videos load only when tapped */
document.addEventListener('click',function(e){
  var b=e.target.closest('.reel-b');if(!b)return;
  var v=document.createElement('video');v.src=b.dataset.src;v.controls=true;v.autoplay=true;v.playsInline=true;v.setAttribute('playsinline','');
  v.poster=b.querySelector('img').src;b.replaceWith(v);v.play&&v.play().catch(function(){});
  document.querySelectorAll('.reel video').forEach(function(o){if(o!==v)o.pause()});
  track('video_played',{video:b.dataset.v});
});

/* clicks worth counting */
document.addEventListener('click',function(e){var a=e.target.closest('[data-track]');if(a)track(a.dataset.track,{href:a.getAttribute('href')||''})});

/* sticky bar after the first screen */
var st=$('sticky');
if(st){var y0=0;window.addEventListener('scroll',function(){var s=window.scrollY>window.innerHeight*.6;if(s!==y0){y0=s;st.classList.toggle('show',s)}},{passive:true})}

/* consent */
var cb=$('consent'),c=null;try{c=localStorage.getItem('mm_consent')}catch(x){c='no'}
if(cb&&!c)cb.hidden=false;
document.addEventListener('click',function(e){var b=e.target.closest('[data-consent]');if(!b)return;var v=b.dataset.consent;
  try{localStorage.setItem('mm_consent',v)}catch(x){}var g=v==='yes'?'granted':'denied';
  if(window.gtag)gtag('consent','update',{ad_storage:g,analytics_storage:g,ad_user_data:g,ad_personalization:g});cb.hidden=true});
/* Ask a Mango Expert form */
var af=$('askform');
if(af)af.addEventListener('submit',function(e){e.preventDefault();var f=new FormData(af),er=$('askerr');
  var mob=String(f.get('mobile')||'').replace(/\D/g,'').slice(-10),name=String(f.get('name')||'').trim(),vil=String(f.get('village')||'').trim();
  var msg=name.length<2?'તમારું નામ લખો':!/^[6-9]\d{9}$/.test(mob)?'10 આંકડાનો સાચો મોબાઇલ નંબર લખો':vil.length<2?'ગામનું નામ લખો':'';
  if(msg){er.textContent=msg;er.hidden=false;return}er.hidden=true;
  var sid='ask-'+(window.crypto&&crypto.randomUUID?crypto.randomUUID():Date.now()+'-'+Math.random().toString(36).slice(2,10));
  var btn=af.querySelector('button[type=submit]');btn.disabled=true;
  fetch('https://filbmvtclfcrrvxckema.supabase.co/functions/v1/mango-lead',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({event:'expert',session_id:sid,flow_version:'site',lang:document.documentElement.lang,
    name:name,mobile:mob,village:vil,district:String(f.get('district')||''),question:String(f.get('question')||''),topic:f.getAll('topic').join(','),source_page:location.pathname,website:String(f.get('website')||'')})})
  .then(function(r){if(!r.ok)throw 0;af.hidden=true;$('askok').hidden=false;track('expert_requested',{where:'ask_page'})})
  .catch(function(){btn.disabled=false;er.textContent='મોકલી ન શકાયું. WhatsApp 99787 91167 પર લખો.';er.hidden=false});
});

/* ===== Login (WhatsApp OTP via DoubleTick) and email signup ===== */
var AUTH_API='https://filbmvtclfcrrvxckema.supabase.co/functions/v1/mango-auth';
function getAuth(){try{return JSON.parse(localStorage.getItem('mm_auth'))}catch(x){return null}}
function setAuth(a){try{if(a)localStorage.setItem('mm_auth',JSON.stringify(a));else localStorage.removeItem('mm_auth')}catch(x){}}
function api(body){var a=getAuth();if(a&&a.token&&!body.token)body.token=a.token;body.lang=body.lang||document.documentElement.lang;body.site='mango';
  return fetch(AUTH_API,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(body)}).then(function(r){return r.json().then(function(j){j._status=r.status;return j})})}
function nextUrl(){var n=new URLSearchParams(location.search).get('next');return n&&/^\/[a-z0-9\/?=&-]*$/i.test(n)?n:'/account/'}
var au=getAuth(),ac=$('acct');
if(ac&&au&&au.token){ac.textContent=ac.getAttribute('data-in');ac.href='/account/';ac.classList.add('in')}
function mySessions(){try{var s=JSON.parse(localStorage.getItem('mm_state2'));return s&&s.session?[s.session]:[]}catch(x){return[]}}
function show(id,on){var e=$(id);if(e)e.hidden=!on}
function err(id,msg){var e=$(id);if(!e)return;e.textContent=msg||'';e.hidden=!msg}

/* tabs */
document.addEventListener('click',function(e){var t=e.target.closest('[data-tab]');if(!t)return;
  document.querySelectorAll('[data-tab]').forEach(function(b){var on=b===t;b.classList.toggle('on',on);b.setAttribute('aria-selected',on)});
  show('p-mob',t.dataset.tab==='mob');show('p-mail',t.dataset.tab==='mail')});
if($('p-mail')&&location.hash==='#email'){var tb=document.querySelector('[data-tab="mail"]');if(tb)tb.click()}

/* mobile: step 1 -> code */
var RQ=null,poll=null;
if($('m1'))$('m1').addEventListener('submit',function(e){e.preventDefault();
  var m=$('m-mobile').value.replace(/\D/g,'').slice(-10);
  if(!/^[6-9]\d{9}$/.test(m)){err('m-err','10 આંકડાનો સાચો મોબાઇલ નંબર લખો');return}err('m-err','');
  var b=this.querySelector('button');b.disabled=true;
  api({action:'start',mobile:m}).then(function(j){b.disabled=false;
    if(!j.ok){err('m-err',j.error==='too_many'?'ઘણા પ્રયત્ન થયા. એક કલાક પછી ફરી કરો.':'કોડ ન મળ્યો. ફરી પ્રયત્ન કરો.');return}
    RQ=j.request_id;$('m-code').textContent=j.code;$('m-num').textContent=m;
    $('m-wa').href='https://wa.me/'+j.wa+'?text='+encodeURIComponent('Mango Farming લૉગિન કોડ: '+j.code);
    show('m1',false);show('m2',true);$('m-wait').textContent='⏳ તમારા મેસેજની રાહ જોઈએ છીએ…';
    track('login_code_requested');clearInterval(poll);var n=0;
    poll=setInterval(function(){if(++n>300){clearInterval(poll);return}
      api({action:'status',request_id:RQ}).then(function(s){
        if(s.status==='otp_sent'){$('m-wait').textContent='✅ OTP WhatsApp પર મોકલ્યો છે.';$('m-wait').classList.add('ok');clearInterval(poll);$('m-otp').focus()}
        if(s.status==='failed'){$('m-wait').textContent='OTP મોકલી ન શકાયો. ફરી પ્રયત્ન કરો અથવા 99787 91167 પર ફોન કરો.';clearInterval(poll)}
        if(s.status==='expired'){$('m-wait').textContent='કોડ જૂનો થયો. નવો કોડ મેળવો.';clearInterval(poll)}
      }).catch(function(){})},3000);
  }).catch(function(){b.disabled=false;err('m-err','નેટવર્ક ભૂલ. ફરી પ્રયત્ન કરો.')})});
if($('m-back'))$('m-back').addEventListener('click',function(){clearInterval(poll);show('m2',false);show('m1',true)});
if($('m3'))$('m3').addEventListener('submit',function(e){e.preventDefault();
  var o=$('m-otp').value.replace(/\D/g,'');if(o.length!==6){err('m-err2','6 આંકડાનો OTP લખો');return}
  var b=this.querySelector('button');b.disabled=true;
  api({action:'verify',request_id:RQ,otp:o,sessions:mySessions()}).then(function(j){b.disabled=false;
    if(!j.ok){err('m-err2',j.error==='wrong'?'OTP ખોટો છે.':j.error==='expired'?'OTP જૂનો થયો. નવો કોડ મેળવો.':j.error==='no_otp'?'હજુ OTP મોકલાયો નથી. પહેલાં WhatsApp પર કોડ મોકલો.':'લૉગિન ન થયું. ફરી પ્રયત્ન કરો.');return}
    setAuth({token:j.token,user:j.user});track('login_success',{method:'whatsapp_otp'});location.href=nextUrl()})
  .catch(function(){b.disabled=false;err('m-err2','નેટવર્ક ભૂલ. ફરી પ્રયત્ન કરો.')})});

/* email signup */
if($('e1'))$('e1').addEventListener('submit',function(e){e.preventDefault();var f=new FormData(this);
  var email=String(f.get('email')||'').trim(),name=String(f.get('name')||'').trim();
  if(name.length<2){err('e-err','તમારું નામ લખો');return}
  if(!/^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i.test(email)){err('e-err','સાચો ઈમેઇલ લખો');return}
  if(!$('e-consent').checked){err('e-err','ઈમેઇલ અપડેટ્સ માટે સંમતિ પર ટિક કરો');return}
  if(f.get('website')){return}err('e-err','');var b=this.querySelector('button');b.disabled=true;
  api({action:'email_signup',name:name,email:email,village:String(f.get('village')||''),district:String(f.get('district')||''),consent:true,consent_text:window.MM_CONSENT||''})
  .then(function(j){b.disabled=false;if(!j.ok){err('e-err',j.error==='email'?'સાચો ઈમેઇલ લખો':'જોડાઈ ન શકાયું. ફરી પ્રયત્ન કરો.');return}
    if(j.token)setAuth({token:j.token,user:j.user});else $('e-okmsg').textContent='આ ઈમેઇલ પહેલેથી જોડાયેલ છે, અપડેટ્સ ચાલુ રહેશે. ખાતામાં લૉગિન કરવા મોબાઇલ (WhatsApp) વાપરો.';
    track('email_signup');show('e1',false);show('e-ok',true)})
  .catch(function(){b.disabled=false;err('e-err','નેટવર્ક ભૂલ. ફરી પ્રયત્ન કરો.')})});

/* account */
var CT={borer:'થડ કોરી ખાનારી ઈયળ',dieback:'ડાળીનો સુકારો',roots:'મૂળ કે જમીનની તકલીફ',hopper:'મધિયો',mildew:'ભૂકી છારો',flush:'મોરને બદલે નવી ફૂટ',waterOn:'હાલ પિયત ચાલુ',reserves:'સંગ્રહેલો ખોરાક ખૂટ્યો',water:'પાણીની ખેંચથી ફળ ખરે',natural:'શરૂઆતનું ખરણ કુદરતી',small:'ફળના વિકાસ વખતે પાણી-ખોરાક ઓછો',micro:'સૂક્ષ્મ તત્વોની ઉણપ',feed:'આંબાને ખોરાક ઓછો',cultar:'વર્ષોથી Cultar નો ભાર',soilLife:'જમીનમાં જીવાણુ ઓછા',healthy:'બગીચો સારી સ્થિતિમાં'};
function renderNews(u){var nb=$('a-newsbody');if(!nb)return;
  if(u.email){nb.innerHTML='<p>'+esc(u.email)+'</p><label class="chk"><input type="checkbox" id="a-nl" '+((u.lists||[]).indexOf('mango')>=0?'checked':'')+'><span>આંબાની ખેતી માટે માહિતી અને અપડેટ્સ આ ઈમેઇલ પર મેળવવી છે</span></label>'}
  else nb.innerHTML='<p>ઈમેઇલ ઉમેરો અને આંબાની સારી ખેતી માટે શૈક્ષણિક માહિતી, જ્ઞાન અને અપડેટ્સ સમયાંતરે મેળવો.</p><form id="a-mail" class="authf"><label>ઈમેઇલ<input name="email" type="email" autocomplete="email"></label><label class="chk"><input type="checkbox" name="consent"><span>'+esc(window.MM_CONSENT||'')+'</span></label><p class="err" id="a-merr" hidden></p><button class="btn" type="submit">ઈમેઇલ ઉમેરો</button></form>'}
if($('acctbox')){var A=getAuth();
  if(!A||!A.token){location.replace('/login/?next=/account/')}
  else{api({action:'me'}).then(function(j){
    if(!j.ok){setAuth(null);location.replace('/login/?next=/account/');return}
    var u=j.user;setAuth({token:A.token,user:u});show('a-load',false);show('a-main',true);
    $('a-hi').textContent=(u.name?u.name+', ':'')+'નમસ્તે 🙏';$('a-sub').textContent='તમારું Mango Farming ખાતું';
    var f=$('a-prof');f.name.value=u.name||'';f.village.value=u.village||'';f.district.value=u.district||'';
    $('a-ids').innerHTML=(u.mobile?'📱 '+esc(u.mobile)+(u.mobile_verified?' ✅':''):'📱 મોબાઇલ નથી ઉમેર્યો: <a href="/login/?next=/account/">WhatsApp થી ઉમેરો</a>')+(u.email?' &nbsp; ✉️ '+esc(u.email):'');
    renderNews(u);
    api({action:'history'}).then(function(h){var el=$('a-hist');if(!h.ok||!h.checks.length){el.innerHTML='<p class="small">હજુ કોઈ ચકાસણી સાચવેલી નથી.</p>';return}
      el.innerHTML='<ul class="hist">'+h.checks.map(function(c){var d=new Date(c.created_at);return'<li><b>'+d.toLocaleDateString('gu-IN')+'</b> · '+(c.total_plants||0)+' આંબા'+(c.urgent?' · ⚠️':'')+'<br><span>'+(c.diagnosis||[]).map(function(x){return esc(CT[x.k]||x.k)}).join(', ')+'</span></li>'}).join('')+'</ul>'});
  })}}
document.addEventListener('submit',function(e){
  if(e.target.id==='a-prof'){e.preventDefault();var f=e.target;api({action:'update',name:f.name.value,village:f.village.value,district:f.district.value}).then(function(j){if(j.ok){show('a-saved',true);var A=getAuth();setAuth({token:A.token,user:j.user})}})}
  if(e.target.id==='a-mail'){e.preventDefault();var f=e.target,em=f.email.value.trim();
    if(!/^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i.test(em)){err('a-merr','સાચો ઈમેઇલ લખો');return}
    if(!f.consent.checked){err('a-merr','સંમતિ પર ટિક કરો');return}
    var A=getAuth();api({action:'email_signup',email:em,name:(A.user&&A.user.name)||'ખેડૂત',consent:true,consent_text:window.MM_CONSENT||''}).then(function(j){if(j.ok&&j.user){setAuth({token:A.token,user:j.user});renderNews(j.user);track('email_signup',{where:'account'})}else err('a-merr','ઉમેરી ન શકાયું. ફરી પ્રયત્ન કરો.')})}
});
document.addEventListener('change',function(e){if(e.target.id==='a-nl'){api({action:'update',subscribed:e.target.checked,consent_text:window.MM_CONSENT||''})}});
if($('a-out'))$('a-out').addEventListener('click',function(){api({action:'logout'}).finally(function(){setAuth(null);location.href='/'})});

track('landing_page_view',{page_path:location.pathname});
})();
