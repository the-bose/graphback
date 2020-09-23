/*! For license information please see 16a4e4c0.df80f8a2.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{1085:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),f=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=f(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,u=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),s=f(n),m=r,b=s["".concat(c,".").concat(m)]||s[m]||p[m]||u;return n?o.a.createElement(b,a(a({ref:t},l),{},{components:n})):o.a.createElement(b,a({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var u=n.length,c=new Array(u);c[0]=m;var a={};for(var i in t)hasOwnProperty.call(t,i)&&(a[i]=t[i]);a.originalType=e,a.mdxType="string"==typeof e?e:r,c[1]=a;for(var l=2;l<u;l++)c[l]=n[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1086:function(e,t,n){"use strict";e.exports=n(1087)},1087:function(e,t,n){"use strict";var r=n(1088),o="function"==typeof Symbol&&Symbol.for,u=o?Symbol.for("react.element"):60103,c=o?Symbol.for("react.portal"):60106,a=o?Symbol.for("react.fragment"):60107,i=o?Symbol.for("react.strict_mode"):60108,l=o?Symbol.for("react.profiler"):60114,f=o?Symbol.for("react.provider"):60109,s=o?Symbol.for("react.context"):60110,p=o?Symbol.for("react.forward_ref"):60112,m=o?Symbol.for("react.suspense"):60113,b=o?Symbol.for("react.memo"):60115,d=o?Symbol.for("react.lazy"):60116,y="function"==typeof Symbol&&Symbol.iterator;function h(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var O={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function j(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||O}function v(){}function _(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||O}j.prototype.isReactComponent={},j.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(h(85));this.updater.enqueueSetState(this,e,t,"setState")},j.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=j.prototype;var w=_.prototype=new v;w.constructor=_,r(w,j.prototype),w.isPureReactComponent=!0;var S={current:null},k=Object.prototype.hasOwnProperty,x={key:!0,ref:!0,__self:!0,__source:!0};function P(e,t,n){var r,o={},c=null,a=null;if(null!=t)for(r in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(c=""+t.key),t)k.call(t,r)&&!x.hasOwnProperty(r)&&(o[r]=t[r]);var i=arguments.length-2;if(1===i)o.children=n;else if(1<i){for(var l=Array(i),f=0;f<i;f++)l[f]=arguments[f+2];o.children=l}if(e&&e.defaultProps)for(r in i=e.defaultProps)void 0===o[r]&&(o[r]=i[r]);return{$$typeof:u,type:e,key:c,ref:a,props:o,_owner:S.current}}function C(e){return"object"==typeof e&&null!==e&&e.$$typeof===u}var E=/\/+/g,N=[];function $(e,t,n,r){if(N.length){var o=N.pop();return o.result=e,o.keyPrefix=t,o.func=n,o.context=r,o.count=0,o}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function R(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>N.length&&N.push(e)}function q(e,t,n,r){var o=typeof e;"undefined"!==o&&"boolean"!==o||(e=null);var a=!1;if(null===e)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case u:case c:a=!0}}if(a)return n(r,e,""===t?"."+D(e,0):t),1;if(a=0,t=""===t?".":t+":",Array.isArray(e))for(var i=0;i<e.length;i++){var l=t+D(o=e[i],i);a+=q(o,l,n,r)}else if(null===e||"object"!=typeof e?l=null:l="function"==typeof(l=y&&e[y]||e["@@iterator"])?l:null,"function"==typeof l)for(e=l.call(e),i=0;!(o=e.next()).done;)a+=q(o=o.value,l=t+D(o,i++),n,r);else if("object"===o)throw n=""+e,Error(h(31,"[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n,""));return a}function T(e,t,n){return null==e?0:q(e,"",t,n)}function D(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function I(e,t){e.func.call(e.context,t,e.count++)}function A(e,t,n){var r=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?F(e,r,n,(function(e){return e})):null!=e&&(C(e)&&(e=function(e,t){return{$$typeof:u,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(E,"$&/")+"/")+n)),r.push(e))}function F(e,t,n,r,o){var u="";null!=n&&(u=(""+n).replace(E,"$&/")+"/"),T(e,A,t=$(t,u,r,o)),R(t)}var M={current:null};function U(){var e=M.current;if(null===e)throw Error(h(321));return e}var L={ReactCurrentDispatcher:M,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:S,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:function(e,t,n){if(null==e)return e;var r=[];return F(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;T(e,I,t=$(null,null,t,n)),R(t)},count:function(e){return T(e,(function(){return null}),null)},toArray:function(e){var t=[];return F(e,t,null,(function(e){return e})),t},only:function(e){if(!C(e))throw Error(h(143));return e}},t.Component=j,t.Fragment=a,t.Profiler=l,t.PureComponent=_,t.StrictMode=i,t.Suspense=m,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=L,t.cloneElement=function(e,t,n){if(null==e)throw Error(h(267,e));var o=r({},e.props),c=e.key,a=e.ref,i=e._owner;if(null!=t){if(void 0!==t.ref&&(a=t.ref,i=S.current),void 0!==t.key&&(c=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(f in t)k.call(t,f)&&!x.hasOwnProperty(f)&&(o[f]=void 0===t[f]&&void 0!==l?l[f]:t[f])}var f=arguments.length-2;if(1===f)o.children=n;else if(1<f){l=Array(f);for(var s=0;s<f;s++)l[s]=arguments[s+2];o.children=l}return{$$typeof:u,type:e.type,key:c,ref:a,props:o,_owner:i}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:s,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:f,_context:e},e.Consumer=e},t.createElement=P,t.createFactory=function(e){var t=P.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:p,render:e}},t.isValidElement=C,t.lazy=function(e){return{$$typeof:d,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:b,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return U().useCallback(e,t)},t.useContext=function(e,t){return U().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return U().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return U().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return U().useLayoutEffect(e,t)},t.useMemo=function(e,t){return U().useMemo(e,t)},t.useReducer=function(e,t,n){return U().useReducer(e,t,n)},t.useRef=function(e){return U().useRef(e)},t.useState=function(e){return U().useState(e)},t.version="16.13.1"},1088:function(e,t,n){"use strict";var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;function c(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,t){for(var n,a,i=c(e),l=1;l<arguments.length;l++){for(var f in n=Object(arguments[l]))o.call(n,f)&&(i[f]=n[f]);if(r){a=r(n);for(var s=0;s<a.length;s++)u.call(n,a[s])&&(i[a[s]]=n[a[s]])}}return i}},145:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return a})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return f}));var r=n(2),o=n(6),u=(n(1086),n(1085)),c={id:"_util_comments_",title:"util/comments",sidebar_label:"util/comments"},a={unversionedId:"api/graphql-migrations/modules/_util_comments_",id:"api/graphql-migrations/modules/_util_comments_",isDocsHomePage:!1,title:"util/comments",description:"Index",source:"@site/../docs/api/graphql-migrations/modules/_util_comments_.md",slug:"/api/graphql-migrations/modules/_util_comments_",permalink:"/docs/next/api/graphql-migrations/modules/_util_comments_",editUrl:"https://github.com/aerogear/graphback/edit/master/website/../docs/api/graphql-migrations/modules/_util_comments_.md",version:"current",sidebar_label:"util/comments"},i=[{value:"Index",id:"index",children:[{value:"Functions",id:"functions",children:[]}]},{value:"Functions",id:"functions-1",children:[{value:"escapeComment",id:"escapecomment",children:[]}]}],l={rightToc:i};function f(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(u.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(u.b)("h2",{id:"index"},"Index"),Object(u.b)("h3",{id:"functions"},"Functions"),Object(u.b)("ul",null,Object(u.b)("li",{parentName:"ul"},Object(u.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphql-migrations/modules/_util_comments_#escapecomment"}),"escapeComment"))),Object(u.b)("h2",{id:"functions-1"},"Functions"),Object(u.b)("h3",{id:"escapecomment"},"escapeComment"),Object(u.b)("p",null,"\u25b8 ",Object(u.b)("strong",{parentName:"p"},"escapeComment"),"(",Object(u.b)("inlineCode",{parentName:"p"},"comment"),": string | undefined): ",Object(u.b)("em",{parentName:"p"},"string")),Object(u.b)("p",null,Object(u.b)("em",{parentName:"p"},"Defined in ",Object(u.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/4539ff0/packages/graphql-migrations/src/util/comments.ts#L1"}),"util/comments.ts:1"))),Object(u.b)("p",null,Object(u.b)("strong",{parentName:"p"},"Parameters:")),Object(u.b)("table",null,Object(u.b)("thead",{parentName:"table"},Object(u.b)("tr",{parentName:"thead"},Object(u.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(u.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(u.b)("tbody",{parentName:"table"},Object(u.b)("tr",{parentName:"tbody"},Object(u.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(u.b)("inlineCode",{parentName:"td"},"comment")),Object(u.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string ","|"," undefined")))),Object(u.b)("p",null,Object(u.b)("strong",{parentName:"p"},"Returns:")," ",Object(u.b)("em",{parentName:"p"},"string")))}f.isMDXComponent=!0}}]);