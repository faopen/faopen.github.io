(this.webpackJsonpplayground=this.webpackJsonpplayground||[]).push([[5,10,14,29,30,31,37,38],{114:function(e,n,t){"use strict";t.r(n),t.d(n,"ModuleState",(function(){return o})),t.d(n,"ModuleActions",(function(){return i}));var a=t(139),r=t(223),l=t(226);t.d(n,"colors",(function(){return r.colors}));var o=Object(a.b)({name:"logo",initialState:r.default,reducers:l}),i=o.actions},116:function(e,n,t){"use strict";t.r(n);var a=t(225);t.d(n,"ConfigDrawer",(function(){return a.ConfigDrawer}));var r=t(227);t.d(n,"Display",(function(){return r.Display}))},223:function(e,n,t){"use strict";t.r(n),t.d(n,"colors",(function(){return a}));var a={brand:"#AE001A"};n.default={loading:!0,isConfigDrawerOpen:!0,config:{size:200,color:{primary:a.brand,secondary:""},text:"",variant:"all",icon:"all"}}},225:function(e,n,t){"use strict";t.r(n),t.d(n,"ConfigDrawer",(function(){return m}));var a=t(8),r=t(0),l=t.n(r),o=t(78),i=t(1),c=t(139),u=t(46),d=t(114),s=t(228),f=t(229),g={variants:[{value:"all",label:"All"},{value:"company",label:"Company branding"},{value:"platform",label:"Apps branding"}],icon:[{value:"all",label:"All"},{value:"transparent",label:"Transparent"},{value:"opaque",label:"Opaque"}]},v=function(e,n){return g[e].find((function(e){return e.value===n}))||g[e][0]},p=function(e){var n=e.onChange,t=Object(c.d)().config.color,r=l.a.useState(t.primary),o=Object(a.a)(r,2),i=o[0],u=o[1];return l.a.createElement(f.InputField,{handleChange:function(e){u(e),n({value:e,label:""})},value:i,type:"color"})},m=function(){var e=Object(c.c)(),n=Object(c.d)(),t=n.isConfigDrawerOpen,a=n.config,r=a.variant,f=a.icon,m=function(n,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"all",r=n.toString().split("set")[1],l=(null===t||void 0===t?void 0:t.value)||a;e(n(l)),Object(u.e)(r,l)};return t?l.a.createElement(o.e,{caption:"Logo",heading:"Configuration",onClose:function(){return e(d.ModuleActions.toggleConfigDrawer())}},l.a.createElement(i.b,{direction:"column",alignItems:"normal",style:{padding:i.e.spacing()}},l.a.createElement(s.ComboBox,{label:"Variant",placeholder:"Select variant...",options:g.variants,defaultValue:v("variants",r),onChange:function(e){return m(d.ModuleActions.setVariant,e)}}),l.a.createElement(s.ComboBox,{label:"Icon style",placeholder:"Select icon style...",options:g.icon,defaultValue:v("icon",f),onChange:function(e){return m(d.ModuleActions.setIcon,e)}}),l.a.createElement(p,{onChange:function(e){return m(d.ModuleActions.setColor,e)}}))):null};n.default=m},226:function(e,n,t){"use strict";t.r(n),t.d(n,"toggleLoading",(function(){return r})),t.d(n,"setLoading",(function(){return l})),t.d(n,"toggleConfigDrawer",(function(){return o})),t.d(n,"setVariant",(function(){return i})),t.d(n,"setIcon",(function(){return c})),t.d(n,"setColor",(function(){return u}));var a=t(6),r=function(e){e.loading=!e.loading},l=function(e,n){var t=n.payload;e.loading=t},o=function(e){e.isConfigDrawerOpen=!e.isConfigDrawerOpen},i=function(e,n){var t=n.payload;e.config.variant=t},c=function(e,n){var t=n.payload;e.config.icon=t},u=function(e,n){var t=n.payload;if("string"===typeof t){var r=t.split("@");e.config.color.primary=r[0],r.length>0&&(e.config.color.secondary=r[1])}else e.config.color=Object(a.a)(Object(a.a)({},e.config.color),t)}},227:function(e,n,t){"use strict";t.r(n),t.d(n,"Display",(function(){return i}));var a=t(0),r=t.n(a),l=t(7),o=t(139),i=function(){return Object(o.d)().loading?r.a.createElement(l.h,null):r.a.createElement("div",null,r.a.createElement(l.l,{value:"All generated logos will appear here. They can be configured using side-drawer.",color:"disabled"}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(l.a,{independent:!0,panels:[{id:"standard",heading:"Standard logos",defaultActive:!0,content:r.a.createElement("div",null)},{id:"custom",heading:"Customized logos",defaultActive:!0,content:r.a.createElement("div",null)}]}))};n.default=i},228:function(e,n,t){"use strict";t.r(n),t.d(n,"ComboBox",(function(){return c}));var a=t(0),r=t.n(a),l=t(140),o=t(1),i=t(7),c=function(e){return r.a.createElement("div",null,e.label&&r.a.createElement("div",{style:{marginLeft:o.e.spacing("sm")}},r.a.createElement(i.l,{value:e.label,variant:"h5"})),r.a.createElement(l.b,Object.assign({},e,{name:e.label})),e.helpText&&r.a.createElement(i.l,{value:e.helpText,variant:"small",color:"secondary"}))};n.default=c},229:function(e,n,t){"use strict";t.r(n),t.d(n,"InputField",(function(){return d}));var a=t(11),r=t(0),l=t.n(r),o=t(1),i=t(7);function c(){var e=Object(a.a)(["\n  height: 36px;\n"]);return c=function(){return e},e}var u=o.l.input(c()),d=function(e){var n=e.label,t=e.helpText,a=e.handleChange;return l.a.createElement("div",null,n&&l.a.createElement("div",{style:{marginLeft:o.e.spacing("sm")}},l.a.createElement(i.l,{value:n,variant:"h5"})),l.a.createElement(u,Object.assign({},e,{onChange:function(e){return a(e.target.value)}})),t&&l.a.createElement(i.l,{value:t,variant:"small",color:"secondary"}))};n.default=d}}]);
//# sourceMappingURL=5.01007dfd.chunk.js.map