(window.webpackJsonp=window.webpackJsonp||[]).push([[656],{1083:function(e,r,a){"use strict";a.d(r,"a",(function(){return o})),a.d(r,"b",(function(){return m}));var t=a(0),n=a.n(t);function c(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function b(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?b(Object(a),!0).forEach((function(r){c(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function p(e,r){if(null==e)return{};var a,t,n=function(e,r){if(null==e)return{};var a,t,n={},c=Object.keys(e);for(t=0;t<c.length;t++)a=c[t],r.indexOf(a)>=0||(n[a]=e[a]);return n}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)a=c[t],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=n.a.createContext({}),s=function(e){var r=n.a.useContext(l),a=r;return e&&(a="function"==typeof e?e(r):i(i({},r),e)),a},o=function(e){var r=s(e.components);return n.a.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.a.createElement(n.a.Fragment,{},r)}},d=n.a.forwardRef((function(e,r){var a=e.components,t=e.mdxType,c=e.originalType,b=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),o=s(a),d=t,m=o["".concat(b,".").concat(d)]||o[d]||u[d]||c;return a?n.a.createElement(m,i(i({ref:r},l),{},{components:a})):n.a.createElement(m,i({ref:r},l))}));function m(e,r){var a=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var c=a.length,b=new Array(c);b[0]=d;var i={};for(var p in r)hasOwnProperty.call(r,p)&&(i[p]=r[p]);i.originalType=e,i.mdxType="string"==typeof e?e:t,b[1]=i;for(var l=2;l<c;l++)b[l]=a[l];return n.a.createElement.apply(null,b)}return n.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},711:function(e,r,a){"use strict";a.r(r),a.d(r,"frontMatter",(function(){return b})),a.d(r,"metadata",(function(){return i})),a.d(r,"rightToc",(function(){return p})),a.d(r,"default",(function(){return s}));var t=a(2),n=a(6),c=(a(0),a(1083)),b={id:"_graphbackserver_",title:"GraphbackServer",sidebar_label:"GraphbackServer"},i={unversionedId:"api/graphql-serve/modules/_graphbackserver_",id:"version-0.16.x/api/graphql-serve/modules/_graphbackserver_",isDocsHomePage:!1,title:"GraphbackServer",description:"Index",source:"@site/versioned_docs/version-0.16.x/api/graphql-serve/modules/_graphbackserver_.md",slug:"/api/graphql-serve/modules/_graphbackserver_",permalink:"/docs/api/graphql-serve/modules/_graphbackserver_",editUrl:"https://github.com/aerogear/graphback/edit/master/website/versioned_docs/version-0.16.x/api/graphql-serve/modules/_graphbackserver_.md",version:"0.16.x",sidebar_label:"GraphbackServer"},p=[{value:"Index",id:"index",children:[{value:"Classes",id:"classes",children:[]},{value:"Interfaces",id:"interfaces",children:[]},{value:"Functions",id:"functions",children:[]}]},{value:"Functions",id:"functions-1",children:[{value:"buildGraphbackServer",id:"buildgraphbackserver",children:[]}]}],l={rightToc:p};function s(e){var r=e.components,a=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(t.a)({},l,a,{components:r,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"index"},"Index"),Object(c.b)("h3",{id:"classes"},"Classes"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(t.a)({parentName:"li"},{href:"/docs/api/graphql-serve/classes/_graphbackserver_.graphbackserver"}),"GraphbackServer"))),Object(c.b)("h3",{id:"interfaces"},"Interfaces"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(t.a)({parentName:"li"},{href:"/docs/api/graphql-serve/interfaces/_graphbackserver_.servicebuilder"}),"ServiceBuilder"))),Object(c.b)("h3",{id:"functions"},"Functions"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(t.a)({parentName:"li"},{href:"/docs/api/graphql-serve/modules/_graphbackserver_#buildgraphbackserver"}),"buildGraphbackServer"))),Object(c.b)("h2",{id:"functions-1"},"Functions"),Object(c.b)("h3",{id:"buildgraphbackserver"},"buildGraphbackServer"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"buildGraphbackServer"),"(",Object(c.b)("inlineCode",{parentName:"p"},"modelDir"),": string, ",Object(c.b)("inlineCode",{parentName:"p"},"dataSyncServeConfig"),": ",Object(c.b)("a",Object(t.a)({parentName:"p"},{href:"/docs/api/graphql-serve/interfaces/_runtime_.datasyncserveconfig"}),"DataSyncServeConfig"),"): ",Object(c.b)("em",{parentName:"p"},"Promise\u2039",Object(c.b)("a",Object(t.a)({parentName:"em"},{href:"/docs/api/graphql-serve/classes/_graphbackserver_.graphbackserver"}),"GraphbackServer"),"\u203a")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(t.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/bc616b51/packages/graphql-serve/src/GraphbackServer.ts#L105"}),"GraphbackServer.ts:105"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Parameters:")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(t.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(t.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(t.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"modelDir")),Object(c.b)("td",Object(t.a)({parentName:"tr"},{align:null}),"string")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(t.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"dataSyncServeConfig")),Object(c.b)("td",Object(t.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(t.a)({parentName:"td"},{href:"/docs/api/graphql-serve/interfaces/_runtime_.datasyncserveconfig"}),"DataSyncServeConfig"))))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"Promise\u2039",Object(c.b)("a",Object(t.a)({parentName:"em"},{href:"/docs/api/graphql-serve/classes/_graphbackserver_.graphbackserver"}),"GraphbackServer"),"\u203a")))}s.isMDXComponent=!0}}]);