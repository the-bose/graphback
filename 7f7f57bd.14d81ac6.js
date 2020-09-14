/*! For license information please see 7f7f57bd.14d81ac6.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[496],{1083:function(e,r,t){"use strict";t.d(r,"a",(function(){return f})),t.d(r,"b",(function(){return y}));var n=t(0),o=t.n(n);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),s=function(e){var r=o.a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},f=function(e){var r=s(e.components);return o.a.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},d=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),f=s(t),d=n,y=f["".concat(c,".").concat(d)]||f[d]||p[d]||a;return t?o.a.createElement(y,i(i({ref:r},l),{},{components:t})):o.a.createElement(y,i({ref:r},l))}));function y(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,c=new Array(a);c[0]=d;var i={};for(var u in r)hasOwnProperty.call(r,u)&&(i[u]=r[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var l=2;l<a;l++)c[l]=t[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1084:function(e,r,t){"use strict";e.exports=t(1085)},1085:function(e,r,t){"use strict";var n=t(1086),o="function"==typeof Symbol&&Symbol.for,a=o?Symbol.for("react.element"):60103,c=o?Symbol.for("react.portal"):60106,i=o?Symbol.for("react.fragment"):60107,u=o?Symbol.for("react.strict_mode"):60108,l=o?Symbol.for("react.profiler"):60114,s=o?Symbol.for("react.provider"):60109,f=o?Symbol.for("react.context"):60110,p=o?Symbol.for("react.forward_ref"):60112,d=o?Symbol.for("react.suspense"):60113,y=o?Symbol.for("react.memo"):60115,b=o?Symbol.for("react.lazy"):60116,v="function"==typeof Symbol&&Symbol.iterator;function m(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)r+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function O(e,r,t){this.props=e,this.context=r,this.refs=g,this.updater=t||h}function j(){}function _(e,r,t){this.props=e,this.context=r,this.refs=g,this.updater=t||h}O.prototype.isReactComponent={},O.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(m(85));this.updater.enqueueSetState(this,e,r,"setState")},O.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},j.prototype=O.prototype;var w=_.prototype=new j;w.constructor=_,n(w,O.prototype),w.isPureReactComponent=!0;var S={current:null},k=Object.prototype.hasOwnProperty,P={key:!0,ref:!0,__self:!0,__source:!0};function E(e,r,t){var n,o={},c=null,i=null;if(null!=r)for(n in void 0!==r.ref&&(i=r.ref),void 0!==r.key&&(c=""+r.key),r)k.call(r,n)&&!P.hasOwnProperty(n)&&(o[n]=r[n]);var u=arguments.length-2;if(1===u)o.children=t;else if(1<u){for(var l=Array(u),s=0;s<u;s++)l[s]=arguments[s+2];o.children=l}if(e&&e.defaultProps)for(n in u=e.defaultProps)void 0===o[n]&&(o[n]=u[n]);return{$$typeof:a,type:e,key:c,ref:i,props:o,_owner:S.current}}function x(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var C=/\/+/g,R=[];function $(e,r,t,n){if(R.length){var o=R.pop();return o.result=e,o.keyPrefix=r,o.func=t,o.context=n,o.count=0,o}return{result:e,keyPrefix:r,func:t,context:n,count:0}}function D(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>R.length&&R.push(e)}function T(e,r,t,n){var o=typeof e;"undefined"!==o&&"boolean"!==o||(e=null);var i=!1;if(null===e)i=!0;else switch(o){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case a:case c:i=!0}}if(i)return t(n,e,""===r?"."+N(e,0):r),1;if(i=0,r=""===r?".":r+":",Array.isArray(e))for(var u=0;u<e.length;u++){var l=r+N(o=e[u],u);i+=T(o,l,t,n)}else if(null===e||"object"!=typeof e?l=null:l="function"==typeof(l=v&&e[v]||e["@@iterator"])?l:null,"function"==typeof l)for(e=l.call(e),u=0;!(o=e.next()).done;)i+=T(o=o.value,l=r+N(o,u++),t,n);else if("object"===o)throw t=""+e,Error(m(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t,""));return i}function I(e,r,t){return null==e?0:T(e,"",r,t)}function N(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return r[e]}))}(e.key):r.toString(36)}function A(e,r){e.func.call(e.context,r,e.count++)}function M(e,r,t){var n=e.result,o=e.keyPrefix;e=e.func.call(e.context,r,e.count++),Array.isArray(e)?U(e,n,t,(function(e){return e})):null!=e&&(x(e)&&(e=function(e,r){return{$$typeof:a,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||r&&r.key===e.key?"":(""+e.key).replace(C,"$&/")+"/")+t)),n.push(e))}function U(e,r,t,n,o){var a="";null!=t&&(a=(""+t).replace(C,"$&/")+"/"),I(e,M,r=$(r,a,n,o)),D(r)}var V={current:null};function q(){var e=V.current;if(null===e)throw Error(m(321));return e}var L={ReactCurrentDispatcher:V,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:S,IsSomeRendererActing:{current:!1},assign:n};r.Children={map:function(e,r,t){if(null==e)return e;var n=[];return U(e,n,null,r,t),n},forEach:function(e,r,t){if(null==e)return e;I(e,A,r=$(null,null,r,t)),D(r)},count:function(e){return I(e,(function(){return null}),null)},toArray:function(e){var r=[];return U(e,r,null,(function(e){return e})),r},only:function(e){if(!x(e))throw Error(m(143));return e}},r.Component=O,r.Fragment=i,r.Profiler=l,r.PureComponent=_,r.StrictMode=u,r.Suspense=d,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=L,r.cloneElement=function(e,r,t){if(null==e)throw Error(m(267,e));var o=n({},e.props),c=e.key,i=e.ref,u=e._owner;if(null!=r){if(void 0!==r.ref&&(i=r.ref,u=S.current),void 0!==r.key&&(c=""+r.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in r)k.call(r,s)&&!P.hasOwnProperty(s)&&(o[s]=void 0===r[s]&&void 0!==l?l[s]:r[s])}var s=arguments.length-2;if(1===s)o.children=t;else if(1<s){l=Array(s);for(var f=0;f<s;f++)l[f]=arguments[f+2];o.children=l}return{$$typeof:a,type:e.type,key:c,ref:i,props:o,_owner:u}},r.createContext=function(e,r){return void 0===r&&(r=null),(e={$$typeof:f,_calculateChangedBits:r,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},r.createElement=E,r.createFactory=function(e){var r=E.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:p,render:e}},r.isValidElement=x,r.lazy=function(e){return{$$typeof:b,_ctor:e,_status:-1,_result:null}},r.memo=function(e,r){return{$$typeof:y,type:e,compare:void 0===r?null:r}},r.useCallback=function(e,r){return q().useCallback(e,r)},r.useContext=function(e,r){return q().useContext(e,r)},r.useDebugValue=function(){},r.useEffect=function(e,r){return q().useEffect(e,r)},r.useImperativeHandle=function(e,r,t){return q().useImperativeHandle(e,r,t)},r.useLayoutEffect=function(e,r){return q().useLayoutEffect(e,r)},r.useMemo=function(e,r){return q().useMemo(e,r)},r.useReducer=function(e,r,t){return q().useReducer(e,r,t)},r.useRef=function(e){return q().useRef(e)},r.useState=function(e){return q().useState(e)},r.version="16.13.1"},1086:function(e,r,t){"use strict";var n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function c(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,r){for(var t,i,u=c(e),l=1;l<arguments.length;l++){for(var s in t=Object(arguments[l]))o.call(t,s)&&(u[s]=t[s]);if(n){i=n(t);for(var f=0;f<i.length;f++)a.call(t,i[f])&&(u[i[f]]=t[i[f]])}}return u}},551:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return c})),t.d(r,"metadata",(function(){return i})),t.d(r,"rightToc",(function(){return u})),t.d(r,"default",(function(){return s}));var n=t(2),o=t(6),a=(t(1084),t(1083)),c={id:"_providers_datasyncconflictprovider_",title:"providers/DataSyncConflictProvider",sidebar_label:"providers/DataSyncConflictProvider"},i={unversionedId:"api/graphback-datasync/modules/_providers_datasyncconflictprovider_",id:"api/graphback-datasync/modules/_providers_datasyncconflictprovider_",isDocsHomePage:!1,title:"providers/DataSyncConflictProvider",description:"Index",source:"@site/../docs/api/graphback-datasync/modules/_providers_datasyncconflictprovider_.md",slug:"/api/graphback-datasync/modules/_providers_datasyncconflictprovider_",permalink:"/docs/next/api/graphback-datasync/modules/_providers_datasyncconflictprovider_",editUrl:"https://github.com/aerogear/graphback/edit/master/website/../docs/api/graphback-datasync/modules/_providers_datasyncconflictprovider_.md",version:"current",sidebar_label:"providers/DataSyncConflictProvider"},u=[{value:"Index",id:"index",children:[{value:"Classes",id:"classes",children:[]},{value:"Variables",id:"variables",children:[]}]},{value:"Variables",id:"variables-1",children:[{value:"<code>Const</code> MAX_RETRIES",id:"const-max_retries",children:[]}]}],l={rightToc:u};function s(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,t,{components:r,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"index"},"Index"),Object(a.b)("h3",{id:"classes"},"Classes"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-datasync/classes/_providers_datasyncconflictprovider_.datasyncconflictmongodbdataprovider"}),"DataSyncConflictMongoDBDataProvider"))),Object(a.b)("h3",{id:"variables"},"Variables"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-datasync/modules/_providers_datasyncconflictprovider_#const-max_retries"}),"MAX_RETRIES"))),Object(a.b)("h2",{id:"variables-1"},"Variables"),Object(a.b)("h3",{id:"const-max_retries"},Object(a.b)("inlineCode",{parentName:"h3"},"Const")," MAX_RETRIES"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("strong",{parentName:"p"},"MAX_RETRIES"),": ",Object(a.b)("em",{parentName:"p"},"3")," = 3"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/3e08a22/packages/graphback-datasync/src/providers/DataSyncConflictProvider.ts#L6"}),"packages/graphback-datasync/src/providers/DataSyncConflictProvider.ts:6"))))}s.isMDXComponent=!0}}]);