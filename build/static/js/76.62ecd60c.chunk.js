(this.webpackJsonpplayground=this.webpackJsonpplayground||[]).push([[76],{1031:function(e,t,n){"use strict";var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var u=i(n(440)),r=i(n(934));u.default.defineMode("graphql",r.default)},934:function(e,t,n){"use strict";var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var u=n(541),r=i(n(935));t.default=function(e){var t=u.onlineParser({eatWhitespace:function(e){return e.eatWhile(u.isIgnored)},lexRules:u.LexRules,parseRules:u.ParseRules,editorConfig:{tabSize:e.tabSize}});return{config:e,startState:t.startState,token:t.token,indent:r.default,electricInput:/^\s*[})\]]/,fold:"brace",lineComment:"#",closeBrackets:{pairs:'()[]{}""',explode:"()[]{}"}}}},935:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n,i,u=e.levels;return((u&&0!==u.length?u[u.length-1]-((null===(n=this.electricInput)||void 0===n?void 0:n.test(t))?1:0):e.indentLevel)||0)*((null===(i=this.config)||void 0===i?void 0:i.indentUnit)||0)}}}]);
//# sourceMappingURL=76.62ecd60c.chunk.js.map