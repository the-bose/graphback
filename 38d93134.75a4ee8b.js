(window.webpackJsonp=window.webpackJsonp||[]).push([[155],{209:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var a=n(2),i=n(6),o=(n(0),n(765)),r={id:"soft-delete",title:"Soft Deletes with delta queries",sidebar_label:"Setting up Soft Deletion"},c={unversionedId:"datasync/soft-delete",id:"version-0.15.x/datasync/soft-delete",isDocsHomePage:!1,title:"Soft Deletes with delta queries",description:"This is the simplest strategy for Data Synchronization that is also quite straightforward to set up.",source:"@site/versioned_docs/version-0.15.x/datasync/soft-delete.md",permalink:"/docs/datasync/soft-delete",editUrl:"https://github.com/aerogear/graphback/edit/master/website/versioned_docs/version-0.15.x/datasync/soft-delete.md",version:"0.15.x",sidebar_label:"Setting up Soft Deletion",sidebar:"version-0.15.x/docs",previous:{title:"Data Synchronization",permalink:"/docs/datasync/intro"},next:{title:"DataSyncProvider",permalink:"/docs/api/graphback-datasync/interfaces/_providers_datasyncprovider_.datasyncprovider"}},l=[{value:"Setup",id:"setup",children:[{value:"Annotate the required models",id:"annotate-the-required-models",children:[]},{value:"Modify the template to support Data Synchronization",id:"modify-the-template-to-support-data-synchronization",children:[]}]},{value:"Issuing Delta/Sync queries from client",id:"issuing-deltasync-queries-from-client",children:[]},{value:"Advanced topics",id:"advanced-topics",children:[{value:"<code>@delta</code> annotation",id:"delta-annotation",children:[]}]}],d={rightToc:l};function s(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This is the simplest strategy for Data Synchronization that is also quite straightforward to set up."),Object(o.b)("h2",{id:"setup"},"Setup"),Object(o.b)("p",null,"Start off with the official Graphback template for MongoDB ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://GitHub.com/aerogear/graphback/tree/master/templates/ts-apollo-mongodb-backend"}),Object(o.b)("em",{parentName:"a"},"here"))," to follow along. Adding this strategy is relatively simple, consisting of the following two steps:"),Object(o.b)("h3",{id:"annotate-the-required-models"},"Annotate the required models"),Object(o.b)("p",null,"Add the ",Object(o.b)("inlineCode",{parentName:"p"},"@datasync")," annotation to your model(s) in your GraphQL SDL found in the ",Object(o.b)("inlineCode",{parentName:"p"},"model")," folder:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql",metastring:"{3}","{3}":!0}),'""" \n@model\n@datasync\n"""\ntype Comment {\n  id: ID!\n  text: String\n  description: String\n}\n')),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"@datasync")," annotation ensures consistency of your data and gives you delta queries."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"The ",Object(o.b)("inlineCode",{parentName:"p"},"@datasync")," annotation is a shorthand for two annotations ",Object(o.b)("inlineCode",{parentName:"p"},"@versioned")," and ",Object(o.b)("inlineCode",{parentName:"p"},"@delta"),". Refer to the last section for details."))),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"@datasync")," transforms your model by adding two fields: ",Object(o.b)("inlineCode",{parentName:"p"},"updatedAt")," and ",Object(o.b)("inlineCode",{parentName:"p"},"createdAt")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql",metastring:"{9-10}","{9-10}":!0}),'""" \n@model\n@datasync \n"""\ntype Comment {\n  id: ID!\n  text: String\n  description: String\n  createdAt: String\n  updatedAt: String\n}\n')),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"@datasync")," annotation adds a ",Object(o.b)("inlineCode",{parentName:"p"},"sync")," query or a delta query:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),"type Query {\n  syncComments(lastSync: String!, filter: CommentFilter): CommentDeltaList!\n}\n")),Object(o.b)("p",null,"This allows you to get all the changed documents (updated and deleted) in a collection since the ",Object(o.b)("inlineCode",{parentName:"p"},"lastSync")," timestamp. Internally this uses the ",Object(o.b)("inlineCode",{parentName:"p"},"updatedAt")," database field to check if any documents in the database have been modified, by comparing client provided ",Object(o.b)("inlineCode",{parentName:"p"},"lastSync")," timestamp value."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"The ",Object(o.b)("inlineCode",{parentName:"p"},"sync")," query also accepts a filter argument for filtering"))),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"@datasync")," annotation also adds a ",Object(o.b)("inlineCode",{parentName:"p"},"Delta")," type and a ",Object(o.b)("inlineCode",{parentName:"p"},"DeltaList")," type:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),"type CommentDelta {\n  id: ID!\n  text: String\n  description: String\n  createdAt: String\n  updatedAt: String\n  _deleted: Boolean\n}\n\ntype CommentDeltaList {\n  items: [CommentDelta]!\n  lastSync: String\n}\n")),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"Delta")," type for a model consists of all of the model's transformed properties, as well as a ",Object(o.b)("inlineCode",{parentName:"p"},"_deleted")," field which is used internally to mark documents as deleted in the database. Thus ",Object(o.b)("inlineCode",{parentName:"p"},"delete")," mutations only mark documents with ",Object(o.b)("inlineCode",{parentName:"p"},"_deleted: true")," instead of actually removing them."),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"DeltaList")," is a container for ",Object(o.b)("inlineCode",{parentName:"p"},"Delta")," type, which also returns a ",Object(o.b)("inlineCode",{parentName:"p"},"lastSync")," timestamp, that can be used in a subsequent ",Object(o.b)("inlineCode",{parentName:"p"},"sync")," query."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},Object(o.b)("inlineCode",{parentName:"p"},"Soft Deletes")," strategy can only get you the latest version of changed documents ignoring any in-between states that may have transpired between ",Object(o.b)("inlineCode",{parentName:"p"},"lastSync")," and now."))),Object(o.b)("h3",{id:"modify-the-template-to-support-data-synchronization"},"Modify the template to support Data Synchronization"),Object(o.b)("p",null,"In the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/aerogear/graphback/blob/master/templates/ts-apollo-mongodb-backend/src/index.ts"}),Object(o.b)("inlineCode",{parentName:"a"},"src/index.ts"))," file of the template, use  ",Object(o.b)("inlineCode",{parentName:"p"},"DataSyncPlugin")," and compliant data sources in ",Object(o.b)("inlineCode",{parentName:"p"},"buildGraphbackAPI"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"import { createDataSyncMongoDbProvider, createDataSyncCRUDService, DataSyncPlugin } from '@graphback/datasync'\n\n\nconst { typeDefs, resolvers, contextCreator } = buildGraphbackAPI(modelDefs, {\n    dataProviderCreator: createDataSyncMongoDbProvider(db),\n    serviceCreator: createDataSyncCRUDService({ pubSub: new PubSub() }),\n    plugins: [\n        new DataSyncPlugin()\n    ]\n});\n")),Object(o.b)("p",null,"The data sources provided by ",Object(o.b)("inlineCode",{parentName:"p"},"@graphback/datasync")," ensure that the documents are only marked with ",Object(o.b)("inlineCode",{parentName:"p"},"_deleted: true")," instead of being removed from the database, meaning that a compatible client can issue a ",Object(o.b)("inlineCode",{parentName:"p"},"sync")," query to obtain information about this deletion."),Object(o.b)("h2",{id:"issuing-deltasync-queries-from-client"},"Issuing Delta/Sync queries from client"),Object(o.b)("p",null,"As an example consider the usecase when your application has stayed offline for a while. You can then use the ",Object(o.b)("inlineCode",{parentName:"p"},"sync<Type>s")," query to retrieve only the changed documents rather than having to re-fetch all of the documents."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),'query {\n  syncComments(lastSync: "1590679886048") {\n      id\n      text\n      description\n      createdAt\n      updatedAt\n      _deleted\n  }\n}\n')),Object(o.b)("p",null,"As an example response you might get:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "data": {\n    "syncComments": {\n      "items": [\n        {\n          "id": "5ee0a1da7f1f39313744185a",\n          "text": "First!",\n          "description": null,\n          "createdAt": "1591779802551",\n          "updatedAt": "1591852693075",\n          "_deleted": true\n        },\n        {\n          "id": "5ee0a67345beff3862220be4",\n          "text": "Second!",\n          "description": null,\n          "createdAt": "1591780979988",\n          "updatedAt": "1591780979988",\n          "_deleted": false\n        }\n      ],\n      "lastSync": "1591852700920"\n    }\n  }\n}\n')),Object(o.b)("p",null,"The response is a list of the latest versions of the changed  documents along with a ",Object(o.b)("inlineCode",{parentName:"p"},"_deleted")," flag that is set to ",Object(o.b)("inlineCode",{parentName:"p"},"true")," if the document has been deleted since ",Object(o.b)("inlineCode",{parentName:"p"},"lastSync")," and ",Object(o.b)("inlineCode",{parentName:"p"},"false")," otherwise. The response also contains a ",Object(o.b)("inlineCode",{parentName:"p"},"lastSync")," timestamp which can be used in the next ",Object(o.b)("inlineCode",{parentName:"p"},"syncX")," query."),Object(o.b)("p",null,'In the example response, we get that the "First!" comment has been deleted, while a new comment "Second!" has been created.'),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"There is no support for querying relationships through a delta query, all relationship fields are removed when constructing a delta Type."))),Object(o.b)("p",null,"Taking an example model definition with a ",Object(o.b)("inlineCode",{parentName:"p"},"oneToMany")," relationship from the ",Object(o.b)("inlineCode",{parentName:"p"},"Note")," type to the ",Object(o.b)("inlineCode",{parentName:"p"},"Comment")," type:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),'""" @model """\ntype Note {\n  id: ID!\n  title: String!\n  """\n  @oneToMany(field: \'note\')\n  """\n  comments: [Comment]!\n}\n\n""" \n@model\n@datasync\n"""\ntype Comment {\n  id: ID!\n  text: String\n}\n')),Object(o.b)("p",null,"Since the ",Object(o.b)("inlineCode",{parentName:"p"},"Comment")," type has a ",Object(o.b)("inlineCode",{parentName:"p"},"@datasync")," annotation, Graphback will construct a ",Object(o.b)("inlineCode",{parentName:"p"},"CommentDelta")," type as follows:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),"type CommentDelta {\n  id: ID!\n  text: String\n  description: String\n  createdAt: String\n  updatedAt: String\n  _deleted: Boolean\n}\n")),Object(o.b)("p",null,"Notice that there are is no relationship field in the ",Object(o.b)("inlineCode",{parentName:"p"},"CommentDelta")," type."),Object(o.b)("h2",{id:"advanced-topics"},"Advanced topics"),Object(o.b)("h3",{id:"delta-annotation"},Object(o.b)("inlineCode",{parentName:"h3"},"@delta")," annotation"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"@datasync")," annotation provided by ",Object(o.b)("inlineCode",{parentName:"p"},"@graphback/datasync")," is a shorthand for two separate annotations: ",Object(o.b)("inlineCode",{parentName:"p"},"@delta")," and ",Object(o.b)("inlineCode",{parentName:"p"},"@versioned"),". Vanilla Graphback supports ",Object(o.b)("inlineCode",{parentName:"p"},"@versioned")," out of the box, see ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"../metadata.md"}),"this")," page."),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"@delta")," annotation is only provided by the ",Object(o.b)("inlineCode",{parentName:"p"},"@graphback/datasync")," package. However, we do not support using this annotation on it's own without ",Object(o.b)("inlineCode",{parentName:"p"},"@versioned"),"."),Object(o.b)("h4",{id:"example"},"Example"),Object(o.b)("p",null,"Replacing ",Object(o.b)("inlineCode",{parentName:"p"},"@datasync")," in any the above examples with ",Object(o.b)("inlineCode",{parentName:"p"},"@versioned")," and ",Object(o.b)("inlineCode",{parentName:"p"},"@delta")," yields the exact same results, for example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),'""" \n@model\n@versioned\n@delta\n"""\ntype Comment {\n  id: ID!\n  text: String\n  description: String\n}\n')),Object(o.b)("p",null,"This model exactly yields all of the type-definitions outlined above:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),'""" \n@model\n@versioned\n@delta \n"""\ntype Comment {\n  id: ID!\n  text: String\n  description: String\n  createdAt: String\n  updatedAt: String\n}\n')),Object(o.b)("p",null,"Similarly, this will also yield a ",Object(o.b)("inlineCode",{parentName:"p"},"Delta")," type, a ",Object(o.b)("inlineCode",{parentName:"p"},"DeltaList")," type and a ",Object(o.b)("inlineCode",{parentName:"p"},"sync")," query."))}s.isMDXComponent=!0},765:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return u}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=i.a.createContext({}),s=function(e){var t=i.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return i.a.createElement(d.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,u=p["".concat(r,".").concat(m)]||p[m]||b[m]||o;return n?i.a.createElement(u,c(c({ref:t},d),{},{components:n})):i.a.createElement(u,c({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var d=2;d<o;d++)r[d]=n[d];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);