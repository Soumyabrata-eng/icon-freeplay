/* Service Worker */ if('serviceWorker' in navigator){window.addEventListener('load',()=>{navigator.serviceWorker.register('/sw.js').then(registration=>{console.log('ServiceWorker registeration successful')}).catch(registrationError=>{console.log('ServiceWorker registration failed: ', registrationError)})})}; 

/* Auto theme changer */
const themes=[ "theme0", "theme1", "theme2", "theme3", "theme4", "theme5", "theme6", "theme7", "theme8", "theme9", "theme10"];let currentTheme=0;function changeTheme(){
webTheme(themes[currentTheme]); currentTheme=(currentTheme + 1) % themes.length; } 

/* Safelink Settings */ var aSl={par:"url",hcd:5000,gcd:15000,nwt:false,sby:"published",mxr:20,pwt:"Getting your link..."};

/* Safelink */ function _0x1541(t,n){var e=_0x4a4c();return(_0x1541=function(t,n){return e[t=+t]})(t,n)}function _0x4a4c(){var t=[".safeL","location","hash","includes","split","get","length","click","preventDefault","target","getAttribute","href","par","nwt","open","_blank","dec","replace","feeds/posts/summary?alt=json&orderby=","&max-results=","sSS","toString","indexOf","history","replaceState","title","feed","entry","floor","random","alternate","link","hmVrfy","hidden","#hmVrfy .pstL","alt","No post was found","SAFE_L","true","gSS","gcd",".safeGoL","setAttribute","vsbl","innerHTML","pwt","rSS"];return(_0x4a4c=function(){return t})()}!function(){var t=224,n=230,e=255,r=236,a=229,l=240,i=246,u=257,o=249,s=236,c=94,S=263,d=242,f=243,x=225,_=244,h=245,v=103,g=89,w=239,p=246,b=81,m=88,L=248,q=96,y=86,C=275,P=261,A=73,E=72,M=264,k=261,T=252,G=71,N=70,U=233,j=235,F=237,I=81,O=69,V=108,B=102,D=68,H=218,J=231,R=329,W=66,z=278,K=52,Q=440,X=462,Y=223,Z=439,$=462,tt=926,nt=916,et=416,rt=249,at=238,lt=418,it=724,ut=737,ot=35,st=53,ct=736,St=755,dt=735,ft=777,xt=757,_t=741,ht=757,vt=38,gt=45,wt=751,pt=732,bt=752,mt=731,Lt=739,qt=730,yt=729,Ct=22,Pt=8,At=763,Et=770,Mt=754,kt=747,Tt=112,Gt=116,Nt=758,Ut=753,jt=499,Ft=477,It=504,Ot=514,Vt=224,Bt=111;function Dt(t,n){return _0x1541(n- -Bt,t)}function Ht(t,n){return _0x1541(n-Vt,t)}var Jt,Rt,Wt,zt,Kt=qSell(Ht(208,t));function Qt(t){var e=498;const n=window[r(jt,Ft)][r(500,483)];function r(t,n){return _0x1541(t-e,n)}if(n&&n[r(501,It)]("=")&&n[r(502,518)](/=(.*)/s)[0]=="#?"+t&&""!=n.split(/=(.*)/s)[1])return window[r(499,Ot)].hash.split(/=(.*)/s)[1]}function Xt(t){var n=window[_0x1541(Gt-115,Tt)].search;const e=new URLSearchParams(n);return e.has(t)?e[_0x1541(Nt-753,Ut)](t):void 0}0<Kt[Ht(245,n)]&&Kt.forEach(t=>{var a=448,l=449,i=447,u=427,o=160,s=144,c=138,S=422,d=147,f=134,x=454,_=441,h=465,v=455,g=456;t.addEventListener(_0x1541(Mt-kt,Et),function(t){function n(t,n){return _0x1541(n- -147,t)}function e(t,n){return _0x1541(t- -g,n)}t[e(-a,-l)]();var r=t[e(-i,-u)][n(-158,-137)](n(-o,-136)),t=t[n(-s,-c)].getAttribute("data-href");null!=(t=null!=r&&"/"!=r&&"#"!=r&&""!=r?r:null!=t&&"#"!=t&&""!=t?t:void 0)&&(t=b64.enc(t),t=blogUrl+"#?"+aSl[e(-444,-S)]+"="+t,1==aSl[n(-d,-f)]?window[e(-442,-x)](t,e(-_,-h)):window.location[e(-445,-v)]=t)})}),null==Qt(aSl[Ht(e,r)])&&null==Xt(aSl.par)||(Kt=null!=Qt(aSl[Dt(-98,-99)])?b64[Ht(a,l)](Qt(aSl[Ht(i,r)])):b64[Ht(u,l)](Xt(aSl[Ht(o,s)])),Jt=blogUrl[Dt(-92,-c)](/.*?:\/\//g,"//")+Ht(S,d)+aSl.sby+Ht(S,f)+aSl.mxr,Pu[Ht(x,_)]("SAFE_L",Kt),0<(Kt=window[Dt(-129,-110)][Ht(t,h)]())[Dt(-v,-g)]("#")&&(Kt=Kt.substring(0,Kt[Ht(w,p)]("#")),window[Dt(-b,-m)][Ht(242,L)]({},document[Dt(-q,-y)],Kt)),Pu.gAj({url:Jt,async:!0,success:function(t){var n=956,e=713;function r(t,n){return _0x1541(n- -At,t)}function a(t,n){return _0x1541(t-Pt,n)}if((t=JSON.parse(t)[r(-it,-ut)]).entry&&0!==t[a(ot,st)].length){for(var l,i,u=(t=t[r(-725,-ct)])[Math[r(-St,-dt)](Math[a(37,49)]()*t[r(-ft,-xt)])],o=0,s=u.link[r(-_t,-ht)];o<s;o++)a(vt,gt)==(i=u[r(-wt,-pt)][o]).rel&&(l=i.href);remCt(getid(r(-bt,-mt)),r(-Lt,-qt)),qSel(r(-749,-yt)).href=l,setTimeout(function(){addCt(getid(_0x1541(-961- -993,-n)),_0x1541(-678- -e,-657))},aSl.hcd)}else toastNotif(a(44,Ct))}})),null!=Pu.gSS(Ht(C,P))&&Dt(-69,-A)==isPost&&(Jt=Pu[Dt(-60,-E)](Ht(M,k)),Rt=Math[Ht(239,T)](aSl[Dt(-E,-G)]/1e3),Wt=Rt,qSel(Dt(-74,-N))[Ht(U,j)]=Jt,1==aSl[Ht(243,F)]&&qSel(".safeGoL")[Dt(-I,-O)](Dt(-V,-B),Ht(t,239)),addCt(getid("aSlCnt"),Dt(-49,-D)),zt=setInterval(function(){var t=193,n=246,e=--Wt/Rt*100;function r(t,n){return _0x1541(n-lt,t)}qSel(".aSlW").style.width=100-e+"%",qSel(".aSlCd")[r(Q,X)]=Math[_0x1541(-218- -n,-Y)](Wt),Wt<=0&&(clearInterval(zt),qSel(".aSlCd")[r(Z,$)]="0",setTimeout(()=>{qSel(".aSlC")[_0x1541(et-372,396)]=aSl[_0x1541(at-t,rt)]},1e3),setTimeout(()=>{var t=959;addCt(qSel(".aSlB"),_0x1541(-nt- -t,-tt)),addCt(getid("aSlCnt"),"alt")},4e3))},1e3),qSel(".safeGoL").addEventListener(Ht(H,J),function(){Pu[_0x1541(324-z,R)](_0x1541(89-K,W))}))}();

/* Lazy js */ function lazyCustomJs(){ if(getid('HTML2')!=null){ctgryPst(ctgryLb1, '#HTML2 .ctgry', 6, 600, 200, true);if(getid('HTML3')!=null){ctgryPst(ctgryLb2, '#HTML3 .ctgry', 6, 600, 200, true)}} qSell("div.pre").forEach((el, i) => { addCt(el, "hl") })};

/* Codebox js */ eval(function(e,n,t,r,i,o){if(i=function(e){return e.toString(34)},!"".replace(/^/,String)){for(;t--;)o[i(t)]=r[t]||i(t);r=[function(e){return o[e]}],i=function(){return"\\w+"},t=1}for(;t--;)r[t]&&(e=e.replace(new RegExp("\\b"+i(t)+"\\b","g"),r[t]));return e}("7 4(a){1 b=2.8('9');b.c=a;2.d.e(b)}4('f://g.h.j/k/l/m@n/o/p/5/6.q.5');1 3=2.r(\"s.6\");t(1 i=0;i<3.u;i++){3[i].v.w(\"x\")}",0,34,"|var|document|element|loadJs|js|pre|function|createElement|script|||src|head|appendChild|https|cdn|jsdelivr||net|gh|fineshopdesign|blogger|main|assets|codeBox|min|querySelectorAll|div|for|length|classList|add|fd".split("|"),0,{}));

/* Lazy (Scroll) JavaScripts, do not remove function */ function scrollCustomJs(){};
