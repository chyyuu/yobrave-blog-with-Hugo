!function(e){function t(t){for(var r,o,s=t[0],c=t[1],a=t[2],d=t[3]||[],u=0,l=[];u<s.length;u++)o=s[u],H[o]&&l.push(H[o][0]),H[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);for(z&&z(t),d.forEach(function(e){if(void 0===H[e]){H[e]=null;var t=document.createElement("link");t.crossOrigin="anonymous",M.nc&&t.setAttribute("nonce",M.nc),t.rel="prefetch",t.as="script",t.href=C(e),document.head.appendChild(t)}});l.length;)l.shift()();return R.push.apply(R,a||[]),n()}function n(){for(var e,t=0;t<R.length;t++){for(var n=R[t],r=!0,o=1;o<n.length;o++){var s=n[o];0!==H[s]&&(r=!1)}r&&(R.splice(t--,1),e=M(M.s=n[0]))}return e}var r=window.webpackHotUpdate;window.webpackHotUpdate=function(e,t){!function(e,t){if(!E[e]||!k[e])return;for(var n in k[e]=!1,t)Object.prototype.hasOwnProperty.call(t,n)&&(v[n]=t[n]);0===--g&&0===y&&_()}(e,t),r&&r(e,t)};var o,s=!0,c="d17c9bf9c90e3a58ef8a",a=1e4,d={},u=[],l=[];function i(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:o!==e,active:!0,accept:function(e,n){if(void 0===e)t._selfAccepted=!0;else if("function"===typeof e)t._selfAccepted=e;else if("object"===typeof e)for(var r=0;r<e.length;r++)t._acceptedDependencies[e[r]]=n||function(){};else t._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"===typeof e)for(var n=0;n<e.length;n++)t._declinedDependencies[e[n]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=t._disposeHandlers.indexOf(e);n>=0&&t._disposeHandlers.splice(n,1)},check:j,apply:P,status:function(e){if(!e)return p;f.push(e)},addStatusHandler:function(e){f.push(e)},removeStatusHandler:function(e){var t=f.indexOf(e);t>=0&&f.splice(t,1)},data:d[e]};return o=void 0,t}var f=[],p="idle";function h(e){p=e;for(var t=0;t<f.length;t++)f[t].call(null,e)}var m,v,b,g=0,y=0,x={},k={},E={};function w(e){return+e+""===e?+e:e}function j(e){if("idle"!==p)throw new Error("check() is only allowed in idle status");return s=e,h("check"),(t=a,t=t||1e4,new Promise(function(e,n){if("undefined"===typeof XMLHttpRequest)return n(new Error("No browser support"));try{var r=new XMLHttpRequest,o=M.p+""+c+".hot-update.json";r.open("GET",o,!0),r.timeout=t,r.send(null)}catch(s){return n(s)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)n(new Error("Manifest request to "+o+" timed out."));else if(404===r.status)e();else if(200!==r.status&&304!==r.status)n(new Error("Manifest request to "+o+" failed."));else{try{var t=JSON.parse(r.responseText)}catch(s){return void n(s)}e(t)}}})).then(function(e){if(!e)return h("idle"),null;k={},x={},E=e.c,b=e.h,h("prepare");var t=new Promise(function(e,t){m={resolve:e,reject:t}});for(var n in v={},H)O(n);return"prepare"===p&&0===y&&0===g&&_(),t});var t}function O(e){E[e]?(k[e]=!0,g++,function(e){var t=document.createElement("script");t.charset="utf-8",t.src=M.p+""+e+"."+c+".hot-update.js",t.crossOrigin="anonymous",document.head.appendChild(t)}(e)):x[e]=!0}function _(){h("ready");var e=m;if(m=null,e)if(s)Promise.resolve().then(function(){return P(s)}).then(function(t){e.resolve(t)},function(t){e.reject(t)});else{var t=[];for(var n in v)Object.prototype.hasOwnProperty.call(v,n)&&t.push(w(n));e.resolve(t)}}function P(t){if("ready"!==p)throw new Error("apply() is only allowed in ready status");var n,r,o,s,a;function l(e){for(var t=[e],n={},r=t.slice().map(function(e){return{chain:[e],id:e}});r.length>0;){var o=r.pop(),c=o.id,a=o.chain;if((s=D[c])&&!s.hot._selfAccepted){if(s.hot._selfDeclined)return{type:"self-declined",chain:a,moduleId:c};if(s.hot._main)return{type:"unaccepted",chain:a,moduleId:c};for(var d=0;d<s.parents.length;d++){var u=s.parents[d],l=D[u];if(l){if(l.hot._declinedDependencies[c])return{type:"declined",chain:a.concat([u]),moduleId:c,parentId:u};-1===t.indexOf(u)&&(l.hot._acceptedDependencies[c]?(n[u]||(n[u]=[]),i(n[u],[c])):(delete n[u],t.push(u),r.push({chain:a.concat([u]),id:u})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];-1===e.indexOf(r)&&e.push(r)}}t=t||{};var f={},m=[],g={},y=function(){console.warn("[HMR] unexpected require("+k.moduleId+") to disposed module")};for(var x in v)if(Object.prototype.hasOwnProperty.call(v,x)){var k;a=w(x);var j=!1,O=!1,_=!1,P="";switch((k=v[x]?l(a):{type:"disposed",moduleId:x}).chain&&(P="\nUpdate propagation: "+k.chain.join(" -> ")),k.type){case"self-declined":t.onDeclined&&t.onDeclined(k),t.ignoreDeclined||(j=new Error("Aborted because of self decline: "+k.moduleId+P));break;case"declined":t.onDeclined&&t.onDeclined(k),t.ignoreDeclined||(j=new Error("Aborted because of declined dependency: "+k.moduleId+" in "+k.parentId+P));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(k),t.ignoreUnaccepted||(j=new Error("Aborted because "+a+" is not accepted"+P));break;case"accepted":t.onAccepted&&t.onAccepted(k),O=!0;break;case"disposed":t.onDisposed&&t.onDisposed(k),_=!0;break;default:throw new Error("Unexception type "+k.type)}if(j)return h("abort"),Promise.reject(j);if(O)for(a in g[a]=v[a],i(m,k.outdatedModules),k.outdatedDependencies)Object.prototype.hasOwnProperty.call(k.outdatedDependencies,a)&&(f[a]||(f[a]=[]),i(f[a],k.outdatedDependencies[a]));_&&(i(m,[k.moduleId]),g[a]=y)}var R,C=[];for(r=0;r<m.length;r++)a=m[r],D[a]&&D[a].hot._selfAccepted&&C.push({module:a,errorHandler:D[a].hot._selfAccepted});h("dispose"),Object.keys(E).forEach(function(e){!1===E[e]&&function(e){delete H[e]}(e)});for(var S,I,A=m.slice();A.length>0;)if(a=A.pop(),s=D[a]){var z={},L=s.hot._disposeHandlers;for(o=0;o<L.length;o++)(n=L[o])(z);for(d[a]=z,s.hot.active=!1,delete D[a],delete f[a],o=0;o<s.children.length;o++){var q=D[s.children[o]];q&&((R=q.parents.indexOf(a))>=0&&q.parents.splice(R,1))}}for(a in f)if(Object.prototype.hasOwnProperty.call(f,a)&&(s=D[a]))for(I=f[a],o=0;o<I.length;o++)S=I[o],(R=s.children.indexOf(S))>=0&&s.children.splice(R,1);for(a in h("apply"),c=b,g)Object.prototype.hasOwnProperty.call(g,a)&&(e[a]=g[a]);var T=null;for(a in f)if(Object.prototype.hasOwnProperty.call(f,a)&&(s=D[a])){I=f[a];var U=[];for(r=0;r<I.length;r++)if(S=I[r],n=s.hot._acceptedDependencies[S]){if(-1!==U.indexOf(n))continue;U.push(n)}for(r=0;r<U.length;r++){n=U[r];try{n(I)}catch(W){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:a,dependencyId:I[r],error:W}),t.ignoreErrored||T||(T=W)}}}for(r=0;r<C.length;r++){var J=C[r];a=J.module,u=[a];try{M(a)}catch(W){if("function"===typeof J.errorHandler)try{J.errorHandler(W)}catch(N){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:a,error:N,originalError:W}),t.ignoreErrored||T||(T=N),T||(T=W)}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:a,error:W}),t.ignoreErrored||T||(T=W)}}return T?(h("fail"),Promise.reject(T)):(h("idle"),new Promise(function(e){e(m)}))}var D={},H={1:0},R=[];function C(e){return M.p+"static/js/"+({2:"src-docs-examples-fetch-data",3:"src-docs-home",4:"src-docs-use-callback",5:"src-docs-use-context",6:"src-docs-use-effect",7:"src-docs-use-layout-effect",8:"src-docs-use-memo",9:"src-docs-use-reducer",10:"src-docs-use-ref",11:"src-docs-use-state"}[e]||e)+"."+{2:"2486ee17",3:"7dfbc9bb",4:"ff2375e1",5:"2563fabf",6:"8b713b79",7:"472ca576",8:"27b744dc",9:"2133fa1b",10:"6c54a04c",11:"54d014d5"}[e]+".js"}function M(t){if(D[t])return D[t].exports;var n=D[t]={i:t,l:!1,exports:{},hot:i(t),parents:(l=u,u=[],l),children:[]};return e[t].call(n.exports,n,n.exports,function(e){var t=D[e];if(!t)return M;var n=function(n){return t.hot.active?(D[n]?-1===D[n].parents.indexOf(e)&&D[n].parents.push(e):(u=[e],o=n),-1===t.children.indexOf(n)&&t.children.push(n)):(console.warn("[HMR] unexpected require("+n+") from disposed module "+e),u=[]),M(n)},r=function(e){return{configurable:!0,enumerable:!0,get:function(){return M[e]},set:function(t){M[e]=t}}};for(var s in M)Object.prototype.hasOwnProperty.call(M,s)&&"e"!==s&&"t"!==s&&Object.defineProperty(n,s,r(s));return n.e=function(e){return"ready"===p&&h("prepare"),y++,M.e(e).then(t,function(e){throw t(),e});function t(){y--,"prepare"===p&&(x[e]||O(e),0===y&&0===g&&_())}},n.t=function(e,t){return 1&t&&(e=n(e)),M.t(e,-2&t)},n}(t)),n.l=!0,n.exports}M.e=function(e){var t=[],n=H[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise(function(t,r){n=H[e]=[t,r]});t.push(n[2]=r);var o,s=document.createElement("script");s.charset="utf-8",s.timeout=120,M.nc&&s.setAttribute("nonce",M.nc),s.src=C(e),0!==s.src.indexOf(window.location.origin+"/")&&(s.crossOrigin="anonymous"),o=function(t){s.onerror=s.onload=null,clearTimeout(c);var n=H[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,a=new Error("Loading chunk "+e+" failed.\n("+r+": "+o+")");a.type=r,a.request=o,n[1](a)}H[e]=void 0}};var c=setTimeout(function(){o({type:"timeout",target:s})},12e4);s.onerror=s.onload=o,document.head.appendChild(s)}return Promise.all(t)},M.m=e,M.c=D,M.d=function(e,t,n){M.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},M.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},M.t=function(e,t){if(1&t&&(e=M(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(M.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)M.d(n,r,function(t){return e[t]}.bind(null,r));return n},M.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return M.d(t,"a",t),t},M.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},M.p="/",M.oe=function(e){throw console.error(e),e},M.h=function(){return c};var S=window.webpackJsonp=window.webpackJsonp||[],I=S.push.bind(S);S.push=t,S=S.slice();for(var A=0;A<S.length;A++)t(S[A]);var z=I;t([[],{},0,[0,2,3,4,5,6,7,8,9,10,11]]),R.push([0,0]),n()}({"./.docz/app/db.json":function(e){e.exports={config:{title:"Hooks \u5c0f\u6284",description:"React Hooks \u5c0f\u6284",menu:["Home","useState","useEffect","useContext","useLayoutEffect","useReducer","useCallback","useMemo","useRef","Examples"],version:"1.0.0",repository:"https://github.com/chinanf-boy/react-hooks-cheatsheet-zh",native:!1,codeSandbox:!0,themeConfig:{repository:"https://github.com/chinanf-boy/react-hooks-cheatsheet-zh",colors:{primary:"#bd4932",link:"#bd4932"},logo:{src:"https://i.imgur.com/kEyxJoQ.png",width:200}},separator:"-",indexHtml:"src/index.html",wrapper:"src/docs/config/Wrapper.js",ordering:"ascending",propsParser:!1},entries:[{key:"src/docs/Home.mdx",value:{name:"Home",route:"/",order:-1,id:"4e2f82dfcb865d54193958b5e15ee4b2",filepath:"src/docs/Home.mdx",link:"",slug:"src-docs-home",menu:"",headings:[{slug:"hook-\u662f-react-168-\u7684\u65b0\u589e\u7279\u6027\u3002\u5b83\u53ef\u4ee5\u8ba9\u4f60\u5728\u4e0d\u7f16\u5199-class-\u7684\u60c5\u51b5\u4e0b\u4f7f\u7528-state-\u4ee5\u53ca\u5176\u4ed6\u7684-react-\u7279\u6027\u3002",depth:3,value:"Hook  \u662f React 16.8 \u7684\u65b0\u589e\u7279\u6027\u3002\u5b83\u53ef\u4ee5\u8ba9\u4f60\u5728\u4e0d\u7f16\u5199  class  \u7684\u60c5\u51b5\u4e0b\u4f7f\u7528  state  \u4ee5\u53ca\u5176\u4ed6\u7684  React  \u7279\u6027\u3002"}]}},{key:"src/docs/useCallback.mdx",value:{name:"useCallback",route:"/usecallback",id:"9bd217990c3910d5025e9a7c6de0fde0",filepath:"src/docs/useCallback.mdx",link:"",slug:"src-docs-use-callback",menu:"",headings:[{slug:"usecallback-",depth:1,value:"useCallback \ud83d\udc41"},{slug:"\u5165\u95e8\u793a\u4f8b",depth:2,value:"\u5165\u95e8\u793a\u4f8b"},{slug:"usecallback-\u5177\u6709\u53c2\u8003\u6570\u7ec4\u7684\u51fd\u6570",depth:2,value:"useCallback \u5177\u6709\u53c2\u8003\u6570\u7ec4\u7684\u51fd\u6570"},{slug:"usecallback-\u7684\u5185\u8054\u5f62\u6001",depth:2,value:"useCallback \u7684\u5185\u8054\u5f62\u6001"}]}},{key:"src/docs/useContext.mdx",value:{name:"useContext",route:"/usecontext",id:"f8d926dd4c7144bfb0747b454244fce7",filepath:"src/docs/useContext.mdx",link:"",slug:"src-docs-use-context",menu:"",headings:[{slug:"usecontext-",depth:1,value:"useContext \ud83d\udc5c"}]}},{key:"src/docs/useEffect.mdx",value:{name:"useEffect",route:"/useeffect",id:"3e35a9e62146ec0729a3d21a80da3f9a",filepath:"src/docs/useEffect.mdx",link:"",slug:"src-docs-use-effect",menu:"",headings:[{slug:"useeffect-\ud83e\udd8b",depth:1,value:"useEffect \ud83e\udd8b"},{slug:"effect-\u57fa\u672c\u4f5c\u7528",depth:2,value:"Effect \u57fa\u672c\u4f5c\u7528"},{slug:"\u6e05\u7406-effect",depth:2,value:"\u6e05\u7406 Effect"},{slug:"\u591a\u91cd\u6548\u679c",depth:2,value:"\u591a\u91cd\u6548\u679c"},{slug:"\u8df3\u8fc7-effects\uff08\u6570\u7ec4\u4f9d\u8d56\uff09",depth:2,value:"\u8df3\u8fc7 Effects\uff08\u6570\u7ec4\u4f9d\u8d56\uff09"},{slug:"\u8df3\u8fc7\u6548\u679c\uff08\u7a7a\u6570\u7ec4\u4f9d\u8d56\uff09",depth:2,value:"\u8df3\u8fc7\u6548\u679c\uff08\u7a7a\u6570\u7ec4\u4f9d\u8d56\uff09"},{slug:"\u8df3\u8fc7\u6548\u679c\uff08\u65e0\u6570\u7ec4\u4f9d\u8d56\uff09",depth:2,value:"\u8df3\u8fc7\u6548\u679c\uff08\u65e0\u6570\u7ec4\u4f9d\u8d56\uff09"}]}},{key:"src/docs/useLayoutEffect.mdx",value:{name:"useLayoutEffect",route:"/uselayoutEffect",id:"09b96b9977d23961c0eba1a96f15b26f",filepath:"src/docs/useLayoutEffect.mdx",link:"",slug:"src-docs-use-layout-effect",menu:"",headings:[{slug:"uselayouteffect",depth:1,value:"useLayoutEffect"},{slug:"\u4e0e-useeffect-\u76f8\u4f3c\u7684\u7528\u6cd5",depth:2,value:"\u4e0e useEffect \u76f8\u4f3c\u7684\u7528\u6cd5"},{slug:"uselayouteffect-vs-useeffect",depth:2,value:"useLayoutEffect vs useEffect"}]}},{key:"src/docs/useMemo.mdx",value:{name:"useMemo",route:"/usememo",id:"81183e33e2188376447572617a6f3bd1",filepath:"src/docs/useMemo.mdx",link:"",slug:"src-docs-use-memo",menu:"",headings:[{slug:"usememo-",depth:1,value:"useMemo \ud83c\udf92"},{slug:"\u5165\u95e8\u793a\u4f8b",depth:2,value:"\u5165\u95e8\u793a\u4f8b"},{slug:"\u57fa\u672c\u7528\u6cd5",depth:2,value:"\u57fa\u672c\u7528\u6cd5"}]}},{key:"src/docs/useReducer.mdx",value:{name:"useReducer",route:"/usereducer",id:"538f8195318cd89c4a0316c79e27cecf",filepath:"src/docs/useReducer.mdx",link:"",slug:"src-docs-use-reducer",menu:"",headings:[{slug:"usereducer-\ud83e\udd96",depth:1,value:"useReducer \ud83e\udd96"},{slug:"\u57fa\u672c\u7528\u6cd5",depth:2,value:"\u57fa\u672c\u7528\u6cd5"},{slug:"\u60f0\u6027\u521d\u59cb\u5316\u72b6\u6001",depth:2,value:"\u60f0\u6027\u521d\u59cb\u5316\u72b6\u6001"},{slug:"\u6a21\u4effthissetstate\u7684\u884c\u4e3a",depth:2,value:"\u6a21\u4eff this.setState \u7684\u884c\u4e3a"}]}},{key:"src/docs/useRef.mdx",value:{name:"useRef",route:"/useRef",id:"4010107112942e0da2d080d8fb9ec311",filepath:"src/docs/useRef.mdx",link:"",slug:"src-docs-use-ref",menu:"",headings:[{slug:"useref-",depth:1,value:"useRef \ud83c\udf02"},{slug:"\u8bbf\u95ee-dom",depth:2,value:"\u8bbf\u95ee DOM"},{slug:"\u50cf\u53d8\u91cf\u4e00\u6837\u7684\u5b9e\u4f8b\uff08\u901a\u7528\u5bb9\u5668\uff09",depth:2,value:"\u50cf\u53d8\u91cf\u4e00\u6837\u7684\u5b9e\u4f8b\uff08\u901a\u7528\u5bb9\u5668\uff09"}]}},{key:"src/docs/useState.mdx",value:{name:"useState",route:"/usestate",id:"5540906b4d0ebc1bed27e395844273dd",filepath:"src/docs/useState.mdx",link:"",slug:"src-docs-use-state",menu:"",headings:[{slug:"usestate",depth:1,value:"useState\ud83e\udd84"},{slug:"\u58f0\u660e\u72b6\u6001\u53d8\u91cf",depth:2,value:"\u58f0\u660e\u72b6\u6001\u53d8\u91cf"},{slug:"\u66f4\u65b0\u72b6\u6001\u53d8\u91cf",depth:2,value:"\u66f4\u65b0\u72b6\u6001\u53d8\u91cf"},{slug:"\u591a\u4e2a\u72b6\u6001\u53d8\u91cf",depth:2,value:"\u591a\u4e2a\u72b6\u6001\u53d8\u91cf"},{slug:"\u4f7f\u7528\u5bf9\u8c61\u72b6\u6001\u53d8\u91cf",depth:2,value:"\u4f7f\u7528\u5bf9\u8c61\u72b6\u6001\u53d8\u91cf"},{slug:"\u4ece\u51fd\u6570\u521d\u59cb\u5316\u72b6\u6001",depth:2,value:"\u4ece\u51fd\u6570\u521d\u59cb\u5316\u72b6\u6001"},{slug:"\u51fd\u6570\u5316-setstate",depth:2,value:"\u51fd\u6570\u5316 setState"}]}},{key:"src/docs/examples/fetchData.mdx",value:{name:"fetching data",menu:"Examples",route:"examples/fetching-data",order:1,id:"e37ccc03fda42dfb65dc70b0648b60a6",filepath:"src/docs/examples/fetchData.mdx",link:"",slug:"src-docs-examples-fetch-data",headings:[{slug:"\u83b7\u53d6\u6570\u636e-",depth:1,value:"\u83b7\u53d6\u6570\u636e \ud83c\udfc3"},{slug:"\u83b7\u53d6-mount-\u4e0a\u7684\u6570\u636e",depth:2,value:"\u83b7\u53d6 mount \u4e0a\u7684\u6570\u636e"},{slug:"\u7528\u6237\u4e8b\u4ef6\u89e6\u53d1\uff0c\u54cd\u5e94\u4e2d\u83b7\u53d6\u6570\u636e",depth:2,value:"\u7528\u6237\u4e8b\u4ef6\u89e6\u53d1\uff0c\u54cd\u5e94\u4e2d\u83b7\u53d6\u6570\u636e"},{slug:"\u663e\u793a\u52a0\u8f7d\u6307\u793a\u5668",depth:2,value:"\u663e\u793a\u52a0\u8f7d\u6307\u793a\u5668"}]}}]}},"./.docz/app/index.jsx":function(e,t,n){"use strict";n.r(t);var r=n("./node_modules/react/index.js"),o=n.n(r),s=n("./node_modules/react-dom/index.js"),c=n.n(s),a=n("./node_modules/docz/dist/index.esm.js"),d=n("./node_modules/docz-theme-default/dist/index.esm.js"),u={"src/docs/Home.mdx":function(){return Promise.all([n.e(0),n.e(3)]).then(n.bind(null,"./src/docs/Home.mdx"))},"src/docs/useCallback.mdx":function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,"./src/docs/useCallback.mdx"))},"src/docs/useContext.mdx":function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,"./src/docs/useContext.mdx"))},"src/docs/useEffect.mdx":function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,"./src/docs/useEffect.mdx"))},"src/docs/useLayoutEffect.mdx":function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,"./src/docs/useLayoutEffect.mdx"))},"src/docs/useMemo.mdx":function(){return Promise.all([n.e(0),n.e(8)]).then(n.bind(null,"./src/docs/useMemo.mdx"))},"src/docs/useReducer.mdx":function(){return Promise.all([n.e(0),n.e(9)]).then(n.bind(null,"./src/docs/useReducer.mdx"))},"src/docs/useRef.mdx":function(){return Promise.all([n.e(0),n.e(10)]).then(n.bind(null,"./src/docs/useRef.mdx"))},"src/docs/useState.mdx":function(){return Promise.all([n.e(0),n.e(11)]).then(n.bind(null,"./src/docs/useState.mdx"))},"src/docs/examples/fetchData.mdx":function(){return Promise.all([n.e(0),n.e(2)]).then(n.bind(null,"./src/docs/examples/fetchData.mdx"))}};"undefined"!==typeof u&&u&&u===Object(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"imports",filename:".docz/app/imports.js"}});var l=n("./.docz/app/db.json"),i=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),f=n("./node_modules/styled-components/dist/styled-components.browser.esm.js");function p(){var e=Object(i.a)(["\n  body {font-size: 18px;}\n  code {\n      font-size: 1.2em !important;\n      background: rgba(255,229,100,0.2) !important;\n      color: #1a1a1a !important; }\n"]);return p=function(){return e},e}var h=Object(f.b)(p()),m=function(e){var t=e.children;return o.a.createElement(o.a.Fragment,null,o.a.createElement(h,null),t)},v=m;m&&m===Object(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Wrapper",filename:"src/docs/config/Wrapper.js"}});var b=function(){return o.a.createElement(d.a,{wrapper:v,linkComponent:a.b,db:l},o.a.createElement(a.c,{imports:u}))},g=b;b&&b===Object(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Root",filename:".docz/app/root.jsx"}});var y=[],x=[],k=function(){return x.forEach(function(e){return e&&e()})},E=document.querySelector("#root");!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g;y.forEach(function(e){return e&&e()}),c.a.render(o.a.createElement(e,null),E,k)}(g)},0:function(e,t,n){e.exports=n("./.docz/app/index.jsx")}});
//# sourceMappingURL=app.d17c9bf9c90e3a58ef8a.js.map