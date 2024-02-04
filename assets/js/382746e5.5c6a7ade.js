"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[99344],{95788:(e,n,t)=>{t.d(n,{Iu:()=>h,yg:()=>y});var a=t(11504);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},h=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),d=c(t),p=i,y=d["".concat(l,".").concat(p)]||d[p]||u[p]||o;return t?a.createElement(y,r(r({ref:n},h),{},{components:t})):a.createElement(y,r({ref:n},h))}));function y(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=p;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[d]="string"==typeof e?e:i,r[1]=s;for(var c=2;c<o;c++)r[c]=t[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},8076:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=t(45072),i=(t(11504),t(95788));const o={sidebar_position:2,title:"Data Synchronization Design",keywords:["Apache ShenYu"],description:"Data Synchronization Design"},r=void 0,s={unversionedId:"design/data-sync",id:"version-2.4.1/design/data-sync",isDocsHomePage:!1,title:"Data Synchronization Design",description:"Data Synchronization Design",source:"@site/versioned_docs/version-2.4.1/design/data-sync.md",sourceDirName:"design",slug:"/design/data-sync",permalink:"/docs/2.4.1/design/data-sync",editUrl:"https://github.com/apache/shenyu-website/edit/main/versioned_docs/version-2.4.1/design/data-sync.md",version:"2.4.1",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Data Synchronization Design",keywords:["Apache ShenYu"],description:"Data Synchronization Design"},sidebar:"version-2.4.1/tutorialSidebar",previous:{title:"Apache ShenYu Admin Database Design",permalink:"/docs/2.4.1/design/database-design"},next:{title:"Flow Control",permalink:"/docs/2.4.1/design/flow-control"}},l=[{value:"Preface",id:"preface",children:[]},{value:"Principle Analysis",id:"principle-analysis",children:[{value:"Zookeeper Synchronization",id:"zookeeper-synchronization",children:[]},{value:"WebSocket Synchronization",id:"websocket-synchronization",children:[]},{value:"Http Long Polling",id:"http-long-polling",children:[]},{value:"Nacos Synchronization",id:"nacos-synchronization",children:[]},{value:"Etcd Synchronization",id:"etcd-synchronization",children:[]},{value:"Consul Synchronization",id:"consul-synchronization",children:[]}]}],c={toc:l},h="wrapper";function d(e){let{components:n,...t}=e;return(0,i.yg)(h,(0,a.c)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"This document explains the principle of data synchronization. Data synchronization refers to the strategy used to synchronize data to ShenYu gateway after shenyu-admin background operation data. ShenYu gateway currently supports ZooKeeper, WebSocket, HTTP Long Polling, Nacos, Etcd and Consul for data synchronization."),(0,i.yg)("p",null,"See ",(0,i.yg)("a",{parentName:"p",href:"../user-guide/use-data-sync"},"Data Synchronization Configuration"),"  for configuration information about data synchronization."),(0,i.yg)("img",{src:"/img/shenyu/dataSync/data-sync-dir-en.png",width:"90%",height:"80%"}),(0,i.yg)("h2",{id:"preface"},"Preface"),(0,i.yg)("p",null,"Gateway is the entrance of request and it is a very important part in micro service architecture, therefore the importance of gateway high availability is self-evident. When we use gateway, we have to change configuration such as flow rule, route rule for satisfying business requirement. Therefore, the dynamic configuration of the gateway is an important factor to ensure the high availability of the gateway. "),(0,i.yg)("p",null,"In the actual use of Apache ShenYu Gateway, users also feedback some problems:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Apache ShenYu depends on ZooKeeper, how to use Etcd, Consul, Nacos and other registry center?")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Apache ShenYu depends on Redis and InfluxDB, and do not use limiting plugins or monitoring plugins. Why need these?")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Why not use configuration center for configuration synchronization?")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Why can't updates be configured dynamically?")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Every time you want to query the database, Redis is a better way."))),(0,i.yg)("p",null,"According to the feedback of users, we have also partially reconstructed ShenYu. The current data synchronization features are as follows:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"All configuration is cached in ShenYu gateway memory, each request uses local cache, which is very fast.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Users can modify any data in the background of shenyu-admin, and immediately synchronize to the gateway memory.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Support ShenYu plugin, selector, rule data, metadata, signature data and other data synchronization.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"All plugin selectors and rules are configured dynamically and take effect immediately, no service restart required.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Data synchronization mode supports Zookeeper, HTTP long polling, Websocket, Nacos, Etcd and Consul."))),(0,i.yg)("h2",{id:"principle-analysis"},"Principle Analysis"),(0,i.yg)("p",null,"The following figure shows the process of data synchronization of ShenYu. ShenYu Gateway will synchronize configuration data from configuration service at startup, and support push-pull mode to get configuration change information, and then update local cache. The administrator can change the user permissions, rules, plugins and traffic configuration in the admin system(shenyu-admin), and synchronize the change information to ShenYu Gateway through the push-pull mode. Whether the mode is push or pull depends on the synchronization mode used."),(0,i.yg)("img",{src:"/img/shenyu/dataSync/shenyu-config-processor-en.png",width:"90%",height:"80%"}),(0,i.yg)("p",null,"In the original version, the configuration service relied on the Zookeeper implementation to manage the back-end push of changes to the gateway. Now, WebSocket, HTTP long polling, ZooKeeper, Nacos, Etcd, and Consul can now be supported by specifying the corresponding synchronization policy by setting ",(0,i.yg)("inlineCode",{parentName:"p"},"shenyu.sync.${strategy}")," in the configuration file. The default WeboSocket synchronization policy can be used to achieve second level data synchronization. However, it is important to note that Apache ShenYu Gateway and shenyu-admin must use the same synchronization policy."),(0,i.yg)("p",null,"As showing picture below,",(0,i.yg)("inlineCode",{parentName:"p"},"shenyu-admin")," will issue a configuration change notification through ",(0,i.yg)("inlineCode",{parentName:"p"},"EventPublisher")," after users change configuration,",(0,i.yg)("inlineCode",{parentName:"p"},"EventDispatcher")," will handle this modification and send configuration to corresponding event handler according to configured synchronization strategy."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"If it is a ",(0,i.yg)("inlineCode",{parentName:"li"},"websocket")," synchronization strategy,it will push modified data to ",(0,i.yg)("inlineCode",{parentName:"li"},"shenyu-web"),",and corresponding ",(0,i.yg)("inlineCode",{parentName:"li"},"WebsocketDataHandler")," handler will handle ",(0,i.yg)("inlineCode",{parentName:"li"},"shenyu-admin")," data push at the gateway layer"),(0,i.yg)("li",{parentName:"ul"},"If it is a  ",(0,i.yg)("inlineCode",{parentName:"li"},"zookeeper")," synchronization strategy,it will push modified data to ",(0,i.yg)("inlineCode",{parentName:"li"},"zookeeper"),",and the ",(0,i.yg)("inlineCode",{parentName:"li"},"ZookeeperSyncCache")," will monitor the data changes of ",(0,i.yg)("inlineCode",{parentName:"li"},"zookeeper")," and process them"),(0,i.yg)("li",{parentName:"ul"},"If it is a  ",(0,i.yg)("inlineCode",{parentName:"li"},"http")," synchronization strategy,",(0,i.yg)("inlineCode",{parentName:"li"},"shenyu-web")," proactively initiates long polling requests,90 seconds timeout by default,if there is no modified data in ",(0,i.yg)("inlineCode",{parentName:"li"},"shenyu-admin"),",http request will be blocked,if there is a data change, it will respond to the changed data information,if there is no data change after 60 seconds,then respond with empty data,gateway continue to make http request after getting response,this kind of request will repeat.")),(0,i.yg)("img",{src:"/img/shenyu/dataSync/config-strategy-processor-en.png",width:"90%",height:"80%"}),(0,i.yg)("h3",{id:"zookeeper-synchronization"},"Zookeeper Synchronization"),(0,i.yg)("p",null,"The zookeeper-based synchronization principle is very simple,it mainly depends on ",(0,i.yg)("inlineCode",{parentName:"p"},"zookeeper")," watch mechanism,",(0,i.yg)("inlineCode",{parentName:"p"},"shenyu-web")," will monitor the configured node,when ",(0,i.yg)("inlineCode",{parentName:"p"},"shenyu-admin")," starts,all the data will be written to ",(0,i.yg)("inlineCode",{parentName:"p"},"zookeeper"),",it will incrementally update the nodes of ",(0,i.yg)("inlineCode",{parentName:"p"},"zookeeper")," when data changes,at the same time, ",(0,i.yg)("inlineCode",{parentName:"p"},"shenyu-web")," will monitor the node for configuration information, and update the local cache once the information changes"),(0,i.yg)("p",null,(0,i.yg)("img",{parentName:"p",src:"https://yu199195.github.io/images/soul/soul-zookeeper.png",alt:"Zookeeper Node Design"})),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"Apache ShenYu")," writes the configuration information to the zookeeper node,and it is meticulously designed. If you want to learn more about the code implementation, refer to the source code ",(0,i.yg)("inlineCode",{parentName:"p"},"ZookeeperSyncDataService"),"."),(0,i.yg)("h3",{id:"websocket-synchronization"},"WebSocket Synchronization"),(0,i.yg)("p",null,"The mechanism of ",(0,i.yg)("inlineCode",{parentName:"p"},"websocket")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"zookeeper")," is similar,when the gateway and the ",(0,i.yg)("inlineCode",{parentName:"p"},"shenyu-admin")," establish a ",(0,i.yg)("inlineCode",{parentName:"p"},"websocket")," connection,",(0,i.yg)("inlineCode",{parentName:"p"},"shenyu-admin")," will push all data at once,it will automatically push incremental data to ",(0,i.yg)("inlineCode",{parentName:"p"},"shenyu-web")," through ",(0,i.yg)("inlineCode",{parentName:"p"},"websocket")," when configured data changes"),(0,i.yg)("p",null,"When we use websocket synchronization,pay attention to reconnect after disconnection,which also called keep heartbeat.",(0,i.yg)("inlineCode",{parentName:"p"},"Apache ShenYu")," uses ",(0,i.yg)("inlineCode",{parentName:"p"},"java-websocket")," ,a third-party library,to connect to ",(0,i.yg)("inlineCode",{parentName:"p"},"websocket"),". If you want to learn more about the code implementation, refer to the source code ",(0,i.yg)("inlineCode",{parentName:"p"},"WebsocketSyncDataService"),"."),(0,i.yg)("h3",{id:"http-long-polling"},"Http Long Polling"),(0,i.yg)("p",null,"The mechanism of zookeeper and websocket data synchronization is relatively simple,but http synchronization will be relatively complicated.ShenYu borrows the design ideas of ",(0,i.yg)("inlineCode",{parentName:"p"},"Apollo")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"Nacos")," and realizes ",(0,i.yg)("inlineCode",{parentName:"p"},"http")," long polling data synchronization using their advantages.Note that this is not traditional ajax long polling."),(0,i.yg)("img",{src:"/img/shenyu/dataSync/http-long-polling-en.png",width:"90%",height:"80%"}),(0,i.yg)("p",null,"http long polling mechanism as above,shenyu-web gateway requests shenyu-admin configuration services,timeout is 90 seconds,it means gateway layer request configuration service will wait at most 90 seconds,this is convenient for shenyu-admin configuration service to respond modified data in time,and therefore we realize near real-time push."),(0,i.yg)("p",null,"After the http request reaches shenyu-admin, it does not respond immediately,but uses the asynchronous mechanism of Servlet3.0 to asynchronously respond to the data.First of all,put long polling request task ",(0,i.yg)("inlineCode",{parentName:"p"},"LongPollingClient")," into ",(0,i.yg)("inlineCode",{parentName:"p"},"BlocingQueue"),",and then start scheduling task,execute after 60 seconds,this aims to remove the long polling request from the queue after 60 seconds,even there is no configured data change.Because even if there is no configuration change,gateway also need to know,otherwise it will wait,and there is a 90 seconds timeout when the gateway requests configuration services."),(0,i.yg)("p",null,"If the administrator changes the configuration data during this period,the long polling requests in the queue will be removed one by one, and respond which group\u2019s data has changed(we distribute plugins, rules, flow configuration , user configuration data into different groups).After gateway receives response,it only knows which Group has changed its configuration,it need to request again to get group configuration data.Someone may ask,why don't you write out the changed data directly?We also discussed this issue deeply during development, because the http long polling mechanism can only guarantee quasi real-time,if gateway layer does not handle it in time,or administrator updates configuration frequently,we probably missed some configuration change push.For security, we only inform that a certain Group information has changed."),(0,i.yg)("p",null,"When ",(0,i.yg)("inlineCode",{parentName:"p"},"shenyu-web")," gateway layer receives the http response information,pull modified information(if exists),and then request ",(0,i.yg)("inlineCode",{parentName:"p"},"shenyu-admin")," configuration service again,this will repeatedly execute.   If you want to learn more about the code implementation, refer to the source code ",(0,i.yg)("inlineCode",{parentName:"p"},"HttpSyncDataService"),"."),(0,i.yg)("h3",{id:"nacos-synchronization"},"Nacos Synchronization"),(0,i.yg)("p",null,"The synchronization principle of Nacos is basically similar to that of ZooKeeper, and it mainly depends on the configuration management of Nacos. The path of each configuration node is similar to that of ZooKeeper."),(0,i.yg)("p",null,"ShenYu gateway will monitor the configured node. At startup, if there is no configuration node in Nacos, it will write the synchronous full amount of data into Nacos. When the sequential data send changes, it will update the configuration node in Nacos in full amount. The local cache is updated."),(0,i.yg)("p",null,"If you want to learn more about the code implementation, please refer to the source code ",(0,i.yg)("inlineCode",{parentName:"p"},"NacosSyncDataService")," and the official documentation for ",(0,i.yg)("a",{parentName:"p",href:"https://nacos.io/zh-cn/docs/sdk.html"},"Nacos")," ."),(0,i.yg)("h3",{id:"etcd-synchronization"},"Etcd Synchronization"),(0,i.yg)("p",null,"Etcd data synchronization principle is similar to Zookeeper, mainly relying on Etcd's watch mechanism, and each configuration node path is the same as that of Zookeeper."),(0,i.yg)("p",null,"The native API for Etcd is a bit more complicated to use, so it's somewhat encapsulated."),(0,i.yg)("p",null,"ShenYu gateway will listen to the configured node. When startup, if there is no configuration node in Etcd, it will write the synchronous full amount of data into Etcd. When the sequential data send changes, it will update the configuration node in Etcd incrementally."),(0,i.yg)("p",null,"If you want to learn more about the code implementation, refer to the source ",(0,i.yg)("inlineCode",{parentName:"p"},"EtcdSyncDataService"),"."),(0,i.yg)("h3",{id:"consul-synchronization"},"Consul Synchronization"),(0,i.yg)("p",null,"Consul data synchronization principle is that the gateway regularly polls Consul's configuration center to get the configuration version number for local comparison."),(0,i.yg)("p",null,"ShenYu gateway will poll the configured nodes regularly, and the default interval is 1s. When startup, if there is no configuration node in Consul, write the synchronous full amount of data into Consul, then incrementally update the configuration node in Consul when the subsequent data is sent to change. At the same time, Apache ShenYu Gateway will regularly polls the node of configuration information and pull the configuration version number for comparison with the local one. The local cache is updated when the version number is changed."),(0,i.yg)("p",null,"If you want to learn more about the code implementation, refer to the source ",(0,i.yg)("inlineCode",{parentName:"p"},"ConsulsyncDataService"),"."))}d.isMDXComponent=!0}}]);