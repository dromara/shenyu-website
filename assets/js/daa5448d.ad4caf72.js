"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[41496],{3905:(t,e,n)=>{n.d(e,{Zo:()=>g,kt:()=>c});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),d=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},g=function(t){var e=d(t.components);return a.createElement(p.Provider,{value:e},t.children)},u="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,g=o(t,["components","mdxType","originalType","parentName"]),u=d(n),m=r,c=u["".concat(p,".").concat(m)]||u[m]||s[m]||l;return n?a.createElement(c,i(i({ref:e},g),{},{components:n})):a.createElement(c,i({ref:e},g))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[u]="string"==typeof t?t:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},67463:(t,e,n)=>{n.r(e),n.d(e,{contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const l={title:"Logging-Huawei llts\u65e5\u5fd7\u63d2\u4ef6",keywords:["Logging"],description:"logging plugin"},i="1. Overview",o={unversionedId:"plugin-center/observability/logging-huawei-lts",id:"version-2.6.0/plugin-center/observability/logging-huawei-lts",isDocsHomePage:!1,title:"Logging-Huawei llts\u65e5\u5fd7\u63d2\u4ef6",description:"logging plugin",source:"@site/versioned_docs/version-2.6.0/plugin-center/observability/logging-huawei-lts.md",sourceDirName:"plugin-center/observability",slug:"/plugin-center/observability/logging-huawei-lts",permalink:"/docs/2.6.0/plugin-center/observability/logging-huawei-lts",editUrl:"https://github.com/apache/shenyu-website/edit/main/versioned_docs/version-2.6.0/plugin-center/observability/logging-huawei-lts.md",version:"2.6.0",frontMatter:{title:"Logging-Huawei llts\u65e5\u5fd7\u63d2\u4ef6",keywords:["Logging"],description:"logging plugin"},sidebar:"version-2.6.0/tutorialSidebar",previous:{title:"Logging-ElasticSearch Plugin",permalink:"/docs/2.6.0/plugin-center/observability/logging-elasticsearch"},next:{title:"Logging-Kafka Plugin",permalink:"/docs/2.6.0/plugin-center/observability/logging-kafka"}},p=[{value:"1.1 Plugin Name",id:"11-plugin-name",children:[]},{value:"1.2 Appropriate Scenario",id:"12-appropriate-scenario",children:[]},{value:"1.3 Plugin functionality",id:"13-plugin-functionality",children:[]},{value:"1.4 Plugin code",id:"14-plugin-code",children:[]},{value:"1.5 Added Since Which shenyu version",id:"15-added-since-which-shenyu-version",children:[]},{value:"2.1 Plugin-use procedure chart",id:"21-plugin-use-procedure-chart",children:[]},{value:"2.3 Enable plugin",id:"23-enable-plugin",children:[]},{value:"2.4 Config plugin",id:"24-config-plugin",children:[{value:"2.4.1 Plugin configuration",id:"241-plugin-configuration",children:[]},{value:"2.4.2 Configuration Selectors and Rules",id:"242-configuration-selectors-and-rules",children:[]}]},{value:"2.5 Logging Info",id:"25-logging-info",children:[]},{value:"2.6 Examples",id:"26-examples",children:[{value:"2.6.1 Collect Http Log by tencent cls platform",id:"261-collect-http-log-by-tencent-cls-platform",children:[]}]}],d={toc:p},g="wrapper";function u(t){let{components:e,...l}=t;return(0,r.kt)(g,(0,a.Z)({},d,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"1-overview"},"1. Overview"),(0,r.kt)("h2",{id:"11-plugin-name"},"1.1 Plugin Name"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Logging-HuaweiLts Plugin")),(0,r.kt)("h2",{id:"12-appropriate-scenario"},"1.2 Appropriate Scenario"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"collect http request information to huawei  lts, analysis request information by huawei lts platform.")),(0,r.kt)("h2",{id:"13-plugin-functionality"},"1.3 Plugin functionality"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The gateway receives requests from the client, forwards them to the server, and returns the server results to the client. The gateway can record the details of each request\uff0c")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"the plugin records access logs and sends to huawei lts platform.")),(0,r.kt)("h2",{id:"14-plugin-code"},"1.4 Plugin code"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Core Module ",(0,r.kt)("inlineCode",{parentName:"p"},"shenyu-plugin-logging-huawei-lts"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Core Class ",(0,r.kt)("inlineCode",{parentName:"p"},"org.apache.shenyu.plugin.huawei.lts.LoggingHuaweiLtsPlugin"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Core Class ",(0,r.kt)("inlineCode",{parentName:"p"},"org.apache.shenyu.plugin.huawei.lts.client.HuaweiLtsLogCollectClient")))),(0,r.kt)("h2",{id:"15-added-since-which-shenyu-version"},"1.5 Added Since Which shenyu version"),(0,r.kt)("p",null,"ShenYu 2.6.0"),(0,r.kt)("h1",{id:"2-how-to-use-plugin"},"2. How to use plugin"),(0,r.kt)("h2",{id:"21-plugin-use-procedure-chart"},"2.1 Plugin-use procedure chart"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(74327).Z})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h2",{parentName:"li",id:"22-import-pom"},"2.2 Import pom"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"import maven config in shenyu-bootstrap project's ",(0,r.kt)("inlineCode",{parentName:"li"},"pom.xml")," file.")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"\x3c!-- shenyu logging-huaweilts plugin start --\x3e\n<dependency>\n    <groupId>org.apache.shenyu</groupId>\n    <artifactId>shenyu-spring-boot-starter-plugin-logging-huawei-lts</artifactId>\n    <version>${project.version}</version>\n</dependency>\n\x3c!-- shenyu logging-huaweilts plugin end --\x3e\n")),(0,r.kt)("h2",{id:"23-enable-plugin"},"2.3 Enable plugin"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In ",(0,r.kt)("inlineCode",{parentName:"li"},"shenyu-admin")," --\x3e BasicConfig --\x3e Plugin --\x3e ",(0,r.kt)("inlineCode",{parentName:"li"},"loggingHuaweiLts")," set Status enable.")),(0,r.kt)("h2",{id:"24-config-plugin"},"2.4 Config plugin"),(0,r.kt)("h3",{id:"241-plugin-configuration"},"2.4.1 Plugin configuration"),(0,r.kt)("h3",{id:""},(0,r.kt)("img",{src:n(62379).Z})),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"config-item"),(0,r.kt)("th",{parentName:"tr",align:null},"description"),(0,r.kt)("th",{parentName:"tr",align:null},"type"),(0,r.kt)("th",{parentName:"tr",align:null},"remarks"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"projectId"),(0,r.kt)("td",{parentName:"tr",align:null},"The project ID of the HUAWEI CLOUD account\uff08project id\uff09"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"must")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"accessKeyId"),(0,r.kt)("td",{parentName:"tr",align:null},"AK of the HUAWEI CLOUD account"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"must")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"accessKeySecret"),(0,r.kt)("td",{parentName:"tr",align:null},"SK of HUAWEI CLOUD account"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"must")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"regionName"),(0,r.kt)("td",{parentName:"tr",align:null},"Regions of Cloud Log Service"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"must")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"logGroupId"),(0,r.kt)("td",{parentName:"tr",align:null},"The log group ID of the LTS"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"must")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"logStreamId"),(0,r.kt)("td",{parentName:"tr",align:null},"The log stream ID of the LTS"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"must")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"totalSizeInBytes"),(0,r.kt)("td",{parentName:"tr",align:null},"The upper limit of the log size that can be cached by a single producer instance"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"optional")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"maxBlockMs"),(0,r.kt)("td",{parentName:"tr",align:null},"If the producer has insufficient free space, the caller's maximum block time on the send method, in milliseconds. The default is 60 seconds (60000 milliseconds), and 0 seconds is recommended. When the maxBlockMs value >= 0, it will block until the set time. If the blocking time is reached, the memory cannot be obtained, that is, an error will be reported and the log will be discarded. When the value of maxBlockMs=-1, it will be blocked until the sending is successful, and the log will not be discarded"),(0,r.kt)("td",{parentName:"tr",align:null},"long"),(0,r.kt)("td",{parentName:"tr",align:null},"optional")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ioThreadCount"),(0,r.kt)("td",{parentName:"tr",align:null},"The thread pool size for executing log sending tasks"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"optional")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"batchSizeThresholdInBytes"),(0,r.kt)("td",{parentName:"tr",align:null},"When the cached log size in a ProducerBatch is greater than or equal to batchSizeThresholdInBytes, the batch will be sent"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"optional")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"batchCountThreshold"),(0,r.kt)("td",{parentName:"tr",align:null},"When the number of cached logs in a ProducerBatch is greater than or equal to batchCountThreshold, the batch will be sent"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"optional")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"lingerMs"),(0,r.kt)("td",{parentName:"tr",align:null},"The lingering time of a ProducerBatch from creation until it is sendable"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"optional")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"retries"),(0,r.kt)("td",{parentName:"tr",align:null},"If a ProducerBatch fails to send for the first time, the number of times it can be retried is recommended to be 3 times. If retries is less than or equal to 0, the ProducerBatch will directly enter the failure queue after the first sending failure"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"optional")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"baseRetryBackoffMs"),(0,r.kt)("td",{parentName:"tr",align:null},"The backoff time for the first retry"),(0,r.kt)("td",{parentName:"tr",align:null},"long"),(0,r.kt)("td",{parentName:"tr",align:null},"optional")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"maxRetryBackoffMs"),(0,r.kt)("td",{parentName:"tr",align:null},"Maximum backoff time for retries"),(0,r.kt)("td",{parentName:"tr",align:null},"long"),(0,r.kt)("td",{parentName:"tr",align:null},"optional")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"giveUpExtraLongSingleLog"),(0,r.kt)("td",{parentName:"tr",align:null},"For logs exceeding 1M, the data larger than 1M will be discarded after splitting"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"optional")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"enableLocalTest"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u5f00\u542f\u8de8\u4e91\u4e0a\u62a5\u65e5\u5fd7"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"optional")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"get ",(0,r.kt)("inlineCode",{parentName:"li"},"regionName"))),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(84987).Z})),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"\u533a\u57df\u540d\u79f0")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"RegionName")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u534e\u5317-\u5317\u4eac\u4e8c"),(0,r.kt)("td",{parentName:"tr",align:null},"cn-north-2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u534e\u5317-\u5317\u4eac\u56db"),(0,r.kt)("td",{parentName:"tr",align:null},"cn-north-4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u534e\u5317-\u5317\u4eac\u4e00"),(0,r.kt)("td",{parentName:"tr",align:null},"cn-north-1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u534e\u4e1c-\u4e0a\u6d77\u4e8c"),(0,r.kt)("td",{parentName:"tr",align:null},"cn-east-2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u534e\u4e1c-\u4e0a\u6d77\u4e00"),(0,r.kt)("td",{parentName:"tr",align:null},"cn-east-3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u534e\u5357-\u5e7f\u5dde"),(0,r.kt)("td",{parentName:"tr",align:null},"cn-south-1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u534e\u5357-\u6df1\u5733"),(0,r.kt)("td",{parentName:"tr",align:null},"cn-south-2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u897f\u5357-\u8d35\u9633\u4e00"),(0,r.kt)("td",{parentName:"tr",align:null},"cn-southwest-2")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"get  ",(0,r.kt)("inlineCode",{parentName:"li"},"projectId"))),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(59249).Z})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"get  ",(0,r.kt)("inlineCode",{parentName:"li"},"accessKeyId")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"accessKeySecret"))),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(18809).Z})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"get ",(0,r.kt)("inlineCode",{parentName:"li"},"logGroupId")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"logStreamId"))),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(14738).Z})),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(88457).Z})),(0,r.kt)("h3",{id:"242-configuration-selectors-and-rules"},"2.4.2 Configuration Selectors and Rules"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Selector and rule Config. Please refer: ",(0,r.kt)("a",{parentName:"li",href:"/docs/2.6.0/user-guide/admin-usage/selector-and-rule"},"Selector and rule config"),".")),(0,r.kt)("h2",{id:"25-logging-info"},"2.5 Logging Info"),(0,r.kt)("p",null,"collect request info as follows"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Field Name"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Meaning"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Remarks"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"clientIp"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Client IP"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"timeLocal"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Request time string, format: yyyy-MM-dd HH:mm:ss.SSS"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"method"),(0,r.kt)("td",{parentName:"tr",align:"center"},"request method (different rpc type is not the same, http class for: get, post wait, rpc class for the interface name)"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"requestHeader"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Request header (json format)"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"responseHeader"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Response header (json format)"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"queryParams"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Request query parameters"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"requestBody"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Request Body (body of binary type will not be captured)"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"requestUri"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Request uri"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"responseBody"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Response body"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"responseContentLength"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Response body size"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"rpcType"),(0,r.kt)("td",{parentName:"tr",align:"center"},"rpc type"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"status"),(0,r.kt)("td",{parentName:"tr",align:"center"},"response status"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"upstreamIp"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Upstream (program providing the service) IP"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"upstreamResponseTime"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Time taken by the upstream (program providing the service) to respond to the request (ms ms)"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"userAgent"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Requested user agent"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"host"),(0,r.kt)("td",{parentName:"tr",align:"center"},"The requested host"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"module"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Requested modules"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"path"),(0,r.kt)("td",{parentName:"tr",align:"center"},"The requested path"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"traceId"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Requested Link Tracking ID"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Need to access link tracking plugins, such as skywalking,zipkin"),(0,r.kt)("td",{parentName:"tr",align:"left"})))),(0,r.kt)("h2",{id:"26-examples"},"2.6 Examples"),(0,r.kt)("h3",{id:"261-collect-http-log-by-tencent-cls-platform"},"2.6.1 Collect Http Log by tencent cls platform"),(0,r.kt)("h4",{id:"2611-plugin-configuration"},"2.6.1.1 Plugin Configuration"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Open the plugin and configure huawei lts, configure it as follows.")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(62379).Z})),(0,r.kt)("h4",{id:"2612-selector-configuration"},"2.6.1.2 Selector Configuration"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(53797).Z})),(0,r.kt)("h4",{id:"2613-rule-configuration"},"2.6.1.3 Rule Configuration"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(40653).Z})),(0,r.kt)("h4",{id:"2614-send-request"},"2.6.1.4 Send Request"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(73536).Z})),(0,r.kt)("h4",{id:"2615-huawei-lts-platform-display"},"2.6.1.5 Huawei lts Platform Display"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(51072).Z})),(0,r.kt)("h1",{id:"3-how-to-disable-plugin"},"3. How to disable plugin"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In ",(0,r.kt)("inlineCode",{parentName:"li"},"shenyu-admin")," --\x3e BasicConfig --\x3e Plugin --\x3e",(0,r.kt)("inlineCode",{parentName:"li"},"loggingHuaweiLts"),"set Status disable.")))}u.isMDXComponent=!0},73536:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/call-service-f861b37db3fcb62580c41f9e613c26c6.png"},18809:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/huawei-lts-access-21854a21f1fa9ec0f1c6e1276e604f3b.png"},40653:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/huawei-lts-log-rule-en-15c3693a08401d9f4b8e3a6c0f8ea71c.png"},53797:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/huawei-lts-log-selector-en-c3e5234a112022d68472ca48abefb667.png"},51072:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/huawei-lts-log-741297040fca951dab0ca0379ed7b2d7.png"},14738:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/huawei-lts-logGroupId-71c2d0667cf39674ddc189f77ec78db9.png"},88457:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/huawei-lts-logStreamId-5f509d5b340b6fb8ff101fb12448c32f.png"},59249:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/huawei-lts-projectId-e1782f387d5a90f1bd59d7d8985e8fed.png"},84987:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/huawei-lts-regionName-be9173dc5e3388f228d702a27685393f.png"},62379:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/plugin-config-en-5912fd3fb201b9e76bbdea8d8516d985.png"},74327:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/plugin_use_en-8b5661551cdf92fdabc9cb2e7947cffc.jpg"}}]);