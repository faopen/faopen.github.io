(this.webpackJsonpplayground=this.webpackJsonpplayground||[]).push([[31,7,35,43],{115:function(e,t,n){"use strict";n.r(t),n.d(t,"ModuleState",(function(){return a})),n.d(t,"ModuleActions",(function(){return d})),n.d(t,"useModuleState",(function(){return s})),n.d(t,"useModuleStateSelector",(function(){return l}));var r=n(143);n.d(t,"useDispatch",(function(){return r.d}));var o=n(206),i=n(208);n.d(t,"colors",(function(){return o.colors}));var c="logo",a=Object(r.b)({name:c,initialState:o.default,reducers:i}),u=Object(r.c)(c),s=u.useModuleState,l=u.useModuleStateSelector,d=a.actions},206:function(e,t,n){"use strict";n.r(t),n.d(t,"colors",(function(){return r}));var r={brand:"#AE001A"};t.default={loading:!0,isConfigDrawerOpen:!0,config:{size:200,color:{primary:r.brand,secondary:""},text:"",variant:"all",icon:"all"}}},208:function(e,t,n){"use strict";n.r(t),n.d(t,"toggleLoading",(function(){return o})),n.d(t,"setLoading",(function(){return i})),n.d(t,"toggleConfigDrawer",(function(){return c})),n.d(t,"setVariant",(function(){return a})),n.d(t,"setIcon",(function(){return u})),n.d(t,"setColor",(function(){return s}));var r=n(336),o=function(e){e.loading=!e.loading},i=function(e,t){var n=t.payload;e.loading=n},c=function(e){e.isConfigDrawerOpen=!e.isConfigDrawerOpen},a=function(e,t){var n=t.payload;e.config.variant=n},u=function(e,t){var n=t.payload;e.config.icon=n},s=function(e,t){var n=t.payload;if("string"===typeof n){var o=n.split("@");e.config.color.primary=o[0],o.length>0&&(e.config.color.secondary=o[1])}else e.config.color=Object(r.a)(Object(r.a)({},e.config.color),n)}},210:function(e,t,n){"use strict";n.r(t),n.d(t,"Display",(function(){return c}));var r=n(2),o=(n(0),n(5)),i=n(115),c=function(){return Object(i.useModuleState)().loading?Object(r.jsx)(o.h,{}):Object(r.jsxs)("div",{children:[Object(r.jsx)(o.l,{value:"All generated logos will appear here. They can be configured using side-drawer.",color:"disabled"}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsx)(o.a,{independent:!0,panels:[{id:"standard",heading:"Standard logos",defaultActive:!0,content:Object(r.jsx)("div",{})},{id:"custom",heading:"Customized logos",defaultActive:!0,content:Object(r.jsx)("div",{})}]})]})};t.default=c},336:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}n.d(t,"a",(function(){return i}))}}]);
//# sourceMappingURL=31.e9d1d19c.chunk.js.map