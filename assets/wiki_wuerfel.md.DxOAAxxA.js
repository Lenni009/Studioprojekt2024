import{d as u,s,y as h,X as v,R as w,o as l,c,j as a,k as g,aP as k,aQ as x,e as B,F as b,_ as y,I as D,a as N}from"./chunks/framework.D1T4sQTM.js";import{d as P,i as R}from"./chunks/constants.CfAgSHS3.js";const V={class:"die-control"},E={class:"die-wrapper"},S=u({__name:"DiceBox",setup(_){const r=s(""),i=s(null),n=s(null);h(async()=>{var o;const{default:e}=await v(()=>import("./chunks/dice-box-threejs.es.CIb3H_lk.js"),[]),t=new e("#die",{theme_customColorset:{background:"#55d12f",foreground:"#ffffff",material:"plastic"},light_intensity:1,gravity_multiplier:500,baseScale:m(),strength:2});t.initialize().then(()=>{w(()=>{t.roll(d(r.value))})}).catch(p=>console.error(p)),(o=i.value)==null||o.addEventListener("click",()=>{t.roll(d(r.value))})});const f=(e,t)=>Math.floor(Math.random()*(t-e+1))+e,d=e=>`1d${P}@${e||f(1,20)}`;function m(){return n.value?n.value.getBoundingClientRect().width/4:void 0}return(e,t)=>(l(),c(b,null,[a("div",V,[g(R)?B("",!0):k((l(),c("input",{key:0,"onUpdate:modelValue":t[0]||(t[0]=o=>r.value=o),class:"rig-input",placeholder:"Gewünschtes Ergebnis",type:"text"},null,512)),[[x,r.value]]),a("button",{class:"roll-button",ref_key:"rollBtn",ref:i}," Würfeln ",512)]),a("div",E,[a("div",{id:"die",ref_key:"die",ref:n},null,512)])],64))}}),T=y(S,[["__scopeId","data-v-5e3e1566"]]),C=a("h1",{id:"wurfel",tabindex:"-1"},[N("Würfel "),a("a",{class:"header-anchor",href:"#wurfel","aria-label":'Permalink to "Würfel"'},"​")],-1),$=JSON.parse('{"title":"Würfel","description":"","frontmatter":{"aside":false},"headers":[],"relativePath":"wiki/wuerfel.md","filePath":"wiki/wuerfel.md"}'),I={name:"wiki/wuerfel.md"},z=u({...I,setup(_){return(r,i)=>(l(),c("div",null,[C,D(T)]))}});export{$ as __pageData,z as default};