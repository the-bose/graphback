(window.webpackJsonp=window.webpackJsonp||[]).push([[119],{1083:function(e,a,n){"use strict";n.d(a,"a",(function(){return b})),n.d(a,"b",(function(){return u}));var t=n(0),r=n.n(t);function o(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function l(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?l(Object(n),!0).forEach((function(a){o(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function s(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),p=function(e){var a=r.a.useContext(c),n=a;return e&&(n="function"==typeof e?e(a):i(i({},a),e)),n},b=function(e){var a=p(e.components);return r.a.createElement(c.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},h=r.a.forwardRef((function(e,a){var n=e.components,t=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),b=p(n),h=t,u=b["".concat(l,".").concat(h)]||b[h]||d[h]||o;return n?r.a.createElement(u,i(i({ref:a},c),{},{components:n})):r.a.createElement(u,i({ref:a},c))}));function u(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var o=n.length,l=new Array(o);l[0]=h;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i.mdxType="string"==typeof e?e:t,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},169:function(e,a,n){"use strict";n.r(a),n.d(a,"frontMatter",(function(){return l})),n.d(a,"metadata",(function(){return i})),n.d(a,"rightToc",(function(){return s})),n.d(a,"default",(function(){return p}));var t=n(2),r=n(6),o=(n(0),n(1083)),l={id:"graphqlserve",title:"Running an API without code",sidebar_label:"API without code"},i={unversionedId:"graphqlserve/graphqlserve",id:"version-0.16.x/graphqlserve/graphqlserve",isDocsHomePage:!1,title:"Running an API without code",description:"With GraphQL Serve you can have a full featured GraphQL CRUD API with subscriptions and data synchronization running in just a few seconds without writing a single line of code - all you need is a data model .graphql file.",source:"@site/versioned_docs/version-0.16.x/graphqlserve/graphqlserve.md",slug:"/graphqlserve/graphqlserve",permalink:"/docs/graphqlserve/graphqlserve",editUrl:"https://github.com/aerogear/graphback/edit/master/website/versioned_docs/version-0.16.x/graphqlserve/graphqlserve.md",version:"0.16.x",sidebar_label:"API without code",sidebar:"version-0.16.x/docs",previous:{title:"GraphQL Migrations Filters",permalink:"/docs/graphql-migrations/filters"},next:{title:"Plugins Overview",permalink:"/docs/plugins/overview"}},s=[{value:"Installation",id:"installation",children:[]},{value:"Usage",id:"usage",children:[{value:"Running your codeless GraphQL server",id:"running-your-codeless-graphql-server",children:[]},{value:"CRUD",id:"crud",children:[]},{value:"Enable Data Synchronization",id:"enable-data-synchronization",children:[]},{value:"Printing your GraphQL schema",id:"printing-your-graphql-schema",children:[]},{value:"Usage Information",id:"usage-information",children:[]}]}],c={rightToc:s};function p(e){var a=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(t.a)({},c,n,{components:a,mdxType:"MDXLayout"}),Object(o.b)("p",null,"With GraphQL Serve you can have a full featured ",Object(o.b)("a",Object(t.a)({parentName:"p"},{href:"https://graphqlcrud.org/"}),"GraphQL CRUD")," API with subscriptions and data synchronization running in just a few seconds without writing a single line of code - all you need is a data model ",Object(o.b)("inlineCode",{parentName:"p"},".graphql")," file."),Object(o.b)("p",null,"GraphQL Serve is a CLI tool that leverages the power of Graphback to generate a codeless Node.js GraphQL API complete with schema and CRUD resolvers and an in-memory MongoDB database. "),Object(o.b)("h2",{id:"installation"},"Installation"),Object(o.b)("p",null,"You can install ",Object(o.b)("inlineCode",{parentName:"p"},"graphql-serve")," globally with npm:"),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"npm i -g graphql-serve\n")),Object(o.b)("p",null,"or with yarn:"),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"yarn global add graphql-serve\n")),Object(o.b)("p",null,"or run it with ",Object(o.b)("a",Object(t.a)({parentName:"p"},{href:"https://www.npmjs.com/package/npx"}),"npx"),": "),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"npx graphql-serve\n")),Object(o.b)("h2",{id:"usage"},"Usage"),Object(o.b)("p",null,"The bare minimum you need is a GraphQL file with your data models. Create a file called ",Object(o.b)("inlineCode",{parentName:"p"},"Note.graphql")," and add the following:"),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-graphql"}),'""" @model """\ntype Note {\n  _id: GraphbackObjectID!\n  title: String!\n  description: String\n  likes: Int\n}\n\nscalar GraphbackObjectID\n')),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"@model")," annotation indicates that ",Object(o.b)("inlineCode",{parentName:"p"},"Note")," is a data model and Graphback will generate resolvers, a CRUD service and data source for it. You can learn how to build more complex data models in ",Object(o.b)("a",Object(t.a)({parentName:"p"},{href:"../model/datamodel#model"}),"Data Model"),"."),Object(o.b)("h3",{id:"running-your-codeless-graphql-server"},"Running your codeless GraphQL server"),Object(o.b)("p",null,"To start your server, run the following command from the same directory as ",Object(o.b)("inlineCode",{parentName:"p"},"Note.graphql"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"gqlserve serve Note.graphql\n")),Object(o.b)("p",null,"This will start a GraphQL server on a random port using the ",Object(o.b)("inlineCode",{parentName:"p"},"Note.graphql")," data models we just added."),Object(o.b)("p",null,"You can customise the directory of the data models:"),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"gqlserve serve ./path/to/models\n")),Object(o.b)("p",null,"You can also specify where to load the data models from with a Glob pattern:"),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"gqlserve serve ./schema/**/*.graphql\n")),Object(o.b)("p",null,"You can specify which port to start the server on:"),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"$ gqlserve serve ./path/to/models --port 8080\n\nStarting server...\n\nListening at: http://localhost:8080/graphql\n")),Object(o.b)("h3",{id:"crud"},"CRUD"),Object(o.b)("p",null,"GraphQL Serve creates an in-memory CRUD API to give you queries, mutations and subscriptions for all your models using API patterns from ",Object(o.b)("a",Object(t.a)({parentName:"p"},{href:"https://graphqlcrud.org"}),"GraphQLCRUD"),"."),Object(o.b)("p",null,"Visit the ",Object(o.b)("a",Object(t.a)({parentName:"p"},{href:"../crud/overview"}),"CRUD section")," for an overview of the CRUD specification and guides on how to perform CRUD operations on your data."),Object(o.b)("h3",{id:"enable-data-synchronization"},"Enable Data Synchronization"),Object(o.b)("p",null,"GraphQL Serve can also operate on data sync models. Under the hood this uses the ",Object(o.b)("a",Object(t.a)({parentName:"p"},{href:"../datasync/intro"}),"Data Sync")," package.\nTo enable data synchronization, all we need to do is enable datasync capabilities on our models via the ",Object(o.b)("inlineCode",{parentName:"p"},"@datasync")," annotation."),Object(o.b)("p",null,"For the ",Object(o.b)("inlineCode",{parentName:"p"},"Note")," model defined above, this would look like: "),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-graphql"}),'""" \n@model\n@datasync \n"""\ntype Note {\n  _id: GraphbackObjectID!\n  title: String!\n  description: String\n  likes: Int\n}\n\nscalar GraphbackObjectID\n')),Object(o.b)("p",null,"Once we have a model with datasync capabilities, we can run our GraphQL server by enabling data synchronization as shown below:"),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"gqlserve serve Note.graphql --datasync\n")),Object(o.b)("p",null,"Conflict resolution strategies for datasync enabled models can be specified via the --conflict option:"),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"gqlserve serve Note.graphql --datasync --conflict=clientSideWins\n")),Object(o.b)("p",null,"This defaults to ClientSideWins, if unset."),Object(o.b)("p",null,"The TTL for delta tables, can also be set using the --deltaTTL option:"),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"gqlserve serve Note.graphql --datasync --deltaTTL=172800\n")),Object(o.b)("p",null,"This value defaults to ",Object(o.b)("inlineCode",{parentName:"p"},"172800")," when unused"),Object(o.b)("h3",{id:"printing-your-graphql-schema"},"Printing your GraphQL schema"),Object(o.b)("p",null,"Graphback receives your data models as an input and processes them to generate a GraphQL schema complete with additional types, queries, mutations and subscriptions."),Object(o.b)("p",null,"GraphQL Serve allows you to print the resulting schema in your terminal with the ",Object(o.b)("inlineCode",{parentName:"p"},"print-schema")," subcommand:"),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"$ gqlserve print-schema ./path/to/models\nGenerated schema:\n\n...\n")),Object(o.b)("h3",{id:"usage-information"},"Usage Information"),Object(o.b)("p",null,"This information is also provided with the command itself:"),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"$ gqlserve -h\ngqlserve <command>\n\nCommands:\n  gqlserve print-schema [modelDir]     Generate and print GraphQL schema from data\n                                   model files\n  gqlserve serve [modelDir] [options]  Generate and start GraphQL server from data\n                                   model files\n\nOptions:\n  -h, --help     Show help                                             [boolean]\n  -v, --version  Show version number                                   [boolean]\n")),Object(o.b)("p",null,"For the ",Object(o.b)("inlineCode",{parentName:"p"},"serve")," command:"),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"$ gqlserve serve -h\ngqlserve serve [modelDir] [options]\n\nGenerate and start GraphQL server from data model files\n\nPositionals:\n  modelDir, model  Directory to search for data models                  [string]\n\nOptions:\n  --port, -p        Specify the port on which to listen on              [number]\n  --datasync, --ds  Enable datasynchronization features                [boolean]\n  -h, --help        Show help                                          [boolean]\n  -v, --version     Show version number                                [boolean]\n\nExamples:\n  gqlserve serve . -p 8080  generate schema from data model files in current\n                            directory and start GraphQL server on port 8080\n")),Object(o.b)("p",null,"Also for ",Object(o.b)("inlineCode",{parentName:"p"},"print-schema")," command:"),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"$ gqlserve print-schema -h\ngqlserve print-schema [modelDir]\n\nGenerate and print GraphQL schema from data model files\n\nPositionals:\n  modelDir, model  Directory to search for data models                  [string]\n\nOptions:\n  -h, --help     Show help                                             [boolean]\n  -v, --version  Show version number                                   [boolean]\n\nExamples:\n  gqlserve print-schema modelDir  only display generated schema from data model\n                              files in modelDir directory and quit\n")))}p.isMDXComponent=!0}}]);