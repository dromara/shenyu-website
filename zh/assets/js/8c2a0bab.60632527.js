"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[28912],{95788:(e,n,r)=>{r.d(n,{Iu:()=>u,yg:()=>y});var t=r(11504);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=t.createContext({}),c=function(e){var n=t.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},u=function(e){var n=c(e.components);return t.createElement(p.Provider,{value:n},e.children)},s="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=c(r),m=i,y=s["".concat(p,".").concat(m)]||s[m]||g[m]||a;return r?t.createElement(y,o(o({ref:n},u),{},{components:r})):t.createElement(y,o({ref:n},u))}));function y(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[s]="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=r[c];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},11396:(e,n,r)=>{r.r(n),r.d(n,{contentTitle:()=>o,default:()=>s,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var t=r(45072),i=(r(11504),r(95788));const a={title:"\u81ea\u5b9a\u4e49sign\u63d2\u4ef6\u68c0\u9a8c\u7b97\u6cd5",description:"\u81ea\u5b9a\u4e49sign\u63d2\u4ef6\u68c0\u9a8c"},o=void 0,l={unversionedId:"developer/custom-sign-algorithm",id:"version-2.4.0/developer/custom-sign-algorithm",isDocsHomePage:!1,title:"\u81ea\u5b9a\u4e49sign\u63d2\u4ef6\u68c0\u9a8c\u7b97\u6cd5",description:"\u81ea\u5b9a\u4e49sign\u63d2\u4ef6\u68c0\u9a8c",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.4.0/developer/custom-sign-algorithm.md",sourceDirName:"developer",slug:"/developer/custom-sign-algorithm",permalink:"/zh/docs/2.4.0/developer/custom-sign-algorithm",editUrl:"https://github.com/apache/shenyu-website/edit/main/i18n/zh/docusaurus-plugin-content-docs/version-2.4.0/developer/custom-sign-algorithm.md",version:"2.4.0",frontMatter:{title:"\u81ea\u5b9a\u4e49sign\u63d2\u4ef6\u68c0\u9a8c\u7b97\u6cd5",description:"\u81ea\u5b9a\u4e49sign\u63d2\u4ef6\u68c0\u9a8c"},sidebar:"version-2.4.0/tutorialSidebar",previous:{title:"\u81ea\u5b9a\u4e49\u8fd4\u56de\u7ed3\u679c",permalink:"/zh/docs/2.4.0/developer/custom-result"},next:{title:"\u591a\u8bed\u8a00Http\u5ba2\u6237\u7aef",permalink:"/zh/docs/2.4.0/developer/developer-shenyu-client"}},p=[{value:"\u8bf4\u660e",id:"\u8bf4\u660e",children:[]},{value:"\u6269\u5c55",id:"\u6269\u5c55",children:[]}],c={toc:p},u="wrapper";function s(e){let{components:n,...r}=e;return(0,i.yg)(u,(0,t.c)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"\u8bf4\u660e"},"\u8bf4\u660e"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"\u7528\u6237\u53ef\u4ee5\u81ea\u5b9a\u4e49\u7b7e\u540d\u8ba4\u8bc1\u7b97\u6cd5\u6765\u5b9e\u73b0\u9a8c\u8bc1\u3002")),(0,i.yg)("h2",{id:"\u6269\u5c55"},"\u6269\u5c55"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"\u9ed8\u8ba4\u7684\u5b9e\u73b0\u4e3a ",(0,i.yg)("inlineCode",{parentName:"p"},"org.apache.shenyu.plugin.sign.service.DefaultSignService"),"\u3002")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"\u65b0\u589e\u4e00\u4e2a\u7c7b ",(0,i.yg)("inlineCode",{parentName:"p"},"CustomSignService")," \u5b9e\u73b0  ",(0,i.yg)("inlineCode",{parentName:"p"},"org.apache.shenyu.plugin.api.SignService"),"\u3002"))),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-java"}," public interface SignService {\n \n     /**\n      * Sign verify pair.\n      *\n      * @param exchange   the exchange\n      * @return the pair\n      */\n     Pair<Boolean, String> signVerify(ServerWebExchange exchange);\n }\n\n")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"p"},"Pair"),"\u4e2d\u8fd4\u56de",(0,i.yg)("inlineCode",{parentName:"p"},"true"),"\uff0c\u8868\u793a\u9a8c\u8bc1\u901a\u8fc7\uff0c\u4e3a",(0,i.yg)("inlineCode",{parentName:"p"},"false"),"\u7684\u65f6\u5019\uff0c\u4f1a\u628a",(0,i.yg)("inlineCode",{parentName:"p"},"String"),"\u4e2d\u7684\u4fe1\u606f\u8f93\u51fa\u5230\u524d\u7aef\u3002")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"\u628a\u65b0\u589e\u7684\u5b9e\u73b0\u7c7b\u6ce8\u518c\u6210\u4e3a",(0,i.yg)("inlineCode",{parentName:"p"},"Spring"),"\u7684",(0,i.yg)("inlineCode",{parentName:"p"},"bean"),"\uff0c\u5982\u4e0b"))),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-java"},"@Bean\npublic SignService customSignService() {\n      return new CustomSignService();\n}\n")))}s.isMDXComponent=!0}}]);