/*! For license information please see da5bc63b.9ef7df11.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[600],{655:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(6),o=(n(766),n(765)),i={id:"postgres",title:"Using PostgreSQL with Graphback",sidebar_label:"PostgreSQL"},c={unversionedId:"databases/postgres",id:"databases/postgres",isDocsHomePage:!1,title:"Using PostgreSQL with Graphback",description:"PostgreSQL is a powerful, open source object-relational database system with over 30 years of active development that has earned it a strong reputation for reliability, feature robustness, and performance. Graphback Knex Provider package provides instant integration to your PostgreSQL database, giving you a full implementation of the CRUD API.",source:"@site/../docs/databases/postgres.md",permalink:"/docs/next/databases/postgres",editUrl:"https://github.com/aerogear/graphback/edit/master/website/../docs/databases/postgres.md",version:"next",sidebar_label:"PostgreSQL",sidebar:"docs",previous:{title:"Using MongoDB in Graphback",permalink:"/docs/next/databases/mongodb"},next:{title:"Using SQLite with Graphback",permalink:"/docs/next/databases/sqlite"}},s=[{value:"Installation",id:"installation",children:[]},{value:"Creating Database Connection",id:"creating-database-connection",children:[]}],l={rightToc:s};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.postgresql.org/"}),"PostgreSQL")," is a powerful, open source object-relational database system with over 30 years of active development that has earned it a strong reputation for reliability, feature robustness, and performance. ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.npmjs.com/package/@graphback/runtime-knex"}),"Graphback Knex Provider")," package provides instant integration to your PostgreSQL database, giving you a full implementation of the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/crud/overview"}),"CRUD API"),". "),Object(o.b)("p",null,"Additionally you can use ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/graphql-migrations/intro"}),"GraphQL Migrations")," to perform database migrations using the models defined in the GraphQL schema created by Graphback."),Object(o.b)("p",null,"The provider is built on top of ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"http://knexjs.org/"}),"Knex.js"),", a flexible SQL query builder."),Object(o.b)("h2",{id:"installation"},"Installation"),Object(o.b)("p",null,"Install with npm:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"npm install @graphback/runtime-knex knex\n")),Object(o.b)("p",null,"Install with yarn:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"yarn add @graphback/runtime-knex knex\n")),Object(o.b)("p",null,"Running either of the two commands will install the ",Object(o.b)("inlineCode",{parentName:"p"},"Graphback Knex Provider")," (",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.npmjs.com/package/@graphback/runtime-knex"}),Object(o.b)("inlineCode",{parentName:"a"},"@graphback/runtime-knex")),") and the Knex.js library (",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.npmjs.com/package/knex"}),Object(o.b)("inlineCode",{parentName:"a"},"knex")),")."),Object(o.b)("h2",{id:"creating-database-connection"},"Creating Database Connection"),Object(o.b)("p",null,"You'll need a running PostgreSQL instance before initializing the connection. "),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"If you do not have a running instance, you can use ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.docker.com/"}),"Docker")," to quickly spin up a PostgreSQL container by following the instructions given in ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://hub.docker.com/_/postgres"}),"PostgreSQL Docker Image"),"."))),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),'import Knex from \'knex\';\n\nconst dbConfig = {\n    client: "pg",\n    connection: {\n      user: "postgresql",\n      password: "password",\n      database: "users",\n      host: "localhost",\n      port: 5432\n    },\n    pool: { min: 5, max: 30 }\n};\n\nconst db = Knex(dbConfig);\n')),Object(o.b)("p",null,"The above code initiates a connection to a local running PostgreSQL database, using the ",Object(o.b)("inlineCode",{parentName:"p"},"postgresql:password")," credentials. We also create a database connection pool to a minimum of ",Object(o.b)("inlineCode",{parentName:"p"},"5")," and maximum of ",Object(o.b)("inlineCode",{parentName:"p"},"30"),". You can modify the configurations depending on your setup. "),Object(o.b)("p",null,"Visit ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"http://knexjs.org/#Installation-client"}),"Knex Connection Options")," to learn more about configuring your database connection and the different connection options. "),Object(o.b)("h1",{id:"using-knex-provider"},"Using Knex Provider"),Object(o.b)("p",null,"The provider exposes a ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/graphback-runtime-knex/modules/_createknexdbprovider_"}),Object(o.b)("inlineCode",{parentName:"a"},"createKnexDbProvider"))," method, which can be used to create data providers for each of your data models. "),Object(o.b)("p",null,"The code below shows how you can create such a data provider creator and how it can be passed to ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/graphback/modules/_buildgraphbackapi_"}),Object(o.b)("inlineCode",{parentName:"a"},"buildGraphbackAPI")),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),'import Knex from \'knex\';\nimport { migrateDB } from \'graphql-migrations\';\nimport { createKnexDbProvider } from \'@graphback/runtime-knex\';\n\n// highlight-start\n// database configuration\nconst dbConfig = {\n    client: "pg",\n    connection: {\n      user: "postgresql",\n      password: "password",\n      database: "users",\n      host: "localhost",\n      port: 5432\n    },\n    pool: { min: 5, max: 30 }\n};\n\n// create the connection to the database\nconst db = Knex(dbConfig);\n\n// the business model\nconst userModel = `\n """\n @model\n """\n type User {\n     id: ID!\n     username: String!\n }\n`;\n\n// create the user table in database \nmigrateDB(dbConfig, userModel, { }).then(() => {\n  console.log("Migrated database");\n});\n\n// create the postgres data provider\nconst dataProviderCreator = createKnexDbProvider(db);\n\n// highlight-end\n\n// Use the dataProvider in buildGraphbackAPI\nconst { resolvers, services, contextCreator } = buildGraphbackAPI(userModel, { dataProviderCreator });\n')),Object(o.b)("p",null,"The highlighted code does the following:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Define connection configuration to the database."),Object(o.b)("li",{parentName:"ul"},"Create a connection to PostgreSQL database using Knex."),Object(o.b)("li",{parentName:"ul"},"Define the user model."),Object(o.b)("li",{parentName:"ul"},"Perform the migrations using ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/graphql-migrations/intro"}),"GraphQL Migrations")," to create the ",Object(o.b)("inlineCode",{parentName:"li"},"user")," table."),Object(o.b)("li",{parentName:"ul"},"And finally, create a data provider creator by using the ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-runtime-knex/modules/_createknexdbprovider_"}),Object(o.b)("inlineCode",{parentName:"a"},"createKnexDbProvider"))," API. ")),Object(o.b)("p",null,"The rest of the code uses ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/graphback/modules/_buildgraphbackapi_"}),Object(o.b)("inlineCode",{parentName:"a"},"buildGraphbackAPI"))," to create Graphback CRUD API based on the defined ",Object(o.b)("inlineCode",{parentName:"p"},"userModel")," model."),Object(o.b)("p",null,"Visit ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/model/datamodel"}),"Data Models")," pages to learn more about how to design your business models."))}u.isMDXComponent=!0},765:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),f=r,d=p["".concat(i,".").concat(f)]||p[f]||b[f]||o;return n?a.a.createElement(d,c(c({ref:t},l),{},{components:n})):a.a.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},766:function(e,t,n){"use strict";e.exports=n(767)},767:function(e,t,n){"use strict";var r=n(768),a="function"==typeof Symbol&&Symbol.for,o=a?Symbol.for("react.element"):60103,i=a?Symbol.for("react.portal"):60106,c=a?Symbol.for("react.fragment"):60107,s=a?Symbol.for("react.strict_mode"):60108,l=a?Symbol.for("react.profiler"):60114,u=a?Symbol.for("react.provider"):60109,p=a?Symbol.for("react.context"):60110,b=a?Symbol.for("react.forward_ref"):60112,f=a?Symbol.for("react.suspense"):60113,d=a?Symbol.for("react.memo"):60115,m=a?Symbol.for("react.lazy"):60116,h="function"==typeof Symbol&&Symbol.iterator;function g(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},O={};function j(e,t,n){this.props=e,this.context=t,this.refs=O,this.updater=n||y}function v(){}function w(e,t,n){this.props=e,this.context=t,this.refs=O,this.updater=n||y}j.prototype.isReactComponent={},j.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(g(85));this.updater.enqueueSetState(this,e,t,"setState")},j.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=j.prototype;var k=w.prototype=new v;k.constructor=w,r(k,j.prototype),k.isPureReactComponent=!0;var x={current:null},P=Object.prototype.hasOwnProperty,N={key:!0,ref:!0,__self:!0,__source:!0};function C(e,t,n){var r,a={},i=null,c=null;if(null!=t)for(r in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(i=""+t.key),t)P.call(t,r)&&!N.hasOwnProperty(r)&&(a[r]=t[r]);var s=arguments.length-2;if(1===s)a.children=n;else if(1<s){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+2];a.children=l}if(e&&e.defaultProps)for(r in s=e.defaultProps)void 0===a[r]&&(a[r]=s[r]);return{$$typeof:o,type:e,key:i,ref:c,props:a,_owner:x.current}}function S(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var _=/\/+/g,E=[];function D(e,t,n,r){if(E.length){var a=E.pop();return a.result=e,a.keyPrefix=t,a.func=n,a.context=r,a.count=0,a}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function I(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>E.length&&E.push(e)}function R(e,t,n){return null==e?0:function e(t,n,r,a){var c=typeof t;"undefined"!==c&&"boolean"!==c||(t=null);var s=!1;if(null===t)s=!0;else switch(c){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case o:case i:s=!0}}if(s)return r(a,t,""===n?"."+L(t,0):n),1;if(s=0,n=""===n?".":n+":",Array.isArray(t))for(var l=0;l<t.length;l++){var u=n+L(c=t[l],l);s+=e(c,u,r,a)}else if(null===t||"object"!=typeof t?u=null:u="function"==typeof(u=h&&t[h]||t["@@iterator"])?u:null,"function"==typeof u)for(t=u.call(t),l=0;!(c=t.next()).done;)s+=e(c=c.value,u=n+L(c,l++),r,a);else if("object"===c)throw r=""+t,Error(g(31,"[object Object]"===r?"object with keys {"+Object.keys(t).join(", ")+"}":r,""));return s}(e,"",t,n)}function L(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function $(e,t){e.func.call(e.context,t,e.count++)}function A(e,t,n){var r=e.result,a=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?M(e,r,n,(function(e){return e})):null!=e&&(S(e)&&(e=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,a+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(_,"$&/")+"/")+n)),r.push(e))}function M(e,t,n,r,a){var o="";null!=n&&(o=(""+n).replace(_,"$&/")+"/"),R(e,A,t=D(t,o,r,a)),I(t)}var T={current:null};function Q(){var e=T.current;if(null===e)throw Error(g(321));return e}var U={ReactCurrentDispatcher:T,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:x,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:function(e,t,n){if(null==e)return e;var r=[];return M(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;R(e,$,t=D(null,null,t,n)),I(t)},count:function(e){return R(e,(function(){return null}),null)},toArray:function(e){var t=[];return M(e,t,null,(function(e){return e})),t},only:function(e){if(!S(e))throw Error(g(143));return e}},t.Component=j,t.Fragment=c,t.Profiler=l,t.PureComponent=w,t.StrictMode=s,t.Suspense=f,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=U,t.cloneElement=function(e,t,n){if(null==e)throw Error(g(267,e));var a=r({},e.props),i=e.key,c=e.ref,s=e._owner;if(null!=t){if(void 0!==t.ref&&(c=t.ref,s=x.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(u in t)P.call(t,u)&&!N.hasOwnProperty(u)&&(a[u]=void 0===t[u]&&void 0!==l?l[u]:t[u])}var u=arguments.length-2;if(1===u)a.children=n;else if(1<u){l=Array(u);for(var p=0;p<u;p++)l[p]=arguments[p+2];a.children=l}return{$$typeof:o,type:e.type,key:i,ref:c,props:a,_owner:s}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:p,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:u,_context:e},e.Consumer=e},t.createElement=C,t.createFactory=function(e){var t=C.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:b,render:e}},t.isValidElement=S,t.lazy=function(e){return{$$typeof:m,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return Q().useCallback(e,t)},t.useContext=function(e,t){return Q().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return Q().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return Q().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return Q().useLayoutEffect(e,t)},t.useMemo=function(e,t){return Q().useMemo(e,t)},t.useReducer=function(e,t,n){return Q().useReducer(e,t,n)},t.useRef=function(e){return Q().useRef(e)},t.useState=function(e){return Q().useState(e)},t.version="16.13.1"},768:function(e,t,n){"use strict";var r=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;function i(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(a){return!1}}()?Object.assign:function(e,t){for(var n,c,s=i(e),l=1;l<arguments.length;l++){for(var u in n=Object(arguments[l]))a.call(n,u)&&(s[u]=n[u]);if(r){c=r(n);for(var p=0;p<c.length;p++)o.call(n,c[p])&&(s[c[p]]=n[c[p]])}}return s}}}]);