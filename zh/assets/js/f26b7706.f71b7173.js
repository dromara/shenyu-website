"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[99144],{95788:(e,n,a)=>{a.d(n,{Iu:()=>d,yg:()=>c});var r=a(11504);function t(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){t(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function u(e,n){if(null==e)return{};var a,r,t=function(e,n){if(null==e)return{};var a,r,t={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],n.indexOf(a)>=0||(t[a]=e[a]);return t}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var o=r.createContext({}),p=function(e){var n=r.useContext(o),a=n;return e&&(a="function"==typeof e?e(n):s(s({},n),e)),a},d=function(e){var n=p(e.components);return r.createElement(o.Provider,{value:n},e.children)},l="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var a=e.components,t=e.mdxType,i=e.originalType,o=e.parentName,d=u(e,["components","mdxType","originalType","parentName"]),l=p(a),y=t,c=l["".concat(o,".").concat(y)]||l[y]||g[y]||i;return a?r.createElement(c,s(s({ref:n},d),{},{components:a})):r.createElement(c,s({ref:n},d))}));function c(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=a.length,s=new Array(i);s[0]=y;var u={};for(var o in n)hasOwnProperty.call(n,o)&&(u[o]=n[o]);u.originalType=e,u[l]="string"==typeof e?e:t,s[1]=u;for(var p=2;p<i;p++)s[p]=a[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}y.displayName="MDXCreateElement"},50972:(e,n,a)=>{a.r(n),a.d(n,{contentTitle:()=>s,default:()=>l,frontMatter:()=>i,metadata:()=>u,toc:()=>o});var r=a(45072),t=(a(11504),a(95788));const i={title:"\u4f7f\u7528 Shenyu-SDK-Feign",keywords:["Shenyu-Sdk \u4f7f\u7528","feign"],description:"Shenyu-Sdk-Feign \u4f7f\u7528"},s=void 0,u={unversionedId:"user-guide/sdk-usage/shenyu-sdk-feign",id:"user-guide/sdk-usage/shenyu-sdk-feign",isDocsHomePage:!1,title:"\u4f7f\u7528 Shenyu-SDK-Feign",description:"Shenyu-Sdk-Feign \u4f7f\u7528",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/user-guide/sdk-usage/shenyu-sdk-feign.md",sourceDirName:"user-guide/sdk-usage",slug:"/user-guide/sdk-usage/shenyu-sdk-feign",permalink:"/zh/docs/next/user-guide/sdk-usage/shenyu-sdk-feign",editUrl:"https://github.com/apache/shenyu-website/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/user-guide/sdk-usage/shenyu-sdk-feign.md",version:"current",frontMatter:{title:"\u4f7f\u7528 Shenyu-SDK-Feign",keywords:["Shenyu-Sdk \u4f7f\u7528","feign"],description:"Shenyu-Sdk-Feign \u4f7f\u7528"},sidebar:"tutorialSidebar",previous:{title:"\u4f7f\u7528Eureka\u63a5\u5165",permalink:"/zh/docs/next/user-guide/sdk-usage/shenyu-sdk-eureka"},next:{title:"\u4f7f\u7528Nacos\u63a5\u5165",permalink:"/zh/docs/next/user-guide/sdk-usage/shenyu-sdk-nacos"}},o=[{value:"Shenyu sdk-feign",id:"shenyu-sdk-feign",children:[{value:"\u6dfb\u52a0Maven\u4f9d\u8d56",id:"\u6dfb\u52a0maven\u4f9d\u8d56",children:[]},{value:"\u914d\u7f6e\u6587\u4ef6",id:"\u914d\u7f6e\u6587\u4ef6",children:[]}]},{value:"\u672c\u5730\u63a5\u53e3\u914d\u7f6e",id:"\u672c\u5730\u63a5\u53e3\u914d\u7f6e",children:[]}],p={toc:o},d="wrapper";function l(e){let{components:n,...a}=e;return(0,t.yg)(d,(0,r.c)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h2",{id:"shenyu-sdk-feign"},"Shenyu sdk-feign"),(0,t.yg)("blockquote",null,(0,t.yg)("p",{parentName:"blockquote"},"\u96c6\u6210",(0,t.yg)("inlineCode",{parentName:"p"},"openFeign"),"\u6765\u5b9e\u73b0\u58f0\u660e\u5f0fSDK\u8c03\u7528\u7f51\u5173API.\n\u4e0e",(0,t.yg)("inlineCode",{parentName:"p"},"shenyu-sdk"),"\u4e00\u6837, ",(0,t.yg)("inlineCode",{parentName:"p"},"shenyu-sdk-feign"),"\u662f\u53e6\u5916\u4e00\u4e2a\u9009\u9879;\n\u8be6\u60c5\u8bf7\u770b :"),(0,t.yg)("ul",{parentName:"blockquote"},(0,t.yg)("li",{parentName:"ul"},"\u8bf7\u53c2\u7167: ",(0,t.yg)("a",{parentName:"li",href:"../../user-guide/sdk-usage/shenyu-sdk-consul"},"shenyu-sdk-consul")),(0,t.yg)("li",{parentName:"ul"},"\u8bf7\u53c2\u7167: ",(0,t.yg)("a",{parentName:"li",href:"../../user-guide/sdk-usage/shenyu-sdk-etcd"},"shenyu-sdk-etcd")),(0,t.yg)("li",{parentName:"ul"},"\u8bf7\u53c2\u7167: ",(0,t.yg)("a",{parentName:"li",href:"../../user-guide/sdk-usage/shenyu-sdk-eureka"},"shenyu-sdk-eureka")),(0,t.yg)("li",{parentName:"ul"},"\u8bf7\u53c2\u7167: ",(0,t.yg)("a",{parentName:"li",href:"../../user-guide/sdk-usage/shenyu-sdk-nacos"},"shenyu-sdk-nacos")),(0,t.yg)("li",{parentName:"ul"},"\u8bf7\u53c2\u7167: ",(0,t.yg)("a",{parentName:"li",href:"../../user-guide/sdk-usage/shenyu-sdk-zookeeper"},"shenyu-sdk-zookeeper")))),(0,t.yg)("h3",{id:"\u6dfb\u52a0maven\u4f9d\u8d56"},"\u6dfb\u52a0Maven\u4f9d\u8d56"),(0,t.yg)("p",null,"\u5728\u5ba2\u6237\u7aef\u5e94\u7528\u7684",(0,t.yg)("inlineCode",{parentName:"p"},"pom.xml"),"\u6587\u4ef6\u4e2d\u5f15\u5165\u5982\u4e0b\u4f9d\u8d56(\u4e0e",(0,t.yg)("inlineCode",{parentName:"p"},"FeignClient"),"\u517c\u5bb9)."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-xml"},"<dependencies>\n    <dependency>\n        <groupId>org.springframework.cloud</groupId>\n        <artifactId>spring-cloud-starter-openfeign</artifactId>\n        <version>${spring-cloud.version}</version>\n    </dependency>\n    \n    <dependency>\n        <groupId>org.apache.shenyu</groupId>\n        <artifactId>shenyu-spring-boot-starter-sdk-feign</artifactId>\n        <version>2.6.1-SNAPSHOT</version>\n    </dependency>\n</dependencies>\n")),(0,t.yg)("h3",{id:"\u914d\u7f6e\u6587\u4ef6"},"\u914d\u7f6e\u6587\u4ef6"),(0,t.yg)("p",null,"\u5728\u5ba2\u6237\u7aef\u5e94\u7528\u7684",(0,t.yg)("inlineCode",{parentName:"p"},"yml"),"\u914d\u7f6e\u6587\u4ef6\u4e2d\u6dfb\u52a0\u4ee5\u4e0b\u914d\u7f6e."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-yaml"},"shenyu:\n  sdk:\n    enabled: true\n    register-type: consul\n    server-lists: localhost\n    props:\n      algorithm: roundRobin\n      scheme: http\n\n# \u5982\u679c\u4e0d\u4f7f\u7528`openFeign`\u548c`springCloud-loadBalance`\uff0c\u5219\u5fc5\u987b\u542f\u7528\u5916\u90e8\u5ba2\u6237\u7aef\u9009\u9879\u3002.\nfeign:\n  client:\n    httpclient:\n      enabled: true\n      \n# registerType : \u670d\u52a1\u6ce8\u518c\u7c7b\u578b\uff0c\u586b\u5199 etcd\n# serverList: \u4e3aetcd\u6ce8\u518c\u7c7b\u578b\u65f6\uff0c\u586b\u5199etcd\u5730\u5740\uff0c\u591a\u4e2a\u5730\u5740\u7528\u82f1\u6587\u9017\u53f7\u5206\u9694\n\n# algorithm: \u8d1f\u8f7d\u5747\u8861\u7b97\u6cd5.\n# scheme: \u8bf7\u6c42\u534f\u8bae.\n\n")),(0,t.yg)("h2",{id:"\u672c\u5730\u63a5\u53e3\u914d\u7f6e"},"\u672c\u5730\u63a5\u53e3\u914d\u7f6e"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"\u5728\u9879\u76ee\u542f\u52a8\u7c7b\u4e0a\u6807\u6ce8",(0,t.yg)("inlineCode",{parentName:"p"},'@EnableShenyuClients(basePackages = "org.apache.shenyu.examples.sdk.feign.api")'),", \u5176\u4e2d",(0,t.yg)("inlineCode",{parentName:"p"},"basePackages"),"\u4e2d\u7ef4\u62a4\u7684\u662fShenyu-Sdk\u5bf9\u5e94\u7ef4\u62a4\u7f51\u5173API\u63a5\u53e3\u7684\u6240\u5728\u5305\u4f4d\u7f6e.")),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"\u521b\u5efainterface\u5e76\u4f7f\u7528",(0,t.yg)("inlineCode",{parentName:"p"},'@ShenyuClient(name = "xxx", contextId = "ShenyuSdkApiName")'),"\u6ce8\u89e3\u6807\u6ce8, \u5176\u4e2d",(0,t.yg)("inlineCode",{parentName:"p"},"name"),"\u8868\u793a\u7f51\u5173\u670d\u52a1\u540d.\u5047\u5982\u4f60\u9700\u8981\u5b9a\u4e49\u591a\u4e2abean\u6765\u7ef4\u62a4\u7f51\u5173\u7684API, \u53ef\u4ee5\u4f7f\u7528",(0,t.yg)("inlineCode",{parentName:"p"},"contextId"),"\u4f5c\u4e3a\u5bf9\u5e94\u7684bean\u522b\u540d.")),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"\u5728\u5b9a\u4e49\u63a5\u53e3\u4e2d\u6dfb\u52a0\u6240\u8981\u6620\u5c04shenyu\u7f51\u5173\u4e2d\u7684\u63a5\u53e3\u65b9\u6cd5\uff0c \u5176\u4e2d",(0,t.yg)("inlineCode",{parentName:"p"},"@xxMapping"),"\u4e2d\u7684",(0,t.yg)("inlineCode",{parentName:"p"},"value"),"\u5bf9\u5e94\u503c\u662f\u7f51\u5173\u4e2d\u5bf9\u5e94\u8bf7\u6c42\u7684\u8def\u5f84\u3002"))),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,t.yg)("p",null,"\u9879\u76ee\u542f\u52a8\u7c7b"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-java"},'import org.apache.shenyu.sdk.feign.EnableShenyuClients;\n\n@SpringBootApplication\n@EnableShenyuClients(basePackages = "org.apache.shenyu.examples.sdk.feign.api")\npublic class ShenyuSdkHttpExampleApplication {\n\n    /**\n     * main.\n     *\n     * @param args args\n     */\n    public static void main(final String[] args) {\n        SpringApplication.run(ShenyuSdkHttpExampleApplication.class, args);\n    }\n}\n')),(0,t.yg)("p",null,"\u7f51\u5173API\u63a5\u53e3"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-java"},'import org.apache.shenyu.sdk.feign.ShenyuClient;\n\n@ShenyuClient(name = "shenyu-gateway", contextId = "ShenyuSdkApiName", path = "/feign/shenyu/client")\npublic interface ShenyuFeignClientApi {\n\n    /**\n     * findById.\n     * test Get.\n     *\n     * @param id id\n     * @return SdkTestDto\n     */\n    @GetMapping("/findById")\n    SdkTestDto findById(@RequestParam("id") String id);\n\n    /**\n     * annoTest.\n     *\n     * @param cookie     cookie\n     * @param header     header\n     * @param id         id\n     * @param requestDto requestDto\n     * @return sdkTestDto\n     */\n    @PostMapping("/{id}/anno")\n    SdkTestDto annoTest(@CookieValue("cookie") String cookie, @RequestHeader("header") String header, @PathVariable("id") String id, @RequestBody SdkTestDto requestDto);\n\n}\n')),(0,t.yg)("p",null,"\u66f4\u591a\u53ef\u53c2\u8003\u793a\u4f8b\u5de5\u7a0b ",(0,t.yg)("a",{parentName:"p",href:"https://github.com/apache/shenyu/tree/master/shenyu-examples/shenyu-examples-sdk/shenyu-examples-sdk-feign"},"shenyu-examples-sdk-feign")))}l.isMDXComponent=!0}}]);