"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[716],{95788:(e,n,t)=>{t.d(n,{Iu:()=>s,yg:()=>m});var r=t(11504);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=c(t),d=a,m=u["".concat(l,".").concat(d)]||u[d]||y[d]||o;return t?r.createElement(m,p(p({ref:n},s),{},{components:t})):r.createElement(m,p({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,p=new Array(o);p[0]=d;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[u]="string"==typeof e?e:a,p[1]=i;for(var c=2;c<o;c++)p[c]=t[c];return r.createElement.apply(null,p)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},37408:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>p,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=t(45072),a=(t(11504),t(95788));const o={title:"Motan\u670d\u52a1\u63a5\u5165",description:"Motan\u670d\u52a1\u63a5\u5165"},p=void 0,i={unversionedId:"user-guide/proxy/motan-proxy",id:"version-2.5.1/user-guide/proxy/motan-proxy",isDocsHomePage:!1,title:"Motan\u670d\u52a1\u63a5\u5165",description:"Motan\u670d\u52a1\u63a5\u5165",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.5.1/user-guide/proxy/motan-proxy.md",sourceDirName:"user-guide/proxy",slug:"/user-guide/proxy/motan-proxy",permalink:"/zh/docs/2.5.1/user-guide/proxy/motan-proxy",editUrl:"https://github.com/apache/shenyu-website/edit/main/i18n/zh/docusaurus-plugin-content-docs/version-2.5.1/user-guide/proxy/motan-proxy.md",version:"2.5.1",frontMatter:{title:"Motan\u670d\u52a1\u63a5\u5165",description:"Motan\u670d\u52a1\u63a5\u5165"},sidebar:"version-2.5.1/tutorialSidebar",previous:{title:"Http\u670d\u52a1\u63a5\u5165",permalink:"/zh/docs/2.5.1/user-guide/proxy/http-proxy"},next:{title:"Sofa\u670d\u52a1\u63a5\u5165",permalink:"/zh/docs/2.5.1/user-guide/proxy/sofa-rpc-proxy"}},l=[{value:"\u5728\u7f51\u5173\u4e2d\u5f15\u5165 motan \u63d2\u4ef6",id:"\u5728\u7f51\u5173\u4e2d\u5f15\u5165-motan-\u63d2\u4ef6",children:[]},{value:"Motan\u670d\u52a1\u63a5\u5165\u7f51\u5173",id:"motan\u670d\u52a1\u63a5\u5165\u7f51\u5173",children:[]},{value:"\u7528\u6237\u8bf7\u6c42",id:"\u7528\u6237\u8bf7\u6c42",children:[]}],c={toc:l},s="wrapper";function u(e){let{components:n,...t}=e;return(0,a.yg)(s,(0,r.c)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"\u6b64\u7bc7\u6587\u4ecb\u7ecd\u5982\u4f55\u5c06 ",(0,a.yg)("inlineCode",{parentName:"p"},"Motan")," \u670d\u52a1\u63a5\u5165\u5230 ",(0,a.yg)("inlineCode",{parentName:"p"},"Apache ShenYu")," \u7f51\u5173\uff0c",(0,a.yg)("inlineCode",{parentName:"p"},"Apache ShenYu")," \u7f51\u5173\u4f7f\u7528 ",(0,a.yg)("inlineCode",{parentName:"p"},"motan")," \u63d2\u4ef6\u6765\u63a5\u5165",(0,a.yg)("inlineCode",{parentName:"p"},"Motan"),"\u670d\u52a1\u3002"),(0,a.yg)("p",null,"\u63a5\u5165\u524d\uff0c\u8bf7\u6b63\u786e\u542f\u52a8 ",(0,a.yg)("inlineCode",{parentName:"p"},"shenyu-admin"),"\uff0c\u5e76\u5f00\u542f",(0,a.yg)("inlineCode",{parentName:"p"},"motan"),"\u63d2\u4ef6\uff0c\u5728\u7f51\u5173\u7aef\u548c",(0,a.yg)("inlineCode",{parentName:"p"},"motan"),"\u670d\u52a1\u7aef\u5f15\u5165\u76f8\u5173\u4f9d\u8d56\u3002\u53ef\u4ee5\u53c2\u8003\u524d\u9762\u7684 ",(0,a.yg)("a",{parentName:"p",href:"../quick-start/quick-start-motan"},"Motan\u5feb\u901f\u5f00\u59cb")," \u3002"),(0,a.yg)("p",null,"\u5e94\u7528\u5ba2\u6237\u7aef\u63a5\u5165\u7684\u76f8\u5173\u914d\u7f6e\u8bf7\u53c2\u8003\uff1a",(0,a.yg)("a",{parentName:"p",href:"/zh/docs/2.5.1/user-guide/property-config/register-center-access"},"\u5ba2\u6237\u7aef\u63a5\u5165\u914d\u7f6e"),"\u3002"),(0,a.yg)("p",null,"\u6570\u636e\u540c\u6b65\u7684\u76f8\u5173\u914d\u7f6e\u8bf7\u53c2\u8003\uff1a",(0,a.yg)("a",{parentName:"p",href:"/zh/docs/2.5.1/user-guide/property-config/use-data-sync"},"\u6570\u636e\u540c\u6b65\u914d\u7f6e"),"\u3002"),(0,a.yg)("h2",{id:"\u5728\u7f51\u5173\u4e2d\u5f15\u5165-motan-\u63d2\u4ef6"},"\u5728\u7f51\u5173\u4e2d\u5f15\u5165 motan \u63d2\u4ef6"),(0,a.yg)("p",null,"\u5f15\u5165\u7f51\u5173\u5bf9",(0,a.yg)("inlineCode",{parentName:"p"},"Motan"),"\u7684\u4ee3\u7406\u63d2\u4ef6\uff0c\u5728\u7f51\u5173\u7684 ",(0,a.yg)("inlineCode",{parentName:"p"},"pom.xml")," \u6587\u4ef6\u4e2d\u589e\u52a0\u5982\u4e0b\u4f9d\u8d56\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-xml"},"        \x3c!-- apache shenyu motan plugin --\x3e\n        <dependency>\n            <groupId>org.apache.shenyu</groupId>\n            <artifactId>shenyu-spring-boot-starter-plugin-motan</artifactId>\n            <version>${project.version}</version>\n        </dependency>\n        <dependency>\n            <groupId>com.weibo</groupId>\n            <artifactId>motan-core</artifactId>\n            <version>1.1.9</version>\n        </dependency>\n        <dependency>\n            <groupId>com.weibo</groupId>\n            <artifactId>motan-registry-zookeeper</artifactId>\n            <version>1.1.9</version>\n        </dependency>\n        <dependency>\n            <groupId>com.weibo</groupId>\n            <artifactId>motan-transport-netty4</artifactId>\n            <version>1.1.9</version>\n        </dependency>\n        <dependency>\n            <groupId>com.weibo</groupId>\n            <artifactId>motan-springsupport</artifactId>\n            <version>1.1.9</version>\n        </dependency>\n")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u91cd\u542f\u4f60\u7684\u7f51\u5173\u670d\u52a1\u3002")),(0,a.yg)("h2",{id:"motan\u670d\u52a1\u63a5\u5165\u7f51\u5173"},"Motan\u670d\u52a1\u63a5\u5165\u7f51\u5173"),(0,a.yg)("p",null,"\u53ef\u4ee5\u53c2\u8003\uff1a ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/apache/shenyu/tree/master/shenyu-examples/shenyu-examples-motan"},"shenyu-examples-motan")),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"\u5728\u7531",(0,a.yg)("inlineCode",{parentName:"li"},"Motan"),"\u6784\u5efa\u7684\u5fae\u670d\u52a1\u4e2d\uff0c\u5f15\u5165\u5982\u4e0b\u4f9d\u8d56\uff1a")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-xml"},"        <dependency>\n            <groupId>org.apache.shenyu</groupId>\n            <artifactId>shenyu-spring-boot-starter-client-motan</artifactId>\n            <version>${shenyu.version}</version>\n        </dependency>\n")),(0,a.yg)("ol",{start:2},(0,a.yg)("li",{parentName:"ol"},"\u5728 ",(0,a.yg)("inlineCode",{parentName:"li"},"application.yaml")," \u914d\u7f6e\u6587\u4ef6\u589e\u52a0\u5982\u4e0b\u914d\u7f6e\uff1a")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-yaml"},"shenyu:\n  register:\n    registerType: http #zookeeper #etcd #nacos #consul\n    serverLists: http://localhost:9095 #localhost:2181 #http://localhost:2379 #localhost:8848\n    props:\n      username: admin\n      password: 123456\n  client:\n    motan:\n      props:\n        contextPath: /motan\n        ipAndPort: motan\n        appName: motan\n        port: 8081\n      package-path: org.apache.shenyu.examples.motan.service\n      basicServiceConfig:\n        exportPort: 8002\nmotan:\n  registry:\n    protocol: zookeeper\n    address: 127.0.0.1:2181\n")),(0,a.yg)("ol",{start:3},(0,a.yg)("li",{parentName:"ol"},"\u5728",(0,a.yg)("inlineCode",{parentName:"li"},"Motan"),"\u670d\u52a1\u63a5\u53e3\u5b9e\u73b0\u7c7b\u7684\u65b9\u6cd5\u4e0a\u52a0\u4e0a\u6ce8\u89e3",(0,a.yg)("inlineCode",{parentName:"li"},"@ShenyuMotanClient"),"\uff0c\u542f\u52a8\u4f60\u7684\u670d\u52a1\u63d0\u4f9b\u8005\uff0c\u6210\u529f\u6ce8\u518c\u540e\uff0c\u5728\u540e\u53f0\u7ba1\u7406\u7cfb\u7edf\u8fdb\u5165",(0,a.yg)("inlineCode",{parentName:"li"},"\u63d2\u4ef6\u5217\u8868 -> rpc proxy -> motan"),"\uff0c\u4f1a\u770b\u5230\u81ea\u52a8\u6ce8\u518c\u7684\u9009\u62e9\u5668\u548c\u89c4\u5219\u4fe1\u606f\u3002")),(0,a.yg)("p",null,"\u793a\u4f8b\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-java"},'@MotanService(export = "demoMotan:8002")\npublic class MotanDemoServiceImpl implements MotanDemoService {\n    @Override\n    @ShenyuMotanClient(path = "/hello")\n    public String hello(String name) {\n        return "hello " + name;\n    }\n}\n')),(0,a.yg)("h2",{id:"\u7528\u6237\u8bf7\u6c42"},"\u7528\u6237\u8bf7\u6c42"),(0,a.yg)("p",null,"\u53ef\u4ee5\u901a\u8fc7 ",(0,a.yg)("inlineCode",{parentName:"p"},"http")," \u7684\u65b9\u5f0f\u6765\u8bf7\u6c42\u4f60\u7684",(0,a.yg)("inlineCode",{parentName:"p"},"motan"),"\u670d\u52a1\u3002",(0,a.yg)("inlineCode",{parentName:"p"},"Apache ShenYu"),"\u7f51\u5173\u9700\u8981\u6709\u4e00\u4e2a\u8def\u7531\u524d\u7f00\uff0c\u8fd9\u4e2a\u8def\u7531\u524d\u7f00\u5c31\u662f\u63a5\u5165\u7f51\u5173\u914d\u7f6e\u7684 ",(0,a.yg)("inlineCode",{parentName:"p"},"contextPath"),"\u3002\u6bd4\u5982\uff1a ",(0,a.yg)("inlineCode",{parentName:"p"},"http://localhost:9195/motan/hello")," \u3002"))}u.isMDXComponent=!0}}]);