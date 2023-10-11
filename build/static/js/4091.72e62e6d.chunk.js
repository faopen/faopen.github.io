"use strict";(self.webpackChunkplayground=self.webpackChunkplayground||[]).push([[4091],{69920:function(e,n){var t,r,a,i,o,u,c,l=this&&this.__extends||function(){var e=function(n,t){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])},e(n,t)};return function(n,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=n}e(n,t),n.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}}();function s(){var e=a,n=[];if(v("{"),!b("}")){do{n.push(f())}while(b(","));v("}")}return{kind:"Object",start:e,end:o,members:n}}function f(){var e=a,n="String"===c?p():null;v("String"),v(":");var t=d();return{kind:"Member",start:e,end:o,key:n,value:t}}function d(){switch(c){case"[":return function(){var e=a,n=[];if(v("["),!b("]")){do{n.push(d())}while(b(","));v("]")}return{kind:"Array",start:e,end:o,values:n}}();case"{":return s();case"String":case"Number":case"Boolean":case"Null":var e=p();return k(),e}v("Value")}function p(){return{kind:c,start:a,end:i,value:JSON.parse(t.slice(a,i))}}function v(e){if(c!==e){var n;if("EOF"===c)n="[end of file]";else if(i-a>1)n="`"+t.slice(a,i)+"`";else{var r=t.slice(a).match(/^.+?\b/);n="`"+(r?r[0]:t[a])+"`"}throw y("Expected ".concat(e," but found ").concat(n,"."))}k()}Object.defineProperty(n,"__esModule",{value:!0}),n.JSONSyntaxError=void 0,n.default=function(e){t=e,r=e.length,a=i=o=-1,m(),k();var n=s();return v("EOF"),n};var h=function(e){function n(n,t){var r=e.call(this,n)||this;return r.position=t,r}return l(n,e),n}(Error);function y(e){return new h(e,{start:a,end:i})}function b(e){if(c===e)return k(),!0}function m(){return i<r&&(i++,u=i===r?0:t.charCodeAt(i)),u}function k(){for(o=i;9===u||10===u||13===u||32===u;)m();if(0!==u){switch(a=i,u){case 34:return c="String",function(){m();for(;34!==u&&u>31;)if(92===u)switch(u=m()){case 34:case 47:case 92:case 98:case 102:case 110:case 114:case 116:m();break;case 117:m(),_(),_(),_(),_();break;default:throw y("Bad character escape sequence.")}else{if(i===r)throw y("Unterminated string.");m()}if(34===u)return void m();throw y("Unterminated string.")}();case 45:case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:return c="Number",function(){45===u&&m();48===u?m():g();46===u&&(m(),g());69!==u&&101!==u||(43!==(u=m())&&45!==u||m(),g())}();case 102:if("false"!==t.slice(a,a+5))break;return i+=4,m(),void(c="Boolean");case 110:if("null"!==t.slice(a,a+4))break;return i+=3,m(),void(c="Null");case 116:if("true"!==t.slice(a,a+4))break;return i+=3,m(),void(c="Boolean")}c=t[a],m()}else c="EOF"}function _(){if(u>=48&&u<=57||u>=65&&u<=70||u>=97&&u<=102)return m();throw y("Expected hexadecimal digit.")}function g(){if(u<48||u>57)throw y("Expected decimal digit.");do{m()}while(u>=48&&u<=57)}n.JSONSyntaxError=h},94091:function(e,n,t){var r=this&&this.__createBinding||(Object.create?function(e,n,t,r){void 0===r&&(r=t);var a=Object.getOwnPropertyDescriptor(n,t);a&&!("get"in a?!n.__esModule:a.writable||a.configurable)||(a={enumerable:!0,get:function(){return n[t]}}),Object.defineProperty(e,r,a)}:function(e,n,t,r){void 0===r&&(r=t),e[r]=n[t]}),a=this&&this.__setModuleDefault||(Object.create?function(e,n){Object.defineProperty(e,"default",{enumerable:!0,value:n})}:function(e,n){e.default=n}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&r(n,e,t);return a(n,e),n},o=this&&this.__read||function(e,n){var t="function"===typeof Symbol&&e[Symbol.iterator];if(!t)return e;var r,a,i=t.call(e),o=[];try{for(;(void 0===n||n-- >0)&&!(r=i.next()).done;)o.push(r.value)}catch(u){a={error:u}}finally{try{r&&!r.done&&(t=i.return)&&t.call(i)}finally{if(a)throw a.error}}return o},u=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0});var c=u(t(43819)),l=t(69795),s=i(t(69920));function f(e,n){if(!e||!n)return[];if(e instanceof l.GraphQLNonNull)return"Null"===n.kind?[[n,'Type "'.concat(e,'" is non-nullable and cannot be null.')]]:f(e.ofType,n);if("Null"===n.kind)return[];if(e instanceof l.GraphQLList){var t=e.ofType;return"Array"===n.kind?p(n.values||[],(function(e){return f(t,e)})):f(t,n)}if(e instanceof l.GraphQLInputObjectType){if("Object"!==n.kind)return[[n,'Type "'.concat(e,'" must be an Object.')]];var r=Object.create(null),a=p(n.members,(function(n){var t,a=null===(t=null===n||void 0===n?void 0:n.key)||void 0===t?void 0:t.value;r[a]=!0;var i=e.getFields()[a];return i?f(i?i.type:void 0,n.value):[[n.key,'Type "'.concat(e,'" does not have a field "').concat(a,'".')]]}));return Object.keys(e.getFields()).forEach((function(t){r[t]||e.getFields()[t].type instanceof l.GraphQLNonNull&&a.push([n,'Object of type "'.concat(e,'" is missing required field "').concat(t,'".')])})),a}return"Boolean"===e.name&&"Boolean"!==n.kind||"String"===e.name&&"String"!==n.kind||"ID"===e.name&&"Number"!==n.kind&&"String"!==n.kind||"Float"===e.name&&"Number"!==n.kind||"Int"===e.name&&("Number"!==n.kind||(0|n.value)!==n.value)||(e instanceof l.GraphQLEnumType||e instanceof l.GraphQLScalarType)&&("String"!==n.kind&&"Number"!==n.kind&&"Boolean"!==n.kind&&"Null"!==n.kind||(null===(i=e.parseValue(n.value))||void 0===i||i!==i))?[[n,'Expected value of type "'.concat(e,'".')]]:[];var i}function d(e,n,t){return{message:t,severity:"error",type:"validation",from:e.posFromIndex(n.start),to:e.posFromIndex(n.end)}}function p(e,n){return Array.prototype.concat.apply([],e.map(n))}c.default.registerHelper("lint","graphql-variables",(function(e,n,t){if(!e)return[];var r;try{r=(0,s.default)(e)}catch(i){if(i instanceof s.JSONSyntaxError)return[d(t,i.position,i.message)];throw i}var a=n.variableToType;return a?function(e,n,t){var r=[];return t.members.forEach((function(t){var a;if(t){var i=null===(a=t.key)||void 0===a?void 0:a.value,u=n[i];u?f(u,t.value).forEach((function(n){var t=o(n,2),a=t[0],i=t[1];r.push(d(e,a,i))})):r.push(d(e,t.key,'Variable "$'.concat(i,'" does not appear in any GraphQL query.')))}})),r}(t,a,r):[]}))}}]);
//# sourceMappingURL=4091.72e62e6d.chunk.js.map