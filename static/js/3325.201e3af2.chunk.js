"use strict";(self.webpackChunkplayground=self.webpackChunkplayground||[]).push([[3325],{83325:function(e,o,l){l.r(o);var r=l(11026),a=l(6380),s=l(67962),t=l(67075),n=l(56167),u=l(37878);o.default=function(){var e,o,l=(0,n.useState)([]),i=(0,r.Z)(l,2),d=i[0],S=i[1];return(0,u.jsx)(a.B4,{heading:"Menu Drilldown",overflow:"scroll",children:(0,u.jsxs)(s.xu,{direction:"column",children:[(0,u.jsx)("div",{style:{width:300,height:340},children:(0,u.jsx)(t.C,{enableFiltering:!0,optionsTree:{label:"Groupings",options:Object.values(y).map((function(e){var o=e.groupBy,l=e.label,r=e.key,a=c.includes(r);return{label:l,payload:{tableHeader:l,groupCode:"",groupBy:o},options:a&&(null===p||void 0===p?void 0:p.map((function(e){var r=e.code,a=e.name;return{label:"".concat(a," (").concat(r,")"),payload:{tableHeader:"".concat(l," (").concat(a,")"),groupBy:o,groupCode:r}}})))}}))},onOptionSelected:function(e){S(e),console.log(e)}})}),(0,u.jsxs)("div",{style:{whiteSpace:"pre"},children:[(0,u.jsxs)("div",{style:{zoom:1.4},children:[(0,u.jsx)("strong",{children:"Selected option"})," -"," ",null===(e=JSON.stringify(d.at(-1),null,4))||void 0===e?void 0:e.replaceAll('"',"")]}),(0,u.jsx)("br",{}),(0,u.jsx)("br",{}),(0,u.jsx)("br",{}),(0,u.jsx)("strong",{children:"Returned array of selected options"})," -"," ",null===(o=JSON.stringify(d,null,4))||void 0===o?void 0:o.replaceAll('"',"")]})]})})};var c=["groupAndSector","groupAndPortfolio","portfolioAndGroup"],y={groupAndSector:{key:"groupAndSector",groupBy:["GROUP","SECTOR","SECURITY"],label:"Asset type and class"},groupAndPortfolio:{key:"groupAndPortfolio",groupBy:["GROUP","PORTFOLIO","SECTOR"],label:"Asset type and portfolio"},securityType:{key:"securityType",groupBy:["TYPE","SECURITY"],label:"Security type"},subType:{key:"subType",groupBy:["TYPE","SUBTYPE","SECURITY"],label:"Security type and subtype"},security:{key:"security",groupBy:["SECURITY"],label:"Security"},class1:{key:"class1",groupBy:["CLASS1","SECURITY"],label:"Class 1"},class2:{key:"class2",groupBy:["CLASS2","SECURITY"],label:"Class 2"},class3:{key:"class3",groupBy:["CLASS3","SECURITY"],label:"Class 3"},class4:{key:"class4",groupBy:["CLASS4","SECURITY"],label:"Class 4"},class5:{key:"class5",groupBy:["CLASS5","SECURITY"],label:"Class 5"},country:{key:"country",groupBy:["COUNTRY","SECURITY"],label:"Country"},marketPlace:{key:"marketPlace",groupBy:["MARKETPLACE","SECURITY"],label:"Market place"},currency:{key:"currency",groupBy:["CURRENCY","SECURITY"],label:"Currency"},portfolio:{key:"portfolio",groupBy:["PORTFOLIO","TYPE","SECURITY"],label:"Portfolio"},portfolioAndSubPortfolio:{key:"portfolioAndSubPortfolio",groupBy:["PORTFOLIO","PORTFOLIO_ALL","SECURITY"],label:"Portfolio and sub portfolio"},portfolioAndGroup:{key:"portfolioAndGroup",groupBy:["PORTFOLIO","GROUP","SECTOR"],label:"Portfolio and asset type"},issuer:{key:"issuer",groupBy:["ISSUER","SECURITY"],label:"Issuer"}},p=[{name:"Asset class",code:"ASSET"},{name:"Geographical",code:"GEO"},{name:"Industry",code:"IND"},{name:"Strategy",code:"Strategy"},{name:"Robo class",code:"ROBO"},{name:"Currency",code:"CURRENCY"},{name:"Country exposure",code:"COUNTRY"},{name:"AIF Geo",code:"AIFGEO"},{name:"AIF Asset",code:"AIFASSET"},{name:"AIF Asset Turnover",code:"AIFASSETTURNOVER"},{name:"AIF Strategies",code:"AIFSTRATEGIES"},{name:"Model",code:"MOD"},{name:"Test ST",code:"TEST_ST"},{name:"Jv strategy test",code:"JV_TEST"},{name:"INT Asset Structure",code:"INT_AS"}]}}]);
//# sourceMappingURL=3325.201e3af2.chunk.js.map