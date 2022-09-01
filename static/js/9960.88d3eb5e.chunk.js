"use strict";(self.webpackChunkplayground=self.webpackChunkplayground||[]).push([[9960,3360,4316,6680,5721,9959],{13360:function(t,n,r){r.r(n),r.d(n,{AreaChart:function(){return i}});var e=r(63241),a=r(10031),o=r(37878),i=function(){return(0,o.jsx)(e.k,{options:{chart:{zoomType:"x"},title:{text:"Area Chart"},xAxis:{type:"datetime"},series:[{type:"area",name:"USD/EUR",data:a.areaChartData}],legend:{enabled:!1},plotOptions:{area:{fillColor:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[0,"#686ae7b3"],[1,"#b1baf100"]]},marker:{radius:2},lineWidth:1,states:{hover:{lineWidth:1}},threshold:null}}}})}},94316:function(t,n,r){r.r(n),r.d(n,{BarChart:function(){return o}});var e=r(63241),a=r(37878),o=function(){return(0,a.jsx)(e.k,{options:{chart:{type:"bar"},title:{text:"Historic World Population by Region"},subtitle:{text:'Source: <a href="https://en.wikipedia.org/wiki/World_population">Wikipedia.org</a>'},xAxis:{categories:["Africa","America","Asia","Europe","Oceania"],title:{text:null}},yAxis:{min:0,title:{text:"Population (millions)",align:"high"},labels:{overflow:"justify"}},tooltip:{valueSuffix:" millions"},plotOptions:{bar:{dataLabels:{enabled:!0}}},legend:{layout:"vertical",align:"right",verticalAlign:"top",x:-40,y:80,floating:!0,borderWidth:1,backgroundColor:"#FFFFFF",shadow:!0},credits:{enabled:!1},series:[{name:"Year 1800",data:[107,31,635,203,2]},{name:"Year 1900",data:[133,156,947,408,6]},{name:"Year 2000",data:[814,841,3714,727,31]},{name:"Year 2016",data:[1216,1001,4436,738,40]}]}})}},66680:function(t,n,r){r.r(n),r.d(n,{PieChart:function(){return o}});var e=r(63241),a=r(37878),o=function(){return(0,a.jsx)(e.k,{options:{chart:{type:"pie"},title:{text:"Browser market shares. January, 2018"},subtitle:{text:'Click the slices to view versions. Source: <a href="http://statcounter.com" target="_blank">statcounter.com</a>'},accessibility:{announceNewData:{enabled:!0},point:{valueSuffix:"%"}},plotOptions:{series:{dataLabels:{enabled:!0,format:"{point.name}: {point.y:.1f}%"}}},tooltip:{headerFormat:'<span style="font-size:11px">{series.name}</span><br>',pointFormat:'<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'},series:[{name:"Browsers",colorByPoint:!0,data:[{name:"Chrome",y:62.74,drilldown:"Chrome"},{name:"Firefox",y:10.57,drilldown:"Firefox"},{name:"Internet Explorer",y:7.23,drilldown:"Internet Explorer"},{name:"Safari",y:5.58,drilldown:"Safari"},{name:"Edge",y:4.02,drilldown:"Edge"},{name:"Opera",y:1.92,drilldown:"Opera"},{name:"Other",y:7.62,drilldown:null}]}],drilldown:{series:[{name:"Chrome",id:"Chrome",data:[["v65.0",.1],["v64.0",1.3],["v63.0",53.02],["v62.0",1.4],["v61.0",.88],["v60.0",.56],["v59.0",.45],["v58.0",.49],["v57.0",.32],["v56.0",.29],["v55.0",.79],["v54.0",.18],["v51.0",.13],["v49.0",2.16],["v48.0",.13],["v47.0",.11],["v43.0",.17],["v29.0",.26]]},{name:"Firefox",id:"Firefox",data:[["v58.0",1.02],["v57.0",7.36],["v56.0",.35],["v55.0",.11],["v54.0",.1],["v52.0",.95],["v51.0",.15],["v50.0",.1],["v48.0",.31],["v47.0",.12]]},{name:"Internet Explorer",id:"Internet Explorer",data:[["v11.0",6.2],["v10.0",.29],["v9.0",.27],["v8.0",.47]]},{name:"Safari",id:"Safari",data:[["v11.0",3.39],["v10.1",.96],["v10.0",.36],["v9.1",.54],["v9.0",.13],["v5.1",.2]]},{name:"Edge",id:"Edge",data:[["v16",2.6],["v15",.92],["v14",.4],["v13",.1]]},{name:"Opera",id:"Opera",data:[["v50.0",.96],["v49.0",.82],["v12.1",.14]]}]}}})}},45721:function(t,n,r){r.r(n),r.d(n,{StockChart:function(){return i}});var e=r(63241),a=r(10031),o=r(37878),i=function(){return(0,o.jsx)(e.k,{constructorType:"stockChart",options:{rangeSelector:{allButtonsEnabled:!0,selected:2},title:{text:"AAPL Stock Price"},series:[{name:"AAPL",data:a.stockData,tooltip:{valueDecimals:2}},{type:"ema",linkedTo:"AAPL"},{type:"ema",linkedTo:"AAPL",params:{period:50}}]}})}},59959:function(t,n,r){r.r(n),r.d(n,{StockChartAdvanced:function(){return s}});var e=r(56167),a=r(63241),o=r(10031),i=r(33952),l=r(37878),s=function(){var t=(0,e.useRef)();return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a.k,{constructorType:"stockChart",callback:function(n){t.current=n},options:{chart:{height:600},title:{text:"AAPL Historical"},subtitle:{text:"All indicators"},legend:{enabled:!0},rangeSelector:{selected:2},yAxis:[{height:"60%"},{top:"60%",height:"20%"},{top:"80%",height:"20%"}],plotOptions:{series:{showInLegend:!0}},series:[{type:"candlestick",id:"aapl",name:"AAPL",data:o.stockData},{type:"column",id:"volume",name:"Volume",data:o.stockProcessedData.volume,yAxis:1},{type:"pc",id:"overlay",linkedTo:"aapl",yAxis:0},{type:"macd",id:"oscillator",linkedTo:"aapl",yAxis:2}]}}),(0,l.jsx)(i.zx,{onClick:function(){var n,r;return null===(n=t.current)||void 0===n||null===(r=n.fullscreen)||void 0===r?void 0:r.toggle()},children:"Toggle fullscreen"})]})}},39960:function(t,n,r){r.r(n);var e=r(6380),a=r(13360),o=r(94316),i=r(66680),l=r(45721),s=r(59959),c=r(47476),h=r.n(c),d=r(84105),p=r.n(d),u=r(16419),f=r.n(u),m=r(29657),b=r.n(m),g=r(37878);p()(h()),f()(h()),b()(h());n.default=function(){return(0,g.jsxs)(e.B4,{heading:"Charts",overflow:"scroll",children:[(0,g.jsx)("div",{style:{width:800,height:600,margin:24},children:(0,g.jsx)(a.AreaChart,{})}),(0,g.jsx)("div",{style:{width:800,height:600,margin:24},children:(0,g.jsx)(o.BarChart,{})}),(0,g.jsx)("div",{style:{width:800,height:600,margin:24},children:(0,g.jsx)(i.PieChart,{})}),(0,g.jsx)("div",{style:{width:800,height:600,margin:24},children:(0,g.jsx)(l.StockChart,{})}),(0,g.jsx)("div",{style:{width:800,height:600,margin:24},children:(0,g.jsx)(s.StockChartAdvanced,{})})]})}},63241:function(t,n,r){r.d(n,{k:function(){return rt}});var e,a=r(37878),o=r(47476),i=r.n(o),l=r(409),s=r.n(l),c=r(56509),h=r.n(c),d=r(72465),p=r.n(d),u=r(74495),f=r(30618),m=r(78063),b=r.n(m),g=r(56167),x=r(9803),y=r.n(x),v=r(74851),k=function(t,n){var r="function"===typeof Symbol&&t[Symbol.iterator];if(!r)return t;var e,a,o=r.call(t),i=[];try{for(;(void 0===n||n-- >0)&&!(e=o.next()).done;)i.push(e.value)}catch(l){a={error:l}}finally{try{e&&!e.done&&(r=o.return)&&r.call(o)}finally{if(a)throw a.error}}return i},w=v.rS.color,j=(0,v.Yw)(v.rS.text),C={tickColor:w.text.secondary,lineColor:w.text.secondary,gridLineColor:w.border.default,minorGridLineColor:w.border.default,labels:{useHTML:!0,style:{fontFamily:j,color:w.text.secondary}},title:{useHTML:!0,style:{fontFamily:j,color:w.text.primary}}},S={buttons:{contextButton:{symbol:"export",symbolFill:w.text.secondary,theme:{fill:"transparent",stroke:w.border.default},menuItems:["printChart","downloadPNG","downloadJPEG","downloadPDF","downloadSVG"]}}},P={itemStyle:{fontFamily:j,fontWeight:"bold",fontSize:"0.75rem",color:w.text.secondary},itemHoverStyle:{color:w.text.primary}},A={borderColor:w.border.default,backgroundColor:w.background.primary,borderRadius:8,style:{fontFamily:j,color:w.text.secondary},useHTML:!0},O={backgroundColor:"transparent",className:"chart",style:{fontFamily:j,color:w.text.primary}},F={align:"left",useHTML:!0,margin:32,style:{fontFamily:j,fontWeight:"bold",fontSize:"1rem",color:w.text.primary},y:16,x:0,widthAdjust:-32},L={align:"left",useHTML:!0,style:{fontFamily:j,fontSize:"1rem",color:w.text.secondary},y:48,x:0},T={enabled:!1},E={},D=function(t){var n={legend:{enabled:!0}},r={colors:["#058DC7","#50B432","#ED561B","#DDDF00","#24CBE5","#64E572","#FF9655","#FFF263","#6AF9C4"],lang:E,credits:T,title:F,subtitle:L,chart:O,tooltip:A,legend:P,xAxis:C,yAxis:C,exporting:S},e=function(t){return y()(n,t,r)},a=k((0,g.useState)(e(t)),2),o=a[0],i=a[1];return(0,g.useEffect)((function(){i(e(t))}),[t]),o},B=function(t,n){return Object.defineProperty?Object.defineProperty(t,"raw",{value:n}):t.raw=n,t},z=v.rS.color,H=v.rS.radius,V=v.rS.shadow,N=(0,v.Yw)(v.rS.text),W=v.zo.div(e||(e=B(["\n  position: relative;\n  background: ",";\n  border-radius: ",";\n  /* margin: ","; */\n  border: 1px solid\n    ",";\n  box-shadow: ",";\n  overflow: hidden;\n  height: 100%;\n\n  a {\n    color: currentColor;\n  }\n\n  .header {\n    position: absolute;\n    top: 0px;\n    left: 0;\n    right: 0;\n    z-index: 0;\n    height: 40px;\n    background: ",";\n    border-bottom: 1px solid\n      ",";\n  }\n\n  div:nth-of-type(2) {\n    height: 100%;\n  }\n\n  .highcharts-title {\n    overflow: hidden;\n    white-space: "," !important;\n  }\n\n  .highcharts-root {\n    height: 100%;\n  }\n\n  .highcharts-button-box {\n    fill: transparent !important;\n    width: 28px;\n    height: 28px;\n    transform: translate(-4px, -5px);\n  }\n\n  .highcharts-button {\n    text {\n      color: unset !important;\n      fill: unset !important;\n    }\n  }\n\n  .highcharts-button-symbol {\n    transform: translate(-2px, -3px);\n  }\n\n  .highcharts-button-box {\n    stroke: none;\n  }\n\n  .highcharts-label {\n    text {\n      color: unset !important;\n      fill: unset !important;\n    }\n    &.highcharts-drilldown-data-label {\n      text {\n        color: "," !important;\n        fill: "," !important;\n      }\n    }\n\n    .highcharts-text-outline {\n      stroke: transparent !important;\n      fill: transparent !important;\n    }\n  }\n\n  .highcharts-menu {\n    background: "," !important;\n    border: 1px solid "," !important;\n    border-radius: "," !important;\n    box-shadow: "," !important;\n\n    .highcharts-menu-item {\n      font-family: "," !important;\n      color: "," !important;\n\n      :hover {\n        color: "," !important;\n        background: "," !important;\n      }\n    }\n  }\n\n  .highcharts-scrollbar-track {\n    stroke: transparent !important;\n    fill:  transparent !important;\n  }\n  .highcharts-scrollbar-thumb{\n    stroke: transparent !important;\n    fill:  "," !important;\n  }\n  /* three vertical lines on a scrollbar thumb*/\n  .highcharts-scrollbar-rifles{ \n    stroke: "," !important;\n  }\n  .highcharts-scrollbar-button{\n    stroke: "," !important;\n    fill:  transparent !important;\n  }\n  .highcharts-scrollbar-arrow{\n    fill:  "," !important;\n  }\n"],["\n  position: relative;\n  background: ",";\n  border-radius: ",";\n  /* margin: ","; */\n  border: 1px solid\n    ",";\n  box-shadow: ",";\n  overflow: hidden;\n  height: 100%;\n\n  a {\n    color: currentColor;\n  }\n\n  .header {\n    position: absolute;\n    top: 0px;\n    left: 0;\n    right: 0;\n    z-index: 0;\n    height: 40px;\n    background: ",";\n    border-bottom: 1px solid\n      ",";\n  }\n\n  div:nth-of-type(2) {\n    height: 100%;\n  }\n\n  .highcharts-title {\n    overflow: hidden;\n    white-space: "," !important;\n  }\n\n  .highcharts-root {\n    height: 100%;\n  }\n\n  .highcharts-button-box {\n    fill: transparent !important;\n    width: 28px;\n    height: 28px;\n    transform: translate(-4px, -5px);\n  }\n\n  .highcharts-button {\n    text {\n      color: unset !important;\n      fill: unset !important;\n    }\n  }\n\n  .highcharts-button-symbol {\n    transform: translate(-2px, -3px);\n  }\n\n  .highcharts-button-box {\n    stroke: none;\n  }\n\n  .highcharts-label {\n    text {\n      color: unset !important;\n      fill: unset !important;\n    }\n    &.highcharts-drilldown-data-label {\n      text {\n        color: "," !important;\n        fill: "," !important;\n      }\n    }\n\n    .highcharts-text-outline {\n      stroke: transparent !important;\n      fill: transparent !important;\n    }\n  }\n\n  .highcharts-menu {\n    background: "," !important;\n    border: 1px solid "," !important;\n    border-radius: "," !important;\n    box-shadow: "," !important;\n\n    .highcharts-menu-item {\n      font-family: "," !important;\n      color: "," !important;\n\n      :hover {\n        color: "," !important;\n        background: "," !important;\n      }\n    }\n  }\n\n  .highcharts-scrollbar-track {\n    stroke: transparent !important;\n    fill:  transparent !important;\n  }\n  .highcharts-scrollbar-thumb{\n    stroke: transparent !important;\n    fill:  "," !important;\n  }\n  /* three vertical lines on a scrollbar thumb*/\n  .highcharts-scrollbar-rifles{ \n    stroke: "," !important;\n  }\n  .highcharts-scrollbar-button{\n    stroke: "," !important;\n    fill:  transparent !important;\n  }\n  .highcharts-scrollbar-arrow{\n    fill:  "," !important;\n  }\n"])),(function(t){return t.headless?"none":z.background.primary}),(function(t){return t.headless?0:H[500]}),(function(t){return t.headless?0:v.rS.spacing.sm}),(function(t){return t.headless?"none":z.border.default}),(function(t){return t.headless?"none":V.default}),(function(t){return t.headless?"transparent":z.background.default}),(function(t){return t.headless?"transparent":z.border.default}),(function(t){return t.headless?"initial":"nowrap"}),z.text.info,z.text.info,z.background.primary,z.border.default,H[300],V.hover,N,z.text.secondary,z.text.primary,z.background.hover,z.background.primary,z.text.secondary,z.border.default,z.text.secondary),I=function(){return I=Object.assign||function(t){for(var n,r=1,e=arguments.length;r<e;r++)for(var a in n=arguments[r])Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a]);return t},I.apply(this,arguments)},M={},R=function(t){var n=t.options,r=t.constructorType,e=void 0===r?"chart":r,o=t.callback,l=t.containerProps,s=t.headless,c=(0,f.merge)(D(n),M),h={id:(0,u.Vj)()};return(0,a.jsxs)(W,I({headless:s},{children:[(0,a.jsx)("div",{className:"header"}),(0,a.jsx)(b(),{highcharts:i(),options:c,containerProps:l||h,callback:o,constructorType:e})]}))},G=function(){return G=Object.assign||function(t){for(var n,r=1,e=arguments.length;r<e;r++)for(var a in n=arguments[r])Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a]);return t},G.apply(this,arguments)},Y={chart:{type:"area"}},U=function(){return U=Object.assign||function(t){for(var n,r=1,e=arguments.length;r<e;r++)for(var a in n=arguments[r])Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a]);return t},U.apply(this,arguments)},J=function(t,n){var r="function"===typeof Symbol&&t[Symbol.iterator];if(!r)return t;var e,a,o=r.call(t),i=[];try{for(;(void 0===n||n-- >0)&&!(e=o.next()).done;)i.push(e.value)}catch(l){a={error:l}}finally{try{e&&!e.done&&(r=o.return)&&r.call(o)}finally{if(a)throw a.error}}return i},_={chart:{type:"bar"}},Z=function(t){var n=(0,g.useRef)(null),r=J((0,g.useState)(),2),e=r[0],o=r[1],l=(0,f.merge)(D(t.options),_),s={id:(0,u.Vj)()};return(0,u.yU)({ref:n,onResize:function(){e&&e.setSize(null,null)}}),(0,a.jsxs)(W,U({headless:t.headless,ref:n},{children:[(0,a.jsx)("div",{className:"header"}),(0,a.jsx)(b(),{highcharts:i(),options:l,containerProps:t.containerProps||s,callback:function(n){o(n),t.callback&&t.callback(n)},constructorType:"chart"})]}))},q=function(){return q=Object.assign||function(t){for(var n,r=1,e=arguments.length;r<e;r++)for(var a in n=arguments[r])Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a]);return t},q.apply(this,arguments)},K={chart:{type:"line"}},Q=function(t){var n=(0,f.merge)(D(t.options),K),r={id:(0,u.Vj)()};return(0,a.jsxs)(W,q({headless:t.headless},{children:[(0,a.jsx)("div",{className:"header"}),(0,a.jsx)(b(),{highcharts:i(),options:n,containerProps:t.containerProps||r,callback:t.callback,constructorType:"chart"})]}))},X=function(){return X=Object.assign||function(t){for(var n,r=1,e=arguments.length;r<e;r++)for(var a in n=arguments[r])Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a]);return t},X.apply(this,arguments)},$={chart:{type:"pie"}},tt=function(t){var n=(0,f.merge)(D(t.options),$),r={id:(0,u.Vj)()};return(0,a.jsxs)(W,X({headless:t.headless},{children:[(0,a.jsx)("div",{className:"header"}),(0,a.jsx)(b(),{highcharts:i(),options:n,containerProps:t.containerProps||r,callback:t.callback,constructorType:"chart"})]}))},nt=function(){return nt=Object.assign||function(t){for(var n,r=1,e=arguments.length;r<e;r++)for(var a in n=arguments[r])Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a]);return t},nt.apply(this,arguments)};s()(i()),h()(i()),p()(i()),i().SVGRenderer.prototype.symbols.export=function(){return["M8.94376 9.29983H18.4887L14.0168 5.18227C13.6642 4.85766 13.6259 4.28938 13.93 3.91325C14.2354 3.53599 14.7685 3.49287 15.12 3.81999L21.3075 9.48632C21.4629 9.68984 21.6 9.93734 21.6 10.1998C21.6 10.4612 21.4935 10.7091 21.3079 10.8801L15.1204 16.5464C14.9611 16.6941 14.7642 16.7657 14.5688 16.7657C14.3325 16.7657 14.0973 16.6603 13.9303 16.454C13.626 16.0779 13.6645 15.5094 14.0171 15.185L18.489 11.0674H8.94376C6.9279 11.0674 5.28751 12.8168 5.28751 14.9337V19.4001C5.28751 19.9988 4.90958 20.4 4.44376 20.4C3.97794 20.4 3.60001 19.9988 3.60001 19.5V15.0337C3.60001 11.8574 5.99731 9.29983 8.94376 9.29983Z"]};var rt=function(t){return i()?(0,a.jsx)(R,nt({},t)):(0,a.jsx)("span",{children:"Library Highcharts is missing. Install the NPM library."})};rt.Line=Q,rt.Bar=Z,rt.Area=function(t){var n=(0,f.merge)(D(t.options),Y),r={id:(0,u.Vj)()};return(0,a.jsxs)(W,G({headless:t.headless},{children:[(0,a.jsx)("div",{className:"header"}),(0,a.jsx)(b(),{highcharts:i(),options:n,containerProps:t.containerProps||r,callback:t.callback,constructorType:"chart"})]}))},rt.Pie=tt}}]);
//# sourceMappingURL=9960.88d3eb5e.chunk.js.map