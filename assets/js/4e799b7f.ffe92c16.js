"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[47912],{95788:(e,t,n)=>{n.d(t,{Iu:()=>m,yg:()=>u});var r=n(11504);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=r.createContext({}),c=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(a.Provider,{value:t},e.children)},s="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,a=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),s=c(n),d=o,u=s["".concat(a,".").concat(d)]||s[d]||y[d]||l;return n?r.createElement(u,i(i({ref:t},m),{},{components:n})):r.createElement(u,i({ref:t},m))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,i=new Array(l);i[0]=d;var p={};for(var a in t)hasOwnProperty.call(t,a)&&(p[a]=t[a]);p.originalType=e,p[s]="string"==typeof e?e:o,i[1]=p;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},73608:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>p,toc:()=>a});var r=n(45072),o=(n(11504),n(95788));const l={sidebar_position:5,title:"Helm Deployment",keywords:["Helm"],description:"Helm Deployment"},i=void 0,p={unversionedId:"deployment/deployment-helm",id:"version-2.4.1/deployment/deployment-helm",isDocsHomePage:!1,title:"Helm Deployment",description:"Helm Deployment",source:"@site/versioned_docs/version-2.4.1/deployment/deployment-helm.md",sourceDirName:"deployment",slug:"/deployment/deployment-helm",permalink:"/docs/2.4.1/deployment/deployment-helm",editUrl:"https://github.com/apache/shenyu-website/edit/main/versioned_docs/version-2.4.1/deployment/deployment-helm.md",version:"2.4.1",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"Helm Deployment",keywords:["Helm"],description:"Helm Deployment"},sidebar:"version-2.4.1/tutorialSidebar",previous:{title:"K8s Deployment",permalink:"/docs/2.4.1/deployment/deployment-k8s"},next:{title:"Custom Deployment",permalink:"/docs/2.4.1/deployment/deployment-custom"}},a=[],c={toc:a},m="wrapper";function s(e){let{components:t,...n}=e;return(0,o.yg)(m,(0,r.c)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"This article introduces the use of ",(0,o.yg)("inlineCode",{parentName:"p"},"helm")," to deploy the ",(0,o.yg)("inlineCode",{parentName:"p"},"Apache ShenYu")," gateway."))}s.isMDXComponent=!0}}]);