(this.webpackJsonpplayground=this.webpackJsonpplayground||[]).push([[1],{205:function(e,n,t){"use strict";t.r(n);var a,o=t(8),r=t(0),i=t.n(r),l=t(69),c=t(7),u=t(15),s=t(11),d=t(269),b=t(14),p=t(1),g=t(6),m=t(271),f=t(12),h=t(102),v=t(133),x=t(272);function E(){var e=Object(s.a)(["\n    display: ",";\n    background-color: ",";\n    grid-template-columns: auto max-content;\n    justify-content: space-between;\n\n    input,\n    select {\n      font-family: inherit;\n      font-weight: bold;\n      font-size: 0.9rem;\n      color: ",";\n      background-color: ",";\n      border-radius: ",";\n      height: 28px;\n      border: 1px solid ",";\n      padding: 0 4px;\n      text-align: center;\n    }\n  "]);return E=function(){return e},e}function y(){var e=Object(s.a)(["\n  /* This is required to make the table full-width */\n  display: block;\n  max-width: 100%;\n  width: 100%;\n  height: 100%;\n  min-height: 120px;\n  background-color: ",";\n\n  table {\n    table-layout: fixed;\n    width: auto;\n    min-width: 100%;\n    border-spacing: 0;\n    position: relative;\n\n    thead {\n      tr {\n        min-height: 40px;        \n\n        th {\n          position: sticky;\n          top: 0;\n          background-color: ",";\n          border-bottom: 1px solid ",";\n          border-right: 1px solid ",";\n          min-height: 40px;\n          z-index: 200;\n\n          margin: 0;\n          text-align: left;\n          padding: ",";\n\n          :last-child {\n            border-right: 0;\n          }\n\n          &.fixedColumnStart,\n          &.fixedColumnEnd {\n            position: sticky;\n            z-index: 250;\n          }\n          &.fixedColumnStart {\n            left: 0;\n          }\n          &.fixedColumnEnd {\n            right: 0;\n          }\n\n          .table-header-sort {\n            /* position: absolute;\n            right: ",";\n            top: ","; */\n            color: ",";\n            opacity: 0.5;\n            cursor: pointer;\n\n            :hover {\n              opacity: 1;\n            }\n          }\n        }\n      }\n\n      .filterRow {\n        th {\n          position: sticky;\n          top: 40px;\n          padding: ",";\n          background-color: ",";\n          z-index: 250;\n\n          input,\n          button,\n          select {\n            font-family: inherit;\n            color: ",";\n            background-color: ",";\n            border-radius: ",";\n            height: 28px;\n            border: 1px solid ",";\n            padding: 0 4px;\n          }\n\n          button {\n            width: 28px;\n          }\n        }\n      }\n    }\n\n    tbody tr {\n      position: relative;\n      z-index: 100;\n      cursor: ",";\n\n      td {\n        margin: 0;\n        text-align: left;\n        padding: ",";\n        background-color: ",";\n\n        :last-child {\n          border-right: 0;\n        }\n\n        &.fixedColumnStart,\n        &.fixedColumnEnd {\n          position: sticky;\n          z-index: 150;\n        }\n        &.fixedColumnStart {\n          left: 0;\n        }\n        &.fixedColumnEnd {\n          right: 0;\n        }\n      }\n\n      &:nth-of-type(odd),\n      &:nth-of-type(odd) td {\n        background-color: ",";\n      }\n\n      &:last-child {\n        td {\n          border-bottom: 0;\n        }\n      }\n\n      &.selected,\n      &.selected td {\n        background-color: "," !important;\n      }\n\n      &:hover,\n      &:hover td {\n        background-color: "," !important;\n      }\n\n      &.subComponent td {\n        padding: 0;\n        margin: 0;\n        background-color: "," !important;\n      }\n    }\n\n    tfoot {\n      position: sticky;\n      z-index: 200;\n      bottom: 0;\n      background-color: ",";\n      z-index: 200;\n\n      tr:first-of-type {\n        td {\n          border-top: 1px solid ",";\n          border-right: 1px solid ",";\n          :last-child {\n            border-right: 0;\n          }\n        }\n      }\n    }\n  }\n"]);return y=function(){return e},e}var w=p.i.div(a||(a=y()),(function(){return p.b.colorBackground("base")}),(function(){return p.b.colorBackground("disabled")}),(function(){return p.b.colorOutline("border")}),(function(){return p.b.colorOutline("border")}),(function(){return p.b.spacing()}),(function(){return p.b.spacing("sm")}),(function(){return p.b.spacing()}),(function(){return p.b.colorText("disabled")}),(function(){return p.b.spacing("sm")}),(function(){return p.b.colorBackground("disabled")}),(function(){return p.b.colorText("primary")}),(function(){return p.b.colorBackground("base")}),(function(){return p.b.radius("xs")}),(function(){return p.b.colorOutline("border")}),(function(e){return e.handleRowClick||e.handleRowDblClick?"pointer":"initial"}),(function(){return p.b.spacing()}),(function(){return p.b.colorBackground("base")}),(function(){return p.b.colorBackground("rowAlt")}),(function(){return p.b.colorBackground("selected")}),(function(){return p.b.colorBackground("hover")}),(function(){return p.b.colorBackground("elevated")}),(function(){return p.b.colorBackground("base")}),(function(){return p.b.colorOutline("border")}),(function(){return p.b.colorOutline("border")})),k=function(e){var n=e.row.original,t=e.tableProps.singleRowActions,a=t&&t(n)||[];return i.a.createElement(g.d,{icon:f.C,spacing:"xs",popoverMenuItems:a.map((function(e){return{id:e.id,label:e.tooltip||"",icon:e.icon,onClick:function(){return e.onClick},tint:e.variant}}))})},C=function(e){var n=e.onChange,t=e.checked,a=e.indeterminate,o=e.title,r=e.style;return i.a.createElement("div",{onClick:function(e){e.preventDefault(),e.stopPropagation(),n&&n(e)},title:o,style:r},i.a.createElement(g.g,{icon:a?h.f:t?h.c:f.cb}))},S=["rowActions","selection","expander"],O=function(e){return(e.all?"all-":"")+"data"},R=function(e){var n=e.Header;return"object"!=typeof n&&"function"!=typeof n||(n=e.id),n},j=function(e,n){return e.values[n.id]};function P(e){var n=e.rows,t=e.initialRows,a=e.allColumns,o=e.disableExport,r=e.getExportFileName,l=void 0===r?O:r;a.forEach((function(e){var n=!!e.id&&function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];for(var a=0;a<n.length;a+=1)if(void 0!==n[a])return n[a]}(!0!==e.disableExport&&void 0,!0!==o&&void 0,!0);e.canExport=n}));var c=i.a.useCallback((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=e.all,r=void 0!==o&&o,i=e.type,c=void 0===i?"csv":i,u=e.fileName,s=void 0===u?"":u,d=a.filter((function(e){return e.canExport&&(r||e.isVisible)&&!S.includes(e.id)})).map((function(e){var n=e.getExportHeaderValue,t=void 0===n?R:n;return{id:e.id,name:t(e),columnObj:e}}));0===d.length&&console.warn("No exportable columns are available");var b=n;r&&(b=t);var p=b.map((function(e){return d.map((function(n){var t=n.columnObj.getExportCellValue;return(void 0===t?j:t)(e,n)}))}));!function(e){var n=e.fileName,t=e.type,a=null;"csv"===t?a=function(e){var n=Object(m.unparse)(e);return new Blob([n],{type:"text/csv"})}(e.data):"xlsx"===t||"pdf"===t||console.warn("Not Supported File Type"),a&&function(e,n,t){if(e){var a=URL.createObjectURL(e),o=document.createElement("a");o.download="".concat(n,".").concat(t),o.href=a,o.click()}}(a,n,t)}({data:{fields:d.map((function(e){return e.name})),data:p},fileName:""!==s?s:l({fileType:c,all:r}),type:c})}),[l,t,n,a]);Object.assign(e,{exportData:c})}var T=function(e){e.useInstance.push(P)};T.pluginName="useExportData";var A,F={spacing:"sm",outline:!0},I=function(e){var n=e.tableInstance,t=e.tableProps,a=e.enableFilter,o=n.headerGroups,r=n.toggleAllRowsExpanded,l=n.isAllRowsExpanded,c=t.enableSorting,u=void 0!==c&&c,s=t.enableMultipleRowSelect,d=t.data,m=t.renderRowSubComponent,v=d.filter((function(e){return!!e.subRows})).length>0||m;return i.a.createElement("thead",null,o.map((function(e){return i.a.createElement(i.a.Fragment,{key:Object(b.x)()},i.a.createElement("tr",Object.assign({},e.getHeaderGroupProps()),e.headers.map((function(e,n){var t=u&&!e.disableSortBy;return i.a.createElement("th",Object.assign({},e.getHeaderProps(),{title:"",style:{width:150!==e.width?e.width+"px":"auto",minWidth:e.minWidth+"px",maxWidth:e.maxWidth+"px",textAlign:n===(s?1:0)?void 0:e.align}}),i.a.createElement(g.f,{gridTemplate:"auto / 1fr max-content",className:e.className},i.a.createElement("div",{className:"h5"},v&&(s&&1===n||!s&&0===n)?i.a.createElement(g.f,{gridTemplate:"1fr / max-content 1fr"},i.a.createElement("div",{style:{cursor:"pointer"},onClick:function(e){e.stopPropagation(),r()}},i.a.createElement(g.g,{icon:l?h.a:h.b})),e.render("Header")):e.render("Header")),t&&i.a.createElement("div",{className:"table-header-sort",title:"Sort column",onClick:function(){var n;(n=e).isSorted?n.isSortedDesc?n.clearSortBy():n.toggleSortBy(!0,!1):n.toggleSortBy(!1,!1)}},i.a.createElement(g.g,e.isSorted?{icon:e.isSortedDesc?f.Z:f.ab,color:p.b.colorText("primary")}:{icon:f.Y}))))}))),a?i.a.createElement("tr",{className:"filterRow",key:"filterRow"},e.headers.map((function(e){return i.a.createElement("th",{key:Object(b.x)()},e.canFilter?e.render("Filter"):null)}))):null)})))},N=function(e){var n,t=e.tableInstance,a=e.tableProps,o=t.getTableBodyProps,r=t.rows,l=t.page,c=t.prepareRow,u=t.toggleAllRowsSelected,s=t.toggleRowSelected,d=t.toggleRowExpanded,m=t.visibleColumns,f=a.handleRowDblClick,v=a.handleRowClick,x=a.handleRowContextClick,E=a.enablePagination,y=a.enableMultipleRowSelect,w=a.data,k=a.renderRowSubComponent,C=E?l:r,S=w.filter((function(e){return!!e.subRows})).length>0||k,O=0;return i.a.createElement("tbody",Object.assign({},o()),C.map((function(e){return c(e),i.a.createElement(i.a.Fragment,{key:e.id||Object(b.x)()},i.a.createElement("tr",Object.assign({},e.getRowProps(),{onClick:function(){return t=e,void(1===++O?n=setTimeout((function(){O=0,y||(u(!1),s(t.id)),v&&v(t.original)}),400):2===O&&(clearTimeout(n),O=0,f&&f(t.original)));var t},onContextMenu:function(n){x&&(n.preventDefault(),n.stopPropagation(),x(e.original))},className:e.isSelected?"selected":""}),e.cells.map((function(n,t){return i.a.createElement("td",Object.assign({},n.getCellProps(),{className:n.column.className}),S&&(y&&1===t||!y&&0===t)?e.canExpand||k?i.a.createElement(g.f,{gridTemplate:"auto / max-content auto",style:{paddingLeft:"calc(".concat(e.depth," * ").concat(p.b.spacing("xl"),")")}},i.a.createElement("span",{style:{cursor:"pointer"},onClick:function(n){n.stopPropagation(),d([e.id],!e.isExpanded)}},i.a.createElement(g.g,{icon:e.isExpanded?h.a:h.b})),i.a.createElement("span",{style:{paddingTop:p.b.spacing("xs")}},n.render("Cell"))):i.a.createElement("div",{style:{paddingLeft:"calc(".concat(e.depth+2," * ").concat(p.b.spacing("xl"),")")}},n.render("Cell")):i.a.createElement("div",{style:{textAlign:t===(y?1:0)?void 0:n.column.align}},n.render("Cell")))}))),k&&!e.canExpand&&e.isExpanded&&i.a.createElement("tr",{key:"subComponent",className:"subComponent"},i.a.createElement("td",{colSpan:m.length},k(e.original))))})))},B=function(e){var n=e.tableInstance,t=e.tableProps,a=t.columns,o=t.enableMultipleRowSelect,r=n.footerGroups;return function(e){var n=!0;return e.forEach((function(e){void 0!==e.Footer&&(n=!1)})),n}(a)?null:i.a.createElement("tfoot",{key:Object(b.x)()},r.map((function(e){return i.a.createElement("tr",Object.assign({},e.getFooterGroupProps(),{key:Object(b.x)()}),e.headers.map((function(e,n){return i.a.createElement("td",Object.assign({},e.getFooterProps(),{key:Object(b.x)()}),i.a.createElement("div",{style:{textAlign:n===(o?1:0)?void 0:e.align,padding:p.b.spacing()}},e.render("Footer")))})))})))},M=function(e,n,t){var a=n*e+e;return"".concat(n*e+1," - ").concat(a>t?t:a)},H=function(e){var n=e.tableInstance,t=e.tableProps,a=n.canPreviousPage,o=n.canNextPage,l=n.pageOptions,c=n.pageCount,u=n.gotoPage,s=n.nextPage,d=n.previousPage,m=n.rows,h=n.state,v=h.pageIndex,x=h.pageSize,y=t.isLoading,w=Object(r.useRef)(null),k=Object(b.m)(w).width>550,C=p.i.div(A||(A=E()),k?"grid":"block",(function(){return p.b.colorBackground("base")}),(function(){return p.b.colorText("primary")}),(function(){return p.b.colorBackground("elevated")}),(function(){return p.b.radius("sm")}),(function(){return p.b.colorOutline("border")}));return i.a.createElement(C,{className:"pagination",ref:w},k&&i.a.createElement(g.b,{style:{paddingTop:p.b.spacing("sm")}},i.a.createElement(g.l,y?{value:"Loading...",color:"disabled"}:m.length>0?{value:"Showing ".concat(M(x,v,m.length)," of ").concat(m.length," entries"),color:"secondary"}:{value:"There are 0 entries",color:"disabled"})),i.a.createElement(g.b,{justifyContent:k?"flex-end":"space-around"},i.a.createElement(g.b,{justifyContent:"flex-start"},i.a.createElement(g.c,{icon:f.i,onClick:function(){return u(0)},disabled:!a,spacing:"sm",outline:!0}),i.a.createElement(g.c,{icon:f.l,onClick:function(){return d()},disabled:!a,spacing:"sm",outline:!0})),i.a.createElement(g.b,{justifyContent:"center",style:{paddingTop:p.b.spacing("sm")},spacing:"sm"},i.a.createElement(g.l,{value:"Page"}),i.a.createElement("div",{style:{marginTop:"-4px"}},i.a.createElement("input",{type:"number",min:1,disabled:!o&&!a,placeholder:"Page",step:1,value:v+1,max:l.length,onChange:function(e){var n=e.target.value?Number(e.target.value)-1:0;u(n)},style:{width:"48px",maxWidth:"100px"}})),i.a.createElement(g.l,{value:"of"}),i.a.createElement(g.l,{value:""+l.length,variant:"h5"})),i.a.createElement(g.b,{justifyContent:"flex-end"},i.a.createElement(g.c,{icon:f.m,onClick:function(){return s()},disabled:!o,spacing:"sm",outline:!0}),i.a.createElement(g.c,{icon:f.j,onClick:function(){return u(c-1)},disabled:!o,spacing:"sm",outline:!0}))))};function D(e){var n=e.column,t=n.filterValue,a=n.setFilter;return Object(r.createElement)(v.h,{autoFocus:t,defaultValue:t||"",onChange:function(e){return a(e.target.value||void 0)},spacing:"sm",placeholder:"Filter...",textAlign:n.align})}function z(e,n,t){return Object(x.a)(e,t,{keys:[function(e){return e.values[n]}]})}z.autoRemove=function(e){return!e};var V=function(e){var n=e.columns,t=e.data,a=e.enableMultipleRowSelect,s=void 0!==a&&a,m=e.defaultRowsOnPage,x=void 0===m?100:m,E=e.enablePagination,y=void 0!==E&&E,O=e.tableHeading,R=void 0===O?"":O,j=e.borderless,P=void 0!==j&&j,A=e.hideHeader,M=void 0!==A&&A,z=e.disableSubRowSelect,V=void 0!==z&&z,L=e.isLoading,G=void 0!==L&&L,W=i.a.useMemo((function(){return G?Array(30).fill({}):t}),[G,t]),J=i.a.useMemo((function(){return G?n.map((function(e){return Object(c.a)(Object(c.a)({},e),{},{Cell:i.a.createElement(g.j,{height:"20px"})})})):n}),[G,n]),U=i.a.useMemo((function(){return{Filter:D}}),[]),q=i.a.useMemo((function(){return n.filter((function(e){return!0===e.hidden})).map((function(e){return e.id||""}))}),[n]),Y=Object(d.useTable)({columns:J,data:W,defaultColumn:U,selectMultipleRows:s,selectSubRows:!V,initialState:{pageIndex:0,pageSize:x,hiddenColumns:q},getSubRows:function(e){return e.subRows}},d.useFilters,d.useSortBy,d.useExpanded,d.usePagination,d.useRowSelect,T,(function(n){return function(e,n){n.disableSubRowSelect&&(e.getToggleAllRowsSelectedProps=[function(e,n){var t=n.instance;return[e,{onChange:function(){t.rows.forEach((function(e){return e.toggleRowSelected(!t.rows.every((function(e){return e.isSelected})))}))},checked:t.rows.length>0&&t.rows.every((function(e){return e.isSelected})),title:"Toggle All Rows Selected",indeterminate:Boolean(!t.isAllRowsSelected&&Object.keys(t.state.selectedRowIds).length)}]}]),e.visibleColumns.push((function(e){var t=[],a=[];return n.enableMultipleRowSelect&&t.push({id:"selection",width:40,disableSortBy:!0,disableFilters:!0,className:"fixedColumnStart",Header:function(e){return i.a.createElement(C,Object.assign({},e.getToggleAllRowsSelectedProps()))},Cell:function(e){var t=e.row;return n.disableSubRowSelect&&t.depth>0?null:i.a.createElement(C,Object.assign({},t.getToggleRowSelectedProps()))}}),n.singleRowActions&&a.push({id:"rowActions",width:40,disableSortBy:!0,disableFilters:!0,className:"fixedColumnEnd",Cell:function(e){var t=e.row;return i.a.createElement(k,{row:t,tableProps:n})}}),[].concat(t,Object(u.a)(e),a)}))}(n,e)}));i.a.useEffect((function(){Y.toggleHideColumn("selection",!s)}),[s]);var Z=function(e){var n=e.tableInstance,t=e.tableProps,a=t.enableFiltering,c=void 0!==a&&a,s=t.tableActions,d=void 0===s?[]:s,b=t.exportTable,m=t.enableColumnVisibilitySelector,x=void 0!==m&&m,E=n.setAllFilters,y=i.a.useState(!1),w=Object(o.a)(y,2),k=w[0],C=w[1],O=function(e){var n=e.tableInstance,t=e.tableProps,a=t.exportTable,o=void 0!==a&&a,r=t.tableHeading,l=n.exportData,c=[];return(!0===o||Array.isArray(o)&&-1!==o.indexOf("csv"))&&c.push({id:"csv",label:"Download CSV",onClick:function(){return l({type:"csv",fileName:r})},icon:f.I}),i.a.createElement("div",{key:"exportAction"},i.a.createElement(g.d,Object.assign({icon:f.V,tooltip:"Export"},F,{popoverMenuItems:c})))}({tableInstance:n,tableProps:t}),R=function(e){var n=e.tableInstance,t=n.state,a=n.toggleHideColumn,c=n.visibleColumns,u=n.allColumns,s=t.hiddenColumns,d=Object(g.p)(),b=Object(o.a)(d,3),m=b[0],h=b[1],x=b[2],E=Object(r.useMemo)((function(){return s?u.filter((function(e){return s.some((function(n){return n===e.id}))&&!S.includes(e.id)})).map((function(e){var n;return{id:e.id.toString(),value:(null===(n=e.Header)||void 0===n?void 0:n.toString())||""}})):[]}),[u,s]),y=Object(r.useMemo)((function(){return c?c.filter((function(e){return!S.includes(e.id)})).map((function(e){var n;return{id:e.id.toString(),value:(null===(n=e.Header)||void 0===n?void 0:n.toString())||""}})):[]}),[c]);return i.a.createElement("div",{key:"columnSelectAction"},i.a.createElement(g.c,Object.assign({icon:f.z,tooltip:"Select visible columns"},F,{onClick:h})),i.a.createElement(m,null,i.a.createElement(l.a,{headerTitle:"Select columns",headerActions:i.a.createElement(g.c.Close,{onClick:x})},i.a.createElement("div",{style:{padding:p.b.spacing(),height:"360px"}},i.a.createElement(v.i,{shuttle1:{heading:"Available columns",items:E,handleAcceptTransfer:function(e){e.forEach((function(e){return a(e.id,!0)}))}},shuttle2:{heading:"Visible columns",items:y,handleAcceptTransfer:function(e){e.forEach((function(e){return a(e.id,!1)}))}}})))))}({tableInstance:n,tableProps:t});Object(r.useEffect)((function(){E([])}),[k]);var j=Object(u.a)(function(e){var n=e.tableInstance,t=e.tableProps,a=n.selectedFlatRows,o=void 0===a?[]:a,r=n.state.selectedRowIds,l=t.multipleRowActions,c=t.singleRowActions,u=t.enableMultipleRowSelect,s=Object.entries(r),d=s.length>0,b=o.map((function(e){return e.original})),m=u?l&&l(b)||[]:c&&c(b[0])||[],f=[];return m.length>0&&(d&&u&&f.push(i.a.createElement("div",{key:"rowSelectedText",style:{paddingTop:p.b.spacing("sm")}},i.a.createElement(g.l,{value:s.length+" selected",color:"disabled"}))),m.map((function(e){return f.push(i.a.createElement(g.d,Object.assign({key:e.id},e,F,{disabled:!d,variant:d?e.variant:"default"})))})),f.push(i.a.createElement(g.e,{key:"actionDivider",vertical:!0}))),f}({tableInstance:n,tableProps:t}));return d&&Array.isArray(d)&&d.map((function(e){return j.push(i.a.createElement(g.d,Object.assign({},e,F,{key:e.id})))})),b&&j.push(O),x&&j.push(R),c&&j.push(i.a.createElement(g.c,Object.assign({key:"Filter",icon:k?h.e:f.J,tooltip:"Filter",onClick:function(){return C((function(e){return!e}))}},F))),{actions:j,enableFilter:k}}({tableProps:e,tableInstance:Y}),K=Z.actions,Q=Z.enableFilter,X=i.a.useState(Object(b.x)()),$=Object(o.a)(X,1)[0],_=i.a.createElement(w,{style:Object(c.a)({},e.customStyle),id:$,className:"Table",handleRowClick:e.handleRowClick,handleRowDblClick:e.handleRowDblClick},i.a.createElement("table",Object.assign({},Y.getTableProps()),i.a.createElement(I,{tableInstance:Y,tableProps:e,enableFilter:Q}),i.a.createElement(N,{tableInstance:Y,tableProps:e}),i.a.createElement(B,{tableInstance:Y,tableProps:e})));return P?_:i.a.createElement(l.a,{headerTitle:R||"",stretchHeight:!0,headerHidden:M,headerActions:i.a.createElement(g.b,{style:{paddingTop:p.b.spacing("xs")}},K),footerContent:y&&i.a.createElement(H,{tableInstance:Y,tableProps:e}),overflow:G?"hidden":"auto"},_)},L=function(){var e=i.a.useState(!1),n=Object(o.a)(e,2),t=n[0],a=n[1];Object(b.v)((function(){return a(!0)}),1e3);var r=i.a.useMemo((function(){return t?[{name:"Siddhant Gupta",age:25,category:"Developer",subRows:[{name:"Shobhit Gupta",age:25,category:"Developer"},{name:"Other person",age:35,category:"Misc"}]},{name:"Other person",age:35,category:"Misc",subRows:[{name:"Shobhit Gupta",age:25,category:"Developer"},{name:"Other person",age:35,category:"Misc"}]}]:[]}),[t]),l=i.a.useMemo((function(){return[{accessor:"name",Header:"Full name",disableFilter:!1},{accessor:"category",Header:"Category",disableFilter:!0,Cell:function(e){var n=e.value;return i.a.createElement(g.k,null,n)}},{accessor:"age",Header:"Age",disableFilter:!0,align:"right"}]}),[]);return i.a.createElement(V,{tableHeading:"Table",data:r,columns:l,handleRowClick:function(e){return console.log(e)},handleRowDblClick:function(e){return alert(e)},singleRowActions:function(e){return[{id:"log",icon:f.gb,tooltip:"Log",onClick:function(){return console.log(e)}}]},enableSorting:!0,enableFiltering:!0,enablePagination:!0,enableMultipleRowSelect:!0,enableColumnVisibilitySelector:!0,exportTable:!0,isLoading:!t})};n.default=function(){return i.a.createElement(l.c,{heading:"Table"},i.a.createElement(L,null))}}}]);
//# sourceMappingURL=1.30dda8fd.chunk.js.map