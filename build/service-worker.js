"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","52bfd01cb41b4764fc03597cd976fb54"],["/static/css/main.dd647a2a.css","65cef6c4be63efa22140f843d46f7b03"],["/static/js/main.5d8f6681.js","44996db8d42bc1582e1caad96578582d"],["/static/media/android.fffb5879.svg","fffb587909dcb10978d7c91fe8d7ca5f"],["/static/media/angular.c4c26d7c.png","c4c26d7c42e9ab6d560160d243019fed"],["/static/media/api-node.3b24a55b.png","3b24a55bdf64515309daf34937b08353"],["/static/media/arza.0315ba2b.png","0315ba2bd661438d1835f655980035af"],["/static/media/born.5f338e0f.jpg","5f338e0f34cd8d2510814920b219d9c6"],["/static/media/cabeza.75cc22e3.png","75cc22e3b5a88ea7916abf17335a2fbc"],["/static/media/chapela.9cf39f7e.jpg","9cf39f7e704d834a09bb42a4ebafeceb"],["/static/media/chile.dafe532a.png","dafe532a628b4b723a30d9c9fe8f2f12"],["/static/media/cronistas.49382b5c.png","49382b5c4f47a7223e1ed0037dac5c4d"],["/static/media/crowdswap-android.1b5e27ef.png","1b5e27ef0fa909cea842a37dc5f59596"],["/static/media/crowdswap-web.e55d95d7.png","e55d95d7db72c279672d60753e95e3c8"],["/static/media/csharp.7203d5af.svg","7203d5afbca835733a1ea87172e1d32f"],["/static/media/css3.a32f83aa.png","a32f83aa2c675058e4a05a0fd4da05eb"],["/static/media/express.d638bd34.png","d638bd34b425dec39792d4a81189eddf"],["/static/media/git-depth.417d5dda.png","417d5dda1186be01e6aa759eae939d11"],["/static/media/grass.2356504e.png","2356504e1f0d2b42a960e8c630bfe5ed"],["/static/media/hinchada.5476ede7.jpg","5476ede786850a11903682e3e83764cf"],["/static/media/ivon.a2e3840d.jpg","a2e3840d259a6032678cab0e5d3ef596"],["/static/media/jquery.9999c1a8.png","9999c1a8c347b81c5cb5df967664c4c3"],["/static/media/js.1cff25ec.png","1cff25ecb30cb7b4a1e54a0ed53fb22d"],["/static/media/miseria.e4b49d5b.jpg","e4b49d5baf33ab0cdb1d5a49a07817af"],["/static/media/mongo.bdff54df.png","bdff54df66dbc5f77f7250ee632426fd"],["/static/media/my-page.3eebe802.png","3eebe802ff5a5deff650c18330bde413"],["/static/media/papeles.d24c96b8.jpg","d24c96b88877d7a389bbbe329a92b029"],["/static/media/react-intro.22139693.png","221396938349c43ebdedbd97db7ecd48"],["/static/media/react.4009eef3.svg","4009eef3b3e291f296e71962c70895c5"],["/static/media/redux2.59c46753.png","59c467536111a981d904a050d335c2be"],["/static/media/swapig-angular.a0df61ea.png","a0df61ea977f4687900e166323c1b60c"],["/static/media/swapig-jquery.e3eb1379.png","e3eb137970db0396cce2927faada00b0"],["/static/media/swapig.28d6e3c8.jpg","28d6e3c8944ad50c41e0828657f15470"],["/static/media/up.951d34bc.jpg","951d34bc7d8627a0da5ae68ba282eddf"],["/static/media/usb.4e597caa.jpg","4e597caa1c74bc454ddaa32b2f813bc7"],["/static/media/webpack.1442d144.png","1442d14404ae085e5117cbf449d4bb67"],["/static/media/xamarin.f4102496.png","f4102496022c11dc995d98b28744a422"],["/static/media/yay.1329a07c.mp4","1329a07c83b045aef7ec5aa679cb23bf"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var c=new Request(t,{credentials:"same-origin"});return fetch(c).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,"index.html"),a=urlsToCacheKeys.has(t));!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL("/index.html",self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});