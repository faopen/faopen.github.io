(this.webpackJsonpplayground=this.webpackJsonpplayground||[]).push([[9,32,38],{117:function(t,n,e){"use strict";e.r(n);var r=e(202);e.d(n,"sampleRestApi",(function(){return r.sampleRestApi}))},198:function(t,n,e){"use strict";e.r(n),e.d(n,"apiInstance",(function(){return u})),e.d(n,"returnStatus",(function(){return s})),e.d(n,"returnJSON",(function(){return c})),e.d(n,"returnSuccess",(function(){return a})),e.d(n,"displayResult",(function(){return i})),e.d(n,"returnWarning",(function(){return o}));var r=e(28),u=r.g.create({baseURL:"/services/service-name"});u.interceptors.request.use((function(t){return t.headers.Authorization="Bearer ".concat(Object(r.i)()||""),t}),(function(t){return Promise.reject(t)})),n.default=u;var s=function(t){return t.status&&(200===t.status||201===t.status||204===t.status)},c=function(t){return s(t)?t.data.result:console.warn(t.statusText)},a=function(t){return s(t)?t.data.result.success:console.warn(t.statusText)},i=console.dir,o=console.error},202:function(t,n,e){"use strict";e.r(n),e.d(n,"sampleRestApi",(function(){return u}));var r=e(198),u=function(t){var n=t.cancelToken;return r.default.get("endpoint",{cancelToken:n}).then(r.returnSuccess).catch(r.returnWarning)}}}]);
//# sourceMappingURL=9.6f53409b.chunk.js.map