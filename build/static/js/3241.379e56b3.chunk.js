(self.webpackChunkplayground=self.webpackChunkplayground||[]).push([[3241],{21985:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return m}});var r=t(50189),u=t(11026),o=t(89870),i=t(1445),c=t(89597),a=t(91466),s=t(17953),l=t(49836),f=t(95022),d=t(3725),Z=t(66396),x=t(56167),v=t(37878);function m(){var e=x.useState(!1),n=(0,u.Z)(e,2),t=n[0],r=n[1],m=x.useState(!1),p=(0,u.Z)(m,2),b=p[0],g=p[1],y=x.useRef();x.useEffect((function(){return function(){clearTimeout(y.current)}}),[]);var C=function(){t||(g(!1),r(!0),y.current=window.setTimeout((function(){g(!0),r(!1)}),2e3))};return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(c.Z,{variant:"h6",children:"Circular"}),(0,v.jsxs)(a.Z,{sx:{display:"flex",alignItems:"center","& > * + *":{ml:2}},children:[(0,v.jsx)(d.Z,{}),(0,v.jsx)(d.Z,{color:"secondary"}),(0,v.jsxs)(a.Z,{sx:{m:1,position:"relative"},children:[(0,v.jsx)(s.Z,{"aria-label":"save",color:"primary",sx:b?{bgcolor:Z.Z[500],"&:hover":{bgcolor:Z.Z[700]}}:{},onClick:C,children:b?(0,v.jsx)(o.Z,{}):(0,v.jsx)(i.Z,{})}),t&&(0,v.jsx)(d.Z,{size:68,sx:{color:Z.Z[500],position:"absolute",top:-6,left:-6,zIndex:1}})]}),(0,v.jsxs)(a.Z,{sx:{m:1,position:"relative"},children:[(0,v.jsx)(l.Z,{variant:"contained",color:"primary",sx:b?{bgcolor:Z.Z[500],"&:hover":{bgcolor:Z.Z[700]}}:{},disabled:t,onClick:C,children:"Accept terms"}),t&&(0,v.jsx)(d.Z,{size:24,sx:{color:Z.Z[500],position:"absolute",top:"50%",left:"50%",marginTop:"-12px",marginLeft:"-12px"}})]})]}),(0,v.jsx)(c.Z,{variant:"h6",children:"Linear"}),(0,v.jsxs)(a.Z,{sx:{width:1,"& > * + *":{mt:2}},children:[(0,v.jsx)(f.Z,{}),(0,v.jsx)(f.Z,{color:"secondary"}),(0,v.jsx)(h,{}),(0,v.jsx)(j,{})]})]})}function h(){var e=x.useState(0),n=(0,u.Z)(e,2),t=n[0],r=n[1],o=x.useState(10),i=(0,u.Z)(o,2),c=i[0],a=i[1],s=x.useRef((function(){}));return x.useEffect((function(){s.current=function(){if(t>100)r(0),a(10);else{var e=10*Math.random(),n=10*Math.random();r(t+e),a(t+e+n)}}})),x.useEffect((function(){var e=setInterval((function(){s.current()}),500);return function(){clearInterval(e)}}),[]),(0,v.jsx)(f.Z,{variant:"buffer",value:t,valueBuffer:c})}function p(e){return(0,v.jsxs)(a.Z,{display:"flex",alignItems:"center",children:[(0,v.jsx)(a.Z,{width:"100%",mr:1,children:(0,v.jsx)(f.Z,(0,r.Z)({variant:"determinate"},e))}),(0,v.jsx)(a.Z,{minWidth:35,children:(0,v.jsx)(c.Z,{variant:"body2",color:"textSecondary",children:"".concat(Math.round(e.value),"%")})})]})}function j(){var e=x.useState(10),n=(0,u.Z)(e,2),t=n[0],r=n[1];return x.useEffect((function(){var e=setInterval((function(){r((function(e){return e>=100?10:e+10}))}),800);return function(){clearInterval(e)}}),[]),(0,v.jsx)(p,{value:t})}},91657:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return r.createSvgIcon}});var r=t(12377)},91466:function(e,n,t){"use strict";t.d(n,{Z:function(){return p}});var r=t(25773),u=t(30808),o=t(56167),i=t(40843),c=t(87489),a=t(94837),s=t(22242),l=t(4113),f=t(37878),d=["className","component"];var Z=t(89372),x=t(58620),v=t(22692),m=(0,x.Z)(),h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.themeId,t=e.defaultTheme,Z=e.defaultClassName,x=void 0===Z?"MuiBox-root":Z,v=e.generateClassName,m=(0,c.ZP)("div",{shouldForwardProp:function(e){return"theme"!==e&&"sx"!==e&&"as"!==e}})(a.Z);return o.forwardRef((function(e,o){var c=(0,l.Z)(t),a=(0,s.Z)(e),Z=a.className,h=a.component,p=void 0===h?"div":h,j=(0,u.Z)(a,d);return(0,f.jsx)(m,(0,r.Z)({as:p,ref:o,className:(0,i.Z)(Z,v?v(x):x),theme:n&&c[n]||c},j))}))}({themeId:v.Z,defaultTheme:m,defaultClassName:"MuiBox-root",generateClassName:Z.Z.generate}),p=h},58892:function(e,n,t){"use strict";var r=t(74904);n.Z=r.Z},12377:function(e,n,t){"use strict";t.r(n),t.d(n,{capitalize:function(){return u.Z},createChainedFunction:function(){return o.Z},createSvgIcon:function(){return i.Z},debounce:function(){return c.Z},deprecatedPropType:function(){return a},isMuiElement:function(){return s.Z},ownerDocument:function(){return l.Z},ownerWindow:function(){return f.Z},requirePropFactory:function(){return d},setRef:function(){return Z},unstable_ClassNameGenerator:function(){return g},unstable_useEnhancedEffect:function(){return x.Z},unstable_useId:function(){return v.Z},unsupportedProp:function(){return m},useControlled:function(){return h.Z},useEventCallback:function(){return p.Z},useForkRef:function(){return j.Z},useIsFocusVisible:function(){return b.Z}});var r=t(89372),u=t(95570),o=t(58892),i=t(55240),c=t(28287);var a=function(e,n){return function(){return null}},s=t(88051),l=t(6042),f=t(57402);t(25773);var d=function(e,n){return function(){return null}},Z=t(32589).Z,x=t(94249),v=t(83926);var m=function(e,n,t,r,u){return null},h=t(3304),p=t(69589),j=t(73484),b=t(90081),g={configure:function(e){r.Z.configure(e)}}},83926:function(e,n,t){"use strict";var r=t(30420);n.Z=r.Z},73203:function(e){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=3241.379e56b3.chunk.js.map