"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[85336],{95788:(e,n,t)=>{t.d(n,{Iu:()=>s,yg:()=>m});var r=t(11504);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=c(t),y=o,m=d["".concat(l,".").concat(y)]||d[y]||u[y]||a;return t?r.createElement(m,i(i({ref:n},s),{},{components:t})):r.createElement(m,i({ref:n},s))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=y;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p[d]="string"==typeof e?e:o,i[1]=p;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},89908:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>p,toc:()=>l});var r=t(45072),o=(t(11504),t(95788));const a={sidebar_position:6,title:"\u81ea\u5b9a\u4e49\u90e8\u7f72",description:"\u81ea\u5b9a\u4e49\u90e8\u7f72"},i=void 0,p={unversionedId:"deployment/deployment-custom",id:"version-2.4.1/deployment/deployment-custom",isDocsHomePage:!1,title:"\u81ea\u5b9a\u4e49\u90e8\u7f72",description:"\u81ea\u5b9a\u4e49\u90e8\u7f72",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.4.1/deployment/deployment-custom.md",sourceDirName:"deployment",slug:"/deployment/deployment-custom",permalink:"/zh/docs/2.4.1/deployment/deployment-custom",editUrl:"https://github.com/apache/shenyu-website/edit/main/i18n/zh/docusaurus-plugin-content-docs/version-2.4.1/deployment/deployment-custom.md",version:"2.4.1",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"\u81ea\u5b9a\u4e49\u90e8\u7f72",description:"\u81ea\u5b9a\u4e49\u90e8\u7f72"},sidebar:"version-2.4.1/tutorialSidebar",previous:{title:"Helm\u90e8\u7f72",permalink:"/zh/docs/2.4.1/deployment/deployment-helm"},next:{title:"\u96c6\u7fa4\u90e8\u7f72",permalink:"/zh/docs/2.4.1/deployment/deployment-cluster"}},l=[{value:"\u542f\u52a8Apache ShenYu Admin",id:"\u542f\u52a8apache-shenyu-admin",children:[]},{value:"\u642d\u5efa\u81ea\u5df1\u7684\u7f51\u5173\uff08\u63a8\u8350\uff09",id:"\u642d\u5efa\u81ea\u5df1\u7684\u7f51\u5173\u63a8\u8350",children:[]}],c={toc:l},s="wrapper";function d(e){let{components:n,...t}=e;return(0,o.yg)(s,(0,r.c)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u57fa\u4e8e ",(0,o.yg)("inlineCode",{parentName:"p"},"Apache ShenYu")," \u642d\u5efa\u5c5e\u4e8e\u4f60\u81ea\u5df1\u7684\u7f51\u5173\u3002"),(0,o.yg)("h3",{id:"\u542f\u52a8apache-shenyu-admin"},"\u542f\u52a8Apache ShenYu Admin"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"docker \u7528\u6237\u53c2\u8003 docker\u90e8\u7f72 Apache ShenYu Admin")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"liunx/windows \u7528\u6237\u53c2\u8003\u4e8c\u8fdb\u5236\u5305\u90e8\u7f72 Apache ShenYu Admin"))),(0,o.yg)("h3",{id:"\u642d\u5efa\u81ea\u5df1\u7684\u7f51\u5173\u63a8\u8350"},"\u642d\u5efa\u81ea\u5df1\u7684\u7f51\u5173\uff08\u63a8\u8350\uff09"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"\u9996\u5148\u65b0\u5efa\u4e00\u4e2a\u7a7a\u7684 ",(0,o.yg)("inlineCode",{parentName:"p"},"springboot")," \u9879\u76ee\uff0c\u53ef\u4ee5\u53c2\u8003 ",(0,o.yg)("inlineCode",{parentName:"p"},"shenyu-bootstrap"),"\uff0c \u4e5f\u53ef\u4ee5\u5728 ",(0,o.yg)("a",{parentName:"p",href:"https://spring.io/quickstart"},"spring \u5b98\u7f51")," \u521b\u5efa\u3002")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"\u5f15\u5165\u5982\u4e0b",(0,o.yg)("inlineCode",{parentName:"p"},"jar"),"\u5305\uff1a"))),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-xml"},"<dependencies>\n    <dependency>\n        <groupId>org.springframework.boot</groupId>\n        <artifactId>spring-boot-starter-webflux</artifactId>\n        <version>2.2.2.RELEASE</version>\n    </dependency>\n    <dependency>\n        <groupId>org.springframework.boot</groupId>\n        <artifactId>spring-boot-starter-actuator</artifactId>\n        <version>2.2.2.RELEASE</version>\n    </dependency>\n    <dependency>\n        <groupId>org.apache.shenyu</groupId>\n        <artifactId>shenyu-spring-boot-starter-gateway</artifactId>\n        <version>2.4.1</version>\n    </dependency>\n    <dependency>\n        <groupId>org.apache.shenyu</groupId>\n        <artifactId>shenyu-spring-boot-starter-sync-data-websocket</artifactId>\n        <version>2.4.1</version>\n    </dependency>\n</dependencies>\n")),(0,o.yg)("p",null,"\u5176\u4e2d\uff0c ",(0,o.yg)("inlineCode",{parentName:"p"},"${project.version}")," \u8bf7\u4f7f\u7528\u5f53\u524d\u6700\u65b0\u7248\u672c\u3002"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"\u5728\u4f60\u7684 ",(0,o.yg)("inlineCode",{parentName:"li"},"application.yaml")," \u6587\u4ef6\u4e2d\u52a0\u4e0a\u5982\u4e0b\u914d\u7f6e\uff1a")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-yaml"},"spring:\n  main:\n    allow-bean-definition-overriding: true\nmanagement:\n  health:\n    defaults:\n      enabled: false\nshenyu:\n  sync:\n    websocket:\n      urls: ws://localhost:9095/websocket  //\u8bbe\u7f6e\u6210\u4f60\u7684 shenyu-admin \u5730\u5740\n      allowOrigin: ws://localhost:9195 \n")))}d.isMDXComponent=!0}}]);