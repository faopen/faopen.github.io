(this.webpackJsonpplayground=this.webpackJsonpplayground||[]).push([[15,11,36,37],{109:function(t,n,e){"use strict";e.r(n),e.d(n,"ModuleState",(function(){return r})),e.d(n,"ModuleActions",(function(){return c}));var a=e(133),i=e(217),o=e(224);e.d(n,"initialState",(function(){return i.initialState}));var r=Object(a.b)({name:"welcome",initialState:i.initialState,reducers:o}),c=r.actions},217:function(t,n,e){"use strict";e.r(n),e.d(n,"initialState",(function(){return a}));var a={loading:!0}},224:function(t,n,e){"use strict";e.r(n),e.d(n,"startLoading",(function(){return a})),e.d(n,"stopLoading",(function(){return i})),e.d(n,"setLoading",(function(){return o}));var a=function(t){t.loading=!0},i=function(t){t.loading=!1},o=function(t,n){var e=n.payload;t.loading=e}},226:function(t,n,e){"use strict";e.r(n),e.d(n,"MainPage",(function(){return f}));var a=e(0),i=e.n(a),o=e(81),r=e(70),c=e(6),u=e(133),l=e(14),d=e(109),s=function(){var t=Object(o.b)().t,n=Object(u.c)(),e=Object(u.d)();return i.a.createElement(c.b,{justifyContent:"flex-start"},i.a.createElement(c.b,{width:"auto"},i.a.createElement(c.c,{value:"Start",onClick:function(){return n(d.ModuleActions.startLoading())}}),i.a.createElement(c.c,{value:"Stop",onClick:function(){return n(d.ModuleActions.stopLoading())}}),i.a.createElement(c.c,{value:"Toggle",onClick:function(){return n(d.ModuleActions.setLoading(!e.loading))}})),i.a.createElement(c.g,{spin:e.loading,icon:l.V}),i.a.createElement(c.l,{value:t("loading")}))},f=function(){var t=Object(o.b)().t;return i.a.createElement(r.c,{heading:t("moduleName"),toolbarContent:i.a.createElement(c.l,{variant:"h4"},"Harmony is FA Solutions' framework for React-app development")},i.a.createElement(s,null))}}}]);
//# sourceMappingURL=15.ef7b025f.chunk.js.map