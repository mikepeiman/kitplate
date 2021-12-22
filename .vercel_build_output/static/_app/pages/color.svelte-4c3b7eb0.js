import{am as l,an as f,S as q,i as F,s as G,e as y,k as E,c as Q,a as k,n as j,d as m,b as C,f as b,D as H,T as w,M as B,a3 as L,E as $}from"../chunks/vendor-8f8468c1.js";const R=l(.5,.5,.5,.5),W=l(.55,.055,.675,.19),N=l(.215,.61,.355,1),P=l(.645,.045,.355,1),J=l(.47,0,.745,.715),K=l(.39,.575,.565,1),U=l(.445,.05,.55,.95),X=l(.55,.085,.68,.53),Y=l(.25,.46,.45,.94),Z=l(.455,.03,.515,.955),ee=l(.895,.03,.685,.22),te=l(.165,.84,.44,1),ae=l(.77,0,.175,1),ne=l(.6,.04,.98,.335),se=l(.075,.82,.165,1),re=l(.785,.135,.15,.86),oe=l(.755,.05,.855,.06),ue=l(.23,1,.32,1),le=l(.86,0,.07,1),ce=l(.95,.05,.795,.035),ie=l(.19,1,.22,1),he=l(1,0,0,1),de=l(.6,-.28,.735,.045),fe=l(.175,.885,.32,1.275),_e=l(.68,-.55,.265,1.55);var x=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",linear:R,easeInCubic:W,easeOutCubic:N,easeInOutCubic:P,easeInSine:J,easeOutSine:K,easeInOutSine:U,easeInQuad:X,easeOutQuad:Y,easeInOutQuad:Z,easeInQuart:ee,easeOutQuart:te,easeInOutQuart:ae,easeInCirc:ne,easeOutCirc:se,easeInOutCirc:re,easeInQuint:oe,easeOutQuint:ue,easeInOutQuint:le,easeInExpo:ce,easeOutExpo:ie,easeInOutExpo:he,easeInBack:de,easeOutBack:fe,easeInOutBack:_e});function S(r,n,s){const[o,a]=Array.from(n),[e,u]=Array.from(s),t=e+(r-o)/(a-o)*(u-e);if(e<u){if(t<e)return e;if(t>u)return u}else{if(t>e)return e;if(t<u)return u}return t}function ve({specs:r}){function n(g,h){var I=[];for(var M in Array.from(Array(h).keys())){const V=g(M/(h-1));I.push(V)}return I.reverse(),I}var s=n(x[r.lum_curve],r.steps),o=n(x[r.sat_curve],r.steps),a=n(x[r.hue_curve],r.steps),e=[],u=[],t=[];for(var c in s){const g=s[c];e.push(S(g,[0,1],[r.lum_end*.01,r.lum_start*.01]))}for(var c in o){const h=o[c];var O=S(h,[0,1],[r.sat_start*.01,r.sat_end*.01]);O=O*(r.sat_rate*.01),u.push(O)}for(var c in a){const h=a[c];t.push(S(h,[0,1],[r.hue_start,r.hue_end]))}u.reverse(),t.reverse(),s=e,o=u,a=t;var _=[];for(var c in s){s[c];var d={hue:a[c],saturation:o[c],luminosity:s[c]};d.saturation>1&&(d.saturation=1);var i=f(f.hsv([d.hue,d.saturation,d.luminosity]));f(f.hsv([d.hue,d.saturation,d.luminosity])).rgb();const h=f.contrast(i,"white").toFixed(2),I=f.contrast(i,"black").toFixed(2);var v="";h>=4.5?v="white":v="black";var p={hex:f(i).hex(),hue:f(i).hsv()[0],sat:f(i).hsv()[1],lum:f(i).hsv()[2],hsv:f(i).hsv(),hsl:f(i).hsl(),rgb:f(i).rgb(),hueRange:[r.hue_start,r.hue_end],steps:r.steps,label:r.modifier*c,contrastBlack:I,contrastWhite:h,displayColor:v};_.push(p)}return _}function A(r,n,s){const o=r.slice();return o[14]=n[s],o}function D(r,n,s){const o=r.slice();return o[17]=n[s],o}function T(r){let n;return{c(){n=y("div"),this.h()},l(s){n=Q(s,"DIV",{class:!0,style:!0}),k(n).forEach(m),this.h()},h(){C(n,"class","grid-item p-1 w-auto h-auto rounded-none"),w(n,"background",r[17])},m(s,o){b(s,n,o)},p(s,o){o&1&&w(n,"background",s[17])},d(s){s&&m(n)}}}function z(r){let n,s,o=r[14],a=[];for(let e=0;e<o.length;e+=1)a[e]=T(D(r,o,e));return{c(){n=y("div");for(let e=0;e<a.length;e+=1)a[e].c();s=E(),this.h()},l(e){n=Q(e,"DIV",{class:!0});var u=k(n);for(let t=0;t<a.length;t+=1)a[t].l(u);s=j(u),u.forEach(m),this.h()},h(){C(n,"class","grid grid-col svelte-1g200cd")},m(e,u){b(e,n,u);for(let t=0;t<a.length;t+=1)a[t].m(n,null);H(n,s)},p(e,u){if(u&1){o=e[14];let t;for(t=0;t<o.length;t+=1){const c=D(e,o,t);a[t]?a[t].p(c,u):(a[t]=T(c),a[t].c(),a[t].m(n,s))}for(;t<a.length;t+=1)a[t].d(1);a.length=o.length}},d(e){e&&m(n),B(a,e)}}}function me(r){let n,s,o=r[0],a=[];for(let e=0;e<o.length;e+=1)a[e]=z(A(r,o,e));return{c(){n=E(),s=y("div");for(let e=0;e<a.length;e+=1)a[e].c();this.h()},l(e){L('[data-svelte="svelte-1aizi87"]',document.head).forEach(m),n=j(e),s=Q(e,"DIV",{class:!0});var t=k(s);for(let c=0;c<a.length;c+=1)a[c].l(t);t.forEach(m),this.h()},h(){document.title="Color Palette Generator",C(s,"class","grid grid-row svelte-1g200cd")},m(e,u){b(e,n,u),b(e,s,u);for(let t=0;t<a.length;t+=1)a[t].m(s,null)},p(e,[u]){if(u&1){o=e[0];let t;for(t=0;t<o.length;t+=1){const c=A(e,o,t);a[t]?a[t].p(c,u):(a[t]=z(c),a[t].c(),a[t].m(s,null))}for(;t<a.length;t+=1)a[t].d(1);a.length=o.length}},i:$,o:$,d(e){e&&m(n),e&&m(s),B(a,e)}}}let ge=36;function Oe(r,n,s){let o=0,a=360/ge,e={specs:{steps:10,hue_start:a*o,hue_end:a*1,hue_curve:"easeInQuad",sat_start:10,sat_end:100,sat_curve:"easeOutQuad",sat_rate:100,lum_start:100,lum_end:10,lum_curve:"easeOutQuad",modifier:10}},u=["370617","6a040f","9d0208","d00000","dc2f02","e85d04","f48c06","faa307","ffba08"],t=["03045e","023e8a","0077b6","0096c7","00b4d8","48cae4","90e0ef","ade8f4","caf0f8"],c=["002411","004b23","006400","007200","008000","38b000","70e000","9ef01a","ccff33"];function O(){let i=[];for(let v=0;v<_.length;v++){const p=_[v];let g={};for(let h=0;h<9;h++)g[`${(h+1)*100}`]=p[h];i.push(g)}console.log("\u{1F680} ~ file: color.svelte ~ line 83 ~ outputTailwindColorObjects ~ outputArray",i)}let _=[];_=[u,t,c],_=_.map(i=>i.map(v=>`#${v}`));let d=ve(e);return d=d.map(i=>i.hex),_.push(d),console.log("\u{1F680} ~ file: color.svelte ~ line 64 ~ colorSets",_),console.log("\u{1F680} ~ file: color.svelte ~ line 24 ~ colors ",d),O(),[_]}class be extends q{constructor(n){super();F(this,n,Oe,me,G,{})}}export{be as default};
