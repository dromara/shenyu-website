"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[94800],{95788:(e,n,r)=>{r.d(n,{Iu:()=>g,yg:()=>y});var i=r(11504);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,i)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function u(e,n){if(null==e)return{};var r,i,t=function(e,n){if(null==e)return{};var r,i,t={},l=Object.keys(e);for(i=0;i<l.length;i++)r=l[i],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)r=l[i],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var p=i.createContext({}),o=function(e){var n=i.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},g=function(e){var n=o(e.components);return i.createElement(p.Provider,{value:n},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var r=e.components,t=e.mdxType,l=e.originalType,p=e.parentName,g=u(e,["components","mdxType","originalType","parentName"]),c=o(r),d=t,y=c["".concat(p,".").concat(d)]||c[d]||s[d]||l;return r?i.createElement(y,a(a({ref:n},g),{},{components:r})):i.createElement(y,a({ref:n},g))}));function y(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var l=r.length,a=new Array(l);a[0]=d;var u={};for(var p in n)hasOwnProperty.call(n,p)&&(u[p]=n[p]);u.originalType=e,u[c]="string"==typeof e?e:t,a[1]=u;for(var o=2;o<l;o++)a[o]=r[o];return i.createElement.apply(null,a)}return i.createElement.apply(null,r)}d.displayName="MDXCreateElement"},80220:(e,n,r)=>{r.r(n),r.d(n,{contentTitle:()=>a,default:()=>c,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var i=r(45072),t=(r(11504),r(95788));const l={title:"Rewrite Plugin",keywords:["rewrite"],description:"rewrite plugin"},a="1. Overview",u={unversionedId:"plugin-center/http-process/rewrite-plugin",id:"version-2.6.0/plugin-center/http-process/rewrite-plugin",isDocsHomePage:!1,title:"Rewrite Plugin",description:"rewrite plugin",source:"@site/versioned_docs/version-2.6.0/plugin-center/http-process/rewrite-plugin.md",sourceDirName:"plugin-center/http-process",slug:"/plugin-center/http-process/rewrite-plugin",permalink:"/docs/2.6.0/plugin-center/http-process/rewrite-plugin",editUrl:"https://github.com/apache/shenyu-website/edit/main/versioned_docs/version-2.6.0/plugin-center/http-process/rewrite-plugin.md",version:"2.6.0",frontMatter:{title:"Rewrite Plugin",keywords:["rewrite"],description:"rewrite plugin"},sidebar:"version-2.6.0/tutorialSidebar",previous:{title:"Request Plugin",permalink:"/docs/2.6.0/plugin-center/http-process/request-plugin"},next:{title:"Brpc Plugin",permalink:"/docs/2.6.0/plugin-center/proxy/brpc-plugin"}},p=[{value:"1.1 Plugin Name",id:"11-plugin-name",children:[]},{value:"1.2 Appropriate Scenario",id:"12-appropriate-scenario",children:[]},{value:"1.3 Plugin functionality",id:"13-plugin-functionality",children:[]},{value:"1.4 Plugin code",id:"14-plugin-code",children:[]},{value:"1.5 Added Since Which shenyu version",id:"15-added-since-which-shenyu-version",children:[]},{value:"2.1 Plugin-use procedure chart",id:"21-plugin-use-procedure-chart",children:[]},{value:"2.2 Import pom",id:"22-import-pom",children:[]},{value:"2.3 Enable plugin",id:"23-enable-plugin",children:[]},{value:"2.4 Config plugin",id:"24-config-plugin",children:[{value:"2.4.1 Plugin Config",id:"241-plugin-config",children:[]},{value:"2.4.2 Selector Config",id:"242-selector-config",children:[]},{value:"2.4.3 Rule Config",id:"243-rule-config",children:[]}]},{value:"2.5 Examples",id:"25-examples",children:[{value:"2.5.1 Example for rewriting uri",id:"251-example-for-rewriting-uri",children:[]}]}],o={toc:p},g="wrapper";function c(e){let{components:n,...l}=e;return(0,t.yg)(g,(0,i.c)({},o,l,{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h1",{id:"1-overview"},"1. Overview"),(0,t.yg)("h2",{id:"11-plugin-name"},"1.1 Plugin Name"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Rewrite Plugin")),(0,t.yg)("h2",{id:"12-appropriate-scenario"},"1.2 Appropriate Scenario"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"The request uri can be different from the target service by rewriting the path.")),(0,t.yg)("h2",{id:"13-plugin-functionality"},"1.3 Plugin functionality"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"This plugin is used to rewrite the request uri.")),(0,t.yg)("h2",{id:"14-plugin-code"},"1.4 Plugin code"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"Core Module ",(0,t.yg)("inlineCode",{parentName:"p"},"shenyu-plugin-rewrite"))),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"Core Class ",(0,t.yg)("inlineCode",{parentName:"p"},"org.apache.shenyu.plugin.rewrite.RewritePlugin")))),(0,t.yg)("h2",{id:"15-added-since-which-shenyu-version"},"1.5 Added Since Which shenyu version"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Since ShenYu 2.4.0")),(0,t.yg)("h1",{id:"2-how-to-use-plugin"},"2. How to use plugin"),(0,t.yg)("h2",{id:"21-plugin-use-procedure-chart"},"2.1 Plugin-use procedure chart"),(0,t.yg)("p",null,(0,t.yg)("img",{src:r(5324).c})),(0,t.yg)("h2",{id:"22-import-pom"},"2.2 Import pom"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Import maven config in shenyu-bootstrap project's ",(0,t.yg)("inlineCode",{parentName:"li"},"pom.xml")," file..")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-xml"},"  <dependency>\n      <groupId>org.apache.shenyu</groupId>\n      <artifactId>shenyu-spring-boot-starter-plugin-rewrite</artifactId>\n      <version>${project.version}</version>\n  </dependency>\n")),(0,t.yg)("h2",{id:"23-enable-plugin"},"2.3 Enable plugin"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"In ",(0,t.yg)("inlineCode",{parentName:"li"},"shenyu-admin")," --\x3e BasicConfig --\x3e Plugin --\x3e ",(0,t.yg)("inlineCode",{parentName:"li"},"rewrite")," set Status enabled.\n",(0,t.yg)("img",{src:r(72720).c}))),(0,t.yg)("h2",{id:"24-config-plugin"},"2.4 Config plugin"),(0,t.yg)("h3",{id:"241-plugin-config"},"2.4.1 Plugin Config"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Enable the plugin before using."),(0,t.yg)("li",{parentName:"ul"},"Disable the plugin if don't use. ")),(0,t.yg)("h3",{id:"242-selector-config"},"2.4.2 Selector Config"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Please refer to: ",(0,t.yg)("a",{parentName:"li",href:"../../user-guide/admin-usage/selector-and-rule"},"Selector And Rule Config"),".")),(0,t.yg)("h3",{id:"243-rule-config"},"2.4.3 Rule Config"),(0,t.yg)("p",null,(0,t.yg)("img",{src:r(19704).c})),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Param details:",(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"regex"),": The regular expression that matches the part of uri to be rewrited."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"replace"),": The content of replacement.")))),(0,t.yg)("h2",{id:"25-examples"},"2.5 Examples"),(0,t.yg)("h3",{id:"251-example-for-rewriting-uri"},"2.5.1 Example for rewriting uri"),(0,t.yg)("h4",{id:"2511-run-the-shenyu-examples-http-project"},"2.5.1.1 Run the shenyu-examples-http project"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Use ",(0,t.yg)("a",{parentName:"li",href:"https://github.com/apache/shenyu/tree/master/shenyu-examples/shenyu-examples-http"},"shenyu-examples-http"),", please refer to ",(0,t.yg)("a",{parentName:"li",href:"../../quick-start/quick-start-http#run-the-shenyu-examples-http-project"},"Run the shenyu-examples-http project"))),(0,t.yg)("h4",{id:"2511-plugin-config"},"2.5.1.1 Plugin Config"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Refer to ",(0,t.yg)("a",{parentName:"li",href:"#241-plugin-config"},"2.4.1")," to configure plugin.")),(0,t.yg)("h4",{id:"2512-selector-config"},"2.5.1.2 Selector Config"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Refer to ",(0,t.yg)("a",{parentName:"li",href:"#242-selector-config"},"2.4.2")," to configure selector")),(0,t.yg)("h4",{id:"2513-rule-config"},"2.5.1.3 Rule Config"),(0,t.yg)("p",null,(0,t.yg)("img",{src:r(74820).c})),(0,t.yg)("p",null,"The request ",(0,t.yg)("inlineCode",{parentName:"p"},"/http/hello")," would be rewritten to ",(0,t.yg)("inlineCode",{parentName:"p"},"/hi")),(0,t.yg)("h4",{id:"2514-check-result"},"2.5.1.4 Check Result"),(0,t.yg)("p",null,"Use some tool (such as Postman) to make a request:"),(0,t.yg)("p",null,(0,t.yg)("img",{src:r(12100).c})),(0,t.yg)("h1",{id:"3-how-to-disable-plugin"},"3. How to disable plugin"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"In ",(0,t.yg)("inlineCode",{parentName:"li"},"shenyu-admin")," --\x3e BasicConfig --\x3e Plugin --\x3e ",(0,t.yg)("inlineCode",{parentName:"li"},"rewrite")," set Status disable.")))}c.isMDXComponent=!0},12100:(e,n,r)=>{r.d(n,{c:()=>i});const i=r.p+"assets/images/rewrite_example_result-1f6860e296fc5418aa97ad425dca82b3.png"},74820:(e,n,r)=>{r.d(n,{c:()=>i});const i=r.p+"assets/images/rewrite_example_rule-5ad55fb5d2a785738487d663b9c49977.png"},72720:(e,n,r)=>{r.d(n,{c:()=>i});const i=r.p+"assets/images/rewrite_open_en-6f19bcb0b1115b24a6bf49b382938253.png"},19704:(e,n,r)=>{r.d(n,{c:()=>i});const i=r.p+"assets/images/rewrite_rule_config-d5e17a2648c2d6a0e0def60767164ae5.png"},5324:(e,n,r)=>{r.d(n,{c:()=>i});const i=r.p+"assets/images/rewrite_use_en-805b67cd07b5e0c64168d13424be9f8c.png"}}]);