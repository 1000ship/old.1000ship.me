!function(e){var t={};function n(s){if(t[s])return t[s].exports;var r=t[s]={i:s,l:!1,exports:{}};return e[s].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(s,r,function(t){return e[t]}.bind(null,r));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t,n){"use strict";try{self["workbox:precaching:5.1.3"]&&_()}catch(e){}},function(e,t,n){"use strict";try{self["workbox:core:5.1.3"]&&_()}catch(e){}},function(e,t,n){"use strict";n.r(t);n(0);const s=[],r={get:()=>s,add(e){s.push(...e)}};n(1);const c={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},a=e=>[c.prefix,e,c.suffix].filter(e=>e&&e.length>0).join("-"),o=e=>e||a(c.precache),i=(e,...t)=>{let n=e;return t.length>0&&(n+=" :: "+JSON.stringify(t)),n};class h extends Error{constructor(e,t){super(i(e,t)),this.name=e,this.details=t}}const l=new Set;const u=(e,t)=>e.filter(e=>t in e),f=async({request:e,mode:t,plugins:n=[]})=>{const s=u(n,"cacheKeyWillBeUsed");let r=e;for(const e of s)r=await e.cacheKeyWillBeUsed.call(e,{mode:t,request:r}),"string"==typeof r&&(r=new Request(r));return r},d=async({cacheName:e,request:t,event:n,matchOptions:s,plugins:r=[]})=>{const c=await self.caches.open(e),a=await f({plugins:r,request:t,mode:"read"});let o=await c.match(a,s);for(const t of r)if("cachedResponseWillBeUsed"in t){const r=t.cachedResponseWillBeUsed;o=await r.call(t,{cacheName:e,event:n,matchOptions:s,cachedResponse:o,request:a})}return o},p=async({cacheName:e,request:t,response:n,event:s,plugins:r=[],matchOptions:c})=>{const a=await f({plugins:r,request:t,mode:"write"});if(!n)throw new h("cache-put-with-no-response",{url:(o=a.url,new URL(String(o),location.href).href.replace(new RegExp("^"+location.origin),""))});var o;const i=await(async({request:e,response:t,event:n,plugins:s=[]})=>{let r=t,c=!1;for(const t of s)if("cacheWillUpdate"in t){c=!0;const s=t.cacheWillUpdate;if(r=await s.call(t,{request:e,response:r,event:n}),!r)break}return c||(r=r&&200===r.status?r:void 0),r||null})({event:s,plugins:r,response:n,request:a});if(!i)return void 0;const p=await self.caches.open(e),y=u(r,"cacheDidUpdate"),w=y.length>0?await d({cacheName:e,matchOptions:c,request:a}):null;try{await p.put(a,i)}catch(e){throw"QuotaExceededError"===e.name&&await async function(){for(const e of l)await e()}(),e}for(const t of y)await t.cacheDidUpdate.call(t,{cacheName:e,event:s,oldResponse:w,newResponse:i,request:a})},y=async({request:e,fetchOptions:t,event:n,plugins:s=[]})=>{if("string"==typeof e&&(e=new Request(e)),n instanceof FetchEvent&&n.preloadResponse){const e=await n.preloadResponse;if(e)return e}const r=u(s,"fetchDidFail"),c=r.length>0?e.clone():null;try{for(const t of s)if("requestWillFetch"in t){const s=t.requestWillFetch,r=e.clone();e=await s.call(t,{request:r,event:n})}}catch(e){throw new h("plugin-error-request-will-fetch",{thrownError:e})}const a=e.clone();try{let r;r="navigate"===e.mode?await fetch(e):await fetch(e,t);for(const e of s)"fetchDidSucceed"in e&&(r=await e.fetchDidSucceed.call(e,{event:n,request:a,response:r}));return r}catch(e){0;for(const t of r)await t.fetchDidFail.call(t,{error:e,event:n,originalRequest:c.clone(),request:a.clone()});throw e}};let w;async function g(e,t){const n=e.clone(),s={headers:new Headers(n.headers),status:n.status,statusText:n.statusText},r=t?t(s):s,c=function(){if(void 0===w){const e=new Response("");if("body"in e)try{new Response(e.body),w=!0}catch(e){w=!1}w=!1}return w}()?n.body:await n.blob();return new Response(c,r)}function m(e){if(!e)throw new h("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:t,url:n}=e;if(!n)throw new h("add-to-cache-list-unexpected-type",{entry:e});if(!t){const e=new URL(n,location.href);return{cacheKey:e.href,url:e.href}}const s=new URL(n,location.href),r=new URL(n,location.href);return s.searchParams.set("__WB_REVISION__",t),{cacheKey:s.href,url:r.href}}class R{constructor(e){this._cacheName=o(e),this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map}addToCacheList(e){const t=[];for(const n of e){"string"==typeof n?t.push(n):n&&void 0===n.revision&&t.push(n.url);const{cacheKey:e,url:s}=m(n),r="string"!=typeof n&&n.revision?"reload":"default";if(this._urlsToCacheKeys.has(s)&&this._urlsToCacheKeys.get(s)!==e)throw new h("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(s),secondEntry:e});if("string"!=typeof n&&n.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==n.integrity)throw new h("add-to-cache-list-conflicting-integrities",{url:s});this._cacheKeysToIntegrities.set(e,n.integrity)}if(this._urlsToCacheKeys.set(s,e),this._urlsToCacheModes.set(s,r),t.length>0){const e=`Workbox is precaching URLs without revision info: ${t.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}async install({event:e,plugins:t}={}){const n=[],s=[],r=await self.caches.open(this._cacheName),c=await r.keys(),a=new Set(c.map(e=>e.url));for(const[e,t]of this._urlsToCacheKeys)a.has(t)?s.push(e):n.push({cacheKey:t,url:e});const o=n.map(({cacheKey:n,url:s})=>{const r=this._cacheKeysToIntegrities.get(n),c=this._urlsToCacheModes.get(s);return this._addURLToCache({cacheKey:n,cacheMode:c,event:e,integrity:r,plugins:t,url:s})});return await Promise.all(o),{updatedURLs:n.map(e=>e.url),notUpdatedURLs:s}}async activate(){const e=await self.caches.open(this._cacheName),t=await e.keys(),n=new Set(this._urlsToCacheKeys.values()),s=[];for(const r of t)n.has(r.url)||(await e.delete(r),s.push(r.url));return{deletedURLs:s}}async _addURLToCache({cacheKey:e,url:t,cacheMode:n,event:s,plugins:r,integrity:c}){const a=new Request(t,{integrity:c,cache:n,credentials:"same-origin"});let o,i=await y({event:s,plugins:r,request:a});for(const e of r||[])"cacheWillUpdate"in e&&(o=e);if(!(o?await o.cacheWillUpdate({event:s,request:a,response:i}):i.status<400))throw new h("bad-precaching-response",{url:t,status:i.status});i.redirected&&(i=await g(i)),await p({event:s,plugins:r,response:i,request:e===t?a:new Request(e),cacheName:this._cacheName,matchOptions:{ignoreSearch:!0}})}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}async matchPrecache(e){const t=e instanceof Request?e.url:e,n=this.getCacheKeyForURL(t);if(n){return(await self.caches.open(this._cacheName)).match(n)}}createHandler(e=!0){return async({request:t})=>{try{const e=await this.matchPrecache(t);if(e)return e;throw new h("missing-precache-entry",{cacheName:this._cacheName,url:t instanceof Request?t.url:t})}catch(n){if(e)return fetch(t);throw n}}}createHandlerBoundToURL(e,t=!0){if(!this.getCacheKeyForURL(e))throw new h("non-precached-url",{url:e});const n=this.createHandler(t),s=new Request(e);return()=>n({request:s})}}let v;const _=()=>(v||(v=new R),v);const U=(e,t)=>{const n=_().getURLsToCacheKeys();for(const s of function*(e,{ignoreURLParametersMatching:t,directoryIndex:n,cleanURLs:s,urlManipulation:r}={}){const c=new URL(e,location.href);c.hash="",yield c.href;const a=function(e,t=[]){for(const n of[...e.searchParams.keys()])t.some(e=>e.test(n))&&e.searchParams.delete(n);return e}(c,t);if(yield a.href,n&&a.pathname.endsWith("/")){const e=new URL(a.href);e.pathname+=n,yield e.href}if(s){const e=new URL(a.href);e.pathname+=".html",yield e.href}if(r){const e=r({url:c});for(const t of e)yield t.href}}(e,t)){const e=n.get(s);if(e)return e}};let L=!1;function q(e){L||((({ignoreURLParametersMatching:e=[/^utm_/],directoryIndex:t="index.html",cleanURLs:n=!0,urlManipulation:s}={})=>{const r=o();self.addEventListener("fetch",c=>{const a=U(c.request.url,{cleanURLs:n,directoryIndex:t,ignoreURLParametersMatching:e,urlManipulation:s});if(!a)return void 0;let o=self.caches.open(r).then(e=>e.match(a)).then(e=>e||fetch(a));c.respondWith(o)})})(e),L=!0)}const T=e=>{const t=_(),n=r.get();e.waitUntil(t.install({event:e,plugins:n}).catch(e=>{throw e}))},K=e=>{const t=_();e.waitUntil(t.activate())};var b;(function(e){_().addToCacheList(e),e.length>0&&(self.addEventListener("install",T),self.addEventListener("activate",K))})([{'revision':'8c850dfed160c71ad1b413035d121f90','url':'./index.html'},{'revision':'b43c9a5442898c492f247436d08c9452','url':'css/app.css'},{'revision':'effee56d6549ecc4d6d9f731c35c3f67','url':'js/app.js'},{'revision':'c64c486544348f10a6d6c716950bc223','url':'js/app.js.LICENSE.txt'},{'revision':'12f3fcff71c1e10de6b664447fa79bd5','url':'manifest.json'},{'revision':'8a71038a6d315fabcba1b5a30e38eeb0','url':'static/.DS_Store'},{'revision':'194577a7e20bdcc7afbb718f502c134c','url':'static/icons/.DS_Store'},{'revision':'85e154ebb1aa7c51e73bf85674cd645c','url':'static/icons/1024x1024.png'},{'revision':'aad38c93f45c039ff5eaae753df5d821','url':'static/icons/128x128.png'},{'revision':'47efa07843a29aff095e50015e084e85','url':'static/icons/144x144.png'},{'revision':'ab189ff1c3604cbecd2ccc180b6f7c25','url':'static/icons/152x152.png'},{'revision':'9ad7d46019f56396237834ced5038973','url':'static/icons/192x192.png'},{'revision':'85e154ebb1aa7c51e73bf85674cd645c','url':'static/icons/256x256.png'},{'revision':'b256a6398ba859e0bea35617bc15144c','url':'static/icons/512x512.png'},{'revision':'4e94b1d1edaea36f052ec015c03ff26b','url':'static/icons/apple-touch-icon.png'},{'revision':'aad38c93f45c039ff5eaae753df5d821','url':'static/icons/favicon.png'},{'revision':'935380360c08f70c281c78f929d301e2','url':'static/icons/favicon16.png'},{'revision':'124ddb708df95404ae791cc28f0ee9bd','url':'static/icons/favicon32.png'},{'revision':'8f9c576044c8ba9f88fe8cdc929c2825','url':'static/icons/favicon64.png'},{'revision':'5608ee8d95cf6ce2f73b3fdecf3eac31','url':'static/img/.DS_Store'},{'revision':'fe7227e3b62938c054c9bd8e13b04ae4','url':'static/img/profile.jpg'},{'revision':'194577a7e20bdcc7afbb718f502c134c','url':'static/img/workspace/.DS_Store'},{'revision':'9c61d6e3932eb661feb3e28a5ff693fd','url':'static/img/workspace/android_game.jpg'},{'revision':'c94973c00a53a37b9238e7823323485b','url':'static/img/workspace/cookeat.jpg'},{'revision':'1a0c753ed19be1cff227e6b1b3ecb393','url':'static/img/workspace/dimimons.jpg'},{'revision':'e497d39ba1236d7b434e5121ec13c470','url':'static/img/workspace/evermind_pc.jpg'},{'revision':'ebe5474704b5301f5d119343c81a4036','url':'static/img/workspace/foodiary.jpg'},{'revision':'d682e4dea426446e211595af4d83bb8c','url':'static/img/workspace/kickball.jpg'},{'revision':'7187bfe069ab6991967d7fc9fa98a430','url':'static/img/workspace/molehill.jpg'},{'revision':'06a98e363edcc69ce78c94750268c306','url':'static/img/workspace/remocon.jpg'},{'revision':'90680287f3e61a9fd611d2f472e3f727','url':'static/img/workspace/ship2d.jpg'},{'revision':'c91572ccd8d81081eb966adfc9a83d33','url':'static/img/workspace/travelbadge.jpg'},{'revision':'2e362b4d58e1868da1b6333585fa036a','url':'static/tech-icons/.DS_Store'},{'revision':'c8798dec36dd7773fa2e6f74eeb9fb2a','url':'static/tech-icons/air.png'},{'revision':'3846e3a7b38043d2b32c22e0e7f3c9d4','url':'static/tech-icons/android.png'},{'revision':'b24f9e4bcbeb247756c9c76c3db93b03','url':'static/tech-icons/flash.png'},{'revision':'ad9e031a5e88fa15647f5be50fd23361','url':'static/tech-icons/framework7.png'},{'revision':'e9aa9429d6f9690455cf8a3b47f6124e','url':'static/tech-icons/ios.png'},{'revision':'4c583a648bfd538e347f9f0aae4970bc','url':'static/tech-icons/java.png'},{'revision':'8f4be5ac62e5949e51b020e83ae65b42','url':'static/tech-icons/javascript.png'},{'revision':'08295c05c91951e25b60f3891eea6c7a','url':'static/tech-icons/nodejs.png'},{'revision':'5a9cfd48c725cb57be3896ab8dbba9b9','url':'static/tech-icons/original/.DS_Store'},{'revision':'461db9e77d2f6af23ce0495276545682','url':'static/tech-icons/original/air.png'},{'revision':'963167bc5e914da230601505dbb673e1','url':'static/tech-icons/original/android.png'},{'revision':'f2673a825dce2843993335b77928eef8','url':'static/tech-icons/original/flash.png'},{'revision':'edefc48886c8f6e4786b4b1c58c3c6e7','url':'static/tech-icons/original/framework7.png'},{'revision':'ee3610948d3b7f99e6103bdca128c279','url':'static/tech-icons/original/ios.png'},{'revision':'52314d4cc3de609192709f108a337ba0','url':'static/tech-icons/original/java.png'},{'revision':'229d139e05d84c9a99480c3dc9f53dd4','url':'static/tech-icons/original/javascript.png'},{'revision':'6ad36fa982296fca329f20dc2eaefb2c','url':'static/tech-icons/original/nodejs.png'},{'revision':'ed96b673db2cb64fe5a09f31b4ce5dac','url':'static/tech-icons/original/python.png'},{'revision':'c0c185f2fc323496d862a6abc9e58a4c','url':'static/tech-icons/original/rails.png'},{'revision':'bdeee86157327229ad90c7227c2ad891','url':'static/tech-icons/original/react.png'},{'revision':'95f2145c7b16afd9293088d954759b86','url':'static/tech-icons/original/ruby.png'},{'revision':'20a56750a7f701ad194e9c9ad2695ce0','url':'static/tech-icons/original/swift.png'},{'revision':'ccb9189be6fb9d33d6591901d273f339','url':'static/tech-icons/python.png'},{'revision':'8826bca8ab4f732fe55d484cde9f80ac','url':'static/tech-icons/rails.png'},{'revision':'1d3339223a13900b9ef060efca988c50','url':'static/tech-icons/react.png'},{'revision':'ec89edbbcb1c64bb2e99e2beee6ea8b9','url':'static/tech-icons/ruby.png'},{'revision':'36425ac267a53002d39ef3f0d1f27d75','url':'static/tech-icons/swift.png'},{'revision':'ff0ddfc09cdf005d9fbedb6c304ffcf6','url':'static/video/.DS_Store'},{'revision':'36a61c4a8d665de0512b3803f384a89f','url':'static/video/kickball.mp4'}]||[]),q(b)}]);
//# sourceMappingURL=service-worker.js.map