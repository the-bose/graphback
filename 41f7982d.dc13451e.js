(window.webpackJsonp=window.webpackJsonp||[]).push([[184],{238:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var a=n(2),i=n(6),r=(n(0),n(765)),o={id:"mutations",title:"Mutations",sidebar_label:"Mutations"},p={unversionedId:"crud/mutations",id:"version-0.15.x/crud/mutations",isDocsHomePage:!1,title:"Mutations",description:"Graphback provides three mutation types for every model.",source:"@site/versioned_docs/version-0.15.x/crud/mutations.md",permalink:"/docs/crud/mutations",editUrl:"https://github.com/aerogear/graphback/edit/master/website/versioned_docs/version-0.15.x/crud/mutations.md",version:"0.15.x",sidebar_label:"Mutations",sidebar:"version-0.15.x/docs",previous:{title:"Queries",permalink:"/docs/crud/queries"},next:{title:"Subscriptions",permalink:"/docs/crud/subscriptions"}},l=[{value:"Create",id:"create",children:[]},{value:"Update",id:"update",children:[]},{value:"Delete",id:"delete",children:[]}],c={rightToc:l};function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Graphback provides three mutation types for every model."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#create"}),Object(r.b)("inlineCode",{parentName:"a"},"create<Type>")),": create a new item in the database of and return the created object in the response."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#update"}),Object(r.b)("inlineCode",{parentName:"a"},"update<Type>")),": update an existing item in the database and return the updated object in the response."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#delete"}),Object(r.b)("inlineCode",{parentName:"a"},"delete<Type>")),": delete a single item in the database and return the deleted object in the response.")),Object(r.b)("h2",{id:"create"},"Create"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"create")," mutation allows the client to insert a new item in the database."),Object(r.b)("p",null,"The mutation follows the naming format ",Object(r.b)("inlineCode",{parentName:"p"},"create<Type>"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),"type Mutation {\n  createNote(input: CreateNoteInput!): Note\n}\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Arguments:")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"input"),": input type created by Graphback for creating a new ",Object(r.b)("inlineCode",{parentName:"li"},"Note")," object.")),Object(r.b)("p",null,"Graphback creates a ",Object(r.b)("inlineCode",{parentName:"p"},"Create<Type>Input")," input type for each of the data models you define, where the ",Object(r.b)("inlineCode",{parentName:"p"},"create")," configuration is enabled. Relationship object fields in models map to the foreign key field in the database. "),Object(r.b)("p",null,"Each input field in ",Object(r.b)("inlineCode",{parentName:"p"},"Create<Type>Input")," directly maps to the fields in the model. With the exception of the primary field, each field added to the input type preserves field nullability from the original model."),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Primary fields will be nullable in the input type as they are often auto-generated by the database."))),Object(r.b)("p",null,"Take the following ",Object(r.b)("inlineCode",{parentName:"p"},"Note")," model as an example."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),'""" @model """\ntype Note {\n  id: ID!\n  title: String!\n  description: String\n  """\n  @manyToOne(field: \'notes\', key: \'authorId\')\n  """\n  author: User\n}\n\n// highlight-start\ninput CreateNoteInput {\n  id: ID\n  title: String!\n  description: String\n  authorId: ID\n}\n// highlight-end\n')),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"CreateNoteInput")," input type is created from the ",Object(r.b)("inlineCode",{parentName:"p"},"Note")," model."),Object(r.b)("p",null,"Example of a typical create mutation on ",Object(r.b)("inlineCode",{parentName:"p"},"Note"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),'mutation {\n  createNote(input: {\n    title: "Do shopping",\n    description: "Get groceries for party",\n    authorId: 19\n  }) {\n    id\n    title\n    description\n    author {\n      id\n      name\n    }\n  }\n}\n')),Object(r.b)("p",null,"You can also perform ",Object(r.b)("inlineCode",{parentName:"p"},"create")," mutations on models with GraphQL type fields which map to a JSON column or an embedded document (MongoDB):"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),'""" @model """\ntype Note {\n  id: ID!\n  title: String!\n  description: String\n  metadata: NoteMetadata\n}\n\n"""Regular non-model GraphQL type"""\ntype NoteMetadata {\n  createdAt: String\n  updatedAt: String\n}\n\n// highlight-start\ninput CreateNoteInput {\n  id: ID\n  title: String!\n  description: String\n  metadata: CreateNoteMetadataInput\n}\n\ninput CreateNoteMetadataInput {\n  createdAt: String\n  updatedAt: String\n}\n// highlight-end\n')),Object(r.b)("p",null,"Graphback generates the appropriate input types for regular types that do not map to any database table/collection but are used as a field in a model."),Object(r.b)("p",null,"You can create a new ",Object(r.b)("inlineCode",{parentName:"p"},"Note")," with ",Object(r.b)("inlineCode",{parentName:"p"},"NoteMetadata")," in a single mutation:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),'mutation {\n  createNote(input: {\n    title: "Do shopping",\n    description: "Get groceries for party",\n    metadata: {\n      createdAt: "2340324024",\n      updatedAt: "2340324024"\n    }\n  }) {\n    id\n    title\n    description\n    metadata {\n      createdAt\n      updatedAt\n    }\n  }\n}\n')),Object(r.b)("h2",{id:"update"},"Update"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"update")," mutation allows the client to update an existing item in the database."),Object(r.b)("p",null,"The mutation follows the naming format ",Object(r.b)("inlineCode",{parentName:"p"},"update<Type>"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),"type Mutation {\n  updateNote(input: MutateNoteInput!): Note\n}\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Arguments:")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"input"),": input type created by Graphback for updating an existing ",Object(r.b)("inlineCode",{parentName:"li"},"Note")," object.")),Object(r.b)("p",null,"Graphback creates a ",Object(r.b)("inlineCode",{parentName:"p"},"Mutate<Type>Input")," input type for each of the data models you define, where either the ",Object(r.b)("inlineCode",{parentName:"p"},"update")," or ",Object(r.b)("inlineCode",{parentName:"p"},"delete")," configuration is enabled. Relationship object fields in models map to the foreign key field in the database. "),Object(r.b)("p",null,"With the exception of the primary field, all input fields are set to nullable to allow for partial updates. Graphback uses the primary field to ensure the correct item is being updated."),Object(r.b)("p",null,"Take the following ",Object(r.b)("inlineCode",{parentName:"p"},"Note")," model as an example."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),'""" @model """\ntype Note {\n  id: ID!\n  title: String!\n  description: String\n  """\n  @manyToOne(field: \'notes\', key: \'authorId\')\n  """\n  author: User\n}\n\n// highlight-start\ninput MutateNoteInput {\n  id: ID!\n  title: String\n  description: String\n  authorId: ID\n}\n// highlight-end\n')),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"MutateNoteInput")," input type is created from the ",Object(r.b)("inlineCode",{parentName:"p"},"Note")," model."),Object(r.b)("p",null,"Example of a typical create mutation on ",Object(r.b)("inlineCode",{parentName:"p"},"Note"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),'mutation {\n  updateNote(input: {\n    id: 10,\n    description: "Get remainder of groceries"\n  }) {\n    id\n    title\n    description\n    author {\n      id\n      name\n    }\n  }\n}\n')),Object(r.b)("p",null,"You can also perform ",Object(r.b)("inlineCode",{parentName:"p"},"update")," mutations on models with GraphQL type fields which map to a JSON column or an embedded document (MongoDB):"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),'""" @model """\ntype Note {\n  id: ID!\n  title: String!\n  description: String\n  metadata: NoteMetadata\n}\n\n"""Regular non-model GraphQL type"""\ntype NoteMetadata {\n  createdAt: String\n  updatedAt: String\n}\n\n// highlight-start\ninput MutateNoteInput {\n  id: ID!\n  title: String\n  description: String\n  metadata: MutateNoteMetadataInput\n}\n\ninput MutateNoteMetadataInput {\n  createdAt: String\n  updatedAt: String\n}\n// highlight-end\n')),Object(r.b)("p",null,"Graphback generates the appropriate input types for regular GraphQL types that do not map to any database table/collection but are used as a field in a model."),Object(r.b)("p",null,"You can update an existing ",Object(r.b)("inlineCode",{parentName:"p"},"Note")," with ",Object(r.b)("inlineCode",{parentName:"p"},"NoteMetadata")," in a single mutation:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),'mutation {\n  updateNote(input: {\n    id: 10,\n    description: "Get prosecco for party",\n    metadata: {\n      createdAt: "2340349036",\n      updatedAt: "2340349036"\n    }\n  }) {\n    id\n    title\n    description\n    metadata {\n      createdAt\n      updatedAt\n    }\n  }\n}\n')),Object(r.b)("h2",{id:"delete"},"Delete"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"delete")," mutation allows the client to delete an existing item from the database."),Object(r.b)("p",null,"The mutation follows the naming format ",Object(r.b)("inlineCode",{parentName:"p"},"delete<Type>"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),"type Mutation {\n  deleteNote(input: MutateNoteInput!): Note\n}\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Arguments:")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"input"),": input type created by Graphback for updating an existing ",Object(r.b)("inlineCode",{parentName:"li"},"Note")," object.")),Object(r.b)("p",null,"Graphback creates a ",Object(r.b)("inlineCode",{parentName:"p"},"Mutate<Type>Input")," input type for each of the data models you define, when either the the ",Object(r.b)("inlineCode",{parentName:"p"},"delete")," or ",Object(r.b)("inlineCode",{parentName:"p"},"update")," CRUD configuration is enabled."),Object(r.b)("p",null,"With the exception of the primary field, all input fields are set to nullable. Graphback uses the value from the primary field to ensure the correct is being deleted."),Object(r.b)("p",null,"Take the following ",Object(r.b)("inlineCode",{parentName:"p"},"Note")," model as an example."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),'""" @model """\ntype Note {\n  id: ID!\n  title: String!\n  description: String\n}\n\n// highlight-start\ninput MutateNoteInput {\n  id: ID!\n  title: String\n  description: String\n}\n// highlight-end\n')),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"MutateNoteInput")," input type is created from the ",Object(r.b)("inlineCode",{parentName:"p"},"Note")," model. Each input field in ",Object(r.b)("inlineCode",{parentName:"p"},"MutateNoteInput")," maps to the fields defined in ",Object(r.b)("inlineCode",{parentName:"p"},"Note"),"."),Object(r.b)("p",null,"Example of a typical ",Object(r.b)("inlineCode",{parentName:"p"},"delete")," mutation on ",Object(r.b)("inlineCode",{parentName:"p"},"Note"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),"mutation {\n  deleteNote(input: {\n    id: 10\n  }) {\n    id\n  }\n}\n")))}b.isMDXComponent=!0},765:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),b=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},d=function(e){var t=b(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},s=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=b(n),s=a,m=d["".concat(o,".").concat(s)]||d[s]||u[s]||r;return n?i.a.createElement(m,p(p({ref:t},c),{},{components:n})):i.a.createElement(m,p({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=s;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var c=2;c<r;c++)o[c]=n[c];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);