"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[80096],{95788:(e,n,t)=>{t.d(n,{Iu:()=>c,yg:()=>d});var r=t(11504);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):u(u({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},s="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=p(t),y=i,d=s["".concat(l,".").concat(y)]||s[y]||g[y]||a;return t?r.createElement(d,u(u({ref:n},c),{},{components:t})):r.createElement(d,u({ref:n},c))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,u=new Array(a);u[0]=y;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o[s]="string"==typeof e?e:i,u[1]=o;for(var p=2;p<a;p++)u[p]=t[p];return r.createElement.apply(null,u)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},69500:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>u,default:()=>s,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var r=t(45072),i=(t(11504),t(95788));const a={title:"OAuth2\u63d2\u4ef6",keywords:["OAuth2"],description:"OAuth 2\u63d2\u4ef6"},u=void 0,o={unversionedId:"plugin-center/security/oauth2-plugin",id:"version-2.6.0/plugin-center/security/oauth2-plugin",isDocsHomePage:!1,title:"OAuth2\u63d2\u4ef6",description:"OAuth 2\u63d2\u4ef6",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.6.0/plugin-center/security/oauth2-plugin.md",sourceDirName:"plugin-center/security",slug:"/plugin-center/security/oauth2-plugin",permalink:"/zh/docs/2.6.0/plugin-center/security/oauth2-plugin",editUrl:"https://github.com/apache/shenyu-website/edit/main/i18n/zh/docusaurus-plugin-content-docs/version-2.6.0/plugin-center/security/oauth2-plugin.md",version:"2.6.0",frontMatter:{title:"OAuth2\u63d2\u4ef6",keywords:["OAuth2"],description:"OAuth 2\u63d2\u4ef6"},sidebar:"version-2.6.0/tutorialSidebar",previous:{title:"JWT\u63d2\u4ef6",permalink:"/zh/docs/2.6.0/plugin-center/security/jwt-plugin"},next:{title:"Sign\u63d2\u4ef6",permalink:"/zh/docs/2.6.0/plugin-center/security/sign-plugin"}},l=[{value:"\u8bf4\u660e",id:"\u8bf4\u660e",children:[]},{value:"\u63d2\u4ef6\u8bbe\u7f6e",id:"\u63d2\u4ef6\u8bbe\u7f6e",children:[]},{value:"\u63d2\u4ef6\u4f7f\u7528",id:"\u63d2\u4ef6\u4f7f\u7528",children:[]}],p={toc:l},c="wrapper";function s(e){let{components:n,...t}=e;return(0,i.yg)(c,(0,r.c)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"\u8bf4\u660e"},"\u8bf4\u660e"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"OAuth2")," \u63d2\u4ef6\u4f7f\u7528 ",(0,i.yg)("inlineCode",{parentName:"li"},"Webflux OAuth2")," \u5b9e\u73b0\uff0c\u7528\u4e8e\u652f\u6301 ",(0,i.yg)("inlineCode",{parentName:"li"},"OAuth")," \u534f\u8bae\u3002")),(0,i.yg)("h2",{id:"\u63d2\u4ef6\u8bbe\u7f6e"},"\u63d2\u4ef6\u8bbe\u7f6e"),(0,i.yg)("p",null,"\u8bf7\u53c2\u8003\u8fd0\u7ef4\u90e8\u7f72\u7684\u5185\u5bb9\uff0c\u9009\u62e9\u4e00\u79cd\u65b9\u5f0f\u542f\u52a8",(0,i.yg)("inlineCode",{parentName:"p"},"shenyu-admin"),"\u3002\u6bd4\u5982\uff0c\u901a\u8fc7 ",(0,i.yg)("a",{parentName:"p",href:"../../deployment/deployment-local"},"\u672c\u5730\u90e8\u7f72")," \u542f\u52a8",(0,i.yg)("inlineCode",{parentName:"p"},"Apache ShenYu"),"\u540e\u53f0\u7ba1\u7406\u7cfb\u7edf\u3002"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"\u5728 ",(0,i.yg)("inlineCode",{parentName:"p"},"shenyu-admin")," \u57fa\u7840\u914d\u7f6e --\x3e \u63d2\u4ef6\u7ba1\u7406 --\x3e ",(0,i.yg)("inlineCode",{parentName:"p"},"oauth2")," \uff0c\u8bbe\u7f6e\u4e3a\u5f00\u542f\u3002\u5982\u679c\u7528\u6237\u4e0d\u60f3\u4f7f\u7528\u6b64\u529f\u80fd\uff0c\u8bf7\u5728 ",(0,i.yg)("inlineCode",{parentName:"p"},"admin")," \u540e\u53f0\u505c\u7528\u6b64\u63d2\u4ef6\u3002"),(0,i.yg)("img",{src:"/img/shenyu/plugin/oauth2/oauth2_open_zh.jpg",width:"80%",height:"80%"}))),(0,i.yg)("h2",{id:"\u63d2\u4ef6\u4f7f\u7528"},"\u63d2\u4ef6\u4f7f\u7528"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"\u5728\u7f51\u5173\u7684pom\u6587\u4ef6\u4e2d\u6dfb\u52a0",(0,i.yg)("inlineCode",{parentName:"li"},"oauth2"),"\u7684\u652f\u6301")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-xml"},"  \x3c!-- apache shenyu oauth2 plugin start--\x3e\n  <dependency>\n      <groupId>org.apache.shenyu</groupId>\n      <artifactId>shenyu-spring-boot-starter-plugin-oauth2</artifactId>\n      <version>${project.version}</version>\n  </dependency>\n  \x3c!-- apache shenyu oauth2 plugin end--\x3e\n  \n")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"\u5728",(0,i.yg)("inlineCode",{parentName:"li"},"shenyu-bootstrap"),"\u6a21\u5757\u914d\u7f6e",(0,i.yg)("inlineCode",{parentName:"li"},"oauth2"))),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-yml"},"\nspring:\n security:\n   oauth2:\n     client:\n       registration:\n         <\u8fd9\u91cc\u586b\u5165\u4f60\u7684 client-registration-id>:\n           client-id: <\u8fd9\u91cc\u586b\u5165\u4f60\u7684 client-id>\n           client-secret: <\u8fd9\u91cc\u586b\u5165\u4f60\u7684 client-secret>\n           # \u4e0b\u9762\u8fd9\u90e8\u5206\u662f\u6388\u6743\u670d\u52a1\u5668\u7684\u914d\u7f6e\n       provider:\n         <\u8fd9\u91cc\u586b\u5165\u4f60\u7684 client-registration-id>:\n           authorization-uri: <\u8fd9\u91cc\u586b\u5165\u4f60\u7684 authorization-uri>\n           token-uri: <\u8fd9\u91cc\u586b\u5165 access-token-uri>\n           user-info-uri: <\u8fd9\u91cc\u586b\u5165 user-info-uri>\n           jwk-set-uri: <\u8fd9\u91cc\u586b\u5165 jwk-set-uri>\n")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"\u5728\u7f51\u5173\u7684\u914d\u7f6e\u6587\u4ef6\u4e2d\u914d\u7f6e ",(0,i.yg)("inlineCode",{parentName:"li"},"spring.security.oauth2")," \u7684\u76f8\u5173\u914d\u7f6e\uff0c\u8be6\u7ec6\u914d\u7f6e\u8bf4\u660e\u53ef\u53c2\u8003 ",(0,i.yg)("a",{parentName:"li",href:"https://docs.spring.io/spring-security/site/docs/current/reference/html5/#webflux-oauth2"},"Spring Webflux OAuth2")),(0,i.yg)("li",{parentName:"ul"},"\u914d\u7f6e\u9009\u62e9\u5668\u548c\u89c4\u5219\u4f5c\u4e3a\u60a8\u9700\u8981 ",(0,i.yg)("inlineCode",{parentName:"li"},"OAuth2")," \u6388\u6743\u7684\u8bf7\u6c42\u5730\u5740\uff0c\u9ed8\u8ba4\u653e\u884c\u6240\u6709\u8bf7\u6c42\u3002\u5173\u4e8e\u9009\u62e9\u5668\u548c\u89c4\u5219\u914d\u7f6e\u7684\u66f4\u591a\u8bf4\u660e\uff0c\u8bf7\u53c2\u8003\uff1a",(0,i.yg)("a",{parentName:"li",href:"../../user-guide/admin-usage/selector-and-rule"},"\u9009\u62e9\u5668\u548c\u89c4\u5219\u7ba1\u7406"))))}s.isMDXComponent=!0}}]);