"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[51610],{95788:(e,t,n)=>{n.d(t,{Iu:()=>p,yg:()=>s});var a=n(11504);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var y=a.createContext({}),u=function(e){var t=a.useContext(y),n=t;return e&&(n="function"==typeof e?e(t):g(g({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(y.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},o=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,y=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(n),o=l,s=d["".concat(y,".").concat(o)]||d[o]||m[o]||r;return n?a.createElement(s,g(g({ref:t},p),{},{components:n})):a.createElement(s,g({ref:t},p))}));function s(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,g=new Array(r);g[0]=o;var i={};for(var y in t)hasOwnProperty.call(t,y)&&(i[y]=t[y]);i.originalType=e,i[d]="string"==typeof e?e:l,g[1]=i;for(var u=2;u<r;u++)g[u]=n[u];return a.createElement.apply(null,g)}return a.createElement.apply(null,n)}o.displayName="MDXCreateElement"},23876:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>g,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>y});var a=n(45072),l=(n(11504),n(95788));const r={title:"Logging-Huawei-Lts\u63d2\u4ef6",keywords:["Logging","HuaweiLts"],description:"Logging-HuaweiLts\u63d2\u4ef6"},g="1. \u6982\u8ff0",i={unversionedId:"plugin-center/observability/logging-huawei-lts",id:"plugin-center/observability/logging-huawei-lts",isDocsHomePage:!1,title:"Logging-Huawei-Lts\u63d2\u4ef6",description:"Logging-HuaweiLts\u63d2\u4ef6",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/plugin-center/observability/logging-huawei-lts.md",sourceDirName:"plugin-center/observability",slug:"/plugin-center/observability/logging-huawei-lts",permalink:"/zh/docs/next/plugin-center/observability/logging-huawei-lts",editUrl:"https://github.com/apache/shenyu-website/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/plugin-center/observability/logging-huawei-lts.md",version:"current",frontMatter:{title:"Logging-Huawei-Lts\u63d2\u4ef6",keywords:["Logging","HuaweiLts"],description:"Logging-HuaweiLts\u63d2\u4ef6"},sidebar:"tutorialSidebar",previous:{title:"Logging-ElasticSearch\u63d2\u4ef6",permalink:"/zh/docs/next/plugin-center/observability/logging-elasticsearch"},next:{title:"Logging-Kafka\u63d2\u4ef6",permalink:"/zh/docs/next/plugin-center/observability/logging-kafka"}},y=[{value:"1.1 \u63d2\u4ef6\u540d\u79f0",id:"11-\u63d2\u4ef6\u540d\u79f0",children:[]},{value:"1.2 \u9002\u7528\u573a\u666f",id:"12-\u9002\u7528\u573a\u666f",children:[]},{value:"1.3 \u63d2\u4ef6\u529f\u80fd",id:"13-\u63d2\u4ef6\u529f\u80fd",children:[]},{value:"1.4 \u63d2\u4ef6\u4ee3\u7801",id:"14-\u63d2\u4ef6\u4ee3\u7801",children:[]},{value:"1.5 \u6dfb\u52a0\u81ea\u54ea\u4e2ashenyu\u7248\u672c",id:"15-\u6dfb\u52a0\u81ea\u54ea\u4e2ashenyu\u7248\u672c",children:[]},{value:"2.1 \u63d2\u4ef6\u4f7f\u7528\u6d41\u7a0b\u56fe",id:"21-\u63d2\u4ef6\u4f7f\u7528\u6d41\u7a0b\u56fe",children:[]},{value:"2.2 \u5bfc\u5165pom",id:"22-\u5bfc\u5165pom",children:[]},{value:"2.3 \u542f\u7528\u63d2\u4ef6",id:"23-\u542f\u7528\u63d2\u4ef6",children:[]},{value:"2.4 \u914d\u7f6e\u63d2\u4ef6",id:"24-\u914d\u7f6e\u63d2\u4ef6",children:[{value:"2.4.1 \u63d2\u4ef6\u914d\u7f6e",id:"241-\u63d2\u4ef6\u914d\u7f6e",children:[]},{value:"2.4.2 \u89c4\u5219\u548c\u9009\u62e9\u5668\u914d\u7f6e",id:"242-\u89c4\u5219\u548c\u9009\u62e9\u5668\u914d\u7f6e",children:[]}]},{value:"2.5 Logging\u4fe1\u606f",id:"25-logging\u4fe1\u606f",children:[]},{value:"2.6 \u793a\u4f8b",id:"26-\u793a\u4f8b",children:[{value:"2.6.1 \u901a\u8fc7\u534e\u4e3a\u4e91lts\u65e5\u5fd7\u5e73\u53f0\u6536\u96c6\u65e5\u5fd7",id:"261-\u901a\u8fc7\u534e\u4e3a\u4e91lts\u65e5\u5fd7\u5e73\u53f0\u6536\u96c6\u65e5\u5fd7",children:[]}]}],u={toc:y},p="wrapper";function d(e){let{components:t,...r}=e;return(0,l.yg)(p,(0,a.c)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("h1",{id:"1-\u6982\u8ff0"},"1. \u6982\u8ff0"),(0,l.yg)("h2",{id:"11-\u63d2\u4ef6\u540d\u79f0"},"1.1 \u63d2\u4ef6\u540d\u79f0"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Huawei Lts \u65e5\u5fd7\u63d2\u4ef6")),(0,l.yg)("h2",{id:"12-\u9002\u7528\u573a\u666f"},"1.2 \u9002\u7528\u573a\u666f"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"\u6536\u96c6\u65e5\u5fd7\u5230",(0,l.yg)("inlineCode",{parentName:"li"},"Huawei lts"),"\u65e5\u5fd7\u5e73\u53f0\uff0c\u5e76\u901a\u8fc7",(0,l.yg)("inlineCode",{parentName:"li"},"Huawei lts"),"\u65e5\u5fd7\u5e73\u53f0\u8fdb\u884c\u6570\u636e\u5206\u6790")),(0,l.yg)("h2",{id:"13-\u63d2\u4ef6\u529f\u80fd"},"1.3 \u63d2\u4ef6\u529f\u80fd"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"\u7f51\u5173\u63a5\u6536\u5ba2\u6237\u7aef\u8bf7\u6c42\uff0c\u5411\u670d\u52a1\u7aef\u8f6c\u53d1\u8bf7\u6c42\uff0c\u5e76\u5c06\u670d\u52a1\u7aef\u7ed3\u679c\u8fd4\u56de\u7ed9\u5ba2\u6237\u7aef.\u7f51\u5173\u53ef\u4ee5\u8bb0\u5f55\u4e0b\u6bcf\u6b21\u8bf7\u6c42\u5bf9\u5e94\u7684\u8be6\u7ec6\u4fe1\u606f\u3002"),(0,l.yg)("li",{parentName:"ul"},"\u63d2\u4ef6\u4fbf\u662f\u8bb0\u5f55\u8bbf\u95ee\u65e5\u5fd7\u5e76\u5c06\u8bbf\u95ee\u65e5\u5fd7\u53d1\u9001\u5230Huawei lts\u7684\u63d2\u4ef6.")),(0,l.yg)("h2",{id:"14-\u63d2\u4ef6\u4ee3\u7801"},"1.4 \u63d2\u4ef6\u4ee3\u7801"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"\u6838\u5fc3\u6a21\u5757 ",(0,l.yg)("inlineCode",{parentName:"li"},"shenyu-plugin-logging-huawei-lts")),(0,l.yg)("li",{parentName:"ul"},"\u6838\u5fc3\u7c7b `org.apache.shenyu.plugin.huawei.lts.LoggingHuaweiLtsPlugin"),(0,l.yg)("li",{parentName:"ul"},"\u6838\u5fc3\u7c7b `org.apache.shenyu.plugin.huawei.lts.client.HuaweiLtsLogCollectClient")),(0,l.yg)("h2",{id:"15-\u6dfb\u52a0\u81ea\u54ea\u4e2ashenyu\u7248\u672c"},"1.5 \u6dfb\u52a0\u81ea\u54ea\u4e2ashenyu\u7248\u672c"),(0,l.yg)("p",null,"ShenYu 2.6.0"),(0,l.yg)("h1",{id:"2-\u5982\u4f55\u4f7f\u7528\u63d2\u4ef6"},"2. \u5982\u4f55\u4f7f\u7528\u63d2\u4ef6"),(0,l.yg)("h2",{id:"21-\u63d2\u4ef6\u4f7f\u7528\u6d41\u7a0b\u56fe"},"2.1 \u63d2\u4ef6\u4f7f\u7528\u6d41\u7a0b\u56fe"),(0,l.yg)("p",null,(0,l.yg)("img",{src:n(70488).c})),(0,l.yg)("h2",{id:"22-\u5bfc\u5165pom"},"2.2 \u5bfc\u5165pom"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"\u5728ShenYu-Bootstrap\u5bfc\u5165\u5bf9\u5e94\u7684pom\u4f9d\u8d56\u3002")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-xml"},"\x3c!-- shenyu logging-huaweilts plugin start --\x3e\n<dependency>\n    <groupId>org.apache.shenyu</groupId>\n    <artifactId>shenyu-spring-boot-starter-plugin-logging-huawei-lts</artifactId>\n    <version>${project.version}</version>\n</dependency>\n\x3c!-- shenyu logging-huaweilts plugin end --\x3e\n")),(0,l.yg)("h2",{id:"23-\u542f\u7528\u63d2\u4ef6"},"2.3 \u542f\u7528\u63d2\u4ef6"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"\u5728 ",(0,l.yg)("inlineCode",{parentName:"li"},"shenyu-admin")," --\x3e \u57fa\u7840\u914d\u7f6e --\x3e \u63d2\u4ef6\u7ba1\u7406-> ",(0,l.yg)("inlineCode",{parentName:"li"},"loggingHuaweiLts")," \uff0c\u8bbe\u7f6e\u4e3a\u5f00\u542f\u3002")),(0,l.yg)("h2",{id:"24-\u914d\u7f6e\u63d2\u4ef6"},"2.4 \u914d\u7f6e\u63d2\u4ef6"),(0,l.yg)("h3",{id:"241-\u63d2\u4ef6\u914d\u7f6e"},"2.4.1 \u63d2\u4ef6\u914d\u7f6e"),(0,l.yg)("h3",{id:""},(0,l.yg)("img",{src:n(6396).c})),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"\u914d\u7f6e\u9879"),(0,l.yg)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,l.yg)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.yg)("th",{parentName:"tr",align:null},"\u5907\u6ce8"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"projectId"),(0,l.yg)("td",{parentName:"tr",align:null},"\u534e\u4e3a\u4e91\u5e10\u53f7\u7684\u9879\u76eeID\uff08project id\uff09\u3002"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5fc5\u586b")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"accessKeyId"),(0,l.yg)("td",{parentName:"tr",align:null},"\u534e\u4e3a\u4e91\u5e10\u53f7\u7684AK\u3002"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5fc5\u586b")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"accessKeySecret"),(0,l.yg)("td",{parentName:"tr",align:null},"\u534e\u4e3a\u4e91\u5e10\u53f7\u7684SK\u3002"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5fc5\u586b")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"regionName"),(0,l.yg)("td",{parentName:"tr",align:null},"\u4e91\u65e5\u5fd7\u670d\u52a1\u7684\u533a\u57df\u3002"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5fc5\u586b")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"logGroupId"),(0,l.yg)("td",{parentName:"tr",align:null},"LTS\u7684\u65e5\u5fd7\u7ec4ID\u3002"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5fc5\u586b")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"logStreamId"),(0,l.yg)("td",{parentName:"tr",align:null},"LTS\u7684\u65e5\u5fd7\u6d41ID\u3002"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5fc5\u586b")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"totalSizeInBytes"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5355\u4e2aproducer\u5b9e\u4f8b\u80fd\u7f13\u5b58\u7684\u65e5\u5fd7\u5927\u5c0f\u4e0a\u9650\u3002"),(0,l.yg)("td",{parentName:"tr",align:null},"int"),(0,l.yg)("td",{parentName:"tr",align:null},"\u9009\u586b")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"maxBlockMs"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5982\u679c producer \u53ef\u7528\u7a7a\u95f4\u4e0d\u8db3\uff0c\u8c03\u7528\u8005\u5728 send \u65b9\u6cd5\u4e0a\u7684\u6700\u5927\u963b\u585e\u65f6\u95f4\uff0c\u5355\u4f4d\u4e3a\u6beb\u79d2\u3002\u9ed8\u8ba4\u4e3a 60 \u79d2\uff0860000\u6beb\u79d2\uff09\uff0c\u5efa\u8bae\u4e3a0\u79d2\u3002\u5f53maxBlockMs\u503c>=0\u65f6\uff0c\u5219\u963b\u585e\u5230\u8bbe\u7f6e\u7684\u65f6\u95f4\uff0c\u5982\u679c\u5230\u8fbe\u963b\u585e\u65f6\u95f4\uff0c\u8fd8\u662f\u4e0d\u80fd\u83b7\u53d6\u5230\u5185\u5b58\uff0c\u5373\u62a5\u9519\u4e14\u4e22\u5f03\u65e5\u5fd7\u3002\u5f53maxBlockMs\u503c=-1\u65f6\uff0c\u5219\u4e00\u76f4\u963b\u585e\u5230\u53d1\u9001\u6210\u529f\uff0c\u4e14\u4e0d\u4f1a\u4e22\u5f03\u65e5\u5fd7\u3002"),(0,l.yg)("td",{parentName:"tr",align:null},"long"),(0,l.yg)("td",{parentName:"tr",align:null},"\u9009\u586b")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"ioThreadCount"),(0,l.yg)("td",{parentName:"tr",align:null},"\u6267\u884c\u65e5\u5fd7\u53d1\u9001\u4efb\u52a1\u7684\u7ebf\u7a0b\u6c60\u5927\u5c0f\u3002"),(0,l.yg)("td",{parentName:"tr",align:null},"int"),(0,l.yg)("td",{parentName:"tr",align:null},"\u9009\u586b")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"batchSizeThresholdInBytes"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5f53\u4e00\u4e2a ProducerBatch \u4e2d\u7f13\u5b58\u7684\u65e5\u5fd7\u5927\u5c0f\u5927\u4e8e\u7b49\u4e8e batchSizeThresholdInBytes \u65f6\uff0c\u8be5 batch \u5c06\u88ab\u53d1\u9001\u3002"),(0,l.yg)("td",{parentName:"tr",align:null},"int"),(0,l.yg)("td",{parentName:"tr",align:null},"\u9009\u586b")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"batchCountThreshold"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5f53\u4e00\u4e2a ProducerBatch \u4e2d\u7f13\u5b58\u7684\u65e5\u5fd7\u6761\u6570\u5927\u4e8e\u7b49\u4e8e batchCountThreshold \u65f6\uff0c\u8be5 batch \u5c06\u88ab\u53d1\u9001\u3002"),(0,l.yg)("td",{parentName:"tr",align:null},"int"),(0,l.yg)("td",{parentName:"tr",align:null},"\u9009\u586b")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"lingerMs"),(0,l.yg)("td",{parentName:"tr",align:null},"\u4e00\u4e2a ProducerBatch \u4ece\u521b\u5efa\u5230\u53ef\u53d1\u9001\u7684\u9017\u7559\u65f6\u95f4\u3002"),(0,l.yg)("td",{parentName:"tr",align:null},"int"),(0,l.yg)("td",{parentName:"tr",align:null},"\u9009\u586b")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"retries"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5982\u679c\u67d0\u4e2a ProducerBatch \u9996\u6b21\u53d1\u9001\u5931\u8d25\uff0c\u80fd\u591f\u5bf9\u5176\u91cd\u8bd5\u7684\u6b21\u6570\uff0c\u5efa\u8bae\u4e3a 3 \u6b21\u3002\u5982\u679c retries \u5c0f\u4e8e\u7b49\u4e8e 0\uff0c\u8be5 ProducerBatch \u9996\u6b21\u53d1\u9001\u5931\u8d25\u540e\u5c06\u76f4\u63a5\u8fdb\u5165\u5931\u8d25\u961f\u5217\u3002"),(0,l.yg)("td",{parentName:"tr",align:null},"int"),(0,l.yg)("td",{parentName:"tr",align:null},"\u9009\u586b")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"baseRetryBackoffMs"),(0,l.yg)("td",{parentName:"tr",align:null},"\u9996\u6b21\u91cd\u8bd5\u7684\u9000\u907f\u65f6\u95f4\u3002"),(0,l.yg)("td",{parentName:"tr",align:null},"long"),(0,l.yg)("td",{parentName:"tr",align:null},"\u9009\u586b")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"maxRetryBackoffMs"),(0,l.yg)("td",{parentName:"tr",align:null},"\u91cd\u8bd5\u7684\u6700\u5927\u9000\u907f\u65f6\u95f4\u3002"),(0,l.yg)("td",{parentName:"tr",align:null},"long"),(0,l.yg)("td",{parentName:"tr",align:null},"\u9009\u586b")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"giveUpExtraLongSingleLog"),(0,l.yg)("td",{parentName:"tr",align:null},"\u8d85\u8fc71M\u7684\u65e5\u5fd7, \u62c6\u5206\u540e\u4e22\u5f03\u5927\u4e8e1M\u7684\u6570\u636e\u3002"),(0,l.yg)("td",{parentName:"tr",align:null},"boolean"),(0,l.yg)("td",{parentName:"tr",align:null},"\u9009\u586b")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"enableLocalTest"),(0,l.yg)("td",{parentName:"tr",align:null},"\u662f\u5426\u5f00\u542f\u8de8\u4e91\u4e0a\u62a5\u65e5\u5fd7"),(0,l.yg)("td",{parentName:"tr",align:null},"boolean"),(0,l.yg)("td",{parentName:"tr",align:null},"\u9009\u586b")))),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"\u83b7\u53d6 ",(0,l.yg)("inlineCode",{parentName:"li"},"regionName"))),(0,l.yg)("p",null,(0,l.yg)("img",{src:n(41788).c})),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},(0,l.yg)("strong",{parentName:"th"},"\u533a\u57df\u540d\u79f0")),(0,l.yg)("th",{parentName:"tr",align:null},(0,l.yg)("strong",{parentName:"th"},"RegionName")))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"\u534e\u5317-\u5317\u4eac\u4e8c"),(0,l.yg)("td",{parentName:"tr",align:null},"cn-north-2")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"\u534e\u5317-\u5317\u4eac\u56db"),(0,l.yg)("td",{parentName:"tr",align:null},"cn-north-4")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"\u534e\u5317-\u5317\u4eac\u4e00"),(0,l.yg)("td",{parentName:"tr",align:null},"cn-north-1")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"\u534e\u4e1c-\u4e0a\u6d77\u4e8c"),(0,l.yg)("td",{parentName:"tr",align:null},"cn-east-2")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"\u534e\u4e1c-\u4e0a\u6d77\u4e00"),(0,l.yg)("td",{parentName:"tr",align:null},"cn-east-3")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"\u534e\u5357-\u5e7f\u5dde"),(0,l.yg)("td",{parentName:"tr",align:null},"cn-south-1")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"\u534e\u5357-\u6df1\u5733"),(0,l.yg)("td",{parentName:"tr",align:null},"cn-south-2")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"\u897f\u5357-\u8d35\u9633\u4e00"),(0,l.yg)("td",{parentName:"tr",align:null},"cn-southwest-2")))),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"\u83b7\u53d6 ",(0,l.yg)("inlineCode",{parentName:"li"},"projectId"))),(0,l.yg)("p",null,(0,l.yg)("img",{src:n(27076).c})),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"\u83b7\u53d6 ",(0,l.yg)("inlineCode",{parentName:"li"},"accessKeyId"),"\u4e0e",(0,l.yg)("inlineCode",{parentName:"li"},"accessKeySecret"))),(0,l.yg)("p",null,(0,l.yg)("img",{src:n(64847).c})),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"\u83b7\u53d6 ",(0,l.yg)("inlineCode",{parentName:"li"},"logGroupId"),"\u4e0e",(0,l.yg)("inlineCode",{parentName:"li"},"logStreamId"))),(0,l.yg)("p",null,(0,l.yg)("img",{src:n(92520).c})),(0,l.yg)("p",null,(0,l.yg)("img",{src:n(79140).c})),(0,l.yg)("h3",{id:"242-\u89c4\u5219\u548c\u9009\u62e9\u5668\u914d\u7f6e"},"2.4.2 \u89c4\u5219\u548c\u9009\u62e9\u5668\u914d\u7f6e"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"\u63d2\u4ef6\u548c\u9009\u62e9\u5668\u914d\u7f6e\u3002\u8bf7\u67e5\u770b: ",(0,l.yg)("a",{parentName:"li",href:"https://shenyu.apache.org/zh/docs/user-guide/admin-usage/selector-and-rule"},"Selector and rule config"),".")),(0,l.yg)("h2",{id:"25-logging\u4fe1\u606f"},"2.5 Logging\u4fe1\u606f"),(0,l.yg)("p",null,"\u91c7\u96c6\u7684access log\u7684\u5b57\u6bb5\u5982\u4e0b\uff1a"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"\u5b57\u6bb5\u540d\u79f0"),(0,l.yg)("th",{parentName:"tr",align:null},"\u542b\u4e49"),(0,l.yg)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,l.yg)("th",{parentName:"tr",align:null},"\u5907\u6ce8"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"clientIp"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5ba2\u6237\u7aefIP"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"timeLocal"),(0,l.yg)("td",{parentName:"tr",align:null},"\u8bf7\u6c42\u65f6\u95f4\u5b57\u7b26\u4e32, \u683c\u5f0f\uff1ayyyy-MM-dd HH:mm:ss.SSS"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"method"),(0,l.yg)("td",{parentName:"tr",align:null},"\u8bf7\u6c42\u65b9\u6cd5(\u4e0d\u540crpc\u7c7b\u578b\u4e0d\u4e00\u6837\uff0chttp\u7c7b\u7684\u4e3a:get,post\u7b49\u5f85\uff0crpc\u7c7b\u7684\u4e3a\u63a5\u53e3\u540d\u79f0)"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"requestHeader"),(0,l.yg)("td",{parentName:"tr",align:null},"\u8bf7\u6c42\u5934(json\u683c\u5f0f)"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"responseHeader"),(0,l.yg)("td",{parentName:"tr",align:null},"\u54cd\u5e94\u5934(json\u683c\u5f0f)"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"queryParams"),(0,l.yg)("td",{parentName:"tr",align:null},"\u8bf7\u6c42\u67e5\u8be2\u53c2\u6570"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"requestBody"),(0,l.yg)("td",{parentName:"tr",align:null},"\u8bf7\u6c42Body\uff08\u4e8c\u8fdb\u5236\u7c7b\u578b\u7684body\u4e0d\u4f1a\u91c7\u96c6\uff09"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"requestUri"),(0,l.yg)("td",{parentName:"tr",align:null},"\u8bf7\u6c42uri"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"responseBody"),(0,l.yg)("td",{parentName:"tr",align:null},"\u54cd\u5e94body"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"responseContentLength"),(0,l.yg)("td",{parentName:"tr",align:null},"\u54cd\u5e94body\u5927\u5c0f"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"rpcType"),(0,l.yg)("td",{parentName:"tr",align:null},"rpc\u7c7b\u578b"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"status"),(0,l.yg)("td",{parentName:"tr",align:null},"\u54cd\u5e94\u7801"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"upstreamIp"),(0,l.yg)("td",{parentName:"tr",align:null},"\u4e0a\u6e38(\u63d0\u4f9b\u670d\u52a1\u7684\u7a0b\u5e8f)IP"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"upstreamResponseTime"),(0,l.yg)("td",{parentName:"tr",align:null},"\u4e0a\u6e38(\u63d0\u4f9b\u670d\u52a1\u7684\u7a0b\u5e8f)\u54cd\u5e94\u8bf7\u6c42\u7684\u8017\u65f6(\u6beb\u79d2ms)"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"userAgent"),(0,l.yg)("td",{parentName:"tr",align:null},"\u8bf7\u6c42\u7684\u7528\u6237\u4ee3\u7406"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"host"),(0,l.yg)("td",{parentName:"tr",align:null},"\u8bf7\u6c42\u7684host"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"module"),(0,l.yg)("td",{parentName:"tr",align:null},"\u8bf7\u6c42\u7684\u6a21\u5757"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"path"),(0,l.yg)("td",{parentName:"tr",align:null},"\u8bf7\u6c42\u7684\u8def\u5f84path"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"traceId"),(0,l.yg)("td",{parentName:"tr",align:null},"\u8bf7\u6c42\u7684\u94fe\u8def\u8ffd\u8e2aID"),(0,l.yg)("td",{parentName:"tr",align:null},"\u9700\u8981\u63a5\u5165\u94fe\u8def\u8ffd\u8e2a\u63d2\u4ef6\uff0c\u5982skywalking,zipkin"),(0,l.yg)("td",{parentName:"tr",align:null})))),(0,l.yg)("h2",{id:"26-\u793a\u4f8b"},"2.6 \u793a\u4f8b"),(0,l.yg)("h3",{id:"261-\u901a\u8fc7\u534e\u4e3a\u4e91lts\u65e5\u5fd7\u5e73\u53f0\u6536\u96c6\u65e5\u5fd7"},"2.6.1 \u901a\u8fc7\u534e\u4e3a\u4e91lts\u65e5\u5fd7\u5e73\u53f0\u6536\u96c6\u65e5\u5fd7"),(0,l.yg)("h4",{id:"2611-\u63d2\u4ef6\u914d\u7f6e"},"2.6.1.1 \u63d2\u4ef6\u914d\u7f6e"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"\u5f00\u542f\u63d2\u4ef6\uff0c\u5e76\u914d\u7f6e huawei lts\u63d2\u4ef6,\u914d\u7f6e\u5982\u4e0b\uff1a")),(0,l.yg)("p",null,(0,l.yg)("img",{src:n(6396).c})),(0,l.yg)("h4",{id:"2612-\u9009\u62e9\u5668\u914d\u7f6e"},"2.6.1.2 \u9009\u62e9\u5668\u914d\u7f6e"),(0,l.yg)("p",null,(0,l.yg)("img",{src:n(42253).c})),(0,l.yg)("h4",{id:"2613-\u89c4\u5219\u914d\u7f6e"},"2.6.1.3 \u89c4\u5219\u914d\u7f6e"),(0,l.yg)("p",null,(0,l.yg)("img",{src:n(67616).c})),(0,l.yg)("h4",{id:"2614-\u53d1\u9001\u8bf7\u6c42"},"2.6.1.4 \u53d1\u9001\u8bf7\u6c42"),(0,l.yg)("p",null,(0,l.yg)("img",{src:n(73640).c})),(0,l.yg)("h4",{id:"2615-hauwei-lts\u65e5\u5fd7\u5e73\u53f0\u5c55\u793a"},"2.6.1.5 hauwei lts\u65e5\u5fd7\u5e73\u53f0\u5c55\u793a"),(0,l.yg)("p",null,(0,l.yg)("img",{src:n(48376).c})),(0,l.yg)("h1",{id:"3-\u5982\u4f55\u7981\u7528\u63d2\u4ef6"},"3. \u5982\u4f55\u7981\u7528\u63d2\u4ef6"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"\u5728 ",(0,l.yg)("inlineCode",{parentName:"li"},"shenyu-admin")," --\x3e \u57fa\u7840\u914d\u7f6e --\x3e \u63d2\u4ef6\u7ba1\u7406-> ",(0,l.yg)("inlineCode",{parentName:"li"},"loggingHuaweiLts")," \uff0c\u8bbe\u7f6e\u4e3a\u5173\u95ed\u3002")))}d.isMDXComponent=!0},73640:(e,t,n)=>{n.d(t,{c:()=>a});const a=n.p+"assets/images/call-service-f861b37db3fcb62580c41f9e613c26c6.png"},64847:(e,t,n)=>{n.d(t,{c:()=>a});const a=n.p+"assets/images/huawei-lts-access-21854a21f1fa9ec0f1c6e1276e604f3b.png"},67616:(e,t,n)=>{n.d(t,{c:()=>a});const a=n.p+"assets/images/huawei-lts-log-rule-zh-66c24b13cb8f859dd6b7f17048f7009d.png"},42253:(e,t,n)=>{n.d(t,{c:()=>a});const a=n.p+"assets/images/huawei-lts-log-selector-zh-48483751e0b5e4d06c2f8ae244127e84.png"},48376:(e,t,n)=>{n.d(t,{c:()=>a});const a=n.p+"assets/images/huawei-lts-log-741297040fca951dab0ca0379ed7b2d7.png"},92520:(e,t,n)=>{n.d(t,{c:()=>a});const a=n.p+"assets/images/huawei-lts-logGroupId-71c2d0667cf39674ddc189f77ec78db9.png"},79140:(e,t,n)=>{n.d(t,{c:()=>a});const a=n.p+"assets/images/huawei-lts-logStreamId-5f509d5b340b6fb8ff101fb12448c32f.png"},27076:(e,t,n)=>{n.d(t,{c:()=>a});const a=n.p+"assets/images/huawei-lts-projectId-e1782f387d5a90f1bd59d7d8985e8fed.png"},41788:(e,t,n)=>{n.d(t,{c:()=>a});const a=n.p+"assets/images/huawei-lts-regionName-be9173dc5e3388f228d702a27685393f.png"},6396:(e,t,n)=>{n.d(t,{c:()=>a});const a=n.p+"assets/images/plugin-config-zh-086ca813491abe5936aa9d42846b497b.png"},70488:(e,t,n)=>{n.d(t,{c:()=>a});const a=n.p+"assets/images/plugin_use_zh-cf88744e5c4b7cc85accbcf32af6e1a3.jpg"}}]);