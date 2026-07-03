var Rm=Object.defineProperty;var Pm=(r,t,e)=>t in r?Rm(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var bt=(r,t,e)=>Pm(r,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();function Di(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function hd(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Vn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},zo={duration:.5,overwrite:!1,delay:0},Iu,tn,we,jn=1e8,Se=1/jn,wc=Math.PI*2,Lm=wc/4,Dm=0,fd=Math.sqrt,Im=Math.cos,Um=Math.sin,Ze=function(t){return typeof t=="string"},De=function(t){return typeof t=="function"},ki=function(t){return typeof t=="number"},Uu=function(t){return typeof t>"u"},Ei=function(t){return typeof t=="object"},yn=function(t){return t!==!1},Nu=function(){return typeof window<"u"},sa=function(t){return De(t)||Ze(t)},dd=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},ln=Array.isArray,Nm=/random\([^)]+\)/g,Om=/,\s*/g,xh=/(?:-?\.?\d|\.)+/gi,pd=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,As=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Bl=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,md=/[+-]=-?[.\d]+/,Fm=/[^,'"\[\]\s]+/gi,Bm=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Re,hi,Ac,Ou,Gn={},al={},_d,gd=function(t){return(al=Vs(t,Gn))&&Cn},Fu=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},Ho=function(t,e){return!e&&console.warn(t)},vd=function(t,e){return t&&(Gn[t]=e)&&al&&(al[t]=e)||Gn},Vo=function(){return 0},km={suppressEvents:!0,isStart:!0,kill:!1},Wa={suppressEvents:!0,kill:!1},zm={suppressEvents:!0},Bu={},or=[],Cc={},xd,Nn={},kl={},Sh=30,Xa=[],ku="",zu=function(t){var e=t[0],n,i;if(Ei(e)||De(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=Xa.length;i--&&!Xa[i].targetTest(e););n=Xa[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new Hd(t[i],n)))||t.splice(i,1);return t},zr=function(t){return t._gsap||zu(Jn(t))[0]._gsap},Sd=function(t,e,n){return(n=t[e])&&De(n)?t[e]():Uu(n)&&t.getAttribute&&t.getAttribute(e)||n},En=function(t,e){return(t=t.split(",")).forEach(e)||t},Ue=function(t){return Math.round(t*1e5)/1e5||0},Ce=function(t){return Math.round(t*1e7)/1e7||0},Ds=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},Hm=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},ll=function(){var t=or.length,e=or.slice(0),n,i;for(Cc={},or.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Hu=function(t){return!!(t._initted||t._startAt||t.add)},Md=function(t,e,n,i){or.length&&!tn&&ll(),t.render(e,n,!!(tn&&e<0&&Hu(t))),or.length&&!tn&&ll()},yd=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(Fm).length<2?e:Ze(t)?t.trim():t},Ed=function(t){return t},Wn=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},Vm=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},Vs=function(t,e){for(var n in e)t[n]=e[n];return t},Mh=function r(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=Ei(e[n])?r(t[n]||(t[n]={}),e[n]):e[n]);return t},cl=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},Ao=function(t){var e=t.parent||Re,n=t.keyframes?Vm(ln(t.keyframes)):Wn;if(yn(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},Gm=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},Td=function(t,e,n,i,s){var o=t[i],a;if(s)for(a=e[s];o&&o[s]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=o,e.parent=e._dp=t,e},wl=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e._prev,o=e._next;s?s._next=o:t[n]===e&&(t[n]=o),o?o._prev=s:t[i]===e&&(t[i]=s),e._next=e._prev=e.parent=null},hr=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Hr=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},Wm=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},Rc=function(t,e,n,i){return t._startAt&&(tn?t._startAt.revert(Wa):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},Xm=function r(t){return!t||t._ts&&r(t.parent)},yh=function(t){return t._repeat?Gs(t._tTime,t=t.duration()+t._rDelay)*t:0},Gs=function(t,e){var n=Math.floor(t=Ce(t/e));return t&&n===t?n-1:n},ul=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Al=function(t){return t._end=Ce(t._start+(t._tDur/Math.abs(t._ts||t._rts||Se)||0))},Cl=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=Ce(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Al(t),n._dirty||Hr(n,t)),t},bd=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=ul(t.rawTime(),e),(!e._dur||Jo(0,e.totalDuration(),n)-e._tTime>Se)&&e.render(n,!0)),Hr(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-Se}},gi=function(t,e,n,i){return e.parent&&hr(e),e._start=Ce((ki(n)?n:n||t!==Re?qn(t,n,e):t._time)+e._delay),e._end=Ce(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Td(t,e,"_first","_last",t._sort?"_start":0),Pc(e)||(t._recent=e),i||bd(t,e),t._ts<0&&Cl(t,t._tTime),t},wd=function(t,e){return(Gn.ScrollTrigger||Fu("scrollTrigger",e))&&Gn.ScrollTrigger.create(e,t)},Ad=function(t,e,n,i,s){if(Gu(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!tn&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&xd!==Bn.frame)return or.push(t),t._lazy=[s,i],1},Ym=function r(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||r(e))},Pc=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},qm=function(t,e,n,i){var s=t.ratio,o=e<0||!e&&(!t._start&&Ym(t)&&!(!t._initted&&Pc(t))||(t._ts<0||t._dp._ts<0)&&!Pc(t))?0:1,a=t._rDelay,l=0,c,u,f;if(a&&t._repeat&&(l=Jo(0,t._tDur,e),u=Gs(l,a),t._yoyo&&u&1&&(o=1-o),u!==Gs(t._tTime,a)&&(s=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==s||tn||i||t._zTime===Se||!e&&t._zTime){if(!t._initted&&Ad(t,e,i,n,l))return;for(f=t._zTime,t._zTime=e||(n?Se:0),n||(n=e&&!f),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,c=t._pt;c;)c.r(o,c.d),c=c._next;e<0&&Rc(t,e,n,!0),t._onUpdate&&!n&&zn(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&zn(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&hr(t,1),!n&&!tn&&(zn(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},$m=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},Ws=function(t,e,n,i){var s=t._repeat,o=Ce(e)||0,a=t._tTime/t._tDur;return a&&!i&&(t._time*=o/t._dur),t._dur=o,t._tDur=s?s<0?1e10:Ce(o*(s+1)+t._rDelay*s):o,a>0&&!i&&Cl(t,t._tTime=t._tDur*a),t.parent&&Al(t),n||Hr(t.parent,t),t},Eh=function(t){return t instanceof Sn?Hr(t):Ws(t,t._dur)},Km={_start:0,endTime:Vo,totalDuration:Vo},qn=function r(t,e,n){var i=t.labels,s=t._recent||Km,o=t.duration()>=jn?s.endTime(!1):t._dur,a,l,c;return Ze(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",a=e.indexOf("="),l==="<"||l===">"?(a>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(e in i||(i[e]=o),i[e]):(l=parseFloat(e.charAt(a-1)+e.substr(a+1)),c&&n&&(l=l/100*(ln(n)?n[0]:n).totalDuration()),a>1?r(t,e.substr(0,a-1),n)+l:o+l)):e==null?o:+e},Co=function(t,e,n){var i=ki(e[1]),s=(i?2:1)+(t<2?0:1),o=e[s],a,l;if(i&&(o.duration=e[1]),o.parent=n,t){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=yn(l.vars.inherit)&&l.parent;o.immediateRender=yn(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[s-1]}return new ke(e[0],o,e[s+1])},_r=function(t,e){return t||t===0?e(t):e},Jo=function(t,e,n){return n<t?t:n>e?e:n},on=function(t,e){return!Ze(t)||!(e=Bm.exec(t))?"":e[1]},Zm=function(t,e,n){return _r(n,function(i){return Jo(t,e,i)})},Lc=[].slice,Cd=function(t,e){return t&&Ei(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Ei(t[0]))&&!t.nodeType&&t!==hi},jm=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var s;return Ze(i)&&!e||Cd(i,1)?(s=n).push.apply(s,Jn(i)):n.push(i)})||n},Jn=function(t,e,n){return we&&!e&&we.selector?we.selector(t):Ze(t)&&!n&&(Ac||!Xs())?Lc.call((e||Ou).querySelectorAll(t),0):ln(t)?jm(t,n):Cd(t)?Lc.call(t,0):t?[t]:[]},Dc=function(t){return t=Jn(t)[0]||Ho("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return Jn(e,n.querySelectorAll?n:n===t?Ho("Invalid scope")||Ou.createElement("div"):t)}},Rd=function(t){return t.sort(function(){return .5-Math.random()})},Pd=function(t){if(De(t))return t;var e=Ei(t)?t:{each:t},n=Vr(e.ease),i=e.from||0,s=parseFloat(e.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=e.axis,u=i,f=i;return Ze(i)?u=f={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(u=i[0],f=i[1]),function(h,d,g){var _=(g||e).length,p=o[_],m,y,x,M,A,w,T,C,S;if(!p){if(S=e.grid==="auto"?0:(e.grid||[1,jn])[1],!S){for(T=-jn;T<(T=g[S++].getBoundingClientRect().left)&&S<_;);S<_&&S--}for(p=o[_]=[],m=l?Math.min(S,_)*u-.5:i%S,y=S===jn?0:l?_*f/S-.5:i/S|0,T=0,C=jn,w=0;w<_;w++)x=w%S-m,M=y-(w/S|0),p[w]=A=c?Math.abs(c==="y"?M:x):fd(x*x+M*M),A>T&&(T=A),A<C&&(C=A);i==="random"&&Rd(p),p.max=T-C,p.min=C,p.v=_=(parseFloat(e.amount)||parseFloat(e.each)*(S>_?_-1:c?c==="y"?_/S:S:Math.max(S,_/S))||0)*(i==="edges"?-1:1),p.b=_<0?s-_:s,p.u=on(e.amount||e.each)||0,n=n&&_<0?u_(n):n}return _=(p[h]-p.min)/p.max||0,Ce(p.b+(n?n(_):_)*p.v)+p.u}},Ic=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=Ce(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(ki(n)?0:on(n))}},Ld=function(t,e){var n=ln(t),i,s;return!n&&Ei(t)&&(i=n=t.radius||jn,t.values?(t=Jn(t.values),(s=!ki(t[0]))&&(i*=i)):t=Ic(t.increment)),_r(e,n?De(t)?function(o){return s=t(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=jn,u=0,f=t.length,h,d;f--;)s?(h=t[f].x-a,d=t[f].y-l,h=h*h+d*d):h=Math.abs(t[f]-a),h<c&&(c=h,u=f);return u=!i||c<=i?t[u]:o,s||u===o||ki(o)?u:u+on(o)}:Ic(t))},Dd=function(t,e,n,i){return _r(ln(t)?!e:n===!0?!!(n=0):!i,function(){return ln(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},Jm=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(s,o){return o(s)},i)}},Qm=function(t,e){return function(n){return t(parseFloat(n))+(e||on(n))}},t_=function(t,e,n){return Ud(t,e,0,1,n)},Id=function(t,e,n){return _r(n,function(i){return t[~~e(i)]})},e_=function r(t,e,n){var i=e-t;return ln(t)?Id(t,r(0,t.length),e):_r(n,function(s){return(i+(s-t)%i)%i+t})},n_=function r(t,e,n){var i=e-t,s=i*2;return ln(t)?Id(t,r(0,t.length-1),e):_r(n,function(o){return o=(s+(o-t)%s)%s||0,t+(o>i?s-o:o)})},Go=function(t){return t.replace(Nm,function(e){var n=e.indexOf("[")+1,i=e.substring(n||7,n?e.indexOf("]"):e.length-1).split(Om);return Dd(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},Ud=function(t,e,n,i,s){var o=e-t,a=i-n;return _r(s,function(l){return n+((l-t)/o*a||0)})},i_=function r(t,e,n,i){var s=isNaN(t+e)?0:function(d){return(1-d)*t+d*e};if(!s){var o=Ze(t),a={},l,c,u,f,h;if(n===!0&&(i=1)&&(n=null),o)t={p:t},e={p:e};else if(ln(t)&&!ln(e)){for(u=[],f=t.length,h=f-2,c=1;c<f;c++)u.push(r(t[c-1],t[c]));f--,s=function(g){g*=f;var _=Math.min(h,~~g);return u[_](g-_)},n=e}else i||(t=Vs(ln(t)?[]:{},t));if(!u){for(l in e)Vu.call(a,t,l,"get",e[l]);s=function(g){return Yu(g,a)||(o?t.p:t)}}}return _r(n,s)},Th=function(t,e,n){var i=t.labels,s=jn,o,a,l;for(o in i)a=i[o]-e,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},zn=function(t,e,n){var i=t.vars,s=i[e],o=we,a=t._ctx,l,c,u;if(s)return l=i[e+"Params"],c=i.callbackScope||t,n&&or.length&&ll(),a&&(we=a),u=l?s.apply(c,l):s.call(c),we=o,u},xo=function(t){return hr(t),t.scrollTrigger&&t.scrollTrigger.kill(!!tn),t.progress()<1&&zn(t,"onInterrupt"),t},Cs,Nd=[],Od=function(t){if(t)if(t=!t.name&&t.default||t,Nu()||t.headless){var e=t.name,n=De(t),i=e&&!n&&t.init?function(){this._props=[]}:t,s={init:Vo,render:Yu,add:Vu,kill:S_,modifier:x_,rawVars:0},o={targetTest:0,get:0,getSetter:Xu,aliases:{},register:0};if(Xs(),t!==i){if(Nn[e])return;Wn(i,Wn(cl(t,s),o)),Vs(i.prototype,Vs(s,cl(t,o))),Nn[i.prop=e]=i,t.targetTest&&(Xa.push(i),Bu[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}vd(e,i),t.register&&t.register(Cn,i,Tn)}else Nd.push(t)},xe=255,So={aqua:[0,xe,xe],lime:[0,xe,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,xe],navy:[0,0,128],white:[xe,xe,xe],olive:[128,128,0],yellow:[xe,xe,0],orange:[xe,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[xe,0,0],pink:[xe,192,203],cyan:[0,xe,xe],transparent:[xe,xe,xe,0]},zl=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*xe+.5|0},Fd=function(t,e,n){var i=t?ki(t)?[t>>16,t>>8&xe,t&xe]:0:So.black,s,o,a,l,c,u,f,h,d,g;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),So[t])i=So[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+s+s+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&xe,i&xe,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&xe,t&xe]}else if(t.substr(0,3)==="hsl"){if(i=g=t.match(xh),!e)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,i.length>3&&(i[3]*=1),i[0]=zl(l+1/3,s,o),i[1]=zl(l,s,o),i[2]=zl(l-1/3,s,o);else if(~t.indexOf("="))return i=t.match(pd),n&&i.length<4&&(i[3]=1),i}else i=t.match(xh)||So.transparent;i=i.map(Number)}return e&&!g&&(s=i[0]/xe,o=i[1]/xe,a=i[2]/xe,f=Math.max(s,o,a),h=Math.min(s,o,a),u=(f+h)/2,f===h?l=c=0:(d=f-h,c=u>.5?d/(2-f-h):d/(f+h),l=f===s?(o-a)/d+(o<a?6:0):f===o?(a-s)/d+2:(s-o)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},Bd=function(t){var e=[],n=[],i=-1;return t.split(ar).forEach(function(s){var o=s.match(As)||[];e.push.apply(e,o),n.push(i+=o.length+1)}),e.c=n,e},bh=function(t,e,n){var i="",s=(t+i).match(ar),o=e?"hsla(":"rgba(",a=0,l,c,u,f;if(!s)return t;if(s=s.map(function(h){return(h=Fd(h,e,1))&&o+(e?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),n&&(u=Bd(t),l=n.c,l.join(i)!==u.c.join(i)))for(c=t.replace(ar,"1").split(As),f=c.length-1;a<f;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=t.split(ar),f=c.length-1;a<f;a++)i+=c[a]+s[a];return i+c[f]},ar=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in So)r+="|"+t+"\\b";return new RegExp(r+")","gi")}(),r_=/hsl[a]?\(/,kd=function(t){var e=t.join(" "),n;if(ar.lastIndex=0,ar.test(e))return n=r_.test(e),t[1]=bh(t[1],n),t[0]=bh(t[0],n,Bd(t[1])),!0},Wo,Bn=function(){var r=Date.now,t=500,e=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,u,f,h,d,g=function _(p){var m=r()-i,y=p===!0,x,M,A,w;if((m>t||m<0)&&(n+=m-e),i+=m,A=i-n,x=A-o,(x>0||y)&&(w=++f.frame,h=A-f.time*1e3,f.time=A=A/1e3,o+=x+(x>=s?4:s-x),M=1),y||(l=c(_)),M)for(d=0;d<a.length;d++)a[d](A,h,w,p)};return f={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(p){return h/(1e3/(p||60))},wake:function(){_d&&(!Ac&&Nu()&&(hi=Ac=window,Ou=hi.document||{},Gn.gsap=Cn,(hi.gsapVersions||(hi.gsapVersions=[])).push(Cn.version),gd(al||hi.GreenSockGlobals||!hi.gsap&&hi||{}),Nd.forEach(Od)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),c=u||function(p){return setTimeout(p,o-f.time*1e3+1|0)},Wo=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Wo=0,c=Vo},lagSmoothing:function(p,m){t=p||1/0,e=Math.min(m||33,t)},fps:function(p){s=1e3/(p||240),o=f.time*1e3+s},add:function(p,m,y){var x=m?function(M,A,w,T){p(M,A,w,T),f.remove(x)}:p;return f.remove(p),a[y?"unshift":"push"](x),Xs(),x},remove:function(p,m){~(m=a.indexOf(p))&&a.splice(m,1)&&d>=m&&d--},_listeners:a},f}(),Xs=function(){return!Wo&&Bn.wake()},re={},s_=/^[\d.\-M][\d.\-,\s]/,o_=/["']/g,a_=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),e[i]=isNaN(c)?c.replace(o_,"").trim():+c,i=l.substr(a+1).trim();return e},l_=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},c_=function(t){var e=(t+"").split("("),n=re[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[a_(e[1])]:l_(t).split(",").map(yd)):re._CE&&s_.test(t)?re._CE("",t):n},u_=function(t){return function(e){return 1-t(1-e)}},Vr=function(t,e){return t&&(De(t)?t:re[t]||c_(t))||e},Qr=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:i},o;return En(t,function(a){re[a]=Gn[a]=s,re[o=a.toLowerCase()]=n;for(var l in s)re[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=re[a+"."+l]=s[l]}),s},zd=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Hl=function r(t,e,n){var i=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),o=s/wc*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*Um((u-o)*s)+1},l=t==="out"?a:t==="in"?function(c){return 1-a(1-c)}:zd(a);return s=wc/s,l.config=function(c,u){return r(t,c,u)},l},Vl=function r(t,e){e===void 0&&(e=1.70158);var n=function(o){return o?--o*o*((e+1)*o+e)+1:0},i=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:zd(n);return i.config=function(s){return r(t,s)},i};En("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,t){var e=t<5?t+1:t;Qr(r+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});re.Linear.easeNone=re.none=re.Linear.easeIn;Qr("Elastic",Hl("in"),Hl("out"),Hl());(function(r,t){var e=1/t,n=2*e,i=2.5*e,s=function(a){return a<e?r*a*a:a<n?r*Math.pow(a-1.5/t,2)+.75:a<i?r*(a-=2.25/t)*a+.9375:r*Math.pow(a-2.625/t,2)+.984375};Qr("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Qr("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});Qr("Circ",function(r){return-(fd(1-r*r)-1)});Qr("Sine",function(r){return r===1?1:-Im(r*Lm)+1});Qr("Back",Vl("in"),Vl("out"),Vl());re.SteppedEase=re.steps=Gn.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),s=e?1:0,o=1-Se;return function(a){return((i*Jo(0,o,a)|0)+s)*n}}};zo.ease=re["quad.out"];En("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return ku+=r+","+r+"Params,"});var Hd=function(t,e){this.id=Dm++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:Sd,this.set=e?e.getSetter:Xu},Xo=function(){function r(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Ws(this,+e.duration,1,1),this.data=e.data,we&&(this._ctx=we,we.data.push(this)),Wo||Bn.wake()}var t=r.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,Ws(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(Xs(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Cl(this,n),!s._dp||s.parent||bd(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&gi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Se||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Md(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+yh(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+yh(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Gs(this._tTime,s)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-Se?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?ul(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Se?0:this._rts,this.totalTime(Jo(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),Al(this),Wm(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Xs(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Se&&(this._tTime-=Se)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=Ce(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&gi(i,this,this._start-this._delay),this}return this._start},t.endTime=function(n){return this._start+(yn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?ul(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=zm);var i=tn;return tn=n,Hu(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),tn=i,this},t.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Eh(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Eh(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(qn(this,n),yn(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,yn(i)),this._dur||(this._zTime=-Se),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Se:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Se,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Se)},t.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},t.then=function(n){var i=this,s=i._prom;return new Promise(function(o){var a=De(n)?n:Ed,l=function(){var u=i.then;i.then=null,s&&s(),De(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=u),o(a),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},t.kill=function(){xo(this)},r}();Wn(Xo.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Se,_prom:0,_ps:!1,_rts:1});var Sn=function(r){hd(t,r);function t(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=yn(n.sortChildren),Re&&gi(n.parent||Re,Di(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&wd(Di(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(i,s,o){return Co(0,arguments,this),this},e.from=function(i,s,o){return Co(1,arguments,this),this},e.fromTo=function(i,s,o,a){return Co(2,arguments,this),this},e.set=function(i,s,o){return s.duration=0,s.parent=this,Ao(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new ke(i,s,qn(this,o),1),this},e.call=function(i,s,o){return gi(this,ke.delayedCall(0,i,s),o)},e.staggerTo=function(i,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new ke(i,o,qn(this,l)),this},e.staggerFrom=function(i,s,o,a,l,c,u){return o.runBackwards=1,Ao(o).immediateRender=yn(o.immediateRender),this.staggerTo(i,s,o,a,l,c,u)},e.staggerFromTo=function(i,s,o,a,l,c,u,f){return a.startAt=o,Ao(a).immediateRender=yn(a.immediateRender),this.staggerTo(i,s,a,l,c,u,f)},e.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:Ce(i),f=this._zTime<0!=i<0&&(this._initted||!c),h,d,g,_,p,m,y,x,M,A,w,T;if(this!==Re&&u>l&&i>=0&&(u=l),u!==this._tTime||o||f){if(a!==this._time&&c&&(u+=this._time-a,i+=this._time-a),h=u,M=this._start,x=this._ts,m=!x,f&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(w=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,s,o);if(h=Ce(u%p),u===l?(_=this._repeat,h=c):(A=Ce(u/p),_=~~A,_&&_===A&&(h=c,_--),h>c&&(h=c)),A=Gs(this._tTime,p),!a&&this._tTime&&A!==_&&this._tTime-A*p-this._dur<=0&&(A=_),w&&_&1&&(h=c-h,T=1),_!==A&&!this._lock){var C=w&&A&1,S=C===(w&&_&1);if(_<A&&(C=!C),a=C?0:u%c?c:u,this._lock=1,this.render(a||(T?0:Ce(_*p)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&zn(this,"onRepeat"),this.vars.repeatRefresh&&!T&&(this.invalidate()._lock=1,A=_),a&&a!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,S&&(this._lock=2,a=C?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!T&&this.invalidate()),this._lock=0,!this._ts&&!m)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=$m(this,Ce(a),Ce(h)),y&&(u-=h-(h=y._start))),this._tTime=u,this._time=h,this._act=!!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&u&&c&&!s&&!A&&(zn(this,"onStart"),this._tTime!==u))return this;if(h>=a&&i>=0)for(d=this._first;d;){if(g=d._next,(d._act||h>=d._start)&&d._ts&&y!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(h-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(h-d._start)*d._ts,s,o),h!==this._time||!this._ts&&!m){y=0,g&&(u+=this._zTime=-Se);break}}d=g}else{d=this._last;for(var v=i<0?i:h;d;){if(g=d._prev,(d._act||v<=d._end)&&d._ts&&y!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(v-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(v-d._start)*d._ts,s,o||tn&&Hu(d)),h!==this._time||!this._ts&&!m){y=0,g&&(u+=this._zTime=v?-Se:Se);break}}d=g}}if(y&&!s&&(this.pause(),y.render(h>=a?0:-Se)._zTime=h>=a?1:-1,this._ts))return this._start=M,Al(this),this.render(i,s,o);this._onUpdate&&!s&&zn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(M===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&hr(this,1),!s&&!(i<0&&!a)&&(u||a||!l)&&(zn(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,s){var o=this;if(ki(s)||(s=qn(this,s,i)),!(i instanceof Xo)){if(ln(i))return i.forEach(function(a){return o.add(a,s)}),this;if(Ze(i))return this.addLabel(i,s);if(De(i))i=ke.delayedCall(0,i);else return this}return this!==i?gi(this,i,s):this},e.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-jn);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof ke?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},e.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},e.remove=function(i){return Ze(i)?this.removeLabel(i):De(i)?this.killTweensOf(i):(i.parent===this&&wl(this,i),i===this._recent&&(this._recent=this._last),Hr(this))},e.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ce(Bn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},e.addLabel=function(i,s){return this.labels[i]=qn(this,s),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,s,o){var a=ke.delayedCall(0,s||Vo,o);return a.data="isPause",this._hasPause=1,gi(this,a,qn(this,i))},e.removePause=function(i){var s=this._first;for(i=qn(this,i);s;)s._start===i&&s.data==="isPause"&&hr(s),s=s._next},e.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)tr!==a[l]&&a[l].kill(i,s);return this},e.getTweensOf=function(i,s){for(var o=[],a=Jn(i),l=this._first,c=ki(s),u;l;)l instanceof ke?Hm(l._targets,a)&&(c?(!tr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},e.tweenTo=function(i,s){s=s||{};var o=this,a=qn(o,i),l=s,c=l.startAt,u=l.onStart,f=l.onStartParams,h=l.immediateRender,d,g=ke.to(o,Wn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Se,onStart:function(){if(o.pause(),!d){var p=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==p&&Ws(g,p,0,1).render(g._time,!0,!0),d=1}u&&u.apply(g,f||[])}},s));return h?g.render(0):g},e.tweenFromTo=function(i,s,o){return this.tweenTo(s,Wn({startAt:{time:qn(this,i)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),Th(this,qn(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),Th(this,qn(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Se)},e.shiftChildren=function(i,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(i=Ce(i);a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return Hr(this)},e.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Hr(this)},e.totalDuration=function(i){var s=0,o=this,a=o._last,l=jn,c,u,f;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(f=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,gi(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!f&&!o._dp||f&&f.smoothChildTiming)&&(o._start+=Ce(u/o._ts),o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;Ws(o,o===Re&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(i){if(Re._ts&&(Md(Re,ul(i,Re)),xd=Bn.frame),Bn.frame>=Sh){Sh+=Vn.autoSleep||120;var s=Re._first;if((!s||!s._ts)&&Vn.autoSleep&&Bn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Bn.sleep()}}},t}(Xo);Wn(Sn.prototype,{_lock:0,_hasPause:0,_forcing:0});var h_=function(t,e,n,i,s,o,a){var l=new Tn(this._pt,t,e,0,1,qd,null,s),c=0,u=0,f,h,d,g,_,p,m,y;for(l.b=n,l.e=i,n+="",i+="",(m=~i.indexOf("random("))&&(i=Go(i)),o&&(y=[n,i],o(y,t,e),n=y[0],i=y[1]),h=n.match(Bl)||[];f=Bl.exec(i);)g=f[0],_=i.substring(c,f.index),d?d=(d+1)%5:_.substr(-5)==="rgba("&&(d=1),g!==h[u++]&&(p=parseFloat(h[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:p,c:g.charAt(1)==="="?Ds(p,g)-p:parseFloat(g)-p,m:d&&d<4?Math.round:0},c=Bl.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(md.test(i)||m)&&(l.e=0),this._pt=l,l},Vu=function(t,e,n,i,s,o,a,l,c,u){De(i)&&(i=i(s||0,t,o));var f=t[e],h=n!=="get"?n:De(f)?c?t[e.indexOf("set")||!De(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():f,d=De(f)?c?__:Xd:Wu,g;if(Ze(i)&&(~i.indexOf("random(")&&(i=Go(i)),i.charAt(1)==="="&&(g=Ds(h,i)+(on(h)||0),(g||g===0)&&(i=g))),!u||h!==i||Uc)return!isNaN(h*i)&&i!==""?(g=new Tn(this._pt,t,e,+h||0,i-(h||0),typeof f=="boolean"?v_:Yd,0,d),c&&(g.fp=c),a&&g.modifier(a,this,t),this._pt=g):(!f&&!(e in t)&&Fu(e,i),h_.call(this,t,e,h,i,d,l||Vn.stringFilter,c))},f_=function(t,e,n,i,s){if(De(t)&&(t=Ro(t,s,e,n,i)),!Ei(t)||t.style&&t.nodeType||ln(t)||dd(t))return Ze(t)?Ro(t,s,e,n,i):t;var o={},a;for(a in t)o[a]=Ro(t[a],s,e,n,i);return o},Vd=function(t,e,n,i,s,o){var a,l,c,u;if(Nn[t]&&(a=new Nn[t]).init(s,a.rawVars?e[t]:f_(e[t],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new Tn(n._pt,s,t,0,1,a.render,a,0,a.priority),n!==Cs))for(c=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},tr,Uc,Gu=function r(t,e,n){var i=t.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,f=i.yoyoEase,h=i.keyframes,d=i.autoRevert,g=t._dur,_=t._startAt,p=t._targets,m=t.parent,y=m&&m.data==="nested"?m.vars.targets:p,x=t._overwrite==="auto"&&!Iu,M=t.timeline,A=i.easeReverse||f,w,T,C,S,v,P,U,I,z,Y,W,B,V;if(M&&(!h||!s)&&(s="none"),t._ease=Vr(s,zo.ease),t._rEase=A&&(Vr(A)||t._ease),t._from=!M&&!!i.runBackwards,t._from&&(t.ratio=1),!M||h&&!i.stagger){if(I=p[0]?zr(p[0]).harness:0,B=I&&i[I.prop],w=cl(i,Bu),_&&(_._zTime<0&&_.progress(1),e<0&&u&&a&&!d?_.render(-1,!0):_.revert(u&&g?Wa:km),_._lazy=0),o){if(hr(t._startAt=ke.set(p,Wn({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!_&&yn(l),startAt:null,delay:0,onUpdate:c&&function(){return zn(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(tn||!a&&!d)&&t._startAt.revert(Wa),a&&g&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(u&&g&&!_){if(e&&(a=!1),C=Wn({overwrite:!1,data:"isFromStart",lazy:a&&!_&&yn(l),immediateRender:a,stagger:0,parent:m},w),B&&(C[I.prop]=B),hr(t._startAt=ke.set(p,C)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(tn?t._startAt.revert(Wa):t._startAt.render(-1,!0)),t._zTime=e,!a)r(t._startAt,Se,Se);else if(!e)return}for(t._pt=t._ptCache=0,l=g&&yn(l)||l&&!g,T=0;T<p.length;T++){if(v=p[T],U=v._gsap||zu(p)[T]._gsap,t._ptLookup[T]=Y={},Cc[U.id]&&or.length&&ll(),W=y===p?T:y.indexOf(v),I&&(z=new I).init(v,B||w,t,W,y)!==!1&&(t._pt=S=new Tn(t._pt,v,z.name,0,1,z.render,z,0,z.priority),z._props.forEach(function(st){Y[st]=S}),z.priority&&(P=1)),!I||B)for(C in w)Nn[C]&&(z=Vd(C,w,t,W,v,y))?z.priority&&(P=1):Y[C]=S=Vu.call(t,v,C,"get",w[C],W,y,0,i.stringFilter);t._op&&t._op[T]&&t.kill(v,t._op[T]),x&&t._pt&&(tr=t,Re.killTweensOf(v,Y,t.globalTime(e)),V=!t.parent,tr=0),t._pt&&l&&(Cc[U.id]=1)}P&&$d(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!V,h&&e<=0&&M.render(jn,!0,!0)},d_=function(t,e,n,i,s,o,a,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],u,f,h,d;if(!c)for(c=t._ptCache[e]=[],h=t._ptLookup,d=t._targets.length;d--;){if(u=h[d][e],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==e&&u.fp!==e;)u=u._next;if(!u)return Uc=1,t.vars[e]="+=0",Gu(t,a),Uc=0,l?Ho(e+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(d=c.length;d--;)f=c[d],u=f._pt||f,u.s=(i||i===0)&&!s?i:u.s+(i||0)+o*u.c,u.c=n-u.s,f.e&&(f.e=Ue(n)+on(f.e)),f.b&&(f.b=u.s+on(f.b))},p_=function(t,e){var n=t[0]?zr(t[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return e;s=Vs({},e);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},m_=function(t,e,n,i){var s=e.ease||i||"power1.inOut",o,a;if(ln(e))a=n[t]||(n[t]=[]),e.forEach(function(l,c){return a.push({t:c/(e.length-1)*100,v:l,e:s})});else for(o in e)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:s})},Ro=function(t,e,n,i,s){return De(t)?t.call(e,n,i,s):Ze(t)&&~t.indexOf("random(")?Go(t):t},Gd=ku+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Wd={};En(Gd+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Wd[r]=1});var ke=function(r){hd(t,r);function t(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:Ao(i))||this;var l=a.vars,c=l.duration,u=l.delay,f=l.immediateRender,h=l.stagger,d=l.overwrite,g=l.keyframes,_=l.defaults,p=l.scrollTrigger,m=i.parent||Re,y=(ln(n)||dd(n)?ki(n[0]):"length"in i)?[n]:Jn(n),x,M,A,w,T,C,S,v;if(a._targets=y.length?zu(y):Ho("GSAP target "+n+" not found. https://gsap.com",!Vn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,g||h||sa(c)||sa(u)){i=a.vars;var P=i.easeReverse||i.yoyoEase;if(x=a.timeline=new Sn({data:"nested",defaults:_||{},targets:m&&m.data==="nested"?m.vars.targets:y}),x.kill(),x.parent=x._dp=Di(a),x._start=0,h||sa(c)||sa(u)){if(w=y.length,S=h&&Pd(h),Ei(h))for(T in h)~Gd.indexOf(T)&&(v||(v={}),v[T]=h[T]);for(M=0;M<w;M++)A=cl(i,Wd),A.stagger=0,P&&(A.easeReverse=P),v&&Vs(A,v),C=y[M],A.duration=+Ro(c,Di(a),M,C,y),A.delay=(+Ro(u,Di(a),M,C,y)||0)-a._delay,!h&&w===1&&A.delay&&(a._delay=u=A.delay,a._start+=u,A.delay=0),x.to(C,A,S?S(M,C,y):0),x._ease=re.none;x.duration()?c=u=0:a.timeline=0}else if(g){Ao(Wn(x.vars.defaults,{ease:"none"})),x._ease=Vr(g.ease||i.ease||"none");var U=0,I,z,Y;if(ln(g))g.forEach(function(W){return x.to(y,W,">")}),x.duration();else{A={};for(T in g)T==="ease"||T==="easeEach"||m_(T,g[T],A,g.easeEach);for(T in A)for(I=A[T].sort(function(W,B){return W.t-B.t}),U=0,M=0;M<I.length;M++)z=I[M],Y={ease:z.e,duration:(z.t-(M?I[M-1].t:0))/100*c},Y[T]=z.v,x.to(y,Y,U),U+=Y.duration;x.duration()<c&&x.to({},{duration:c-x.duration()})}}c||a.duration(c=x.duration())}else a.timeline=0;return d===!0&&!Iu&&(tr=Di(a),Re.killTweensOf(y),tr=0),gi(m,Di(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(f||!c&&!g&&a._start===Ce(m._time)&&yn(f)&&Xm(Di(a))&&m.data!=="nested")&&(a._tTime=-Se,a.render(Math.max(0,-u)||0)),p&&wd(Di(a),p),a}var e=t.prototype;return e.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,u=i<0,f=i>l-Se&&!u?l:i<Se?0:i,h,d,g,_,p,m,y,x;if(!c)qm(this,i,s,o);else if(f!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(h=f,x=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+i,s,o);if(h=Ce(f%_),f===l?(g=this._repeat,h=c):(p=Ce(f/_),g=~~p,g&&g===p?(h=c,g--):h>c&&(h=c)),m=this._yoyo&&g&1,m&&(h=c-h),p=Gs(this._tTime,_),h===a&&!o&&this._initted&&g===p)return this._tTime=f,this;g!==p&&this.vars.repeatRefresh&&!m&&!this._lock&&h!==_&&this._initted&&(this._lock=o=1,this.render(Ce(_*g),!0).invalidate()._lock=0)}if(!this._initted){if(Ad(this,u?i:h,o,s,f))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==p))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._rEase){var M=h<a;if(M!==this._inv){var A=M?a:c-a;this._inv=M,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=A?(M?-1:1)/A:0,this._invScale=M?-this.ratio:1-this.ratio,this._invEase=M?this._rEase:this._ease}this.ratio=y=this._invRatio+this._invScale*this._invEase((h-this._invTime)*this._invRecip)}else this.ratio=y=this._ease(h/c);if(this._from&&(this.ratio=y=1-y),this._tTime=f,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&f&&!s&&!p&&(zn(this,"onStart"),this._tTime!==f))return this;for(d=this._pt;d;)d.r(y,d.d),d=d._next;x&&x.render(i<0?i:x._dur*x._ease(h/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&Rc(this,i,s,o),zn(this,"onUpdate")),this._repeat&&g!==p&&this.vars.onRepeat&&!s&&this.parent&&zn(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(u&&!this._onUpdate&&Rc(this,i,!0,!0),(i||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&hr(this,1),!s&&!(u&&!a)&&(f||a||m)&&(zn(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},e.resetTo=function(i,s,o,a,l){Wo||Bn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Gu(this,c),u=this._ease(c/this._dur),d_(this,i,s,o,a,u,c,l)?this.resetTo(i,s,o,a,1):(Cl(this,0),this.parent||Td(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?xo(this):this.scrollTrigger&&this.scrollTrigger.kill(!!tn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,tr&&tr.vars.overwrite!==!0)._first||xo(this),this.parent&&o!==this.timeline.totalDuration()&&Ws(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?Jn(i):a,c=this._ptLookup,u=this._pt,f,h,d,g,_,p,m;if((!s||s==="all")&&Gm(a,l))return s==="all"&&(this._pt=0),xo(this);for(f=this._op=this._op||[],s!=="all"&&(Ze(s)&&(_={},En(s,function(y){return _[y]=1}),s=_),s=p_(a,s)),m=a.length;m--;)if(~l.indexOf(a[m])){h=c[m],s==="all"?(f[m]=s,g=h,d={}):(d=f[m]=f[m]||{},g=s);for(_ in g)p=h&&h[_],p&&((!("kill"in p.d)||p.d.kill(_)===!0)&&wl(this,p,"_pt"),delete h[_]),d!=="all"&&(d[_]=1)}return this._initted&&!this._pt&&u&&xo(this),this},t.to=function(i,s){return new t(i,s,arguments[2])},t.from=function(i,s){return Co(1,arguments)},t.delayedCall=function(i,s,o,a){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(i,s,o){return Co(2,arguments)},t.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(i,s)},t.killTweensOf=function(i,s,o){return Re.killTweensOf(i,s,o)},t}(Xo);Wn(ke.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});En("staggerTo,staggerFrom,staggerFromTo",function(r){ke[r]=function(){var t=new Sn,e=Lc.call(arguments,0);return e.splice(r==="staggerFromTo"?5:4,0,0),t[r].apply(t,e)}});var Wu=function(t,e,n){return t[e]=n},Xd=function(t,e,n){return t[e](n)},__=function(t,e,n,i){return t[e](i.fp,n)},g_=function(t,e,n){return t.setAttribute(e,n)},Xu=function(t,e){return De(t[e])?Xd:Uu(t[e])&&t.setAttribute?g_:Wu},Yd=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},v_=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},qd=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},Yu=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},x_=function(t,e,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(t,e,n),s=o},S_=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?wl(this,e,"_pt"):e.dep||(n=1),e=i;return!n},M_=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},$d=function(t){for(var e=t._pt,n,i,s,o;e;){for(n=e._next,i=s;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:o)?e._prev._next=e:s=e,(e._next=i)?i._prev=e:o=e,e=n}t._pt=s},Tn=function(){function r(e,n,i,s,o,a,l,c,u){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||Yd,this.d=l||this,this.set=c||Wu,this.pr=u||0,this._next=e,e&&(e._prev=this)}var t=r.prototype;return t.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=M_,this.m=n,this.mt=s,this.tween=i},r}();En(ku+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return Bu[r]=1});Gn.TweenMax=Gn.TweenLite=ke;Gn.TimelineLite=Gn.TimelineMax=Sn;Re=new Sn({sortChildren:!1,defaults:zo,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Vn.stringFilter=kd;var Gr=[],Ya={},y_=[],wh=0,E_=0,Gl=function(t){return(Ya[t]||y_).map(function(e){return e()})},Nc=function(){var t=Date.now(),e=[];t-wh>2&&(Gl("matchMediaInit"),Gr.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=hi.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&e.push(n))}),Gl("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),wh=t,Gl("matchMedia"))},Kd=function(){function r(e,n){this.selector=n&&Dc(n),this.data=[],this._r=[],this.isReverted=!1,this.id=E_++,e&&this.add(e)}var t=r.prototype;return t.add=function(n,i,s){De(n)&&(s=i,i=n,n=De);var o=this,a=function(){var c=we,u=o.selector,f;return c&&c!==o&&c.data.push(o),s&&(o.selector=Dc(s)),we=o,f=i.apply(o,arguments),De(f)&&o._r.push(f),we=c,o.selector=u,o.isReverted=!1,f};return o.last=a,n===De?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},t.ignore=function(n){var i=we;we=null,n(this),we=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof ke&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var s=this;if(n?function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,f){return f.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Sn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof ke)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=Gr.length;o--;)Gr[o].id===this.id&&Gr.splice(o,1)},t.revert=function(n){this.kill(n||{})},r}(),T_=function(){function r(e){this.contexts=[],this.scope=e,we&&we.data.push(this)}var t=r.prototype;return t.add=function(n,i,s){Ei(n)||(n={matches:n});var o=new Kd(0,s||this.scope),a=o.conditions={},l,c,u;we&&!o.selector&&(o.selector=we.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?u=1:(l=hi.matchMedia(n[c]),l&&(Gr.indexOf(o)<0&&Gr.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(Nc):l.addEventListener("change",Nc)));return u&&i(o,function(f){return o.add(null,f)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),hl={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return Od(i)})},timeline:function(t){return new Sn(t)},getTweensOf:function(t,e){return Re.getTweensOf(t,e)},getProperty:function(t,e,n,i){Ze(t)&&(t=Jn(t)[0]);var s=zr(t||{}).get,o=n?Ed:yd;return n==="native"&&(n=""),t&&(e?o((Nn[e]&&Nn[e].get||s)(t,e,n,i)):function(a,l,c){return o((Nn[a]&&Nn[a].get||s)(t,a,l,c))})},quickSetter:function(t,e,n){if(t=Jn(t),t.length>1){var i=t.map(function(u){return Cn.quickSetter(u,e,n)}),s=i.length;return function(u){for(var f=s;f--;)i[f](u)}}t=t[0]||{};var o=Nn[e],a=zr(t),l=a.harness&&(a.harness.aliases||{})[e]||e,c=o?function(u){var f=new o;Cs._pt=0,f.init(t,n?u+n:u,Cs,0,[t]),f.render(1,f),Cs._pt&&Yu(1,Cs)}:a.set(t,l);return o?c:function(u){return c(t,l,n?u+n:u,a,1)}},quickTo:function(t,e,n){var i,s=Cn.to(t,Wn((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,u){return s.resetTo(e,l,c,u)};return o.tween=s,o},isTweening:function(t){return Re.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Vr(t.ease,zo.ease)),Mh(zo,t||{})},config:function(t){return Mh(Vn,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,s=t.defaults,o=t.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!Nn[a]&&!Gn[a]&&Ho(e+" effect requires "+a+" plugin.")}),kl[e]=function(a,l,c){return n(Jn(a),Wn(l||{},s),c)},o&&(Sn.prototype[e]=function(a,l,c){return this.add(kl[e](a,Ei(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){re[t]=Vr(e)},parseEase:function(t,e){return arguments.length?Vr(t,e):re},getById:function(t){return Re.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new Sn(t),i,s;for(n.smoothChildTiming=yn(t.smoothChildTiming),Re.remove(n),n._dp=0,n._time=n._tTime=Re._time,i=Re._first;i;)s=i._next,(e||!(!i._dur&&i instanceof ke&&i.vars.onComplete===i._targets[0]))&&gi(n,i,i._start-i._delay),i=s;return gi(Re,n,0),n},context:function(t,e){return t?new Kd(t,e):we},matchMedia:function(t){return new T_(t)},matchMediaRefresh:function(){return Gr.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||Nc()},addEventListener:function(t,e){var n=Ya[t]||(Ya[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=Ya[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:e_,wrapYoyo:n_,distribute:Pd,random:Dd,snap:Ld,normalize:t_,getUnit:on,clamp:Zm,splitColor:Fd,toArray:Jn,selector:Dc,mapRange:Ud,pipe:Jm,unitize:Qm,interpolate:i_,shuffle:Rd},install:gd,effects:kl,ticker:Bn,updateRoot:Sn.updateRoot,plugins:Nn,globalTimeline:Re,core:{PropTween:Tn,globals:vd,Tween:ke,Timeline:Sn,Animation:Xo,getCache:zr,_removeLinkedListItem:wl,reverting:function(){return tn},context:function(t){return t&&we&&(we.data.push(t),t._ctx=we),we},suppressOverwrites:function(t){return Iu=t}}};En("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return hl[r]=ke[r]});Bn.add(Sn.updateRoot);Cs=hl.to({},{duration:0});var b_=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},w_=function(t,e){var n=t._targets,i,s,o;for(i in e)for(s=n.length;s--;)o=t._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=b_(o,i)),o&&o.modifier&&o.modifier(e[i],t,n[s],i))},Wl=function(t,e){return{name:t,headless:1,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(Ze(s)&&(l={},En(s,function(u){return l[u]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}w_(a,s)}}}},Cn=hl.registerPlugin({name:"attr",init:function(t,e,n,i,s){var o,a,l;this.tween=n;for(o in e)l=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(l||0)+"",e[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(t,e){for(var n=e._pt;n;)tn?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},Wl("roundProps",Ic),Wl("modifiers"),Wl("snap",Ld))||hl;ke.version=Sn.version=Cn.version="3.15.0";_d=1;Nu()&&Xs();re.Power0;re.Power1;re.Power2;re.Power3;re.Power4;re.Linear;re.Quad;re.Cubic;re.Quart;re.Quint;re.Strong;re.Elastic;re.Back;re.SteppedEase;re.Bounce;re.Sine;re.Expo;re.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Ah,er,Is,qu,Or,Ch,$u,A_=function(){return typeof window<"u"},zi={},Ar=180/Math.PI,Us=Math.PI/180,ns=Math.atan2,Rh=1e8,Ku=/([A-Z])/g,C_=/(left|right|width|margin|padding|x)/i,R_=/[\s,\(]\S/,xi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Oc=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},P_=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},L_=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},D_=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},I_=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},Zd=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},jd=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},U_=function(t,e,n){return t.style[e]=n},N_=function(t,e,n){return t.style.setProperty(e,n)},O_=function(t,e,n){return t._gsap[e]=n},F_=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},B_=function(t,e,n,i,s){var o=t._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},k_=function(t,e,n,i,s){var o=t._gsap;o[e]=n,o.renderTransform(s,o)},Pe="transform",bn=Pe+"Origin",z_=function r(t,e){var n=this,i=this.target,s=i.style,o=i._gsap;if(t in zi&&s){if(this.tfm=this.tfm||{},t!=="transform")t=xi[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return n.tfm[a]=Ii(i,a)}):this.tfm[t]=o.x?o[t]:Ii(i,t),t===bn&&(this.tfm.zOrigin=o.zOrigin);else return xi.transform.split(",").forEach(function(a){return r.call(n,a,e)});if(this.props.indexOf(Pe)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(bn,e,"")),t=Pe}(s||e)&&this.props.push(t,e,s[t])},Jd=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},H_=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,s,o;for(s=0;s<t.length;s+=3)t[s+1]?t[s+1]===2?e[t[s]](t[s+2]):e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(Ku,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=$u(),(!s||!s.isStart)&&!n[Pe]&&(Jd(n),i.zOrigin&&n[bn]&&(n[bn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Qd=function(t,e){var n={target:t,props:[],revert:H_,save:z_};return t._gsap||Cn.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},tp,Fc=function(t,e){var n=er.createElementNS?er.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):er.createElement(t);return n&&n.style?n:er.createElement(t)},Hn=function r(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(Ku,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&r(t,Ys(e)||e,1)||""},Ph="O,Moz,ms,Ms,Webkit".split(","),Ys=function(t,e,n){var i=e||Or,s=i.style,o=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(Ph[o]+t in s););return o<0?null:(o===3?"ms":o>=0?Ph[o]:"")+t},Bc=function(){A_()&&window.document&&(Ah=window,er=Ah.document,Is=er.documentElement,Or=Fc("div")||{style:{}},Fc("div"),Pe=Ys(Pe),bn=Pe+"Origin",Or.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",tp=!!Ys("perspective"),$u=Cn.core.reverting,qu=1)},Lh=function(t){var e=t.ownerSVGElement,n=Fc("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),s;i.style.display="block",n.appendChild(i),Is.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),Is.removeChild(n),s},Dh=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},ep=function(t){var e,n;try{e=t.getBBox()}catch{e=Lh(t),n=1}return e&&(e.width||e.height)||n||(e=Lh(t)),e&&!e.width&&!e.x&&!e.y?{x:+Dh(t,["x","cx","x1"])||0,y:+Dh(t,["y","cy","y1"])||0,width:0,height:0}:e},np=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&ep(t))},fr=function(t,e){if(e){var n=t.style,i;e in zi&&e!==bn&&(e=Pe),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(Ku,"-$1").toLowerCase())):n.removeAttribute(e)}},nr=function(t,e,n,i,s,o){var a=new Tn(t._pt,e,n,0,1,o?jd:Zd);return t._pt=a,a.b=i,a.e=s,t._props.push(n),a},Ih={deg:1,rad:1,turn:1},V_={grid:1,flex:1},dr=function r(t,e,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=Or.style,l=C_.test(e),c=t.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),f=100,h=i==="px",d=i==="%",g,_,p,m;if(i===o||!s||Ih[i]||Ih[o])return s;if(o!=="px"&&!h&&(s=r(t,e,n,"px")),m=t.getCTM&&np(t),(d||o==="%")&&(zi[e]||~e.indexOf("adius")))return g=m?t.getBBox()[l?"width":"height"]:t[u],Ue(d?s/g*f:s/100*g);if(a[l?"width":"height"]=f+(h?o:i),_=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,m&&(_=(t.ownerSVGElement||{}).parentNode),(!_||_===er||!_.appendChild)&&(_=er.body),p=_._gsap,p&&d&&p.width&&l&&p.time===Bn.time&&!p.uncache)return Ue(s/p.width*f);if(d&&(e==="height"||e==="width")){var y=t.style[e];t.style[e]=f+i,g=t[u],y?t.style[e]=y:fr(t,e)}else(d||o==="%")&&!V_[Hn(_,"display")]&&(a.position=Hn(t,"position")),_===t&&(a.position="static"),_.appendChild(Or),g=Or[u],_.removeChild(Or),a.position="absolute";return l&&d&&(p=zr(_),p.time=Bn.time,p.width=_[u]),Ue(h?g*s/f:g&&s?f/g*s:0)},Ii=function(t,e,n,i){var s;return qu||Bc(),e in xi&&e!=="transform"&&(e=xi[e],~e.indexOf(",")&&(e=e.split(",")[0])),zi[e]&&e!=="transform"?(s=qo(t,i),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:dl(Hn(t,bn))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=fl[e]&&fl[e](t,e,n)||Hn(t,e)||Sd(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?dr(t,e,s,n)+n:s},G_=function(t,e,n,i){if(!n||n==="none"){var s=Ys(e,t,1),o=s&&Hn(t,s,1);o&&o!==n?(e=s,n=o):e==="borderColor"&&(n=Hn(t,"borderTopColor"))}var a=new Tn(this._pt,t.style,e,0,1,qd),l=0,c=0,u,f,h,d,g,_,p,m,y,x,M,A;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=Hn(t,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=t.style[e],t.style[e]=i,i=Hn(t,e)||i,_?t.style[e]=_:fr(t,e)),u=[n,i],kd(u),n=u[0],i=u[1],h=n.match(As)||[],A=i.match(As)||[],A.length){for(;f=As.exec(i);)p=f[0],y=i.substring(l,f.index),g?g=(g+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(g=1),p!==(_=h[c++]||"")&&(d=parseFloat(_)||0,M=_.substr((d+"").length),p.charAt(1)==="="&&(p=Ds(d,p)+M),m=parseFloat(p),x=p.substr((m+"").length),l=As.lastIndex-x.length,x||(x=x||Vn.units[e]||M,l===i.length&&(i+=x,a.e+=x)),M!==x&&(d=dr(t,e,_,x)||0),a._pt={_next:a._pt,p:y||c===1?y:",",s:d,c:m-d,m:g&&g<4||e==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=e==="display"&&i==="none"?jd:Zd;return md.test(i)&&(a.e=0),this._pt=a,a},Uh={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},W_=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=Uh[n]||n,e[1]=Uh[i]||i,e.join(" ")},X_=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,s=e.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],zi[a]&&(l=1,a=a==="transformOrigin"?bn:Pe),fr(n,a);l&&(fr(n,Pe),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",qo(n,1),o.uncache=1,Jd(i)))}},fl={clearProps:function(t,e,n,i,s){if(s.data!=="isFromStart"){var o=t._pt=new Tn(t._pt,e,n,0,0,X_);return o.u=i,o.pr=-10,o.tween=s,t._props.push(n),1}}},Yo=[1,0,0,1,0,0],ip={},rp=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Nh=function(t){var e=Hn(t,Pe);return rp(e)?Yo:e.substr(7).match(pd).map(Ue)},Zu=function(t,e){var n=t._gsap||zr(t),i=t.style,s=Nh(t),o,a,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Yo:s):(s===Yo&&!t.offsetParent&&t!==Is&&!n.svg&&(l=i.display,i.display="block",o=t.parentNode,(!o||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,a=t.nextElementSibling,Is.appendChild(t)),s=Nh(t),l?i.display=l:fr(t,"display"),c&&(a?o.insertBefore(t,a):o?o.appendChild(t):Is.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},kc=function(t,e,n,i,s,o){var a=t._gsap,l=s||Zu(t,!0),c=a.xOrigin||0,u=a.yOrigin||0,f=a.xOffset||0,h=a.yOffset||0,d=l[0],g=l[1],_=l[2],p=l[3],m=l[4],y=l[5],x=e.split(" "),M=parseFloat(x[0])||0,A=parseFloat(x[1])||0,w,T,C,S;n?l!==Yo&&(T=d*p-g*_)&&(C=M*(p/T)+A*(-_/T)+(_*y-p*m)/T,S=M*(-g/T)+A*(d/T)-(d*y-g*m)/T,M=C,A=S):(w=ep(t),M=w.x+(~x[0].indexOf("%")?M/100*w.width:M),A=w.y+(~(x[1]||x[0]).indexOf("%")?A/100*w.height:A)),i||i!==!1&&a.smooth?(m=M-c,y=A-u,a.xOffset=f+(m*d+y*_)-m,a.yOffset=h+(m*g+y*p)-y):a.xOffset=a.yOffset=0,a.xOrigin=M,a.yOrigin=A,a.smooth=!!i,a.origin=e,a.originIsAbsolute=!!n,t.style[bn]="0px 0px",o&&(nr(o,a,"xOrigin",c,M),nr(o,a,"yOrigin",u,A),nr(o,a,"xOffset",f,a.xOffset),nr(o,a,"yOffset",h,a.yOffset)),t.setAttribute("data-svg-origin",M+" "+A)},qo=function(t,e){var n=t._gsap||new Hd(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(t),c=Hn(t,bn)||"0",u,f,h,d,g,_,p,m,y,x,M,A,w,T,C,S,v,P,U,I,z,Y,W,B,V,st,L,lt,Bt,qt,$,tt;return u=f=h=_=p=m=y=x=M=0,d=g=1,n.svg=!!(t.getCTM&&np(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Pe]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Pe]!=="none"?l[Pe]:"")),i.scale=i.rotate=i.translate="none"),T=Zu(t,n.svg),n.svg&&(n.uncache?(V=t.getBBox(),c=n.xOrigin-V.x+"px "+(n.yOrigin-V.y)+"px",B=""):B=!e&&t.getAttribute("data-svg-origin"),kc(t,B||c,!!B||n.originIsAbsolute,n.smooth!==!1,T)),A=n.xOrigin||0,w=n.yOrigin||0,T!==Yo&&(P=T[0],U=T[1],I=T[2],z=T[3],u=Y=T[4],f=W=T[5],T.length===6?(d=Math.sqrt(P*P+U*U),g=Math.sqrt(z*z+I*I),_=P||U?ns(U,P)*Ar:0,y=I||z?ns(I,z)*Ar+_:0,y&&(g*=Math.abs(Math.cos(y*Us))),n.svg&&(u-=A-(A*P+w*I),f-=w-(A*U+w*z))):(tt=T[6],qt=T[7],L=T[8],lt=T[9],Bt=T[10],$=T[11],u=T[12],f=T[13],h=T[14],C=ns(tt,Bt),p=C*Ar,C&&(S=Math.cos(-C),v=Math.sin(-C),B=Y*S+L*v,V=W*S+lt*v,st=tt*S+Bt*v,L=Y*-v+L*S,lt=W*-v+lt*S,Bt=tt*-v+Bt*S,$=qt*-v+$*S,Y=B,W=V,tt=st),C=ns(-I,Bt),m=C*Ar,C&&(S=Math.cos(-C),v=Math.sin(-C),B=P*S-L*v,V=U*S-lt*v,st=I*S-Bt*v,$=z*v+$*S,P=B,U=V,I=st),C=ns(U,P),_=C*Ar,C&&(S=Math.cos(C),v=Math.sin(C),B=P*S+U*v,V=Y*S+W*v,U=U*S-P*v,W=W*S-Y*v,P=B,Y=V),p&&Math.abs(p)+Math.abs(_)>359.9&&(p=_=0,m=180-m),d=Ue(Math.sqrt(P*P+U*U+I*I)),g=Ue(Math.sqrt(W*W+tt*tt)),C=ns(Y,W),y=Math.abs(C)>2e-4?C*Ar:0,M=$?1/($<0?-$:$):0),n.svg&&(B=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!rp(Hn(t,Pe)),B&&t.setAttribute("transform",B))),Math.abs(y)>90&&Math.abs(y)<270&&(s?(d*=-1,y+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,y+=y<=0?180:-180)),e=e||n.uncache,n.x=u-((n.xPercent=u&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-u)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+o,n.y=f-((n.yPercent=f&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-f)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+o,n.z=h+o,n.scaleX=Ue(d),n.scaleY=Ue(g),n.rotation=Ue(_)+a,n.rotationX=Ue(p)+a,n.rotationY=Ue(m)+a,n.skewX=y+a,n.skewY=x+a,n.transformPerspective=M+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[bn]=dl(c)),n.xOffset=n.yOffset=0,n.force3D=Vn.force3D,n.renderTransform=n.svg?q_:tp?sp:Y_,n.uncache=0,n},dl=function(t){return(t=t.split(" "))[0]+" "+t[1]},Xl=function(t,e,n){var i=on(e);return Ue(parseFloat(e)+parseFloat(dr(t,"x",n+"px",i)))+i},Y_=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,sp(t,e)},xr="0deg",ao="0px",Sr=") ",sp=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,f=n.rotationX,h=n.skewX,d=n.skewY,g=n.scaleX,_=n.scaleY,p=n.transformPerspective,m=n.force3D,y=n.target,x=n.zOrigin,M="",A=m==="auto"&&t&&t!==1||m===!0;if(x&&(f!==xr||u!==xr)){var w=parseFloat(u)*Us,T=Math.sin(w),C=Math.cos(w),S;w=parseFloat(f)*Us,S=Math.cos(w),o=Xl(y,o,T*S*-x),a=Xl(y,a,-Math.sin(w)*-x),l=Xl(y,l,C*S*-x+x)}p!==ao&&(M+="perspective("+p+Sr),(i||s)&&(M+="translate("+i+"%, "+s+"%) "),(A||o!==ao||a!==ao||l!==ao)&&(M+=l!==ao||A?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Sr),c!==xr&&(M+="rotate("+c+Sr),u!==xr&&(M+="rotateY("+u+Sr),f!==xr&&(M+="rotateX("+f+Sr),(h!==xr||d!==xr)&&(M+="skew("+h+", "+d+Sr),(g!==1||_!==1)&&(M+="scale("+g+", "+_+Sr),y.style[Pe]=M||"translate(0, 0)"},q_=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,f=n.scaleX,h=n.scaleY,d=n.target,g=n.xOrigin,_=n.yOrigin,p=n.xOffset,m=n.yOffset,y=n.forceCSS,x=parseFloat(o),M=parseFloat(a),A,w,T,C,S;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Us,c*=Us,A=Math.cos(l)*f,w=Math.sin(l)*f,T=Math.sin(l-c)*-h,C=Math.cos(l-c)*h,c&&(u*=Us,S=Math.tan(c-u),S=Math.sqrt(1+S*S),T*=S,C*=S,u&&(S=Math.tan(u),S=Math.sqrt(1+S*S),A*=S,w*=S)),A=Ue(A),w=Ue(w),T=Ue(T),C=Ue(C)):(A=f,C=h,w=T=0),(x&&!~(o+"").indexOf("px")||M&&!~(a+"").indexOf("px"))&&(x=dr(d,"x",o,"px"),M=dr(d,"y",a,"px")),(g||_||p||m)&&(x=Ue(x+g-(g*A+_*T)+p),M=Ue(M+_-(g*w+_*C)+m)),(i||s)&&(S=d.getBBox(),x=Ue(x+i/100*S.width),M=Ue(M+s/100*S.height)),S="matrix("+A+","+w+","+T+","+C+","+x+","+M+")",d.setAttribute("transform",S),y&&(d.style[Pe]=S)},$_=function(t,e,n,i,s){var o=360,a=Ze(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Ar:1),c=l-i,u=i+c+"deg",f,h;return a&&(f=s.split("_")[1],f==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),f==="cw"&&c<0?c=(c+o*Rh)%o-~~(c/o)*o:f==="ccw"&&c>0&&(c=(c-o*Rh)%o-~~(c/o)*o)),t._pt=h=new Tn(t._pt,e,n,i,c,P_),h.e=u,h.u="deg",t._props.push(n),h},Oh=function(t,e){for(var n in e)t[n]=e[n];return t},K_=function(t,e,n){var i=Oh({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,f,h,d,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Pe]=e,a=qo(n,1),fr(n,Pe),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Pe],o[Pe]=e,a=qo(n,1),o[Pe]=c);for(l in zi)c=i[l],u=a[l],c!==u&&s.indexOf(l)<0&&(d=on(c),g=on(u),f=d!==g?dr(n,l,c,g):parseFloat(c),h=parseFloat(u),t._pt=new Tn(t._pt,a,l,f,h-f,Oc),t._pt.u=g||0,t._props.push(l));Oh(a,i)};En("padding,margin,Width,Radius",function(r,t){var e="Top",n="Right",i="Bottom",s="Left",o=(t<3?[e,n,i,s]:[e+s,e+n,i+n,i+s]).map(function(a){return t<2?r+a:"border"+a+r});fl[t>1?"border"+r:r]=function(a,l,c,u,f){var h,d;if(arguments.length<4)return h=o.map(function(g){return Ii(a,g,c)}),d=h.join(" "),d.split(h[0]).length===5?h[0]:d;h=(u+"").split(" "),d={},o.forEach(function(g,_){return d[g]=h[_]=h[_]||h[(_-1)/2|0]}),a.init(l,d,f)}});var op={name:"css",register:Bc,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,s){var o=this._props,a=t.style,l=n.vars.startAt,c,u,f,h,d,g,_,p,m,y,x,M,A,w,T,C,S;qu||Bc(),this.styles=this.styles||Qd(t),C=this.styles.props,this.tween=n;for(_ in e)if(_!=="autoRound"&&(u=e[_],!(Nn[_]&&Vd(_,e,n,i,t,s)))){if(d=typeof u,g=fl[_],d==="function"&&(u=u.call(n,i,t,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=Go(u)),g)g(this,t,_,u,n)&&(T=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(_)+"").trim(),u+="",ar.lastIndex=0,ar.test(c)||(p=on(c),m=on(u),m?p!==m&&(c=dr(t,_,c,m)+m):p&&(u+=p)),this.add(a,"setProperty",c,u,i,s,0,0,_),o.push(_),C.push(_,0,a[_]);else if(d!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,t,s):l[_],Ze(c)&&~c.indexOf("random(")&&(c=Go(c)),on(c+"")||c==="auto"||(c+=Vn.units[_]||on(Ii(t,_))||""),(c+"").charAt(1)==="="&&(c=Ii(t,_))):c=Ii(t,_),h=parseFloat(c),y=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),y&&(u=u.substr(2)),f=parseFloat(u),_ in xi&&(_==="autoAlpha"&&(h===1&&Ii(t,"visibility")==="hidden"&&f&&(h=0),C.push("visibility",0,a.visibility),nr(this,a,"visibility",h?"inherit":"hidden",f?"inherit":"hidden",!f)),_!=="scale"&&_!=="transform"&&(_=xi[_],~_.indexOf(",")&&(_=_.split(",")[0]))),x=_ in zi,x){if(this.styles.save(_),S=u,d==="string"&&u.substring(0,6)==="var(--"){if(u=Hn(t,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var v=t.style.perspective;t.style.perspective=u,u=Hn(t,"perspective"),v?t.style.perspective=v:fr(t,"perspective")}f=parseFloat(u)}if(M||(A=t._gsap,A.renderTransform&&!e.parseTransform||qo(t,e.parseTransform),w=e.smoothOrigin!==!1&&A.smooth,M=this._pt=new Tn(this._pt,a,Pe,0,1,A.renderTransform,A,0,-1),M.dep=1),_==="scale")this._pt=new Tn(this._pt,A,"scaleY",A.scaleY,(y?Ds(A.scaleY,y+f):f)-A.scaleY||0,Oc),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){C.push(bn,0,a[bn]),u=W_(u),A.svg?kc(t,u,0,w,0,this):(m=parseFloat(u.split(" ")[2])||0,m!==A.zOrigin&&nr(this,A,"zOrigin",A.zOrigin,m),nr(this,a,_,dl(c),dl(u)));continue}else if(_==="svgOrigin"){kc(t,u,1,w,0,this);continue}else if(_ in ip){$_(this,A,_,h,y?Ds(h,y+u):u);continue}else if(_==="smoothOrigin"){nr(this,A,"smooth",A.smooth,u);continue}else if(_==="force3D"){A[_]=u;continue}else if(_==="transform"){K_(this,u,t);continue}}else _ in a||(_=Ys(_)||_);if(x||(f||f===0)&&(h||h===0)&&!R_.test(u)&&_ in a)p=(c+"").substr((h+"").length),f||(f=0),m=on(u)||(_ in Vn.units?Vn.units[_]:p),p!==m&&(h=dr(t,_,c,m)),this._pt=new Tn(this._pt,x?A:a,_,h,(y?Ds(h,y+f):f)-h,!x&&(m==="px"||_==="zIndex")&&e.autoRound!==!1?I_:Oc),this._pt.u=m||0,x&&S!==u?(this._pt.b=c,this._pt.e=S,this._pt.r=D_):p!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=L_);else if(_ in a)G_.call(this,t,_,c,y?y+u:u);else if(_ in t)this.add(t,_,c||t[_],y?y+u:u,i,s);else if(_!=="parseTransform"){Fu(_,u);continue}x||(_ in a?C.push(_,0,a[_]):typeof t[_]=="function"?C.push(_,2,t[_]()):C.push(_,1,c||t[_])),o.push(_)}}T&&$d(this)},render:function(t,e){if(e.tween._time||!$u())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:Ii,aliases:xi,getSetter:function(t,e,n){var i=xi[e];return i&&i.indexOf(",")<0&&(e=i),e in zi&&e!==bn&&(t._gsap.x||Ii(t,"x"))?n&&Ch===n?e==="scale"?F_:O_:(Ch=n||{})&&(e==="scale"?B_:k_):t.style&&!Uu(t.style[e])?U_:~e.indexOf("-")?N_:Xu(t,e)},core:{_removeProperty:fr,_getMatrix:Zu}};Cn.utils.checkPrefix=Ys;Cn.core.getStyleSaver=Qd;(function(r,t,e,n){var i=En(r+","+t+","+e,function(s){zi[s]=1});En(t,function(s){Vn.units[s]="deg",ip[s]=1}),xi[i[13]]=r+","+t,En(n,function(s){var o=s.split(":");xi[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");En("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Vn.units[r]="px"});Cn.registerPlugin(op);var Me=Cn.registerPlugin(op)||Cn;Me.core.Tween;function Z_(r,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function j_(r,t,e){return t&&Z_(r.prototype,t),r}/*!
 * Observer 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Qe,qa,kn,ir,rr,Ns,ap,Cr,Os,lp,Oi,si,cp,up=function(){return Qe||typeof window<"u"&&(Qe=window.gsap)&&Qe.registerPlugin&&Qe},hp=1,Rs=[],ee=[],yi=[],Po=Date.now,zc=function(t,e){return e},J_=function(){var t=Os.core,e=t.bridge||{},n=t._scrollers,i=t._proxies;n.push.apply(n,ee),i.push.apply(i,yi),ee=n,yi=i,zc=function(o,a){return e[o](a)}},lr=function(t,e){return~yi.indexOf(t)&&yi[yi.indexOf(t)+1][e]},Lo=function(t){return!!~lp.indexOf(t)},un=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:i!==!1,capture:!!s})},cn=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},oa="scrollLeft",aa="scrollTop",Hc=function(){return Oi&&Oi.isPressed||ee.cache++},pl=function(t,e){var n=function i(s){if(s||s===0){hp&&(kn.history.scrollRestoration="manual");var o=Oi&&Oi.isPressed;s=i.v=Math.round(s)||(Oi&&Oi.iOS?1:0),t(s),i.cacheID=ee.cache,o&&zc("ss",s)}else(e||ee.cache!==i.cacheID||zc("ref"))&&(i.cacheID=ee.cache,i.v=t());return i.v+i.offset};return n.offset=0,t&&n},mn={s:oa,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:pl(function(r){return arguments.length?kn.scrollTo(r,Ge.sc()):kn.pageXOffset||ir[oa]||rr[oa]||Ns[oa]||0})},Ge={s:aa,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:mn,sc:pl(function(r){return arguments.length?kn.scrollTo(mn.sc(),r):kn.pageYOffset||ir[aa]||rr[aa]||Ns[aa]||0})},vn=function(t,e){return(e&&e._ctx&&e._ctx.selector||Qe.utils.toArray)(t)[0]||(typeof t=="string"&&Qe.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},Q_=function(t,e){for(var n=e.length;n--;)if(e[n]===t||e[n].contains(t))return!0;return!1},pr=function(t,e){var n=e.s,i=e.sc;Lo(t)&&(t=ir.scrollingElement||rr);var s=ee.indexOf(t),o=i===Ge.sc?1:2;!~s&&(s=ee.push(t)-1),ee[s+o]||un(t,"scroll",Hc);var a=ee[s+o],l=a||(ee[s+o]=pl(lr(t,n),!0)||(Lo(t)?i:pl(function(c){return arguments.length?t[n]=c:t[n]})));return l.target=t,a||(l.smooth=Qe.getProperty(t,"scrollBehavior")==="smooth"),l},Vc=function(t,e,n){var i=t,s=t,o=Po(),a=o,l=e||50,c=Math.max(500,l*3),u=function(g,_){var p=Po();_||p-o>l?(s=i,i=g,a=o,o=p):n?i+=g:i=s+(g-s)/(p-a)*(o-a)},f=function(){s=i=n?0:i,a=o=0},h=function(g){var _=a,p=s,m=Po();return(g||g===0)&&g!==i&&u(g),o===a||m-a>c?0:(i+(n?p:-p))/((n?m:o)-_)*1e3};return{update:u,reset:f,getVelocity:h}},lo=function(t,e){return e&&!t._gsapAllow&&t.cancelable!==!1&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},Fh=function(t){var e=Math.max.apply(Math,t),n=Math.min.apply(Math,t);return Math.abs(e)>=Math.abs(n)?e:n},fp=function(){Os=Qe.core.globals().ScrollTrigger,Os&&Os.core&&J_()},dp=function(t){return Qe=t||up(),!qa&&Qe&&typeof document<"u"&&document.body&&(kn=window,ir=document,rr=ir.documentElement,Ns=ir.body,lp=[kn,ir,rr,Ns],Qe.utils.clamp,cp=Qe.core.context||function(){},Cr="onpointerenter"in Ns?"pointer":"mouse",ap=Ne.isTouch=kn.matchMedia&&kn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in kn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,si=Ne.eventTypes=("ontouchstart"in rr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in rr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return hp=0},500),qa=1),Os||fp(),qa};mn.op=Ge;ee.cache=0;var Ne=function(){function r(e){this.init(e)}var t=r.prototype;return t.init=function(n){qa||dp(Qe)||console.warn("Please gsap.registerPlugin(Observer)"),Os||fp();var i=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,f=n.onStop,h=n.onStopDelay,d=n.ignore,g=n.wheelSpeed,_=n.event,p=n.onDragStart,m=n.onDragEnd,y=n.onDrag,x=n.onPress,M=n.onRelease,A=n.onRight,w=n.onLeft,T=n.onUp,C=n.onDown,S=n.onChangeX,v=n.onChangeY,P=n.onChange,U=n.onToggleX,I=n.onToggleY,z=n.onHover,Y=n.onHoverEnd,W=n.onMove,B=n.ignoreCheck,V=n.isNormalizer,st=n.onGestureStart,L=n.onGestureEnd,lt=n.onWheel,Bt=n.onEnable,qt=n.onDisable,$=n.onClick,tt=n.scrollSpeed,ut=n.capture,at=n.allowClicks,wt=n.lockAxis,Rt=n.onLockAxis;this.target=a=vn(a)||rr,this.vars=n,d&&(d=Qe.utils.toArray(d)),i=i||1e-9,s=s||0,g=g||1,tt=tt||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(kn.getComputedStyle(Ns).lineHeight)||22);var Gt,Jt,D,Dt,Ot,Xt,gt,G=this,At=0,Ft=0,R=n.passive||!u&&n.passive!==!1,E=pr(a,mn),X=pr(a,Ge),Q=E(),nt=X(),Z=~o.indexOf("touch")&&!~o.indexOf("pointer")&&si[0]==="pointerdown",Et=Lo(a),it=a.ownerDocument||ir,dt=[0,0,0],Ut=[0,0,0],rt=0,_t=function(){return rt=Po()},Pt=function(yt,se){return(G.event=yt)&&d&&Q_(yt.target,d)||se&&Z&&yt.pointerType!=="touch"||B&&B(yt,se)},kt=function(){G._vx.reset(),G._vy.reset(),Jt.pause(),f&&f(G)},mt=function(){var yt=G.deltaX=Fh(dt),se=G.deltaY=Fh(Ut),ct=Math.abs(yt)>=i,Ht=Math.abs(se)>=i;P&&(ct||Ht)&&P(G,yt,se,dt,Ut),ct&&(A&&G.deltaX>0&&A(G),w&&G.deltaX<0&&w(G),S&&S(G),U&&G.deltaX<0!=At<0&&U(G),At=G.deltaX,dt[0]=dt[1]=dt[2]=0),Ht&&(C&&G.deltaY>0&&C(G),T&&G.deltaY<0&&T(G),v&&v(G),I&&G.deltaY<0!=Ft<0&&I(G),Ft=G.deltaY,Ut[0]=Ut[1]=Ut[2]=0),(Dt||D)&&(W&&W(G),D&&(p&&D===1&&p(G),y&&y(G),D=0),Dt=!1),Xt&&!(Xt=!1)&&Rt&&Rt(G),Ot&&(lt(G),Ot=!1),Gt=0},zt=function(yt,se,ct){dt[ct]+=yt,Ut[ct]+=se,G._vx.update(yt),G._vy.update(se),c?Gt||(Gt=requestAnimationFrame(mt)):mt()},Wt=function(yt,se){wt&&!gt&&(G.axis=gt=Math.abs(yt)>Math.abs(se)?"x":"y",Xt=!0),gt!=="y"&&(dt[2]+=yt,G._vx.update(yt,!0)),gt!=="x"&&(Ut[2]+=se,G._vy.update(se,!0)),c?Gt||(Gt=requestAnimationFrame(mt)):mt()},le=function(yt){if(!Pt(yt,1)){yt=lo(yt,u);var se=yt.clientX,ct=yt.clientY,Ht=se-G.x,Lt=ct-G.y,Vt=G.isDragging;G.x=se,G.y=ct,(Vt||(Ht||Lt)&&(Math.abs(G.startX-se)>=s||Math.abs(G.startY-ct)>=s))&&(D||(D=Vt?2:1),Vt||(G.isDragging=!0),Wt(Ht,Lt))}},O=G.onPress=function(Nt){Pt(Nt,1)||Nt&&Nt.button||(G.axis=gt=null,Jt.pause(),G.isPressed=!0,Nt=lo(Nt),At=Ft=0,G.startX=G.x=Nt.clientX,G.startY=G.y=Nt.clientY,G._vx.reset(),G._vy.reset(),un(V?a:it,si[1],le,R,!0),G.deltaX=G.deltaY=0,x&&x(G))},K=G.onRelease=function(Nt){if(!Pt(Nt,1)){cn(V?a:it,si[1],le,!0);var yt=!isNaN(G.y-G.startY),se=G.isDragging,ct=se&&(Math.abs(G.x-G.startX)>3||Math.abs(G.y-G.startY)>3),Ht=lo(Nt);!ct&&yt&&(G._vx.reset(),G._vy.reset(),u&&at&&Qe.delayedCall(.08,function(){if(Po()-rt>300&&!Nt.defaultPrevented){if(Nt.target.click)Nt.target.click();else if(it.createEvent){var Lt=it.createEvent("MouseEvents");Lt.initMouseEvent("click",!0,!0,kn,1,Ht.screenX,Ht.screenY,Ht.clientX,Ht.clientY,!1,!1,!1,!1,0,null),Nt.target.dispatchEvent(Lt)}}})),G.isDragging=G.isGesturing=G.isPressed=!1,f&&se&&!V&&Jt.restart(!0),D&&mt(),m&&se&&m(G),M&&M(G,ct)}},j=function(yt){return yt.touches&&yt.touches.length>1&&(G.isGesturing=!0)&&st(yt,G.isDragging)},J=function(){return(G.isGesturing=!1)||L(G)},ot=function(yt){if(!Pt(yt)){var se=E(),ct=X();zt((se-Q)*tt,(ct-nt)*tt,1),Q=se,nt=ct,f&&Jt.restart(!0)}},Tt=function(yt){if(!Pt(yt)){yt=lo(yt,u),lt&&(Ot=!0);var se=(yt.deltaMode===1?l:yt.deltaMode===2?kn.innerHeight:1)*g;zt(yt.deltaX*se,yt.deltaY*se,0),f&&!V&&Jt.restart(!0)}},Yt=function(yt){if(!Pt(yt)){var se=yt.clientX,ct=yt.clientY,Ht=se-G.x,Lt=ct-G.y;G.x=se,G.y=ct,Dt=!0,f&&Jt.restart(!0),(Ht||Lt)&&Wt(Ht,Lt)}},ge=function(yt){G.event=yt,z(G)},ve=function(yt){G.event=yt,Y(G)},ne=function(yt){return Pt(yt)||lo(yt,u)&&$(G)};Jt=G._dc=Qe.delayedCall(h||.25,kt).pause(),G.deltaX=G.deltaY=0,G._vx=Vc(0,50,!0),G._vy=Vc(0,50,!0),G.scrollX=E,G.scrollY=X,G.isDragging=G.isGesturing=G.isPressed=!1,cp(this),G.enable=function(Nt){return G.isEnabled||(un(Et?it:a,"scroll",Hc),o.indexOf("scroll")>=0&&un(Et?it:a,"scroll",ot,R,ut),o.indexOf("wheel")>=0&&un(a,"wheel",Tt,R,ut),(o.indexOf("touch")>=0&&ap||o.indexOf("pointer")>=0)&&(un(a,si[0],O,R,ut),un(it,si[2],K),un(it,si[3],K),at&&un(a,"click",_t,!0,!0),$&&un(a,"click",ne),st&&un(it,"gesturestart",j),L&&un(it,"gestureend",J),z&&un(a,Cr+"enter",ge),Y&&un(a,Cr+"leave",ve),W&&un(a,Cr+"move",Yt)),G.isEnabled=!0,G.isDragging=G.isGesturing=G.isPressed=Dt=D=!1,G._vx.reset(),G._vy.reset(),Q=E(),nt=X(),Nt&&Nt.type&&O(Nt),Bt&&Bt(G)),G},G.disable=function(){G.isEnabled&&(Rs.filter(function(Nt){return Nt!==G&&Lo(Nt.target)}).length||cn(Et?it:a,"scroll",Hc),G.isPressed&&(G._vx.reset(),G._vy.reset(),cn(V?a:it,si[1],le,!0)),cn(Et?it:a,"scroll",ot,ut),cn(a,"wheel",Tt,ut),cn(a,si[0],O,ut),cn(it,si[2],K),cn(it,si[3],K),cn(a,"click",_t,!0),cn(a,"click",ne),cn(it,"gesturestart",j),cn(it,"gestureend",J),cn(a,Cr+"enter",ge),cn(a,Cr+"leave",ve),cn(a,Cr+"move",Yt),G.isEnabled=G.isPressed=G.isDragging=!1,qt&&qt(G))},G.kill=G.revert=function(){G.disable();var Nt=Rs.indexOf(G);Nt>=0&&Rs.splice(Nt,1),Oi===G&&(Oi=0)},Rs.push(G),V&&Lo(a)&&(Oi=G),G.enable(_)},j_(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r}();Ne.version="3.15.0";Ne.create=function(r){return new Ne(r)};Ne.register=dp;Ne.getAll=function(){return Rs.slice()};Ne.getById=function(r){return Rs.filter(function(t){return t.vars.id===r})[0]};up()&&Qe.registerPlugin(Ne);/*!
 * ScrollTrigger 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var St,Ts,te,de,On,he,ju,ml,$o,Do,Mo,la,rn,Rl,Gc,dn,Bh,kh,bs,pp,Yl,mp,fn,Wc,_p,gp,Ji,Xc,Ju,Fs,Qu,Io,Yc,ql,ca=1,sn=Date.now,$l=sn(),ti=0,yo=0,zh=function(t,e,n){var i=Un(t)&&(t.substr(0,6)==="clamp("||t.indexOf("max")>-1);return n["_"+e+"Clamp"]=i,i?t.substr(6,t.length-7):t},Hh=function(t,e){return e&&(!Un(t)||t.substr(0,6)!=="clamp(")?"clamp("+t+")":t},tg=function r(){return yo&&requestAnimationFrame(r)},Vh=function(){return Rl=1},Gh=function(){return Rl=0},fi=function(t){return t},Eo=function(t){return Math.round(t*1e5)/1e5||0},vp=function(){return typeof window<"u"},xp=function(){return St||vp()&&(St=window.gsap)&&St.registerPlugin&&St},$r=function(t){return!!~ju.indexOf(t)},Sp=function(t){return(t==="Height"?Qu:te["inner"+t])||On["client"+t]||he["client"+t]},Mp=function(t){return lr(t,"getBoundingClientRect")||($r(t)?function(){return Ja.width=te.innerWidth,Ja.height=Qu,Ja}:function(){return Ui(t)})},eg=function(t,e,n){var i=n.d,s=n.d2,o=n.a;return(o=lr(t,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(e?Sp(s):t["client"+s])||0}},ng=function(t,e){return!e||~yi.indexOf(t)?Mp(t):function(){return Ja}},Si=function(t,e){var n=e.s,i=e.d2,s=e.d,o=e.a;return Math.max(0,(n="scroll"+i)&&(o=lr(t,n))?o()-Mp(t)()[s]:$r(t)?(On[n]||he[n])-Sp(i):t[n]-t["offset"+i])},ua=function(t,e){for(var n=0;n<bs.length;n+=3)(!e||~e.indexOf(bs[n+1]))&&t(bs[n],bs[n+1],bs[n+2])},Un=function(t){return typeof t=="string"},an=function(t){return typeof t=="function"},To=function(t){return typeof t=="number"},Rr=function(t){return typeof t=="object"},co=function(t,e,n){return t&&t.progress(e?0:1)&&n&&t.pause()},is=function(t,e,n){if(t.enabled){var i=t._ctx?t._ctx.add(function(){return e(t,n)}):e(t,n);i&&i.totalTime&&(t.callbackAnimation=i)}},rs=Math.abs,yp="left",Ep="top",th="right",eh="bottom",Wr="width",Xr="height",Uo="Right",No="Left",Oo="Top",Fo="Bottom",Be="padding",$n="margin",qs="Width",nh="Height",Ve="px",Kn=function(t){return te.getComputedStyle(t.nodeType===Node.DOCUMENT_NODE?t.scrollingElement:t)},ig=function(t){var e=Kn(t).position;t.style.position=e==="absolute"||e==="fixed"?e:"relative"},Wh=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},Ui=function(t,e){var n=e&&Kn(t)[Gc]!=="matrix(1, 0, 0, 1, 0, 0)"&&St.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=t.getBoundingClientRect?t.getBoundingClientRect():t.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),i},_l=function(t,e){var n=e.d2;return t["offset"+n]||t["client"+n]||0},Tp=function(t){var e=[],n=t.labels,i=t.duration(),s;for(s in n)e.push(n[s]/i);return e},rg=function(t){return function(e){return St.utils.snap(Tp(t),e)}},ih=function(t){var e=St.utils.snap(t),n=Array.isArray(t)&&t.slice(0).sort(function(i,s){return i-s});return n?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return e(i);if(s>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,s,o){o===void 0&&(o=.001);var a=e(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:e(s<0?i-t:i+t)}},sg=function(t){return function(e,n){return ih(Tp(t))(e,n.direction)}},ha=function(t,e,n,i){return n.split(",").forEach(function(s){return t(e,s,i)})},$e=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:!i,capture:!!s})},qe=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},fa=function(t,e,n){n=n&&n.wheelHandler,n&&(t(e,"wheel",n),t(e,"touchmove",n))},Xh={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},da={toggleActions:"play",anticipatePin:0},gl={top:0,left:0,center:.5,bottom:1,right:1},$a=function(t,e){if(Un(t)){var n=t.indexOf("="),i=~n?+(t.charAt(n-1)+1)*parseFloat(t.substr(n+1)):0;~n&&(t.indexOf("%")>n&&(i*=e/100),t=t.substr(0,n-1)),t=i+(t in gl?gl[t]*e:~t.indexOf("%")?parseFloat(t)*e/100:parseFloat(t)||0)}return t},pa=function(t,e,n,i,s,o,a,l){var c=s.startColor,u=s.endColor,f=s.fontSize,h=s.indent,d=s.fontWeight,g=de.createElement("div"),_=$r(n)||lr(n,"pinType")==="fixed",p=t.indexOf("scroller")!==-1,m=_?he:n.tagName==="IFRAME"?n.contentDocument.body:n,y=t.indexOf("start")!==-1,x=y?c:u,M="border-color:"+x+";font-size:"+f+";color:"+x+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return M+="position:"+((p||l)&&_?"fixed;":"absolute;"),(p||l||!_)&&(M+=(i===Ge?th:eh)+":"+(o+parseFloat(h))+"px;"),a&&(M+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),g._isStart=y,g.setAttribute("class","gsap-marker-"+t+(e?" marker-"+e:"")),g.style.cssText=M,g.innerText=e||e===0?t+"-"+e:t,m.children[0]?m.insertBefore(g,m.children[0]):m.appendChild(g),g._offset=g["offset"+i.op.d2],Ka(g,0,i,y),g},Ka=function(t,e,n,i){var s={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];t._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+o+qs]=1,s["border"+a+qs]=0,s[n.p]=e+"px",St.set(t,s)},Zt=[],qc={},Ko,Yh=function(){return sn()-ti>34&&(Ko||(Ko=requestAnimationFrame(Bi)))},ss=function(){(!fn||!fn.isPressed||fn.startX>he.clientWidth)&&(ee.cache++,fn?Ko||(Ko=requestAnimationFrame(Bi)):Bi(),ti||Zr("scrollStart"),ti=sn())},Kl=function(){gp=te.innerWidth,_p=te.innerHeight},bo=function(t){ee.cache++,(t===!0||!rn&&!mp&&!de.fullscreenElement&&!de.webkitFullscreenElement&&(!Wc||gp!==te.innerWidth||Math.abs(te.innerHeight-_p)>te.innerHeight*.25))&&ml.restart(!0)},Kr={},og=[],bp=function r(){return qe(jt,"scrollEnd",r)||Fr(!0)},Zr=function(t){return Kr[t]&&Kr[t].map(function(e){return e()})||og},In=[],wp=function(t){for(var e=0;e<In.length;e+=5)(!t||In[e+4]&&In[e+4].query===t)&&(In[e].style.cssText=In[e+1],In[e].getBBox&&In[e].setAttribute("transform",In[e+2]||""),In[e+3].uncache=1)},Ap=function(){return ee.forEach(function(t){return an(t)&&++t.cacheID&&(t.rec=t())})},rh=function(t,e){var n;for(dn=0;dn<Zt.length;dn++)n=Zt[dn],n&&(!e||n._ctx===e)&&(t?n.kill(1):n.revert(!0,!0));Io=!0,e&&wp(e),e||Zr("revert")},Cp=function(t,e){ee.cache++,(e||!pn)&&ee.forEach(function(n){return an(n)&&n.cacheID++&&(n.rec=0)}),Un(t)&&(te.history.scrollRestoration=Ju=t)},pn,Yr=0,qh,ag=function(){if(qh!==Yr){var t=qh=Yr;requestAnimationFrame(function(){return t===Yr&&Fr(!0)})}},Rp=function(){he.appendChild(Fs),Qu=!fn&&Fs.offsetHeight||te.innerHeight,he.removeChild(Fs)},$h=function(t){return $o(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(e){return e.style.display=t?"none":"block"})},Fr=function(t,e){if(On=de.documentElement,he=de.body,ju=[te,de,On,he],ti&&!t&&!Io){$e(jt,"scrollEnd",bp);return}Rp(),pn=jt.isRefreshing=!0,Io||Ap();var n=Zr("refreshInit");pp&&jt.sort(),e||rh(),ee.forEach(function(i){an(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),Zt.slice(0).forEach(function(i){return i.refresh()}),Io=!1,Zt.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-o),i.refresh()}}),Yc=1,$h(!0),Zt.forEach(function(i){var s=Si(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>s,a=i._startClamp&&i.start>=s;(o||a)&&i.setPositions(a?s-1:i.start,o?Math.max(a?s:i.start+1,s):i.end,!0)}),$h(!1),Yc=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),ee.forEach(function(i){an(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),Cp(Ju,1),ml.pause(),Yr++,pn=2,Bi(2),Zt.forEach(function(i){return an(i.vars.onRefresh)&&i.vars.onRefresh(i)}),pn=jt.isRefreshing=!1,Zr("refresh")},$c=0,Za=1,Bo,Bi=function(t){if(t===2||!pn&&!Io){jt.isUpdating=!0,Bo&&Bo.update(0);var e=Zt.length,n=sn(),i=n-$l>=50,s=e&&Zt[0].scroll();if(Za=$c>s?-1:1,pn||($c=s),i&&(ti&&!Rl&&n-ti>200&&(ti=0,Zr("scrollEnd")),Mo=$l,$l=n),Za<0){for(dn=e;dn-- >0;)Zt[dn]&&Zt[dn].update(0,i);Za=1}else for(dn=0;dn<e;dn++)Zt[dn]&&Zt[dn].update(0,i);jt.isUpdating=!1}Ko=0},Kc=[yp,Ep,eh,th,$n+Fo,$n+Uo,$n+Oo,$n+No,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],ja=Kc.concat([Wr,Xr,"boxSizing","max"+qs,"max"+nh,"position",$n,Be,Be+Oo,Be+Uo,Be+Fo,Be+No]),lg=function(t,e,n){Bs(n);var i=t._gsap;if(i.spacerIsNative)Bs(i.spacerState);else if(t._gsap.swappedIn){var s=e.parentNode;s&&(s.insertBefore(t,e),s.removeChild(e))}t._gsap.swappedIn=!1},Zl=function(t,e,n,i){if(!t._gsap.swappedIn){for(var s=Kc.length,o=e.style,a=t.style,l;s--;)l=Kc[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[eh]=a[th]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[Wr]=_l(t,mn)+Ve,o[Xr]=_l(t,Ge)+Ve,o[Be]=a[$n]=a[Ep]=a[yp]="0",Bs(i),a[Wr]=a["max"+qs]=n[Wr],a[Xr]=a["max"+nh]=n[Xr],a[Be]=n[Be],t.parentNode!==e&&(t.parentNode.insertBefore(e,t),e.appendChild(t)),t._gsap.swappedIn=!0}},cg=/([A-Z])/g,Bs=function(t){if(t){var e=t.t.style,n=t.length,i=0,s,o;for((t.t._gsap||St.core.getCache(t.t)).uncache=1;i<n;i+=2)o=t[i+1],s=t[i],o?e[s]=o:e[s]&&e.removeProperty(s.replace(cg,"-$1").toLowerCase())}},ma=function(t){for(var e=ja.length,n=t.style,i=[],s=0;s<e;s++)i.push(ja[s],n[ja[s]]);return i.t=t,i},ug=function(t,e,n){for(var i=[],s=t.length,o=n?8:0,a;o<s;o+=2)a=t[o],i.push(a,a in e?e[a]:t[o+1]);return i.t=t.t,i},Ja={left:0,top:0},Kh=function(t,e,n,i,s,o,a,l,c,u,f,h,d,g){an(t)&&(t=t(l)),Un(t)&&t.substr(0,3)==="max"&&(t=h+(t.charAt(4)==="="?$a("0"+t.substr(3),n):0));var _=d?d.time():0,p,m,y;if(d&&d.seek(0),isNaN(t)||(t=+t),To(t))d&&(t=St.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,h,t)),a&&Ka(a,n,i,!0);else{an(e)&&(e=e(l));var x=(t||"0").split(" "),M,A,w,T;y=vn(e,l)||he,M=Ui(y)||{},(!M||!M.left&&!M.top)&&Kn(y).display==="none"&&(T=y.style.display,y.style.display="block",M=Ui(y),T?y.style.display=T:y.style.removeProperty("display")),A=$a(x[0],M[i.d]),w=$a(x[1]||"0",n),t=M[i.p]-c[i.p]-u+A+s-w,a&&Ka(a,w,i,n-w<20||a._isStart&&w>20),n-=n-w}if(g&&(l[g]=t||-.001,t<0&&(t=0)),o){var C=t+n,S=o._isStart;p="scroll"+i.d2,Ka(o,C,i,S&&C>20||!S&&(f?Math.max(he[p],On[p]):o.parentNode[p])<=C+1),f&&(c=Ui(a),f&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+Ve))}return d&&y&&(p=Ui(y),d.seek(h),m=Ui(y),d._caScrollDist=p[i.p]-m[i.p],t=t/d._caScrollDist*h),d&&d.seek(_),d?t:Math.round(t)},hg=/(webkit|moz|length|cssText|inset)/i,Zh=function(t,e,n,i){if(t.parentNode!==e){var s=t.style,o,a;if(e===he){t._stOrig=s.cssText,a=Kn(t);for(o in a)!+o&&!hg.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=i}else s.cssText=t._stOrig;St.core.getCache(t).uncache=1,e.appendChild(t)}},Pp=function(t,e,n){var i=e,s=i;return function(o){var a=Math.round(t());return a!==i&&a!==s&&Math.abs(a-i)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=i,i=Math.round(o),i}},_a=function(t,e,n){var i={};i[e.p]="+="+n,St.set(t,i)},jh=function(t,e){var n=pr(t,e),i="_scroll"+e.p2,s=function o(a,l,c,u,f){var h=o.tween,d=l.onComplete,g={};c=c||n();var _=Pp(n,c,function(){h.kill(),o.tween=0});return f=u&&f||0,u=u||a-c,h&&h.kill(),l[i]=a,l.inherit=!1,l.modifiers=g,g[i]=function(){return _(c+u*h.ratio+f*h.ratio*h.ratio)},l.onUpdate=function(){ee.cache++,o.tween&&Bi()},l.onComplete=function(){o.tween=0,d&&d.call(h)},h=o.tween=St.to(t,l),h};return t[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},$e(t,"wheel",n.wheelHandler),jt.isTouch&&$e(t,"touchmove",n.wheelHandler),s},jt=function(){function r(e,n){Ts||r.register(St)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Xc(this),this.init(e,n)}var t=r.prototype;return t.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!yo){this.update=this.refresh=this.kill=fi;return}n=Wh(Un(n)||To(n)||n.nodeType?{trigger:n}:n,da);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,f=s.scrub,h=s.trigger,d=s.pin,g=s.pinSpacing,_=s.invalidateOnRefresh,p=s.anticipatePin,m=s.onScrubComplete,y=s.onSnapComplete,x=s.once,M=s.snap,A=s.pinReparent,w=s.pinSpacer,T=s.containerAnimation,C=s.fastScrollEnd,S=s.preventOverlaps,v=n.horizontal||n.containerAnimation&&n.horizontal!==!1?mn:Ge,P=!f&&f!==0,U=vn(n.scroller||te),I=St.core.getCache(U),z=$r(U),Y=("pinType"in n?n.pinType:lr(U,"pinType")||z&&"fixed")==="fixed",W=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],B=P&&n.toggleActions.split(" "),V="markers"in n?n.markers:da.markers,st=z?0:parseFloat(Kn(U)["border"+v.p2+qs])||0,L=this,lt=n.onRefreshInit&&function(){return n.onRefreshInit(L)},Bt=eg(U,z,v),qt=ng(U,z),$=0,tt=0,ut=0,at=pr(U,v),wt,Rt,Gt,Jt,D,Dt,Ot,Xt,gt,G,At,Ft,R,E,X,Q,nt,Z,Et,it,dt,Ut,rt,_t,Pt,kt,mt,zt,Wt,le,O,K,j,J,ot,Tt,Yt,ge,ve;if(L._startClamp=L._endClamp=!1,L._dir=v,p*=45,L.scroller=U,L.scroll=T?T.time.bind(T):at,Jt=at(),L.vars=n,i=i||n.animation,"refreshPriority"in n&&(pp=1,n.refreshPriority===-9999&&(Bo=L)),I.tweenScroll=I.tweenScroll||{top:jh(U,Ge),left:jh(U,mn)},L.tweenTo=wt=I.tweenScroll[v.p],L.scrubDuration=function(ct){j=To(ct)&&ct,j?K?K.duration(ct):K=St.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:j,paused:!0,onComplete:function(){return m&&m(L)}}):(K&&K.progress(1).kill(),K=0)},i&&(i.vars.lazy=!1,i._initted&&!L.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),L.animation=i.pause(),i.scrollTrigger=L,L.scrubDuration(f),le=0,l||(l=i.vars.id)),M&&((!Rr(M)||M.push)&&(M={snapTo:M}),"scrollBehavior"in he.style&&St.set(z?[he,On]:U,{scrollBehavior:"auto"}),ee.forEach(function(ct){return an(ct)&&ct.target===(z?de.scrollingElement||On:U)&&(ct.smooth=!1)}),Gt=an(M.snapTo)?M.snapTo:M.snapTo==="labels"?rg(i):M.snapTo==="labelsDirectional"?sg(i):M.directional!==!1?function(ct,Ht){return ih(M.snapTo)(ct,sn()-tt<500?0:Ht.direction)}:St.utils.snap(M.snapTo),J=M.duration||{min:.1,max:2},J=Rr(J)?Do(J.min,J.max):Do(J,J),ot=St.delayedCall(M.delay||j/2||.1,function(){var ct=at(),Ht=sn()-tt<500,Lt=wt.tween;if((Ht||Math.abs(L.getVelocity())<10)&&!Lt&&!Rl&&$!==ct){var Vt=(ct-Dt)/E,Ae=i&&!P?i.totalProgress():Vt,Qt=Ht?0:(Ae-O)/(sn()-Mo)*1e3||0,ye=St.utils.clamp(-Vt,1-Vt,rs(Qt/2)*Qt/.185),ze=Vt+(M.inertia===!1?0:ye),Te,Ee,fe=M,Rn=fe.onStart,b=fe.onInterrupt,N=fe.onComplete;if(Te=Gt(ze,L),To(Te)||(Te=ze),Ee=Math.max(0,Math.round(Dt+Te*E)),ct<=Ot&&ct>=Dt&&Ee!==ct){if(Lt&&!Lt._initted&&Lt.data<=rs(Ee-ct))return;M.inertia===!1&&(ye=Te-Vt),wt(Ee,{duration:J(rs(Math.max(rs(ze-Ae),rs(Te-Ae))*.185/Qt/.05||0)),ease:M.ease||"power3",data:rs(Ee-ct),onInterrupt:function(){return ot.restart(!0)&&b&&is(L,b)},onComplete:function(){L.update(),$=at(),i&&!P&&(K?K.resetTo("totalProgress",Te,i._tTime/i._tDur):i.progress(Te)),le=O=i&&!P?i.totalProgress():L.progress,y&&y(L),N&&is(L,N)}},ct,ye*E,Ee-ct-ye*E),Rn&&is(L,Rn,wt.tween)}}else L.isActive&&$!==ct&&ot.restart(!0)}).pause()),l&&(qc[l]=L),h=L.trigger=vn(h||d!==!0&&d),ve=h&&h._gsap&&h._gsap.stRevert,ve&&(ve=ve(L)),d=d===!0?h:vn(d),Un(a)&&(a={targets:h,className:a}),d&&(g===!1||g===$n||(g=!g&&d.parentNode&&d.parentNode.style&&Kn(d.parentNode).display==="flex"?!1:Be),L.pin=d,Rt=St.core.getCache(d),Rt.spacer?X=Rt.pinState:(w&&(w=vn(w),w&&!w.nodeType&&(w=w.current||w.nativeElement),Rt.spacerIsNative=!!w,w&&(Rt.spacerState=ma(w))),Rt.spacer=Z=w||de.createElement("div"),Z.classList.add("pin-spacer"),l&&Z.classList.add("pin-spacer-"+l),Rt.pinState=X=ma(d)),n.force3D!==!1&&St.set(d,{force3D:!0}),L.spacer=Z=Rt.spacer,Wt=Kn(d),_t=Wt[g+v.os2],it=St.getProperty(d),dt=St.quickSetter(d,v.a,Ve),Zl(d,Z,Wt),nt=ma(d)),V){Ft=Rr(V)?Wh(V,Xh):Xh,G=pa("scroller-start",l,U,v,Ft,0),At=pa("scroller-end",l,U,v,Ft,0,G),Et=G["offset"+v.op.d2];var ne=vn(lr(U,"content")||U);Xt=this.markerStart=pa("start",l,ne,v,Ft,Et,0,T),gt=this.markerEnd=pa("end",l,ne,v,Ft,Et,0,T),T&&(ge=St.quickSetter([Xt,gt],v.a,Ve)),!Y&&!(yi.length&&lr(U,"fixedMarkers")===!0)&&(ig(z?he:U),St.set([G,At],{force3D:!0}),kt=St.quickSetter(G,v.a,Ve),zt=St.quickSetter(At,v.a,Ve))}if(T){var Nt=T.vars.onUpdate,yt=T.vars.onUpdateParams;T.eventCallback("onUpdate",function(){L.update(0,0,1),Nt&&Nt.apply(T,yt||[])})}if(L.previous=function(){return Zt[Zt.indexOf(L)-1]},L.next=function(){return Zt[Zt.indexOf(L)+1]},L.revert=function(ct,Ht){if(!Ht)return L.kill(!0);var Lt=ct!==!1||!L.enabled,Vt=rn;Lt!==L.isReverted&&(Lt&&(Tt=Math.max(at(),L.scroll.rec||0),ut=L.progress,Yt=i&&i.progress()),Xt&&[Xt,gt,G,At].forEach(function(Ae){return Ae.style.display=Lt?"none":"block"}),Lt&&(rn=L,L.update(Lt)),d&&(!A||!L.isActive)&&(Lt?lg(d,Z,X):Zl(d,Z,Kn(d),Pt)),Lt||L.update(Lt),rn=Vt,L.isReverted=Lt)},L.refresh=function(ct,Ht,Lt,Vt){if(!((rn||!L.enabled)&&!Ht)){if(d&&ct&&ti){$e(r,"scrollEnd",bp);return}!pn&&lt&&lt(L),rn=L,wt.tween&&!Lt&&(wt.tween.kill(),wt.tween=0),K&&K.pause(),_&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(Mt){return Mt.vars.immediateRender&&Mt.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),L.isReverted||L.revert(!0,!0),L._subPinOffset=!1;var Ae=Bt(),Qt=qt(),ye=T?T.duration():Si(U,v),ze=E<=.01||!E,Te=0,Ee=Vt||0,fe=Rr(Lt)?Lt.end:n.end,Rn=n.endTrigger||h,b=Rr(Lt)?Lt.start:n.start||(n.start===0||!h?0:d?"0 0":"0 100%"),N=L.pinnedContainer=n.pinnedContainer&&vn(n.pinnedContainer,L),H=h&&Math.max(0,Zt.indexOf(L))||0,k=H,F,et,ht,xt,ft,vt,Ct,It,oe,me,ae,He,ie;for(V&&Rr(Lt)&&(He=St.getProperty(G,v.p),ie=St.getProperty(At,v.p));k-- >0;)vt=Zt[k],vt.end||vt.refresh(0,1)||(rn=L),Ct=vt.pin,Ct&&(Ct===h||Ct===d||Ct===N)&&!vt.isReverted&&(me||(me=[]),me.unshift(vt),vt.revert(!0,!0)),vt!==Zt[k]&&(H--,k--);for(an(b)&&(b=b(L)),b=zh(b,"start",L),Dt=Kh(b,h,Ae,v,at(),Xt,G,L,Qt,st,Y,ye,T,L._startClamp&&"_startClamp")||(d?-.001:0),an(fe)&&(fe=fe(L)),Un(fe)&&!fe.indexOf("+=")&&(~fe.indexOf(" ")?fe=(Un(b)?b.split(" ")[0]:"")+fe:(Te=$a(fe.substr(2),Ae),fe=Un(b)?b:(T?St.utils.mapRange(0,T.duration(),T.scrollTrigger.start,T.scrollTrigger.end,Dt):Dt)+Te,Rn=h)),fe=zh(fe,"end",L),Ot=Math.max(Dt,Kh(fe||(Rn?"100% 0":ye),Rn,Ae,v,at()+Te,gt,At,L,Qt,st,Y,ye,T,L._endClamp&&"_endClamp"))||-.001,Te=0,k=H;k--;)vt=Zt[k]||{},Ct=vt.pin,Ct&&vt.start-vt._pinPush<=Dt&&!T&&vt.end>0&&(F=vt.end-(L._startClamp?Math.max(0,vt.start):vt.start),(Ct===h&&vt.start-vt._pinPush<Dt||Ct===N)&&isNaN(b)&&(Te+=F*(1-vt.progress)),Ct===d&&(Ee+=F));if(Dt+=Te,Ot+=Te,L._startClamp&&(L._startClamp+=Te),L._endClamp&&!pn&&(L._endClamp=Ot||-.001,Ot=Math.min(Ot,Si(U,v))),E=Ot-Dt||(Dt-=.01)&&.001,ze&&(ut=St.utils.clamp(0,1,St.utils.normalize(Dt,Ot,Tt))),L._pinPush=Ee,Xt&&Te&&(F={},F[v.a]="+="+Te,N&&(F[v.p]="-="+at()),St.set([Xt,gt],F)),d&&!(Yc&&L.end>=Si(U,v)))F=Kn(d),xt=v===Ge,ht=at(),Ut=parseFloat(it(v.a))+Ee,!ye&&Ot>1&&(ae=(z?de.scrollingElement||On:U).style,ae={style:ae,value:ae["overflow"+v.a.toUpperCase()]},z&&Kn(he)["overflow"+v.a.toUpperCase()]!=="scroll"&&(ae.style["overflow"+v.a.toUpperCase()]="scroll")),Zl(d,Z,F),nt=ma(d),et=Ui(d,!0),It=Y&&pr(U,xt?mn:Ge)(),g?(Pt=[g+v.os2,E+Ee+Ve],Pt.t=Z,k=g===Be?_l(d,v)+E+Ee:0,k&&(Pt.push(v.d,k+Ve),Z.style.flexBasis!=="auto"&&(Z.style.flexBasis=k+Ve)),Bs(Pt),N&&Zt.forEach(function(Mt){Mt.pin===N&&Mt.vars.pinSpacing!==!1&&(Mt._subPinOffset=!0)}),Y&&at(Tt)):(k=_l(d,v),k&&Z.style.flexBasis!=="auto"&&(Z.style.flexBasis=k+Ve)),Y&&(ft={top:et.top+(xt?ht-Dt:It)+Ve,left:et.left+(xt?It:ht-Dt)+Ve,boxSizing:"border-box",position:"fixed"},ft[Wr]=ft["max"+qs]=Math.ceil(et.width)+Ve,ft[Xr]=ft["max"+nh]=Math.ceil(et.height)+Ve,ft[$n]=ft[$n+Oo]=ft[$n+Uo]=ft[$n+Fo]=ft[$n+No]="0",ft[Be]=F[Be],ft[Be+Oo]=F[Be+Oo],ft[Be+Uo]=F[Be+Uo],ft[Be+Fo]=F[Be+Fo],ft[Be+No]=F[Be+No],Q=ug(X,ft,A),pn&&at(0)),i?(oe=i._initted,Yl(1),i.render(i.duration(),!0,!0),rt=it(v.a)-Ut+E+Ee,mt=Math.abs(E-rt)>1,Y&&mt&&Q.splice(Q.length-2,2),i.render(0,!0,!0),oe||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),Yl(0)):rt=E,ae&&(ae.value?ae.style["overflow"+v.a.toUpperCase()]=ae.value:ae.style.removeProperty("overflow-"+v.a));else if(h&&at()&&!T)for(et=h.parentNode;et&&et!==he;)et._pinOffset&&(Dt-=et._pinOffset,Ot-=et._pinOffset),et=et.parentNode;me&&me.forEach(function(Mt){return Mt.revert(!1,!0)}),L.start=Dt,L.end=Ot,Jt=D=pn?Tt:at(),!T&&!pn&&(Jt<Tt&&at(Tt),L.scroll.rec=0),L.revert(!1,!0),tt=sn(),ot&&($=-1,ot.restart(!0)),rn=0,i&&P&&(i._initted||Yt)&&i.progress()!==Yt&&i.progress(Yt||0,!0).render(i.time(),!0,!0),(ze||ut!==L.progress||T||_||i&&!i._initted)&&(i&&!P&&(i._initted||ut||i.vars.immediateRender!==!1)&&i.totalProgress(T&&Dt<-.001&&!ut?St.utils.normalize(Dt,Ot,0):ut,!0),L.progress=ze||(Jt-Dt)/E===ut?0:ut),d&&g&&(Z._pinOffset=Math.round(L.progress*rt)),K&&K.invalidate(),isNaN(He)||(He-=St.getProperty(G,v.p),ie-=St.getProperty(At,v.p),_a(G,v,He),_a(Xt,v,He-(Vt||0)),_a(At,v,ie),_a(gt,v,ie-(Vt||0))),ze&&!pn&&L.update(),u&&!pn&&!R&&(R=!0,u(L),R=!1)}},L.getVelocity=function(){return(at()-D)/(sn()-Mo)*1e3||0},L.endAnimation=function(){co(L.callbackAnimation),i&&(K?K.progress(1):i.paused()?P||co(i,L.direction<0,1):co(i,i.reversed()))},L.labelToScroll=function(ct){return i&&i.labels&&(Dt||L.refresh()||Dt)+i.labels[ct]/i.duration()*E||0},L.getTrailing=function(ct){var Ht=Zt.indexOf(L),Lt=L.direction>0?Zt.slice(0,Ht).reverse():Zt.slice(Ht+1);return(Un(ct)?Lt.filter(function(Vt){return Vt.vars.preventOverlaps===ct}):Lt).filter(function(Vt){return L.direction>0?Vt.end<=Dt:Vt.start>=Ot})},L.update=function(ct,Ht,Lt){if(!(T&&!Lt&&!ct)){var Vt=pn===!0?Tt:L.scroll(),Ae=ct?0:(Vt-Dt)/E,Qt=Ae<0?0:Ae>1?1:Ae||0,ye=L.progress,ze,Te,Ee,fe,Rn,b,N,H;if(Ht&&(D=Jt,Jt=T?at():Vt,M&&(O=le,le=i&&!P?i.totalProgress():Qt)),p&&d&&!rn&&!ca&&ti&&(!Qt&&Dt<Vt+(Vt-D)/(sn()-Mo)*p?Qt=1e-4:Qt===1&&Ot>Vt+(Vt-D)/(sn()-Mo)*p&&(Qt=.9999)),Qt!==ye&&L.enabled){if(ze=L.isActive=!!Qt&&Qt<1,Te=!!ye&&ye<1,b=ze!==Te,Rn=b||!!Qt!=!!ye,L.direction=Qt>ye?1:-1,L.progress=Qt,Rn&&!rn&&(Ee=Qt&&!ye?0:Qt===1?1:ye===1?2:3,P&&(fe=!b&&B[Ee+1]!=="none"&&B[Ee+1]||B[Ee],H=i&&(fe==="complete"||fe==="reset"||fe in i))),S&&(b||H)&&(H||f||!i)&&(an(S)?S(L):L.getTrailing(S).forEach(function(ht){return ht.endAnimation()})),P||(K&&!rn&&!ca?(K._dp._time-K._start!==K._time&&K.render(K._dp._time-K._start),K.resetTo?K.resetTo("totalProgress",Qt,i._tTime/i._tDur):(K.vars.totalProgress=Qt,K.invalidate().restart())):i&&i.totalProgress(Qt,!!(rn&&(tt||ct)))),d){if(ct&&g&&(Z.style[g+v.os2]=_t),!Y)dt(Eo(Ut+rt*Qt));else if(Rn){if(N=!ct&&Qt>ye&&Ot+1>Vt&&Vt+1>=Si(U,v),A)if(!ct&&(ze||N)){var k=Ui(d,!0),F=Vt-Dt;Zh(d,he,k.top+(v===Ge?F:0)+Ve,k.left+(v===Ge?0:F)+Ve)}else Zh(d,Z);Bs(ze||N?Q:nt),mt&&Qt<1&&ze||dt(Ut+(Qt===1&&!N?rt:0))}}M&&!wt.tween&&!rn&&!ca&&ot.restart(!0),a&&(b||x&&Qt&&(Qt<1||!ql))&&$o(a.targets).forEach(function(ht){return ht.classList[ze||x?"add":"remove"](a.className)}),o&&!P&&!ct&&o(L),Rn&&!rn?(P&&(H&&(fe==="complete"?i.pause().totalProgress(1):fe==="reset"?i.restart(!0).pause():fe==="restart"?i.restart(!0):i[fe]()),o&&o(L)),(b||!ql)&&(c&&b&&is(L,c),W[Ee]&&is(L,W[Ee]),x&&(Qt===1?L.kill(!1,1):W[Ee]=0),b||(Ee=Qt===1?1:3,W[Ee]&&is(L,W[Ee]))),C&&!ze&&Math.abs(L.getVelocity())>(To(C)?C:2500)&&(co(L.callbackAnimation),K?K.progress(1):co(i,fe==="reverse"?1:!Qt,1))):P&&o&&!rn&&o(L)}if(zt){var et=T?Vt/T.duration()*(T._caScrollDist||0):Vt;kt(et+(G._isFlipped?1:0)),zt(et)}ge&&ge(-Vt/T.duration()*(T._caScrollDist||0))}},L.enable=function(ct,Ht){L.enabled||(L.enabled=!0,$e(U,"resize",bo),z||$e(U,"scroll",ss),lt&&$e(r,"refreshInit",lt),ct!==!1&&(L.progress=ut=0,Jt=D=$=at()),Ht!==!1&&L.refresh())},L.getTween=function(ct){return ct&&wt?wt.tween:K},L.setPositions=function(ct,Ht,Lt,Vt){if(T){var Ae=T.scrollTrigger,Qt=T.duration(),ye=Ae.end-Ae.start;ct=Ae.start+ye*ct/Qt,Ht=Ae.start+ye*Ht/Qt}L.refresh(!1,!1,{start:Hh(ct,Lt&&!!L._startClamp),end:Hh(Ht,Lt&&!!L._endClamp)},Vt),L.update()},L.adjustPinSpacing=function(ct){if(Pt&&ct){var Ht=Pt.indexOf(v.d)+1;Pt[Ht]=parseFloat(Pt[Ht])+ct+Ve,Pt[1]=parseFloat(Pt[1])+ct+Ve,Bs(Pt)}},L.disable=function(ct,Ht){if(ct!==!1&&L.revert(!0,!0),L.enabled&&(L.enabled=L.isActive=!1,Ht||K&&K.pause(),Tt=0,Rt&&(Rt.uncache=1),lt&&qe(r,"refreshInit",lt),ot&&(ot.pause(),wt.tween&&wt.tween.kill()&&(wt.tween=0)),!z)){for(var Lt=Zt.length;Lt--;)if(Zt[Lt].scroller===U&&Zt[Lt]!==L)return;qe(U,"resize",bo),z||qe(U,"scroll",ss)}},L.kill=function(ct,Ht){L.disable(ct,Ht),K&&!Ht&&K.kill(),l&&delete qc[l];var Lt=Zt.indexOf(L);Lt>=0&&Zt.splice(Lt,1),Lt===dn&&Za>0&&dn--,Lt=0,Zt.forEach(function(Vt){return Vt.scroller===L.scroller&&(Lt=1)}),Lt||pn||(L.scroll.rec=0),i&&(i.scrollTrigger=null,ct&&i.revert({kill:!1}),Ht||i.kill()),Xt&&[Xt,gt,G,At].forEach(function(Vt){return Vt.parentNode&&Vt.parentNode.removeChild(Vt)}),Bo===L&&(Bo=0),d&&(Rt&&(Rt.uncache=1),Lt=0,Zt.forEach(function(Vt){return Vt.pin===d&&Lt++}),Lt||(Rt.spacer=0)),n.onKill&&n.onKill(L)},Zt.push(L),L.enable(!1,!1),ve&&ve(L),i&&i.add&&!E){var se=L.update;L.update=function(){L.update=se,ee.cache++,Dt||Ot||L.refresh()},St.delayedCall(.01,L.update),E=.01,Dt=Ot=0}else L.refresh();d&&ag()},r.register=function(n){return Ts||(St=n||xp(),vp()&&window.document&&r.enable(),Ts=yo),Ts},r.defaults=function(n){if(n)for(var i in n)da[i]=n[i];return da},r.disable=function(n,i){yo=0,Zt.forEach(function(o){return o[i?"kill":"disable"](n)}),qe(te,"wheel",ss),qe(de,"scroll",ss),clearInterval(la),qe(de,"touchcancel",fi),qe(he,"touchstart",fi),ha(qe,de,"pointerdown,touchstart,mousedown",Vh),ha(qe,de,"pointerup,touchend,mouseup",Gh),ml.kill(),ua(qe);for(var s=0;s<ee.length;s+=3)fa(qe,ee[s],ee[s+1]),fa(qe,ee[s],ee[s+2])},r.enable=function(){if(te=window,de=document,On=de.documentElement,he=de.body,St){if($o=St.utils.toArray,Do=St.utils.clamp,Xc=St.core.context||fi,Yl=St.core.suppressOverwrites||fi,Ju=te.history.scrollRestoration||"auto",$c=te.pageYOffset||0,St.core.globals("ScrollTrigger",r),he){yo=1,Fs=document.createElement("div"),Fs.style.height="100vh",Fs.style.position="absolute",Rp(),tg(),Ne.register(St),r.isTouch=Ne.isTouch,Ji=Ne.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Wc=Ne.isTouch===1,$e(te,"wheel",ss),ju=[te,de,On,he],St.matchMedia?(r.matchMedia=function(u){var f=St.matchMedia(),h;for(h in u)f.add(h,u[h]);return f},St.addEventListener("matchMediaInit",function(){Ap(),rh()}),St.addEventListener("matchMediaRevert",function(){return wp()}),St.addEventListener("matchMedia",function(){Fr(0,1),Zr("matchMedia")}),St.matchMedia().add("(orientation: portrait)",function(){return Kl(),Kl})):console.warn("Requires GSAP 3.11.0 or later"),Kl(),$e(de,"scroll",ss);var n=he.hasAttribute("style"),i=he.style,s=i.borderTopStyle,o=St.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=Ui(he),Ge.m=Math.round(a.top+Ge.sc())||0,mn.m=Math.round(a.left+mn.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(he.setAttribute("style",""),he.removeAttribute("style")),la=setInterval(Yh,250),St.delayedCall(.5,function(){return ca=0}),$e(de,"touchcancel",fi),$e(he,"touchstart",fi),ha($e,de,"pointerdown,touchstart,mousedown",Vh),ha($e,de,"pointerup,touchend,mouseup",Gh),Gc=St.utils.checkPrefix("transform"),ja.push(Gc),Ts=sn(),ml=St.delayedCall(.2,Fr).pause(),bs=[de,"visibilitychange",function(){var u=te.innerWidth,f=te.innerHeight;de.hidden?(Bh=u,kh=f):(Bh!==u||kh!==f)&&bo()},de,"DOMContentLoaded",Fr,te,"load",Fr,te,"resize",bo],ua($e),Zt.forEach(function(u){return u.enable(0,1)}),l=0;l<ee.length;l+=3)fa(qe,ee[l],ee[l+1]),fa(qe,ee[l],ee[l+2])}else if(de){var c=function u(){r.enable(),de.removeEventListener("DOMContentLoaded",u)};de.addEventListener("DOMContentLoaded",c)}}},r.config=function(n){"limitCallbacks"in n&&(ql=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(la)||(la=i)&&setInterval(Yh,i),"ignoreMobileResize"in n&&(Wc=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(ua(qe)||ua($e,n.autoRefreshEvents||"none"),mp=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=vn(n),o=ee.indexOf(s),a=$r(s);~o&&ee.splice(o,a?6:2),i&&(a?yi.unshift(te,i,he,i,On,i):yi.unshift(s,i))},r.clearMatchMedia=function(n){Zt.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var o=(Un(n)?vn(n):n).getBoundingClientRect(),a=o[s?Wr:Xr]*i||0;return s?o.right-a>0&&o.left+a<te.innerWidth:o.bottom-a>0&&o.top+a<te.innerHeight},r.positionInViewport=function(n,i,s){Un(n)&&(n=vn(n));var o=n.getBoundingClientRect(),a=o[s?Wr:Xr],l=i==null?a/2:i in gl?gl[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+l)/te.innerWidth:(o.top+l)/te.innerHeight},r.killAll=function(n){if(Zt.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=Kr.killAll||[];Kr={},i.forEach(function(s){return s()})}},r}();jt.version="3.15.0";jt.saveStyles=function(r){return r?$o(r).forEach(function(t){if(t&&t.style){var e=In.indexOf(t);e>=0&&In.splice(e,5),In.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),St.core.getCache(t),Xc())}}):In};jt.revert=function(r,t){return rh(!r,t)};jt.create=function(r,t){return new jt(r,t)};jt.refresh=function(r){return r?bo(!0):(Ts||jt.register())&&Fr(!0)};jt.update=function(r){return++ee.cache&&Bi(r===!0?2:0)};jt.clearScrollMemory=Cp;jt.maxScroll=function(r,t){return Si(r,t?mn:Ge)};jt.getScrollFunc=function(r,t){return pr(vn(r),t?mn:Ge)};jt.getById=function(r){return qc[r]};jt.getAll=function(){return Zt.filter(function(r){return r.vars.id!=="ScrollSmoother"})};jt.isScrolling=function(){return!!ti};jt.snapDirectional=ih;jt.addEventListener=function(r,t){var e=Kr[r]||(Kr[r]=[]);~e.indexOf(t)||e.push(t)};jt.removeEventListener=function(r,t){var e=Kr[r],n=e&&e.indexOf(t);n>=0&&e.splice(n,1)};jt.batch=function(r,t){var e=[],n={},i=t.interval||.016,s=t.batchMax||1e9,o=function(c,u){var f=[],h=[],d=St.delayedCall(i,function(){u(f,h),f=[],h=[]}).pause();return function(g){f.length||d.restart(!0),f.push(g.trigger),h.push(g),s<=f.length&&d.progress(1)}},a;for(a in t)n[a]=a.substr(0,2)==="on"&&an(t[a])&&a!=="onRefreshInit"?o(a,t[a]):t[a];return an(s)&&(s=s(),$e(jt,"refresh",function(){return s=t.batchMax()})),$o(r).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,e.push(jt.create(c))}),e};var Jh=function(t,e,n,i){return e>i?t(i):e<0&&t(0),n>i?(i-e)/(n-e):n<0?e/(e-n):1},jl=function r(t,e){e===!0?t.style.removeProperty("touch-action"):t.style.touchAction=e===!0?"auto":e?"pan-"+e+(Ne.isTouch?" pinch-zoom":""):"none",t===On&&r(he,e)},ga={auto:1,scroll:1},fg=function(t){var e=t.event,n=t.target,i=t.axis,s=(e.changedTouches?e.changedTouches[0]:e).target,o=s._gsap||St.core.getCache(s),a=sn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==he&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(ga[(l=Kn(s)).overflowY]||ga[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!$r(s)&&(ga[(l=Kn(s)).overflowY]||ga[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(e.stopPropagation(),e._gsapAllow=!0)},Lp=function(t,e,n,i){return Ne.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:e,onWheel:i=i&&fg,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&$e(de,Ne.eventTypes[0],tf,!1,!0)},onDisable:function(){return qe(de,Ne.eventTypes[0],tf,!0)}})},dg=/(input|label|select|textarea)/i,Qh,tf=function(t){var e=dg.test(t.target.tagName);(e||Qh)&&(t._gsapAllow=!0,Qh=e)},pg=function(t){Rr(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var e=t,n=e.normalizeScrollX,i=e.momentum,s=e.allowNestedScroll,o=e.onRelease,a,l,c=vn(t.target)||On,u=St.core.globals().ScrollSmoother,f=u&&u.get(),h=Ji&&(t.content&&vn(t.content)||f&&t.content!==!1&&!f.smooth()&&f.content()),d=pr(c,Ge),g=pr(c,mn),_=1,p=(Ne.isTouch&&te.visualViewport?te.visualViewport.scale*te.visualViewport.width:te.outerWidth)/te.innerWidth,m=0,y=an(i)?function(){return i(a)}:function(){return i||2.8},x,M,A=Lp(c,t.type,!0,s),w=function(){return M=!1},T=fi,C=fi,S=function(){l=Si(c,Ge),C=Do(Ji?1:0,l),n&&(T=Do(0,Si(c,mn))),x=Yr},v=function(){h._gsap.y=Eo(parseFloat(h._gsap.y)+d.offset)+"px",h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(h._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},P=function(){if(M){requestAnimationFrame(w);var V=Eo(a.deltaY/2),st=C(d.v-V);if(h&&st!==d.v+d.offset){d.offset=st-d.v;var L=Eo((parseFloat(h&&h._gsap.y)||0)-d.offset);h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+L+", 0, 1)",h._gsap.y=L+"px",d.cacheID=ee.cache,Bi()}return!0}d.offset&&v(),M=!0},U,I,z,Y,W=function(){S(),U.isActive()&&U.vars.scrollY>l&&(d()>l?U.progress(1)&&d(l):U.resetTo("scrollY",l))};return h&&St.set(h,{y:"+=0"}),t.ignoreCheck=function(B){return Ji&&B.type==="touchmove"&&P()||_>1.05&&B.type!=="touchstart"||a.isGesturing||B.touches&&B.touches.length>1},t.onPress=function(){M=!1;var B=_;_=Eo((te.visualViewport&&te.visualViewport.scale||1)/p),U.pause(),B!==_&&jl(c,_>1.01?!0:n?!1:"x"),I=g(),z=d(),S(),x=Yr},t.onRelease=t.onGestureStart=function(B,V){if(d.offset&&v(),!V)Y.restart(!0);else{ee.cache++;var st=y(),L,lt;n&&(L=g(),lt=L+st*.05*-B.velocityX/.227,st*=Jh(g,L,lt,Si(c,mn)),U.vars.scrollX=T(lt)),L=d(),lt=L+st*.05*-B.velocityY/.227,st*=Jh(d,L,lt,Si(c,Ge)),U.vars.scrollY=C(lt),U.invalidate().duration(st).play(.01),(Ji&&U.vars.scrollY>=l||L>=l-1)&&St.to({},{onUpdate:W,duration:st})}o&&o(B)},t.onWheel=function(){U._ts&&U.pause(),sn()-m>1e3&&(x=0,m=sn())},t.onChange=function(B,V,st,L,lt){if(Yr!==x&&S(),V&&n&&g(T(L[2]===V?I+(B.startX-B.x):g()+V-L[1])),st){d.offset&&v();var Bt=lt[2]===st,qt=Bt?z+B.startY-B.y:d()+st-lt[1],$=C(qt);Bt&&qt!==$&&(z+=$-qt),d($)}(st||V)&&Bi()},t.onEnable=function(){jl(c,n?!1:"x"),jt.addEventListener("refresh",W),$e(te,"resize",W),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=g.smooth=!1),A.enable()},t.onDisable=function(){jl(c,!0),qe(te,"resize",W),jt.removeEventListener("refresh",W),A.kill()},t.lockAxis=t.lockAxis!==!1,a=new Ne(t),a.iOS=Ji,Ji&&!d()&&d(1),Ji&&St.ticker.add(fi),Y=a._dc,U=St.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Pp(d,d(),function(){return U.pause()})},onUpdate:Bi,onComplete:Y.vars.onComplete}),a};jt.sort=function(r){if(an(r))return Zt.sort(r);var t=te.pageYOffset||0;return jt.getAll().forEach(function(e){return e._sortY=e.trigger?t+e.trigger.getBoundingClientRect().top:e.start+te.innerHeight}),Zt.sort(r||function(e,n){return(e.vars.refreshPriority||0)*-1e6+(e.vars.containerAnimation?1e6:e._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};jt.observe=function(r){return new Ne(r)};jt.normalizeScroll=function(r){if(typeof r>"u")return fn;if(r===!0&&fn)return fn.enable();if(r===!1){fn&&fn.kill(),fn=r;return}var t=r instanceof Ne?r:pg(r);return fn&&fn.target===t.target&&fn.kill(),$r(t.target)&&(fn=t),t};jt.core={_getVelocityProp:Vc,_inputObserver:Lp,_scrollers:ee,_proxies:yi,bridge:{ss:function(){ti||Zr("scrollStart"),ti=sn()},ref:function(){return rn}}};xp()&&St.registerPlugin(jt);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const sh="166",mg=0,ef=1,_g=2,Dp=1,gg=2,Li=3,mr=0,wn=1,Ni=2,cr=0,ks=1,nf=2,rf=3,sf=4,vg=5,Dr=100,xg=101,Sg=102,Mg=103,yg=104,Eg=200,Tg=201,bg=202,wg=203,Zc=204,jc=205,Ag=206,Cg=207,Rg=208,Pg=209,Lg=210,Dg=211,Ig=212,Ug=213,Ng=214,Og=0,Fg=1,Bg=2,vl=3,kg=4,zg=5,Hg=6,Vg=7,Ip=0,Gg=1,Wg=2,ur=0,Xg=1,Yg=2,qg=3,$g=4,Kg=5,Zg=6,jg=7,Up=300,$s=301,Ks=302,Jc=303,Qc=304,Pl=306,tu=1e3,Br=1001,eu=1002,Mn=1003,Jg=1004,va=1005,ai=1006,Jl=1007,kr=1008,Hi=1009,Np=1010,Op=1011,Zo=1012,oh=1013,jr=1014,Mi=1015,Qo=1016,ah=1017,lh=1018,Zs=1020,Fp=35902,Bp=1021,kp=1022,li=1023,zp=1024,Hp=1025,zs=1026,js=1027,ch=1028,uh=1029,Vp=1030,hh=1031,fh=1033,Qa=33776,tl=33777,el=33778,nl=33779,nu=35840,iu=35841,ru=35842,su=35843,ou=36196,au=37492,lu=37496,cu=37808,uu=37809,hu=37810,fu=37811,du=37812,pu=37813,mu=37814,_u=37815,gu=37816,vu=37817,xu=37818,Su=37819,Mu=37820,yu=37821,il=36492,Eu=36494,Tu=36495,Gp=36283,bu=36284,wu=36285,Au=36286,Qg=3200,t0=3201,e0=0,n0=1,Qi="",di="srgb",gr="srgb-linear",dh="display-p3",Ll="display-p3-linear",xl="linear",be="srgb",Sl="rec709",Ml="p3",os=7680,of=519,i0=512,r0=513,s0=514,Wp=515,o0=516,a0=517,l0=518,c0=519,af=35044,u0=35048,lf="300 es",Fi=2e3,yl=2001;class ro{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,t);t.target=null}}}const en=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ql=Math.PI/180,Cu=180/Math.PI;function ta(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(en[r&255]+en[r>>8&255]+en[r>>16&255]+en[r>>24&255]+"-"+en[t&255]+en[t>>8&255]+"-"+en[t>>16&15|64]+en[t>>24&255]+"-"+en[e&63|128]+en[e>>8&255]+"-"+en[e>>16&255]+en[e>>24&255]+en[n&255]+en[n>>8&255]+en[n>>16&255]+en[n>>24&255]).toLowerCase()}function xn(r,t,e){return Math.max(t,Math.min(e,r))}function h0(r,t){return(r%t+t)%t}function tc(r,t,e){return(1-e)*r+e*t}function uo(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function gn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class ce{constructor(t=0,e=0){ce.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(xn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*i+t.x,this.y=s*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Kt{constructor(t,e,n,i,s,o,a,l,c){Kt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c)}set(t,e,n,i,s,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=i,u[2]=a,u[3]=e,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],d=n[5],g=n[8],_=i[0],p=i[3],m=i[6],y=i[1],x=i[4],M=i[7],A=i[2],w=i[5],T=i[8];return s[0]=o*_+a*y+l*A,s[3]=o*p+a*x+l*w,s[6]=o*m+a*M+l*T,s[1]=c*_+u*y+f*A,s[4]=c*p+u*x+f*w,s[7]=c*m+u*M+f*T,s[2]=h*_+d*y+g*A,s[5]=h*p+d*x+g*w,s[8]=h*m+d*M+g*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-n*s*u+n*a*l+i*s*c-i*o*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],f=u*o-a*c,h=a*l-u*s,d=c*s-o*l,g=e*f+n*h+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=f*_,t[1]=(i*c-u*n)*_,t[2]=(a*n-i*o)*_,t[3]=h*_,t[4]=(u*e-i*l)*_,t[5]=(i*s-a*e)*_,t[6]=d*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(ec.makeScale(t,e)),this}rotate(t){return this.premultiply(ec.makeRotation(-t)),this}translate(t,e){return this.premultiply(ec.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ec=new Kt;function Xp(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function El(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function f0(){const r=El("canvas");return r.style.display="block",r}const cf={};function Yp(r){r in cf||(cf[r]=!0,console.warn(r))}function d0(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}const uf=new Kt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),hf=new Kt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),xa={[gr]:{transfer:xl,primaries:Sl,toReference:r=>r,fromReference:r=>r},[di]:{transfer:be,primaries:Sl,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[Ll]:{transfer:xl,primaries:Ml,toReference:r=>r.applyMatrix3(hf),fromReference:r=>r.applyMatrix3(uf)},[dh]:{transfer:be,primaries:Ml,toReference:r=>r.convertSRGBToLinear().applyMatrix3(hf),fromReference:r=>r.applyMatrix3(uf).convertLinearToSRGB()}},p0=new Set([gr,Ll]),pe={enabled:!0,_workingColorSpace:gr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!p0.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,t,e){if(this.enabled===!1||t===e||!t||!e)return r;const n=xa[t].toReference,i=xa[e].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,t){return this.convert(r,this._workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this._workingColorSpace)},getPrimaries:function(r){return xa[r].primaries},getTransfer:function(r){return r===Qi?xl:xa[r].transfer}};function Hs(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function nc(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let as;class m0{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{as===void 0&&(as=El("canvas")),as.width=t.width,as.height=t.height;const n=as.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=as}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=El("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Hs(s[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Hs(e[n]/255)*255):e[n]=Hs(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let _0=0;class qp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:_0++}),this.uuid=ta(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(ic(i[o].image)):s.push(ic(i[o]))}else s=ic(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function ic(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?m0.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let g0=0;class _n extends ro{constructor(t=_n.DEFAULT_IMAGE,e=_n.DEFAULT_MAPPING,n=Br,i=Br,s=ai,o=kr,a=li,l=Hi,c=_n.DEFAULT_ANISOTROPY,u=Qi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:g0++}),this.uuid=ta(),this.name="",this.source=new qp(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ce(0,0),this.repeat=new ce(1,1),this.center=new ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Up)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case tu:t.x=t.x-Math.floor(t.x);break;case Br:t.x=t.x<0?0:1;break;case eu:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case tu:t.y=t.y-Math.floor(t.y);break;case Br:t.y=t.y<0?0:1;break;case eu:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}_n.DEFAULT_IMAGE=null;_n.DEFAULT_MAPPING=Up;_n.DEFAULT_ANISOTROPY=1;class Ke{constructor(t=0,e=0,n=0,i=1){Ke.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const l=t.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],g=l[9],_=l[2],p=l[6],m=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(c+1)/2,M=(d+1)/2,A=(m+1)/2,w=(u+h)/4,T=(f+_)/4,C=(g+p)/4;return x>M&&x>A?x<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(x),i=w/n,s=T/n):M>A?M<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(M),n=w/i,s=C/i):A<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(A),n=T/s,i=C/s),this.set(n,i,s,e),this}let y=Math.sqrt((p-g)*(p-g)+(f-_)*(f-_)+(h-u)*(h-u));return Math.abs(y)<.001&&(y=1),this.x=(p-g)/y,this.y=(f-_)/y,this.z=(h-u)/y,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class v0 extends ro{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ke(0,0,t,e),this.scissorTest=!1,this.viewport=new Ke(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ai,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new _n(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new qp(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Jr extends v0{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class $p extends _n{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Mn,this.minFilter=Mn,this.wrapR=Br,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class x0 extends _n{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Mn,this.minFilter=Mn,this.wrapR=Br,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ea{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],f=n[i+3];const h=s[o+0],d=s[o+1],g=s[o+2],_=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f;return}if(a===1){t[e+0]=h,t[e+1]=d,t[e+2]=g,t[e+3]=_;return}if(f!==_||l!==h||c!==d||u!==g){let p=1-a;const m=l*h+c*d+u*g+f*_,y=m>=0?1:-1,x=1-m*m;if(x>Number.EPSILON){const A=Math.sqrt(x),w=Math.atan2(A,m*y);p=Math.sin(p*w)/A,a=Math.sin(a*w)/A}const M=a*y;if(l=l*p+h*M,c=c*p+d*M,u=u*p+g*M,f=f*p+_*M,p===1-a){const A=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=A,c*=A,u*=A,f*=A}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],f=s[o],h=s[o+1],d=s[o+2],g=s[o+3];return t[e]=a*g+u*f+l*d-c*h,t[e+1]=l*g+u*h+c*f-a*d,t[e+2]=c*g+u*d+a*h-l*f,t[e+3]=u*g-a*f-l*h-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),f=a(s/2),h=l(n/2),d=l(i/2),g=l(s/2);switch(o){case"XYZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"YXZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"ZXY":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"ZYX":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"YZX":this._x=h*u*f+c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f-h*d*g;break;case"XZY":this._x=h*u*f-c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f+h*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],f=e[10],h=n+a+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-i)*d}else if(n>a&&n>f){const d=2*Math.sqrt(1+n-a-f);this._w=(u-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(s+c)/d}else if(a>f){const d=2*Math.sqrt(1+a-n-f);this._w=(s-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-n-a);this._w=(o-i)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(xn(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+o*a+i*c-s*l,this._y=i*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*i+e*this._y,this._z=d*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-e)*u)/c,h=Math.sin(e*u)/c;return this._w=o*f+this._w*h,this._x=n*f+this._x*h,this._y=i*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class q{constructor(t=0,e=0,n=0){q.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ff.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ff.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),u=2*(a*e-s*i),f=2*(s*n-o*e);return this.x=e+l*c+o*f-a*u,this.y=n+l*u+a*c-s*f,this.z=i+l*f+s*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return rc.copy(this).projectOnVector(t),this.sub(rc)}reflect(t){return this.sub(rc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(xn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const rc=new q,ff=new ea;class ts{constructor(t=new q(1/0,1/0,1/0),e=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ni.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ni.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=ni.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,ni):ni.fromBufferAttribute(s,o),ni.applyMatrix4(t.matrixWorld),this.expandByPoint(ni);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Sa.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Sa.copy(n.boundingBox)),Sa.applyMatrix4(t.matrixWorld),this.union(Sa)}const i=t.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,ni),ni.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ho),Ma.subVectors(this.max,ho),ls.subVectors(t.a,ho),cs.subVectors(t.b,ho),us.subVectors(t.c,ho),Xi.subVectors(cs,ls),Yi.subVectors(us,cs),Mr.subVectors(ls,us);let e=[0,-Xi.z,Xi.y,0,-Yi.z,Yi.y,0,-Mr.z,Mr.y,Xi.z,0,-Xi.x,Yi.z,0,-Yi.x,Mr.z,0,-Mr.x,-Xi.y,Xi.x,0,-Yi.y,Yi.x,0,-Mr.y,Mr.x,0];return!sc(e,ls,cs,us,Ma)||(e=[1,0,0,0,1,0,0,0,1],!sc(e,ls,cs,us,Ma))?!1:(ya.crossVectors(Xi,Yi),e=[ya.x,ya.y,ya.z],sc(e,ls,cs,us,Ma))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ni).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ni).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(bi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),bi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),bi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),bi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),bi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),bi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),bi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),bi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(bi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const bi=[new q,new q,new q,new q,new q,new q,new q,new q],ni=new q,Sa=new ts,ls=new q,cs=new q,us=new q,Xi=new q,Yi=new q,Mr=new q,ho=new q,Ma=new q,ya=new q,yr=new q;function sc(r,t,e,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){yr.fromArray(r,s);const a=i.x*Math.abs(yr.x)+i.y*Math.abs(yr.y)+i.z*Math.abs(yr.z),l=t.dot(yr),c=e.dot(yr),u=n.dot(yr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const S0=new ts,fo=new q,oc=new q;class na{constructor(t=new q,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):S0.setFromPoints(t).getCenter(n);let i=0;for(let s=0,o=t.length;s<o;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;fo.subVectors(t,this.center);const e=fo.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(fo,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(oc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(fo.copy(t.center).add(oc)),this.expandByPoint(fo.copy(t.center).sub(oc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const wi=new q,ac=new q,Ea=new q,qi=new q,lc=new q,Ta=new q,cc=new q;class M0{constructor(t=new q,e=new q(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,wi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=wi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(wi.copy(this.origin).addScaledVector(this.direction,e),wi.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){ac.copy(t).add(e).multiplyScalar(.5),Ea.copy(e).sub(t).normalize(),qi.copy(this.origin).sub(ac);const s=t.distanceTo(e)*.5,o=-this.direction.dot(Ea),a=qi.dot(this.direction),l=-qi.dot(Ea),c=qi.lengthSq(),u=Math.abs(1-o*o);let f,h,d,g;if(u>0)if(f=o*l-a,h=o*a-l,g=s*u,f>=0)if(h>=-g)if(h<=g){const _=1/u;f*=_,h*=_,d=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-s,-l),s),d=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(ac).addScaledVector(Ea,h),d}intersectSphere(t,e){wi.subVectors(t.center,this.origin);const n=wi.dot(this.direction),i=wi.dot(wi)-n*n,s=t.radius*t.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(t.min.x-h.x)*c,i=(t.max.x-h.x)*c):(n=(t.max.x-h.x)*c,i=(t.min.x-h.x)*c),u>=0?(s=(t.min.y-h.y)*u,o=(t.max.y-h.y)*u):(s=(t.max.y-h.y)*u,o=(t.min.y-h.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),f>=0?(a=(t.min.z-h.z)*f,l=(t.max.z-h.z)*f):(a=(t.max.z-h.z)*f,l=(t.min.z-h.z)*f),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,wi)!==null}intersectTriangle(t,e,n,i,s){lc.subVectors(e,t),Ta.subVectors(n,t),cc.crossVectors(lc,Ta);let o=this.direction.dot(cc),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;qi.subVectors(this.origin,t);const l=a*this.direction.dot(Ta.crossVectors(qi,Ta));if(l<0)return null;const c=a*this.direction.dot(lc.cross(qi));if(c<0||l+c>o)return null;const u=-a*qi.dot(cc);return u<0?null:this.at(u/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ie{constructor(t,e,n,i,s,o,a,l,c,u,f,h,d,g,_,p){Ie.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c,u,f,h,d,g,_,p)}set(t,e,n,i,s,o,a,l,c,u,f,h,d,g,_,p){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=s,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=f,m[14]=h,m[3]=d,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ie().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/hs.setFromMatrixColumn(t,0).length(),s=1/hs.setFromMatrixColumn(t,1).length(),o=1/hs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),f=Math.sin(s);if(t.order==="XYZ"){const h=o*u,d=o*f,g=a*u,_=a*f;e[0]=l*u,e[4]=-l*f,e[8]=c,e[1]=d+g*c,e[5]=h-_*c,e[9]=-a*l,e[2]=_-h*c,e[6]=g+d*c,e[10]=o*l}else if(t.order==="YXZ"){const h=l*u,d=l*f,g=c*u,_=c*f;e[0]=h+_*a,e[4]=g*a-d,e[8]=o*c,e[1]=o*f,e[5]=o*u,e[9]=-a,e[2]=d*a-g,e[6]=_+h*a,e[10]=o*l}else if(t.order==="ZXY"){const h=l*u,d=l*f,g=c*u,_=c*f;e[0]=h-_*a,e[4]=-o*f,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*u,e[9]=_-h*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const h=o*u,d=o*f,g=a*u,_=a*f;e[0]=l*u,e[4]=g*c-d,e[8]=h*c+_,e[1]=l*f,e[5]=_*c+h,e[9]=d*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const h=o*l,d=o*c,g=a*l,_=a*c;e[0]=l*u,e[4]=_-h*f,e[8]=g*f+d,e[1]=f,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=d*f+g,e[10]=h-_*f}else if(t.order==="XZY"){const h=o*l,d=o*c,g=a*l,_=a*c;e[0]=l*u,e[4]=-f,e[8]=c*u,e[1]=h*f+_,e[5]=o*u,e[9]=d*f-g,e[2]=g*f-d,e[6]=a*u,e[10]=_*f+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(y0,t,E0)}lookAt(t,e,n){const i=this.elements;return Ln.subVectors(t,e),Ln.lengthSq()===0&&(Ln.z=1),Ln.normalize(),$i.crossVectors(n,Ln),$i.lengthSq()===0&&(Math.abs(n.z)===1?Ln.x+=1e-4:Ln.z+=1e-4,Ln.normalize(),$i.crossVectors(n,Ln)),$i.normalize(),ba.crossVectors(Ln,$i),i[0]=$i.x,i[4]=ba.x,i[8]=Ln.x,i[1]=$i.y,i[5]=ba.y,i[9]=Ln.y,i[2]=$i.z,i[6]=ba.z,i[10]=Ln.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],d=n[13],g=n[2],_=n[6],p=n[10],m=n[14],y=n[3],x=n[7],M=n[11],A=n[15],w=i[0],T=i[4],C=i[8],S=i[12],v=i[1],P=i[5],U=i[9],I=i[13],z=i[2],Y=i[6],W=i[10],B=i[14],V=i[3],st=i[7],L=i[11],lt=i[15];return s[0]=o*w+a*v+l*z+c*V,s[4]=o*T+a*P+l*Y+c*st,s[8]=o*C+a*U+l*W+c*L,s[12]=o*S+a*I+l*B+c*lt,s[1]=u*w+f*v+h*z+d*V,s[5]=u*T+f*P+h*Y+d*st,s[9]=u*C+f*U+h*W+d*L,s[13]=u*S+f*I+h*B+d*lt,s[2]=g*w+_*v+p*z+m*V,s[6]=g*T+_*P+p*Y+m*st,s[10]=g*C+_*U+p*W+m*L,s[14]=g*S+_*I+p*B+m*lt,s[3]=y*w+x*v+M*z+A*V,s[7]=y*T+x*P+M*Y+A*st,s[11]=y*C+x*U+M*W+A*L,s[15]=y*S+x*I+M*B+A*lt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],f=t[6],h=t[10],d=t[14],g=t[3],_=t[7],p=t[11],m=t[15];return g*(+s*l*f-i*c*f-s*a*h+n*c*h+i*a*d-n*l*d)+_*(+e*l*d-e*c*h+s*o*h-i*o*d+i*c*u-s*l*u)+p*(+e*c*f-e*a*d-s*o*f+n*o*d+s*a*u-n*c*u)+m*(-i*a*u-e*l*f+e*a*h+i*o*f-n*o*h+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],f=t[9],h=t[10],d=t[11],g=t[12],_=t[13],p=t[14],m=t[15],y=f*p*c-_*h*c+_*l*d-a*p*d-f*l*m+a*h*m,x=g*h*c-u*p*c-g*l*d+o*p*d+u*l*m-o*h*m,M=u*_*c-g*f*c+g*a*d-o*_*d-u*a*m+o*f*m,A=g*f*l-u*_*l-g*a*h+o*_*h+u*a*p-o*f*p,w=e*y+n*x+i*M+s*A;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/w;return t[0]=y*T,t[1]=(_*h*s-f*p*s-_*i*d+n*p*d+f*i*m-n*h*m)*T,t[2]=(a*p*s-_*l*s+_*i*c-n*p*c-a*i*m+n*l*m)*T,t[3]=(f*l*s-a*h*s-f*i*c+n*h*c+a*i*d-n*l*d)*T,t[4]=x*T,t[5]=(u*p*s-g*h*s+g*i*d-e*p*d-u*i*m+e*h*m)*T,t[6]=(g*l*s-o*p*s-g*i*c+e*p*c+o*i*m-e*l*m)*T,t[7]=(o*h*s-u*l*s+u*i*c-e*h*c-o*i*d+e*l*d)*T,t[8]=M*T,t[9]=(g*f*s-u*_*s-g*n*d+e*_*d+u*n*m-e*f*m)*T,t[10]=(o*_*s-g*a*s+g*n*c-e*_*c-o*n*m+e*a*m)*T,t[11]=(u*a*s-o*f*s-u*n*c+e*f*c+o*n*d-e*a*d)*T,t[12]=A*T,t[13]=(u*_*i-g*f*i+g*n*h-e*_*h-u*n*p+e*f*p)*T,t[14]=(g*a*i-o*_*i-g*n*l+e*_*l+o*n*p-e*a*p)*T,t[15]=(o*f*i-u*a*i+u*n*l-e*f*l-o*n*h+e*a*h)*T,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,o){return this.set(1,n,s,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,u=o+o,f=a+a,h=s*c,d=s*u,g=s*f,_=o*u,p=o*f,m=a*f,y=l*c,x=l*u,M=l*f,A=n.x,w=n.y,T=n.z;return i[0]=(1-(_+m))*A,i[1]=(d+M)*A,i[2]=(g-x)*A,i[3]=0,i[4]=(d-M)*w,i[5]=(1-(h+m))*w,i[6]=(p+y)*w,i[7]=0,i[8]=(g+x)*T,i[9]=(p-y)*T,i[10]=(1-(h+_))*T,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=hs.set(i[0],i[1],i[2]).length();const o=hs.set(i[4],i[5],i[6]).length(),a=hs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],ii.copy(this);const c=1/s,u=1/o,f=1/a;return ii.elements[0]*=c,ii.elements[1]*=c,ii.elements[2]*=c,ii.elements[4]*=u,ii.elements[5]*=u,ii.elements[6]*=u,ii.elements[8]*=f,ii.elements[9]*=f,ii.elements[10]*=f,e.setFromRotationMatrix(ii),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,i,s,o,a=Fi){const l=this.elements,c=2*s/(e-t),u=2*s/(n-i),f=(e+t)/(e-t),h=(n+i)/(n-i);let d,g;if(a===Fi)d=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===yl)d=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,o,a=Fi){const l=this.elements,c=1/(e-t),u=1/(n-i),f=1/(o-s),h=(e+t)*c,d=(n+i)*u;let g,_;if(a===Fi)g=(o+s)*f,_=-2*f;else if(a===yl)g=s*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const hs=new q,ii=new Ie,y0=new q(0,0,0),E0=new q(1,1,1),$i=new q,ba=new q,Ln=new q,df=new Ie,pf=new ea;class Vi{constructor(t=0,e=0,n=0,i=Vi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],f=i[2],h=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(xn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-xn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(xn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-xn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(xn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-xn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return df.makeRotationFromQuaternion(t),this.setFromRotationMatrix(df,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return pf.setFromEuler(this),this.setFromQuaternion(pf,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Vi.DEFAULT_ORDER="XYZ";class Kp{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let T0=0;const mf=new q,fs=new ea,Ai=new Ie,wa=new q,po=new q,b0=new q,w0=new ea,_f=new q(1,0,0),gf=new q(0,1,0),vf=new q(0,0,1),xf={type:"added"},A0={type:"removed"},ds={type:"childadded",child:null},uc={type:"childremoved",child:null};class An extends ro{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:T0++}),this.uuid=ta(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=An.DEFAULT_UP.clone();const t=new q,e=new Vi,n=new ea,i=new q(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ie},normalMatrix:{value:new Kt}}),this.matrix=new Ie,this.matrixWorld=new Ie,this.matrixAutoUpdate=An.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=An.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Kp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return fs.setFromAxisAngle(t,e),this.quaternion.multiply(fs),this}rotateOnWorldAxis(t,e){return fs.setFromAxisAngle(t,e),this.quaternion.premultiply(fs),this}rotateX(t){return this.rotateOnAxis(_f,t)}rotateY(t){return this.rotateOnAxis(gf,t)}rotateZ(t){return this.rotateOnAxis(vf,t)}translateOnAxis(t,e){return mf.copy(t).applyQuaternion(this.quaternion),this.position.add(mf.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(_f,t)}translateY(t){return this.translateOnAxis(gf,t)}translateZ(t){return this.translateOnAxis(vf,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ai.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?wa.copy(t):wa.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),po.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ai.lookAt(po,wa,this.up):Ai.lookAt(wa,po,this.up),this.quaternion.setFromRotationMatrix(Ai),i&&(Ai.extractRotation(i.matrixWorld),fs.setFromRotationMatrix(Ai),this.quaternion.premultiply(fs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(xf),ds.child=t,this.dispatchEvent(ds),ds.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(A0),uc.child=t,this.dispatchEvent(uc),uc.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ai.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ai.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ai),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(xf),ds.child=t,this.dispatchEvent(ds),ds.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(po,t,b0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(po,w0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(t.shapes,f)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),f=o(t.shapes),h=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}An.DEFAULT_UP=new q(0,1,0);An.DEFAULT_MATRIX_AUTO_UPDATE=!0;An.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ri=new q,Ci=new q,hc=new q,Ri=new q,ps=new q,ms=new q,Sf=new q,fc=new q,dc=new q,pc=new q;class vi{constructor(t=new q,e=new q,n=new q){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),ri.subVectors(t,e),i.cross(ri);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){ri.subVectors(i,e),Ci.subVectors(n,e),hc.subVectors(t,e);const o=ri.dot(ri),a=ri.dot(Ci),l=ri.dot(hc),c=Ci.dot(Ci),u=Ci.dot(hc),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,d=(c*l-a*u)*h,g=(o*u-a*l)*h;return s.set(1-d-g,g,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Ri)===null?!1:Ri.x>=0&&Ri.y>=0&&Ri.x+Ri.y<=1}static getInterpolation(t,e,n,i,s,o,a,l){return this.getBarycoord(t,e,n,i,Ri)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ri.x),l.addScaledVector(o,Ri.y),l.addScaledVector(a,Ri.z),l)}static isFrontFacing(t,e,n,i){return ri.subVectors(n,e),Ci.subVectors(t,e),ri.cross(Ci).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ri.subVectors(this.c,this.b),Ci.subVectors(this.a,this.b),ri.cross(Ci).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return vi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return vi.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return vi.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return vi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return vi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let o,a;ps.subVectors(i,n),ms.subVectors(s,n),fc.subVectors(t,n);const l=ps.dot(fc),c=ms.dot(fc);if(l<=0&&c<=0)return e.copy(n);dc.subVectors(t,i);const u=ps.dot(dc),f=ms.dot(dc);if(u>=0&&f<=u)return e.copy(i);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(n).addScaledVector(ps,o);pc.subVectors(t,s);const d=ps.dot(pc),g=ms.dot(pc);if(g>=0&&d<=g)return e.copy(s);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(ms,a);const p=u*g-d*f;if(p<=0&&f-u>=0&&d-g>=0)return Sf.subVectors(s,i),a=(f-u)/(f-u+(d-g)),e.copy(i).addScaledVector(Sf,a);const m=1/(p+_+h);return o=_*m,a=h*m,e.copy(n).addScaledVector(ps,o).addScaledVector(ms,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Zp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ki={h:0,s:0,l:0},Aa={h:0,s:0,l:0};function mc(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class _e{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=di){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,pe.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=pe.workingColorSpace){return this.r=t,this.g=e,this.b=n,pe.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=pe.workingColorSpace){if(t=h0(t,1),e=xn(e,0,1),n=xn(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=mc(o,s,t+1/3),this.g=mc(o,s,t),this.b=mc(o,s,t-1/3)}return pe.toWorkingColorSpace(this,i),this}setStyle(t,e=di){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=di){const n=Zp[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Hs(t.r),this.g=Hs(t.g),this.b=Hs(t.b),this}copyLinearToSRGB(t){return this.r=nc(t.r),this.g=nc(t.g),this.b=nc(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=di){return pe.fromWorkingColorSpace(nn.copy(this),t),Math.round(xn(nn.r*255,0,255))*65536+Math.round(xn(nn.g*255,0,255))*256+Math.round(xn(nn.b*255,0,255))}getHexString(t=di){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=pe.workingColorSpace){pe.fromWorkingColorSpace(nn.copy(this),e);const n=nn.r,i=nn.g,s=nn.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case n:l=(i-s)/f+(i<s?6:0);break;case i:l=(s-n)/f+2;break;case s:l=(n-i)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=pe.workingColorSpace){return pe.fromWorkingColorSpace(nn.copy(this),e),t.r=nn.r,t.g=nn.g,t.b=nn.b,t}getStyle(t=di){pe.fromWorkingColorSpace(nn.copy(this),t);const e=nn.r,n=nn.g,i=nn.b;return t!==di?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Ki),this.setHSL(Ki.h+t,Ki.s+e,Ki.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ki),t.getHSL(Aa);const n=tc(Ki.h,Aa.h,e),i=tc(Ki.s,Aa.s,e),s=tc(Ki.l,Aa.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const nn=new _e;_e.NAMES=Zp;let C0=0;class Dl extends ro{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:C0++}),this.uuid=ta(),this.name="",this.type="Material",this.blending=ks,this.side=mr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zc,this.blendDst=jc,this.blendEquation=Dr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new _e(0,0,0),this.blendAlpha=0,this.depthFunc=vl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=of,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=os,this.stencilZFail=os,this.stencilZPass=os,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ks&&(n.blending=this.blending),this.side!==mr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Zc&&(n.blendSrc=this.blendSrc),this.blendDst!==jc&&(n.blendDst=this.blendDst),this.blendEquation!==Dr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==vl&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==of&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==os&&(n.stencilFail=this.stencilFail),this.stencilZFail!==os&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==os&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(e){const s=i(t.textures),o=i(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class jp extends Dl{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new _e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vi,this.combine=Ip,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Fe=new q,Ca=new ce;class ui{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=af,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Mi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return Yp("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ca.fromBufferAttribute(this,e),Ca.applyMatrix3(t),this.setXY(e,Ca.x,Ca.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.applyMatrix3(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.applyMatrix4(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.applyNormalMatrix(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.transformDirection(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=uo(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=gn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=uo(e,this.array)),e}setX(t,e){return this.normalized&&(e=gn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=uo(e,this.array)),e}setY(t,e){return this.normalized&&(e=gn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=uo(e,this.array)),e}setZ(t,e){return this.normalized&&(e=gn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=uo(e,this.array)),e}setW(t,e){return this.normalized&&(e=gn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=gn(e,this.array),n=gn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=gn(e,this.array),n=gn(n,this.array),i=gn(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=gn(e,this.array),n=gn(n,this.array),i=gn(i,this.array),s=gn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==af&&(t.usage=this.usage),t}}class Jp extends ui{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Qp extends ui{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class qr extends ui{constructor(t,e,n){super(new Float32Array(t),e,n)}}let R0=0;const Yn=new Ie,_c=new An,_s=new q,Dn=new ts,mo=new ts,Ye=new q;class vr extends ro{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:R0++}),this.uuid=ta(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Xp(t)?Qp:Jp)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Kt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Yn.makeRotationFromQuaternion(t),this.applyMatrix4(Yn),this}rotateX(t){return Yn.makeRotationX(t),this.applyMatrix4(Yn),this}rotateY(t){return Yn.makeRotationY(t),this.applyMatrix4(Yn),this}rotateZ(t){return Yn.makeRotationZ(t),this.applyMatrix4(Yn),this}translate(t,e,n){return Yn.makeTranslation(t,e,n),this.applyMatrix4(Yn),this}scale(t,e,n){return Yn.makeScale(t,e,n),this.applyMatrix4(Yn),this}lookAt(t){return _c.lookAt(t),_c.updateMatrix(),this.applyMatrix4(_c.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_s).negate(),this.translate(_s.x,_s.y,_s.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new qr(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ts);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];Dn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ye.addVectors(this.boundingBox.min,Dn.min),this.boundingBox.expandByPoint(Ye),Ye.addVectors(this.boundingBox.max,Dn.max),this.boundingBox.expandByPoint(Ye)):(this.boundingBox.expandByPoint(Dn.min),this.boundingBox.expandByPoint(Dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new na);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(t){const n=this.boundingSphere.center;if(Dn.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];mo.setFromBufferAttribute(a),this.morphTargetsRelative?(Ye.addVectors(Dn.min,mo.min),Dn.expandByPoint(Ye),Ye.addVectors(Dn.max,mo.max),Dn.expandByPoint(Ye)):(Dn.expandByPoint(mo.min),Dn.expandByPoint(mo.max))}Dn.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)Ye.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(Ye));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Ye.fromBufferAttribute(a,c),l&&(_s.fromBufferAttribute(t,c),Ye.add(_s)),i=Math.max(i,n.distanceToSquared(Ye))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ui(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let C=0;C<n.count;C++)a[C]=new q,l[C]=new q;const c=new q,u=new q,f=new q,h=new ce,d=new ce,g=new ce,_=new q,p=new q;function m(C,S,v){c.fromBufferAttribute(n,C),u.fromBufferAttribute(n,S),f.fromBufferAttribute(n,v),h.fromBufferAttribute(s,C),d.fromBufferAttribute(s,S),g.fromBufferAttribute(s,v),u.sub(c),f.sub(c),d.sub(h),g.sub(h);const P=1/(d.x*g.y-g.x*d.y);isFinite(P)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(P),p.copy(f).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(P),a[C].add(_),a[S].add(_),a[v].add(_),l[C].add(p),l[S].add(p),l[v].add(p))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let C=0,S=y.length;C<S;++C){const v=y[C],P=v.start,U=v.count;for(let I=P,z=P+U;I<z;I+=3)m(t.getX(I+0),t.getX(I+1),t.getX(I+2))}const x=new q,M=new q,A=new q,w=new q;function T(C){A.fromBufferAttribute(i,C),w.copy(A);const S=a[C];x.copy(S),x.sub(A.multiplyScalar(A.dot(S))).normalize(),M.crossVectors(w,S);const P=M.dot(l[C])<0?-1:1;o.setXYZW(C,x.x,x.y,x.z,P)}for(let C=0,S=y.length;C<S;++C){const v=y[C],P=v.start,U=v.count;for(let I=P,z=P+U;I<z;I+=3)T(t.getX(I+0)),T(t.getX(I+1)),T(t.getX(I+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ui(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);const i=new q,s=new q,o=new q,a=new q,l=new q,c=new q,u=new q,f=new q;if(t)for(let h=0,d=t.count;h<d;h+=3){const g=t.getX(h+0),_=t.getX(h+1),p=t.getX(h+2);i.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),o.fromBufferAttribute(e,p),u.subVectors(o,s),f.subVectors(i,s),u.cross(f),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,d=e.count;h<d;h+=3)i.fromBufferAttribute(e,h+0),s.fromBufferAttribute(e,h+1),o.fromBufferAttribute(e,h+2),u.subVectors(o,s),f.subVectors(i,s),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ye.fromBufferAttribute(t,e),Ye.normalize(),t.setXYZ(e,Ye.x,Ye.y,Ye.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let d=0,g=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*u;for(let m=0;m<u;m++)h[g++]=c[d++]}return new ui(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new vr,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=t(h,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(t.data))}u.length>0&&(i[l]=u,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(e))}const s=t.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Mf=new Ie,Er=new M0,Ra=new na,yf=new q,gs=new q,vs=new q,xs=new q,gc=new q,Pa=new q,La=new ce,Da=new ce,Ia=new ce,Ef=new q,Tf=new q,bf=new q,Ua=new q,Na=new q;class Qn extends An{constructor(t=new vr,e=new jp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(s&&a){Pa.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(gc.fromBufferAttribute(f,t),o?Pa.addScaledVector(gc,u):Pa.addScaledVector(gc.sub(e),u))}e.add(Pa)}return e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ra.copy(n.boundingSphere),Ra.applyMatrix4(s),Er.copy(t.ray).recast(t.near),!(Ra.containsPoint(Er.origin)===!1&&(Er.intersectSphere(Ra,yf)===null||Er.origin.distanceToSquared(yf)>(t.far-t.near)**2))&&(Mf.copy(s).invert(),Er.copy(t.ray).applyMatrix4(Mf),!(n.boundingBox!==null&&Er.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Er)))}_computeIntersections(t,e,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const p=h[g],m=o[p.materialIndex],y=Math.max(p.start,d.start),x=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let M=y,A=x;M<A;M+=3){const w=a.getX(M),T=a.getX(M+1),C=a.getX(M+2);i=Oa(this,m,t,n,c,u,f,w,T,C),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let p=g,m=_;p<m;p+=3){const y=a.getX(p),x=a.getX(p+1),M=a.getX(p+2);i=Oa(this,o,t,n,c,u,f,y,x,M),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const p=h[g],m=o[p.materialIndex],y=Math.max(p.start,d.start),x=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let M=y,A=x;M<A;M+=3){const w=M,T=M+1,C=M+2;i=Oa(this,m,t,n,c,u,f,w,T,C),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let p=g,m=_;p<m;p+=3){const y=p,x=p+1,M=p+2;i=Oa(this,o,t,n,c,u,f,y,x,M),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}}}function P0(r,t,e,n,i,s,o,a){let l;if(t.side===wn?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,t.side===mr,a),l===null)return null;Na.copy(a),Na.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(Na);return c<e.near||c>e.far?null:{distance:c,point:Na.clone(),object:r}}function Oa(r,t,e,n,i,s,o,a,l,c){r.getVertexPosition(a,gs),r.getVertexPosition(l,vs),r.getVertexPosition(c,xs);const u=P0(r,t,e,n,gs,vs,xs,Ua);if(u){i&&(La.fromBufferAttribute(i,a),Da.fromBufferAttribute(i,l),Ia.fromBufferAttribute(i,c),u.uv=vi.getInterpolation(Ua,gs,vs,xs,La,Da,Ia,new ce)),s&&(La.fromBufferAttribute(s,a),Da.fromBufferAttribute(s,l),Ia.fromBufferAttribute(s,c),u.uv1=vi.getInterpolation(Ua,gs,vs,xs,La,Da,Ia,new ce)),o&&(Ef.fromBufferAttribute(o,a),Tf.fromBufferAttribute(o,l),bf.fromBufferAttribute(o,c),u.normal=vi.getInterpolation(Ua,gs,vs,xs,Ef,Tf,bf,new q),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new q,materialIndex:0};vi.getNormal(gs,vs,xs,f.normal),u.face=f}return u}class ia extends vr{constructor(t=1,e=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,d=0;g("z","y","x",-1,-1,n,e,t,o,s,0),g("z","y","x",1,-1,n,e,-t,o,s,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,s,4),g("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new qr(c,3)),this.setAttribute("normal",new qr(u,3)),this.setAttribute("uv",new qr(f,2));function g(_,p,m,y,x,M,A,w,T,C,S){const v=M/T,P=A/C,U=M/2,I=A/2,z=w/2,Y=T+1,W=C+1;let B=0,V=0;const st=new q;for(let L=0;L<W;L++){const lt=L*P-I;for(let Bt=0;Bt<Y;Bt++){const qt=Bt*v-U;st[_]=qt*y,st[p]=lt*x,st[m]=z,c.push(st.x,st.y,st.z),st[_]=0,st[p]=0,st[m]=w>0?1:-1,u.push(st.x,st.y,st.z),f.push(Bt/T),f.push(1-L/C),B+=1}}for(let L=0;L<C;L++)for(let lt=0;lt<T;lt++){const Bt=h+lt+Y*L,qt=h+lt+Y*(L+1),$=h+(lt+1)+Y*(L+1),tt=h+(lt+1)+Y*L;l.push(Bt,qt,tt),l.push(qt,$,tt),V+=6}a.addGroup(d,V,S),d+=V,h+=B}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ia(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Js(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function hn(r){const t={};for(let e=0;e<r.length;e++){const n=Js(r[e]);for(const i in n)t[i]=n[i]}return t}function L0(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function tm(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:pe.workingColorSpace}const D0={clone:Js,merge:hn};var I0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,U0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ti extends Dl{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=I0,this.fragmentShader=U0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Js(t.uniforms),this.uniformsGroups=L0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class em extends An{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ie,this.projectionMatrix=new Ie,this.projectionMatrixInverse=new Ie,this.coordinateSystem=Fi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Zi=new q,wf=new ce,Af=new ce;class oi extends em{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Cu*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ql*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Cu*2*Math.atan(Math.tan(Ql*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Zi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Zi.x,Zi.y).multiplyScalar(-t/Zi.z),Zi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Zi.x,Zi.y).multiplyScalar(-t/Zi.z)}getViewSize(t,e){return this.getViewBounds(t,wf,Af),e.subVectors(Af,wf)}setViewOffset(t,e,n,i,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ql*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ss=-90,Ms=1;class N0 extends An{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new oi(Ss,Ms,t,e);i.layers=this.layers,this.add(i);const s=new oi(Ss,Ms,t,e);s.layers=this.layers,this.add(s);const o=new oi(Ss,Ms,t,e);o.layers=this.layers,this.add(o);const a=new oi(Ss,Ms,t,e);a.layers=this.layers,this.add(a);const l=new oi(Ss,Ms,t,e);l.layers=this.layers,this.add(l);const c=new oi(Ss,Ms,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,s,o,a,l]=e;for(const c of e)this.remove(c);if(t===Fi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===yl)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=t.getRenderTarget(),h=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,u),t.setRenderTarget(f,h,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class nm extends _n{constructor(t,e,n,i,s,o,a,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:$s,super(t,e,n,i,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class O0 extends Jr{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new nm(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ai}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new ia(5,5,5),s=new Ti({name:"CubemapFromEquirect",uniforms:Js(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:wn,blending:cr});s.uniforms.tEquirect.value=e;const o=new Qn(i,s),a=e.minFilter;return e.minFilter===kr&&(e.minFilter=ai),new N0(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(s)}}const vc=new q,F0=new q,B0=new Kt;class Pr{constructor(t=new q(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=vc.subVectors(n,e).cross(F0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(vc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||B0.getNormalMatrix(t),i=this.coplanarPoint(vc).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Tr=new na,Fa=new q;class im{constructor(t=new Pr,e=new Pr,n=new Pr,i=new Pr,s=new Pr,o=new Pr){this.planes=[t,e,n,i,s,o]}set(t,e,n,i,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Fi){const n=this.planes,i=t.elements,s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],u=i[5],f=i[6],h=i[7],d=i[8],g=i[9],_=i[10],p=i[11],m=i[12],y=i[13],x=i[14],M=i[15];if(n[0].setComponents(l-s,h-c,p-d,M-m).normalize(),n[1].setComponents(l+s,h+c,p+d,M+m).normalize(),n[2].setComponents(l+o,h+u,p+g,M+y).normalize(),n[3].setComponents(l-o,h-u,p-g,M-y).normalize(),n[4].setComponents(l-a,h-f,p-_,M-x).normalize(),e===Fi)n[5].setComponents(l+a,h+f,p+_,M+x).normalize();else if(e===yl)n[5].setComponents(a,f,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Tr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Tr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Tr)}intersectsSprite(t){return Tr.center.set(0,0,0),Tr.radius=.7071067811865476,Tr.applyMatrix4(t.matrixWorld),this.intersectsSphere(Tr)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Fa.x=i.normal.x>0?t.max.x:t.min.x,Fa.y=i.normal.y>0?t.max.y:t.min.y,Fa.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Fa)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function rm(){let r=null,t=!1,e=null,n=null;function i(s,o){e(s,o),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function k0(r){const t=new WeakMap;function e(a,l){const c=a.array,u=a.usage,f=c.byteLength,h=r.createBuffer();r.bindBuffer(l,h),r.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=r.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=r.HALF_FLOAT:d=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=r.SHORT;else if(c instanceof Uint32Array)d=r.UNSIGNED_INT;else if(c instanceof Int32Array)d=r.INT;else if(c instanceof Int8Array)d=r.BYTE;else if(c instanceof Uint8Array)d=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){const u=l.array,f=l._updateRange,h=l.updateRanges;if(r.bindBuffer(c,a),f.count===-1&&h.length===0&&r.bufferSubData(c,0,u),h.length!==0){for(let d=0,g=h.length;d<g;d++){const _=h[d];r.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}f.count!==-1&&(r.bufferSubData(c,f.offset*u.BYTES_PER_ELEMENT,u,f.offset,f.count),f.count=-1),l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(r.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}class Qs extends vr{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,f=t/a,h=e/l,d=[],g=[],_=[],p=[];for(let m=0;m<u;m++){const y=m*h-o;for(let x=0;x<c;x++){const M=x*f-s;g.push(M,-y,0),_.push(0,0,1),p.push(x/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let y=0;y<a;y++){const x=y+c*m,M=y+c*(m+1),A=y+1+c*(m+1),w=y+1+c*m;d.push(x,M,w),d.push(M,A,w)}this.setIndex(d),this.setAttribute("position",new qr(g,3)),this.setAttribute("normal",new qr(_,3)),this.setAttribute("uv",new qr(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qs(t.width,t.height,t.widthSegments,t.heightSegments)}}var z0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,H0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,V0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,G0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,W0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,X0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Y0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,q0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,K0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Z0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,j0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,J0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Q0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,tv=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ev=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,nv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,iv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,rv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,sv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ov=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,av=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,lv=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,cv=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,uv=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,hv=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,fv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,dv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,pv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,mv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_v="gl_FragColor = linearToOutputTexel( gl_FragColor );",gv=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,vv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,xv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Sv=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Mv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,yv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ev=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Tv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,bv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Av=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Cv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Rv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Pv=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Lv=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Dv=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Iv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Uv=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Nv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ov=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Fv=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Bv=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,kv=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,zv=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Hv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Vv=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Gv=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wv=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xv=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Yv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$v=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Kv=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Jv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Qv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,tx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ex=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,nx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ix=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,rx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,sx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ox=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ax=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,lx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,cx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ux=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,hx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,fx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,dx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,px=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,mx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_x=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,gx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,vx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,xx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Sx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Mx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,yx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ex=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Tx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,bx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Ax=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Cx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Rx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Px=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Lx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Dx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ix=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ux=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Nx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ox=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Fx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Bx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const kx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,zx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Yx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,qx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,$x=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Kx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Zx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Jx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Qx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,tS=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eS=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nS=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iS=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,rS=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sS=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,oS=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,aS=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lS=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cS=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,uS=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hS=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fS=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dS=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,pS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,mS=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_S=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,gS=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,vS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,$t={alphahash_fragment:z0,alphahash_pars_fragment:H0,alphamap_fragment:V0,alphamap_pars_fragment:G0,alphatest_fragment:W0,alphatest_pars_fragment:X0,aomap_fragment:Y0,aomap_pars_fragment:q0,batching_pars_vertex:$0,batching_vertex:K0,begin_vertex:Z0,beginnormal_vertex:j0,bsdfs:J0,iridescence_fragment:Q0,bumpmap_pars_fragment:tv,clipping_planes_fragment:ev,clipping_planes_pars_fragment:nv,clipping_planes_pars_vertex:iv,clipping_planes_vertex:rv,color_fragment:sv,color_pars_fragment:ov,color_pars_vertex:av,color_vertex:lv,common:cv,cube_uv_reflection_fragment:uv,defaultnormal_vertex:hv,displacementmap_pars_vertex:fv,displacementmap_vertex:dv,emissivemap_fragment:pv,emissivemap_pars_fragment:mv,colorspace_fragment:_v,colorspace_pars_fragment:gv,envmap_fragment:vv,envmap_common_pars_fragment:xv,envmap_pars_fragment:Sv,envmap_pars_vertex:Mv,envmap_physical_pars_fragment:Dv,envmap_vertex:yv,fog_vertex:Ev,fog_pars_vertex:Tv,fog_fragment:bv,fog_pars_fragment:wv,gradientmap_pars_fragment:Av,lightmap_pars_fragment:Cv,lights_lambert_fragment:Rv,lights_lambert_pars_fragment:Pv,lights_pars_begin:Lv,lights_toon_fragment:Iv,lights_toon_pars_fragment:Uv,lights_phong_fragment:Nv,lights_phong_pars_fragment:Ov,lights_physical_fragment:Fv,lights_physical_pars_fragment:Bv,lights_fragment_begin:kv,lights_fragment_maps:zv,lights_fragment_end:Hv,logdepthbuf_fragment:Vv,logdepthbuf_pars_fragment:Gv,logdepthbuf_pars_vertex:Wv,logdepthbuf_vertex:Xv,map_fragment:Yv,map_pars_fragment:qv,map_particle_fragment:$v,map_particle_pars_fragment:Kv,metalnessmap_fragment:Zv,metalnessmap_pars_fragment:jv,morphinstance_vertex:Jv,morphcolor_vertex:Qv,morphnormal_vertex:tx,morphtarget_pars_vertex:ex,morphtarget_vertex:nx,normal_fragment_begin:ix,normal_fragment_maps:rx,normal_pars_fragment:sx,normal_pars_vertex:ox,normal_vertex:ax,normalmap_pars_fragment:lx,clearcoat_normal_fragment_begin:cx,clearcoat_normal_fragment_maps:ux,clearcoat_pars_fragment:hx,iridescence_pars_fragment:fx,opaque_fragment:dx,packing:px,premultiplied_alpha_fragment:mx,project_vertex:_x,dithering_fragment:gx,dithering_pars_fragment:vx,roughnessmap_fragment:xx,roughnessmap_pars_fragment:Sx,shadowmap_pars_fragment:Mx,shadowmap_pars_vertex:yx,shadowmap_vertex:Ex,shadowmask_pars_fragment:Tx,skinbase_vertex:bx,skinning_pars_vertex:wx,skinning_vertex:Ax,skinnormal_vertex:Cx,specularmap_fragment:Rx,specularmap_pars_fragment:Px,tonemapping_fragment:Lx,tonemapping_pars_fragment:Dx,transmission_fragment:Ix,transmission_pars_fragment:Ux,uv_pars_fragment:Nx,uv_pars_vertex:Ox,uv_vertex:Fx,worldpos_vertex:Bx,background_vert:kx,background_frag:zx,backgroundCube_vert:Hx,backgroundCube_frag:Vx,cube_vert:Gx,cube_frag:Wx,depth_vert:Xx,depth_frag:Yx,distanceRGBA_vert:qx,distanceRGBA_frag:$x,equirect_vert:Kx,equirect_frag:Zx,linedashed_vert:jx,linedashed_frag:Jx,meshbasic_vert:Qx,meshbasic_frag:tS,meshlambert_vert:eS,meshlambert_frag:nS,meshmatcap_vert:iS,meshmatcap_frag:rS,meshnormal_vert:sS,meshnormal_frag:oS,meshphong_vert:aS,meshphong_frag:lS,meshphysical_vert:cS,meshphysical_frag:uS,meshtoon_vert:hS,meshtoon_frag:fS,points_vert:dS,points_frag:pS,shadow_vert:mS,shadow_frag:_S,sprite_vert:gS,sprite_frag:vS},pt={common:{diffuse:{value:new _e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Kt}},envmap:{envMap:{value:null},envMapRotation:{value:new Kt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Kt},normalScale:{value:new ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new _e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new _e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0},uvTransform:{value:new Kt}},sprite:{diffuse:{value:new _e(16777215)},opacity:{value:1},center:{value:new ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}}},pi={basic:{uniforms:hn([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.fog]),vertexShader:$t.meshbasic_vert,fragmentShader:$t.meshbasic_frag},lambert:{uniforms:hn([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new _e(0)}}]),vertexShader:$t.meshlambert_vert,fragmentShader:$t.meshlambert_frag},phong:{uniforms:hn([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new _e(0)},specular:{value:new _e(1118481)},shininess:{value:30}}]),vertexShader:$t.meshphong_vert,fragmentShader:$t.meshphong_frag},standard:{uniforms:hn([pt.common,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.roughnessmap,pt.metalnessmap,pt.fog,pt.lights,{emissive:{value:new _e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag},toon:{uniforms:hn([pt.common,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.gradientmap,pt.fog,pt.lights,{emissive:{value:new _e(0)}}]),vertexShader:$t.meshtoon_vert,fragmentShader:$t.meshtoon_frag},matcap:{uniforms:hn([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,{matcap:{value:null}}]),vertexShader:$t.meshmatcap_vert,fragmentShader:$t.meshmatcap_frag},points:{uniforms:hn([pt.points,pt.fog]),vertexShader:$t.points_vert,fragmentShader:$t.points_frag},dashed:{uniforms:hn([pt.common,pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$t.linedashed_vert,fragmentShader:$t.linedashed_frag},depth:{uniforms:hn([pt.common,pt.displacementmap]),vertexShader:$t.depth_vert,fragmentShader:$t.depth_frag},normal:{uniforms:hn([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,{opacity:{value:1}}]),vertexShader:$t.meshnormal_vert,fragmentShader:$t.meshnormal_frag},sprite:{uniforms:hn([pt.sprite,pt.fog]),vertexShader:$t.sprite_vert,fragmentShader:$t.sprite_frag},background:{uniforms:{uvTransform:{value:new Kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$t.background_vert,fragmentShader:$t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Kt}},vertexShader:$t.backgroundCube_vert,fragmentShader:$t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$t.cube_vert,fragmentShader:$t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$t.equirect_vert,fragmentShader:$t.equirect_frag},distanceRGBA:{uniforms:hn([pt.common,pt.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$t.distanceRGBA_vert,fragmentShader:$t.distanceRGBA_frag},shadow:{uniforms:hn([pt.lights,pt.fog,{color:{value:new _e(0)},opacity:{value:1}}]),vertexShader:$t.shadow_vert,fragmentShader:$t.shadow_frag}};pi.physical={uniforms:hn([pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Kt},clearcoatNormalScale:{value:new ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Kt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Kt},sheen:{value:0},sheenColor:{value:new _e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Kt},transmissionSamplerSize:{value:new ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Kt},attenuationDistance:{value:0},attenuationColor:{value:new _e(0)},specularColor:{value:new _e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Kt},anisotropyVector:{value:new ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Kt}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag};const Ba={r:0,b:0,g:0},br=new Vi,xS=new Ie;function SS(r,t,e,n,i,s,o){const a=new _e(0);let l=s===!0?0:1,c,u,f=null,h=0,d=null;function g(y){let x=y.isScene===!0?y.background:null;return x&&x.isTexture&&(x=(y.backgroundBlurriness>0?e:t).get(x)),x}function _(y){let x=!1;const M=g(y);M===null?m(a,l):M&&M.isColor&&(m(M,1),x=!0);const A=r.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function p(y,x){const M=g(x);M&&(M.isCubeTexture||M.mapping===Pl)?(u===void 0&&(u=new Qn(new ia(1,1,1),new Ti({name:"BackgroundCubeMaterial",uniforms:Js(pi.backgroundCube.uniforms),vertexShader:pi.backgroundCube.vertexShader,fragmentShader:pi.backgroundCube.fragmentShader,side:wn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,w,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),br.copy(x.backgroundRotation),br.x*=-1,br.y*=-1,br.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(br.y*=-1,br.z*=-1),u.material.uniforms.envMap.value=M,u.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(xS.makeRotationFromEuler(br)),u.material.toneMapped=pe.getTransfer(M.colorSpace)!==be,(f!==M||h!==M.version||d!==r.toneMapping)&&(u.material.needsUpdate=!0,f=M,h=M.version,d=r.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new Qn(new Qs(2,2),new Ti({name:"BackgroundMaterial",uniforms:Js(pi.background.uniforms),vertexShader:pi.background.vertexShader,fragmentShader:pi.background.fragmentShader,side:mr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=pe.getTransfer(M.colorSpace)!==be,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(f!==M||h!==M.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,f=M,h=M.version,d=r.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function m(y,x){y.getRGB(Ba,tm(r)),n.buffers.color.setClear(Ba.r,Ba.g,Ba.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(y,x=1){a.set(y),l=x,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,m(a,l)},render:_,addToRenderList:p}}function MS(r,t){const e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=h(null);let s=i,o=!1;function a(v,P,U,I,z){let Y=!1;const W=f(I,U,P);s!==W&&(s=W,c(s.object)),Y=d(v,I,U,z),Y&&g(v,I,U,z),z!==null&&t.update(z,r.ELEMENT_ARRAY_BUFFER),(Y||o)&&(o=!1,M(v,P,U,I),z!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function l(){return r.createVertexArray()}function c(v){return r.bindVertexArray(v)}function u(v){return r.deleteVertexArray(v)}function f(v,P,U){const I=U.wireframe===!0;let z=n[v.id];z===void 0&&(z={},n[v.id]=z);let Y=z[P.id];Y===void 0&&(Y={},z[P.id]=Y);let W=Y[I];return W===void 0&&(W=h(l()),Y[I]=W),W}function h(v){const P=[],U=[],I=[];for(let z=0;z<e;z++)P[z]=0,U[z]=0,I[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:U,attributeDivisors:I,object:v,attributes:{},index:null}}function d(v,P,U,I){const z=s.attributes,Y=P.attributes;let W=0;const B=U.getAttributes();for(const V in B)if(B[V].location>=0){const L=z[V];let lt=Y[V];if(lt===void 0&&(V==="instanceMatrix"&&v.instanceMatrix&&(lt=v.instanceMatrix),V==="instanceColor"&&v.instanceColor&&(lt=v.instanceColor)),L===void 0||L.attribute!==lt||lt&&L.data!==lt.data)return!0;W++}return s.attributesNum!==W||s.index!==I}function g(v,P,U,I){const z={},Y=P.attributes;let W=0;const B=U.getAttributes();for(const V in B)if(B[V].location>=0){let L=Y[V];L===void 0&&(V==="instanceMatrix"&&v.instanceMatrix&&(L=v.instanceMatrix),V==="instanceColor"&&v.instanceColor&&(L=v.instanceColor));const lt={};lt.attribute=L,L&&L.data&&(lt.data=L.data),z[V]=lt,W++}s.attributes=z,s.attributesNum=W,s.index=I}function _(){const v=s.newAttributes;for(let P=0,U=v.length;P<U;P++)v[P]=0}function p(v){m(v,0)}function m(v,P){const U=s.newAttributes,I=s.enabledAttributes,z=s.attributeDivisors;U[v]=1,I[v]===0&&(r.enableVertexAttribArray(v),I[v]=1),z[v]!==P&&(r.vertexAttribDivisor(v,P),z[v]=P)}function y(){const v=s.newAttributes,P=s.enabledAttributes;for(let U=0,I=P.length;U<I;U++)P[U]!==v[U]&&(r.disableVertexAttribArray(U),P[U]=0)}function x(v,P,U,I,z,Y,W){W===!0?r.vertexAttribIPointer(v,P,U,z,Y):r.vertexAttribPointer(v,P,U,I,z,Y)}function M(v,P,U,I){_();const z=I.attributes,Y=U.getAttributes(),W=P.defaultAttributeValues;for(const B in Y){const V=Y[B];if(V.location>=0){let st=z[B];if(st===void 0&&(B==="instanceMatrix"&&v.instanceMatrix&&(st=v.instanceMatrix),B==="instanceColor"&&v.instanceColor&&(st=v.instanceColor)),st!==void 0){const L=st.normalized,lt=st.itemSize,Bt=t.get(st);if(Bt===void 0)continue;const qt=Bt.buffer,$=Bt.type,tt=Bt.bytesPerElement,ut=$===r.INT||$===r.UNSIGNED_INT||st.gpuType===oh;if(st.isInterleavedBufferAttribute){const at=st.data,wt=at.stride,Rt=st.offset;if(at.isInstancedInterleavedBuffer){for(let Gt=0;Gt<V.locationSize;Gt++)m(V.location+Gt,at.meshPerAttribute);v.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let Gt=0;Gt<V.locationSize;Gt++)p(V.location+Gt);r.bindBuffer(r.ARRAY_BUFFER,qt);for(let Gt=0;Gt<V.locationSize;Gt++)x(V.location+Gt,lt/V.locationSize,$,L,wt*tt,(Rt+lt/V.locationSize*Gt)*tt,ut)}else{if(st.isInstancedBufferAttribute){for(let at=0;at<V.locationSize;at++)m(V.location+at,st.meshPerAttribute);v.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let at=0;at<V.locationSize;at++)p(V.location+at);r.bindBuffer(r.ARRAY_BUFFER,qt);for(let at=0;at<V.locationSize;at++)x(V.location+at,lt/V.locationSize,$,L,lt*tt,lt/V.locationSize*at*tt,ut)}}else if(W!==void 0){const L=W[B];if(L!==void 0)switch(L.length){case 2:r.vertexAttrib2fv(V.location,L);break;case 3:r.vertexAttrib3fv(V.location,L);break;case 4:r.vertexAttrib4fv(V.location,L);break;default:r.vertexAttrib1fv(V.location,L)}}}}y()}function A(){C();for(const v in n){const P=n[v];for(const U in P){const I=P[U];for(const z in I)u(I[z].object),delete I[z];delete P[U]}delete n[v]}}function w(v){if(n[v.id]===void 0)return;const P=n[v.id];for(const U in P){const I=P[U];for(const z in I)u(I[z].object),delete I[z];delete P[U]}delete n[v.id]}function T(v){for(const P in n){const U=n[P];if(U[v.id]===void 0)continue;const I=U[v.id];for(const z in I)u(I[z].object),delete I[z];delete U[v.id]}}function C(){S(),o=!0,s!==i&&(s=i,c(s.object))}function S(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:C,resetDefaultState:S,dispose:A,releaseStatesOfGeometry:w,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:p,disableUnusedAttributes:y}}function yS(r,t,e){let n;function i(c){n=c}function s(c,u){r.drawArrays(n,c,u),e.update(u,n,1)}function o(c,u,f){f!==0&&(r.drawArraysInstanced(n,c,u,f),e.update(u,n,f))}function a(c,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,f);let d=0;for(let g=0;g<f;g++)d+=u[g];e.update(d,n,1)}function l(c,u,f,h){if(f===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],u[g],h[g]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,u,0,h,0,f);let g=0;for(let _=0;_<f;_++)g+=u[_];for(let _=0;_<h.length;_++)e.update(g,n,h[_])}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function ES(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(w){return!(w!==li&&n.convert(w)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const T=w===Qo&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==Hi&&n.convert(w)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Mi&&!T)}function l(w){if(w==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=e.logarithmicDepthBuffer===!0,h=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),d=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_TEXTURE_SIZE),_=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),m=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),y=r.getParameter(r.MAX_VARYING_VECTORS),x=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),M=d>0,A=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,maxTextures:h,maxVertexTextures:d,maxTextureSize:g,maxCubemapSize:_,maxAttributes:p,maxVertexUniforms:m,maxVaryings:y,maxFragmentUniforms:x,vertexTextures:M,maxSamples:A}}function TS(r){const t=this;let e=null,n=0,i=!1,s=!1;const o=new Pr,a=new Kt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||n!==0||i;return i=h,n=f.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){e=u(f,h,0)},this.setState=function(f,h,d){const g=f.clippingPlanes,_=f.clipIntersection,p=f.clipShadows,m=r.get(f);if(!i||g===null||g.length===0||s&&!p)s?u(null):c();else{const y=s?0:n,x=y*4;let M=m.clippingState||null;l.value=M,M=u(g,h,x,d);for(let A=0;A!==x;++A)M[A]=e[A];m.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(f,h,d,g){const _=f!==null?f.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const m=d+_*4,y=h.matrixWorldInverse;a.getNormalMatrix(y),(p===null||p.length<m)&&(p=new Float32Array(m));for(let x=0,M=d;x!==_;++x,M+=4)o.copy(f[x]).applyMatrix4(y,a),o.normal.toArray(p,M),p[M+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}function bS(r){let t=new WeakMap;function e(o,a){return a===Jc?o.mapping=$s:a===Qc&&(o.mapping=Ks),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Jc||a===Qc)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new O0(l.height);return c.fromEquirectangularTexture(r,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class sm extends em{constructor(t=-1,e=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ps=4,Cf=[.125,.215,.35,.446,.526,.582],Ir=20,xc=new sm,Rf=new _e;let Sc=null,Mc=0,yc=0,Ec=!1;const Lr=(1+Math.sqrt(5))/2,ys=1/Lr,Pf=[new q(-Lr,ys,0),new q(Lr,ys,0),new q(-ys,0,Lr),new q(ys,0,Lr),new q(0,Lr,-ys),new q(0,Lr,ys),new q(-1,1,-1),new q(1,1,-1),new q(-1,1,1),new q(1,1,1)];class Lf{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Sc=this._renderer.getRenderTarget(),Mc=this._renderer.getActiveCubeFace(),yc=this._renderer.getActiveMipmapLevel(),Ec=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Uf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=If(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Sc,Mc,yc),this._renderer.xr.enabled=Ec,t.scissorTest=!1,ka(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===$s||t.mapping===Ks?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Sc=this._renderer.getRenderTarget(),Mc=this._renderer.getActiveCubeFace(),yc=this._renderer.getActiveMipmapLevel(),Ec=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ai,minFilter:ai,generateMipmaps:!1,type:Qo,format:li,colorSpace:gr,depthBuffer:!1},i=Df(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Df(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=wS(s)),this._blurMaterial=AS(s,t,e)}return i}_compileMaterial(t){const e=new Qn(this._lodPlanes[0],t);this._renderer.compile(e,xc)}_sceneToCubeUV(t,e,n,i){const a=new oi(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(Rf),u.toneMapping=ur,u.autoClear=!1;const d=new jp({name:"PMREM.Background",side:wn,depthWrite:!1,depthTest:!1}),g=new Qn(new ia,d);let _=!1;const p=t.background;p?p.isColor&&(d.color.copy(p),t.background=null,_=!0):(d.color.copy(Rf),_=!0);for(let m=0;m<6;m++){const y=m%3;y===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):y===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));const x=this._cubeSize;ka(i,y*x,m>2?x:0,x,x),u.setRenderTarget(i),_&&u.render(g,a),u.render(t,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=f,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===$s||t.mapping===Ks;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Uf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=If());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new Qn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;ka(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,xc)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Pf[(i-s-1)%Pf.length];this._blur(t,s-1,s,o,a)}e.autoClear=n}_blur(t,e,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",s),this._halfBlur(o,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Qn(this._lodPlanes[i],c),h=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Ir-1),_=s/g,p=isFinite(s)?1+Math.floor(u*_):Ir;p>Ir&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Ir}`);const m=[];let y=0;for(let T=0;T<Ir;++T){const C=T/_,S=Math.exp(-C*C/2);m.push(S),T===0?y+=S:T<p&&(y+=2*S)}for(let T=0;T<m.length;T++)m[T]=m[T]/y;h.envMap.value=t.texture,h.samples.value=p,h.weights.value=m,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:x}=this;h.dTheta.value=g,h.mipInt.value=x-n;const M=this._sizeLods[i],A=3*M*(i>x-Ps?i-x+Ps:0),w=4*(this._cubeSize-M);ka(e,A,w,3*M,2*M),l.setRenderTarget(e),l.render(f,xc)}}function wS(r){const t=[],e=[],n=[];let i=r;const s=r-Ps+1+Cf.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);e.push(a);let l=1/a;o>r-Ps?l=Cf[o-r+Ps-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,g=6,_=3,p=2,m=1,y=new Float32Array(_*g*d),x=new Float32Array(p*g*d),M=new Float32Array(m*g*d);for(let w=0;w<d;w++){const T=w%3*2/3-1,C=w>2?0:-1,S=[T,C,0,T+2/3,C,0,T+2/3,C+1,0,T,C,0,T+2/3,C+1,0,T,C+1,0];y.set(S,_*g*w),x.set(h,p*g*w);const v=[w,w,w,w,w,w];M.set(v,m*g*w)}const A=new vr;A.setAttribute("position",new ui(y,_)),A.setAttribute("uv",new ui(x,p)),A.setAttribute("faceIndex",new ui(M,m)),t.push(A),i>Ps&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Df(r,t,e){const n=new Jr(r,t,e);return n.texture.mapping=Pl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ka(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function AS(r,t,e){const n=new Float32Array(Ir),i=new q(0,1,0);return new Ti({name:"SphericalGaussianBlur",defines:{n:Ir,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ph(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:cr,depthTest:!1,depthWrite:!1})}function If(){return new Ti({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ph(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:cr,depthTest:!1,depthWrite:!1})}function Uf(){return new Ti({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ph(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:cr,depthTest:!1,depthWrite:!1})}function ph(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function CS(r){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Jc||l===Qc,u=l===$s||l===Ks;if(c||u){let f=t.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return e===null&&(e=new Lf(r)),f=c?e.fromEquirectangular(a,f):e.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),f.texture;if(f!==void 0)return f.texture;{const d=a.image;return c&&d&&d.height>0||u&&d&&i(d)?(e===null&&(e=new Lf(r)),f=c?e.fromEquirectangular(a):e.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function RS(r){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&Yp("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function PS(r,t,e,n){const i={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&t.remove(h.index);for(const g in h.attributes)t.remove(h.attributes[g]);for(const g in h.morphAttributes){const _=h.morphAttributes[g];for(let p=0,m=_.length;p<m;p++)t.remove(_[p])}h.removeEventListener("dispose",o),delete i[h.id];const d=s.get(h);d&&(t.remove(d),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function a(f,h){return i[h.id]===!0||(h.addEventListener("dispose",o),i[h.id]=!0,e.memory.geometries++),h}function l(f){const h=f.attributes;for(const g in h)t.update(h[g],r.ARRAY_BUFFER);const d=f.morphAttributes;for(const g in d){const _=d[g];for(let p=0,m=_.length;p<m;p++)t.update(_[p],r.ARRAY_BUFFER)}}function c(f){const h=[],d=f.index,g=f.attributes.position;let _=0;if(d!==null){const y=d.array;_=d.version;for(let x=0,M=y.length;x<M;x+=3){const A=y[x+0],w=y[x+1],T=y[x+2];h.push(A,w,w,T,T,A)}}else if(g!==void 0){const y=g.array;_=g.version;for(let x=0,M=y.length/3-1;x<M;x+=3){const A=x+0,w=x+1,T=x+2;h.push(A,w,w,T,T,A)}}else return;const p=new(Xp(h)?Qp:Jp)(h,1);p.version=_;const m=s.get(f);m&&t.remove(m),s.set(f,p)}function u(f){const h=s.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function LS(r,t,e){let n;function i(h){n=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,d){r.drawElements(n,d,s,h*o),e.update(d,n,1)}function c(h,d,g){g!==0&&(r.drawElementsInstanced(n,d,s,h*o,g),e.update(d,n,g))}function u(h,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,h,0,g);let p=0;for(let m=0;m<g;m++)p+=d[m];e.update(p,n,1)}function f(h,d,g,_){if(g===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<h.length;m++)c(h[m]/o,d[m],_[m]);else{p.multiDrawElementsInstancedWEBGL(n,d,0,s,h,0,_,0,g);let m=0;for(let y=0;y<g;y++)m+=d[y];for(let y=0;y<_.length;y++)e.update(m,n,_[y])}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function DS(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case r.TRIANGLES:e.triangles+=a*(s/3);break;case r.LINES:e.lines+=a*(s/2);break;case r.LINE_STRIP:e.lines+=a*(s-1);break;case r.LINE_LOOP:e.lines+=a*s;break;case r.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function IS(r,t,e){const n=new WeakMap,i=new Ke;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let h=n.get(a);if(h===void 0||h.count!==f){let v=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",v)};var d=v;h!==void 0&&h.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],y=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let M=0;g===!0&&(M=1),_===!0&&(M=2),p===!0&&(M=3);let A=a.attributes.position.count*M,w=1;A>t.maxTextureSize&&(w=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const T=new Float32Array(A*w*4*f),C=new $p(T,A,w,f);C.type=Mi,C.needsUpdate=!0;const S=M*4;for(let P=0;P<f;P++){const U=m[P],I=y[P],z=x[P],Y=A*w*4*P;for(let W=0;W<U.count;W++){const B=W*S;g===!0&&(i.fromBufferAttribute(U,W),T[Y+B+0]=i.x,T[Y+B+1]=i.y,T[Y+B+2]=i.z,T[Y+B+3]=0),_===!0&&(i.fromBufferAttribute(I,W),T[Y+B+4]=i.x,T[Y+B+5]=i.y,T[Y+B+6]=i.z,T[Y+B+7]=0),p===!0&&(i.fromBufferAttribute(z,W),T[Y+B+8]=i.x,T[Y+B+9]=i.y,T[Y+B+10]=i.z,T[Y+B+11]=z.itemSize===4?i.w:1)}}h={count:f,texture:C,size:new ce(A,w)},n.set(a,h),a.addEventListener("dispose",v)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,e);else{let g=0;for(let p=0;p<c.length;p++)g+=c[p];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(r,"morphTargetBaseInfluence",_),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",h.size)}return{update:s}}function US(r,t,e,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,f=t.get(l,u);if(i.get(f)!==c&&(t.update(f),i.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;i.get(h)!==c&&(h.update(),i.set(h,c))}return f}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}class om extends _n{constructor(t,e,n,i,s,o,a,l,c,u=zs){if(u!==zs&&u!==js)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===zs&&(n=jr),n===void 0&&u===js&&(n=Zs),super(null,i,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Mn,this.minFilter=l!==void 0?l:Mn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const am=new _n,Nf=new om(1,1),lm=new $p,cm=new x0,um=new nm,Of=[],Ff=[],Bf=new Float32Array(16),kf=new Float32Array(9),zf=new Float32Array(4);function so(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let s=Of[i];if(s===void 0&&(s=new Float32Array(i),Of[i]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function We(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function Xe(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function Il(r,t){let e=Ff[t];e===void 0&&(e=new Int32Array(t),Ff[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function NS(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function OS(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(We(e,t))return;r.uniform2fv(this.addr,t),Xe(e,t)}}function FS(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(We(e,t))return;r.uniform3fv(this.addr,t),Xe(e,t)}}function BS(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(We(e,t))return;r.uniform4fv(this.addr,t),Xe(e,t)}}function kS(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(We(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),Xe(e,t)}else{if(We(e,n))return;zf.set(n),r.uniformMatrix2fv(this.addr,!1,zf),Xe(e,n)}}function zS(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(We(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),Xe(e,t)}else{if(We(e,n))return;kf.set(n),r.uniformMatrix3fv(this.addr,!1,kf),Xe(e,n)}}function HS(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(We(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),Xe(e,t)}else{if(We(e,n))return;Bf.set(n),r.uniformMatrix4fv(this.addr,!1,Bf),Xe(e,n)}}function VS(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function GS(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(We(e,t))return;r.uniform2iv(this.addr,t),Xe(e,t)}}function WS(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(We(e,t))return;r.uniform3iv(this.addr,t),Xe(e,t)}}function XS(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(We(e,t))return;r.uniform4iv(this.addr,t),Xe(e,t)}}function YS(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function qS(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(We(e,t))return;r.uniform2uiv(this.addr,t),Xe(e,t)}}function $S(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(We(e,t))return;r.uniform3uiv(this.addr,t),Xe(e,t)}}function KS(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(We(e,t))return;r.uniform4uiv(this.addr,t),Xe(e,t)}}function ZS(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Nf.compareFunction=Wp,s=Nf):s=am,e.setTexture2D(t||s,i)}function jS(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||cm,i)}function JS(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||um,i)}function QS(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||lm,i)}function tM(r){switch(r){case 5126:return NS;case 35664:return OS;case 35665:return FS;case 35666:return BS;case 35674:return kS;case 35675:return zS;case 35676:return HS;case 5124:case 35670:return VS;case 35667:case 35671:return GS;case 35668:case 35672:return WS;case 35669:case 35673:return XS;case 5125:return YS;case 36294:return qS;case 36295:return $S;case 36296:return KS;case 35678:case 36198:case 36298:case 36306:case 35682:return ZS;case 35679:case 36299:case 36307:return jS;case 35680:case 36300:case 36308:case 36293:return JS;case 36289:case 36303:case 36311:case 36292:return QS}}function eM(r,t){r.uniform1fv(this.addr,t)}function nM(r,t){const e=so(t,this.size,2);r.uniform2fv(this.addr,e)}function iM(r,t){const e=so(t,this.size,3);r.uniform3fv(this.addr,e)}function rM(r,t){const e=so(t,this.size,4);r.uniform4fv(this.addr,e)}function sM(r,t){const e=so(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function oM(r,t){const e=so(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function aM(r,t){const e=so(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function lM(r,t){r.uniform1iv(this.addr,t)}function cM(r,t){r.uniform2iv(this.addr,t)}function uM(r,t){r.uniform3iv(this.addr,t)}function hM(r,t){r.uniform4iv(this.addr,t)}function fM(r,t){r.uniform1uiv(this.addr,t)}function dM(r,t){r.uniform2uiv(this.addr,t)}function pM(r,t){r.uniform3uiv(this.addr,t)}function mM(r,t){r.uniform4uiv(this.addr,t)}function _M(r,t,e){const n=this.cache,i=t.length,s=Il(e,i);We(n,s)||(r.uniform1iv(this.addr,s),Xe(n,s));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||am,s[o])}function gM(r,t,e){const n=this.cache,i=t.length,s=Il(e,i);We(n,s)||(r.uniform1iv(this.addr,s),Xe(n,s));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||cm,s[o])}function vM(r,t,e){const n=this.cache,i=t.length,s=Il(e,i);We(n,s)||(r.uniform1iv(this.addr,s),Xe(n,s));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||um,s[o])}function xM(r,t,e){const n=this.cache,i=t.length,s=Il(e,i);We(n,s)||(r.uniform1iv(this.addr,s),Xe(n,s));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||lm,s[o])}function SM(r){switch(r){case 5126:return eM;case 35664:return nM;case 35665:return iM;case 35666:return rM;case 35674:return sM;case 35675:return oM;case 35676:return aM;case 5124:case 35670:return lM;case 35667:case 35671:return cM;case 35668:case 35672:return uM;case 35669:case 35673:return hM;case 5125:return fM;case 36294:return dM;case 36295:return pM;case 36296:return mM;case 35678:case 36198:case 36298:case 36306:case 35682:return _M;case 35679:case 36299:case 36307:return gM;case 35680:case 36300:case 36308:case 36293:return vM;case 36289:case 36303:case 36311:case 36292:return xM}}class MM{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=tM(e.type)}}class yM{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=SM(e.type)}}class EM{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(t,e[a.id],n)}}}const Tc=/(\w+)(\])?(\[|\.)?/g;function Hf(r,t){r.seq.push(t),r.map[t.id]=t}function TM(r,t,e){const n=r.name,i=n.length;for(Tc.lastIndex=0;;){const s=Tc.exec(n),o=Tc.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Hf(e,c===void 0?new MM(a,r,t):new yM(a,r,t));break}else{let f=e.map[a];f===void 0&&(f=new EM(a),Hf(e,f)),e=f}}}class rl{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),o=t.getUniformLocation(e,s.name);TM(s,o,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,o=e.length;s!==o;++s){const a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function Vf(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}const bM=37297;let wM=0;function AM(r,t){const e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function CM(r){const t=pe.getPrimaries(pe.workingColorSpace),e=pe.getPrimaries(r);let n;switch(t===e?n="":t===Ml&&e===Sl?n="LinearDisplayP3ToLinearSRGB":t===Sl&&e===Ml&&(n="LinearSRGBToLinearDisplayP3"),r){case gr:case Ll:return[n,"LinearTransferOETF"];case di:case dh:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function Gf(r,t,e){const n=r.getShaderParameter(t,r.COMPILE_STATUS),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+AM(r.getShaderSource(t),o)}else return i}function RM(r,t){const e=CM(t);return`vec4 ${r}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function PM(r,t){let e;switch(t){case Xg:e="Linear";break;case Yg:e="Reinhard";break;case qg:e="OptimizedCineon";break;case $g:e="ACESFilmic";break;case Zg:e="AgX";break;case jg:e="Neutral";break;case Kg:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function LM(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(wo).join(`
`)}function DM(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function IM(r,t){const e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(t,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function wo(r){return r!==""}function Wf(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Xf(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const UM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ru(r){return r.replace(UM,OM)}const NM=new Map;function OM(r,t){let e=$t[t];if(e===void 0){const n=NM.get(t);if(n!==void 0)e=$t[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ru(e)}const FM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Yf(r){return r.replace(FM,BM)}function BM(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function qf(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function kM(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Dp?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===gg?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Li&&(t="SHADOWMAP_TYPE_VSM"),t}function zM(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case $s:case Ks:t="ENVMAP_TYPE_CUBE";break;case Pl:t="ENVMAP_TYPE_CUBE_UV";break}return t}function HM(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Ks:t="ENVMAP_MODE_REFRACTION";break}return t}function VM(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Ip:t="ENVMAP_BLENDING_MULTIPLY";break;case Gg:t="ENVMAP_BLENDING_MIX";break;case Wg:t="ENVMAP_BLENDING_ADD";break}return t}function GM(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function WM(r,t,e,n){const i=r.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=kM(e),c=zM(e),u=HM(e),f=VM(e),h=GM(e),d=LM(e),g=DM(s),_=i.createProgram();let p,m,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(wo).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(wo).join(`
`),m.length>0&&(m+=`
`)):(p=[qf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wo).join(`
`),m=[qf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ur?"#define TONE_MAPPING":"",e.toneMapping!==ur?$t.tonemapping_pars_fragment:"",e.toneMapping!==ur?PM("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",$t.colorspace_pars_fragment,RM("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(wo).join(`
`)),o=Ru(o),o=Wf(o,e),o=Xf(o,e),a=Ru(a),a=Wf(a,e),a=Xf(a,e),o=Yf(o),a=Yf(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===lf?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===lf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const x=y+p+o,M=y+m+a,A=Vf(i,i.VERTEX_SHADER,x),w=Vf(i,i.FRAGMENT_SHADER,M);i.attachShader(_,A),i.attachShader(_,w),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function T(P){if(r.debug.checkShaderErrors){const U=i.getProgramInfoLog(_).trim(),I=i.getShaderInfoLog(A).trim(),z=i.getShaderInfoLog(w).trim();let Y=!0,W=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(Y=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,A,w);else{const B=Gf(i,A,"vertex"),V=Gf(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+U+`
`+B+`
`+V)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(I===""||z==="")&&(W=!1);W&&(P.diagnostics={runnable:Y,programLog:U,vertexShader:{log:I,prefix:p},fragmentShader:{log:z,prefix:m}})}i.deleteShader(A),i.deleteShader(w),C=new rl(i,_),S=IM(i,_)}let C;this.getUniforms=function(){return C===void 0&&T(this),C};let S;this.getAttributes=function(){return S===void 0&&T(this),S};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=i.getProgramParameter(_,bM)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=wM++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=w,this}let XM=0;class YM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new qM(t),e.set(t,n)),n}}class qM{constructor(t){this.id=XM++,this.code=t,this.usedTimes=0}}function $M(r,t,e,n,i,s,o){const a=new Kp,l=new YM,c=new Set,u=[],f=i.logarithmicDepthBuffer,h=i.vertexTextures;let d=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return c.add(S),S===0?"uv":`uv${S}`}function p(S,v,P,U,I){const z=U.fog,Y=I.geometry,W=S.isMeshStandardMaterial?U.environment:null,B=(S.isMeshStandardMaterial?e:t).get(S.envMap||W),V=B&&B.mapping===Pl?B.image.height:null,st=g[S.type];S.precision!==null&&(d=i.getMaxPrecision(S.precision),d!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));const L=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,lt=L!==void 0?L.length:0;let Bt=0;Y.morphAttributes.position!==void 0&&(Bt=1),Y.morphAttributes.normal!==void 0&&(Bt=2),Y.morphAttributes.color!==void 0&&(Bt=3);let qt,$,tt,ut;if(st){const ne=pi[st];qt=ne.vertexShader,$=ne.fragmentShader}else qt=S.vertexShader,$=S.fragmentShader,l.update(S),tt=l.getVertexShaderID(S),ut=l.getFragmentShaderID(S);const at=r.getRenderTarget(),wt=I.isInstancedMesh===!0,Rt=I.isBatchedMesh===!0,Gt=!!S.map,Jt=!!S.matcap,D=!!B,Dt=!!S.aoMap,Ot=!!S.lightMap,Xt=!!S.bumpMap,gt=!!S.normalMap,G=!!S.displacementMap,At=!!S.emissiveMap,Ft=!!S.metalnessMap,R=!!S.roughnessMap,E=S.anisotropy>0,X=S.clearcoat>0,Q=S.dispersion>0,nt=S.iridescence>0,Z=S.sheen>0,Et=S.transmission>0,it=E&&!!S.anisotropyMap,dt=X&&!!S.clearcoatMap,Ut=X&&!!S.clearcoatNormalMap,rt=X&&!!S.clearcoatRoughnessMap,_t=nt&&!!S.iridescenceMap,Pt=nt&&!!S.iridescenceThicknessMap,kt=Z&&!!S.sheenColorMap,mt=Z&&!!S.sheenRoughnessMap,zt=!!S.specularMap,Wt=!!S.specularColorMap,le=!!S.specularIntensityMap,O=Et&&!!S.transmissionMap,K=Et&&!!S.thicknessMap,j=!!S.gradientMap,J=!!S.alphaMap,ot=S.alphaTest>0,Tt=!!S.alphaHash,Yt=!!S.extensions;let ge=ur;S.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(ge=r.toneMapping);const ve={shaderID:st,shaderType:S.type,shaderName:S.name,vertexShader:qt,fragmentShader:$,defines:S.defines,customVertexShaderID:tt,customFragmentShaderID:ut,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,batching:Rt,batchingColor:Rt&&I._colorsTexture!==null,instancing:wt,instancingColor:wt&&I.instanceColor!==null,instancingMorph:wt&&I.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:at===null?r.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:gr,alphaToCoverage:!!S.alphaToCoverage,map:Gt,matcap:Jt,envMap:D,envMapMode:D&&B.mapping,envMapCubeUVHeight:V,aoMap:Dt,lightMap:Ot,bumpMap:Xt,normalMap:gt,displacementMap:h&&G,emissiveMap:At,normalMapObjectSpace:gt&&S.normalMapType===n0,normalMapTangentSpace:gt&&S.normalMapType===e0,metalnessMap:Ft,roughnessMap:R,anisotropy:E,anisotropyMap:it,clearcoat:X,clearcoatMap:dt,clearcoatNormalMap:Ut,clearcoatRoughnessMap:rt,dispersion:Q,iridescence:nt,iridescenceMap:_t,iridescenceThicknessMap:Pt,sheen:Z,sheenColorMap:kt,sheenRoughnessMap:mt,specularMap:zt,specularColorMap:Wt,specularIntensityMap:le,transmission:Et,transmissionMap:O,thicknessMap:K,gradientMap:j,opaque:S.transparent===!1&&S.blending===ks&&S.alphaToCoverage===!1,alphaMap:J,alphaTest:ot,alphaHash:Tt,combine:S.combine,mapUv:Gt&&_(S.map.channel),aoMapUv:Dt&&_(S.aoMap.channel),lightMapUv:Ot&&_(S.lightMap.channel),bumpMapUv:Xt&&_(S.bumpMap.channel),normalMapUv:gt&&_(S.normalMap.channel),displacementMapUv:G&&_(S.displacementMap.channel),emissiveMapUv:At&&_(S.emissiveMap.channel),metalnessMapUv:Ft&&_(S.metalnessMap.channel),roughnessMapUv:R&&_(S.roughnessMap.channel),anisotropyMapUv:it&&_(S.anisotropyMap.channel),clearcoatMapUv:dt&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:Ut&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:rt&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:_t&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:Pt&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:kt&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:mt&&_(S.sheenRoughnessMap.channel),specularMapUv:zt&&_(S.specularMap.channel),specularColorMapUv:Wt&&_(S.specularColorMap.channel),specularIntensityMapUv:le&&_(S.specularIntensityMap.channel),transmissionMapUv:O&&_(S.transmissionMap.channel),thicknessMapUv:K&&_(S.thicknessMap.channel),alphaMapUv:J&&_(S.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(gt||E),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!Y.attributes.uv&&(Gt||J),fog:!!z,useFog:S.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:I.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:lt,morphTextureStride:Bt,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:r.shadowMap.enabled&&P.length>0,shadowMapType:r.shadowMap.type,toneMapping:ge,decodeVideoTexture:Gt&&S.map.isVideoTexture===!0&&pe.getTransfer(S.map.colorSpace)===be,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Ni,flipSided:S.side===wn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Yt&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Yt&&S.extensions.multiDraw===!0||Rt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return ve.vertexUv1s=c.has(1),ve.vertexUv2s=c.has(2),ve.vertexUv3s=c.has(3),c.clear(),ve}function m(S){const v=[];if(S.shaderID?v.push(S.shaderID):(v.push(S.customVertexShaderID),v.push(S.customFragmentShaderID)),S.defines!==void 0)for(const P in S.defines)v.push(P),v.push(S.defines[P]);return S.isRawShaderMaterial===!1&&(y(v,S),x(v,S),v.push(r.outputColorSpace)),v.push(S.customProgramCacheKey),v.join()}function y(S,v){S.push(v.precision),S.push(v.outputColorSpace),S.push(v.envMapMode),S.push(v.envMapCubeUVHeight),S.push(v.mapUv),S.push(v.alphaMapUv),S.push(v.lightMapUv),S.push(v.aoMapUv),S.push(v.bumpMapUv),S.push(v.normalMapUv),S.push(v.displacementMapUv),S.push(v.emissiveMapUv),S.push(v.metalnessMapUv),S.push(v.roughnessMapUv),S.push(v.anisotropyMapUv),S.push(v.clearcoatMapUv),S.push(v.clearcoatNormalMapUv),S.push(v.clearcoatRoughnessMapUv),S.push(v.iridescenceMapUv),S.push(v.iridescenceThicknessMapUv),S.push(v.sheenColorMapUv),S.push(v.sheenRoughnessMapUv),S.push(v.specularMapUv),S.push(v.specularColorMapUv),S.push(v.specularIntensityMapUv),S.push(v.transmissionMapUv),S.push(v.thicknessMapUv),S.push(v.combine),S.push(v.fogExp2),S.push(v.sizeAttenuation),S.push(v.morphTargetsCount),S.push(v.morphAttributeCount),S.push(v.numDirLights),S.push(v.numPointLights),S.push(v.numSpotLights),S.push(v.numSpotLightMaps),S.push(v.numHemiLights),S.push(v.numRectAreaLights),S.push(v.numDirLightShadows),S.push(v.numPointLightShadows),S.push(v.numSpotLightShadows),S.push(v.numSpotLightShadowsWithMaps),S.push(v.numLightProbes),S.push(v.shadowMapType),S.push(v.toneMapping),S.push(v.numClippingPlanes),S.push(v.numClipIntersection),S.push(v.depthPacking)}function x(S,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),v.dispersion&&a.enable(20),v.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.skinning&&a.enable(4),v.morphTargets&&a.enable(5),v.morphNormals&&a.enable(6),v.morphColors&&a.enable(7),v.premultipliedAlpha&&a.enable(8),v.shadowMapEnabled&&a.enable(9),v.doubleSided&&a.enable(10),v.flipSided&&a.enable(11),v.useDepthPacking&&a.enable(12),v.dithering&&a.enable(13),v.transmission&&a.enable(14),v.sheen&&a.enable(15),v.opaque&&a.enable(16),v.pointsUvs&&a.enable(17),v.decodeVideoTexture&&a.enable(18),v.alphaToCoverage&&a.enable(19),S.push(a.mask)}function M(S){const v=g[S.type];let P;if(v){const U=pi[v];P=D0.clone(U.uniforms)}else P=S.uniforms;return P}function A(S,v){let P;for(let U=0,I=u.length;U<I;U++){const z=u[U];if(z.cacheKey===v){P=z,++P.usedTimes;break}}return P===void 0&&(P=new WM(r,v,S,s),u.push(P)),P}function w(S){if(--S.usedTimes===0){const v=u.indexOf(S);u[v]=u[u.length-1],u.pop(),S.destroy()}}function T(S){l.remove(S)}function C(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:M,acquireProgram:A,releaseProgram:w,releaseShaderCache:T,programs:u,dispose:C}}function KM(){let r=new WeakMap;function t(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function e(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function ZM(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function $f(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Kf(){const r=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function o(f,h,d,g,_,p){let m=r[t];return m===void 0?(m={id:f.id,object:f,geometry:h,material:d,groupOrder:g,renderOrder:f.renderOrder,z:_,group:p},r[t]=m):(m.id=f.id,m.object=f,m.geometry=h,m.material=d,m.groupOrder=g,m.renderOrder=f.renderOrder,m.z=_,m.group=p),t++,m}function a(f,h,d,g,_,p){const m=o(f,h,d,g,_,p);d.transmission>0?n.push(m):d.transparent===!0?i.push(m):e.push(m)}function l(f,h,d,g,_,p){const m=o(f,h,d,g,_,p);d.transmission>0?n.unshift(m):d.transparent===!0?i.unshift(m):e.unshift(m)}function c(f,h){e.length>1&&e.sort(f||ZM),n.length>1&&n.sort(h||$f),i.length>1&&i.sort(h||$f)}function u(){for(let f=t,h=r.length;f<h;f++){const d=r[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:u,sort:c}}function jM(){let r=new WeakMap;function t(n,i){const s=r.get(n);let o;return s===void 0?(o=new Kf,r.set(n,[o])):i>=s.length?(o=new Kf,s.push(o)):o=s[i],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function JM(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new q,color:new _e};break;case"SpotLight":e={position:new q,direction:new q,color:new _e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new q,color:new _e,distance:0,decay:0};break;case"HemisphereLight":e={direction:new q,skyColor:new _e,groundColor:new _e};break;case"RectAreaLight":e={color:new _e,position:new q,halfWidth:new q,halfHeight:new q};break}return r[t.id]=e,e}}}function QM(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let ty=0;function ey(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function ny(r){const t=new JM,e=QM(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new q);const i=new q,s=new Ie,o=new Ie;function a(c){let u=0,f=0,h=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let d=0,g=0,_=0,p=0,m=0,y=0,x=0,M=0,A=0,w=0,T=0;c.sort(ey);for(let S=0,v=c.length;S<v;S++){const P=c[S],U=P.color,I=P.intensity,z=P.distance,Y=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=U.r*I,f+=U.g*I,h+=U.b*I;else if(P.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(P.sh.coefficients[W],I);T++}else if(P.isDirectionalLight){const W=t.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const B=P.shadow,V=e.get(P);V.shadowIntensity=B.intensity,V.shadowBias=B.bias,V.shadowNormalBias=B.normalBias,V.shadowRadius=B.radius,V.shadowMapSize=B.mapSize,n.directionalShadow[d]=V,n.directionalShadowMap[d]=Y,n.directionalShadowMatrix[d]=P.shadow.matrix,y++}n.directional[d]=W,d++}else if(P.isSpotLight){const W=t.get(P);W.position.setFromMatrixPosition(P.matrixWorld),W.color.copy(U).multiplyScalar(I),W.distance=z,W.coneCos=Math.cos(P.angle),W.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),W.decay=P.decay,n.spot[_]=W;const B=P.shadow;if(P.map&&(n.spotLightMap[A]=P.map,A++,B.updateMatrices(P),P.castShadow&&w++),n.spotLightMatrix[_]=B.matrix,P.castShadow){const V=e.get(P);V.shadowIntensity=B.intensity,V.shadowBias=B.bias,V.shadowNormalBias=B.normalBias,V.shadowRadius=B.radius,V.shadowMapSize=B.mapSize,n.spotShadow[_]=V,n.spotShadowMap[_]=Y,M++}_++}else if(P.isRectAreaLight){const W=t.get(P);W.color.copy(U).multiplyScalar(I),W.halfWidth.set(P.width*.5,0,0),W.halfHeight.set(0,P.height*.5,0),n.rectArea[p]=W,p++}else if(P.isPointLight){const W=t.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),W.distance=P.distance,W.decay=P.decay,P.castShadow){const B=P.shadow,V=e.get(P);V.shadowIntensity=B.intensity,V.shadowBias=B.bias,V.shadowNormalBias=B.normalBias,V.shadowRadius=B.radius,V.shadowMapSize=B.mapSize,V.shadowCameraNear=B.camera.near,V.shadowCameraFar=B.camera.far,n.pointShadow[g]=V,n.pointShadowMap[g]=Y,n.pointShadowMatrix[g]=P.shadow.matrix,x++}n.point[g]=W,g++}else if(P.isHemisphereLight){const W=t.get(P);W.skyColor.copy(P.color).multiplyScalar(I),W.groundColor.copy(P.groundColor).multiplyScalar(I),n.hemi[m]=W,m++}}p>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=pt.LTC_FLOAT_1,n.rectAreaLTC2=pt.LTC_FLOAT_2):(n.rectAreaLTC1=pt.LTC_HALF_1,n.rectAreaLTC2=pt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=h;const C=n.hash;(C.directionalLength!==d||C.pointLength!==g||C.spotLength!==_||C.rectAreaLength!==p||C.hemiLength!==m||C.numDirectionalShadows!==y||C.numPointShadows!==x||C.numSpotShadows!==M||C.numSpotMaps!==A||C.numLightProbes!==T)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=p,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=M+A-w,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=T,C.directionalLength=d,C.pointLength=g,C.spotLength=_,C.rectAreaLength=p,C.hemiLength=m,C.numDirectionalShadows=y,C.numPointShadows=x,C.numSpotShadows=M,C.numSpotMaps=A,C.numLightProbes=T,n.version=ty++)}function l(c,u){let f=0,h=0,d=0,g=0,_=0;const p=u.matrixWorldInverse;for(let m=0,y=c.length;m<y;m++){const x=c[m];if(x.isDirectionalLight){const M=n.directional[f];M.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(p),f++}else if(x.isSpotLight){const M=n.spot[d];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(p),d++}else if(x.isRectAreaLight){const M=n.rectArea[g];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(p),o.identity(),s.copy(x.matrixWorld),s.premultiply(p),o.extractRotation(s),M.halfWidth.set(x.width*.5,0,0),M.halfHeight.set(0,x.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){const M=n.point[h];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(p),h++}else if(x.isHemisphereLight){const M=n.hemi[_];M.direction.setFromMatrixPosition(x.matrixWorld),M.direction.transformDirection(p),_++}}}return{setup:a,setupView:l,state:n}}function Zf(r){const t=new ny(r),e=[],n=[];function i(u){c.camera=u,e.length=0,n.length=0}function s(u){e.push(u)}function o(u){n.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function iy(r){let t=new WeakMap;function e(i,s=0){const o=t.get(i);let a;return o===void 0?(a=new Zf(r),t.set(i,[a])):s>=o.length?(a=new Zf(r),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class ry extends Dl{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Qg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class sy extends Dl{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const oy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ay=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function ly(r,t,e){let n=new im;const i=new ce,s=new ce,o=new Ke,a=new ry({depthPacking:t0}),l=new sy,c={},u=e.maxTextureSize,f={[mr]:wn,[wn]:mr,[Ni]:Ni},h=new Ti({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ce},radius:{value:4}},vertexShader:oy,fragmentShader:ay}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const g=new vr;g.setAttribute("position",new ui(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Qn(g,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Dp;let m=this.type;this.render=function(w,T,C){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;const S=r.getRenderTarget(),v=r.getActiveCubeFace(),P=r.getActiveMipmapLevel(),U=r.state;U.setBlending(cr),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const I=m!==Li&&this.type===Li,z=m===Li&&this.type!==Li;for(let Y=0,W=w.length;Y<W;Y++){const B=w[Y],V=B.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",B,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);const st=V.getFrameExtents();if(i.multiply(st),s.copy(V.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/st.x),i.x=s.x*st.x,V.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/st.y),i.y=s.y*st.y,V.mapSize.y=s.y)),V.map===null||I===!0||z===!0){const lt=this.type!==Li?{minFilter:Mn,magFilter:Mn}:{};V.map!==null&&V.map.dispose(),V.map=new Jr(i.x,i.y,lt),V.map.texture.name=B.name+".shadowMap",V.camera.updateProjectionMatrix()}r.setRenderTarget(V.map),r.clear();const L=V.getViewportCount();for(let lt=0;lt<L;lt++){const Bt=V.getViewport(lt);o.set(s.x*Bt.x,s.y*Bt.y,s.x*Bt.z,s.y*Bt.w),U.viewport(o),V.updateMatrices(B,lt),n=V.getFrustum(),M(T,C,V.camera,B,this.type)}V.isPointLightShadow!==!0&&this.type===Li&&y(V,C),V.needsUpdate=!1}m=this.type,p.needsUpdate=!1,r.setRenderTarget(S,v,P)};function y(w,T){const C=t.update(_);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Jr(i.x,i.y)),h.uniforms.shadow_pass.value=w.map.texture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(T,null,C,h,_,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(T,null,C,d,_,null)}function x(w,T,C,S){let v=null;const P=C.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(P!==void 0)v=P;else if(v=C.isPointLight===!0?l:a,r.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const U=v.uuid,I=T.uuid;let z=c[U];z===void 0&&(z={},c[U]=z);let Y=z[I];Y===void 0&&(Y=v.clone(),z[I]=Y,T.addEventListener("dispose",A)),v=Y}if(v.visible=T.visible,v.wireframe=T.wireframe,S===Li?v.side=T.shadowSide!==null?T.shadowSide:T.side:v.side=T.shadowSide!==null?T.shadowSide:f[T.side],v.alphaMap=T.alphaMap,v.alphaTest=T.alphaTest,v.map=T.map,v.clipShadows=T.clipShadows,v.clippingPlanes=T.clippingPlanes,v.clipIntersection=T.clipIntersection,v.displacementMap=T.displacementMap,v.displacementScale=T.displacementScale,v.displacementBias=T.displacementBias,v.wireframeLinewidth=T.wireframeLinewidth,v.linewidth=T.linewidth,C.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const U=r.properties.get(v);U.light=C}return v}function M(w,T,C,S,v){if(w.visible===!1)return;if(w.layers.test(T.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&v===Li)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,w.matrixWorld);const I=t.update(w),z=w.material;if(Array.isArray(z)){const Y=I.groups;for(let W=0,B=Y.length;W<B;W++){const V=Y[W],st=z[V.materialIndex];if(st&&st.visible){const L=x(w,st,S,v);w.onBeforeShadow(r,w,T,C,I,L,V),r.renderBufferDirect(C,null,I,L,w,V),w.onAfterShadow(r,w,T,C,I,L,V)}}}else if(z.visible){const Y=x(w,z,S,v);w.onBeforeShadow(r,w,T,C,I,Y,null),r.renderBufferDirect(C,null,I,Y,w,null),w.onAfterShadow(r,w,T,C,I,Y,null)}}const U=w.children;for(let I=0,z=U.length;I<z;I++)M(U[I],T,C,S,v)}function A(w){w.target.removeEventListener("dispose",A);for(const C in c){const S=c[C],v=w.target.uuid;v in S&&(S[v].dispose(),delete S[v])}}}function cy(r){function t(){let O=!1;const K=new Ke;let j=null;const J=new Ke(0,0,0,0);return{setMask:function(ot){j!==ot&&!O&&(r.colorMask(ot,ot,ot,ot),j=ot)},setLocked:function(ot){O=ot},setClear:function(ot,Tt,Yt,ge,ve){ve===!0&&(ot*=ge,Tt*=ge,Yt*=ge),K.set(ot,Tt,Yt,ge),J.equals(K)===!1&&(r.clearColor(ot,Tt,Yt,ge),J.copy(K))},reset:function(){O=!1,j=null,J.set(-1,0,0,0)}}}function e(){let O=!1,K=null,j=null,J=null;return{setTest:function(ot){ot?ut(r.DEPTH_TEST):at(r.DEPTH_TEST)},setMask:function(ot){K!==ot&&!O&&(r.depthMask(ot),K=ot)},setFunc:function(ot){if(j!==ot){switch(ot){case Og:r.depthFunc(r.NEVER);break;case Fg:r.depthFunc(r.ALWAYS);break;case Bg:r.depthFunc(r.LESS);break;case vl:r.depthFunc(r.LEQUAL);break;case kg:r.depthFunc(r.EQUAL);break;case zg:r.depthFunc(r.GEQUAL);break;case Hg:r.depthFunc(r.GREATER);break;case Vg:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}j=ot}},setLocked:function(ot){O=ot},setClear:function(ot){J!==ot&&(r.clearDepth(ot),J=ot)},reset:function(){O=!1,K=null,j=null,J=null}}}function n(){let O=!1,K=null,j=null,J=null,ot=null,Tt=null,Yt=null,ge=null,ve=null;return{setTest:function(ne){O||(ne?ut(r.STENCIL_TEST):at(r.STENCIL_TEST))},setMask:function(ne){K!==ne&&!O&&(r.stencilMask(ne),K=ne)},setFunc:function(ne,Nt,yt){(j!==ne||J!==Nt||ot!==yt)&&(r.stencilFunc(ne,Nt,yt),j=ne,J=Nt,ot=yt)},setOp:function(ne,Nt,yt){(Tt!==ne||Yt!==Nt||ge!==yt)&&(r.stencilOp(ne,Nt,yt),Tt=ne,Yt=Nt,ge=yt)},setLocked:function(ne){O=ne},setClear:function(ne){ve!==ne&&(r.clearStencil(ne),ve=ne)},reset:function(){O=!1,K=null,j=null,J=null,ot=null,Tt=null,Yt=null,ge=null,ve=null}}}const i=new t,s=new e,o=new n,a=new WeakMap,l=new WeakMap;let c={},u={},f=new WeakMap,h=[],d=null,g=!1,_=null,p=null,m=null,y=null,x=null,M=null,A=null,w=new _e(0,0,0),T=0,C=!1,S=null,v=null,P=null,U=null,I=null;const z=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,W=0;const B=r.getParameter(r.VERSION);B.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(B)[1]),Y=W>=1):B.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),Y=W>=2);let V=null,st={};const L=r.getParameter(r.SCISSOR_BOX),lt=r.getParameter(r.VIEWPORT),Bt=new Ke().fromArray(L),qt=new Ke().fromArray(lt);function $(O,K,j,J){const ot=new Uint8Array(4),Tt=r.createTexture();r.bindTexture(O,Tt),r.texParameteri(O,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(O,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Yt=0;Yt<j;Yt++)O===r.TEXTURE_3D||O===r.TEXTURE_2D_ARRAY?r.texImage3D(K,0,r.RGBA,1,1,J,0,r.RGBA,r.UNSIGNED_BYTE,ot):r.texImage2D(K+Yt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ot);return Tt}const tt={};tt[r.TEXTURE_2D]=$(r.TEXTURE_2D,r.TEXTURE_2D,1),tt[r.TEXTURE_CUBE_MAP]=$(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),tt[r.TEXTURE_2D_ARRAY]=$(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),tt[r.TEXTURE_3D]=$(r.TEXTURE_3D,r.TEXTURE_3D,1,1),i.setClear(0,0,0,1),s.setClear(1),o.setClear(0),ut(r.DEPTH_TEST),s.setFunc(vl),Xt(!1),gt(ef),ut(r.CULL_FACE),Dt(cr);function ut(O){c[O]!==!0&&(r.enable(O),c[O]=!0)}function at(O){c[O]!==!1&&(r.disable(O),c[O]=!1)}function wt(O,K){return u[O]!==K?(r.bindFramebuffer(O,K),u[O]=K,O===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=K),O===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=K),!0):!1}function Rt(O,K){let j=h,J=!1;if(O){j=f.get(K),j===void 0&&(j=[],f.set(K,j));const ot=O.textures;if(j.length!==ot.length||j[0]!==r.COLOR_ATTACHMENT0){for(let Tt=0,Yt=ot.length;Tt<Yt;Tt++)j[Tt]=r.COLOR_ATTACHMENT0+Tt;j.length=ot.length,J=!0}}else j[0]!==r.BACK&&(j[0]=r.BACK,J=!0);J&&r.drawBuffers(j)}function Gt(O){return d!==O?(r.useProgram(O),d=O,!0):!1}const Jt={[Dr]:r.FUNC_ADD,[xg]:r.FUNC_SUBTRACT,[Sg]:r.FUNC_REVERSE_SUBTRACT};Jt[Mg]=r.MIN,Jt[yg]=r.MAX;const D={[Eg]:r.ZERO,[Tg]:r.ONE,[bg]:r.SRC_COLOR,[Zc]:r.SRC_ALPHA,[Lg]:r.SRC_ALPHA_SATURATE,[Rg]:r.DST_COLOR,[Ag]:r.DST_ALPHA,[wg]:r.ONE_MINUS_SRC_COLOR,[jc]:r.ONE_MINUS_SRC_ALPHA,[Pg]:r.ONE_MINUS_DST_COLOR,[Cg]:r.ONE_MINUS_DST_ALPHA,[Dg]:r.CONSTANT_COLOR,[Ig]:r.ONE_MINUS_CONSTANT_COLOR,[Ug]:r.CONSTANT_ALPHA,[Ng]:r.ONE_MINUS_CONSTANT_ALPHA};function Dt(O,K,j,J,ot,Tt,Yt,ge,ve,ne){if(O===cr){g===!0&&(at(r.BLEND),g=!1);return}if(g===!1&&(ut(r.BLEND),g=!0),O!==vg){if(O!==_||ne!==C){if((p!==Dr||x!==Dr)&&(r.blendEquation(r.FUNC_ADD),p=Dr,x=Dr),ne)switch(O){case ks:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case nf:r.blendFunc(r.ONE,r.ONE);break;case rf:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case sf:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case ks:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case nf:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case rf:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case sf:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}m=null,y=null,M=null,A=null,w.set(0,0,0),T=0,_=O,C=ne}return}ot=ot||K,Tt=Tt||j,Yt=Yt||J,(K!==p||ot!==x)&&(r.blendEquationSeparate(Jt[K],Jt[ot]),p=K,x=ot),(j!==m||J!==y||Tt!==M||Yt!==A)&&(r.blendFuncSeparate(D[j],D[J],D[Tt],D[Yt]),m=j,y=J,M=Tt,A=Yt),(ge.equals(w)===!1||ve!==T)&&(r.blendColor(ge.r,ge.g,ge.b,ve),w.copy(ge),T=ve),_=O,C=!1}function Ot(O,K){O.side===Ni?at(r.CULL_FACE):ut(r.CULL_FACE);let j=O.side===wn;K&&(j=!j),Xt(j),O.blending===ks&&O.transparent===!1?Dt(cr):Dt(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),s.setFunc(O.depthFunc),s.setTest(O.depthTest),s.setMask(O.depthWrite),i.setMask(O.colorWrite);const J=O.stencilWrite;o.setTest(J),J&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),At(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?ut(r.SAMPLE_ALPHA_TO_COVERAGE):at(r.SAMPLE_ALPHA_TO_COVERAGE)}function Xt(O){S!==O&&(O?r.frontFace(r.CW):r.frontFace(r.CCW),S=O)}function gt(O){O!==mg?(ut(r.CULL_FACE),O!==v&&(O===ef?r.cullFace(r.BACK):O===_g?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):at(r.CULL_FACE),v=O}function G(O){O!==P&&(Y&&r.lineWidth(O),P=O)}function At(O,K,j){O?(ut(r.POLYGON_OFFSET_FILL),(U!==K||I!==j)&&(r.polygonOffset(K,j),U=K,I=j)):at(r.POLYGON_OFFSET_FILL)}function Ft(O){O?ut(r.SCISSOR_TEST):at(r.SCISSOR_TEST)}function R(O){O===void 0&&(O=r.TEXTURE0+z-1),V!==O&&(r.activeTexture(O),V=O)}function E(O,K,j){j===void 0&&(V===null?j=r.TEXTURE0+z-1:j=V);let J=st[j];J===void 0&&(J={type:void 0,texture:void 0},st[j]=J),(J.type!==O||J.texture!==K)&&(V!==j&&(r.activeTexture(j),V=j),r.bindTexture(O,K||tt[O]),J.type=O,J.texture=K)}function X(){const O=st[V];O!==void 0&&O.type!==void 0&&(r.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function Q(){try{r.compressedTexImage2D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function nt(){try{r.compressedTexImage3D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Z(){try{r.texSubImage2D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Et(){try{r.texSubImage3D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function it(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function dt(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ut(){try{r.texStorage2D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function rt(){try{r.texStorage3D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function _t(){try{r.texImage2D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Pt(){try{r.texImage3D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function kt(O){Bt.equals(O)===!1&&(r.scissor(O.x,O.y,O.z,O.w),Bt.copy(O))}function mt(O){qt.equals(O)===!1&&(r.viewport(O.x,O.y,O.z,O.w),qt.copy(O))}function zt(O,K){let j=l.get(K);j===void 0&&(j=new WeakMap,l.set(K,j));let J=j.get(O);J===void 0&&(J=r.getUniformBlockIndex(K,O.name),j.set(O,J))}function Wt(O,K){const J=l.get(K).get(O);a.get(K)!==J&&(r.uniformBlockBinding(K,J,O.__bindingPointIndex),a.set(K,J))}function le(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),c={},V=null,st={},u={},f=new WeakMap,h=[],d=null,g=!1,_=null,p=null,m=null,y=null,x=null,M=null,A=null,w=new _e(0,0,0),T=0,C=!1,S=null,v=null,P=null,U=null,I=null,Bt.set(0,0,r.canvas.width,r.canvas.height),qt.set(0,0,r.canvas.width,r.canvas.height),i.reset(),s.reset(),o.reset()}return{buffers:{color:i,depth:s,stencil:o},enable:ut,disable:at,bindFramebuffer:wt,drawBuffers:Rt,useProgram:Gt,setBlending:Dt,setMaterial:Ot,setFlipSided:Xt,setCullFace:gt,setLineWidth:G,setPolygonOffset:At,setScissorTest:Ft,activeTexture:R,bindTexture:E,unbindTexture:X,compressedTexImage2D:Q,compressedTexImage3D:nt,texImage2D:_t,texImage3D:Pt,updateUBOMapping:zt,uniformBlockBinding:Wt,texStorage2D:Ut,texStorage3D:rt,texSubImage2D:Z,texSubImage3D:Et,compressedTexSubImage2D:it,compressedTexSubImage3D:dt,scissor:kt,viewport:mt,reset:le}}function jf(r,t,e,n){const i=uy(n);switch(e){case Bp:return r*t;case zp:return r*t;case Hp:return r*t*2;case ch:return r*t/i.components*i.byteLength;case uh:return r*t/i.components*i.byteLength;case Vp:return r*t*2/i.components*i.byteLength;case hh:return r*t*2/i.components*i.byteLength;case kp:return r*t*3/i.components*i.byteLength;case li:return r*t*4/i.components*i.byteLength;case fh:return r*t*4/i.components*i.byteLength;case Qa:case tl:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case el:case nl:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case iu:case su:return Math.max(r,16)*Math.max(t,8)/4;case nu:case ru:return Math.max(r,8)*Math.max(t,8)/2;case ou:case au:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case lu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case cu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case uu:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case hu:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case fu:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case du:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case pu:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case mu:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case _u:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case gu:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case vu:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case xu:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Su:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Mu:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case yu:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case il:case Eu:case Tu:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Gp:case bu:return Math.ceil(r/4)*Math.ceil(t/4)*8;case wu:case Au:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function uy(r){switch(r){case Hi:case Np:return{byteLength:1,components:1};case Zo:case Op:case Qo:return{byteLength:2,components:1};case ah:case lh:return{byteLength:2,components:4};case jr:case oh:case Mi:return{byteLength:4,components:1};case Fp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function hy(r,t,e,n,i,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ce,u=new WeakMap;let f;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,E){return d?new OffscreenCanvas(R,E):El("canvas")}function _(R,E,X){let Q=1;const nt=Ft(R);if((nt.width>X||nt.height>X)&&(Q=X/Math.max(nt.width,nt.height)),Q<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const Z=Math.floor(Q*nt.width),Et=Math.floor(Q*nt.height);f===void 0&&(f=g(Z,Et));const it=E?g(Z,Et):f;return it.width=Z,it.height=Et,it.getContext("2d").drawImage(R,0,0,Z,Et),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+nt.width+"x"+nt.height+") to ("+Z+"x"+Et+")."),it}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+nt.width+"x"+nt.height+")."),R;return R}function p(R){return R.generateMipmaps&&R.minFilter!==Mn&&R.minFilter!==ai}function m(R){r.generateMipmap(R)}function y(R,E,X,Q,nt=!1){if(R!==null){if(r[R]!==void 0)return r[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Z=E;if(E===r.RED&&(X===r.FLOAT&&(Z=r.R32F),X===r.HALF_FLOAT&&(Z=r.R16F),X===r.UNSIGNED_BYTE&&(Z=r.R8)),E===r.RED_INTEGER&&(X===r.UNSIGNED_BYTE&&(Z=r.R8UI),X===r.UNSIGNED_SHORT&&(Z=r.R16UI),X===r.UNSIGNED_INT&&(Z=r.R32UI),X===r.BYTE&&(Z=r.R8I),X===r.SHORT&&(Z=r.R16I),X===r.INT&&(Z=r.R32I)),E===r.RG&&(X===r.FLOAT&&(Z=r.RG32F),X===r.HALF_FLOAT&&(Z=r.RG16F),X===r.UNSIGNED_BYTE&&(Z=r.RG8)),E===r.RG_INTEGER&&(X===r.UNSIGNED_BYTE&&(Z=r.RG8UI),X===r.UNSIGNED_SHORT&&(Z=r.RG16UI),X===r.UNSIGNED_INT&&(Z=r.RG32UI),X===r.BYTE&&(Z=r.RG8I),X===r.SHORT&&(Z=r.RG16I),X===r.INT&&(Z=r.RG32I)),E===r.RGB&&X===r.UNSIGNED_INT_5_9_9_9_REV&&(Z=r.RGB9_E5),E===r.RGBA){const Et=nt?xl:pe.getTransfer(Q);X===r.FLOAT&&(Z=r.RGBA32F),X===r.HALF_FLOAT&&(Z=r.RGBA16F),X===r.UNSIGNED_BYTE&&(Z=Et===be?r.SRGB8_ALPHA8:r.RGBA8),X===r.UNSIGNED_SHORT_4_4_4_4&&(Z=r.RGBA4),X===r.UNSIGNED_SHORT_5_5_5_1&&(Z=r.RGB5_A1)}return(Z===r.R16F||Z===r.R32F||Z===r.RG16F||Z===r.RG32F||Z===r.RGBA16F||Z===r.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function x(R,E){let X;return R?E===null||E===jr||E===Zs?X=r.DEPTH24_STENCIL8:E===Mi?X=r.DEPTH32F_STENCIL8:E===Zo&&(X=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===jr||E===Zs?X=r.DEPTH_COMPONENT24:E===Mi?X=r.DEPTH_COMPONENT32F:E===Zo&&(X=r.DEPTH_COMPONENT16),X}function M(R,E){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==Mn&&R.minFilter!==ai?Math.log2(Math.max(E.width,E.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?E.mipmaps.length:1}function A(R){const E=R.target;E.removeEventListener("dispose",A),T(E),E.isVideoTexture&&u.delete(E)}function w(R){const E=R.target;E.removeEventListener("dispose",w),S(E)}function T(R){const E=n.get(R);if(E.__webglInit===void 0)return;const X=R.source,Q=h.get(X);if(Q){const nt=Q[E.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&C(R),Object.keys(Q).length===0&&h.delete(X)}n.remove(R)}function C(R){const E=n.get(R);r.deleteTexture(E.__webglTexture);const X=R.source,Q=h.get(X);delete Q[E.__cacheKey],o.memory.textures--}function S(R){const E=n.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(E.__webglFramebuffer[Q]))for(let nt=0;nt<E.__webglFramebuffer[Q].length;nt++)r.deleteFramebuffer(E.__webglFramebuffer[Q][nt]);else r.deleteFramebuffer(E.__webglFramebuffer[Q]);E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer[Q])}else{if(Array.isArray(E.__webglFramebuffer))for(let Q=0;Q<E.__webglFramebuffer.length;Q++)r.deleteFramebuffer(E.__webglFramebuffer[Q]);else r.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&r.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let Q=0;Q<E.__webglColorRenderbuffer.length;Q++)E.__webglColorRenderbuffer[Q]&&r.deleteRenderbuffer(E.__webglColorRenderbuffer[Q]);E.__webglDepthRenderbuffer&&r.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const X=R.textures;for(let Q=0,nt=X.length;Q<nt;Q++){const Z=n.get(X[Q]);Z.__webglTexture&&(r.deleteTexture(Z.__webglTexture),o.memory.textures--),n.remove(X[Q])}n.remove(R)}let v=0;function P(){v=0}function U(){const R=v;return R>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),v+=1,R}function I(R){const E=[];return E.push(R.wrapS),E.push(R.wrapT),E.push(R.wrapR||0),E.push(R.magFilter),E.push(R.minFilter),E.push(R.anisotropy),E.push(R.internalFormat),E.push(R.format),E.push(R.type),E.push(R.generateMipmaps),E.push(R.premultiplyAlpha),E.push(R.flipY),E.push(R.unpackAlignment),E.push(R.colorSpace),E.join()}function z(R,E){const X=n.get(R);if(R.isVideoTexture&&G(R),R.isRenderTargetTexture===!1&&R.version>0&&X.__version!==R.version){const Q=R.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{qt(X,R,E);return}}e.bindTexture(r.TEXTURE_2D,X.__webglTexture,r.TEXTURE0+E)}function Y(R,E){const X=n.get(R);if(R.version>0&&X.__version!==R.version){qt(X,R,E);return}e.bindTexture(r.TEXTURE_2D_ARRAY,X.__webglTexture,r.TEXTURE0+E)}function W(R,E){const X=n.get(R);if(R.version>0&&X.__version!==R.version){qt(X,R,E);return}e.bindTexture(r.TEXTURE_3D,X.__webglTexture,r.TEXTURE0+E)}function B(R,E){const X=n.get(R);if(R.version>0&&X.__version!==R.version){$(X,R,E);return}e.bindTexture(r.TEXTURE_CUBE_MAP,X.__webglTexture,r.TEXTURE0+E)}const V={[tu]:r.REPEAT,[Br]:r.CLAMP_TO_EDGE,[eu]:r.MIRRORED_REPEAT},st={[Mn]:r.NEAREST,[Jg]:r.NEAREST_MIPMAP_NEAREST,[va]:r.NEAREST_MIPMAP_LINEAR,[ai]:r.LINEAR,[Jl]:r.LINEAR_MIPMAP_NEAREST,[kr]:r.LINEAR_MIPMAP_LINEAR},L={[i0]:r.NEVER,[c0]:r.ALWAYS,[r0]:r.LESS,[Wp]:r.LEQUAL,[s0]:r.EQUAL,[l0]:r.GEQUAL,[o0]:r.GREATER,[a0]:r.NOTEQUAL};function lt(R,E){if(E.type===Mi&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===ai||E.magFilter===Jl||E.magFilter===va||E.magFilter===kr||E.minFilter===ai||E.minFilter===Jl||E.minFilter===va||E.minFilter===kr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(R,r.TEXTURE_WRAP_S,V[E.wrapS]),r.texParameteri(R,r.TEXTURE_WRAP_T,V[E.wrapT]),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,V[E.wrapR]),r.texParameteri(R,r.TEXTURE_MAG_FILTER,st[E.magFilter]),r.texParameteri(R,r.TEXTURE_MIN_FILTER,st[E.minFilter]),E.compareFunction&&(r.texParameteri(R,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(R,r.TEXTURE_COMPARE_FUNC,L[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Mn||E.minFilter!==va&&E.minFilter!==kr||E.type===Mi&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const X=t.get("EXT_texture_filter_anisotropic");r.texParameterf(R,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function Bt(R,E){let X=!1;R.__webglInit===void 0&&(R.__webglInit=!0,E.addEventListener("dispose",A));const Q=E.source;let nt=h.get(Q);nt===void 0&&(nt={},h.set(Q,nt));const Z=I(E);if(Z!==R.__cacheKey){nt[Z]===void 0&&(nt[Z]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,X=!0),nt[Z].usedTimes++;const Et=nt[R.__cacheKey];Et!==void 0&&(nt[R.__cacheKey].usedTimes--,Et.usedTimes===0&&C(E)),R.__cacheKey=Z,R.__webglTexture=nt[Z].texture}return X}function qt(R,E,X){let Q=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(Q=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(Q=r.TEXTURE_3D);const nt=Bt(R,E),Z=E.source;e.bindTexture(Q,R.__webglTexture,r.TEXTURE0+X);const Et=n.get(Z);if(Z.version!==Et.__version||nt===!0){e.activeTexture(r.TEXTURE0+X);const it=pe.getPrimaries(pe.workingColorSpace),dt=E.colorSpace===Qi?null:pe.getPrimaries(E.colorSpace),Ut=E.colorSpace===Qi||it===dt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ut);let rt=_(E.image,!1,i.maxTextureSize);rt=At(E,rt);const _t=s.convert(E.format,E.colorSpace),Pt=s.convert(E.type);let kt=y(E.internalFormat,_t,Pt,E.colorSpace,E.isVideoTexture);lt(Q,E);let mt;const zt=E.mipmaps,Wt=E.isVideoTexture!==!0,le=Et.__version===void 0||nt===!0,O=Z.dataReady,K=M(E,rt);if(E.isDepthTexture)kt=x(E.format===js,E.type),le&&(Wt?e.texStorage2D(r.TEXTURE_2D,1,kt,rt.width,rt.height):e.texImage2D(r.TEXTURE_2D,0,kt,rt.width,rt.height,0,_t,Pt,null));else if(E.isDataTexture)if(zt.length>0){Wt&&le&&e.texStorage2D(r.TEXTURE_2D,K,kt,zt[0].width,zt[0].height);for(let j=0,J=zt.length;j<J;j++)mt=zt[j],Wt?O&&e.texSubImage2D(r.TEXTURE_2D,j,0,0,mt.width,mt.height,_t,Pt,mt.data):e.texImage2D(r.TEXTURE_2D,j,kt,mt.width,mt.height,0,_t,Pt,mt.data);E.generateMipmaps=!1}else Wt?(le&&e.texStorage2D(r.TEXTURE_2D,K,kt,rt.width,rt.height),O&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,rt.width,rt.height,_t,Pt,rt.data)):e.texImage2D(r.TEXTURE_2D,0,kt,rt.width,rt.height,0,_t,Pt,rt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Wt&&le&&e.texStorage3D(r.TEXTURE_2D_ARRAY,K,kt,zt[0].width,zt[0].height,rt.depth);for(let j=0,J=zt.length;j<J;j++)if(mt=zt[j],E.format!==li)if(_t!==null)if(Wt){if(O)if(E.layerUpdates.size>0){const ot=jf(mt.width,mt.height,E.format,E.type);for(const Tt of E.layerUpdates){const Yt=mt.data.subarray(Tt*ot/mt.data.BYTES_PER_ELEMENT,(Tt+1)*ot/mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,j,0,0,Tt,mt.width,mt.height,1,_t,Yt,0,0)}E.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,j,0,0,0,mt.width,mt.height,rt.depth,_t,mt.data,0,0)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,j,kt,mt.width,mt.height,rt.depth,0,mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Wt?O&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,j,0,0,0,mt.width,mt.height,rt.depth,_t,Pt,mt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,j,kt,mt.width,mt.height,rt.depth,0,_t,Pt,mt.data)}else{Wt&&le&&e.texStorage2D(r.TEXTURE_2D,K,kt,zt[0].width,zt[0].height);for(let j=0,J=zt.length;j<J;j++)mt=zt[j],E.format!==li?_t!==null?Wt?O&&e.compressedTexSubImage2D(r.TEXTURE_2D,j,0,0,mt.width,mt.height,_t,mt.data):e.compressedTexImage2D(r.TEXTURE_2D,j,kt,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Wt?O&&e.texSubImage2D(r.TEXTURE_2D,j,0,0,mt.width,mt.height,_t,Pt,mt.data):e.texImage2D(r.TEXTURE_2D,j,kt,mt.width,mt.height,0,_t,Pt,mt.data)}else if(E.isDataArrayTexture)if(Wt){if(le&&e.texStorage3D(r.TEXTURE_2D_ARRAY,K,kt,rt.width,rt.height,rt.depth),O)if(E.layerUpdates.size>0){const j=jf(rt.width,rt.height,E.format,E.type);for(const J of E.layerUpdates){const ot=rt.data.subarray(J*j/rt.data.BYTES_PER_ELEMENT,(J+1)*j/rt.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,J,rt.width,rt.height,1,_t,Pt,ot)}E.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,_t,Pt,rt.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,kt,rt.width,rt.height,rt.depth,0,_t,Pt,rt.data);else if(E.isData3DTexture)Wt?(le&&e.texStorage3D(r.TEXTURE_3D,K,kt,rt.width,rt.height,rt.depth),O&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,_t,Pt,rt.data)):e.texImage3D(r.TEXTURE_3D,0,kt,rt.width,rt.height,rt.depth,0,_t,Pt,rt.data);else if(E.isFramebufferTexture){if(le)if(Wt)e.texStorage2D(r.TEXTURE_2D,K,kt,rt.width,rt.height);else{let j=rt.width,J=rt.height;for(let ot=0;ot<K;ot++)e.texImage2D(r.TEXTURE_2D,ot,kt,j,J,0,_t,Pt,null),j>>=1,J>>=1}}else if(zt.length>0){if(Wt&&le){const j=Ft(zt[0]);e.texStorage2D(r.TEXTURE_2D,K,kt,j.width,j.height)}for(let j=0,J=zt.length;j<J;j++)mt=zt[j],Wt?O&&e.texSubImage2D(r.TEXTURE_2D,j,0,0,_t,Pt,mt):e.texImage2D(r.TEXTURE_2D,j,kt,_t,Pt,mt);E.generateMipmaps=!1}else if(Wt){if(le){const j=Ft(rt);e.texStorage2D(r.TEXTURE_2D,K,kt,j.width,j.height)}O&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,_t,Pt,rt)}else e.texImage2D(r.TEXTURE_2D,0,kt,_t,Pt,rt);p(E)&&m(Q),Et.__version=Z.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function $(R,E,X){if(E.image.length!==6)return;const Q=Bt(R,E),nt=E.source;e.bindTexture(r.TEXTURE_CUBE_MAP,R.__webglTexture,r.TEXTURE0+X);const Z=n.get(nt);if(nt.version!==Z.__version||Q===!0){e.activeTexture(r.TEXTURE0+X);const Et=pe.getPrimaries(pe.workingColorSpace),it=E.colorSpace===Qi?null:pe.getPrimaries(E.colorSpace),dt=E.colorSpace===Qi||Et===it?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt);const Ut=E.isCompressedTexture||E.image[0].isCompressedTexture,rt=E.image[0]&&E.image[0].isDataTexture,_t=[];for(let J=0;J<6;J++)!Ut&&!rt?_t[J]=_(E.image[J],!0,i.maxCubemapSize):_t[J]=rt?E.image[J].image:E.image[J],_t[J]=At(E,_t[J]);const Pt=_t[0],kt=s.convert(E.format,E.colorSpace),mt=s.convert(E.type),zt=y(E.internalFormat,kt,mt,E.colorSpace),Wt=E.isVideoTexture!==!0,le=Z.__version===void 0||Q===!0,O=nt.dataReady;let K=M(E,Pt);lt(r.TEXTURE_CUBE_MAP,E);let j;if(Ut){Wt&&le&&e.texStorage2D(r.TEXTURE_CUBE_MAP,K,zt,Pt.width,Pt.height);for(let J=0;J<6;J++){j=_t[J].mipmaps;for(let ot=0;ot<j.length;ot++){const Tt=j[ot];E.format!==li?kt!==null?Wt?O&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,ot,0,0,Tt.width,Tt.height,kt,Tt.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,ot,zt,Tt.width,Tt.height,0,Tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Wt?O&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,ot,0,0,Tt.width,Tt.height,kt,mt,Tt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,ot,zt,Tt.width,Tt.height,0,kt,mt,Tt.data)}}}else{if(j=E.mipmaps,Wt&&le){j.length>0&&K++;const J=Ft(_t[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,K,zt,J.width,J.height)}for(let J=0;J<6;J++)if(rt){Wt?O&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,_t[J].width,_t[J].height,kt,mt,_t[J].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,zt,_t[J].width,_t[J].height,0,kt,mt,_t[J].data);for(let ot=0;ot<j.length;ot++){const Yt=j[ot].image[J].image;Wt?O&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,ot+1,0,0,Yt.width,Yt.height,kt,mt,Yt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,ot+1,zt,Yt.width,Yt.height,0,kt,mt,Yt.data)}}else{Wt?O&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,kt,mt,_t[J]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,zt,kt,mt,_t[J]);for(let ot=0;ot<j.length;ot++){const Tt=j[ot];Wt?O&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,ot+1,0,0,kt,mt,Tt.image[J]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,ot+1,zt,kt,mt,Tt.image[J])}}}p(E)&&m(r.TEXTURE_CUBE_MAP),Z.__version=nt.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function tt(R,E,X,Q,nt,Z){const Et=s.convert(X.format,X.colorSpace),it=s.convert(X.type),dt=y(X.internalFormat,Et,it,X.colorSpace);if(!n.get(E).__hasExternalTextures){const rt=Math.max(1,E.width>>Z),_t=Math.max(1,E.height>>Z);nt===r.TEXTURE_3D||nt===r.TEXTURE_2D_ARRAY?e.texImage3D(nt,Z,dt,rt,_t,E.depth,0,Et,it,null):e.texImage2D(nt,Z,dt,rt,_t,0,Et,it,null)}e.bindFramebuffer(r.FRAMEBUFFER,R),gt(E)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Q,nt,n.get(X).__webglTexture,0,Xt(E)):(nt===r.TEXTURE_2D||nt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Q,nt,n.get(X).__webglTexture,Z),e.bindFramebuffer(r.FRAMEBUFFER,null)}function ut(R,E,X){if(r.bindRenderbuffer(r.RENDERBUFFER,R),E.depthBuffer){const Q=E.depthTexture,nt=Q&&Q.isDepthTexture?Q.type:null,Z=x(E.stencilBuffer,nt),Et=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,it=Xt(E);gt(E)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,it,Z,E.width,E.height):X?r.renderbufferStorageMultisample(r.RENDERBUFFER,it,Z,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,Z,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Et,r.RENDERBUFFER,R)}else{const Q=E.textures;for(let nt=0;nt<Q.length;nt++){const Z=Q[nt],Et=s.convert(Z.format,Z.colorSpace),it=s.convert(Z.type),dt=y(Z.internalFormat,Et,it,Z.colorSpace),Ut=Xt(E);X&&gt(E)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ut,dt,E.width,E.height):gt(E)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ut,dt,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,dt,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function at(R,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,R),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),z(E.depthTexture,0);const Q=n.get(E.depthTexture).__webglTexture,nt=Xt(E);if(E.depthTexture.format===zs)gt(E)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Q,0,nt):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Q,0);else if(E.depthTexture.format===js)gt(E)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Q,0,nt):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function wt(R){const E=n.get(R),X=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!E.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");at(E.__webglFramebuffer,R)}else if(X){E.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)e.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[Q]),E.__webglDepthbuffer[Q]=r.createRenderbuffer(),ut(E.__webglDepthbuffer[Q],R,!1)}else e.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=r.createRenderbuffer(),ut(E.__webglDepthbuffer,R,!1);e.bindFramebuffer(r.FRAMEBUFFER,null)}function Rt(R,E,X){const Q=n.get(R);E!==void 0&&tt(Q.__webglFramebuffer,R,R.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),X!==void 0&&wt(R)}function Gt(R){const E=R.texture,X=n.get(R),Q=n.get(E);R.addEventListener("dispose",w);const nt=R.textures,Z=R.isWebGLCubeRenderTarget===!0,Et=nt.length>1;if(Et||(Q.__webglTexture===void 0&&(Q.__webglTexture=r.createTexture()),Q.__version=E.version,o.memory.textures++),Z){X.__webglFramebuffer=[];for(let it=0;it<6;it++)if(E.mipmaps&&E.mipmaps.length>0){X.__webglFramebuffer[it]=[];for(let dt=0;dt<E.mipmaps.length;dt++)X.__webglFramebuffer[it][dt]=r.createFramebuffer()}else X.__webglFramebuffer[it]=r.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){X.__webglFramebuffer=[];for(let it=0;it<E.mipmaps.length;it++)X.__webglFramebuffer[it]=r.createFramebuffer()}else X.__webglFramebuffer=r.createFramebuffer();if(Et)for(let it=0,dt=nt.length;it<dt;it++){const Ut=n.get(nt[it]);Ut.__webglTexture===void 0&&(Ut.__webglTexture=r.createTexture(),o.memory.textures++)}if(R.samples>0&&gt(R)===!1){X.__webglMultisampledFramebuffer=r.createFramebuffer(),X.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let it=0;it<nt.length;it++){const dt=nt[it];X.__webglColorRenderbuffer[it]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,X.__webglColorRenderbuffer[it]);const Ut=s.convert(dt.format,dt.colorSpace),rt=s.convert(dt.type),_t=y(dt.internalFormat,Ut,rt,dt.colorSpace,R.isXRRenderTarget===!0),Pt=Xt(R);r.renderbufferStorageMultisample(r.RENDERBUFFER,Pt,_t,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+it,r.RENDERBUFFER,X.__webglColorRenderbuffer[it])}r.bindRenderbuffer(r.RENDERBUFFER,null),R.depthBuffer&&(X.__webglDepthRenderbuffer=r.createRenderbuffer(),ut(X.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Z){e.bindTexture(r.TEXTURE_CUBE_MAP,Q.__webglTexture),lt(r.TEXTURE_CUBE_MAP,E);for(let it=0;it<6;it++)if(E.mipmaps&&E.mipmaps.length>0)for(let dt=0;dt<E.mipmaps.length;dt++)tt(X.__webglFramebuffer[it][dt],R,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+it,dt);else tt(X.__webglFramebuffer[it],R,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+it,0);p(E)&&m(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Et){for(let it=0,dt=nt.length;it<dt;it++){const Ut=nt[it],rt=n.get(Ut);e.bindTexture(r.TEXTURE_2D,rt.__webglTexture),lt(r.TEXTURE_2D,Ut),tt(X.__webglFramebuffer,R,Ut,r.COLOR_ATTACHMENT0+it,r.TEXTURE_2D,0),p(Ut)&&m(r.TEXTURE_2D)}e.unbindTexture()}else{let it=r.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(it=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(it,Q.__webglTexture),lt(it,E),E.mipmaps&&E.mipmaps.length>0)for(let dt=0;dt<E.mipmaps.length;dt++)tt(X.__webglFramebuffer[dt],R,E,r.COLOR_ATTACHMENT0,it,dt);else tt(X.__webglFramebuffer,R,E,r.COLOR_ATTACHMENT0,it,0);p(E)&&m(it),e.unbindTexture()}R.depthBuffer&&wt(R)}function Jt(R){const E=R.textures;for(let X=0,Q=E.length;X<Q;X++){const nt=E[X];if(p(nt)){const Z=R.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,Et=n.get(nt).__webglTexture;e.bindTexture(Z,Et),m(Z),e.unbindTexture()}}}const D=[],Dt=[];function Ot(R){if(R.samples>0){if(gt(R)===!1){const E=R.textures,X=R.width,Q=R.height;let nt=r.COLOR_BUFFER_BIT;const Z=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Et=n.get(R),it=E.length>1;if(it)for(let dt=0;dt<E.length;dt++)e.bindFramebuffer(r.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+dt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,Et.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+dt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,Et.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let dt=0;dt<E.length;dt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(nt|=r.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(nt|=r.STENCIL_BUFFER_BIT)),it){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Et.__webglColorRenderbuffer[dt]);const Ut=n.get(E[dt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ut,0)}r.blitFramebuffer(0,0,X,Q,0,0,X,Q,nt,r.NEAREST),l===!0&&(D.length=0,Dt.length=0,D.push(r.COLOR_ATTACHMENT0+dt),R.depthBuffer&&R.resolveDepthBuffer===!1&&(D.push(Z),Dt.push(Z),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Dt)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,D))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),it)for(let dt=0;dt<E.length;dt++){e.bindFramebuffer(r.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+dt,r.RENDERBUFFER,Et.__webglColorRenderbuffer[dt]);const Ut=n.get(E[dt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,Et.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+dt,r.TEXTURE_2D,Ut,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Et.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const E=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[E])}}}function Xt(R){return Math.min(i.maxSamples,R.samples)}function gt(R){const E=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function G(R){const E=o.render.frame;u.get(R)!==E&&(u.set(R,E),R.update())}function At(R,E){const X=R.colorSpace,Q=R.format,nt=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||X!==gr&&X!==Qi&&(pe.getTransfer(X)===be?(Q!==li||nt!==Hi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),E}function Ft(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=P,this.setTexture2D=z,this.setTexture2DArray=Y,this.setTexture3D=W,this.setTextureCube=B,this.rebindTextures=Rt,this.setupRenderTarget=Gt,this.updateRenderTargetMipmap=Jt,this.updateMultisampleRenderTarget=Ot,this.setupDepthRenderbuffer=wt,this.setupFrameBufferTexture=tt,this.useMultisampledRTT=gt}function fy(r,t){function e(n,i=Qi){let s;const o=pe.getTransfer(i);if(n===Hi)return r.UNSIGNED_BYTE;if(n===ah)return r.UNSIGNED_SHORT_4_4_4_4;if(n===lh)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Fp)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Np)return r.BYTE;if(n===Op)return r.SHORT;if(n===Zo)return r.UNSIGNED_SHORT;if(n===oh)return r.INT;if(n===jr)return r.UNSIGNED_INT;if(n===Mi)return r.FLOAT;if(n===Qo)return r.HALF_FLOAT;if(n===Bp)return r.ALPHA;if(n===kp)return r.RGB;if(n===li)return r.RGBA;if(n===zp)return r.LUMINANCE;if(n===Hp)return r.LUMINANCE_ALPHA;if(n===zs)return r.DEPTH_COMPONENT;if(n===js)return r.DEPTH_STENCIL;if(n===ch)return r.RED;if(n===uh)return r.RED_INTEGER;if(n===Vp)return r.RG;if(n===hh)return r.RG_INTEGER;if(n===fh)return r.RGBA_INTEGER;if(n===Qa||n===tl||n===el||n===nl)if(o===be)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Qa)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===tl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===el)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===nl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Qa)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===tl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===el)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===nl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===nu||n===iu||n===ru||n===su)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===nu)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===iu)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ru)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===su)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ou||n===au||n===lu)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===ou||n===au)return o===be?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===lu)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===cu||n===uu||n===hu||n===fu||n===du||n===pu||n===mu||n===_u||n===gu||n===vu||n===xu||n===Su||n===Mu||n===yu)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===cu)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===uu)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===hu)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===fu)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===du)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===pu)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===mu)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===_u)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===gu)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===vu)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===xu)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Su)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Mu)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===yu)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===il||n===Eu||n===Tu)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===il)return o===be?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Eu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Tu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Gp||n===bu||n===wu||n===Au)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===il)return s.COMPRESSED_RED_RGTC1_EXT;if(n===bu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===wu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Au)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Zs?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}class dy extends oi{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class za extends An{constructor(){super(),this.isGroup=!0,this.type="Group"}}const py={type:"move"};class bc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new za,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new za,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new za,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const p=e.getJointPose(_,n),m=this._getHandJoint(c,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,g=.005;c.inputState.pinching&&h>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(py)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new za;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const my=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_y=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class gy{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new _n,s=t.properties.get(i);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Ti({vertexShader:my,fragmentShader:_y,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Qn(new Qs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class vy extends ro{constructor(t,e){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,g=null;const _=new gy,p=e.getContextAttributes();let m=null,y=null;const x=[],M=[],A=new ce;let w=null;const T=new oi;T.layers.enable(1),T.viewport=new Ke;const C=new oi;C.layers.enable(2),C.viewport=new Ke;const S=[T,C],v=new dy;v.layers.enable(1),v.layers.enable(2);let P=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let tt=x[$];return tt===void 0&&(tt=new bc,x[$]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function($){let tt=x[$];return tt===void 0&&(tt=new bc,x[$]=tt),tt.getGripSpace()},this.getHand=function($){let tt=x[$];return tt===void 0&&(tt=new bc,x[$]=tt),tt.getHandSpace()};function I($){const tt=M.indexOf($.inputSource);if(tt===-1)return;const ut=x[tt];ut!==void 0&&(ut.update($.inputSource,$.frame,c||o),ut.dispatchEvent({type:$.type,data:$.inputSource}))}function z(){i.removeEventListener("select",I),i.removeEventListener("selectstart",I),i.removeEventListener("selectend",I),i.removeEventListener("squeeze",I),i.removeEventListener("squeezestart",I),i.removeEventListener("squeezeend",I),i.removeEventListener("end",z),i.removeEventListener("inputsourceschange",Y);for(let $=0;$<x.length;$++){const tt=M[$];tt!==null&&(M[$]=null,x[$].disconnect(tt))}P=null,U=null,_.reset(),t.setRenderTarget(m),d=null,h=null,f=null,i=null,y=null,qt.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function($){if(i=$,i!==null){if(m=t.getRenderTarget(),i.addEventListener("select",I),i.addEventListener("selectstart",I),i.addEventListener("selectend",I),i.addEventListener("squeeze",I),i.addEventListener("squeezestart",I),i.addEventListener("squeezeend",I),i.addEventListener("end",z),i.addEventListener("inputsourceschange",Y),p.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(A),i.renderState.layers===void 0){const tt={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,e,tt),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new Jr(d.framebufferWidth,d.framebufferHeight,{format:li,type:Hi,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let tt=null,ut=null,at=null;p.depth&&(at=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,tt=p.stencil?js:zs,ut=p.stencil?Zs:jr);const wt={colorFormat:e.RGBA8,depthFormat:at,scaleFactor:s};f=new XRWebGLBinding(i,e),h=f.createProjectionLayer(wt),i.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),y=new Jr(h.textureWidth,h.textureHeight,{format:li,type:Hi,depthTexture:new om(h.textureWidth,h.textureHeight,ut,void 0,void 0,void 0,void 0,void 0,void 0,tt),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),qt.setContext(i),qt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Y($){for(let tt=0;tt<$.removed.length;tt++){const ut=$.removed[tt],at=M.indexOf(ut);at>=0&&(M[at]=null,x[at].disconnect(ut))}for(let tt=0;tt<$.added.length;tt++){const ut=$.added[tt];let at=M.indexOf(ut);if(at===-1){for(let Rt=0;Rt<x.length;Rt++)if(Rt>=M.length){M.push(ut),at=Rt;break}else if(M[Rt]===null){M[Rt]=ut,at=Rt;break}if(at===-1)break}const wt=x[at];wt&&wt.connect(ut)}}const W=new q,B=new q;function V($,tt,ut){W.setFromMatrixPosition(tt.matrixWorld),B.setFromMatrixPosition(ut.matrixWorld);const at=W.distanceTo(B),wt=tt.projectionMatrix.elements,Rt=ut.projectionMatrix.elements,Gt=wt[14]/(wt[10]-1),Jt=wt[14]/(wt[10]+1),D=(wt[9]+1)/wt[5],Dt=(wt[9]-1)/wt[5],Ot=(wt[8]-1)/wt[0],Xt=(Rt[8]+1)/Rt[0],gt=Gt*Ot,G=Gt*Xt,At=at/(-Ot+Xt),Ft=At*-Ot;tt.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Ft),$.translateZ(At),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert();const R=Gt+At,E=Jt+At,X=gt-Ft,Q=G+(at-Ft),nt=D*Jt/E*R,Z=Dt*Jt/E*R;$.projectionMatrix.makePerspective(X,Q,nt,Z,R,E),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}function st($,tt){tt===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(tt.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(i===null)return;_.texture!==null&&($.near=_.depthNear,$.far=_.depthFar),v.near=C.near=T.near=$.near,v.far=C.far=T.far=$.far,(P!==v.near||U!==v.far)&&(i.updateRenderState({depthNear:v.near,depthFar:v.far}),P=v.near,U=v.far,T.near=P,T.far=U,C.near=P,C.far=U,T.updateProjectionMatrix(),C.updateProjectionMatrix(),$.updateProjectionMatrix());const tt=$.parent,ut=v.cameras;st(v,tt);for(let at=0;at<ut.length;at++)st(ut[at],tt);ut.length===2?V(v,T,C):v.projectionMatrix.copy(T.projectionMatrix),L($,v,tt)};function L($,tt,ut){ut===null?$.matrix.copy(tt.matrixWorld):($.matrix.copy(ut.matrixWorld),$.matrix.invert(),$.matrix.multiply(tt.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(tt.projectionMatrix),$.projectionMatrixInverse.copy(tt.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Cu*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function($){l=$,h!==null&&(h.fixedFoveation=$),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=$)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(v)};let lt=null;function Bt($,tt){if(u=tt.getViewerPose(c||o),g=tt,u!==null){const ut=u.views;d!==null&&(t.setRenderTargetFramebuffer(y,d.framebuffer),t.setRenderTarget(y));let at=!1;ut.length!==v.cameras.length&&(v.cameras.length=0,at=!0);for(let Rt=0;Rt<ut.length;Rt++){const Gt=ut[Rt];let Jt=null;if(d!==null)Jt=d.getViewport(Gt);else{const Dt=f.getViewSubImage(h,Gt);Jt=Dt.viewport,Rt===0&&(t.setRenderTargetTextures(y,Dt.colorTexture,h.ignoreDepthValues?void 0:Dt.depthStencilTexture),t.setRenderTarget(y))}let D=S[Rt];D===void 0&&(D=new oi,D.layers.enable(Rt),D.viewport=new Ke,S[Rt]=D),D.matrix.fromArray(Gt.transform.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale),D.projectionMatrix.fromArray(Gt.projectionMatrix),D.projectionMatrixInverse.copy(D.projectionMatrix).invert(),D.viewport.set(Jt.x,Jt.y,Jt.width,Jt.height),Rt===0&&(v.matrix.copy(D.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),at===!0&&v.cameras.push(D)}const wt=i.enabledFeatures;if(wt&&wt.includes("depth-sensing")){const Rt=f.getDepthInformation(ut[0]);Rt&&Rt.isValid&&Rt.texture&&_.init(t,Rt,i.renderState)}}for(let ut=0;ut<x.length;ut++){const at=M[ut],wt=x[ut];at!==null&&wt!==void 0&&wt.update(at,tt,c||o)}lt&&lt($,tt),tt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:tt}),g=null}const qt=new rm;qt.setAnimationLoop(Bt),this.setAnimationLoop=function($){lt=$},this.dispose=function(){}}}const wr=new Vi,xy=new Ie;function Sy(r,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,tm(r)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,y,x,M){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(p,m):m.isMeshToonMaterial?(s(p,m),f(p,m)):m.isMeshPhongMaterial?(s(p,m),u(p,m)):m.isMeshStandardMaterial?(s(p,m),h(p,m),m.isMeshPhysicalMaterial&&d(p,m,M)):m.isMeshMatcapMaterial?(s(p,m),g(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),_(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,y,x):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===wn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===wn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const y=t.get(m),x=y.envMap,M=y.envMapRotation;x&&(p.envMap.value=x,wr.copy(M),wr.x*=-1,wr.y*=-1,wr.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(wr.y*=-1,wr.z*=-1),p.envMapRotation.value.setFromMatrix4(xy.makeRotationFromEuler(wr)),p.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,y,x){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*y,p.scale.value=x*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function f(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function h(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,y){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===wn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){const y=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function My(r,t,e,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,x){const M=x.program;n.uniformBlockBinding(y,M)}function c(y,x){let M=i[y.id];M===void 0&&(g(y),M=u(y),i[y.id]=M,y.addEventListener("dispose",p));const A=x.program;n.updateUBOMapping(y,A);const w=t.render.frame;s[y.id]!==w&&(h(y),s[y.id]=w)}function u(y){const x=f();y.__bindingPointIndex=x;const M=r.createBuffer(),A=y.__size,w=y.usage;return r.bindBuffer(r.UNIFORM_BUFFER,M),r.bufferData(r.UNIFORM_BUFFER,A,w),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,x,M),M}function f(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){const x=i[y.id],M=y.uniforms,A=y.__cache;r.bindBuffer(r.UNIFORM_BUFFER,x);for(let w=0,T=M.length;w<T;w++){const C=Array.isArray(M[w])?M[w]:[M[w]];for(let S=0,v=C.length;S<v;S++){const P=C[S];if(d(P,w,S,A)===!0){const U=P.__offset,I=Array.isArray(P.value)?P.value:[P.value];let z=0;for(let Y=0;Y<I.length;Y++){const W=I[Y],B=_(W);typeof W=="number"||typeof W=="boolean"?(P.__data[0]=W,r.bufferSubData(r.UNIFORM_BUFFER,U+z,P.__data)):W.isMatrix3?(P.__data[0]=W.elements[0],P.__data[1]=W.elements[1],P.__data[2]=W.elements[2],P.__data[3]=0,P.__data[4]=W.elements[3],P.__data[5]=W.elements[4],P.__data[6]=W.elements[5],P.__data[7]=0,P.__data[8]=W.elements[6],P.__data[9]=W.elements[7],P.__data[10]=W.elements[8],P.__data[11]=0):(W.toArray(P.__data,z),z+=B.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,U,P.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(y,x,M,A){const w=y.value,T=x+"_"+M;if(A[T]===void 0)return typeof w=="number"||typeof w=="boolean"?A[T]=w:A[T]=w.clone(),!0;{const C=A[T];if(typeof w=="number"||typeof w=="boolean"){if(C!==w)return A[T]=w,!0}else if(C.equals(w)===!1)return C.copy(w),!0}return!1}function g(y){const x=y.uniforms;let M=0;const A=16;for(let T=0,C=x.length;T<C;T++){const S=Array.isArray(x[T])?x[T]:[x[T]];for(let v=0,P=S.length;v<P;v++){const U=S[v],I=Array.isArray(U.value)?U.value:[U.value];for(let z=0,Y=I.length;z<Y;z++){const W=I[z],B=_(W),V=M%A;V!==0&&A-V<B.boundary&&(M+=A-V),U.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=M,M+=B.storage}}}const w=M%A;return w>0&&(M+=A-w),y.__size=M,y.__cache={},this}function _(y){const x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function p(y){const x=y.target;x.removeEventListener("dispose",p);const M=o.indexOf(x.__bindingPointIndex);o.splice(M,1),r.deleteBuffer(i[x.id]),delete i[x.id],delete s[x.id]}function m(){for(const y in i)r.deleteBuffer(i[y]);o=[],i={},s={}}return{bind:l,update:c,dispose:m}}class Jf{constructor(t={}){const{canvas:e=f0(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=t;this.isWebGLRenderer=!0;let h;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=n.getContextAttributes().alpha}else h=o;const d=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const m=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=di,this.toneMapping=ur,this.toneMappingExposure=1;const x=this;let M=!1,A=0,w=0,T=null,C=-1,S=null;const v=new Ke,P=new Ke;let U=null;const I=new _e(0);let z=0,Y=e.width,W=e.height,B=1,V=null,st=null;const L=new Ke(0,0,Y,W),lt=new Ke(0,0,Y,W);let Bt=!1;const qt=new im;let $=!1,tt=!1;const ut=new Ie,at=new q,wt=new Ke,Rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Gt=!1;function Jt(){return T===null?B:1}let D=n;function Dt(b,N){return e.getContext(b,N)}try{const b={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${sh}`),e.addEventListener("webglcontextlost",j,!1),e.addEventListener("webglcontextrestored",J,!1),e.addEventListener("webglcontextcreationerror",ot,!1),D===null){const N="webgl2";if(D=Dt(N,b),D===null)throw Dt(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Ot,Xt,gt,G,At,Ft,R,E,X,Q,nt,Z,Et,it,dt,Ut,rt,_t,Pt,kt,mt,zt,Wt,le;function O(){Ot=new RS(D),Ot.init(),zt=new fy(D,Ot),Xt=new ES(D,Ot,t,zt),gt=new cy(D),G=new DS(D),At=new KM,Ft=new hy(D,Ot,gt,At,Xt,zt,G),R=new bS(x),E=new CS(x),X=new k0(D),Wt=new MS(D,X),Q=new PS(D,X,G,Wt),nt=new US(D,Q,X,G),Pt=new IS(D,Xt,Ft),Ut=new TS(At),Z=new $M(x,R,E,Ot,Xt,Wt,Ut),Et=new Sy(x,At),it=new jM,dt=new iy(Ot),_t=new SS(x,R,E,gt,nt,h,l),rt=new ly(x,nt,Xt),le=new My(D,G,Xt,gt),kt=new yS(D,Ot,G),mt=new LS(D,Ot,G),G.programs=Z.programs,x.capabilities=Xt,x.extensions=Ot,x.properties=At,x.renderLists=it,x.shadowMap=rt,x.state=gt,x.info=G}O();const K=new vy(x,D);this.xr=K,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const b=Ot.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Ot.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(b){b!==void 0&&(B=b,this.setSize(Y,W,!1))},this.getSize=function(b){return b.set(Y,W)},this.setSize=function(b,N,H=!0){if(K.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=b,W=N,e.width=Math.floor(b*B),e.height=Math.floor(N*B),H===!0&&(e.style.width=b+"px",e.style.height=N+"px"),this.setViewport(0,0,b,N)},this.getDrawingBufferSize=function(b){return b.set(Y*B,W*B).floor()},this.setDrawingBufferSize=function(b,N,H){Y=b,W=N,B=H,e.width=Math.floor(b*H),e.height=Math.floor(N*H),this.setViewport(0,0,b,N)},this.getCurrentViewport=function(b){return b.copy(v)},this.getViewport=function(b){return b.copy(L)},this.setViewport=function(b,N,H,k){b.isVector4?L.set(b.x,b.y,b.z,b.w):L.set(b,N,H,k),gt.viewport(v.copy(L).multiplyScalar(B).round())},this.getScissor=function(b){return b.copy(lt)},this.setScissor=function(b,N,H,k){b.isVector4?lt.set(b.x,b.y,b.z,b.w):lt.set(b,N,H,k),gt.scissor(P.copy(lt).multiplyScalar(B).round())},this.getScissorTest=function(){return Bt},this.setScissorTest=function(b){gt.setScissorTest(Bt=b)},this.setOpaqueSort=function(b){V=b},this.setTransparentSort=function(b){st=b},this.getClearColor=function(b){return b.copy(_t.getClearColor())},this.setClearColor=function(){_t.setClearColor.apply(_t,arguments)},this.getClearAlpha=function(){return _t.getClearAlpha()},this.setClearAlpha=function(){_t.setClearAlpha.apply(_t,arguments)},this.clear=function(b=!0,N=!0,H=!0){let k=0;if(b){let F=!1;if(T!==null){const et=T.texture.format;F=et===fh||et===hh||et===uh}if(F){const et=T.texture.type,ht=et===Hi||et===jr||et===Zo||et===Zs||et===ah||et===lh,xt=_t.getClearColor(),ft=_t.getClearAlpha(),vt=xt.r,Ct=xt.g,It=xt.b;ht?(d[0]=vt,d[1]=Ct,d[2]=It,d[3]=ft,D.clearBufferuiv(D.COLOR,0,d)):(g[0]=vt,g[1]=Ct,g[2]=It,g[3]=ft,D.clearBufferiv(D.COLOR,0,g))}else k|=D.COLOR_BUFFER_BIT}N&&(k|=D.DEPTH_BUFFER_BIT),H&&(k|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",j,!1),e.removeEventListener("webglcontextrestored",J,!1),e.removeEventListener("webglcontextcreationerror",ot,!1),it.dispose(),dt.dispose(),At.dispose(),R.dispose(),E.dispose(),nt.dispose(),Wt.dispose(),le.dispose(),Z.dispose(),K.dispose(),K.removeEventListener("sessionstart",yt),K.removeEventListener("sessionend",se),ct.stop()};function j(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function J(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const b=G.autoReset,N=rt.enabled,H=rt.autoUpdate,k=rt.needsUpdate,F=rt.type;O(),G.autoReset=b,rt.enabled=N,rt.autoUpdate=H,rt.needsUpdate=k,rt.type=F}function ot(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Tt(b){const N=b.target;N.removeEventListener("dispose",Tt),Yt(N)}function Yt(b){ge(b),At.remove(b)}function ge(b){const N=At.get(b).programs;N!==void 0&&(N.forEach(function(H){Z.releaseProgram(H)}),b.isShaderMaterial&&Z.releaseShaderCache(b))}this.renderBufferDirect=function(b,N,H,k,F,et){N===null&&(N=Rt);const ht=F.isMesh&&F.matrixWorld.determinant()<0,xt=Ee(b,N,H,k,F);gt.setMaterial(k,ht);let ft=H.index,vt=1;if(k.wireframe===!0){if(ft=Q.getWireframeAttribute(H),ft===void 0)return;vt=2}const Ct=H.drawRange,It=H.attributes.position;let oe=Ct.start*vt,me=(Ct.start+Ct.count)*vt;et!==null&&(oe=Math.max(oe,et.start*vt),me=Math.min(me,(et.start+et.count)*vt)),ft!==null?(oe=Math.max(oe,0),me=Math.min(me,ft.count)):It!=null&&(oe=Math.max(oe,0),me=Math.min(me,It.count));const ae=me-oe;if(ae<0||ae===1/0)return;Wt.setup(F,k,xt,H,ft);let He,ie=kt;if(ft!==null&&(He=X.get(ft),ie=mt,ie.setIndex(He)),F.isMesh)k.wireframe===!0?(gt.setLineWidth(k.wireframeLinewidth*Jt()),ie.setMode(D.LINES)):ie.setMode(D.TRIANGLES);else if(F.isLine){let Mt=k.linewidth;Mt===void 0&&(Mt=1),gt.setLineWidth(Mt*Jt()),F.isLineSegments?ie.setMode(D.LINES):F.isLineLoop?ie.setMode(D.LINE_LOOP):ie.setMode(D.LINE_STRIP)}else F.isPoints?ie.setMode(D.POINTS):F.isSprite&&ie.setMode(D.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)ie.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(Ot.get("WEBGL_multi_draw"))ie.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Mt=F._multiDrawStarts,je=F._multiDrawCounts,ue=F._multiDrawCount,ei=ft?X.get(ft).bytesPerElement:1,es=At.get(k).currentProgram.getUniforms();for(let Pn=0;Pn<ue;Pn++)es.setValue(D,"_gl_DrawID",Pn),ie.render(Mt[Pn]/ei,je[Pn])}else if(F.isInstancedMesh)ie.renderInstances(oe,ae,F.count);else if(H.isInstancedBufferGeometry){const Mt=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,je=Math.min(H.instanceCount,Mt);ie.renderInstances(oe,ae,je)}else ie.render(oe,ae)};function ve(b,N,H){b.transparent===!0&&b.side===Ni&&b.forceSinglePass===!1?(b.side=wn,b.needsUpdate=!0,ye(b,N,H),b.side=mr,b.needsUpdate=!0,ye(b,N,H),b.side=Ni):ye(b,N,H)}this.compile=function(b,N,H=null){H===null&&(H=b),p=dt.get(H),p.init(N),y.push(p),H.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),b!==H&&b.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),p.setupLights();const k=new Set;return b.traverse(function(F){const et=F.material;if(et)if(Array.isArray(et))for(let ht=0;ht<et.length;ht++){const xt=et[ht];ve(xt,H,F),k.add(xt)}else ve(et,H,F),k.add(et)}),y.pop(),p=null,k},this.compileAsync=function(b,N,H=null){const k=this.compile(b,N,H);return new Promise(F=>{function et(){if(k.forEach(function(ht){At.get(ht).currentProgram.isReady()&&k.delete(ht)}),k.size===0){F(b);return}setTimeout(et,10)}Ot.get("KHR_parallel_shader_compile")!==null?et():setTimeout(et,10)})};let ne=null;function Nt(b){ne&&ne(b)}function yt(){ct.stop()}function se(){ct.start()}const ct=new rm;ct.setAnimationLoop(Nt),typeof self<"u"&&ct.setContext(self),this.setAnimationLoop=function(b){ne=b,K.setAnimationLoop(b),b===null?ct.stop():ct.start()},K.addEventListener("sessionstart",yt),K.addEventListener("sessionend",se),this.render=function(b,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(K.cameraAutoUpdate===!0&&K.updateCamera(N),N=K.getCamera()),b.isScene===!0&&b.onBeforeRender(x,b,N,T),p=dt.get(b,y.length),p.init(N),y.push(p),ut.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),qt.setFromProjectionMatrix(ut),tt=this.localClippingEnabled,$=Ut.init(this.clippingPlanes,tt),_=it.get(b,m.length),_.init(),m.push(_),K.enabled===!0&&K.isPresenting===!0){const et=x.xr.getDepthSensingMesh();et!==null&&Ht(et,N,-1/0,x.sortObjects)}Ht(b,N,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(V,st),Gt=K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1,Gt&&_t.addToRenderList(_,b),this.info.render.frame++,$===!0&&Ut.beginShadows();const H=p.state.shadowsArray;rt.render(H,b,N),$===!0&&Ut.endShadows(),this.info.autoReset===!0&&this.info.reset();const k=_.opaque,F=_.transmissive;if(p.setupLights(),N.isArrayCamera){const et=N.cameras;if(F.length>0)for(let ht=0,xt=et.length;ht<xt;ht++){const ft=et[ht];Vt(k,F,b,ft)}Gt&&_t.render(b);for(let ht=0,xt=et.length;ht<xt;ht++){const ft=et[ht];Lt(_,b,ft,ft.viewport)}}else F.length>0&&Vt(k,F,b,N),Gt&&_t.render(b),Lt(_,b,N);T!==null&&(Ft.updateMultisampleRenderTarget(T),Ft.updateRenderTargetMipmap(T)),b.isScene===!0&&b.onAfterRender(x,b,N),Wt.resetDefaultState(),C=-1,S=null,y.pop(),y.length>0?(p=y[y.length-1],$===!0&&Ut.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,m.pop(),m.length>0?_=m[m.length-1]:_=null};function Ht(b,N,H,k){if(b.visible===!1)return;if(b.layers.test(N.layers)){if(b.isGroup)H=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(N);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||qt.intersectsSprite(b)){k&&wt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ut);const ht=nt.update(b),xt=b.material;xt.visible&&_.push(b,ht,xt,H,wt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||qt.intersectsObject(b))){const ht=nt.update(b),xt=b.material;if(k&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),wt.copy(b.boundingSphere.center)):(ht.boundingSphere===null&&ht.computeBoundingSphere(),wt.copy(ht.boundingSphere.center)),wt.applyMatrix4(b.matrixWorld).applyMatrix4(ut)),Array.isArray(xt)){const ft=ht.groups;for(let vt=0,Ct=ft.length;vt<Ct;vt++){const It=ft[vt],oe=xt[It.materialIndex];oe&&oe.visible&&_.push(b,ht,oe,H,wt.z,It)}}else xt.visible&&_.push(b,ht,xt,H,wt.z,null)}}const et=b.children;for(let ht=0,xt=et.length;ht<xt;ht++)Ht(et[ht],N,H,k)}function Lt(b,N,H,k){const F=b.opaque,et=b.transmissive,ht=b.transparent;p.setupLightsView(H),$===!0&&Ut.setGlobalState(x.clippingPlanes,H),k&&gt.viewport(v.copy(k)),F.length>0&&Ae(F,N,H),et.length>0&&Ae(et,N,H),ht.length>0&&Ae(ht,N,H),gt.buffers.depth.setTest(!0),gt.buffers.depth.setMask(!0),gt.buffers.color.setMask(!0),gt.setPolygonOffset(!1)}function Vt(b,N,H,k){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[k.id]===void 0&&(p.state.transmissionRenderTarget[k.id]=new Jr(1,1,{generateMipmaps:!0,type:Ot.has("EXT_color_buffer_half_float")||Ot.has("EXT_color_buffer_float")?Qo:Hi,minFilter:kr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:pe.workingColorSpace}));const et=p.state.transmissionRenderTarget[k.id],ht=k.viewport||v;et.setSize(ht.z,ht.w);const xt=x.getRenderTarget();x.setRenderTarget(et),x.getClearColor(I),z=x.getClearAlpha(),z<1&&x.setClearColor(16777215,.5),Gt?_t.render(H):x.clear();const ft=x.toneMapping;x.toneMapping=ur;const vt=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),p.setupLightsView(k),$===!0&&Ut.setGlobalState(x.clippingPlanes,k),Ae(b,H,k),Ft.updateMultisampleRenderTarget(et),Ft.updateRenderTargetMipmap(et),Ot.has("WEBGL_multisampled_render_to_texture")===!1){let Ct=!1;for(let It=0,oe=N.length;It<oe;It++){const me=N[It],ae=me.object,He=me.geometry,ie=me.material,Mt=me.group;if(ie.side===Ni&&ae.layers.test(k.layers)){const je=ie.side;ie.side=wn,ie.needsUpdate=!0,Qt(ae,H,k,He,ie,Mt),ie.side=je,ie.needsUpdate=!0,Ct=!0}}Ct===!0&&(Ft.updateMultisampleRenderTarget(et),Ft.updateRenderTargetMipmap(et))}x.setRenderTarget(xt),x.setClearColor(I,z),vt!==void 0&&(k.viewport=vt),x.toneMapping=ft}function Ae(b,N,H){const k=N.isScene===!0?N.overrideMaterial:null;for(let F=0,et=b.length;F<et;F++){const ht=b[F],xt=ht.object,ft=ht.geometry,vt=k===null?ht.material:k,Ct=ht.group;xt.layers.test(H.layers)&&Qt(xt,N,H,ft,vt,Ct)}}function Qt(b,N,H,k,F,et){b.onBeforeRender(x,N,H,k,F,et),b.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),F.transparent===!0&&F.side===Ni&&F.forceSinglePass===!1?(F.side=wn,F.needsUpdate=!0,x.renderBufferDirect(H,N,k,F,b,et),F.side=mr,F.needsUpdate=!0,x.renderBufferDirect(H,N,k,F,b,et),F.side=Ni):x.renderBufferDirect(H,N,k,F,b,et),b.onAfterRender(x,N,H,k,F,et)}function ye(b,N,H){N.isScene!==!0&&(N=Rt);const k=At.get(b),F=p.state.lights,et=p.state.shadowsArray,ht=F.state.version,xt=Z.getParameters(b,F.state,et,N,H),ft=Z.getProgramCacheKey(xt);let vt=k.programs;k.environment=b.isMeshStandardMaterial?N.environment:null,k.fog=N.fog,k.envMap=(b.isMeshStandardMaterial?E:R).get(b.envMap||k.environment),k.envMapRotation=k.environment!==null&&b.envMap===null?N.environmentRotation:b.envMapRotation,vt===void 0&&(b.addEventListener("dispose",Tt),vt=new Map,k.programs=vt);let Ct=vt.get(ft);if(Ct!==void 0){if(k.currentProgram===Ct&&k.lightsStateVersion===ht)return Te(b,xt),Ct}else xt.uniforms=Z.getUniforms(b),b.onBeforeCompile(xt,x),Ct=Z.acquireProgram(xt,ft),vt.set(ft,Ct),k.uniforms=xt.uniforms;const It=k.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(It.clippingPlanes=Ut.uniform),Te(b,xt),k.needsLights=Rn(b),k.lightsStateVersion=ht,k.needsLights&&(It.ambientLightColor.value=F.state.ambient,It.lightProbe.value=F.state.probe,It.directionalLights.value=F.state.directional,It.directionalLightShadows.value=F.state.directionalShadow,It.spotLights.value=F.state.spot,It.spotLightShadows.value=F.state.spotShadow,It.rectAreaLights.value=F.state.rectArea,It.ltc_1.value=F.state.rectAreaLTC1,It.ltc_2.value=F.state.rectAreaLTC2,It.pointLights.value=F.state.point,It.pointLightShadows.value=F.state.pointShadow,It.hemisphereLights.value=F.state.hemi,It.directionalShadowMap.value=F.state.directionalShadowMap,It.directionalShadowMatrix.value=F.state.directionalShadowMatrix,It.spotShadowMap.value=F.state.spotShadowMap,It.spotLightMatrix.value=F.state.spotLightMatrix,It.spotLightMap.value=F.state.spotLightMap,It.pointShadowMap.value=F.state.pointShadowMap,It.pointShadowMatrix.value=F.state.pointShadowMatrix),k.currentProgram=Ct,k.uniformsList=null,Ct}function ze(b){if(b.uniformsList===null){const N=b.currentProgram.getUniforms();b.uniformsList=rl.seqWithValue(N.seq,b.uniforms)}return b.uniformsList}function Te(b,N){const H=At.get(b);H.outputColorSpace=N.outputColorSpace,H.batching=N.batching,H.batchingColor=N.batchingColor,H.instancing=N.instancing,H.instancingColor=N.instancingColor,H.instancingMorph=N.instancingMorph,H.skinning=N.skinning,H.morphTargets=N.morphTargets,H.morphNormals=N.morphNormals,H.morphColors=N.morphColors,H.morphTargetsCount=N.morphTargetsCount,H.numClippingPlanes=N.numClippingPlanes,H.numIntersection=N.numClipIntersection,H.vertexAlphas=N.vertexAlphas,H.vertexTangents=N.vertexTangents,H.toneMapping=N.toneMapping}function Ee(b,N,H,k,F){N.isScene!==!0&&(N=Rt),Ft.resetTextureUnits();const et=N.fog,ht=k.isMeshStandardMaterial?N.environment:null,xt=T===null?x.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:gr,ft=(k.isMeshStandardMaterial?E:R).get(k.envMap||ht),vt=k.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Ct=!!H.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),It=!!H.morphAttributes.position,oe=!!H.morphAttributes.normal,me=!!H.morphAttributes.color;let ae=ur;k.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(ae=x.toneMapping);const He=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ie=He!==void 0?He.length:0,Mt=At.get(k),je=p.state.lights;if($===!0&&(tt===!0||b!==S)){const Xn=b===S&&k.id===C;Ut.setState(k,b,Xn)}let ue=!1;k.version===Mt.__version?(Mt.needsLights&&Mt.lightsStateVersion!==je.state.version||Mt.outputColorSpace!==xt||F.isBatchedMesh&&Mt.batching===!1||!F.isBatchedMesh&&Mt.batching===!0||F.isBatchedMesh&&Mt.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Mt.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Mt.instancing===!1||!F.isInstancedMesh&&Mt.instancing===!0||F.isSkinnedMesh&&Mt.skinning===!1||!F.isSkinnedMesh&&Mt.skinning===!0||F.isInstancedMesh&&Mt.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Mt.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Mt.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Mt.instancingMorph===!1&&F.morphTexture!==null||Mt.envMap!==ft||k.fog===!0&&Mt.fog!==et||Mt.numClippingPlanes!==void 0&&(Mt.numClippingPlanes!==Ut.numPlanes||Mt.numIntersection!==Ut.numIntersection)||Mt.vertexAlphas!==vt||Mt.vertexTangents!==Ct||Mt.morphTargets!==It||Mt.morphNormals!==oe||Mt.morphColors!==me||Mt.toneMapping!==ae||Mt.morphTargetsCount!==ie)&&(ue=!0):(ue=!0,Mt.__version=k.version);let ei=Mt.currentProgram;ue===!0&&(ei=ye(k,N,F));let es=!1,Pn=!1,Nl=!1;const Oe=ei.getUniforms(),Wi=Mt.uniforms;if(gt.useProgram(ei.program)&&(es=!0,Pn=!0,Nl=!0),k.id!==C&&(C=k.id,Pn=!0),es||S!==b){Oe.setValue(D,"projectionMatrix",b.projectionMatrix),Oe.setValue(D,"viewMatrix",b.matrixWorldInverse);const Xn=Oe.map.cameraPosition;Xn!==void 0&&Xn.setValue(D,at.setFromMatrixPosition(b.matrixWorld)),Xt.logarithmicDepthBuffer&&Oe.setValue(D,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&Oe.setValue(D,"isOrthographic",b.isOrthographicCamera===!0),S!==b&&(S=b,Pn=!0,Nl=!0)}if(F.isSkinnedMesh){Oe.setOptional(D,F,"bindMatrix"),Oe.setOptional(D,F,"bindMatrixInverse");const Xn=F.skeleton;Xn&&(Xn.boneTexture===null&&Xn.computeBoneTexture(),Oe.setValue(D,"boneTexture",Xn.boneTexture,Ft))}F.isBatchedMesh&&(Oe.setOptional(D,F,"batchingTexture"),Oe.setValue(D,"batchingTexture",F._matricesTexture,Ft),Oe.setOptional(D,F,"batchingIdTexture"),Oe.setValue(D,"batchingIdTexture",F._indirectTexture,Ft),Oe.setOptional(D,F,"batchingColorTexture"),F._colorsTexture!==null&&Oe.setValue(D,"batchingColorTexture",F._colorsTexture,Ft));const Ol=H.morphAttributes;if((Ol.position!==void 0||Ol.normal!==void 0||Ol.color!==void 0)&&Pt.update(F,H,ei),(Pn||Mt.receiveShadow!==F.receiveShadow)&&(Mt.receiveShadow=F.receiveShadow,Oe.setValue(D,"receiveShadow",F.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(Wi.envMap.value=ft,Wi.flipEnvMap.value=ft.isCubeTexture&&ft.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&N.environment!==null&&(Wi.envMapIntensity.value=N.environmentIntensity),Pn&&(Oe.setValue(D,"toneMappingExposure",x.toneMappingExposure),Mt.needsLights&&fe(Wi,Nl),et&&k.fog===!0&&Et.refreshFogUniforms(Wi,et),Et.refreshMaterialUniforms(Wi,k,B,W,p.state.transmissionRenderTarget[b.id]),rl.upload(D,ze(Mt),Wi,Ft)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(rl.upload(D,ze(Mt),Wi,Ft),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&Oe.setValue(D,"center",F.center),Oe.setValue(D,"modelViewMatrix",F.modelViewMatrix),Oe.setValue(D,"normalMatrix",F.normalMatrix),Oe.setValue(D,"modelMatrix",F.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const Xn=k.uniformsGroups;for(let Fl=0,Cm=Xn.length;Fl<Cm;Fl++){const vh=Xn[Fl];le.update(vh,ei),le.bind(vh,ei)}}return ei}function fe(b,N){b.ambientLightColor.needsUpdate=N,b.lightProbe.needsUpdate=N,b.directionalLights.needsUpdate=N,b.directionalLightShadows.needsUpdate=N,b.pointLights.needsUpdate=N,b.pointLightShadows.needsUpdate=N,b.spotLights.needsUpdate=N,b.spotLightShadows.needsUpdate=N,b.rectAreaLights.needsUpdate=N,b.hemisphereLights.needsUpdate=N}function Rn(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(b,N,H){At.get(b.texture).__webglTexture=N,At.get(b.depthTexture).__webglTexture=H;const k=At.get(b);k.__hasExternalTextures=!0,k.__autoAllocateDepthBuffer=H===void 0,k.__autoAllocateDepthBuffer||Ot.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,N){const H=At.get(b);H.__webglFramebuffer=N,H.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(b,N=0,H=0){T=b,A=N,w=H;let k=!0,F=null,et=!1,ht=!1;if(b){const ft=At.get(b);ft.__useDefaultFramebuffer!==void 0?(gt.bindFramebuffer(D.FRAMEBUFFER,null),k=!1):ft.__webglFramebuffer===void 0?Ft.setupRenderTarget(b):ft.__hasExternalTextures&&Ft.rebindTextures(b,At.get(b.texture).__webglTexture,At.get(b.depthTexture).__webglTexture);const vt=b.texture;(vt.isData3DTexture||vt.isDataArrayTexture||vt.isCompressedArrayTexture)&&(ht=!0);const Ct=At.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ct[N])?F=Ct[N][H]:F=Ct[N],et=!0):b.samples>0&&Ft.useMultisampledRTT(b)===!1?F=At.get(b).__webglMultisampledFramebuffer:Array.isArray(Ct)?F=Ct[H]:F=Ct,v.copy(b.viewport),P.copy(b.scissor),U=b.scissorTest}else v.copy(L).multiplyScalar(B).floor(),P.copy(lt).multiplyScalar(B).floor(),U=Bt;if(gt.bindFramebuffer(D.FRAMEBUFFER,F)&&k&&gt.drawBuffers(b,F),gt.viewport(v),gt.scissor(P),gt.setScissorTest(U),et){const ft=At.get(b.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+N,ft.__webglTexture,H)}else if(ht){const ft=At.get(b.texture),vt=N||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,ft.__webglTexture,H||0,vt)}C=-1},this.readRenderTargetPixels=function(b,N,H,k,F,et,ht){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xt=At.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ht!==void 0&&(xt=xt[ht]),xt){gt.bindFramebuffer(D.FRAMEBUFFER,xt);try{const ft=b.texture,vt=ft.format,Ct=ft.type;if(!Xt.textureFormatReadable(vt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Xt.textureTypeReadable(Ct)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=b.width-k&&H>=0&&H<=b.height-F&&D.readPixels(N,H,k,F,zt.convert(vt),zt.convert(Ct),et)}finally{const ft=T!==null?At.get(T).__webglFramebuffer:null;gt.bindFramebuffer(D.FRAMEBUFFER,ft)}}},this.readRenderTargetPixelsAsync=async function(b,N,H,k,F,et,ht){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xt=At.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ht!==void 0&&(xt=xt[ht]),xt){gt.bindFramebuffer(D.FRAMEBUFFER,xt);try{const ft=b.texture,vt=ft.format,Ct=ft.type;if(!Xt.textureFormatReadable(vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Xt.textureTypeReadable(Ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=b.width-k&&H>=0&&H<=b.height-F){const It=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,It),D.bufferData(D.PIXEL_PACK_BUFFER,et.byteLength,D.STREAM_READ),D.readPixels(N,H,k,F,zt.convert(vt),zt.convert(Ct),0),D.flush();const oe=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);await d0(D,oe,4);try{D.bindBuffer(D.PIXEL_PACK_BUFFER,It),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,et)}finally{D.deleteBuffer(It),D.deleteSync(oe)}return et}}finally{const ft=T!==null?At.get(T).__webglFramebuffer:null;gt.bindFramebuffer(D.FRAMEBUFFER,ft)}}},this.copyFramebufferToTexture=function(b,N=null,H=0){b.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,b=arguments[1]);const k=Math.pow(2,-H),F=Math.floor(b.image.width*k),et=Math.floor(b.image.height*k),ht=N!==null?N.x:0,xt=N!==null?N.y:0;Ft.setTexture2D(b,0),D.copyTexSubImage2D(D.TEXTURE_2D,H,0,0,ht,xt,F,et),gt.unbindTexture()},this.copyTextureToTexture=function(b,N,H=null,k=null,F=0){b.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),k=arguments[0]||null,b=arguments[1],N=arguments[2],F=arguments[3]||0,H=null);let et,ht,xt,ft,vt,Ct;H!==null?(et=H.max.x-H.min.x,ht=H.max.y-H.min.y,xt=H.min.x,ft=H.min.y):(et=b.image.width,ht=b.image.height,xt=0,ft=0),k!==null?(vt=k.x,Ct=k.y):(vt=0,Ct=0);const It=zt.convert(N.format),oe=zt.convert(N.type);Ft.setTexture2D(N,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,N.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,N.unpackAlignment);const me=D.getParameter(D.UNPACK_ROW_LENGTH),ae=D.getParameter(D.UNPACK_IMAGE_HEIGHT),He=D.getParameter(D.UNPACK_SKIP_PIXELS),ie=D.getParameter(D.UNPACK_SKIP_ROWS),Mt=D.getParameter(D.UNPACK_SKIP_IMAGES),je=b.isCompressedTexture?b.mipmaps[F]:b.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,je.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,je.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,xt),D.pixelStorei(D.UNPACK_SKIP_ROWS,ft),b.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,F,vt,Ct,et,ht,It,oe,je.data):b.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,F,vt,Ct,je.width,je.height,It,je.data):D.texSubImage2D(D.TEXTURE_2D,F,vt,Ct,et,ht,It,oe,je),D.pixelStorei(D.UNPACK_ROW_LENGTH,me),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ae),D.pixelStorei(D.UNPACK_SKIP_PIXELS,He),D.pixelStorei(D.UNPACK_SKIP_ROWS,ie),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Mt),F===0&&N.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),gt.unbindTexture()},this.copyTextureToTexture3D=function(b,N,H=null,k=null,F=0){b.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,k=arguments[1]||null,b=arguments[2],N=arguments[3],F=arguments[4]||0);let et,ht,xt,ft,vt,Ct,It,oe,me;const ae=b.isCompressedTexture?b.mipmaps[F]:b.image;H!==null?(et=H.max.x-H.min.x,ht=H.max.y-H.min.y,xt=H.max.z-H.min.z,ft=H.min.x,vt=H.min.y,Ct=H.min.z):(et=ae.width,ht=ae.height,xt=ae.depth,ft=0,vt=0,Ct=0),k!==null?(It=k.x,oe=k.y,me=k.z):(It=0,oe=0,me=0);const He=zt.convert(N.format),ie=zt.convert(N.type);let Mt;if(N.isData3DTexture)Ft.setTexture3D(N,0),Mt=D.TEXTURE_3D;else if(N.isDataArrayTexture||N.isCompressedArrayTexture)Ft.setTexture2DArray(N,0),Mt=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,N.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,N.unpackAlignment);const je=D.getParameter(D.UNPACK_ROW_LENGTH),ue=D.getParameter(D.UNPACK_IMAGE_HEIGHT),ei=D.getParameter(D.UNPACK_SKIP_PIXELS),es=D.getParameter(D.UNPACK_SKIP_ROWS),Pn=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,ae.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ae.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,ft),D.pixelStorei(D.UNPACK_SKIP_ROWS,vt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ct),b.isDataTexture||b.isData3DTexture?D.texSubImage3D(Mt,F,It,oe,me,et,ht,xt,He,ie,ae.data):N.isCompressedArrayTexture?D.compressedTexSubImage3D(Mt,F,It,oe,me,et,ht,xt,He,ae.data):D.texSubImage3D(Mt,F,It,oe,me,et,ht,xt,He,ie,ae),D.pixelStorei(D.UNPACK_ROW_LENGTH,je),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ue),D.pixelStorei(D.UNPACK_SKIP_PIXELS,ei),D.pixelStorei(D.UNPACK_SKIP_ROWS,es),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Pn),F===0&&N.generateMipmaps&&D.generateMipmap(Mt),gt.unbindTexture()},this.initRenderTarget=function(b){At.get(b).__webglFramebuffer===void 0&&Ft.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?Ft.setTextureCube(b,0):b.isData3DTexture?Ft.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Ft.setTexture2DArray(b,0):Ft.setTexture2D(b,0),gt.unbindTexture()},this.resetState=function(){A=0,w=0,T=null,gt.reset(),Wt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===dh?"display-p3":"srgb",e.unpackColorSpace=pe.workingColorSpace===Ll?"display-p3":"srgb"}}class Qf extends An{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vi,this.environmentIntensity=1,this.environmentRotation=new Vi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class yy extends _n{constructor(t=null,e=1,n=1,i,s,o,a,l,c=Mn,u=Mn,f,h){super(null,o,a,l,c,u,i,s,f,h),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Tl extends ui{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Es=new Ie,td=new Ie,Ha=[],ed=new ts,Ey=new Ie,_o=new Qn,go=new na;class Ty extends Qn{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Tl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Ey)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ts),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Es),ed.copy(t.boundingBox).applyMatrix4(Es),this.boundingBox.union(ed)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new na),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Es),go.copy(t.boundingSphere).applyMatrix4(Es),this.boundingSphere.union(go)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=t*s+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(_o.geometry=this.geometry,_o.material=this.material,_o.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),go.copy(this.boundingSphere),go.applyMatrix4(n),t.ray.intersectsSphere(go)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Es),td.multiplyMatrices(n,Es),_o.matrixWorld=td,_o.raycast(t,Ha);for(let o=0,a=Ha.length;o<a;o++){const l=Ha[o];l.instanceId=s,l.object=this,e.push(l)}Ha.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Tl(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new yy(new Float32Array(i*this.count),i,this.count,ch,Mi));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*t;s[l]=a,s.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class by extends vr{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){const t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:sh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=sh);const wy=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`,Ay=`
  precision highp float;

  varying vec2 vUv;

  uniform float uTime;
  uniform vec2  uResolution;
  uniform vec2  uMouse;
  uniform float uScroll; // Linked to scroll progress

  float sdCircle(vec2 p, float r) {
    return length(p) - r;
  }

  float sdPlus(vec2 p, float size, float thickness) {
    vec2 d = abs(p);
    float bar1 = max(d.x - size, d.y - thickness);
    float bar2 = max(d.y - size, d.x - thickness);
    return min(bar1, bar2);
  }

  float drawSDF(float dist, float thickness) {
    return smoothstep(thickness + 0.0015, thickness, abs(dist));
  }

  void main() {
    vec2 uv = vUv;
    float aspect = uResolution.x / uResolution.y;
    vec2 auv = (uv - 0.5) * vec2(aspect, 1.0);
    
    // Antigravity Light Theme background gradient (pristine light environment)
    vec3 bgCol = mix(vec3(0.973, 0.976, 0.980), vec3(1.0, 1.0, 1.0), uv.y);
    vec3 col = bgCol;

    float scr = uScroll * 0.001; // Scale down scroll pixels

    // Layer 1: Plus signs floating slowly (deep layer)
    {
      vec2 p = auv + vec2(-0.35 * aspect, 0.15 + scr * 0.12);
      p += vec2(sin(uTime * 0.0012) * 0.01, cos(uTime * 0.0009) * 0.008);
      float d = sdPlus(p, 0.035, 0.0008);
      float mask = drawSDF(d, 0.001);
      col = mix(col, vec3(0.902, 0.914, 0.933), mask);
    }

    // Layer 2: Ring circles floating medium speed (middle layer)
    {
      vec2 p = auv + vec2(0.28 * aspect, -0.22 + scr * 0.24);
      p += vec2(cos(uTime * 0.0015) * 0.015, sin(uTime * 0.0011) * 0.01);
      float d = sdCircle(p, 0.1);
      float mask = drawSDF(d, 0.0008);
      col = mix(col, vec3(0.922, 0.933, 0.949), mask);
    }

    // Layer 3: Dashed orbit circle (front-middle layer)
    {
      vec2 p = auv + vec2(-0.25 * aspect, -0.55 + scr * 0.38);
      p += vec2(sin(uTime * 0.0008) * 0.008, cos(uTime * 0.0012) * 0.012);
      float d = sdCircle(p, 0.16);
      float angle = atan(p.y, p.x);
      float dash = step(0.4, sin(angle * 28.0));
      float mask = drawSDF(d, 0.0006) * dash;
      col = mix(col, vec3(0.937, 0.945, 0.957), mask);
    }

    // Layer 4: Tiny plus signs (fastest layer)
    {
      vec2 p = auv + vec2(0.38 * aspect, 0.45 + scr * 0.52);
      p += vec2(cos(uTime * 0.0018) * 0.012, sin(uTime * 0.0014) * 0.015);
      float d = sdPlus(p, 0.02, 0.0005);
      float mask = drawSDF(d, 0.0008);
      col = mix(col, vec3(0.882, 0.898, 0.922), mask);
    }

    // Subtle vignette
    float vig = 1.0 - smoothstep(0.5, 1.4, length(uv - 0.5) * 1.5);
    col = mix(col, col * vig, 0.25);

    gl_FragColor = vec4(col, 1.0);
  }
`,Cy=`
  attribute float aScale;
  attribute float aType;
  varying float vType;
  varying vec2 vUv;
  void main() {
    vUv = uv;
    vType = aType;
    vec3 pos = position * aScale;
    gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(pos, 1.0);
  }
`,Ry=`
  precision highp float;
  varying vec2 vUv;
  varying float vType;
  void main() {
    vec2 p = vUv - 0.5;
    float dist = 0.0;
    
    if (vType < 0.5) {
      // Circle particle
      dist = length(p) - 0.45;
    } else {
      // Plus particle
      vec2 d = abs(p);
      float bar1 = max(d.x - 0.45, d.y - 0.06);
      float bar2 = max(d.y - 0.45, d.x - 0.06);
      dist = min(bar1, bar2);
    }
    
    float alpha = smoothstep(0.02, 0.0, dist);
    if (alpha < 0.1) discard;
    
    // Subtractive dark grey/blue color (#202124)
    gl_FragColor = vec4(0.125, 0.129, 0.141, alpha * 0.7);
  }
`;let Pi=null;function Py(){const r=document.getElementById("webgl-bg"),t=document.getElementById("webgl-cursor");if(!r||!t)return;const e=new Jf({canvas:r,antialias:!0,alpha:!1});e.setPixelRatio(Math.min(window.devicePixelRatio,2)),e.setSize(window.innerWidth,window.innerHeight);const n=new Jf({canvas:t,antialias:!0,alpha:!0});n.setPixelRatio(Math.min(window.devicePixelRatio,2)),n.setSize(window.innerWidth,window.innerHeight),n.setClearColor(0,0);const i=new Qf,s=new Qf,o=new sm(-1,1,1,-1,0,1),a=new Qs(2,2);Pi={uTime:{value:0},uResolution:{value:new ce(window.innerWidth,window.innerHeight)},uMouse:{value:new ce(.5,.5)},uScroll:{value:0}};const l=new Ti({vertexShader:wy,fragmentShader:Ay,uniforms:Pi,depthWrite:!1,depthTest:!1}),c=new Qn(a,l);i.add(c);const u=140,f=Array.from({length:u},()=>({x:0,y:0,vx:0,vy:0,scale:0,type:0,age:0,active:!1})),h=new Qs(.045,.045),d=new by().copy(h),g=new Float32Array(u),_=new Float32Array(u),p=new Tl(g,1),m=new Tl(_,1);d.setAttribute("aScale",p),d.setAttribute("aType",m);const y=new Ti({vertexShader:Cy,fragmentShader:Ry,transparent:!0,depthWrite:!1,depthTest:!1}),x=new Ty(d,y,u);x.instanceMatrix.setUsage(u0),s.add(x);const M={x:0,y:0},A={x:0,y:0};let w=0;window.addEventListener("mousemove",U=>{M.x=U.clientX/window.innerWidth*2-1,M.y=-(U.clientY/window.innerHeight)*2+1;const I=M.x-A.x,z=M.y-A.y;if(w=Math.sqrt(I*I+z*z),w>.005){const Y=Math.min(4,Math.floor(w*180)+1);let W=0;for(let B=0;B<u&&W<Y;B++)f[B].active||(f[B].active=!0,f[B].x=M.x+(Math.random()-.5)*.02,f[B].y=M.y+(Math.random()-.5)*.02,f[B].vx=-I*.15+(Math.random()-.5)*.008,f[B].vy=-z*.15+(Math.random()-.5)*.008,f[B].scale=1,f[B].type=Math.random()>.65?1:0,f[B].age=0,W++)}A.x=M.x,A.y=M.y,Pi&&Pi.uMouse.value.set(U.clientX/window.innerWidth,1-U.clientY/window.innerHeight)}),window.addEventListener("scroll",()=>{T()},{passive:!0});function T(){if(!Pi)return;const U=document.getElementById("view-logbook"),I=document.getElementById("view-week");let z=0;U&&U.classList.contains("on")?z=U.scrollTop:I&&I.classList.contains("on")&&(z=I.scrollTop),Pi.uScroll.value=z}function C(){e.setSize(window.innerWidth,window.innerHeight),n.setSize(window.innerWidth,window.innerHeight),Pi&&Pi.uResolution.value.set(window.innerWidth,window.innerHeight)}window.addEventListener("resize",C);const S=new An;let v=0;function P(){requestAnimationFrame(P),v++,Pi.uTime.value=v,T();for(let U=0;U<u;U++){const I=f[U];I.active?(I.x+=I.vx,I.y+=I.vy,I.vx*=.92,I.vy*=.92,I.scale-=.024,I.age++,I.scale<=0&&(I.active=!1,I.scale=0),S.position.set(I.x,I.y,0),S.updateMatrix(),x.setMatrixAt(U,S.matrix)):(S.position.set(9999,9999,9999),S.updateMatrix(),x.setMatrixAt(U,S.matrix),I.scale=0),g[U]=I.scale,_[U]=I.type}p.needsUpdate=!0,m.needsUpdate=!0,x.instanceMatrix.needsUpdate=!0,e.render(i,o),n.render(s,o)}P()}var nd="1.3.25";function hm(r,t,e){return Math.max(r,Math.min(t,e))}function Ly(r,t,e){return(1-e)*r+e*t}function Dy(r,t,e,n){return Ly(r,t,1-Math.exp(-e*n))}function Iy(r,t){return(r%t+t)%t}var Uy=class{constructor(){bt(this,"isRunning",!1);bt(this,"value",0);bt(this,"from",0);bt(this,"to",0);bt(this,"currentTime",0);bt(this,"lerp");bt(this,"duration");bt(this,"easing");bt(this,"onUpdate")}advance(r){var e;if(!this.isRunning)return;let t=!1;if(this.duration&&this.easing){this.currentTime+=r;const n=hm(0,this.currentTime/this.duration,1);t=n>=1;const i=t?1:this.easing(n);this.value=this.from+(this.to-this.from)*i}else this.lerp?(this.value=Dy(this.value,this.to,this.lerp*60,r),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,t=!0)):(this.value=this.to,t=!0);t&&this.stop(),(e=this.onUpdate)==null||e.call(this,this.value,t)}stop(){this.isRunning=!1}fromTo(r,t,{lerp:e,duration:n,easing:i,onStart:s,onUpdate:o}){this.from=this.value=r,this.to=t,this.lerp=e,this.duration=n,this.easing=i,this.currentTime=0,this.isRunning=!0,s==null||s(),this.onUpdate=o}};function Ny(r,t){let e;return function(...n){clearTimeout(e),e=setTimeout(()=>{e=void 0,r.apply(this,n)},t)}}var Oy=class{constructor(r,t,{autoResize:e=!0,debounce:n=250}={}){bt(this,"width",0);bt(this,"height",0);bt(this,"scrollHeight",0);bt(this,"scrollWidth",0);bt(this,"debouncedResize");bt(this,"wrapperResizeObserver");bt(this,"contentResizeObserver");bt(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});bt(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});bt(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=r,this.content=t,e&&(this.debouncedResize=Ny(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var r,t;(r=this.wrapperResizeObserver)==null||r.disconnect(),(t=this.contentResizeObserver)==null||t.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},fm=class{constructor(){bt(this,"events",{})}emit(r,...t){var n;const e=this.events[r]||[];for(let i=0,s=e.length;i<s;i++)(n=e[i])==null||n.call(e,...t)}on(r,t){return this.events[r]?this.events[r].push(t):this.events[r]=[t],()=>{var e;this.events[r]=(e=this.events[r])==null?void 0:e.filter(n=>t!==n)}}off(r,t){var e;this.events[r]=(e=this.events[r])==null?void 0:e.filter(n=>t!==n)}destroy(){this.events={}}};const Fy=100/6,ji={passive:!1};function id(r,t){return r===1?Fy:r===2?t:1}var By=class{constructor(r,t={wheelMultiplier:1,touchMultiplier:1}){bt(this,"touchStart",{x:0,y:0});bt(this,"lastDelta",{x:0,y:0});bt(this,"window",{width:0,height:0});bt(this,"emitter",new fm);bt(this,"onTouchStart",r=>{const{clientX:t,clientY:e}=r.targetTouches?r.targetTouches[0]:r;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:r})});bt(this,"onTouchMove",r=>{const{clientX:t,clientY:e}=r.targetTouches?r.targetTouches[0]:r,n=-(t-this.touchStart.x)*this.options.touchMultiplier,i=-(e-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:n,y:i},this.emitter.emit("scroll",{deltaX:n,deltaY:i,event:r})});bt(this,"onTouchEnd",r=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:r})});bt(this,"onWheel",r=>{let{deltaX:t,deltaY:e,deltaMode:n}=r;const i=id(n,this.window.width),s=id(n,this.window.height);t*=i,e*=s,t*=this.options.wheelMultiplier,e*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:t,deltaY:e,event:r})});bt(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=r,this.options=t,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,ji),this.element.addEventListener("touchstart",this.onTouchStart,ji),this.element.addEventListener("touchmove",this.onTouchMove,ji),this.element.addEventListener("touchend",this.onTouchEnd,ji)}on(r,t){return this.emitter.on(r,t)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,ji),this.element.removeEventListener("touchstart",this.onTouchStart,ji),this.element.removeEventListener("touchmove",this.onTouchMove,ji),this.element.removeEventListener("touchend",this.onTouchEnd,ji)}};const rd=r=>Math.min(1,1.001-2**(-10*r));var ky=class{constructor({wrapper:r=window,content:t=document.documentElement,eventsTarget:e=r,smoothWheel:n=!0,syncTouch:i=!1,syncTouchLerp:s=.075,touchInertiaExponent:o=1.7,duration:a,easing:l,lerp:c=.1,infinite:u=!1,orientation:f="vertical",gestureOrientation:h=f==="horizontal"?"both":"vertical",touchMultiplier:d=1,wheelMultiplier:g=1,autoResize:_=!0,prevent:p,virtualScroll:m,overscroll:y=!0,autoRaf:x=!1,anchors:M=!1,autoToggle:A=!1,allowNestedScroll:w=!1,__experimental__naiveDimensions:T=!1,naiveDimensions:C=T,stopInertiaOnNavigate:S=!1}={}){bt(this,"_isScrolling",!1);bt(this,"_isStopped",!1);bt(this,"_isLocked",!1);bt(this,"_preventNextNativeScrollEvent",!1);bt(this,"_resetVelocityTimeout",null);bt(this,"_rafId",null);bt(this,"_isDraggingSelection",!1);bt(this,"isTouching");bt(this,"isIos");bt(this,"time",0);bt(this,"userData",{});bt(this,"lastVelocity",0);bt(this,"velocity",0);bt(this,"direction",0);bt(this,"options");bt(this,"targetScroll");bt(this,"animatedScroll");bt(this,"animate",new Uy);bt(this,"emitter",new fm);bt(this,"dimensions");bt(this,"virtualScroll");bt(this,"onScrollEnd",r=>{r instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&r.stopPropagation()});bt(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});bt(this,"onTransitionEnd",r=>{var t;(t=r.propertyName)!=null&&t.includes("overflow")&&r.target===this.rootElement&&this.checkOverflow()});bt(this,"onClick",r=>{const t=r.composedPath().filter(n=>n instanceof HTMLAnchorElement&&n.href).map(n=>new URL(n.href)),e=new URL(window.location.href);if(this.options.anchors){const n=t.find(i=>e.host===i.host&&e.pathname===i.pathname&&i.hash);if(n){const i=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,s=decodeURIComponent(n.hash);this.scrollTo(s,i);return}}if(this.options.stopInertiaOnNavigate&&t.some(n=>e.host===n.host&&e.pathname!==n.pathname)){this.reset();return}});bt(this,"onPointerDown",r=>{r.button===1&&this.reset()});bt(this,"onVirtualScroll",r=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(r)===!1)return;const{deltaX:t,deltaY:e,event:n}=r;if(this.emitter.emit("virtual-scroll",{deltaX:t,deltaY:e,event:n}),n.ctrlKey||n.lenisStopPropagation)return;const i=n.type.includes("touch"),s=n.type.includes("wheel");if(i&&this.isIos&&(n.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(n)),this._isDraggingSelection)){n.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=n.type==="touchstart"||n.type==="touchmove";const o=t===0&&e===0;if(this.options.syncTouch&&i&&n.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}const a=this.options.gestureOrientation==="vertical"&&e===0||this.options.gestureOrientation==="horizontal"&&t===0;if(o||a)return;let l=n.composedPath();l=l.slice(0,l.indexOf(this.rootElement));const c=this.options.prevent,u=Math.abs(t)>=Math.abs(e)?"horizontal":"vertical";if(l.find(g=>{var _,p,m,y,x;return g instanceof HTMLElement&&(typeof c=="function"&&(c==null?void 0:c(g))||((_=g.hasAttribute)==null?void 0:_.call(g,"data-lenis-prevent"))||u==="vertical"&&((p=g.hasAttribute)==null?void 0:p.call(g,"data-lenis-prevent-vertical"))||u==="horizontal"&&((m=g.hasAttribute)==null?void 0:m.call(g,"data-lenis-prevent-horizontal"))||i&&((y=g.hasAttribute)==null?void 0:y.call(g,"data-lenis-prevent-touch"))||s&&((x=g.hasAttribute)==null?void 0:x.call(g,"data-lenis-prevent-wheel"))||this.options.allowNestedScroll&&this.hasNestedScroll(g,{deltaX:t,deltaY:e}))}))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let f=e;this.options.gestureOrientation==="both"?f=Math.abs(e)>Math.abs(t)?e:t:this.options.gestureOrientation==="horizontal"&&(f=t),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&e>0||this.animatedScroll===this.limit&&e<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();const h=i&&this.options.syncTouch,d=i&&n.type==="touchend";d&&(f=Math.sign(f)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+f,{programmatic:!1,...h?{lerp:d?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});bt(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const r=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-r,this.direction=Math.sign(this.animatedScroll-r),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});bt(this,"raf",r=>{const t=r-(this.time||r);this.time=r,this.animate.advance(t*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=nd,window.lenis||(window.lenis={}),window.lenis.version=nd,f==="horizontal"&&(window.lenis.horizontal=!0),i===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!r||r===document.documentElement)&&(r=window),typeof a=="number"&&typeof l!="function"?l=rd:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:r,content:t,eventsTarget:e,smoothWheel:n,syncTouch:i,syncTouchLerp:s,touchInertiaExponent:o,duration:a,easing:l,lerp:c,infinite:u,gestureOrientation:h,orientation:f,touchMultiplier:d,wheelMultiplier:g,autoResize:_,prevent:p,virtualScroll:m,overscroll:y,autoRaf:x,anchors:M,autoToggle:A,allowNestedScroll:w,naiveDimensions:C,stopInertiaOnNavigate:S},this.dimensions=new Oy(r,t,{autoResize:_}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new By(e,{touchMultiplier:d,wheelMultiplier:g}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(r,t){return this.emitter.on(r,t)}off(r,t){return this.emitter.off(r,t)}get overflow(){const r=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[r]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(r){this.isHorizontal?this.options.wrapper.scrollTo({left:r,behavior:"instant"}):this.options.wrapper.scrollTo({top:r,behavior:"instant"})}isTouchOnSelectionHandle(r){const t=window.getSelection();if(!t||t.isCollapsed||t.rangeCount===0)return!1;const e=r.targetTouches[0]??r.changedTouches[0];if(!e)return!1;const n=t.getRangeAt(0).getClientRects();if(n.length===0)return!1;const i=n[0],s=n[n.length-1],o=40,a=Math.hypot(e.clientX-i.left,e.clientY-i.top)<=o,l=Math.hypot(e.clientX-s.right,e.clientY-s.bottom)<=o;return a||l}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(r,{offset:t=0,immediate:e=!1,lock:n=!1,programmatic:i=!0,lerp:s=i?this.options.lerp:void 0,duration:o=i?this.options.duration:void 0,easing:a=i?this.options.easing:void 0,onStart:l,onComplete:c,force:u=!1,userData:f}={}){if((this.isStopped||this.isLocked)&&!u)return;let h=r,d=t;if(typeof h=="string"&&["top","left","start","#"].includes(h))h=0;else if(typeof h=="string"&&["bottom","right","end"].includes(h))h=this.limit;else{let g=null;if(typeof h=="string"?(g=h.startsWith("#")?document.getElementById(h.slice(1)):document.querySelector(h),g||(h==="#top"?h=0:console.warn("Lenis: Target not found",h))):h instanceof HTMLElement&&(h!=null&&h.nodeType)&&(g=h),g){if(this.options.wrapper!==window){const M=this.rootElement.getBoundingClientRect();d-=this.isHorizontal?M.left:M.top}const _=g.getBoundingClientRect(),p=getComputedStyle(g),m=this.isHorizontal?Number.parseFloat(p.scrollMarginLeft):Number.parseFloat(p.scrollMarginTop),y=getComputedStyle(this.rootElement),x=this.isHorizontal?Number.parseFloat(y.scrollPaddingLeft):Number.parseFloat(y.scrollPaddingTop);h=(this.isHorizontal?_.left:_.top)+this.animatedScroll-(Number.isNaN(m)?0:m)-(Number.isNaN(x)?0:x)}}if(typeof h=="number"){if(h+=d,this.options.infinite){if(i){this.targetScroll=this.animatedScroll=this.scroll;const g=h-this.animatedScroll;g>this.limit/2?h-=this.limit:g<-this.limit/2&&(h+=this.limit)}}else h=hm(0,h,this.limit);if(h===this.targetScroll){l==null||l(this),c==null||c(this);return}if(this.userData=f??{},e){this.animatedScroll=this.targetScroll=h,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}i||(this.targetScroll=h),typeof o=="number"&&typeof a!="function"?a=rd:typeof a=="function"&&typeof o!="number"&&(o=1),this.animate.fromTo(this.animatedScroll,h,{duration:o,easing:a,lerp:s,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",l==null||l(this)},onUpdate:(g,_)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=g-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=g,this.setScroll(this.scroll),i&&(this.targetScroll=g),_||this.emit(),_&&(this.reset(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(r,{deltaX:t,deltaY:e}){const n=Date.now();r._lenis||(r._lenis={});const i=r._lenis;let s,o,a,l,c,u,f,h,d,g;if(n-(i.time??0)>2e3){i.time=Date.now();const w=window.getComputedStyle(r);if(i.computedStyle=w,s=["auto","overlay","scroll"].includes(w.overflowX),o=["auto","overlay","scroll"].includes(w.overflowY),c=["auto"].includes(w.overscrollBehaviorX),u=["auto"].includes(w.overscrollBehaviorY),i.hasOverflowX=s,i.hasOverflowY=o,!(s||o))return!1;f=r.scrollWidth,h=r.scrollHeight,d=r.clientWidth,g=r.clientHeight,a=f>d,l=h>g,i.isScrollableX=a,i.isScrollableY=l,i.scrollWidth=f,i.scrollHeight=h,i.clientWidth=d,i.clientHeight=g,i.hasOverscrollBehaviorX=c,i.hasOverscrollBehaviorY=u}else a=i.isScrollableX,l=i.isScrollableY,s=i.hasOverflowX,o=i.hasOverflowY,f=i.scrollWidth,h=i.scrollHeight,d=i.clientWidth,g=i.clientHeight,c=i.hasOverscrollBehaviorX,u=i.hasOverscrollBehaviorY;if(!(s&&a||o&&l))return!1;const _=Math.abs(t)>=Math.abs(e)?"horizontal":"vertical";let p,m,y,x,M,A;if(_==="horizontal")p=Math.round(r.scrollLeft),m=f-d,y=t,x=s,M=a,A=c;else if(_==="vertical")p=Math.round(r.scrollTop),m=h-g,y=e,x=o,M=l,A=u;else return!1;return!A&&(p>=m||p<=0)?!0:(y>0?p<m:p>0)&&x&&M}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const r=this.options.wrapper;return this.isHorizontal?r.scrollX??r.scrollLeft:r.scrollY??r.scrollTop}get scroll(){return this.options.infinite?Iy(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(r){this._isScrolling!==r&&(this._isScrolling=r,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(r){this._isStopped!==r&&(this._isStopped=r,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(r){this._isLocked!==r&&(this._isLocked=r,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let r="lenis";return this.options.autoToggle&&(r+=" lenis-autoToggle"),this.isStopped&&(r+=" lenis-stopped"),this.isLocked&&(r+=" lenis-locked"),this.isScrolling&&(r+=" lenis-scrolling"),this.isScrolling==="smooth"&&(r+=" lenis-smooth"),r}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(r=>{this.rootElement.classList.add(r)})}cleanUpClassName(){for(const r of Array.from(this.rootElement.classList))(r==="lenis"||r.startsWith("lenis-"))&&this.rootElement.classList.remove(r)}};Me.registerPlugin(jt);let Va=null;function zy(r){return Va=new ky({wrapper:r,content:r,duration:1.1,easing:t=>Math.min(1,1.001-Math.pow(2,-10*t)),direction:"vertical",smooth:!0,smoothTouch:!1,touchMultiplier:2}),Va.on("scroll",jt.update),Me.ticker.add(t=>Va.raf(t*1e3)),Me.ticker.lagSmoothing(0),Va}function Hy(r,t=0){return Me.set(r,{opacity:0,y:28,scale:.96}),Me.to(r,{opacity:1,y:0,scale:1,duration:.7,delay:t,ease:"back.out(1.4)",onComplete(){r.classList.add("shown")}})}function Vy(r){Me.set(r,{opacity:0,scale:.82,y:"-50%",yPercent:0}),Me.to(r,{opacity:1,scale:1,duration:.65,ease:"elastic.out(1, 0.7)"})}function Gy(r,t){Me.to(r,{opacity:0,scale:.9,duration:.22,ease:"power2.in",onComplete:t})}function dm(r,t){return r.innerHTML="",t.split(" ").map((i,s)=>{const o=document.createElement("span");o.className="clip-wrap",o.style.cssText="display:inline-block;overflow:hidden;vertical-align:bottom;";const a=document.createElement("span");return a.className="clip-inner",a.textContent=(s>0?" ":"")+i,a.style.cssText="display:inline-block;transform:translateY(100%);",o.appendChild(a),r.appendChild(o),a})}function pm(r,{delay:t=0,stagger:e=.06}={}){return Me.to(r,{y:"0%",duration:.52,delay:t,stagger:e,ease:"power3.out"})}function Wy(r,t,e=.4){if(!t||!t.length)return;Me.matchMedia().add("(min-width: 768px)",()=>{const i=()=>{const s=r.scrollTop;t.forEach(o=>{Me.set(o,{y:s*e*-1})})};return r.addEventListener("scroll",i,{passive:!0}),()=>{r.removeEventListener("scroll",i),t.forEach(s=>{Me.set(s,{clearProps:"y"})})}})}function Xy(r){if(r.classList.contains("cat-obligation"))return;Me.set(r,{transformPerspective:1e3,transformStyle:"preserve-3d"});const e=i=>{const s=r.getBoundingClientRect(),o=i.clientX-s.left-s.width/2,a=i.clientY-s.top-s.height/2,l=o/(s.width/2),c=a/(s.height/2);Me.to(r,{rotateY:l*8,rotateX:-c*8,z:26,boxShadow:"0 28px 60px rgba(0, 0, 0, 0.08), 0 12px 24px rgba(0, 0, 0, 0.04)",duration:.25,ease:"power2.out",overwrite:"auto"})},n=()=>{Me.to(r,{rotateY:0,rotateX:0,z:0,boxShadow:"0 12px 32px rgba(0, 0, 0, 0.04), 0 2px 6px rgba(0, 0, 0, 0.02)",duration:.45,ease:"power2.out",overwrite:"auto"})};r.addEventListener("mousemove",e),r.addEventListener("mouseleave",n)}function Yy(r){document.querySelectorAll(".bento-cell").forEach(e=>{e!==r&&!e.classList.contains("cat-obligation")&&Me.fromTo(e,{x:0,y:0,rotateZ:0},{x:()=>Me.utils.random(-7,7),y:()=>Me.utils.random(-5,5),rotateZ:()=>Me.utils.random(-1.2,1.2),duration:.05,repeat:7,yoyo:!0,ease:"sine.inOut",onComplete:()=>{Me.to(e,{x:0,y:0,rotateZ:0,duration:.25,ease:"power2.out"})}})})}function qy(r){Me.fromTo(r,{boxShadow:"0 0 0px rgba(129,201,149,0)"},{boxShadow:"0 0 20px rgba(52,168,83,0.45)",duration:.3,yoyo:!0,repeat:1,ease:"power2.out"})}Me.registerPlugin(jt);Py();let ci=null;function mh(r){ci&&(ci.destroy(),ci=null),r&&(ci=zy(r))}let Pu=0,mi=null,ko=0;function mm(){if(ko===0){const r=document.getElementById("view-logbook"),t=document.getElementById("view-week");t&&t.classList.contains("on")?mi=t:r&&r.classList.contains("on")&&(mi=r),mi&&(Pu=mi.scrollTop,mi.classList.add("scroll-locked"),mi.scrollTop=Pu,ci&&ci.stop())}ko++}function _m(){ko=Math.max(0,ko-1),ko===0&&mi&&(mi.classList.remove("scroll-locked"),mi.scrollTop=Pu,ci&&ci.start(),mi=null)}function Gi(r,t){const e=typeof r=="string"?document.getElementById(r):r;if(!e)return;let n=0;e.addEventListener("touchstart",i=>{n=Date.now(),t(i)},{passive:!0}),e.addEventListener("click",i=>{Date.now()-n<600||t(i)})}let sl=null;const $y={error:"⚠️",success:"✅",info:"ℹ️",confirm:"🗑️",location:"📍",gps:"📡"},to=document.getElementById("pop");function ws({type:r="info",icon:t,title:e,message:n,buttons:i}){return mm(),new Promise(s=>{sl=s,document.getElementById("pop-icon").textContent=t||$y[r]||"ℹ️",document.getElementById("pop-title").textContent=e||"",document.getElementById("pop-msg").textContent=n||"";const o=document.getElementById("pop-acts");o.innerHTML="",(i||[{label:"Got it",value:!0,primary:!0}]).forEach(a=>{const l=document.createElement("button");l.textContent=a.label,l.className="pb "+(a.primary!==!1?"pb-p":"pb-s"),l.onclick=()=>gm(a.value),o.appendChild(l)}),to.classList.remove("off"),to.classList.add("on")})}function gm(r){to.classList.add("off"),setTimeout(()=>{to.classList.remove("on","off"),_m(),sl&&(sl(r),sl=null)},220)}to.addEventListener("click",r=>{r.target===to&&gm(!1)});let sd;const vo=document.getElementById("toast");function bl(r,t="i"){clearTimeout(sd),vo.textContent=r,vo.className="t"+t,vo.offsetHeight,vo.classList.add("on"),sd=setTimeout(()=>vo.classList.remove("on"),4400)}const Le=r=>new Promise(t=>setTimeout(t,r));let Zn=!1;async function Ky(r,t,e=30){r.textContent="";for(const n of t){if(!Zn)return;r.textContent+=n,await Le(e+Math.random()*12)}}const _h=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],Zy={Sun:"reset",Mon:"ssc",Tue:"ssc",Wed:"upsc",Thu:"ssc",Fri:"ssc",Sat:"upsc"},vm={ssc:{label:"SSC CHSL Day",blocks:[{id:"settle",time:"10:40–11:00",sh:10,sm:40,eh:11,em:0,title:"Settle In",items:["Phone left in bag / airplane mode","Reviewed yesterday's error log"]},{id:"drill",time:"11:00–1:00",sh:11,sm:0,eh:13,em:0,title:"SSC Sectional",items:["Completed a timed sectional (quant / reasoning / English / GK)"]},{id:"mock",time:"1:30–3:00",sh:13,sm:30,eh:15,em:0,title:"Mock / Drill",items:["Sat a timed mock or focused drill","Logged the score honestly, no matter what it was"]},{id:"review",time:"3:00–3:30",sh:15,sm:0,eh:15,em:30,title:"Error Log",items:["Wrote down what went wrong and why — no lecture rewatching"]},{id:"hindu",time:"3:30–4:30",sh:15,sm:30,eh:16,em:30,title:"The Hindu",items:["Read and took notes myself — not the YouTube summary"]},{id:"tuition",time:"5:00–7:00",sh:17,sm:0,eh:19,em:0,title:"Tuition",items:["Taught the 5–7 pm class"]},{id:"evening",time:"7:00–9:00",sh:19,sm:0,eh:21,em:0,title:"Evening Study",items:["If new GS topic: watched lecture with notes","If not new: revised from own notes (no passive rewatch)"]}]},upsc:{label:"UPSC + Anthropology Day",blocks:[{id:"settle",time:"10:40–11:00",sh:10,sm:40,eh:11,em:0,title:"Settle In",items:["Phone left in bag / airplane mode"]},{id:"anthro",time:"11:00–1:00",sh:11,sm:0,eh:13,em:0,title:"Anthropology",items:["Watched a genuinely new topic and took notes"]},{id:"answer",time:"1:30–3:30",sh:13,sm:30,eh:15,em:30,title:"Answer Writing",items:["Handwritten timed answer — the part I usually avoid"]},{id:"gsrev",time:"3:30–4:30",sh:15,sm:30,eh:16,em:30,title:"GS Revision / PYQs",items:["Revised from own notes or attempted PYQs — not fresh lectures"]},{id:"tuition",time:"5:00–7:00",sh:17,sm:0,eh:19,em:0,title:"Tuition",items:["Taught the 5–7 pm class"]},{id:"evening",time:"7:00–9:00",sh:19,sm:0,eh:21,em:0,title:"Optional / Rest",items:["Watched only if genuinely new, else free study or real rest"]}]},reset:{label:"Reset Day",blocks:[{id:"weekly",time:"Anytime",sh:0,sm:0,eh:23,em:59,title:"Weekly Review",items:["Looked honestly at watched-vs-practiced log","Looked at all mock scores from the week","Picked 1–2 things to adjust next week"]},{id:"rest",time:"Anytime",sh:0,sm:0,eh:23,em:59,title:"Actual Rest",items:["Did something restorative — walk, sleep, a real conversation"]}]}},od={lat:24.159212136846484,lng:83.80698321929917},jy={mock:{cat:"confrontation",label:"Mock"},drill:{cat:"confrontation",label:"Sectional"},review:{cat:"admin",label:"Admin"},hindu:{cat:"input",label:"Input"},evening:{cat:"input",label:"Input"},tuition:{cat:"obligation",label:"Fixed"},settle:{cat:"admin",label:"Admin"},answer:{cat:"confrontation",label:"Answer"},anthro:{cat:"input",label:"Input"},gsrev:{cat:"input",label:"Input"},weekly:{cat:null,label:"Review"},rest:{cat:null,label:"Rest"}};function Jy(r,t,e,n){const s=(e-r)*Math.PI/180,o=(n-t)*Math.PI/180,a=Math.sin(s/2)**2+Math.cos(r*Math.PI/180)*Math.cos(e*Math.PI/180)*Math.sin(o/2)**2;return 6371*2*Math.atan2(Math.sqrt(a),Math.sqrt(1-a))}function _i(r){return`${r.getFullYear()}-${String(r.getMonth()+1).padStart(2,"0")}-${String(r.getDate()).padStart(2,"0")}`}function Qy(r){const t=new Date(r);return t.setDate(r.getDate()+(r.getDay()===0?-6:1)-r.getDay()),t}function xm(){const r=Qy(new Date);return Array.from({length:7},(t,e)=>{const n=new Date(r);return n.setDate(r.getDate()+e),n})}function Lu(r){return Zy[_h[r.getDay()]]}function Sm(r){return"logbook:"+r}function Fn(){return{checks:{},mockScore:"",errorNote:""}}function Mm(r){return vm[r].blocks.reduce((t,e)=>t+e.items.length,0)}function ym(r){return Object.values(r.checks||{}).filter(Boolean).length}function tE(r){const t=new Date().getHours()*60+new Date().getMinutes();return r.find(e=>t>=e.sh*60+e.sm&&t<e.eh*60+e.em)||null}const Em="https://script.google.com/macros/s/AKfycbxaeSo1IkiIa9Ti_-RGgDAi4K0Clbs20DkgKAi4R8-tkUHlPv1AWugp4TSq4Z3zgxYccw/exec",Je={},ad={};async function Tm(r){if(Je[r])return Je[r];try{const e=await(await fetch(`${Em}?key=${encodeURIComponent(Sm(r))}`)).json();Je[r]=e&&e.value?e.value:Fn()}catch{Je[r]=Fn()}return Je[r]}function ra(r,t){Je[r]=t,clearTimeout(ad[r]);const e=r===Nr,n=document.getElementById("svMk"),i=document.getElementById("svRv");n&&(n.disabled=!0,n.textContent="Saving..."),i&&(i.disabled=!0,i.textContent="Saving..."),e&&document.querySelectorAll(".bento-cell").forEach(s=>s.classList.add("saving")),ad[r]=setTimeout(async()=>{try{const o=await(await fetch(Em,{method:"POST",mode:"cors",headers:{"Content-Type":"text/plain;charset=utf-8"},body:JSON.stringify({key:Sm(r),value:t})})).json();if(o&&o.status==="success")bl("Synced to Sheets ✓","s");else throw new Error("sync failed")}catch{bl("Sync failed — try again","e")}finally{n&&(n.disabled=!1,n.textContent="Save"),i&&(i.disabled=!1,i.textContent="Save"),e&&document.querySelectorAll(".bento-cell").forEach(s=>s.classList.remove("saving"))}},400)}let Ur=null,ol=null,Nr=null,Ls=!0;const bm=document.getElementById("view-cover"),eo=document.getElementById("view-logbook"),jo=document.getElementById("view-week"),Du=document.getElementById("topNav");function Ul(r){Du.classList.add("show"),Du.querySelectorAll(".tnb").forEach(t=>t.classList.remove("on")),document.getElementById(r).classList.add("on")}function eE(){Du.classList.remove("show")}function nE(){bm.classList.add("away"),eo.classList.add("on"),jo.classList.remove("on"),Ul("btnToday"),mh(eo)}function iE(){eo.classList.remove("on"),jo.classList.remove("on"),setTimeout(()=>bm.classList.remove("away"),60),eE(),oo(),ci&&(ci.destroy(),ci=null)}function rE(){jo.classList.add("on"),Ul("btnWeek"),mh(jo)}function wm(){jo.classList.remove("on"),Ul("btnToday"),mh(eo)}const gh=document.getElementById("bmBd"),sr=document.getElementById("bm"),ld=document.getElementById("bmTtl"),Ga=document.getElementById("bmTime"),no=document.getElementById("bmBody");function sE(){Zn=!0,mm(),gh.classList.add("on"),sr.style.opacity="0",sr.style.pointerEvents="auto",sr.classList.add("on"),Vy(sr)}function oo(){Zn=!1,ol=null,sr.style.pointerEvents="none",Gy(sr,()=>{sr.classList.remove("on"),gh.classList.remove("on"),sr.removeAttribute("style"),_m()})}Gi(gh,oo);Gi("bmX",oo);async function cd(r,t,e,n){if(ol=r.id,Nr=e,ld.textContent="",Ga.textContent="",Ga.style.opacity="0",no.innerHTML="",sE(),await Le(420),!Zn||ol!==r.id)return;const i=dm(ld,r.title||"");if(pm(i,{stagger:.06}),await Le(r.title.split(" ").length*80+80),!!Zn){if(Ga.textContent=r.time||"",Ga.style.opacity="1",await Le(100),r.id==="__checkin"){await oE(t,e);return}for(let s=0;s<r.items.length;s++){if(!Zn||ol!==r.id)return;await Le(70);const o=r.id+"_"+s,a=!!(t.checks&&t.checks[o]),l=document.createElement("div");l.className="bm-row"+(a?" chkd":"");const c=document.createElement("div");c.className="checkbox"+(a?" ck":"");const u=document.createElement("div");if(u.className="bm-row-txt",l.appendChild(c),l.appendChild(u),no.appendChild(l),l.offsetHeight,l.style.transition="opacity .3s ease, transform .32s ease",l.style.opacity="1",l.style.transform="none",await Ky(u,r.items[s],18),!Zn)return;const f=s;l.addEventListener("click",()=>{const h=Je[e]||Fn();h.checks=h.checks||{},h.checks[o]=!h.checks[o],ra(e,h),c.classList.toggle("ck",!!h.checks[o]),l.classList.toggle("chkd",!!h.checks[o]),cE(r.id,f,!!h.checks[o],r.items.length,h)})}r.id==="mock"&&Zn&&await aE(t,e),r.id==="review"&&Zn&&await lE(t,e)}}async function oE(r,t){const e=r.checkin,n=document.createElement("div");if(n.className="bm-ci-st",e?n.innerHTML=`Checked in at ${e.time} — <span class="${e.verified?"bm-verified":"bm-unverified"}">${e.note}</span>`:n.textContent="Not checked in yet today.",no.appendChild(n),await Le(60),n.classList.add("vis"),await Le(280),!Zn)return;const i=document.createElement("button");i.className="sv-btn",i.textContent=e?"Check in again":"I'm at the library",i.style.cssText="opacity:0;transform:translateY(8px)",no.appendChild(i),await Le(50),i.style.transition="opacity .35s ease, transform .35s ease",i.style.opacity="1",i.style.transform="none",i.addEventListener("click",async()=>{if(!navigator.geolocation){await ws({type:"gps",icon:"📡",title:"Not Supported",message:"Geolocation not supported."});return}const s=i.textContent;i.disabled=!0,i.textContent="Locating…";const o=new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"});try{const a=await new Promise((c,u)=>navigator.geolocation.getCurrentPosition(c,u,{timeout:12e3,enableHighAccuracy:!0,maximumAge:0})),l=Jy(a.coords.latitude,a.coords.longitude,od.lat,od.lng);if(l<=.15){const c=Je[t]||Fn();c.checkin={time:o,verified:!0,note:"location verified ✓"},ra(t,c),qy(document.getElementById("ciStrip")),bl("Check-in recorded ✓","s"),oo(),io()}else i.disabled=!1,i.textContent=s,await ws({type:"location",icon:"📍",title:"Too Far Away",message:`You're ${Math.round(l*1e3)} m from the library.
Check-in only works on-site.`})}catch(a){i.disabled=!1,i.textContent=s,a.code===1?await ws({type:"error",icon:"🔒",title:"Permission Denied",message:`Location blocked.

Tap the lock icon → Site settings → Location → Allow, then retry.`}):a.code===2?await ws({type:"error",icon:"📡",title:"GPS Unavailable",message:"No GPS signal. Step outside and retry."}):await ws({type:"error",icon:"⏱",title:"Timed Out",message:"Location timed out. Try again in an open area."})}})}async function aE(r,t){if(await Le(100),!Zn)return;const e=document.createElement("div");e.className="bm-field",e.innerHTML=`<label>Mock / sectional score — just log it</label>
    <input type="text" id="mkIn" value="${(r.mockScore||"").replace(/"/g,"&quot;")}" placeholder="e.g. 42/50, or how it felt"/>
    <button class="sv-btn" id="svMk">Save</button><span class="sv-st" id="mkSt"></span>`,no.appendChild(e),await Le(50),e.classList.add("vis"),document.getElementById("svMk").onclick=()=>{const n=Je[t]||Fn();n.mockScore=document.getElementById("mkIn").value,ra(t,n);const i=document.getElementById("mkSt");i&&(i.textContent="Saved ✓",setTimeout(()=>i.textContent="",2e3))}}async function lE(r,t){if(await Le(100),!Zn)return;const e=document.createElement("div");e.className="bm-field",e.innerHTML=`<label>What went wrong, in your own words</label>
    <textarea id="rvIn" placeholder="e.g. ran out of time on English">${r.errorNote||""}</textarea>
    <button class="sv-btn" id="svRv">Save</button><span class="sv-st" id="rvSt"></span>`,no.appendChild(e),await Le(50),e.classList.add("vis"),document.getElementById("svRv").onclick=()=>{const n=Je[t]||Fn();n.errorNote=document.getElementById("rvIn").value,ra(t,n);const i=document.getElementById("rvSt");i&&(i.textContent="Saved ✓",setTimeout(()=>i.textContent="",2e3))}}function cE(r,t,e,n,i,s){const o=document.querySelector(`[data-id="${r}"]`);if(!o)return;const a=o.querySelectorAll(".pip");a[t]&&a[t].classList.toggle("dn",e),Array.from({length:n}).every((c,u)=>!!(i.checks&&i.checks[r+"_"+u]))&&(o.classList.add("done-flash"),setTimeout(()=>o.classList.remove("done-flash"),800),bl("Section complete ✓","s")),Am(i)}function Am(r){const t=document.getElementById("ciStrip"),e=document.getElementById("ciStripText");if(!t||!e)return;const n=r&&r.checkin;n&&n.verified?(t.classList.add("verified"),e.textContent=`Library · Checked in at ${n.time}`):(t.classList.remove("verified"),e.textContent="Library · Not checked in yet")}const uE=210,hE=3,fE={ssc:"bento-ssc",upsc:"bento-upsc",reset:"bento-reset"};function dE(r,t){return new Promise(e=>{r.innerHTML=`
      <div id="logTerminal">
        <div class="term-header">
          <span class="term-dot red"></span>
          <span class="term-dot yellow"></span>
          <span class="term-dot green"></span>
          <span class="term-title">antigravity // sheets-sync-console</span>
          <span id="termTimer" class="term-timer">0.00s</span>
        </div>
        <div id="termBody"></div>
      </div>
    `;const n=document.getElementById("termBody"),i=document.getElementById("termTimer"),s=Date.now();let o=setInterval(()=>{const f=((Date.now()-s)/1e3).toFixed(2);i&&(i.textContent=f+"s")},10);const a=[{text:"⏳ [SYSTEM] Booting Antigravity Sheets Sync V4.2.1...",type:"sys"},{text:"📡 [RESOLVE] Connecting to Google API gateways...",type:"sys"},{text:"🔍 [RESOLVE] Endpoint target: ravi-0143/Logbook backend...",type:"sys"},{text:"⚙️  [PARAMS] Routing payload checks: light mode active...",type:"sys"},{text:"📡 [FETCH] GET secure Google Web App endpoint...",type:"cmd"},{text:"🔑 [HEADERS] Content-Type: text/plain;charset=utf-8",type:"sys"},{text:"🔄 [REDIRECT] HTTP/1.1 302 Redirecting secure doc token...",type:"sys"},{text:"📂 [DATASTORE] Google Sheet database lock: verified...",type:"sys"},{text:"📥 [RESPONSE] HTTP/1.1 200 OK - Secure stream established",type:"ok"},{text:"📄 [DESERIALIZE] Parsing sheets tables (7 daily schedules parsed)...",type:"sys"},{text:"⚡ [COMPILER] Hydrating memory cache for logbook dates...",type:"sys"}];let l=0,c=setInterval(()=>{l<a.length?(u(a[l].text,a[l].type),l++):clearInterval(c)},100);function u(f,h){if(!n)return;const d=document.createElement("div");d.className=`term-line ${h||""}`,d.textContent=f,n.appendChild(d),n.scrollTop=n.scrollHeight}t.then(()=>{clearInterval(c),clearInterval(o);const f=((Date.now()-s)/1e3).toFixed(2);for(i&&(i.textContent=f+"s");l<a.length;)u(a[l].text,a[l].type),l++;setTimeout(()=>{u("✓ [SUCCESS] Sheets data synchronized in "+f+"s","ok"),setTimeout(()=>{u("🖥️ [COMPILER] Building bento grid layout matrix...","cmd"),setTimeout(()=>{u("🔌 [DISCONNECT] Sync console offline. Decoupling debug overlay...","sys"),setTimeout(()=>{const h=document.getElementById("logTerminal");h?Me.to(h,{opacity:0,scale:.96,y:15,duration:.35,ease:"power2.in",onComplete:e}):e()},380)},120)},120)},120)}).catch(f=>{clearInterval(c),clearInterval(o),u("❌ [ERROR] Connection failed: "+f.message,"sys"),setTimeout(e,1500)})})}async function io(r){const t=xm(),e=new Date,n=_i(e);r&&(Ur=r),Ur||(Ur=n);const i=document.getElementById("bentoGrid"),s=t.some(w=>!Je[_i(w)]),o=Promise.all(t.map(w=>Tm(_i(w))));s&&i?await dE(i,o):await o;const a=t.find(w=>_i(w)===Ur)||e,l=_i(a),c=Lu(a),u=vm[c],f=Je[l]||Fn(),h=l===n;Nr=l,document.getElementById("lbDate").textContent=a.toLocaleDateString([],{weekday:"short",month:"short",day:"numeric"});const d=document.getElementById("dayNav");d.innerHTML="",t.forEach(w=>{const T=_i(w),C=Je[T]||Fn(),S=Lu(w),v=Mm(S),P=ym(C),U=!v||!P?"":P>=v?"full":"part",I=document.createElement("button");I.dataset.day=T,T===l&&I.classList.add("on"),I.innerHTML=`${_h[w.getDay()]}<span class="dot ${U}"></span>`,Gi(I,()=>{Ur=T,Ls=!0,io()}),d.appendChild(I)}),document.getElementById("dayTag").innerHTML=`<span class="tag ${c}">${u.label}</span>`,Am(f);const g=document.getElementById("ciStrip"),_=g.cloneNode(!0);g.parentNode.replaceChild(_,g);const p={id:"__checkin",title:"Library Check-in",time:"GPS · on-site only",items:["check-in"]};Gi(_,()=>{const w=Je[Nr]||Fn();cd(p,w,Nr)}),i.innerHTML="",i.className=fE[c]||"bento-ssc";const m=h?tE(u.blocks):null,y=u.blocks.map(w=>{const T=m&&m.id===w.id,C=Je[l]||Fn(),S=jy[w.id]||{cat:"admin",label:"Task"},v=S.cat==="obligation",P=c==="reset",U=w.items.map((Y,W)=>`<div class="pip ${C.checks&&C.checks[w.id+"_"+W]?"dn":""}"></div>`).join(""),I=document.createElement("div");I.dataset.id=w.id;let z=P?"":S.cat?`cat-${S.cat}`:"";return I.className=`bento-cell ${z}${T?" cur-card":""}`,I.style.transition="none",v?I.innerHTML=`
        <div class="cell-top" style="margin-bottom:0;align-items:center">
          <div class="cell-ttl" id="ct-${w.id}"></div>
          <div class="cell-cat-pill">${S.label}</div>
        </div>
        <div class="cell-pips" style="opacity:0;padding-top:0;margin-left:12px">${U}</div>`:I.innerHTML=`
        <div class="cell-top">
          <div class="cell-ttl" id="ct-${w.id}"></div>
          <div class="cell-cat-pill">${S.label}</div>
          <div class="cell-chev">›</div>
        </div>
        <div class="cell-pips" style="opacity:0">${U}</div>
        <div class="cell-time" id="ctime-${w.id}"></div>`,I.addEventListener("click",()=>{Yy(I);const Y=Je[Nr]||Fn();cd(w,Y,Nr)}),Xy(I),i.appendChild(I),{blk:w,card:I,textRevealed:!1}}),x=Array.from(i.querySelectorAll(".cat-admin"));x.length&&Wy(eo,x,.35);const M=document.getElementById("rstDay");if(M){const w=M.cloneNode(!0);M.parentNode.replaceChild(w,M),w.addEventListener("click",async()=>{await ws({type:"confirm",icon:"🗑️",title:"Clear today's checks?",message:a.toLocaleDateString([],{weekday:"long"})+" — all checkboxes reset.",buttons:[{label:"Cancel",value:!1,primary:!1},{label:"Clear",value:!0}]})&&(ra(l,Fn()),io())})}const A=Ls?180:0;y.forEach(({card:w,blk:T},C)=>{setTimeout(()=>{Hy(w,0);const S=C-hE;S>=0&&!y[S].textRevealed&&(y[S].textRevealed=!0,ud(y[S])),C===y.length-1&&y.filter(v=>!v.textRevealed).forEach((v,P)=>{v.textRevealed=!0,setTimeout(()=>ud(v),P*170+80)})},A+C*uE)}),Ls&&(Ls=!1)}async function ud({blk:r,card:t}){const e=document.getElementById("ct-"+r.id),n=document.getElementById("ctime-"+r.id),i=t.querySelector(".cell-pips"),s=t.querySelector(".cell-chev");if(!e)return;const o=dm(e,r.title);if(pm(o,{stagger:.07}),await Le(r.title.split(" ").length*80+100),i&&(i.style.transition="opacity .35s ease",i.style.opacity="1"),n&&r.time){await Le(60);for(const a of r.time)n.textContent+=a,await Le(20)}s&&(s.style.transition="opacity .32s ease",s.style.opacity="1")}async function pE(){const r=xm();await Promise.all(r.map(_=>Tm(_i(_))));const t=_i(new Date),e=r[0],n=r[6];document.getElementById("wkRange").textContent=`${e.toLocaleDateString([],{month:"short",day:"numeric"})} – ${n.toLocaleDateString([],{month:"short",day:"numeric"})}`;const i=document.getElementById("constellation");i.innerHTML="";const s=document.createElement("div");s.className="const-center",s.innerHTML=`
    <div class="const-center-pct" id="const-avg">0%</div>
    <div class="const-center-lbl">Avg Completion</div>
  `,i.appendChild(s);const o=document.createElementNS("http://www.w3.org/2000/svg","svg");o.setAttribute("class","const-line"),o.setAttribute("viewBox","0 0 420 420"),o.id="const-svg-lines",i.appendChild(o);let a=0,l=0;const c=145,u=210,f=210,h=r.map((_,p)=>{const m=_i(_),y=Je[m]||Fn(),x=Lu(_),M=Mm(x),A=ym(y),w=M?Math.round(A/M*100):0,T=m===t,C=!!(y.checkin&&y.checkin.verified);a+=w,l++;const S=p/7*2*Math.PI-Math.PI/2,v=u+Math.cos(S)*c,P=f+Math.sin(S)*c,U=document.createElementNS("http://www.w3.org/2000/svg","path");U.setAttribute("d",`M ${u} ${f} L ${v} ${P}`),o.appendChild(U);const I=document.createElement("div");I.className="const-node"+(T?" today":"")+(C?" verified":""),I.style.left=`${v-30}px`,I.style.top=`${P-30}px`;const z=w===100?"var(--green)":w>0?"var(--accent)":"rgba(255,255,255,0.22)";return I.style.setProperty("--node-color",z),I.innerHTML=`
      <svg class="const-node-svg" viewBox="0 0 60 60">
        <circle class="const-node-bg" cx="30" cy="30" r="27"></circle>
        <circle class="const-node-fill" cx="30" cy="30" r="27"></circle>
      </svg>
      <div class="const-node-txt">${_h[_.getDay()][0]}</div> <!-- Single letter (S, M, T...) -->
      <div class="const-node-dot"></div>
    `,Gi(I,()=>{Ur=m,Ls=!0,wm(),io(m)}),i.appendChild(I),{node:I,pct:w,path:U}}),d=l?Math.round(a/l):0;Me.fromTo("#const-svg-lines path",{strokeDasharray:200,strokeDashoffset:200},{strokeDashoffset:0,duration:.75,stagger:.06,ease:"power2.out"}),h.forEach(({node:_,pct:p})=>{const m=_.querySelector(".const-node-fill"),y=188-188*p/100;Me.fromTo(m,{strokeDashoffset:188},{strokeDashoffset:y,duration:.95,delay:.35,ease:"power2.out"})});const g={val:0};Me.to(g,{val:d,duration:1.1,ease:"power2.out",onUpdate:()=>{document.getElementById("const-avg").textContent=Math.round(g.val)+"%"}})}(async()=>{document.getElementById("cDate").textContent=new Date().toLocaleDateString([],{weekday:"long",year:"numeric",month:"long",day:"numeric"}),await Le(330);const r=document.getElementById("cWord");r.innerHTML='<span class="cur"></span>';const t=r.querySelector(".cur");for(const e of"Logbook"){const n=document.createElement("span");n.textContent=e,r.insertBefore(n,t),await Le(58+Math.random()*26)}await Le(950),t.style.transition="opacity .4s",t.style.opacity="0",await Le(420),t.remove(),document.getElementById("cTag").classList.add("v"),await Le(190),document.getElementById("openBtn").classList.add("v"),await Le(110),document.getElementById("cDate").classList.add("v")})();Gi("openBtn",async()=>{nE(),await Le(620),await io()});Gi("btnCover",iE);Gi("btnToday",()=>{Ur=_i(new Date),Ls=!0,wm(),oo(),Ul("btnToday"),io(),eo.scrollTo({top:0,behavior:"smooth"})});Gi("btnWeek",async()=>{oo(),rE(),await pE()});
