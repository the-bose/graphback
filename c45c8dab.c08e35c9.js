(window.webpackJsonp=window.webpackJsonp||[]).push([[793],{1083:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),c=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=c(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),b=n,f=u["".concat(i,".").concat(b)]||u[b]||d[b]||o;return r?a.a.createElement(f,s(s({ref:t},p),{},{components:r})):a.a.createElement(f,s({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},847:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return c}));var n=r(2),a=r(6),o=(r(0),r(1083)),i={id:"filters",title:"GraphQL Migrations Filters",sidebar_label:"Operation Filter"},s={unversionedId:"graphql-migrations/filters",id:"version-0.14.x/graphql-migrations/filters",isDocsHomePage:!1,title:"GraphQL Migrations Filters",description:"It is possible to write custom hooks that can be used to filter out undesirable database operations such as those that could lead to data loss from being executed. The filter is an interface defining a function that takes take the operation and returns true to execute the operation and false otherwise. By default, GraphQL Migrations does not apply any filter.",source:"@site/versioned_docs/version-0.14.x/graphql-migrations/operation-filters.md",slug:"/graphql-migrations/filters",permalink:"/docs/0.14.x/graphql-migrations/filters",editUrl:"https://github.com/aerogear/graphback/edit/master/website/versioned_docs/version-0.14.x/graphql-migrations/operation-filters.md",version:"0.14.x",sidebar_label:"Operation Filter",sidebar:"version-0.14.x/docs",previous:{title:"Custom logic with Plugins",permalink:"/docs/0.14.x/graphql-migrations/plugins"},next:{title:"Running an API without code",permalink:"/docs/0.14.x/graphqlserve/graphqlserve"}},l=[],p={rightToc:l};function c(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"It is possible to write custom hooks that can be used to filter out undesirable database operations such as those that could lead to data loss from being executed. The filter is an interface defining a function that takes take the operation and returns ",Object(o.b)("inlineCode",{parentName:"p"},"true")," to execute the operation and false otherwise. By default, GraphQL Migrations does not apply any filter. "),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"export interface MigrateOperationFilter {\n  filter(operations: Operation[]): Operation[];\n};\n")),Object(o.b)("p",null,"For example, if we want to prevent deletion of the tables and columns we can write the following filter to remove ",Object(o.b)("inlineCode",{parentName:"p"},"table.drop")," and ",Object(o.b)("inlineCode",{parentName:"p"},"column.drop")," operations from array:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"/**\n * Suppress table and column deletion operations that are not going to cause data loss when field was removed accidentially.\n */\nexport const removeDeletionOperations: MigrateOperationFilter = {\n  filter: (operations: Operation[]) => {\n    return operations.filter((op: Operation) => op.type !== 'table.drop' && op.type !== 'column.drop'\n  }\n};\n")),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"removeDeletionOperations")," filter can then be used in the ",Object(o.b)("inlineCode",{parentName:"p"},"migrateDB")," method as follows:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"....\n\nmigrateDB(dbConfig, schema, {\n  operationFilter: removeDeletionOperations\n})\n\n....\n")),Object(o.b)("p",null,"GraphQL Migrations has you covered and provides a ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/aerogear/graphback/blob/master/packages/graphql-migrations/src/plugin/MigrateOperationFilter.ts"}),Object(o.b)("inlineCode",{parentName:"a"},"removeNonSafeOperationsFilter"))," to avoid doing non safe operations such as table deletion and renaming. "))}c.isMDXComponent=!0}}]);