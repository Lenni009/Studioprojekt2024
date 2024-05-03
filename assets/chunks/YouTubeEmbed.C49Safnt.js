import{g as Mt,c as Lt,a as Dt}from"./commonjsHelpers.C4iS2aBk.js";import{a5 as Vt,d as Ft,o as Bt,b as $t,m as Gt,_ as Ut}from"./framework.avPINgVp.js";var Pt={exports:{}};const Kt=Mt(Vt);(function(ct,lt){(function(o,c){ct.exports=c(Kt)})(typeof self<"u"?self:Lt,function(ot){return function(o){var c={};function t(e){if(c[e])return c[e].exports;var r=c[e]={i:e,l:!1,exports:{}};return o[e].call(r.exports,r,r.exports,t),r.l=!0,r.exports}return t.m=o,t.c=c,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(r&1&&(e=t(e)),r&8||r&4&&typeof e=="object"&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),r&2&&typeof e!="string")for(var a in e)t.d(n,a,(function(i){return e[i]}).bind(null,a));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s="fb15")}({"00ee":function(o,c,t){var e=t("b622"),r=e("toStringTag"),n={};n[r]="z",o.exports=String(n)==="[object z]"},"0366":function(o,c,t){var e=t("1c0b");o.exports=function(r,n,a){if(e(r),n===void 0)return r;switch(a){case 0:return function(){return r.call(n)};case 1:return function(i){return r.call(n,i)};case 2:return function(i,u){return r.call(n,i,u)};case 3:return function(i,u,s){return r.call(n,i,u,s)}}return function(){return r.apply(n,arguments)}}},"06cf":function(o,c,t){var e=t("83ab"),r=t("d1e7"),n=t("5c6c"),a=t("fc6a"),i=t("c04e"),u=t("5135"),s=t("0cfb"),l=Object.getOwnPropertyDescriptor;c.f=e?l:function(y,x){if(y=a(y),x=i(x,!0),s)try{return l(y,x)}catch{}if(u(y,x))return n(!r.f.call(y,x),y[x])}},"0cfb":function(o,c,t){var e=t("83ab"),r=t("d039"),n=t("cc12");o.exports=!e&&!r(function(){return Object.defineProperty(n("div"),"a",{get:function(){return 7}}).a!=7})},"159b":function(o,c,t){var e=t("da84"),r=t("fdbc"),n=t("17c2"),a=t("9112");for(var i in r){var u=e[i],s=u&&u.prototype;if(s&&s.forEach!==n)try{a(s,"forEach",n)}catch{s.forEach=n}}},"17c2":function(o,c,t){var e=t("b727").forEach,r=t("a640"),n=t("ae40"),a=r("forEach"),i=n("forEach");o.exports=!a||!i?function(s){return e(this,s,arguments.length>1?arguments[1]:void 0)}:[].forEach},"19aa":function(o,c){o.exports=function(t,e,r){if(!(t instanceof e))throw TypeError("Incorrect "+(r?r+" ":"")+"invocation");return t}},"1be4":function(o,c,t){var e=t("d066");o.exports=e("document","documentElement")},"1c0b":function(o,c){o.exports=function(t){if(typeof t!="function")throw TypeError(String(t)+" is not a function");return t}},"1c7e":function(o,c,t){var e=t("b622"),r=e("iterator"),n=!1;try{var a=0,i={next:function(){return{done:!!a++}},return:function(){n=!0}};i[r]=function(){return this},Array.from(i,function(){throw 2})}catch{}o.exports=function(u,s){if(!s&&!n)return!1;var l=!1;try{var h={};h[r]=function(){return{next:function(){return{done:l=!0}}}},u(h)}catch{}return l}},"1cdc":function(o,c,t){var e=t("342f");o.exports=/(iphone|ipod|ipad).*applewebkit/i.test(e)},"1d80":function(o,c){o.exports=function(t){if(t==null)throw TypeError("Can't call method on "+t);return t}},2266:function(o,c,t){var e=t("825a"),r=t("e95a"),n=t("50c4"),a=t("0366"),i=t("35a1"),u=t("9bdd"),s=function(h,y){this.stopped=h,this.result=y},l=o.exports=function(h,y,x,v,f){var p=a(y,x,v?2:1),d,g,b,T,S,P,R;if(f)d=h;else{if(g=i(h),typeof g!="function")throw TypeError("Target is not iterable");if(r(g)){for(b=0,T=n(h.length);T>b;b++)if(S=v?p(e(R=h[b])[0],R[1]):p(h[b]),S&&S instanceof s)return S;return new s(!1)}d=g.call(h)}for(P=d.next;!(R=P.call(d)).done;)if(S=u(d,p,R.value,v),typeof S=="object"&&S&&S instanceof s)return S;return new s(!1)};l.stop=function(h){return new s(!0,h)}},"23cb":function(o,c,t){var e=t("a691"),r=Math.max,n=Math.min;o.exports=function(a,i){var u=e(a);return u<0?r(u+i,0):n(u,i)}},"23e7":function(o,c,t){var e=t("da84"),r=t("06cf").f,n=t("9112"),a=t("6eeb"),i=t("ce4e"),u=t("e893"),s=t("94ca");o.exports=function(l,h){var y=l.target,x=l.global,v=l.stat,f,p,d,g,b,T;if(x?p=e:v?p=e[y]||i(y,{}):p=(e[y]||{}).prototype,p)for(d in h){if(b=h[d],l.noTargetGet?(T=r(p,d),g=T&&T.value):g=p[d],f=s(x?d:y+(v?".":"#")+d,l.forced),!f&&g!==void 0){if(typeof b==typeof g)continue;u(b,g)}(l.sham||g&&g.sham)&&n(b,"sham",!0),a(p,d,b,l)}}},"241c":function(o,c,t){var e=t("ca84"),r=t("7839"),n=r.concat("length","prototype");c.f=Object.getOwnPropertyNames||function(i){return e(i,n)}},2626:function(o,c,t){var e=t("d066"),r=t("9bf2"),n=t("b622"),a=t("83ab"),i=n("species");o.exports=function(u){var s=e(u),l=r.f;a&&s&&!s[i]&&l(s,i,{configurable:!0,get:function(){return this}})}},"2cf4":function(o,c,t){var e=t("da84"),r=t("d039"),n=t("c6b6"),a=t("0366"),i=t("1be4"),u=t("cc12"),s=t("1cdc"),l=e.location,h=e.setImmediate,y=e.clearImmediate,x=e.process,v=e.MessageChannel,f=e.Dispatch,p=0,d={},g="onreadystatechange",b,T,S,P=function(A){if(d.hasOwnProperty(A)){var C=d[A];delete d[A],C()}},R=function(A){return function(){P(A)}},N=function(A){P(A.data)},L=function(A){e.postMessage(A+"",l.protocol+"//"+l.host)};(!h||!y)&&(h=function(C){for(var V=[],D=1;arguments.length>D;)V.push(arguments[D++]);return d[++p]=function(){(typeof C=="function"?C:Function(C)).apply(void 0,V)},b(p),p},y=function(C){delete d[C]},n(x)=="process"?b=function(A){x.nextTick(R(A))}:f&&f.now?b=function(A){f.now(R(A))}:v&&!s?(T=new v,S=T.port2,T.port1.onmessage=N,b=a(S.postMessage,S,1)):e.addEventListener&&typeof postMessage=="function"&&!e.importScripts&&!r(L)&&l.protocol!=="file:"?(b=L,e.addEventListener("message",N,!1)):g in u("script")?b=function(A){i.appendChild(u("script"))[g]=function(){i.removeChild(this),P(A)}}:b=function(A){setTimeout(R(A),0)}),o.exports={set:h,clear:y}},"2d00":function(o,c,t){var e=t("da84"),r=t("342f"),n=e.process,a=n&&n.versions,i=a&&a.v8,u,s;i?(u=i.split("."),s=u[0]+u[1]):r&&(u=r.match(/Edge\/(\d+)/),(!u||u[1]>=74)&&(u=r.match(/Chrome\/(\d+)/),u&&(s=u[1]))),o.exports=s&&+s},"342f":function(o,c,t){var e=t("d066");o.exports=e("navigator","userAgent")||""},"35a1":function(o,c,t){var e=t("f5df"),r=t("3f8c"),n=t("b622"),a=n("iterator");o.exports=function(i){if(i!=null)return i[a]||i["@@iterator"]||r[e(i)]}},"37e8":function(o,c,t){var e=t("83ab"),r=t("9bf2"),n=t("825a"),a=t("df75");o.exports=e?Object.defineProperties:function(u,s){n(u);for(var l=a(s),h=l.length,y=0,x;h>y;)r.f(u,x=l[y++],s[x]);return u}},"3bbe":function(o,c,t){var e=t("861d");o.exports=function(r){if(!e(r)&&r!==null)throw TypeError("Can't set "+String(r)+" as a prototype");return r}},"3f8c":function(o,c){o.exports={}},4160:function(o,c,t){var e=t("23e7"),r=t("17c2");e({target:"Array",proto:!0,forced:[].forEach!=r},{forEach:r})},"428f":function(o,c,t){var e=t("da84");o.exports=e},"44ad":function(o,c,t){var e=t("d039"),r=t("c6b6"),n="".split;o.exports=e(function(){return!Object("z").propertyIsEnumerable(0)})?function(a){return r(a)=="String"?n.call(a,""):Object(a)}:Object},"44de":function(o,c,t){var e=t("da84");o.exports=function(r,n){var a=e.console;a&&a.error&&(arguments.length===1?a.error(r):a.error(r,n))}},4840:function(o,c,t){var e=t("825a"),r=t("1c0b"),n=t("b622"),a=n("species");o.exports=function(i,u){var s=e(i).constructor,l;return s===void 0||(l=e(s)[a])==null?u:r(l)}},4930:function(o,c,t){var e=t("d039");o.exports=!!Object.getOwnPropertySymbols&&!e(function(){return!String(Symbol())})},"4d64":function(o,c,t){var e=t("fc6a"),r=t("50c4"),n=t("23cb"),a=function(i){return function(u,s,l){var h=e(u),y=r(h.length),x=n(l,y),v;if(i&&s!=s){for(;y>x;)if(v=h[x++],v!=v)return!0}else for(;y>x;x++)if((i||x in h)&&h[x]===s)return i||x||0;return!i&&-1}};o.exports={includes:a(!0),indexOf:a(!1)}},"50c4":function(o,c,t){var e=t("a691"),r=Math.min;o.exports=function(n){return n>0?r(e(n),9007199254740991):0}},5135:function(o,c){var t={}.hasOwnProperty;o.exports=function(e,r){return t.call(e,r)}},5692:function(o,c,t){var e=t("c430"),r=t("c6cd");(o.exports=function(n,a){return r[n]||(r[n]=a!==void 0?a:{})})("versions",[]).push({version:"3.6.5",mode:e?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},"56ef":function(o,c,t){var e=t("d066"),r=t("241c"),n=t("7418"),a=t("825a");o.exports=e("Reflect","ownKeys")||function(u){var s=r.f(a(u)),l=n.f;return l?s.concat(l(u)):s}},5899:function(o,c){o.exports=`	
\v\f\r                　\u2028\u2029\uFEFF`},"58a8":function(o,c,t){var e=t("1d80"),r=t("5899"),n="["+r+"]",a=RegExp("^"+n+n+"*"),i=RegExp(n+n+"*$"),u=function(s){return function(l){var h=String(e(l));return s&1&&(h=h.replace(a,"")),s&2&&(h=h.replace(i,"")),h}};o.exports={start:u(1),end:u(2),trim:u(3)}},"5c6c":function(o,c){o.exports=function(t,e){return{enumerable:!(t&1),configurable:!(t&2),writable:!(t&4),value:e}}},"65f0":function(o,c,t){var e=t("861d"),r=t("e8b5"),n=t("b622"),a=n("species");o.exports=function(i,u){var s;return r(i)&&(s=i.constructor,typeof s=="function"&&(s===Array||r(s.prototype))?s=void 0:e(s)&&(s=s[a],s===null&&(s=void 0))),new(s===void 0?Array:s)(u===0?0:u)}},"69f3":function(o,c,t){var e=t("7f9a"),r=t("da84"),n=t("861d"),a=t("9112"),i=t("5135"),u=t("f772"),s=t("d012"),l=r.WeakMap,h,y,x,v=function(S){return x(S)?y(S):h(S,{})},f=function(S){return function(P){var R;if(!n(P)||(R=y(P)).type!==S)throw TypeError("Incompatible receiver, "+S+" required");return R}};if(e){var p=new l,d=p.get,g=p.has,b=p.set;h=function(S,P){return b.call(p,S,P),P},y=function(S){return d.call(p,S)||{}},x=function(S){return g.call(p,S)}}else{var T=u("state");s[T]=!0,h=function(S,P){return a(S,T,P),P},y=function(S){return i(S,T)?S[T]:{}},x=function(S){return i(S,T)}}o.exports={set:h,get:y,has:x,enforce:v,getterFor:f}},"6eeb":function(o,c,t){var e=t("da84"),r=t("9112"),n=t("5135"),a=t("ce4e"),i=t("8925"),u=t("69f3"),s=u.get,l=u.enforce,h=String(String).split("String");(o.exports=function(y,x,v,f){var p=f?!!f.unsafe:!1,d=f?!!f.enumerable:!1,g=f?!!f.noTargetGet:!1;if(typeof v=="function"&&(typeof x=="string"&&!n(v,"name")&&r(v,"name",x),l(v).source=h.join(typeof x=="string"?x:"")),y===e){d?y[x]=v:a(x,v);return}else p?!g&&y[x]&&(d=!0):delete y[x];d?y[x]=v:r(y,x,v)})(Function.prototype,"toString",function(){return typeof this=="function"&&s(this).source||i(this)})},7156:function(o,c,t){var e=t("861d"),r=t("d2bb");o.exports=function(n,a,i){var u,s;return r&&typeof(u=a.constructor)=="function"&&u!==i&&e(s=u.prototype)&&s!==i.prototype&&r(n,s),n}},7418:function(o,c){c.f=Object.getOwnPropertySymbols},7839:function(o,c){o.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},"7b0b":function(o,c,t){var e=t("1d80");o.exports=function(r){return Object(e(r))}},"7c73":function(o,c,t){var e=t("825a"),r=t("37e8"),n=t("7839"),a=t("d012"),i=t("1be4"),u=t("cc12"),s=t("f772"),l=">",h="<",y="prototype",x="script",v=s("IE_PROTO"),f=function(){},p=function(S){return h+x+l+S+h+"/"+x+l},d=function(S){S.write(p("")),S.close();var P=S.parentWindow.Object;return S=null,P},g=function(){var S=u("iframe"),P="java"+x+":",R;return S.style.display="none",i.appendChild(S),S.src=String(P),R=S.contentWindow.document,R.open(),R.write(p("document.F=Object")),R.close(),R.F},b,T=function(){try{b=document.domain&&new ActiveXObject("htmlfile")}catch{}T=b?d(b):g();for(var S=n.length;S--;)delete T[y][n[S]];return T()};a[v]=!0,o.exports=Object.create||function(P,R){var N;return P!==null?(f[y]=e(P),N=new f,f[y]=null,N[v]=P):N=T(),R===void 0?N:r(N,R)}},"7f9a":function(o,c,t){var e=t("da84"),r=t("8925"),n=e.WeakMap;o.exports=typeof n=="function"&&/native code/.test(r(n))},"825a":function(o,c,t){var e=t("861d");o.exports=function(r){if(!e(r))throw TypeError(String(r)+" is not an object");return r}},"83ab":function(o,c,t){var e=t("d039");o.exports=!e(function(){return Object.defineProperty({},1,{get:function(){return 7}})[1]!=7})},"861d":function(o,c){o.exports=function(t){return typeof t=="object"?t!==null:typeof t=="function"}},8875:function(o,c,t){var e,r,n;(function(a,i){r=[],e=i,n=typeof e=="function"?e.apply(c,r):e,n!==void 0&&(o.exports=n)})(typeof self<"u"?self:this,function(){function a(){var i=Object.getOwnPropertyDescriptor(document,"currentScript");if(!i&&"currentScript"in document&&document.currentScript||i&&i.get!==a&&document.currentScript)return document.currentScript;try{throw new Error}catch(b){var u=/.*at [^(]*\((.*):(.+):(.+)\)$/ig,s=/@([^@]*):(\d+):(\d+)\s*$/ig,l=u.exec(b.stack)||s.exec(b.stack),h=l&&l[1]||!1,y=l&&l[2]||!1,x=document.location.href.replace(document.location.hash,""),v,f,p,d=document.getElementsByTagName("script");h===x&&(v=document.documentElement.outerHTML,f=new RegExp("(?:[^\\n]+?\\n){0,"+(y-2)+"}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*","i"),p=v.replace(f,"$1").trim());for(var g=0;g<d.length;g++)if(d[g].readyState==="interactive"||d[g].src===h||h===x&&d[g].innerHTML&&d[g].innerHTML.trim()===p)return d[g];return null}}return a})},8925:function(o,c,t){var e=t("c6cd"),r=Function.toString;typeof e.inspectSource!="function"&&(e.inspectSource=function(n){return r.call(n)}),o.exports=e.inspectSource},"8bbf":function(o,c){o.exports=ot},"90e3":function(o,c){var t=0,e=Math.random();o.exports=function(r){return"Symbol("+String(r===void 0?"":r)+")_"+(++t+e).toString(36)}},9112:function(o,c,t){var e=t("83ab"),r=t("9bf2"),n=t("5c6c");o.exports=e?function(a,i,u){return r.f(a,i,n(1,u))}:function(a,i,u){return a[i]=u,a}},"94ca":function(o,c,t){var e=t("d039"),r=/#|\.prototype\./,n=function(l,h){var y=i[a(l)];return y==s?!0:y==u?!1:typeof h=="function"?e(h):!!h},a=n.normalize=function(l){return String(l).replace(r,".").toLowerCase()},i=n.data={},u=n.NATIVE="N",s=n.POLYFILL="P";o.exports=n},"9bdd":function(o,c,t){var e=t("825a");o.exports=function(r,n,a,i){try{return i?n(e(a)[0],a[1]):n(a)}catch(s){var u=r.return;throw u!==void 0&&e(u.call(r)),s}}},"9bf2":function(o,c,t){var e=t("83ab"),r=t("0cfb"),n=t("825a"),a=t("c04e"),i=Object.defineProperty;c.f=e?i:function(s,l,h){if(n(s),l=a(l,!0),n(h),r)try{return i(s,l,h)}catch{}if("get"in h||"set"in h)throw TypeError("Accessors not supported");return"value"in h&&(s[l]=h.value),s}},"9fab":function(o,c,t){(function(e,r){o.exports=r()})(this,function(e){return function(r,n){if(n==null&&(n={fuzzy:!0}),/youtu\.?be/.test(r)){var a,i=[/youtu\.be\/([^#\&\?]{11})/,/\?v=([^#\&\?]{11})/,/\&v=([^#\&\?]{11})/,/embed\/([^#\&\?]{11})/,/\/v\/([^#\&\?]{11})/];for(a=0;a<i.length;++a)if(i[a].test(r))return i[a].exec(r)[1];if(n.fuzzy){var u=r.split(/[\/\&\?=#\.\s]/g);for(a=0;a<u.length;++a)if(/^[^#\&\?]{11}$/.test(u[a]))return u[a]}}return null}})},a640:function(o,c,t){var e=t("d039");o.exports=function(r,n){var a=[][r];return!!a&&e(function(){a.call(null,n||function(){throw 1},1)})}},a691:function(o,c){var t=Math.ceil,e=Math.floor;o.exports=function(r){return isNaN(r=+r)?0:(r>0?e:t)(r)}},a9e3:function(o,c,t){var e=t("83ab"),r=t("da84"),n=t("94ca"),a=t("6eeb"),i=t("5135"),u=t("c6b6"),s=t("7156"),l=t("c04e"),h=t("d039"),y=t("7c73"),x=t("241c").f,v=t("06cf").f,f=t("9bf2").f,p=t("58a8").trim,d="Number",g=r[d],b=g.prototype,T=u(y(b))==d,S=function(A){var C=l(A,!1),V,D,w,B,z,_,Q,M;if(typeof C=="string"&&C.length>2){if(C=p(C),V=C.charCodeAt(0),V===43||V===45){if(D=C.charCodeAt(2),D===88||D===120)return NaN}else if(V===48){switch(C.charCodeAt(1)){case 66:case 98:w=2,B=49;break;case 79:case 111:w=8,B=55;break;default:return+C}for(z=C.slice(2),_=z.length,Q=0;Q<_;Q++)if(M=z.charCodeAt(Q),M<48||M>B)return NaN;return parseInt(z,w)}}return+C};if(n(d,!g(" 0o1")||!g("0b1")||g("+0x1"))){for(var P=function(C){var V=arguments.length<1?0:C,D=this;return D instanceof P&&(T?h(function(){b.valueOf.call(D)}):u(D)!=d)?s(new g(S(V)),D,P):S(V)},R=e?x(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),N=0,L;R.length>N;N++)i(g,L=R[N])&&!i(P,L)&&f(P,L,v(g,L));P.prototype=b,b.constructor=P,a(r,d,P)}},ae40:function(o,c,t){var e=t("83ab"),r=t("d039"),n=t("5135"),a=Object.defineProperty,i={},u=function(s){throw s};o.exports=function(s,l){if(n(i,s))return i[s];l||(l={});var h=[][s],y=n(l,"ACCESSORS")?l.ACCESSORS:!1,x=n(l,0)?l[0]:u,v=n(l,1)?l[1]:void 0;return i[s]=!!h&&!r(function(){if(y&&!e)return!0;var f={length:-1};y?a(f,1,{enumerable:!0,get:u}):f[1]=1,h.call(f,x,v)})}},b041:function(o,c,t){var e=t("00ee"),r=t("f5df");o.exports=e?{}.toString:function(){return"[object "+r(this)+"]"}},b575:function(o,c,t){var e=t("da84"),r=t("06cf").f,n=t("c6b6"),a=t("2cf4").set,i=t("1cdc"),u=e.MutationObserver||e.WebKitMutationObserver,s=e.process,l=e.Promise,h=n(s)=="process",y=r(e,"queueMicrotask"),x=y&&y.value,v,f,p,d,g,b,T,S;x||(v=function(){var P,R;for(h&&(P=s.domain)&&P.exit();f;){R=f.fn,f=f.next;try{R()}catch(N){throw f?d():p=void 0,N}}p=void 0,P&&P.enter()},h?d=function(){s.nextTick(v)}:u&&!i?(g=!0,b=document.createTextNode(""),new u(v).observe(b,{characterData:!0}),d=function(){b.data=g=!g}):l&&l.resolve?(T=l.resolve(void 0),S=T.then,d=function(){S.call(T,v)}):d=function(){a.call(e,v)}),o.exports=x||function(P){var R={fn:P,next:void 0};p&&(p.next=R),f||(f=R,d()),p=R}},b622:function(o,c,t){var e=t("da84"),r=t("5692"),n=t("5135"),a=t("90e3"),i=t("4930"),u=t("fdbf"),s=r("wks"),l=e.Symbol,h=u?l:l&&l.withoutSetter||a;o.exports=function(y){return n(s,y)||(i&&n(l,y)?s[y]=l[y]:s[y]=h("Symbol."+y)),s[y]}},b727:function(o,c,t){var e=t("0366"),r=t("44ad"),n=t("7b0b"),a=t("50c4"),i=t("65f0"),u=[].push,s=function(l){var h=l==1,y=l==2,x=l==3,v=l==4,f=l==6,p=l==5||f;return function(d,g,b,T){for(var S=n(d),P=r(S),R=e(g,b,3),N=a(P.length),L=0,A=T||i,C=h?A(d,N):y?A(d,0):void 0,V,D;N>L;L++)if((p||L in P)&&(V=P[L],D=R(V,L,S),l)){if(h)C[L]=D;else if(D)switch(l){case 3:return!0;case 5:return V;case 6:return L;case 2:u.call(C,V)}else if(v)return!1}return f?-1:x||v?v:C}};o.exports={forEach:s(0),map:s(1),filter:s(2),some:s(3),every:s(4),find:s(5),findIndex:s(6)}},c04e:function(o,c,t){var e=t("861d");o.exports=function(r,n){if(!e(r))return r;var a,i;if(n&&typeof(a=r.toString)=="function"&&!e(i=a.call(r))||typeof(a=r.valueOf)=="function"&&!e(i=a.call(r))||!n&&typeof(a=r.toString)=="function"&&!e(i=a.call(r)))return i;throw TypeError("Can't convert object to primitive value")}},c430:function(o,c){o.exports=!1},c6b6:function(o,c){var t={}.toString;o.exports=function(e){return t.call(e).slice(8,-1)}},c6cd:function(o,c,t){var e=t("da84"),r=t("ce4e"),n="__core-js_shared__",a=e[n]||r(n,{});o.exports=a},c8ba:function(o,c){var t;t=function(){return this}();try{t=t||new Function("return this")()}catch{typeof window=="object"&&(t=window)}o.exports=t},ca84:function(o,c,t){var e=t("5135"),r=t("fc6a"),n=t("4d64").indexOf,a=t("d012");o.exports=function(i,u){var s=r(i),l=0,h=[],y;for(y in s)!e(a,y)&&e(s,y)&&h.push(y);for(;u.length>l;)e(s,y=u[l++])&&(~n(h,y)||h.push(y));return h}},cc12:function(o,c,t){var e=t("da84"),r=t("861d"),n=e.document,a=r(n)&&r(n.createElement);o.exports=function(i){return a?n.createElement(i):{}}},cdf9:function(o,c,t){var e=t("825a"),r=t("861d"),n=t("f069");o.exports=function(a,i){if(e(a),r(i)&&i.constructor===a)return i;var u=n.f(a),s=u.resolve;return s(i),u.promise}},ce4e:function(o,c,t){var e=t("da84"),r=t("9112");o.exports=function(n,a){try{r(e,n,a)}catch{e[n]=a}return a}},d012:function(o,c){o.exports={}},d039:function(o,c){o.exports=function(t){try{return!!t()}catch{return!0}}},d066:function(o,c,t){var e=t("428f"),r=t("da84"),n=function(a){return typeof a=="function"?a:void 0};o.exports=function(a,i){return arguments.length<2?n(e[a])||n(r[a]):e[a]&&e[a][i]||r[a]&&r[a][i]}},d1e7:function(o,c,t){var e={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,n=r&&!e.call({1:2},1);c.f=n?function(i){var u=r(this,i);return!!u&&u.enumerable}:e},d2bb:function(o,c,t){var e=t("825a"),r=t("3bbe");o.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var n=!1,a={},i;try{i=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set,i.call(a,[]),n=a instanceof Array}catch{}return function(s,l){return e(s),r(l),n?i.call(s,l):s.__proto__=l,s}}():void 0)},d3b7:function(o,c,t){var e=t("00ee"),r=t("6eeb"),n=t("b041");e||r(Object.prototype,"toString",n,{unsafe:!0})},d44e:function(o,c,t){var e=t("9bf2").f,r=t("5135"),n=t("b622"),a=n("toStringTag");o.exports=function(i,u,s){i&&!r(i=s?i:i.prototype,a)&&e(i,a,{configurable:!0,value:u})}},da84:function(o,c,t){(function(e){var r=function(n){return n&&n.Math==Math&&n};o.exports=r(typeof globalThis=="object"&&globalThis)||r(typeof window=="object"&&window)||r(typeof self=="object"&&self)||r(typeof e=="object"&&e)||Function("return this")()}).call(this,t("c8ba"))},df75:function(o,c,t){var e=t("ca84"),r=t("7839");o.exports=Object.keys||function(a){return e(a,r)}},e2cc:function(o,c,t){var e=t("6eeb");o.exports=function(r,n,a){for(var i in n)e(r,i,n[i],a);return r}},e667:function(o,c){o.exports=function(t){try{return{error:!1,value:t()}}catch(e){return{error:!0,value:e}}}},e6cf:function(o,c,t){var e=t("23e7"),r=t("c430"),n=t("da84"),a=t("d066"),i=t("fea9"),u=t("6eeb"),s=t("e2cc"),l=t("d44e"),h=t("2626"),y=t("861d"),x=t("1c0b"),v=t("19aa"),f=t("c6b6"),p=t("8925"),d=t("2266"),g=t("1c7e"),b=t("4840"),T=t("2cf4").set,S=t("b575"),P=t("cdf9"),R=t("44de"),N=t("f069"),L=t("e667"),A=t("69f3"),C=t("94ca"),V=t("b622"),D=t("2d00"),w=V("species"),B="Promise",z=A.get,_=A.set,Q=A.getterFor(B),M=i,vt=n.TypeError,at=n.document,tt=n.process,dt=a("fetch"),W=N.f,Ot=W,Z=f(tt)=="process",It=!!(at&&at.createEvent&&n.dispatchEvent),pt="unhandledrejection",Tt="rejectionhandled",yt=0,ht=1,Rt=2,it=1,gt=2,et,mt,st,xt,k=C(B,function(){var E=p(M)!==String(M);if(!E&&(D===66||!Z&&typeof PromiseRejectionEvent!="function")||r&&!M.prototype.finally)return!0;if(D>=51&&/native code/.test(M))return!1;var m=M.resolve(1),O=function(j){j(function(){},function(){})},I=m.constructor={};return I[w]=O,!(m.then(function(){})instanceof O)}),jt=k||!g(function(E){M.all(E).catch(function(){})}),St=function(E){var m;return y(E)&&typeof(m=E.then)=="function"?m:!1},ft=function(E,m,O){if(!m.notified){m.notified=!0;var I=m.reactions;S(function(){for(var j=m.value,F=m.state==ht,G=0;I.length>G;){var $=I[G++],U=F?$.ok:$.fail,rt=$.resolve,K=$.reject,Y=$.domain,H,q,nt;try{U?(F||(m.rejection===gt&&Ct(E,m),m.rejection=it),U===!0?H=j:(Y&&Y.enter(),H=U(j),Y&&(Y.exit(),nt=!0)),H===$.promise?K(vt("Promise-chain cycle")):(q=St(H))?q.call(H,rt,K):rt(H)):K(j)}catch(Nt){Y&&!nt&&Y.exit(),K(Nt)}}m.reactions=[],m.notified=!1,O&&!m.rejection&&At(E,m)})}},bt=function(E,m,O){var I,j;It?(I=at.createEvent("Event"),I.promise=m,I.reason=O,I.initEvent(E,!1,!0),n.dispatchEvent(I)):I={promise:m,reason:O},(j=n["on"+E])?j(I):E===pt&&R("Unhandled promise rejection",O)},At=function(E,m){T.call(n,function(){var O=m.value,I=Et(m),j;if(I&&(j=L(function(){Z?tt.emit("unhandledRejection",O,E):bt(pt,E,O)}),m.rejection=Z||Et(m)?gt:it,j.error))throw j.value})},Et=function(E){return E.rejection!==it&&!E.parent},Ct=function(E,m){T.call(n,function(){Z?tt.emit("rejectionHandled",E):bt(Tt,E,m.value)})},J=function(E,m,O,I){return function(j){E(m,O,j,I)}},X=function(E,m,O,I){m.done||(m.done=!0,I&&(m=I),m.value=O,m.state=Rt,ft(E,m,!0))},ut=function(E,m,O,I){if(!m.done){m.done=!0,I&&(m=I);try{if(E===O)throw vt("Promise can't be resolved itself");var j=St(O);j?S(function(){var F={done:!1};try{j.call(O,J(ut,E,F,m),J(X,E,F,m))}catch(G){X(E,F,G,m)}}):(m.value=O,m.state=ht,ft(E,m,!1))}catch(F){X(E,{done:!1},F,m)}}};k&&(M=function(m){v(this,M,B),x(m),et.call(this);var O=z(this);try{m(J(ut,this,O),J(X,this,O))}catch(I){X(this,O,I)}},et=function(m){_(this,{type:B,done:!1,notified:!1,parent:!1,reactions:[],rejection:!1,state:yt,value:void 0})},et.prototype=s(M.prototype,{then:function(m,O){var I=Q(this),j=W(b(this,M));return j.ok=typeof m=="function"?m:!0,j.fail=typeof O=="function"&&O,j.domain=Z?tt.domain:void 0,I.parent=!0,I.reactions.push(j),I.state!=yt&&ft(this,I,!1),j.promise},catch:function(E){return this.then(void 0,E)}}),mt=function(){var E=new et,m=z(E);this.promise=E,this.resolve=J(ut,E,m),this.reject=J(X,E,m)},N.f=W=function(E){return E===M||E===st?new mt(E):Ot(E)},!r&&typeof i=="function"&&(xt=i.prototype.then,u(i.prototype,"then",function(m,O){var I=this;return new M(function(j,F){xt.call(I,j,F)}).then(m,O)},{unsafe:!0}),typeof dt=="function"&&e({global:!0,enumerable:!0,forced:!0},{fetch:function(m){return P(M,dt.apply(n,arguments))}}))),e({global:!0,wrap:!0,forced:k},{Promise:M}),l(M,B,!1,!0),h(B),st=a(B),e({target:B,stat:!0,forced:k},{reject:function(m){var O=W(this);return O.reject.call(void 0,m),O.promise}}),e({target:B,stat:!0,forced:r||k},{resolve:function(m){return P(r&&this===st?M:this,m)}}),e({target:B,stat:!0,forced:jt},{all:function(m){var O=this,I=W(O),j=I.resolve,F=I.reject,G=L(function(){var $=x(O.resolve),U=[],rt=0,K=1;d(m,function(Y){var H=rt++,q=!1;U.push(void 0),K++,$.call(O,Y).then(function(nt){q||(q=!0,U[H]=nt,--K||j(U))},F)}),--K||j(U)});return G.error&&F(G.value),I.promise},race:function(m){var O=this,I=W(O),j=I.reject,F=L(function(){var G=x(O.resolve);d(m,function($){G.call(O,$).then(I.resolve,j)})});return F.error&&j(F.value),I.promise}})},e893:function(o,c,t){var e=t("5135"),r=t("56ef"),n=t("06cf"),a=t("9bf2");o.exports=function(i,u){for(var s=r(u),l=a.f,h=n.f,y=0;y<s.length;y++){var x=s[y];e(i,x)||l(i,x,h(u,x))}}},e8b5:function(o,c,t){var e=t("c6b6");o.exports=Array.isArray||function(n){return e(n)=="Array"}},e95a:function(o,c,t){var e=t("b622"),r=t("3f8c"),n=e("iterator"),a=Array.prototype;o.exports=function(i){return i!==void 0&&(r.Array===i||a[n]===i)}},f069:function(o,c,t){var e=t("1c0b"),r=function(n){var a,i;this.promise=new n(function(u,s){if(a!==void 0||i!==void 0)throw TypeError("Bad Promise constructor");a=u,i=s}),this.resolve=e(a),this.reject=e(i)};o.exports.f=function(n){return new r(n)}},f5df:function(o,c,t){var e=t("00ee"),r=t("c6b6"),n=t("b622"),a=n("toStringTag"),i=r(function(){return arguments}())=="Arguments",u=function(s,l){try{return s[l]}catch{}};o.exports=e?r:function(s){var l,h,y;return s===void 0?"Undefined":s===null?"Null":typeof(h=u(l=Object(s),a))=="string"?h:i?r(l):(y=r(l))=="Object"&&typeof l.callee=="function"?"Arguments":y}},f772:function(o,c,t){var e=t("5692"),r=t("90e3"),n=e("keys");o.exports=function(a){return n[a]||(n[a]=r(a))}},fb15:function(o,c,t){if(t.r(c),t.d(c,"PlayerState",function(){return l}),typeof window<"u"){var e=window.document.currentScript;{var r=t("8875");e=r(),"currentScript"in document||Object.defineProperty(document,"currentScript",{get:r})}var n=e&&e.src.match(/(.+\/)[^/]+\.js(\?.*)?$/);n&&(t.p=n[1])}var a=t("8bbf");function i(v,f,p,d,g,b){return Object(a.openBlock)(),Object(a.createBlock)("div",{style:v.wrapperStyle},[Object(a.createVNode)("div",{ref:"youtube",style:v.wrapperStyle},null,4)],4)}t("4160"),t("a9e3"),t("d3b7"),t("e6cf"),t("159b");var u=t("9fab"),s=t.n(u),l={UNSTARTED:-1,ENDED:0,PLAYING:1,PAUSED:2,BUFFERING:3,CUED:5},h=Object(a.defineComponent)({name:"YouTube",props:{src:{type:String,required:!0},height:{type:[Number,String],default:360},width:{type:[Number,String],default:640},host:{type:String,default:"https://www.youtube.com"},vars:Object},computed:{id:function(){return s()(this.src)||this.src},wrapperStyle:function(){return{width:"".concat(this.width,"px"),height:"".concat(this.height,"px"),position:"relative"}}},data:function(){var f=function(){},p=new Promise(function(g){f=g}),d={promise:p,resolver:f,player:null,initiated:!1,ready:!1,iframeStyle:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"}};return d},mounted:function(){var f=this;window.onYouTubeIframeAPIReadyResolvers||(window.onYouTubeIframeAPIReadyResolvers=[]),window.onYouTubeIframeAPIReady||(window.onYouTubeIframeAPIReady=function(){var T;(T=window.onYouTubeIframeAPIReadyResolvers)===null||T===void 0||T.forEach(function(S){S()})}),this.promise.then(function(){return f.initPlayer()});var p="youtube-iframe-js-api-script",d=document.getElementById(p);if(d)this.resolver();else{var g;(g=window.onYouTubeIframeAPIReadyResolvers)===null||g===void 0||g.push(this.resolver),d=document.createElement("script"),d.id=p,d.src="https://www.youtube.com/iframe_api";var b=document.getElementsByTagName("script")[0];b&&b.parentNode&&b.parentNode.insertBefore(d,b)}},methods:{initPlayer:function(){var f=this;this.initiated=!0,this.player=new YT.Player(this.$refs.youtube,{height:this.height,width:this.width,videoId:this.id,host:this.host,playerVars:this.vars,events:{onReady:function(d){f.ready=!0,setTimeout(function(){return f.$emit("ready",d)})},onStateChange:function(d){return f.$emit("state-change",d)},onPlaybackQualityChange:function(d){return f.$emit("playback-quality-change",d)},onPlaybackRateChange:function(d){return f.$emit("playback-rate-change",d)},onError:function(d){return f.$emit("error",d)},onApiChange:function(d){return f.$emit("api-change",d)}}})},cueVideoById:function(f,p,d){var g;(g=this.player)===null||g===void 0||g.cueVideoById(f,p,d)},loadVideoById:function(f,p,d){var g;(g=this.player)===null||g===void 0||g.loadVideoById(f,p,d)},cueVideoByUrl:function(f,p,d){var g;(g=this.player)===null||g===void 0||g.cueVideoByUrl(f,p,d)},loadVideoByUrl:function(f,p,d){var g;(g=this.player)===null||g===void 0||g.loadVideoByUrl(f,p,d)},cuePlaylist:function(f,p,d,g){var b;(b=this.player)===null||b===void 0||b.cuePlaylist(f,p,d,g)},loadPlaylist:function(f,p,d,g){var b;(b=this.player)===null||b===void 0||b.loadPlaylist(f,p,d,g)},playVideo:function(){var f;(f=this.player)===null||f===void 0||f.playVideo()},pauseVideo:function(){var f;(f=this.player)===null||f===void 0||f.pauseVideo()},stopVideo:function(){var f;(f=this.player)===null||f===void 0||f.stopVideo()},seekTo:function(f,p){var d;(d=this.player)===null||d===void 0||d.seekTo(f,p)},nextVideo:function(){var f;(f=this.player)===null||f===void 0||f.nextVideo()},previousVideo:function(){var f;(f=this.player)===null||f===void 0||f.previousVideo()},playVideoAt:function(f){var p;(p=this.player)===null||p===void 0||p.playVideoAt(f)},mute:function(){var f;(f=this.player)===null||f===void 0||f.mute()},unMute:function(){var f;(f=this.player)===null||f===void 0||f.unMute()},isMuted:function(){return this.player?this.player.isMuted():!1},setVolume:function(f){var p;(p=this.player)===null||p===void 0||p.setVolume(f)},getVolume:function(){return this.player?this.player.getVolume():0},getPlaybackRate:function(){return this.player?this.player.getPlaybackRate():0},setPlaybackRate:function(f){var p;(p=this.player)===null||p===void 0||p.setPlaybackRate(f)},getAvailablePlaybackRates:function(){return this.player?this.player.getAvailablePlaybackRates():[]},setLoop:function(f){var p;(p=this.player)===null||p===void 0||p.setLoop(f)},setShuffle:function(f){var p;(p=this.player)===null||p===void 0||p.setShuffle(f)},getVideoLoadedFraction:function(){return this.player?this.player.getVideoLoadedFraction():0},getPlayerState:function(){return this.player?this.player.getPlayerState():l.UNSTARTED},getCurrentTime:function(){return this.player?this.player.getCurrentTime():0},getPlaybackQuality:function(){return this.player?this.player.getPlaybackQuality():"default"},setPlaybackQuality:function(f){var p;(p=this.player)===null||p===void 0||p.setPlaybackQuality(f)},getAvailableQualityLevels:function(){return this.player?this.player.getAvailableQualityLevels():[]},getDuration:function(){return this.player?this.player.getDuration():0},getVideoUrl:function(){return this.player?this.player.getVideoUrl():""},getVideoEmbedCode:function(){return this.player?this.player.getVideoEmbedCode():""},getPlaylist:function(){return this.player?this.player.getPlaylist():[]},getPlaylistIndex:function(){return this.player?this.player.getPlaylistIndex():0}},watch:{width:function(){var f;(f=this.player)===null||f===void 0||f.setSize(+this.width,+this.height)},height:function(){var f;(f=this.player)===null||f===void 0||f.setSize(+this.width,+this.height)},src:function(){this.initiated&&this.player&&this.player.loadVideoById(this.id)}},beforeUnmount:function(){var f;(f=this.player)===null||f===void 0||f.destroy()}}),y=h;y.render=i;var x=y;c.default=x},fc6a:function(o,c,t){var e=t("44ad"),r=t("1d80");o.exports=function(n){return e(r(n))}},fdbc:function(o,c){o.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},fdbf:function(o,c,t){var e=t("4930");o.exports=e&&!Symbol.sham&&typeof Symbol.iterator=="symbol"},fea9:function(o,c,t){var e=t("da84");o.exports=e.Promise}}).default})})(Pt);var Yt=Pt.exports;const Ht=Dt(Yt),zt=Ft({__name:"YouTubeEmbed",props:{src:{}},setup(ct){return(lt,ot)=>(Bt(),$t(Gt(Ht),{src:lt.src,class:"youtube"},null,8,["src"]))}}),Jt=Ut(zt,[["__scopeId","data-v-fcab5c11"]]);export{Jt as Y};
