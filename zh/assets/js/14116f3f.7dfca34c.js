"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[53968],{95788:(e,n,i)=>{i.d(n,{Iu:()=>y,yg:()=>u});var t=i(11504);function r(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function a(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function p(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?a(Object(i),!0).forEach((function(n){r(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function o(e,n){if(null==e)return{};var i,t,r=function(e,n){if(null==e)return{};var i,t,r={},a=Object.keys(e);for(t=0;t<a.length;t++)i=a[t],n.indexOf(i)>=0||(r[i]=e[i]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)i=a[t],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var l=t.createContext({}),d=function(e){var n=t.useContext(l),i=n;return e&&(i="function"==typeof e?e(n):p(p({},n),e)),i},y=function(e){var n=d(e.components);return t.createElement(l.Provider,{value:n},e.children)},g="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},c=t.forwardRef((function(e,n){var i=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,y=o(e,["components","mdxType","originalType","parentName"]),g=d(i),c=r,u=g["".concat(l,".").concat(c)]||g[c]||s[c]||a;return i?t.createElement(u,p(p({ref:n},y),{},{components:i})):t.createElement(u,p({ref:n},y))}));function u(e,n){var i=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=i.length,p=new Array(a);p[0]=c;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o[g]="string"==typeof e?e:r,p[1]=o;for(var d=2;d<a;d++)p[d]=i[d];return t.createElement.apply(null,p)}return t.createElement.apply(null,i)}c.displayName="MDXCreateElement"},19160:(e,n,i)=>{i.r(n),i.d(n,{contentTitle:()=>p,default:()=>g,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var t=i(45072),r=(i(11504),i(95788));const a={title:"SPI\u6269\u5c55",keywords:["spi design"],description:"\u5bf9ShenYu\u7f51\u5173\u4e2dSPI\u7684\u4f7f\u7528\u8fdb\u884c\u4ecb\u7ecd"},p=void 0,o={unversionedId:"design/spi-design",id:"version-2.4.1/design/spi-design",isDocsHomePage:!1,title:"SPI\u6269\u5c55",description:"\u5bf9ShenYu\u7f51\u5173\u4e2dSPI\u7684\u4f7f\u7528\u8fdb\u884c\u4ecb\u7ecd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.4.1/design/spi-design.md",sourceDirName:"design",slug:"/design/spi-design",permalink:"/zh/docs/2.4.1/design/spi-design",editUrl:"https://github.com/apache/shenyu-website/edit/main/i18n/zh/docusaurus-plugin-content-docs/version-2.4.1/design/spi-design.md",version:"2.4.1",frontMatter:{title:"SPI\u6269\u5c55",keywords:["spi design"],description:"\u5bf9ShenYu\u7f51\u5173\u4e2dSPI\u7684\u4f7f\u7528\u8fdb\u884c\u4ecb\u7ecd"},sidebar:"version-2.4.1/tutorialSidebar",previous:{title:"\u5ba2\u6237\u7aef\u63a5\u5165\u539f\u7406",permalink:"/zh/docs/2.4.1/design/register-center-design"},next:{title:"\u672c\u5730\u90e8\u7f72",permalink:"/zh/docs/2.4.1/deployment/deployment-local"}},l=[{value:"\u6ce8\u518c\u4e2d\u5fc3\u6269\u5c55",id:"\u6ce8\u518c\u4e2d\u5fc3\u6269\u5c55",children:[]},{value:"\u76d1\u63a7\u4e2d\u5fc3\u6269\u5c55",id:"\u76d1\u63a7\u4e2d\u5fc3\u6269\u5c55",children:[]},{value:"\u8d1f\u8f7d\u5747\u8861\u6269\u5c55",id:"\u8d1f\u8f7d\u5747\u8861\u6269\u5c55",children:[]},{value:"RateLimiter\u6269\u5c55",id:"ratelimiter\u6269\u5c55",children:[]},{value:"\u5339\u914d\u65b9\u5f0f\u6269\u5c55",id:"\u5339\u914d\u65b9\u5f0f\u6269\u5c55",children:[]},{value:"\u6761\u4ef6\u53c2\u6570\u6269\u5c55",id:"\u6761\u4ef6\u53c2\u6570\u6269\u5c55",children:[]},{value:"\u6761\u4ef6\u7b56\u7565\u6269\u5c55",id:"\u6761\u4ef6\u7b56\u7565\u6269\u5c55",children:[]}],d={toc:l},y="wrapper";function g(e){let{components:n,...i}=e;return(0,r.yg)(y,(0,t.c)({},d,i,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"SPI")," \u5168\u79f0\u4e3a ",(0,r.yg)("inlineCode",{parentName:"p"},"Service Provider Interface"),", \u662f ",(0,r.yg)("inlineCode",{parentName:"p"},"JDK")," \u5185\u7f6e\u7684\u4e00\u79cd\u670d\u52a1\u63d0\u4f9b\u53d1\u73b0\u529f\u80fd, \u4e00\u79cd\u52a8\u6001\u66ff\u6362\u53d1\u73b0\u7684\u673a\u5236\u3002"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/incubator-shenyu/tree/master/shenyu-spi"},"shenyu-spi")," \u662f",(0,r.yg)("inlineCode",{parentName:"p"},"Apache ShenYu"),"\u7f51\u5173\u81ea\u5b9a\u4e49\u7684",(0,r.yg)("inlineCode",{parentName:"p"},"SPI"),"\u6269\u5c55\u5b9e\u73b0\uff0c\u8bbe\u8ba1\u548c\u5b9e\u73b0\u539f\u7406\u53c2\u8003\u4e86",(0,r.yg)("inlineCode",{parentName:"p"},"Dubbo"),"\u7684 ",(0,r.yg)("a",{parentName:"p",href:"https://dubbo.apache.org/zh/docs/v2.7/dev/impls/"},"SPI\u6269\u5c55\u5b9e\u73b0")," \u3002"),(0,r.yg)("h3",{id:"\u6ce8\u518c\u4e2d\u5fc3\u6269\u5c55"},"\u6ce8\u518c\u4e2d\u5fc3\u6269\u5c55"),(0,r.yg)("p",null,"\u901a\u8fc7\u54ea\u79cd\u65b9\u5f0f\u5b9e\u73b0\u670d\u52a1\u7684\u6ce8\u518c\uff0c\u5f53\u524d\u652f\u6301",(0,r.yg)("inlineCode",{parentName:"p"},"Consul"),"\u3001",(0,r.yg)("inlineCode",{parentName:"p"},"Etcd"),"\u3001",(0,r.yg)("inlineCode",{parentName:"p"},"Http"),"\u3001",(0,r.yg)("inlineCode",{parentName:"p"},"Nacos"),"\u548c",(0,r.yg)("inlineCode",{parentName:"p"},"Zookeeper"),"\u3002\u6ce8\u518c\u4e2d\u5fc3\u7684\u6269\u5c55\u5305\u62ec\u5ba2\u6237\u7aef\u548c\u670d\u52a1\u7aef\uff0c\u63a5\u53e3\u5206\u522b\u4e3a ",(0,r.yg)("inlineCode",{parentName:"p"},"ShenyuServerRegisterRepository")," \u548c ",(0,r.yg)("inlineCode",{parentName:"p"},"ShenyuClientRegisterRepository")," \u3002"),(0,r.yg)("h3",{id:"\u76d1\u63a7\u4e2d\u5fc3\u6269\u5c55"},"\u76d1\u63a7\u4e2d\u5fc3\u6269\u5c55"),(0,r.yg)("p",null,"\u8d1f\u8d23\u670d\u52a1\u7684\u76d1\u63a7\uff0c\u901a\u8fc7",(0,r.yg)("inlineCode",{parentName:"p"},"SPI"),"\u52a0\u8f7d\u5177\u4f53\u5b9e\u73b0\uff0c\u5f53\u524d\u652f\u6301",(0,r.yg)("inlineCode",{parentName:"p"},"Prometheus")," \uff0c\u670d\u52a1\u63a5\u53e3\u662f ",(0,r.yg)("inlineCode",{parentName:"p"},"MetricsBootService")," \u3002"),(0,r.yg)("h3",{id:"\u8d1f\u8f7d\u5747\u8861\u6269\u5c55"},"\u8d1f\u8f7d\u5747\u8861\u6269\u5c55"),(0,r.yg)("p",null,"\u4ece\u591a\u4e2a\u670d\u52a1\u63d0\u4f9b\u65b9\u4e2d\u9009\u62e9\u4e00\u4e2a\u8fdb\u884c\u8c03\u7528\uff0c\u5f53\u524d\u652f\u6301\u7684\u7b97\u6cd5\u6709",(0,r.yg)("inlineCode",{parentName:"p"},"Hash"),"\u3001",(0,r.yg)("inlineCode",{parentName:"p"},"Random")," \u548c ",(0,r.yg)("inlineCode",{parentName:"p"},"RoundRobin"),"\uff0c\u6269\u5c55\u63a5\u53e3\u662f ",(0,r.yg)("inlineCode",{parentName:"p"},"LoadBalance")," \u3002"),(0,r.yg)("h3",{id:"ratelimiter\u6269\u5c55"},"RateLimiter\u6269\u5c55"),(0,r.yg)("p",null,"\u5728",(0,r.yg)("inlineCode",{parentName:"p"},"RateLimiter"),"\u63d2\u4ef6\u4e2d\uff0c\u4f7f\u7528\u4f55\u79cd\u9650\u6d41\u7b97\u6cd5\uff0c\u5f53\u524d\u652f\u6301",(0,r.yg)("inlineCode",{parentName:"p"},"Concurrent"),"\u3001",(0,r.yg)("inlineCode",{parentName:"p"},"LeakyBucket"),"\u3001",(0,r.yg)("inlineCode",{parentName:"p"},"SlidingWindow")," \u548c ",(0,r.yg)("inlineCode",{parentName:"p"},"TokenBucket"),"\uff0c\u6269\u5c55\u63a5\u53e3\u662f ",(0,r.yg)("inlineCode",{parentName:"p"},"RateLimiterAlgorithm")," \u3002"),(0,r.yg)("h3",{id:"\u5339\u914d\u65b9\u5f0f\u6269\u5c55"},"\u5339\u914d\u65b9\u5f0f\u6269\u5c55"),(0,r.yg)("p",null,"\u5728\u6dfb\u52a0\u9009\u62e9\u5668\u548c\u89c4\u5219\u65f6\uff0c\u4f7f\u7528\u54ea\u79cd\u5339\u914d\u65b9\u5f0f\uff0c\u5f53\u524d\u652f\u6301",(0,r.yg)("inlineCode",{parentName:"p"},"And"),"\u3001",(0,r.yg)("inlineCode",{parentName:"p"},"Or"),"\uff0c\u6269\u5c55\u63a5\u53e3\u662f ",(0,r.yg)("inlineCode",{parentName:"p"},"MatchStrategy")," \u3002"),(0,r.yg)("h3",{id:"\u6761\u4ef6\u53c2\u6570\u6269\u5c55"},"\u6761\u4ef6\u53c2\u6570\u6269\u5c55"),(0,r.yg)("p",null,"\u5728\u6dfb\u52a0\u9009\u62e9\u5668\u548c\u89c4\u5219\u65f6\uff0c\u4f7f\u7528\u54ea\u79cd\u6761\u4ef6\u53c2\u6570\uff0c\u5f53\u524d\u652f\u6301",(0,r.yg)("inlineCode",{parentName:"p"},"URI"),"\u3001",(0,r.yg)("inlineCode",{parentName:"p"},"RequestMethod"),"\u3001",(0,r.yg)("inlineCode",{parentName:"p"},"Query"),"\u3001",(0,r.yg)("inlineCode",{parentName:"p"},"Post"),"\u3001",(0,r.yg)("inlineCode",{parentName:"p"},"IP"),"\u3001",(0,r.yg)("inlineCode",{parentName:"p"},"Host"),"\u3001",(0,r.yg)("inlineCode",{parentName:"p"},"Cookie")," \u548c ",(0,r.yg)("inlineCode",{parentName:"p"},"Header"),"\uff0c\u6269\u5c55\u63a5\u53e3\u662f ",(0,r.yg)("inlineCode",{parentName:"p"},"ParameterData")," \u3002"),(0,r.yg)("h3",{id:"\u6761\u4ef6\u7b56\u7565\u6269\u5c55"},"\u6761\u4ef6\u7b56\u7565\u6269\u5c55"),(0,r.yg)("p",null,"\u5728\u6dfb\u52a0\u9009\u62e9\u5668\u548c\u89c4\u5219\u65f6\uff0c\u4f7f\u7528\u54ea\u79cd\u6761\u4ef6\u7b56\u7565\uff0c\u5f53\u524d\u652f\u6301",(0,r.yg)("inlineCode",{parentName:"p"},"Match"),"\u3001",(0,r.yg)("inlineCode",{parentName:"p"},"Contains"),"\u3001",(0,r.yg)("inlineCode",{parentName:"p"},"Equals"),"\u3001",(0,r.yg)("inlineCode",{parentName:"p"},"Groovy"),"\u3001",(0,r.yg)("inlineCode",{parentName:"p"},"Regex"),"\u3001",(0,r.yg)("inlineCode",{parentName:"p"},"SpEL"),"\u3001",(0,r.yg)("inlineCode",{parentName:"p"},"TimerAfter")," \u548c ",(0,r.yg)("inlineCode",{parentName:"p"},"TimerBefore"),"\uff0c\u6269\u5c55\u63a5\u53e3\u662f ",(0,r.yg)("inlineCode",{parentName:"p"},"PredicateJudge")," \u3002"))}g.isMDXComponent=!0}}]);