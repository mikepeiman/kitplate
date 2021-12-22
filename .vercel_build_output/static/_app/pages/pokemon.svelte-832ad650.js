import{S as A,i as H,s as M,e as w,t as $,k as E,c as b,a as I,g as C,d as v,n as L,b as f,ad as V,f as S,D as h,h as z,H as U,I as B,ae as G,j as Y,m as F,o as J,x as j,u as q,v as K,ab as Q,a7 as T,G as R,w as W,M as X,r as Z}from"../chunks/vendor-acede5d5.js";function ee(i){let a,o,t,l=i[0].id+"",u,c,d=i[0].name+"",p,P,m,y,_,s,g;return{c(){a=w("a"),o=w("div"),t=w("h2"),u=$(l),c=$(". "),p=$(d),P=E(),m=w("img"),this.h()},l(e){a=b(e,"A",{href:!0});var r=I(a);o=b(r,"DIV",{class:!0});var n=I(o);t=b(n,"H2",{class:!0});var k=I(t);u=C(k,l),c=C(k,". "),p=C(k,d),k.forEach(v),P=L(n),m=b(n,"IMG",{src:!0,alt:!0,class:!0}),n.forEach(v),r.forEach(v),this.h()},h(){f(t,"class","uppercase text-1xl"),V(m.src,y=i[0].image)||f(m,"src",y),f(m,"alt",""),f(m,"class","w-30 h-30"),f(o,"class","pokemon hover:drop-shadow-lg svelte-4j24xz"),f(a,"href",_=`/pokemon/${i[0].id}`)},m(e,r){S(e,a,r),h(a,o),h(o,t),h(t,u),h(t,c),h(t,p),h(o,P),h(o,m),g=!0},p(e,[r]){(!g||r&1)&&l!==(l=e[0].id+"")&&z(u,l),(!g||r&1)&&d!==(d=e[0].name+"")&&z(p,d),(!g||r&1&&!V(m.src,y=e[0].image))&&f(m,"src",y),(!g||r&1&&_!==(_=`/pokemon/${e[0].id}`))&&f(a,"href",_)},i(e){g||(U(()=>{s||(s=B(a,G,{},!0)),s.run(1)}),g=!0)},o(e){s||(s=B(a,G,{},!1)),s.run(0),g=!1},d(e){e&&v(a),e&&s&&s.end()}}}function te(i,a,o){let{poke:t}=a;return i.$$set=l=>{"poke"in l&&o(0,t=l.poke)},[t]}class ae extends A{constructor(a){super();H(this,a,te,ee,M,{poke:0})}}function N(i,a,o){const t=i.slice();return t[4]=a[o],t}function O(i){let a,o;return a=new ae({props:{poke:i[4]}}),{c(){Y(a.$$.fragment)},l(t){F(a.$$.fragment,t)},m(t,l){J(a,t,l),o=!0},p(t,l){const u={};l&2&&(u.poke=t[4]),a.$set(u)},i(t){o||(j(a.$$.fragment,t),o=!0)},o(t){q(a.$$.fragment,t),o=!1},d(t){K(a,t)}}}function oe(i){let a,o,t,l,u,c,d,p,P,m,y,_=i[1],s=[];for(let e=0;e<_.length;e+=1)s[e]=O(N(i,_,e));const g=e=>q(s[e],1,1,()=>{s[e]=null});return{c(){a=E(),o=w("div"),t=w("h1"),l=$("Pokedex Listing"),u=E(),c=w("input"),d=E(),p=w("div");for(let e=0;e<s.length;e+=1)s[e].c();this.h()},l(e){Q('[data-svelte="svelte-1wb84fe"]',document.head).forEach(v),a=L(e),o=b(e,"DIV",{class:!0});var n=I(o);t=b(n,"H1",{class:!0});var k=I(t);l=C(k,"Pokedex Listing"),k.forEach(v),u=L(n),c=b(n,"INPUT",{type:!0,placeholder:!0,class:!0}),d=L(n),p=b(n,"DIV",{class:!0});var x=I(p);for(let D=0;D<s.length;D+=1)s[D].l(x);x.forEach(v),n.forEach(v),this.h()},h(){document.title="MetaBrain: Your Life OS",f(t,"class","svelte-3z7ye9"),f(c,"type","text"),f(c,"placeholder","Search Pokemon"),f(c,"class","w-5/6 rounded-md text-lg p-4 border-2 border-grey-200"),f(p,"class","grid gap-2 md:grid-cols-8 grid-cols-4"),f(o,"class","main")},m(e,r){S(e,a,r),S(e,o,r),h(o,t),h(t,l),h(o,u),h(o,c),T(c,i[0]),h(o,d),h(o,p);for(let n=0;n<s.length;n+=1)s[n].m(p,null);P=!0,m||(y=R(c,"input",i[3]),m=!0)},p(e,[r]){if(r&1&&c.value!==e[0]&&T(c,e[0]),r&2){_=e[1];let n;for(n=0;n<_.length;n+=1){const k=N(e,_,n);s[n]?(s[n].p(k,r),j(s[n],1)):(s[n]=O(k),s[n].c(),j(s[n],1),s[n].m(p,null))}for(Z(),n=_.length;n<s.length;n+=1)g(n);W()}},i(e){if(!P){for(let r=0;r<_.length;r+=1)j(s[r]);P=!0}},o(e){s=s.filter(Boolean);for(let r=0;r<s.length;r+=1)q(s[r]);P=!1},d(e){e&&v(a),e&&v(o),X(s,e),m=!1,y()}}}async function re({page:i}){return console.log("running fetchPokemon API call"),{props:{pokemon:(await(await fetch("https://pokeapi.co/api/v2/pokemon?limit=898/")).json()).results.map((u,c)=>({name:u.name,id:c+1,image:`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${c+1}.png`}))}}}function se(i,a,o){let{pokemon:t}=a,l="",u=[];function c(){l=this.value,o(0,l)}return i.$$set=d=>{"pokemon"in d&&o(2,t=d.pokemon)},i.$$.update=()=>{i.$$.dirty&5&&(l?o(1,u=t.filter(d=>d.name.toLowerCase().includes(l.toLowerCase()))):o(1,u=[...t]))},[l,u,t,c]}class le extends A{constructor(a){super();H(this,a,se,oe,M,{pokemon:2})}}export{le as default,re as load};
