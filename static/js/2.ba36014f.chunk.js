(this.webpackJsonpplayground=this.webpackJsonpplayground||[]).push([[2,12,17,18,19,20,21,22,23,24,25,26,27,28],{117:function(e,t,a){"use strict";a.r(t),a.d(t,"components",(function(){return l}));var n=a(230);a.d(t,"MainPage",(function(){return n.MainPage}));var l=["Accordion","Breadcrumb","Button","Card","Form","Form2","Menu","NumberField","Skeleton","SummaryView","TextField","Table"]},120:function(e,t,a){"use strict";a.r(t),a.d(t,"ModuleId",(function(){return r}));var n=a(117),l=a(14),r="components",i=l.w,c=n.components.map((function(e){return{id:e,label:e,component:a(318)("./".concat(e)).default}}));t.default={id:r,label:"Components",roles:[],icon:i,component:n.MainPage,subModules:c}},230:function(e,t,a){"use strict";a.r(t),a.d(t,"MainPage",(function(){return o}));var n=a(0),l=a.n(n),r=a(89),i=a(78),c=a(7),o=()=>{var e=Object(r.c)();return l.a.createElement(i.c,{heading:e("moduleName"),overflow:"auto",toolbarContent:l.a.createElement(c.l,{variant:"h4"},"Harmony is FA Solutions' support library for React-app development")})}},235:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(78),i=a(7),c=function(){return l.a.createElement("div",null," Panel content ")},o=[{id:"panel1",heading:"Panel 1",content:l.a.createElement(c,null)},{id:"panel2",heading:"Panel 2",defaultActive:!0,content:l.a.createElement("div",null," Hello World ")},{id:"panel3",heading:"Panel 3",content:l.a.createElement("div",null," Hello Universe ")}];t.default=function(){return l.a.createElement(r.c,{heading:"Accordion"},l.a.createElement(i.a,{panels:o}))}},236:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(78),i=a(67),c=a(14);t.default=function(){var e=function(){},t=[{id:"root",label:"Root",onClick:e},{id:"folder",label:"Folder",icon:c.G,onClick:e},{id:"file",label:"File",icon:c.D}];return l.a.createElement(r.c,{heading:"Breadcrumbs",toolbarContent:l.a.createElement(i.a,{crumbs:[].concat(t,t)})})}},237:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(78),i=a(1),c=a(7),o=a(14);t.default=function(){var e={id:"notify",icon:o.T,tooltip:"Notifications",variant:"warning"};return l.a.createElement(r.c,{heading:"Button",overflow:"scroll"},l.a.createElement(i.b,null,l.a.createElement(i.b,{direction:"column"},l.a.createElement(c.b,{value:"Notifications",variant:"info",fullWidth:!0}),l.a.createElement(c.b,{icon:o.l,value:"Notifications",outline:!0,fullWidth:!0}),l.a.createElement(c.b,{icon:o.l,value:"Notifications",spacing:"xl",fullWidth:!0}),l.a.createElement(c.b,{icon:o.l,value:"Notifications",spacing:"lg",fullWidth:!0}),l.a.createElement(c.b,{icon:o.l,value:"Notifications",variant:"primary",fullWidth:!0}),l.a.createElement(c.b,{icon:o.l,value:"Notifications",spacing:"sm",fullWidth:!0}),l.a.createElement(c.b,{icon:o.l,value:"Notifications",spacing:"xs",fullWidth:!0}),l.a.createElement(c.b,{icon:o.l,value:"Notifications",spacing:"none",fullWidth:!0}),l.a.createElement(c.c,Object.assign({},e,{spacing:"sm",outline:!0,fullWidth:!0})),l.a.createElement(c.c,Object.assign({},e,{fullWidth:!0,outline:!0})),l.a.createElement(c.c,Object.assign({},e,{fullWidth:!0}))),l.a.createElement(i.b,{direction:"column"},l.a.createElement(c.b,{value:"Notifications",variant:"info"}),l.a.createElement(c.b,{icon:o.l,value:"Notifications",outline:!0}),l.a.createElement(c.b,{icon:o.l,value:"Notifications",spacing:"xl"}),l.a.createElement(c.b,{icon:o.l,value:"Notifications",spacing:"lg"}),l.a.createElement(c.b,{icon:o.l,value:"Notifications",variant:"primary"}),l.a.createElement(c.b,{icon:o.l,value:"Notifications",spacing:"sm"}),l.a.createElement(c.b,{icon:o.l,value:"Notifications",spacing:"xs"}),l.a.createElement(c.b,{icon:o.l,value:"Notifications",spacing:"none"}),l.a.createElement(c.c,Object.assign({},e,{spacing:"sm",outline:!0})),l.a.createElement(c.c,Object.assign({},e,{outline:!0})),l.a.createElement(c.c,e))))}},238:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(1),i=a(78),c=a(7),o={heading:"Apple Inc.",body:"Market price date cannot be older than today.",icon:a(14).B,iconColor:r.e.colorTint("warning")},u=Array(10).fill(o);t.default=()=>l.a.createElement(i.c,{heading:"Card"},l.a.createElement(r.b,{direction:"column"},u.map((e,t)=>l.a.createElement(c.d,Object.assign({key:t},e)))))},239:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(140),i=a(7),c=a(1),o=a(78),u=[{label:"Develop",value:"dev"},{label:"Master",value:"master"},{label:"Test",value:"test",isDisabled:!0}],m=[{label:"roles",options:[{label:"Admin",value:"admin"},{label:"BO",value:"back"},{label:"Client",value:"front",isDisabled:!0}]}],s={username:"admin",password:"ke5ku5TA",remember:!0,number:324.432,env:u[0],env2:"test",roles:m[0].options[0]},d=function(){var e,t,a=Object(r.m)({defaultValues:s,criteriaMode:"all"}),n=a.register,o=a.control,d=a.handleSubmit,f=a.errors,b=d(console.log);return l.a.createElement(r.d,{formMethods:a,style:{width:"100%"},direction:"row"},l.a.createElement(c.b,{direction:"column",width:"260px",alignItems:"start"},l.a.createElement(r.e,{label:"Username",helpText:"Your login username.",errorText:null===(e=f.username)||void 0===e?void 0:e.message,required:!0},l.a.createElement(r.i,{ref:n({required:"Username required",minLength:{value:4,message:"More than 3 characters."}}),name:"username",placeholder:"Enter username...",error:!!f.username})),l.a.createElement(r.e,{label:"Password",required:!0,errorText:null===(t=f.password)||void 0===t?void 0:t.message},l.a.createElement(r.i,{name:"password",ref:n({required:"Password required"}),placeholder:"Enter password...",type:"password",error:!!f.password})),l.a.createElement(r.e,{label:"Applicable roles"},l.a.createElement(r.b,{name:"roles",placeholder:"Select roles...",options:m,isMulti:!0})),l.a.createElement(r.e,{label:"Environment"},l.a.createElement(r.b,{name:"env",placeholder:"Select environment...",options:u,isSearchable:!1})),l.a.createElement(r.e,{label:"Environment again..."},l.a.createElement(r.h,{name:"env2",options:[].concat(u),ref:n,direction:"row"})),l.a.createElement(r.e,{label:"Number"},l.a.createElement(r.g,{placeholder:"0.00",error:!!f.number,name:"number"})),l.a.createElement(i.e,null),l.a.createElement(c.b,{justifyContent:"space-between"},l.a.createElement(r.a,{ref:n,name:"remember",label:"Keep me logged in"}),l.a.createElement(c.b,{width:"auto"},l.a.createElement(i.b,{value:"Reset",variant:"secondary",onClick:function(){return Object(r.l)(o)}}),l.a.createElement(i.b,{type:"submit",value:"Submit",onClick:b,variant:"primary"})))),l.a.createElement(r.f,null))};t.default=function(){return l.a.createElement(o.c,{heading:"Form",overflow:"scroll"},l.a.createElement(d,null))}},240:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(140),i=a(1),c=a(7),o=a(78),u={date:new Date("2020-09-20"),toggle:!0,number:1343400.234},m=function(){var e=Object(r.m)({defaultValues:u,criteriaMode:"all"}),t=e.control,a=e.handleSubmit,n=e.register,o=a(console.log);return l.a.createElement(r.d,{formMethods:e,style:{width:"100%"},direction:"row"},l.a.createElement(i.b,{direction:"column",width:"260px",alignItems:"start"},l.a.createElement(r.e,{label:"Date"},l.a.createElement(r.c,{name:"date"})),l.a.createElement(r.e,{label:"Toggle"},l.a.createElement(r.j,{name:"toggle",ref:n,label:"Hello world"})),l.a.createElement(r.j,{disabled:!0}),l.a.createElement(r.e,{label:"NumberField"},l.a.createElement(r.g,{name:"number",ref:n,prefixText:"EUR"})),l.a.createElement(c.e,null),l.a.createElement(i.b,{justifyContent:"space-between"},l.a.createElement(i.b,{width:"auto"},l.a.createElement(c.b,{value:"Reset",variant:"secondary",loading:!0,onClick:function(){return Object(r.l)(t)}}),l.a.createElement(c.b,{type:"submit",value:"Submit",onClick:o,variant:"primary"})))),l.a.createElement("div",null,l.a.createElement(r.f,null)))};t.default=function(){return l.a.createElement(o.c,{heading:"Form",overflow:"scroll"},l.a.createElement(m,null))}},241:function(e,t,a){"use strict";a.r(t);var n=a(8),l=a(0),r=a.n(l),i=a(67),c=a(14);t.default=function(){var e=r.a.useState(""),t=Object(n.a)(e,2),a=t[0],l=t[1],o=[{id:"addItem",icon:c.M,tooltip:"Add item",onClick:function(){return console.log("Item added")}},{id:"refresh",icon:c.U,tooltip:"Refresh",onClick:function(){return console.log("Refreshed")}}],u=r.a.useMemo((function(){return[{id:"item1",label:"Item 1",handleClick:function(){return l("item1")},isSelectedCallback:function(){return"item1"===a},subItems:[{id:"subItemA",label:"SubItem A",handleClick:function(){return l("subItemA")},isSelectedCallback:function(){return"subItemA"===a}},{id:"subItemB",label:"SubItem B",handleClick:function(){return l("subItemB")},isSelectedCallback:function(){return"subItemB"===a}}]},{id:"item2",label:"Item 2",handleClick:function(){return l("item2")},isSelectedCallback:function(){return"item2"===a}}]}),[a]);return r.a.createElement(i.c,{heading:"Application Name",shortHeading:"App",menu:u,actions:o})}},242:function(e,t,a){"use strict";a.r(t);var n=a(8),l=a(0),r=a.n(l),i=a(140),c=a(1),o=a(7),u=a(14),m=a(78),s=["sm","md","lg"],d={default:{},withText:{defaultValue:123.234034},withPrefixIcon:{placeholder:"Favorite hobby",prefixIcon:u.J},readOnly:{defaultValue:123.123123,readOnly:!0},disabled:{defaultValue:235.64465,disabled:!0},successStatus:{success:!0,defaultValue:101,prefixText:"\u20ac"},errorStatus:{error:!0,defaultValue:101,prefixText:"EUR"}};t.default=function(){return r.a.createElement(m.c,{heading:"TextField",overflow:"auto"},r.a.createElement(c.b,{direction:"column"},r.a.createElement(c.b,{justifyContent:"space-evenly"},r.a.createElement(o.l,{value:"Type",truncate:!0,variant:"h5",align:"right"}),r.a.createElement(o.l,{value:"Small (sm)",truncate:!0,variant:"h5"}),r.a.createElement(o.l,{value:"Medium (md, default)",truncate:!0,variant:"h5"}),r.a.createElement(o.l,{value:"Large (lg)",truncate:!0,variant:"h5"})),Object.entries(d).map((function(e){var t=Object(n.a)(e,2),a=t[0],l=t[1];return r.a.createElement(c.b,{key:a,justifyContent:"space-evenly",width:"100%"},r.a.createElement(o.l,{truncate:!0,value:a,align:"right"}),s.map((function(e){return r.a.createElement(i.g,Object.assign({spacing:e,key:a+e},l,{ref:null}))})))}))))}},243:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(1),i=a(7);t.default=function(){return l.a.createElement(r.b,{style:{padding:"20px",flexWrap:"wrap"}},l.a.createElement(i.j,{width:"400px",height:"20px"}),l.a.createElement(i.j,{width:"60px",height:"60px",circle:!0}))}},244:function(e,t,a){"use strict";a.r(t);var n=a(8),l=a(0),r=a.n(l),i=a(78),c=a(7);t.default=()=>{var e=r.a.useState(!0),t=Object(n.a)(e,2),a=t[0],l=t[1];return r.a.createElement(i.c,{caption:"Components",heading:"SummaryView",actions:r.a.createElement(c.b,{value:"Open SummaryView",onClick:()=>l(!0),disabled:a})},a&&r.a.createElement(i.e,{caption:"Fund",heading:"FA Equity +",onClose:()=>l(!1),headingSuffix:r.a.createElement(c.k,{value:"Calculated",color:"info"})},r.a.createElement("pre",null,'// Example\n<SummaryView\n  caption="Fund"\n  heading="FA Equity +"\n  onClose={handleClose}\n  headingSuffix={<Tag value="Calculated" color="info" />}\n>\n  {content}\n</SummaryView>\n')))}},245:function(e,t,a){"use strict";a.r(t);var n=a(8),l=a(0),r=a.n(l),i=a(140),c=a(7),o=a(14),u=a(1),m=a(78),s=["sm","md","lg"],d={default:{},withText:{defaultValue:"Default text"},withPrefixIcon:{placeholder:"Favorite hobby",prefixIcon:o.J},readOnly:{defaultValue:"Read only name",readOnly:!0},disabled:{defaultValue:"Disabled text",disabled:!0},successStatus:{success:!0,defaultValue:"101.00",prefixText:"\u20ac"},errorStatus:{error:!0,defaultValue:"101a",prefixText:"EUR"},loading:{isLoading:!0,defaultValue:"Siddhant Gupta"}};t.default=function(){return r.a.createElement(m.c,{heading:"TextField",overflow:"auto"},r.a.createElement(u.b,{direction:"column"},r.a.createElement(u.b,null,r.a.createElement(c.l,{value:"Type",truncate:!0,variant:"h5",align:"right"}),r.a.createElement(c.l,{value:"Small (sm)",truncate:!0,variant:"h5"}),r.a.createElement(c.l,{value:"Medium (md, default)",truncate:!0,variant:"h5"}),r.a.createElement(c.l,{value:"Large (lg)",truncate:!0,variant:"h5"})),Object.entries(d).map((function(e){var t=Object(n.a)(e,2),a=t[0],l=t[1];return r.a.createElement(u.b,{key:a},r.a.createElement(c.l,{truncate:!0,value:a,align:"right"}),s.map((function(e){return r.a.createElement(i.i,Object.assign({spacing:e,key:a+e},l,{ref:null}))})))}))))}},318:function(e,t,a){var n={"./":117,"./Accordion":235,"./Accordion.tsx":235,"./Breadcrumb":236,"./Breadcrumb.tsx":236,"./Button":237,"./Button.tsx":237,"./Card":238,"./Card.tsx":238,"./Form":239,"./Form.tsx":239,"./Form2":240,"./Form2.tsx":240,"./MainPage":230,"./MainPage.tsx":230,"./Menu":241,"./Menu.tsx":241,"./NumberField":242,"./NumberField.tsx":242,"./Skeleton":243,"./Skeleton.tsx":243,"./SummaryView":244,"./SummaryView.tsx":244,"./Table":250,"./Table.tsx":250,"./TextField":245,"./TextField.tsx":245,"./index":117,"./index.ts":117};function l(e){var t=r(e);return a(t)}function r(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}l.keys=function(){return Object.keys(n)},l.resolve=r,e.exports=l,l.id=318}}]);
//# sourceMappingURL=2.ba36014f.chunk.js.map