import{S as p,i as P,s as $,j as v,m as b,o as S,x as y,u as j,v as C}from"../../../chunks/vendor-8f8468c1.js";import{C as I}from"../../../chunks/ColorInput.svelte_svelte_type_style_lang-bbb8b91c.js";import"../../../chunks/stores-647d0335.js";function T(t){let s,a;return s=new I({props:{sketch:t[3],settings:t[2],data:t[1],hidePanel:t[0]}}),{c(){v(s.$$.fragment)},l(e){b(s.$$.fragment,e)},m(e,r){S(s,e,r),a=!0},p(e,[r]){const i={};r&1&&(i.hidePanel=e[0]),s.$set(i)},i(e){a||(y(s.$$.fragment,e),a=!0)},o(e){j(s.$$.fragment,e),a=!1},d(e){C(s,e)}}}function W(t,s,a){let{hidePanel:e=!1}=s;const r={TITLE:"Sketch01",outline:!0,arclen:.5,angle:0,radius:.33,background:"#527A9B",foreground:"#F4B9A7",lineWidth:20},i={scaleToView:!0,dimensions:[1280,1280]},d=({})=>({context:n,width:l,height:o})=>{const{background:f,foreground:c,radius:m,arclen:h,angle:u,lineWidth:k,outline:_,stroke:A}=r;n.clearRect(0,0,l,o),n.fillStyle=f,n.fillRect(0,0,l,o);const g=Math.min(l,o);n.beginPath(),n.arc(l/2,o/2,g*m,u,Math.PI*2*h+u),n.fillStyle=c,n.strokeStyle=c,n.lineWidth=k,_?n.stroke():n.fill()};return t.$$set=n=>{"hidePanel"in n&&a(0,e=n.hidePanel)},[e,r,i,d]}class R extends p{constructor(s){super();P(this,s,W,T,$,{hidePanel:0})}}export{R as default};
