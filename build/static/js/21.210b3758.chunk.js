(this.webpackJsonpplayground=this.webpackJsonpplayground||[]).push([[21],{232:function(e,a,r){"use strict";r.r(a);var t=r(0),l=r.n(t),n=r(134),o=r(7),s=r(70),i=[{label:"Develop",value:"dev"},{label:"Master",value:"master"},{label:"Test",value:"test",isDisabled:!0}],m=[{label:"roles",options:[{label:"Admin",value:"admin"},{label:"BO",value:"back"},{label:"Client",value:"front",isDisabled:!0}]}],c={username:"admin",password:"ke5ku5TA",remember:!0,env:i[0],env2:"test",roles:m[0].options[0]},u=function(){var e,a,r=Object(n.m)({defaultValues:c,criteriaMode:"all"}),t=r.register,s=r.control,u=r.handleSubmit,d=r.errors,b=u(console.log);return l.a.createElement(n.d,{formMethods:r,style:{width:"100%"},direction:"row"},l.a.createElement(o.b,{direction:"column",width:"260px",alignItems:"start"},l.a.createElement(n.e,{label:"Username",helpText:"Your login username.",errorText:null===(e=d.username)||void 0===e?void 0:e.message,required:!0},l.a.createElement(n.i,{ref:t({required:"Username required",minLength:{value:4,message:"More than 3 characters."}}),name:"username",placeholder:"Enter username...",error:!!d.username})),l.a.createElement(n.e,{label:"Password",required:!0,errorText:null===(a=d.password)||void 0===a?void 0:a.message},l.a.createElement(n.i,{name:"password",ref:t({required:"Password required"}),placeholder:"Enter password...",type:"password",error:!!d.password})),l.a.createElement(n.e,{label:"Applicable roles"},l.a.createElement(n.b,{name:"roles",placeholder:"Select roles...",options:m,isMulti:!0})),l.a.createElement(n.e,{label:"Environment"},l.a.createElement(n.b,{name:"env",placeholder:"Select environment...",options:i,isSearchable:!1})),l.a.createElement(n.e,{label:"Environment again..."},l.a.createElement(n.h,{name:"env2",options:[].concat(i),ref:t,direction:"row"})),l.a.createElement(o.e,null),l.a.createElement(o.b,{justifyContent:"space-between"},l.a.createElement(n.a,{ref:t,name:"remember",label:"Keep me logged in"}),l.a.createElement(o.b,{width:"auto"},l.a.createElement(o.c,{value:"Reset",variant:"secondary",onClick:function(){return Object(n.l)(s)}}),l.a.createElement(o.c,{type:"submit",value:"Submit",onClick:b,variant:"primary"})))),l.a.createElement(n.f,null))};a.default=function(){return l.a.createElement(s.c,{heading:"Form",overflow:"scroll"},l.a.createElement(u,null))}}}]);
//# sourceMappingURL=21.210b3758.chunk.js.map