import{S as c,i as f,s as m,j as u,k as p,e as _,m as d,n as v,c as h,a as $,d as i,b as j,o as y,f as l,E as b,x as k,u as x,v as w}from"../../chunks/vendor-a50b8347.js";import Q from"./parseQuotes.svelte-270bf57c.js";import"../../chunks/parseQuotes.svelte_svelte_type_style_lang-bfedaa52.js";function g(o){let t,a,s,n;return t=new Q({}),{c(){u(t.$$.fragment),a=p(),s=_("div"),this.h()},l(e){d(t.$$.fragment,e),a=v(e),s=h(e,"DIV",{class:!0});var r=$(s);r.forEach(i),this.h()},h(){j(s,"class","todos")},m(e,r){y(t,e,r),l(e,a,r),l(e,s,r),n=!0},p:b,i(e){n||(k(t.$$.fragment,e),n=!0)},o(e){x(t.$$.fragment,e),n=!1},d(e){w(t,e),e&&i(a),e&&i(s)}}}const D=async({fetch:o})=>{const t=await o("/todos.json");if(t.ok){const{file:a}=await t.json();return{props:{file:a}}}};function q(o,t,a){let{file:s}=t;return o.$$set=n=>{"file"in n&&a(0,s=n.file)},[s]}class I extends c{constructor(t){super();f(this,t,q,g,m,{file:0})}}export{I as default,D as load};