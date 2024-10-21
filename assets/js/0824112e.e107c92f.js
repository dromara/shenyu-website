"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[10080],{15680:(e,t,a)=>{a.d(t,{xA:()=>g,yg:()=>m});var r=a(96540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},g=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),c=s(a),y=n,m=c["".concat(p,".").concat(y)]||c[y]||u[y]||l;return a?r.createElement(m,i(i({ref:t},g),{},{components:a})):r.createElement(m,i({ref:t},g))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=y;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:n,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}y.displayName="MDXCreateElement"},53081:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=a(58168),n=(a(96540),a(15680));const l={title:"2.6.1",sidebar_position:2,keywords:["release-notes"],description:"release-notes"},i=void 0,o={unversionedId:"2.6.1-release",id:"2.6.1-release",isDocsHomePage:!1,title:"2.6.1",description:"release-notes",source:"@site/event/2.6.1-release.md",sourceDirName:".",slug:"/2.6.1-release",permalink:"/event/2.6.1-release",editUrl:"https://github.com/apache/shenyu-website/edit/main/event/2.6.1-release.md",version:"current",lastUpdatedBy:"WindSearcher",lastUpdatedAt:1729473223,formattedLastUpdatedAt:"10/21/2024",sidebarPosition:2,frontMatter:{title:"2.6.1",sidebar_position:2,keywords:["release-notes"],description:"release-notes"}},p=[{value:"2.6.1",id:"261",children:[{value:"New Features",id:"new-features",children:[]},{value:"API Changes",id:"api-changes",children:[]},{value:"Enhancement",id:"enhancement",children:[]},{value:"Refactor",id:"refactor",children:[]},{value:"Bug Fix",id:"bug-fix",children:[]}]}],s={toc:p},g="wrapper";function c(e){let{components:t,...a}=e;return(0,n.yg)(g,(0,r.A)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"261"},"2.6.1"),(0,n.yg)("h3",{id:"new-features"},"New Features"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"Add dubbo annotation analysis for shenyu ingress controller"),(0,n.yg)("li",{parentName:"ol"},"Support plugin lifecycle"),(0,n.yg)("li",{parentName:"ol"},"Support shenyu-sdk-client by openFeign"),(0,n.yg)("li",{parentName:"ol"},"Adding a Motan plugin and Spring Cloud to shenyu ingress-controller"),(0,n.yg)("li",{parentName:"ol"},"Support alert notice"),(0,n.yg)("li",{parentName:"ol"},"Shenyu client add discovery register center"),(0,n.yg)("li",{parentName:"ol"},"Add shenyu  context-path plugin ingress controller"),(0,n.yg)("li",{parentName:"ol"},"Add shenyu grpc plugin ingress controller"),(0,n.yg)("li",{parentName:"ol"},"Add shenyu sofa ingress controller"),(0,n.yg)("li",{parentName:"ol"},"Add nacos, etcd, eureka as discovery service"),(0,n.yg)("li",{parentName:"ol"},"Add new plugin: basic-auth"),(0,n.yg)("li",{parentName:"ol"},"Add shenyu logging-rabbitmq plugin"),(0,n.yg)("li",{parentName:"ol"},"Binding selector by shenyu-discovery")),(0,n.yg)("h3",{id:"api-changes"},"API Changes"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Refactor shenyu sync data data structure"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre"},'plugin.list ["plugin.sign", "plugin.dubbo", "plugin.pluginName"]\n-> plugin.sign\n-> plugin.dubbo\n-> plugin.pluginName\n\nexamples data:\nselector.key1.list ["selector.key1.value1", "selector.key1.value2", "selector.key1.value3"]\n-> selector.key1.value1\n-> selector.key1.value2\n-> selector.key1.value3\n\nselector.key2.list ["selector.key2.value1", "selector.key2.value2", "selector.key2.value3"]\n-> selector.key2.value4\n-> selector.key2.value5\n-> selector.key2.value6\n'))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Support NettyClient as default httpclient")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Refactor admin-listener to support admin data sync")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Remove brpc supports including brpc plugin, brpc example, brpc integrated test")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Remove Apollo dependency to support Java 17(add jar by yourself)")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Remove shenyu middleware register client"))),(0,n.yg)("h3",{id:"enhancement"},"Enhancement"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"Add test cases for shenyu model event"),(0,n.yg)("li",{parentName:"ol"},"Add selector event test cases"),(0,n.yg)("li",{parentName:"ol"},"Add motan e2e test cases"),(0,n.yg)("li",{parentName:"ol"},"Support the motan protocol"),(0,n.yg)("li",{parentName:"ol"},"Add Grpc e2e test cases"),(0,n.yg)("li",{parentName:"ol"},"Bump apache-rat-plugin to 0.15"),(0,n.yg)("li",{parentName:"ol"},"Support String isBlank in match condition"),(0,n.yg)("li",{parentName:"ol"},"Clickhouse support ttl field"),(0,n.yg)("li",{parentName:"ol"},"Support HttpUtils log level"),(0,n.yg)("li",{parentName:"ol"},"Add unit test for Ingress Reconciler"),(0,n.yg)("li",{parentName:"ol"},"Support checksum when packing distribution"),(0,n.yg)("li",{parentName:"ol"},"Implement zero-copy in TCP plugin"),(0,n.yg)("li",{parentName:"ol"},"shenyu-client-springmvc supports default appName and contextPath"),(0,n.yg)("li",{parentName:"ol"},"Add sdk-feign example and integrated test case"),(0,n.yg)("li",{parentName:"ol"},"ElasticSearch logging support for custom index"),(0,n.yg)("li",{parentName:"ol"},"Enhance grpc plugin to support shenyu loadbalancer"),(0,n.yg)("li",{parentName:"ol"},"Support http2 upstream server"),(0,n.yg)("li",{parentName:"ol"},"Enhance Dubbo plugin support shenyu loadbalancer"),(0,n.yg)("li",{parentName:"ol"},"Add ingress-controller integration springCloud test case"),(0,n.yg)("li",{parentName:"ol"},"Add WebSocket plugin proxy ping configuration"),(0,n.yg)("li",{parentName:"ol"},"Add ingress-controller integration websocket test"),(0,n.yg)("li",{parentName:"ol"},"RewritePlugin supports percentage"),(0,n.yg)("li",{parentName:"ol"},"Admin use discovery config init discovery-service"),(0,n.yg)("li",{parentName:"ol"},"Divide plugin adapt shenyu discovery"),(0,n.yg)("li",{parentName:"ol"},"Alert report support config admin cluster multi servers"),(0,n.yg)("li",{parentName:"ol"},"WebSocket plugin adapt shenyu discovery"),(0,n.yg)("li",{parentName:"ol"},"Register service instance into discovery"),(0,n.yg)("li",{parentName:"ol"},"Admin adapter discovery local mode"),(0,n.yg)("li",{parentName:"ol"},"Add test case for ShenYu sdk core"),(0,n.yg)("li",{parentName:"ol"},"Add unit test for shenyu-discovery"),(0,n.yg)("li",{parentName:"ol"},"Add opengauss e2e test case"),(0,n.yg)("li",{parentName:"ol"},"Add upload plugin jar size limit"),(0,n.yg)("li",{parentName:"ol"},"Add unit test for shenyu-client-spring-websocket"),(0,n.yg)("li",{parentName:"ol"},"Upgrade Shiro version to a secure version(1.18.0)"),(0,n.yg)("li",{parentName:"ol"},"Update license and upgrade springboot(2.7.17)"),(0,n.yg)("li",{parentName:"ol"},"Send alarm message when gateway global error happen"),(0,n.yg)("li",{parentName:"ol"},"Add EurekaDiscoveryService unit test")),(0,n.yg)("h3",{id:"refactor"},"Refactor"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"Refactor 2.6.1 version(pom.xml)"),(0,n.yg)("li",{parentName:"ol"},"Simplify Map operations by computeIfAbsent"),(0,n.yg)("li",{parentName:"ol"},"Refactor polaris test cases"),(0,n.yg)("li",{parentName:"ol"},"Migrate Maven Wrapper from io.takari to official release"),(0,n.yg)("li",{parentName:"ol"},"Use compiled Pattern in WebClientMessageWriter"),(0,n.yg)("li",{parentName:"ol"},"Refactor HttpUtils request method"),(0,n.yg)("li",{parentName:"ol"},"Update github action version"),(0,n.yg)("li",{parentName:"ol"},"Refactor Sync data center abstract template method"),(0,n.yg)("li",{parentName:"ol"},"Update MenuProject, MenuModule, MenuDocItem to VO"),(0,n.yg)("li",{parentName:"ol"},"Unified dubbo version"),(0,n.yg)("li",{parentName:"ol"},"Refactor Httpclient's package"),(0,n.yg)("li",{parentName:"ol"},"Refactor github ci action cache"),(0,n.yg)("li",{parentName:"ol"},"Refactor motan pojo as rpc method parameter"),(0,n.yg)("li",{parentName:"ol"},"Upgrade Kafka client version to 3.4.0"),(0,n.yg)("li",{parentName:"ol"},"Migrate Admin swagger from springfox to springdoc"),(0,n.yg)("li",{parentName:"ol"},"Upgrade Dubbo version to 3.2.5 and refactor some methods"),(0,n.yg)("li",{parentName:"ol"},"Refactor AbstractShenyuSdkClient getOrDefault method"),(0,n.yg)("li",{parentName:"ol"},"Refactor http client properties"),(0,n.yg)("li",{parentName:"ol"},"Refactor webcliet plugin implement"),(0,n.yg)("li",{parentName:"ol"},"Upgrade com.google.guava:guava to 32.0.0-jre"),(0,n.yg)("li",{parentName:"ol"},"support k8s as e2e test case enviroment"),(0,n.yg)("li",{parentName:"ol"},"Refactor @Restapi as rest api request mapping"),(0,n.yg)("li",{parentName:"ol"},"String concatenation recommended using StringBuilder"),(0,n.yg)("li",{parentName:"ol"},"Set the netty allocator to unpooled"),(0,n.yg)("li",{parentName:"ol"},"Refactor startup banner"),(0,n.yg)("li",{parentName:"ol"},"Removing duplicate code and extracting the same code for common use"),(0,n.yg)("li",{parentName:"ol"},"Standardized null detection coding"),(0,n.yg)("li",{parentName:"ol"},"Refactor log plugin selector handler"),(0,n.yg)("li",{parentName:"ol"},"Refactor plugin classloader"),(0,n.yg)("li",{parentName:"ol"},"Refactor Logging plugin to support sampleRate at plugin level"),(0,n.yg)("li",{parentName:"ol"},"Refactor context-path register to avoid repeat context-path(use select for update)")),(0,n.yg)("h3",{id:"bug-fix"},"Bug Fix"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"Avoid the permanent overhead of creating TimeoutException"),(0,n.yg)("li",{parentName:"ol"},"Fix example module main class path"),(0,n.yg)("li",{parentName:"ol"},"Fix plugin page sorting bug"),(0,n.yg)("li",{parentName:"ol"},"Update Makefile SNAPSHOT version"),(0,n.yg)("li",{parentName:"ol"},"Fix typo in RELEASE-NOTES.md"),(0,n.yg)("li",{parentName:"ol"},"Fix the error package name of shenyu-example"),(0,n.yg)("li",{parentName:"ol"},"Fix password rules, add special characters '#' and '.'"),(0,n.yg)("li",{parentName:"ol"},"Fix health check for zookeeper:3.8.0 in e2e"),(0,n.yg)("li",{parentName:"ol"},"Fix unstable ci check"),(0,n.yg)("li",{parentName:"ol"},"Add e2e WaitForHelper exception log"),(0,n.yg)("li",{parentName:"ol"},"Fix springcloud plugin can't get scheme"),(0,n.yg)("li",{parentName:"ol"},"Fix javadoc build errors"),(0,n.yg)("li",{parentName:"ol"},"Fix the wrong request type in HttpUtils"),(0,n.yg)("li",{parentName:"ol"},"Fix  userId can not update success when update auth"),(0,n.yg)("li",{parentName:"ol"},"Fix thread leak in TCP plugin"),(0,n.yg)("li",{parentName:"ol"},'Format "Quick start" part in shenyu-integrated-test/README'),(0,n.yg)("li",{parentName:"ol"},"Fix SQL script error"),(0,n.yg)("li",{parentName:"ol"},"Fix uri plugin path error and change path to rawpath"),(0,n.yg)("li",{parentName:"ol"},"Fix WebSocket plugin to support rewrite plugin"),(0,n.yg)("li",{parentName:"ol"},"Fix indexName not working for es-logging"),(0,n.yg)("li",{parentName:"ol"},"Fix the error of context-path plugin"),(0,n.yg)("li",{parentName:"ol"},"Fix shenyu-admin cpu surge"),(0,n.yg)("li",{parentName:"ol"},"Fix alert localDateTime format problem"),(0,n.yg)("li",{parentName:"ol"},"shenyu-client persist ApiDoc error retry"),(0,n.yg)("li",{parentName:"ol"},"Fix applicationContextAware initialization too late"),(0,n.yg)("li",{parentName:"ol"},"Fix duplicate response header"),(0,n.yg)("li",{parentName:"ol"},"Set the maximum time to wait for the k8s cluster to start up"),(0,n.yg)("li",{parentName:"ol"},"Fix type for status field for clickhouse log plugin"),(0,n.yg)("li",{parentName:"ol"},"Fix response plugin memory leak"),(0,n.yg)("li",{parentName:"ol"},"Fix dataType contrast error"),(0,n.yg)("li",{parentName:"ol"},"Fix http data sync error"),(0,n.yg)("li",{parentName:"ol"},"Fix spelling error"),(0,n.yg)("li",{parentName:"ol"},"Fix shenyu-dubbo register status"),(0,n.yg)("li",{parentName:"ol"},"Fix buildDiscoveryUpstreamPath causing multiple ",(0,n.yg)("inlineCode",{parentName:"li"},"/")),(0,n.yg)("li",{parentName:"ol"},"Fix bug when registering with Eureka through EurekaInstanceRegisterRepository#persistInstance"),(0,n.yg)("li",{parentName:"ol"},"Fix AbstractLogPluginDataHandler hashcode error"),(0,n.yg)("li",{parentName:"ol"},"Fix Ratelimit plugin key error in redis cluster mode"),(0,n.yg)("li",{parentName:"ol"},"Fix multi shenyu client register repeat context path"),(0,n.yg)("li",{parentName:"ol"},"Fix shenyu can't load ext plugin after close the plugin"),(0,n.yg)("li",{parentName:"ol"},"Fix upload plugin jar bug in shenyu admin"),(0,n.yg)("li",{parentName:"ol"},"Fix plugin can not load resource path file"),(0,n.yg)("li",{parentName:"ol"},"Fix Admin script to show dictionary code"),(0,n.yg)("li",{parentName:"ol"},"Fix authorization conflict in sign plugin"),(0,n.yg)("li",{parentName:"ol"},"Fix sign plugin context path match error")))}c.isMDXComponent=!0}}]);