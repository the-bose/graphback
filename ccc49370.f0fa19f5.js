(window.webpackJsonp=window.webpackJsonp||[]).push([[824],{1082:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(1092),m=t(1095),i=t(1088);var c=function(e){var a=e.nextItem,t=e.prevItem;return r.a.createElement("nav",{className:"pagination-nav","aria-label":"Blog post page navigation"},r.a.createElement("div",{className:"pagination-nav__item"},t&&r.a.createElement(i.a,{className:"pagination-nav__link",to:t.permalink},r.a.createElement("div",{className:"pagination-nav__sublabel"},"Newer Post"),r.a.createElement("div",{className:"pagination-nav__label"},"\xab ",t.title))),r.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},a&&r.a.createElement(i.a,{className:"pagination-nav__link",to:a.permalink},r.a.createElement("div",{className:"pagination-nav__sublabel"},"Older Post"),r.a.createElement("div",{className:"pagination-nav__label"},a.title," \xbb"))))},o=t(1104);a.default=function(e){var a=e.content,t=a.frontMatter,n=a.metadata,i=n.title,s=n.description,d=n.nextItem,v=n.prevItem,g=n.editUrl,u=t.hide_table_of_contents;return r.a.createElement(l.a,{title:i,description:s},a&&r.a.createElement("div",{className:"container margin-vert--lg"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--8 col--offset-2"},r.a.createElement(m.a,{frontMatter:t,metadata:n,isBlogPostPage:!0},r.a.createElement(a,null)),r.a.createElement("div",null,g&&r.a.createElement("a",{href:g,target:"_blank",rel:"noreferrer noopener"},r.a.createElement("svg",{fill:"currentColor",height:"1.2em",width:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 40 40",style:{marginRight:"0.3em",verticalAlign:"sub"}},r.a.createElement("g",null,r.a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"}))),"Edit this page")),(d||v)&&r.a.createElement("div",{className:"margin-vert--xl"},r.a.createElement(c,{nextItem:d,prevItem:v}))),!u&&a.rightToc&&r.a.createElement("div",{className:"col col--2"},r.a.createElement(o.a,{headings:a.rightToc})))))}},1095:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(1090),m=t(1083),i=t(1093),c=t(1088),o=t(1100),s=t(1089),d=t(47),v=t.n(d),g=["January","February","March","April","May","June","July","August","September","October","November","December"];a.a=function(e){var a,t,n,d,u,E=e.children,h=e.frontMatter,p=e.metadata,_=e.truncated,f=e.isBlogPostPage,b=void 0!==f&&f,N=p.date,k=p.permalink,w=p.tags,y=p.readingTime,I=h.author,x=h.title,M=h.image,L=h.keywords,C=h.author_url||h.authorURL,O=h.author_title||h.authorTitle,P=h.author_image_url||h.authorImageURL,R=Object(s.a)(M,{absolute:!0});return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,null,L&&L.length&&r.a.createElement("meta",{name:"keywords",content:L.join(",")}),M&&r.a.createElement("meta",{property:"og:image",content:R}),M&&r.a.createElement("meta",{property:"twitter:image",content:R}),M&&r.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+x})),r.a.createElement("article",{className:b?void 0:"margin-bottom--xl"},(a=b?"h1":"h2",t=N.substring(0,10).split("-"),n=t[0],d=g[parseInt(t[1],10)-1],u=parseInt(t[2],10),r.a.createElement("header",null,r.a.createElement(a,{className:Object(l.a)("margin-bottom--sm",v.a.blogPostTitle)},b?x:r.a.createElement(c.a,{to:k},x)),r.a.createElement("div",{className:"margin-vert--md"},r.a.createElement("time",{dateTime:N,className:v.a.blogPostDate},d," ",u,", ",n," ",y&&r.a.createElement(r.a.Fragment,null," \xb7 ",Math.ceil(y)," min read"))),r.a.createElement("div",{className:"avatar margin-vert--md"},P&&r.a.createElement("a",{className:"avatar__photo-link avatar__photo",href:C,target:"_blank",rel:"noreferrer noopener"},r.a.createElement("img",{src:P,alt:I})),r.a.createElement("div",{className:"avatar__intro"},I&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",{className:"avatar__name"},r.a.createElement("a",{href:C,target:"_blank",rel:"noreferrer noopener"},I)),r.a.createElement("small",{className:"avatar__subtitle"},O)))))),r.a.createElement("section",{className:"markdown"},r.a.createElement(m.a,{components:o.a},E)),(w.length>0||_)&&r.a.createElement("footer",{className:"row margin-vert--lg"},w.length>0&&r.a.createElement("div",{className:"col"},r.a.createElement("strong",null,"Tags:"),w.map((function(e){var a=e.label,t=e.permalink;return r.a.createElement(c.a,{key:t,className:"margin-horiz--sm",to:t},a)}))),_&&r.a.createElement("div",{className:"col text--right"},r.a.createElement(c.a,{to:p.permalink,"aria-label":"Read more about "+x},r.a.createElement("strong",null,"Read More"))))))}},1104:function(e,a,t){"use strict";var n=t(0),r=t.n(n);var l=function(e,a,t){var r=Object(n.useState)(void 0),l=r[0],m=r[1];Object(n.useEffect)((function(){var n,r;function i(){var i=function(){var e=0,a=null;for(n=document.getElementsByClassName("anchor");e<n.length&&!a;){var r=n[e],l=r.getBoundingClientRect().top;l>=0&&l<=t&&(a=r),e+=1}return a}();if(i){var c=0,o=!1;for(r=document.getElementsByClassName(e);c<r.length&&!o;){var s=r[c],d=s.href,v=decodeURIComponent(d.substring(d.indexOf("#")+1));i.id===v&&(l&&l.classList.remove(a),s.classList.add(a),m(s),o=!0),c+=1}}}return document.addEventListener("scroll",i),document.addEventListener("resize",i),i(),function(){document.removeEventListener("scroll",i),document.removeEventListener("resize",i)}}))},m=t(48),i=t.n(m),c="table-of-contents__link";function o(e){var a=e.headings,t=e.isChild;return a.length?r.a.createElement("ul",{className:t?"":"table-of-contents table-of-contents__left-border"},a.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("a",{href:"#"+e.id,className:c,dangerouslySetInnerHTML:{__html:e.value}}),r.a.createElement(o,{isChild:!0,headings:e.children}))}))):null}a.a=function(e){var a=e.headings;return l(c,"table-of-contents__link--active",100),r.a.createElement("div",{className:i.a.tableOfContents},r.a.createElement(o,{headings:a}))}}}]);