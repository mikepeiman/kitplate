import{S as c,i as l,s as p,e as f,j as m,c as u,a as d,m as _,d as i,b as h,f as v,o as $,x as g,u as j,v as x}from"../../chunks/vendor-a50b8347.js";import{P}from"../../chunks/Posts-3ea7649e.js";function y(n){let s,e,o;return e=new P({props:{posts:n[0]}}),{c(){s=f("div"),m(e.$$.fragment),this.h()},l(t){s=u(t,"DIV",{class:!0});var a=d(s);_(e.$$.fragment,a),a.forEach(i),this.h()},h(){h(s,"class","posts py-12")},m(t,a){v(t,s,a),$(e,s,null),o=!0},p(t,[a]){const r={};a&1&&(r.posts=t[0]),e.$set(r)},i(t){o||(g(e.$$.fragment,t),o=!0)},o(t){j(e.$$.fragment,t),o=!1},d(t){t&&i(s),x(e)}}}const b=async({fetch:n})=>{const s=await n("/posts.json");if(console.log("\u{1F680} ~ file: posts index.svelte ~ line 4 ~ load ~ res",s),s.ok){const{posts:e}=await s.json();return{props:{posts:e}}}};function S(n,s,e){let{posts:o}=s;return console.log("\u{1F680} ~ file: POSTS index.svelte ~ line 15 ~ posts",o),n.$$set=t=>{"posts"in t&&e(0,o=t.posts)},[o]}class q extends c{constructor(s){super();l(this,s,S,y,p,{posts:0})}}export{q as default,b as load};