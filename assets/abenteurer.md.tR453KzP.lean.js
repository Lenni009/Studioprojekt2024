import{d as q,m as g}from"./chunks/constants.ODF6E27E.js";import{d,k as b,c as u,m as e,t,F as v,G as y,o as l,n as E,p as r,q as $,s as M,_ as W,a4 as T,g as Z,e as P,J as c,a5 as a,V as R,a as z}from"./chunks/framework.txq9K0Xl.js";import{V as J}from"./chunks/theme.9RxNCjCe.js";const x=n=>n.reduce((s,o)=>s+o,0);function U(n){const s=n.map(h=>h.amount),i=x(s)/10;return Math.round(i)}const O=n=>($("data-v-71feaf88"),n=n(),M(),n),Q=O(()=>e("tr",null,[e("th",null,"Eigenschaft"),e("th",null,"Wert"),e("th",null,"Bonus"),e("th",null,"Gesamt")],-1)),X=d({__name:"CharacterTrait",props:{type:{},data:{}},setup(n){const s=n,o=b(()=>U(s.data));return(i,p)=>(l(),u("div",null,[e("h4",null,t(i.type)+" (+"+t(o.value)+")",1),e("table",null,[Q,(l(!0),u(v,null,y(i.data,h=>(l(),u("tr",null,[e("td",null,t(h.property),1),e("td",{class:E({"background-red":h.amount>r(q)})},t(h.amount),3),e("td",null,t(o.value),1),e("td",null,t(h.amount+o.value),1)]))),256))])]))}}),f=W(X,[["__scopeId","data-v-71feaf88"]]);function Y(n){const s=n.slice(0,1),o=n.slice(1);return`${s.toUpperCase()}${o.toLowerCase()}`}const ee=d({__name:"CharacterBasicStats",props:{volk:{},alter:{},lebensPunkte:{},statur:{},gesinnung:{}},setup(n){const s=n,o=i=>typeof i=="string"?i:i.toLocaleString("de");return(i,p)=>(l(!0),u(v,null,y(s,(h,k)=>(l(),u("tr",null,[e("td",null,t(r(Y)(k)),1),e("td",null,t(o(h)),1)]))),256))}}),ne=e("h4",null,"Inventar",-1),re=e("tr",null,[e("th",null,"Gegenstand"),e("th",null,"Anzahl")],-1),te=d({__name:"CharacterInventory",props:{data:{}},setup(n){return(s,o)=>(l(),u("div",null,[ne,e("table",null,[re,(l(!0),u(v,null,y(s.data,i=>(l(),u("tr",null,[e("td",null,t(i.property),1),e("td",null,t(i.amount),1)]))),256))])]))}}),S=n=>($("data-v-317df916"),n=n(),M(),n),ae={class:"character-sheet"},se={key:0,class:"error"},oe={key:1,class:"error"},ie=S(()=>e("h4",null,"Grundlagen",-1)),ue=S(()=>e("tr",null,[e("th",null,"Eigenschaft"),e("th",null,"Wert")],-1)),le={class:"character-traits"},he=S(()=>e("h4",null,"Zusätzliche Informationen",-1)),ce=d({__name:"CharacterSheet",props:{data:{}},setup(n){const s=n,{name:o,volk:i,alter:p,lebensPunkte:h,statur:k,gesinnung:F,beruf:G,handeln:w,wissen:B,soziales:D,inventar:K,anmerkungen:C,image:N}=T(s.data),V={avatar:Z(N.value),name:o.value,title:G.value},m=b(()=>{const A=[...w.value,...B.value,...D.value].map(j=>j.amount);return x(A)}),L=b(()=>m.value>g),H=b(()=>m.value<g);return(I,A)=>(l(),u("div",ae,[L.value?(l(),u("p",se," Charakter hat zu viele Skillpunkte verbraucht (maximum: "+t(r(g))+", verbraucht: "+t(m.value)+") ",1)):P("",!0),H.value?(l(),u("p",oe," Charakter hat noch Skillpunkte übrig (maximum: "+t(r(g))+", verbraucht: "+t(m.value)+") ",1)):P("",!0),c(r(J),{members:[V],class:"character-profile",size:"medium"},null,8,["members"]),e("div",null,[ie,e("table",null,[ue,c(ee,{volk:r(i),alter:r(p),"lebens-punkte":r(h),statur:r(k),gesinnung:r(F)},null,8,["volk","alter","lebens-punkte","statur","gesinnung"])])]),e("div",le,[c(f,{type:"Handeln",data:r(w)},null,8,["data"]),c(f,{type:"Wissen",data:r(B)},null,8,["data"]),c(f,{type:"Soziales",data:r(D)},null,8,["data"])]),c(te,{data:r(K)},null,8,["data"]),e("div",null,[he,e("p",null,t(r(C)),1)])]))}}),_=W(ce,[["__scopeId","data-v-317df916"]]),de=a([{property:"Taschendiebstahl",amount:10},{property:"Schleichen",amount:8},{property:"Akrobatik",amount:3},{property:"Fallen legen",amount:2},{property:"Werfen",amount:10},{property:"Hieb-/Stichwaffen",amount:12},{property:"Ausweichen",amount:6},{property:"Schloss knacken",amount:9}]),pe=a([{property:"Fallen legen",amount:3},{property:"Arkanes Wissen",amount:2},{property:"Wahrnehmung",amount:9},{property:"Flora",amount:5},{property:"Fauna",amount:5}]),me=a([{property:"Betören",amount:1},{property:"Lügen",amount:10},{property:"Manipulieren",amount:5}]),ge=a([{property:"Kurzschwert",amount:2}]),be=a({name:"Morzan Schattenläufer",image:"/images/schurke.jpg",volk:"Wiedergänger (Mensch)",alter:69,lebensPunkte:100,statur:"Groß",beruf:"Schurke",gesinnung:"Chaotic Good",anmerkungen:"Lustmolch/Kleptomane/Bonze",handeln:de,wissen:pe,soziales:me,inventar:ge}),ke=a([{property:"Faustkampf",amount:1},{property:"Instrument spielen",amount:10},{property:"Singen",amount:1},{property:"Flüchten",amount:1}]),fe=a([{property:"Völkerkunde",amount:3},{property:"Wahrnehmung",amount:5},{property:"Flora",amount:2},{property:"Fauna",amount:2}]),_e=a([{property:"Überzeugen",amount:12},{property:"Bardische Inspiration",amount:12},{property:"Bezirzen",amount:4},{property:"Feilschen",amount:9},{property:"Lügen",amount:7},{property:"Menschenkenntnis",amount:8},{property:"Beeindrucken",amount:9},{property:"Beruhigen",amount:9},{property:"Humor",amount:5}]),ve=a([]),ye=a({name:"Harald Scheißgesang",image:"/images/barde.jpg",volk:"Elbe",alter:1025.5,lebensPunkte:100,statur:"Elbenhaft",beruf:"Barde",gesinnung:"Chaotic Neutral",anmerkungen:"Schizophren/ Zauberspruch: Der braune Ton",handeln:ke,wissen:fe,soziales:_e,inventar:ve}),ze=a([{property:"Schlagen",amount:9},{property:"Zweihänder",amount:12},{property:"Heben",amount:8},{property:"Treten",amount:10},{property:"Jagen",amount:10},{property:"Angeln",amount:8}]),Se=a([{property:"Völkerkunde",amount:6},{property:"Spuren lesen",amount:8},{property:"Wahrnehmung",amount:5}]),we=a([{property:"Lügen",amount:2},{property:"Menschenkenntnis",amount:3},{property:"Beeindrucken",amount:5},{property:"Zechen",amount:14}]),Be=a([]),De=a({name:"Fridericus Knochenbrecher",image:"/images/berserker.jpg",volk:"Zwerg",alter:262,lebensPunkte:100,statur:"Zwergenhaft",beruf:"Berserker",gesinnung:"Lawful Bad",anmerkungen:'Geistig eingeschränkt/Alkoholabhänig (vor allem Bier), Die Knochenbrecher sind der wohl bekannteste und auch ruhmreichste Zwergen-Klan in ganz Gaia. Aus ihrer Linie sprangen mächtige Krieger sowie weise Gelehrte hervor. Auch der jüngste Spross, Fridericus Knochenbrecher, hat den Kampfesmut seiner Vorfahren geerbt - leider jedoch nicht die Intelligenz. Die braucht er aber nicht, denn sein treuer Kriegshammer "Willensbrecher" zerschlägt jedes Problem in 1000 Stücke. Nachdem das Klanoberhaupt von einer vermeintlichen Bedrohung in den Randgebieten erfahren hat, entsand er, vielleicht nicht ganz von der Gefahr überzeugt, seinen jüngsten Sohn. So begann das Abenteuer des Fridericus Knochenbrecher.',handeln:ze,wissen:Se,soziales:we,inventar:Be}),Ae=R('<h1 id="geschichte-der-abenteuerer-bisher" tabindex="-1">Geschichte der Abenteuerer bisher <a class="header-anchor" href="#geschichte-der-abenteuerer-bisher" aria-label="Permalink to &quot;Geschichte der Abenteuerer bisher&quot;">​</a></h1><h2 id="was-bisher-geschah" tabindex="-1">Was bisher geschah? <a class="header-anchor" href="#was-bisher-geschah" aria-label="Permalink to &quot;Was bisher geschah?&quot;">​</a></h2><p>Unsere vier tapferen Abenteurer, der Berserker <strong>Fridericus Rotbart</strong>, der Schurke <strong>Morzan Schattenläufer</strong>, der Barde <strong>Harald Scheißgesang</strong> und ein Zauberer, trafen einst in einem kleinen Dorf am Rande zwischen Midgard und Fellheim aufeinander. Sie alle wurden dorthin gesandt, um für ihren jeweiligen Vorgesetzten ihres Volkes Nachforschungen durchzuführen um komische und merkwürdige Ereignisse zur ergründen. Schnell wurde ihnen klar, dass sich um schwarze Magie handelt, die droht, die Welt zu zerstören. Warum jene Person oder Gruppe dies tut, ist ihnen noch nicht bekannt. Sie kennen nur ihre Aufgabe: Haltet die Bedrohung auf und rettet die Welt.</p><p>So schlugen sich die tapferen Abenteurer durch harte Quests, schwere Kämpfen und mussten das eine oder andere Mal mit dem Schicksal um ihr Glück würfeln. Der Barde <strong>Harald Scheißgesang</strong>, überfordert mit dem “ganzen Welt retten”, entschied sich dazu, sein Glück anderswo zu suchen und brach ins Ungewisse auf. Nach weiten Wegen und vielen großen und kleinen Ablenkungen konnten die drei restlichen Abenteurer die Quelle allen Bösen finden und stellten sich so dem apokalyptischen Hexenmeister <strong>Merlinus der Schwarze</strong> in seiner Düsterburg. Als Mitglied des Kultes des Drachen versuchte er die totgeglaubten Drachen wiederzuerwecken. Es entfachte ein epischer Kampf, dem die Abenteurer aber leider nicht gewachsen waren. Der Niederlage nah entschieden sich die Abenteuer fürs erste sich zurückzuziehen, das Schicksal der Welt lag immerhin auf ihren Schultern. Den Hexenmeister konnten sie fürs Erste von seinen Plänen abhalten, sodass auch er sich neu organisieren muss, um seinen teuflischen Plan umzusetzen. Leider war der Magier ihrer Gruppe zu sehr verletzt und der Berserker und Schurke entschieden sich dazu, ihn zurückzulassen, um ihre eigene Haut zu retten. Der Horror in seinen Augen, dass seine Kameraden ihn in Stich lassen, hatte einen bleibenden negativen Effekt auf die Überlebenden. Vor allem seine letzten Worte hallten in ihren Köpfen: <strong>“Lasst mich nicht in Stich, ihr Narren.”</strong></p><p>Zurzeit befinden sich die gerade so am Leben erhaltenen Abenteuer in der Schenke der <strong>Frau Bogi</strong> in Krähenberg. Nur noch zu zweit versuchen der Berserker <strong>Fridericus Rotbart</strong> und der Schurke <strong>Morzan Schattenläufer</strong> neuen Mut zu sammeln, um die Welt ein weiteres Mal vor den Drachen zu beschützen.</p><h2 id="die-abenteurer" tabindex="-1">Die Abenteurer <a class="header-anchor" href="#die-abenteurer" aria-label="Permalink to &quot;Die Abenteurer&quot;">​</a></h2><h3 id="der-berserker" tabindex="-1">Der Berserker <a class="header-anchor" href="#der-berserker" aria-label="Permalink to &quot;Der Berserker&quot;">​</a></h3>',7),Pe=e("h3",{id:"der-schurke",tabindex:"-1"},[z("Der Schurke "),e("a",{class:"header-anchor",href:"#der-schurke","aria-label":'Permalink to "Der Schurke"'},"​")],-1),$e=e("h3",{id:"der-barde",tabindex:"-1"},[z("Der Barde "),e("a",{class:"header-anchor",href:"#der-barde","aria-label":'Permalink to "Der Barde"'},"​")],-1),Me=e("h3",{id:"der-magier",tabindex:"-1"},[z("Der Magier "),e("a",{class:"header-anchor",href:"#der-magier","aria-label":'Permalink to "Der Magier"'},"​")],-1),We=e("p",null,"Name: Amgmar Nazaroth",-1),Ce=JSON.parse('{"title":"Geschichte der Abenteuerer bisher","description":"","frontmatter":{},"headers":[],"relativePath":"abenteurer.md","filePath":"abenteurer.md"}'),xe={name:"abenteurer.md"},Ne=d({...xe,setup(n){return(s,o)=>(l(),u("div",null,[Ae,c(_,{data:r(De)},null,8,["data"]),Pe,c(_,{data:r(be)},null,8,["data"]),$e,c(_,{data:r(ye)},null,8,["data"]),Me,We]))}});export{Ce as __pageData,Ne as default};
