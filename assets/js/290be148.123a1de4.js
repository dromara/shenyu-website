"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[18836],{95788:(e,n,t)=>{t.d(n,{Iu:()=>c,yg:()=>y});var r=t(11504);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},g="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),g=p(t),u=i,y=g["".concat(l,".").concat(u)]||g[u]||d[u]||a;return t?r.createElement(y,s(s({ref:n},c),{},{components:t})):r.createElement(y,s({ref:n},c))}));function y(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,s=new Array(a);s[0]=u;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o[g]="string"==typeof e?e:i,s[1]=o;for(var p=2;p<a;p++)s[p]=t[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},65836:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>s,default:()=>g,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var r=t(45072),i=(t(11504),t(95788));const a={title:"Application Client Access Config",keywords:["register center"],description:"register center access"},s=void 0,o={unversionedId:"user-guide/register-center-access",id:"version-2.4.3/user-guide/register-center-access",isDocsHomePage:!1,title:"Application Client Access Config",description:"register center access",source:"@site/versioned_docs/version-2.4.3/user-guide/register-center-access.md",sourceDirName:"user-guide",slug:"/user-guide/register-center-access",permalink:"/docs/2.4.3/user-guide/register-center-access",editUrl:"https://github.com/apache/shenyu-website/edit/main/versioned_docs/version-2.4.3/user-guide/register-center-access.md",version:"2.4.3",frontMatter:{title:"Application Client Access Config",keywords:["register center"],description:"register center access"},sidebar:"version-2.4.3/tutorialSidebar",previous:{title:"Websocket Proxy",permalink:"/docs/2.4.3/user-guide/proxy/websocket-proxy"},next:{title:"Register Center Instance Config",permalink:"/docs/2.4.3/user-guide/register-center-instance"}},l=[{value:"Http Registry Config",id:"http-registry-config",children:[]},{value:"Zookeeper Registry Config",id:"zookeeper-registry-config",children:[]},{value:"Etcd Registry Config",id:"etcd-registry-config",children:[]},{value:"Consul Registry Config",id:"consul-registry-config",children:[]},{value:"Nacos Registry Config",id:"nacos-registry-config",children:[]},{value:"Register different type API at same time",id:"register-different-type-api-at-same-time",children:[]}],p={toc:l},c="wrapper";function g(e){let{components:n,...t}=e;return(0,i.yg)(c,(0,r.c)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"Application client access means to access your microservice to ShenYu gateway, currently supports HTTP, Dubbo, Spring Cloud, gRPC, Motan, Sofa, Tars and other protocols access."),(0,i.yg)("p",null,"Connecting the application client to ShenYu gateway is realized through the registration center, which involves the registration of the client and the synchronization of the server data. The registry supports HTTP, ZooKeeper, Etcd, Consul, and Nacos."),(0,i.yg)("p",null,"This article describes how to configure the application client to access the Apache ShenYu gateway. For related principles, see ",(0,i.yg)("a",{parentName:"p",href:"../design/register-center-design"},"Application Client Access")," in the design document ."),(0,i.yg)("img",{src:"/img/shenyu/register/app-client-access-config-en.png",width:"70%",height:"60%"}),(0,i.yg)("h3",{id:"http-registry-config"},"Http Registry Config"),(0,i.yg)("h4",{id:"shenyu-admin-config"},"shenyu-admin config"),(0,i.yg)("p",null,"Set the register type to '",(0,i.yg)("inlineCode",{parentName:"p"},"Http")," in the ",(0,i.yg)("inlineCode",{parentName:"p"},"yml")," file. The configuration information is as follows:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-yaml"},"shenyu:\n  register:\n    registerType: http\n    props:\n        checked: true  # is checked\n        zombieCheckTimes: 5 # how many times does it fail to detect the service\n        scheduledTime: 10 # timed detection interval time\n")),(0,i.yg)("img",{src:"/img/shenyu/register/register-http-admin-yml.png",width:"70%",height:"60%"}),(0,i.yg)("h4",{id:"shenyu-client-config"},"shenyu-client config"),(0,i.yg)("p",null,"The following shows the configuration information registered through ",(0,i.yg)("inlineCode",{parentName:"p"},"Http")," when the ",(0,i.yg)("inlineCode",{parentName:"p"},"Http")," service accesses the ",(0,i.yg)("inlineCode",{parentName:"p"},"Apache ShenYu")," gateway as a client. Other clients (such as ",(0,i.yg)("inlineCode",{parentName:"p"},"Dubbo")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"Spring Cloud"),") can be configured in the same way."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-yaml"},"shenyu:\n  register:\n    registerType: http\n    serverLists: http://localhost:9095\n  client:\n    http:\n        props:\n            contextPath: /http\n            appName: http\n            port: 8188  \n            isFull: false\n# registerType : register type, set http\n# serverList: when register type is http\uff0cset shenyu-admin address list\uff0cpls note 'http://' is necessary.\n# port: your project port number; apply to springmvc/tars/grpc\n# contextPath: your project's route prefix through shenyu gateway, such as /order \uff0c/product etc\uff0cgateway will route based on it.\n# appName\uff1ayour project name,the default value is`spring.application.name`.\n# isFull: set true means providing proxy for your entire service, or only a few controller. apply to springmvc/springcloud\n")),(0,i.yg)("img",{src:"/img/shenyu/register/register-http-client-yml.png",width:"70%",height:"60%"}),(0,i.yg)("h3",{id:"zookeeper-registry-config"},"Zookeeper Registry Config"),(0,i.yg)("h4",{id:"shenyu-admin-config-1"},"shenyu-admin config"),(0,i.yg)("p",null,"First add the related dependencies to the ",(0,i.yg)("inlineCode",{parentName:"p"},"pom")," file (already added by default) :"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-xml"},"        <dependency>\n            <groupId>org.apache.shenyu</groupId>\n            <artifactId>shenyu-register-server-zookeeper</artifactId>\n            <version>${project.version}</version>\n        </dependency>\n")),(0,i.yg)("img",{src:"/img/shenyu/register/register-zk-admin-pom.png",width:"70%",height:"60%"}),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"In the ",(0,i.yg)("inlineCode",{parentName:"li"},"yml")," file, set the register type to ",(0,i.yg)("inlineCode",{parentName:"li"},"zookeeper")," and enter the service address and parameters of ",(0,i.yg)("inlineCode",{parentName:"li"},"zookeeper"),". The configuration information is as follows:")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-yaml"},"shenyu:\n  register:\n    registerType: zookeeper\n    serverLists: localhost:2181\n    props:\n      sessionTimeout: 5000\n      connectionTimeout: 2000\n")),(0,i.yg)("img",{src:"/img/shenyu/register/register-zk-admin-yml.png",width:"70%",height:"60%"}),(0,i.yg)("h4",{id:"shenyu-client-config-1"},"shenyu-client config"),(0,i.yg)("p",null,"The following shows the configuration information registered by ",(0,i.yg)("inlineCode",{parentName:"p"},"zookeeper")," when the ",(0,i.yg)("inlineCode",{parentName:"p"},"Http")," service accesses the ",(0,i.yg)("inlineCode",{parentName:"p"},"Apache ShenYu")," gateway as a client. Other clients (such as ",(0,i.yg)("inlineCode",{parentName:"p"},"Dubbo")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"Spring Cloud"),") can be configured in the same way."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"First add dependencies to the ",(0,i.yg)("inlineCode",{parentName:"li"},"pom")," file:")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-xml"},"        \x3c!-- apache shenyu zookeeper register center --\x3e\n        <dependency>\n            <groupId>org.apache.shenyu</groupId>\n            <artifactId>shenyu-register-server-zookeeper</artifactId>\n            <version>${shenyu.version}</version>\n        </dependency>\n")),(0,i.yg)("img",{src:"/img/shenyu/register/register-zk-client-pom.png",width:"70%",height:"60%"}),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Then set the register type to ",(0,i.yg)("inlineCode",{parentName:"li"},"zookeeper")," in ",(0,i.yg)("inlineCode",{parentName:"li"},"yml")," and enter the service address and related parameters as follows:")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-yaml"},"shenyu:\n  register:\n    registerType: zookeeper\n    serverLists: localhost:2181\n  client:\n    http:\n        props:\n            contextPath: /http\n            appName: http\n            port: 8189  \n            isFull: false\n# registerType : register type, set zookeeper\n# serverList: when register type is zookeeper\uff0cset zookeeper address list\n# port: your project port number; apply to springmvc/tars/grpc\n# contextPath: your project's route prefix through shenyu gateway, such as /order \uff0c/product etc\uff0cgateway will route based on it.\n# appName\uff1ayour project name,the default value is`spring.application.name`.\n# isFull: set true means providing proxy for your entire service, or only a few controller. apply to springmvc/springcloud\n")),(0,i.yg)("img",{src:"/img/shenyu/register/register-zk-client-yml.png",width:"70%",height:"60%"}),(0,i.yg)("h3",{id:"etcd-registry-config"},"Etcd Registry Config"),(0,i.yg)("h4",{id:"shenyu-admin-config-2"},"shenyu-admin config"),(0,i.yg)("p",null,"First add the related dependencies to the ",(0,i.yg)("inlineCode",{parentName:"p"},"pom")," file (already added by default) :"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-xml"},"        <dependency>\n            <groupId>org.apache.shenyu</groupId>\n            <artifactId>shenyu-register-server-etcd</artifactId>\n            <version>${project.version}</version>\n        </dependency>\n")),(0,i.yg)("img",{src:"/img/shenyu/register/register-etcd-admin-pom.png",width:"70%",height:"60%"}),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Then set register type to ",(0,i.yg)("inlineCode",{parentName:"li"},"etcd")," in ",(0,i.yg)("inlineCode",{parentName:"li"},"yml")," and enter ",(0,i.yg)("inlineCode",{parentName:"li"},"etcd")," service address and parameters. The configuration information is as follows:")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-yaml"},"shenyu:\n  register:\n    registerType: etcd\n    serverLists : http://localhost:2379\n    props:\n      etcdTimeout: 5000\n      etcdTTL: 5\n")),(0,i.yg)("img",{src:"/img/shenyu/register/register-etcd-admin-yml.png",width:"70%",height:"60%"}),(0,i.yg)("h4",{id:"shenyu-client-config-2"},"shenyu-client config"),(0,i.yg)("p",null,"The following shows the configuration information registered by ",(0,i.yg)("inlineCode",{parentName:"p"},"Etcd")," when the ",(0,i.yg)("inlineCode",{parentName:"p"},"Http")," service accesses the ",(0,i.yg)("inlineCode",{parentName:"p"},"Apache ShenYu")," gateway as a client. Other clients (such as ",(0,i.yg)("inlineCode",{parentName:"p"},"Dubbo")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"Spring Cloud"),") can be configured in the same way."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"First add dependencies to the ",(0,i.yg)("inlineCode",{parentName:"li"},"pom")," file:")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-xml"},"        \x3c!-- apache shenyu etcd register center --\x3e\n        <dependency>\n            <groupId>org.apache.shenyu</groupId>\n            <artifactId>shenyu-register-server-etcd</artifactId>\n            <version>${shenyu.version}</version>\n        </dependency>\n")),(0,i.yg)("img",{src:"/img/shenyu/register/register-etcd-client-pom.png",width:"70%",height:"60%"}),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Then set the register type to ",(0,i.yg)("inlineCode",{parentName:"li"},"etcd")," in ",(0,i.yg)("inlineCode",{parentName:"li"},"yml")," and enter the ",(0,i.yg)("inlineCode",{parentName:"li"},"etcd")," service address and related parameters as follows:")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-yaml"},"shenyu:\n  register:\n    registerType: etcd \n    serverLists: http://localhost:2379\n  client:\n    http:\n        props:\n            contextPath: /http\n            appName: http\n            port: 8189  \n            isFull: false\n# registerType : register type, set etcd \n# serverList: when register type is etcd, add etcd address list\n# port: your project port number; apply to springmvc/tars/grpc\n# contextPath: your project's route prefix through shenyu gateway, such as /order \uff0c/product etc\uff0cgateway will route based on it.\n# appName\uff1ayour project name,the default value is`spring.application.name`.\n# isFull: set true means providing proxy for your entire service, or only a few controller. apply to springmvc/springcloud\n")),(0,i.yg)("img",{src:"/img/shenyu/register/register-etcd-client-yml.png",width:"70%",height:"60%"}),(0,i.yg)("h3",{id:"consul-registry-config"},"Consul Registry Config"),(0,i.yg)("h4",{id:"shenyu-admin-config-3"},"shenyu-admin config"),(0,i.yg)("p",null,"First add the related dependencies to the ",(0,i.yg)("inlineCode",{parentName:"p"},"pom")," file :"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-xml"},"        \x3c!-- apache shenyu consul register start--\x3e\n        <dependency>\n            <groupId>org.apache.shenyu</groupId>\n            <artifactId>shenyu-register-server-consul</artifactId>\n            <version>${project.version}</version>\n        </dependency>\n\n        \x3c!-- apache shenyu consul register start --\x3e\n        <dependency>\n            <groupId>com.ecwid.consul</groupId>\n            <artifactId>consul-api</artifactId>\n            <version>${consul.api.version}</version>\n        </dependency>\n        \x3c!-- apache shenyu consul register end--\x3e\n\n")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"In the ",(0,i.yg)("inlineCode",{parentName:"li"},"yml")," file to configure the registry as ",(0,i.yg)("inlineCode",{parentName:"li"},"consul"),", the unique configuration of consul is configured under the props node, the configuration information is as follows:")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-yaml"},"shenyu:\n  register:\n    registerType: consul\n    serverLists: localhost:8500\n    props:\n      delay: 1\n      wait-time: 55\n      name: shenyuAdmin\n      instanceId: shenyuAdmin\n      hostName: localhost\n      port: 8500\n      tags: test1,test2\n      preferAgentAddress: false\n      enableTagOverride: false\n\n# registerType : register type, set consul.\n# serverLists: consul client agent address (sidecar deployment (single machine or cluster), or the address of consul server agent (only one node of consul server agent can be connected, if it is a cluster, then there will be a single point of failure))\n# delay: The interval of each polling of monitoring metadata, in seconds, the default value is 1 second.\n# wait-time: The waiting time for each polling of metadata monitoring, in seconds, the default value is 55 second.\n# instanceId: Required, Consul needs to find specific services through instanceId.\n# name: The name where the service is registered to consul. \n# hostName: When registering the type for consul, fill in the address of the registered service instance. The service instance address registered in the registry will not be used for client calls, so this configuration does not need to be filled in. Port and preferAgentAddress are the same.\n# port: When registering the type for consul, fill in the port of the registered service instance.\n# tags: Corresponding to the tags configuration in the consul configuration\n# preferAgentAddress\uff1aUsing the address corresponding to the agent on the consul client side as the address of the registered service instance will override the manual configuration of hostName\n# enableTagOverride\uff1aCorresponding to the enableTagOverride configuration in the consul configuration\n\n")),(0,i.yg)("h4",{id:"shenyu-client-config-3"},"shenyu-client config"),(0,i.yg)("p",null,"Register configuration information through the ",(0,i.yg)("inlineCode",{parentName:"p"},"Consul")," method (the registry of the springCloud service itself can be selected at will, and there will be no conflict with the registry selected by shenyu, eureka is used in the example)."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"First add dependencies to the ",(0,i.yg)("inlineCode",{parentName:"li"},"pom")," file:")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-xml"},"\x3c!-- apache shenyu consul register center --\x3e\n<dependency>\n    <groupId>org.apache.shenyu</groupId>\n    <artifactId>shenyu-register-client-consul</artifactId>\n    <version>${shenyu.version}</version>\n</dependency>\n")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Then set the register type to ",(0,i.yg)("inlineCode",{parentName:"li"},"consul")," in ",(0,i.yg)("inlineCode",{parentName:"li"},"yml")," and config ",(0,i.yg)("inlineCode",{parentName:"li"},"shenyu.register.props"),", and related parameters as follows:")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-yaml"},"shenyu:\n  register:\n  registerType: consul\n  serverLists: localhost:8500\n  props:\n    name: shenyuSpringCloudExample\n    instanceId: shenyuSpringCloudExample\n    hostName: localhost\n    port: 8500\n    tags: test1,test2\n    preferAgentAddress: false\n    enableTagOverride: false\nclient:\n  springCloud:\n    props:\n      contextPath: /springcloud\n      port: 8884\n# registerType : register type, set consul.\n# serverLists: consul client agent address (sidecar deployment (single machine or cluster), or the address of consul server agent (only one node of consul server agent can be connected, if it is a cluster, then there will be a single point of failure))\n# delay: The interval of each polling of monitoring metadata, in seconds, the default value is 1 second.\n# wait-time: The waiting time for each polling of metadata monitoring, in seconds, the default value is 55 second.\n# instanceId: Required, Consul needs to find specific services through instanceId.\n# name: The name where the service is registered to consul. \n# hostName: When registering the type for consul, fill in the address of the registered service instance. The service instance address registered in the registry will not be used for client calls, so this configuration does not need to be filled in. Port and preferAgentAddress are the same.\n# port: When registering the type for consul, fill in the port of the registered service instance.\n# tags: Corresponding to the tags configuration in the consul configuration\n# preferAgentAddress\uff1aUsing the address corresponding to the agent on the consul client side as the address of the registered service instance will override the manual configuration of hostName\n# enableTagOverride\uff1aCorresponding to the enableTagOverride configuration in the consul configuration\n")),(0,i.yg)("h3",{id:"nacos-registry-config"},"Nacos Registry Config"),(0,i.yg)("h4",{id:"shenyu-admin-config-4"},"shenyu-admin config"),(0,i.yg)("p",null,"First add the related dependencies to the ",(0,i.yg)("inlineCode",{parentName:"p"},"pom")," file (already added by default) :"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-xml"},"        <dependency>\n            <groupId>org.apache.shenyu</groupId>\n            <artifactId>shenyu-register-server-nacos</artifactId>\n            <version>${project.version}</version>\n        </dependency>\n")),(0,i.yg)("img",{src:"/img/shenyu/register/register-nacos-admin-pom.png",width:"70%",height:"60%"}),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Then in the ",(0,i.yg)("inlineCode",{parentName:"li"},"yml")," file, configure the registry as ",(0,i.yg)("inlineCode",{parentName:"li"},"nacos"),", fill in the related ",(0,i.yg)("inlineCode",{parentName:"li"},"nacos")," service address and parameters, and ",(0,i.yg)("inlineCode",{parentName:"li"},"nacos")," namespace (need to be consistent with ",(0,i.yg)("inlineCode",{parentName:"li"},"shenyu-client"),"), the configuration information is as follows:")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-yaml"},"shenyu:\n  register:\n    registerType: nacos\n    serverLists : localhost:8848\n    props:\n      nacosNameSpace: ShenyuRegisterCenter\n")),(0,i.yg)("img",{src:"/img/shenyu/register/register-nacos-admin-yml.png",width:"70%",height:"60%"}),(0,i.yg)("h4",{id:"shenyu-client-config-4"},"shenyu-client config"),(0,i.yg)("p",null,"The following shows the configuration information registered by ",(0,i.yg)("inlineCode",{parentName:"p"},"Nacos")," when the ",(0,i.yg)("inlineCode",{parentName:"p"},"Http")," service accesses the ",(0,i.yg)("inlineCode",{parentName:"p"},"Apache ShenYu")," gateway as a client. Other clients (such as ",(0,i.yg)("inlineCode",{parentName:"p"},"Dubbo")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"Spring Cloud"),") can be configured in the same way."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"First add dependencies to the ",(0,i.yg)("inlineCode",{parentName:"li"},"pom")," file:")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-xml"},"        <dependency>\n            <groupId>org.apache.shenyu</groupId>\n            <artifactId>shenyu-register-client-nacos</artifactId>\n            <version>${shenyu.version}</version>\n        </dependency>\n")),(0,i.yg)("img",{src:"/img/shenyu/register/register-nacos-client-pom.png",width:"70%",height:"60%"}),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Then in ",(0,i.yg)("inlineCode",{parentName:"li"},"yml")," configure registration mode as ",(0,i.yg)("inlineCode",{parentName:"li"},"nacos"),", and fill in ",(0,i.yg)("inlineCode",{parentName:"li"},"nacos")," service address and related parameters, also need ",(0,i.yg)("inlineCode",{parentName:"li"},"nacos")," namespace (need to be consistent with ",(0,i.yg)("inlineCode",{parentName:"li"},"shenyu-admin"),"), IP (optional, then automatically obtain the local IP address) and port, configuration information is as follows:")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-yaml"},"shenyu:\n  register:\n    registerType: nacos\n    serverLists: localhost:8848\n    props:\n      nacosNameSpace: ShenyuRegisterCenter\n  client:\n    http:\n        props:\n            contextPath: /http\n            appName: http\n            port: 8188  \n            isFull: false\n# registerType : register type, set nacos \n# serverList: when register type is nacos, add nacos address list\n# port: your project port number; apply to springmvc/tars/grpc\n# contextPath: your project's route prefix through shenyu gateway, such as /order \uff0c/product etc\uff0cgateway will route based on it.\n# appName\uff1ayour project name,the default value is`spring.application.name`.\n# isFull: set true means providing proxy for your entire service, or only a few controller. apply to springmvc/springcloud\n# nacosNameSpace: nacos namespace\n")),(0,i.yg)("img",{src:"/img/shenyu/register/register-nacos-client-yml.png",width:"70%",height:"60%"}),(0,i.yg)("h3",{id:"register-different-type-api-at-same-time"},"Register different type API at same time"),(0,i.yg)("blockquote",null,(0,i.yg)("p",{parentName:"blockquote"},"follow example use the http and dubbo.")),(0,i.yg)("p",null,"the ",(0,i.yg)("inlineCode",{parentName:"p"},"yml")," configuration like follow:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-yaml"},"shenyu:\n  register:\n    registerType: nacos\n    serverLists: localhost:8848\n  client:\n    http:\n        props:\n            contextPath: /http\n            appName: http\n            port: 8188  \n            isFull: false\n    dubbo:\n        props:\n            contextPath: /dubbo\n            appName: dubbo\n            port: 28080\n    props:\n      nacosNameSpace: ShenyuRegisterCenter\n# registerType : register type, set nacos \n# serverList: when register type is nacos, add nacos address list\n# http.port: your project port number; apply to springmvc\n# http.contextPath: your project's route prefix through shenyu gateway, such as /order \uff0c/product etc\uff0cgateway will route based on it.\n# http.appName\uff1ayour project name,the default value is`spring.application.name`.\n# http.isFull: set true means providing proxy for your entire service, or only a few controller. apply to springmvc/springcloud\n# dubbo.contextPath: your project dubbo service's context path\n# dubbo.port: your project dubbo rpc port\n# dubbo.appName: your project dubbo appliation name\n# nacosNameSpace: nacos namespace\n")),(0,i.yg)("p",null,"In conclusion, this paper mainly describes how to connect your microservices (currently supporting ",(0,i.yg)("inlineCode",{parentName:"p"},"Http"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"Dubbo"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"Spring Cloud"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"gRPC"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"Motan"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"Sofa"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"Tars")," and other protocols) to the ",(0,i.yg)("inlineCode",{parentName:"p"},"Apache ShenYu")," gateway. the Apache ShenYu gateway support registry has ",(0,i.yg)("inlineCode",{parentName:"p"},"Http"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"Zookeeper"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"Etcd"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"Consul"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"Nacos")," and so on. This paper introduces the different ways to register configuration information when ",(0,i.yg)("inlineCode",{parentName:"p"},"Http")," service is used as the client to access ",(0,i.yg)("inlineCode",{parentName:"p"},"Apache ShenYu")," gateway."))}g.isMDXComponent=!0}}]);