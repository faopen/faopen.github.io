"use strict";(self.webpackChunkplayground=self.webpackChunkplayground||[]).push([[9116],{79116:(n,t,r)=>{r.r(t),r.d(t,{AreaChart:()=>i});var e=r(22099),o=r(1088),a=r(6507);const i=()=>(0,a.jsx)(e.t,{options:{chart:{zoomType:"x"},title:{text:"Area Chart"},xAxis:{type:"datetime"},series:[{type:"area",name:"USD/EUR",data:o.areaChartData}],legend:{enabled:!1},plotOptions:{area:{fillColor:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[0,"#686ae7b3"],[1,"#b1baf100"]]},marker:{radius:2},lineWidth:1,states:{hover:{lineWidth:1}},threshold:null}}}})},22099:(n,t,r)=>{r.d(t,{t:()=>rn});var e,o=r(6507),a=r(63672),i=r.n(a),l=r(2009),s=r.n(l),c=r(19495),h=r.n(c),p=r(50846),u=r.n(p),d=r(67467),f=r(64600),b=r(5743),m=r.n(b),g=r(59643),y=r(53277),x=r.n(y),v=r(81582),k=function(n,t){var r="function"===typeof Symbol&&n[Symbol.iterator];if(!r)return n;var e,o,a=r.call(n),i=[];try{for(;(void 0===t||t-- >0)&&!(e=a.next()).done;)i.push(e.value)}catch(l){o={error:l}}finally{try{e&&!e.done&&(r=a.return)&&r.call(a)}finally{if(o)throw o.error}}return i},w=v.w4.color,j=(0,v.vt)(v.w4.text),C={tickColor:w.text.secondary,lineColor:w.text.secondary,gridLineColor:w.border.default,minorGridLineColor:w.border.default,labels:{useHTML:!0,style:{fontFamily:j,color:w.text.secondary}},title:{useHTML:!0,style:{fontFamily:j,color:w.text.primary}}},P={buttons:{contextButton:{symbol:"export",symbolFill:w.text.secondary,theme:{fill:"transparent",stroke:w.border.default},menuItems:["printChart","downloadPNG","downloadJPEG","downloadPDF","downloadSVG"]}}},O={itemStyle:{fontFamily:j,fontWeight:"bold",fontSize:"0.75rem",color:w.text.secondary},itemHoverStyle:{color:w.text.primary}},F={borderColor:w.border.default,backgroundColor:w.background.primary,borderRadius:8,style:{fontFamily:j,color:w.text.secondary},useHTML:!0},S={backgroundColor:"transparent",className:"chart",style:{fontFamily:j,color:w.text.primary}},L={align:"left",useHTML:!0,margin:32,style:{fontFamily:j,fontWeight:"bold",fontSize:"1rem",color:w.text.primary},y:16,x:0,widthAdjust:-32},T={align:"left",useHTML:!0,style:{fontFamily:j,fontSize:"1rem",color:w.text.secondary},y:48,x:0},R={enabled:!1},H={},z=function(n){var t={legend:{enabled:!0}},r={colors:["#058DC7","#50B432","#ED561B","#DDDF00","#24CBE5","#64E572","#FF9655","#FFF263","#6AF9C4"],lang:H,credits:R,title:L,subtitle:T,chart:S,tooltip:F,legend:O,xAxis:C,yAxis:C,exporting:P},e=function(n){return x()(t,n,r)},o=k((0,g.useState)(e(n)),2),a=o[0],i=o[1];return(0,g.useEffect)((function(){i(e(n))}),[n]),a},A=function(n,t){return Object.defineProperty?Object.defineProperty(n,"raw",{value:t}):n.raw=t,n},D=v.w4.color,N=v.w4.radius,M=v.w4.shadow,E=(0,v.vt)(v.w4.text),G=v.I4.div(e||(e=A(["\n  position: relative;\n  background: ",";\n  border-radius: ",";\n  /* margin: ","; */\n  border: 1px solid\n    ",";\n  box-shadow: ",";\n  overflow: hidden;\n  height: 100%;\n\n  a {\n    color: currentColor;\n  }\n\n  .header {\n    position: absolute;\n    top: 0px;\n    left: 0;\n    right: 0;\n    z-index: 0;\n    height: 40px;\n    background: ",";\n    border-bottom: 1px solid\n      ",";\n  }\n\n  div:nth-of-type(2) {\n    height: 100%;\n  }\n\n  .highcharts-title {\n    overflow: hidden;\n    white-space: "," !important;\n  }\n\n  .highcharts-root {\n    height: 100%;\n  }\n\n  .highcharts-button-box {\n    fill: transparent !important;\n    width: 28px;\n    height: 28px;\n    transform: translate(-4px, -5px);\n  }\n\n  .highcharts-button {\n    text {\n      color: unset !important;\n      fill: unset !important;\n    }\n  }\n\n  .highcharts-button-symbol {\n    transform: translate(-2px, -3px);\n  }\n\n  .highcharts-button-box {\n    stroke: none;\n  }\n\n  .highcharts-label {\n    text {\n      color: unset !important;\n      fill: unset !important;\n    }\n    &.highcharts-drilldown-data-label {\n      text {\n        color: "," !important;\n        fill: "," !important;\n      }\n    }\n\n    .highcharts-text-outline {\n      stroke: transparent !important;\n      fill: transparent !important;\n    }\n  }\n\n  .highcharts-menu {\n    background: "," !important;\n    border: 1px solid "," !important;\n    border-radius: "," !important;\n    box-shadow: "," !important;\n\n    .highcharts-menu-item {\n      font-family: "," !important;\n      color: "," !important;\n\n      :hover {\n        color: "," !important;\n        background: "," !important;\n      }\n    }\n  }\n\n  .highcharts-scrollbar-track {\n    stroke: transparent !important;\n    fill:  transparent !important;\n  }\n  .highcharts-scrollbar-thumb{\n    stroke: transparent !important;\n    fill:  "," !important;\n  }\n  /* three vertical lines on a scrollbar thumb*/\n  .highcharts-scrollbar-rifles{ \n    stroke: "," !important;\n  }\n  .highcharts-scrollbar-button{\n    stroke: "," !important;\n    fill:  transparent !important;\n  }\n  .highcharts-scrollbar-arrow{\n    fill:  "," !important;\n  }\n"],["\n  position: relative;\n  background: ",";\n  border-radius: ",";\n  /* margin: ","; */\n  border: 1px solid\n    ",";\n  box-shadow: ",";\n  overflow: hidden;\n  height: 100%;\n\n  a {\n    color: currentColor;\n  }\n\n  .header {\n    position: absolute;\n    top: 0px;\n    left: 0;\n    right: 0;\n    z-index: 0;\n    height: 40px;\n    background: ",";\n    border-bottom: 1px solid\n      ",";\n  }\n\n  div:nth-of-type(2) {\n    height: 100%;\n  }\n\n  .highcharts-title {\n    overflow: hidden;\n    white-space: "," !important;\n  }\n\n  .highcharts-root {\n    height: 100%;\n  }\n\n  .highcharts-button-box {\n    fill: transparent !important;\n    width: 28px;\n    height: 28px;\n    transform: translate(-4px, -5px);\n  }\n\n  .highcharts-button {\n    text {\n      color: unset !important;\n      fill: unset !important;\n    }\n  }\n\n  .highcharts-button-symbol {\n    transform: translate(-2px, -3px);\n  }\n\n  .highcharts-button-box {\n    stroke: none;\n  }\n\n  .highcharts-label {\n    text {\n      color: unset !important;\n      fill: unset !important;\n    }\n    &.highcharts-drilldown-data-label {\n      text {\n        color: "," !important;\n        fill: "," !important;\n      }\n    }\n\n    .highcharts-text-outline {\n      stroke: transparent !important;\n      fill: transparent !important;\n    }\n  }\n\n  .highcharts-menu {\n    background: "," !important;\n    border: 1px solid "," !important;\n    border-radius: "," !important;\n    box-shadow: "," !important;\n\n    .highcharts-menu-item {\n      font-family: "," !important;\n      color: "," !important;\n\n      :hover {\n        color: "," !important;\n        background: "," !important;\n      }\n    }\n  }\n\n  .highcharts-scrollbar-track {\n    stroke: transparent !important;\n    fill:  transparent !important;\n  }\n  .highcharts-scrollbar-thumb{\n    stroke: transparent !important;\n    fill:  "," !important;\n  }\n  /* three vertical lines on a scrollbar thumb*/\n  .highcharts-scrollbar-rifles{ \n    stroke: "," !important;\n  }\n  .highcharts-scrollbar-button{\n    stroke: "," !important;\n    fill:  transparent !important;\n  }\n  .highcharts-scrollbar-arrow{\n    fill:  "," !important;\n  }\n"])),(function(n){return n.headless?"none":D.background.primary}),(function(n){return n.headless?0:N[500]}),(function(n){return n.headless?0:v.w4.spacing.sm}),(function(n){return n.headless?"none":D.border.default}),(function(n){return n.headless?"none":M.default}),(function(n){return n.headless?"transparent":D.background.default}),(function(n){return n.headless?"transparent":D.border.default}),(function(n){return n.headless?"initial":"nowrap"}),D.text.info,D.text.info,D.background.primary,D.border.default,N[300],M.hover,E,D.text.secondary,D.text.primary,D.background.hover,D.background.primary,D.text.secondary,D.border.default,D.text.secondary),B=function(){return B=Object.assign||function(n){for(var t,r=1,e=arguments.length;r<e;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o]);return n},B.apply(this,arguments)},V={},W=function(n){var t=n.options,r=n.constructorType,e=void 0===r?"chart":r,a=n.callback,l=n.containerProps,s=n.headless,c=(0,f.merge)(z(t),V),h={id:(0,d.uR)()};return(0,o.jsxs)(G,B({headless:s},{children:[(0,o.jsx)("div",{className:"header"}),(0,o.jsx)(m(),{highcharts:i(),options:c,containerProps:l||h,callback:a,constructorType:e})]}))};var I=function(){return I=Object.assign||function(n){for(var t,r=1,e=arguments.length;r<e;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o]);return n},I.apply(this,arguments)},U={chart:{type:"area"}},J=function(){return J=Object.assign||function(n){for(var t,r=1,e=arguments.length;r<e;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o]);return n},J.apply(this,arguments)},Y=function(n,t){var r="function"===typeof Symbol&&n[Symbol.iterator];if(!r)return n;var e,o,a=r.call(n),i=[];try{for(;(void 0===t||t-- >0)&&!(e=a.next()).done;)i.push(e.value)}catch(l){o={error:l}}finally{try{e&&!e.done&&(r=a.return)&&r.call(a)}finally{if(o)throw o.error}}return i},Z={chart:{type:"bar"}},q=function(n){var t=(0,g.useRef)(null),r=Y((0,g.useState)(),2),e=r[0],a=r[1],l=(0,f.merge)(z(n.options),Z),s={id:(0,d.uR)()};return(0,d.wY)({ref:t,onResize:function(){e&&e.setSize(null,null)}}),(0,o.jsxs)(G,J({headless:n.headless,ref:t},{children:[(0,o.jsx)("div",{className:"header"}),(0,o.jsx)(m(),{highcharts:i(),options:l,containerProps:n.containerProps||s,callback:function(t){a(t),n.callback&&n.callback(t)},constructorType:"chart"})]}))};var K=function(){return K=Object.assign||function(n){for(var t,r=1,e=arguments.length;r<e;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o]);return n},K.apply(this,arguments)},Q={chart:{type:"line"}},X=function(n){var t=(0,f.merge)(z(n.options),Q),r={id:(0,d.uR)()};return(0,o.jsxs)(G,K({headless:n.headless},{children:[(0,o.jsx)("div",{className:"header"}),(0,o.jsx)(m(),{highcharts:i(),options:t,containerProps:n.containerProps||r,callback:n.callback,constructorType:"chart"})]}))};var $=function(){return $=Object.assign||function(n){for(var t,r=1,e=arguments.length;r<e;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o]);return n},$.apply(this,arguments)},_={chart:{type:"pie"}},nn=function(n){var t=(0,f.merge)(z(n.options),_),r={id:(0,d.uR)()};return(0,o.jsxs)(G,$({headless:n.headless},{children:[(0,o.jsx)("div",{className:"header"}),(0,o.jsx)(m(),{highcharts:i(),options:t,containerProps:n.containerProps||r,callback:n.callback,constructorType:"chart"})]}))};var tn=function(){return tn=Object.assign||function(n){for(var t,r=1,e=arguments.length;r<e;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o]);return n},tn.apply(this,arguments)};s()(i()),h()(i()),u()(i()),i().SVGRenderer.prototype.symbols.export=function(){return["M8.94376 9.29983H18.4887L14.0168 5.18227C13.6642 4.85766 13.6259 4.28938 13.93 3.91325C14.2354 3.53599 14.7685 3.49287 15.12 3.81999L21.3075 9.48632C21.4629 9.68984 21.6 9.93734 21.6 10.1998C21.6 10.4612 21.4935 10.7091 21.3079 10.8801L15.1204 16.5464C14.9611 16.6941 14.7642 16.7657 14.5688 16.7657C14.3325 16.7657 14.0973 16.6603 13.9303 16.454C13.626 16.0779 13.6645 15.5094 14.0171 15.185L18.489 11.0674H8.94376C6.9279 11.0674 5.28751 12.8168 5.28751 14.9337V19.4001C5.28751 19.9988 4.90958 20.4 4.44376 20.4C3.97794 20.4 3.60001 19.9988 3.60001 19.5V15.0337C3.60001 11.8574 5.99731 9.29983 8.94376 9.29983Z"]};var rn=function(n){return i()?(0,o.jsx)(W,tn({},n)):(0,o.jsx)("span",{children:"Library Highcharts is missing. Install the NPM library."})};rn.Line=X,rn.Bar=q,rn.Area=function(n){var t=(0,f.merge)(z(n.options),U),r={id:(0,d.uR)()};return(0,o.jsxs)(G,I({headless:n.headless},{children:[(0,o.jsx)("div",{className:"header"}),(0,o.jsx)(m(),{highcharts:i(),options:t,containerProps:n.containerProps||r,callback:n.callback,constructorType:"chart"})]}))},rn.Pie=nn}}]);
//# sourceMappingURL=9116.5a394116.chunk.js.map