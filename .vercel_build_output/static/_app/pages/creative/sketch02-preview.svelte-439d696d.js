import{S as R,i as A,s as w,j as C,m as M,o as b,x as L,u as I,v as j,A as q,a7 as S}from"../../chunks/vendor-4c0561e8.js";import{C as F}from"../../chunks/ColorInput.svelte_svelte_type_style_lang-2e1e6a0f.js";/* empty css                                                              */import"../../chunks/stores-6e146982.js";function V(m){let s,i;return s=new F({props:{sketch:m[3],settings:m[2],data:m[1],hidePanel:m[0]}}),{c(){C(s.$$.fragment)},l(n){M(s.$$.fragment,n)},m(n,e){b(s,n,e),i=!0},p(n,[e]){const c={};e&2&&(c.data=n[1]),e&1&&(c.hidePanel=n[0]),s.$set(c)},i(n){i||(L(s.$$.fragment,n),i=!0)},o(n){I(s.$$.fragment,n),i=!1},d(n){j(s,n)}}}function O(m,s,i){let{hidePanel:n=!0}=s;const e={TITLE:"Sketch02",itemHeight:25,itemWidth:25,itemScaleX:1,itemScaleY:1,width:1e3,height:1e3,gap:15,itemsPerColumn:25,itemsPerRow:25,originX:0,originY:0,totalItems:!1,remainingWidth:1080,remainingHeight:1080,margin:100,offset:0,randomFactor:.5,opacityMedian:.5,opacityVariance:.25,randomStroke:!0,randomFill:!0,fill:"hsla(180,50%,50%,0.5)",fillHSLA:"hsla(180,50%,50%,0.5)",fillOpacity:".25",stroke:"#ffffffaa",strokeHSLA:"hsla(60,50%,50%,0.5)",strokeOpacity:".25",strokeRandom:"#0033cff",strokeRandomHSLA:"hsla(320,50%,50%,0.5)",strokeRandomOpacity:".25",background:"00000000",outline:!0,fitToCanvas:!0,shapes:[{value:"square",label:"square"},{value:"circle",label:"circle"}],shape:"square",startAngle:0,endAngle:7,arclen:.5,angle:0,radius:.33,lineWidth:2,lineWidthRandom:5};let c,d,f=!1;const P={scaleToView:!0,dimensions:[1280,1280]};q(()=>{i(4,f=!0),document.getElementsByTagName("canvas")[0]});const W=({context:t,width:l,height:g})=>(i(1,e.width=l,e),i(1,e.height=g,e),i(1,e.remainingWidth=l-e.itemsPerRow*e.gap,e),i(1,e.remainingHeight=g-e.itemsPerColumn*e.gap,e),i(1,e.itemWidth=e.remainingWidth/e.itemsPerRow,e),i(1,e.itemHeight=e.remainingHeight/e.itemsPerColumn,e),({context:a,width:r,height:o})=>{a.clearRect(0,0,r,o),a.fillStyle=e.background,a.fillRect(0,0,r,o),H(a)});function H(t,l,g){for(let a=0;a<e.itemsPerColumn;a++)for(let r=0;r<e.itemsPerRow;r++){let o=(e.itemWidth+e.gap)*r,h=(e.itemHeight+e.gap)*a;d=e.strokeHSLA,e.shape=="square"?p(t,o+e.margin/2+e.gap/2,h+e.margin/2+e.gap/2,e.itemWidth,e.itemHeight,e.fillHSLA,d,e.lineWidth):k(t,o+e.margin/2+e.gap/2,h+e.margin/2+e.gap/2,Math.abs(e.itemWidth),e.startAngle,e.endAngle,e.fillHSLA,d,e.lineWidth),Math.random()<e.randomFactor&&(e.randomStroke?d=`hsla(${y(r,a,e.totalItems*.3)}, 90%, 50%, ${S.range(e.opacityMedian-e.opacityVariance,e.opacityMedian+e.opacityVariance)})`:d=e.strokeRandomHSLA,e.randomFill?c=`hsla(${y(r,a,e.totalItems*.3)}, 90%, 50%, ${S.range(e.opacityMedian-e.opacityVariance,e.opacityMedian+e.opacityVariance)})`:c=e.fillRandomHSLA,e.shape=="square"?p(t,o+e.margin/2+e.gap/2+e.offset,h+e.margin/2+e.gap/2+e.offset,e.itemWidth,e.itemHeight,c,d,e.lineWidthRandom):k(t,o+e.margin/2+e.gap/2+e.offset,h+e.margin/2+e.gap/2+e.offset,Math.abs(e.itemWidth),e.startAngle,e.endAngle,c,d,e.lineWidthRandom))}}const p=(t,l,g,a,r,o,h,u)=>{t.strokeStyle=h,t.beginPath(),t.rect(l,g,a*e.itemScaleX,r*e.itemScaleY),t.lineWidth=u,t.stroke(),t.fillStyle=o,t.fill()},k=(t,l,g,a,r,o,h,u,_)=>{t.strokeStyle=u,t.beginPath(),t.arc(l,g,a,r,o),t.lineWidth=_,t.stroke(),t.fillStyle=h,t.fill()},y=(t,l,g)=>{let a=30,r=Math.random()*5;return(t+r)*(l-r)*(r*g)+a};return m.$$set=t=>{"hidePanel"in t&&i(0,n=t.hidePanel)},m.$$.update=()=>{if(m.$$.dirty&2&&i(1,e.totalItems=e.itemsPerColumn*e.itemsPerRow,e),m.$$.dirty&18&&f){let t=e.itemsPerRow*e.gap;i(1,e.remainingWidth=e.width-t-e.margin,e);let l=e.itemsPerColumn*e.gap;i(1,e.remainingHeight=e.height-l-e.margin,e),i(1,e.itemWidth=e.remainingWidth/e.itemsPerRow,e),i(1,e.itemHeight=e.remainingHeight/e.itemsPerColumn,e)}},[n,e,P,W,f]}class E extends R{constructor(s){super();A(this,s,O,V,w,{hidePanel:0})}}export{E as default};