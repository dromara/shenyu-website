"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[57216],{95788:(e,n,r)=>{r.d(n,{Iu:()=>u,yg:()=>m});var t=r(11504);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=t.createContext({}),l=function(e){var n=t.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},u=function(e){var n=l(e.components);return t.createElement(p.Provider,{value:n},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},y=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=l(r),y=a,m=c["".concat(p,".").concat(y)]||c[y]||g[y]||i;return r?t.createElement(m,o(o({ref:n},u),{},{components:r})):t.createElement(m,o({ref:n},u))}));function m(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=y;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s[c]="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}y.displayName="MDXCreateElement"},80188:(e,n,r)=>{r.r(n),r.d(n,{contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var t=r(45072),a=(r(11504),r(95788));const i={sidebar_position:1,title:"Overview",keywords:["Apache shenyu"],description:"This is an asynchronous, high-performance, cross-language, responsive API gateway.",aliases:"/shenyu/docs/Home"},o="What is the Apache ShenYu?",s={unversionedId:"index",id:"version-2.4.2/index",isDocsHomePage:!1,title:"Overview",description:"This is an asynchronous, high-performance, cross-language, responsive API gateway.",source:"@site/versioned_docs/version-2.4.2/index.md",sourceDirName:".",slug:"/index",permalink:"/docs/2.4.2/index",editUrl:"https://github.com/apache/shenyu-website/edit/main/versioned_docs/version-2.4.2/index.md",version:"2.4.2",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Overview",keywords:["Apache shenyu"],description:"This is an asynchronous, high-performance, cross-language, responsive API gateway.",aliases:"/shenyu/docs/Home"},sidebar:"version-2.4.2/tutorialSidebar",next:{title:"Apache ShenYu Admin Database Design",permalink:"/docs/2.4.2/design/database-design"}},p=[],l={toc:p},u="wrapper";function c(e){let{components:n,...i}=e;return(0,a.yg)(u,(0,t.c)({},l,i,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"what-is-the-apache-shenyu"},"What is the Apache ShenYu?"),(0,a.yg)("p",null,"This is an asynchronous, high-performance, cross-language, responsive API gateway."),(0,a.yg)("h1",{id:"features"},"Features"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Support various languages (http protocol), support Dubbo, Spring Cloud, gRPC, Motan, Sofa, Tars and other protocols."),(0,a.yg)("li",{parentName:"ul"},"Plugin design idea, plugin hot swap, easy to expand."),(0,a.yg)("li",{parentName:"ul"},"Flexible flow filtering to meet various flow control."),(0,a.yg)("li",{parentName:"ul"},"Built-in rich plugin support, authentication, limiting, fuse, firewall, etc."),(0,a.yg)("li",{parentName:"ul"},"Dynamic flow configuration, high performance."),(0,a.yg)("li",{parentName:"ul"},"Support cluster deployment, A/B Test, blue-green release.")),(0,a.yg)("h1",{id:"architecture-diagram"},"Architecture Diagram"),(0,a.yg)("p",null,(0,a.yg)("img",{src:r(4596).c})),(0,a.yg)("h1",{id:"mind-map"},"Mind map"),(0,a.yg)("p",null," ",(0,a.yg)("img",{src:r(65032).c})),(0,a.yg)("hr",null),(0,a.yg)("h1",{id:"modules"},"Modules"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"shenyu-admin : plugins and other configuration information management background")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"shenyu-bootstrap : with the startup project, users can refer to")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"shenyu-client : user fast access with Spring MVC, Dubbo, Spring Cloud.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"shenyu-common : framework common class")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"shenyu-disruptor : based on disruptor Enclosure")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"shenyu-register-center : rpc type register for shenyu-client")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"shenyu-dist : build project")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"shenyu-metrics : metrics impl by prometheus.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"shenyu-plugin : ShenYu provider plugin collection.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"shenyu-spi : ShenYu spi define.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"shenyu-spring-boot-starter : support for the spring boot starter")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"shenyu-sync-data-center : provider ZooKeeper, HTTP, WebSocket, Nacos to sync data")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"shenyu-examples : the RPC examples project")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"shenyu-web : core processing packages including plugins, request routing and forwarding, and so on"))),(0,a.yg)("h1",{id:"about"},"About"),(0,a.yg)("p",null,"Apache ShenYu has been used widely in more and more systems in many companies, and it's simple and convenient to integrate Services/APIs with the high performance and flexibility."),(0,a.yg)("p",null,"In double eleven online shopping carnival of China, ShenYu clusters successfully supported a large volume of internet business."))}c.isMDXComponent=!0},4596:(e,n,r)=>{r.d(n,{c:()=>t});const t=r.p+"assets/images/shenyu-framework-cb887833378ae08ab06b49d43c8aa496.png"},65032:(e,n,r)=>{r.d(n,{c:()=>t});const t=r.p+"assets/images/shenyu-xmind-1e9e293ec1650cd3d74beaf7b48464c1.png"}}]);