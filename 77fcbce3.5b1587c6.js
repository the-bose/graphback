/*! For license information please see 77fcbce3.5b1587c6.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[322],{376:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return u})),r.d(t,"rightToc",(function(){return i})),r.d(t,"default",(function(){return p}));var n=r(2),o=r(6),a=(r(766),r(765)),c={id:"index",title:"create-graphback",sidebar_label:"README"},u={unversionedId:"api/create-graphback/index",id:"api/create-graphback/index",isDocsHomePage:!1,title:"create-graphback",description:"Graphback",source:"@site/../docs/api/create-graphback/index.md",permalink:"/docs/next/api/create-graphback/index",editUrl:"https://github.com/aerogear/graphback/edit/master/website/../docs/api/create-graphback/index.md",version:"next",sidebar_label:"README"},i=[{value:"Graphback",id:"graphback",children:[]},{value:"Motivation",id:"motivation",children:[]},{value:"Usage",id:"usage",children:[]}],l={rightToc:i};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"graphback"},"Graphback"),Object(a.b)("p",{align:"center"},Object(a.b)("img",{width:"400",src:"https://raw.githubusercontent.com/aerogear/graphback/master/website/static/img/logo.png"}),Object(a.b)("br",null),"Auto generate database structure, ",Object(a.b)("br",null),"GraphQL Resolvers and Queries from GraphQL types \ud83d\ude80"),Object(a.b)("h2",{id:"motivation"},"Motivation"),Object(a.b)("p",null,"Provides a small command line utility that can be used to initialise a ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://graphback.dev"}),"Graphback")," project. Graphback helps you to kickstart your experience with any existing GraphQL implementation by generating backend and client side CRUD layer using your GraphQL data model."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Documentation"),": ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://graphback.dev"}),"https://graphback.dev")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Repository"),": ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/aerogear/graphback/"}),"https://github.com/aerogear/graphback/")),Object(a.b)("h2",{id:"usage"},"Usage"),Object(a.b)("p",null,"You can initialise a Graphback project by either of the following commands:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"npx create-graphback my-project\n")),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"npm init graphback my-project\n")),Object(a.b)("p",null,"The CLI will ask you to pick from one of a number of templates. Once chosen, the template will be downloaded to your computer."),Object(a.b)("p",null,"Change into your project folder:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"cd my-awesome-project\n")),Object(a.b)("p",null,"And follow the instructions in the ",Object(a.b)("inlineCode",{parentName:"p"},"README.md")," file to know how you can run the project."))}p.isMDXComponent=!0},765:function(e,t,r){"use strict";r.d(t,"a",(function(){return f})),r.d(t,"b",(function(){return y}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},f=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),f=p(r),b=n,y=f["".concat(c,".").concat(b)]||f[b]||s[b]||a;return r?o.a.createElement(y,u(u({ref:t},l),{},{components:r})):o.a.createElement(y,u({ref:t},l))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=b;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:n,c[1]=u;for(var l=2;l<a;l++)c[l]=r[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},766:function(e,t,r){"use strict";e.exports=r(767)},767:function(e,t,r){"use strict";var n=r(768),o="function"==typeof Symbol&&Symbol.for,a=o?Symbol.for("react.element"):60103,c=o?Symbol.for("react.portal"):60106,u=o?Symbol.for("react.fragment"):60107,i=o?Symbol.for("react.strict_mode"):60108,l=o?Symbol.for("react.profiler"):60114,p=o?Symbol.for("react.provider"):60109,f=o?Symbol.for("react.context"):60110,s=o?Symbol.for("react.forward_ref"):60112,b=o?Symbol.for("react.suspense"):60113,y=o?Symbol.for("react.memo"):60115,d=o?Symbol.for("react.lazy"):60116,h="function"==typeof Symbol&&Symbol.iterator;function m(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},v={};function O(e,t,r){this.props=e,this.context=t,this.refs=v,this.updater=r||g}function j(){}function k(e,t,r){this.props=e,this.context=t,this.refs=v,this.updater=r||g}O.prototype.isReactComponent={},O.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(m(85));this.updater.enqueueSetState(this,e,t,"setState")},O.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},j.prototype=O.prototype;var w=k.prototype=new j;w.constructor=k,n(w,O.prototype),w.isPureReactComponent=!0;var x={current:null},E=Object.prototype.hasOwnProperty,S={key:!0,ref:!0,__self:!0,__source:!0};function P(e,t,r){var n,o={},c=null,u=null;if(null!=t)for(n in void 0!==t.ref&&(u=t.ref),void 0!==t.key&&(c=""+t.key),t)E.call(t,n)&&!S.hasOwnProperty(n)&&(o[n]=t[n]);var i=arguments.length-2;if(1===i)o.children=r;else if(1<i){for(var l=Array(i),p=0;p<i;p++)l[p]=arguments[p+2];o.children=l}if(e&&e.defaultProps)for(n in i=e.defaultProps)void 0===o[n]&&(o[n]=i[n]);return{$$typeof:a,type:e,key:c,ref:u,props:o,_owner:x.current}}function _(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var C=/\/+/g,R=[];function $(e,t,r,n){if(R.length){var o=R.pop();return o.result=e,o.keyPrefix=t,o.func=r,o.context=n,o.count=0,o}return{result:e,keyPrefix:t,func:r,context:n,count:0}}function N(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>R.length&&R.push(e)}function D(e,t,r){return null==e?0:function e(t,r,n,o){var u=typeof t;"undefined"!==u&&"boolean"!==u||(t=null);var i=!1;if(null===t)i=!0;else switch(u){case"string":case"number":i=!0;break;case"object":switch(t.$$typeof){case a:case c:i=!0}}if(i)return n(o,t,""===r?"."+A(t,0):r),1;if(i=0,r=""===r?".":r+":",Array.isArray(t))for(var l=0;l<t.length;l++){var p=r+A(u=t[l],l);i+=e(u,p,n,o)}else if(null===t||"object"!=typeof t?p=null:p="function"==typeof(p=h&&t[h]||t["@@iterator"])?p:null,"function"==typeof p)for(t=p.call(t),l=0;!(u=t.next()).done;)i+=e(u=u.value,p=r+A(u,l++),n,o);else if("object"===u)throw n=""+t,Error(m(31,"[object Object]"===n?"object with keys {"+Object.keys(t).join(", ")+"}":n,""));return i}(e,"",t,r)}function A(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function T(e,t){e.func.call(e.context,t,e.count++)}function M(e,t,r){var n=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?I(e,n,r,(function(e){return e})):null!=e&&(_(e)&&(e=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(C,"$&/")+"/")+r)),n.push(e))}function I(e,t,r,n,o){var a="";null!=r&&(a=(""+r).replace(C,"$&/")+"/"),D(e,M,t=$(t,a,n,o)),N(t)}var L={current:null};function U(){var e=L.current;if(null===e)throw Error(m(321));return e}var G={ReactCurrentDispatcher:L,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:x,IsSomeRendererActing:{current:!1},assign:n};t.Children={map:function(e,t,r){if(null==e)return e;var n=[];return I(e,n,null,t,r),n},forEach:function(e,t,r){if(null==e)return e;D(e,T,t=$(null,null,t,r)),N(t)},count:function(e){return D(e,(function(){return null}),null)},toArray:function(e){var t=[];return I(e,t,null,(function(e){return e})),t},only:function(e){if(!_(e))throw Error(m(143));return e}},t.Component=O,t.Fragment=u,t.Profiler=l,t.PureComponent=k,t.StrictMode=i,t.Suspense=b,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=G,t.cloneElement=function(e,t,r){if(null==e)throw Error(m(267,e));var o=n({},e.props),c=e.key,u=e.ref,i=e._owner;if(null!=t){if(void 0!==t.ref&&(u=t.ref,i=x.current),void 0!==t.key&&(c=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(p in t)E.call(t,p)&&!S.hasOwnProperty(p)&&(o[p]=void 0===t[p]&&void 0!==l?l[p]:t[p])}var p=arguments.length-2;if(1===p)o.children=r;else if(1<p){l=Array(p);for(var f=0;f<p;f++)l[f]=arguments[f+2];o.children=l}return{$$typeof:a,type:e.type,key:c,ref:u,props:o,_owner:i}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:f,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:p,_context:e},e.Consumer=e},t.createElement=P,t.createFactory=function(e){var t=P.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:s,render:e}},t.isValidElement=_,t.lazy=function(e){return{$$typeof:d,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:y,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return U().useCallback(e,t)},t.useContext=function(e,t){return U().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return U().useEffect(e,t)},t.useImperativeHandle=function(e,t,r){return U().useImperativeHandle(e,t,r)},t.useLayoutEffect=function(e,t){return U().useLayoutEffect(e,t)},t.useMemo=function(e,t){return U().useMemo(e,t)},t.useReducer=function(e,t,r){return U().useReducer(e,t,r)},t.useRef=function(e){return U().useRef(e)},t.useState=function(e){return U().useState(e)},t.version="16.13.1"},768:function(e,t,r){"use strict";var n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function c(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,t){for(var r,u,i=c(e),l=1;l<arguments.length;l++){for(var p in r=Object(arguments[l]))o.call(r,p)&&(i[p]=r[p]);if(n){u=n(r);for(var f=0;f<u.length;f++)a.call(r,u[f])&&(i[u[f]]=r[u[f]])}}return i}}}]);