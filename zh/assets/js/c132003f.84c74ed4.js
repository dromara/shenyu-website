"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[74198],{95788:(e,t,n)=>{n.d(t,{Iu:()=>d,yg:()=>s});var a=n(11504);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},g=Object.keys(e);for(a=0;a<g.length;a++)n=g[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var g=Object.getOwnPropertySymbols(e);for(a=0;a<g.length;a++)n=g[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var y=a.createContext({}),p=function(e){var t=a.useContext(y),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(y.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},o=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,g=e.originalType,y=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=p(n),o=r,s=c["".concat(y,".").concat(o)]||c[o]||m[o]||g;return n?a.createElement(s,l(l({ref:t},d),{},{components:n})):a.createElement(s,l({ref:t},d))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var g=n.length,l=new Array(g);l[0]=o;var i={};for(var y in t)hasOwnProperty.call(t,y)&&(i[y]=t[y]);i.originalType=e,i[c]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<g;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}o.displayName="MDXCreateElement"},89732:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>l,default:()=>c,frontMatter:()=>g,metadata:()=>i,toc:()=>y});var a=n(45072),r=(n(11504),n(95788));const g={title:"Logging-Tencent-Cls\u63d2\u4ef6",keywords:["Logging"],description:"logging\u63d2\u4ef6"},l="1. \u6982\u8ff0",i={unversionedId:"plugin-center/observability/logging-tencent-cls",id:"version-2.6.1/plugin-center/observability/logging-tencent-cls",isDocsHomePage:!1,title:"Logging-Tencent-Cls\u63d2\u4ef6",description:"logging\u63d2\u4ef6",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.6.1/plugin-center/observability/logging-tencent-cls.md",sourceDirName:"plugin-center/observability",slug:"/plugin-center/observability/logging-tencent-cls",permalink:"/zh/docs/plugin-center/observability/logging-tencent-cls",editUrl:"https://github.com/apache/shenyu-website/edit/main/i18n/zh/docusaurus-plugin-content-docs/version-2.6.1/plugin-center/observability/logging-tencent-cls.md",version:"2.6.1",frontMatter:{title:"Logging-Tencent-Cls\u63d2\u4ef6",keywords:["Logging"],description:"logging\u63d2\u4ef6"},sidebar:"version-2.6.0/tutorialSidebar",previous:{title:"Logging-RocketMQ\u63d2\u4ef6",permalink:"/zh/docs/plugin-center/observability/logging-rocketmq"},next:{title:"Metrics\u63d2\u4ef6",permalink:"/zh/docs/plugin-center/observability/metrics-plugin"}},y=[{value:"1.1 \u63d2\u4ef6\u540d\u79f0",id:"11-\u63d2\u4ef6\u540d\u79f0",children:[]},{value:"1.2 \u9002\u7528\u573a\u666f",id:"12-\u9002\u7528\u573a\u666f",children:[]},{value:"1.3 \u63d2\u4ef6\u529f\u80fd",id:"13-\u63d2\u4ef6\u529f\u80fd",children:[]},{value:"1.4 \u63d2\u4ef6\u4ee3\u7801",id:"14-\u63d2\u4ef6\u4ee3\u7801",children:[]},{value:"1.5 \u6dfb\u52a0\u81ea\u54ea\u4e2ashenyu\u7248\u672c",id:"15-\u6dfb\u52a0\u81ea\u54ea\u4e2ashenyu\u7248\u672c",children:[]},{value:"2.1 \u63d2\u4ef6\u4f7f\u7528\u6d41\u7a0b\u56fe",id:"21-\u63d2\u4ef6\u4f7f\u7528\u6d41\u7a0b\u56fe",children:[]},{value:"2.2 \u5bfc\u5165pom",id:"22-\u5bfc\u5165pom",children:[]},{value:"2.3 \u542f\u7528\u63d2\u4ef6",id:"23-\u542f\u7528\u63d2\u4ef6",children:[]},{value:"2.4 \u914d\u7f6e\u63d2\u4ef6",id:"24-\u914d\u7f6e\u63d2\u4ef6",children:[{value:"2.4.1 \u63d2\u4ef6\u914d\u7f6e",id:"241-\u63d2\u4ef6\u914d\u7f6e",children:[]},{value:"2.4.2 \u89c4\u5219\u548c\u9009\u62e9\u5668\u914d\u7f6e",id:"242-\u89c4\u5219\u548c\u9009\u62e9\u5668\u914d\u7f6e",children:[]}]},{value:"2.5 Logging\u4fe1\u606f",id:"25-logging\u4fe1\u606f",children:[]},{value:"2.6 \u793a\u4f8b",id:"26-\u793a\u4f8b",children:[{value:"2.6.1 \u901a\u8fc7\u817e\u8baf\u4e91cls\u65e5\u5fd7\u5e73\u53f0\u6536\u96c6\u65e5\u5fd7",id:"261-\u901a\u8fc7\u817e\u8baf\u4e91cls\u65e5\u5fd7\u5e73\u53f0\u6536\u96c6\u65e5\u5fd7",children:[]}]}],p={toc:y},d="wrapper";function c(e){let{components:t,...g}=e;return(0,r.yg)(d,(0,a.c)({},p,g,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"1-\u6982\u8ff0"},"1. \u6982\u8ff0"),(0,r.yg)("h2",{id:"11-\u63d2\u4ef6\u540d\u79f0"},"1.1 \u63d2\u4ef6\u540d\u79f0"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Tencent cls \u65e5\u5fd7\u63d2\u4ef6")),(0,r.yg)("h2",{id:"12-\u9002\u7528\u573a\u666f"},"1.2 \u9002\u7528\u573a\u666f"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u6536\u96c6\u65e5\u5fd7\u5230",(0,r.yg)("inlineCode",{parentName:"li"},"Tencent cls"),"\u65e5\u5fd7\u5e73\u53f0\uff0c\u5e76\u901a\u8fc7",(0,r.yg)("inlineCode",{parentName:"li"},"Tencent cls"),"\u65e5\u5fd7\u5e73\u53f0\u8fdb\u884c\u6570\u636e\u5206\u6790")),(0,r.yg)("h2",{id:"13-\u63d2\u4ef6\u529f\u80fd"},"1.3 \u63d2\u4ef6\u529f\u80fd"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u7f51\u5173\u63a5\u6536\u5ba2\u6237\u7aef\u8bf7\u6c42\uff0c\u5411\u670d\u52a1\u7aef\u8f6c\u53d1\u8bf7\u6c42\uff0c\u5e76\u5c06\u670d\u52a1\u7aef\u7ed3\u679c\u8fd4\u56de\u7ed9\u5ba2\u6237\u7aef.\u7f51\u5173\u53ef\u4ee5\u8bb0\u5f55\u4e0b\u6bcf\u6b21\u8bf7\u6c42\u5bf9\u5e94\u7684\u8be6\u7ec6\u4fe1\u606f\u3002"),(0,r.yg)("li",{parentName:"ul"},"\u63d2\u4ef6\u4fbf\u662f\u8bb0\u5f55\u8bbf\u95ee\u65e5\u5fd7\u5e76\u5c06\u8bbf\u95ee\u65e5\u5fd7\u53d1\u9001\u5230Tencent cls\u7684\u63d2\u4ef6.")),(0,r.yg)("h2",{id:"14-\u63d2\u4ef6\u4ee3\u7801"},"1.4 \u63d2\u4ef6\u4ee3\u7801"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u6838\u5fc3\u6a21\u5757 ",(0,r.yg)("inlineCode",{parentName:"p"},"shenyu-plugin-logging-tencent-cls"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u6838\u5fc3\u7c7b ",(0,r.yg)("inlineCode",{parentName:"p"},"org.apache.shenyu.plugin.tencent.cls.LoggingTencentClsPlugin"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u6838\u5fc3\u7c7b ",(0,r.yg)("inlineCode",{parentName:"p"},"org.apache.shenyu.plugin.tencent.cls.client.TencentClsLogCollectClient")))),(0,r.yg)("h2",{id:"15-\u6dfb\u52a0\u81ea\u54ea\u4e2ashenyu\u7248\u672c"},"1.5 \u6dfb\u52a0\u81ea\u54ea\u4e2ashenyu\u7248\u672c"),(0,r.yg)("p",null,"ShenYu 2.5.1"),(0,r.yg)("h1",{id:"2-\u5982\u4f55\u4f7f\u7528\u63d2\u4ef6"},"2. \u5982\u4f55\u4f7f\u7528\u63d2\u4ef6"),(0,r.yg)("h2",{id:"21-\u63d2\u4ef6\u4f7f\u7528\u6d41\u7a0b\u56fe"},"2.1 \u63d2\u4ef6\u4f7f\u7528\u6d41\u7a0b\u56fe"),(0,r.yg)("p",null,(0,r.yg)("img",{src:n(70488).c})),(0,r.yg)("h2",{id:"22-\u5bfc\u5165pom"},"2.2 \u5bfc\u5165pom"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u5728ShenYu-Bootstrap\u5bfc\u5165\u5bf9\u5e94\u7684pom\u4f9d\u8d56\u3002")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-xml"},"\x3c!-- shenyu logging-tencent-cls plugin start --\x3e\n<dependency>\n    <groupId>org.apache.shenyu</groupId>\n    <artifactId>shenyu-spring-boot-starter-plugin-logging-tencent-cls</artifactId>\n    <version>${project.version}</version>\n</dependency>\n\x3c!-- shenyu logging-tencent-cls plugin end --\x3e\n")),(0,r.yg)("h2",{id:"23-\u542f\u7528\u63d2\u4ef6"},"2.3 \u542f\u7528\u63d2\u4ef6"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u5728 ",(0,r.yg)("inlineCode",{parentName:"li"},"shenyu-admin")," --\x3e \u57fa\u7840\u914d\u7f6e --\x3e \u63d2\u4ef6\u7ba1\u7406-> ",(0,r.yg)("inlineCode",{parentName:"li"},"loggingTencentCls")," \uff0c\u8bbe\u7f6e\u4e3a\u5f00\u542f\u3002")),(0,r.yg)("h2",{id:"24-\u914d\u7f6e\u63d2\u4ef6"},"2.4 \u914d\u7f6e\u63d2\u4ef6"),(0,r.yg)("h3",{id:"241-\u63d2\u4ef6\u914d\u7f6e"},"2.4.1 \u63d2\u4ef6\u914d\u7f6e"),(0,r.yg)("p",null,(0,r.yg)("img",{src:n(65980).c})),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"\u914d\u7f6e\u9879"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u5907\u6ce8"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"secretId"),(0,r.yg)("td",{parentName:"tr",align:"left"},"String"),(0,r.yg)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,r.yg)("td",{parentName:"tr",align:"left"},"secretId")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"secretKey"),(0,r.yg)("td",{parentName:"tr",align:"left"},"String"),(0,r.yg)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,r.yg)("td",{parentName:"tr",align:"left"},"secretKey")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"endpoint"),(0,r.yg)("td",{parentName:"tr",align:"left"},"String"),(0,r.yg)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,r.yg)("td",{parentName:"tr",align:"left"},"\u4e3b\u673a\u540d,\u4f8b\u5982:ap-guangzhou.cls.tencentcs.com")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"topic"),(0,r.yg)("td",{parentName:"tr",align:"left"},"String"),(0,r.yg)("td",{parentName:"tr",align:"left"},"\u53ef\u9009, \u9ed8\u8ba4\u503c:shenyu-topic"),(0,r.yg)("td",{parentName:"tr",align:"left"},"\u65e5\u5fd7\u5b58\u50a8topic")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"sendThreadCount"),(0,r.yg)("td",{parentName:"tr",align:"left"},"String"),(0,r.yg)("td",{parentName:"tr",align:"left"},"\u53ef\u9009, \u9ed8\u8ba4\u503c:1"),(0,r.yg)("td",{parentName:"tr",align:"left"},"\u65e5\u5fd7\u6d88\u8d39\u56de\u8c03\u6838\u5fc3\u7ebf\u7a0b\u6570")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"TotalSizeInBytes"),(0,r.yg)("td",{parentName:"tr",align:"left"},"Integer"),(0,r.yg)("td",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u4e3a 104857600"),(0,r.yg)("td",{parentName:"tr",align:"left"},"\u5b9e\u4f8b\u80fd\u7f13\u5b58\u7684\u65e5\u5fd7\u5927\u5c0f\u4e0a\u9650\uff0c")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"MaxSendThreadCount"),(0,r.yg)("td",{parentName:"tr",align:"left"},"Integer"),(0,r.yg)("td",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u4e3a 50 \u4e2a"),(0,r.yg)("td",{parentName:"tr",align:"left"},'client\u80fd\u5e76\u53d1\u7684\u6700\u591a"goroutine"\u7684\u6570\u91cf\uff0c')),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"MaxBlockSec"),(0,r.yg)("td",{parentName:"tr",align:"left"},"Integer"),(0,r.yg)("td",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u4e3a 60000 \u6beb\u79d2"),(0,r.yg)("td",{parentName:"tr",align:"left"},"\u5982\u679cclient\u53ef\u7528\u7a7a\u95f4\u4e0d\u8db3\uff0c\u8c03\u7528\u8005\u5728 send \u65b9\u6cd5\u4e0a\u7684\u6700\u5927\u963b\u585e\u65f6\u95f4\u3002",(0,r.yg)("br",null)," \u5982\u679c\u8d85\u8fc7\u8fd9\u4e2a\u65f6\u95f4\u540e\u6240\u9700\u7a7a\u95f4\u4ecd\u65e0\u6cd5\u5f97\u5230\u6ee1\u8db3\uff0csend \u65b9\u6cd5\u4f1a\u629b\u51faTimeoutException\u3002\u5982\u679c\u60a8\u5e0c\u671b send \u65b9\u6cd5\u4e00\u76f4\u963b\u585e\u76f4\u5230\u6240\u9700\u7a7a\u95f4\u5f97\u5230\u6ee1\u8db3\uff0c\u53ef\u5c06\u8be5\u503c\u8bbe\u4e3a\u8d1f\u6570\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"MaxBatchSize"),(0,r.yg)("td",{parentName:"tr",align:"left"},"Integer"),(0,r.yg)("td",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u4e3a 512 * 1024 (512KB)"),(0,r.yg)("td",{parentName:"tr",align:"left"},"\u5f53\u4e00\u4e2aBatch\u4e2d\u7f13\u5b58\u7684\u65e5\u5fd7\u5927\u5c0f\u5927\u4e8e\u7b49\u4e8e batchSizeThresholdInBytes \u65f6\uff0c\u8be5 batch \u5c06\u88ab\u53d1\u9001\uff0c\u6700\u5927\u53ef\u8bbe\u7f6e\u6210 5MB")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"MaxBatchCount"),(0,r.yg)("td",{parentName:"tr",align:"left"},"Integer"),(0,r.yg)("td",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u4e3a 4096"),(0,r.yg)("td",{parentName:"tr",align:"left"},"\u5f53\u4e00\u4e2aBatch\u4e2d\u7f13\u5b58\u7684\u65e5\u5fd7\u6761\u6570\u5927\u4e8e\u7b49\u4e8e batchCountThreshold \u65f6\uff0c\u8be5 batch \u5c06\u88ab\u53d1\u9001\u6700\u5927\u53ef\u8bbe\u7f6e\u6210 40960")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"LingerMs"),(0,r.yg)("td",{parentName:"tr",align:"left"},"Integer"),(0,r.yg)("td",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u4e3a 2000 \u6beb\u79d2"),(0,r.yg)("td",{parentName:"tr",align:"left"},"Batch\u4ece\u521b\u5efa\u5230\u53ef\u53d1\u9001\u7684\u9017\u7559\u65f6\u95f4\uff0c\u6700\u5c0f\u53ef\u8bbe\u7f6e\u6210 100 \u6beb\u79d2")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"Retries"),(0,r.yg)("td",{parentName:"tr",align:"left"},"Integer"),(0,r.yg)("td",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u4e3a 10 \u6b21"),(0,r.yg)("td",{parentName:"tr",align:"left"},"\u5982\u679c\u67d0\u4e2aBatch\u9996\u6b21\u53d1\u9001\u5931\u8d25\uff0c\u80fd\u591f\u5bf9\u5176\u91cd\u8bd5\u7684\u6b21\u6570\uff0c\u5982\u679c retries \u5c0f\u4e8e\u7b49\u4e8e 0\uff0c\u8be5 ProducerBatch \u9996\u6b21\u53d1\u9001\u5931\u8d25\u540e\u5c06\u76f4\u63a5\u8fdb\u5165\u5931\u8d25\u961f\u5217")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"MaxReservedAttempts"),(0,r.yg)("td",{parentName:"tr",align:"left"},"Integer"),(0,r.yg)("td",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u53ea\u4fdd\u7559\u6700\u8fd1\u7684 11 \u6b21"),(0,r.yg)("td",{parentName:"tr",align:"left"},"\u6bcf\u4e2aBatch\u6bcf\u6b21\u88ab\u5c1d\u8bd5\u53d1\u9001\u90fd\u5bf9\u5e94\u7740\u4e00\u4e2aAttemp\uff0c\u6b64\u53c2\u6570\u7528\u6765\u63a7\u5236\u8fd4\u56de\u7ed9\u7528\u6237\u7684 attempt \u4e2a\u6570\uff0c\u9ed8\u8ba4\u53ea\u4fdd\u7559\u6700\u8fd1\u7684 11 \u6b21 attempt \u4fe1\u606f\u3002\u8be5\u53c2\u6570\u8d8a\u5927\u80fd\u8ba9\u60a8\u8ffd\u6eaf\u66f4\u591a\u7684\u4fe1\u606f\uff0c\u4f46\u540c\u65f6\u4e5f\u4f1a\u6d88\u8017\u66f4\u591a\u7684\u5185\u5b58")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"BaseRetryBackoffMs"),(0,r.yg)("td",{parentName:"tr",align:"left"},"Integer"),(0,r.yg)("td",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u4e3a 100 \u6beb\u79d2"),(0,r.yg)("td",{parentName:"tr",align:"left"},"\u9996\u6b21\u91cd\u8bd5\u7684\u9000\u907f\u65f6\u95f4 client\u91c7\u6837\u6307\u6570\u9000\u907f\u7b97\u6cd5\uff0c\u7b2c N \u6b21\u91cd\u8bd5\u7684\u8ba1\u5212\u7b49\u5f85\u65f6\u95f4\u4e3a baseRetryBackoffMs * 2^(N-1")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"MaxRetryBackoffMs"),(0,r.yg)("td",{parentName:"tr",align:"left"},"Integer"),(0,r.yg)("td",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u4e3a 50 \u79d2"),(0,r.yg)("td",{parentName:"tr",align:"left"},"\u91cd\u8bd5\u7684\u6700\u5927\u9000\u907f\u65f6\u95f4")))),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u83b7\u53d6 ",(0,r.yg)("inlineCode",{parentName:"li"},"topic"))),(0,r.yg)("p",null,(0,r.yg)("img",{src:n(76012).c})),(0,r.yg)("h3",{id:"242-\u89c4\u5219\u548c\u9009\u62e9\u5668\u914d\u7f6e"},"2.4.2 \u89c4\u5219\u548c\u9009\u62e9\u5668\u914d\u7f6e"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u63d2\u4ef6\u548c\u9009\u62e9\u5668\u914d\u7f6e\u3002\u8bf7\u67e5\u770b: ",(0,r.yg)("a",{parentName:"li",href:"/zh/docs/user-guide/admin-usage/selector-and-rule"},"Selector and rule config"),".")),(0,r.yg)("h2",{id:"25-logging\u4fe1\u606f"},"2.5 Logging\u4fe1\u606f"),(0,r.yg)("p",null,"\u91c7\u96c6\u7684access log\u7684\u5b57\u6bb5\u5982\u4e0b\uff1a"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"\u5b57\u6bb5\u540d\u79f0"),(0,r.yg)("th",{parentName:"tr",align:"center"},"\u542b\u4e49"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u5907\u6ce8"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"clientIp"),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u5ba2\u6237\u7aefIP"),(0,r.yg)("td",{parentName:"tr",align:"left"}),(0,r.yg)("td",{parentName:"tr",align:"left"})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"timeLocal"),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u8bf7\u6c42\u65f6\u95f4\u5b57\u7b26\u4e32,  \u683c\u5f0f\uff1ayyyy-MM-dd HH:mm:ss.SSS"),(0,r.yg)("td",{parentName:"tr",align:"left"}),(0,r.yg)("td",{parentName:"tr",align:"left"})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"method"),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u8bf7\u6c42\u65b9\u6cd5(\u4e0d\u540crpc\u7c7b\u578b\u4e0d\u4e00\u6837\uff0chttp\u7c7b\u7684\u4e3a:get,post\u7b49\u5f85\uff0crpc\u7c7b\u7684\u4e3a\u63a5\u53e3\u540d\u79f0)"),(0,r.yg)("td",{parentName:"tr",align:"left"}),(0,r.yg)("td",{parentName:"tr",align:"left"})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"requestHeader"),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u8bf7\u6c42\u5934(json\u683c\u5f0f)"),(0,r.yg)("td",{parentName:"tr",align:"left"}),(0,r.yg)("td",{parentName:"tr",align:"left"})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"responseHeader"),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u54cd\u5e94\u5934(json\u683c\u5f0f)"),(0,r.yg)("td",{parentName:"tr",align:"left"}),(0,r.yg)("td",{parentName:"tr",align:"left"})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"queryParams"),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u8bf7\u6c42\u67e5\u8be2\u53c2\u6570"),(0,r.yg)("td",{parentName:"tr",align:"left"}),(0,r.yg)("td",{parentName:"tr",align:"left"})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"requestBody"),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u8bf7\u6c42Body\uff08\u4e8c\u8fdb\u5236\u7c7b\u578b\u7684body\u4e0d\u4f1a\u91c7\u96c6\uff09"),(0,r.yg)("td",{parentName:"tr",align:"left"}),(0,r.yg)("td",{parentName:"tr",align:"left"})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"requestUri"),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u8bf7\u6c42uri"),(0,r.yg)("td",{parentName:"tr",align:"left"}),(0,r.yg)("td",{parentName:"tr",align:"left"})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"responseBody"),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u54cd\u5e94body"),(0,r.yg)("td",{parentName:"tr",align:"left"}),(0,r.yg)("td",{parentName:"tr",align:"left"})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"responseContentLength"),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u54cd\u5e94body\u5927\u5c0f"),(0,r.yg)("td",{parentName:"tr",align:"left"}),(0,r.yg)("td",{parentName:"tr",align:"left"})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"rpcType"),(0,r.yg)("td",{parentName:"tr",align:"center"},"rpc\u7c7b\u578b"),(0,r.yg)("td",{parentName:"tr",align:"left"}),(0,r.yg)("td",{parentName:"tr",align:"left"})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"status"),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u54cd\u5e94\u7801"),(0,r.yg)("td",{parentName:"tr",align:"left"}),(0,r.yg)("td",{parentName:"tr",align:"left"})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"upstreamIp"),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u4e0a\u6e38(\u63d0\u4f9b\u670d\u52a1\u7684\u7a0b\u5e8f)IP"),(0,r.yg)("td",{parentName:"tr",align:"left"}),(0,r.yg)("td",{parentName:"tr",align:"left"})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"upstreamResponseTime"),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u4e0a\u6e38(\u63d0\u4f9b\u670d\u52a1\u7684\u7a0b\u5e8f)\u54cd\u5e94\u8bf7\u6c42\u7684\u8017\u65f6(\u6beb\u79d2ms)"),(0,r.yg)("td",{parentName:"tr",align:"left"}),(0,r.yg)("td",{parentName:"tr",align:"left"})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"userAgent"),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u8bf7\u6c42\u7684\u7528\u6237\u4ee3\u7406"),(0,r.yg)("td",{parentName:"tr",align:"left"}),(0,r.yg)("td",{parentName:"tr",align:"left"})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"host"),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u8bf7\u6c42\u7684host"),(0,r.yg)("td",{parentName:"tr",align:"left"}),(0,r.yg)("td",{parentName:"tr",align:"left"})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"module"),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u8bf7\u6c42\u7684\u6a21\u5757"),(0,r.yg)("td",{parentName:"tr",align:"left"}),(0,r.yg)("td",{parentName:"tr",align:"left"})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"path"),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u8bf7\u6c42\u7684\u8def\u5f84path"),(0,r.yg)("td",{parentName:"tr",align:"left"}),(0,r.yg)("td",{parentName:"tr",align:"left"})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"traceId"),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u8bf7\u6c42\u7684\u94fe\u8def\u8ffd\u8e2aID"),(0,r.yg)("td",{parentName:"tr",align:"left"},"\u9700\u8981\u63a5\u5165\u94fe\u8def\u8ffd\u8e2a\u63d2\u4ef6\uff0c\u5982skywalking,zipkin"),(0,r.yg)("td",{parentName:"tr",align:"left"})))),(0,r.yg)("h2",{id:"26-\u793a\u4f8b"},"2.6 \u793a\u4f8b"),(0,r.yg)("h3",{id:"261-\u901a\u8fc7\u817e\u8baf\u4e91cls\u65e5\u5fd7\u5e73\u53f0\u6536\u96c6\u65e5\u5fd7"},"2.6.1 \u901a\u8fc7\u817e\u8baf\u4e91cls\u65e5\u5fd7\u5e73\u53f0\u6536\u96c6\u65e5\u5fd7"),(0,r.yg)("h4",{id:"2611-\u63d2\u4ef6\u914d\u7f6e"},"2.6.1.1 \u63d2\u4ef6\u914d\u7f6e"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u5f00\u542f\u63d2\u4ef6\uff0c\u5e76\u914d\u7f6e tencent cls\u63d2\u4ef6,\u914d\u7f6e\u5982\u4e0b\uff1a")),(0,r.yg)("p",null,(0,r.yg)("img",{src:n(65980).c})),(0,r.yg)("h4",{id:"2612-\u9009\u62e9\u5668\u914d\u7f6e"},"2.6.1.2 \u9009\u62e9\u5668\u914d\u7f6e"),(0,r.yg)("p",null,(0,r.yg)("img",{src:n(84119).c})),(0,r.yg)("h4",{id:"2613-\u89c4\u5219\u914d\u7f6e"},"2.6.1.3 \u89c4\u5219\u914d\u7f6e"),(0,r.yg)("p",null,(0,r.yg)("img",{src:n(67720).c})),(0,r.yg)("h4",{id:"2614-\u53d1\u9001\u8bf7\u6c42"},"2.6.1.4 \u53d1\u9001\u8bf7\u6c42"),(0,r.yg)("p",null,(0,r.yg)("img",{src:n(32852).c})),(0,r.yg)("h4",{id:"2615-tencent-sls-\u65e5\u5fd7\u5e73\u53f0\u5c55\u793a"},"2.6.1.5 tencent sls \u65e5\u5fd7\u5e73\u53f0\u5c55\u793a"),(0,r.yg)("p",null,(0,r.yg)("img",{src:n(1655).c})),(0,r.yg)("h1",{id:"3-\u5982\u4f55\u7981\u7528\u63d2\u4ef6"},"3. \u5982\u4f55\u7981\u7528\u63d2\u4ef6"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u5728 ",(0,r.yg)("inlineCode",{parentName:"li"},"shenyu-admin")," --\x3e \u57fa\u7840\u914d\u7f6e --\x3e \u63d2\u4ef6\u7ba1\u7406-> ",(0,r.yg)("inlineCode",{parentName:"li"},"loggingTencentCls")," \uff0c\u8bbe\u7f6e\u4e3a\u5173\u95ed\u3002")))}c.isMDXComponent=!0},32852:(e,t,n)=>{n.d(t,{c:()=>a});const a=n.p+"assets/images/call-service-82c34bd837e86ae6d808a8f86dbd2a50.png"},65980:(e,t,n)=>{n.d(t,{c:()=>a});const a=n.p+"assets/images/plugin-config-zh-0c5e16895be6c06281320d9d17bab088.jpg"},67720:(e,t,n)=>{n.d(t,{c:()=>a});const a=n.p+"assets/images/tencent-cls-log-rule-zh-8e506375f5a83971d0b6206f418e94b5.png"},84119:(e,t,n)=>{n.d(t,{c:()=>a});const a=n.p+"assets/images/tencent-cls-log-selector-zh-3fe66523c49416d18df1f97605c0c53e.png"},1655:(e,t,n)=>{n.d(t,{c:()=>a});const a=n.p+"assets/images/tencent-cls-log-e9fa8f8a850ad5ea6bde2cb42d8fa125.jpg"},76012:(e,t,n)=>{n.d(t,{c:()=>a});const a=n.p+"assets/images/tencent-topic-2d1def01f076253ff3d13b62a1858cde.png"},70488:(e,t,n)=>{n.d(t,{c:()=>a});const a=n.p+"assets/images/plugin_use_zh-cf88744e5c4b7cc85accbcf32af6e1a3.jpg"}}]);