"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[38808],{95788:(e,n,r)=>{r.d(n,{Iu:()=>s,yg:()=>p});var t=r(11504);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=t.createContext({}),g=function(e){var n=t.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},s=function(e){var n=g(e.components);return t.createElement(u.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=g(r),d=i,p=c["".concat(u,".").concat(d)]||c[d]||m[d]||a;return r?t.createElement(p,o(o({ref:n},s),{},{components:r})):t.createElement(p,o({ref:n},s))}));function p(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l[c]="string"==typeof e?e:i,o[1]=l;for(var g=2;g<a;g++)o[g]=r[g];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},56488:(e,n,r)=>{r.r(n),r.d(n,{contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var t=r(45072),i=(r(11504),r(95788));const a={title:"\u7528\u6237\u8d44\u6e90\u7ba1\u7406",keywords:["\u7528\u6237 \u89d2\u8272"],description:"\u7528\u6237\u89d2\u8272\u7ba1\u7406"},o=void 0,l={unversionedId:"user-guide/admin-usage/role-management",id:"version-2.6.0/user-guide/admin-usage/role-management",isDocsHomePage:!1,title:"\u7528\u6237\u8d44\u6e90\u7ba1\u7406",description:"\u7528\u6237\u89d2\u8272\u7ba1\u7406",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.6.0/user-guide/admin-usage/role-management.md",sourceDirName:"user-guide/admin-usage",slug:"/user-guide/admin-usage/role-management",permalink:"/zh/docs/2.6.0/user-guide/admin-usage/role-management",editUrl:"https://github.com/apache/shenyu-website/edit/main/i18n/zh/docusaurus-plugin-content-docs/version-2.6.0/user-guide/admin-usage/role-management.md",version:"2.6.0",frontMatter:{title:"\u7528\u6237\u8d44\u6e90\u7ba1\u7406",keywords:["\u7528\u6237 \u89d2\u8272"],description:"\u7528\u6237\u89d2\u8272\u7ba1\u7406"},sidebar:"version-2.6.0/tutorialSidebar",previous:{title:"\u63d2\u4ef6\u914d\u7f6e",permalink:"/zh/docs/2.6.0/user-guide/admin-usage/plugin-handle-explanation"},next:{title:"\u9009\u62e9\u5668\u548c\u89c4\u5219\u7ba1\u7406",permalink:"/zh/docs/2.6.0/user-guide/admin-usage/selector-and-rule"}},u=[{value:"\u8d44\u6e90\u7ba1\u7406",id:"\u8d44\u6e90\u7ba1\u7406",children:[]},{value:"\u89d2\u8272\u7ba1\u7406",id:"\u89d2\u8272\u7ba1\u7406",children:[]},{value:"\u7528\u6237\u7ba1\u7406",id:"\u7528\u6237\u7ba1\u7406",children:[]}],g={toc:u},s="wrapper";function c(e){let{components:n,...r}=e;return(0,i.yg)(s,(0,t.c)({},g,r,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"\u672c\u7bc7\u4e3b\u8981\u662f\u8bb2\u8ff0 ",(0,i.yg)("inlineCode",{parentName:"p"},"admin")," \u63a7\u5236\u53f0\u901a\u8fc7\u7528\u6237\u5173\u8054\u7684\u89d2\u8272\uff0c\u89d2\u8272\u8d4b\u4e88\u83dc\u5355\u548c\u6309\u94ae\u7b49\u8d44\u6e90\u7684\u6743\u9650\u6765\u7ba1\u7406 ",(0,i.yg)("inlineCode",{parentName:"p"},"admin")," \u7684\u64cd\u4f5c\u6743\u9650\u3002"),(0,i.yg)("img",{src:"/img/shenyu/basicConfig/roleManagement/role-profile.jpg",width:"80%",height:"50%"}),(0,i.yg)("h2",{id:"\u8d44\u6e90\u7ba1\u7406"},"\u8d44\u6e90\u7ba1\u7406"),(0,i.yg)("p",null,"\u5728\u83dc\u5355\u680f\u4e2d \u201d\u7cfb\u7edf\u7ba1\u7406 >> \u8d44\u6e90\u7ba1\u7406\u201c \u4e2d\u589e\u52a0\u83dc\u5355\u548c\u6309\u94ae\u3002"),(0,i.yg)("img",{src:"/img/shenyu/basicConfig/roleManagement/resource_dashboard.jpg",width:"80%",height:"50%"}),(0,i.yg)("p",null,"admin \u7528\u6237\u663e\u793a\u4e86 shenyu \u7f51\u5173\u6240\u6709\u7684\u83dc\u5355\u548c\u6309\u94ae\u3002\u5982\u679c\u9700\u8981\u81ea\u5b9a\u4e49\u589e\u52a0\u548c\u5220\u9664\uff0c\u5148\u589e\u52a0\u83dc\u5355\uff0c\u5728\u76f8\u5e94\u7684\u83dc\u5355\u4e0b\uff0c\u589e\u52a0\u6309\u94ae\u3002\u901a\u8fc7\u70b9\u51fb\u83dc\u5355\u4e2d\u53f3\u4fa7\u7684\u7f16\u8f91\u5c0f\u56fe\u6807\u8fdb\u884c\u83dc\u5355\u7684\u7f16\u8f91"),(0,i.yg)("h2",{id:"\u89d2\u8272\u7ba1\u7406"},"\u89d2\u8272\u7ba1\u7406"),(0,i.yg)("p",null,"\u901a\u8fc7\u83dc\u5355\u680f \u201d\u7cfb\u7edf\u7ba1\u7406 >> \u89d2\u8272\u7ba1\u7406\u201c \u6765\u5173\u8054\u89d2\u8272\u548c\u8d44\u6e90\u7684\u6743\u9650\u3002 \u9ed8\u8ba4\u4f1a\u751f\u6210\u4e24\u4e2a\u89d2\u8272\uff0c\u4e00\u4e2a\u8d85\u7ea7\u7ba1\u7406\u5458\uff0c\u4e00\u4e2a\u666e\u901a\u7528\u6237\u3002\u8d85\u7ea7\u7ba1\u7406\u5458\u4e3a admin \u7528\u6237\uff0c\u4e0d\u53ef\u66f4\u6539\uff0c\u666e\u901a\u7528\u6237\u7684\u89d2\u8272\u53ef\u4ee5\u66f4\u6539\u5176\u8d44\u6e90\u5c5e\u6027\u3002 \u901a\u8fc7\u7f16\u8f91\u76f8\u5e94\u7684\u89d2\u8272\uff0c\u8d4b\u4e88\u89d2\u8272\u76f8\u5e94\u7684\u83dc\u5355\u548c\u6309\u94ae\u6743\u9650\u3002"),(0,i.yg)("img",{src:"/img/shenyu/basicConfig/roleManagement/role_management.jpg",width:"80%",height:"50%"}),(0,i.yg)("h2",{id:"\u7528\u6237\u7ba1\u7406"},"\u7528\u6237\u7ba1\u7406"),(0,i.yg)("p",null,"\u901a\u8fc7\u83dc\u5355\u680f \u201d\u7cfb\u7edf\u7ba1\u7406 >> \u7528\u6237\u7ba1\u7406\u201c \u6765\u7ba1\u7406\u767b\u5f55\u5230 admin \u7684\u7528\u6237\u3002\u9ed8\u8ba4\u4e3a admin \u7528\u6237\uff0c\b\u5b83\u62e5\u6709\u6240\u6709\u83dc\u5355\u6743\u9650\u548c\u6570\u636e\u6743\u9650\uff0c\u4e0d\u53ef\u66f4\u6539\uff0c \u4e0d\u53ef\u5220\u9664\uff0c \u53ea\u80fd\u4fee\u6539\u7528\u6237\u540d\u548c\u5bc6\u7801\u3002\n\u53ef\u4ee5\u901a\u8fc7\u6309\u94ae \u201d\u65b0\u589e\u6570\u636e\u201c \u6765\u589e\u52a0\u7528\u6237\u3002\u901a\u8fc7\u9009\u62e9\u7528\u6237\u89d2\u8272\u6765\u7ba1\u7406\u8be5\u7528\u6237\u767b\u5f55\u540e\u6240\u770b\u5230\u7684\u83dc\u5355\u548c\u6309\u94ae\u6743\u9650\u3002\u5f53\u7528\u6237\u9009\u62e9\u4e86\u591a\u4e2a\u89d2\u8272\u65f6\uff0c\u53d6\u6240\u6709\u7684\u89d2\u8272\u7684\u6700\u5927\u5e76\u96c6\u3002\u66f4\u6539\u7528\u6237\u7684\u89d2\u8272\u6743\u9650\u540e\uff0c\u5df2\u7ecf\u767b\u5f55\u7684\u7528\u6237\u53ea\u8981\u5237\u65b0\u9875\u9762\u4fbf\u80fd\u83b7\u5f97\u66f4\u6539\u540e\u7684\u6743\u9650\u3002"),(0,i.yg)("p",null,"\u4e0b\u9762\u4ee5\u65b0\u5efa\u7528\u6237\u4e3a\u4f8b\uff0c\u5c55\u793a\u4e86\u65b0\u7528\u6237\u767b\u5f55\u540e\u7684\u6743\u9650\u5c55\u793a\u3002"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"\u66f4\u6539\u9ed8\u8ba4\u89d2\u8272\u7684\u6743\u9650")),(0,i.yg)("img",{src:"/img/shenyu/basicConfig/roleManagement/default-role-permission.jpg",width:"80%",height:"50%"}),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"\u65b0\u589e\u89d2\u8272\u5e76\u8d4b\u4e88\u76f8\u5e94\u7684\u8d44\u6e90\u6743\u9650")),(0,i.yg)("img",{src:"/img/shenyu/basicConfig/roleManagement/default2-role-permission.jpg",width:"80%",height:"50%"}),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"\u65b0\u5efa\u7528\u6237\uff0c\u5e76\u8d4b\u4e88\u76f8\u5e94\u7684\u89d2\u8272")),(0,i.yg)("img",{src:"/img/shenyu/basicConfig/roleManagement/add-new-user.jpg",width:"80%",height:"50%"}),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"\u7528\u6237\u767b\u5f55\u540e\u67e5\u770b\u81ea\u8eab\u7684\u83dc\u5355\u548c\u6309\u94ae\u6743\u9650")),(0,i.yg)("img",{src:"/img/shenyu/basicConfig/roleManagement/new-login.jpg",width:"80%",height:"50%"}))}c.isMDXComponent=!0}}]);