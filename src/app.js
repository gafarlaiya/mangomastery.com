(function () {
var API = 'https://filbmvtclfcrrvxckema.supabase.co/functions/v1/mango-lead';
var WA = '919978791167';
var C = window.MMCalc;

var L = {
gu: {
  brand:'🥭 Mango Mastery',
  h1:'તમારા આંબાને <em>ખરેખર શું જોઈએ છે?</em>',
  lead:'આંબાની ઉંમર અને તકલીફ કહો. છોડ દીઠ કેટલું આપવું અને આખા બગીચા માટે કેટલું જોઈશે, તેની ગણતરી તરત મળશે.',
  cta:'મારા બગીચાની ચકાસણી કરો', free:'મફત • 2 મિનિટ • ગુજરાતી, हिन्दी, English',
  credit:'દિવ્યેશભાઈનો બગીચો, વલસાડ',
  painT:'આમાંથી કંઈ તમારા બગીચામાં થાય છે?',
  pains:['ફૂલ આવે છે, પણ ફળ ટકતાં નથી','એક વર્ષ પાક, બીજે વર્ષ ઓછો','ફળ નાના રહી જાય છે','છોડનો વિકાસ અટકી ગયો છે','આંબા નબળા પડી સુકાય છે','ખર્ચ વધે છે, ઉત્પાદન નહીં'],
  howT:'કેવી રીતે ચાલે છે?',
  how:[['તમારા બગીચા વિશે કહો','ઉંમર, છોડની સંખ્યા અને હાલની તકલીફ.'],['તમારો પ્લાન જુઓ','છોડ દીઠ ડોઝ, કુલ જથ્થો અને વાપરવાની રીત.'],['ટીમ સાથે વાત કરો','ફોટા મોકલો અને WhatsApp પર સવાલ પૂછો.']],
  vidT:'ખેડૂત પોતે શું કહે છે',
  vidS:'તેમના જ બગીચા અને તેમના જ શબ્દો.',
  vids:[['yash','યશ પટેલ','નબળા આંબા વિશે પોતાનો અનુભવ'],['deepak','દીપક લાડ','આંબામાં ફ્લાવરિંગ વિશે'],['divyesh','દિવ્યેશભાઈ, વલસાડ','બગીચામાં ફળની મુલાકાત']],
  vidNote:'આ દરેક ખેડૂતનો પોતાનો અનુભવ છે. જમીન, હવામાન અને માવજત પ્રમાણે પરિણામ અલગ હોઈ શકે.',
  coT:'Gujarat Bio Organics P. Ltd., ભાવનગર', coS:'2006 થી ખેડૂતો માટે જૈવિક ખાતર અને બાયોસ્ટિમ્યુલન્ટ બનાવીએ છીએ.',
  call:'સીધી વાત કરવી છે? WhatsApp / ફોન: 99787 91167',
  next:'આગળ', back:'પાછળ', step:'સવાલ', of:'માંથી', many:'એકથી વધુ પસંદ કરી શકો',
  ageQ:'આ આંબા કેટલા વર્ષના છે?', yr:'વર્ષ', plantsL:'આ ઉંમરના કેટલા આંબા છે?', plantsP:'દા.ત. 200',
  probQ:'હાલ કઈ તકલીફ છે?', goalQ:'આ વખતે સૌથી વધુ શું જોઈએ છે?', bearQ:'દર વર્ષે ફૂલ અને પાક આવે છે?',
  cultQ:'Cultar / Paclobutrazol વાપરો છો?', yearsP:'કેટલા વર્ષથી? (દા.ત. 5)', careQ:'આ વખતે બગીચા પાછળ કેટલું કરવું છે?',
  soilQ:'છેલ્લાં વર્ષોમાં આમાંથી શું વાપર્યું છે?', soilInfo:'જમીનના ફાયદાકારક જીવાણુ છોડને પોષણ ઉપલબ્ધ કરાવવામાં મદદ કરે છે. આ દવાઓના સતત વપરાશથી તેમની સંખ્યા ઘટી શકે છે.',
  npkQ:'Immunity NPK Biofertilizer પણ ઉમેરવું છે?', npkInfo:'Azotobacter નાઈટ્રોજન, PSB ફોસ્ફરસ અને KMB પોટાશ ઉપલબ્ધ કરાવવામાં મદદરૂપ થાય છે. ડોઝ Mango Special ના ડ્રેન્ચિંગ ડોઝ કરતાં અડધો રહેશે.',
  sprayQ:'બગીચામાં ફોલિયર સ્પ્રે કરી શકો છો?', tankL:'કયું સ્પ્રે સાધન?', tanksL:'એક રાઉન્ડમાં કેટલા પંપ / ટાંકી લાગે?', roundsL:'કેટલા રાઉન્ડ?', tankNames:{'15':'15 L પંપ','20':'20 L પંપ','200':'200 L ડ્રમ','500':'500 L ટાંકી','1000':'1000 L ટાંકી','2000':'2000 L ટાંકી'},
  youQ:'પ્લાન કોના નામે બનાવીએ?', nameL:'તમારું નામ', mobL:'મોબાઇલ નંબર (WhatsApp)', vilL:'ગામ / તાલુકો', farmL:'ફાર્મનું નામ (મરજિયાત)',
  errName:'તમારું નામ લખો', errMob:'10 આંકડાનો સાચો મોબાઇલ નંબર લખો', errVil:'ગામનું નામ લખો',
  priv:'તમારી માહિતી ફક્ત Mango Support Team આ પ્લાન માટે તમારો સંપર્ક કરવા વાપરશે.', show:'મારો પ્લાન બતાવો',
  planFor:'માટેનો પ્લાન', heardT:'તમે અમને જણાવ્યું', urgentT:'ફક્ત આ ગણતરી પર ન રહેશો', urgent:'આંબા સુકાતા હોય કે 2 વર્ષથી પાક ન આવ્યો હોય, તો કારણ જોયા વગર કહી શકાય નહીં. છોડ, મૂળ અને પાનના ફોટા WhatsApp પર મોકલો, ટીમ જોઈને કહેશે.',
  urgentBtn:'ફોટા WhatsApp પર મોકલો',
  group:'ગ્રુપ', perT:'છોડ દીઠ કેટલું આપવું', basal:'બેઝલ, રિંગમાં', drench:'ડ્રેન્ચિંગ', drenchAdd:'ડ્રેન્ચિંગના પાણીમાં', plantsW:'આંબા',
  spray:'ફોલિયર સ્પ્રે', sprayLine:function(n,t,r,ml,w){return n+' × '+t+' × '+r+' રાઉન્ડ. દરેક ટાંકીમાં <b>'+ml+' ml Mango Special + '+ml+' ml Gold</b>. કુલ પાણી '+w+' L.'},
  buyT:'આખા બગીચા માટે કુલ જરૂરિયાત', bag:'બેગ', need:'જરૂરિયાત', stepsT:'વાપરવાની રીત',
  steps:['છોડના ઘેરાવા / ડ્રિપ લાઇન પાસે ગોળ રિંગ બનાવો.','Granules રિંગમાં સરખા આપો.','Mango Special અને (લીધું હોય તો) NPK Biofertilizer પાણીમાં ભેળવો.','આ દ્રાવણ રિંગમાં આપો, માટીથી ઢાંકો અને પિયત આપો.'],
  sendWA:'આ પ્લાન WhatsApp પર મોકલો અને ભાવ પૂછો', addGroup:'+ બીજી ઉંમરના આંબા ઉમેરો', print:'પ્રિન્ટ / PDF', restart:'નવેસરથી શરૂ કરો',
  disclaimer:'આ ગણતરી તમારા જવાબો પર આધારિત છે, જમીન કે છોડની લેબ તપાસ નથી. પરિણામ જમીન, હવામાન અને માવજત પ્રમાણે બદલાઈ શકે છે.',
  saveFail:'માહિતી સેવ ન થઈ. પ્લાન નીચે જ છે, WhatsApp પર મોકલી દો.',
  consent:'વેબસાઇટ સુધારવા અને જાહેરાત માપવા અમે cookies વાપરીએ છીએ.', yes:'બરાબર', no:'જરૂરી જ',
  waHi:'નમસ્કાર, મેં Mango Mastery પર મારા બગીચાની ચકાસણી કરી. મારે આ પ્લાન વિશે વાત કરવી છે અને ભાવ જાણવો છે.', waName:'નામ', waVil:'ગામ', waNeed:'મારી જરૂરિયાત', waPhotos:'નમસ્કાર, મારા આંબાની તકલીફ છે. હું ફોટા મોકલું છું, જોઈને કહેશો?'
},
hi: {
  brand:'🥭 Mango Mastery',
  h1:'आपके आम के बगीचे को <em>असल में क्या चाहिए?</em>',
  lead:'पेड़ों की उम्र और समस्या बताइए। प्रति पौधा कितना देना है और पूरे बगीचे के लिए कितना चाहिए, इसकी गणना तुरंत मिलेगी।',
  cta:'मेरे बगीचे की जांच करें', free:'मुफ्त • 2 मिनट • ગુજરાતી, हिन्दी, English',
  credit:'दिव्येशभाई का बगीचा, वलसाड',
  painT:'क्या आपके बगीचे में ऐसा हो रहा है?',
  pains:['फूल आते हैं, पर फल टिकते नहीं','एक साल फसल, अगले साल कम','फल छोटे रह जाते हैं','पौधों की बढ़वार रुक गई है','पेड़ कमजोर होकर सूख रहे हैं','खर्च बढ़ता है, उत्पादन नहीं'],
  howT:'यह कैसे चलता है?',
  how:[['बगीचे के बारे में बताएं','उम्र, पेड़ों की संख्या और अभी की समस्या।'],['अपना प्लान देखें','प्रति पौधा डोज, कुल मात्रा और उपयोग की विधि।'],['टीम से बात करें','फोटो भेजें और WhatsApp पर सवाल पूछें।']],
  vidT:'किसान खुद क्या कहते हैं',
  vidS:'उनके अपने बगीचे और उनके अपने शब्द।',
  vids:[['yash','यश पटेल','कमजोर आम के पेड़ों पर अपना अनुभव'],['deepak','दीपक लाड','आम की फ्लावरिंग के बारे में'],['divyesh','दिव्येशभाई, वलसाड','बगीचे में फलों की मुलाकात']],
  vidNote:'यह हर किसान का अपना अनुभव है। मिट्टी, मौसम और देखभाल के अनुसार परिणाम अलग हो सकते हैं।',
  coT:'Gujarat Bio Organics P. Ltd., भावनगर', coS:'2006 से किसानों के लिए जैविक खाद और बायोस्टिमुलेंट बनाते हैं।',
  call:'सीधे बात करनी है? WhatsApp / फोन: 99787 91167',
  next:'आगे', back:'पीछे', step:'सवाल', of:'में से', many:'एक से ज्यादा चुन सकते हैं',
  ageQ:'ये आम के पेड़ कितने साल के हैं?', yr:'साल', plantsL:'इस उम्र के कितने पेड़ हैं?', plantsP:'जैसे 200',
  probQ:'अभी क्या समस्या है?', goalQ:'इस बार सबसे ज्यादा क्या चाहिए?', bearQ:'क्या हर साल फूल और फसल आती है?',
  cultQ:'क्या Cultar / Paclobutrazol इस्तेमाल करते हैं?', yearsP:'कितने साल से? (जैसे 5)', careQ:'इस बार बगीचे पर कितना करना है?',
  soilQ:'पिछले वर्षों में इनमें से क्या इस्तेमाल किया है?', soilInfo:'मिट्टी के लाभदायक जीवाणु पौधे को पोषण उपलब्ध कराने में मदद करते हैं। इन दवाओं के लगातार उपयोग से उनकी संख्या घट सकती है।',
  npkQ:'क्या Immunity NPK Biofertilizer भी जोड़ना है?', npkInfo:'Azotobacter नाइट्रोजन, PSB फॉस्फोरस और KMB पोटाश उपलब्ध कराने में मददगार हैं। डोज Mango Special के ड्रेंचिंग डोज से आधा रहेगा।',
  sprayQ:'क्या बगीचे में फोलियर स्प्रे कर सकते हैं?', tankL:'कौन सा स्प्रे साधन?', tanksL:'एक राउंड में कितने पंप / टैंक लगते हैं?', roundsL:'कितने राउंड?', tankNames:{'15':'15 L पंप','20':'20 L पंप','200':'200 L ड्रम','500':'500 L टैंक','1000':'1000 L टैंक','2000':'2000 L टैंक'},
  youQ:'प्लान किसके नाम से बनाएं?', nameL:'आपका नाम', mobL:'मोबाइल नंबर (WhatsApp)', vilL:'गांव / तहसील', farmL:'फार्म का नाम (वैकल्पिक)',
  errName:'अपना नाम लिखें', errMob:'10 अंकों का सही मोबाइल नंबर लिखें', errVil:'गांव का नाम लिखें',
  priv:'आपकी जानकारी केवल Mango Support Team इस प्लान के लिए आपसे संपर्क करने में उपयोग करेगी।', show:'मेरा प्लान दिखाएं',
  planFor:'के लिए प्लान', heardT:'आपने हमें बताया', urgentT:'केवल इस गणना पर न रहें', urgent:'पेड़ सूख रहे हों या 2 साल से फसल न आई हो, तो कारण देखे बिना नहीं कहा जा सकता। पौधे, जड़ और पत्तों की फोटो WhatsApp पर भेजें, टीम देखकर बताएगी।',
  urgentBtn:'फोटो WhatsApp पर भेजें',
  group:'ग्रुप', perT:'प्रति पौधा कितना देना है', basal:'बेसल, रिंग में', drench:'ड्रेंचिंग', drenchAdd:'ड्रेंचिंग के पानी में', plantsW:'पेड़',
  spray:'फोलियर स्प्रे', sprayLine:function(n,t,r,ml,w){return n+' × '+t+' × '+r+' राउंड। हर टैंक में <b>'+ml+' ml Mango Special + '+ml+' ml Gold</b>। कुल पानी '+w+' L।'},
  buyT:'पूरे बगीचे के लिए कुल जरूरत', bag:'बैग', need:'जरूरत', stepsT:'उपयोग की विधि',
  steps:['पेड़ के घेरे / ड्रिप लाइन के पास गोल रिंग बनाएं।','Granules रिंग में समान रूप से डालें।','Mango Special और (लिया हो तो) NPK Biofertilizer पानी में मिलाएं।','यह घोल रिंग में डालें, मिट्टी से ढकें और सिंचाई करें।'],
  sendWA:'यह प्लान WhatsApp पर भेजें और भाव पूछें', addGroup:'+ दूसरी उम्र के पेड़ जोड़ें', print:'प्रिंट / PDF', restart:'नए सिरे से शुरू करें',
  disclaimer:'यह गणना आपके जवाबों पर आधारित है, मिट्टी या पौधे की लैब जांच नहीं। परिणाम मिट्टी, मौसम और देखभाल के अनुसार बदल सकते हैं।',
  saveFail:'जानकारी सेव नहीं हुई। प्लान नीचे है, WhatsApp पर भेज दें।',
  consent:'वेबसाइट सुधारने और विज्ञापन मापने के लिए हम cookies का उपयोग करते हैं।', yes:'ठीक है', no:'केवल जरूरी',
  waHi:'नमस्कार, मैंने Mango Mastery पर अपने बगीचे की जांच की। मुझे इस प्लान के बारे में बात करनी है और भाव जानना है।', waName:'नाम', waVil:'गांव', waNeed:'मेरी जरूरत', waPhotos:'नमस्कार, मेरे आम के पेड़ों में समस्या है। मैं फोटो भेजता हूं, देखकर बताएंगे?'
},
en: {
  brand:'🥭 Mango Mastery',
  h1:'What does your mango orchard <em>really need?</em>',
  lead:'Tell us the age of your trees and the problem. You get the dose per plant and the total quantity for your orchard right away.',
  cta:'Check my orchard', free:'Free • 2 minutes • ગુજરાતી, हिन्दी, English',
  credit:"Divyeshbhai's orchard, Valsad",
  painT:'Is this happening in your orchard?',
  pains:['Flowers come, but fruit does not hold','One good year, then a low crop','Fruits stay small','Plant growth has stopped','Trees are weakening and drying','Costs go up, production does not'],
  howT:'How it works',
  how:[['Tell us about your orchard','Age, number of trees and the current problem.'],['See your plan','Dose per plant, total quantity and how to apply.'],['Talk to the team','Send photos and ask questions on WhatsApp.']],
  vidT:'What farmers say themselves',
  vidS:'Their own orchards, in their own words.',
  vids:[['yash','Yash Patel','His experience with weak mango trees'],['deepak','Deepak Lad','On mango flowering'],['divyesh','Divyeshbhai, Valsad','A visit to see the fruit in his orchard']],
  vidNote:"Each is one farmer's own experience. Results can differ with soil, weather and care.",
  coT:'Gujarat Bio Organics P. Ltd., Bhavnagar', coS:'Making organic fertilizers and biostimulants for farmers since 2006.',
  call:'Prefer to talk? WhatsApp / call: 99787 91167',
  next:'Next', back:'Back', step:'Question', of:'of', many:'You can choose more than one',
  ageQ:'How old are these mango trees?', yr:'years', plantsL:'How many trees of this age?', plantsP:'e.g. 200',
  probQ:'What problem do you have now?', goalQ:'What do you want most this time?', bearQ:'Do you get flowers and a crop every year?',
  cultQ:'Do you use Cultar / Paclobutrazol?', yearsP:'For how many years? (e.g. 5)', careQ:'How much do you plan to do for the orchard this time?',
  soilQ:'Which of these have you used in recent years?', soilInfo:'Beneficial soil microbes help make nutrients available to the plant. Continuous use of these chemicals can reduce their numbers.',
  npkQ:'Add Immunity NPK Biofertilizer too?', npkInfo:'Azotobacter helps with nitrogen, PSB with phosphorus and KMB with potash. The dose is half of the Mango Special drenching dose.',
  sprayQ:'Can you do a foliar spray in this orchard?', tankL:'Which spray equipment?', tanksL:'How many pumps / tanks per round?', roundsL:'How many rounds?', tankNames:{'15':'15 L pump','20':'20 L pump','200':'200 L drum','500':'500 L tank','1000':'1000 L tank','2000':'2000 L tank'},
  youQ:'Whose name should the plan be in?', nameL:'Your name', mobL:'Mobile number (WhatsApp)', vilL:'Village / taluka', farmL:'Farm name (optional)',
  errName:'Please enter your name', errMob:'Please enter a valid 10-digit mobile number', errVil:'Please enter your village',
  priv:'Your details are used only by the Mango Support Team to contact you about this plan.', show:'Show my plan',
  planFor:"'s plan", heardT:'What you told us', urgentT:'Please do not rely on this calculation alone', urgent:'If trees are drying or there has been no crop for 2 years, the cause cannot be judged without seeing them. Send photos of the tree, roots and leaves on WhatsApp and the team will take a look.',
  urgentBtn:'Send photos on WhatsApp',
  group:'Group', perT:'How much per plant', basal:'Basal, in the ring', drench:'Drenching', drenchAdd:'In drenching water', plantsW:'trees',
  spray:'Foliar spray', sprayLine:function(n,t,r,ml,w){return n+' × '+t+' × '+r+' rounds. In each tank <b>'+ml+' ml Mango Special + '+ml+' ml Gold</b>. Total water '+w+' L.'},
  buyT:'Total needed for the whole orchard', bag:'bags', need:'needed', stepsT:'How to apply',
  steps:['Make a circular ring near the plant periphery / drip line.','Apply Granules evenly in the ring.','Mix Mango Special and (if chosen) NPK Biofertilizer in water.','Pour the solution in the ring, cover with soil and irrigate.'],
  sendWA:'Send this plan on WhatsApp and ask the price', addGroup:'+ Add trees of another age', print:'Print / PDF', restart:'Start again',
  disclaimer:'This calculation is based on your answers. It is not a lab test of soil or plant. Results can vary with soil, weather and care.',
  saveFail:'Could not save your details. Your plan is below, please send it on WhatsApp.',
  consent:'We use cookies to improve the site and measure ads.', yes:'OK', no:'Necessary only',
  waHi:'Hello, I checked my orchard on Mango Mastery. I want to discuss this plan and know the price.', waName:'Name', waVil:'Village', waNeed:'My requirement', waPhotos:'Hello, my mango trees have a problem. I am sending photos, can you take a look?'
}};

var O = {
problems:{none:['હાલ કોઈ મોટી તકલીફ નથી','फिलहाल कोई बड़ी समस्या नहीं','No major problem now'],dying:['આંબા સુકાઈ રહ્યા છે','पेड़ सूख रहे हैं','Trees are drying'],weak:['નબળો / ધીમો વિકાસ','कमजोर / धीमी बढ़वार','Weak / slow growth'],yellow:['પીળાં પાન','पीले पत्ते','Yellow leaves'],root:['નબળાં મૂળ','कमजोर जड़ें','Poor roots'],heat:['ગરમીનો સ્ટ્રેસ','गर्मी का तनाव','Heat stress'],flowering:['ફ્લાવરિંગ ઓછું','फ्लावरिंग कम','Poor flowering'],setting:['ફળ બેસતાં નથી','फल सेटिंग कम','Poor fruit setting'],drop:['ફળ ખરે છે','फल गिरते हैं','Fruit drop'],small:['ફળ નાના રહે છે','फल छोटे रहते हैं','Small fruits'],alternate:['એક વર્ષ પાક, બીજે વર્ષ ઓછો','एक साल फसल, अगले साल कम','One year crop, next year low'],noProduction2:['2 વર્ષથી પાક નથી','2 साल से फसल नहीं','No crop for 2 years'],soil:['જમીન નબળી પડી છે','मिट्टी कमजोर हो गई है','Soil is weakening']},
goals:{growth:['છોડનો ઝડપી વિકાસ','पौधों की तेज बढ़वार','Faster growth'],strength:['મજબૂત છોડ','मजबूत पौधे','Stronger plants'],flowering:['સારું ફ્લાવરિંગ','अच्छी फ्लावरिंग','Better flowering'],setting:['વધુ ફળ બેસે','अच्छी फल सेटिंग','Better fruit setting'],drop:['ફળ ખરવાનું ઓછું થાય','फल गिरना कम हो','Less fruit drop'],size:['ફળની સાઇઝ મોટી થાય','फल का आकार बढ़े','Bigger fruit'],quality:['ફળની ગુણવત્તા','फल की गुणवत्ता','Better quality'],production:['ઉત્પાદન વધે','उत्पादन बढ़े','More production'],yearly:['દર વર્ષે નિયમિત પાક','हर साल नियमित फसल','A regular crop every year']},
bearing:{regular:['હા, દર વર્ષે નિયમિત','हाँ, हर साल नियमित','Yes, regular every year'],inconsistent:['ફૂલ આવે છે, પણ ઉત્પાદન સ્થિર નથી','फूल आते हैं, पर उत्पादन स्थिर नहीं','Flowers come, but production is uneven'],sometimes:['કોઈ વર્ષ સારું, કોઈ વર્ષ નબળું','कोई साल अच्छा, कोई साल कम','Some years good, some poor'],misses:['ઘણી વાર પાક ચૂકી જાય છે','कई बार फसल छूट जाती है','Often misses a crop year'],noProduction2:['2 વર્ષથી યોગ્ય પાક નથી','2 साल से सही फसल नहीं','No proper crop for 2 years'],young:['હજુ પાક લેવાની ઉંમર નથી','अभी फसल की उम्र नहीं','Trees are too young to bear']},
cultar:{regular:['હા, નિયમિત','हाँ, नियमित','Yes, regularly'],occasionally:['હા, ક્યારેક','हाँ, कभी-कभी','Yes, sometimes'],no:['ના','नहीं','No'],notSure:['ખબર નથી','पता नहीं','Not sure']},
care:{basic:['બજેટમાં રહીને કરવું છે','बजट में रहकर करना है','Stay within budget'],balanced:['આપની સલાહ પ્રમાણે કરવું છે','आपकी सलाह के अनुसार करना है','Follow your standard advice'],strong:['સારું પરિણામ જોઈએ છે, વધુ કરીશ','अच्छा परिणाम चाहिए, ज्यादा करूंगा','I will do more for strong results'],best:['પરિણામ પહેલાં, ખર્ચ પછી','पहले परिणाम, खर्च बाद में','Results first, cost second']},
soil:{fungicides:['ફૂગનાશક','फफूंदनाशक','Fungicides'],weedicides:['નીંદણનાશક','खरपतवारनाशक','Weedicides'],insecticides:['જંતુનાશક','कीटनाशक','Insecticides'],rare:['બહુ ઓછો ઉપયોગ','बहुत कम उपयोग','Very little'],notSure:['ખબર નથી','पता नहीं','Not sure']},
npk:{yes:['હા, ઉમેરવું છે','हाँ, जोड़ना है','Yes, add it'],no:['ના, હાલ નહીં','नहीं, अभी नहीं','No, not now']},
spray:{yes:['હા','हाँ','Yes'],no:['ના','नहीं','No']}
};
var AGES=['0-1','1-2','2-4','4-7','7-12','12-20','20-30','30-40','40-50','50-60','60+'];
var IDX={gu:0,hi:1,en:2};

/* ================= v2 diagnosis flow (Nov 2026) =================
   Screens: trees -> see (problems) -> details (follow-ups, only for chosen problems) -> history -> care -> you -> result.
   Removed from the flow: goals, budget level, NPK and spray (the last three are switches on the result page).
   Every answer is saved per question to Supabase (mango_answers) for the future AI diagnosis app. */
var FLOW='v2';
var MONTH=new Date().getMonth();
/* ---------- v3 (23 Nov 2026): spray questions, "why now" copy, kit pitch ---------- */
var SPN={
  q:['સ્પ્રે કેવી રીતે કરો છો?','स्प्रे कैसे करते हैं?','How do you spray?'],
  h:['સાધન પસંદ કરો. એક રાઉન્ડમાં કેટલી ટાંકી લાગે તે લખો. અમે દરેક ટાંકીનું મિશ્રણ અને કુલ જથ્થો કાઢી આપીશું.','साधन चुनें. एक राउंड में कितने टैंक लगते हैं, लिखें. हम हर टैंक का मिश्रण और कुल मात्रा निकाल देंगे.','Pick your equipment and tell us how many tanks one round takes. We will work out the mix for each tank and the total you need.'],
  none:['સ્પ્રે નથી કરતા / હજી નક્કી નથી','स्प्रे नहीं करते / अभी तय नहीं','No spray / not sure yet'],
  tanks:['એક રાઉન્ડમાં કેટલી ટાંકી / પંપ?','एक राउंड में कितने टैंक / पंप?','How many tanks or pumps in one round?'],
  rounds:['કેટલા રાઉન્ડ? (સામાન્ય રીતે 2)','कितने राउंड? (आमतौर पर 2)','How many rounds? (usually 2)'],
  total:['કુલ ટાંકી','कुल टैंक','Total tanks'],
  mix:['દરેક ટાંકીમાં','हर टैंक में','In each tank']
};
var WHY={
 hopper:{
  m:['ઘણા ખેડૂતો મોર પર ચીકાશ દેખાય પછી જ દવા છાંટે છે. ત્યાં સુધીમાં મધિયો મોરનો રસ ચૂસી ચૂક્યો હોય છે. બચાવનો સાચો સમય મોર નીકળતી વખતે, પૂરો ખીલે તે પહેલાં છે.','कई किसान बौर पर चिपचिपाहट दिखने के बाद ही दवा छिड़कते हैं. तब तक फुदका बौर का रस चूस चुका होता है. बचाव का सही समय बौर निकलते समय है, पूरा खिलने से पहले.','Many growers spray only after they see sticky flowers. By then the hoppers have already fed on the panicles. The right time to protect is at panicle emergence, before full bloom.'],
  s:['બગડેલો મોર ફરી આવતો નથી, એટલે મોડું કરવું એટલે પાક ગુમાવવો. ફક્ત આંબા માટે નોંધાયેલી દવા, લેબલ મુજબ, અને પૂરા ખીલેલા મોર પર ક્યારેય નહીં.','बिगड़ा बौर वापस नहीं आता, इसलिए देर का मतलब फसल का नुक़सान. केवल आम के लिए पंजीकृत दवा, लेबल के अनुसार, और पूरे खिले बौर पर कभी नहीं.','Damaged flowers do not grow back, so a late reaction can mean a lost crop. Use only products registered for mango, at the label dose, and never at full bloom.']},
 mildew:{
  m:['ઘણા ખેડૂતો સફેદ ભૂકી દેખાય પછી જ પગલાં લે છે. ઠંડી રાત, ઝાકળ અને ધુમ્મસમાં ફૂગ ઝડપથી ફેલાય છે, અને ભૂકી દેખાય તે પહેલાં રોકવી સહેલી છે.','कई किसान सफ़ेद पाउडर दिखने के बाद ही कदम उठाते हैं. ठंडी रात, ओस और कोहरे में फफूंद तेज़ी से फैलती है, और पाउडर दिखने से पहले उसे रोकना आसान है.','Many growers wait for the white powder before acting. The fungus spreads fastest in cool nights, dew and mist, and it is far easier to stop before the powder shows.'],
  s:['બગડેલો મોર સુધરતો નથી. સમય ટૂંકો છે: મોર નીકળવાથી પૂરો ખીલે તે પહેલાં સુધી. રોજ સવારે બગીચો જુઓ.','बिगड़ा बौर सुधरता नहीं. समय छोटा है: बौर निकलने से पूरा खिलने से पहले तक. रोज़ सुबह बाग़ देखें.','A damaged panicle does not recover. The window is short: from panicle emergence to just before full bloom. Walk the orchard every morning.']},
 flush:{
  m:['ઘણા ખેડૂતો માને છે કે શિયાળામાં વધુ પાણી અને ખાતરથી વધુ મોર આવશે. ઊલટું થાય છે: શિયાળામાં પાણી અને નાઇટ્રોજનથી આંબો મોરને બદલે પાન કાઢે છે.','कई किसान मानते हैं कि सर्दी में ज़्यादा पानी और खाद से ज़्यादा बौर आएगा. उल्टा होता है: सर्दी में पानी और नाइट्रोजन से पेड़ बौर की जगह पत्ते निकालता है.','Many growers believe more water and fertilizer in winter means more flowers. The opposite happens: winter water and nitrogen push the tree to make leaves instead of flowers.'],
  s:['એકવાર આંબો પાન પસંદ કરે પછી તે સીઝનનો મોર પાછો આવતો નથી. મોર પહેલાં પિયત ઘટાડો અને ખાતર જમીન ચકાસણી મુજબ જ આપો.','एक बार पेड़ पत्ते चुन ले तो उस सीज़न का बौर वापस नहीं आता. बौर से पहले सिंचाई घटाएँ और खाद मिट्टी जाँच के अनुसार ही दें.','Once the tree chooses leaves, that season\'s flowering is lost. Cut back watering well before flowering and feed only as your soil test says.']},
 waterOn:{
  m:['ઘણા ખેડૂતો આખો શિયાળો પિયત ચાલુ રાખે છે. ફળ આપતા આંબાને ઑક્ટોબર-નવેમ્બરથી મોર નીકળે ત્યાં સુધી થોડી ખેંચ જોઈએ, જેથી પાનને બદલે મોર બને.','कई किसान पूरी सर्दी सिंचाई चालू रखते हैं. फल देने वाले पेड़ को अक्टूबर-नवंबर से बौर निकलने तक थोड़ा खिंचाव चाहिए, ताकि पत्तों की जगह बौर बने.','Many growers keep irrigating all winter. A bearing tree needs a mild dry spell from about October-November until panicles appear, so it makes flowers instead of leaves.'],
  s:['નવી ફૂટ નીકળે પછી આ તક જતી રહે છે. આ મહિને પગલું લેવું આવતા મહિના કરતાં ઘણું વધુ કામનું છે.','नई फुटान निकलने के बाद यह मौक़ा चला जाता है. इस महीने कदम उठाना अगले महीने से कहीं ज़्यादा काम का है.','The chance closes once new shoots appear. Acting this month is worth far more than acting next month.']},
 reserves:{
  m:['ઘણા ખેડૂતો ભરપૂર પાકને ફક્ત નફો માને છે. ભરપૂર પાક આંબાનો સંગ્રહેલો ખોરાક ખાલી કરી દે છે, એટલે બીજા વર્ષે મોર ઓછો. આ જ એક વર્ષ સારું, બીજું ઓછું ચક્ર છે.','कई किसान भरपूर फसल को सिर्फ़ मुनाफ़ा मानते हैं. भरपूर फसल पेड़ का जमा भोजन ख़त्म कर देती है, इसलिए अगले साल बौर कम. यही एक साल अच्छा, दूसरा कम का चक्र है.','Many growers see a heavy crop as pure profit. A heavy crop uses up the tree\'s stored food, so next year brings fewer flowers. That is the on-year, off-year cycle.'],
  s:['આંબો ઉતાર પછીના મહિનામાં ખોરાક ફરી ભરે છે. તે સમયે છટણી અને ખોરાક આવતા વર્ષનો મોર નક્કી કરે છે. તે ચૂકી ગયા તો આખું વર્ષ રાહ જોવી પડે.','आम तुड़ाई के बाद के महीनों में जमा भोजन फिर भरता है. उसी समय छँटाई और खुराक अगले साल का बौर तय करती है. चूक गए तो पूरा साल इंतज़ार.','The tree refills its reserves in the months right after harvest. Pruning and feeding then decide next year\'s flowering. Miss that window and you wait a whole year.']},
 water:{
  m:['ઘણા ખેડૂતો લખોટી જેવડાં ફળ ખરે ત્યારે દવા કે હવામાનને દોષ આપે છે. મોટે ભાગે કારણ અનિયમિત પાણી છે: સૂકું પછી અચાનક ભારે પિયત, ઉપરથી ગરમ પવન.','कई किसान कंचे जितने फल गिरने पर दवा या मौसम को दोष देते हैं. अक्सर कारण अनियमित पानी है: सूखा, फिर अचानक भारी सिंचाई, ऊपर से गर्म हवा.','Many growers blame the product or the weather when marble-size fruit drops. Most often it is irregular water: a dry spell, then a sudden heavy irrigation, plus hot wind.'],
  s:['ખરી ગયેલું ફળ પાછું આવતું નથી. ફળ બેસે ત્યારથી ફળ મોટું થાય ત્યાં સુધી નિયમિત ભેજ બેઠેલા ફળને બચાવે છે.','गिरा हुआ फल वापस नहीं आता. फल लगने से बढ़ने तक नियमित नमी लगे हुए फल को बचाती है.','Fruit that has dropped is gone. Steady moisture from fruit set through fruit growth protects what the tree has already set.']},
 small:{
  m:['ઘણા ખેડૂતો નાનાં ફળને જાત કે હવામાનનો વાંક માને છે. ફળ મોટાં થવાના સમયે (માર્ચથી મે) પાણી અને પોષણ ઓછાં પડે ત્યારે ફળ નાનાં રહે છે.','कई किसान छोटे फल को किस्म या मौसम का दोष मानते हैं. फल बढ़ने के समय (मार्च से मई) पानी और पोषण कम पड़े तो फल छोटे रहते हैं.','Many growers put small fruit down to the variety or the weather. Fruit stays small when water and nutrition run short while it is growing, from March to May.'],
  s:['ફળનું કદ તે વધે ત્યારે જ નક્કી થાય છે. ઉતાર પછી કશું કરવાથી તે મોટું થતું નથી.','फल का आकार बढ़ने के समय ही तय होता है. तुड़ाई के बाद कुछ करने से वह बड़ा नहीं होता.','Fruit size is decided while the fruit is growing. Nothing done after harvest can make it bigger.']},
 feed:{
  m:['ઘણા ખેડૂતો ફક્ત પાક માટે જ ખાતર આપે છે. નીચેનાં જૂનાં પાન પીળાં થાય તે ઘણી વાર ખોરાકની ઉણપ બતાવે છે, અને ભૂખ્યો આંબો આવતી સીઝનમાં સારો મોર આપી શકતો નથી.','कई किसान सिर्फ़ फसल के लिए खाद देते हैं. नीचे की पुरानी पत्तियाँ पीली होना अक्सर खुराक की कमी दिखाता है, और भूखा पेड़ अगली सीज़न में अच्छा बौर नहीं दे पाता.','Many growers feed only for the crop. Yellow lower leaves often mean the tree is short of food, and a hungry tree cannot flower well next season.'],
  s:['ઉતાર પછી ખોરાક આપવાથી આંબો આવતા મોર પહેલાં તૈયાર થાય છે. શિયાળામાં મોડું ખાતર પાન ફેલાવે છે.','तुड़ाई के बाद खुराक देने से पेड़ अगले बौर से पहले तैयार होता है. सर्दी में देर से खाद पत्ते बढ़ाती है.','Feeding after harvest gets the tree ready before the next flowering. Late feeding in winter pushes leaves instead.']},
 micro:{
  m:['ઘણા ખેડૂતો નવાં પાન પીળાં થાય ત્યારે વધુ NPK નાખે છે. નવાં પીળાં પાન ઘણી વાર ઝિંક કે આયર્નની ઉણપ બતાવે છે, જે વધુ NPKથી સુધરતી નથી.','कई किसान नई पत्तियाँ पीली होने पर और NPK डालते हैं. नई पीली पत्तियाँ अक्सर ज़िंक या आयरन की कमी दिखाती हैं, जो और NPK से ठीक नहीं होती.','Many growers add more NPK when new leaves turn yellow. Yellow new leaves often point to a shortage of zinc or iron, which more NPK does not fix.'],
  s:['નબળી નવી ફૂટ મોર સુધી ચાલે છે. વધુ ખાતર ખરીદતાં પહેલાં જમીન અને પાનની ચકાસણી કરાવો.','कमज़ोर नई फुटान बौर तक चलती है. और खाद ख़रीदने से पहले मिट्टी और पत्ती की जाँच कराएँ.','Weak new growth carries through to flowering. Get a soil and leaf test before spending on more fertilizer.']},
 cultar:{
  m:['ઘણા ખેડૂતો માને છે કે દર વર્ષે Cultar જ મોરનો એકમાત્ર રસ્તો છે. વર્ષો સુધી વાપરવાથી ડાળીઓ ટૂંકી અને આંબો નબળો થઈ શકે છે, ખાસ કરીને ખોરાક ઓછો હોય ત્યારે.','कई किसान मानते हैं कि हर साल कल्टार ही बौर का एकमात्र रास्ता है. सालों तक इस्तेमाल से डालियाँ छोटी और पेड़ कमज़ोर हो सकता है, ख़ासकर कम खुराक में.','Many growers think Cultar every year is the only way to get flowers. Over the years it can shorten shoots and weaken the tree, especially when the tree is underfed.'],
  s:['નબળો આંબો વર્ષે વર્ષે ઓછો પાક આપે છે, અને નુકસાન ધીમે ધીમે જમા થાય છે. ડોઝ વર્ષે વર્ષે વધારશો નહીં; પહેલાં KVK કે અમારી સાથે વાત કરો.','कमज़ोर पेड़ साल दर साल कम फसल देता है, और नुक़सान धीरे-धीरे जमा होता है. डोज़ हर साल न बढ़ाएँ; पहले KVK या हमसे बात करें.','A weakened tree gives less every year, and the damage builds slowly. Do not raise the dose year after year; talk to your KVK or to us first.']},
 borer:{
  m:['ઘણા ખેડૂતો થડના કાણાંને નાની વાત ગણે છે. થડ કોરી ખાનારી ઈયળ થડની અંદર ખાય છે અને ડાળી કે આખો આંબો સુકવી શકે છે.','कई किसान तने के छेद को छोटी बात समझते हैं. तना छेदक इल्ली तने के अंदर खाती है और डाली या पूरा पेड़ सुखा सकती है.','Many growers treat holes in the trunk as a cosmetic problem. Stem borer larvae feed inside the trunk and can dry up branches or the whole tree.'],
  s:['ઈયળ જેટલા દિવસ અંદર રહે તેટલું નુકસાન ઊંડું થાય. કાણાંનો નજીકનો ફોટો આજે જ મોકલો.','इल्ली जितने दिन अंदर रहे, नुक़सान उतना गहरा होता है. छेदों का नज़दीकी फ़ोटो आज ही भेजें.','Every week the larvae stay inside, the damage goes deeper. Send us a close photo of the holes today.']},
 dieback:{
  m:['ઘણા ખેડૂતો સુકાયેલી ડાળી ઝાડ પર જ રહેવા દે છે, સુધરશે એવી આશાએ. સુકારાની ફૂગ ટોચથી નીચે તંદુરસ્ત લાકડામાં ફેલાય છે.','कई किसान सूखी डाली को पेड़ पर ही छोड़ देते हैं, इस उम्मीद में कि ठीक हो जाएगी. सूखे की फफूंद सिरे से नीचे स्वस्थ लकड़ी में फैलती है.','Many growers leave dry branches on the tree, hoping they recover. The dieback fungus travels from the dry tip down into healthy wood.'],
  s:['વહેલા તંદુરસ્ત ભાગ સુધી કાપવાથી નીચેની ડાળી બચે છે. રાહ જોવાથી વધુ ડાળીઓ જાય છે.','जल्दी स्वस्थ हिस्से तक काटने से नीचे की डाली बचती है. इंतज़ार से और डालियाँ जाती हैं.','Cutting back to healthy wood early saves the branch below. Waiting costs more branches.']},
 roots:{
  m:['ઘણા ખેડૂતો આખો આંબો ઝાંખો પડે ત્યારે વધુ ખાતર નાખે છે. પાણી ભરાવું, સખત જમીન કે ક્ષાર હોય ત્યારે મૂળ ખાતર લઈ શકતાં નથી, એટલે વધુ ખાતર ફક્ત ખર્ચ વધારે છે.','कई किसान पूरा पेड़ मुरझाने पर और खाद डालते हैं. जलभराव, सख़्त मिट्टी या खारापन हो तो जड़ें खाद नहीं ले पातीं, इसलिए और खाद सिर्फ़ ख़र्च बढ़ाती है.','Many growers add more fertilizer when the whole tree looks pale. With waterlogging, hard soil or salt, the roots cannot take fertilizer up, so more only adds cost.'],
  s:['મૂળની તકલીફ ધીમે દેખાય છે અને ધીમે સુધરે છે. પહેલાં નિતાર અને જમીન સુધારો; કારણ શોધવા ફોટા મોકલો.','जड़ की समस्या धीरे दिखती है और धीरे सुधरती है. पहले निकासी और मिट्टी सुधारें; कारण खोजने के लिए फ़ोटो भेजें.','Root trouble shows slowly and heals slowly. Fix drainage and soil first, and send us photos so we can help find the cause.']}
};
var KIT={
  h:['જૂની રીત છોડો: વર્ષ આખાનો એક પ્લાન','पुरानी आदतें छोड़ें: पूरे साल की एक योजना','Break the old habits: one plan for the whole year'],
  p:['આ સમયે Immunity Mango Special અને Immunity Gold નો છંટકાવ: સિંચાઈ વગર પણ થાય અને ખર્ચ ઓછો. તે આંબાને તબક્કે તબક્કે પોષણ આપી મજબૂત બનાવે છે, જેથી મોર, ફળ બેસવું અને ફળ ટકવું સારું થાય. ભારતભરના આંબા ઉગાડનારા ખેડૂતોનો ભરોસો.','इस समय Immunity Mango Special और Immunity Gold का छिड़काव: बिना सिंचाई के भी होता है और खर्च कम. यह पेड़ को चरण दर चरण पोषण देकर मज़बूत बनाता है, ताकि बौर, फल लगना और फल टिकना बेहतर हो. पूरे भारत के आम उत्पादकों का भरोसा.','Right now: a spray of Immunity Mango Special and Immunity Gold. It works without irrigation and keeps the cost low. It feeds and strengthens the tree stage by stage, so flowering, fruit set and fruit hold are stronger. Trusted by mango growers across India.'],
  b1:['તમારા {n} આંબા ({a} વર્ષના) માટે જથ્થો ઉપરના પ્લાનમાં કાઢેલો છે','आपके {n} पेड़ ({a} साल) की मात्रा ऊपर की योजना में निकाली गई है','Quantities for your {n} trees ({a} years old) are already worked out in the plan above'],
  b2:['અંદાજ નહીં, ઉંમર પ્રમાણે ગણતરી: બગાડ ઓછો','अंदाज़ा नहीं, उम्र के हिसाब से गणना: बर्बादी कम','Worked out by tree age, not guesswork, so less waste'],
  b3:['WhatsApp પર અમારા નિષ્ણાત તમારા ફોટા જુએ છે, મફત','WhatsApp पर हमारे विशेषज्ञ आपके फ़ोटो देखते हैं, मुफ़्त','Our expert looks at your photos on WhatsApp, free'],
  btn:['Mango Kit જુઓ','Mango Kit देखें','See the Mango Kit'],
  wa:['WhatsApp પર પૂછો','WhatsApp पर पूछें','Ask on WhatsApp']
};
var WHYT={
  h:['⏳ તમારા બગીચામાં આ કેમ હવે જ જરૂરી છે','⏳ आपके बाग़ में यह अभी क्यों ज़रूरी है','⏳ Why this needs attention soon in your orchard'],
  i:['તમે આ જણાવ્યું:','आपने यह बताया:','You told us about:'],
  j:['આની પાછળ સામાન્ય રીતે શું હોય છે, અને ઘણા ખેડૂતો ક્યાં ભૂલ કરે છે:','इसके पीछे आमतौर पर क्या होता है, और कई किसान कहाँ चूक करते हैं:','Here is what usually sits behind it, and where many growers go wrong:'],
  b:['ઘણા માને છે','अक्सर माना जाता है','Common belief'],
  s:['સમય કેમ મહત્ત્વનો','समय क्यों मायने रखता है','Why timing matters']
};
var LOSS={
 hopper:['આ વર્ષનો મોર ફળ બેસે તે પહેલાં બગડી શકે.','इस साल का बौर फल लगने से पहले बिगड़ सकता है.','This year\'s flowers can be damaged before they set fruit.'],
 mildew:['ચેપવાળો મોર ખરી શકે અને ફળ બેસવાનું ઓછું થાય.','संक्रमित बौर झड़ सकता है और फल कम लगते हैं.','Infected flowers can fall, so fewer fruit set.'],
 flush:['વધુ એક સીઝન મોરને બદલે પાન.','एक और सीज़न बौर की जगह पत्ते.','Another season of leaves instead of flowers.'],
 waterOn:['આંબો પાન બનાવતો રહે છે અને આ વર્ષનો મોરનો સમય નીકળી જાય છે.','पेड़ पत्ते बनाता रहता है और इस साल का बौर का समय निकल जाता है.','The tree keeps making leaves and this year\'s flowering window passes.'],
 reserves:['ભરપૂર પાક પછી નબળો મોર આવે છે અને ચક્ર ચાલુ રહે છે.','भरपूर फसल के बाद कमज़ोर बौर आता है और चक्र चलता रहता है.','A weak flowering year follows the heavy crop, and the cycle repeats.'],
 water:['લખોટી જેવડાં વધુ ફળ ખરે છે અને ઉતાર ઓછો મળે છે.','कंचे जितने और फल गिरते हैं और तुड़ाई कम मिलती है.','More marble-size fruit is lost and there is less to harvest.'],
 small:['ઉતાર વખતે ફળ નાનાં રહે છે.','तुड़ाई के समय फल छोटे रहते हैं.','Fruit stays small at harvest.'],
 feed:['ભૂખ્યો આંબો આવતી સીઝનમાં નબળો મોર આપે છે.','भूखा पेड़ अगली सीज़न में कमज़ोर बौर देता है.','A hungry tree flowers poorly next season.'],
 micro:['નબળી નવી ફૂટ આવતા મોર સુધી ચાલે છે.','कमज़ोर नई फुटान अगले बौर तक चलती है.','Weak new growth carries into the next flowering.'],
 cultar:['આંબો વર્ષે વર્ષે નબળો થતો જાય છે.','पेड़ साल दर साल कमज़ोर होता जाता है.','The tree gets weaker year after year.'],
 borer:['આજે સુકાયેલી ડાળી, ઈયળ રહી તો આખો આંબો જઈ શકે.','आज सूखी डाली, इल्ली रही तो पूरा पेड़ जा सकता है.','A dry branch today, and the whole tree if the larvae stay.'],
 dieback:['સુકારો નીચે તરફ વધે છે અને વધુ ડાળીઓ જાય છે.','सूखा नीचे की ओर बढ़ता है और और डालियाँ जाती हैं.','The dry patch moves down and more branches are lost.'],
 roots:['જે ખાતર મૂળ લઈ શકતાં નથી તેના પર ખર્ચ થાય છે.','जो खाद जड़ें नहीं ले पातीं, उस पर ख़र्च होता है.','Money goes on fertilizer the roots cannot use.']
};
var NOWT={
  h:['હવે પગલું લેશો તો / રાહ જોશો તો','अभी कदम उठाएँ तो / इंतज़ार करें तो','If you act now / if you wait'],
  a:['હવે','अभी','Now'],
  w:['રાહ જોશો તો','इंतज़ार करेंगे तो','If you wait'],
  season:[
    ['આ મોરની સીઝન છે. તક અઠવાડિયાઓની છે, મહિનાઓની નહીં.','यह बौर की सीज़न है. मौक़ा हफ़्तों का है, महीनों का नहीं.','This is the flowering season. The window is weeks, not months.'],
    ['ફળ મોટાં થઈ રહ્યાં છે. આવાં થોડાં અઠવાડિયાં ફળનું કદ અને ખરણ નક્કી કરે છે.','फल बढ़ रहे हैं. ये कुछ हफ़्ते फल का आकार और झड़ना तय करते हैं.','Fruit is growing. The next few weeks decide fruit size and drop.'],
    ['ઉતાર પછીના મહિનાઓ આવતા વર્ષનો મોર બનાવે છે.','तुड़ाई के बाद के महीने अगले साल का बौर बनाते हैं.','The months after harvest build next year\'s flowering.']],
  act:['આજે જ કરો','आज ही करें','Act today'],
  callL:['ફોન કરો','फ़ोन करें','Call now'],
  waL:['WhatsApp પર ફોટા મોકલો','WhatsApp पर फ़ोटो भेजें','Send photos on WhatsApp'],
  tH:['આ ખેડૂતો પોતે શું કહે છે','ये किसान ख़ुद क्या कहते हैं','What these farmers say themselves'],
  tN:['આ ખેડૂતોના પોતાના અનુભવ છે.','ये किसानों के अपने अनुभव हैं.','These are the farmers\' own experiences.'],
  play:['વિડિયો જુઓ','वीडियो देखें','Watch the video']
};
var TESTI=[
  {f:'yash',n:['યશ પટેલ','यश पटेल','Yash Patel'],l:['નબળા આંબા વિશે પોતાનો અનુભવ','कमज़ोर आम के पेड़ों पर अपना अनुभव','His experience with weak trees'],m:['dying','yellow','noProduction2','alternate','small']},
  {f:'deepak',n:['દીપક લાડ','दीपक लाड','Deepak Lad'],l:['આંબામાં ફ્લાવરિંગ વિશે','आम में बौर के बारे में','On flowering in his orchard'],m:['flowering','alternate','pest','noProduction2']},
  {f:'divyesh',n:['દિવ્યેશભાઈ, વલસાડ','दिव्येशभाई, वलसाड','Divyeshbhai, Valsad'],l:['બગીચામાં ફળની મુલાકાત','बाग़ में फलों की झलक','A walk through his fruiting orchard'],m:['drop','small','alternate']}
];
var VIDHOST='https://www.gujaratbio.com/assets/media/mango/';
var RES={
  h:['🔬 સંશોધન શું કહે છે','🔬 शोध क्या कहता है','🔬 What the research says'],
  i:['Immunity Mango Special, Immunity Gold અને Immunity Granules ના મુખ્ય ઘટકો પર જુદી જુદી યુનિવર્સિટીઓમાં આંબા પર ટ્રાયલ થયા છે, અને તેમાં ફાયદા જોવા મળ્યા છે:','Immunity Mango Special, Immunity Gold और Immunity Granules के मुख्य तत्वों पर अलग-अलग विश्वविद्यालयों में आम पर ट्रायल हुए हैं, और उनमें फ़ायदे मिले हैं:','The key ingredients inside Immunity Mango Special, Immunity Gold and Immunity Granules have been trialled on mango at different universities, and the trials found benefits:'],
  c:[
   ['આમ્રપાલી આંબાના બે વર્ષના ટ્રાયલમાં ફળનું સૌથી વધુ વજન, સૌથી વધુ ફળ અને ઝાડદીઠ સૌથી વધુ ઉત્પાદન મળ્યું, સાથે ફળમાં વિટામિન C પણ વધુ.','आम्रपाली आम के दो साल के ट्रायल में फल का सबसे ज़्यादा वज़न, सबसे ज़्यादा फल और प्रति पेड़ सबसे ज़्यादा उपज मिली, साथ में फल में विटामिन C भी ज़्यादा.','In a two-year Amrapali trial, treated trees gave the heaviest fruit, the most fruit and the highest yield per tree, along with more vitamin C in the fruit.'],
   ['જૂનાગઢ કૃષિ યુનિવર્સિટીના કેસર ટ્રાયલમાં ફળ બેસવું અને ફળ ટકવું સૌથી સારું રહ્યું અને ફળ ખરવું ઓછું થયું.','जूनागढ़ कृषि विश्वविद्यालय के केसर ट्रायल में फल लगना और फल टिकना सबसे अच्छा रहा और फल झड़ना कम हुआ.','In a Junagadh Agricultural University trial on Kesar, fruit set and fruit retention were best and fruit drop was lower.'],
   ['ઇજિપ્તના બે વર્ષના હાફૂસ ટ્રાયલમાં ઝાડદીઠ ઉત્પાદન બિન-છંટકાવવાળા ઝાડ કરતાં આશરે 11 થી 15% વધ્યું.','मिस्र के दो साल के हापुस ट्रायल में प्रति पेड़ उपज बिना छिड़काव वाले पेड़ों से लगभग 11 से 15% बढ़ी.','In a two-season Alphonse trial in Egypt, yield per tree rose by about 11 to 15% over untreated trees.'],
   ['પાકિસ્તાનના ટ્રાયલમાં છંટકાવવાળા ઝાડ પર પાકતા સુધી વધુ ફળ ટક્યાં.','पाकिस्तान के ट्रायल में छिड़काव वाले पेड़ों पर पकने तक ज़्यादा फल टिके.','In a trial in Pakistan, treated trees held more fruit through to maturity.']
  ],
  f:['સંદર્ભો','संदर्भ','References'],
  n:['આ સ્વતંત્ર સંશોધનો છે, જેમાં અલગ ઉત્પાદનો અને માત્રા વપરાઈ હતી. તમારા બગીચા માટેનો જથ્થો ઉપરના પ્લાનમાં છે.','ये स्वतंत्र शोध हैं, जिनमें अलग उत्पाद और मात्रा इस्तेमाल हुई थी. आपके बाग़ के लिए मात्रा ऊपर की योजना में है.','These are independent studies that used their own products and doses. The quantities for your orchard are in the plan above.']
};
var REFS=[
 'Ramteke V., Thakur P. and Singh Y. (2024). Foliar application of biostimulants enhances yield and fruit quality of mango (Mangifera indica L.) cv. Amrapali. Progressive Horticulture 56(1): 31-34. <a href="https://doi.org/10.5958/2249-5258.2024.00005.0" target="_blank" rel="noopener">doi:10.5958/2249-5258.2024.00005.0</a>',
 'Aal J.M. and Karetha K.M. (2022). Effect of foliar application of biostimulants and silicon on fruit set and drop of mango (Mangifera indica L.) cv. Kesar. The Pharma Innovation Journal 11(10): 591-595. Junagadh Agricultural University. <a href="https://www.thepharmajournal.com/archives/?ArticleId=16081&issue=10&vol=11&year=2022" target="_blank" rel="noopener">thepharmajournal.com</a>',
 'Ali H.A., Ibrahim H.I.M. and Noaman M.G.M. (2025). Effect of amino acids and chitosan foliar application on yield and fruit quality of mango "Alphonse". Future of Horticulture 1: 1-10. <a href="https://doi.org/10.37229/fsa.fjh.2025.01.08" target="_blank" rel="noopener">doi:10.37229/fsa.fjh.2025.01.08</a>',
 'Hasnain M. et al. (2023). Application of amino acids on mango tree (Mangifera indica L.) cv. Rataul No. 12: assessment of fruit fly infestation and postharvest parameters. Sarhad Journal of Agriculture 39(3): 745-756. <a href="https://dx.doi.org/10.17582/journal.sja/2023/39.3.745.756" target="_blank" rel="noopener">doi:10.17582/journal.sja/2023/39.3.745.756</a>'
];
var METH={
  q:['તમે કઈ રીતે આપવા માંગો છો તે પસંદ કરો:','आप किस तरीके से देना चाहते हैं, चुनें:','Choose how you want to apply it:'],
  foliar:['છંટકાવ','छिड़काव','Foliar spray'],foliarS:['હમણાં માટે શ્રેષ્ઠ','अभी के लिए सबसे अच्छा','Best for now'],
  basal:['જમીનમાં (બેઝલ)','ज़मीन में (बेसल)','Basal (soil)'],basalS:['સિંચાઈ જોઈએ','सिंचाई चाहिए','Needs irrigation'],
  drench:['ડ્રેન્ચિંગ','ड्रेंचिंग','Drenching'],drenchS:['સિંચાઈ જોઈએ','सिंचाई चाहिए','Needs irrigation'],
  foliarN:['હમણાં સિંચાઈ ન હોય ત્યારે છંટકાવ સૌથી સરળ અને અસરકારક રીત છે. પાંદડા પર સીધો છંટકાવ થાય છે.','अभी जब सिंचाई नहीं है, तब छिड़काव सबसे आसान और असरदार तरीका है. सीधे पत्तों पर छिड़काव होता है.','When irrigation is not available, spraying is the easiest way to apply it now. It goes straight onto the leaves.'],
  basalN:['બેઝલ ખાતર આપ્યા પછી સિંચાઈ જરૂરી છે. પાણી મળે ત્યારે જ આ રીત અપનાવો.','बेसल खाद देने के बाद सिंचाई ज़रूरी है. पानी मिलने पर ही यह तरीका अपनाएं.','Basal application needs irrigation afterwards. Choose this once water is available.'],
  drenchN:['ડ્રેન્ચિંગ માટે ઝાડ નીચે ભેજ/સિંચાઈ જરૂરી છે. પાણી મળે ત્યારે જ આ રીત અપનાવો.','ड्रेंचिंग के लिए पेड़ के नीचे नमी/सिंचाई ज़रूरी है. पानी मिलने पर ही यह तरीका अपनाएं.','Drenching needs soil moisture or irrigation. Choose this once water is available.'],
  noSpray:['છંટકાવની માત્રા જોવા માટે નીચે “પ્લાન ગોઠવો” માં છંટકાવનું સાધન અને ટાંકી પસંદ કરો.','छिड़काव की मात्रा देखने के लिए नीचे “प्लान बदलें” में छिड़काव का साधन और टंकी चुनें.','To see the spray quantity, choose your spray equipment and tank size under “Adjust plan” below.']
};
function sprayTot(gs){var c=C.calcGroup(gs[0])||{};return{mangoL:c.sprayL||0,goldL:c.goldL||0,water:c.water||0}}
var SP5={
  intro:['આ સમયે ફક્ત છંટકાવ: Mango Special + Gold. સિંચાઈ વગર પણ થાય, ઓછો ખર્ચ, અને સીધું પાંદડા સુધી પહોંચે.','इस समय सिर्फ़ छिड़काव: Mango Special + Gold. बिना सिंचाई के भी हो जाता है, कम खर्च, और सीधे पत्तों तक पहुंचता है.','For now, spraying only: Mango Special + Gold. It works without irrigation, keeps the cost low and reaches the leaves directly.'],
  planT:['આખા બગીચા માટે છંટકાવ પ્લાન','पूरे बगीचे के लिए छिड़काव योजना','Spray plan for the whole orchard'],
  noSpray:['છંટકાવની માત્રા માટે નીચે તમારું સ્પ્રે સાધન, એક રાઉન્ડના પંપ/ટાંકી અને રાઉન્ડ પસંદ કરો. 15 લિટરનો હાથ પંપ પણ ચાલે.','छिड़काव की मात्रा के लिए नीचे अपना स्प्रे साधन, एक राउंड के पंप/टंकी और राउंड चुनें. 15 लीटर का हाथ पंप भी चलेगा.','To see the spray quantity, choose your spray equipment, pumps/tanks per round and rounds below. A 15 L hand pump works too.'],
  steps:[
   ['પંપ/ટાંકીમાં અડધું ચોખ્ખું પાણી ભરો.','पंप/टंकी में आधा साफ़ पानी भरें.','Fill the pump or tank half way with clean water.'],
   ['ઉપર લખેલી માત્રા પ્રમાણે Mango Special અને Gold ઉમેરો અને સારી રીતે હલાવો.','ऊपर लिखी मात्रा के अनुसार Mango Special और Gold डालें और अच्छी तरह मिलाएं.','Add Mango Special and Gold as per the quantity above and mix well.'],
   ['બાકીનું પાણી ભરી ફરી હલાવો.','बाकी पानी भरकर फिर मिलाएं.','Top up with water and mix again.'],
   ['સવારે વહેલા કે સાંજે, પાંદડાની બંને બાજુ સરખો છંટકાવ કરો.','सुबह जल्दी या शाम को, पत्तों के दोनों तरफ़ बराबर छिड़काव करें.','Spray early morning or evening, evenly on both sides of the leaves.'],
   ['બીજી દવા સાથે ભેળવતા પહેલાં WhatsApp પર અમને પૂછો.','किसी दूसरी दवा के साथ मिलाने से पहले WhatsApp पर हमसे पूछें.','Ask us on WhatsApp before mixing with any other spray.']
  ]
};
function tr(a){return a[IDX[S?S.lang:'gu']]}
var N={
  treesQ:['તમારા આંબા વિશે','आपके आम के पेड़','About your trees'],
  ageQ:['આંબા કેટલા વર્ષના છે?','पेड़ कितने साल के हैं?','How old are the trees?'],
  varQ:['કઈ જાત? (મરજિયાત)','कौन सी किस्म? (वैकल्पिक)','Which variety? (optional)'],
  seeQ:['બગીચામાં શું દેખાય છે?','बाग़ में क्या दिख रहा है?','What do you see in the orchard?'],
  seeH:['જે દેખાય તે બધું પસંદ કરો.','जो दिखे, सब चुनें.','Pick everything you see.'],
  detQ:['થોડું વધુ જણાવો','थोड़ा और बताइए','Tell us a little more'],
  detH:['આ જવાબોથી કારણ નક્કી કરવામાં મદદ મળે છે.','इन जवाबों से कारण समझने में मदद मिलती है.','These answers help us find the cause.'],
  histQ:['બગીચાનો ઇતિહાસ','बाग़ का इतिहास','Orchard history'],
  careQ:['પાણી અને દવા','पानी और दवा','Water and sprays'],
  youQ:['પરિણામ કોના નામે મોકલીએ?','नतीजा किसके नाम से भेजें?','Whose name should we put on the result?'],
  distL:['તાલુકો / જિલ્લો (મરજિયાત)','तहसील / ज़िला (वैकल्पिक)','Taluka / district (optional)'],
  vilL:['ગામ','गाँव','Village'],
  irrQ:['પિયત કેવી રીતે આપો છો?','सिंचाई कैसे करते हैं?','How do you irrigate?'],
  chemQ:['છેલ્લાં વર્ષોમાં આમાંથી શું વધુ વાપર્યું?','पिछले सालों में इनमें से क्या ज़्यादा इस्तेमाल किया?','Which of these have you used a lot in recent years?'],
  waterNowQ:['હાલ મોટા આંબાને પિયત ચાલુ છે?','अभी बड़े पेड़ों में सिंचाई चल रही है?','Are you watering the bearing trees right now?'],
  show:['મારું પરિણામ બતાવો','मेरा नतीजा दिखाएँ','Show my result'],
  resT:['તમારા બગીચાનું પરિણામ','आपके बाग़ का नतीजा','Your orchard result'],
  diagT:['શું થઈ રહ્યું હોઈ શકે','क्या हो रहा हो सकता है','What may be happening'],
  diagNote:['આ તમારા જવાબો પરથી અંદાજ છે, લેબ તપાસ નથી. ફોટા જોઈને ટીમ પાકું કહેશે.','यह आपके जवाबों पर आधारित अंदाज़ा है, लैब जाँच नहीं. फ़ोटो देखकर टीम पक्का बताएगी.','This is an estimate from your answers, not a lab test. The team can confirm from photos.'],
  likely:['મોટે ભાગે','संभावित','Likely'], possible:['શક્ય','हो सकता है','Possible'], info:['જાણકારી','जानकारी','Good to know'],
  read:['વિગત વાંચો','विस्तार से (ગુજરાતી)','Read more (Gujarati)'],
  nowT:['આ મહિને બગીચામાં','इस महीने बाग़ में','This month in the orchard'],
  planT:['તમારો પ્લાન','आपका प्लान','Your plan'],
  adjT:['પ્લાન બદલો','प्लान बदलें','Adjust the plan'],
  careL:['આ વખતે કેટલું કરવું છે?','इस बार कितना करना है?','How much do you want to do this time?'],
  npkL:['NPK Biofertilizer ઉમેરવું છે?','NPK Biofertilizer जोड़ना है?','Add NPK Biofertilizer?'],
  sprayL:['ફોલિયર સ્પ્રે પણ કરવો છે?','फ़ोलियर स्प्रे भी करना है?','Also do a foliar spray?'],
  photoT:['4 ફોટા મોકલો, ટીમ જોઈને કહેશે','4 फ़ोटो भेजें, टीम देखकर बताएगी','Send 4 photos, the team will check'],
  photos:[['આખો આંબો','पूरा पेड़','Whole tree'],['તકલીફ નજીકથી','समस्या पास से','The problem, close up'],['થડનો નીચલો ભાગ','तने का निचला हिस्सा','Base of the trunk'],['થડ પાસેની જમીન','तने के पास की मिट्टी','Soil near the trunk']],
  photoBtn:['ફોટા WhatsApp પર મોકલો','फ़ोटो WhatsApp पर भेजें','Send photos on WhatsApp'],
  askT:['મેંગો એક્સપર્ટને પૂછો','मैंगो एक्सपर्ट से पूछें','Ask a Mango Expert'],
  askS:['અમારા આંબાના નિષ્ણાત તમને ફોન કરશે. મફત.','हमारे आम विशेषज्ञ आपको फ़ोन करेंगे. मुफ़्त.','Our mango expert will call you. Free.'],
  askQ:['તમારો સવાલ (મરજિયાત)','आपका सवाल (वैकल्पिक)','Your question (optional)'],
  askBtn:['મને ફોન કરો','मुझे फ़ोन करें','Call me back'],
  askDone:['થઈ ગયું. અમારા નિષ્ણાત જલ્દી ફોન કરશે.','हो गया. हमारे विशेषज्ञ जल्द फ़ोन करेंगे.','Done. Our expert will call you soon.'],
  callNow:['હમણાં જ ફોન કરો','अभी फ़ोन करें','Call now'],
  kitT:['Immunity Mango Kit વિશે','Immunity Mango Kit के बारे में','About the Immunity Mango Kit'],
  kitS:['ઉત્પાદનો, પૅક સાઇઝ, વાપરવાની રીત અને ખેડૂતોના વિડિયો.','उत्पाद, पैक साइज़, इस्तेमाल का तरीका और किसानों के वीडियो.','Products, pack sizes, how to use, farmer videos.'],
  storiesL:['ખેડૂતોના અનુભવ જુઓ','किसानों के अनुभव देखें','Watch farmer stories'],
  urgentT:['આ તકલીફમાં રાહ ન જુઓ','इस समस्या में देर न करें','Do not wait on this one'],
  urgent:['આંબો સુકાતો હોય, થડમાં કાણાં હોય કે 2 વર્ષથી પાક ન હોય, તો ફોટા જોયા વગર સાચી સલાહ ન આપી શકાય. આજે જ ફોટા મોકલો.','पेड़ सूख रहा हो, तने में छेद हों या 2 साल से फसल न हो, तो फ़ोटो देखे बिना सही सलाह नहीं दी जा सकती. आज ही फ़ोटो भेजें.','If a tree is drying, has holes in the trunk or has not borne for 2 years, nobody can advise without seeing it. Send photos today.']
};
var O2={
  see:{flowering:['🌼','ફૂલ (મોર) ઓછાં આવે છે','बौर कम आता है','Few flowers'],drop:['🥭','ફૂલ આવે, ફળ ખરી જાય','फल गिर जाते हैं','Fruit drops'],small:['📏','ફળ નાનાં રહે છે','फल छोटे रहते हैं','Small fruit'],
       alternate:['🔁','એક વર્ષ પાક, બીજે વર્ષ ઓછો','एक साल फसल, अगले साल कम','Good one year, poor the next'],pest:['🐛','મોર પર ચીકાશ કે સફેદ ભૂકી','बौर पर चिपचिपाहट या सफ़ेद पाउडर','Sticky or white powder on flowers'],
       dying:['🍂','આંબો કે ડાળી સુકાય છે','पेड़ या डाली सूख रही है','Tree or branch drying'],yellow:['🟡','પાન પીળાં / આંબો નબળો','पत्ते पीले / पेड़ कमज़ोर','Yellow leaves / weak tree'],
       noProduction2:['⏳','2 વર્ષથી પાક નથી','2 साल से फसल नहीं','No crop for 2 years'],none:['✅','હાલ કોઈ મોટી તકલીફ નથી','अभी कोई बड़ी समस्या नहीं','No major problem now']},
  variety:{kesar:['કેસર','केसर','Kesar'],alphonso:['હાફૂસ','हापुस (अल्फांसो)','Alphonso'],rajapuri:['રાજાપુરી','राजापुरी','Rajapuri'],other:['બીજી / મિક્સ','अन्य / मिक्स','Other / mixed']},
  dryWhere:{q:['સુકારો ક્યાંથી શરૂ થયો?','सूखना कहाँ से शुरू हुआ?','Where did the drying start?'],when:['dying'],
       o:{tip:['ડાળીની ટોચથી નીચે તરફ','डाली के सिरे से नीचे की ओर','From branch tips downwards'],trunk:['થડમાં કાણાં, નીચે લાકડાનો ભૂકો','तने में छेद, नीचे बुरादा','Holes in the trunk, sawdust below'],whole:['આખો આંબો ઝાંખો, પાન પીળાં','पूरा पेड़ मुरझाया, पत्ते पीले','Whole tree pale, leaves yellow'],oneSide:['એક બાજુની ડાળીઓ','एक तरफ़ की डालियाँ','Branches on one side']}},
  leavesInstead:{q:['મોરને બદલે નવાં લાલ-કુમળાં પાન આવે છે?','बौर की जगह नई लाल-कोमल पत्तियाँ आती हैं?','Do new red leaves come instead of flowers?'],when:['flowering'],
       o:{yes:['હા','हाँ','Yes'],no:['ના','नहीं','No'],notSure:['ખબર નથી','पता नहीं','Not sure']}},
  dropSize:{q:['ફળ ખરે ત્યારે કેવડાં હોય છે?','गिरते समय फल कितने बड़े होते हैं?','How big are the fruits when they drop?'],when:['drop'],
       o:{tiny:['રાઈ-વટાણા જેવડાં','सरसों-मटर जितने','Mustard to pea size'],marble:['લખોટી જેવડાં','कंचे जितने','Marble size'],big:['મોટાં ફળ','बड़े फल','Big fruit']}},
  pestSign:{q:['મોર પર શું દેખાય છે?','बौर पर क्या दिखता है?','What do you see on the flowers?'],when:['pest'],
       o:{sticky:['ચીકાશ, નાનાં ઊડતાં જીવડાં','चिपचिपाहट, छोटे उड़ते कीड़े','Sticky, tiny jumping insects'],white:['સફેદ લોટ જેવી ભૂકી','सफ़ेद आटे जैसा पाउडर','White flour-like powder'],both:['બંને','दोनों','Both'],notSure:['ખબર નથી','पता नहीं','Not sure']}},
  yellowWhere:{q:['પીળાશ ક્યાં છે?','पीलापन कहाँ है?','Where is the yellowing?'],when:['yellow'],
       o:{newLeaves:['નવાં પાનમાં','नई पत्तियों में','On new leaves'],oldLeaves:['જૂનાં, નીચેનાં પાનમાં','पुरानी, नीचे की पत्तियों में','On old, lower leaves'],whole:['આખા આંબામાં','पूरे पेड़ में','The whole tree']}},
  prunedAfter:{q:['ગયા ઉતાર પછી છટણી કરી હતી?','पिछली तुड़ाई के बाद छँटाई की थी?','Did you prune after the last harvest?'],when:['alternate','noProduction2'],
       o:{yes:['હા','हाँ','Yes'],no:['ના','नहीं','No']}},
  treeLooks:{q:['પાક વગરનો આંબો કેવો દેખાય છે?','बिना फसल का पेड़ कैसा दिखता है?','How does the tree without a crop look?'],when:['noProduction2'],
       o:{leafy:['લીલોછમ, પાન ભરપૂર','हरा-भरा, पत्ते भरपूर','Green and leafy'],weak:['નબળો, ડાળીઓ સુકાય','कमज़ोर, डालियाँ सूखती','Weak, branches drying']}},
  irrigation:{drip:['ટપક','ड्रिप','Drip'],flood:['ખુલ્લું / રેલાવીને','खुला / बहाकर','Flood / basin'],rainfed:['વરસાદ આધારિત','बारिश पर निर्भर','Rain-fed only']},
  waterNow:{yes:['હા','हाँ','Yes'],no:['ના, બંધ છે','नहीं, बंद है','No, stopped']}
};
var DETAILS=['dryWhere','leavesInstead','dropSize','pestSign','yellowWhere','prunedAfter','treeLooks'];
var IMGS={flowering:'flowering-s',drop:'raw-mango-s',small:'fruit-on-tree',alternate:'harvest-s',pest:'flowering-2-s',dying:'old-orchard-s',noProduction2:'orchard-wide-s'};
function lb(set,k){var x=O2[set];x=x.o?x.o[k]:x[k];return x?x[x.length-3+IDX[S.lang]]:k}
function askWaterNow(){return MONTH>=9||MONTH===0}

/* causes: title, why, two actions, guide */
var CAUSE={
 borer:{u:1,g:'drying-trees',t:['થડ કોરી ખાનારી ઈયળ','तना छेदक इल्ली','Stem borer'],w:['થડમાં કાણાં અને લાકડાનો ભૂકો એ તેની નિશાની છે.','तने में छेद और बुरादा इसकी निशानी है.','Holes and sawdust on the trunk point to it.'],a:[['કાણાં અને થડનો નજીકનો ફોટો આજે જ મોકલો','छेद और तने का नज़दीकी फ़ोटो आज ही भेजें','Send a close photo of the holes today'],['નિષ્ણાતની સલાહ પ્રમાણે સારવાર, મોડું ન કરો','विशेषज्ञ की सलाह से इलाज, देर न करें','Treat as advised by an expert, without delay']]},
 dieback:{u:1,g:'drying-trees',t:['ડાળીનો સુકારો (ફૂગ)','डाली का सूखा रोग (फफूंद)','Dieback (fungal)'],w:['ડાળી ટોચથી નીચે તરફ સુકાય છે.','डाली सिरे से नीचे सूख रही है.','Branches dry from the tip downwards.'],a:[['સુકી ડાળી તંદુરસ્ત ભાગ સુધી કાપી બાળી નાખો','सूखी डाली स्वस्थ हिस्से तक काटकर जला दें','Cut dry branches back to healthy wood and burn them'],['કાપ પર ભલામણ કરેલી પેસ્ટ લગાવો','कटे हिस्से पर सुझाया गया लेप लगाएँ','Apply a recommended paste on the cuts']]},
 roots:{u:1,g:'drying-trees',t:['મૂળ કે જમીનની તકલીફ','जड़ या मिट्टी की समस्या','Root or soil trouble'],w:['આખો આંબો ઝાંખો પડે ત્યારે કારણ ઘણી વાર મૂળમાં હોય છે: પાણી ભરાવું, સખત જમીન કે ક્ષાર.','पूरा पेड़ मुरझाए तो कारण अक्सर जड़ में होता है: जलभराव, सख़्त मिट्टी या खारापन.','When the whole tree turns pale the cause is often at the roots: waterlogging, hard soil or salt.'],a:[['ખામણામાં પાણી ભરાતું હોય તો નિકાલ કરો','थाले में पानी रुकता हो तो निकासी करें','Drain the basin if water stands'],['થડ પાસેની જમીનનો ફોટો મોકલો','तने के पास की मिट्टी का फ़ोटो भेजें','Send a photo of the soil near the trunk']]},
 hopper:{g:'hopper-powdery-mildew',t:['મધિયો (હોપર)','फुदका (हॉपर)','Mango hopper'],w:['મોર પર ચીકાશ અને નાનાં ઊડતાં જીવડાં તેની નિશાની છે.','बौर पर चिपचिपाहट और उड़ते कीड़े इसकी निशानी है.','Sticky flowers and tiny jumping insects point to it.'],a:[['મોર પૂરો ખીલે તે પહેલાં ભલામણ મુજબ પગલાં લો','बौर पूरा खिलने से पहले सिफ़ारिश के अनुसार कदम उठाएँ','Act before full bloom, as recommended'],['આંબાની અંદર હવા-પ્રકાશ જાય તેવી છટણી','पेड़ के अंदर हवा-रोशनी जाए, ऐसी छँटाई','Prune so air and light reach inside']]},
 mildew:{g:'hopper-powdery-mildew',t:['ભૂકી છારો','खर्रा (चूर्णिल आसिता)','Powdery mildew'],w:['મોર પર સફેદ ભૂકી, ખાસ કરીને ઠંડી રાત અને ઝાકળમાં.','बौर पर सफ़ेद पाउडर, ख़ासकर ठंडी रात और ओस में.','White powder on flowers, especially with cold nights and dew.'],a:[['મોર નીકળવાની શરૂઆતમાં ભલામણ કરેલી દવા, લેબલ મુજબ','बौर निकलते ही सुझाई गई दवा, लेबल के अनुसार','A recommended spray as panicles emerge, as per label'],['રોજ મોર તપાસો, ઝાકળવાળા દિવસોમાં ખાસ','रोज़ बौर जाँचें, ओस वाले दिनों में ख़ास','Check panicles daily, especially on dewy days']]},
 flush:{g:'flowering',t:['મોરને બદલે નવી ફૂટ','बौर की जगह नई फुटान','Leaves instead of flowers'],w:['ઠંડીમાં પિયત ચાલુ રહે કે ફૂટ મોડી પાકે તો આંબો મોરને બદલે પાન કાઢે છે.','ठंड में सिंचाई चालू रहे या फुटान देर से पके तो पेड़ बौर की जगह पत्ते निकालता है.','If watering continues in winter or the flush matures late, the tree makes leaves instead of flowers.'],a:[['ફળ આપતા આંબાને ફૂલ આવે ત્યાં સુધી પિયત બંધ','फल देने वाले पेड़ों में बौर आने तक सिंचाई बंद','No irrigation for bearing trees until flowering'],['આવતા વર્ષે ઉતાર પછી તરત છટણી અને ખોરાક','अगले साल तुड़ाई के तुरंत बाद छँटाई और खुराक','Next year, prune and feed right after harvest']]},
 waterOn:{g:'flowering',t:['હાલ પિયત ચાલુ છે','अभी सिंचाई चालू है','Watering is on now'],w:['ઑક્ટોબરથી ફૂલ આવે ત્યાં સુધી મોટા આંબાને થોડી ખેંચ જોઈએ.','अक्टूबर से बौर आने तक बड़े पेड़ों को थोड़ा खिंचाव चाहिए.','From October until flowering, bearing trees need mild water stress.'],a:[['મોટા આંબાનું પિયત ધીમે ધીમે બંધ કરો','बड़े पेड़ों की सिंचाई धीरे-धीरे बंद करें','Slowly stop watering the bearing trees'],['નાના છોડને જરૂર પૂરતું પાણી આપતા રહો','छोटे पौधों को ज़रूरत भर पानी देते रहें','Keep watering young plants as needed']]},
 reserves:{g:'alternate-bearing',t:['આંબાનો સંગ્રહેલો ખોરાક ખૂટ્યો','पेड़ का जमा भोजन ख़त्म','Tree reserves used up'],w:['ભરપૂર પાક પછી નવી ફૂટ ઓછી આવે છે, તેથી બીજા વર્ષે મોર ઓછો.','भरपूर फसल के बाद नई फुटान कम आती है, इसलिए अगले साल बौर कम.','After a heavy crop the tree makes less new growth, so it flowers less next year.'],a:[['ઉતાર પછી તરત છટણી અને સેન્દ્રિય ખાતર','तुड़ाई के तुरंत बाद छँटाई और जैविक खाद','Prune and give organic manure right after harvest'],['ચોમાસાની નવી ફૂટને જીવાતથી બચાવો','बरसात की नई फुटान को कीटों से बचाएँ','Protect the monsoon flush from pests']]},
 water:{g:'fruit-drop',t:['પાણીની ખેંચ કે ગરમીથી ફળ ખરે','पानी की कमी या गर्मी से फल गिरना','Fruit drop from water stress or heat'],w:['લખોટી કે મોટાં ફળ ખરે ત્યારે કારણ મોટે ભાગે અનિયમિત પાણી અને ગરમ પવન હોય છે.','कंचे या बड़े फल गिरें तो कारण अक्सर अनियमित पानी और गर्म हवा होता है.','When marble-size or bigger fruit drops, irregular water and hot winds are the usual cause.'],a:[['ફળ વટાણા જેવડાં થાય પછી હળવું, નિયમિત પિયત','फल मटर जितने होने के बाद हल्की, नियमित सिंचाई','Light, regular irrigation once fruits are pea-sized'],['ખામણામાં મલ્ચિંગ કરો','थाले में मल्चिंग करें','Mulch the basin']]},
 natural:{lvl:'info',g:'fruit-drop',t:['શરૂઆતનું ખરણ કુદરતી છે','शुरुआती फल गिरना प्राकृतिक है','Early drop is natural'],w:['રાઈ-વટાણા જેવડાં ફળ મોટા પ્રમાણમાં ખરે તે સામાન્ય છે.','सरसों-मटर जितने फल बड़ी मात्रा में गिरना सामान्य है.','Heavy drop of mustard to pea-size fruit is normal.'],a:[['મોરના સમયે મધિયો અને છારો કાબૂમાં રાખો','बौर के समय फुदका और खर्रा नियंत्रित रखें','Keep hoppers and mildew in check at flowering'],['પૂરા ખીલેલા મોર પર જંતુનાશક ન છાંટો','पूरे खिले बौर पर कीटनाशक न छिड़कें','Do not spray insecticide on open flowers']]},
 small:{g:'fruit-drop',t:['ફળના વિકાસ વખતે પાણી-ખોરાક ઓછો','फल बढ़ते समय पानी-खुराक कम','Too little water or food while fruit grows'],w:['ફળ મોટાં થવાના સમયે પાણી અને પોષણ ન મળે તો ફળ નાનાં રહે છે.','फल बढ़ने के समय पानी और पोषण न मिले तो फल छोटे रहते हैं.','Fruit stays small when water and nutrition run short as it grows.'],a:[['માર્ચથી મે સુધી નિયમિત પિયત','मार्च से मई तक नियमित सिंचाई','Regular irrigation from March to May'],['જમીનની ચકાસણી પ્રમાણે ખાતર','मिट्टी जाँच के अनुसार खाद','Feed according to a soil test']]},
 micro:{g:'flowering',t:['સૂક્ષ્મ તત્વોની ઉણપ','सूक्ष्म पोषक तत्वों की कमी','Micronutrient shortage'],w:['નવાં પાન પીળાં હોય તો ઝિંક કે આયર્ન જેવાં તત્વોની ઉણપ હોઈ શકે.','नई पत्तियाँ पीली हों तो ज़िंक या आयरन जैसे तत्वों की कमी हो सकती है.','Yellow new leaves can mean a shortage of zinc or iron.'],a:[['પાન અને જમીનની ચકાસણી કરાવો','पत्ती और मिट्टी की जाँच कराएँ','Get a leaf and soil test'],['નવાં પાનનો નજીકનો ફોટો મોકલો','नई पत्तियों का नज़दीकी फ़ोटो भेजें','Send a close photo of new leaves']]},
 feed:{g:'alternate-bearing',t:['આંબાને ખોરાક ઓછો','पेड़ को खुराक कम','The tree is underfed'],w:['જૂનાં, નીચેનાં પાન પીળાં થાય તે ઘણી વાર ખોરાકની ઉણપ બતાવે છે.','पुरानी, नीचे की पत्तियाँ पीली होना अक्सर खुराक की कमी दिखाता है.','Old, lower leaves turning yellow often means the tree is short of food.'],a:[['ઉતાર પછી સેન્દ્રિય ખાતર અને ભલામણ મુજબ ખાતર','तुड़ाई के बाद जैविक खाद और सिफ़ारिश अनुसार उर्वरक','Organic manure and recommended fertiliser after harvest'],['જમીનની ચકાસણી કરાવો','मिट्टी की जाँच कराएँ','Get a soil test']]},
 cultar:{g:'cultar',t:['વર્ષોથી Cultar નો ભાર','सालों से कल्टार का बोझ','Years of Cultar'],w:['દર વર્ષે Cultar થી ડાળીઓ ટૂંકી અને આંબો નબળો પડી શકે, ખાસ કરીને ખોરાક ઓછો હોય ત્યારે.','हर साल कल्टार से डालियाँ छोटी और पेड़ कमज़ोर हो सकता है, ख़ासकर कम खुराक में.','Cultar every year can shorten shoots and weaken trees, especially when underfed.'],a:[['ડોઝ દર વર્ષે ન વધારો; નિષ્ણાતની સલાહ લો','खुराक हर साल न बढ़ाएँ; विशेषज्ञ से सलाह लें','Do not raise the dose each year; ask an expert'],['મૂળ અને જમીનને ટેકો આપો','जड़ और मिट्टी को सहारा दें','Support the roots and soil']]},
 soilLife:{g:'cultar',t:['જમીનમાં ઉપયોગી જીવાણુ ઓછા','मिट्टी में उपयोगी सूक्ष्मजीव कम','Low soil life'],w:['ફૂગનાશક, નીંદણનાશક અને જંતુનાશકનો વારંવાર ઉપયોગ જમીનના ઉપયોગી જીવાણુ ઘટાડી શકે.','फफूंदनाशक, खरपतवारनाशक और कीटनाशक का बार-बार उपयोग मिट्टी के उपयोगी सूक्ष्मजीव घटा सकता है.','Frequent fungicides, weedicides and insecticides can reduce useful soil microbes.'],a:[['સેન્દ્રિય ખાતર અને જૈવિક ખાતરથી જમીન જીવંત કરો','जैविक खाद और जैव उर्वरक से मिट्टी जीवित करें','Bring soil back to life with manure and biofertilisers'],['જરૂર વગર દવા ન નાખો','बिना ज़रूरत दवा न डालें','Avoid sprays you do not need']]},
 healthy:{lvl:'info',g:'flowering',t:['બગીચો સારી સ્થિતિમાં','बाग़ अच्छी स्थिति में','Orchard looks fine'],w:['તમે કોઈ મોટી તકલીફ નથી જણાવી.','आपने कोई बड़ी समस्या नहीं बताई.','You did not report a major problem.'],a:[['મહિના પ્રમાણે માવજત ચાલુ રાખો','महीने के अनुसार देखभाल जारी रखें','Keep up month-by-month care'],['મોરના સમયે રોજ તપાસ','बौर के समय रोज़ जाँच','Check daily at flowering']]}
};
function diagnose(gs){
  var R={},has=function(k){return gs.some(function(g){return g.problems.indexOf(k)>=0})},any=function(f,v){return gs.some(function(g){return [].concat(g[f]||[]).indexOf(v)>=0})};
  function add(k,l){var lv=CAUSE[k].lvl||l;if(!R[k]||(R[k]==='possible'&&lv==='likely'))R[k]=lv}
  if(any('dryWhere','trunk'))add('borer','likely');
  if(any('dryWhere','tip')||any('dryWhere','oneSide'))add('dieback','likely');
  if(any('dryWhere','whole'))add('roots','possible');
  if(any('yellowWhere','whole')&&any('irrigation','flood'))add('roots','possible');
  if(any('pestSign','sticky')||any('pestSign','both'))add('hopper','likely');
  if(any('pestSign','white')||any('pestSign','both'))add('mildew','likely');
  if(any('pestSign','notSure')){add('hopper','possible');add('mildew','possible')}
  if(has('flowering'))add('flush',any('leavesInstead','yes')||any('waterNow','yes')?'likely':'possible');
  if(askWaterNow()&&any('waterNow','yes')&&gs.some(function(g){return g.bearing&&g.bearing!=='young'}))add('waterOn','likely');
  var irregular=gs.some(function(g){return['inconsistent','sometimes','misses','noProduction2'].indexOf(g.bearing)>=0});
  if(has('alternate')||irregular||(has('noProduction2')&&any('treeLooks','leafy')))add('reserves',any('prunedAfter','no')||has('alternate')?'likely':'possible');
  if(any('dropSize','marble')||any('dropSize','big'))add('water','likely');
  if(any('dropSize','tiny'))add('natural','info');
  if(has('small'))add('small','possible');
  if(any('yellowWhere','newLeaves'))add('micro','possible');
  if(any('yellowWhere','oldLeaves'))add('feed','possible');
  if(gs.some(function(g){return(g.cultar==='regular'&&(+g.cultarYears||0)>=4)||(g.cultar==='occasionally'&&(+g.cultarYears||0)>=6)}))add('cultar','possible');
  if(gs.some(function(g){return(g.soil||[]).filter(function(x){return['fungicides','weedicides','insecticides'].indexOf(x)>=0}).length>=2}))add('soilLife','possible');
  if(!Object.keys(R).length)add('healthy','info');
  var rank={likely:0,possible:1,info:2};
  return Object.keys(R).map(function(k){return{k:k,l:R[k]}}).sort(function(a,b){return rank[a.l]-rank[b.l]}).slice(0,5);
}
function isUrgent(gs,dx){return gs.some(function(g){return g.problems.indexOf('dying')>=0||g.problems.indexOf('noProduction2')>=0})||dx.some(function(d){return CAUSE[d.k].u&&d.l==='likely'})}

/* ---------- state ---------- */
function emptyGroup(){return{age:'',plants:'',variety:'',problems:[],bearing:'',cultar:'',cultarYears:'',soil:[],irrigation:'',waterNow:'',dryWhere:'',leavesInstead:'',dropSize:'',pestSign:'',yellowWhere:'',prunedAfter:'',treeLooks:'',care:'balanced',npk:'no',spray:'no',tank:'',tanks:'',rounds:'2'}}
function newSession(){var r=(window.crypto&&crypto.randomUUID)?crypto.randomUUID():String(Date.now())+'-'+Math.random().toString(36).slice(2,10);return 'mm-'+r}
function store(k,v){try{if(v===undefined)return JSON.parse(localStorage.getItem(k));localStorage.setItem(k,JSON.stringify(v))}catch(e){return null}}
var utm=(function(){var p=new URLSearchParams(location.search),o={};['utm_source','utm_medium','utm_campaign','utm_content','utm_term','fbclid','gclid'].forEach(function(k){if(p.get(k))o[k]=p.get(k)});return o})();
var saved=store('mm_state2');
var S=saved&&saved.v===2?saved:{v:2,lang:'gu',view:'wizard',step:0,groups:[],cur:emptyGroup(),editing:true,farmer:{name:'',mobile:'',village:'',district:''},opts:{care:'balanced',npk:'no',spray:'',tank:'',tanks:'',rounds:'2'},session:newSession(),submitted:false,utm:utm,expert:false};
if(Object.keys(utm).length)S.utm=utm;
var qp=new URLSearchParams(location.search);
if(L[qp.get('lang')])S.lang=qp.get('lang');
var qa=qp.get('age');
if(qp.get('new')==='1'){S=Object.assign(S,{view:'wizard',step:0,groups:[],cur:emptyGroup(),editing:true,session:newSession(),submitted:false,expert:false})}
if(qa&&AGES.indexOf(qa)>=0&&S.view==='wizard'&&S.step===0&&!S.groups.length)S.cur.age=qa;
var qprob=qp.get('p');if(qprob&&O2.see[qprob]&&S.view==='wizard'&&!S.groups.length&&S.cur.problems.indexOf(qprob)<0){S.cur.problems=S.cur.problems.filter(function(x){return x!=='none'});S.cur.problems.push(qprob)}

var errs={},saveFailed=false,app=document.getElementById('app');
var AUTH=null;try{AUTH=JSON.parse(localStorage.getItem('mm_auth'))}catch(e){}
if(AUTH&&AUTH.user){var _u=AUTH.user,_f=S.farmer;['name','village','district'].forEach(function(k){if(!_f[k]&&_u[k])_f[k]=_u[k]});if(!_f.mobile&&_u.mobile)_f.mobile=_u.mobile}
function knownFarmer(){return!!(AUTH&&AUTH.token&&AUTH.user&&AUTH.user.mobile&&AUTH.user.mobile_verified&&S.farmer.name&&S.farmer.name.length>1&&S.farmer.village&&S.farmer.village.length>1)}
function T(){return L[S.lang]}
function homeUrl(){return S.lang==='gu'?'/':'/'+S.lang+'/'}
function esc(s){return String(s==null?'':s).replace(/[&<>"']/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]})}
function track(ev,extra){var o={event:ev,app_name:'Mango Mastery',crop:'mango',lang:S.lang,flow:FLOW};for(var k in(extra||{}))o[k]=extra[k];window.dataLayer.push(o)}
function fmt(n,d){var x=Math.round(n*100)/100;return String(+x.toFixed(d==null?2:d))}
function persist(){store('mm_state2',S)}
function steps(){var g=S.cur,s=['trees','see'];if(DETAILS.some(function(k){return showDetail(k,g)}))s.push('details');s.push('history','care');if(!S.submitted&&!knownFarmer())s.push('you');return s}
function showDetail(k,g){return O2[k].when.some(function(p){return g.problems.indexOf(p)>=0})}
function valid(s,g){
  if(s==='trees')return g.age&&+g.plants>0;
  if(s==='see')return g.problems.length>0;
  if(s==='details')return DETAILS.every(function(k){return!showDetail(k,g)||g[k]});
  if(s==='history')return g.bearing&&g.cultar;
  if(s==='care')return g.irrigation&&(!askWaterNow()||g.bearing==='young'||g.waterNow)&&(S.opts.spray==='no'||(S.opts.spray==='yes'&&S.opts.tank&&+S.opts.tanks>0&&+S.opts.rounds>0));
  return true;
}

/* ---------- rendering ---------- */
function topbar(){
  var lg=AUTH&&AUTH.token?['/account/',['ખાતું','खाता','Account']]:['/login/?next=/check/',['લૉગિન','लॉगिन','Login']];
  return '<header class="top"><a class="brand" href="'+homeUrl()+'" style="text-decoration:none;color:#fff">🥭 Mango Mastery</a><a class="acct" href="'+lg[0]+'">'+lg[1][IDX[S.lang]]+'</a><div class="langs" role="group" aria-label="Language">'+
   [['gu','ગુજરાતી'],['hi','हिन्दी'],['en','EN']].map(function(l){return '<button data-lang="'+l[0]+'" class="'+(S.lang===l[0]?'on':'')+'">'+l[1]+'</button>'}).join('')+'</div></header>';
}
function consentBar(){var c=null;try{c=localStorage.getItem('mm_consent')}catch(e){c='no'}if(c)return'';var t=T();
  return '<div class="consent"><span>'+t.consent+'</span><div><button data-consent="no">'+t.no+'</button><button class="y" data-consent="yes">'+t.yes+'</button></div></div>'}
function chips(field,set,g,multi,cls){var src=set.o||set;
  return '<div class="opts '+(cls||'two')+'">'+Object.keys(src).map(function(k){var on=multi?g[field].indexOf(k)>=0:g[field]===k;var x=src[k];
    return '<button type="button" class="opt '+(multi?'multi ':'')+(on?'on':'')+'" aria-pressed="'+on+'" data-'+(multi?'tog':'pick')+'="'+field+'" data-val="'+k+'">'+x[x.length-3+IDX[S.lang]]+'</button>'}).join('')+'</div>'}
function oldChips(field,setName,g,multi){return '<div class="opts two">'+Object.keys(O[setName]).map(function(k){var on=multi?g[field].indexOf(k)>=0:g[field]===k;
    return '<button type="button" class="opt '+(multi?'multi ':'')+(on?'on':'')+'" aria-pressed="'+on+'" data-'+(multi?'tog':'pick')+'="'+field+'" data-val="'+k+'">'+O[setName][k][IDX[S.lang]]+'</button>'}).join('')+'</div>'}
function sub(q){return '<h2 class="q">'+q+'</h2>'}
function wizard(){
  var t=T(),g=S.cur,list=steps(),s=list[S.step],h='';
  if(s==='trees')h='<h1>'+tr(N.treesQ)+'</h1>'+sub(tr(N.ageQ))+'<div class="opts three">'+AGES.map(function(a){return'<button type="button" class="opt '+(g.age===a?'on':'')+'" data-age="'+a+'">'+a+' '+t.yr+'</button>'}).join('')+'</div>'+
    '<label class="f">'+t.plantsL+'<input id="plants" inputmode="numeric" value="'+esc(g.plants)+'" placeholder="'+t.plantsP+'" data-num="plants"></label>'+sub(tr(N.varQ))+chips('variety',O2.variety,g,false,'two');
  if(s==='see')h='<h1>'+tr(N.seeQ)+'</h1><p class="hint">'+tr(N.seeH)+'</p><div class="tiles2">'+Object.keys(O2.see).map(function(k){var on=g.problems.indexOf(k)>=0,x=O2.see[k];
    return '<button type="button" class="tile2 '+(on?'on':'')+'" aria-pressed="'+on+'" data-tog="problems" data-val="'+k+'"><span class="ic">'+x[0]+'</span><span>'+x[1+IDX[S.lang]]+'</span></button>'}).join('')+'</div>';
  if(s==='details'){h='<h1>'+tr(N.detQ)+'</h1><p class="hint">'+tr(N.detH)+'</p>';DETAILS.forEach(function(k){if(showDetail(k,g))h+=sub(tr(O2[k].q))+chips(k,O2[k],g,false,k==='dryWhere'||k==='pestSign'?'one':'two')})}
  if(s==='history'){h='<h1>'+tr(N.histQ)+'</h1>'+sub(t.bearQ)+oldChips('bearing','bearing',g)+sub(t.cultQ)+oldChips('cultar','cultar',g);
    if(g.cultar==='regular'||g.cultar==='occasionally')h+='<label class="f">'+t.yearsP+'<input inputmode="numeric" value="'+esc(g.cultarYears)+'" data-num="cultarYears"></label>'}
  if(s==='care'){h='<h1>'+tr(N.careQ)+'</h1>'+sub(tr(N.irrQ))+chips('irrigation',O2.irrigation,g,false,'three');
    if(askWaterNow()&&g.bearing!=='young')h+=sub(tr(N.waterNowQ))+chips('waterNow',O2.waterNow,g,false,'two');
    h+=sub(tr(SPN.q))+'<p class="hint">'+tr(SPN.h)+'</p><div class="opts two">'+Object.keys(C.SPRAY).map(function(k){var on=S.opts.spray==='yes'&&S.opts.tank===k;return'<button type="button" class="opt '+(on?'on':'')+'" aria-pressed="'+on+'" data-sp="'+k+'">'+t.tankNames[k]+'</button>'}).join('')+
      '<button type="button" class="opt '+(S.opts.spray==='no'?'on':'')+'" aria-pressed="'+(S.opts.spray==='no')+'" data-sp="none">'+tr(SPN.none)+'</button></div>';
    if(S.opts.spray==='yes')h+='<label class="f">'+tr(SPN.tanks)+'<input inputmode="numeric" value="'+esc(S.opts.tanks)+'" data-spn="tanks"></label><label class="f">'+tr(SPN.rounds)+'<input inputmode="numeric" value="'+esc(S.opts.rounds)+'" data-spn="rounds"></label>'}
  if(s==='you'){var f=S.farmer;h='<h1>'+tr(N.youQ)+'</h1>'+field('name',t.nameL,f.name,'text','name')+field('mobile',t.mobL,f.mobile,'tel','tel-national')+field('village',tr(N.vilL),f.village,'text','')+field('district',tr(N.distL),f.district,'text','')+
    '<input class="hp" tabindex="-1" autocomplete="off" aria-hidden="true" id="website"><p class="privacy">'+t.priv+'</p>'}
  var last=S.step===list.length-1;
  return topbar()+consentBar()+'<div class="progress"><span style="width:'+((S.step+1)/list.length*100)+'%"></span></div><main class="wiz wrap narrow"><p class="count">'+t.step+' '+(S.step+1)+' / '+list.length+'</p>'+h+'</main>'+
  '<div class="bar"><div><button class="btn ghost" data-go="back">← '+t.back+'</button><button class="btn" id="nextBtn" data-go="next" '+(valid(s,g)?'':'disabled')+'>'+(last?tr(N.show):t.next)+' →</button></div></div>';
}
function field(k,label,val,type,ac){
  return '<label class="f">'+label+'<input data-f="'+k+'" type="'+(type==='tel'?'tel':'text')+'" '+(type==='tel'?'inputmode="numeric" maxlength="14"':'')+' '+(ac?'autocomplete="'+ac+'"':'')+' value="'+esc(val)+'"></label>'+(errs[k]?'<div class="err" role="alert">'+errs[k]+'</div>':'');
}
function applyOpts(){var o=S.opts;S.groups.forEach(function(g,i){g.care=o.care;g.npk=o.npk;if(i===0){g.spray=o.spray;g.tank=o.tank;g.tanks=o.tanks;g.rounds=o.rounds}else{g.spray='no'}})}
function dose(n,v,s){return'<div class="dose"><b>'+n+'</b><strong>'+v+'</strong><span>'+s+'</span></div>'}
function seg(field,keys,labels){return '<div class="seg">'+keys.map(function(k,i){return'<button type="button" class="'+(S.opts[field]===k?'on':'')+'" data-opt="'+field+'" data-val="'+k+'">'+labels[i]+'</button>'}).join('')+'</div>'}
function whyNow(gs,dx){
  var items=dx.filter(function(d){return WHY[d.k]}).slice(0,3);if(!items.length)return'';
  var probs=[];gs.forEach(function(g){g.problems.forEach(function(p){if(p!=='none'&&probs.indexOf(p)<0&&O2.see[p])probs.push(p)})});
  var n=0,ages=[];gs.forEach(function(g){n+=(+g.plants||0);if(ages.indexOf(g.age)<0)ages.push(g.age)});
  var h='<div class="card"><h2>'+tr(WHYT.h)+'</h2>';
  if(probs.length)h+='<p><b>'+tr(WHYT.i)+'</b> '+probs.map(function(p){return esc(O2.see[p][1+IDX[S.lang]])}).join(', ')+'.</p>';
  h+='<p class="sub">'+tr(WHYT.j)+'</p>';
  items.forEach(function(d){var w=WHY[d.k],c=CAUSE[d.k];
    h+='<div class="why"><h3>'+tr(c.t)+'</h3><p class="myth"><b>'+tr(WHYT.b)+'</b>'+tr(w.m)+'</p><p class="soon"><b>'+tr(WHYT.s)+'</b>'+tr(w.s)+'</p></div>'});
  var sub=function(x){return tr(x).replace('{n}',n).replace('{a}',ages.join(', '))};
  h+='<div class="kitpitch card"><h3>📦 '+tr(KIT.h)+'</h3><p>'+tr(KIT.p)+'</p><ul><li>'+sub(KIT.b1)+'</li><li>'+tr(KIT.b2)+'</li><li>'+tr(KIT.b3)+'</li></ul>'+
    '<a class="btn" href="/mango-kit/" data-track="why_kit">'+tr(KIT.btn)+'</a> <a class="btn wa" href="https://wa.me/'+WA+'?text='+encodeURIComponent(waDiag(dx))+'" target="_blank" rel="noopener" data-wa="why_kit">'+tr(KIT.wa)+'</a></div></div>';
  return h;
}
function actNow(gs,dx){
  var probs=[];gs.forEach(function(g){g.problems.forEach(function(p){if(probs.indexOf(p)<0)probs.push(p)})});
  var items=dx.filter(function(d){return LOSS[d.k]}).slice(0,3);
  var m=MONTH,si=(m>=9||m<=1)?0:(m<=4?1:2);
  var h='<div class="card actnow"><h2>🚨 '+tr(NOWT.act)+'</h2><p><b>'+tr(NOWT.season[si])+'</b></p>';
  if(items.length){h+='<div class="ifwait"><b>'+tr(NOWT.w)+':</b><ul>'+items.map(function(d){return'<li><b>'+tr(CAUSE[d.k].t)+':</b> '+tr(LOSS[d.k])+'</li>'}).join('')+'</ul></div>'}
  var sc=TESTI.map(function(x){return{x:x,n:x.m.filter(function(k){return probs.indexOf(k)>=0}).length}}).sort(function(a,b){return b.n-a.n}),pick=sc.slice(0,2);
  h+='<h3>'+tr(NOWT.tH)+'</h3><div class="testi">'+pick.map(function(o){var x=o.x;
    return'<figure class="tv"><button type="button" class="tv-b" data-vid="'+x.f+'" aria-label="'+esc(tr(x.n))+': '+esc(tr(x.l))+'"><img src="/media/'+x.f+'-poster.webp" alt="" width="400" height="711" loading="lazy"><span class="tv-play"></span></button><figcaption><b>'+esc(tr(x.n))+'</b><span>'+esc(tr(x.l))+'</span></figcaption></figure>'}).join('')+'</div><p class="note">'+tr(NOWT.tN)+'</p>';
  h+='<div class="actbtns"><a class="btn" href="tel:+91'+WA.slice(2)+'" data-track="act_call">📞 '+tr(NOWT.callL)+': 99787 91167</a><a class="btn wa" href="https://wa.me/'+WA+'?text='+encodeURIComponent(waDiag(dx))+'" target="_blank" rel="noopener" data-wa="act_wa">💬 '+tr(NOWT.waL)+'</a><a class="btn kitbtn" href="/mango-kit/" data-track="act_kit">📦 '+tr(KIT.btn)+'</a></div></div>';
  return h;
}
function research(){
  return '<div class="card research"><h2>'+tr(RES.h)+'</h2><p>'+tr(RES.i)+'</p><ol class="rs">'+RES.c.map(function(c,i){return'<li>'+tr(c)+' <a class="cite" href="#ref'+(i+1)+'" aria-label="Reference '+(i+1)+'">['+(i+1)+']</a></li>'}).join('')+'</ol><p class="note">'+tr(RES.n)+'</p></div>';
}
function refsBlock(){
  return '<section class="refs"><h3>'+tr(RES.f)+'</h3><ol>'+REFS.map(function(r,i){return'<li id="ref'+(i+1)+'">'+r+'</li>'}).join('')+'</ol></section>';
}
function plan(){
  applyOpts();
  var t=T(),f=S.farmer,gs=S.groups,tot=C.totals(gs),dx=diagnose(gs),o=S.opts;
  var h=topbar()+consentBar()+'<div class="planhead"><div class="wrap narrow"><p class="kick">'+tr(N.resT)+'</p><h1>'+esc(f.name)+(S.lang==='en'?'':' ')+t.planFor+'</h1><p>'+gs.map(function(g){return g.age+' '+t.yr+' • '+g.plants+' '+t.plantsW}).join(' | ')+'</p></div></div><main class="wrap narrow" style="padding-bottom:30px">';
  if(saveFailed)h+='<div class="card alert">'+t.saveFail+'</div>';
  if(isUrgent(gs,dx))h+='<div class="card alert"><h3>⚠️ '+tr(N.urgentT)+'</h3><p>'+tr(N.urgent)+'</p><a class="btn wa" style="margin-top:12px" href="https://wa.me/'+WA+'?text='+encodeURIComponent(waDiag(dx))+'" target="_blank" rel="noopener" data-wa="urgent_photos">'+tr(N.photoBtn)+'</a></div>';
  h+='<div class="card"><h2>🔎 '+tr(N.diagT)+'</h2>'+dx.map(function(d){var c=CAUSE[d.k];return '<div class="dx dx-'+d.l+'"><span class="lvl">'+tr(N[d.l])+'</span><h3>'+tr(c.t)+'</h3><p>'+tr(c.w)+'</p><ul>'+c.a.map(function(a){return'<li>'+tr(a)+'</li>'}).join('')+'</ul><a href="/guides/'+c.g+'/" data-track="dx_guide">'+tr(N.read)+'</a></div>'}).join('')+'<p class="note">'+tr(N.diagNote)+'</p></div>';
  h+=whyNow(gs,dx);
  h+=research();
  var M=window.MMSEASON&&window.MMSEASON[S.lang];
  if(M){var m=M.s[MONTH];h+='<div class="card now"><h2>📅 '+tr(N.nowT)+': '+M.m[MONTH]+'</h2><p><b>'+esc(m[0])+'</b></p><ul class="steps">'+m[1].map(function(x){return'<li>'+esc(x)+'</li>'}).join('')+'</ul></div>'}
  h+='<div class="card"><h2>🧾 '+tr(N.planT)+'</h2>';
  var st=sprayTot(gs),g0=gs[0],c0=C.calcGroup(g0)||{};
  h+='<p class="note meth-note">'+tr(SP5.intro)+'</p>';
  if(c0.water)h+='<h3 style="margin-top:10px">🌿 '+tr(SP5.planT)+'</h3><p class="sub" style="margin:0 0 8px">'+gs.map(function(g){return g.age+' '+t.yr+' • '+g.plants+' '+t.plantsW}).join(' | ')+'</p><p class="foliar">'+t.sprayLine(t.tankNames[g0.tank],c0.tanks,c0.rounds,c0.tankMl,fmt(c0.water,0))+' <b>'+tr(SPN.total)+': '+(c0.tanks*c0.rounds)+'</b></p>';
  else h+='<p class="hint">'+tr(SP5.noSpray)+'</p>';
  h+='<details class="adj"'+(c0.water?'':' open')+'><summary>⚙️ '+tr(N.adjT)+'</summary><p class="hint">'+t.tankL+'</p><div class="seg wrapseg">'+Object.keys(C.SPRAY).map(function(k){return'<button type="button" class="'+(o.spray==='yes'&&o.tank===k?'on':'')+'" data-opt="tank" data-val="'+k+'">'+t.tankNames[k]+'</button>'}).join('')+'</div>'+
     '<label class="f">'+t.tanksL+'<input inputmode="numeric" value="'+esc(o.tanks)+'" data-optnum="tanks"></label><label class="f">'+t.roundsL+'<input inputmode="numeric" value="'+esc(o.rounds)+'" data-optnum="rounds"></label></details>';
  if(c0.water)h+='<h3 style="margin-top:16px">'+t.buyT+'</h3><ul class="buy">'+
    '<li><b>Immunity Mango Special</b><strong>'+C.packs(st.mangoL)+'</strong><small>'+fmt(st.mangoL)+' L '+t.need+'</small></li>'+
    '<li><b>Immunity Gold</b><strong>'+C.packs(st.goldL)+'</strong><small>'+fmt(st.goldL)+' L '+t.need+'</small></li></ul>';
  h+='<a class="btn wa" href="https://wa.me/'+WA+'?text='+encodeURIComponent(waText(st,dx))+'" target="_blank" rel="noopener" data-wa="plan">'+t.sendWA+'</a>'+
    '<h3 style="margin-top:18px">🛠️ '+t.stepsT+'</h3><ol class="steps">'+SP5.steps.map(function(x){return'<li>'+tr(x)+'</li>'}).join('')+'</ol></div>';
  h+='<div class="card"><h2>📷 '+tr(N.photoT)+'</h2><ol class="photos">'+N.photos.map(function(p){return'<li>'+tr(p)+'</li>'}).join('')+'</ol><a class="btn wa" href="https://wa.me/'+WA+'?text='+encodeURIComponent(waDiag(dx))+'" target="_blank" rel="noopener" data-wa="photos">'+tr(N.photoBtn)+'</a></div>';
  h+='<div class="card expert" id="expert"><h2>👨‍🌾 '+tr(N.askT)+'</h2><p>'+tr(N.askS)+'</p>'+(S.expert?'<p class="ok">✅ '+tr(N.askDone)+'</p>':
     '<label class="f">'+tr(N.askQ)+'<textarea id="askq" rows="3" maxlength="500"></textarea></label><button class="btn" data-go="expert">'+tr(N.askBtn)+'</button>')+
     '<a class="link" href="tel:+91'+WA.slice(2)+'" data-track="call_now">📞 '+tr(N.callNow)+': 99787 91167</a></div>';
  h+=actNow(gs,dx);
  if(!(AUTH&&AUTH.token))h+='<a class="card kit save" href="/login/?next=/account/" data-track="plan_login"><b>🔐 '+tr(['આ પરિણામ સાચવો: મોબાઇલથી લૉગિન કરો','यह नतीजा सेव करें: मोबाइल से लॉगिन करें','Save this result: log in with your mobile'])+'</b><span>'+tr(['WhatsApp પર OTP થી લૉગિન. આવતી વખતે ફોર્મ ભરવું નહીં પડે.','WhatsApp OTP से लॉगिन. अगली बार फ़ॉर्म नहीं भरना पड़ेगा.','Login with a WhatsApp OTP. No forms next time.'])+'</span></a>';
  h+='<a class="card kit" href="/mango-kit/" data-track="plan_kit"><b>📦 '+tr(N.kitT)+'</b><span>'+tr(N.kitS)+'</span></a>';
  h+='<a class="card kit" href="/stories/" data-track="plan_stories"><b>🎥 '+tr(N.storiesL)+'</b></a>';
  h+=refsBlock();
  h+='<p class="note">'+t.disclaimer+'</p><div class="actions"><button class="btn ghost" data-go="add">'+t.addGroup+'</button><button class="btn ghost" data-go="print">'+t.print+'</button></div><button class="link" data-go="restart">'+t.restart+'</button></main>';
  return h;
}
function waDiag(dx){var t=T();return t.waPhotos+'\n\n'+tr(N.diagT)+': '+dx.map(function(d){return tr(CAUSE[d.k].t)}).join(', ')}
function waText(tot,dx){
  var t=T(),f=S.farmer,l=[t.waHi,'',t.waName+': '+f.name,t.waVil+': '+f.village+(f.district?', '+f.district:''),''];
  S.groups.forEach(function(g){l.push('🌳 '+g.age+' '+t.yr+' • '+g.plants+' '+t.plantsW)});var c0=C.calcGroup(S.groups[0])||{};if(c0.water)l.push('🌿 '+t.tankNames[S.groups[0].tank]+' × '+c0.tanks+' × '+c0.rounds+' ('+tr(SPN.total)+': '+(c0.tanks*c0.rounds)+')');
  l.push('','🔎 '+dx.map(function(d){return tr(CAUSE[d.k].t)}).join(', '));
  if(tot.mangoL)l.push('',t.waNeed+':','✅ Immunity Mango Special: '+C.packs(tot.mangoL)+' ('+fmt(tot.mangoL)+' L)');
  if(tot.goldL)l.push('✅ Immunity Gold: '+C.packs(tot.goldL)+' ('+fmt(tot.goldL)+' L)');
  return l.join('\n');
}
function render(keep){
  document.documentElement.lang=S.lang;
  app.innerHTML=S.view==='plan'?plan():wizard();
  persist();if(!keep)window.scrollTo(0,0);
}

/* ---------- saving: every answer, per question ---------- */
function post(body){body.session_id=S.session;body.flow_version=FLOW;body.lang=S.lang;if(AUTH&&AUTH.token)body.auth=AUTH.token;
  return fetch(API,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(body),keepalive:true}).then(function(r){return r.ok})}
var STEPKEYS={trees:['age','plants','variety'],see:['problems'],details:DETAILS,history:['bearing','cultar','cultarYears'],care:['irrigation','waterNow','soil']};
function answersOf(g,gi,keys){return keys.filter(function(k){var v=g[k];return Array.isArray(v)?v.length:v!==''&&v!=null}).map(function(k){return{g:gi,k:k,v:g[k]}})}
function allAnswers(){var a=[];S.groups.forEach(function(g,i){Object.keys(STEPKEYS).forEach(function(s){a=a.concat(answersOf(g,i,STEPKEYS[s]))})});return a}
function saveStep(s){if(!STEPKEYS[s])return;var gi=S.groups.length;post({event:'answers',month:MONTH+1,answers:answersOf(S.cur,gi,STEPKEYS[s])}).catch(function(){})}
function saveLead(){
  applyOpts();var f=S.farmer,tot=C.totals(S.groups),dx=diagnose(S.groups),probs=[];
  S.groups.forEach(function(g){g.problems.forEach(function(p){if(probs.indexOf(p)<0)probs.push(p)})});
  var hp=document.getElementById('website');
  return post({name:f.name,mobile:f.mobile,village:f.village,district:f.district,total_plants:tot.plants,problems:probs,month:MONTH+1,urgent:isUrgent(S.groups,dx),
    diagnosis:dx,answers:allAnswers(),plan_options:S.opts,
    groups:S.groups.map(function(g){return Object.assign({},g,{calc:C.calcGroup(g)})}),totals:Object.assign({},sprayTot(S.groups),{plants:tot.plants}),utm:S.utm||{},page_url:location.href,referrer:document.referrer,website:hp?hp.value:''});
}
var saveTimer=null;function resave(){clearTimeout(saveTimer);saveTimer=setTimeout(function(){saveLead().catch(function(){})},1500)}

/* ---------- events ---------- */
function refreshNext(){var b=document.getElementById('nextBtn');if(b)b.disabled=!valid(steps()[S.step],S.cur)}
document.addEventListener('input',function(e){
  var n=e.target.getAttribute('data-num');
  if(n){e.target.value=e.target.value.replace(/\D/g,'').slice(0,7);S.cur[n]=e.target.value;persist();refreshNext();return}
  var sn=e.target.getAttribute('data-spn');
  if(sn){e.target.value=e.target.value.replace(/\D/g,'').slice(0,3);S.opts[sn]=e.target.value;persist();refreshNext();return}
  var on=e.target.getAttribute('data-optnum');
  if(on){e.target.value=e.target.value.replace(/\D/g,'').slice(0,4);S.opts[on]=e.target.value;persist();clearTimeout(window._rt);window._rt=setTimeout(function(){var y=window.scrollY;render(true);window.scrollTo(0,y);var el=document.querySelector('[data-optnum="'+on+'"]');if(el){el.focus();el.setSelectionRange(99,99)}resave()},700);return}
  var f=e.target.getAttribute('data-f');if(f){S.farmer[f]=e.target.value;persist()}
});
document.addEventListener('click',function(e){
  var el=e.target.closest('button,a');if(!el)return;var d=el.dataset,g=S.cur,t=T();
  if(d.lang){S.lang=d.lang;track('language_selected');render(true);return}
  if(d.consent){try{localStorage.setItem('mm_consent',d.consent)}catch(x){}var v=d.consent==='yes'?'granted':'denied';gtag('consent','update',{ad_storage:v,analytics_storage:v,ad_user_data:v,ad_personalization:v});render(true);return}
  if(d.vid){var fg=el.parentNode,v=document.createElement('video');v.src=VIDHOST+d.vid+'.mp4';v.controls=true;v.autoplay=true;v.playsInline=true;v.setAttribute('playsinline','');v.setAttribute('preload','auto');el.replaceWith(v);track('testimonial_play',{video:d.vid});return}
  if(d.meth){S.opts.method=d.meth;var y2=window.scrollY;render(true);window.scrollTo(0,y2);track('method_pick',{value:d.meth});resave();return}
  if(d.sp){if(d.sp==='none'){S.opts.spray='no'}else{S.opts.spray='yes';S.opts.tank=d.sp}render(true);refreshNext();track('spray_pick',{value:d.sp});return}
  if(d.age){g.age=d.age;render(true);var p=document.getElementById('plants');if(p&&!g.plants)p.focus();return}
  if(d.opt){S.opts[d.opt]=d.val;if(d.opt==='tank'){S.opts.spray='yes';if(!(+S.opts.rounds))S.opts.rounds='1'}var y=window.scrollY;render(true);window.scrollTo(0,y);var ad=document.querySelector('details.adj');if(ad)ad.open=true;track('plan_adjusted',{field:d.opt,value:d.val});resave();return}
  if(d.pick){g[d.pick]=g[d.pick]===d.val&&d.pick==='variety'?'':d.val;render(true);refreshNext();return}
  if(d.tog){var a=g[d.tog],i=a.indexOf(d.val);
    if(i>=0)a.splice(i,1);else{var solo=['none','notSure','rare'].indexOf(d.val)>=0;
      if(solo)a.length=0;else['none','notSure','rare'].forEach(function(x){var j=a.indexOf(x);if(j>=0)a.splice(j,1)});a.push(d.val)}
    render(true);return}
  if(d.wa){track('whatsapp_clicked',{which:d.wa});post({event:'whatsapp_click'}).catch(function(){});return}
  if(d.track){track(d.track);return}
  if(d.go==='expert'){var q=(document.getElementById('askq')||{}).value||'';el.disabled=true;
    post({event:'expert',name:S.farmer.name,mobile:S.farmer.mobile,village:S.farmer.village,district:S.farmer.district,question:q,topic:diagnose(S.groups).map(function(x){return x.k}).join(','),source_page:location.pathname}).then(function(ok){if(ok){S.expert=true;track('expert_requested',{where:'result'});render(true);var x=document.getElementById('expert');if(x)x.scrollIntoView({block:'center'})}else{el.disabled=false}}).catch(function(){el.disabled=false});return}
  if(d.go==='back'){if(S.step>0){S.step--;render()}else if(S.groups.length){S.editing=false;S.view='plan';render()}else{location.href=homeUrl()}return}
  if(d.go==='next'){advance();return}
  if(d.go==='add'){track('add_group_clicked');S.cur=emptyGroup();S.view='wizard';S.step=0;S.editing=true;render();return}
  if(d.go==='print'){window.print();return}
  if(d.go==='restart'){S={v:2,lang:S.lang,view:'wizard',step:0,groups:[],cur:emptyGroup(),editing:true,farmer:{name:'',mobile:'',village:'',district:''},opts:S.opts,session:newSession(),submitted:false,utm:S.utm,expert:false};render();return}
});
function advance(){
  var list=steps(),s=list[S.step],t=T();
  if(s==='you'){var f=S.farmer;errs={};f.name=f.name.trim();f.village=f.village.trim();f.district=(f.district||'').trim();
    var m=f.mobile.replace(/\D/g,'').slice(-10);
    if(f.name.length<2)errs.name=t.errName;if(!/^[6-9]\d{9}$/.test(m))errs.mobile=t.errMob;if(f.village.length<2)errs.village=t.errVil;
    if(Object.keys(errs).length){render(true);return}f.mobile=m}
  if(s!=='you'&&knownFarmer()&&S.step===list.length-1){S.farmer.mobile=AUTH.user.mobile}
  if(!valid(s,S.cur))return;
  DETAILS.forEach(function(k){if(!showDetail(k,S.cur))S.cur[k]=''});
  track('assessment_step_completed',{step_name:s,step_index:S.step+1});saveStep(s);
  if(S.step<list.length-1){S.step++;render();return}
  S.groups.push(S.cur);S.cur=emptyGroup();S.editing=false;S.view='plan';S.submitted=true;saveFailed=false;
  track('assessment_completed',{groups:S.groups.length,total_plants:C.totals(S.groups).plants});
  render();
  saveLead().then(function(ok){if(ok)track('lead_saved');else{saveFailed=true;render(true)}}).catch(function(){saveFailed=true;render(true)});
}
render();
track('landing_page_view');
})();
