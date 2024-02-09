import{d as E,m as b}from"./chunks/constants.ODF6E27E.js";import{d as p,k as d,c as u,m as e,t,F as k,G as f,o as l,n as T,p as r,q as M,s as W,_ as x,a4 as Z,g as R,e as $,J as c,a5 as a,V as J,a as S}from"./chunks/framework.txq9K0Xl.js";import{V as U}from"./chunks/theme.PgHnexVt.js";const F=n=>n.reduce((s,o)=>s+o,0);function O(n){const s=n.map(h=>h.amount),i=F(s)/10;return Math.round(i)}const Q=n=>(M("data-v-71feaf88"),n=n(),W(),n),X=Q(()=>e("tr",null,[e("th",null,"Eigenschaft"),e("th",null,"Wert"),e("th",null,"Bonus"),e("th",null,"Gesamt")],-1)),Y=p({__name:"CharacterTrait",props:{type:{},data:{}},setup(n){const s=n,o=d(()=>O(s.data));return(i,m)=>(l(),u("div",null,[e("h4",null,t(i.type)+" (+"+t(o.value)+")",1),e("table",null,[X,(l(!0),u(k,null,f(i.data,h=>(l(),u("tr",null,[e("td",null,t(h.property),1),e("td",{class:T({"background-red":h.amount>r(E)})},t(h.amount),3),e("td",null,t(o.value),1),e("td",null,t(h.amount+o.value),1)]))),256))])]))}}),y=x(Y,[["__scopeId","data-v-71feaf88"]]);function ee(n){const s=n.slice(0,1),o=n.slice(1);return`${s.toUpperCase()}${o.toLowerCase()}`}const ne=p({__name:"CharacterBasicStats",props:{volk:{},alter:{},lebensPunkte:{},statur:{},gesinnung:{}},setup(n){const s=n,o=i=>typeof i=="string"?i:i.toLocaleString("de");return(i,m)=>(l(!0),u(k,null,f(s,(h,_)=>(l(),u("tr",null,[e("td",null,t(r(ee)(_)),1),e("td",null,t(o(h)),1)]))),256))}}),re=e("h4",null,"Inventar",-1),te=e("tr",null,[e("th",null,"Gegenstand"),e("th",null,"Anzahl")],-1),ae=p({__name:"CharacterInventory",props:{data:{}},setup(n){return(s,o)=>(l(),u("div",null,[re,e("table",null,[te,(l(!0),u(k,null,f(s.data,i=>(l(),u("tr",null,[e("td",null,t(i.property),1),e("td",null,t(i.amount),1)]))),256))])]))}}),w=n=>(M("data-v-57f30ab4"),n=n(),W(),n),se={class:"character-sheet"},oe={key:0,class:"error"},ie={key:1,class:"error"},ue=w(()=>e("h4",null,"Grundlagen",-1)),le=w(()=>e("tr",null,[e("th",null,"Eigenschaft"),e("th",null,"Wert")],-1)),he={class:"character-traits"},ce=w(()=>e("h4",null,"Zusätzliche Informationen",-1)),de=p({__name:"CharacterSheet",props:{data:{}},setup(n){const s=n,{name:o,volk:i,alter:m,lebensPunkte:h,statur:_,gesinnung:G,beruf:K,handeln:B,wissen:D,soziales:A,inventar:C,anmerkungen:N,image:V}=Z(s.data),L={avatar:R(V.value),name:o.value,title:K.value},g=d(()=>{const P=[...B.value,...D.value,...A.value].map(v=>v.amount);return F(P)}),I=d(()=>g.value>b),H=d(()=>g.value<b),j=d(()=>N.value.split(`
`));return(q,P)=>(l(),u("div",se,[I.value?(l(),u("p",oe," Charakter hat zu viele Skillpunkte verbraucht (maximum: "+t(r(b))+", verbraucht: "+t(g.value)+") ",1)):$("",!0),H.value?(l(),u("p",ie," Charakter hat noch Skillpunkte übrig (maximum: "+t(r(b))+", verbraucht: "+t(g.value)+") ",1)):$("",!0),c(r(U),{members:[L],class:"character-profile",size:"medium"},null,8,["members"]),e("div",null,[ue,e("table",null,[le,c(ne,{volk:r(i),alter:r(m),"lebens-punkte":r(h),statur:r(_),gesinnung:r(G)},null,8,["volk","alter","lebens-punkte","statur","gesinnung"])])]),e("div",he,[c(y,{type:"Handeln",data:r(B)},null,8,["data"]),c(y,{type:"Wissen",data:r(D)},null,8,["data"]),c(y,{type:"Soziales",data:r(A)},null,8,["data"])]),c(ae,{data:r(C)},null,8,["data"]),e("div",null,[ce,(l(!0),u(k,null,f(j.value,v=>(l(),u("p",null,t(v),1))),256))])]))}}),z=x(de,[["__scopeId","data-v-57f30ab4"]]),pe=a([{property:"Taschendiebstahl",amount:10},{property:"Schleichen",amount:8},{property:"Akrobatik",amount:3},{property:"Fallen legen",amount:2},{property:"Werfen",amount:10},{property:"Hieb-/Stichwaffen",amount:12},{property:"Ausweichen",amount:6},{property:"Schloss knacken",amount:9}]),me=a([{property:"Fallen legen",amount:3},{property:"Arkanes Wissen",amount:2},{property:"Wahrnehmung",amount:9},{property:"Flora",amount:5},{property:"Fauna",amount:5}]),ge=a([{property:"Betören",amount:1},{property:"Lügen",amount:10},{property:"Manipulieren",amount:5}]),be=a([{property:"Kurzschwert",amount:2}]),ke=a({name:"Morzan Schattenläufer",image:"/images/schurke.jpg",volk:"Wiedergänger (Mensch)",alter:69,lebensPunkte:100,statur:"Groß",beruf:"Schurke",gesinnung:"Chaotic Good",anmerkungen:"Lustmolch/Kleptomane/Bonze",handeln:pe,wissen:me,soziales:ge,inventar:be}),fe=a([{property:"Faustkampf",amount:1},{property:"Instrument spielen",amount:10},{property:"Singen",amount:1},{property:"Flüchten",amount:1}]),_e=a([{property:"Völkerkunde",amount:3},{property:"Wahrnehmung",amount:5},{property:"Flora",amount:2},{property:"Fauna",amount:2}]),ve=a([{property:"Überzeugen",amount:12},{property:"Bardische Inspiration",amount:12},{property:"Bezirzen",amount:4},{property:"Feilschen",amount:9},{property:"Lügen",amount:7},{property:"Menschenkenntnis",amount:8},{property:"Beeindrucken",amount:9},{property:"Beruhigen",amount:9},{property:"Humor",amount:5}]),ye=a([]),ze=a({name:"Harald Scheißgesang",image:"/images/barde.jpg",volk:"Elbe",alter:1025.5,lebensPunkte:100,statur:"Elbenhaft",beruf:"Barde",gesinnung:"Chaotic Neutral",anmerkungen:"SchizophreneZauberspruch: Der braune Ton",handeln:fe,wissen:_e,soziales:ve,inventar:ye}),Se=a([{property:"Schlagen",amount:9},{property:"Zweihänder",amount:12},{property:"Heben",amount:8},{property:"Treten",amount:10},{property:"Jagen",amount:10},{property:"Angeln",amount:8}]),we=a([{property:"Völkerkunde",amount:6},{property:"Spuren lesen",amount:8},{property:"Wahrnehmung",amount:5}]),Be=a([{property:"Lügen",amount:2},{property:"Menschenkenntnis",amount:3},{property:"Beeindrucken",amount:5},{property:"Zechen",amount:14}]),De=a([]),Ae=a({name:"Fridericus Knochenbrecher",image:"/images/berserker.jpg",volk:"Zwerg",alter:262,lebensPunkte:100,statur:"Zwergenhaft",beruf:"Berserker",gesinnung:"Lawful Bad",anmerkungen:'Geistig eingeschränkt/Alkoholabhänig (vor allem Bier), Die Knochenbrecher sind der wohl bekannteste und auch ruhmreichste Zwergen-Klan in ganz Gaia. Aus ihrer Linie sprangen mächtige Krieger sowie weise Gelehrte hervor. Auch der jüngste Spross, Fridericus Knochenbrecher, hat den Kampfesmut seiner Vorfahren geerbt - leider jedoch nicht die Intelligenz. Die braucht er aber nicht, denn sein treuer Kriegshammer "Willensbrecher" zerschlägt jedes Problem in 1000 Stücke. Nachdem das Klanoberhaupt von einer vermeintlichen Bedrohung in den Randgebieten erfahren hat, entsand er, vielleicht nicht ganz von der Gefahr überzeugt, seinen jüngsten Sohn. So begann das Abenteuer des Fridericus Knochenbrecher.',handeln:Se,wissen:we,soziales:Be,inventar:De}),Pe=J('<h1 id="geschichte-der-abenteuerer-bisher" tabindex="-1">Geschichte der Abenteuerer bisher <a class="header-anchor" href="#geschichte-der-abenteuerer-bisher" aria-label="Permalink to &quot;Geschichte der Abenteuerer bisher&quot;">​</a></h1><h2 id="was-bisher-geschah" tabindex="-1">Was bisher geschah? <a class="header-anchor" href="#was-bisher-geschah" aria-label="Permalink to &quot;Was bisher geschah?&quot;">​</a></h2><p>Unsere vier tapferen Abenteurer, der Berserker <strong>Fridericus Rotbart</strong>, der Schurke <strong>Morzan Schattenläufer</strong>, der Barde <strong>Harald Scheißgesang</strong> und ein Zauberer, trafen einst in einem kleinen Dorf am Rande zwischen Midgard und Fellheim aufeinander. Sie alle wurden dorthin gesandt, um für ihren jeweiligen Vorgesetzten ihres Volkes Nachforschungen durchzuführen um komische und merkwürdige Ereignisse zur ergründen. Schnell wurde ihnen klar, dass sich um schwarze Magie handelt, die droht, die Welt zu zerstören. Warum jene Person oder Gruppe dies tut, ist ihnen noch nicht bekannt. Sie kennen nur ihre Aufgabe: Haltet die Bedrohung auf und rettet die Welt.</p><p>So schlugen sich die tapferen Abenteurer durch harte Quests, schwere Kämpfen und mussten das eine oder andere Mal mit dem Schicksal um ihr Glück würfeln. Der Barde <strong>Harald Scheißgesang</strong>, überfordert mit dem “ganzen Welt retten”, entschied sich dazu, sein Glück anderswo zu suchen und brach ins Ungewisse auf. Nach weiten Wegen und vielen großen und kleinen Ablenkungen konnten die drei restlichen Abenteurer die Quelle allen Bösen finden und stellten sich so dem apokalyptischen Hexenmeister <strong>Merlinus der Schwarze</strong> in seiner Düsterburg. Als Mitglied des Kultes des Drachen versuchte er die totgeglaubten Drachen wiederzuerwecken. Es entfachte ein epischer Kampf, dem die Abenteurer aber leider nicht gewachsen waren. Der Niederlage nah entschieden sich die Abenteuer fürs erste sich zurückzuziehen, das Schicksal der Welt lag immerhin auf ihren Schultern. Den Hexenmeister konnten sie fürs Erste von seinen Plänen abhalten, sodass auch er sich neu organisieren muss, um seinen teuflischen Plan umzusetzen. Leider war der Magier ihrer Gruppe zu sehr verletzt und der Berserker und Schurke entschieden sich dazu, ihn zurückzulassen, um ihre eigene Haut zu retten. Der Horror in seinen Augen, dass seine Kameraden ihn in Stich lassen, hatte einen bleibenden negativen Effekt auf die Überlebenden. Vor allem seine letzten Worte hallten in ihren Köpfen: <strong>“Lasst mich nicht in Stich, ihr Narren.”</strong></p><p>Zurzeit befinden sich die gerade so am Leben erhaltenen Abenteuer in der Schenke der <strong>Frau Bogi</strong> in Krähenberg. Nur noch zu zweit versuchen der Berserker <strong>Fridericus Rotbart</strong> und der Schurke <strong>Morzan Schattenläufer</strong> neuen Mut zu sammeln, um die Welt ein weiteres Mal vor den Drachen zu beschützen.</p><h2 id="die-abenteurer" tabindex="-1">Die Abenteurer <a class="header-anchor" href="#die-abenteurer" aria-label="Permalink to &quot;Die Abenteurer&quot;">​</a></h2><h3 id="der-berserker" tabindex="-1">Der Berserker <a class="header-anchor" href="#der-berserker" aria-label="Permalink to &quot;Der Berserker&quot;">​</a></h3>',7),$e=e("h3",{id:"der-schurke",tabindex:"-1"},[S("Der Schurke "),e("a",{class:"header-anchor",href:"#der-schurke","aria-label":'Permalink to "Der Schurke"'},"​")],-1),Me=e("h3",{id:"der-barde",tabindex:"-1"},[S("Der Barde "),e("a",{class:"header-anchor",href:"#der-barde","aria-label":'Permalink to "Der Barde"'},"​")],-1),We=e("h3",{id:"der-magier",tabindex:"-1"},[S("Der Magier "),e("a",{class:"header-anchor",href:"#der-magier","aria-label":'Permalink to "Der Magier"'},"​")],-1),xe=e("p",null,"Name: Amgmar Nazaroth",-1),Ne=JSON.parse('{"title":"Geschichte der Abenteuerer bisher","description":"","frontmatter":{},"headers":[],"relativePath":"abenteurer.md","filePath":"abenteurer.md"}'),Fe={name:"abenteurer.md"},Ve=p({...Fe,setup(n){return(s,o)=>(l(),u("div",null,[Pe,c(z,{data:r(Ae)},null,8,["data"]),$e,c(z,{data:r(ke)},null,8,["data"]),Me,c(z,{data:r(ze)},null,8,["data"]),We,xe]))}});export{Ne as __pageData,Ve as default};
