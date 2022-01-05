import{S as xl,i as _l,s as bl,B as Ot,_ as Pl,$ as Dl,a,d as l,a0 as wl,f as Ge,p as Vl,E as Ze,a1 as yl,H as Hl,e as r,j as fe,k as _,t as f,c as n,m as ve,n as b,g as v,b as s,D as e,o as me,x as R,u as W,v as ue,M as Gt,G as Nl,w as Ml,N as Tl,A as Ll,a2 as zl,r as Cl}from"../chunks/vendor-e089f027.js";import"../chunks/ColorInput.svelte_svelte_type_style_lang-0e103a27.js";import{p as Bl}from"../chunks/stores-296d8679.js";/* empty css                                                           */import Rl from"./creative/sketch03-preview.svelte-252c8fca.js";function Ol(p){let t,o='<path d="M8.59 16.58L13.17 12L8.59 7.41L10 6l6 6l-6 6l-1.41-1.42z" fill="currentColor"/>',i=[{width:"1.2em"},{height:"1.2em"},{preserveAspectRatio:"xMidYMid meet"},{viewBox:"0 0 24 24"},p[0]],u={};for(let h=0;h<i.length;h+=1)u=Ot(u,i[h]);return{c(){t=Pl("svg"),this.h()},l(h){t=Dl(h,"svg",{width:!0,height:!0,preserveAspectRatio:!0,viewBox:!0});var w=a(t);w.forEach(l),this.h()},h(){wl(t,u)},m(h,w){Ge(h,t,w),t.innerHTML=o},p(h,[w]){wl(t,u=Vl(i,[{width:"1.2em"},{height:"1.2em"},{preserveAspectRatio:"xMidYMid meet"},{viewBox:"0 0 24 24"},w&1&&h[0]]))},i:Ze,o:Ze,d(h){h&&l(t)}}}function Gl(p,t,o){return p.$$set=i=>{o(0,t=Ot(Ot({},t),yl(i)))},t=yl(t),[t]}class Re extends xl{constructor(t){super();_l(this,t,Gl,Ol,bl,{})}}function El(p,t,o){const i=p.slice();return i[7]=t[o],i}function $l(p,t,o){const i=p.slice();return i[10]=t[o],i}function kl(p,t,o){const i=p.slice();return i[13]=t[o],i}function Il(p){let t,o,i,u,h,w,k=p[13].title+"",D,A,E,O=p[13].excerpt+"",V,z,ee,j;return u=new zl({props:{timestamp:p[13].date}}),{c(){t=r("a"),o=r("div"),i=r("div"),fe(u.$$.fragment),h=_(),w=r("h1"),D=f(k),A=_(),E=r("p"),V=f(O),z=_(),this.h()},l(g){t=n(g,"A",{href:!0,class:!0});var x=a(t);o=n(x,"DIV",{class:!0});var I=a(o);i=n(I,"DIV",{class:!0});var m=a(i);ve(u.$$.fragment,m),m.forEach(l),h=b(I),w=n(I,"H1",{class:!0});var S=a(w);D=v(S,k),S.forEach(l),A=b(I),E=n(I,"P",{class:!0});var H=a(E);V=v(H,O),H.forEach(l),I.forEach(l),z=b(x),x.forEach(l),this.h()},h(){s(i,"class","article-date p-0 pb-1 m-0 text-xs md:text-sm lg:pb-2 xl:pb-3 font-light text-sky-200 svelte-7dh29d"),s(w,"class","text-lg md:text-xl lg:text-2xl xl:text-3xl mb-0 md:mb-1 lg:mb-2 xl:mb-3 -mt-1 font-bold text-white svelte-7dh29d"),s(E,"class","text-sm md:text-base xl:text-lg tracking-wider font-light text-sky-200"),s(o,"class","post-card transition card card-body p-5 lg:p-7 bg-sky-500 bg-opacity-25 my-6 rounded-md hover:bg-sky-900 hover:-translate-x-2 svelte-7dh29d"),s(t,"href",ee=`/posts/${p[13].slug}`),s(t,"class","no-underline")},m(g,x){Ge(g,t,x),e(t,o),e(o,i),me(u,i,null),e(o,h),e(o,w),e(w,D),e(o,A),e(o,E),e(E,V),e(t,z),j=!0},p:Ze,i(g){j||(R(u.$$.fragment,g),j=!0)},o(g){W(u.$$.fragment,g),j=!1},d(g){g&&l(t),ue(u)}}}function jl(p){let t,o=p[10]+"",i;return{c(){t=r("span"),i=f(o),this.h()},l(u){t=n(u,"SPAN",{class:!0});var h=a(t);i=v(h,o),h.forEach(l),this.h()},h(){s(t,"class","project-tag -ml-2 mr-4 mb-4 bg-winterblues-300 bg-opacity-30 rounded-md text-xs font-thin p-1 svelte-7dh29d")},m(u,h){Ge(u,t,h),e(t,i)},p:Ze,d(u){u&&l(t)}}}function Sl(p){let t,o,i,u,h,w,k=p[7].name+"",D,A,E,O=p[7].desc+"",V,z,ee,j=p[7].tags,g=[];for(let x=0;x<j.length;x+=1)g[x]=jl($l(p,j,x));return{c(){t=r("a"),o=r("div"),i=r("div");for(let x=0;x<g.length;x+=1)g[x].c();u=_(),h=r("div"),w=r("h1"),D=f(k),A=_(),E=r("p"),V=f(O),z=_(),this.h()},l(x){t=n(x,"A",{href:!0,class:!0});var I=a(t);o=n(I,"DIV",{class:!0});var m=a(o);i=n(m,"DIV",{class:!0});var S=a(i);for(let N=0;N<g.length;N+=1)g[N].l(S);S.forEach(l),u=b(m),h=n(m,"DIV",{class:!0});var H=a(h);w=n(H,"H1",{class:!0});var ge=a(w);D=v(ge,k),ge.forEach(l),A=b(H),E=n(H,"P",{class:!0});var xe=a(E);V=v(xe,O),xe.forEach(l),H.forEach(l),m.forEach(l),z=b(I),I.forEach(l),this.h()},h(){s(i,"class","text-xs ml-1 flex flex-row project-tags svelte-7dh29d"),s(w,"class","text-lg md:text-xl lg:text-2xl xl:text-3xl mb-0 md:mb-1 lg:mb-2 xl:mb-3 -mt-1 font-extrabold text-white svelte-7dh29d"),s(E,"class","mt-2 text-sm md:text-base xl:text-lg tracking-wider font-light"),s(h,"class","project-details flex flex-col  svelte-7dh29d"),s(o,"class","project-card card bg-opacity-25 rounded-md transition-all bg-sky-500 bg-opacity-25 flex flex-col md:flex-col-reverse md:justify-between lg:flex-col lg:justify-start p-5 lg:p-7 rounded-md hover:bg-sky-900 hover:-translate-x-2 md:hover:-translate-y-2 md:hover:translate-x-0 svelte-7dh29d"),s(t,"href",ee=`/${p[7].url}`),s(t,"class","project-card-link no-underline flex my-3 md:mx-3 svelte-7dh29d")},m(x,I){Ge(x,t,I),e(t,o),e(o,i);for(let m=0;m<g.length;m+=1)g[m].m(i,null);e(o,u),e(o,h),e(h,w),e(w,D),e(h,A),e(h,E),e(E,V),e(t,z)},p(x,I){if(I&4){j=x[7].tags;let m;for(m=0;m<j.length;m+=1){const S=$l(x,j,m);g[m]?g[m].p(S,I):(g[m]=jl(S),g[m].c(),g[m].m(i,null))}for(;m<g.length;m+=1)g[m].d(1);g.length=j.length}},d(x){x&&l(t),Gt(g,x)}}}function Ul(p){let t,o,i,u,h,w,k,D,A,E,O,V,z,ee,j,g,x,I,m,S,H,ge,xe,N,et,_e,tt,lt,st,Y,be,at,rt,C,nt,we,ot,it,ye,ct,dt,Ee,ht,pt,q,$e,ft,vt,B,mt,ke,ut,gt,Ie,xt,_t,bt,F,G,je,wt,yt,Et,M,te,$t,kt,Se,le,It,Ae,se,jt,Pe,ae,St,De,U,Ve,At,Pt,Dt,He,Vt,Ht,Q,J,Ne,Nt,Mt,T,re,Tt,Lt,Me,ne,zt,Te,oe,Ct,Le,ie,Bt,ce,Ue,Rt,Ut;Hl(p[6]);let de=p[1],y=[];for(let c=0;c<de.length;c+=1)y[c]=Il(kl(p,de,c));const Al=c=>W(y[c],1,1,()=>{y[c]=null});le=new Re({props:{class:"icon-chevron"}}),se=new Re({props:{class:"icon-chevron"}}),ae=new Re({props:{class:"icon-chevron"}}),ne=new Re({props:{class:"icon-chevron"}}),oe=new Re({props:{class:"icon-chevron"}}),ie=new Re({props:{class:"icon-chevron"}});let ze=p[2],P=[];for(let c=0;c<ze.length;c+=1)P[c]=Sl(El(p,ze,c));return{c(){t=r("main"),o=r("section"),i=r("div"),u=r("h1"),h=f("Hi, I'm Mike."),w=_(),k=r("p"),D=f(`I'm a creative software developer, and this is my professional blog. I love\r
				`),A=r("span"),E=f("user experience"),O=f(` and design that helps realize\r
				human potential. I follow a\r
				`),V=r("span"),z=f("first-principles"),ee=f(`\r
				approach in my life and my work. Here are a few of my\r
				`),j=r("span"),g=f("design principles"),x=f(":"),I=_(),m=r("ol"),S=r("li"),H=r("h2"),ge=f("Never deny the user basic options."),xe=_(),N=r("p"),et=f("Users should be provided the means to "),_e=r("span"),tt=f("customize the user interface"),lt=f(" as much as possible."),st=_(),Y=r("li"),be=r("h2"),at=f("Minimize barriers to action."),rt=_(),C=r("p"),nt=f("The app (or website) is "),we=r("span"),ot=f("for something"),it=f(`.\r
						Make it as\r
						`),ye=r("span"),ct=f("intuitive and efficient"),dt=f(`\r
						as possible to `),Ee=r("span"),ht=f("do that thing."),pt=_(),q=r("li"),$e=r("h2"),ft=f("Leverage visual intelligence."),vt=_(),B=r("p"),mt=f("Augment words and iconography with "),ke=r("span"),ut=f("color"),gt=f(`\r
						and structure - `),Ie=r("span"),xt=f("draw the eye"),_t=f(` to key points\r
						and relationships. Effectively use negative space, layout and structure, diagrams and images\r
						to communicate beyond mere words.`),bt=_(),F=r("div"),G=r("div"),je=r("h2"),wt=f("Recent posts"),yt=_();for(let c=0;c<y.length;c+=1)y[c].c();Et=_(),M=r("div"),te=r("a"),$t=f("View more articles"),kt=_(),Se=r("div"),fe(le.$$.fragment),It=_(),Ae=r("div"),fe(se.$$.fragment),jt=_(),Pe=r("div"),fe(ae.$$.fragment),St=_(),De=r("section"),U=r("p"),Ve=r("span"),At=f(`\u201CIf a system is to serve the creative spirit, it must be entirely comprehensible to a\r
				single individual.\u201D`),Pt=_(),Dt=r("br"),He=r("span"),Vt=f("Daniel H. H. Ingalls"),Ht=_(),Q=r("section"),J=r("div"),Ne=r("h2"),Nt=f("Selected Projects"),Mt=_(),T=r("h2"),re=r("a"),Tt=f("View more projects"),Lt=_(),Me=r("div"),fe(ne.$$.fragment),zt=_(),Te=r("div"),fe(oe.$$.fragment),Ct=_(),Le=r("div"),fe(ie.$$.fragment),Bt=_(),ce=r("div");for(let c=0;c<P.length;c+=1)P[c].c();this.h()},l(c){t=n(c,"MAIN",{class:!0});var $=a(t);o=n($,"SECTION",{class:!0});var d=a(o);i=n(d,"DIV",{class:!0});var L=a(i);u=n(L,"H1",{class:!0});var Wt=a(u);h=v(Wt,"Hi, I'm Mike."),Wt.forEach(l),w=b(L),k=n(L,"P",{class:!0});var K=a(k);D=v(K,`I'm a creative software developer, and this is my professional blog. I love\r
				`),A=n(K,"SPAN",{class:!0});var Yt=a(A);E=v(Yt,"user experience"),Yt.forEach(l),O=v(K,` and design that helps realize\r
				human potential. I follow a\r
				`),V=n(K,"SPAN",{class:!0});var qt=a(V);z=v(qt,"first-principles"),qt.forEach(l),ee=v(K,`\r
				approach in my life and my work. Here are a few of my\r
				`),j=n(K,"SPAN",{class:!0});var Ft=a(j);g=v(Ft,"design principles"),Ft.forEach(l),x=v(K,":"),K.forEach(l),I=b(L),m=n(L,"OL",{class:!0});var Ce=a(m);S=n(Ce,"LI",{class:!0});var We=a(S);H=n(We,"H2",{class:!0});var Qt=a(H);ge=v(Qt,"Never deny the user basic options."),Qt.forEach(l),xe=b(We),N=n(We,"P",{class:!0});var Ye=a(N);et=v(Ye,"Users should be provided the means to "),_e=n(Ye,"SPAN",{class:!0});var Jt=a(_e);tt=v(Jt,"customize the user interface"),Jt.forEach(l),lt=v(Ye," as much as possible."),Ye.forEach(l),We.forEach(l),st=b(Ce),Y=n(Ce,"LI",{class:!0});var qe=a(Y);be=n(qe,"H2",{class:!0});var Kt=a(be);at=v(Kt,"Minimize barriers to action."),Kt.forEach(l),rt=b(qe),C=n(qe,"P",{class:!0});var he=a(C);nt=v(he,"The app (or website) is "),we=n(he,"SPAN",{class:!0});var Xt=a(we);ot=v(Xt,"for something"),Xt.forEach(l),it=v(he,`.\r
						Make it as\r
						`),ye=n(he,"SPAN",{class:!0});var Zt=a(ye);ct=v(Zt,"intuitive and efficient"),Zt.forEach(l),dt=v(he,`\r
						as possible to `),Ee=n(he,"SPAN",{class:!0});var el=a(Ee);ht=v(el,"do that thing."),el.forEach(l),he.forEach(l),qe.forEach(l),pt=b(Ce),q=n(Ce,"LI",{class:!0});var Fe=a(q);$e=n(Fe,"H2",{class:!0});var tl=a($e);ft=v(tl,"Leverage visual intelligence."),tl.forEach(l),vt=b(Fe),B=n(Fe,"P",{class:!0});var Be=a(B);mt=v(Be,"Augment words and iconography with "),ke=n(Be,"SPAN",{class:!0});var ll=a(ke);ut=v(ll,"color"),ll.forEach(l),gt=v(Be,`\r
						and structure - `),Ie=n(Be,"SPAN",{class:!0});var sl=a(Ie);xt=v(sl,"draw the eye"),sl.forEach(l),_t=v(Be,` to key points\r
						and relationships. Effectively use negative space, layout and structure, diagrams and images\r
						to communicate beyond mere words.`),Be.forEach(l),Fe.forEach(l),Ce.forEach(l),L.forEach(l),bt=b(d),F=n(d,"DIV",{class:!0});var Qe=a(F);G=n(Qe,"DIV",{class:!0});var Je=a(G);je=n(Je,"H2",{class:!0});var al=a(je);wt=v(al,"Recent posts"),al.forEach(l),yt=b(Je);for(let pe=0;pe<y.length;pe+=1)y[pe].l(Je);Je.forEach(l),Et=b(Qe),M=n(Qe,"DIV",{class:!0});var X=a(M);te=n(X,"A",{href:!0,class:!0});var rl=a(te);$t=v(rl,"View more articles"),rl.forEach(l),kt=b(X),Se=n(X,"DIV",{class:!0});var nl=a(Se);ve(le.$$.fragment,nl),nl.forEach(l),It=b(X),Ae=n(X,"DIV",{class:!0});var ol=a(Ae);ve(se.$$.fragment,ol),ol.forEach(l),jt=b(X),Pe=n(X,"DIV",{class:!0});var il=a(Pe);ve(ae.$$.fragment,il),il.forEach(l),X.forEach(l),Qe.forEach(l),d.forEach(l),St=b($),De=n($,"SECTION",{class:!0});var cl=a(De);U=n(cl,"P",{class:!0});var Oe=a(U);Ve=n(Oe,"SPAN",{class:!0});var dl=a(Ve);At=v(dl,`\u201CIf a system is to serve the creative spirit, it must be entirely comprehensible to a\r
				single individual.\u201D`),dl.forEach(l),Pt=b(Oe),Dt=n(Oe,"BR",{}),He=n(Oe,"SPAN",{class:!0});var hl=a(He);Vt=v(hl,"Daniel H. H. Ingalls"),hl.forEach(l),Oe.forEach(l),cl.forEach(l),Ht=b($),Q=n($,"SECTION",{class:!0});var Ke=a(Q);J=n(Ke,"DIV",{class:!0});var Xe=a(J);Ne=n(Xe,"H2",{class:!0});var pl=a(Ne);Nt=v(pl,"Selected Projects"),pl.forEach(l),Mt=b(Xe),T=n(Xe,"H2",{class:!0});var Z=a(T);re=n(Z,"A",{href:!0,class:!0});var fl=a(re);Tt=v(fl,"View more projects"),fl.forEach(l),Lt=b(Z),Me=n(Z,"DIV",{class:!0});var vl=a(Me);ve(ne.$$.fragment,vl),vl.forEach(l),zt=b(Z),Te=n(Z,"DIV",{class:!0});var ml=a(Te);ve(oe.$$.fragment,ml),ml.forEach(l),Ct=b(Z),Le=n(Z,"DIV",{class:!0});var ul=a(Le);ve(ie.$$.fragment,ul),ul.forEach(l),Z.forEach(l),Xe.forEach(l),Bt=b(Ke),ce=n(Ke,"DIV",{class:!0});var gl=a(ce);for(let pe=0;pe<P.length;pe+=1)P[pe].l(gl);gl.forEach(l),Ke.forEach(l),$.forEach(l),this.h()},h(){s(u,"class","font-regular text-3xl lg:text-5xl  svelte-7dh29d"),s(A,"class","text-highlight color-1 svelte-7dh29d"),s(V,"class","text-highlight color-2 svelte-7dh29d"),s(j,"class","color-3 text-highlight svelte-7dh29d"),s(k,"class","intro-body text-xl xl:text-2xl font-thin svelte-7dh29d"),s(H,"class","li-heading font-extrabold italic text-xl color-3 leading-none md:text-2xl xl:text-3xl svelte-7dh29d"),s(_e,"class","italic color-1 font-medium svelte-7dh29d"),s(N,"class","li-snippet text-base lg:text-lg svelte-7dh29d"),s(S,"class","mt-4 svelte-7dh29d"),s(be,"class","li-heading font-extrabold italic text-xl color-3 leading-none md:text-2xl xl:text-3xl svelte-7dh29d"),s(we,"class","italic color-2 font-medium svelte-7dh29d"),s(ye,"class","italic color-1 font-medium svelte-7dh29d"),s(Ee,"class","italic color-2 font-medium svelte-7dh29d"),s(C,"class","li-snippet text-base lg:text-lg svelte-7dh29d"),s(Y,"class","mt-4 svelte-7dh29d"),s($e,"class","li-heading font-extrabold italic text-xl color-3 leading-none md:text-2xl xl:text-3xl svelte-7dh29d"),s(ke,"class","italic color-1 font-medium svelte-7dh29d"),s(Ie,"class","italic color-2 font-medium svelte-7dh29d"),s(B,"class","li-snippet text-base lg:text-lg svelte-7dh29d"),s(q,"class","mt-4 svelte-7dh29d"),s(m,"class","pl-7 mt-6 svelte-7dh29d"),s(i,"class","intro flex flex-col text-lg md:pr-12 lg:pr-18 xl:pr-24 xl:text-xl svelte-7dh29d"),s(je,"class","recent-label uppercase -mt-2 -mb-4 text-sky-300 text-md lg:text-lg"),s(G,"class","post w-full"),s(te,"href","/posts"),s(te,"class","view-more-link offset-4 no-underline  svelte-7dh29d"),s(Se,"class","icon-wrapper -top-[1px] xl:top-[1px] svelte-7dh29d"),s(Ae,"class","icon-wrapper -top-[1px] xl:top-[1px] svelte-7dh29d"),s(Pe,"class","icon-wrapper -top-[1px] xl:top-[1px] svelte-7dh29d"),s(M,"class","view-more text-base xl:text-lg text-right pr-4 relative flex flex-row justify-end text-sky-300 hover:text-sky-100 hover:decoration-2 transition svelte-7dh29d"),s(F,"class","posts-panel flex flex-col self-center mt-9 mx-0 w-full md:mt-0 svelte-7dh29d"),s(o,"class","articles md:grid md:articles-change w-full px-4 md:px-6 lg:px-0 self-center p-3"),s(Ve,"class","font-medium"),s(He,"class","font-bold text-lg author uppercase  svelte-7dh29d"),s(U,"class","statement text-3xl leading-relaxed font-bold italic text-center p-6 border-2 -mx-3 my-12 lg:m-0 lg:border-none border-amber-500 rounded-lg w-auto xl:w-4/5 xl:px-16 xl:leading-loose lg:text-4xl 2xl:w-3/4 2xl:text-4xl self-center py-12  svelte-7dh29d"),s(De,"class","flex flex-col w-full self-center text-center items-center justify-center px-8 lg:px-0"),s(Ne,"class","recent-label uppercase text-md lg:text-lg text-orange-200 mt-9 -mb-1 md:mb-0 xl:mb-2"),s(re,"href","/creative"),s(re,"class","view-more-link offset-4 pr-2 no-underline  svelte-7dh29d"),s(Me,"class","icon-wrapper -top-[1px] xl:top-[1px] svelte-7dh29d"),s(Te,"class","icon-wrapper -top-[1px] xl:top-[1px] svelte-7dh29d"),s(Le,"class","icon-wrapper -top-[1px] xl:top-[1px] svelte-7dh29d"),s(T,"class","view-more text-right text-base xl:text-lg pr-4 -mb-3 xl:-mb-0 md:-mb-2 relative flex flex-row justify-end transition text-orange-200 hover:text-white svelte-7dh29d"),s(J,"class","flex flex-row items-end justify-between"),s(ce,"class","projects-group md:grid w-full flex flex-col mb-12 svelte-7dh29d"),s(Q,"class","projects flex flex-col w-full justify-center px-4 md:px-6 lg:px-0 svelte-7dh29d"),s(t,"class","homepage bg-black flex flex-col self-center justify-items-center items-center w-full lg:text-sm lg:px-12 xl:px-24 2xl:w-4/5 2xl:px-12 3xl:w-3/4 3xl:px-36 mt-8 svelte-7dh29d")},m(c,$){Ge(c,t,$),e(t,o),e(o,i),e(i,u),e(u,h),e(i,w),e(i,k),e(k,D),e(k,A),e(A,E),e(k,O),e(k,V),e(V,z),e(k,ee),e(k,j),e(j,g),e(k,x),e(i,I),e(i,m),e(m,S),e(S,H),e(H,ge),e(S,xe),e(S,N),e(N,et),e(N,_e),e(_e,tt),e(N,lt),e(m,st),e(m,Y),e(Y,be),e(be,at),e(Y,rt),e(Y,C),e(C,nt),e(C,we),e(we,ot),e(C,it),e(C,ye),e(ye,ct),e(C,dt),e(C,Ee),e(Ee,ht),e(m,pt),e(m,q),e(q,$e),e($e,ft),e(q,vt),e(q,B),e(B,mt),e(B,ke),e(ke,ut),e(B,gt),e(B,Ie),e(Ie,xt),e(B,_t),e(o,bt),e(o,F),e(F,G),e(G,je),e(je,wt),e(G,yt);for(let d=0;d<y.length;d+=1)y[d].m(G,null);e(F,Et),e(F,M),e(M,te),e(te,$t),e(M,kt),e(M,Se),me(le,Se,null),e(M,It),e(M,Ae),me(se,Ae,null),e(M,jt),e(M,Pe),me(ae,Pe,null),e(t,St),e(t,De),e(De,U),e(U,Ve),e(Ve,At),e(U,Pt),e(U,Dt),e(U,He),e(He,Vt),e(t,Ht),e(t,Q),e(Q,J),e(J,Ne),e(Ne,Nt),e(J,Mt),e(J,T),e(T,re),e(re,Tt),e(T,Lt),e(T,Me),me(ne,Me,null),e(T,zt),e(T,Te),me(oe,Te,null),e(T,Ct),e(T,Le),me(ie,Le,null),e(Q,Bt),e(Q,ce);for(let d=0;d<P.length;d+=1)P[d].m(ce,null);Ue=!0,Rt||(Ut=Nl(window,"resize",p[6]),Rt=!0)},p(c,[$]){if($&2){de=c[1];let d;for(d=0;d<de.length;d+=1){const L=kl(c,de,d);y[d]?(y[d].p(L,$),R(y[d],1)):(y[d]=Il(L),y[d].c(),R(y[d],1),y[d].m(G,null))}for(Cl(),d=de.length;d<y.length;d+=1)Al(d);Ml()}if($&4){ze=c[2];let d;for(d=0;d<ze.length;d+=1){const L=El(c,ze,d);P[d]?P[d].p(L,$):(P[d]=Sl(L),P[d].c(),P[d].m(ce,null))}for(;d<P.length;d+=1)P[d].d(1);P.length=ze.length}},i(c){if(!Ue){for(let $=0;$<de.length;$+=1)R(y[$]);R(le.$$.fragment,c),R(se.$$.fragment,c),R(ae.$$.fragment,c),R(ne.$$.fragment,c),R(oe.$$.fragment,c),R(ie.$$.fragment,c),Ue=!0}},o(c){y=y.filter(Boolean);for(let $=0;$<y.length;$+=1)W(y[$]);W(le.$$.fragment,c),W(se.$$.fragment,c),W(ae.$$.fragment,c),W(ne.$$.fragment,c),W(oe.$$.fragment,c),W(ie.$$.fragment,c),Ue=!1},d(c){c&&l(t),Gt(y,c),ue(le),ue(se),ue(ae),ue(ne),ue(oe),ue(ie),Gt(P,c),Rt=!1,Ut()}}}const Kl=async({fetch:p})=>{const t=await p("../posts.json");if(t.ok){const{posts:o}=await t.json();return{props:{posts:o}}}};function Wl(p,t,o){let i,u;Tl(p,Bl,E=>o(5,u=E)),Ll(()=>{});let{posts:h}=t,w=h==null?void 0:h.slice(0,3);console.log("\u{1F680} ~ file: index.svelte ~ line 4 ~ posts",h);let k=[{name:"MetaBrain.io",url:"./creative/sketch01",tags:["knowledge management app","GraphQL/DB","LMS"],desc:"A knowledge tracking platform for life. Research, track, organize, curate, plan, analyze, schedule, do. One app to rule them all.",component:!1},{name:"Super Tic-Tac-Toe",url:"./creative/sketch02",tags:["Svelte/Sapper","game","(S)CSS"],desc:"Inspired by pen-and-paper with my daughter. Tic-Tac-Toe on steroids. Choose an emoji, configure your gameboard and rules, and have at it with up to 8 players.",component:!1},{name:"Creative Coding",url:"./creative/sketch03",tags:["creative coding","generative art","javascript"],desc:"Fulfilling a lifelong passion for beauty, and exploring the relationships between form, movement and number.",component:Rl}],D;function A(){o(0,D=window.innerWidth)}return p.$$set=E=>{"posts"in E&&o(3,h=E.posts)},p.$$.update=()=>{p.$$.dirty&32&&o(4,i=u.path),p.$$.dirty&16&&console.log("\u{1F680} ~ file: index.svelte ~ line 24 ~ path",i)},[D,w,k,h,i,u,A]}class Xl extends xl{constructor(t){super();_l(this,t,Wl,Ul,bl,{posts:3})}}export{Xl as default,Kl as load};