/*! For license information please see c7fdaa05.3621dfad.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[550],{606:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return i})),t.d(r,"metadata",(function(){return c})),t.d(r,"rightToc",(function(){return a})),t.d(r,"default",(function(){return f}));var n=t(2),o=t(6),u=(t(766),t(765)),i={id:"_util_getprimarykey_",title:"util/getPrimaryKey",sidebar_label:"util/getPrimaryKey"},c={unversionedId:"api/graphql-migrations/modules/_util_getprimarykey_",id:"api/graphql-migrations/modules/_util_getprimarykey_",isDocsHomePage:!1,title:"util/getPrimaryKey",source:"@site/../docs/api/graphql-migrations/modules/_util_getprimarykey_.md",permalink:"/docs/next/api/graphql-migrations/modules/_util_getprimarykey_",editUrl:"https://github.com/aerogear/graphback/edit/master/website/../docs/api/graphql-migrations/modules/_util_getprimarykey_.md",version:"next",sidebar_label:"util/getPrimaryKey"},a=[],l={rightToc:a};function f(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(u.b)("wrapper",Object(n.a)({},l,t,{components:r,mdxType:"MDXLayout"}))}f.isMDXComponent=!0},765:function(e,r,t){"use strict";t.d(r,"a",(function(){return p})),t.d(r,"b",(function(){return m}));var n=t(0),o=t.n(n);function u(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){u(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},u=Object.keys(e);for(n=0;n<u.length;n++)t=u[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)t=u[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),f=function(e){var r=o.a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},p=function(e){var r=f(e.components);return o.a.createElement(l.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},y=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,u=e.originalType,i=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),p=f(t),y=n,m=p["".concat(i,".").concat(y)]||p[y]||s[y]||u;return t?o.a.createElement(m,c(c({ref:r},l),{},{components:t})):o.a.createElement(m,c({ref:r},l))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var u=t.length,i=new Array(u);i[0]=y;var c={};for(var a in r)hasOwnProperty.call(r,a)&&(c[a]=r[a]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<u;l++)i[l]=t[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}y.displayName="MDXCreateElement"},766:function(e,r,t){"use strict";e.exports=t(767)},767:function(e,r,t){"use strict";var n=t(768),o="function"==typeof Symbol&&Symbol.for,u=o?Symbol.for("react.element"):60103,i=o?Symbol.for("react.portal"):60106,c=o?Symbol.for("react.fragment"):60107,a=o?Symbol.for("react.strict_mode"):60108,l=o?Symbol.for("react.profiler"):60114,f=o?Symbol.for("react.provider"):60109,p=o?Symbol.for("react.context"):60110,s=o?Symbol.for("react.forward_ref"):60112,y=o?Symbol.for("react.suspense"):60113,m=o?Symbol.for("react.memo"):60115,d=o?Symbol.for("react.lazy"):60116,b="function"==typeof Symbol&&Symbol.iterator;function g(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)r+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var v={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h={};function O(e,r,t){this.props=e,this.context=r,this.refs=h,this.updater=t||v}function _(){}function w(e,r,t){this.props=e,this.context=r,this.refs=h,this.updater=t||v}O.prototype.isReactComponent={},O.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(g(85));this.updater.enqueueSetState(this,e,r,"setState")},O.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},_.prototype=O.prototype;var j=w.prototype=new _;j.constructor=w,n(j,O.prototype),j.isPureReactComponent=!0;var k={current:null},P=Object.prototype.hasOwnProperty,S={key:!0,ref:!0,__self:!0,__source:!0};function E(e,r,t){var n,o={},i=null,c=null;if(null!=r)for(n in void 0!==r.ref&&(c=r.ref),void 0!==r.key&&(i=""+r.key),r)P.call(r,n)&&!S.hasOwnProperty(n)&&(o[n]=r[n]);var a=arguments.length-2;if(1===a)o.children=t;else if(1<a){for(var l=Array(a),f=0;f<a;f++)l[f]=arguments[f+2];o.children=l}if(e&&e.defaultProps)for(n in a=e.defaultProps)void 0===o[n]&&(o[n]=a[n]);return{$$typeof:u,type:e,key:i,ref:c,props:o,_owner:k.current}}function x(e){return"object"==typeof e&&null!==e&&e.$$typeof===u}var C=/\/+/g,$=[];function R(e,r,t,n){if($.length){var o=$.pop();return o.result=e,o.keyPrefix=r,o.func=t,o.context=n,o.count=0,o}return{result:e,keyPrefix:r,func:t,context:n,count:0}}function T(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>$.length&&$.push(e)}function q(e,r,t){return null==e?0:function e(r,t,n,o){var c=typeof r;"undefined"!==c&&"boolean"!==c||(r=null);var a=!1;if(null===r)a=!0;else switch(c){case"string":case"number":a=!0;break;case"object":switch(r.$$typeof){case u:case i:a=!0}}if(a)return n(o,r,""===t?"."+D(r,0):t),1;if(a=0,t=""===t?".":t+":",Array.isArray(r))for(var l=0;l<r.length;l++){var f=t+D(c=r[l],l);a+=e(c,f,n,o)}else if(null===r||"object"!=typeof r?f=null:f="function"==typeof(f=b&&r[b]||r["@@iterator"])?f:null,"function"==typeof f)for(r=f.call(r),l=0;!(c=r.next()).done;)a+=e(c=c.value,f=t+D(c,l++),n,o);else if("object"===c)throw n=""+r,Error(g(31,"[object Object]"===n?"object with keys {"+Object.keys(r).join(", ")+"}":n,""));return a}(e,"",r,t)}function D(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return r[e]}))}(e.key):r.toString(36)}function A(e,r){e.func.call(e.context,r,e.count++)}function I(e,r,t){var n=e.result,o=e.keyPrefix;e=e.func.call(e.context,r,e.count++),Array.isArray(e)?M(e,n,t,(function(e){return e})):null!=e&&(x(e)&&(e=function(e,r){return{$$typeof:u,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||r&&r.key===e.key?"":(""+e.key).replace(C,"$&/")+"/")+t)),n.push(e))}function M(e,r,t,n,o){var u="";null!=t&&(u=(""+t).replace(C,"$&/")+"/"),q(e,I,r=R(r,u,n,o)),T(r)}var N={current:null};function U(){var e=N.current;if(null===e)throw Error(g(321));return e}var F={ReactCurrentDispatcher:N,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:k,IsSomeRendererActing:{current:!1},assign:n};r.Children={map:function(e,r,t){if(null==e)return e;var n=[];return M(e,n,null,r,t),n},forEach:function(e,r,t){if(null==e)return e;q(e,A,r=R(null,null,r,t)),T(r)},count:function(e){return q(e,(function(){return null}),null)},toArray:function(e){var r=[];return M(e,r,null,(function(e){return e})),r},only:function(e){if(!x(e))throw Error(g(143));return e}},r.Component=O,r.Fragment=c,r.Profiler=l,r.PureComponent=w,r.StrictMode=a,r.Suspense=y,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=F,r.cloneElement=function(e,r,t){if(null==e)throw Error(g(267,e));var o=n({},e.props),i=e.key,c=e.ref,a=e._owner;if(null!=r){if(void 0!==r.ref&&(c=r.ref,a=k.current),void 0!==r.key&&(i=""+r.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(f in r)P.call(r,f)&&!S.hasOwnProperty(f)&&(o[f]=void 0===r[f]&&void 0!==l?l[f]:r[f])}var f=arguments.length-2;if(1===f)o.children=t;else if(1<f){l=Array(f);for(var p=0;p<f;p++)l[p]=arguments[p+2];o.children=l}return{$$typeof:u,type:e.type,key:i,ref:c,props:o,_owner:a}},r.createContext=function(e,r){return void 0===r&&(r=null),(e={$$typeof:p,_calculateChangedBits:r,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:f,_context:e},e.Consumer=e},r.createElement=E,r.createFactory=function(e){var r=E.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:s,render:e}},r.isValidElement=x,r.lazy=function(e){return{$$typeof:d,_ctor:e,_status:-1,_result:null}},r.memo=function(e,r){return{$$typeof:m,type:e,compare:void 0===r?null:r}},r.useCallback=function(e,r){return U().useCallback(e,r)},r.useContext=function(e,r){return U().useContext(e,r)},r.useDebugValue=function(){},r.useEffect=function(e,r){return U().useEffect(e,r)},r.useImperativeHandle=function(e,r,t){return U().useImperativeHandle(e,r,t)},r.useLayoutEffect=function(e,r){return U().useLayoutEffect(e,r)},r.useMemo=function(e,r){return U().useMemo(e,r)},r.useReducer=function(e,r,t){return U().useReducer(e,r,t)},r.useRef=function(e){return U().useRef(e)},r.useState=function(e){return U().useState(e)},r.version="16.13.1"},768:function(e,r,t){"use strict";var n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;function i(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,r){for(var t,c,a=i(e),l=1;l<arguments.length;l++){for(var f in t=Object(arguments[l]))o.call(t,f)&&(a[f]=t[f]);if(n){c=n(t);for(var p=0;p<c.length;p++)u.call(t,c[p])&&(a[c[p]]=t[c[p]])}}return a}}}]);