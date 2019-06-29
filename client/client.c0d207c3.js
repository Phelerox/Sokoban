import{s as e,n as t,S as s,i as r,e as n,a,t as l,c as o,b as c,d as i,f as u,g as p,h as f,j as m,k as h,m as d,l as v,o as g,p as $,q as E,r as y,u as b,v as S,w as _,x as w,y as R,z as P,A as x}from"./chunk.631cd46d.js";function L(s,r=t){let n;const a=[];function l(t){if(e(s,t)){if(s=t,!n)return;a.forEach(e=>e[1]()),a.forEach(e=>e[0](s))}}return{set:l,update:function(e){l(e(s))},subscribe:function(e,o=t){const c=[e,o];return a.push(c),1===a.length&&(n=r(l)||t),e(s),()=>{const e=a.indexOf(c);-1!==e&&a.splice(e,1),0===a.length&&(n(),n=null)}}}}const A={},j=()=>({});function C(e){var s,r,h,d,v,g,$,E,y,b,S,_,w,R,P,x,L,A,j,C,U,q;return{c(){s=n("nav"),r=n("ul"),h=n("div"),d=a(),v=n("li"),g=n("a"),$=l("sokoban"),y=a(),b=n("li"),S=n("a"),_=l("help"),R=a(),P=n("li"),x=n("a"),L=l("levels"),j=a(),C=n("div"),U=n("div"),this.h()},l(e){s=o(e,"NAV",{class:!0},!1);var t=c(s);r=o(t,"UL",{class:!0},!1);var n=c(r);h=o(n,"DIV",{class:!0},!1),c(h).forEach(i),d=u(n,"\n\t\t"),v=o(n,"LI",{class:!0},!1);var a=c(v);g=o(a,"A",{href:!0,class:!0},!1);var l=c(g);$=u(l,"sokoban"),l.forEach(i),a.forEach(i),y=u(n,"\n\t\t"),b=o(n,"LI",{class:!0},!1);var p=c(b);S=o(p,"A",{href:!0,class:!0},!1);var f=c(S);_=u(f,"help"),f.forEach(i),p.forEach(i),R=u(n,"\n\t\t\n\t\t"),P=o(n,"LI",{class:!0},!1);var m=c(P);x=o(m,"A",{rel:!0,href:!0,class:!0},!1);var E=c(x);L=u(E,"levels"),E.forEach(i),m.forEach(i),j=u(n,"\n\t\t"),C=o(n,"DIV",{class:!0},!1);var w=c(C);U=o(w,"DIV",{},!1),c(U).forEach(i),w.forEach(i),n.forEach(i),t.forEach(i),this.h()},h(){p(h,"class","hidden_left svelte-1sv0m8h"),p(g,"href","."),p(g,"class","svelte-1sv0m8h"),p(v,"class",E=(void 0===e.segment?"selected":"help"===e.segment?"before-selected":"")+" svelte-1sv0m8h"),p(S,"href","help"),p(S,"class","svelte-1sv0m8h"),p(b,"class",w=("help"===e.segment?"selected":void 0===e.segment?"after-selected":"levels"===e.segment?"before-selected":"")+" svelte-1sv0m8h"),p(x,"rel","prefetch"),p(x,"href","levels"),p(x,"class","svelte-1sv0m8h"),p(P,"class",A=("levels"===e.segment?"selected":"help"===e.segment?"after-selected":"")+" svelte-1sv0m8h"),p(C,"class","hidden_right svelte-1sv0m8h"),p(r,"class",q=("levels"===e.segment?"pseudo-right":void 0===e.segment?"pseudo-left":"")+" svelte-1sv0m8h"),p(s,"class","svelte-1sv0m8h")},m(e,t){f(e,s,t),m(s,r),m(r,h),m(r,d),m(r,v),m(v,g),m(g,$),m(r,y),m(r,b),m(b,S),m(S,_),m(r,R),m(r,P),m(P,x),m(x,L),m(r,j),m(r,C),m(C,U)},p(e,t){e.segment&&E!==(E=(void 0===t.segment?"selected":"help"===t.segment?"before-selected":"")+" svelte-1sv0m8h")&&p(v,"class",E),e.segment&&w!==(w=("help"===t.segment?"selected":void 0===t.segment?"after-selected":"levels"===t.segment?"before-selected":"")+" svelte-1sv0m8h")&&p(b,"class",w),e.segment&&A!==(A=("levels"===t.segment?"selected":"help"===t.segment?"after-selected":"")+" svelte-1sv0m8h")&&p(P,"class",A),e.segment&&q!==(q=("levels"===t.segment?"pseudo-right":void 0===t.segment?"pseudo-left":"")+" svelte-1sv0m8h")&&p(r,"class",q)},i:t,o:t,d(e){e&&i(s)}}}function U(e,t,s){let{segment:r}=t;return e.$set=e=>{"segment"in e&&s("segment",r=e.segment)},{segment:r}}class q extends s{constructor(t){super(),r(this,t,U,C,e,["segment"])}}function I(e){var t,s,r,l=new q({props:{segment:e.segment}});const m=e.$$slots.default,b=h(m,e,null);return{c(){l.$$.fragment.c(),t=a(),s=n("main"),b&&b.c(),this.h()},l(e){l.$$.fragment.l(e),t=u(e,"\n\n"),s=o(e,"MAIN",{class:!0},!1);var r=c(s);b&&b.l(r),r.forEach(i),this.h()},h(){p(s,"class","svelte-4wjnwu")},m(e,n){d(l,e,n),f(e,t,n),f(e,s,n),b&&b.m(s,null),r=!0},p(e,t){var s={};e.segment&&(s.segment=t.segment),l.$set(s),b&&b.p&&e.$$scope&&b.p(v(m,t,e,null),g(m,t,null))},i(e){r||($(l.$$.fragment,e),$(b,e),r=!0)},o(e){E(l.$$.fragment,e),E(b,e),r=!1},d(e){y(l,e),e&&(i(t),i(s)),b&&b.d(e)}}}function N(e,t,s){let{segment:r}=t,{$$slots:n={},$$scope:a}=t;return e.$set=e=>{"segment"in e&&s("segment",r=e.segment),"$$scope"in e&&s("$$scope",a=e.$$scope)},{segment:r,$$slots:n,$$scope:a}}class O extends s{constructor(t){super(),r(this,t,N,I,e,["segment"])}}function k(e){var t,s,r=e.error.stack;return{c(){t=n("pre"),s=l(r)},l(e){t=o(e,"PRE",{},!1);var n=c(t);s=u(n,r),n.forEach(i)},m(e,r){f(e,t,r),m(t,s)},p(e,t){e.error&&r!==(r=t.error.stack)&&b(s,r)},d(e){e&&i(t)}}}function D(e){var s,r,h,d,v,g,$,E,y,_=e.error.message;document.title=s=e.status;var w=e.dev&&e.error.stack&&k(e);return{c(){r=a(),h=n("h1"),d=l(e.status),v=a(),g=n("p"),$=l(_),E=a(),w&&w.c(),y=S(),this.h()},l(t){r=u(t,"\n\n"),h=o(t,"H1",{class:!0},!1);var s=c(h);d=u(s,e.status),s.forEach(i),v=u(t,"\n\n"),g=o(t,"P",{class:!0},!1);var n=c(g);$=u(n,_),n.forEach(i),E=u(t,"\n\n"),w&&w.l(t),y=S(),this.h()},h(){p(h,"class","svelte-8od9u6"),p(g,"class","svelte-8od9u6")},m(e,t){f(e,r,t),f(e,h,t),m(h,d),f(e,v,t),f(e,g,t),m(g,$),f(e,E,t),w&&w.m(e,t),f(e,y,t)},p(e,t){e.status&&s!==(s=t.status)&&(document.title=s),e.status&&b(d,t.status),e.error&&_!==(_=t.error.message)&&b($,_),t.dev&&t.error.stack?w?w.p(e,t):((w=k(t)).c(),w.m(y.parentNode,y)):w&&(w.d(1),w=null)},i:t,o:t,d(e){e&&(i(r),i(h),i(v),i(g),i(E)),w&&w.d(e),e&&i(y)}}}function V(e,t,s){let{status:r,error:n}=t;return e.$set=e=>{"status"in e&&s("status",r=e.status),"error"in e&&s("error",n=e.error)},{status:r,error:n,dev:!1}}class H extends s{constructor(t){super(),r(this,t,V,D,e,["status","error"])}}function J(e){var t,s,r=[e.level1.props],n=e.level1.component;function a(e){let t={};for(var s=0;s<r.length;s+=1)t=_(t,r[s]);return{props:t}}if(n)var l=new n(a());return{c(){l&&l.$$.fragment.c(),t=S()},l(e){l&&l.$$.fragment.l(e),t=S()},m(e,r){l&&d(l,e,r),f(e,t,r),s=!0},p(e,s){var o=e.level1?w(r,[s.level1.props]):{};if(n!==(n=s.level1.component)){if(l){P();const e=l;E(e.$$.fragment,1,()=>{y(e)}),x()}n?((l=new n(a())).$$.fragment.c(),$(l.$$.fragment,1),d(l,t.parentNode,t)):l=null}else n&&l.$set(o)},i(e){s||(l&&$(l.$$.fragment,e),s=!0)},o(e){l&&E(l.$$.fragment,e),s=!1},d(e){e&&i(t),l&&y(l,e)}}}function B(e){var t,s=new H({props:{error:e.error,status:e.status}});return{c(){s.$$.fragment.c()},l(e){s.$$.fragment.l(e)},m(e,r){d(s,e,r),t=!0},p(e,t){var r={};e.error&&(r.error=t.error),e.status&&(r.status=t.status),s.$set(r)},i(e){t||($(s.$$.fragment,e),t=!0)},o(e){E(s.$$.fragment,e),t=!1},d(e){y(s,e)}}}function K(e){var t,s,r,n,a=[B,J],l=[];function o(e){return e.error?0:1}return t=o(e),s=l[t]=a[t](e),{c(){s.c(),r=S()},l(e){s.l(e),r=S()},m(e,s){l[t].m(e,s),f(e,r,s),n=!0},p(e,n){var c=t;(t=o(n))===c?l[t].p(e,n):(P(),E(l[c],1,()=>{l[c]=null}),x(),(s=l[t])||(s=l[t]=a[t](n)).c(),$(s,1),s.m(r.parentNode,r))},i(e){n||($(s),n=!0)},o(e){E(s),n=!1},d(e){l[t].d(e),e&&i(r)}}}function T(e){var t,s=[{segment:e.segments[0]},e.level0.props];let r={$$slots:{default:[K]},$$scope:{ctx:e}};for(var n=0;n<s.length;n+=1)r=_(r,s[n]);var a=new O({props:r});return{c(){a.$$.fragment.c()},l(e){a.$$.fragment.l(e)},m(e,s){d(a,e,s),t=!0},p(e,t){var r=e.segments||e.level0?w(s,[e.segments&&{segment:t.segments[0]},e.level0&&t.level0.props]):{};(e.$$scope||e.error||e.status||e.level1)&&(r.$$scope={changed:e,ctx:t}),a.$set(r)},i(e){t||($(a.$$.fragment,e),t=!0)},o(e){E(a.$$.fragment,e),t=!1},d(e){y(a,e)}}}function z(e,t,s){let{stores:r,error:n,status:a,segments:l,level0:o,level1:c=null}=t;return R(A,r),e.$set=e=>{"stores"in e&&s("stores",r=e.stores),"error"in e&&s("error",n=e.error),"status"in e&&s("status",a=e.status),"segments"in e&&s("segments",l=e.segments),"level0"in e&&s("level0",o=e.level0),"level1"in e&&s("level1",c=e.level1)},{stores:r,error:n,status:a,segments:l,level0:o,level1:c}}class G extends s{constructor(t){super(),r(this,t,z,T,e,["stores","error","status","segments","level0","level1"])}}const M=[/^\/levels.json$/,/^\/levels\/([^\/]+?).json$/],W=[{js:()=>import("./index.2b1d8e90.js"),css:["index.2b1d8e90.css"]},{js:()=>import("./index.d51ff8a4.js"),css:["index.d51ff8a4.css"]},{js:()=>import("./[slug].71920563.js"),css:["[slug].71920563.css"]},{js:()=>import("./help.434ccd9c.js"),css:["help.434ccd9c.css"]}],X=(e=>[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/levels\/?$/,parts:[{i:1}]},{pattern:/^\/levels\/([^\/]+?)\/?$/,parts:[null,{i:2,params:t=>({slug:e(t[1])})}]},{pattern:/^\/help\/?$/,parts:[{i:3}]}])(decodeURIComponent);const Y="undefined"!=typeof __SAPPER__&&__SAPPER__;let F,Q,Z,ee=!1,te=[],se="{}";const re={page:L({}),preloading:L(null),session:L(Y&&Y.session)};let ne,ae;re.session.subscribe(async e=>{if(ne=e,!ee)return;ae=!0;const t=me(new URL(location.href)),s=Q={},{redirect:r,props:n,branch:a}=await ge(t);s===Q&&await ve(r,a,n,t.page)});let le,oe=null;let ce,ie=1;const ue="undefined"!=typeof history?history:{pushState:(e,t,s)=>{},replaceState:(e,t,s)=>{},scrollRestoration:""},pe={};function fe(e){const t=Object.create(null);return e.length>0&&e.slice(1).split("&").forEach(e=>{let[,s,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(e.replace(/\+/g," ")));"string"==typeof t[s]&&(t[s]=[t[s]]),"object"==typeof t[s]?t[s].push(r):t[s]=r}),t}function me(e){if(e.origin!==location.origin)return null;if(!e.pathname.startsWith(Y.baseUrl))return null;let t=e.pathname.slice(Y.baseUrl.length);if(""===t&&(t="/"),!M.some(e=>e.test(t)))for(let s=0;s<X.length;s+=1){const r=X[s],n=r.pattern.exec(t);if(n){const s=fe(e.search),a=r.parts[r.parts.length-1],l=a.params?a.params(n):{},o={path:t,query:s,params:l};return{href:e.href,route:r,match:n,page:o}}}}function he(){return{x:pageXOffset,y:pageYOffset}}async function de(e,t,s,r){if(t)ce=t;else{const e=he();pe[ce]=e,t=ce=++ie,pe[ce]=s?e:{x:0,y:0}}ce=t,F&&re.preloading.set(!0);const n=oe&&oe.href===e.href?oe.promise:ge(e);oe=null;const a=Q={},{redirect:l,props:o,branch:c}=await n;if(a===Q&&(await ve(l,c,o,e.page),document.activeElement&&document.activeElement.blur(),!s)){let e=pe[t];if(r){const t=document.getElementById(r.slice(1));t&&(e={x:0,y:t.getBoundingClientRect().top})}pe[ce]=e,e&&scrollTo(e.x,e.y)}}async function ve(e,t,s,r){if(e)return function(e,t={replaceState:!1}){const s=me(new URL(e,document.baseURI));return s?(ue[t.replaceState?"replaceState":"pushState"]({id:ce},"",e),de(s,null).then(()=>{})):(location.href=e,new Promise(e=>{}))}(e.location,{replaceState:!0});if(re.page.set(r),re.preloading.set(!1),F)F.$set(s);else{s.stores={page:{subscribe:re.page.subscribe},preloading:{subscribe:re.preloading.subscribe},session:re.session},s.level0={props:await Z};const e=document.querySelector("#sapper-head-start"),t=document.querySelector("#sapper-head-end");if(e&&t){for(;e.nextSibling!==t;)Ee(e.nextSibling);Ee(e),Ee(t)}F=new G({target:le,props:s,hydrate:!0})}te=t,se=JSON.stringify(r.query),ee=!0,ae=!1}async function ge(e){const{route:t,page:s}=e,r=s.path.split("/").filter(Boolean);let n=null;const a={error:null,status:200,segments:[r[0]]},l={fetch:(e,t)=>fetch(e,t),redirect:(e,t)=>{if(n&&(n.statusCode!==e||n.location!==t))throw new Error("Conflicting redirects");n={statusCode:e,location:t}},error:(e,t)=>{a.error="string"==typeof t?new Error(t):t,a.status=e}};let o;Z||(Z=Y.preloaded[0]||j.call(l,{path:s.path,query:s.query,params:{}},ne));let c=1;try{const n=JSON.stringify(s.query),i=t.pattern.exec(s.path);let u=!1;o=await Promise.all(t.parts.map(async(t,o)=>{const p=r[o];if(function(e,t,s,r){if(r!==se)return!0;const n=te[e];return!!n&&(t!==n.segment||!(!n.match||JSON.stringify(n.match.slice(1,e+2))===JSON.stringify(s.slice(1,e+2)))||void 0)}(o,p,i,n)&&(u=!0),a.segments[c]=r[o+1],!t)return{segment:p};const f=c++;if(!ae&&!u&&te[o]&&te[o].part===t.i)return te[o];u=!1;const{default:m,preload:h}=await function(e){const t="string"==typeof e.css?[]:e.css.map($e);return t.unshift(e.js()),Promise.all(t).then(e=>e[0])}(W[t.i]);let d;return d=ee||!Y.preloaded[o+1]?h?await h.call(l,{path:s.path,query:s.query,params:t.params?t.params(e.match):{}},ne):{}:Y.preloaded[o+1],a[`level${f}`]={component:m,props:d,segment:p,match:i,part:t.i}}))}catch(e){a.error=e,a.status=500,o=[]}return{redirect:n,props:a,branch:o}}function $e(e){const t=`client/${e}`;if(!document.querySelector(`link[href="${t}"]`))return new Promise((e,s)=>{const r=document.createElement("link");r.rel="stylesheet",r.href=t,r.onload=()=>e(),r.onerror=s,document.head.appendChild(r)})}function Ee(e){e.parentNode.removeChild(e)}function ye(e){const t=me(new URL(e,document.baseURI));if(t)return oe&&e===oe.href||function(e,t){oe={href:e,promise:t}}(e,ge(t)),oe.promise}let be;function Se(e){clearTimeout(be),be=setTimeout(()=>{_e(e)},20)}function _e(e){const t=Re(e.target);t&&"prefetch"===t.rel&&ye(t.href)}function we(e){if(1!==function(e){return null===e.which?e.button:e.which}(e))return;if(e.metaKey||e.ctrlKey||e.shiftKey)return;if(e.defaultPrevented)return;const t=Re(e.target);if(!t)return;if(!t.href)return;const s="object"==typeof t.href&&"SVGAnimatedString"===t.href.constructor.name,r=String(s?t.href.baseVal:t.href);if(r===location.href)return void(location.hash||e.preventDefault());if(t.hasAttribute("download")||"external"===t.getAttribute("rel"))return;if(s?t.target.baseVal:t.target)return;const n=new URL(r);if(n.pathname===location.pathname&&n.search===location.search)return;const a=me(n);if(a){de(a,null,t.hasAttribute("sapper-noscroll"),n.hash),e.preventDefault(),ue.pushState({id:ce},"",n.href)}}function Re(e){for(;e&&"A"!==e.nodeName.toUpperCase();)e=e.parentNode;return e}function Pe(e){if(pe[ce]=he(),e.state){const t=me(new URL(location.href));t?de(t,e.state.id):location.href=location.href}else(function(e){ce=e})(ie=ie+1),ue.replaceState({id:ce},"",location.href)}var xe;xe={target:document.querySelector("#sapper")},"scrollRestoration"in ue&&(ue.scrollRestoration="manual"),function(e){le=e}(xe.target),addEventListener("click",we),addEventListener("popstate",Pe),addEventListener("touchstart",_e),addEventListener("mousemove",Se),Promise.resolve().then(()=>{const{hash:e,href:t}=location;ue.replaceState({id:ie},"",t);const s=new URL(location.href);if(Y.error)return function(e){const{pathname:t,search:s}=location,{session:r,preloaded:n,status:a,error:l}=Y;Z||(Z=n&&n[0]),ve(null,[],{error:l,status:a,session:r,level0:{props:Z},level1:{props:{status:a,error:l},component:H},segments:n},{path:t,query:fe(s),params:{}})}();const r=me(s);return r?de(r,ie,!0,e):void 0});
//# sourceMappingURL=client.c0d207c3.js.map
