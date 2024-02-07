import{d as q,m}from"./chunks/constants.ODF6E27E.js";import{d as h,k as g,c as u,m as e,t,F as _,G as y,o as i,n as E,p as n,q as $,s as A,_ as W,a4 as T,g as Z,e as P,J as c,V as K,a as v}from"./chunks/framework.Yc5lMlKm.js";import{V as j}from"./chunks/theme.NjB5c1Af.js";const x=r=>r.reduce((a,s)=>a+s,0);function J(r){const a=r.map(l=>l.amount),o=x(a)/10;return Math.round(o)}const R=r=>($("data-v-71feaf88"),r=r(),A(),r),U=R(()=>e("tr",null,[e("th",null,"Eigenschaft"),e("th",null,"Wert"),e("th",null,"Bonus"),e("th",null,"Gesamt")],-1)),O=h({__name:"CharacterTrait",props:{type:{},data:{}},setup(r){const a=r,s=g(()=>J(a.data));return(o,d)=>(i(),u("div",null,[e("h4",null,t(o.type)+" (+"+t(s.value)+")",1),e("table",null,[U,(i(!0),u(_,null,y(o.data,l=>(i(),u("tr",null,[e("td",null,t(l.property),1),e("td",{class:E({"background-red":l.amount>n(q)})},t(l.amount),3),e("td",null,t(s.value),1),e("td",null,t(l.amount+s.value),1)]))),256))])]))}}),k=W(O,[["__scopeId","data-v-71feaf88"]]);function Q(r){const a=r.slice(0,1),s=r.slice(1);return`${a.toUpperCase()}${s.toLowerCase()}`}const X=h({__name:"CharacterBasicStats",props:{volk:{},alter:{},lebensPunkte:{},statur:{}},setup(r){const a=r,s=o=>typeof o=="string"?o:o.toLocaleString("de");return(o,d)=>(i(!0),u(_,null,y(a,(l,b)=>(i(),u("tr",null,[e("td",null,t(n(Q)(b)),1),e("td",null,t(s(l)),1)]))),256))}}),Y=e("h4",null,"Inventar",-1),ee=e("tr",null,[e("th",null,"Gegenstand"),e("th",null,"Anzahl")],-1),re=h({__name:"CharacterInventory",props:{data:{}},setup(r){return(a,s)=>(i(),u("div",null,[Y,e("table",null,[ee,(i(!0),u(_,null,y(a.data,o=>(i(),u("tr",null,[e("td",null,t(o.property),1),e("td",null,t(o.amount),1)]))),256))])]))}}),z=r=>($("data-v-d0cf5de3"),r=r(),A(),r),ne={class:"character-sheet"},te={key:0,class:"error"},ae={key:1,class:"error"},se=z(()=>e("h4",null,"Grundlagen",-1)),oe=z(()=>e("tr",null,[e("th",null,"Eigenschaft"),e("th",null,"Wert")],-1)),ue={class:"character-traits"},ie=z(()=>e("h4",null,"Zusätzliche Informationen",-1)),le=h({__name:"CharacterSheet",props:{data:{}},setup(r){const a=r,{name:s,volk:o,alter:d,lebensPunkte:l,statur:b,beruf:M,handeln:S,wissen:w,soziales:B,inventar:C,anmerkungen:V,image:F}=T(a.data),G={avatar:Z(F.value),name:s.value,title:M.value},p=g(()=>{const D=[...S.value,...w.value,...B.value].map(H=>H.amount);return x(D)}),N=g(()=>p.value>m),I=g(()=>p.value<m);return(L,D)=>(i(),u("div",ne,[N.value?(i(),u("p",te," Charakter hat zu viele Skillpunkte verbraucht (maximum: "+t(n(m))+", verbraucht: "+t(p.value)+") ",1)):P("",!0),I.value?(i(),u("p",ae," Charakter hat noch Skillpunkte übrig (maximum: "+t(n(m))+", verbraucht: "+t(p.value)+") ",1)):P("",!0),c(n(j),{members:[G],class:"character-profile",size:"medium"},null,8,["members"]),e("div",null,[se,e("table",null,[oe,c(X,{volk:n(o),alter:n(d),"lebens-punkte":n(l),statur:n(b)},null,8,["volk","alter","lebens-punkte","statur"])])]),e("div",ue,[c(k,{type:"Handeln",data:n(S)},null,8,["data"]),c(k,{type:"Wissen",data:n(w)},null,8,["data"]),c(k,{type:"Soziales",data:n(B)},null,8,["data"])]),c(re,{data:n(C)},null,8,["data"]),e("div",null,[ie,e("p",null,t(n(V)),1)])]))}}),f=W(le,[["__scopeId","data-v-d0cf5de3"]]),ce=[{property:"Taschendiebstahl",amount:10},{property:"Schleichen",amount:8},{property:"Akrobatik",amount:3},{property:"Fallen legen",amount:2},{property:"Werfen",amount:10},{property:"Hieb-/Stichwaffen",amount:15},{property:"Ausweichen",amount:6},{property:"Schloss knacken",amount:9}],he=[{property:"Fallen legen",amount:3},{property:"Arkanes Wissen",amount:9},{property:"Wahrnehmung",amount:9},{property:"Flora",amount:9},{property:"Fauna",amount:9}],de=[{property:"Betören",amount:1},{property:"Lügen",amount:10}],pe=[{property:"Kurzschwert",amount:2}],me={name:"Morzan Schattenläufer",image:"/images/schurke.jpg",volk:"Wiedergänger (Mensch)",alter:69,lebensPunkte:100,statur:"Groß",beruf:"Schurke",anmerkungen:"",handeln:ce,wissen:he,soziales:de,inventar:pe},ge=[{property:"Faustkampf",amount:1},{property:"Instrument spielen",amount:10},{property:"Singen",amount:1},{property:"Flüchten",amount:5}],be=[{property:"Völkerkunde",amount:3},{property:"Wahrnehmung",amount:5}],ke=[{property:"Überzeugen",amount:12},{property:"Bardische Inspiration",amount:12},{property:"Bezirzen",amount:4},{property:"Feilschen",amount:9},{property:"Lügen",amount:7},{property:"Menschenkenntnis",amount:8},{property:"Beeindrucken",amount:9},{property:"Beruhigen",amount:9}],fe=[],_e={name:"Harald Scheißgesang",image:"/images/barde.jpg",volk:"Elbe",alter:1025.5,lebensPunkte:100,statur:"Elbenhaft",beruf:"Barde",anmerkungen:"Zauberspruch: Der braune Ton",handeln:ge,wissen:be,soziales:ke,inventar:fe},ye=[{property:"Schlagen",amount:9},{property:"Zweihänder",amount:12},{property:"Heben",amount:8},{property:"Treten",amount:10},{property:"Jagen",amount:10},{property:"Angeln",amount:8}],ve=[{property:"Völkerkunde",amount:6},{property:"Spuren lesen",amount:8},{property:"Wahrnehmung",amount:5}],ze=[{property:"Lügen",amount:2},{property:"Menschenkenntnis",amount:5},{property:"Beeindrucken",amount:5},{property:"Zechen",amount:13}],Se=[],we={name:"Fridericus Knochenbrecher",image:"/images/berserker.jpg",volk:"Zwerg",alter:262,lebensPunkte:100,statur:"Zwergenhaft",beruf:"Berserker",anmerkungen:"",handeln:ye,wissen:ve,soziales:ze,inventar:Se},Be=K('<h1 id="geschichte-der-abenteuerer-bisher" tabindex="-1">Geschichte der Abenteuerer bisher <a class="header-anchor" href="#geschichte-der-abenteuerer-bisher" aria-label="Permalink to &quot;Geschichte der Abenteuerer bisher&quot;">​</a></h1><h2 id="was-bisher-geschah" tabindex="-1">Was bisher geschah? <a class="header-anchor" href="#was-bisher-geschah" aria-label="Permalink to &quot;Was bisher geschah?&quot;">​</a></h2><p>Unsere vier tapferen Abenteurer, ein Berserker, ein Schurke, ein Barde und ein Zauberer, trafen einst in einem kleinen Dorf am Rande zwischen Midgard und Fellheim aufeinander. Sie alle wurden dorthin gesandt, um für ihren jeweiligen Vorgesetzten ihres Volkes Nachforschungen durchzuführen um komische und merkwürdige Ereignisse zur ergründen. Schnell wurde ihnen klar, dass sich um schwarze Magie handelt, die droht, die Welt zu zerstören. Warum jene Person oder Gruppe dies tut, ist ihnen noch nicht bekannt. Sie kennen nur ihre Aufgabe: Haltet die Bedrohung auf und rettet die Welt.</p><p>So schlugen sich die tapferen Abenteurer durch harte Quests, schwere Kämpfen und mussten das eine oder andere Mal mit dem Schicksal um ihr Glück würfeln. Der Barde <strong>Harald Scheißgesang</strong>, überfordert mit dem “ganzen Welt retten”, entschied sich dazu, sein Glück anderswo zu suchen und brach ins Ungewisse auf. Nach weiten Wegen und vielen großen und kleinen Ablenkungen konnten die drei restlichen Abenteurer die Quelle allen Bösen finden und stellten sich so dem nekromantische Hexenmeister <strong>Merlinus der Schwarze</strong> in seiner Düsterburg. Als Mitglied des Kultes des Drachen versuchte er die apokalyptischen Drachen wiederzuerwecken. Es entfachte ein epischer Kampf, dem die Abenteurer aber leider nicht gewachsen waren. Der Niederlage nah entschieden sich die Abenteuer fürs erste sich zurückzuziehen, das Schicksal der Welt lag immerhin auf ihren Schultern. Den Hexenmeister konnten sie fürs Erste von seinen Plänen abhalten, sodass auch er sich neu organisieren muss, um seinen teuflischen Plan umzusetzen. Leider war der Magier ihrer Gruppe zu sehr verletzt und der Berserker und Schurke entschieden sich dazu, ihn zurückzulassen, um ihre eigene Haut zu retten. Der Horror in seinen Augen, dass seine Kameraden ihn in Stich lassen, hatte einen bleibenden negativen Effekt auf die Überlebenden. Vor allem seine letzten Worte hallten in ihren Köpfen: <strong>“Lasst mich nicht in Stich, ihr Narren.”</strong></p><p>Zurzeit befinden sich die gerade so am Leben erhaltenen Abenteuer in der Schenke der “Frau Bogi”. Nur noch zu zweit versuchen der Berserker <strong>Fridericus Rotbart</strong> und der Schurke <strong>Morzan Schattenläufer</strong> neuen Mut zu sammeln, um die Welt ein weiteres Mal vor den Drachen zu beschützen.</p><h2 id="die-abenteurer" tabindex="-1">Die Abenteurer <a class="header-anchor" href="#die-abenteurer" aria-label="Permalink to &quot;Die Abenteurer&quot;">​</a></h2><h3 id="der-berserker" tabindex="-1">Der Berserker <a class="header-anchor" href="#der-berserker" aria-label="Permalink to &quot;Der Berserker&quot;">​</a></h3>',7),De=e("h3",{id:"der-schurke",tabindex:"-1"},[v("Der Schurke "),e("a",{class:"header-anchor",href:"#der-schurke","aria-label":'Permalink to "Der Schurke"'},"​")],-1),Pe=e("h3",{id:"der-barde",tabindex:"-1"},[v("Der Barde "),e("a",{class:"header-anchor",href:"#der-barde","aria-label":'Permalink to "Der Barde"'},"​")],-1),$e=e("h3",{id:"der-magier",tabindex:"-1"},[v("Der Magier "),e("a",{class:"header-anchor",href:"#der-magier","aria-label":'Permalink to "Der Magier"'},"​")],-1),Ce=JSON.parse('{"title":"Geschichte der Abenteuerer bisher","description":"","frontmatter":{},"headers":[],"relativePath":"abenteurer.md","filePath":"abenteurer.md"}'),Ae={name:"abenteurer.md"},Ve=h({...Ae,setup(r){return(a,s)=>(i(),u("div",null,[Be,c(f,{data:n(we)},null,8,["data"]),De,c(f,{data:n(me)},null,8,["data"]),Pe,c(f,{data:n(_e)},null,8,["data"]),$e]))}});export{Ce as __pageData,Ve as default};
