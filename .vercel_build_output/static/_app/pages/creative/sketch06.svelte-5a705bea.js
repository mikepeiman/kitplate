import{S as re,i as se,s as ae,j as v,m as h,o as P,x as g,u as $,v as S,Q as q,R as C,U as w,k as B,l as x,n as L,f as I,r as te,w as oe,d as j}from"../../chunks/vendor-c9952951.js";import{C as fe}from"../../chunks/ColorInput.svelte_svelte_type_style_lang-983f22d5.js";import{a as ee,S as N,C as _e}from"../../chunks/Checkbox-b974a731.js";import"../../chunks/stores-9805f8af.js";function ne(i){let u,a,r;function n(t){i[10](t)}let p={label:"Line Width",min:"1",max:"100"};return i[1].lineWidth!==void 0&&(p.value=i[1].lineWidth),u=new N({props:p}),q.push(()=>C(u,"value",n)),{c(){v(u.$$.fragment)},l(t){h(u.$$.fragment,t)},m(t,f){P(u,t,f),r=!0},p(t,f){const b={};!a&&f&2&&(a=!0,b.value=t[1].lineWidth,w(()=>a=!1)),u.$set(b)},i(t){r||(g(u.$$.fragment,t),r=!0)},o(t){$(u.$$.fragment,t),r=!1},d(t){S(u,t)}}}function pe(i){let u,a,r,n,p,t,f,b,A,d,T,M,c,l,m,_,E,W,k,R;function F(e){i[4](e)}let D={label:"Background"};i[1].background!==void 0&&(D.value=i[1].background),u=new ee({props:D}),q.push(()=>C(u,"value",F));function O(e){i[5](e)}let Q={label:"Foreground"};i[1].foreground!==void 0&&(Q.value=i[1].foreground),n=new ee({props:Q}),q.push(()=>C(n,"value",O));function U(e){i[6](e)}let V={label:"Arc Length"};i[1].arclen!==void 0&&(V.value=i[1].arclen),f=new N({props:V}),q.push(()=>C(f,"value",U));function ie(e){i[7](e)}let z={label:"Radius"};i[1].radius!==void 0&&(z.value=i[1].radius),d=new N({props:z}),q.push(()=>C(d,"value",ie));function le(e){i[8](e)}let G={label:"Angle",min:-Math.PI,max:Math.PI};i[1].angle!==void 0&&(G.value=i[1].angle),c=new N({props:G}),q.push(()=>C(c,"value",le));function ue(e){i[9](e)}let H={label:"Outline"};i[1].outline!==void 0&&(H.checked=i[1].outline),_=new _e({props:H}),q.push(()=>C(_,"checked",ue));let o=i[1].outline&&ne(i);return{c(){v(u.$$.fragment),r=B(),v(n.$$.fragment),t=B(),v(f.$$.fragment),A=B(),v(d.$$.fragment),M=B(),v(c.$$.fragment),m=B(),v(_.$$.fragment),W=B(),o&&o.c(),k=x()},l(e){h(u.$$.fragment,e),r=L(e),h(n.$$.fragment,e),t=L(e),h(f.$$.fragment,e),A=L(e),h(d.$$.fragment,e),M=L(e),h(c.$$.fragment,e),m=L(e),h(_.$$.fragment,e),W=L(e),o&&o.l(e),k=x()},m(e,s){P(u,e,s),I(e,r,s),P(n,e,s),I(e,t,s),P(f,e,s),I(e,A,s),P(d,e,s),I(e,M,s),P(c,e,s),I(e,m,s),P(_,e,s),I(e,W,s),o&&o.m(e,s),I(e,k,s),R=!0},p(e,s){const J={};!a&&s&2&&(a=!0,J.value=e[1].background,w(()=>a=!1)),u.$set(J);const K={};!p&&s&2&&(p=!0,K.value=e[1].foreground,w(()=>p=!1)),n.$set(K);const X={};!b&&s&2&&(b=!0,X.value=e[1].arclen,w(()=>b=!1)),f.$set(X);const Y={};!T&&s&2&&(T=!0,Y.value=e[1].radius,w(()=>T=!1)),d.$set(Y);const Z={};!l&&s&2&&(l=!0,Z.value=e[1].angle,w(()=>l=!1)),c.$set(Z);const y={};!E&&s&2&&(E=!0,y.checked=e[1].outline,w(()=>E=!1)),_.$set(y),e[1].outline?o?(o.p(e,s),s&2&&g(o,1)):(o=ne(e),o.c(),g(o,1),o.m(k.parentNode,k)):o&&(te(),$(o,1,1,()=>{o=null}),oe())},i(e){R||(g(u.$$.fragment,e),g(n.$$.fragment,e),g(f.$$.fragment,e),g(d.$$.fragment,e),g(c.$$.fragment,e),g(_.$$.fragment,e),g(o),R=!0)},o(e){$(u.$$.fragment,e),$(n.$$.fragment,e),$(f.$$.fragment,e),$(d.$$.fragment,e),$(c.$$.fragment,e),$(_.$$.fragment,e),$(o),R=!1},d(e){S(u,e),e&&j(r),S(n,e),e&&j(t),S(f,e),e&&j(A),S(d,e),e&&j(M),S(c,e),e&&j(m),S(_,e),e&&j(W),o&&o.d(e),e&&j(k)}}}function de(i){let u,a;return u=new fe({props:{sketch:i[3],settings:i[2],data:i[1],hidePanel:i[0],$$slots:{default:[pe]},$$scope:{ctx:i}}}),{c(){v(u.$$.fragment)},l(r){h(u.$$.fragment,r)},m(r,n){P(u,r,n),a=!0},p(r,[n]){const p={};n&2&&(p.data=r[1]),n&1&&(p.hidePanel=r[0]),n&2050&&(p.$$scope={dirty:n,ctx:r}),u.$set(p)},i(r){a||(g(u.$$.fragment,r),a=!0)},o(r){$(u.$$.fragment,r),a=!1},d(r){S(u,r)}}}function ce(i,u,a){let{hidePanel:r=!1}=u;const n={TITLE:"Sketch06",outline:!0,arclen:.5,angle:0,radius:.33,background:"#527A9B",foreground:"#F4B9A7",lineWidth:20},p={scaleToView:!0,dimensions:[1280,1280]},t=({})=>({context:l,width:m,height:_})=>{const{background:E,foreground:W,radius:k,arclen:R,angle:F,lineWidth:D,outline:O,stroke:Q}=n;l.clearRect(0,0,m,_),l.fillStyle=E,l.fillRect(0,0,m,_);const U=Math.min(m,_);l.beginPath(),l.arc(m/2,_/2,U*k,F,Math.PI*2*R+F),l.fillStyle=W,l.strokeStyle=W,l.lineWidth=D,O?l.stroke():l.fill()};function f(l){i.$$.not_equal(n.background,l)&&(n.background=l,a(1,n))}function b(l){i.$$.not_equal(n.foreground,l)&&(n.foreground=l,a(1,n))}function A(l){i.$$.not_equal(n.arclen,l)&&(n.arclen=l,a(1,n))}function d(l){i.$$.not_equal(n.radius,l)&&(n.radius=l,a(1,n))}function T(l){i.$$.not_equal(n.angle,l)&&(n.angle=l,a(1,n))}function M(l){i.$$.not_equal(n.outline,l)&&(n.outline=l,a(1,n))}function c(l){i.$$.not_equal(n.lineWidth,l)&&(n.lineWidth=l,a(1,n))}return i.$$set=l=>{"hidePanel"in l&&a(0,r=l.hidePanel)},[r,n,p,t,f,b,A,d,T,M,c]}class ke extends re{constructor(u){super();se(this,u,ce,de,ae,{hidePanel:0})}}export{ke as default};
