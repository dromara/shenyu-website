"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[64504],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>u});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),g=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=g(t.components);return n.createElement(d.Provider,{value:e},t.children)},k="mdxType",o={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),k=g(a),s=r,u=k["".concat(d,".").concat(s)]||k[s]||o[s]||l;return a?n.createElement(u,i(i({ref:e},m),{},{components:a})):n.createElement(u,i({ref:e},m))}));function u(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=s;var p={};for(var d in e)hasOwnProperty.call(e,d)&&(p[d]=e[d]);p.originalType=t,p[k]="string"==typeof t?t:r,i[1]=p;for(var g=2;g<l;g++)i[g]=a[g];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},801:(t,e,a)=>{a.r(e),a.d(e,{contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const l={title:"Aliyun Sls\u65e5\u5fd7\u63d2\u4ef6",keywords:["logging"],description:"logging\u63d2\u4ef6"},i="1. \u6982\u8ff0",p={unversionedId:"plugin-center/observability/logging-aliyun-sls",id:"version-2.6.0/plugin-center/observability/logging-aliyun-sls",isDocsHomePage:!1,title:"Aliyun Sls\u65e5\u5fd7\u63d2\u4ef6",description:"logging\u63d2\u4ef6",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.6.0/plugin-center/observability/logging-aliyun-sls.md",sourceDirName:"plugin-center/observability",slug:"/plugin-center/observability/logging-aliyun-sls",permalink:"/zh/docs/2.6.0/plugin-center/observability/logging-aliyun-sls",editUrl:"https://github.com/apache/shenyu-website/edit/main/i18n/zh/docusaurus-plugin-content-docs/version-2.6.0/plugin-center/observability/logging-aliyun-sls.md",version:"2.6.0",frontMatter:{title:"Aliyun Sls\u65e5\u5fd7\u63d2\u4ef6",keywords:["logging"],description:"logging\u63d2\u4ef6"},sidebar:"version-2.6.0/tutorialSidebar",previous:{title:"Waf\u63d2\u4ef6",permalink:"/zh/docs/2.6.0/plugin-center/security/waf-plugin"},next:{title:"Logging-ElasticSearch\u63d2\u4ef6",permalink:"/zh/docs/2.6.0/plugin-center/observability/logging-elasticsearch"}},d=[{value:"1.1 \u63d2\u4ef6\u540d\u79f0",id:"11-\u63d2\u4ef6\u540d\u79f0",children:[]},{value:"1.2 \u9002\u7528\u573a\u666f",id:"12-\u9002\u7528\u573a\u666f",children:[]},{value:"1.3 \u63d2\u4ef6\u529f\u80fd",id:"13-\u63d2\u4ef6\u529f\u80fd",children:[]},{value:"1.4 \u63d2\u4ef6\u4ee3\u7801",id:"14-\u63d2\u4ef6\u4ee3\u7801",children:[]},{value:"1.5 \u6dfb\u52a0\u81ea\u54ea\u4e2ashenyu\u7248\u672c",id:"15-\u6dfb\u52a0\u81ea\u54ea\u4e2ashenyu\u7248\u672c",children:[]},{value:"2.1 \u63d2\u4ef6\u4f7f\u7528\u6d41\u7a0b\u56fe",id:"21-\u63d2\u4ef6\u4f7f\u7528\u6d41\u7a0b\u56fe",children:[]},{value:"2.2 \u5bfc\u5165pom",id:"22-\u5bfc\u5165pom",children:[]},{value:"2.3 \u542f\u7528\u63d2\u4ef6",id:"23-\u542f\u7528\u63d2\u4ef6",children:[]},{value:"2.4 \u914d\u7f6e\u63d2\u4ef6",id:"24-\u914d\u7f6e\u63d2\u4ef6",children:[{value:"2.4.1 \u63d2\u4ef6\u914d\u7f6e",id:"241-\u63d2\u4ef6\u914d\u7f6e",children:[]},{value:"2.4.2 \u89c4\u5219\u548c\u9009\u62e9\u5668\u914d\u7f6e",id:"242-\u89c4\u5219\u548c\u9009\u62e9\u5668\u914d\u7f6e",children:[]}]},{value:"2.5 Logging\u4fe1\u606f",id:"25-logging\u4fe1\u606f",children:[]},{value:"2.6 \u793a\u4f8b",id:"26-\u793a\u4f8b",children:[{value:"2.6.1 \u901a\u8fc7\u963f\u91cc\u4e91sls\u65e5\u5fd7\u5e73\u53f0\u6536\u96c6\u65e5\u5fd7",id:"261-\u901a\u8fc7\u963f\u91cc\u4e91sls\u65e5\u5fd7\u5e73\u53f0\u6536\u96c6\u65e5\u5fd7",children:[]}]}],g={toc:d},m="wrapper";function k(t){let{components:e,...l}=t;return(0,r.kt)(m,(0,n.Z)({},g,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"1-\u6982\u8ff0"},"1. \u6982\u8ff0"),(0,r.kt)("h2",{id:"11-\u63d2\u4ef6\u540d\u79f0"},"1.1 \u63d2\u4ef6\u540d\u79f0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Aliyun sls \u65e5\u5fd7\u63d2\u4ef6")),(0,r.kt)("h2",{id:"12-\u9002\u7528\u573a\u666f"},"1.2 \u9002\u7528\u573a\u666f"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6536\u96c6\u65e5\u5fd7\u5230",(0,r.kt)("inlineCode",{parentName:"li"},"aliyun sls"),"\u65e5\u5fd7\u5e73\u53f0\uff0c\u5e76\u901a\u8fc7",(0,r.kt)("inlineCode",{parentName:"li"},"aliyun sls"),"\u65e5\u5fd7\u5e73\u53f0\u8fdb\u884c\u6570\u636e\u5206\u6790")),(0,r.kt)("h2",{id:"13-\u63d2\u4ef6\u529f\u80fd"},"1.3 \u63d2\u4ef6\u529f\u80fd"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u7f51\u5173\u63a5\u6536\u5ba2\u6237\u7aef\u8bf7\u6c42\uff0c\u5411\u670d\u52a1\u7aef\u8f6c\u53d1\u8bf7\u6c42\uff0c\u5e76\u5c06\u670d\u52a1\u7aef\u7ed3\u679c\u8fd4\u56de\u7ed9\u5ba2\u6237\u7aef.\u7f51\u5173\u53ef\u4ee5\u8bb0\u5f55\u4e0b\u6bcf\u6b21\u8bf7\u6c42\u5bf9\u5e94\u7684\u8be6\u7ec6\u4fe1\u606f\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u63d2\u4ef6\u4fbf\u662f\u8bb0\u5f55\u8bbf\u95ee\u65e5\u5fd7\u5e76\u5c06\u8bbf\u95ee\u65e5\u5fd7\u53d1\u9001\u5230Aliyun sls\u7684\u63d2\u4ef6.")),(0,r.kt)("h2",{id:"14-\u63d2\u4ef6\u4ee3\u7801"},"1.4 \u63d2\u4ef6\u4ee3\u7801"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u6838\u5fc3\u6a21\u5757 ",(0,r.kt)("inlineCode",{parentName:"p"},"shenyu-plugin-logging-aliyun-sls"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u6838\u5fc3\u7c7b ",(0,r.kt)("inlineCode",{parentName:"p"},"org.apache.shenyu.plugin.aliyun.sls.LoggingAliYunSlsPlugin"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u6838\u5fc3\u7c7b ",(0,r.kt)("inlineCode",{parentName:"p"},"org.apache.shenyu.plugin.aliyun.sls.client.AliyunSlsLogCollectClient")))),(0,r.kt)("h2",{id:"15-\u6dfb\u52a0\u81ea\u54ea\u4e2ashenyu\u7248\u672c"},"1.5 \u6dfb\u52a0\u81ea\u54ea\u4e2ashenyu\u7248\u672c"),(0,r.kt)("p",null,"ShenYu 2.5.0"),(0,r.kt)("h1",{id:"2-\u5982\u4f55\u4f7f\u7528\u63d2\u4ef6"},"2. \u5982\u4f55\u4f7f\u7528\u63d2\u4ef6"),(0,r.kt)("h2",{id:"21-\u63d2\u4ef6\u4f7f\u7528\u6d41\u7a0b\u56fe"},"2.1 \u63d2\u4ef6\u4f7f\u7528\u6d41\u7a0b\u56fe"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(26692).Z})),(0,r.kt)("h2",{id:"22-\u5bfc\u5165pom"},"2.2 \u5bfc\u5165pom"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5728ShenYu-Bootstrap\u5bfc\u5165\u5bf9\u5e94\u7684pom\u4f9d\u8d56\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"\x3c!-- shenyu logging-aliyunsls plugin start --\x3e\n<dependency>\n  <groupId>org.apache.shenyu</groupId>\n  <artifactId>shenyu-spring-boot-starter-plugin-logging-aliyun-sls</artifactId>\n  <version>${project.version}</version>\n</dependency>\n\x3c!-- shenyu logging-aliyunsls plugin end --\x3e\n")),(0,r.kt)("h2",{id:"23-\u542f\u7528\u63d2\u4ef6"},"2.3 \u542f\u7528\u63d2\u4ef6"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5728 ",(0,r.kt)("inlineCode",{parentName:"li"},"shenyu-admin")," --\x3e \u57fa\u7840\u914d\u7f6e --\x3e \u63d2\u4ef6\u7ba1\u7406-> ",(0,r.kt)("inlineCode",{parentName:"li"},"loggingAliyunSls")," \uff0c\u8bbe\u7f6e\u4e3a\u5f00\u542f\u3002")),(0,r.kt)("h2",{id:"24-\u914d\u7f6e\u63d2\u4ef6"},"2.4 \u914d\u7f6e\u63d2\u4ef6"),(0,r.kt)("h3",{id:"241-\u63d2\u4ef6\u914d\u7f6e"},"2.4.1 \u63d2\u4ef6\u914d\u7f6e"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(38398).Z})),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u914d\u7f6e\u9879"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u5907\u6ce8"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"accessId"),(0,r.kt)("td",{parentName:"tr",align:"left"},"String"),(0,r.kt)("td",{parentName:"tr",align:"left"},"accessId"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"accesskey"),(0,r.kt)("td",{parentName:"tr",align:"left"},"String"),(0,r.kt)("td",{parentName:"tr",align:"left"},"accesskey"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"host"),(0,r.kt)("td",{parentName:"tr",align:"left"},"String"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u4e3b\u673a\u540d\uff0c\u4f8b\u5982\uff1a:cn-guangzhou.log.aliyuncs.com"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"projectName"),(0,r.kt)("td",{parentName:"tr",align:"left"},"String"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u9879\u76ee\u540d"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u53ef\u9009, \u9ed8\u8ba4\u503c:shenyu")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"logStoreName"),(0,r.kt)("td",{parentName:"tr",align:"left"},"String"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5b58\u50a8store\u540d\u79f0"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u53ef\u9009, \u9ed8\u8ba4\u503c:shenyu-logstore")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"topic"),(0,r.kt)("td",{parentName:"tr",align:"left"},"String"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u65e5\u5fd7\u5b58\u50a8topic"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u53ef\u9009, \u9ed8\u8ba4\u503c:shenyu-topic")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"ttlInDay"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Integer"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6bcf\u5929\u7684ttl\u6b21\u6570"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u53ef\u9009, \u9ed8\u8ba4\u503c:3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"shardCount"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Integer"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u963f\u91cc\u4e91\u65e5\u5fd7\u7684shard\u603b\u6570"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u53ef\u9009, \u9ed8\u8ba4\u503c:10")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"sendThreadCount"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Integer"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u53d1\u9001\u65e5\u5fd7\u7684\u7ebf\u7a0b\u6570"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u53ef\u9009, \u9ed8\u8ba4\u503c:1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"ioThreadCount"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Integer"),(0,r.kt)("td",{parentName:"tr",align:"left"},"io\u8bb0\u5f55\u65e5\u5fd7\u7684\u7ebf\u7a0b\u6570"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u53ef\u9009, \u9ed8\u8ba4\u503c:1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"sampleRate"),(0,r.kt)("td",{parentName:"tr",align:"left"},"String"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6837\u672c\u6d88\u8d39\u901f\u7387"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u53ef\u9009, \u9ed8\u8ba4\u503c:1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"maxRequestBody"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Integer"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6700\u5927\u8bf7\u6c42\u4f53"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u53ef\u9009, \u9ed8\u8ba4\u503c:524288")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"maxResponseBody"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Integer"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6700\u5927\u54cd\u5e94\u4f53"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u53ef\u9009, \u9ed8\u8ba4\u503c:524288")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"bufferQueueSize"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Integer"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6d88\u8d39\u961f\u5217\u5927\u5c0f"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u53ef\u9009, \u9ed8\u8ba4\u503c:50000")))),(0,r.kt)("h3",{id:"242-\u89c4\u5219\u548c\u9009\u62e9\u5668\u914d\u7f6e"},"2.4.2 \u89c4\u5219\u548c\u9009\u62e9\u5668\u914d\u7f6e"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u63d2\u4ef6\u548c\u9009\u62e9\u5668\u914d\u7f6e\u3002\u8bf7\u67e5\u770b: ",(0,r.kt)("a",{parentName:"li",href:"/zh/docs/2.6.0/user-guide/admin-usage/selector-and-rule"},"Selector and rule config"),".")),(0,r.kt)("h2",{id:"25-logging\u4fe1\u606f"},"2.5 Logging\u4fe1\u606f"),(0,r.kt)("p",null,"\u91c7\u96c6\u7684access log\u7684\u5b57\u6bb5\u5982\u4e0b\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u5b57\u6bb5\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:"center"},"\u542b\u4e49"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u5907\u6ce8"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"clientIp"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u5ba2\u6237\u7aefIP"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"timeLocal"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u8bf7\u6c42\u65f6\u95f4\u5b57\u7b26\u4e32,  \u683c\u5f0f\uff1ayyyy-MM-dd HH:mm:ss.SSS"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"method"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u8bf7\u6c42\u65b9\u6cd5(\u4e0d\u540crpc\u7c7b\u578b\u4e0d\u4e00\u6837\uff0chttp\u7c7b\u7684\u4e3a:get,post\u7b49\u5f85\uff0crpc\u7c7b\u7684\u4e3a\u63a5\u53e3\u540d\u79f0)"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"requestHeader"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u8bf7\u6c42\u5934(json\u683c\u5f0f)"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"responseHeader"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u54cd\u5e94\u5934(json\u683c\u5f0f)"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"queryParams"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u8bf7\u6c42\u67e5\u8be2\u53c2\u6570"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"requestBody"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u8bf7\u6c42Body\uff08\u4e8c\u8fdb\u5236\u7c7b\u578b\u7684body\u4e0d\u4f1a\u91c7\u96c6\uff09"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"requestUri"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u8bf7\u6c42uri"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"responseBody"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u54cd\u5e94body"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"responseContentLength"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u54cd\u5e94body\u5927\u5c0f"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"rpcType"),(0,r.kt)("td",{parentName:"tr",align:"center"},"rpc\u7c7b\u578b"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"status"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u54cd\u5e94\u7801"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"upstreamIp"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u4e0a\u6e38(\u63d0\u4f9b\u670d\u52a1\u7684\u7a0b\u5e8f)IP"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"upstreamResponseTime"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u4e0a\u6e38(\u63d0\u4f9b\u670d\u52a1\u7684\u7a0b\u5e8f)\u54cd\u5e94\u8bf7\u6c42\u7684\u8017\u65f6(\u6beb\u79d2ms)"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"userAgent"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u8bf7\u6c42\u7684\u7528\u6237\u4ee3\u7406"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"host"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u8bf7\u6c42\u7684host"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"module"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u8bf7\u6c42\u7684\u6a21\u5757"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"path"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u8bf7\u6c42\u7684\u8def\u5f84path"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"traceId"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u8bf7\u6c42\u7684\u94fe\u8def\u8ffd\u8e2aID"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u9700\u8981\u63a5\u5165\u94fe\u8def\u8ffd\u8e2a\u63d2\u4ef6\uff0c\u5982skywalking,zipkin"),(0,r.kt)("td",{parentName:"tr",align:"left"})))),(0,r.kt)("h2",{id:"26-\u793a\u4f8b"},"2.6 \u793a\u4f8b"),(0,r.kt)("h3",{id:"261-\u901a\u8fc7\u963f\u91cc\u4e91sls\u65e5\u5fd7\u5e73\u53f0\u6536\u96c6\u65e5\u5fd7"},"2.6.1 \u901a\u8fc7\u963f\u91cc\u4e91sls\u65e5\u5fd7\u5e73\u53f0\u6536\u96c6\u65e5\u5fd7"),(0,r.kt)("h4",{id:"2611-\u63d2\u4ef6\u914d\u7f6e"},"2.6.1.1 \u63d2\u4ef6\u914d\u7f6e"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5f00\u542f\u63d2\u4ef6\uff0c\u5e76\u914d\u7f6ealiyun sls\u63d2\u4ef6,\u914d\u7f6e\u5982\u4e0b\uff1a")),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(38398).Z})),(0,r.kt)("h4",{id:"2612-\u9009\u62e9\u5668\u914d\u7f6e"},"2.6.1.2 \u9009\u62e9\u5668\u914d\u7f6e"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(8824).Z})),(0,r.kt)("h4",{id:"2613-\u89c4\u5219\u914d\u7f6e"},"2.6.1.3 \u89c4\u5219\u914d\u7f6e"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(15460).Z})),(0,r.kt)("h4",{id:"2614-\u53d1\u9001\u8bf7\u6c42"},"2.6.1.4 \u53d1\u9001\u8bf7\u6c42"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(1748).Z})),(0,r.kt)("h4",{id:"2615-aliyun-sls-\u65e5\u5fd7\u5e73\u53f0\u5c55\u793a"},"2.6.1.5 aliyun sls \u65e5\u5fd7\u5e73\u53f0\u5c55\u793a"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(72406).Z})),(0,r.kt)("h1",{id:"3-\u5982\u4f55\u7981\u7528\u63d2\u4ef6"},"3. \u5982\u4f55\u7981\u7528\u63d2\u4ef6"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5728 ",(0,r.kt)("inlineCode",{parentName:"li"},"shenyu-admin")," --\x3e \u57fa\u7840\u914d\u7f6e --\x3e \u63d2\u4ef6\u7ba1\u7406-> ",(0,r.kt)("inlineCode",{parentName:"li"},"loggingAliyunSls")," \uff0c\u8bbe\u7f6e\u4e3a\u5173\u95ed\u3002")))}k.isMDXComponent=!0},15460:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/aliyun-sls-log-rule-zh-dfb92015648bab8d999a59a116895de7.png"},8824:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/aliyun-sls-log-selector-zh-8a9ce70fd2996e6d76b12f6fcce4d167.png"},72406:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/aliyun-sls-log-ec218ef357112103ac1189111b661eb0.jpg"},1748:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/call-service-ceeafb89bf58792af70883bdaedbcb93.png"},38398:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/plugin-config-zh-2879a75011025673618ea7f844933645.jpg"},26692:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/plugin_use_zh-cf88744e5c4b7cc85accbcf32af6e1a3.jpg"}}]);