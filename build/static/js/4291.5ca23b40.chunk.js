"use strict";(self.webpackChunkplayground=self.webpackChunkplayground||[]).push([[4291,2251,6605,9446,9123,597],{42251:function(n,e,o){o.r(e),o.d(e,{ComboBox:function(){return u}});var t=o(50189),a=o(89567),r=o(74851),l=o(31913),i=o(37878),u=function(n){return(0,i.jsxs)("div",{children:[n.label&&(0,i.jsx)("div",{style:{marginLeft:r.rS.spacing.sm},children:(0,i.jsx)(l.xv,{value:n.label,variant:"h5"})}),(0,i.jsx)(a.hQ,(0,t.Z)((0,t.Z)({},n),{},{name:n.label})),n.helpText&&(0,i.jsx)(l.xv,{value:n.helpText,variant:"small",color:"secondary"})]})};e.default=u},54291:function(n,e,o){o.r(e),o.d(e,{ConfigDrawer:function(){return p}});var t=o(11026),a=o(56167),r=o(6380),l=o(74851),i=o(42006),u=o(19446),c=o(42251),s=o(6605),f=o(37878),d={variants:[{value:"all",label:"All"},{value:"company",label:"Company branding"},{value:"platform",label:"Apps branding"}],icon:[{value:"all",label:"All"},{value:"transparent",label:"Transparent"},{value:"opaque",label:"Opaque"}]},g=function(n,e){return d[n].find((function(n){return n.value===e}))||d[n][0]},v=function(n){var e=n.onChange,o=(0,u.useModuleState)().config.color,r=a.useState(o.primary),l=(0,t.Z)(r,2),i=l[0],c=l[1];return(0,f.jsx)(s.InputField,{handleChange:function(n){c(n),e({value:n,label:""})},value:i,type:"color"})},p=function(){var n=(0,u.useDispatch)(),e=(0,u.useModuleState)(),o=e.isConfigDrawerOpen,t=e.config,a=t.variant,s=t.icon,p=function(e,o){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"all",a=e.toString().split("set")[1],r=(null===o||void 0===o?void 0:o.value)||t;n(e(r)),(0,i.fo)(a,r)};return o?(0,f.jsx)(r.J7,{caption:"Logo",heading:"Configuration",onClose:function(){return n(u.ModuleActions.toggleConfigDrawer())},children:(0,f.jsxs)(l.xu,{direction:"column",alignItems:"normal",style:{padding:l.rS.spacing.md},children:[(0,f.jsx)(c.ComboBox,{label:"Variant",placeholder:"Select variant...",options:d.variants,defaultValue:g("variants",a),onChange:function(n){return p(u.ModuleActions.setVariant,n)}}),(0,f.jsx)(c.ComboBox,{label:"Icon style",placeholder:"Select icon style...",options:d.icon,defaultValue:g("icon",s),onChange:function(n){return p(u.ModuleActions.setIcon,n)}}),(0,f.jsx)(v,{onChange:function(n){return p(u.ModuleActions.setColor,n)}})]})}):null};e.default=p},6605:function(n,e,o){o.r(e),o.d(e,{InputField:function(){return s}});var t,a=o(50189),r=o(50669),l=(o(56167),o(74851)),i=o(31913),u=o(37878),c=l.zo.input(t||(t=(0,r.Z)(["\n  height: 36px;\n"]))),s=function(n){var e=n.label,o=n.helpText,t=n.handleChange;return(0,u.jsxs)("div",{children:[e&&(0,u.jsx)("div",{style:{marginLeft:l.rS.spacing.sm},children:(0,u.jsx)(i.xv,{value:e,variant:"h5"})}),(0,u.jsx)(c,(0,a.Z)((0,a.Z)({},n),{},{onChange:function(n){return t(n.target.value)}})),o&&(0,u.jsx)(i.xv,{value:o,variant:"small",color:"secondary"})]})};e.default=s},19446:function(n,e,o){o.r(e),o.d(e,{ModuleActions:function(){return f},ModuleState:function(){return i},colors:function(){return a.colors},useDispatch:function(){return t.I0},useModuleState:function(){return c},useModuleStateSelector:function(){return s}});var t=o(88182),a=o(59123),r=o(80597),l="logo",i=(0,t.tP)({name:l,initialState:a.default,reducers:r}),u=(0,t.ee)(l),c=u.useModuleState,s=u.useModuleStateSelector,f=i.actions},59123:function(n,e,o){o.r(e),o.d(e,{colors:function(){return t}});var t={brand:"#AE001A"};e.default={loading:!0,isConfigDrawerOpen:!0,config:{size:200,color:{primary:t.brand,secondary:""},text:"",variant:"all",icon:"all"}}},80597:function(n,e,o){o.r(e),o.d(e,{setColor:function(){return c},setIcon:function(){return u},setLoading:function(){return r},setVariant:function(){return i},toggleConfigDrawer:function(){return l},toggleLoading:function(){return a}});var t=o(50189),a=function(n){n.loading=!n.loading},r=function(n,e){var o=e.payload;n.loading=o},l=function(n){n.isConfigDrawerOpen=!n.isConfigDrawerOpen},i=function(n,e){var o=e.payload;n.config.variant=o},u=function(n,e){var o=e.payload;n.config.icon=o},c=function(n,e){var o=e.payload;if("string"===typeof o){var a=o.split("@");n.config.color.primary=a[0],a.length>0&&(n.config.color.secondary=a[1])}else n.config.color=(0,t.Z)((0,t.Z)({},n.config.color),o)}}}]);
//# sourceMappingURL=4291.5ca23b40.chunk.js.map