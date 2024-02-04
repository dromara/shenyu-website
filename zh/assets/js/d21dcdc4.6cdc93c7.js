"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[79168],{95788:(e,t,n)=>{n.d(t,{Iu:()=>c,yg:()=>d});var a=n(11504);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=s(n),g=r,d=u["".concat(l,".").concat(g)]||u[g]||m[g]||i;return n?a.createElement(d,p(p({ref:t},c),{},{components:n})):a.createElement(d,p({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,p=new Array(i);p[0]=g;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:r,p[1]=o;for(var s=2;s<i;s++)p[s]=n[s];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},25760:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>p,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var a=n(45072),r=(n(11504),n(95788));const i={title:"\u81ea\u5b9a\u4e49\u6761\u4ef6\u53c2\u6570",keywords:["ParameterData"],description:"\u81ea\u5b9a\u4e49\u6761\u4ef6\u53c2\u6570"},p=void 0,o={unversionedId:"developer/spi/custom-parameter-data",id:"version-2.6.0/developer/spi/custom-parameter-data",isDocsHomePage:!1,title:"\u81ea\u5b9a\u4e49\u6761\u4ef6\u53c2\u6570",description:"\u81ea\u5b9a\u4e49\u6761\u4ef6\u53c2\u6570",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.6.0/developer/spi/custom-parameter-data.md",sourceDirName:"developer/spi",slug:"/developer/spi/custom-parameter-data",permalink:"/zh/docs/2.6.0/developer/spi/custom-parameter-data",editUrl:"https://github.com/apache/shenyu-website/edit/main/i18n/zh/docusaurus-plugin-content-docs/version-2.6.0/developer/spi/custom-parameter-data.md",version:"2.6.0",frontMatter:{title:"\u81ea\u5b9a\u4e49\u6761\u4ef6\u53c2\u6570",keywords:["ParameterData"],description:"\u81ea\u5b9a\u4e49\u6761\u4ef6\u53c2\u6570"},sidebar:"version-2.6.0/tutorialSidebar",previous:{title:"\u81ea\u5b9a\u4e49mock\u6570\u636e\u751f\u6210\u5668",permalink:"/zh/docs/2.6.0/developer/spi/custom-mock-generator"},next:{title:"\u81ea\u5b9a\u4e49\u6761\u4ef6\u7b56\u7565",permalink:"/zh/docs/2.6.0/developer/spi/custom-predicate-judge"}},l=[],s={toc:l},c="wrapper";function u(e){let{components:t,...n}=e;return(0,r.yg)(c,(0,a.c)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u5bf9 ",(0,r.yg)("inlineCode",{parentName:"p"},"org.apache.shenyu.plugin.base.condition.data.ParameterData")," \u8fdb\u884c\u81ea\u5b9a\u4e49\u6269\u5c55\u3002"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u65b0\u5efa\u4e00\u4e2a\u5de5\u7a0b\uff0c\u5f15\u5165\u5982\u4e0b\u4f9d\u8d56\uff1a")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-xml"},"<dependencies>\n    <dependency>\n        <groupId>org.apache.shenyu</groupId>\n        <artifactId>shenyu-plugin-base</artifactId>\n        <version>${project.version}</version>\n    </dependency>\n</dependencies>\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u65b0\u589e\u4e00\u4e2a\u7c7b ",(0,r.yg)("inlineCode",{parentName:"li"},"CustomParameterData"),"\uff0c\u5b9e\u73b0 ",(0,r.yg)("inlineCode",{parentName:"li"},"org.apache.shenyu.plugin.base.condition.data.ParameterData")," \u63a5\u53e3 \uff0c\u6dfb\u52a0\u6ce8\u89e3",(0,r.yg)("inlineCode",{parentName:"li"},"org.apache.shenyu.spi.Join"),"\u3002")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},"/**\n * This is custom parameter data.\n */\n@Join\npublic class CustomParameterData implements ParameterData {\n    \n    @Override\n    public String builder(final String paramName, final ServerWebExchange exchange) {\n        // \u81ea\u5b9a\u4e49\u6761\u4ef6\u53c2\u6570\n    }\n}\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u5728\u5de5\u7a0b\u7684META-INF/services\u76ee\u5f55\u521b\u5efa ",(0,r.yg)("inlineCode",{parentName:"li"},"org.apache.shenyu.plugin.base.condition.data.ParameterData")," \u6587\u4ef6\u4e2d\u6dfb\u52a0\u5982\u4e0b\u5185\u5bb9\uff1a")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell",metastring:'title="script"',title:'"script"'},"${spi name}=${custom class path}\n")),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"${spi name}"),"\u8868\u793a",(0,r.yg)("inlineCode",{parentName:"p"},"spi"),"\u7684\u540d\u79f0\uff0c",(0,r.yg)("inlineCode",{parentName:"p"},"${custom class path}"),"\u8868\u793a\u8be5\u7c7b\u7684\u5168\u9650\u5b9a\u540d\u3002\u6bd4\u5982\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell",metastring:'title="script"',title:'"script"'},"custom=xxx.xxx.xxx.CustomParameterData\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u5c06\u5de5\u7a0b\u6253\u5305\uff0c\u62f7\u8d1d\u5230\u7f51\u5173 (bootstrap-bin) \u7684 ",(0,r.yg)("inlineCode",{parentName:"p"},"lib")," \u6216 ",(0,r.yg)("inlineCode",{parentName:"p"},"ext-lib")," \u76ee\u5f55\u3002")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u5728",(0,r.yg)("inlineCode",{parentName:"p"},"Apache ShenYu"),"\u7f51\u5173\u7ba1\u7406\u7cfb\u7edf --\x3e \u57fa\u7840\u914d\u7f6e --\x3e \u5b57\u5178\u7ba1\u7406\uff0c \u627e\u5230\u5b57\u5178\u7f16\u7801\u4e3a ",(0,r.yg)("inlineCode",{parentName:"p"},"PARAM_TYPE"),"\uff0c\u65b0\u589e\u4e00\u6761\u6570\u636e\uff0c\u6ce8\u610f\u5b57\u5178\u540d\u79f0\u8981\u4e3a: ",(0,r.yg)("inlineCode",{parentName:"p"},"${spi name}"),"\uff0c\u56fe\u4e2d\u7684\u793a\u4f8b\u662f",(0,r.yg)("inlineCode",{parentName:"p"},"custom"),"\u3002"))),(0,r.yg)("img",{src:"/img/shenyu/custom/custom_parameter_data_zh.png",width:"70%",height:"60%"}),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"\u5b57\u5178\u7c7b\u578b\uff1a",(0,r.yg)("inlineCode",{parentName:"p"},"paramType"),"\uff1b"),(0,r.yg)("p",{parentName:"blockquote"},"\u5b57\u5178\u7f16\u7801\uff1a",(0,r.yg)("inlineCode",{parentName:"p"},"PARAM_TYPE"),"\uff1b"),(0,r.yg)("p",{parentName:"blockquote"},"\u5b57\u5178\u540d\u79f0\uff1a",(0,r.yg)("inlineCode",{parentName:"p"},"${spi name}"),"\uff0c\u586b\u5199\u81ea\u5b9a\u4e49",(0,r.yg)("inlineCode",{parentName:"p"},"spi"),"\u7684\u540d\u79f0\uff1b"),(0,r.yg)("p",{parentName:"blockquote"},"\u5b57\u5178\u503c\uff1a\u4f7f\u7528\u65f6\uff0c\u4e0b\u62c9\u6846\u7684\u503c\uff0c\u4e0d\u8981\u548c\u73b0\u6709\u7684\u91cd\u590d\uff1b"),(0,r.yg)("p",{parentName:"blockquote"},"\u5b57\u5178\u63cf\u8ff0\u6216\u5907\u6ce8\u4fe1\u606f\uff1a\u63cf\u8ff0\u4fe1\u606f\uff1b"),(0,r.yg)("p",{parentName:"blockquote"},"\u6392\u5e8f\uff1a \u6392\u5e8f\uff1b"),(0,r.yg)("p",{parentName:"blockquote"},"\u72b6\u6001\uff1a\u6253\u5f00\u6216\u5173\u95ed\u3002")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u5728\u6dfb\u52a0\u9009\u62e9\u5668\u6216\u89c4\u5219\u65f6\uff0c\u5c31\u53ef\u4ee5\u4f7f\u7528\u81ea\u5b9a\u4e49\u7684\u6761\u4ef6\u53c2\u6570\uff1a")),(0,r.yg)("img",{src:"/img/shenyu/custom/use_custom_parameter_data_zh.png",width:"80%",height:"70%"}))}u.isMDXComponent=!0}}]);