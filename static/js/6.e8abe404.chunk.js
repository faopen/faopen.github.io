(this.webpackJsonpplayground=this.webpackJsonpplayground||[]).push([[6,7,11,15,36,37],{108:function(t,n,e){"use strict";e.r(n),e.d(n,"ModuleState",(function(){return r})),e.d(n,"ModuleActions",(function(){return u}));var a=e(132),o=e(182),i=e(189);e.d(n,"initialState",(function(){return o.initialState}));var r=Object(a.b)({name:"welcome",initialState:o.initialState,reducers:i}),u=r.actions},112:function(t,n,e){"use strict";e.r(n);var a=e(191);e.d(n,"MainPage",(function(){return a.MainPage}))},117:function(t,n,e){"use strict";e.r(n),e.d(n,"ModuleId",(function(){return r}));var a=e(112),o=e(12),i=e(108),r="welcome",u=o.T;n.default={id:r,label:"Components",roles:[],icon:u,component:a.MainPage,subModules:[],state:i.ModuleState}},182:function(t,n,e){"use strict";e.r(n),e.d(n,"initialState",(function(){return a}));var a={loading:!0}},189:function(t,n,e){"use strict";e.r(n),e.d(n,"startLoading",(function(){return a})),e.d(n,"stopLoading",(function(){return o})),e.d(n,"setLoading",(function(){return i}));var a=function(t){t.loading=!0},o=function(t){t.loading=!1},i=function(t,n){var e=n.payload;t.loading=e}},191:function(t,n,e){"use strict";e.r(n),e.d(n,"MainPage",(function(){return f}));var a=e(0),o=e.n(a),i=e(80),r=e(69),u=e(6),c=e(132),l=e(12),d=e(108),s=function(){var t=Object(i.b)().t,n=Object(c.c)(),e=Object(c.d)();return o.a.createElement(u.b,{justifyContent:"flex-start"},o.a.createElement(u.b,{width:"auto"},o.a.createElement(u.c,{value:"Start",onClick:function(){return n(d.ModuleActions.startLoading())}}),o.a.createElement(u.c,{value:"Stop",onClick:function(){return n(d.ModuleActions.stopLoading())}}),o.a.createElement(u.c,{value:"Toggle",onClick:function(){return n(d.ModuleActions.setLoading(!e.loading))}})),o.a.createElement(u.g,{spin:e.loading,icon:l.bb}),o.a.createElement(u.l,{value:t("loading")}))},f=function(){var t=Object(i.b)().t;return o.a.createElement(r.c,{heading:t("moduleName"),toolbarContent:o.a.createElement(u.l,{variant:"h4"},"Harmony is FA Solutions' framework for React-app development")},o.a.createElement(s,null))}}}]);
//# sourceMappingURL=6.e8abe404.chunk.js.map