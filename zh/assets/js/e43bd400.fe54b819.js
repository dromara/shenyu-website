"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[89308],{95788:(e,n,r)=>{r.d(n,{Iu:()=>p,yg:()=>d});var t=r(11504);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=t.createContext({}),s=function(e){var n=t.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},p=function(e){var n=s(e.components);return t.createElement(u.Provider,{value:n},e.children)},c="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},g=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,l=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=s(r),g=i,d=c["".concat(u,".").concat(g)]||c[g]||y[g]||l;return r?t.createElement(d,a(a({ref:n},p),{},{components:r})):t.createElement(d,a({ref:n},p))}));function d(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=r.length,a=new Array(l);a[0]=g;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o[c]="string"==typeof e?e:i,a[1]=o;for(var s=2;s<l;s++)a[s]=r[s];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}g.displayName="MDXCreateElement"},39860:(e,n,r)=>{r.r(n),r.d(n,{contentTitle:()=>a,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var t=r(45072),i=(r(11504),r(95788));const l={sidebar_position:6,title:"Hystrix\u63d2\u4ef6",keywords:["soul"],description:"hystrix\u63d2\u4ef6"},a=void 0,o={unversionedId:"plugins/hystrix-plugin",id:"version-2.3.0-Legacy/plugins/hystrix-plugin",isDocsHomePage:!1,title:"Hystrix\u63d2\u4ef6",description:"hystrix\u63d2\u4ef6",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.3.0-Legacy/plugins/hystrix-plugin.md",sourceDirName:"plugins",slug:"/plugins/hystrix-plugin",permalink:"/zh/docs/2.3.0-Legacy/plugins/hystrix-plugin",editUrl:"https://github.com/apache/shenyu-website/edit/main/i18n/zh/docusaurus-plugin-content-docs/version-2.3.0-Legacy/plugins/hystrix-plugin.md",version:"2.3.0-Legacy",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"Hystrix\u63d2\u4ef6",keywords:["soul"],description:"hystrix\u63d2\u4ef6"},sidebar:"version-2.3.0-Legacy/tutorialSidebar",previous:{title:"\u9650\u6d41\u63d2\u4ef6",permalink:"/zh/docs/2.3.0-Legacy/plugins/rate-limiter-plugin"},next:{title:"Sentinel\u63d2\u4ef6",permalink:"/zh/docs/2.3.0-Legacy/plugins/sentinel-plugin"}},u=[{value:"\u8bf4\u660e",id:"\u8bf4\u660e",children:[]},{value:"\u63d2\u4ef6\u8bbe\u7f6e",id:"\u63d2\u4ef6\u8bbe\u7f6e",children:[]},{value:"\u63d2\u4ef6\u4f7f\u7528",id:"\u63d2\u4ef6\u4f7f\u7528",children:[]}],s={toc:u},p="wrapper";function c(e){let{components:n,...r}=e;return(0,i.yg)(p,(0,t.c)({},s,r,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"\u8bf4\u660e"},"\u8bf4\u660e"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"hystrix\u63d2\u4ef6\u662f\u7f51\u5173\u7528\u6765\u5bf9\u6d41\u91cf\u8fdb\u884c\u7194\u65ad\u7684\u6838\u5fc3\u5b9e\u73b0\u3002"),(0,i.yg)("li",{parentName:"ul"},"\u4f7f\u7528\u4fe1\u53f7\u91cf\u7684\u65b9\u5f0f\u6765\u5904\u7406\u8bf7\u6c42\u3002")),(0,i.yg)("h2",{id:"\u63d2\u4ef6\u8bbe\u7f6e"},"\u63d2\u4ef6\u8bbe\u7f6e"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"\u5728 ",(0,i.yg)("inlineCode",{parentName:"li"},"soul-admin")," --\x3e  \u63d2\u4ef6\u7ba1\u7406 --\x3e ",(0,i.yg)("inlineCode",{parentName:"li"},"hystrix"),"\uff0c\u8bbe\u7f6e\u4e3a\u5f00\u542f\u3002"),(0,i.yg)("li",{parentName:"ul"},"\u5982\u679c\u7528\u6237\u4e0d\u4f7f\u7528\uff0c\u5219\u5728 ",(0,i.yg)("inlineCode",{parentName:"li"},"soul-admin")," \u540e\u53f0\u628a\u6b64\u63d2\u4ef6\u505c\u7528\u3002")),(0,i.yg)("h2",{id:"\u63d2\u4ef6\u4f7f\u7528"},"\u63d2\u4ef6\u4f7f\u7528"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"\u5728\u7f51\u5173\u7684 pom.xml \u6587\u4ef6\u4e2d\u6dfb\u52a0 hystrix\u7684\u652f\u6301\u3002")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-xml"},"  \x3c!-- soul hystrix plugin start--\x3e\n  <dependency>\n      <groupId>org.dromara</groupId>\n      <artifactId>soul-spring-boot-starter-plugin-hystrix</artifactId>\n       <version>${last.version}</version>\n  </dependency>\n  \x3c!-- soul hystrix plugin end--\x3e\n")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"\u9009\u62e9\u5668\u548c\u89c4\u5219\uff0c\u8bf7\u8be6\u7ec6\u770b\uff1a",(0,i.yg)("a",{parentName:"p",href:"../admin/selector-and-rule"},"\u9009\u62e9\u5668\u89c4\u5219"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Hystrix\u5904\u7406\u8be6\u89e3\uff1a"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"\u8df3\u95f8\u6700\u5c0f\u8bf7\u6c42\u6570\u91cf\uff1a\u6700\u5c0f\u7684\u8bf7\u6c42\u91cf\uff0c\u81f3\u5c11\u8981\u8fbe\u5230\u8fd9\u4e2a\u91cf\u624d\u4f1a\u89e6\u53d1\u7194\u65ad"),(0,i.yg)("li",{parentName:"ul"},"\u9519\u8bef\u767e\u5206\u6bd4\u9600\u503c\uff1a \u8fd9\u6bb5\u65f6\u95f4\u5185\uff0c\u53d1\u751f\u5f02\u5e38\u7684\u767e\u5206\u6bd4\u3002"),(0,i.yg)("li",{parentName:"ul"},"\u6700\u5927\u5e76\u53d1\u91cf\uff1a \u6700\u5927\u7684\u5e76\u53d1\u91cf"),(0,i.yg)("li",{parentName:"ul"},"\u8df3\u95f8\u4f11\u7720\u65f6\u95f4(ms)\uff1a\u7194\u65ad\u4ee5\u540e\u6062\u590d\u7684\u65f6\u95f4\u3002"),(0,i.yg)("li",{parentName:"ul"},"\u5206\u7ec4Key\uff1a \u4e00\u822c\u8bbe\u7f6e\u4e3a:contextPath"),(0,i.yg)("li",{parentName:"ul"},"\u547d\u4ee4Key: \u4e00\u822c\u8bbe\u7f6e\u4e3a\u5177\u4f53\u7684 \u8def\u5f84\u63a5\u53e3\u3002"),(0,i.yg)("li",{parentName:"ul"},"\u5931\u8d25\u964d\u7ea7URL: \u9ed8\u8ba4\u4e3a /fallback/hystrix\u3002")))))}c.isMDXComponent=!0}}]);