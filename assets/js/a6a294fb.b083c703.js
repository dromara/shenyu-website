"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[50552],{95788:(e,n,t)=>{t.d(n,{Iu:()=>d,yg:()=>h});var i=t(11504);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=i.createContext({}),c=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d=function(e){var n=c(e.components);return i.createElement(s.Provider,{value:n},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(t),u=a,h=p["".concat(s,".").concat(u)]||p[u]||g[u]||o;return t?i.createElement(h,r(r({ref:n},d),{},{components:t})):i.createElement(h,r({ref:n},d))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,r=new Array(o);r[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[p]="string"==typeof e?e:a,r[1]=l;for(var c=2;c<o;c++)r[c]=t[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},82484:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var i=t(45072),a=(t(11504),t(95788));const o={sidebar_position:3,title:"Data Synchronization Design",keywords:["soul"],description:"Data Synchronization Design"},r=void 0,l={unversionedId:"design/data-sync",id:"version-2.3.0-Legacy/design/data-sync",isDocsHomePage:!1,title:"Data Synchronization Design",description:"Data Synchronization Design",source:"@site/versioned_docs/version-2.3.0-Legacy/design/data-sync.md",sourceDirName:"design",slug:"/design/data-sync",permalink:"/docs/2.3.0-Legacy/design/data-sync",editUrl:"https://github.com/apache/shenyu-website/edit/main/versioned_docs/version-2.3.0-Legacy/design/data-sync.md",version:"2.3.0-Legacy",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Data Synchronization Design",keywords:["soul"],description:"Data Synchronization Design"},sidebar:"version-2.3.0-Legacy/tutorialSidebar",previous:{title:"Configuration Flow Introduction",permalink:"/docs/2.3.0-Legacy/design/config"},next:{title:"MetaData Concept Design",permalink:"/docs/2.3.0-Legacy/design/meta-data"}},s=[{value:"Description",id:"description",children:[]},{value:"Preface",id:"preface",children:[]},{value:"Principle Analysis",id:"principle-analysis",children:[]},{value:"Zookeeper Synchronization",id:"zookeeper-synchronization",children:[]},{value:"WebSocket Synchronization",id:"websocket-synchronization",children:[]},{value:"Http Long Polling",id:"http-long-polling",children:[]},{value:"Storage Address",id:"storage-address",children:[]},{value:"At Last",id:"at-last",children:[]}],c={toc:s},d="wrapper";function p(e){let{components:n,...t}=e;return(0,a.yg)(d,(0,i.c)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"description"},"Description"),(0,a.yg)("p",null,"This article mainly explains three ways of database synchronization and their principles."),(0,a.yg)("h2",{id:"preface"},"Preface"),(0,a.yg)("p",null,"Gateway is the entrance of request and it is a very important part in micro service architecture, therefore the importance of gateway high availability is self-evident. When we use gateway, we have to change configuration such as flow rule, route rule for satisfying business requirement. Therefore, the dynamic configuration of the gateway is an important factor to ensure the high availability of the gateway. Then, how does ",(0,a.yg)("inlineCode",{parentName:"p"},"Soul")," support dynamic configuration?"),(0,a.yg)("p",null,"Anyone who has used ",(0,a.yg)("inlineCode",{parentName:"p"},"Soul")," knows, ",(0,a.yg)("inlineCode",{parentName:"p"},"Soul")," plugin are hot swap,and the selector, rule of all plugins are dynamic configured, they take effect immediately without restarting service.But during using ",(0,a.yg)("inlineCode",{parentName:"p"},"Soul")," gateway, users also report many problems"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Rely on ",(0,a.yg)("inlineCode",{parentName:"li"},"zookeeper"),", this troubles users who use ",(0,a.yg)("inlineCode",{parentName:"li"},"etcd")," ",(0,a.yg)("inlineCode",{parentName:"li"},"consul")," and ",(0,a.yg)("inlineCode",{parentName:"li"},"nacos")," registry"),(0,a.yg)("li",{parentName:"ul"},"Rely on ",(0,a.yg)("inlineCode",{parentName:"li"},"redis"),",",(0,a.yg)("inlineCode",{parentName:"li"},"influxdb"),", I have not used the limiting plugin, monitoring plugin, why do I need these")),(0,a.yg)("p",null,"Therefore,we have done a partial reconstruction of ",(0,a.yg)("inlineCode",{parentName:"p"},"Soul"),",after two months of version iteration,we released version ",(0,a.yg)("inlineCode",{parentName:"p"},"2.0")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Data Synchronization removes the strong dependence on ",(0,a.yg)("inlineCode",{parentName:"li"},"zookeeper"),",and we add ",(0,a.yg)("inlineCode",{parentName:"li"},"http long polling")," and ",(0,a.yg)("inlineCode",{parentName:"li"},"websocket")),(0,a.yg)("li",{parentName:"ul"},"Limiting plugin and monitoring plugin realize real dynamic configuration,we use ",(0,a.yg)("inlineCode",{parentName:"li"},"admin")," backend for dynamic configuration instead of ",(0,a.yg)("inlineCode",{parentName:"li"},"yml")," configuration before")),(0,a.yg)("p",null,(0,a.yg)("em",{parentName:"p"},"Q: Someone may ask me,why don't you use configuration center for synchronization?"),"  "),(0,a.yg)("p",null,"First of all, it will add extra costs, not only for maintenance, but also make ",(0,a.yg)("inlineCode",{parentName:"p"},"Soul")," heavy; In addition, using configuration center, data format is uncontrollable and it is not convenient for ",(0,a.yg)("inlineCode",{parentName:"p"},"soul-admin")," to do configuration management."),(0,a.yg)("p",null,(0,a.yg)("em",{parentName:"p"},"Q: Someone may also ask,dynamic configuration update?Every time I can get latest data from database or redis,why are you making it complicated?")),(0,a.yg)("p",null,"As a gateway, soul cached all the configuration in the ",(0,a.yg)("inlineCode",{parentName:"p"},"HashMap")," of JVM in order to provide higher response speed and we use local cache for every request, It's very fast. So this article can also be understood as three ways of memory synchronization in a distributed environment."),(0,a.yg)("h2",{id:"principle-analysis"},"Principle Analysis"),(0,a.yg)("p",null,"This is a HD uncoded image, it shows the flow of ",(0,a.yg)("inlineCode",{parentName:"p"},"Soul")," data synchronization, when ",(0,a.yg)("inlineCode",{parentName:"p"},"Soul")," gateway starts, it will synchronize configuration data from the configuration service and support push-pull mode to obtain configuration change information, and update the local cache.When administrator changes user,rule,plugin,flow configuration in the backend, modified information will synchronize to the ",(0,a.yg)("inlineCode",{parentName:"p"},"Soul")," gateway through the push-pull mode,whether it is the push mode or the pull mode depends on the configuration.About the configuration synchronization module, it is actually a simplified configuration center.\n",(0,a.yg)("img",{parentName:"p",src:"https://bestkobe.gitee.io/images/soul/soul-config-processor.png?_t=201908032316",alt:"Soul Data Synchronization Flow Chart"})),(0,a.yg)("p",null,"At version ",(0,a.yg)("inlineCode",{parentName:"p"},"1.x")," ,configuration service depends on ",(0,a.yg)("inlineCode",{parentName:"p"},"zookeeper"),",management backend ",(0,a.yg)("inlineCode",{parentName:"p"},"push")," the modified information to gateway.But version ",(0,a.yg)("inlineCode",{parentName:"p"},"2.x")," supports ",(0,a.yg)("inlineCode",{parentName:"p"},"webosocket"),",",(0,a.yg)("inlineCode",{parentName:"p"},"http"),",",(0,a.yg)("inlineCode",{parentName:"p"},"zookeeper"),",it can specify the corresponding synchronization strategy through ",(0,a.yg)("inlineCode",{parentName:"p"},"soul.sync.strategy")," and use ",(0,a.yg)("inlineCode",{parentName:"p"},"webosocket")," synchronization strategy by default which can achieve second-level data synchronization.But,note that ",(0,a.yg)("inlineCode",{parentName:"p"},"soul-web")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"soul-admin")," must use the same synchronization mechanism."),(0,a.yg)("p",null,"As showing picture below,",(0,a.yg)("inlineCode",{parentName:"p"},"soul-admin")," will issue a configuration change notification through ",(0,a.yg)("inlineCode",{parentName:"p"},"EventPublisher")," after users change configuration,",(0,a.yg)("inlineCode",{parentName:"p"},"EventDispatcher")," will handle this modification and send configuration to corresponding event handler according to configured synchronization strategy(http,websocket,zookeeper)"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"If it is a ",(0,a.yg)("inlineCode",{parentName:"li"},"websocket")," synchronization strategy,it will push modified data to ",(0,a.yg)("inlineCode",{parentName:"li"},"soul-web"),",and corresponding ",(0,a.yg)("inlineCode",{parentName:"li"},"WebsocketCacheHandler")," handler will handle ",(0,a.yg)("inlineCode",{parentName:"li"},"admin")," data push at the gateway layer"),(0,a.yg)("li",{parentName:"ul"},"If it is a  ",(0,a.yg)("inlineCode",{parentName:"li"},"zookeeper")," synchronization strategy,it will push modified data to ",(0,a.yg)("inlineCode",{parentName:"li"},"zookeeper"),",and the ",(0,a.yg)("inlineCode",{parentName:"li"},"ZookeeperSyncCache")," will monitor the data changes of ",(0,a.yg)("inlineCode",{parentName:"li"},"zookeeper")," and process them"),(0,a.yg)("li",{parentName:"ul"},"If it is a  ",(0,a.yg)("inlineCode",{parentName:"li"},"http")," synchronization strategy,",(0,a.yg)("inlineCode",{parentName:"li"},"soul-web")," proactively initiates long polling requests,90 seconds timeout by default,if there is no modified data in ",(0,a.yg)("inlineCode",{parentName:"li"},"soul-admin"),",http request will be blocked,if there is a data change, it will respond to the changed data information,if there is no data change after 60 seconds,then respond with empty data,gateway continue to make http request after getting response,this kind of request will repeat\n",(0,a.yg)("img",{parentName:"li",src:"https://bestkobe.gitee.io/images/soul/config-strage-processor.png?_t=201908032339",alt:"Soul Configuration Synchronization Strategy Flow Chart"}))),(0,a.yg)("h2",{id:"zookeeper-synchronization"},"Zookeeper Synchronization"),(0,a.yg)("p",null,"The zookeeper-based synchronization principle is very simple,it mainly depends on ",(0,a.yg)("inlineCode",{parentName:"p"},"zookeeper")," watch mechanism,",(0,a.yg)("inlineCode",{parentName:"p"},"soul-web")," will monitor the configured node,when ",(0,a.yg)("inlineCode",{parentName:"p"},"soul-admin")," starts,all the data will be written to ",(0,a.yg)("inlineCode",{parentName:"p"},"zookeeper"),",it will incrementally update the nodes of ",(0,a.yg)("inlineCode",{parentName:"p"},"zookeeper")," when data changes,at the same time, ",(0,a.yg)("inlineCode",{parentName:"p"},"soul-web")," will monitor the node for configuration information, and update the local cache once the information changes"),(0,a.yg)("p",null,(0,a.yg)("img",{parentName:"p",src:"https://yu199195.github.io/images/soul/soul-zookeeper.png",alt:"Zookeeper Node Design"})),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"soul")," writes the configuration information to the zookeeper node,and it is meticulously designed."),(0,a.yg)("h2",{id:"websocket-synchronization"},"WebSocket Synchronization"),(0,a.yg)("p",null,"The mechanism of ",(0,a.yg)("inlineCode",{parentName:"p"},"websocket")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"zookeeper")," is similar,when the gateway and the ",(0,a.yg)("inlineCode",{parentName:"p"},"admin")," establish a ",(0,a.yg)("inlineCode",{parentName:"p"},"websocket")," connection,",(0,a.yg)("inlineCode",{parentName:"p"},"admin")," will push all data at once,it will automatically push incremental data to ",(0,a.yg)("inlineCode",{parentName:"p"},"soul-web")," through ",(0,a.yg)("inlineCode",{parentName:"p"},"websocket")," when configured data changes"),(0,a.yg)("p",null,"When we use websocket synchronization,pay attention to reconnect after disconnection,which also called keep heartbeat.",(0,a.yg)("inlineCode",{parentName:"p"},"soul")," uses ",(0,a.yg)("inlineCode",{parentName:"p"},"java-websocket")," ,a third-party library,to connect to ",(0,a.yg)("inlineCode",{parentName:"p"},"websocket"),"."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-java"},'public class WebsocketSyncCache extends WebsocketCacheHandler {\n    /**\n     * The Client.\n     */\n    private WebSocketClient client;\n\n    public WebsocketSyncCache(final SoulConfig.WebsocketConfig websocketConfig) {\n        ScheduledThreadPoolExecutor executor = new ScheduledThreadPoolExecutor(1,\n                SoulThreadFactory.create("websocket-connect", true));\n         client = new WebSocketClient(new URI(websocketConfig.getUrl())) {\n                @Override\n                public void onOpen(final ServerHandshake serverHandshake) {\n                  //....\n                }\n                @Override\n                public void onMessage(final String result) {\n                  //....\n                }    \n            };\n        //connect\n        client.connectBlocking();\n        //reconnect after disconnection,using scheduling thread pool,execute every 30 seconds\n        executor.scheduleAtFixedRate(() -> {\n            if (client != null && client.isClosed()) {\n                    client.reconnectBlocking();\n            }\n        }, 10, 30, TimeUnit.SECONDS);\n    }\n')),(0,a.yg)("h2",{id:"http-long-polling"},"Http Long Polling"),(0,a.yg)("p",null,"The mechanism of zookeeper and websocket data synchronization is relatively simple,but http synchronization will be relatively complicated.Soul borrows the design ideas of ",(0,a.yg)("inlineCode",{parentName:"p"},"Apollo")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"Nacos")," and realizes ",(0,a.yg)("inlineCode",{parentName:"p"},"http")," long polling data synchronization using their advantages.Note that this is not traditional ajax long polling."),(0,a.yg)("p",null,(0,a.yg)("img",{parentName:"p",src:"https://bestkobe.gitee.io/images/soul/http-long-polling.png?_t=201908032339",alt:"http long polling"})),(0,a.yg)("p",null,"http long polling mechanism as above,soul-web gateway requests admin configuration services,timeout is 90 seconds,it means gateway layer request configuration service will wait at most 90 seconds,this is convenient for admin configuration service to respond modified data in time,and therefore we realize near real-time push."),(0,a.yg)("p",null,"After the http request reaches soul-admin, it does not respond immediately,but uses the asynchronous mechanism of Servlet3.0 to asynchronously respond to the data.First of all,put long polling request task ",(0,a.yg)("inlineCode",{parentName:"p"},"LongPollingClient")," into ",(0,a.yg)("inlineCode",{parentName:"p"},"BlocingQueue"),",and then start scheduling task,execute after 60 seconds,this aims to remove the long polling request from the queue after 60 seconds,even there is no configured data change.Because even if there is no configuration change,gateway also need to know,otherwise it will wait,and there is a 90 seconds timeout when the gateway requests configuration services."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-java"},"public void doLongPolling(final HttpServletRequest request, final HttpServletResponse response) {\n    // since soul-web may not receive notification of a configuration change, MD5 value may be different,so respond immediately\n    List<ConfigGroupEnum> changedGroup = compareMD5(request);\n    String clientIp = getRemoteIp(request);\n    if (CollectionUtils.isNotEmpty(changedGroup)) {\n        this.generateResponse(response, changedGroup);\n        return;\n    }\n\n    // Servlet3.0 asynchronously responds to http request\n    final AsyncContext asyncContext = request.startAsync();\n    asyncContext.setTimeout(0L);\n    scheduler.execute(new LongPollingClient(asyncContext, clientIp, 60));\n}\n    \nclass LongPollingClient implements Runnable {\n    LongPollingClient(final AsyncContext ac, final String ip, final long timeoutTime) {\n        // omit......\n    }\n    @Override\n    public void run() {\n        // join a scheduled task, if there is no configuration change within 60 seconds, it will be executed after 60 seconds and respond to http requests\n        this.asyncTimeoutFuture = scheduler.schedule(() -> {\n            // clients are blocked queue,saved the request from soul-web\n            clients.remove(LongPollingClient.this);\n            List<ConfigGroupEnum> changedGroups = HttpLongPollingDataChangedListener.compareMD5((HttpServletRequest) asyncContext.getRequest());\n            sendResponse(changedGroups);\n        }, timeoutTime, TimeUnit.MILLISECONDS);\n        // \n        clients.add(this);\n    }\n}\n")),(0,a.yg)("p",null,"If the administrator changes the configuration data during this period,the long polling requests in the queue will be removed one by one, and respond which group\u2019s data has changed(we distribute plugins, rules, flow configuration , user configuration data into different groups).After gateway receives response,it only knows which Group has changed its configuration,it need to request again to get group configuration data.Someone may ask,why don't you write out the changed data directly?We also discussed this issue deeply during development, because the http long polling mechanism can only guarantee quasi real-time,if gateway layer does not handle it in time,or administrator updates configuration frequently,we probably missed some configuration change push.For security, we only inform that a certain Group information has changed."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-java"},'// soul-admin configuration changed,remove the requests from the queue one by one and respond to them\nclass DataChangeTask implements Runnable {\n    DataChangeTask(final ConfigGroupEnum groupKey) {\n        this.groupKey = groupKey;\n    }\n    @Override\n    public void run() {\n        try {\n            for (Iterator<LongPollingClient> iter = clients.iterator(); iter.hasNext(); ) {\n                LongPollingClient client = iter.next();\n                iter.remove();\n                client.sendResponse(Collections.singletonList(groupKey));\n            }\n        } catch (Throwable e) {\n            LOGGER.error("data change error.", e);\n        }\n    }\n}\n')),(0,a.yg)("p",null,"When ",(0,a.yg)("inlineCode",{parentName:"p"},"soul-web")," gateway layer receives the http response information,pull modified information(if exists),and then request ",(0,a.yg)("inlineCode",{parentName:"p"},"soul-admin")," configuration service again,this will repeatedly execute."),(0,a.yg)("h2",{id:"storage-address"},"Storage Address"),(0,a.yg)("p",null,"github: ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/dromara/soul"},"https://github.com/dromara/soul")),(0,a.yg)("p",null,"gitee: ",(0,a.yg)("a",{parentName:"p",href:"https://gitee.com/dromara/soul"},"https://gitee.com/dromara/soul")),(0,a.yg)("p",null,"There also have video tutorials on the project homepage,you can go to watch it if needed."),(0,a.yg)("h2",{id:"at-last"},"At Last"),(0,a.yg)("p",null,"This article introduces that,in order to optimize the response speed, ",(0,a.yg)("inlineCode",{parentName:"p"},"soul")," as a highly available micro service gateway, its three ways to cache the configuration rule selector data locally.After learning this article,I believe you have a certain understanding of the popular configuration center,it may be easier to learn their codes,I believe you can also write a distributed configuration center.Version 3.0 is already under planning,and I believe it will definitely surprise you."))}p.isMDXComponent=!0}}]);