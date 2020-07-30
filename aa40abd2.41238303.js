(window.webpackJsonp=window.webpackJsonp||[]).push([[466],{519:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(2),a=n(6),o=(n(0),n(765)),i={id:"serverless",title:"Runtime API",sidebar_label:"Runtime API"},c={unversionedId:"intro/serverless",id:"version-0.12.x/intro/serverless",isDocsHomePage:!1,title:"Runtime API",description:"Graphback allows you to add a GraphQL API to your application without generating any code.",source:"@site/versioned_docs/version-0.12.x/intro/serverless.md",permalink:"/docs/0.12.x/intro/serverless",editUrl:"https://github.com/aerogear/graphback/edit/master/website/versioned_docs/version-0.12.x/intro/serverless.md",version:"0.12.x",sidebar_label:"Runtime API",sidebar:"version-0.12.x/docs",previous:{title:"Adding Graphback to your Node.js project",permalink:"/docs/0.12.x/intro/existingproject"},next:{title:"Running an API without code",permalink:"/docs/0.12.x/intro/graphqlserve"}},s=[{value:"Adding runtime layer to your application",id:"adding-runtime-layer-to-your-application",children:[]},{value:"Next steps",id:"next-steps",children:[]}],p={rightToc:s};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Graphback allows you to add a GraphQL API to your application without generating any code.\nGraphback package can be imported and used directly from your code or serverless handlers.\nSchema and resolvers are created in-code and are passed to an Apollo GraphQL or GraphQL.js server instance."),Object(o.b)("h2",{id:"adding-runtime-layer-to-your-application"},"Adding runtime layer to your application"),Object(o.b)("p",null,"To create GraphQL Layer at runtime developers need to initialize ",Object(o.b)("inlineCode",{parentName:"p"},"GraphbackRuntime")," instance as follows:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"\n    import { GraphbackRuntime, ModelDefinition, PgKnexDBDataProvider } from 'graphback'\n    import { PubSub } from 'graphql-subscriptions';\n\n    // Create provider using knex\n    class PostgreSQLRuntime extends GraphbackRuntime {\n      db: Knex<any, any[]>;\n\n      constructor(schema: string, config: GraphbackGeneratorConfig, db: Knex) {\n        super(schema, config);\n        this.db = db;\n      }\n\n      protected createDBProvider(model: ModelDefinition) {\n        return new PgKnexDBDataProvider(model.graphqlType, this.db);\n      }\n    }\n\n    const client = new Knex(...);\n    const graphbackOptions = {...}\n    const schemaText = `type Test ...`\n\n    const pubSub = new PubSub();\n    const serviceOverrides = {}\n    const runtimeEngine = new PostgreSQLRuntime(schemaText, graphbackConfig, client);\n    const runtime = runtimeEngine.buildRuntime(pubSub, {});\n\n  const executableSchema = makeExecutableSchema({\n    typeDefs: printSchema(runtime.schema),\n    resolvers: runtime.resolvers,\n    resolverValidationOptions: {\n      requireResolversForResolveType: false\n    }\n  });\n")),Object(o.b)("p",null,"See our ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/aerogear/graphback/blob/master/templates/ts-apollo-runtime-backend/src/runtime.ts"}),"TypeScript Apollo Runtime")," template for a fully functional example."),Object(o.b)("h2",{id:"next-steps"},"Next steps"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"To change the default application configuration see ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/0.12.x/intro/config"}),"Graphback Config"),".")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"See ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/0.12.x/intro/datamodel"}),"Defining your Data model")," for how to design your data model.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Graphback provides a number of different data sources which can be configured at application runtime. See ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"../db/datasources"}),"Data Sources"),".")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"You can migrate your database to match your schema by running ",Object(o.b)("inlineCode",{parentName:"p"},"graphback db"),". See ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/0.12.x/db/dbmigrations"}),"Database Migrations")," for more.*")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Run your application! \ud83d\ude80"))),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"NOTE"),": Database migrations only supports PostgreSQL databases.")))}l.isMDXComponent=!0},765:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),d=r,m=u["".concat(i,".").concat(d)]||u[d]||b[d]||o;return n?a.a.createElement(m,c(c({ref:t},p),{},{components:n})):a.a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);