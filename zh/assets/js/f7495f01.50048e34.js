"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[26327],{95788:(e,n,t)=>{t.d(n,{Iu:()=>c,yg:()=>y});var r=t(11504);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=r.createContext({}),o=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=o(e.components);return r.createElement(p.Provider,{value:n},e.children)},s="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),s=o(t),d=i,y=s["".concat(p,".").concat(d)]||s[d]||g[d]||l;return t?r.createElement(y,a(a({ref:n},c),{},{components:t})):r.createElement(y,a({ref:n},c))}));function y(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,a=new Array(l);a[0]=d;var u={};for(var p in n)hasOwnProperty.call(n,p)&&(u[p]=n[p]);u.originalType=e,u[s]="string"==typeof e?e:i,a[1]=u;for(var o=2;o<l;o++)a[o]=t[o];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},21556:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>a,default:()=>s,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var r=t(45072),i=(t(11504),t(95788));const l={title:"Request\u63d2\u4ef6",keywords:["RequestPlugin"],description:"RequestPlugin"},a=void 0,u={unversionedId:"plugin-center/http-handle/request-plugin",id:"version-2.4.1/plugin-center/http-handle/request-plugin",isDocsHomePage:!1,title:"Request\u63d2\u4ef6",description:"RequestPlugin",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.4.1/plugin-center/http-handle/request-plugin.md",sourceDirName:"plugin-center/http-handle",slug:"/plugin-center/http-handle/request-plugin",permalink:"/zh/docs/2.4.1/plugin-center/http-handle/request-plugin",editUrl:"https://github.com/apache/shenyu-website/edit/main/i18n/zh/docusaurus-plugin-content-docs/version-2.4.1/plugin-center/http-handle/request-plugin.md",version:"2.4.1",frontMatter:{title:"Request\u63d2\u4ef6",keywords:["RequestPlugin"],description:"RequestPlugin"},sidebar:"version-2.4.1/tutorialSidebar",previous:{title:"Redirect\u63d2\u4ef6",permalink:"/zh/docs/2.4.1/plugin-center/http-handle/redirect-plugin"},next:{title:"Rewrite\u63d2\u4ef6",permalink:"/zh/docs/2.4.1/plugin-center/http-handle/rewrite-plugin"}},p=[{value:"\u8bf4\u660e",id:"\u8bf4\u660e",children:[]},{value:"\u63d2\u4ef6\u8bbe\u7f6e",id:"\u63d2\u4ef6\u8bbe\u7f6e",children:[]},{value:"\u573a\u666f",id:"\u573a\u666f",children:[]}],o={toc:p},c="wrapper";function s(e){let{components:n,...t}=e;return(0,i.yg)(c,(0,r.c)({},o,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"\u8bf4\u660e"},"\u8bf4\u660e"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"Apache ShenYu")," \u7f51\u5173\u5728\u5bf9\u76ee\u6807\u670d\u52a1\u8fdb\u884c\u4ee3\u7406\u8c03\u7528\u7684\u65f6\u5019\uff0c\u8fd8\u5bb9\u8bb8\u7528\u6237\u4f7f\u7528 ",(0,i.yg)("inlineCode",{parentName:"li"},"request")," \u63d2\u4ef6\u5bf9\u8bf7\u6c42\u53c2\u6570\u3001\u8bf7\u6c42\u5934\u4ee5\u53ca ",(0,i.yg)("inlineCode",{parentName:"li"},"Cookie")," \u6765\u6dfb\u52a0\u3001\u4fee\u6539\u3001\u79fb\u9664\u8bf7\u6c42\u5934\u3002")),(0,i.yg)("h2",{id:"\u63d2\u4ef6\u8bbe\u7f6e"},"\u63d2\u4ef6\u8bbe\u7f6e"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"\u5728 ",(0,i.yg)("inlineCode",{parentName:"li"},"shenyu-admin")," --\x3e \u57fa\u7840\u914d\u7f6e --\x3e \u63d2\u4ef6\u7ba1\u7406 --\x3e ",(0,i.yg)("inlineCode",{parentName:"li"},"request"),"\uff0c\u8bbe\u7f6e\u4e3a\u5f00\u542f\u3002")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"\u5728\u7f51\u5173\u7684 ",(0,i.yg)("inlineCode",{parentName:"p"},"pom.xml")," \u6587\u4ef6\u4e2d\u6dfb\u52a0 ",(0,i.yg)("inlineCode",{parentName:"p"},"request")," \u7684\u652f\u6301\u3002")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"\u5982\u679c\u7528\u6237\u4e0d\u9700\u8981\uff0c\u53ef\u4ee5\u628a\u63d2\u4ef6\u7981\u7528\u3002"))),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-xml"},"  \x3c!-- apache shenyu request plugin start--\x3e\n<dependency>\n    <groupId>org.apache.shenyu</groupId>\n    <artifactId>shenyu-spring-boot-starter-plugin-request</artifactId>\n    <version>${project.version}</version>\n</dependency>\n        \x3c!-- apache shenyu request plugin end--\x3e\n")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"\u9009\u62e9\u5668\u548c\u89c4\u5219\u8bbe\u7f6e\uff0c\u8bf7\u53c2\u8003\uff1a",(0,i.yg)("a",{parentName:"p",href:"../../user-guide/admin-usage/selector-and-rule"},"\u9009\u62e9\u5668\u548c\u89c4\u5219\u7ba1\u7406"),"\u3002")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"\u53ea\u6709\u5339\u914d\u7684\u8bf7\u6c42\uff0c\u624d\u4f1a\u8fdb\u884c\u81ea\u5b9a\u4e49\u8bf7\u6c42\u53c2\u6570\u4fee\u6539\u529f\u80fd\u3002"))),(0,i.yg)("h2",{id:"\u573a\u666f"},"\u573a\u666f"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"\u987e\u540d\u601d\u4e49\uff0c\u8bf7\u6c42\u63d2\u4ef6\u5c31\u662f\u5bf9 ",(0,i.yg)("inlineCode",{parentName:"li"},"uri")," \u8bf7\u6c42\u53c2\u6570\u8fdb\u884c\u81ea\u5b9a\u4e49\u4fee\u6539\u3002"),(0,i.yg)("li",{parentName:"ul"},"\u5f53\u5339\u914d\u5230\u8bf7\u6c42\u540e\uff0c\u8bbe\u7f6e\u81ea\u5b9a\u4e49\u4fee\u6539\u89c4\u5219\uff0c\u5c31\u4f1a\u6539\u53d8\u4e0b\u6e38\u670d\u52a1\u63a5\u53d7\u5230\u7684\u53c2\u6570\u3002")))}s.isMDXComponent=!0}}]);