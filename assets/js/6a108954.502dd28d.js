"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[45008],{3905:(e,t,r)=>{r.d(t,{Zo:()=>o,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},o=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,p=e.originalType,c=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),u=l(r),g=a,h=u["".concat(c,".").concat(g)]||u[g]||m[g]||p;return r?n.createElement(h,s(s({ref:t},o),{},{components:r})):n.createElement(h,s({ref:t},o))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=r.length,s=new Array(p);s[0]=g;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:a,s[1]=i;for(var l=2;l<p;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},20858:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>s,default:()=>u,frontMatter:()=>p,metadata:()=>i,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const p={title:"Quick start with gRPC",description:"Quick start with gRPC"},s=void 0,i={unversionedId:"quick-start/quick-start-grpc",id:"version-2.6.0/quick-start/quick-start-grpc",isDocsHomePage:!1,title:"Quick start with gRPC",description:"Quick start with gRPC",source:"@site/versioned_docs/version-2.6.0/quick-start/quick-start-grpc.md",sourceDirName:"quick-start",slug:"/quick-start/quick-start-grpc",permalink:"/docs/2.6.0/quick-start/quick-start-grpc",editUrl:"https://github.com/apache/shenyu-website/edit/main/versioned_docs/version-2.6.0/quick-start/quick-start-grpc.md",version:"2.6.0",frontMatter:{title:"Quick start with gRPC",description:"Quick start with gRPC"},sidebar:"version-2.6.0/tutorialSidebar",previous:{title:"Quick start with Dubbo",permalink:"/docs/2.6.0/quick-start/quick-start-dubbo"},next:{title:"Quick start with Http",permalink:"/docs/2.6.0/quick-start/quick-start-http"}},c=[{value:"Prepare For Environment",id:"prepare-for-environment",children:[]},{value:"Run the shenyu-examples-grpc project",id:"run-the-shenyu-examples-grpc-project",children:[]},{value:"Test",id:"test",children:[]},{value:"Streaming",id:"streaming",children:[]}],l={toc:c},o="wrapper";function u(e){let{components:t,...p}=e;return(0,a.kt)(o,(0,n.Z)({},l,p,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This document introduces how to quickly access the Apache ShenYu gateway using gRPC. You can get the code example of this document by clicking ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/shenyu/tree/master/shenyu-examples/shenyu-examples-grpc"},"here")," ."),(0,a.kt)("h2",{id:"prepare-for-environment"},"Prepare For Environment"),(0,a.kt)("p",null,"Please refer to the deployment to select a way to start shenyu-admin. For example, start the Apache ShenYu gateway management system through ",(0,a.kt)("a",{parentName:"p",href:"../deployment/deployment-local"},"local deployment")," ."),(0,a.kt)("p",null,"After successful startup, you need to open the gRPC plugin on in the BasicConfig ",(0,a.kt)("inlineCode",{parentName:"p"},"->")," Plugin."),(0,a.kt)("img",{src:"/img/shenyu/quick-start/grpc/grpc-en-1.png",width:"60%",height:"50%"}),(0,a.kt)("p",null,"If you are a startup gateway by means of source, can be directly run the ShenyuBootstrapApplication of shenyu-bootstrap module."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note: Before starting, make sure the gateway has added dependencies.")),(0,a.kt)("p",null,"Add the following dependencies to the gateway's ",(0,a.kt)("inlineCode",{parentName:"p"},"pom.xml")," file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"        \x3c!-- apache shenyu grpc plugin start--\x3e\n        <dependency>\n            <groupId>org.apache.shenyu</groupId>\n            <artifactId>shenyu-spring-boot-starter-plugin-grpc</artifactId>\n            <version>${project.version}</version>\n        </dependency>\n        \x3c!-- apache shenyu grpc plugin end--\x3e\n")),(0,a.kt)("h2",{id:"run-the-shenyu-examples-grpc-project"},"Run the shenyu-examples-grpc project"),(0,a.kt)("p",null,"Download ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/shenyu/tree/master/shenyu-examples/shenyu-examples-grpc"},"shenyu-examples-grpc")),(0,a.kt)("p",null,"Run the following command under ",(0,a.kt)("inlineCode",{parentName:"p"},"shenyu-examples-grpc")," to generate Java code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"mvn protobuf:compile \nmvn protobuf:compile-custom \n")),(0,a.kt)("p",null,"Execute the ",(0,a.kt)("inlineCode",{parentName:"p"},"org.apache.shenyu.examples.grpc.ShenyuTestGrpcApplication")," main method to start project."),(0,a.kt)("p",null,"The following log appears when the startup is successful:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'2021-06-18 19:33:32.866  INFO 11004 --- [or_consumer_-19] o.a.s.r.client.http.utils.RegisterUtils  : grpc client register success: {"appName":"127.0.0.1:8080","contextPath":"/grpc","path":"/grpc/clientStreamingFun","pathDesc":"clientStreamingFun","rpcType":"grpc","serviceName":"stream.StreamService","methodName":"clientStreamingFun","ruleName":"/grpc/clientStreamingFun","parameterTypes":"io.grpc.stub.StreamObserver","rpcExt":"{\\"timeout\\":5000,\\"methodType\\":\\"CLIENT_STREAMING\\"}","enabled":true,"host":"172.20.10.6","port":8080,"registerMetaData":false} \n2021-06-18 19:33:32.866  INFO 11004 --- [or_consumer_-17] o.a.s.r.client.http.utils.RegisterUtils  : grpc client register success: {"appName":"127.0.0.1:8080","contextPath":"/grpc","path":"/grpc/echo","pathDesc":"echo","rpcType":"grpc","serviceName":"echo.EchoService","methodName":"echo","ruleName":"/grpc/echo","parameterTypes":"echo.EchoRequest,io.grpc.stub.StreamObserver","rpcExt":"{\\"timeout\\":5000,\\"methodType\\":\\"UNARY\\"}","enabled":true,"host":"172.20.10.6","port":8080,"registerMetaData":false} \n2021-06-18 19:33:32.866  INFO 11004 --- [or_consumer_-20] o.a.s.r.client.http.utils.RegisterUtils  : grpc client register success: {"appName":"127.0.0.1:8080","contextPath":"/grpc","path":"/grpc/bidiStreamingFun","pathDesc":"bidiStreamingFun","rpcType":"grpc","serviceName":"stream.StreamService","methodName":"bidiStreamingFun","ruleName":"/grpc/bidiStreamingFun","parameterTypes":"io.grpc.stub.StreamObserver","rpcExt":"{\\"timeout\\":5000,\\"methodType\\":\\"BIDI_STREAMING\\"}","enabled":true,"host":"172.20.10.6","port":8080,"registerMetaData":false} \n2021-06-18 19:33:32.866  INFO 11004 --- [or_consumer_-21] o.a.s.r.client.http.utils.RegisterUtils  : grpc client register success: {"appName":"127.0.0.1:8080","contextPath":"/grpc","path":"/grpc/unaryFun","pathDesc":"unaryFun","rpcType":"grpc","serviceName":"stream.StreamService","methodName":"unaryFun","ruleName":"/grpc/unaryFun","parameterTypes":"stream.RequestData,io.grpc.stub.StreamObserver","rpcExt":"{\\"timeout\\":5000,\\"methodType\\":\\"UNARY\\"}","enabled":true,"host":"172.20.10.6","port":8080,"registerMetaData":false} \n2021-06-18 19:33:32.866  INFO 11004 --- [or_consumer_-18] o.a.s.r.client.http.utils.RegisterUtils  : grpc client register success: {"appName":"127.0.0.1:8080","contextPath":"/grpc","path":"/grpc/serverStreamingFun","pathDesc":"serverStreamingFun","rpcType":"grpc","serviceName":"stream.StreamService","methodName":"serverStreamingFun","ruleName":"/grpc/serverStreamingFun","parameterTypes":"stream.RequestData,io.grpc.stub.StreamObserver","rpcExt":"{\\"timeout\\":5000,\\"methodType\\":\\"SERVER_STREAMING\\"}","enabled":true,"host":"172.20.10.6","port":8080,"registerMetaData":false} \n')),(0,a.kt)("h2",{id:"test"},"Test"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"shenyu-examples-grpc")," project will automatically register interface methods annotated with ",(0,a.kt)("inlineCode",{parentName:"p"},"@ShenyuGrpcClient")," in the Apache ShenYu gateway after successful startup."),(0,a.kt)("p",null,"Open PluginList -> rpc proxy -> gRPC to see the list of plugin rule configurations:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(70502).Z})),(0,a.kt)("p",null,"Use ",(0,a.kt)("inlineCode",{parentName:"p"},"postman")," to simulate ",(0,a.kt)("inlineCode",{parentName:"p"},"http")," to request your gRPC service. The following is the request body."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "data": [\n        {\n            "message": "hello grpc"\n        }\n    ]\n}\n')),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(83250).Z})),(0,a.kt)("p",null,"The parameters are passed in json format. The name of the key is ",(0,a.kt)("inlineCode",{parentName:"p"},"data")," by default, and you can reset it in ",(0,a.kt)("inlineCode",{parentName:"p"},"GrpcConstants.JSON_DESCRIPTOR_PROTO_FIELD_NAME"),". The input of value is based on the proto file defined by you."),(0,a.kt)("h2",{id:"streaming"},"Streaming"),(0,a.kt)("p",null,"the Apache ShenYu can support streaming of gRPC. The following shows the calls of the four method types of gRPC. In streaming, you can pass multiple parameters in the form of an array."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"UNARY"))),(0,a.kt)("p",null,"The request body like this."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "data": [\n        {\n            "text": "hello grpc"\n        }\n    ]\n}\n')),(0,a.kt)("p",null,"Then, call gRPC service by ",(0,a.kt)("inlineCode",{parentName:"p"},"UNARY")," method type."),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(58063).Z})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"CLIENT_STREAMING"))),(0,a.kt)("p",null,"The request body like this."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "data": [\n        {\n            "text": "hello grpc"\n        }, \n        {\n            "text": "hello grpc"\n        }, \n        {\n            "text": "hello grpc"\n        }\n    ]\n}\n')),(0,a.kt)("p",null,"Then, call gRPC service by ",(0,a.kt)("inlineCode",{parentName:"p"},"CLIENT_STREAMING")," method type."),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(86016).Z})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"SERVER_STREAMING"))),(0,a.kt)("p",null,"The request body like this."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "data": [\n        {\n            "text": "hello grpc"\n        }\n    ]\n}\n')),(0,a.kt)("p",null,"Then, call gRPC service by ",(0,a.kt)("inlineCode",{parentName:"p"},"SERVER_STREAMING")," method type."),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(76477).Z})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"BIDI_STREAMING"))),(0,a.kt)("p",null,"The request body like this."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "data": [\n        {\n            "text": "hello grpc"\n        }, \n        {\n            "text": "hello grpc"\n        }, \n        {\n            "text": "hello grpc"\n        }\n    ]\n}\n')),(0,a.kt)("p",null,"Then, call gRPC service by ",(0,a.kt)("inlineCode",{parentName:"p"},"BIDI_STREAMING")," method type."),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(81236).Z})))}u.isMDXComponent=!0},81236:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/grpc-bidi-stream-56880817c53ae36e4408d957b0269cdc.png"},86016:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/grpc-client-stream-a715f4134ee74eb658ba99c0f60c65b6.png"},83250:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/grpc-echo-622ab008544874bfe975c31ea8545f52.png"},76477:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/grpc-server-stream-515e14914bb628f6e1886f2c07e5a88f.png"},70502:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/grpc-service-en-452d3e22231d1f157574d8100d0cf487.png"},58063:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/grpc-unary-db53f0d92c8528d0685a008264891bad.png"}}]);