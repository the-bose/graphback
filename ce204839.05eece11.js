/*! For license information please see ce204839.05eece11.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[832],{1083:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),i=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},b=function(e){var t=i(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),b=i(r),f=n,d=b["".concat(o,".").concat(f)]||b[f]||s[f]||c;return r?a.a.createElement(d,l(l({ref:t},u),{},{components:r})):a.a.createElement(d,l({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,o=new Array(c);o[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var u=2;u<c;u++)o[u]=r[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},1084:function(e,t,r){"use strict";e.exports=r(1085)},1085:function(e,t,r){"use strict";var n=r(1086),a="function"==typeof Symbol&&Symbol.for,c=a?Symbol.for("react.element"):60103,o=a?Symbol.for("react.portal"):60106,l=a?Symbol.for("react.fragment"):60107,p=a?Symbol.for("react.strict_mode"):60108,u=a?Symbol.for("react.profiler"):60114,i=a?Symbol.for("react.provider"):60109,b=a?Symbol.for("react.context"):60110,s=a?Symbol.for("react.forward_ref"):60112,f=a?Symbol.for("react.suspense"):60113,d=a?Symbol.for("react.memo"):60115,m=a?Symbol.for("react.lazy"):60116,y="function"==typeof Symbol&&Symbol.iterator;function g(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var O={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},j={};function h(e,t,r){this.props=e,this.context=t,this.refs=j,this.updater=r||O}function v(){}function N(e,t,r){this.props=e,this.context=t,this.refs=j,this.updater=r||O}h.prototype.isReactComponent={},h.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(g(85));this.updater.enqueueSetState(this,e,t,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=h.prototype;var k=N.prototype=new v;k.constructor=N,n(k,h.prototype),k.isPureReactComponent=!0;var _={current:null},w=Object.prototype.hasOwnProperty,S={key:!0,ref:!0,__self:!0,__source:!0};function x(e,t,r){var n,a={},o=null,l=null;if(null!=t)for(n in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(o=""+t.key),t)w.call(t,n)&&!S.hasOwnProperty(n)&&(a[n]=t[n]);var p=arguments.length-2;if(1===p)a.children=r;else if(1<p){for(var u=Array(p),i=0;i<p;i++)u[i]=arguments[i+2];a.children=u}if(e&&e.defaultProps)for(n in p=e.defaultProps)void 0===a[n]&&(a[n]=p[n]);return{$$typeof:c,type:e,key:o,ref:l,props:a,_owner:_.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===c}var C=/\/+/g,E=[];function D(e,t,r,n){if(E.length){var a=E.pop();return a.result=e,a.keyPrefix=t,a.func=r,a.context=n,a.count=0,a}return{result:e,keyPrefix:t,func:r,context:n,count:0}}function T(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>E.length&&E.push(e)}function R(e,t,r,n){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var l=!1;if(null===e)l=!0;else switch(a){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case c:case o:l=!0}}if(l)return r(n,e,""===t?"."+M(e,0):t),1;if(l=0,t=""===t?".":t+":",Array.isArray(e))for(var p=0;p<e.length;p++){var u=t+M(a=e[p],p);l+=R(a,u,r,n)}else if(null===e||"object"!=typeof e?u=null:u="function"==typeof(u=y&&e[y]||e["@@iterator"])?u:null,"function"==typeof u)for(e=u.call(e),p=0;!(a=e.next()).done;)l+=R(a=a.value,u=t+M(a,p++),r,n);else if("object"===a)throw r=""+e,Error(g(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r,""));return l}function $(e,t,r){return null==e?0:R(e,"",t,r)}function M(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function H(e,t){e.func.call(e.context,t,e.count++)}function I(e,t,r){var n=e.result,a=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?L(e,n,r,(function(e){return e})):null!=e&&(P(e)&&(e=function(e,t){return{$$typeof:c,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,a+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(C,"$&/")+"/")+r)),n.push(e))}function L(e,t,r,n,a){var c="";null!=r&&(c=(""+r).replace(C,"$&/")+"/"),$(e,I,t=D(t,c,n,a)),T(t)}var q={current:null};function A(){var e=q.current;if(null===e)throw Error(g(321));return e}var F={ReactCurrentDispatcher:q,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:_,IsSomeRendererActing:{current:!1},assign:n};t.Children={map:function(e,t,r){if(null==e)return e;var n=[];return L(e,n,null,t,r),n},forEach:function(e,t,r){if(null==e)return e;$(e,H,t=D(null,null,t,r)),T(t)},count:function(e){return $(e,(function(){return null}),null)},toArray:function(e){var t=[];return L(e,t,null,(function(e){return e})),t},only:function(e){if(!P(e))throw Error(g(143));return e}},t.Component=h,t.Fragment=l,t.Profiler=u,t.PureComponent=N,t.StrictMode=p,t.Suspense=f,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=F,t.cloneElement=function(e,t,r){if(null==e)throw Error(g(267,e));var a=n({},e.props),o=e.key,l=e.ref,p=e._owner;if(null!=t){if(void 0!==t.ref&&(l=t.ref,p=_.current),void 0!==t.key&&(o=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(i in t)w.call(t,i)&&!S.hasOwnProperty(i)&&(a[i]=void 0===t[i]&&void 0!==u?u[i]:t[i])}var i=arguments.length-2;if(1===i)a.children=r;else if(1<i){u=Array(i);for(var b=0;b<i;b++)u[b]=arguments[b+2];a.children=u}return{$$typeof:c,type:e.type,key:o,ref:l,props:a,_owner:p}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:b,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},t.createElement=x,t.createFactory=function(e){var t=x.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:s,render:e}},t.isValidElement=P,t.lazy=function(e){return{$$typeof:m,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return A().useCallback(e,t)},t.useContext=function(e,t){return A().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return A().useEffect(e,t)},t.useImperativeHandle=function(e,t,r){return A().useImperativeHandle(e,t,r)},t.useLayoutEffect=function(e,t){return A().useLayoutEffect(e,t)},t.useMemo=function(e,t){return A().useMemo(e,t)},t.useReducer=function(e,t,r){return A().useReducer(e,t,r)},t.useRef=function(e){return A().useRef(e)},t.useState=function(e){return A().useState(e)},t.version="16.13.1"},1086:function(e,t,r){"use strict";var n=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(a){return!1}}()?Object.assign:function(e,t){for(var r,l,p=o(e),u=1;u<arguments.length;u++){for(var i in r=Object(arguments[u]))a.call(r,i)&&(p[i]=r[i]);if(n){l=n(r);for(var b=0;b<l.length;b++)c.call(r,l[b])&&(p[l[b]]=r[l[b]])}}return p}},888:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return i}));var n=r(2),a=r(6),c=(r(1084),r(1083)),o={id:"_deltamappinghelper_",title:"deltaMappingHelper",sidebar_label:"deltaMappingHelper"},l={unversionedId:"api/graphback-datasync/modules/_deltamappinghelper_",id:"api/graphback-datasync/modules/_deltamappinghelper_",isDocsHomePage:!1,title:"deltaMappingHelper",description:"Index",source:"@site/../docs/api/graphback-datasync/modules/_deltamappinghelper_.md",slug:"/api/graphback-datasync/modules/_deltamappinghelper_",permalink:"/docs/next/api/graphback-datasync/modules/_deltamappinghelper_",editUrl:"https://github.com/aerogear/graphback/edit/master/website/../docs/api/graphback-datasync/modules/_deltamappinghelper_.md",version:"current",sidebar_label:"deltaMappingHelper"},p=[{value:"Index",id:"index",children:[{value:"Functions",id:"functions",children:[]}]},{value:"Functions",id:"functions-1",children:[{value:"getDeltaListType",id:"getdeltalisttype",children:[]},{value:"getDeltaQuery",id:"getdeltaquery",children:[]},{value:"getDeltaType",id:"getdeltatype",children:[]}]}],u={rightToc:p};function i(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"index"},"Index"),Object(c.b)("h3",{id:"functions"},"Functions"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-datasync/modules/_deltamappinghelper_#getdeltalisttype"}),"getDeltaListType")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-datasync/modules/_deltamappinghelper_#getdeltaquery"}),"getDeltaQuery")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-datasync/modules/_deltamappinghelper_#getdeltatype"}),"getDeltaType"))),Object(c.b)("h2",{id:"functions-1"},"Functions"),Object(c.b)("h3",{id:"getdeltalisttype"},"getDeltaListType"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"getDeltaListType"),"(",Object(c.b)("inlineCode",{parentName:"p"},"typeName"),": string): ",Object(c.b)("em",{parentName:"p"},"string")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/3e08a22/packages/graphback-datasync/src/deltaMappingHelper.ts#L2"}),"packages/graphback-datasync/src/deltaMappingHelper.ts:2"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Parameters:")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"typeName")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"string")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"getdeltaquery"},"getDeltaQuery"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"getDeltaQuery"),"(",Object(c.b)("inlineCode",{parentName:"p"},"typeName"),": string): ",Object(c.b)("em",{parentName:"p"},"string")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/3e08a22/packages/graphback-datasync/src/deltaMappingHelper.ts#L12"}),"packages/graphback-datasync/src/deltaMappingHelper.ts:12"))),Object(c.b)("p",null,"Get the name of delta query for a model"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Parameters:")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"typeName")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Name of the model")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"string")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"getdeltatype"},"getDeltaType"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"getDeltaType"),"(",Object(c.b)("inlineCode",{parentName:"p"},"typeName"),": string): ",Object(c.b)("em",{parentName:"p"},"string")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/3e08a22/packages/graphback-datasync/src/deltaMappingHelper.ts#L5"}),"packages/graphback-datasync/src/deltaMappingHelper.ts:5"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Parameters:")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"typeName")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"string")))}i.isMDXComponent=!0}}]);