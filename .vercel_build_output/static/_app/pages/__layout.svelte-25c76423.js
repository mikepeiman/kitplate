import{S as H,i as N,s as T,e as v,t as j,c as g,a as b,g as D,d,b as k,f as y,D as w,E as M,k as A,n as I,x as m,F as P,G as pe,H as x,I as q,J as ee,r as B,w as F,K as te,L as le,u as $,M as ne,l as O,N as K,O as _e,P as he,Q as se,R as re,j as Q,m as S,T as z,o as R,U as oe,v as G,V as L,W as U,X as W,Y as X}from"../chunks/vendor-51fd7836.js";/* empty css                                                  */import{p as Y}from"../chunks/stores-3b6d2ba6.js";function de(i){let e,n,t,l,s,r,o;return{c(){e=v("div"),n=v("nav"),t=v("p"),l=j("Made with "),s=v("span"),r=j("\u2665"),o=j(" by Mike Peiman."),this.h()},l(a){e=g(a,"DIV",{class:!0});var f=b(e);n=g(f,"NAV",{class:!0});var u=b(n);t=g(u,"P",{});var c=b(t);l=D(c,"Made with "),s=g(c,"SPAN",{class:!0});var p=b(s);r=D(p,"\u2665"),p.forEach(d),o=D(c," by Mike Peiman."),c.forEach(d),u.forEach(d),f.forEach(d),this.h()},h(){k(s,"class","text-rose-500 text-lg px-1"),k(n,"class","social w-full flex items-center justify-center xl:pl-24 svelte-j39445"),k(e,"class","footer grid bg-slate-900 flex align-middle items-center justify-between")},m(a,f){y(a,e,f),w(e,n),w(n,t),w(t,l),w(t,s),w(s,r),w(t,o)},p:M,i:M,o:M,d(a){a&&d(e)}}}function me(i){return[]}class ve extends H{constructor(e){super();N(this,e,me,de,T,{})}}function ie(i,e,n){const t=i.slice();return t[8]=e[n],t[10]=n,t}function ae(i){let e,n,t,l,s,r,o=i[2],a=[];for(let u=0;u<o.length;u+=1)a[u]=ue(ie(i,o,u));const f=u=>$(a[u],1,1,()=>{a[u]=null});return{c(){e=v("div"),n=v("nav");for(let u=0;u<a.length;u+=1)a[u].c();t=A(),l=v("hr"),this.h()},l(u){e=g(u,"DIV",{class:!0});var c=b(e);n=g(c,"NAV",{class:!0});var p=b(n);for(let _=0;_<a.length;_+=1)a[_].l(p);p.forEach(d),t=I(c),l=g(c,"HR",{}),c.forEach(d),this.h()},h(){k(n,"class","open-hamburger-nav absolute w-auto top-0 left-0 bg-black pb-6 flex flex-col justify-center items-center transition svelte-bipdyn"),k(e,"class","open-hamburger-header header absolute top-0 z-50 w-full h-full bg-gradient-to-b from-black via-black border-b-2 border-sky-900 flex items-center transition svelte-bipdyn")},m(u,c){y(u,e,c),w(e,n);for(let p=0;p<a.length;p+=1)a[p].m(n,null);w(e,t),w(e,l),r=!0},p(u,c){if(i=u,c&14){o=i[2];let p;for(p=0;p<o.length;p+=1){const _=ie(i,o,p);a[p]?(a[p].p(_,c),m(a[p],1)):(a[p]=ue(_),a[p].c(),m(a[p],1),a[p].m(n,null))}for(B(),p=o.length;p<a.length;p+=1)f(p);F()}},i(u){if(!r){for(let c=0;c<o.length;c+=1)m(a[c]);x(()=>{s||(s=q(l,le,{duration:750,easing:te,opacity:1},!0)),s.run(1)}),r=!0}},o(u){a=a.filter(Boolean);for(let c=0;c<a.length;c+=1)$(a[c]);s||(s=q(l,le,{duration:750,easing:te,opacity:1},!1)),s.run(0),r=!1},d(u){u&&d(e),ne(a,u),u&&s&&s.end()}}}function ue(i){let e,n=i[8].title+"",t,l,s,r,o,a;return{c(){e=v("a"),t=j(n),this.h()},l(f){e=g(f,"A",{href:!0,class:!0});var u=b(e);t=D(u,n),u.forEach(d),this.h()},h(){k(e,"href",l=i[8].url),k(e,"class","nav-link tracking-widest w-full px-6 py-4 hover:text-cyan-500 hover:bg-gray-900 svelte-bipdyn"),P(e,"active",i[8].url===i[1])},m(f,u){y(f,e,u),w(e,t),r=!0,o||(a=pe(e,"click",i[5]),o=!0)},p(f,u){i=f,u&6&&P(e,"active",i[8].url===i[1])},i(f){r||(x(()=>{s||(s=q(e,ee,{y:-15,delay:Z*i[10]},!0)),s.run(1)}),r=!0)},o(f){s||(s=q(e,ee,{y:-15,delay:Z*i[10]},!1)),s.run(0),r=!1},d(f){f&&d(e),f&&s&&s.end(),o=!1,a()}}}function ge(i){let e,n,t=i[0]&&ae(i);return{c(){t&&t.c(),e=O()},l(l){t&&t.l(l),e=O()},m(l,s){t&&t.m(l,s),y(l,e,s),n=!0},p(l,[s]){l[0]?t?(t.p(l,s),s&1&&m(t,1)):(t=ae(l),t.c(),m(t,1),t.m(e.parentNode,e)):t&&(B(),$(t,1,1,()=>{t=null}),F())},i(l){n||(m(t),n=!0)},o(l){$(t),n=!1},d(l){t&&t.d(l),l&&d(e)}}}let Z=50;function be(i,e,n){let t,l;K(i,Y,c=>n(4,l=c));const s=_e();let{open:r}=e,o=[{title:"Home",url:"/"},{title:"About",url:"/about"},{title:"Blog",url:"/posts"},{title:"Posts endpoint",url:"/posts.json"},{title:"Todos",url:"/todos"},{title:"Quotes",url:"/quotes"},{title:"Creative",url:"/creative"},{title:"Mike",url:"/mikepeiman"}],a=o.length*Z;function f(c){n(0,r=!1);let p=c.target.href;console.log("\u{1F680} ~ file: HamburgerMenu.svelte ~ line 26 ~ dispatchMessage ~ target ",p),s("message",{open:!1,duration:a}),console.log("\u{1F680} ~ file: HamburgerMenu.svelte ~ line 29 ~ dispatching ~ duration",a)}const u=c=>f(c);return i.$$set=c=>{"open"in c&&n(0,r=c.open)},i.$$.update=()=>{i.$$.dirty&16&&n(1,t=l.path)},[r,t,o,f,l,u]}class ke extends H{constructor(e){super();N(this,e,be,ge,T,{open:0})}}function ce(i,e,n){const t=i.slice();return t[10]=e[n],t}function $e(i){let e,n=i[2],t=[];for(let l=0;l<n.length;l+=1)t[l]=fe(ce(i,n,l));return{c(){e=v("nav");for(let l=0;l<t.length;l+=1)t[l].c();this.h()},l(l){e=g(l,"NAV",{class:!0});var s=b(e);for(let r=0;r<t.length;r+=1)t[r].l(s);s.forEach(d),this.h()},h(){k(e,"class","w-auto hidden md:flex h-full flex-row justify-center items-center svelte-y7wtsx")},m(l,s){y(l,e,s);for(let r=0;r<t.length;r+=1)t[r].m(e,null)},p(l,s){if(s&6){n=l[2];let r;for(r=0;r<n.length;r+=1){const o=ce(l,n,r);t[r]?t[r].p(o,s):(t[r]=fe(o),t[r].c(),t[r].m(e,null))}for(;r<t.length;r+=1)t[r].d(1);t.length=n.length}},i:M,o:M,d(l){l&&d(e),ne(t,l)}}}function ye(i){let e,n,t,l;function s(o){i[7](o)}let r={};return i[0]!==void 0&&(r.open=i[0]),e=new ke({props:r}),se.push(()=>re(e,"open",s)),e.$on("message",i[8]),{c(){n=v("div"),Q(e.$$.fragment),this.h()},l(o){n=g(o,"DIV",{style:!0});var a=b(n);S(e.$$.fragment,a),this.h()},h(){z(n,"display","contents"),z(n,"--color","white")},m(o,a){y(o,n,a),R(e,n,null),l=!0},p(o,a){const f={};!t&&a&1&&(t=!0,f.open=o[0],oe(()=>t=!1)),e.$set(f)},i(o){l||(m(e.$$.fragment,o),l=!0)},o(o){$(e.$$.fragment,o),l=!1},d(o){o&&d(n),G(e,o)}}}function fe(i){let e,n=i[10].title+"",t,l;return{c(){e=v("a"),t=j(n),this.h()},l(s){e=g(s,"A",{href:!0,class:!0});var r=b(e);t=D(r,n),r.forEach(d),this.h()},h(){k(e,"href",l=i[10].url),k(e,"class","nav-link svelte-y7wtsx"),P(e,"active",i[10].url===i[1])},m(s,r){y(s,e,r),w(e,t)},p(s,r){r&6&&P(e,"active",s[10].url===s[1])},d(s){s&&d(e)}}}function we(i){let e,n,t,l,s,r,o,a,f;function u(h){i[6](h)}let c={};i[0]!==void 0&&(c.open=i[0]),n=new he({props:c}),se.push(()=>re(n,"open",u)),n.$on("click",i[3]);const p=[ye,$e],_=[];function V(h,E){return h[0]?0:1}return r=V(i),o=_[r]=p[r](i),{c(){e=v("div"),t=v("div"),Q(n.$$.fragment),s=A(),o.c(),a=O(),this.h()},l(h){e=g(h,"DIV",{class:!0});var E=b(e);t=g(E,"DIV",{style:!0});var C=b(t);S(n.$$.fragment,C),E.forEach(d),s=I(h),o.l(h),a=O(),this.h()},h(){z(t,"display","contents"),z(t,"--color","white"),k(e,"class","closed-hamburger-wrapper md:hidden z-99 absolute top-0 left-0 svelte-y7wtsx")},m(h,E){y(h,e,E),w(e,t),R(n,t,null),y(h,s,E),_[r].m(h,E),y(h,a,E),f=!0},p(h,[E]){const C={};!l&&E&1&&(l=!0,C.open=h[0],oe(()=>l=!1)),n.$set(C);let J=r;r=V(h),r===J?_[r].p(h,E):(B(),$(_[J],1,1,()=>{_[J]=null}),F(),o=_[r],o?o.p(h,E):(o=_[r]=p[r](h),o.c()),m(o,1),o.m(a.parentNode,a))},i(h){f||(m(n.$$.fragment,h),m(o),f=!0)},o(h){$(n.$$.fragment,h),$(o),f=!1},d(h){h&&d(e),G(n),h&&d(s),_[r].d(h),h&&d(a)}}}function Ee(i,e,n){let t,l;K(i,Y,_=>n(5,l=_));let s=!1,r=250,o=[{title:"Home",url:"/"},{title:"About",url:"/about"},{title:"Color",url:"/color"},{title:"Blog",url:"/posts"},{title:"Posts endpoint",url:"/posts.json"},{title:"Todos",url:"/todos"},{title:"Quotes",url:"/quotes"},{title:"Creative",url:"/creative"},{title:"Mike",url:"/mikepeiman"}];function a(){console.log("\u{1F680} ~ file: nav.svelte ~ line 40 ~ respondToCloseClick ~ open",s),console.log("\u{1F680} ~ file: nav.svelte ~ line 41 ~ respondToCloseClick ~ open",s)}function f(_){console.log("\u{1F680} ~ file: nav.svelte ~ line 36 ~ respondToDispatch ~ respondToDispatch",_.detail),n(0,s=_.detail.open),r=_.detail.duration;let V=document.getElementsByClassName("open-hamburger-header")[0];setTimeout(()=>{V.setAttribute("visibility","hidden")},r)}function u(_){s=_,n(0,s)}function c(_){s=_,n(0,s)}const p=_=>f(_);return i.$$.update=()=>{i.$$.dirty&1&&console.log("\u{1F680} ~ file: nav.svelte ~ line 22 ~ open",s),i.$$.dirty&32&&n(1,t=l.path)},[s,t,o,a,f,l,u,c,p]}class je extends H{constructor(e){super();N(this,e,Ee,we,T,{})}}function De(i){let e,n;const t=i[2].default,l=L(t,i,i[3],null);return{c(){e=v("div"),l&&l.c(),this.h()},l(s){e=g(s,"DIV",{class:!0});var r=b(e);l&&l.l(r),r.forEach(d),this.h()},h(){k(e,"class","main flex flex-col items-center -mt-12 jutify-center svelte-179r1ul")},m(s,r){y(s,e,r),l&&l.m(e,null),n=!0},p(s,r){l&&l.p&&(!n||r&8)&&U(l,t,s,s[3],n?X(t,s[3],r,null):W(s[3]),null)},i(s){n||(m(l,s),n=!0)},o(s){$(l,s),n=!1},d(s){s&&d(e),l&&l.d(s)}}}function Me(i){let e,n,t,l;e=new je({props:{$$slots:{default:[Ve]},$$scope:{ctx:i}}});const s=i[2].default,r=L(s,i,i[3],null);return{c(){Q(e.$$.fragment),n=A(),t=v("div"),r&&r.c(),this.h()},l(o){S(e.$$.fragment,o),n=I(o),t=g(o,"DIV",{class:!0});var a=b(t);r&&r.l(a),a.forEach(d),this.h()},h(){k(t,"class","main flex flex-col items-center jutify-center svelte-179r1ul")},m(o,a){R(e,o,a),y(o,n,a),y(o,t,a),r&&r.m(t,null),l=!0},p(o,a){const f={};a&8&&(f.$$scope={dirty:a,ctx:o}),e.$set(f),r&&r.p&&(!l||a&8)&&U(r,s,o,o[3],l?X(s,o[3],a,null):W(o[3]),null)},i(o){l||(m(e.$$.fragment,o),m(r,o),l=!0)},o(o){$(e.$$.fragment,o),$(r,o),l=!1},d(o){G(e,o),o&&d(n),o&&d(t),r&&r.d(o)}}}function Ve(i){let e;const n=i[2].default,t=L(n,i,i[3],null);return{c(){t&&t.c()},l(l){t&&t.l(l)},m(l,s){t&&t.m(l,s),e=!0},p(l,s){t&&t.p&&(!e||s&8)&&U(t,n,l,l[3],e?X(n,l[3],s,null):W(l[3]),null)},i(l){e||(m(t,l),e=!0)},o(l){$(t,l),e=!1},d(l){t&&t.d(l)}}}function Ce(i){let e,n,t,l,s,r;const o=[Me,De],a=[];function f(u,c){return u[0]!="/"?0:1}return n=f(i),t=a[n]=o[n](i),s=new ve({}),{c(){e=v("div"),t.c(),l=A(),Q(s.$$.fragment),this.h()},l(u){e=g(u,"DIV",{id:!0,class:!0});var c=b(e);t.l(c),l=I(c),S(s.$$.fragment,c),c.forEach(d),this.h()},h(){k(e,"id","app-layout"),k(e,"class","grid w-auto min-h-screen max-h-full bg-black transition")},m(u,c){y(u,e,c),a[n].m(e,null),w(e,l),R(s,e,null),r=!0},p(u,[c]){let p=n;n=f(u),n===p?a[n].p(u,c):(B(),$(a[p],1,1,()=>{a[p]=null}),F(),t=a[n],t?t.p(u,c):(t=a[n]=o[n](u),t.c()),m(t,1),t.m(e,l))},i(u){r||(m(t),m(s.$$.fragment,u),r=!0)},o(u){$(t),$(s.$$.fragment,u),r=!1},d(u){u&&d(e),a[n].d(),G(s)}}}function He(i,e,n){let t,l;K(i,Y,o=>n(1,l=o));let{$$slots:s={},$$scope:r}=e;return i.$$set=o=>{"$$scope"in o&&n(3,r=o.$$scope)},i.$$.update=()=>{i.$$.dirty&2&&n(0,t=l.path),i.$$.dirty&1&&console.log("\u{1F680} ~ file: index.svelte ~ line 24 ~ path",t)},[t,l,s,r]}class Ie extends H{constructor(e){super();N(this,e,He,Ce,T,{})}}export{Ie as default};