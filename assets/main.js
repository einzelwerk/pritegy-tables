(()=>{var e,r,n,t,o,i,a,c={446:()=>{function e(e,r){for(var n=0;n<r.length;n++){var t=r[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}new(function(){function r(e,n){!function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this,r),this.btn=e,this.menu=n,this.state=!1,this.listener()}var n,t;return n=r,(t=[{key:"listener",value:function(){var e=this;document.addEventListener("click",(function(r){e.state&&e.btn.contains(r.target)?e.closeNav():!e.state&&e.btn.contains(r.target)&&e.openNav()}))}},{key:"openNav",value:function(){this.state=!0,this.menu.classList.add("opened"),this.btn.classList.add("opened"),this.btn.setAttribute("aria-expanded",!0),this.btn.setAttribute("aria-label","Menü schließen")}},{key:"closeNav",value:function(){this.state=!1,this.menu.classList.remove("opened"),this.btn.classList.remove("opened"),this.btn.setAttribute("aria-expanded",!1),this.btn.setAttribute("aria-label","Menü öffnen")}}])&&e(n.prototype,t),Object.defineProperty(n,"prototype",{writable:!1}),r}())(document.querySelector(".mobile-menu-btn"),document.querySelector("#nav"))},949:(e,r,n)=>{"use strict";n(208),n(446),n(566)},783:(e,r,n)=>{"use strict";var t=n(618),o=Object.create(null),i="undefined"==typeof document,a=Array.prototype.forEach;function c(){}function d(e,r){if(!r){if(!e.href)return;r=e.href.split("?")[0]}if(l(r)&&!1!==e.isLoaded&&r&&r.indexOf(".css")>-1){e.visited=!0;var n=e.cloneNode();n.isLoaded=!1,n.addEventListener("load",(function(){n.isLoaded||(n.isLoaded=!0,e.parentNode.removeChild(e))})),n.addEventListener("error",(function(){n.isLoaded||(n.isLoaded=!0,e.parentNode.removeChild(e))})),n.href="".concat(r,"?").concat(Date.now()),e.nextSibling?e.parentNode.insertBefore(n,e.nextSibling):e.parentNode.appendChild(n)}}function s(){var e=document.querySelectorAll("link");a.call(e,(function(e){!0!==e.visited&&d(e)}))}function l(e){return!!/^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(e)}e.exports=function(e,r){if(i)return console.log("no window.document found, will not HMR CSS"),c;var n,u,f=function(e){var r=o[e];if(!r){if(document.currentScript)r=document.currentScript.src;else{var n=document.getElementsByTagName("script"),i=n[n.length-1];i&&(r=i.src)}o[e]=r}return function(e){if(!r)return null;var n=r.split(/([^\\/]+)\.js$/),o=n&&n[1];return o&&e?e.split(",").map((function(e){var n=new RegExp("".concat(o,"\\.js$"),"g");return t(r.replace(n,"".concat(e.replace(/{fileName}/g,o),".css")))})):[r.replace(".js",".css")]}}(e);return n=function(){var e=f(r.filename),n=function(e){if(!e)return!1;var r=document.querySelectorAll("link"),n=!1;return a.call(r,(function(r){if(r.href){var o=function(e,r){var n;return e=t(e),r.some((function(t){e.indexOf(r)>-1&&(n=t)})),n}(r.href,e);l(o)&&!0!==r.visited&&o&&(d(r,o),n=!0)}})),n}(e);if(r.locals)return console.log("[HMR] Detected local css modules. Reload all css"),void s();n?console.log("[HMR] css reload %s",e.join(" ")):(console.log("[HMR] Reload all css"),s())},50,u=0,function(){var e=this,r=arguments,t=function(){return n.apply(e,r)};clearTimeout(u),u=setTimeout(t,50)}}},618:e=>{"use strict";e.exports=function(e){if(e=e.trim(),/^data:/i.test(e))return e;var r=-1!==e.indexOf("//")?e.split("//")[0]+"//":"",n=e.replace(new RegExp(r,"i"),"").split("/"),t=n[0].toLowerCase().replace(/\.$/,"");return n[0]="",r+t+n.reduce((function(e,r){switch(r){case"..":e.pop();break;case".":break;default:e.push(r)}return e}),[]).join("/")}},208:(e,r,n)=>{"use strict";var t=n(783)(e.id,{locals:!1});e.hot.dispose(t),e.hot.accept(void 0,t)},566:e=>{function r(e){var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}r.keys=()=>[],r.resolve=r,r.id=566,e.exports=r}},d={};function s(e){var r=d[e];if(void 0!==r){if(void 0!==r.error)throw r.error;return r.exports}var n=d[e]={id:e,exports:{}};try{var t={id:e,module:n,factory:c[e],require:s};s.i.forEach((function(e){e(t)})),n=t.module,t.factory.call(n.exports,n,n.exports,t.require)}catch(e){throw n.error=e,e}return n.exports}s.m=c,s.c=d,s.i=[],s.hu=e=>e+"."+s.h()+".hot-update.js",s.miniCssF=e=>{},s.hmrF=()=>"main."+s.h()+".hot-update.json",s.h=()=>"4b393e0e9a59832610c1",s.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),s.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="html-layout:",s.l=(n,t,o,i)=>{if(e[n])e[n].push(t);else{var a,c;if(void 0!==o)for(var d=document.getElementsByTagName("script"),l=0;l<d.length;l++){var u=d[l];if(u.getAttribute("src")==n||u.getAttribute("data-webpack")==r+o){a=u;break}}a||(c=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,s.nc&&a.setAttribute("nonce",s.nc),a.setAttribute("data-webpack",r+o),a.src=n),e[n]=[t];var f=(r,t)=>{a.onerror=a.onload=null,clearTimeout(p);var o=e[n];if(delete e[n],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((e=>e(t))),r)return r(t)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=f.bind(null,a.onerror),a.onload=f.bind(null,a.onload),c&&document.head.appendChild(a)}},(()=>{var e,r,n,t={},o=s.c,i=[],a=[],c="idle",d=0,l=[];function u(e){c=e;for(var r=[],n=0;n<a.length;n++)r[n]=a[n].call(null,e);return Promise.all(r)}function f(){0==--d&&u("ready").then((function(){if(0===d){var e=l;l=[];for(var r=0;r<e.length;r++)e[r]()}}))}function p(e){if("idle"!==c)throw new Error("check() is only allowed in idle status");return u("check").then(s.hmrM).then((function(n){return n?u("prepare").then((function(){var t=[];return r=[],Promise.all(Object.keys(s.hmrC).reduce((function(e,o){return s.hmrC[o](n.c,n.r,n.m,e,r,t),e}),[])).then((function(){return r=function(){return e?v(e):u("ready").then((function(){return t}))},0===d?r():new Promise((function(e){l.push((function(){e(r())}))}));var r}))})):u(m()?"ready":"idle").then((function(){return null}))}))}function h(e){return"ready"!==c?Promise.resolve().then((function(){throw new Error("apply() is only allowed in ready status (state: "+c+")")})):v(e)}function v(e){e=e||{},m();var t=r.map((function(r){return r(e)}));r=void 0;var o=t.map((function(e){return e.error})).filter(Boolean);if(o.length>0)return u("abort").then((function(){throw o[0]}));var i=u("dispose");t.forEach((function(e){e.dispose&&e.dispose()}));var a,c=u("apply"),d=function(e){a||(a=e)},s=[];return t.forEach((function(e){if(e.apply){var r=e.apply(d);if(r)for(var n=0;n<r.length;n++)s.push(r[n])}})),Promise.all([i,c]).then((function(){return a?u("fail").then((function(){throw a})):n?v(e).then((function(e){return s.forEach((function(r){e.indexOf(r)<0&&e.push(r)})),e})):u("idle").then((function(){return s}))}))}function m(){if(n)return r||(r=[]),Object.keys(s.hmrI).forEach((function(e){n.forEach((function(n){s.hmrI[e](n,r)}))})),n=void 0,!0}s.hmrD=t,s.i.push((function(l){var v,m,y,g,b=l.module,E=function(r,n){var t=o[n];if(!t)return r;var a=function(a){if(t.hot.active){if(o[a]){var c=o[a].parents;-1===c.indexOf(n)&&c.push(n)}else i=[n],e=a;-1===t.children.indexOf(a)&&t.children.push(a)}else console.warn("[HMR] unexpected require("+a+") from disposed module "+n),i=[];return r(a)},s=function(e){return{configurable:!0,enumerable:!0,get:function(){return r[e]},set:function(n){r[e]=n}}};for(var l in r)Object.prototype.hasOwnProperty.call(r,l)&&"e"!==l&&Object.defineProperty(a,l,s(l));return a.e=function(e){return function(e){switch(c){case"ready":u("prepare");case"prepare":return d++,e.then(f,f),e;default:return e}}(r.e(e))},a}(l.require,l.id);b.hot=(v=l.id,m=b,g={_acceptedDependencies:{},_acceptedErrorHandlers:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_selfInvalidated:!1,_disposeHandlers:[],_main:y=e!==v,_requireSelf:function(){i=m.parents.slice(),e=y?void 0:v,s(v)},active:!0,accept:function(e,r,n){if(void 0===e)g._selfAccepted=!0;else if("function"==typeof e)g._selfAccepted=e;else if("object"==typeof e&&null!==e)for(var t=0;t<e.length;t++)g._acceptedDependencies[e[t]]=r||function(){},g._acceptedErrorHandlers[e[t]]=n;else g._acceptedDependencies[e]=r||function(){},g._acceptedErrorHandlers[e]=n},decline:function(e){if(void 0===e)g._selfDeclined=!0;else if("object"==typeof e&&null!==e)for(var r=0;r<e.length;r++)g._declinedDependencies[e[r]]=!0;else g._declinedDependencies[e]=!0},dispose:function(e){g._disposeHandlers.push(e)},addDisposeHandler:function(e){g._disposeHandlers.push(e)},removeDisposeHandler:function(e){var r=g._disposeHandlers.indexOf(e);r>=0&&g._disposeHandlers.splice(r,1)},invalidate:function(){switch(this._selfInvalidated=!0,c){case"idle":r=[],Object.keys(s.hmrI).forEach((function(e){s.hmrI[e](v,r)})),u("ready");break;case"ready":Object.keys(s.hmrI).forEach((function(e){s.hmrI[e](v,r)}));break;case"prepare":case"check":case"dispose":case"apply":(n=n||[]).push(v)}},check:p,apply:h,status:function(e){if(!e)return c;a.push(e)},addStatusHandler:function(e){a.push(e)},removeStatusHandler:function(e){var r=a.indexOf(e);r>=0&&a.splice(r,1)},data:t[v]},e=void 0,g),b.parents=i,b.children=[],i=[],l.require=E})),s.hmrC={},s.hmrI={}})(),(()=>{var e;s.g.importScripts&&(e=s.g.location+"");var r=s.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var n=r.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),s.p=e+"../"})(),n=(e,r,n,t)=>{var o=document.createElement("link");return o.rel="stylesheet",o.type="text/css",o.onerror=o.onload=i=>{if(o.onerror=o.onload=null,"load"===i.type)n();else{var a=i&&("load"===i.type?"missing":i.type),c=i&&i.target&&i.target.href||r,d=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");d.code="CSS_CHUNK_LOAD_FAILED",d.type=a,d.request=c,o.parentNode.removeChild(o),t(d)}},o.href=r,document.head.appendChild(o),o},t=(e,r)=>{for(var n=document.getElementsByTagName("link"),t=0;t<n.length;t++){var o=(a=n[t]).getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(o===e||o===r))return a}var i=document.getElementsByTagName("style");for(t=0;t<i.length;t++){var a;if((o=(a=i[t]).getAttribute("data-href"))===e||o===r)return a}},o=[],i=[],a=e=>({dispose:()=>{for(var e=0;e<o.length;e++){var r=o[e];r.parentNode&&r.parentNode.removeChild(r)}o.length=0},apply:()=>{for(var e=0;e<i.length;e++)i[e].rel="stylesheet";i.length=0}}),s.hmrC.miniCss=(e,r,c,d,l,u)=>{l.push(a),e.forEach((e=>{var r=s.miniCssF(e),a=s.p+r,c=t(r,a);c&&d.push(new Promise(((r,t)=>{var d=n(e,a,(()=>{d.as="style",d.rel="preload",r()}),t);o.push(c),i.push(d)})))}))},(()=>{var e,r,n,t,o,i=s.hmrS_jsonp=s.hmrS_jsonp||{179:0},a={};function c(r,n){return e=n,new Promise(((e,n)=>{a[r]=e;var t=s.p+s.hu(r),o=new Error;s.l(t,(e=>{if(a[r]){a[r]=void 0;var t=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;o.message="Loading hot update chunk "+r+" failed.\n("+t+": "+i+")",o.name="ChunkLoadError",o.type=t,o.request=i,n(o)}}))}))}function d(e){function a(e){for(var r=[e],n={},t=r.map((function(e){return{chain:[e],id:e}}));t.length>0;){var o=t.pop(),i=o.id,a=o.chain,d=s.c[i];if(d&&(!d.hot._selfAccepted||d.hot._selfInvalidated)){if(d.hot._selfDeclined)return{type:"self-declined",chain:a,moduleId:i};if(d.hot._main)return{type:"unaccepted",chain:a,moduleId:i};for(var l=0;l<d.parents.length;l++){var u=d.parents[l],f=s.c[u];if(f){if(f.hot._declinedDependencies[i])return{type:"declined",chain:a.concat([u]),moduleId:i,parentId:u};-1===r.indexOf(u)&&(f.hot._acceptedDependencies[i]?(n[u]||(n[u]=[]),c(n[u],[i])):(delete n[u],r.push(u),t.push({chain:a.concat([u]),id:u})))}}}}return{type:"accepted",moduleId:e,outdatedModules:r,outdatedDependencies:n}}function c(e,r){for(var n=0;n<r.length;n++){var t=r[n];-1===e.indexOf(t)&&e.push(t)}}s.f&&delete s.f.jsonpHmr,r=void 0;var d={},l=[],u={},f=function(e){console.warn("[HMR] unexpected require("+e.id+") to disposed module")};for(var p in n)if(s.o(n,p)){var h,v=n[p],m=!1,y=!1,g=!1,b="";switch((h=v?a(p):{type:"disposed",moduleId:p}).chain&&(b="\nUpdate propagation: "+h.chain.join(" -> ")),h.type){case"self-declined":e.onDeclined&&e.onDeclined(h),e.ignoreDeclined||(m=new Error("Aborted because of self decline: "+h.moduleId+b));break;case"declined":e.onDeclined&&e.onDeclined(h),e.ignoreDeclined||(m=new Error("Aborted because of declined dependency: "+h.moduleId+" in "+h.parentId+b));break;case"unaccepted":e.onUnaccepted&&e.onUnaccepted(h),e.ignoreUnaccepted||(m=new Error("Aborted because "+p+" is not accepted"+b));break;case"accepted":e.onAccepted&&e.onAccepted(h),y=!0;break;case"disposed":e.onDisposed&&e.onDisposed(h),g=!0;break;default:throw new Error("Unexception type "+h.type)}if(m)return{error:m};if(y)for(p in u[p]=v,c(l,h.outdatedModules),h.outdatedDependencies)s.o(h.outdatedDependencies,p)&&(d[p]||(d[p]=[]),c(d[p],h.outdatedDependencies[p]));g&&(c(l,[h.moduleId]),u[p]=f)}n=void 0;for(var E,w=[],_=0;_<l.length;_++){var k=l[_],D=s.c[k];D&&(D.hot._selfAccepted||D.hot._main)&&u[k]!==f&&!D.hot._selfInvalidated&&w.push({module:k,require:D.hot._requireSelf,errorHandler:D.hot._selfAccepted})}return{dispose:function(){var e;t.forEach((function(e){delete i[e]})),t=void 0;for(var r,n=l.slice();n.length>0;){var o=n.pop(),a=s.c[o];if(a){var c={},u=a.hot._disposeHandlers;for(_=0;_<u.length;_++)u[_].call(null,c);for(s.hmrD[o]=c,a.hot.active=!1,delete s.c[o],delete d[o],_=0;_<a.children.length;_++){var f=s.c[a.children[_]];f&&(e=f.parents.indexOf(o))>=0&&f.parents.splice(e,1)}}}for(var p in d)if(s.o(d,p)&&(a=s.c[p]))for(E=d[p],_=0;_<E.length;_++)r=E[_],(e=a.children.indexOf(r))>=0&&a.children.splice(e,1)},apply:function(r){for(var n in u)s.o(u,n)&&(s.m[n]=u[n]);for(var t=0;t<o.length;t++)o[t](s);for(var i in d)if(s.o(d,i)){var a=s.c[i];if(a){E=d[i];for(var c=[],f=[],p=[],h=0;h<E.length;h++){var v=E[h],m=a.hot._acceptedDependencies[v],y=a.hot._acceptedErrorHandlers[v];if(m){if(-1!==c.indexOf(m))continue;c.push(m),f.push(y),p.push(v)}}for(var g=0;g<c.length;g++)try{c[g].call(null,E)}catch(n){if("function"==typeof f[g])try{f[g](n,{moduleId:i,dependencyId:p[g]})}catch(t){e.onErrored&&e.onErrored({type:"accept-error-handler-errored",moduleId:i,dependencyId:p[g],error:t,originalError:n}),e.ignoreErrored||(r(t),r(n))}else e.onErrored&&e.onErrored({type:"accept-errored",moduleId:i,dependencyId:p[g],error:n}),e.ignoreErrored||r(n)}}}for(var b=0;b<w.length;b++){var _=w[b],k=_.module;try{_.require(k)}catch(n){if("function"==typeof _.errorHandler)try{_.errorHandler(n,{moduleId:k,module:s.c[k]})}catch(t){e.onErrored&&e.onErrored({type:"self-accept-error-handler-errored",moduleId:k,error:t,originalError:n}),e.ignoreErrored||(r(t),r(n))}else e.onErrored&&e.onErrored({type:"self-accept-errored",moduleId:k,error:n}),e.ignoreErrored||r(n)}}return l}}}self.webpackHotUpdatehtml_layout=(r,t,i)=>{for(var c in t)s.o(t,c)&&(n[c]=t[c],e&&e.push(c));i&&o.push(i),a[r]&&(a[r](),a[r]=void 0)},s.hmrI.jsonp=function(e,r){n||(n={},o=[],t=[],r.push(d)),s.o(n,e)||(n[e]=s.m[e])},s.hmrC.jsonp=function(e,a,l,u,f,p){f.push(d),r={},t=a,n=l.reduce((function(e,r){return e[r]=!1,e}),{}),o=[],e.forEach((function(e){s.o(i,e)&&void 0!==i[e]?(u.push(c(e,p)),r[e]=!0):r[e]=!1})),s.f&&(s.f.jsonpHmr=function(e,n){r&&s.o(r,e)&&!r[e]&&(n.push(c(e)),r[e]=!0)})},s.hmrM=()=>{if("undefined"==typeof fetch)throw new Error("No browser support: need fetch API");return fetch(s.p+s.hmrF()).then((e=>{if(404!==e.status){if(!e.ok)throw new Error("Failed to fetch update manifest "+e.statusText);return e.json()}}))}})(),s(949)})();