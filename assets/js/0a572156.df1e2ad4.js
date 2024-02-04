"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[61986],{95788:(e,t,n)=>{n.d(t,{Iu:()=>s,yg:()=>d});var r=n(11504);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(n),y=o,d=u["".concat(l,".").concat(y)]||u[y]||m[y]||i;return n?r.createElement(d,a(a({ref:t},s),{},{components:n})):r.createElement(d,a({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=y;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[u]="string"==typeof e?e:o,a[1]=p;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},72044:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var r=n(45072),o=(n(11504),n(95788));const i={title:"ShenYu Optimize",keywords:["Optimize"],description:"performance optimization for Apache ShenYu"},a=void 0,p={unversionedId:"developer/shenyu-optimize",id:"version-2.5.1/developer/shenyu-optimize",isDocsHomePage:!1,title:"ShenYu Optimize",description:"performance optimization for Apache ShenYu",source:"@site/versioned_docs/version-2.5.1/developer/shenyu-optimize.md",sourceDirName:"developer",slug:"/developer/shenyu-optimize",permalink:"/docs/2.5.1/developer/shenyu-optimize",editUrl:"https://github.com/apache/shenyu-website/edit/main/versioned_docs/version-2.5.1/developer/shenyu-optimize.md",version:"2.5.1",frontMatter:{title:"ShenYu Optimize",keywords:["Optimize"],description:"performance optimization for Apache ShenYu"},sidebar:"version-2.5.1/tutorialSidebar",previous:{title:"Local Model",permalink:"/docs/2.5.1/developer/local-model"},next:{title:"Thread Model",permalink:"/docs/2.5.1/developer/thread-model"}},l=[{value:"Description",id:"description",children:[]},{value:"Time Consumption",id:"time-consumption",children:[]},{value:"Netty Optimization",id:"netty-optimization",children:[]}],c={toc:l},s="wrapper";function u(e){let{components:t,...n}=e;return(0,o.yg)(s,(0,r.c)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"description"},"Description"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"This doc shows how to do performance optimization for Apache ShenYu.")),(0,o.yg)("h2",{id:"time-consumption"},"Time Consumption"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Apache ShenYu is JVM driven and processing time for a single request is nearly between ",(0,o.yg)("inlineCode",{parentName:"li"},"1-3")," ms.")),(0,o.yg)("h2",{id:"netty-optimization"},"Netty Optimization"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"spring-webflux")," is one of dependencies of ShenYu, and it uses Netty in lower layer."),(0,o.yg)("li",{parentName:"ul"},"The demo down below demonstrates tuning ShenYu by customizing params in Netty.")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-java"},'@Bean\n public NettyReactiveWebServerFactory nettyReactiveWebServerFactory() {\n     NettyReactiveWebServerFactory webServerFactory = new NettyReactiveWebServerFactory();\n     webServerFactory.addServerCustomizers(new EventLoopNettyCustomizer());\n     return webServerFactory;\n }\n\nprivate static class EventLoopNettyCustomizer implements NettyServerCustomizer {\n\n    @Override\n    public HttpServer apply(final HttpServer httpServer) {\n        return httpServer\n                .tcpConfiguration(tcpServer -> tcpServer\n                        .runOn(LoopResources.create("shenyu-netty", 1, DEFAULT_IO_WORKER_COUNT, true), false)\n                        .selectorOption(ChannelOption.SO_REUSEADDR, true)\n                        .selectorOption(ChannelOption.ALLOCATOR, PooledByteBufAllocator.DEFAULT)\n                        .option(ChannelOption.TCP_NODELAY, true)\n                        .option(ChannelOption.ALLOCATOR, PooledByteBufAllocator.DEFAULT));\n    }\n}\n')),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"The ",(0,o.yg)("inlineCode",{parentName:"li"},"shenyu-bootstrap")," module offers this class, you may modify it when benchmarking your app if necessary."),(0,o.yg)("li",{parentName:"ul"},"You can get references of business thread model from ",(0,o.yg)("a",{parentName:"li",href:"./thread-model"},"thread model"))))}u.isMDXComponent=!0}}]);