(this.webpackJsonpplayground=this.webpackJsonpplayground||[]).push([[20],{299:function(n,t,r){"use strict";r.r(t),r.d(t,"PieChart",(function(){return a}));var e=r(474),o=r(1),a=function(){return Object(o.jsx)(e.a,{options:{chart:{type:"pie"},title:{text:"Browser market shares. January, 2018"},subtitle:{text:'Click the slices to view versions. Source: <a href="http://statcounter.com" target="_blank">statcounter.com</a>'},accessibility:{announceNewData:{enabled:!0},point:{valueSuffix:"%"}},plotOptions:{series:{dataLabels:{enabled:!0,format:"{point.name}: {point.y:.1f}%"}}},tooltip:{headerFormat:'<span style="font-size:11px">{series.name}</span><br>',pointFormat:'<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'},series:[{name:"Browsers",colorByPoint:!0,data:[{name:"Chrome",y:62.74,drilldown:"Chrome"},{name:"Firefox",y:10.57,drilldown:"Firefox"},{name:"Internet Explorer",y:7.23,drilldown:"Internet Explorer"},{name:"Safari",y:5.58,drilldown:"Safari"},{name:"Edge",y:4.02,drilldown:"Edge"},{name:"Opera",y:1.92,drilldown:"Opera"},{name:"Other",y:7.62,drilldown:null}]}],drilldown:{series:[{name:"Chrome",id:"Chrome",data:[["v65.0",.1],["v64.0",1.3],["v63.0",53.02],["v62.0",1.4],["v61.0",.88],["v60.0",.56],["v59.0",.45],["v58.0",.49],["v57.0",.32],["v56.0",.29],["v55.0",.79],["v54.0",.18],["v51.0",.13],["v49.0",2.16],["v48.0",.13],["v47.0",.11],["v43.0",.17],["v29.0",.26]]},{name:"Firefox",id:"Firefox",data:[["v58.0",1.02],["v57.0",7.36],["v56.0",.35],["v55.0",.11],["v54.0",.1],["v52.0",.95],["v51.0",.15],["v50.0",.1],["v48.0",.31],["v47.0",.12]]},{name:"Internet Explorer",id:"Internet Explorer",data:[["v11.0",6.2],["v10.0",.29],["v9.0",.27],["v8.0",.47]]},{name:"Safari",id:"Safari",data:[["v11.0",3.39],["v10.1",.96],["v10.0",.36],["v9.1",.54],["v9.0",.13],["v5.1",.2]]},{name:"Edge",id:"Edge",data:[["v16",2.6],["v15",.92],["v14",.4],["v13",.1]]},{name:"Opera",id:"Opera",data:[["v50.0",.96],["v49.0",.82],["v12.1",.14]]}]}}})}},474:function(n,t,r){"use strict";r.d(t,"a",(function(){return rn}));var e,o=r(1),a=r(433),i=r.n(a),l=r(514),s=r.n(l),c=r(523),h=r.n(c),p=r(524),d=r.n(p),u=r(11),b=r(445),f=r(446),m=r.n(f),y=r(0),g=r(526),x=r.n(g),v=r(2),j=function(n,t){var r="function"===typeof Symbol&&n[Symbol.iterator];if(!r)return n;var e,o,a=r.call(n),i=[];try{for(;(void 0===t||t-- >0)&&!(e=a.next()).done;)i.push(e.value)}catch(l){o={error:l}}finally{try{e&&!e.done&&(r=a.return)&&r.call(a)}finally{if(o)throw o.error}}return i},O=v.o.color,k=Object(v.g)(v.o.text),w={tickColor:O.text.secondary,lineColor:O.text.secondary,gridLineColor:O.border.default,minorGridLineColor:O.border.default,labels:{useHTML:!0,style:{fontFamily:k,color:O.text.secondary}},title:{useHTML:!0,style:{fontFamily:k,color:O.text.primary}}},C={buttons:{contextButton:{symbol:"export",symbolFill:O.text.secondary,symbolStroke:"transparent",theme:{fill:"transparent",stroke:O.border.default},menuItems:["printChart","downloadPNG","downloadJPEG","downloadPDF","downloadSVG"]}}},P={itemStyle:{fontFamily:k,fontWeight:"bold",fontSize:"0.75rem",color:O.text.secondary},itemHoverStyle:{color:O.text.primary}},F={borderColor:O.border.default,backgroundColor:O.background.primary,borderRadius:8,style:{fontFamily:k,color:O.text.secondary},useHTML:!0},S={backgroundColor:"transparent",className:"chart",style:{fontFamily:k,color:O.text.primary}},L={align:"left",useHTML:!0,margin:32,style:{fontFamily:k,fontWeight:"bold",fontSize:"1rem",color:O.text.primary},y:16,x:0,widthAdjust:-32},E={align:"left",useHTML:!0,style:{fontFamily:k,fontSize:"1rem",color:O.text.secondary},y:48,x:0},T={enabled:!1},H={},N=function(n){var t={legend:{enabled:!0}},r={colors:["#058DC7","#50B432","#ED561B","#DDDF00","#24CBE5","#64E572","#FF9655","#FFF263","#6AF9C4"],lang:H,credits:T,title:L,subtitle:E,chart:S,tooltip:F,legend:P,xAxis:w,yAxis:w,exporting:C},e=function(n){return x()(t,n,r)},o=j(Object(y.useState)(e(n)),2),a=o[0],i=o[1];return Object(y.useEffect)((function(){i(e(n))}),[n]),a},z=function(n,t){return Object.defineProperty?Object.defineProperty(n,"raw",{value:t}):n.raw=t,n},B=v.o.color,D=v.o.radius,M=v.o.shadow,I=Object(v.g)(v.o.text),A=v.n.div(e||(e=z(["\n  position: relative;\n  background: ",";\n  border-radius: ",";\n  /* margin: ","; */\n  border: 1px solid\n    ",";\n  box-shadow: ",";\n  overflow: hidden;\n  height: 100%;\n\n  a {\n    color: currentColor;\n  }\n\n  .header {\n    position: absolute;\n    top: 0px;\n    left: 0;\n    right: 0;\n    z-index: 0;\n    height: 40px;\n    background: ",";\n    border-bottom: 1px solid\n      ",";\n  }\n\n  div:nth-of-type(2) {\n    height: 100%;\n  }\n\n  .highcharts-title {\n    overflow: hidden;\n    white-space: "," !important;\n  }\n\n  .highcharts-root {\n    height: 100%;\n  }\n\n  .highcharts-button-box {\n    fill: transparent !important;\n    width: 28px;\n    height: 28px;\n    transform: translate(-4px, -5px);\n  }\n\n  .highcharts-button {\n    text {\n      color: unset !important;\n      fill: unset !important;\n    }\n  }\n\n  .highcharts-button-symbol {\n    transform: translate(-2px, -3px);\n  }\n\n  .highcharts-button-box {\n    stroke: none;\n  }\n\n  .highcharts-label {\n    text {\n      color: unset !important;\n      fill: unset !important;\n    }\n    &.highcharts-drilldown-data-label {\n      text {\n        color: "," !important;\n        fill: "," !important;\n      }\n    }\n\n    .highcharts-text-outline {\n      stroke: transparent !important;\n      fill: transparent !important;\n    }\n  }\n\n  .highcharts-menu {\n    background: "," !important;\n    border: 1px solid "," !important;\n    border-radius: "," !important;\n    box-shadow: "," !important;\n\n    .highcharts-menu-item {\n      font-family: "," !important;\n      color: "," !important;\n\n      :hover {\n        color: "," !important;\n        background: "," !important;\n      }\n    }\n  }\n\n  .highcharts-scrollbar-track {\n    stroke: transparent !important;\n    fill:  transparent !important;\n  }\n  .highcharts-scrollbar-thumb{\n    stroke: transparent !important;\n    fill:  "," !important;\n  }\n  /* three vertical lines on a scrollbar thumb*/\n  .highcharts-scrollbar-rifles{ \n    stroke: "," !important;\n  }\n  .highcharts-scrollbar-button{\n    stroke: "," !important;\n    fill:  transparent !important;\n  }\n  .highcharts-scrollbar-arrow{\n    fill:  "," !important;\n  }\n"],["\n  position: relative;\n  background: ",";\n  border-radius: ",";\n  /* margin: ","; */\n  border: 1px solid\n    ",";\n  box-shadow: ",";\n  overflow: hidden;\n  height: 100%;\n\n  a {\n    color: currentColor;\n  }\n\n  .header {\n    position: absolute;\n    top: 0px;\n    left: 0;\n    right: 0;\n    z-index: 0;\n    height: 40px;\n    background: ",";\n    border-bottom: 1px solid\n      ",";\n  }\n\n  div:nth-of-type(2) {\n    height: 100%;\n  }\n\n  .highcharts-title {\n    overflow: hidden;\n    white-space: "," !important;\n  }\n\n  .highcharts-root {\n    height: 100%;\n  }\n\n  .highcharts-button-box {\n    fill: transparent !important;\n    width: 28px;\n    height: 28px;\n    transform: translate(-4px, -5px);\n  }\n\n  .highcharts-button {\n    text {\n      color: unset !important;\n      fill: unset !important;\n    }\n  }\n\n  .highcharts-button-symbol {\n    transform: translate(-2px, -3px);\n  }\n\n  .highcharts-button-box {\n    stroke: none;\n  }\n\n  .highcharts-label {\n    text {\n      color: unset !important;\n      fill: unset !important;\n    }\n    &.highcharts-drilldown-data-label {\n      text {\n        color: "," !important;\n        fill: "," !important;\n      }\n    }\n\n    .highcharts-text-outline {\n      stroke: transparent !important;\n      fill: transparent !important;\n    }\n  }\n\n  .highcharts-menu {\n    background: "," !important;\n    border: 1px solid "," !important;\n    border-radius: "," !important;\n    box-shadow: "," !important;\n\n    .highcharts-menu-item {\n      font-family: "," !important;\n      color: "," !important;\n\n      :hover {\n        color: "," !important;\n        background: "," !important;\n      }\n    }\n  }\n\n  .highcharts-scrollbar-track {\n    stroke: transparent !important;\n    fill:  transparent !important;\n  }\n  .highcharts-scrollbar-thumb{\n    stroke: transparent !important;\n    fill:  "," !important;\n  }\n  /* three vertical lines on a scrollbar thumb*/\n  .highcharts-scrollbar-rifles{ \n    stroke: "," !important;\n  }\n  .highcharts-scrollbar-button{\n    stroke: "," !important;\n    fill:  transparent !important;\n  }\n  .highcharts-scrollbar-arrow{\n    fill:  "," !important;\n  }\n"])),(function(n){return n.headless?"none":B.background.primary}),(function(n){return n.headless?0:D[500]}),(function(n){return n.headless?0:v.o.spacing.sm}),(function(n){return n.headless?"none":B.border.default}),(function(n){return n.headless?"none":M.default}),(function(n){return n.headless?"transparent":B.background.default}),(function(n){return n.headless?"transparent":B.border.default}),(function(n){return n.headless?"initial":"nowrap"}),B.text.info,B.text.info,B.background.primary,B.border.default,D[300],M.hover,I,B.text.secondary,B.text.primary,B.background.hover,B.background.primary,B.text.secondary,B.border.default,B.text.secondary),G=function(){return G=Object.assign||function(n){for(var t,r=1,e=arguments.length;r<e;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o]);return n},G.apply(this,arguments)},J={},R=function(n){var t=n.options,r=n.constructorType,e=void 0===r?"chart":r,a=n.callback,l=n.containerProps,s=n.headless,c=Object(b.merge)(N(t),J),h={id:Object(u.x)()};return Object(o.jsxs)(A,G({headless:s},{children:[Object(o.jsx)("div",{className:"header"}),Object(o.jsx)(m.a,{highcharts:i.a,options:c,containerProps:l||h,callback:a,constructorType:e})]}))},V=function(){return V=Object.assign||function(n){for(var t,r=1,e=arguments.length;r<e;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o]);return n},V.apply(this,arguments)},W={chart:{type:"area"}},Z=function(){return Z=Object.assign||function(n){for(var t,r=1,e=arguments.length;r<e;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o]);return n},Z.apply(this,arguments)},_=function(n,t){var r="function"===typeof Symbol&&n[Symbol.iterator];if(!r)return n;var e,o,a=r.call(n),i=[];try{for(;(void 0===t||t-- >0)&&!(e=a.next()).done;)i.push(e.value)}catch(l){o={error:l}}finally{try{e&&!e.done&&(r=a.return)&&r.call(a)}finally{if(o)throw o.error}}return i},q={chart:{type:"bar"}},K=function(n){var t=Object(y.useRef)(null),r=_(Object(y.useState)(),2),e=r[0],a=r[1],l=Object(b.merge)(N(n.options),q),s={id:Object(u.x)()};return Object(u.t)({ref:t,onResize:function(){e&&e.setSize(null,null)}}),Object(o.jsxs)(A,Z({headless:n.headless,ref:t},{children:[Object(o.jsx)("div",{className:"header"}),Object(o.jsx)(m.a,{highcharts:i.a,options:l,containerProps:n.containerProps||s,callback:function(t){a(t),n.callback&&n.callback(t)},constructorType:"chart"})]}))},Q=function(){return Q=Object.assign||function(n){for(var t,r=1,e=arguments.length;r<e;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o]);return n},Q.apply(this,arguments)},U={chart:{type:"line"}},X=function(n){var t=Object(b.merge)(N(n.options),U),r={id:Object(u.x)()};return Object(o.jsxs)(A,Q({headless:n.headless},{children:[Object(o.jsx)("div",{className:"header"}),Object(o.jsx)(m.a,{highcharts:i.a,options:t,containerProps:n.containerProps||r,callback:n.callback,constructorType:"chart"})]}))},Y=function(){return Y=Object.assign||function(n){for(var t,r=1,e=arguments.length;r<e;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o]);return n},Y.apply(this,arguments)},$={chart:{type:"pie"}},nn=function(n){var t=Object(b.merge)(N(n.options),$),r={id:Object(u.x)()};return Object(o.jsxs)(A,Y({headless:n.headless},{children:[Object(o.jsx)("div",{className:"header"}),Object(o.jsx)(m.a,{highcharts:i.a,options:t,containerProps:n.containerProps||r,callback:n.callback,constructorType:"chart"})]}))},tn=function(){return tn=Object.assign||function(n){for(var t,r=1,e=arguments.length;r<e;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o]);return n},tn.apply(this,arguments)};s()(i.a),h()(i.a),d()(i.a),i.a.SVGRenderer.prototype.symbols.export=function(){return["M8.94376 9.29983H18.4887L14.0168 5.18227C13.6642 4.85766 13.6259 4.28938 13.93 3.91325C14.2354 3.53599 14.7685 3.49287 15.12 3.81999L21.3075 9.48632C21.4629 9.68984 21.6 9.93734 21.6 10.1998C21.6 10.4612 21.4935 10.7091 21.3079 10.8801L15.1204 16.5464C14.9611 16.6941 14.7642 16.7657 14.5688 16.7657C14.3325 16.7657 14.0973 16.6603 13.9303 16.454C13.626 16.0779 13.6645 15.5094 14.0171 15.185L18.489 11.0674H8.94376C6.9279 11.0674 5.28751 12.8168 5.28751 14.9337V19.4001C5.28751 19.9988 4.90958 20.4 4.44376 20.4C3.97794 20.4 3.60001 19.9988 3.60001 19.5V15.0337C3.60001 11.8574 5.99731 9.29983 8.94376 9.29983Z"]};var rn=function(n){return i.a?Object(o.jsx)(R,tn({},n)):Object(o.jsx)("span",{children:"Library Highcharts is missing. Install the NPM library."})};rn.Line=X,rn.Bar=K,rn.Area=function(n){var t=Object(b.merge)(N(n.options),W),r={id:Object(u.x)()};return Object(o.jsxs)(A,V({headless:n.headless},{children:[Object(o.jsx)("div",{className:"header"}),Object(o.jsx)(m.a,{highcharts:i.a,options:t,containerProps:n.containerProps||r,callback:n.callback,constructorType:"chart"})]}))},rn.Pie=nn}}]);
//# sourceMappingURL=20.6f770a83.chunk.js.map