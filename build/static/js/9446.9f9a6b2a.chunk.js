"use strict";(self.webpackChunkplayground=self.webpackChunkplayground||[]).push([[9446,9123,597],{19446:function(n,o,r){r.r(o),r.d(o,{ModuleActions:function(){return s},ModuleState:function(){return u},colors:function(){return e.colors},useDispatch:function(){return t.I0},useModuleState:function(){return l},useModuleStateSelector:function(){return f}});var t=r(88182),e=r(59123),i=r(80597),a="logo",u=(0,t.tP)({name:a,initialState:e.default,reducers:i}),c=(0,t.ee)(a),l=c.useModuleState,f=c.useModuleStateSelector,s=u.actions},59123:function(n,o,r){r.r(o),r.d(o,{colors:function(){return t}});var t={brand:"#AE001A"};o.default={loading:!0,isConfigDrawerOpen:!0,config:{size:200,color:{primary:t.brand,secondary:""},text:"",variant:"all",icon:"all"}}},80597:function(n,o,r){r.r(o),r.d(o,{setColor:function(){return l},setIcon:function(){return c},setLoading:function(){return i},setVariant:function(){return u},toggleConfigDrawer:function(){return a},toggleLoading:function(){return e}});var t=r(50189),e=function(n){n.loading=!n.loading},i=function(n,o){var r=o.payload;n.loading=r},a=function(n){n.isConfigDrawerOpen=!n.isConfigDrawerOpen},u=function(n,o){var r=o.payload;n.config.variant=r},c=function(n,o){var r=o.payload;n.config.icon=r},l=function(n,o){var r=o.payload;if("string"===typeof r){var e=r.split("@");n.config.color.primary=e[0],e.length>0&&(n.config.color.secondary=e[1])}else n.config.color=(0,t.Z)((0,t.Z)({},n.config.color),r)}}}]);
//# sourceMappingURL=9446.9f9a6b2a.chunk.js.map