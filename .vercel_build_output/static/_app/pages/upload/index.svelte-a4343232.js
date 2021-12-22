import{S as Se,i as De,s as Ue,e as p,t as E,k as A,c as d,a as b,g as y,d as i,n as Q,b as r,f as O,D as l,a7 as j,G as K,h as Z,E as de,a9 as je,ai as Ve,aj as fe,ak as we,N as Oe,al as He,l as Pe,M as Ce}from"../../chunks/vendor-acede5d5.js";import"../../chunks/parseQuotes.svelte_svelte_type_style_lang-e1e8c61d.js";/* empty css                                                       */function ke(u,a,e){const t=u.slice();return t[24]=a[e],t[26]=e,t}function Re(u){let a,e=u[5].data.queryQuote,t=[];for(let o=0;o<e.length;o+=1)t[o]=Le(ke(u,e,o));return{c(){for(let o=0;o<t.length;o+=1)t[o].c();a=Pe()},l(o){for(let c=0;c<t.length;c+=1)t[c].l(o);a=Pe()},m(o,c){for(let s=0;s<t.length;s+=1)t[s].m(o,c);O(o,a,c)},p(o,c){if(c&32){e=o[5].data.queryQuote;let s;for(s=0;s<e.length;s+=1){const f=ke(o,e,s);t[s]?t[s].p(f,c):(t[s]=Le(f),t[s].c(),t[s].m(a.parentNode,a))}for(;s<t.length;s+=1)t[s].d(1);t.length=e.length}},d(o){Ce(t,o),o&&i(a)}}}function Ge(u){let a,e,t=u[5].Error.message+"",o;return{c(){a=p("p"),e=E("Error: "),o=E(t)},l(c){a=d(c,"P",{});var s=b(a);e=y(s,"Error: "),o=y(s,t),s.forEach(i)},m(c,s){O(c,a,s),l(a,e),l(a,o)},p(c,s){s&32&&t!==(t=c[5].Error.message+"")&&Z(o,t)},d(c){c&&i(a)}}}function Me(u){let a,e;return{c(){a=p("p"),e=E("Loading...")},l(t){a=d(t,"P",{});var o=b(a);e=y(o,"Loading..."),o.forEach(i)},m(t,o){O(t,a,o),l(a,e)},p:de,d(t){t&&i(a)}}}function Le(u){let a,e,t,o=u[26]+1+"",c,s,f=u[24].quoteBody+"",B,N,g=u[24].author.name+"",I,V;return{c(){a=p("ul"),e=p("li"),t=p("h1"),c=E(o),s=E(": "),B=E(f),N=E(" - "),I=E(g),V=A()},l(h){a=d(h,"UL",{});var q=b(a);e=d(q,"LI",{});var S=b(e);t=d(S,"H1",{});var T=b(t);c=y(T,o),s=y(T,": "),B=y(T,f),N=y(T," - "),I=y(T,g),T.forEach(i),S.forEach(i),V=Q(q),q.forEach(i)},m(h,q){O(h,a,q),l(a,e),l(e,t),l(t,c),l(t,s),l(t,B),l(t,N),l(t,I),l(a,V)},p(h,q){q&32&&f!==(f=h[24].quoteBody+"")&&Z(B,f),q&32&&g!==(g=h[24].author.name+"")&&Z(I,g)},d(h){h&&i(a)}}}function Je(u){let a,e,t,o,c,s,f,B,N,g,I,V,h,q,S,T,F,z,k,W,H,C,X,Y,L,m,P,w,oe,se,U,ne,R,ue,re,G,ie,x,M,$,ce,ee,te,J,pe,_e;function he(n,_){return n[5].fetching?Me:n[5].error?Ge:Re}let le=he(u),D=le(u);return{c(){a=p("div"),e=p("div"),t=p("label"),o=p("span"),c=E("Quote"),s=A(),f=p("input"),B=A(),N=p("label"),g=p("span"),I=E("Author"),V=A(),h=p("input"),q=A(),S=p("label"),T=p("span"),F=E("Context"),z=A(),k=p("input"),W=A(),H=p("label"),C=p("span"),X=E("Tags"),Y=A(),L=p("input"),m=A(),P=p("label"),w=p("span"),oe=E("Source"),se=A(),U=p("input"),ne=A(),R=p("button"),ue=E("SUBMIT"),re=A(),G=p("button"),ie=E("Hit .json endpoint"),x=A(),M=p("h1"),$=E(u[0]),ce=E(" - "),ee=E(u[1]),te=A(),J=p("div"),D.c(),this.h()},l(n){a=d(n,"DIV",{class:!0});var _=b(a);e=d(_,"DIV",{class:!0});var v=b(e);t=d(v,"LABEL",{class:!0});var be=b(t);o=d(be,"SPAN",{});var ve=b(o);c=y(ve,"Quote"),ve.forEach(i),be.forEach(i),s=Q(v),f=d(v,"INPUT",{type:!0,placeholder:!0,class:!0}),B=Q(v),N=d(v,"LABEL",{class:!0});var me=b(N);g=d(me,"SPAN",{class:!0});var Ee=b(g);I=y(Ee,"Author"),Ee.forEach(i),me.forEach(i),V=Q(v),h=d(v,"INPUT",{type:!0,placeholder:!0,class:!0}),q=Q(v),S=d(v,"LABEL",{class:!0});var ye=b(S);T=d(ye,"SPAN",{class:!0});var ge=b(T);F=y(ge,"Context"),ge.forEach(i),ye.forEach(i),z=Q(v),k=d(v,"INPUT",{type:!0,placeholder:!0,class:!0}),W=Q(v),H=d(v,"LABEL",{class:!0});var qe=b(H);C=d(qe,"SPAN",{class:!0});var Te=b(C);X=y(Te,"Tags"),Te.forEach(i),qe.forEach(i),Y=Q(v),L=d(v,"INPUT",{type:!0,placeholder:!0,class:!0}),m=Q(v),P=d(v,"LABEL",{class:!0});var Ne=b(P);w=d(Ne,"SPAN",{class:!0});var Ae=b(w);oe=y(Ae,"Source"),Ae.forEach(i),Ne.forEach(i),se=Q(v),U=d(v,"INPUT",{type:!0,placeholder:!0,class:!0}),v.forEach(i),ne=Q(_),R=d(_,"BUTTON",{type:!0,class:!0});var Qe=b(R);ue=y(Qe,"SUBMIT"),Qe.forEach(i),re=Q(_),G=d(_,"BUTTON",{type:!0,class:!0});var Be=b(G);ie=y(Be,"Hit .json endpoint"),Be.forEach(i),_.forEach(i),x=Q(n),M=d(n,"H1",{});var ae=b(M);$=y(ae,u[0]),ce=y(ae," - "),ee=y(ae,u[1]),ae.forEach(i),te=Q(n),J=d(n,"DIV",{class:!0});var Ie=b(J);D.l(Ie),Ie.forEach(i),this.h()},h(){r(t,"class","label max-w-xs"),r(f,"type","text"),r(f,"placeholder","Quote"),r(f,"class","input input-group max-w-xs"),r(g,"class","label-text"),r(N,"class","label"),r(h,"type","text"),r(h,"placeholder","Author"),r(h,"class","input"),r(T,"class","label-text"),r(S,"class","label"),r(k,"type","text"),r(k,"placeholder","Context"),r(k,"class","input"),r(C,"class","label-text"),r(H,"class","label"),r(L,"type","text"),r(L,"placeholder","Tags"),r(L,"class","input"),r(w,"class","label-text"),r(P,"class","label"),r(U,"type","text"),r(U,"placeholder","Source"),r(U,"class","input"),r(e,"class","form-control flex"),r(R,"type","submit"),r(R,"class","btn btn-outline"),r(G,"type","submit"),r(G,"class","btn btn-outline"),r(a,"class","p-10 card bg-base-200 container"),r(J,"class","quotes")},m(n,_){O(n,a,_),l(a,e),l(e,t),l(t,o),l(o,c),l(e,s),l(e,f),j(f,u[0]),l(e,B),l(e,N),l(N,g),l(g,I),l(e,V),l(e,h),j(h,u[1]),l(e,q),l(e,S),l(S,T),l(T,F),l(e,z),l(e,k),j(k,u[2]),l(e,W),l(e,H),l(H,C),l(C,X),l(e,Y),l(e,L),j(L,u[3]),l(e,m),l(e,P),l(P,w),l(w,oe),l(e,se),l(e,U),j(U,u[4]),l(a,ne),l(a,R),l(R,ue),l(a,re),l(a,G),l(G,ie),O(n,x,_),O(n,M,_),l(M,$),l(M,ce),l(M,ee),O(n,te,_),O(n,J,_),D.m(J,null),pe||(_e=[K(f,"input",u[10]),K(h,"input",u[11]),K(k,"input",u[12]),K(L,"input",u[13]),K(U,"input",u[14]),K(R,"click",u[15]),K(G,"click",u[16])],pe=!0)},p(n,[_]){_&1&&f.value!==n[0]&&j(f,n[0]),_&2&&h.value!==n[1]&&j(h,n[1]),_&4&&k.value!==n[2]&&j(k,n[2]),_&8&&L.value!==n[3]&&j(L,n[3]),_&16&&U.value!==n[4]&&j(U,n[4]),_&1&&Z($,n[0]),_&2&&Z(ee,n[1]),le===(le=he(n))&&D?D.p(n,_):(D.d(1),D=le(n),D&&(D.c(),D.m(J,null)))},i:de,o:de,d(n){n&&i(a),n&&i(x),n&&i(M),n&&i(te),n&&i(J),D.d(),pe=!1,je(_e)}}}function Ke(u,a,e){let t;Ve({url:"https://blue-surf-460106.us-east-1.aws.cloud.dgraph.io/graphql"});let{id:c}=a,s="",f="",B="",N="",g="",I={body:s,author:f,context:B,source:g,tags:N};const V=fe({query:`
		mutation addQuotes($data: [AddQuoteInput!]!) {
			addQuote(input: $data) {
			numUids
			quote {
				id
				quoteBody
			}
			}
		}`}),h=fe({query:`
		mutation addNewQuote {
			addQuote(input: {quoteBody: "", author: {name: ""}}) {
				numUids
			}
			}`}),q=we(`query getQuotes {
		queryQuote {
			quoteBody
			author {
			name
			}
		}
		}
		`);Oe(u,q,m=>e(5,t=m)),fe({query:`
		mutation deleteTestQuotes {
			deleteQuote(filter: {quoteBody: {anyoftext: "test"}})
			}
		`});let S=He(q);console.log("\u{1F680} ~ file: index.json.js ~ line 38 ~ res",S);function T(){console.log("\u{1F680} ~ file: index.svelte ~ line 74 ~ submitQuote ~ quote",I);try{let m=[];m=[...m,I],V({data:m}).then(P=>{console.log(P.data,P.error)})}catch(m){console.log("\u{1F680} ~ file: index.svelte ~ line 80 ~ submitQuote ~ error",m)}h({quoteBody:I.quoteBody,authorName:I.quoteAuthor}).then(m=>{console.log("addNewQuote: ",m.data,m.error)})}const F={data:[{quoteBody:"Test 777",author:{name:"A",titleLong:""},context:"apples",tags:{tag:"apples"}},{quoteBody:"Test 888",author:{name:"B",titleLong:""},context:"oranges",tags:{tag:"oranges"}}]};function z(){(async()=>{const P=await fetch(`/upload.json?data=${JSON.stringify(F)}`);if(console.log("\u{1F680} ~ file: index.svelte ~ line 112 ~ fire ~ res",P),P.ok){const{data:w}=await P.json();return console.log("\u{1F680} ~ file: index.svelte ~ line 114 ~ fire ~ data",w),{props:{data:w}}}else return"there was an error"})()}function k(){s=this.value,e(0,s)}function W(){f=this.value,e(1,f)}function H(){B=this.value,e(2,B)}function C(){N=this.value,e(3,N)}function X(){g=this.value,e(4,g)}const Y=()=>T(),L=()=>z();return u.$$set=m=>{"id"in m&&e(9,c=m.id)},[s,f,B,N,g,t,q,T,z,c,k,W,H,C,X,Y,L]}class Xe extends Se{constructor(a){super();De(this,a,Ke,Je,Ue,{id:9})}}export{Xe as default};
