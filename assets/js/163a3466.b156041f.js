"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[46964],{95788:(e,n,t)=>{t.d(n,{Iu:()=>c,yg:()=>g});var r=t(11504);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(t),d=a,g=u["".concat(l,".").concat(d)]||u[d]||y[d]||i;return t?r.createElement(g,o(o({ref:n},c),{},{components:t})):r.createElement(g,o({ref:n},c))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},46948:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=t(45072),a=(t(11504),t(95788));const i={title:"Tars Proxy",description:"Tars\u670d\u52a1\u63a5\u5165"},o=void 0,s={unversionedId:"user-guide/proxy/tars-proxy",id:"version-2.4.0/user-guide/proxy/tars-proxy",isDocsHomePage:!1,title:"Tars Proxy",description:"Tars\u670d\u52a1\u63a5\u5165",source:"@site/versioned_docs/version-2.4.0/user-guide/proxy/tars-proxy.md",sourceDirName:"user-guide/proxy",slug:"/user-guide/proxy/tars-proxy",permalink:"/docs/2.4.0/user-guide/proxy/tars-proxy",editUrl:"https://github.com/apache/shenyu-website/edit/main/versioned_docs/version-2.4.0/user-guide/proxy/tars-proxy.md",version:"2.4.0",frontMatter:{title:"Tars Proxy",description:"Tars\u670d\u52a1\u63a5\u5165"},sidebar:"version-2.4.0/tutorialSidebar",previous:{title:"Spring Cloud Proxy",permalink:"/docs/2.4.0/user-guide/proxy/spring-cloud-proxy"},next:{title:"Application Client Access Config",permalink:"/docs/2.4.0/user-guide/register-center-access"}},l=[{value:"Add tars plugin in gateway",id:"add-tars-plugin-in-gateway",children:[]},{value:"Tars service access gateway",id:"tars-service-access-gateway",children:[]},{value:"User Request",id:"user-request",children:[]}],p={toc:l},c="wrapper";function u(e){let{components:n,...t}=e;return(0,a.yg)(c,(0,r.c)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"This document is intended to help the ",(0,a.yg)("inlineCode",{parentName:"p"},"Tars")," service access the ",(0,a.yg)("inlineCode",{parentName:"p"},"Apache ShenYu")," gateway. The ",(0,a.yg)("inlineCode",{parentName:"p"},"Apache ShenYu")," gateway uses the ",(0,a.yg)("inlineCode",{parentName:"p"},"tars")," plugin to handle ",(0,a.yg)("inlineCode",{parentName:"p"},"tars")," service."),(0,a.yg)("p",null,"Before the connection, start ",(0,a.yg)("inlineCode",{parentName:"p"},"shenyu-admin")," correctly, start ",(0,a.yg)("inlineCode",{parentName:"p"},"tars")," plugin, and add related dependencies on the gateway and ",(0,a.yg)("inlineCode",{parentName:"p"},"tars")," application client. Refer to the previous ",(0,a.yg)("a",{parentName:"p",href:"../quick-start/quick-start-tars"},"Quick start with Tars")," ."),(0,a.yg)("p",null,"For details about client access configuration, see ",(0,a.yg)("a",{parentName:"p",href:"./register-center-access"},"Application Client Access Config")," ."),(0,a.yg)("p",null,"For details about data synchronization configurations, see ",(0,a.yg)("a",{parentName:"p",href:"./use-data-sync"},"Data Synchronization Config"),")."),(0,a.yg)("h2",{id:"add-tars-plugin-in-gateway"},"Add tars plugin in gateway"),(0,a.yg)("p",null,"Add the following dependencies to the gateway's ",(0,a.yg)("inlineCode",{parentName:"p"},"pom.xml")," file:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-xml"},"        \x3c!-- apache shenyu tars plugin start--\x3e\n        <dependency>\n            <groupId>org.apache.shenyu</groupId>\n            <artifactId>shenyu-spring-boot-starter-plugin-tars</artifactId>\n            <version>${project.version}</version>\n        </dependency>\n\n        <dependency>\n            <groupId>com.tencent.tars</groupId>\n            <artifactId>tars-client</artifactId>\n            <version>1.7.2</version>\n        </dependency>\n        \x3c!-- apache shenyu tars plugin end--\x3e\n")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Restart your gateway service.")),(0,a.yg)("h2",{id:"tars-service-access-gateway"},"Tars service access gateway"),(0,a.yg)("p",null,"Please refer to\uff1a ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/apache/shenyu/tree/v2.4.0/shenyu-examples/shenyu-examples-tars"},"shenyu-examples-tars")),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"In the microservice built by ",(0,a.yg)("inlineCode",{parentName:"li"},"Tars"),", add the following dependencies:")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-xml"},"        <dependency>\n            <groupId>org.apache.shenyu</groupId>\n            <artifactId>shenyu-spring-boot-starter-client-tars</artifactId>\n            <version>${shenyu.version}</version>\n        </dependency>\n")),(0,a.yg)("ol",{start:2},(0,a.yg)("li",{parentName:"ol"},"Add the following configuration to the ",(0,a.yg)("inlineCode",{parentName:"li"},"application.yaml")," configuration file:")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-yaml"},"shenyu:\n  client:\n    registerType: http #zookeeper #etcd #nacos #consul\n    serverLists: http://localhost:9095 #localhost:2181 #http://localhost:2379 #localhost:8848\n    props:\n      contextPath: /tars\n      appName: tars\n      port: 21715\n      host: 192.168.41.103\n      nacosNameSpace: ShenyuRegisterCenter\n")),(0,a.yg)("ol",{start:3},(0,a.yg)("li",{parentName:"ol"},"Add ",(0,a.yg)("inlineCode",{parentName:"li"},"@ShenyuTarsService")," Annotation on the tars service interface implementation class and ",(0,a.yg)("inlineCode",{parentName:"li"},"@ShenyuTarsClient")," on the method, start your service provider, and register successfully. In the background management system, enter PluginList -> rpc proxy -> tars, you will see the automatic registration of selectors and rules information.")),(0,a.yg)("p",null,"Example:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-java"},'    @TarsServant("HelloObj")\n    @ShenyuTarsService(serviceName = "ShenyuExampleServer.ShenyuExampleApp.HelloObj")\n    public class HelloServantImpl implements HelloServant {\n        @Override\n        @ShenyuTarsClient(path = "/hello", desc = "hello")\n        public String hello(int no, String name) {\n            return String.format("hello no=%s, name=%s, time=%s", no, name, System.currentTimeMillis());\n        }\n\n        @Override\n        @ShenyuTarsClient(path = "/helloInt", desc = "helloInt")\n        public int helloInt(int no, String name) {\n            return 1;\n        }\n    }\n\n')),(0,a.yg)("h2",{id:"user-request"},"User Request"),(0,a.yg)("p",null,"You can request your tars service by Http. The ",(0,a.yg)("inlineCode",{parentName:"p"},"Apache ShenYu")," gateway needs to have a route prefix which is the ",(0,a.yg)("inlineCode",{parentName:"p"},"contextPath")," configured by the access gateway. For example: ",(0,a.yg)("inlineCode",{parentName:"p"},"http://localhost:9195/tars/hello")," ."))}u.isMDXComponent=!0}}]);