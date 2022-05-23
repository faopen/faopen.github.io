"use strict";(self.webpackChunkplayground=self.webpackChunkplayground||[]).push([[4539],{94539:function(n,e,t){t.r(e),t.d(e,{default:function(){return un}});var o,r=t(11026),i=t(56167),l=t(6380),a=t(37878),s=t(63401),c=t(74495),d=t(38315),u=t(31913),p=function(n,e){return Object.defineProperty?Object.defineProperty(n,"raw",{value:e}):n.raw=e,n},f=d.zo.div(o||(o=p(["\n  /* This is required to make the table full-width */\n  display: block;\n  max-width: 100%;\n  width: 100%;\n  height: 100%;\n  min-height: 120px;\n  background-color: ",";\n\n  table {\n    table-layout: fixed;\n    width: auto;\n    min-width: 100%;\n    border-spacing: 0;\n    position: relative;\n\n    thead {\n      tr {\n        min-height: 40px;\n\n        th {\n          position: sticky;\n          top: 0;\n          background-color: ",";\n          border-bottom: 1px solid ",";\n          border-right: 1px solid ",";\n          min-height: 40px;\n          z-index: 200;\n\n          margin: 0;\n          text-align: left;\n          padding: ",";\n\n          :last-child {\n            border-right: 0;\n          }\n\n          &.fixedColumnStart,\n          &.fixedColumnEnd {\n            position: sticky;\n            z-index: 250;\n          }\n          &.fixedColumnStart {\n            left: 0;\n          }\n          &.fixedColumnEnd {\n            right: 0;\n          }\n\n          .table-header-sort {\n            color: ",";\n            opacity: 0.5;\n            cursor: pointer;\n            margin-left: ",";\n\n            :hover {\n              opacity: 1;\n            }\n          }\n        }\n      }\n\n      .filterRow {\n        th {\n          position: sticky;\n          top: 40px;\n          padding: ",";\n          background-color: ",";\n          z-index: 250;\n\n          input,\n          button,\n          select {\n            font-family: inherit;\n            color: ",";\n            background-color: ",";\n            border-radius: ",";\n            height: 28px;\n            border: 1px solid ",";\n            padding: 0 4px;\n          }\n\n          button {\n            width: 28px;\n          }\n        }\n      }\n    }\n\n    tbody tr {\n      position: relative;\n      z-index: 100;\n      cursor: ",";\n\n      td {\n        margin: 0;\n        text-align: left;\n        padding: ",";\n        background-color: ",";\n\n        :last-child {\n          border-right: 0;\n        }\n\n        &.fixedColumnStart,\n        &.fixedColumnEnd {\n          position: sticky;\n          z-index: 150;\n        }\n        &.fixedColumnStart {\n          left: 0;\n        }\n        &.fixedColumnEnd {\n          right: 0;\n        }\n      }\n\n      &:nth-of-type(odd),\n      &:nth-of-type(odd) td {\n        background-color: ",";\n      }\n\n      &:last-child {\n        td {\n          border-bottom: 0;\n        }\n      }\n\n      &.selected,\n      &.selected td {\n        background-color: "," !important;\n      }\n\n      &:hover,\n      &:hover td,\n      &:focus,\n      &:focus td {\n        background-color: "," !important;\n      }\n\n      &.subComponent td {\n        padding: 0;\n        margin: 0;\n        background-color: "," !important;\n      }\n    }\n\n    tfoot {\n      position: sticky;\n      z-index: 200;\n      bottom: 0;\n      background-color: ",";\n      z-index: 200;\n\n      tr:first-of-type {\n        td {\n          border-top: 1px solid ",";\n          border-right: 1px solid ",";\n          :last-child {\n            border-right: 0;\n          }\n        }\n      }\n    }\n  }\n"],["\n  /* This is required to make the table full-width */\n  display: block;\n  max-width: 100%;\n  width: 100%;\n  height: 100%;\n  min-height: 120px;\n  background-color: ",";\n\n  table {\n    table-layout: fixed;\n    width: auto;\n    min-width: 100%;\n    border-spacing: 0;\n    position: relative;\n\n    thead {\n      tr {\n        min-height: 40px;\n\n        th {\n          position: sticky;\n          top: 0;\n          background-color: ",";\n          border-bottom: 1px solid ",";\n          border-right: 1px solid ",";\n          min-height: 40px;\n          z-index: 200;\n\n          margin: 0;\n          text-align: left;\n          padding: ",";\n\n          :last-child {\n            border-right: 0;\n          }\n\n          &.fixedColumnStart,\n          &.fixedColumnEnd {\n            position: sticky;\n            z-index: 250;\n          }\n          &.fixedColumnStart {\n            left: 0;\n          }\n          &.fixedColumnEnd {\n            right: 0;\n          }\n\n          .table-header-sort {\n            color: ",";\n            opacity: 0.5;\n            cursor: pointer;\n            margin-left: ",";\n\n            :hover {\n              opacity: 1;\n            }\n          }\n        }\n      }\n\n      .filterRow {\n        th {\n          position: sticky;\n          top: 40px;\n          padding: ",";\n          background-color: ",";\n          z-index: 250;\n\n          input,\n          button,\n          select {\n            font-family: inherit;\n            color: ",";\n            background-color: ",";\n            border-radius: ",";\n            height: 28px;\n            border: 1px solid ",";\n            padding: 0 4px;\n          }\n\n          button {\n            width: 28px;\n          }\n        }\n      }\n    }\n\n    tbody tr {\n      position: relative;\n      z-index: 100;\n      cursor: ",";\n\n      td {\n        margin: 0;\n        text-align: left;\n        padding: ",";\n        background-color: ",";\n\n        :last-child {\n          border-right: 0;\n        }\n\n        &.fixedColumnStart,\n        &.fixedColumnEnd {\n          position: sticky;\n          z-index: 150;\n        }\n        &.fixedColumnStart {\n          left: 0;\n        }\n        &.fixedColumnEnd {\n          right: 0;\n        }\n      }\n\n      &:nth-of-type(odd),\n      &:nth-of-type(odd) td {\n        background-color: ",";\n      }\n\n      &:last-child {\n        td {\n          border-bottom: 0;\n        }\n      }\n\n      &.selected,\n      &.selected td {\n        background-color: "," !important;\n      }\n\n      &:hover,\n      &:hover td,\n      &:focus,\n      &:focus td {\n        background-color: "," !important;\n      }\n\n      &.subComponent td {\n        padding: 0;\n        margin: 0;\n        background-color: "," !important;\n      }\n    }\n\n    tfoot {\n      position: sticky;\n      z-index: 200;\n      bottom: 0;\n      background-color: ",";\n      z-index: 200;\n\n      tr:first-of-type {\n        td {\n          border-top: 1px solid ",";\n          border-right: 1px solid ",";\n          :last-child {\n            border-right: 0;\n          }\n        }\n      }\n    }\n  }\n"])),d.rS.color.background.default,d.rS.color.background.secondary,d.rS.color.border.default,d.rS.color.border.default,d.rS.spacing.md,d.rS.color.text.disabled,d.rS.spacing.md,d.rS.spacing.sm,d.rS.color.background.disabled,d.rS.color.text.primary,d.rS.color.background.default,d.rS.radius[100],d.rS.color.border.default,(function(n){return n.handleRowClick||n.handleRowDblClick?"pointer":"initial"}),d.rS.spacing.md,d.rS.color.background.default,d.rS.color.background.rowAlt,d.rS.color.background.selected,d.rS.color.background.hover,d.rS.color.background.primary,d.rS.color.background.default,d.rS.color.border.default,d.rS.color.border.default),g=t(43361),b=t(46931),h=function(n){var e=n.row.original,t=n.tableProps.singleRowActions,o=t&&t(e)||[];return(0,a.jsx)(u.j0,{icon:b.EX,spacing:"xs",popoverMenuItems:o.map((function(n){return{id:n.id,label:n.tooltip||"",icon:n.icon,onClick:function(e){var t;e.preventDefault(),e.stopPropagation(),null===(t=n.onClick)||void 0===t||t.call(n,e)},tint:n.variant}}))})},m=t(58805),x=function(){return x=Object.assign||function(n){for(var e,t=1,o=arguments.length;t<o;t++)for(var r in e=arguments[t])Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},x.apply(this,arguments)},v=function(n){var e=n.onChange,t=n.checked,o=n.indeterminate,r=n.title,i=n.style;return(0,a.jsx)("div",x({onClick:function(n){n.preventDefault(),n.stopPropagation(),e&&e(n)},title:r,style:i},{children:(0,a.jsx)(u.JO,{icon:o?m.El_:t?m.a3n:b.pL1})}))},y=function(){return y=Object.assign||function(n){for(var e,t=1,o=arguments.length;t<o;t++)for(var r in e=arguments[t])Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},y.apply(this,arguments)},w=function(n,e){var t="function"===typeof Symbol&&n[Symbol.iterator];if(!t)return n;var o,r,i=t.call(n),l=[];try{for(;(void 0===e||e-- >0)&&!(o=i.next()).done;)l.push(o.value)}catch(a){r={error:a}}finally{try{o&&!o.done&&(t=i.return)&&t.call(i)}finally{if(r)throw r.error}}return l},S=function(n,e,t){if(t||2===arguments.length)for(var o,r=0,i=e.length;r<i;r++)!o&&r in e||(o||(o=Array.prototype.slice.call(e,0,r)),o[r]=e[r]);return n.concat(o||Array.prototype.slice.call(e))},j=["rowActions","selection","expander"],C=function(n,e){e.disableSubRowSelect&&(n.getToggleAllRowsSelectedProps=[function(n,e){var t=e.instance;return[n,{onChange:function(){t.rows.forEach((function(n){return n.toggleRowSelected(!t.rows.every((function(n){return n.isSelected})))}))},checked:t.rows.length>0&&t.rows.every((function(n){return n.isSelected})),title:"Toggle All Rows Selected",indeterminate:Boolean(!t.isAllRowsSelected&&Object.keys(t.state.selectedRowIds).length)}]}]),n.visibleColumns.push((function(n){var t=[],o=[];return e.enableMultipleRowSelect&&t.push({id:"selection",width:40,disableSortBy:!0,disableFilters:!0,className:"fixedColumnStart",Header:function(n){return(0,a.jsx)(v,y({},n.getToggleAllRowsSelectedProps()))},Cell:function(n){var t=n.row;return e.disableSubRowSelect&&t.depth>0?null:(0,a.jsx)(v,y({},t.getToggleRowSelectedProps()))}}),e.singleRowActions&&o.push({id:"rowActions",width:40,disableSortBy:!0,disableFilters:!0,className:"fixedColumnEnd",Cell:function(n){var t=n.row;return(0,a.jsx)(h,{row:t,tableProps:e})}}),S(S(S([],w(t),!1),w(n),!1),w(o),!1)}))};var k=function(n){var e=n.all;return"".concat(e?"all-":"","data")},R=function(n){var e=n.Header;return"object"!==typeof e&&"function"!==typeof e||(e=n.id),e},O=function(n,e){return n.values[e.id]};function P(n){var e=n.data,t=n.fileName,o=n.type,r=null;"csv"===o?r=function(n){var e=(0,g.unparse)(n);return new Blob([e],{type:"text/csv"})}(e):"xlsx"===o||"pdf"===o||console.warn("Not Supported File Type"),r&&function(n,e,t){if(n){var o=URL.createObjectURL(n),r=document.createElement("a");r.download="".concat(e,".").concat(t),r.href=o,r.click()}}(r,t,o)}function E(n){var e=n.rows,t=n.initialRows,o=n.allColumns,r=n.disableExport,l=n.getExportFileName,a=void 0===l?k:l;o.forEach((function(n){var e=!!n.id&&function(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];for(var t=0;t<n.length;t+=1)if("undefined"!==typeof n[t])return n[t]}(!0!==n.disableExport&&void 0,!0!==r&&void 0,!0);n.canExport=e}));var s=i.useCallback((function(n){var r=void 0===n?{}:n,i=r.all,l=void 0!==i&&i,s=r.type,c=void 0===s?"csv":s,d=r.fileName,u=void 0===d?"":d,p=o.filter((function(n){return n.canExport&&(l||n.isVisible)&&!j.includes(n.id)})).map((function(n){var e=n.getExportHeaderValue,t=void 0===e?R:e;return{id:n.id,name:t(n),columnObj:n}}));0===p.length&&console.warn("No exportable columns are available");var f=e;l&&(f=t);var g=f.map((function(n){return p.map((function(e){var t=e.columnObj.getExportCellValue;return(void 0===t?O:t)(n,e)}))}));P({data:{fields:p.map((function(n){return n.name})),data:g},fileName:""!==u?u:a({fileType:c,all:l}),type:c})}),[a,t,e,o]);Object.assign(n,{exportData:s})}var A=function(n){n.useInstance.push(E)};A.pluginName="useExportData";var F,T=A,I={spacing:"sm",outline:!0},N=function(){return N=Object.assign||function(n){for(var e,t=1,o=arguments.length;t<o;t++)for(var r in e=arguments[t])Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},N.apply(this,arguments)},H=function(n){var e=n.tableInstance,t=n.tableProps,o=t.exportTable,r=void 0!==o&&o,i=t.tableHeading,l=e.exportData,s=[];return(!0===r||Array.isArray(r)&&-1!==r.indexOf("csv"))&&s.push({id:"csv",label:"Download CSV",onClick:function(){return l({type:"csv",fileName:i})},icon:b.fUD}),(0,a.jsx)("div",{children:(0,a.jsx)(u.j0,N({icon:b.zBy,tooltip:"Export"},I,{popoverMenuItems:s}))},"exportAction")},z=t(19367),D=function(){return D=Object.assign||function(n){for(var e,t=1,o=arguments.length;t<o;t++)for(var r in e=arguments[t])Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},D.apply(this,arguments)},V=function(n,e){var t="function"===typeof Symbol&&n[Symbol.iterator];if(!t)return n;var o,r,i=t.call(n),l=[];try{for(;(void 0===e||e-- >0)&&!(o=i.next()).done;)l.push(o.value)}catch(a){r={error:a}}finally{try{o&&!o.done&&(t=i.return)&&t.call(i)}finally{if(r)throw r.error}}return l},M=function(n,e){return n.filter((function(n){return-1===e.indexOf(n)}))},L=function(n){return n.reduce((function(n,e){return(n[e.id]=e)&&n}),{})},B=function(n){var e=n.tableInstance,t=n.tableProps.columnVisibilitySelector,o=e.state.hiddenColumns,r=e.setHiddenColumns,s=e.allColumns,c=e.setColumnOrder,p=V((0,u.dd)(!1),3),f=p[0],g=p[1],h=p[2],m=(0,i.useRef)(),x=(0,i.useMemo)((function(){var n=s.map((function(n){return{id:n.id,content:""+n.Header}})),e=M(n.map((function(n){return n.id})),j),t=M(o,j),r=[{id:"hidden_column",title:"Available lists",itemIds:t},{id:"visible_column",title:"Visible lists",itemIds:M(e,t)}];return{transferListData:{listOrder:r.map((function(n){return n.id})),lists:L(r),items:L(n)}}}),[o,s]).transferListData;return(0,a.jsxs)("div",{children:[(0,a.jsx)(u.zx,D({icon:b.rWw,tooltip:"Select visible columns"},I,{onClick:g})),(0,a.jsx)(f,{children:(0,a.jsx)(l.Cl,D({headerTitle:"Select columns",headerActions:(0,a.jsx)(u.zx.Close,{onClick:h}),footerContent:(0,a.jsxs)(d.xu,D({justifyContent:"space-between"},{children:[(0,a.jsx)("div",{}),(0,a.jsx)(u.zx,D({spacing:"sm",onClick:function(){if(m.current){var n=m.current.listOrder,e=m.current.lists[n[0]].itemIds,o=m.current.lists[n[1]].itemIds;r(e),c(o);var i=t||{},l=i.handleChange,a=i.handleVisibleColumns;l&&l(e),a&&a(o,!0)}h()},variant:"primary"},{children:"Save"}))]}))},{children:(0,a.jsx)("div",D({style:{padding:d.rS.spacing.md,height:"720px",width:"650px"}},{children:(null===x||void 0===x?void 0:x.lists)&&(0,a.jsx)(z.Jv,{data:x,onChange:function(n){return m.current=n}})}))}))})]},"columnSelectAction")},W=function(){return W=Object.assign||function(n){for(var e,t=1,o=arguments.length;t<o;t++)for(var r in e=arguments[t])Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},W.apply(this,arguments)},G=function(n){var e=n.tableInstance,t=n.tableProps,o=e.selectedFlatRows,r=void 0===o?[]:o,i=e.state.selectedRowIds,l=t.multipleRowActions,s=t.singleRowActions,c=t.enableMultipleRowSelect,p=Object.entries(i),f=p.length>0,g=r.map((function(n){return n.original})),b=c?l&&l(g)||[]:s&&s(g[0])||[],h=[];return b.length>0&&(f&&c&&h.push((0,a.jsx)("div",W({style:{paddingTop:d.rS.spacing.sm}},{children:(0,a.jsx)(u.xv,{value:"".concat(p.length," selected"),color:"disabled"})}),"rowSelectedText")),b.map((function(n){return h.push((0,a.jsx)(u.j0,W({},n,I,{disabled:!f,variant:f?n.variant:"default"}),n.id))})),h.push((0,a.jsx)(u.iz,{vertical:!0},"actionDivider"))),h},U=function(){return U=Object.assign||function(n){for(var e,t=1,o=arguments.length;t<o;t++)for(var r in e=arguments[t])Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},U.apply(this,arguments)},J=function(n,e){var t="function"===typeof Symbol&&n[Symbol.iterator];if(!t)return n;var o,r,i=t.call(n),l=[];try{for(;(void 0===e||e-- >0)&&!(o=i.next()).done;)l.push(o.value)}catch(a){r={error:a}}finally{try{o&&!o.done&&(t=i.return)&&t.call(i)}finally{if(r)throw r.error}}return l},K=function(n,e,t){if(t||2===arguments.length)for(var o,r=0,i=e.length;r<i;r++)!o&&r in e||(o||(o=Array.prototype.slice.call(e,0,r)),o[r]=e[r]);return n.concat(o||Array.prototype.slice.call(e))},_=function(n){var e=n.tableInstance,t=n.tableProps,o=t.enableFiltering,r=void 0!==o&&o,l=t.tableActions,s=void 0===l?[]:l,c=t.exportTable,d=t.columnVisibilitySelector,p=e.setAllFilters,f=J(i.useState(!1),2),g=f[0],h=f[1],x=H({tableInstance:e,tableProps:t});(0,i.useEffect)((function(){p([])}),[g]);var v=K([],J(G({tableInstance:e,tableProps:t})),!1);return s&&Array.isArray(s)&&s.map((function(n){return v.push((0,i.createElement)(u.j0,U({},n,I,{key:n.id})))})),c&&v.push(x),d&&v.push((0,a.jsx)(B,{tableInstance:e,tableProps:t})),r&&v.push((0,a.jsx)(u.zx,U({icon:g?m.G_j:b.G_j,tooltip:"Filter",onClick:function(){return h((function(n){return!n}))}},I),"Filter")),{actions:v,enableFilter:g}},X=function(){return X=Object.assign||function(n){for(var e,t=1,o=arguments.length;t<o;t++)for(var r in e=arguments[t])Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},X.apply(this,arguments)},Z=function(n){var e=n.tableInstance,t=n.tableProps,o=n.enableFilter,r=e.headerGroups,l=e.toggleAllRowsExpanded,s=e.isAllRowsExpanded,p=t.enableSorting,f=void 0!==p&&p,g=t.enableMultipleRowSelect,h=t.data,x=t.renderRowSubComponent,v=t.disableAllRowsExpand,y=void 0!==v&&v,w=h.filter((function(n){return!!n.subRows})).length>0||x;return(0,a.jsx)("thead",{children:r.map((function(n){return(0,a.jsxs)(i.Fragment,{children:[(0,a.jsx)("tr",X({},n.getHeaderGroupProps(),{children:n.headers.map((function(n,e){var t=f&&!n.disableSortBy;return(0,a.jsx)("th",X({},n.getHeaderProps(),{title:"",style:{width:150!==n.width?"".concat(n.width,"px"):"auto",minWidth:n.minWidth+"px",maxWidth:n.maxWidth+"px",textAlign:e===(g?1:0)?void 0:n.align}},{children:(0,a.jsxs)(d.rj,X({spacing:"none",gridTemplate:"auto / 1fr max-content",className:n.className},{children:[(0,a.jsx)("div",X({className:"h5"},{children:w&&!y&&(g&&1===e||!g&&0===e)?(0,a.jsxs)(d.rj,X({gridTemplate:"1fr / max-content 1fr"},{children:[(0,a.jsx)("div",X({style:{cursor:"pointer"},onClick:function(n){n.stopPropagation(),l()}},{children:(0,a.jsx)(u.JO,{icon:s?m.eW2:m.I4f})})),n.render("Header")]})):n.render("Header")})),t&&(0,a.jsx)("div",X({className:"table-header-sort",title:"Sort column",onClick:function(){return function(n){n.isSorted?n.isSortedDesc?n.clearSortBy():n.toggleSortBy(!0,!1):n.toggleSortBy(!1,!1)}(n)}},{children:n.isSorted?(0,a.jsx)(u.JO,{icon:n.isSortedDesc?b.eGX:b.l0f,color:d.rS.color.text.primary}):(0,a.jsx)(u.JO,{icon:b.BGE})}))]}))}))}))})),o?(0,a.jsx)("tr",X({className:"filterRow"},{children:n.headers.map((function(n){return(0,a.jsx)("th",{children:n.canFilter?n.render("Filter"):null},(0,c.Vj)())}))}),"filterRow"):null]},(0,c.Vj)())}))})},q=function(){return q=Object.assign||function(n){for(var e,t=1,o=arguments.length;t<o;t++)for(var r in e=arguments[t])Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},q.apply(this,arguments)},Y=function(n){var e,t=n.tableInstance,o=n.tableProps,r=t.getTableBodyProps,l=t.rows,s=t.page,p=t.prepareRow,f=t.toggleAllRowsSelected,g=t.toggleRowSelected,b=t.toggleRowExpanded,h=t.visibleColumns,x=o.isLoading,v=o.handleRowDblClick,y=o.handleRowClick,w=o.handleRowContextClick,S=o.enablePagination,j=o.enableMultipleRowSelect,C=o.data,k=o.renderRowSubComponent,R=i.useRef(null),O=S?s:l,P=C.filter((function(n){return!!n.subRows})).length>0||k,E=0;return(0,a.jsx)("tbody",q({},r(),{ref:R},{children:O.map((function(n){return p(n),(0,a.jsxs)(i.Fragment,{children:[(0,a.jsx)("tr",q({},n.getRowProps(),{id:n.id,onClick:function(){return!x&&function(n){1===++E?e=setTimeout((function(){E=0,j||(f(!1),g(n.id)),y&&y(n.original)}),400):2===E&&(clearTimeout(e),E=0,v&&v(n.original))}(n)},onContextMenu:function(e){!x&&w&&(e.preventDefault(),e.stopPropagation(),w(n.original))},className:n.isSelected?"selected":"",tabIndex:0,onKeyDown:function(e){return function(n,e){var t,o,r;n.stopPropagation();var i=null===(t=R.current)||void 0===t?void 0:t.children.namedItem(e.id);switch(n.key){case"Enter":x||(n.shiftKey?null===v||void 0===v||v(e.original):n.altKey?null===w||void 0===w||w(e.original):null===y||void 0===y||y(e.original));break;case" ":n.shiftKey?b([e.id],!e.isExpanded):(j||f(!1),g(e.id));break;case"ArrowUp":null===(o=null===i||void 0===i?void 0:i.previousElementSibling)||void 0===o||o.focus();break;case"ArrowDown":null===(r=null===i||void 0===i?void 0:i.nextElementSibling)||void 0===r||r.focus()}}(e,n)}},{children:n.cells.map((function(e,t){return(0,a.jsx)("td",q({},e.getCellProps(),{style:q(q({},e.getCellProps().style),{minWidth:e.column.minWidth,maxWidth:e.column.maxWidth})},{children:P&&(j&&1===t||!j&&0===t)?n.canExpand||k?(0,a.jsxs)(d.rj,q({gridTemplate:"auto / max-content auto",style:{paddingLeft:"calc(".concat(n.depth," * ").concat(d.rS.spacing.xl,")")}},{children:[(0,a.jsx)("span",q({style:{cursor:"pointer"},onClick:function(e){e.stopPropagation(),b([n.id],!n.isExpanded)}},{children:(0,a.jsx)(u.JO,{icon:n.isExpanded?m.eW2:m.I4f})})),(0,a.jsx)("span",q({style:{paddingTop:d.rS.spacing.xs}},{children:e.render("Cell")}))]})):(0,a.jsx)("div",q({style:{paddingLeft:"calc(".concat(n.depth+2," * ").concat(d.rS.spacing.xl,")")}},{children:e.render("Cell")})):(0,a.jsx)("div",q({style:{textAlign:t===(j?1:0)?void 0:e.column.align}},{children:e.render("Cell")}))}))}))})),k&&!n.canExpand&&n.isExpanded&&(0,a.jsx)("tr",q({className:"subComponent",tabIndex:0},{children:(0,a.jsx)("td",q({colSpan:h.length},{children:k(n.original)}))}),"subComponent")]},n.id||(0,c.Vj)())}))}))},Q=function(){return Q=Object.assign||function(n){for(var e,t=1,o=arguments.length;t<o;t++)for(var r in e=arguments[t])Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},Q.apply(this,arguments)},$=function(n){var e=n.tableInstance,t=n.tableProps,o=t.columns,r=t.enableMultipleRowSelect,l=e.footerGroups;return function(n){var e=!0;return n.forEach((function(n){void 0!==n.Footer&&(e=!1)})),e}(o)?null:(0,a.jsx)("tfoot",{children:l.map((function(n){return(0,i.createElement)("tr",Q({},n.getFooterGroupProps(),{key:(0,c.Vj)()}),n.headers.map((function(n,e){return(0,i.createElement)("td",Q({},n.getFooterProps(),{key:(0,c.Vj)()}),(0,a.jsx)("div",Q({style:{textAlign:e===(r?1:0)?void 0:n.align,padding:d.rS.spacing.md}},{children:n.render("Footer")})))})))}))},(0,c.Vj)())},nn=function(n,e){return Object.defineProperty?Object.defineProperty(n,"raw",{value:e}):n.raw=e,n},en=function(){return en=Object.assign||function(n){for(var e,t=1,o=arguments.length;t<o;t++)for(var r in e=arguments[t])Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},en.apply(this,arguments)},tn=function(n,e,t){var o=e*n+n;return"".concat(e*n+1," - ").concat(o>t?t:o)},on=function(n){var e=n.tableInstance,t=n.tableProps,o=e.canPreviousPage,r=e.canNextPage,l=e.pageOptions,s=e.pageCount,p=e.gotoPage,f=e.nextPage,g=e.previousPage,h=e.rows,m=e.state,x=m.pageIndex,v=m.pageSize,y=t.isLoading,w=(0,i.useRef)(null),S=(0,c.LU)(w).width>550,j=d.zo.div(F||(F=nn(["\n    display: ",";\n    background-color: ",";\n    grid-template-columns: auto max-content;\n    justify-content: space-between;\n\n    .InputField.inputContainer {\n      width: 140px;\n    }\n  "],["\n    display: ",";\n    background-color: ",";\n    grid-template-columns: auto max-content;\n    justify-content: space-between;\n\n    .InputField.inputContainer {\n      width: 140px;\n    }\n  "])),S?"grid":"block",d.rS.color.background.default);return(0,a.jsxs)(j,en({className:"pagination",ref:w},{children:[S&&(0,a.jsx)(d.xu,en({style:{paddingTop:d.rS.spacing.sm}},{children:y?(0,a.jsx)(u.xv,{value:"Loading...",color:"disabled"}):h.length>0?(0,a.jsx)(u.xv,{value:"Showing ".concat(tn(v,x,h.length)," of ").concat(h.length," entries"),color:"secondary"}):(0,a.jsx)(u.xv,{value:"There are 0 entries",color:"disabled"})})),(0,a.jsxs)(d.xu,en({justifyContent:S?"flex-end":"space-around"},{children:[(0,a.jsxs)(d.xu,en({justifyContent:"flex-start",width:"auto"},{children:[(0,a.jsx)(u.zx,{icon:b.UXu,onClick:function(){return p(0)},disabled:!o,spacing:"sm",outline:!0}),(0,a.jsx)(u.zx,{icon:b.EyR,onClick:function(){return g()},disabled:!o,spacing:"sm",outline:!0})]})),(0,a.jsx)(z.nv,{type:"number",min:1,disabled:!r&&!o,spacing:"sm",value:x+1,max:l.length,prefixText:"Page",suffixText:"of "+l.length.toString(),defaultValue:1,onChange:function(n){var e=n?Number(n)-1:0;p(e)}}),(0,a.jsxs)(d.xu,en({justifyContent:"flex-end",width:"auto"},{children:[(0,a.jsx)(u.zx,{icon:b.yOZ,onClick:function(){return f()},disabled:!r,spacing:"sm",outline:!0}),(0,a.jsx)(u.zx,{icon:b.cLY,onClick:function(){return p(s-1)},disabled:!r,spacing:"sm",outline:!0})]}))]}))]}))};t(24205);function rn(n){var e=n.column,t=e.filterValue,o=e.setFilter;return(0,a.jsx)(z.nv,{autoFocus:t,defaultValue:t||"",onChange:function(n){return o(n.target.value||void 0)},spacing:"sm",placeholder:"Filter...",textAlign:e.align})}var ln=function(){return ln=Object.assign||function(n){for(var e,t=1,o=arguments.length;t<o;t++)for(var r in e=arguments[t])Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},ln.apply(this,arguments)},an=function(n,e){var t="function"===typeof Symbol&&n[Symbol.iterator];if(!t)return n;var o,r,i=t.call(n),l=[];try{for(;(void 0===e||e-- >0)&&!(o=i.next()).done;)l.push(o.value)}catch(a){r={error:a}}finally{try{o&&!o.done&&(t=i.return)&&t.call(i)}finally{if(r)throw r.error}}return l},sn=function(n,e,t){if(t||2===arguments.length)for(var o,r=0,i=e.length;r<i;r++)!o&&r in e||(o||(o=Array.prototype.slice.call(e,0,r)),o[r]=e[r]);return n.concat(o||Array.prototype.slice.call(e))},cn=function(n){var e=n.columns,t=n.data,o=n.enableMultipleRowSelect,r=void 0!==o&&o,p=n.defaultRowsOnPage,g=void 0===p?100:p,b=n.enablePagination,h=void 0!==b&&b,m=n.tableHeading,x=void 0===m?"":m,v=n.borderless,y=void 0!==v&&v,w=n.hideHeader,S=void 0!==w&&w,j=n.autoResetFilters,k=void 0!==j&&j,R=n.autoResetExpanded,O=void 0!==R&&R,P=n.autoResetSelectedRows,E=void 0!==P&&P,A=n.disableSubRowSelect,F=void 0!==A&&A,I=n.isLoading,N=void 0!==I&&I,H=n.columnVisibilitySelector,z=n.handleTableInstance,D=i.useMemo((function(){return N?Array(30).fill({}):t}),[N,t]),V=i.useMemo((function(){return N?e.map((function(n){return ln(ln({},n),{Cell:(0,a.jsx)(u.Od,{height:"20px"})})})):e}),[N,e]),M=i.useMemo((function(){return{Filter:rn}}),[]),L=i.useMemo((function(){var n=(null===H||void 0===H?void 0:H.defaultHiddenColumnsIds)||[];return sn(sn([],an(n),!1),an(e.filter((function(n){return!0===n.hidden})).map((function(n){return n.id||""}))),!1)}),[e,H]),B=function n(e,t,o){var r={};return o&&(r=ln({},o)),t.subRows&&(r[e]=t.defaultExpanded,t.subRows.forEach((function(t,o){r=n(e+"."+o.toString(),t,r)}))),r},W=i.useMemo((function(){return t.reduce((function(n,e,t){var o=ln({},B(t.toString(),e));return ln(ln({},n),o)}),{})}),[t]),G=(0,s.useTable)({columns:V,data:D,defaultColumn:M,autoResetFilters:k,autoResetExpanded:O,autoResetSelectedRows:E,selectMultipleRows:r,selectSubRows:!F,initialState:{pageIndex:0,pageSize:g,hiddenColumns:L,expanded:W},getSubRows:function(n){return n.subRows}},s.useFilters,s.useSortBy,s.useExpanded,s.usePagination,s.useRowSelect,T,s.useColumnOrder,(function(e){return C(e,n)})),U=G.setColumnOrder;i.useEffect((function(){return null===z||void 0===z?void 0:z(G)}),[G.state,z]),i.useEffect((function(){G.toggleHideColumn("selection",!r)}),[r]),i.useEffect((function(){(null===H||void 0===H?void 0:H.defaultVisibleColumnsOrder)&&0!==(null===H||void 0===H?void 0:H.defaultVisibleColumnsOrder.length)&&U(null===H||void 0===H?void 0:H.defaultVisibleColumnsOrder)}),[null===H||void 0===H?void 0:H.defaultVisibleColumnsOrder]);var J=_({tableProps:n,tableInstance:G}),K=J.actions,X=J.enableFilter,q=an(i.useState((0,c.Vj)()),1)[0],Q=(0,a.jsx)(f,ln({style:ln({},n.customStyle),id:q,className:"Table",handleRowClick:n.handleRowClick,handleRowDblClick:n.handleRowDblClick},{children:(0,a.jsxs)("table",ln({},G.getTableProps(),{children:[(0,a.jsx)(Z,{tableInstance:G,tableProps:n,enableFilter:X}),(0,a.jsx)(Y,{tableInstance:G,tableProps:n}),(0,a.jsx)($,{tableInstance:G,tableProps:n})]}))}));return y?Q:(0,a.jsx)(l.Cl,ln({headerTitle:x||"",headerHidden:S,headerActions:(0,a.jsx)(d.xu,ln({style:{paddingTop:d.rS.spacing.xs}},{children:K})),footerContent:h&&(0,a.jsx)(on,{tableInstance:G,tableProps:n}),overflow:N?"hidden":"auto"},{children:Q}))},dn=function(){var n=i.useState(!1),e=(0,r.Z)(n,2),t=e[0],o=e[1];(0,c.KS)((function(){return o(!0)}),1e3);var l=(0,i.useState)(new Date(Date.now()).toLocaleString()),s=(0,r.Z)(l,2),d=s[0],p=s[1],f=i.useMemo((function(){return t?[{name:"Siddhant",lastName:"Gupta",age:25,category:"Developer",country:"India",defaultExpanded:!0,address1:"First address",address2:"Second address",column1:"Column 1",column2:"Column 2",column3:"Column 3",column4:"Column 4",column5:"Column 5",currentTime:d,type:"mainRow",subRows:[{type:"subRow",name:"Shobhit",lastName:"Gupta",age:28,category:"Developer",country:"New Delhi",address1:"Test address 1",address2:"Test address 2",column1:"Sub row 1",column2:"Sub row 2",column3:"Sub row 3",column4:"Sub row 4",column5:"Sub row 5"}]},{name:"Scarlett",lastName:"Johansson",age:36,category:"Actress",country:"USA",defaultExpanded:!0,address1:"United States",address2:"Second address",column1:"Column 1",column2:"Column 2",column3:"Column 3",column4:"Column 4",column5:"Column 5",currentTime:d,type:"mainRow",subRows:[{name:"Chris",lastName:"Evans",age:40,defaultExpanded:!0,category:"Actor",country:"United States",address1:"Test address 1",address2:"NA",column1:"Sub row 1",column2:"Sub row 2",column3:"Sub row 3",column4:"Sub row 4",column5:"Sub row 5",type:"subRow",subRows:[{name:"Linus",lastName:"Torvalds",age:51,category:"Sr Developer",country:"Finland",address1:"Test address 1",address2:"Test address 2",column1:"Sub row 1",column2:"Sub row 2",column3:"Sub row 3",column4:"Sub row 4",column5:"Sub row 5",type:"subSubRow"}]}]}]:[]}),[t,d]),g=i.useMemo((function(){return[{accessor:"name",Header:"Name",disableFilter:!1},{accessor:"lastName",Header:"Last Name",disableFilter:!1},{accessor:"category",Header:"Category",disableFilter:!0,Cell:function(n){var e=n.value;return(0,a.jsx)(u.Vp,{children:e})}},{accessor:"age",Header:"Age",disableFilter:!0,align:"right"},{accessor:"country",Header:"Country",disableFilter:!0},{accessor:"address1",Header:"Address 1",disableFilter:!1},{accessor:"address2",Header:"Address 2",disableFilter:!0,align:"left"},{accessor:"column1",Header:"Column 1",disableFilter:!0,align:"left"},{accessor:"column2",Header:"Column 2",disableFilter:!0,align:"left"},{accessor:"column3",Header:"Column 3",disableFilter:!0,align:"left"},{accessor:"column4",Header:"Column 4",disableFilter:!0,align:"left"},{accessor:"column5",Header:"Column 5",disableFilter:!0,align:"left"},{accessor:"currentTime",Header:"Time",disableFilter:!0,align:"left"}]}),[]);(0,i.useEffect)((function(){var n=setInterval((function(){console.log("refreshing table "),p(new Date(Date.now()).toLocaleString())}),1e3);return function(){return clearInterval(n)}}),[]);var h=(0,i.useMemo)((function(){return{handleChange:function(n){return console.log(n)},handleVisibleColumns:function(n){return console.log(n)},defaultHiddenColumnsIds:["lastName"],defaultVisibleColumnsOrder:["column1","column2","column3","column4","column5","name","age","category","country","address1","address2"]}}),[]);return(0,a.jsx)(cn,{tableHeading:"Table",data:f,columns:g,handleRowClick:function(n){return console.log(n)},handleRowDblClick:function(n){return alert(n)},singleRowActions:function(n){return[{id:"log",icon:b.Jw3,tooltip:"Log",onClick:function(){return console.log("hello",n)}}]},enableSorting:!0,enableFiltering:!0,enablePagination:!0,enableMultipleRowSelect:!0,columnVisibilitySelector:h,exportTable:!0,isLoading:!t},t?1:0)},un=function(){return(0,a.jsx)(l.B4,{heading:"Table",children:(0,a.jsx)(dn,{})})}}}]);
//# sourceMappingURL=4539.e8c2da3c.chunk.js.map