(window.webpackJsonp=window.webpackJsonp||[]).push([[544],{760:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),o=r(773),i=r(769),c=r(777),l=r.n(c),s=r(771),u=r(770),m=r(597),h=r.n(m);function d(e){var t=e.siteConfig;return n.a.createElement("header",{className:l()("hero hero--primary",h.a.heroBanner,h.a.heroGraphback)},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col col--6 col--offset-3 text--left"},n.a.createElement("div",{className:h.a.fadeIn},n.a.createElement("div",{className:h.a.heroImage},n.a.createElement("img",{src:"/img/logo.png",alt:"logo"})),n.a.createElement("p",{className:"hero__title"},t.tagline),n.a.createElement("ul",null,n.a.createElement("li",null,"Out of the Box Node.js GraphQL API based on your model"),n.a.createElement("li",null,"Full control over the generated code or runtime framework"),n.a.createElement("li",null,"Manages complexity of database management")),n.a.createElement("div",{className:h.a.buttons},n.a.createElement(u.a,{className:l()("button button--primary button--lg button--rounded",h.a.getStarted),to:Object(s.a)("docs/introduction")},"Get Started")))))))}var f=r(598),p=r.n(f),v=[{title:n.a.createElement(n.a.Fragment,null,"Define your model"),imageUrl:"img/input.png",description:n.a.createElement(n.a.Fragment,null)},{title:n.a.createElement(n.a.Fragment,null,"Choose your stack"),imageUrl:"img/config.png",description:n.a.createElement(n.a.Fragment,null)},{title:n.a.createElement(n.a.Fragment,null,"Deploy"),imageUrl:"img/rocket.png",description:n.a.createElement(n.a.Fragment,null)}];function g(e){var t=e.imageUrl,r=e.title,a=e.description,o=Object(s.a)(t);return n.a.createElement("div",{className:"text--center"},o&&n.a.createElement("div",{className:"text--center"},n.a.createElement("img",{className:p.a.featureImage,src:o,alt:r})),n.a.createElement("h3",{className:p.a.featureTitle},r),n.a.createElement("p",null,a))}function y(){return n.a.createElement("div",{className:p.a.splitContainer},n.a.createElement("div",{className:l()(p.a.leftSplit,p.a.featureSticky)},n.a.createElement("div",{id:"sticky",className:l()(p.a.stickyContent)},n.a.createElement("h2",{className:"hero__subtitle"},"Graphback Workflow"),n.a.createElement("p",null,"Graphback provides command line client for generating fully functional GraphQL enabled Node.js server and client side applications. Graphback will generate production-ready application based on your GraphQL types in seconds."))),n.a.createElement("div",{className:p.a.rightSplit},n.a.createElement("div",{className:l()(p.a.splitRow,p.a.before)}),v&&v.length&&v.map((function(e,t){return n.a.createElement("div",{className:p.a.splitRow,key:t},n.a.createElement(g,e))})),n.a.createElement("div",{className:l()(p.a.splitRow,p.a.after)})))}var E=r(802),b=r.n(E);function w(e,t,r,a,n,o,i){try{var c=e[o](i),l=c.value}catch(s){return void r(s)}c.done?t(l):Promise.resolve(l).then(a,n)}function N(e){return function(){var t=this,r=arguments;return new Promise((function(a,n){var o=e.apply(t,r);function i(e){w(o,a,n,i,c,"next",e)}function c(e){w(o,a,n,i,c,"throw",e)}i(void 0)}))}}var k=r(599),x=r.n(k);function L(){var e=function(){document.getElementById("underscore").classList.toggle("hidden")};return Object(a.useEffect)((function(){var t=setInterval(e,400);return function(){return clearInterval(t)}})),n.a.createElement("div",{id:"underscore",className:x.a.underscore},"_")}function G(e){var t=e.phrase,r=1,o=!1,i=!1,c=function(){var e=N(b.a.mark((function e(){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return document.getElementById("text").innerHTML=t.substring(0,r),a=o?u:s,e.next=5,m();case 5:l()||a();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(){return i||r===t.length+1&&!o||0===r&&o},s=function(){r<t.length+1&&r++},u=function(){r>0&&r--},m=function(){var e=N(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o||r!==t.length+1){e.next=3;break}return e.next=3,h();case 3:if(!o||0!==r){e.next=6;break}return e.next=6,h();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=function(){return o=!o,i=!0,new Promise((function(e){setTimeout((function(){i=!1,e()}),3e3)}))};return Object(a.useEffect)((function(){var e=setInterval(c,120);return function(){return clearInterval(e)}})),n.a.createElement("span",{id:"text"})}function j(){return n.a.createElement("div",null,n.a.createElement("div",{className:x.a.terminalHeader},n.a.createElement("p",null,"Quick start!")),n.a.createElement("div",{className:x.a.terminal},n.a.createElement("span",null,">\xa0\xa0"),n.a.createElement(G,{phrase:"npx graphback-cli init your-app"}),n.a.createElement(L,null)))}var _=r(600),O=r.n(_);function F(e){var t,r=e.open,a=e.close;return n.a.createElement("div",{className:l()(O.a.modalWindow,{"hide-modal":!r})},n.a.createElement("div",{className:O.a.modalBackground}),n.a.createElement("a",{href:"#video",className:O.a.close,onClick:a},"close"),n.a.createElement("div",{className:O.a.modalContent},n.a.createElement("div",{className:O.a.youtubeWrapper},n.a.createElement("iframe",((t={className:O.a.youtubeIFrame,frameBorder:"0",width:"560",height:"310",scrolling:"no",marginHeight:"0",marginWidth:"0",src:"https://www.youtube.com/embed/z3hUF5egjT4"}).frameBorder="0",t.allowFullScreen=!0,t.align="middle",t)))))}function I(){var e=Object(a.useState)(!1),t=e[0],r=e[1],o=function(e){e.preventDefault(),r(!t)};return n.a.createElement(n.a.Fragment,null,n.a.createElement(F,{open:t,close:o}),n.a.createElement("section",{id:"video",className:O.a.videoSection},n.a.createElement("div",{className:"text--center"},n.a.createElement("h2",{className:O.a.subtitle},"Graphback in 10 minutes"),n.a.createElement("div",{className:O.a.videoComponent},n.a.createElement("a",{href:"#",className:O.a.play,onClick:o},n.a.createElement("img",{src:Object(s.a)("img/play.png"),alt:""}))))))}var S=[{imageUrl:"img/plugin-blog.jpg",title:"Graphback - Low Code, GraphQL based API suited for your needs",content:"The main purpose of Graphback is to provide an autogenerated GraphQL based CRUD API for developers and their various use cases. Graphback differs from other GraphQL based solutions by utilizing code generation and application templates as a quick way to get started.",link:"https://medium.com/@wtr/graphback-plugin-based-realtime-database-generator-78f4f608b81e"},{imageUrl:"img/graphqlserve.jpeg",title:"Setup a GraphQL server in seconds using graphql-serve",content:"With just one command, you can have a GraphQL server running on your machine that you can use to test a frontend application or just test GraphQL. GraphQL serve supports data loading and has comprehensive support for all types of relationships",link:"https://medium.com/@shibanidash71/setup-a-graphql-server-in-seconds-using-graphql-serve-96c5b488de41"},{imageUrl:"img/graphback-blog.png",title:"The evolution of the GraphQL ecosystem \u2014 Graphback",content:"The target of Graphback is to make sample applications working with your business logic by utilizing application templates and code generation. Developers can provide GraphQL schema as input and the command-line client will generate data access methods on top of the chosen stack",link:"https://medium.com/@wtr/the-evolution-of-the-graphql-ecosystem-graphback-506a1d0d4dfb"}];function C(e){var t=e.imageUrl,r=e.title,a=e.content;return n.a.createElement("div",{className:"card-demo"},n.a.createElement("div",{className:"card",style:{borderRadius:0,padding:"2rem",border:"1px solid #f5f5f5"}},n.a.createElement("div",{className:"card__image"},n.a.createElement("img",{src:Object(s.a)(t),alt:"Blog card image"})),n.a.createElement("div",{className:"card__body"},n.a.createElement("h4",null,r),n.a.createElement("small",null,a))))}function Q(){return n.a.createElement("section",{style:{minHeight:"100vh",display:"flex",justifyContent:"center",alignItems:"center",background:"#fff",padding:"2em 0"}},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col col--12"},n.a.createElement("h1",null,"Learn more"))),n.a.createElement("div",{className:"row"},S&&S.length&&S.map((function(e,t){return n.a.createElement("div",{className:"col col--4",key:t},n.a.createElement("a",{className:"card-anchor",href:e.link},n.a.createElement(C,e)))})))))}t.default=function(){var e=Object(i.a)().siteConfig,t=void 0===e?{}:e;return n.a.createElement(o.a,{title:t.title,description:"Graphback <head />"},n.a.createElement(d,{siteConfig:t}),n.a.createElement(y,null),n.a.createElement(j,null),n.a.createElement(I,null),n.a.createElement(Q,null))}},802:function(e,t,r){e.exports=r(803)},803:function(e,t,r){var a=function(e){"use strict";var t=Object.prototype,r=t.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},n=a.iterator||"@@iterator",o=a.asyncIterator||"@@asyncIterator",i=a.toStringTag||"@@toStringTag";function c(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(G){c=function(e,t,r){return e[t]=r}}function l(e,t,r,a){var n=t&&t.prototype instanceof m?t:m,o=Object.create(n.prototype),i=new k(a||[]);return o._invoke=function(e,t,r){var a="suspendedStart";return function(n,o){if("executing"===a)throw new Error("Generator is already running");if("completed"===a){if("throw"===n)throw o;return L()}for(r.method=n,r.arg=o;;){var i=r.delegate;if(i){var c=b(i,r);if(c){if(c===u)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===a)throw a="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);a="executing";var l=s(e,t,r);if("normal"===l.type){if(a=r.done?"completed":"suspendedYield",l.arg===u)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(a="completed",r.method="throw",r.arg=l.arg)}}}(e,r,i),o}function s(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(G){return{type:"throw",arg:G}}}e.wrap=l;var u={};function m(){}function h(){}function d(){}var f={};f[n]=function(){return this};var p=Object.getPrototypeOf,v=p&&p(p(x([])));v&&v!==t&&r.call(v,n)&&(f=v);var g=d.prototype=m.prototype=Object.create(f);function y(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function E(e,t){var a;this._invoke=function(n,o){function i(){return new t((function(a,i){!function a(n,o,i,c){var l=s(e[n],e,o);if("throw"!==l.type){var u=l.arg,m=u.value;return m&&"object"==typeof m&&r.call(m,"__await")?t.resolve(m.__await).then((function(e){a("next",e,i,c)}),(function(e){a("throw",e,i,c)})):t.resolve(m).then((function(e){u.value=e,i(u)}),(function(e){return a("throw",e,i,c)}))}c(l.arg)}(n,o,a,i)}))}return a=a?a.then(i,i):i()}}function b(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,b(e,t),"throw"===t.method))return u;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var a=s(r,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,u;var n=a.arg;return n?n.done?(t[e.resultName]=n.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,u):n:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,u)}function w(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function N(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function k(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(w,this),this.reset(!0)}function x(e){if(e){var t=e[n];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,o=function t(){for(;++a<e.length;)if(r.call(e,a))return t.value=e[a],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:L}}function L(){return{value:void 0,done:!0}}return h.prototype=g.constructor=d,d.constructor=h,h.displayName=c(d,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,d):(e.__proto__=d,c(e,i,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},y(E.prototype),E.prototype[o]=function(){return this},e.AsyncIterator=E,e.async=function(t,r,a,n,o){void 0===o&&(o=Promise);var i=new E(l(t,r,a,n),o);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},y(g),c(g,i,"Generator"),g[n]=function(){return this},g.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var a=t.pop();if(a in e)return r.value=a,r.done=!1,r}return r.done=!0,r}},e.values=x,k.prototype={constructor:k,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(N),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function a(r,a){return i.type="throw",i.arg=e,t.next=r,a&&(t.method="next",t.arg=void 0),!!a}for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],i=o.completion;if("root"===o.tryLoc)return a("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),l=r.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return a(o.catchLoc,!0);if(this.prev<o.finallyLoc)return a(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return a(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return a(o.finallyLoc)}}}},abrupt:function(e,t){for(var a=this.tryEntries.length-1;a>=0;--a){var n=this.tryEntries[a];if(n.tryLoc<=this.prev&&r.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,u):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),u},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),N(r),u}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var a=r.completion;if("throw"===a.type){var n=a.arg;N(r)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:x(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),u}},e}(e.exports);try{regeneratorRuntime=a}catch(n){Function("r","regeneratorRuntime = r")(a)}}}]);