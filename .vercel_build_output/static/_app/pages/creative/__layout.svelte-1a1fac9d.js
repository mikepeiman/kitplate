import{S as b,i as k,s as y,e as f,t as A,c as _,a as h,g as I,d as c,b as u,f as d,D as m,E as v,M as q,V as S,j as C,k as M,m as W,n as X,o as Y,W as E,X as N,Y as V,x as p,u as $,v as z}from"../../chunks/vendor-4c0561e8.js";/* empty css                                                     */function j(r,t,n){const s=r.slice();return s[1]=t[n],s[3]=n,s}function D(r){let t,n=r[1].name+"",s,e;return{c(){t=f("a"),s=A(n),this.h()},l(a){t=_(a,"A",{href:!0,class:!0});var o=h(t);s=I(o,n),o.forEach(c),this.h()},h(){u(t,"href",e=r[1].url),u(t,"class","bg-indigo-600 hover:bg-indigo-500 svelte-95shmb")},m(a,o){d(a,t,o),m(t,s)},p:v,d(a){a&&c(t)}}}function B(r){let t,n,s=r[0],e=[];for(let a=0;a<s.length;a+=1)e[a]=D(j(r,s,a));return{c(){t=f("div"),n=f("nav");for(let a=0;a<e.length;a+=1)e[a].c();this.h()},l(a){t=_(a,"DIV",{class:!0,id:!0});var o=h(t);n=_(o,"NAV",{class:!0});var l=h(n);for(let i=0;i<e.length;i+=1)e[i].l(l);l.forEach(c),o.forEach(c),this.h()},h(){u(n,"class","svelte-95shmb"),u(t,"class","sidebar bg-gray-700 pt-5 svelte-95shmb"),u(t,"id","sideNav")},m(a,o){d(a,t,o),m(t,n);for(let l=0;l<e.length;l+=1)e[l].m(n,null)},p(a,[o]){if(o&1){s=a[0];let l;for(l=0;l<s.length;l+=1){const i=j(a,s,l);e[l]?e[l].p(i,o):(e[l]=D(i),e[l].c(),e[l].m(n,null))}for(;l<e.length;l+=1)e[l].d(1);e.length=s.length}},i:v,o:v,d(a){a&&c(t),q(e,a)}}}let F=10;function G(r){let t=[];for(let n=1;n<F+1;n++){let s,e;n<10?e=`Sketch 0${n}`:e=`Sketch ${n}`,n<10?s=`/creative/sketch0${n}`:s=`/creative/sketch${n}`;let a={name:e,url:s};t.push(a)}return[t]}class H extends b{constructor(t){super();k(this,t,G,B,y,{})}}const J=r=>({}),w=r=>({class:"sidebar svelte-13450rp"});function K(r){let t;const n=r[0].default,s=S(n,r,r[1],w);return{c(){s&&s.c()},l(e){s&&s.l(e)},m(e,a){s&&s.m(e,a),t=!0},p(e,a){s&&s.p&&(!t||a&2)&&E(s,n,e,e[1],t?V(n,e[1],a,J):N(e[1]),w)},i(e){t||(p(s,e),t=!0)},o(e){$(s,e),t=!1},d(e){s&&s.d(e)}}}function L(r){let t,n,s,e;n=new H({props:{class:"sidebar",$$slots:{default:[K]},$$scope:{ctx:r}}});const a=r[0].default,o=S(a,r,r[1],null);return{c(){t=f("div"),C(n.$$.fragment),s=M(),o&&o.c(),this.h()},l(l){t=_(l,"DIV",{id:!0,class:!0});var i=h(t);W(n.$$.fragment,i),s=X(i),o&&o.l(i),i.forEach(c),this.h()},h(){u(t,"id","creative-layout"),u(t,"class","grid w-auto h-full")},m(l,i){d(l,t,i),Y(n,t,null),m(t,s),o&&o.m(t,null),e=!0},p(l,[i]){const g={};i&2&&(g.$$scope={dirty:i,ctx:l}),n.$set(g),o&&o.p&&(!e||i&2)&&E(o,a,l,l[1],e?V(a,l[1],i,null):N(l[1]),null)},i(l){e||(p(n.$$.fragment,l),p(o,l),e=!0)},o(l){$(n.$$.fragment,l),$(o,l),e=!1},d(l){l&&c(t),z(n),o&&o.d(l)}}}function O(r,t,n){let{$$slots:s={},$$scope:e}=t;return r.$$set=a=>{"$$scope"in a&&n(1,e=a.$$scope)},[s,e]}class R extends b{constructor(t){super();k(this,t,O,L,y,{})}}export{R as default};
