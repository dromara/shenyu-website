"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[38912],{15680:(e,t,a)=>{a.d(t,{xA:()=>p,yg:()=>d});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),l=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),g=l(a),m=r,d=g["".concat(i,".").concat(m)]||g[m]||u[m]||o;return a?n.createElement(d,s(s({ref:t},p),{},{components:a})):n.createElement(d,s({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[g]="string"==typeof e?e:r,s[1]=c;for(var l=2;l<o;l++)s[l]=a[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},60462:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>s,default:()=>g,frontMatter:()=>o,metadata:()=>c,toc:()=>i});var n=a(58168),r=(a(96540),a(15680));const o={description:"Nacos",title:"Nacos Example"},s=void 0,c={unversionedId:"nacos",id:"version-1.0.0/nacos",isDocsHomePage:!1,title:"Nacos Example",description:"Nacos",source:"@site/shenyuClientGolang_versioned_docs/version-1.0.0/nacos.md",sourceDirName:".",slug:"/nacos",permalink:"/shenyuClientGolang/nacos",version:"1.0.0",lastUpdatedBy:"\u674e\u6d77\u5cf0",lastUpdatedAt:1733298948,formattedLastUpdatedAt:"12/4/2024",frontMatter:{description:"Nacos",title:"Nacos Example"},sidebar:"version-1.0.0/tutorialSidebar",previous:{title:"Http Example",permalink:"/shenyuClientGolang/http"},next:{title:"Zookeeper Example",permalink:"/shenyuClientGolang/zookeeper"}},i=[{value:"The Nacos type Register",id:"the-nacos-type-register",children:[]},{value:"Entire Success log",id:"entire-success-log",children:[]}],l={toc:i},p="wrapper";function g(e){let{components:t,...a}=e;return(0,r.yg)(p,(0,n.A)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"the-nacos-type-register"},"The Nacos type Register"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"1.Fist make sure your nacos env is correct,the set this necessary param.")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-go"},'//set nacos env configuration\n    ncp := &nacos_client.NacosClientParam{\n        IpAddr:      "console.nacos.io",\n        Port:        80,\n        NamespaceId: "e525eafa-f7d7-4029-83d9-008937f9d468",\n}\n')),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"2. Prepare your service metaData to register")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-go"},'//metaData is necessary param, this will be register to shenyu gateway to use\n    metaData := &model.URIRegister{\n        Protocol:    "testMetaDataRegister", //require user provide\n        AppName:     "testURLRegister",      //require user provide\n        ContextPath: "contextPath",          //require user provide\n        RPCType:     constants.RPCTYPE_HTTP, //require user provide\n        Host:        "127.0.0.1",            //require user provide\n        Port:        "8080",                 //require user provide\n}\n    metaDataStringJson, _ := json.Marshal(metaData)\n')),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"3. Prepare your service Instance message(include metaData)")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-go"},'//init NacosRegisterInstance\n    nacosRegisterInstance := vo.RegisterInstanceParam{\n        Ip:          "10.0.0.10", //require user provide\n        Port:        8848,        //require user provide\n        ServiceName: "demo.go",   //require user provide\n        Weight:      10,          //require user provide\n        Enable:      true,        //require user provide\n        Healthy:     true,        //require user provide\n        Ephemeral:   true,        //require user provide\n        Metadata:    map[string]string{"contextPath": "contextPath", "uriMetadata": string(metaDataStringJson)},\n}\n')),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"4. Get shenyu nacos client")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-go"},'    sdkClient := shenyu_sdk_client.GetFactoryClient(constants.NACOS_CLIENT)\n    result, createResult, err := sdkClient.NewClient(ncp)\n        if !createResult && err != nil {\n        logger.Fatal("Create nacos client error : %v", err)\n    }\n\n    nc := &nacos_client.ShenYuNacosClient{\n        NacosClient: result.(*naming_client.NamingClient),\n    }\n')),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"5.Use client to invoke RegisterServiceInstance")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-go"},'   instanceInfo, err := nc.GetServiceInstanceInfo(queryData)\n    if instanceInfo == nil {\n        logger.Fatal("Register nacos Instance error : %v", err)\n    }\n        //do your logic\n')),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"6.Use client to invoke DeregisterServiceInstance")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-go"},'//DeregisterServiceInstance start\n    deregisterInstanceParam := vo.DeregisterInstanceParam{\n    Ip:          "10.0.0.10",\n    Port:        8848,\n    ServiceName: "demo.go",\n    Ephemeral:   true,\n    //Cluster:     "cluster-a", // default value is DEFAULT\n    GroupName: "group-a", // default value is DEFAULT_GROUP\n}\n\n    serviceInstance, err := nc.DeregisterServiceInstance(deregisterInstanceParam)\n        if !serviceInstance && err != nil {\n        logger.Info("DeregisterServiceInstance result : %v", serviceInstance)\n}\n        //do your logic\n')),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"7.Use client to invoke GetServiceInstanceInfo")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-go"},'        instanceInfo, result, err := nc.GetServiceInstanceInfo(queryData)\n            if result != false && err != nil {\n            logger.Fatal("Register nacos Instance error : %v", err)\n        }\n        //do your logic\n')),(0,r.yg)("h2",{id:"entire-success-log"},"Entire Success log"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-go"},'2022-07-26T18:07:32.494+0800    INFO    nacos_client/nacos_client.go:79 logDir:</tmp/nacos/log>   cacheDir:</tmp/nacos/cache>\n2022-07-26T18:07:32.495+0800    INFO    naming_client/push_receiver.go:80       udp server start, port: 55422\n2022-07-26T18:07:32.495+0800    INFO    naming_client/naming_proxy.go:54        register instance namespaceId:<e525eafa-f7d7-4029-83d9-008937f9d468>,serviceName:<group-a@@demo.go> with instance:<{"valid":false,"marked":false,"instanceId":"","port":8848,"ip":"10.0.0.10","weight":10,"metadata":{"contextPath":"contextPath","uriMetadata":"{\\"protocol\\":\\"testMetaDataRegister\\",\\"appName\\":\\"testURLRegister\\",\\"contextPath\\":\\"contextPath\\",\\"rpcType\\":\\"http\\",\\"host\\":\\"127.0.0.1\\",\\"port\\":\\"8080\\"}"},"clusterName":"cluster-a","serviceName":"","enabled":true,"healthy":true,"ephemeral":true}>\n2022-07-26T18:07:33.255+0800    INFO    naming_client/beat_reactor.go:68        adding beat: <{"ip":"10.0.0.10","port":8848,"weight":10,"serviceName":"group-a@@demo.go","cluster":"cluster-a","metadata":{"contextPath":"contextPath","uriMetadata":"{\\"protocol\\":\\"testMetaDataRegister\\",\\"appName\\":\\"testURLRegister\\",\\"contextPath\\":\\"contextPath\\",\\"rpcType\\":\\"http\\",\\"host\\":\\"127.0.0.1\\",\\"port\\":\\"8080\\"}"},"scheduled":false}> to beat map\n2022-07-26 18:07:33 [INFO] [github.com/apache/shenyu-client-golang/clients/nacos_client/nacos_client.go:107] RegisterServiceInstance,result:true\n\n,param:{Ip:10.0.0.10 Port:8848 Weight:10 Enable:true Healthy:true Metadata:map[contextPath:contextPath uriMetadata:{"protocol":"testMetaDataRegister","appName":"testURLRegister","contextPath":"contextPath","rpcType":"http","host":"127.0.0.1","port":"8080"}] ClusterName:cluster-a ServiceName:demo.go GroupName:group-a Ephemeral:true}\n\n\n2022-07-26T18:07:33.256+0800    INFO    naming_client/naming_proxy.go:103       namespaceId:<e525eafa-f7d7-4029-83d9-008937f9d468> sending beat to server:<{"ip":"10.0.0.10","port":8848,"weight":10,"serviceName":"group-a@@demo.go","cluster":"cluster-a","metadata":{"contextPath":"contextPath","uriMetadata":"{\\"protocol\\":\\"testMetaDataRegister\\",\\"appName\\":\\"testURLRegister\\",\\"contextPath\\":\\"contextPath\\",\\"rpcType\\":\\"http\\",\\"host\\":\\"127.0.0.1\\",\\"port\\":\\"8080\\"}"},"scheduled":false}>\n2022-07-26T18:07:34.256+0800    INFO    util/common.go:94       Local IP:10.167.40.91\n2022-07-26T18:07:34.507+0800    INFO    naming_client/host_reactor.go:95        service not found in cache group-a@@demo.go@@cluster-a\n2022-07-26 18:07:34 [INFO] [github.com/apache/shenyu-client-golang/clients/nacos_client/nacos_client.go:139] GetServiceInstanceInfo,result:[{Valid:false Marked:false InstanceId:10.0.0.10#8848#cluster-a#group-a@@demo.go Port:8848 Ip:10.0.0.10 Weight:10 Metadata:map[contextPath:contextPath uriMetadata:{"protocol":"testMetaDataRegister","appName":"testURLRegister","contextPath":"contextPath","rpcType":"http","host":"127.0.0.1","port":"8080"}] ClusterName:cluster-a ServiceName:group-a@@demo.go Enable:true Healthy:true Ephemeral:true}]\n\n,param:{Clusters:[cluster-a] ServiceName:demo.go GroupName:group-a HealthyOnly:true}\n\n\n2022-07-26 18:07:34 [INFO] [github.com/apache/shenyu-client-golang/example/nacos_client/main.go:102] [{false false 10.0.0.10#8848#cluster-a#group-a@@demo.go 8848 10.0.0.10 10 map[contextPath:contextPath uriMetadata:{"protocol":"testMetaDataRegister","appName":"testURLRegister","contextPath":"contextPath","rpcType":"http","host":"127.0.0.1","port":"8080"}] cluster-a group-a@@demo.go true true true}]\n2022-07-26T18:07:35.509+0800    INFO    naming_client/beat_reactor.go:83        remove beat: group-a@@demo.go@10.0.0.10:8848 from beat map\n2022-07-26T18:07:35.509+0800    INFO    naming_client/naming_proxy.go:73        deregister instance namespaceId:<e525eafa-f7d7-4029-83d9-008937f9d468>,serviceName:<group-a@@demo.go> with instance:<10.0.0.10:8848@cluster-a>\n2022-07-26 18:07:35 [INFO] [github.com/apache/shenyu-client-golang/clients/nacos_client/nacos_client.go:123] DeregisterServiceInstance,result:true\n\n,param:{Ip:10.0.0.10 Port:8848 Cluster:cluster-a ServiceName:demo.go GroupName:group-a Ephemeral:true}\n\n')))}g.isMDXComponent=!0}}]);