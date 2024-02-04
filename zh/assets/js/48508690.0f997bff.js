"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[16156],{95788:(e,n,r)=>{r.d(n,{Iu:()=>c,yg:()=>d});var t=r(11504);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function p(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?p(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},p=Object.keys(e);for(t=0;t<p.length;t++)r=p[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(t=0;t<p.length;t++)r=p[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=t.createContext({}),g=function(e){var n=t.useContext(i),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},c=function(e){var n=g(e.components);return t.createElement(i.Provider,{value:n},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},y=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,p=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=g(r),y=a,d=s["".concat(i,".").concat(y)]||s[y]||u[y]||p;return r?t.createElement(d,l(l({ref:n},c),{},{components:r})):t.createElement(d,l({ref:n},c))}));function d(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var p=r.length,l=new Array(p);l[0]=y;var o={};for(var i in n)hasOwnProperty.call(n,i)&&(o[i]=n[i]);o.originalType=e,o[s]="string"==typeof e?e:a,l[1]=o;for(var g=2;g<p;g++)l[g]=r[g];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}y.displayName="MDXCreateElement"},79916:(e,n,r)=>{r.r(n),r.d(n,{contentTitle:()=>l,default:()=>s,frontMatter:()=>p,metadata:()=>o,toc:()=>i});var t=r(45072),a=(r(11504),r(95788));const p={title:"gRPC\u670d\u52a1\u63a5\u5165",description:"gRPC\u670d\u52a1\u63a5\u5165"},l=void 0,o={unversionedId:"user-guide/proxy/grpc-proxy",id:"version-2.4.3/user-guide/proxy/grpc-proxy",isDocsHomePage:!1,title:"gRPC\u670d\u52a1\u63a5\u5165",description:"gRPC\u670d\u52a1\u63a5\u5165",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.4.3/user-guide/proxy/grpc-proxy.md",sourceDirName:"user-guide/proxy",slug:"/user-guide/proxy/grpc-proxy",permalink:"/zh/docs/2.4.3/user-guide/proxy/grpc-proxy",editUrl:"https://github.com/apache/shenyu-website/edit/main/i18n/zh/docusaurus-plugin-content-docs/version-2.4.3/user-guide/proxy/grpc-proxy.md",version:"2.4.3",frontMatter:{title:"gRPC\u670d\u52a1\u63a5\u5165",description:"gRPC\u670d\u52a1\u63a5\u5165"},sidebar:"version-2.4.3/tutorialSidebar",previous:{title:"Dubbo\u670d\u52a1\u63a5\u5165",permalink:"/zh/docs/2.4.3/user-guide/proxy/dubbo-proxy"},next:{title:"Http\u670d\u52a1\u63a5\u5165",permalink:"/zh/docs/2.4.3/user-guide/proxy/http-proxy"}},i=[{value:"\u5728\u7f51\u5173\u4e2d\u5f15\u5165 grpc \u63d2\u4ef6",id:"\u5728\u7f51\u5173\u4e2d\u5f15\u5165-grpc-\u63d2\u4ef6",children:[]},{value:"gRPC\u670d\u52a1\u63a5\u5165\u7f51\u5173",id:"grpc\u670d\u52a1\u63a5\u5165\u7f51\u5173",children:[]},{value:"\u7528\u6237\u8bf7\u6c42",id:"\u7528\u6237\u8bf7\u6c42",children:[]}],g={toc:i},c="wrapper";function s(e){let{components:n,...r}=e;return(0,a.yg)(c,(0,t.c)({},g,r,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"\u6b64\u7bc7\u6587\u7ae0\u662f\u4ecb\u7ecd ",(0,a.yg)("inlineCode",{parentName:"p"},"gRPC")," \u670d\u52a1\u63a5\u5165\u5230 ",(0,a.yg)("inlineCode",{parentName:"p"},"Apache ShenYu")," \u7f51\u5173\uff0c",(0,a.yg)("inlineCode",{parentName:"p"},"Apache ShenYu")," \u7f51\u5173\u4f7f\u7528 ",(0,a.yg)("inlineCode",{parentName:"p"},"grpc")," \u63d2\u4ef6\u6765\u63a5\u5165",(0,a.yg)("inlineCode",{parentName:"p"},"gRPC"),"\u670d\u52a1\u3002"),(0,a.yg)("p",null,"\u63a5\u5165\u524d\uff0c\u8bf7\u6b63\u786e\u542f\u52a8 ",(0,a.yg)("inlineCode",{parentName:"p"},"shenyu-admin"),"\uff0c\u5e76\u5f00\u542f",(0,a.yg)("inlineCode",{parentName:"p"},"grpc"),"\u63d2\u4ef6\uff0c\u5728\u7f51\u5173\u7aef\u548c",(0,a.yg)("inlineCode",{parentName:"p"},"grpc"),"\u670d\u52a1\u7aef\u5f15\u5165\u76f8\u5173\u4f9d\u8d56\u3002\u53ef\u4ee5\u53c2\u8003\u524d\u9762\u7684 ",(0,a.yg)("a",{parentName:"p",href:"../quick-start/quick-start-grpc"},"gRPC\u5feb\u901f\u5f00\u59cb"),"\u3002"),(0,a.yg)("p",null,"\u5e94\u7528\u5ba2\u6237\u7aef\u63a5\u5165\u7684\u76f8\u5173\u914d\u7f6e\u8bf7\u53c2\u8003\uff1a",(0,a.yg)("a",{parentName:"p",href:"./register-center-access"},"\u5ba2\u6237\u7aef\u63a5\u5165\u914d\u7f6e"),"\u3002"),(0,a.yg)("p",null,"\u6570\u636e\u540c\u6b65\u7684\u76f8\u5173\u914d\u7f6e\u8bf7\u53c2\u8003\uff1a",(0,a.yg)("a",{parentName:"p",href:"./use-data-sync"},"\u6570\u636e\u540c\u6b65\u914d\u7f6e"),"\u3002"),(0,a.yg)("h2",{id:"\u5728\u7f51\u5173\u4e2d\u5f15\u5165-grpc-\u63d2\u4ef6"},"\u5728\u7f51\u5173\u4e2d\u5f15\u5165 grpc \u63d2\u4ef6"),(0,a.yg)("p",null,"\u5f15\u5165\u7f51\u5173\u5bf9",(0,a.yg)("inlineCode",{parentName:"p"},"gRPC"),"\u7684\u4ee3\u7406\u63d2\u4ef6\uff0c\u5728\u7f51\u5173\u7684 ",(0,a.yg)("inlineCode",{parentName:"p"},"pom.xml")," \u6587\u4ef6\u4e2d\u589e\u52a0\u5982\u4e0b\u4f9d\u8d56\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-xml"},"        \x3c!-- apache shenyu grpc plugin start--\x3e\n        <dependency>\n            <groupId>org.apache.shenyu</groupId>\n            <artifactId>shenyu-spring-boot-starter-plugin-grpc</artifactId>\n            <version>${project.version}</version>\n        </dependency>\n        \x3c!-- apache shenyu grpc plugin end--\x3e\n")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u91cd\u542f\u4f60\u7684\u7f51\u5173\u670d\u52a1\u3002")),(0,a.yg)("h2",{id:"grpc\u670d\u52a1\u63a5\u5165\u7f51\u5173"},"gRPC\u670d\u52a1\u63a5\u5165\u7f51\u5173"),(0,a.yg)("p",null,"\u53ef\u4ee5\u53c2\u8003\uff1a ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/apache/shenyu/tree/v2.4.3/shenyu-examples/shenyu-examples-grpc"},"shenyu-examples-grpc")),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"\u5728\u7531",(0,a.yg)("inlineCode",{parentName:"li"},"gRPC"),"\u6784\u5efa\u7684\u5fae\u670d\u52a1\u4e2d\uff0c\u5f15\u5165\u5982\u4e0b\u4f9d\u8d56\uff1a")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-xml"},"        <dependency>\n            <groupId>org.apache.shenyu</groupId>\n            <artifactId>shenyu-spring-boot-starter-client-grpc</artifactId>\n            <version>${shenyu.version}</version>\n            <exclusions>\n                <exclusion>\n                    <artifactId>guava</artifactId>\n                    <groupId>com.google.guava</groupId>\n                </exclusion>\n            </exclusions>\n        </dependency>\n")),(0,a.yg)("p",null,"\u5728 ",(0,a.yg)("inlineCode",{parentName:"p"},"shenyu-examples-grpc")," \u4e0b\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u751f\u6210 ",(0,a.yg)("inlineCode",{parentName:"p"},"java")," \u4ee3\u7801\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"mvn protobuf:compile //\u7f16\u8bd1\u6d88\u606f\u5bf9\u8c61\nmvn protobuf:compile-custom //\u4f9d\u8d56\u6d88\u606f\u5bf9\u8c61,\u751f\u6210\u63a5\u53e3\u670d\u52a1\n")),(0,a.yg)("ol",{start:2},(0,a.yg)("li",{parentName:"ol"},"\u5728 application.yaml \u589e\u52a0\u5982\u4e0b\u914d\u7f6e\uff1a")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-yaml"},"shenyu:\n  register:\n    registerType: http #zookeeper #etcd #nacos #consul\n    serverLists: http://localhost:9095 #localhost:2181 #http://localhost:2379 #localhost:8848\n    props:\n      username: admin\n      password: 123456\n  client:\n    grpc:\n      props:\n        contextPath: /grpc\n        appName: grpc\n        ipAndPort: 127.0.0.1:38080\n        port: 38080\n")),(0,a.yg)("ol",{start:3},(0,a.yg)("li",{parentName:"ol"},"\u5728",(0,a.yg)("inlineCode",{parentName:"li"},"gRPC"),"\u670d\u52a1\u63a5\u53e3\u5b9e\u73b0\u7c7b\u4e0a\u52a0\u4e0a ",(0,a.yg)("inlineCode",{parentName:"li"},"@ShenyuGrpcClient")," \u6ce8\u89e3\u3002\u542f\u52a8\u4f60\u7684\u670d\u52a1\u63d0\u4f9b\u8005\uff0c\u6210\u529f\u6ce8\u518c\u540e\uff0c\u5728\u540e\u53f0\u7ba1\u7406\u7cfb\u7edf\u8fdb\u5165",(0,a.yg)("inlineCode",{parentName:"li"},"\u63d2\u4ef6\u5217\u8868 -> rpc proxy -> grpc"),"\uff0c\u4f1a\u770b\u5230\u81ea\u52a8\u6ce8\u518c\u7684\u9009\u62e9\u5668\u548c\u89c4\u5219\u4fe1\u606f\u3002")),(0,a.yg)("p",null,"\u793a\u4f8b\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-java"},'    @Override\n    @ShenyuGrpcClient(path = "/echo", desc = "echo")\n    public void echo(EchoRequest request, StreamObserver<EchoResponse> responseObserver) {\n        System.out.println("Received: " + request.getMessage());\n        EchoResponse.Builder response = EchoResponse.newBuilder()\n                .setMessage("ReceivedHELLO")\n                .addTraces(Trace.newBuilder().setHost(getHostname()).build());\n        responseObserver.onNext(response.build());\n        responseObserver.onCompleted();\n    }\n\n')),(0,a.yg)("h2",{id:"\u7528\u6237\u8bf7\u6c42"},"\u7528\u6237\u8bf7\u6c42"),(0,a.yg)("p",null,"\u53ef\u4ee5\u901a\u8fc7 ",(0,a.yg)("inlineCode",{parentName:"p"},"http")," \u7684\u65b9\u5f0f\u6765\u8bf7\u6c42\u4f60\u7684",(0,a.yg)("inlineCode",{parentName:"p"},"grpc"),"\u670d\u52a1\u3002",(0,a.yg)("inlineCode",{parentName:"p"},"Apache ShenYu"),"\u7f51\u5173\u9700\u8981\u6709\u4e00\u4e2a\u8def\u7531\u524d\u7f00\uff0c\u8fd9\u4e2a\u8def\u7531\u524d\u7f00\u5c31\u662f\u4f60\u63a5\u5165\u9879\u76ee\u8fdb\u884c\u914d\u7f6e ",(0,a.yg)("inlineCode",{parentName:"p"},"contextPath"),"\u3002"),(0,a.yg)("p",null,"\u5982\u679c\u4f60\u7684",(0,a.yg)("inlineCode",{parentName:"p"},"proto"),"\u6587\u4ef6\u5b9a\u4e49\u5982\u4e0b\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-protobuf"},"message EchoRequest {\n  string message = 1;\n}\n")),(0,a.yg)("p",null,"\u90a3\u4e48\u8bf7\u6c42\u53c2\u6570\u5982\u4e0b\u6240\u793a\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "data": [\n        {\n            "message": "hello grpc"\n        }\n    ]\n}\n')),(0,a.yg)("p",null,"\u5f53\u524d\u662f\u4ee5 ",(0,a.yg)("inlineCode",{parentName:"p"},"json")," \u7684\u683c\u5f0f\u4f20\u9012\u53c2\u6570\uff0c",(0,a.yg)("inlineCode",{parentName:"p"},"key"),"\u7684\u540d\u79f0\u9ed8\u8ba4\u662f",(0,a.yg)("inlineCode",{parentName:"p"},"data"),"\uff0c\u4f60\u53ef\u4ee5\u5728 ",(0,a.yg)("inlineCode",{parentName:"p"},"GrpcConstants.JSON_DESCRIPTOR_PROTO_FIELD_NAME")," \u4e2d\u8fdb\u884c\u91cd\u7f6e\uff1b",(0,a.yg)("inlineCode",{parentName:"p"},"value"),"\u7684\u4f20\u5165\u5219\u6839\u636e\u4f60\u5b9a\u4e49\u7684 ",(0,a.yg)("inlineCode",{parentName:"p"},"proto")," \u6587\u4ef6\u3002"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"Apache ShenYu")," \u53ef\u4ee5\u652f\u6301 ",(0,a.yg)("inlineCode",{parentName:"p"},"gRPC")," \u7684\u6d41\u5f0f\u8c03\u7528\uff0c\u901a\u8fc7\u6570\u7ec4\u7684\u5f62\u5f0f\u4f20\u9012\u591a\u4e2a\u53c2\u6570\u3002"),(0,a.yg)("p",null,"\u5982\u679c\u4f60\u7684",(0,a.yg)("inlineCode",{parentName:"p"},"proto"),"\u6587\u4ef6\u5b9a\u4e49\u5982\u4e0b\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-protobuf"},"message RequestData {\n  string text = 1;\n}\n")),(0,a.yg)("p",null,"\u5bf9\u5e94\u7684\u65b9\u6cd5\u8c03\u7528\u8bf7\u6c42\u53c2\u6570\u5982\u4e0b\uff1a"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"UNARY"))),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "data": [\n    {\n      "text": "hello grpc"\n    }\n  ]\n}\n')),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"CLIENT_STREAMING"))),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "data": [\n    {\n      "text": "hello grpc"\n    },\n    {\n      "text": "hello grpc"\n    },\n    {\n      "text": "hello grpc"\n    }\n  ]\n}\n')),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"SERVER_STREAMING"))),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "data": [\n    {\n      "text": "hello grpc"\n    }\n  ]\n}\n')),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"BIDI_STREAMING"))),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "data": [\n    {\n      "text": "hello grpc"\n    },\n    {\n      "text": "hello grpc"\n    },\n    {\n      "text": "hello grpc"\n    }\n  ]\n}\n')))}s.isMDXComponent=!0}}]);