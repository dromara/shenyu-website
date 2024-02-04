"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[42412],{95788:(e,n,t)=>{t.d(n,{Iu:()=>p,yg:()=>y});var r=t(11504);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(t),g=o,y=u["".concat(c,".").concat(g)]||u[g]||d[g]||i;return t?r.createElement(y,a(a({ref:n},p),{},{components:t})):r.createElement(y,a({ref:n},p))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=g;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},4548:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=t(45072),o=(t(11504),t(95788));const i={title:"Register Center Instance Config",keywords:["register center"],description:"Register Instance"},a=void 0,s={unversionedId:"user-guide/property-config/register-center-instance",id:"version-2.6.1/user-guide/property-config/register-center-instance",isDocsHomePage:!1,title:"Register Center Instance Config",description:"Register Instance",source:"@site/versioned_docs/version-2.6.1/user-guide/property-config/register-center-instance.md",sourceDirName:"user-guide/property-config",slug:"/user-guide/property-config/register-center-instance",permalink:"/docs/user-guide/property-config/register-center-instance",editUrl:"https://github.com/apache/shenyu-website/edit/main/versioned_docs/version-2.6.1/user-guide/property-config/register-center-instance.md",version:"2.6.1",frontMatter:{title:"Register Center Instance Config",keywords:["register center"],description:"Register Instance"},sidebar:"version-2.6.0/tutorialSidebar",previous:{title:"Application Client Access Config",permalink:"/docs/user-guide/property-config/register-center-access"},next:{title:"Data Synchronization Config",permalink:"/docs/user-guide/property-config/use-data-sync"}},c=[{value:"Add Maven dependency",id:"add-maven-dependency",children:[]},{value:"Use zookeeper",id:"use-zookeeper",children:[]},{value:"Use etcd",id:"use-etcd",children:[]},{value:"Use apollo",id:"use-apollo",children:[]}],l={toc:c},p="wrapper";function u(e){let{components:n,...t}=e;return(0,o.yg)(p,(0,r.c)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"This document will introduce how to register the gateway instance to the registry. The ",(0,o.yg)("inlineCode",{parentName:"p"},"Apache ShenYu")," gateway currently supports registration to ",(0,o.yg)("inlineCode",{parentName:"p"},"zookeeper")," , ",(0,o.yg)("inlineCode",{parentName:"p"},"etcd")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"consul"),"."),(0,o.yg)("h3",{id:"add-maven-dependency"},"Add Maven dependency"),(0,o.yg)("p",null,"First, introduce the following dependencies in the gateway's ",(0,o.yg)("inlineCode",{parentName:"p"},"pom.xml")," file."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-xml"},"\x3c!--shenyu registry start--\x3e\n<dependency>\n    <groupId>org.apache.shenyu</groupId>\n    <artifactId>shenyu-spring-boot-starter-registry</artifactId>\n    <version>${project.version}</version>\n</dependency>\n\x3c!--shenyu registry end--\x3e\n")),(0,o.yg)("h3",{id:"use-zookeeper"},"Use zookeeper"),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"Please pay attention! From ShenYu 2.5.0, ShenYu will no longer support Zookeeper 3.4.x or below version. If you're already using Zookeeper, You need to use Zookeeper with a higher version and initialize the data.")),(0,o.yg)("p",null,"Add the following configuration to the gateway's ",(0,o.yg)("inlineCode",{parentName:"p"},"yml")," file:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-yaml"},"registry:\n    enabled: true\n    registerType: zookeeper\n    serverLists: localhost:2181 #config with your zk address, used by the cluster environment, separated with (,).\n    props:\n      sessionTimeout: 3000 #Optional, default 3000\n      connectionTimeout: 3000 #Optional, default 3000\n")),(0,o.yg)("h3",{id:"use-etcd"},"Use etcd"),(0,o.yg)("p",null,"Add the following configuration to the gateway's ",(0,o.yg)("inlineCode",{parentName:"p"},"yml")," file:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-yaml"},"registry:\n    enabled: true\n    registerType: etcd\n    serverLists: http://localhost:2379 #config with your etcd address, used by the cluster environment, separated with (,).\n    props:\n      etcdTimeout: 3000 #Optional, default 3000\n      etcdTTL: 5 #Optional, default 5\n")),(0,o.yg)("h3",{id:"use-apollo"},"Use apollo"),(0,o.yg)("p",null,"Add the following configuration to the gateway's ",(0,o.yg)("inlineCode",{parentName:"p"},"yml")," file:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-yaml"},"registry:\n    enabled: true\n    registerType: apollo\n    serverLists: http://localhost:8080\n    props:\n      env: dev\n      appId: shenyu\n      namespace: application\n      clusterName: default\n      token: 0fff5645fc74ee5e0d63a6389433c8c8afc0beea31eed0279ecc1c8961d12da9\n      portalUrl: http://localhost:8070\n")),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"After the configuration is complete, start the gateway and it will successfully register to the corresponding registration center.")))}u.isMDXComponent=!0}}]);