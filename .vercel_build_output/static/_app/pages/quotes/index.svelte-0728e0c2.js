import{S as i,i as u,s as c,e as l,j as f,c as m,a as _,m as d,d as r,b as p,f as h,o as v,E as q,x as $,u as j,v as g}from"../../chunks/vendor-c9952951.js";import y from"./parseQuotes.svelte-1683084d.js";import"../../chunks/parseQuotes.svelte_svelte_type_style_lang-85db4e5f.js";function x(a){let t,s,n;return s=new y({}),{c(){t=l("div"),f(s.$$.fragment),this.h()},l(e){t=m(e,"DIV",{class:!0});var o=_(t);d(s.$$.fragment,o),o.forEach(r),this.h()},h(){p(t,"class","flex w-full h-full justify-start")},m(e,o){h(e,t,o),v(s,t,null),n=!0},p:q,i(e){n||($(s.$$.fragment,e),n=!0)},o(e){j(s.$$.fragment,e),n=!1},d(e){e&&r(t),g(s)}}}const E=async({fetch:a})=>{const t=await a("/quotes.json");if(t.ok){const{quotes:s}=await t.json();return{props:{quotes:s}}}};function w(a,t,s){let{quotes:n}=t;return a.$$set=e=>{"quotes"in e&&s(0,n=e.quotes)},[n]}class S extends i{constructor(t){super();u(this,t,w,x,c,{quotes:0})}}export{S as default,E as load};
