"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[98648],{95788:(e,n,t)=>{t.d(n,{Iu:()=>l,yg:()=>g});var r=t(11504);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=c(t),y=a,g=u["".concat(s,".").concat(y)]||u[y]||d[y]||o;return t?r.createElement(g,i(i({ref:n},l),{},{components:t})):r.createElement(g,i({ref:n},l))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=y;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p[u]="string"==typeof e?e:a,i[1]=p;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},17256:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var r=t(45072),a=(t(11504),t(95788));const o={title:"Motan Proxy",description:"Motan Proxy"},i=void 0,p={unversionedId:"user-guide/proxy/motan-proxy",id:"version-2.5.1/user-guide/proxy/motan-proxy",isDocsHomePage:!1,title:"Motan Proxy",description:"Motan Proxy",source:"@site/versioned_docs/version-2.5.1/user-guide/proxy/motan-proxy.md",sourceDirName:"user-guide/proxy",slug:"/user-guide/proxy/motan-proxy",permalink:"/docs/2.5.1/user-guide/proxy/motan-proxy",editUrl:"https://github.com/apache/shenyu-website/edit/main/versioned_docs/version-2.5.1/user-guide/proxy/motan-proxy.md",version:"2.5.1",frontMatter:{title:"Motan Proxy",description:"Motan Proxy"},sidebar:"version-2.5.1/tutorialSidebar",previous:{title:"Http Proxy",permalink:"/docs/2.5.1/user-guide/proxy/http-proxy"},next:{title:"Sofa Proxy",permalink:"/docs/2.5.1/user-guide/proxy/sofa-rpc-proxy"}},s=[{value:"Add motan plugin in gateway",id:"add-motan-plugin-in-gateway",children:[]},{value:"Motan service access gateway",id:"motan-service-access-gateway",children:[]},{value:"User Request",id:"user-request",children:[]}],c={toc:s},l="wrapper";function u(e){let{components:n,...t}=e;return(0,a.yg)(l,(0,r.c)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"This document is intended to help the ",(0,a.yg)("inlineCode",{parentName:"p"},"Motan")," service access the ",(0,a.yg)("inlineCode",{parentName:"p"},"Apache ShenYu")," gateway. The ",(0,a.yg)("inlineCode",{parentName:"p"},"Apache ShenYu")," gateway uses the ",(0,a.yg)("inlineCode",{parentName:"p"},"Motan")," plugin to handle ",(0,a.yg)("inlineCode",{parentName:"p"},"motan")," service."),(0,a.yg)("p",null,"Before the connection, start ",(0,a.yg)("inlineCode",{parentName:"p"},"shenyu-admin")," correctly, start ",(0,a.yg)("inlineCode",{parentName:"p"},"Motan")," plugin, and add related dependencies on the gateway and ",(0,a.yg)("inlineCode",{parentName:"p"},"Motan")," application client. Refer to the previous ",(0,a.yg)("a",{parentName:"p",href:"../quick-start/quick-start-motan"},"Quick start with Motan")," ."),(0,a.yg)("p",null,"For details about client access configuration, see ",(0,a.yg)("a",{parentName:"p",href:"/docs/2.5.1/user-guide/property-config/register-center-access"},"Application Client Access Config")," ."),(0,a.yg)("p",null,"For details about data synchronization configurations, see ",(0,a.yg)("a",{parentName:"p",href:"/docs/2.5.1/user-guide/property-config/use-data-sync"},"Data Synchronization Config")," ."),(0,a.yg)("h2",{id:"add-motan-plugin-in-gateway"},"Add motan plugin in gateway"),(0,a.yg)("p",null,"Add the following dependencies to the gateway's ",(0,a.yg)("inlineCode",{parentName:"p"},"pom.xml")," file:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-xml"},"        \x3c!-- apache shenyu motan plugin --\x3e\n        <dependency>\n            <groupId>org.apache.shenyu</groupId>\n            <artifactId>shenyu-spring-boot-starter-plugin-motan</artifactId>\n            <version>${project.version}</version>\n        </dependency>\n        <dependency>\n            <groupId>com.weibo</groupId>\n            <artifactId>motan-core</artifactId>\n            <version>1.1.9</version>\n        </dependency>\n        <dependency>\n            <groupId>com.weibo</groupId>\n            <artifactId>motan-registry-zookeeper</artifactId>\n            <version>1.1.9</version>\n        </dependency>\n        <dependency>\n            <groupId>com.weibo</groupId>\n            <artifactId>motan-transport-netty4</artifactId>\n            <version>1.1.9</version>\n        </dependency>\n        <dependency>\n            <groupId>com.weibo</groupId>\n            <artifactId>motan-springsupport</artifactId>\n            <version>1.1.9</version>\n        </dependency>\n")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Restart your gateway service.")),(0,a.yg)("h2",{id:"motan-service-access-gateway"},"Motan service access gateway"),(0,a.yg)("p",null,"Please refer to: ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/apache/shenyu/tree/master/shenyu-examples/shenyu-examples-motan"},"shenyu-examples-motan")),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"In the microservice built by ",(0,a.yg)("inlineCode",{parentName:"li"},"Motan"),", add the following dependencies:")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-xml"},"        <dependency>\n            <groupId>org.apache.shenyu</groupId>\n            <artifactId>shenyu-spring-boot-starter-client-motan</artifactId>\n            <version>${shenyu.version}</version>\n        </dependency>\n")),(0,a.yg)("ol",{start:2},(0,a.yg)("li",{parentName:"ol"},"Add the following configuration to the ",(0,a.yg)("inlineCode",{parentName:"li"},"application.yaml")," configuration file:")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-yaml"},"shenyu:\n  register:\n    registerType: http #zookeeper #etcd #nacos #consul\n    serverLists: http://localhost:9095 #localhost:2181 #http://localhost:2379 #localhost:8848\n    props:\n      username: admin\n      password: 123456\n  client:\n    motan:\n      props:\n        contextPath: /motan\n        ipAndPort: motan\n        appName: motan\n        port: 8081\n      package-path: org.apache.shenyu.examples.motan.service\n      basicServiceConfig:\n        exportPort: 8002\nmotan:\n  registry:\n    protocol: zookeeper\n    address: 127.0.0.1:2181\n")),(0,a.yg)("ol",{start:3},(0,a.yg)("li",{parentName:"ol"},"Add ",(0,a.yg)("inlineCode",{parentName:"li"},"@ShenyuMotanClient")," annotation to the method of ",(0,a.yg)("inlineCode",{parentName:"li"},"Motan")," service interface implementation class, start your service provider, after successful registration, go to PluginList -> rpc proxy -> motan in the background management system, you will see automatic registration of selectors and rules information.")),(0,a.yg)("p",null,"Example:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-java"},'@MotanService(export = "demoMotan:8002")\npublic class MotanDemoServiceImpl implements MotanDemoService {\n    @Override\n    @ShenyuMotanClient(path = "/hello")\n    public String hello(String name) {\n        return "hello " + name;\n    }\n}\n')),(0,a.yg)("h2",{id:"user-request"},"User Request"),(0,a.yg)("p",null,"You can request your ",(0,a.yg)("inlineCode",{parentName:"p"},"motan")," service by Http. The ",(0,a.yg)("inlineCode",{parentName:"p"},"Apache ShenYu")," gateway needs to have a route prefix which is the ",(0,a.yg)("inlineCode",{parentName:"p"},"contextPath")," configured by the access gateway. For example: ",(0,a.yg)("inlineCode",{parentName:"p"},"http://localhost:9195/motan/hello")," ."))}u.isMDXComponent=!0}}]);