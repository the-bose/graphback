(window.webpackJsonp=window.webpackJsonp||[]).push([[171],{225:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return b}));var a=r(2),n=r(6),c=(r(0),r(765)),o={id:"_abstract_getcolumntypefromscalar_.tablecolumntypedescriptor",title:"TableColumnTypeDescriptor",sidebar_label:"TableColumnTypeDescriptor"},i={unversionedId:"api/graphql-migrations/interfaces/_abstract_getcolumntypefromscalar_.tablecolumntypedescriptor",id:"version-0.15.x/api/graphql-migrations/interfaces/_abstract_getcolumntypefromscalar_.tablecolumntypedescriptor",isDocsHomePage:!1,title:"TableColumnTypeDescriptor",description:"Hierarchy",source:"@site/versioned_docs/version-0.15.x/api/graphql-migrations/interfaces/_abstract_getcolumntypefromscalar_.tablecolumntypedescriptor.md",permalink:"/docs/api/graphql-migrations/interfaces/_abstract_getcolumntypefromscalar_.tablecolumntypedescriptor",editUrl:"https://github.com/aerogear/graphback/edit/master/website/versioned_docs/version-0.15.x/api/graphql-migrations/interfaces/_abstract_getcolumntypefromscalar_.tablecolumntypedescriptor.md",version:"0.15.x",sidebar_label:"TableColumnTypeDescriptor"},p=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Index",id:"index",children:[{value:"Properties",id:"properties",children:[]}]},{value:"Properties",id:"properties-1",children:[{value:"args",id:"args",children:[]},{value:"type",id:"type",children:[]}]}],l={rightToc:p};function b(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"TableColumnTypeDescriptor"))),Object(c.b)("h2",{id:"index"},"Index"),Object(c.b)("h3",{id:"properties"},"Properties"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/api/graphql-migrations/interfaces/_abstract_getcolumntypefromscalar_.tablecolumntypedescriptor#args"}),"args")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/api/graphql-migrations/interfaces/_abstract_getcolumntypefromscalar_.tablecolumntypedescriptor#type"}),"type"))),Object(c.b)("h2",{id:"properties-1"},"Properties"),Object(c.b)("h3",{id:"args"},"args"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"args"),": ",Object(c.b)("em",{parentName:"p"},"any[]")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/b39280e7/packages/graphql-migrations/src/abstract/getColumnTypeFromScalar.ts#L13"}),"abstract/getColumnTypeFromScalar.ts:13"))),Object(c.b)("p",null,"Builder function arguments."),Object(c.b)("hr",null),Object(c.b)("h3",{id:"type"},"type"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"type"),": ",Object(c.b)("em",{parentName:"p"},Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"/docs/api/graphql-migrations/modules/_abstract_tablecolumn_#tablecolumntype"}),"TableColumnType")," | string")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/b39280e7/packages/graphql-migrations/src/abstract/getColumnTypeFromScalar.ts#L9"}),"abstract/getColumnTypeFromScalar.ts:9"))),Object(c.b)("p",null,"Knex column builder function name."))}b.isMDXComponent=!0},765:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return d}));var a=r(0),n=r.n(a);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},c=Object.keys(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=n.a.createContext({}),b=function(e){var t=n.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=b(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=b(r),m=a,d=s["".concat(o,".").concat(m)]||s[m]||u[m]||c;return r?n.a.createElement(d,i(i({ref:t},l),{},{components:r})):n.a.createElement(d,i({ref:t},l))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,o=new Array(c);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var l=2;l<c;l++)o[l]=r[l];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);