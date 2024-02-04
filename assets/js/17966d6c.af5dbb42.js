"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[38040],{95788:(e,n,t)=>{t.d(n,{Iu:()=>c,yg:()=>m});var r=t(11504);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(t),y=o,m=d["".concat(l,".").concat(y)]||d[y]||u[y]||a;return t?r.createElement(m,i(i({ref:n},c),{},{components:t})):r.createElement(m,i({ref:n},c))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=y;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p[d]="string"==typeof e?e:o,i[1]=p;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},96960:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>p,toc:()=>l});var r=t(45072),o=(t(11504),t(95788));const a={sidebar_position:6,title:"Custom Deployment",keywords:["Custom"],description:"Custom Deployment"},i=void 0,p={unversionedId:"deployment/deployment-custom",id:"version-2.4.3/deployment/deployment-custom",isDocsHomePage:!1,title:"Custom Deployment",description:"Custom Deployment",source:"@site/versioned_docs/version-2.4.3/deployment/deployment-custom.md",sourceDirName:"deployment",slug:"/deployment/deployment-custom",permalink:"/docs/2.4.3/deployment/deployment-custom",editUrl:"https://github.com/apache/shenyu-website/edit/main/versioned_docs/version-2.4.3/deployment/deployment-custom.md",version:"2.4.3",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"Custom Deployment",keywords:["Custom"],description:"Custom Deployment"},sidebar:"version-2.4.3/tutorialSidebar",previous:{title:"Helm Deployment",permalink:"/docs/2.4.3/deployment/deployment-helm"},next:{title:"Cluster Deployment",permalink:"/docs/2.4.3/deployment/deployment-cluster"}},l=[{value:"Start Apache ShenYu Admin",id:"start-apache-shenyu-admin",children:[]},{value:"Build your own gateway (recommended)",id:"build-your-own-gateway-recommended",children:[]}],s={toc:l},c="wrapper";function d(e){let{components:n,...t}=e;return(0,o.yg)(c,(0,r.c)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"This article describes how to build your own gateway based on ",(0,o.yg)("inlineCode",{parentName:"p"},"Apache ShenYu"),"."),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"Before you read this document, you need to complete some preparations before deploying Shenyu according to the ",(0,o.yg)("a",{parentName:"p",href:"/docs/2.4.3/deployment/deployment-before"},"Deployment Prerequisites document"),".")),(0,o.yg)("h3",{id:"start-apache-shenyu-admin"},"Start Apache ShenYu Admin"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"docker reference docker deployment Apache ShenYu Admin")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"liunx/windows reference binary packages deployment Apache ShenYu Admin"))),(0,o.yg)("h3",{id:"build-your-own-gateway-recommended"},"Build your own gateway (recommended)"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"first create an empty ",(0,o.yg)("inlineCode",{parentName:"p"},"springboot")," project, you can refer to ",(0,o.yg)("inlineCode",{parentName:"p"},"shenyu-bootstrap"),", or you can create it on ",(0,o.yg)("a",{parentName:"p",href:"https://spring.io/quickstart"},"spring official website"),".")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"introduce the following ",(0,o.yg)("inlineCode",{parentName:"p"},"jar")," package:"))),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-xml"},"<dependencies>\n   <dependency>\n        <groupId>org.springframework.boot</groupId>\n        <artifactId>spring-boot-starter-webflux</artifactId>\n        <version>2.2.2.RELEASE</version>\n   </dependency>\n    <dependency>\n        <groupId>org.springframework.boot</groupId>\n        <artifactId>spring-boot-starter-actuator</artifactId>\n        <version>2.2.2.RELEASE</version>\n   </dependency>\n    <dependency>\n        <groupId>org.apache.shenyu</groupId>\n        <artifactId>shenyu-spring-boot-starter-gateway</artifactId>\n        <version>${current.version}</version>\n   </dependency>\n    <dependency>\n        <groupId>org.apache.shenyu</groupId>\n        <artifactId>shenyu-spring-boot-starter-sync-data-websocket</artifactId>\n        <version>${current.version}</version>\n   </dependency>\n</dependencies>\n")),(0,o.yg)("p",null,"among them, ",(0,o.yg)("inlineCode",{parentName:"p"},"${project.version}")," please use the current latest version."),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"add the following configuration to your ",(0,o.yg)("inlineCode",{parentName:"li"},"application.yaml")," file:")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-yaml"},"spring:\n  main:\n    allow-bean-definition-overriding: true\nmanagement:\n  health:\n    defaults:\n      enabled: false\nshenyu:\n  sync:\n    websocket:\n      urls: ws://localhost:9095/websocket  //set to your shenyu-admin address\n      allowOrigin: ws://localhost:9195\n")))}d.isMDXComponent=!0}}]);