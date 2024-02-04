"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[56500],{95788:(e,a,n)=>{n.d(a,{Iu:()=>g,yg:()=>m});var t=n(11504);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function i(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?i(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function o(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=t.createContext({}),u=function(e){var a=t.useContext(p),n=a;return e&&(n="function"==typeof e?e(a):l(l({},a),e)),n},g=function(e){var a=u(e.components);return t.createElement(p.Provider,{value:a},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},y=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),d=u(n),y=r,m=d["".concat(p,".").concat(y)]||d[y]||s[y]||i;return n?t.createElement(m,l(l({ref:a},g),{},{components:n})):t.createElement(m,l({ref:a},g))}));function m(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=y;var o={};for(var p in a)hasOwnProperty.call(a,p)&&(o[p]=a[p]);o.originalType=e,o[d]="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}y.displayName="MDXCreateElement"},26408:(e,a,n)=>{n.r(a),n.d(a,{contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var t=n(45072),r=(n(11504),n(95788));const i={title:"Dubbo Plugin",keywords:["dubbo"],description:"dubbo plugin"},l=void 0,o={unversionedId:"plugin-center/proxy/dubbo-plugin",id:"version-2.6.1/plugin-center/proxy/dubbo-plugin",isDocsHomePage:!1,title:"Dubbo Plugin",description:"dubbo plugin",source:"@site/versioned_docs/version-2.6.1/plugin-center/proxy/dubbo-plugin.md",sourceDirName:"plugin-center/proxy",slug:"/plugin-center/proxy/dubbo-plugin",permalink:"/docs/plugin-center/proxy/dubbo-plugin",editUrl:"https://github.com/apache/shenyu-website/edit/main/versioned_docs/version-2.6.1/plugin-center/proxy/dubbo-plugin.md",version:"2.6.1",frontMatter:{title:"Dubbo Plugin",keywords:["dubbo"],description:"dubbo plugin"},sidebar:"version-2.6.0/tutorialSidebar",previous:{title:"Divide Plugin",permalink:"/docs/plugin-center/proxy/divide-plugin"},next:{title:"gRPC Plugin",permalink:"/docs/plugin-center/proxy/grpc-plugin"}},p=[{value:"Explanation",id:"explanation",children:[]},{value:"Plugin Setting",id:"plugin-setting",children:[]},{value:"Plugin Detail",id:"plugin-detail",children:[]},{value:"Metadata",id:"metadata",children:[]}],u={toc:p},g="wrapper";function d(e){let{components:a,...n}=e;return(0,r.yg)(g,(0,t.c)({},u,n,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"explanation"},"Explanation"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Dubbo is a plugin that converts ",(0,r.yg)("inlineCode",{parentName:"li"},"http protocol")," into ",(0,r.yg)("inlineCode",{parentName:"li"},"Dubbo protocol")," and it is also the key for gateway to realize dubbo generic service."),(0,r.yg)("li",{parentName:"ul"},"Dubbo plugin needs to cooperate with metadata to realize dubbo calls."),(0,r.yg)("li",{parentName:"ul"},"Apache Dubbo and Alibaba Dubbo users both use the same plugin.")),(0,r.yg)("h2",{id:"plugin-setting"},"Plugin Setting"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Add related dependencies and enable plugin, please refer to: ",(0,r.yg)("a",{parentName:"p",href:"../../quick-start/quick-start-dubbo"},"Quick start with Dubbo")," .")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"Dubbo")," client access, please refer to: ",(0,r.yg)("a",{parentName:"p",href:"/docs/user-guide/proxy/dubbo-proxy"},"Dubbo Proxy")," .")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Set selector and rule, please refer to: ",(0,r.yg)("a",{parentName:"p",href:"../../user-guide/admin-usage/selector-and-rule"},"Selector And Rule Config")," .")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Since ",(0,r.yg)("inlineCode",{parentName:"p"},"version 2.4.3"),", the new fields and meanings of the dubbo plugin:"))),(0,r.yg)("img",{src:"/img/shenyu/plugin/dubbo/dubbo_plugin.png",width:"80%",height:"80%"}),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"corethreads"),"\uff1aThe number of core threads in the business thread pool\u3002")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"queues"),"\uff1aThe length of the blocking queue of the business thread pool, 0 means ",(0,r.yg)("inlineCode",{parentName:"p"},"unbounded blocking queue"),"\u3002")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"threadpool"),"\uff1aThere are five types of business thread pools: ",(0,r.yg)("inlineCode",{parentName:"p"},"fixed"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"eager"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"cached"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"limited")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"shared"),". The first 4 types correspond to the thread pools officially provided by dubbo. Let's talk about ",(0,r.yg)("inlineCode",{parentName:"p"},"shared"),", as its name implies, ",(0,r.yg)("inlineCode",{parentName:"p"},"all proxy plugins")," share a ",(0,r.yg)("inlineCode",{parentName:"p"},"shared")," thread pool, the advantage of this is that it can reduce the number of thread pools, thereby reducing memory and improving resource utilization\u3002")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"threads"),"\uff1aThe maximum number of threads in the business thread pool\u3002"))),(0,r.yg)("h2",{id:"plugin-detail"},"Plugin Detail"),(0,r.yg)("p",null,"After the client accesses the ",(0,r.yg)("inlineCode",{parentName:"p"},"ShenYu")," gateway, it will automatically register the selector and rule information. For details about the selector and rule configuration, see ",(0,r.yg)("a",{parentName:"p",href:"../../user-guide/admin-usage/selector-and-rule"},"Selector and Rule Config")," ."),(0,r.yg)("h4",{id:"selector-handler"},"Selector Handler"),(0,r.yg)("img",{src:"/img/shenyu/plugin/dubbo/selector_en_new.png",width:"80%",height:"80%"}),(0,r.yg)("p",null,"Selector Handler, the ",(0,r.yg)("inlineCode",{parentName:"p"},"handle")," field, is an operation that can be processed by the gateway after matching the traffic. For more information, please refer to ",(0,r.yg)("a",{parentName:"p",href:"../plugin-handle-explanation"},"Plugin handle management")," in Plugin Config."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"details\uff1a"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"host"),"\uff1ahost string.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"ip:port"),"\uff1aip+port string.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"protocol"),"\uff1aprotocol default is 'http'.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"group"),"\uff1athe group of dubbo service.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"version"),"\uff1athe version of dubbo service.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"weight"),"\uff1athe server instance and participate in load balancing calculation.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"warmupTime"),"\uff1athe server's warm up time and and participate in load balancing calculation.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"startupTime"),"\uff1athe server's start time.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"status"),"\uff1atrue: the server is available\uff0cfalse: the server is unavailable.\n")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"gray"),"\uff1aenable gray routing."))))),(0,r.yg)("p",null,"Gray routing"),(0,r.yg)("p",null,"if you want to user gray route in dubbo-plugin, you can click the ",(0,r.yg)("inlineCode",{parentName:"p"},"gray")," button."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Gray level publishing can customize and control the traffic proportion of new version applications when publishing new version applications, gradually complete the full launch of new version applications, maximize the business risk caused by new version publishing, reduce the impact surface caused by faults, and support rapid roll back.")),(0,r.yg)("p",null,"when the gray is open,Gateway load balancing will select one node from the current node list for routing and you can modify node weights to change the weight of nodes in the load balancing algorithm.\nIt should be noted that,if your business instance not use the client jar of 'shenyu-client-apache-dubbo' or 'shenyu-client-alibaba-dubbo', You should add gray node information manually on this selector page."),(0,r.yg)("h4",{id:"rule-handler"},"Rule Handler"),(0,r.yg)("img",{src:"/img/shenyu/plugin/dubbo/rule_en.png",width:"80%",height:"80%"}),(0,r.yg)("p",null,"Rule Handler, the ",(0,r.yg)("inlineCode",{parentName:"p"},"handle")," field, can be performed by the gateway after the final matching of traffic. For more information, please refer to ",(0,r.yg)("a",{parentName:"p",href:"../plugin-handle-explanation"},"Plugin handle management")," in Plugin Config."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"details\uff1a"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"loadbalance"),"\uff1athe loadbalance of dubbo service, if the gray node selection fails, the default load balancing method will be used."))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Apache ShenYu will obtain the real IP of the corresponding service and initiate rpc proxy calls from registration center of dubbo."))),(0,r.yg)("h2",{id:"metadata"},"Metadata"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Every dubbo interface method corresponds to a piece of metadata, which can be found in ",(0,r.yg)("inlineCode",{parentName:"li"},"shenyu-admin")," --\x3e BasicConfig -> Metadata .")),(0,r.yg)("img",{src:"/img/shenyu/plugin/dubbo/dubbo-metadata-en.jpg",width:"50%"}),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"AppName: The name of the application to which this piece of metadata belongs.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"MethodName: The name of the method that needs to be called.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Path: your http request path.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"PathDescribe: Description of the path, for easy viewing.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"ParamsType: List of parameter types of dubbo interface, there are two declaration methods here:\ne.g. we have an interface ",(0,r.yg)("inlineCode",{parentName:"p"},"update(Integer id, String name, Integer age)")),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Type list"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"```yaml\njava.lang.Integer,java.lang.String,java.lang.Integer\n```\n")),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"According to the order of the parameter types of the interface, separated by ",(0,r.yg)("inlineCode",{parentName:"p"},","))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"When requesting to pass parameters, ",(0,r.yg)("strong",{parentName:"p"},"the parameters must be passed in strictly in accordance with the order of the parameter types"),", if a parameter without value use ",(0,r.yg)("inlineCode",{parentName:"p"},"null")," as a placeholder."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},'Request body example: `{"id":1,"name": null,"age":18}`\n'))))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Name mapping"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},'{"id":"java.lang.Integer","name":"java.lang.String","age":"java.lang.Integer"}      \n')),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Use ",(0,r.yg)("inlineCode",{parentName:"p"},'"parameter name":"parameter type"')," to represent a parameter, set in order of interface parameter type, separated by ",(0,r.yg)("inlineCode",{parentName:"p"},","))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"No need to pay attention to the order when requesting, and no need to use null placeholders."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},'Request body example: `{"name":"Mike","id":1}`\n'))))))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"RpcExpand: corresponding to some configurations of dubbo interface; If you want to adjust, please modify here, which support json format like the following fields:"))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},'{"timeout":10000,"group":"",version":"","loadbalance":"","retries":1}\n')),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Interface: The fully-qualified name for dubbo interface .")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"RpcType: Choose ",(0,r.yg)("inlineCode",{parentName:"p"},"dubbo")," ."))))}d.isMDXComponent=!0}}]);