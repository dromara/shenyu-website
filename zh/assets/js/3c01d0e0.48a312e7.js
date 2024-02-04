"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[23944],{95788:(e,n,t)=>{t.d(n,{Iu:()=>d,yg:()=>m});var r=t(11504);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),p=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=p(e.components);return r.createElement(u.Provider,{value:n},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(t),s=a,m=c["".concat(u,".").concat(s)]||c[s]||g[s]||i;return t?r.createElement(m,o(o({ref:n},d),{},{components:t})):r.createElement(m,o({ref:n},d))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=s;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},23960:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=t(45072),a=(t(11504),t(95788));const i={title:"\u5b57\u5178\u7ba1\u7406",keywords:["\u5b57\u5178"],description:"\u5b57\u5178\u7ba1\u7406\u8be6\u89e3"},o=void 0,l={unversionedId:"user-guide/admin-usage/dictionary-management",id:"version-2.4.3/user-guide/admin-usage/dictionary-management",isDocsHomePage:!1,title:"\u5b57\u5178\u7ba1\u7406",description:"\u5b57\u5178\u7ba1\u7406\u8be6\u89e3",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.4.3/user-guide/admin-usage/dictionary-management.md",sourceDirName:"user-guide/admin-usage",slug:"/user-guide/admin-usage/dictionary-management",permalink:"/zh/docs/2.4.3/user-guide/admin-usage/dictionary-management",editUrl:"https://github.com/apache/shenyu-website/edit/main/i18n/zh/docusaurus-plugin-content-docs/version-2.4.3/user-guide/admin-usage/dictionary-management.md",version:"2.4.3",frontMatter:{title:"\u5b57\u5178\u7ba1\u7406",keywords:["\u5b57\u5178"],description:"\u5b57\u5178\u7ba1\u7406\u8be6\u89e3"},sidebar:"version-2.4.3/tutorialSidebar",previous:{title:"\u6570\u636e\u6743\u9650\u7ba1\u7406",permalink:"/zh/docs/2.4.3/user-guide/admin-usage/data-permission"},next:{title:"\u63d2\u4ef6\u914d\u7f6e",permalink:"/zh/docs/2.4.3/user-guide/admin-usage/plugin-handle-explanation"}},u=[],p={toc:u},d="wrapper";function c(e){let{components:n,...t}=e;return(0,a.yg)(d,(0,r.c)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"\u672c\u6587\u6863\u5c06\u4ecb\u7ecd",(0,a.yg)("inlineCode",{parentName:"p"},"Apache ShenYu"),"\u540e\u53f0\u7ba1\u7406\u7cfb\u7edf\u4e2d\u5b57\u5178\u7ba1\u7406\u7684\u4f7f\u7528\uff0c\u5b57\u5178\u7ba1\u7406\u4e3b\u8981\u7528\u6765\u7ef4\u62a4\u548c\u7ba1\u7406\u516c\u7528\u6570\u636e\u5b57\u5178\u3002"),(0,a.yg)("p",null,"\u8bf7\u53c2\u8003\u8fd0\u7ef4\u90e8\u7f72\u7684\u5185\u5bb9\uff0c\u9009\u62e9\u4e00\u79cd\u65b9\u5f0f\u542f\u52a8",(0,a.yg)("inlineCode",{parentName:"p"},"shenyu-admin"),"\u3002\u6bd4\u5982\uff0c\u901a\u8fc7 ",(0,a.yg)("a",{parentName:"p",href:"../../deployment/deployment-local"},"\u672c\u5730\u90e8\u7f72")," \u542f\u52a8",(0,a.yg)("inlineCode",{parentName:"p"},"Apache ShenYu"),"\u540e\u53f0\u7ba1\u7406\u7cfb\u7edf\u3002 \u542f\u52a8\u6210\u529f\u540e\uff0c\u53ef\u4ee5\u76f4\u63a5\u8bbf\u95ee http://localhost:9095 \uff0c\u9ed8\u8ba4\u7528\u6237\u540d\u548c\u5bc6\u7801\u5206\u522b\u4e3a: ",(0,a.yg)("inlineCode",{parentName:"p"},"admin")," \u548c ",(0,a.yg)("inlineCode",{parentName:"p"},"123456"),"\u3002"),(0,a.yg)("p",null,"\u76ee\u524d\u4f7f\u7528\u573a\u666f\u662f\u5728 ",(0,a.yg)("a",{parentName:"p",href:"./plugin-handle-explanation"},"\u63d2\u4ef6\u5904\u7406\u7ba1\u7406")," \u65f6\uff0c\u9009\u62e9\u6570\u636e\u7c7b\u578b\u662f ",(0,a.yg)("inlineCode",{parentName:"p"},"\u4e0b\u62c9\u6846")," \u65f6\u4f7f\u7528\uff1a"),(0,a.yg)("img",{src:"/img/shenyu/basicConfig/pluginHandle/dict_box_add.png",width:"80%",height:"50%"}),(0,a.yg)("p",null,"\u5728\u5b57\u5178\u7ba1\u7406\u4e2d\uff0c\u4f60\u53ef\u4ee5\u65b0\u589e\u5b57\u5178\u7c7b\u578b\uff0c\u4f9b\u5176\u4ed6\u5730\u65b9\u4f7f\u7528\uff1a"),(0,a.yg)("img",{src:"/img/shenyu/basicConfig/pluginHandle/dict_box_type.png",width:"80%",height:"50%"}),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u5b57\u5178\u7c7b\u578b\uff1a\u5728\u63d2\u4ef6\u5904\u7406\u7ba1\u7406\u65f6\uff0c\u4f7f\u7528\u7684\u5b57\u6bb5\u540d\u79f0\u3002"),(0,a.yg)("li",{parentName:"ul"},"\u5b57\u5178\u7f16\u7801\uff1a\u6807\u8bc6\u5b57\u5178\u6570\u636e\u3002"),(0,a.yg)("li",{parentName:"ul"},"\u5b57\u5178\u540d\u79f0\uff1a\u5728\u6dfb\u52a0\u63d2\u4ef6\u3001\u9009\u62e9\u5668\u6216\u89c4\u5219\u65f6",(0,a.yg)("inlineCode",{parentName:"li"},"handle"),"\u5b57\u6bb5\u7684\u540d\u79f0\u3002"),(0,a.yg)("li",{parentName:"ul"},"\u5b57\u5178\u503c\uff1a\u5b57\u5178\u6570\u636e\u5b9e\u9645\u53d6\u503c\u3002"),(0,a.yg)("li",{parentName:"ul"},"\u5b57\u5178\u63cf\u8ff0\u6216\u5907\u6ce8\uff1a\u63cf\u8ff0\u4fe1\u606f\u3002"),(0,a.yg)("li",{parentName:"ul"},"\u6392\u5e8f\uff1a\u5b57\u5178\u6570\u636e\u987a\u5e8f\u3002")),(0,a.yg)("p",null,"\u4f8b\u5982\uff0c ",(0,a.yg)("inlineCode",{parentName:"p"},"sentinel")," \u63d2\u4ef6\u5904\u7406\u5b57\u6bb5\u4e2d\u7684 ",(0,a.yg)("inlineCode",{parentName:"p"},"degradeRuleGrade"),"\u3002\u5f53\u65b0\u589e\u89c4\u5219\u65f6\uff0c\u7f16\u8f91 ",(0,a.yg)("inlineCode",{parentName:"p"},"degradeRuleGrade")," \u5b57\u6bb5\u65f6\uff0c\u4f1a\u81ea\u52a8\u4ece\u5b57\u5178\u7ba1\u7406\u4e2d\u67e5\u51fa ",(0,a.yg)("inlineCode",{parentName:"p"},"type='degradeRuleGrade'")," \u7684\u6240\u6709\u5b57\u5178\u6570\u636e\u4f5c\u4e3a\u4e0b\u62c9\u9009\u9879\uff1a"),(0,a.yg)("img",{src:"/img/shenyu/basicConfig/pluginHandle/dict_box_use.png",width:"80%",height:"50%"}))}c.isMDXComponent=!0}}]);