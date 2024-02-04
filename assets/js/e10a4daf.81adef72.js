"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[91140],{95788:(e,t,a)=>{a.d(t,{Iu:()=>s,yg:()=>u});var n=a(11504);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function g(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},d="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=g(e,["components","mdxType","originalType","parentName"]),d=p(a),c=r,u=d["".concat(o,".").concat(c)]||d[c]||y[c]||i;return a?n.createElement(u,l(l({ref:t},s),{},{components:a})):n.createElement(u,l({ref:t},s))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=c;var g={};for(var o in t)hasOwnProperty.call(t,o)&&(g[o]=t[o]);g.originalType=e,g[d]="string"==typeof e?e:r,l[1]=g;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},11212:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>g,toc:()=>o});var n=a(45072),r=(a(11504),a(95788));const i={title:"Logging-Kafka Plugin",keywords:["Logging","kafka"],description:"Logging-Kafka Plugin"},l="1. Overview",g={unversionedId:"plugin-center/observability/logging-kafka",id:"version-2.5.1/plugin-center/observability/logging-kafka",isDocsHomePage:!1,title:"Logging-Kafka Plugin",description:"Logging-Kafka Plugin",source:"@site/versioned_docs/version-2.5.1/plugin-center/observability/logging-kafka.md",sourceDirName:"plugin-center/observability",slug:"/plugin-center/observability/logging-kafka",permalink:"/docs/2.5.1/plugin-center/observability/logging-kafka",editUrl:"https://github.com/apache/shenyu-website/edit/main/versioned_docs/version-2.5.1/plugin-center/observability/logging-kafka.md",version:"2.5.1",frontMatter:{title:"Logging-Kafka Plugin",keywords:["Logging","kafka"],description:"Logging-Kafka Plugin"},sidebar:"version-2.5.1/tutorialSidebar",previous:{title:"Logging-ElasticSearch Plugin",permalink:"/docs/2.5.1/plugin-center/observability/logging-elasticsearch"},next:{title:"Logging Plugin",permalink:"/docs/2.5.1/plugin-center/observability/logging-plugin"}},o=[{value:"1.1 Plugin Name",id:"11-plugin-name",children:[]},{value:"1.2 Appropriate Scenario",id:"12-appropriate-scenario",children:[]},{value:"1.3 Plugin functionality",id:"13-plugin-functionality",children:[]},{value:"1.4 Plugin code",id:"14-plugin-code",children:[]},{value:"1.5 Added Since Which shenyu version",id:"15-added-since-which-shenyu-version",children:[]},{value:"1.6 Technical Solutions",id:"16-technical-solutions",children:[]},{value:"2.1 Plugin-use procedure chart",id:"21-plugin-use-procedure-chart",children:[]},{value:"2.2 Import pom",id:"22-import-pom",children:[]},{value:"2.3 Enable plugin",id:"23-enable-plugin",children:[]},{value:"2.4 Config plugin",id:"24-config-plugin",children:[{value:"2.4.1 Open the plugin and configure kafka, configure it as follows.",id:"241-open-the-plugin-and-configure-kafka-configure-it-as-follows",children:[]},{value:"2.4.2 Configuring Selectors and Rulers",id:"242-configuring-selectors-and-rulers",children:[]}]},{value:"2.5 Logging Info",id:"25-logging-info",children:[]},{value:"2.6 Examples",id:"26-examples",children:[{value:"2.6.1 Collect Http Log by Kafka",id:"261-collect-http-log-by-kafka",children:[]}]}],p={toc:o},s="wrapper";function d(e){let{components:t,...i}=e;return(0,r.yg)(s,(0,n.c)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"1-overview"},"1. Overview"),(0,r.yg)("h2",{id:"11-plugin-name"},"1.1 Plugin Name"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Logging-Kafka Plugin")),(0,r.yg)("h2",{id:"12-appropriate-scenario"},"1.2 Appropriate Scenario"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"collect http request log to Kafka, consume Kafka message to another application and analysis.")),(0,r.yg)("h2",{id:"13-plugin-functionality"},"1.3 Plugin functionality"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},(0,r.yg)("inlineCode",{parentName:"p"},"Apache ShenYu")," The gateway receives requests from the client, forwards them to the server, and returns the server results to the client. The gateway can record the details of each request\uff0c",(0,r.yg)("br",{parentName:"p"}),"\n","The list includes: request time, request parameters, request path, response result, response status code, time consumption, upstream IP, exception information waiting.",(0,r.yg)("br",{parentName:"p"}),"\n","The Logging-Kafka plugin is a plugin that records access logs and sends them to the Kafka cluster.")),(0,r.yg)("h2",{id:"14-plugin-code"},"1.4 Plugin code"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Core Module ",(0,r.yg)("inlineCode",{parentName:"p"},"shenyu-plugin-logging-kafka"),".")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Core Class ",(0,r.yg)("inlineCode",{parentName:"p"},"org.apache.shenyu.plugin.logging.kafka.LoggingKafkaPlugin"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Core Claas ",(0,r.yg)("inlineCode",{parentName:"p"},"org.apache.shenyu.plugin.logging.kafka.client.KafkaLogCollectClient")))),(0,r.yg)("h2",{id:"15-added-since-which-shenyu-version"},"1.5 Added Since Which shenyu version"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Since ShenYu 2.5.0")),(0,r.yg)("h2",{id:"16-technical-solutions"},"1.6 Technical Solutions"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Architecture Diagram")),(0,r.yg)("p",null,(0,r.yg)("img",{src:a(36460).c})),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Full asynchronous collection and delivery of ",(0,r.yg)("inlineCode",{parentName:"p"},"Logging")," inside the ",(0,r.yg)("inlineCode",{parentName:"p"},"Apache ShenYu")," gateway")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Logging platform by consuming the logs in the ",(0,r.yg)("inlineCode",{parentName:"p"},"Kafka")," cluster for repository, and then using ",(0,r.yg)("inlineCode",{parentName:"p"},"Grafana"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"Kibana")," or other visualization platform to display"))),(0,r.yg)("h1",{id:"2-how-to-use-plugin"},"2. How to use plugin"),(0,r.yg)("h2",{id:"21-plugin-use-procedure-chart"},"2.1 Plugin-use procedure chart"),(0,r.yg)("p",null,(0,r.yg)("img",{src:a(31052).c})),(0,r.yg)("h2",{id:"22-import-pom"},"2.2 Import pom"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Add the ",(0,r.yg)("inlineCode",{parentName:"li"},"Logging-Kafka")," dependency to the gateway's ",(0,r.yg)("inlineCode",{parentName:"li"},"pom.xml")," file.")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-xml"},"\x3c!--shenyu logging-kafka plugin start--\x3e\n<dependency>\n    <groupId>org.apache.shenyu</groupId>\n    <artifactId>shenyu-spring-boot-starter-plugin-logging-kafka</artifactId>\n    <version>${project.version}</version>\n</dependency>\n\x3c!--shenyu logging-kafka plugin end--\x3e\n")),(0,r.yg)("h2",{id:"23-enable-plugin"},"2.3 Enable plugin"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"In ",(0,r.yg)("inlineCode",{parentName:"li"},"shenyu-admin")," --\x3e Basic Configuration --\x3e Plugin Management --\x3e ",(0,r.yg)("inlineCode",{parentName:"li"},"loggingKafka"),", configure the kafka parameter and set it to on.")),(0,r.yg)("h2",{id:"24-config-plugin"},"2.4 Config plugin"),(0,r.yg)("h3",{id:"241-open-the-plugin-and-configure-kafka-configure-it-as-follows"},"2.4.1 Open the plugin and configure kafka, configure it as follows."),(0,r.yg)("p",null,(0,r.yg)("img",{src:a(95324).c})),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"The individual configuration items are described as follows:")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"}),(0,r.yg)("th",{parentName:"tr",align:"left"}),(0,r.yg)("th",{parentName:"tr",align:"left"}),(0,r.yg)("th",{parentName:"tr",align:"left"}))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"config-item"),(0,r.yg)("td",{parentName:"tr",align:"left"},"type"),(0,r.yg)("td",{parentName:"tr",align:"left"},"description"),(0,r.yg)("td",{parentName:"tr",align:"left"},"remarks")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"topic"),(0,r.yg)("td",{parentName:"tr",align:"left"},"String"),(0,r.yg)("td",{parentName:"tr",align:"left"},"Message Queue Topics"),(0,r.yg)("td",{parentName:"tr",align:"left"},"must")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"namesrvAddr"),(0,r.yg)("td",{parentName:"tr",align:"left"},"String"),(0,r.yg)("td",{parentName:"tr",align:"left"},"Message queue nameserver address"),(0,r.yg)("td",{parentName:"tr",align:"left"},"must")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"sampleRate"),(0,r.yg)("td",{parentName:"tr",align:"left"},"String"),(0,r.yg)("td",{parentName:"tr",align:"left"},"Sampling rate, range 0~1, 0: off, 0.01: acquisition 1%, 1: acquisition 100%"),(0,r.yg)("td",{parentName:"tr",align:"left"},"Optional, default 1, all collection")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"compressAlg"),(0,r.yg)("td",{parentName:"tr",align:"left"},"String"),(0,r.yg)("td",{parentName:"tr",align:"left"},"Compression algorithm, no compression by default, currently supports LZ4 compression"),(0,r.yg)("td",{parentName:"tr",align:"left"},"Optional, no compression by default")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"maxResponseBody"),(0,r.yg)("td",{parentName:"tr",align:"left"},"Ingeter"),(0,r.yg)("td",{parentName:"tr",align:"left"},"Maximum response size, above the threshold no response will be collected"),(0,r.yg)("td",{parentName:"tr",align:"left"},"Optional, default 512KB")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"maxRequestBody"),(0,r.yg)("td",{parentName:"tr",align:"left"},"Ingeter"),(0,r.yg)("td",{parentName:"tr",align:"left"},"Maximum request body size, above the threshold no request body will be collected"),(0,r.yg)("td",{parentName:"tr",align:"left"},"Optional, default 512KB")))),(0,r.yg)("p",null,'Except for topic, namesrvAddr, all others are optional, in most cases only these 3 items need to be configured. The default group id is "shenyu-access-logging"'),(0,r.yg)("h3",{id:"242-configuring-selectors-and-rulers"},"2.4.2 Configuring Selectors and Rulers"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"For detailed configuration of selectors and rules, please refer to: ",(0,r.yg)("a",{parentName:"li",href:"../../user-guide/admin-usage/selector-and-rule"},"Selector and rule management"),"\u3002")),(0,r.yg)("p",null,"In addition sometimes a large gateway cluster corresponds to multiple applications (business), different applications (business) corresponds to different topics, related to isolation,",(0,r.yg)("br",{parentName:"p"}),"\n","then you can configure different topics (optional) and sampling rate (optional) by selector, the meaning of the configuration items as shown in the table above.",(0,r.yg)("br",{parentName:"p"}),"\n","The operation is shown below:\n",(0,r.yg)("img",{src:a(48904).c})),(0,r.yg)("h2",{id:"25-logging-info"},"2.5 Logging Info"),(0,r.yg)("p",null,"collect request info as follows"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Field Name"),(0,r.yg)("th",{parentName:"tr",align:"center"},"Meaning"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Description"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Remarks"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"clientIp"),(0,r.yg)("td",{parentName:"tr",align:"center"},"Client IP"),(0,r.yg)("td",{parentName:"tr",align:"left"}),(0,r.yg)("td",{parentName:"tr",align:"left"})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"timeLocal"),(0,r.yg)("td",{parentName:"tr",align:"center"},"Request time string, format: yyyy-MM-dd HH:mm:ss.SSS"),(0,r.yg)("td",{parentName:"tr",align:"left"}),(0,r.yg)("td",{parentName:"tr",align:"left"})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"method"),(0,r.yg)("td",{parentName:"tr",align:"center"},"request method (different rpc type is not the same, http class for: get, post wait, rpc class for the interface name)"),(0,r.yg)("td",{parentName:"tr",align:"left"}),(0,r.yg)("td",{parentName:"tr",align:"left"})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"requestHeader"),(0,r.yg)("td",{parentName:"tr",align:"center"},"Request header (json format)"),(0,r.yg)("td",{parentName:"tr",align:"left"}),(0,r.yg)("td",{parentName:"tr",align:"left"})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"responseHeader"),(0,r.yg)("td",{parentName:"tr",align:"center"},"Response header (json format)"),(0,r.yg)("td",{parentName:"tr",align:"left"}),(0,r.yg)("td",{parentName:"tr",align:"left"})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"queryParams"),(0,r.yg)("td",{parentName:"tr",align:"center"},"Request query parameters"),(0,r.yg)("td",{parentName:"tr",align:"left"}),(0,r.yg)("td",{parentName:"tr",align:"left"})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"requestBody"),(0,r.yg)("td",{parentName:"tr",align:"center"},"Request Body (body of binary type will not be captured)"),(0,r.yg)("td",{parentName:"tr",align:"left"}),(0,r.yg)("td",{parentName:"tr",align:"left"})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"requestUri"),(0,r.yg)("td",{parentName:"tr",align:"center"},"Request uri"),(0,r.yg)("td",{parentName:"tr",align:"left"}),(0,r.yg)("td",{parentName:"tr",align:"left"})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"responseBody"),(0,r.yg)("td",{parentName:"tr",align:"center"},"Response body"),(0,r.yg)("td",{parentName:"tr",align:"left"}),(0,r.yg)("td",{parentName:"tr",align:"left"})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"responseContentLength"),(0,r.yg)("td",{parentName:"tr",align:"center"},"Response body size"),(0,r.yg)("td",{parentName:"tr",align:"left"}),(0,r.yg)("td",{parentName:"tr",align:"left"})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"rpcType"),(0,r.yg)("td",{parentName:"tr",align:"center"},"rpc type"),(0,r.yg)("td",{parentName:"tr",align:"left"}),(0,r.yg)("td",{parentName:"tr",align:"left"})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"status"),(0,r.yg)("td",{parentName:"tr",align:"center"},"response status"),(0,r.yg)("td",{parentName:"tr",align:"left"}),(0,r.yg)("td",{parentName:"tr",align:"left"})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"upstreamIp"),(0,r.yg)("td",{parentName:"tr",align:"center"},"Upstream (program providing the service) IP"),(0,r.yg)("td",{parentName:"tr",align:"left"}),(0,r.yg)("td",{parentName:"tr",align:"left"})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"upstreamResponseTime"),(0,r.yg)("td",{parentName:"tr",align:"center"},"Time taken by the upstream (program providing the service) to respond to the request (ms ms)"),(0,r.yg)("td",{parentName:"tr",align:"left"}),(0,r.yg)("td",{parentName:"tr",align:"left"})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"userAgent"),(0,r.yg)("td",{parentName:"tr",align:"center"},"Requested user agent"),(0,r.yg)("td",{parentName:"tr",align:"left"}),(0,r.yg)("td",{parentName:"tr",align:"left"})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"host"),(0,r.yg)("td",{parentName:"tr",align:"center"},"The requested host"),(0,r.yg)("td",{parentName:"tr",align:"left"}),(0,r.yg)("td",{parentName:"tr",align:"left"})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"module"),(0,r.yg)("td",{parentName:"tr",align:"center"},"Requested modules"),(0,r.yg)("td",{parentName:"tr",align:"left"}),(0,r.yg)("td",{parentName:"tr",align:"left"})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"path"),(0,r.yg)("td",{parentName:"tr",align:"center"},"The requested path"),(0,r.yg)("td",{parentName:"tr",align:"left"}),(0,r.yg)("td",{parentName:"tr",align:"left"})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"traceId"),(0,r.yg)("td",{parentName:"tr",align:"center"},"Requested Link Tracking ID"),(0,r.yg)("td",{parentName:"tr",align:"left"},"Need to access link tracking plugins, such as skywalking,zipkin"),(0,r.yg)("td",{parentName:"tr",align:"left"})))),(0,r.yg)("h2",{id:"26-examples"},"2.6 Examples"),(0,r.yg)("h3",{id:"261-collect-http-log-by-kafka"},"2.6.1 Collect Http Log by Kafka"),(0,r.yg)("h4",{id:"2611-plugin-configuration"},"2.6.1.1 Plugin Configuration"),(0,r.yg)("p",null,"Open the plugin and configure kafka, configure it as follows."),(0,r.yg)("p",null,(0,r.yg)("img",{src:a(68368).c})),(0,r.yg)("h4",{id:"2612-selector-configuration"},"2.6.1.2 Selector Configuration"),(0,r.yg)("p",null,"For detailed configuration of selectors and rules, please refer to: ",(0,r.yg)("a",{parentName:"p",href:"../../user-guide/admin-usage/selector-and-rule"},"Selector and rule management"),"\u3002"),(0,r.yg)("p",null,"In addition sometimes a large gateway cluster corresponds to multiple applications (business), different applications (business) corresponds to different topics, related to isolation,",(0,r.yg)("br",{parentName:"p"}),"\n","then you can configure different topics (optional) and samplingf rate (optional) by selector, the meaning of the configuration items as shown in the table above.",(0,r.yg)("br",{parentName:"p"}),"\n","The operation is shown below:\n",(0,r.yg)("img",{src:a(58652).c})),(0,r.yg)("h4",{id:"2613-rule-configuration"},"2.6.1.3 Rule Configuration"),(0,r.yg)("p",null,(0,r.yg)("img",{src:a(33080).c})),(0,r.yg)("h4",{id:"2614-request-service"},"2.6.1.4 Request Service"),(0,r.yg)("p",null,(0,r.yg)("img",{src:a(60236).c})),(0,r.yg)("h4",{id:"2615-consumption-and-display-of-logging"},"2.6.1.5 Consumption and display of Logging"),(0,r.yg)("p",null,"As each logging platform has differences, such as storage available clickhouse, ElasticSearch, etc., visualization has self-developed or open source Grafana, Kibana, etc..",(0,r.yg)("br",{parentName:"p"}),"\n","Logging-Kafka plugin uses Kafka to decouple production and consumption, while outputting logs in json format,\nconsumption and visualization require users to choose different technology stacks to achieve their own situation.="),(0,r.yg)("h1",{id:"3-how-to-disable-plugin"},"3. How to disable plugin"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"In ",(0,r.yg)("inlineCode",{parentName:"li"},"shenyu-admin")," --\x3e BasicConfig --\x3e Plugin --\x3e ",(0,r.yg)("inlineCode",{parentName:"li"},"loggingKafka")," set Status disable.")))}d.isMDXComponent=!0},95324:(e,t,a)=>{a.d(t,{c:()=>n});const n=a.p+"assets/images/logging-config-en-2d08ddb2fde45effd73f6de8dcf9677c.png"},48904:(e,t,a)=>{a.d(t,{c:()=>n});const n=a.p+"assets/images/logging-config-7d106f4fbe790030983a05d502a4279d.png"},31052:(e,t,a)=>{a.d(t,{c:()=>n});const n=a.p+"assets/images/loggingConsole-use-en-64a3c389309209c07d4ae4602e0e3895.png"},33080:(e,t,a)=>{a.d(t,{c:()=>n});const n=a.p+"assets/images/log-rule-en-ba4ee123192df9f3790a4383c0805c80.png"},68368:(e,t,a)=>{a.d(t,{c:()=>n});const n=a.p+"assets/images/logging-config-cn-38036184d6385744163b25162b0fe581.png"},36460:(e,t,a)=>{a.d(t,{c:()=>n});const n=a.p+"assets/images/logging-kafka-arch-86d15893445535929a2c02c5c9f2d181.jpg"},58652:(e,t,a)=>{a.d(t,{c:()=>n});const n=a.p+"assets/images/logging-option-topic-bea02b4cebee0533b5aa8ddd438d1eb9.png"},60236:(e,t,a)=>{a.d(t,{c:()=>n});const n=a.p+"assets/images/call-service-ceeafb89bf58792af70883bdaedbcb93.png"}}]);