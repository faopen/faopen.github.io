(this.webpackJsonpplayground=this.webpackJsonpplayground||[]).push([[21],{239:function(e,a,r){"use strict";r.r(a);var l=r(0),t=r.n(l),n=r(140),o=r(7),s=r(1),m=r(78),i=[{label:"Develop",value:"dev"},{label:"Master",value:"master"},{label:"Test",value:"test",isDisabled:!0}],c=[{label:"roles",options:[{label:"Admin",value:"admin"},{label:"BO",value:"back"},{label:"Client",value:"front",isDisabled:!0}]}],u={username:"admin",password:"ke5ku5TA",remember:!0,number:324.432,env:i[0],env2:"test",roles:c[0].options[0]},d=function(){var e,a,r=Object(n.m)({defaultValues:u,criteriaMode:"all"}),l=r.register,m=r.control,d=r.handleSubmit,b=r.errors,p=d(console.log);return t.a.createElement(n.d,{formMethods:r,style:{width:"100%"},direction:"row"},t.a.createElement(s.b,{direction:"column",width:"260px",alignItems:"start"},t.a.createElement(n.e,{label:"Username",helpText:"Your login username.",errorText:null===(e=b.username)||void 0===e?void 0:e.message,required:!0},t.a.createElement(n.i,{ref:l({required:"Username required",minLength:{value:4,message:"More than 3 characters."}}),name:"username",placeholder:"Enter username...",error:!!b.username})),t.a.createElement(n.e,{label:"Password",required:!0,errorText:null===(a=b.password)||void 0===a?void 0:a.message},t.a.createElement(n.i,{name:"password",ref:l({required:"Password required"}),placeholder:"Enter password...",type:"password",error:!!b.password})),t.a.createElement(n.e,{label:"Applicable roles"},t.a.createElement(n.b,{name:"roles",placeholder:"Select roles...",options:c,isMulti:!0})),t.a.createElement(n.e,{label:"Environment"},t.a.createElement(n.b,{name:"env",placeholder:"Select environment...",options:i,isSearchable:!1})),t.a.createElement(n.e,{label:"Environment again..."},t.a.createElement(n.h,{name:"env2",options:[].concat(i),ref:l,direction:"row"})),t.a.createElement(n.e,{label:"Number"},t.a.createElement(n.g,{placeholder:"0.00",error:!!b.number,name:"number"})),t.a.createElement(o.e,null),t.a.createElement(s.b,{justifyContent:"space-between"},t.a.createElement(n.a,{ref:l,name:"remember",label:"Keep me logged in"}),t.a.createElement(s.b,{width:"auto"},t.a.createElement(o.b,{value:"Reset",variant:"secondary",onClick:function(){return Object(n.l)(m)}}),t.a.createElement(o.b,{type:"submit",value:"Submit",onClick:p,variant:"primary"})))),t.a.createElement(n.f,null))};a.default=function(){return t.a.createElement(m.c,{heading:"Form",overflow:"scroll"},t.a.createElement(d,null))}}}]);
//# sourceMappingURL=21.160a43bb.chunk.js.map