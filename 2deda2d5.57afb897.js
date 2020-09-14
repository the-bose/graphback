/*! For license information please see 2deda2d5.57afb897.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[177],{1083:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),b=n,d=p["".concat(c,".").concat(b)]||p[b]||f[b]||a;return r?o.a.createElement(d,i(i({ref:t},u),{},{components:r})):o.a.createElement(d,i({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=b;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var u=2;u<a;u++)c[u]=r[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},1084:function(e,t,r){"use strict";e.exports=r(1085)},1085:function(e,t,r){"use strict";var n=r(1086),o="function"==typeof Symbol&&Symbol.for,a=o?Symbol.for("react.element"):60103,c=o?Symbol.for("react.portal"):60106,i=o?Symbol.for("react.fragment"):60107,s=o?Symbol.for("react.strict_mode"):60108,u=o?Symbol.for("react.profiler"):60114,l=o?Symbol.for("react.provider"):60109,p=o?Symbol.for("react.context"):60110,f=o?Symbol.for("react.forward_ref"):60112,b=o?Symbol.for("react.suspense"):60113,d=o?Symbol.for("react.memo"):60115,h=o?Symbol.for("react.lazy"):60116,y="function"==typeof Symbol&&Symbol.iterator;function m(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var v={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function O(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||v}function j(){}function k(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||v}O.prototype.isReactComponent={},O.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(m(85));this.updater.enqueueSetState(this,e,t,"setState")},O.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},j.prototype=O.prototype;var x=k.prototype=new j;x.constructor=k,n(x,O.prototype),x.isPureReactComponent=!0;var C={current:null},w=Object.prototype.hasOwnProperty,N={key:!0,ref:!0,__self:!0,__source:!0};function S(e,t,r){var n,o={},c=null,i=null;if(null!=t)for(n in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(c=""+t.key),t)w.call(t,n)&&!N.hasOwnProperty(n)&&(o[n]=t[n]);var s=arguments.length-2;if(1===s)o.children=r;else if(1<s){for(var u=Array(s),l=0;l<s;l++)u[l]=arguments[l+2];o.children=u}if(e&&e.defaultProps)for(n in s=e.defaultProps)void 0===o[n]&&(o[n]=s[n]);return{$$typeof:a,type:e,key:c,ref:i,props:o,_owner:C.current}}function R(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var P=/\/+/g,_=[];function E(e,t,r,n){if(_.length){var o=_.pop();return o.result=e,o.keyPrefix=t,o.func=r,o.context=n,o.count=0,o}return{result:e,keyPrefix:t,func:r,context:n,count:0}}function D(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>_.length&&_.push(e)}function G(e,t,r,n){var o=typeof e;"undefined"!==o&&"boolean"!==o||(e=null);var i=!1;if(null===e)i=!0;else switch(o){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case a:case c:i=!0}}if(i)return r(n,e,""===t?"."+$(e,0):t),1;if(i=0,t=""===t?".":t+":",Array.isArray(e))for(var s=0;s<e.length;s++){var u=t+$(o=e[s],s);i+=G(o,u,r,n)}else if(null===e||"object"!=typeof e?u=null:u="function"==typeof(u=y&&e[y]||e["@@iterator"])?u:null,"function"==typeof u)for(e=u.call(e),s=0;!(o=e.next()).done;)i+=G(o=o.value,u=t+$(o,s++),r,n);else if("object"===o)throw r=""+e,Error(m(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r,""));return i}function U(e,t,r){return null==e?0:G(e,"",t,r)}function $(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function I(e,t){e.func.call(e.context,t,e.count++)}function T(e,t,r){var n=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?A(e,n,r,(function(e){return e})):null!=e&&(R(e)&&(e=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(P,"$&/")+"/")+r)),n.push(e))}function A(e,t,r,n,o){var a="";null!=r&&(a=(""+r).replace(P,"$&/")+"/"),U(e,T,t=E(t,a,n,o)),D(t)}var L={current:null};function q(){var e=L.current;if(null===e)throw Error(m(321));return e}var Q={ReactCurrentDispatcher:L,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:C,IsSomeRendererActing:{current:!1},assign:n};t.Children={map:function(e,t,r){if(null==e)return e;var n=[];return A(e,n,null,t,r),n},forEach:function(e,t,r){if(null==e)return e;U(e,I,t=E(null,null,t,r)),D(t)},count:function(e){return U(e,(function(){return null}),null)},toArray:function(e){var t=[];return A(e,t,null,(function(e){return e})),t},only:function(e){if(!R(e))throw Error(m(143));return e}},t.Component=O,t.Fragment=i,t.Profiler=u,t.PureComponent=k,t.StrictMode=s,t.Suspense=b,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Q,t.cloneElement=function(e,t,r){if(null==e)throw Error(m(267,e));var o=n({},e.props),c=e.key,i=e.ref,s=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,s=C.current),void 0!==t.key&&(c=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(l in t)w.call(t,l)&&!N.hasOwnProperty(l)&&(o[l]=void 0===t[l]&&void 0!==u?u[l]:t[l])}var l=arguments.length-2;if(1===l)o.children=r;else if(1<l){u=Array(l);for(var p=0;p<l;p++)u[p]=arguments[p+2];o.children=u}return{$$typeof:a,type:e.type,key:c,ref:i,props:o,_owner:s}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:p,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:l,_context:e},e.Consumer=e},t.createElement=S,t.createFactory=function(e){var t=S.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:f,render:e}},t.isValidElement=R,t.lazy=function(e){return{$$typeof:h,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return q().useCallback(e,t)},t.useContext=function(e,t){return q().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return q().useEffect(e,t)},t.useImperativeHandle=function(e,t,r){return q().useImperativeHandle(e,t,r)},t.useLayoutEffect=function(e,t){return q().useLayoutEffect(e,t)},t.useMemo=function(e,t){return q().useMemo(e,t)},t.useReducer=function(e,t,r){return q().useReducer(e,t,r)},t.useRef=function(e){return q().useRef(e)},t.useState=function(e){return q().useState(e)},t.version="16.13.1"},1086:function(e,t,r){"use strict";var n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function c(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,t){for(var r,i,s=c(e),u=1;u<arguments.length;u++){for(var l in r=Object(arguments[u]))o.call(r,l)&&(s[l]=r[l]);if(n){i=n(r);for(var p=0;p<i.length;p++)a.call(r,i[p])&&(s[i[p]]=r[i[p]])}}return s}},232:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return l}));var n=r(2),o=r(6),a=(r(1084),r(1083)),c={id:"custom-resolvers",title:"Using Graphback in custom resolvers",sidebar_label:"Custom Resolvers"},i={unversionedId:"resolvers/custom-resolvers",id:"resolvers/custom-resolvers",isDocsHomePage:!1,title:"Using Graphback in custom resolvers",description:"The model CRUD services created by Graphback are exposed to each resolver through the context parameter. Thanks to the flexible CRUD API, you can reuse these services for various use cases in your own resolvers.",source:"@site/../docs/resolvers/custom-resolvers.md",slug:"/resolvers/custom-resolvers",permalink:"/docs/next/resolvers/custom-resolvers",editUrl:"https://github.com/aerogear/graphback/edit/master/website/../docs/resolvers/custom-resolvers.md",version:"current",sidebar_label:"Custom Resolvers",sidebar:"docs",previous:{title:"Subscriptions",permalink:"/docs/next/crud/subscriptions"},next:{title:"Overview",permalink:"/docs/next/databases/overview"}},s=[{value:"context",id:"context",children:[]},{value:"info",id:"info",children:[]}],u={rightToc:s};function l(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The model CRUD services created by Graphback are exposed to each resolver through the ",Object(a.b)("inlineCode",{parentName:"p"},"context")," parameter. Thanks to the flexible CRUD API, you can reuse these services for various use cases in your own resolvers."),Object(a.b)("p",null,"In this example, we are going to create a custom query called ",Object(a.b)("inlineCode",{parentName:"p"},"getDraftNotes"),"."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),'import { QueryFilter, GraphbackContext, buildGraphbackAPI } from "graphback";\nimport { GraphQLResolveInfo } from \'graphql\';\nimport { NoteFilter } from \'../generated-types\'; // https://graphql-code-generator.com\n\n// define your model\nconst model = `\n""" @model """\ntype Note {\n  id: ID!\n  title: String!\n}\n\n// highlight-start\ntype Query {\n  getDraftNotes: [Note]\n}\n// highlight-end\n`;\n\n// create your own custom resolvers\nconst customResolvers = {\n  Query: {\n    getDraftNotes: async (parent: any, args: any, context: GraphbackContext, info: GraphQLResolveInfo) => {\n      const filter: QueryFilter<NoteFilter> = {\n        title: {\n          startsWith: \'[DRAFT]\'\n        }\n      }\n\n      const results = await context.graphback.Note.findBy({ filter }, context, info);\n\n      return results.items;\n    }\n  }\n}\n\n// generate Graphback schema and resolvers\nconst { resolvers, typeDefs, contextCreator } = buildGraphbackAPI(model, { ... });\n\nconst apolloServer = new ApolloServer({\n  typeDefs,\n  resolvers: [resolvers, noteResolvers], // merge Graphback and custom resolvers\n  context: contextCreator\n})\n')),Object(a.b)("p",null,"See the ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"../api/graphback-core/interfaces/_runtime_graphbackcrudservice_.graphbackcrudservice"}),"GraphbackCRUDService API Reference")," for information on the methods and parameters available in the ",Object(a.b)("inlineCode",{parentName:"p"},"GraphbackCRUDService")," interface."),Object(a.b)("h3",{id:"context"},"context"),Object(a.b)("p",null,"The ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"../api/graphback-core/interfaces/_runtime_interfaces_.graphbackcontext"}),"GraphbackContext")," interface defines all CRUD services in the ",Object(a.b)("inlineCode",{parentName:"p"},"graphback")," property. Each service name matches exactly with the name of the model defined in your GraphQL schema."),Object(a.b)("p",null,"Accessing the CRUD service for the ",Object(a.b)("inlineCode",{parentName:"p"},"Note")," model:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"await context.graphback.Note.findBy(args);\n")),Object(a.b)("p",null,"Because the services and context are create at runtime the properties of ",Object(a.b)("inlineCode",{parentName:"p"},"graphback")," are dynamically typed. It is recommended that you extend ",Object(a.b)("inlineCode",{parentName:"p"},"GraphbackContext")," for your resolvers to provide strongly typed services."),Object(a.b)("p",null,"You can optionally pass the ",Object(a.b)("inlineCode",{parentName:"p"},"Note")," type generated with ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://graphql-code-generator.com/"}),"GraphQL Code Generator")," as a generic to ",Object(a.b)("inlineCode",{parentName:"p"},"GraphbackCRUDService")," for additional type-safety."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"import { GraphbackContext, GraphbackCRUDService } from 'graphback';\nimport { Note } from './generated-types';\n\ninterface MyCustomContext extends GraphbackContext {\n  graphback: {\n    Note: GraphbackCRUDService<Note>\n  }\n}\n\nconst customResolvers = {\n  Query: {\n    // highlight-start\n    getDraftNotes: async (parent: any, args: any, context: MyCustomContext, info: GraphQLResolveInfo) => {\n    // highlight-end\n      ...\n    }\n  }\n}\n")),Object(a.b)("p",null,"Each ",Object(a.b)("inlineCode",{parentName:"p"},"GraphbackCRUDService")," method lets you pass the context as a parameter, as some implementations may use the context in its operations."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"await context.Note.findBy(args, context);\n")),Object(a.b)("h3",{id:"info"},"info"),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"GraphQLResolveInfo")," object is available to every resolver and contains information about the GraphQL schema and the current operation.\nYou can optionally pass this to the ",Object(a.b)("inlineCode",{parentName:"p"},"GraphbackCRUDService")," method. A common use for this parameter is mapping the selected fields from the GraphQL query to the database query. "),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"await context.Note.findBy(args, context, info);\n")))}l.isMDXComponent=!0}}]);