"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[50440],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>d});var r=n(96540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),g=o,d=p["".concat(s,".").concat(g)]||p[g]||y[g]||a;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},20332:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(58168),o=(n(96540),n(15680));const a={title:"shenyu client golang 1.0.0",sidebar_position:2,keywords:["release-notes"],description:"release-notes"},i="shenyu client golang 1.0.0",l={unversionedId:"client-golang-1.0.0-release",id:"client-golang-1.0.0-release",isDocsHomePage:!1,title:"shenyu client golang 1.0.0",description:"release-notes",source:"@site/event/client-golang-1.0.0-release.md",sourceDirName:".",slug:"/client-golang-1.0.0-release",permalink:"/event/client-golang-1.0.0-release",editUrl:"https://github.com/apache/shenyu-website/edit/main/event/client-golang-1.0.0-release.md",version:"current",lastUpdatedBy:"WindSearcher",lastUpdatedAt:1729473223,formattedLastUpdatedAt:"10/21/2024",sidebarPosition:2,frontMatter:{title:"shenyu client golang 1.0.0",sidebar_position:2,keywords:["release-notes"],description:"release-notes"}},s=[{value:"New Features",id:"new-features",children:[]}],u={toc:s},c="wrapper";function p(e){let{components:t,...n}=e;return(0,o.yg)(c,(0,r.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"shenyu-client-golang-100"},"shenyu client golang 1.0.0"),(0,o.yg)("h3",{id:"new-features"},"New Features"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Support ShenYu Admin with http type Register to ShenYu."),(0,o.yg)("li",{parentName:"ul"},"Support use Nacos type Register to ShenYu."),(0,o.yg)("li",{parentName:"ul"},"Support use Zookeeper type Register to ShenYu."),(0,o.yg)("li",{parentName:"ul"},"Support use Consul type Register to ShenYu."),(0,o.yg)("li",{parentName:"ul"},"Support use Etcd type Register to ShenYu."),(0,o.yg)("li",{parentName:"ul"},"Add above relation document."),(0,o.yg)("li",{parentName:"ul"},"Add above integrate demo code."),(0,o.yg)("li",{parentName:"ul"},"Add above UT case.")))}p.isMDXComponent=!0}}]);