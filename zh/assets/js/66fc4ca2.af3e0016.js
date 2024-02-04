"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[2766],{95788:(e,n,t)=>{t.d(n,{Iu:()=>s,yg:()=>y});var r=t(11504);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(t),g=i,y=u["".concat(c,".").concat(g)]||u[g]||d[g]||a;return t?r.createElement(y,o(o({ref:n},s),{},{components:t})):r.createElement(y,o({ref:n},s))}));function y(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=g;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[u]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},9972:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=t(45072),i=(t(11504),t(95788));const a={title:"\u6d41\u91cf\u63a7\u5236\u8bbe\u8ba1",keywords:["flow-control"],description:"Apache ShenYu \u6d41\u91cf\u63a7\u5236\u8bbe\u8ba1"},o=void 0,l={unversionedId:"design/flow-control",id:"design/flow-control",isDocsHomePage:!1,title:"\u6d41\u91cf\u63a7\u5236\u8bbe\u8ba1",description:"Apache ShenYu \u6d41\u91cf\u63a7\u5236\u8bbe\u8ba1",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/design/flow-control.md",sourceDirName:"design",slug:"/design/flow-control",permalink:"/zh/docs/next/design/flow-control",editUrl:"https://github.com/apache/shenyu-website/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/design/flow-control.md",version:"current",frontMatter:{title:"\u6d41\u91cf\u63a7\u5236\u8bbe\u8ba1",keywords:["flow-control"],description:"Apache ShenYu \u6d41\u91cf\u63a7\u5236\u8bbe\u8ba1"},sidebar:"tutorialSidebar",previous:{title:"\u6570\u636e\u540c\u6b65\u8bbe\u8ba1",permalink:"/zh/docs/next/design/data-sync"},next:{title:"\u5ba2\u6237\u7aef\u6ce8\u518c\u8bbe\u8ba1",permalink:"/zh/docs/next/design/register-center-design"}},c=[{value:"\u63d2\u4ef6",id:"\u63d2\u4ef6",children:[]},{value:"\u9009\u62e9\u5668\u548c\u89c4\u5219",id:"\u9009\u62e9\u5668\u548c\u89c4\u5219",children:[]},{value:"\u6d41\u91cf\u7b5b\u9009",id:"\u6d41\u91cf\u7b5b\u9009",children:[]}],p={toc:c},s="wrapper";function u(e){let{components:n,...t}=e;return(0,i.yg)(s,(0,r.c)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"Apache ShenYu"),"\u7f51\u5173\u901a\u8fc7\u63d2\u4ef6\u3001\u9009\u62e9\u5668\u548c\u89c4\u5219\u5b8c\u6210\u6d41\u91cf\u63a7\u5236\u3002\u76f8\u5173\u6570\u636e\u7ed3\u6784\u53ef\u4ee5\u53c2\u8003\u4e4b\u524d\u7684 ",(0,i.yg)("a",{parentName:"p",href:"./database-design"},"ShenYu Admin\u6570\u636e\u7ed3\u6784")," \u3002"),(0,i.yg)("h2",{id:"\u63d2\u4ef6"},"\u63d2\u4ef6"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"\u5728",(0,i.yg)("inlineCode",{parentName:"li"},"shenyu-admin"),"\u540e\u53f0\uff0c\u6bcf\u4e2a\u63d2\u4ef6\u90fd\u7528",(0,i.yg)("inlineCode",{parentName:"li"},"handle"),"\uff08",(0,i.yg)("inlineCode",{parentName:"li"},"json"),"\u683c\u5f0f\uff09\u5b57\u6bb5\u6765\u8868\u793a\u4e0d\u540c\u7684\u5904\u7406\uff0c\u800c\u63d2\u4ef6\u5904\u7406\u5c31\u662f\u7528\u6765\u7ba1\u7406\u7f16\u8f91",(0,i.yg)("inlineCode",{parentName:"li"},"json"),"\u91cc\u9762\u7684\u81ea\u5b9a\u4e49\u5904\u7406\u5b57\u6bb5\u3002"),(0,i.yg)("li",{parentName:"ul"},"\u8be5\u529f\u80fd\u4e3b\u8981\u662f\u7528\u6765\u652f\u6301\u63d2\u4ef6\u5904\u7406\u6a21\u677f\u5316\u914d\u7f6e\u7684\u3002")),(0,i.yg)("h2",{id:"\u9009\u62e9\u5668\u548c\u89c4\u5219"},"\u9009\u62e9\u5668\u548c\u89c4\u5219"),(0,i.yg)("p",null,"\u9009\u62e9\u5668\u548c\u89c4\u5219\u662f ",(0,i.yg)("inlineCode",{parentName:"p"},"Apache ShenYu")," \u7f51\u5173\u4e2d\u6700\u7075\u9b42\u7684\u8bbe\u8ba1\u3002\u638c\u63e1\u597d\u5b83\uff0c\u4f60\u53ef\u4ee5\u5bf9\u4efb\u4f55\u6d41\u91cf\u8fdb\u884c\u7ba1\u7406\u3002"),(0,i.yg)("p",null," \u4e00\u4e2a\u63d2\u4ef6\u6709\u591a\u4e2a\u9009\u62e9\u5668\uff0c\u4e00\u4e2a\u9009\u62e9\u5668\u5bf9\u5e94\u591a\u79cd\u89c4\u5219\u3002\u9009\u62e9\u5668\u76f8\u5f53\u4e8e\u662f\u5bf9\u6d41\u91cf\u7684\u4e00\u7ea7\u7b5b\u9009\uff0c\u89c4\u5219\u5c31\u662f\u6700\u7ec8\u7684\u7b5b\u9009\u3002\n\u5bf9\u4e00\u4e2a\u63d2\u4ef6\u800c\u8a00\uff0c\u6211\u4eec\u5e0c\u671b\u6839\u636e\u6211\u4eec\u7684\u914d\u7f6e\uff0c\u8fbe\u5230\u6ee1\u8db3\u6761\u4ef6\u7684\u6d41\u91cf\uff0c\u63d2\u4ef6\u624d\u4f1a\u88ab\u6267\u884c\u3002\n\u9009\u62e9\u5668\u548c\u89c4\u5219\u5c31\u662f\u4e3a\u4e86\u8ba9\u6d41\u91cf\u5728\u6ee1\u8db3\u7279\u5b9a\u7684\u6761\u4ef6\u4e0b\uff0c\u624d\u53bb\u6267\u884c\u6211\u4eec\u60f3\u8981\u7684\uff0c\u8fd9\u79cd\u89c4\u5219\u9996\u5148\u8981\u660e\u767d\u3002"),(0,i.yg)("p",null,"\u63d2\u4ef6\u3001\u9009\u62e9\u5668\u548c\u89c4\u5219\u6267\u884c\u903b\u8f91\u5982\u4e0b\uff0c\u5f53\u6d41\u91cf\u8fdb\u5165\u5230",(0,i.yg)("inlineCode",{parentName:"p"},"Apache ShenYu"),"\u7f51\u5173\u4e4b\u540e\uff0c\u4f1a\u5148\u5224\u65ad\u662f\u5426\u6709\u5bf9\u5e94\u7684\u63d2\u4ef6\uff0c\u8be5\u63d2\u4ef6\u662f\u5426\u5f00\u542f\uff1b\u7136\u540e\u5224\u65ad\u6d41\u91cf\u662f\u5426\u5339\u914d\u8be5\u63d2\u4ef6\u7684\u9009\u62e9\u5668\uff1b\u7136\u540e\u518d\u5224\u65ad\u6d41\u91cf\u662f\u5426\u5339\u914d\u8be5\u9009\u62e9\u5668\u7684\u89c4\u5219\u3002\u5982\u679c\u8bf7\u6c42\u6d41\u91cf\u80fd\u6ee1\u8db3\u5339\u914d\u6761\u4ef6\u624d\u4f1a\u6267\u884c\u8be5\u63d2\u4ef6\uff0c\u5426\u5219\u63d2\u4ef6\u4e0d\u4f1a\u88ab\u6267\u884c\uff0c\u5904\u7406\u4e0b\u4e00\u4e2a\u3002",(0,i.yg)("inlineCode",{parentName:"p"},"Apache ShenYu"),"\u7f51\u5173\u5c31\u662f\u8fd9\u6837\u901a\u8fc7\u5c42\u5c42\u7b5b\u9009\u5b8c\u6210\u6d41\u91cf\u63a7\u5236\u3002"),(0,i.yg)("img",{src:"/img/shenyu/plugin/plugin-chain-execute.png",width:"40%",height:"30%"}),(0,i.yg)("h2",{id:"\u6d41\u91cf\u7b5b\u9009"},"\u6d41\u91cf\u7b5b\u9009"),(0,i.yg)("img",{src:"/img/shenyu/design/flow-condition.png",width:"30%",height:"30%"}),(0,i.yg)("p",null,"\u6d41\u91cf\u7b5b\u9009\uff0c\u662f\u9009\u62e9\u5668\u548c\u89c4\u5219\u7684\u7075\u9b42\uff0c\u5bf9\u5e94\u4e3a\u9009\u62e9\u5668\u4e0e\u89c4\u5219\u91cc\u9762\u7684\u5339\u914d\u6761\u4ef6(conditions)\uff0c\u6839\u636e\u4e0d\u540c\u7684\u6d41\u91cf\u7b5b\u9009\u89c4\u5219\uff0c\u6211\u4eec\u53ef\u4ee5\u5904\u7406\u5404\u79cd\u590d\u6742\u7684\u573a\u666f\u3002\u6d41\u91cf\u7b5b\u9009\u53ef\u4ee5\u4ece",(0,i.yg)("inlineCode",{parentName:"p"},"Header"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"URI"),",  ",(0,i.yg)("inlineCode",{parentName:"p"},"Query"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"Cookie")," \u7b49\u7b49Http\u8bf7\u6c42\u83b7\u53d6\u6570\u636e\uff0c"),(0,i.yg)("p",null,"\u7136\u540e\u53ef\u4ee5\u91c7\u7528 ",(0,i.yg)("inlineCode",{parentName:"p"},"Match"),"\uff0c",(0,i.yg)("inlineCode",{parentName:"p"},"="),"\uff0c",(0,i.yg)("inlineCode",{parentName:"p"},"SpEL"),"\uff0c",(0,i.yg)("inlineCode",{parentName:"p"},"Regex"),"\uff0c",(0,i.yg)("inlineCode",{parentName:"p"},"Groovy"),"\uff0c",(0,i.yg)("inlineCode",{parentName:"p"},"Exclude"),"\u7b49\u5339\u914d\u65b9\u5f0f\uff0c\u5339\u914d\u51fa\u4f60\u6240\u9884\u60f3\u7684\u6570\u636e\u3002\u591a\u7ec4\u5339\u914d\u6dfb\u52a0\u53ef\u4ee5\u4f7f\u7528And/Or\u7684\u5339\u914d\u7b56\u7565\u3002"),(0,i.yg)("p",null,"\u5177\u4f53\u7684\u4ecb\u7ecd\u4e0e\u4f7f\u7528\u8bf7\u770b: ",(0,i.yg)("a",{parentName:"p",href:"../user-guide/admin-usage/selector-and-rule"},"\u9009\u62e9\u5668\u4e0e\u89c4\u5219\u7ba1\u7406")," \u3002"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-mermaid"},'stateDiagram-v2\n    state "\u63d2\u4ef61..n" as p1\n    state pc1 <<choice>>\n    state "\u9009\u62e9\u56681..n" as s1\n    state sc1 <<choice>>\n    state "\u89c4\u52191..n" as r1\n    state rc1 <<choice>>\n    state "\u6267\u884c\u89c4\u5219" as rr1\n    state rrc1 <<choice>>\n\n    [*] --\x3e p1\n\n    state p1 {\n        [*] --\x3e pc1\n        pc1 --\x3e [*] : \u63d2\u4ef6\u672a\u5f00\u542f<br/>\u7ee7\u7eed\u6267\u884c\u4e0b\u4e00\u4e2a\u63d2\u4ef6\n\n        state s1 {\n            [*] --\x3e sc1\n            sc1 --\x3e [*] : \u9009\u62e9\u5668\u672a\u5339\u914d<br/>\u7ee7\u7eed\u5339\u914d\u4e0b\u4e00\u4e2a\u9009\u62e9\u5668\n\n            state r1 {\n                [*] --\x3e rc1\n                rc1 --\x3e [*] : \u89c4\u5219\u672a\u5339\u914d<br/>\u7ee7\u7eed\u5339\u914d\u4e0b\u4e00\u4e2a\u89c4\u5219\n\n                state rr1 {\n                    [*] --\x3e rrc1\n                    rrc1 --\x3e [*] : \u7ee7\u7eed\u6267\u884c\u4e0b\u4e00\u4e2a\u63d2\u4ef6\n                }\n                rc1 --\x3e rr1 : \u89c4\u5219\u5df2\u5339\u914d<br/>\u5f00\u59cb\u6267\u884c\u89c4\u5219\n            }\n            sc1 --\x3e r1 : \u9009\u62e9\u5668\u5df2\u5339\u914d<br/>\u5f00\u59cb\u5339\u914d\u89c4\u5219\n            note left of r1 : \u5f53\u9009\u62e9\u5668\u7c7b\u578b\u4e3a\u300a\u5168\u6d41\u91cf\u300b\u65f6<br/>\u8be5\u9009\u62e9\u5668\u548c\u5176\u4e0b\u89c4\u5219<br/>\u7684\u6761\u4ef6\u5747\u65e0\u6548<br/>\u53d6\u672b\u5c3e\u89c4\u5219\u6267\u884c\n        }\n        pc1 --\x3e s1 : \u63d2\u4ef6\u5df2\u5f00\u542f<br/>\u5f00\u59cb\u5339\u914d\u9009\u62e9\u5668\n        note left of s1 : \u5728\u4e00\u4e2a\u9009\u62e9\u5668\u91cc\uff0c\u81f3\u591a\u53ea\u4f1a\u5339\u914d&\u6267\u884c\u4e00\u6761\u89c4\u5219\n    }\n    note left of p1 : \u5728\u4e00\u4e2a\u63d2\u4ef6\u91cc\uff0c\u81f3\u591a\u53ea\u4f1a\u5339\u914d\u5230\u4e00\u4e2a\u9009\u62e9\u5668\n')))}u.isMDXComponent=!0}}]);