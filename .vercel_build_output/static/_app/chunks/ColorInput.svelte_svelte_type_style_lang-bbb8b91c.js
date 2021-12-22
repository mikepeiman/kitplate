var F=Object.defineProperty,H=Object.defineProperties;var Q=Object.getOwnPropertyDescriptors;var C=Object.getOwnPropertySymbols;var X=Object.prototype.hasOwnProperty,Y=Object.prototype.propertyIsEnumerable;var T=(a,e,t)=>e in a?F(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t,D=(a,e)=>{for(var t in e||(e={}))X.call(e,t)&&T(a,t,e[t]);if(C)for(var t of C(e))Y.call(e,t)&&T(a,t,e[t]);return a},j=(a,e)=>H(a,Q(e));import{S as N,i as P,s as V,e as m,c as g,a as k,d,b as v,f as b,E as A,A as z,a8 as B,Q as G,t as K,g as R,D as y,h as U,W as Z,X as x,Y as $,x as w,u as E,k as L,j as ee,n as O,m as te,F as W,o as ae,r as se,w as ne,v as le,N as ie,V as ce}from"./vendor-8f8468c1.js";import{p as re}from"./stores-647d0335.js";function fe(a){let e,t;return{c(){e=m("canvas"),this.h()},l(l){e=g(l,"CANVAS",{style:!0,class:!0}),k(e).forEach(d),this.h()},h(){v(e,"style",t=`width: ${a[0]}px`),v(e,"class","svelte-ffp5du")},m(l,s){b(l,e,s),a[7](e)},p(l,[s]){s&1&&t!==(t=`width: ${l[0]}px`)&&v(e,"style",t)},i:A,o:A,d(l){l&&d(e),a[7](null)}}}function oe(a,e,t){let l,s=500,{settings:n={dimensions:void 0}}=e,{data:r={}}=e,i={},{sketch:c=()=>{}}=e,o,f;z(async()=>{t(5,i=await j(D({},n),{canvas:l,parent:l.parentElement,data:r})),o=await B.exports.canvasSketch(c,i),t(6,f=await o)});function h(_){f&&(Object.assign(f.props.data,_),f.render())}function I(_){G[_?"unshift":"push"](()=>{l=_,t(1,l)})}return a.$$set=_=>{"settings"in _&&t(2,n=_.settings),"data"in _&&t(3,r=_.data),"sketch"in _&&t(4,c=_.sketch)},a.$$.update=()=>{var _,u;a.$$.dirty&33&&((_=i.parent)==null?void 0:_.offsetWidth)>0&&(t(0,s=(u=i.parent)==null?void 0:u.offsetWidth),console.log("\u{1F680} ~ file: CanvasSketch.svelte ~ line 39 ~ width",s)),a.$$.dirty&68&&f&&f.update(n),a.$$.dirty&8&&h(r)},[s,l,n,r,c,i,f,I]}class ue extends N{constructor(e){super();P(this,e,oe,fe,V,{settings:2,data:3,sketch:4})}}function J(a){let e,t,l=a[1].TITLE+"",s;return{c(){e=m("div"),t=m("h1"),s=K(l),this.h()},l(n){e=g(n,"DIV",{class:!0});var r=k(e);t=g(r,"H1",{class:!0});var i=k(t);s=R(i,l),i.forEach(d),r.forEach(d),this.h()},h(){v(t,"class","text-2xl text-center text-sky-200 mt-6 w-full self-center"),v(e,"class","title flex items-center justify-center flex w-full self-center svelte-12buka7")},m(n,r){b(n,e,r),y(e,t),y(t,s)},p(n,r){r&2&&l!==(l=n[1].TITLE+"")&&U(s,l)},d(n){n&&d(e)}}}function M(a){let e,t;const l=a[7].default,s=ce(l,a,a[6],null);return{c(){e=m("div"),s&&s.c(),this.h()},l(n){e=g(n,"DIV",{class:!0});var r=k(e);s&&s.l(r),r.forEach(d),this.h()},h(){v(e,"class","panel svelte-12buka7")},m(n,r){b(n,e,r),s&&s.m(e,null),t=!0},p(n,r){s&&s.p&&(!t||r&64)&&Z(s,l,n,n[6],t?$(l,n[6],r,null):x(n[6]),null)},i(n){t||(w(s,n),t=!0)},o(n){E(s,n),t=!1},d(n){n&&d(e),s&&s.d(n)}}}function _e(a){let e,t,l,s,n,r,i=a[4]==="/creative"&&J(a);s=new ue({props:{data:a[1],settings:a[0],sketch:a[2]}});let c=!a[3]&&M(a);return{c(){e=m("main"),i&&i.c(),t=L(),l=m("div"),ee(s.$$.fragment),n=L(),c&&c.c(),this.h()},l(o){e=g(o,"MAIN",{class:!0});var f=k(e);i&&i.l(f),t=O(f),l=g(f,"DIV",{class:!0});var h=k(l);te(s.$$.fragment,h),h.forEach(d),n=O(f),c&&c.l(f),f.forEach(d),this.h()},h(){v(l,"class","viewport svelte-12buka7"),v(e,"class","sketch svelte-12buka7"),W(e,"preview",a[4]==="/creative")},m(o,f){b(o,e,f),i&&i.m(e,null),y(e,t),y(e,l),ae(s,l,null),y(e,n),c&&c.m(e,null),r=!0},p(o,[f]){o[4]==="/creative"?i?i.p(o,f):(i=J(o),i.c(),i.m(e,t)):i&&(i.d(1),i=null);const h={};f&2&&(h.data=o[1]),f&1&&(h.settings=o[0]),f&4&&(h.sketch=o[2]),s.$set(h),o[3]?c&&(se(),E(c,1,1,()=>{c=null}),ne()):c?(c.p(o,f),f&8&&w(c,1)):(c=M(o),c.c(),w(c,1),c.m(e,null)),f&16&&W(e,"preview",o[4]==="/creative")},i(o){r||(w(s.$$.fragment,o),w(c),r=!0)},o(o){E(s.$$.fragment,o),E(c),r=!1},d(o){o&&d(e),i&&i.d(),le(s),c&&c.d()}}}function he(a,e,t){let l,s;ie(a,re,u=>t(5,s=u));let{$$slots:n={},$$scope:r}=e,{settings:i={}}=e,{data:c={}}=e,{sketch:o=()=>{}}=e,{hidePanel:f=!1}=e,h=(()=>{try{return typeof window.localStorage!="undefined"}catch{return!1}})();_(i,c);function I(u,p){h&&u.localStorage!==!1&&window.localStorage.setItem(`${p.TITLE}`,JSON.stringify(p))}function _(u,p){if(h&&u.localStorage!==!1)try{const S=window.localStorage.getItem(`${p.TITLE}`);if(!S)return;const q=JSON.parse(S);Object.assign(p,q)}catch(S){console.warn(S)}}return a.$$set=u=>{"settings"in u&&t(0,i=u.settings),"data"in u&&t(1,c=u.data),"sketch"in u&&t(2,o=u.sketch),"hidePanel"in u&&t(3,f=u.hidePanel),"$$scope"in u&&t(6,r=u.$$scope)},a.$$.update=()=>{a.$$.dirty&32&&t(4,l=s.path),a.$$.dirty&3&&I(i,c)},[i,c,o,f,l,s,r,n]}class ge extends N{constructor(e){super();P(this,e,he,_e,V,{settings:0,data:1,sketch:2,hidePanel:3})}}export{ge as C};