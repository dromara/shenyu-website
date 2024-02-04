"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[89944],{95788:(e,t,n)=>{n.d(t,{Iu:()=>y,yg:()=>m});var a=n(11504);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),o=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):g(g({},t),e)),n},y=function(e){var t=o(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,y=i(e,["components","mdxType","originalType","parentName"]),d=o(n),u=r,m=d["".concat(p,".").concat(u)]||d[u]||s[u]||l;return n?a.createElement(m,g(g({ref:t},y),{},{components:n})):a.createElement(m,g({ref:t},y))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,g=new Array(l);g[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:r,g[1]=i;for(var o=2;o<l;o++)g[o]=n[o];return a.createElement.apply(null,g)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},10572:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>g,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=n(45072),r=(n(11504),n(95788));const l={title:"Logging-Aliyun-Sls Plugin",keywords:["logging"],description:"logging plugin"},g="1. Overview",i={unversionedId:"plugin-center/observability/logging-aliyun-sls",id:"plugin-center/observability/logging-aliyun-sls",isDocsHomePage:!1,title:"Logging-Aliyun-Sls Plugin",description:"logging plugin",source:"@site/docs/plugin-center/observability/logging-aliyun-sls.md",sourceDirName:"plugin-center/observability",slug:"/plugin-center/observability/logging-aliyun-sls",permalink:"/docs/next/plugin-center/observability/logging-aliyun-sls",editUrl:"https://github.com/apache/shenyu-website/edit/main/docs/plugin-center/observability/logging-aliyun-sls.md",version:"current",frontMatter:{title:"Logging-Aliyun-Sls Plugin",keywords:["logging"],description:"logging plugin"},sidebar:"tutorialSidebar",previous:{title:"Waf Plugin",permalink:"/docs/next/plugin-center/security/waf-plugin"},next:{title:"Logging-ElasticSearch Plugin",permalink:"/docs/next/plugin-center/observability/logging-elasticsearch"}},p=[{value:"1.1 Plugin Name",id:"11-plugin-name",children:[]},{value:"1.2 Appropriate Scenario",id:"12-appropriate-scenario",children:[]},{value:"1.3 Plugin functionality",id:"13-plugin-functionality",children:[]},{value:"1.4 Plugin code",id:"14-plugin-code",children:[]},{value:"1.5 Added Since Which shenyu version",id:"15-added-since-which-shenyu-version",children:[]},{value:"2.1 Plugin-use procedure chart",id:"21-plugin-use-procedure-chart",children:[]},{value:"2.2 Import pom",id:"22-import-pom",children:[]},{value:"2.3 Enable plugin",id:"23-enable-plugin",children:[]},{value:"2.4 Config plugin",id:"24-config-plugin",children:[{value:"2.4.1 Plugin configuration",id:"241-plugin-configuration",children:[]},{value:"2.4.2 Configuration Selectors and Rules",id:"242-configuration-selectors-and-rules",children:[]}]},{value:"2.5 Logging Info",id:"25-logging-info",children:[]},{value:"2.6 Examples",id:"26-examples",children:[{value:"2.6.1 Collect Http Log by aliyun sls platform",id:"261-collect-http-log-by-aliyun-sls-platform",children:[]}]}],o={toc:p},y="wrapper";function d(e){let{components:t,...l}=e;return(0,r.yg)(y,(0,a.c)({},o,l,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"1-overview"},"1. Overview"),(0,r.yg)("h2",{id:"11-plugin-name"},"1.1 Plugin Name"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Logging-AliyunSls Plugin")),(0,r.yg)("h2",{id:"12-appropriate-scenario"},"1.2 Appropriate Scenario"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"collect http request information to aliyun sls, analysis request information by aliyun sls platform.")),(0,r.yg)("h2",{id:"13-plugin-functionality"},"1.3 Plugin functionality"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"The gateway receives requests from the client, forwards them to the server, and returns the server results to the client. The gateway can record the details of each request\uff0c"),(0,r.yg)("li",{parentName:"ul"},"the plugin records access logs and sends to aliyun sls platform.")),(0,r.yg)("h2",{id:"14-plugin-code"},"1.4 Plugin code"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Core Module ",(0,r.yg)("inlineCode",{parentName:"p"},"shenyu-plugin-logging-aliyun-sls"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Core Class ",(0,r.yg)("inlineCode",{parentName:"p"},"org.apache.shenyu.plugin.aliyun.sls.LoggingAliYunSlsPlugin"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Core Class ",(0,r.yg)("inlineCode",{parentName:"p"},"org.apache.shenyu.plugin.aliyun.sls.client.AliyunSlsLogCollectClient")))),(0,r.yg)("h2",{id:"15-added-since-which-shenyu-version"},"1.5 Added Since Which shenyu version"),(0,r.yg)("p",null,"ShenYu 2.5.0"),(0,r.yg)("h1",{id:"2-how-to-use-plugin"},"2. How to use plugin"),(0,r.yg)("h2",{id:"21-plugin-use-procedure-chart"},"2.1 Plugin-use procedure chart"),(0,r.yg)("p",null,(0,r.yg)("img",{src:n(33783).c})),(0,r.yg)("h2",{id:"22-import-pom"},"2.2 Import pom"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"import maven config in shenyu-bootstrap project's ",(0,r.yg)("inlineCode",{parentName:"li"},"pom.xml")," file.")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-xml"},"\x3c!-- shenyu logging-aliyunsls plugin start --\x3e\n<dependency>\n  <groupId>org.apache.shenyu</groupId>\n  <artifactId>shenyu-spring-boot-starter-plugin-logging-aliyun-sls</artifactId>\n  <version>${project.version}</version>\n</dependency>\n\x3c!-- shenyu logging-aliyunsls plugin end --\x3e\n")),(0,r.yg)("h2",{id:"23-enable-plugin"},"2.3 Enable plugin"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"In ",(0,r.yg)("inlineCode",{parentName:"li"},"shenyu-admin")," --\x3e BasicConfig --\x3e Plugin --\x3e ",(0,r.yg)("inlineCode",{parentName:"li"},"loggingAliyunSls")," set Status enable.")),(0,r.yg)("h2",{id:"24-config-plugin"},"2.4 Config plugin"),(0,r.yg)("h3",{id:"241-plugin-configuration"},"2.4.1 Plugin configuration"),(0,r.yg)("p",null,(0,r.yg)("img",{src:n(62692).c})),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"config-item"),(0,r.yg)("th",{parentName:"tr",align:"left"},"type"),(0,r.yg)("th",{parentName:"tr",align:"left"},"description"),(0,r.yg)("th",{parentName:"tr",align:"left"},"remarks"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"accessId"),(0,r.yg)("td",{parentName:"tr",align:"left"},"String"),(0,r.yg)("td",{parentName:"tr",align:"left"},"accessId"),(0,r.yg)("td",{parentName:"tr",align:"left"},"must")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"accesskey"),(0,r.yg)("td",{parentName:"tr",align:"left"},"String"),(0,r.yg)("td",{parentName:"tr",align:"left"},"accesskey"),(0,r.yg)("td",{parentName:"tr",align:"left"},"must")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"host"),(0,r.yg)("td",{parentName:"tr",align:"left"},"String"),(0,r.yg)("td",{parentName:"tr",align:"left"},"host name, example:cn-guangzhou.log.aliyuncs.com"),(0,r.yg)("td",{parentName:"tr",align:"left"},"must")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"projectName"),(0,r.yg)("td",{parentName:"tr",align:"left"},"String"),(0,r.yg)("td",{parentName:"tr",align:"left"},"log project name"),(0,r.yg)("td",{parentName:"tr",align:"left"},"optional, default shenyu")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"logStoreName"),(0,r.yg)("td",{parentName:"tr",align:"left"},"String"),(0,r.yg)("td",{parentName:"tr",align:"left"},"log store name"),(0,r.yg)("td",{parentName:"tr",align:"left"},"optional, default shenyu-logstore")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"topic"),(0,r.yg)("td",{parentName:"tr",align:"left"},"String"),(0,r.yg)("td",{parentName:"tr",align:"left"},"aliyun sls log topic"),(0,r.yg)("td",{parentName:"tr",align:"left"},"optional, default shenyu-topic")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"ttlInDay"),(0,r.yg)("td",{parentName:"tr",align:"left"},"Integer"),(0,r.yg)("td",{parentName:"tr",align:"left"},"ttl times in one day"),(0,r.yg)("td",{parentName:"tr",align:"left"},"optional, default 3")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"shardCount"),(0,r.yg)("td",{parentName:"tr",align:"left"},"Integer"),(0,r.yg)("td",{parentName:"tr",align:"left"},"aliyun sls log shard count"),(0,r.yg)("td",{parentName:"tr",align:"left"},"optional, default 10")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"sendThreadCount"),(0,r.yg)("td",{parentName:"tr",align:"left"},"Integer"),(0,r.yg)("td",{parentName:"tr",align:"left"},"send log to aliyun sls thread number"),(0,r.yg)("td",{parentName:"tr",align:"left"},"optional, default 1")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"ioThreadCount"),(0,r.yg)("td",{parentName:"tr",align:"left"},"Integer"),(0,r.yg)("td",{parentName:"tr",align:"left"},"io thread count"),(0,r.yg)("td",{parentName:"tr",align:"left"},"optional, default 1")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"sampleRate"),(0,r.yg)("td",{parentName:"tr",align:"left"},"String"),(0,r.yg)("td",{parentName:"tr",align:"left"},"sample consume rate"),(0,r.yg)("td",{parentName:"tr",align:"left"},"optional, default 1")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"maxRequestBody"),(0,r.yg)("td",{parentName:"tr",align:"left"},"Integer"),(0,r.yg)("td",{parentName:"tr",align:"left"},"max request body"),(0,r.yg)("td",{parentName:"tr",align:"left"},"optional, default 524288")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"maxResponseBody"),(0,r.yg)("td",{parentName:"tr",align:"left"},"Integer"),(0,r.yg)("td",{parentName:"tr",align:"left"},"max response body"),(0,r.yg)("td",{parentName:"tr",align:"left"},"optional, default 524288")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"bufferQueueSize"),(0,r.yg)("td",{parentName:"tr",align:"left"},"Integer"),(0,r.yg)("td",{parentName:"tr",align:"left"},"consume log queue size"),(0,r.yg)("td",{parentName:"tr",align:"left"},"optional, default 50000")))),(0,r.yg)("h3",{id:"242-configuration-selectors-and-rules"},"2.4.2 Configuration Selectors and Rules"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Selector and rule Config. Please refer: ",(0,r.yg)("a",{parentName:"li",href:"/docs/next/user-guide/admin-usage/selector-and-rule"},"Selector and rule config"),".")),(0,r.yg)("h2",{id:"25-logging-info"},"2.5 Logging Info"),(0,r.yg)("p",null,"collect request info as follows"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Field Name"),(0,r.yg)("th",{parentName:"tr",align:"center"},"Meaning"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Description"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Remarks"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"clientIp"),(0,r.yg)("td",{parentName:"tr",align:"center"},"Client IP"),(0,r.yg)("td",{parentName:"tr",align:"left"}),(0,r.yg)("td",{parentName:"tr",align:"left"})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"timeLocal"),(0,r.yg)("td",{parentName:"tr",align:"center"},"Request time string, format: yyyy-MM-dd HH:mm:ss.SSS"),(0,r.yg)("td",{parentName:"tr",align:"left"}),(0,r.yg)("td",{parentName:"tr",align:"left"})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"method"),(0,r.yg)("td",{parentName:"tr",align:"center"},"request method (different rpc type is not the same, http class for: get, post wait, rpc class for the interface name)"),(0,r.yg)("td",{parentName:"tr",align:"left"}),(0,r.yg)("td",{parentName:"tr",align:"left"})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"requestHeader"),(0,r.yg)("td",{parentName:"tr",align:"center"},"Request header (json format)"),(0,r.yg)("td",{parentName:"tr",align:"left"}),(0,r.yg)("td",{parentName:"tr",align:"left"})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"responseHeader"),(0,r.yg)("td",{parentName:"tr",align:"center"},"Response header (json format)"),(0,r.yg)("td",{parentName:"tr",align:"left"}),(0,r.yg)("td",{parentName:"tr",align:"left"})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"queryParams"),(0,r.yg)("td",{parentName:"tr",align:"center"},"Request query parameters"),(0,r.yg)("td",{parentName:"tr",align:"left"}),(0,r.yg)("td",{parentName:"tr",align:"left"})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"requestBody"),(0,r.yg)("td",{parentName:"tr",align:"center"},"Request Body (body of binary type will not be captured)"),(0,r.yg)("td",{parentName:"tr",align:"left"}),(0,r.yg)("td",{parentName:"tr",align:"left"})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"requestUri"),(0,r.yg)("td",{parentName:"tr",align:"center"},"Request uri"),(0,r.yg)("td",{parentName:"tr",align:"left"}),(0,r.yg)("td",{parentName:"tr",align:"left"})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"responseBody"),(0,r.yg)("td",{parentName:"tr",align:"center"},"Response body"),(0,r.yg)("td",{parentName:"tr",align:"left"}),(0,r.yg)("td",{parentName:"tr",align:"left"})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"responseContentLength"),(0,r.yg)("td",{parentName:"tr",align:"center"},"Response body size"),(0,r.yg)("td",{parentName:"tr",align:"left"}),(0,r.yg)("td",{parentName:"tr",align:"left"})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"rpcType"),(0,r.yg)("td",{parentName:"tr",align:"center"},"rpc type"),(0,r.yg)("td",{parentName:"tr",align:"left"}),(0,r.yg)("td",{parentName:"tr",align:"left"})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"status"),(0,r.yg)("td",{parentName:"tr",align:"center"},"response status"),(0,r.yg)("td",{parentName:"tr",align:"left"}),(0,r.yg)("td",{parentName:"tr",align:"left"})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"upstreamIp"),(0,r.yg)("td",{parentName:"tr",align:"center"},"Upstream (program providing the service) IP"),(0,r.yg)("td",{parentName:"tr",align:"left"}),(0,r.yg)("td",{parentName:"tr",align:"left"})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"upstreamResponseTime"),(0,r.yg)("td",{parentName:"tr",align:"center"},"Time taken by the upstream (program providing the service) to respond to the request (ms ms)"),(0,r.yg)("td",{parentName:"tr",align:"left"}),(0,r.yg)("td",{parentName:"tr",align:"left"})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"userAgent"),(0,r.yg)("td",{parentName:"tr",align:"center"},"Requested user agent"),(0,r.yg)("td",{parentName:"tr",align:"left"}),(0,r.yg)("td",{parentName:"tr",align:"left"})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"host"),(0,r.yg)("td",{parentName:"tr",align:"center"},"The requested host"),(0,r.yg)("td",{parentName:"tr",align:"left"}),(0,r.yg)("td",{parentName:"tr",align:"left"})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"module"),(0,r.yg)("td",{parentName:"tr",align:"center"},"Requested modules"),(0,r.yg)("td",{parentName:"tr",align:"left"}),(0,r.yg)("td",{parentName:"tr",align:"left"})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"path"),(0,r.yg)("td",{parentName:"tr",align:"center"},"The requested path"),(0,r.yg)("td",{parentName:"tr",align:"left"}),(0,r.yg)("td",{parentName:"tr",align:"left"})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"traceId"),(0,r.yg)("td",{parentName:"tr",align:"center"},"Requested Link Tracking ID"),(0,r.yg)("td",{parentName:"tr",align:"left"},"Need to access link tracking plugins, such as skywalking,zipkin"),(0,r.yg)("td",{parentName:"tr",align:"left"})))),(0,r.yg)("h2",{id:"26-examples"},"2.6 Examples"),(0,r.yg)("h3",{id:"261-collect-http-log-by-aliyun-sls-platform"},"2.6.1 Collect Http Log by aliyun sls platform"),(0,r.yg)("h4",{id:"2611-plugin-configuration"},"2.6.1.1 Plugin Configuration"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Open the plugin and configure aliyun-sls, configure it as follows.")),(0,r.yg)("p",null,(0,r.yg)("img",{src:n(62692).c})),(0,r.yg)("h4",{id:"2612-selector-configuration"},"2.6.1.2 Selector Configuration"),(0,r.yg)("p",null,(0,r.yg)("img",{src:n(4136).c})),(0,r.yg)("h4",{id:"2613-rule-configuration"},"2.6.1.3 Rule Configuration"),(0,r.yg)("p",null,(0,r.yg)("img",{src:n(42628).c})),(0,r.yg)("h4",{id:"2614-send-request"},"2.6.1.4 Send Request"),(0,r.yg)("p",null,(0,r.yg)("img",{src:n(74372).c})),(0,r.yg)("h4",{id:"2615-aliyun-sls-platform-display"},"2.6.1.5 Aliyun sls Platform Display"),(0,r.yg)("p",null,(0,r.yg)("img",{src:n(51580).c})),(0,r.yg)("h1",{id:"3-how-to-disable-plugin"},"3. How to disable plugin"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"In ",(0,r.yg)("inlineCode",{parentName:"li"},"shenyu-admin")," --\x3e BasicConfig --\x3e Plugin --\x3e ",(0,r.yg)("inlineCode",{parentName:"li"},"loggingAliyunSls")," set Status disable.")))}d.isMDXComponent=!0},42628:(e,t,n)=>{n.d(t,{c:()=>a});const a=n.p+"assets/images/aliyun-sls-log-rule-en-1ab20149d1a9e4289b54145fb1ea194a.png"},4136:(e,t,n)=>{n.d(t,{c:()=>a});const a=n.p+"assets/images/aliyun-sls-log-selector-en-7f6d52e5e558b7df430acca33e9a7c05.png"},51580:(e,t,n)=>{n.d(t,{c:()=>a});const a=n.p+"assets/images/aliyun-sls-log-ec218ef357112103ac1189111b661eb0.jpg"},74372:(e,t,n)=>{n.d(t,{c:()=>a});const a=n.p+"assets/images/call-service-ceeafb89bf58792af70883bdaedbcb93.png"},62692:(e,t,n)=>{n.d(t,{c:()=>a});const a=n.p+"assets/images/plugin-config-en-9d0d7b720199c059009e104e95e30ad7.jpg"},33783:(e,t,n)=>{n.d(t,{c:()=>a});const a=n.p+"assets/images/plugin_use_en-8b5661551cdf92fdabc9cb2e7947cffc.jpg"}}]);