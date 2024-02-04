"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[28260],{95788:(e,n,a)=>{a.d(n,{Iu:()=>u,yg:()=>y});var t=a(11504);function i(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function p(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){i(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function c(e,n){if(null==e)return{};var a,t,i=function(e,n){if(null==e)return{};var a,t,i={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(i[a]=e[a]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=t.createContext({}),l=function(e){var n=t.useContext(o),a=n;return e&&(a="function"==typeof e?e(n):p(p({},n),e)),a},u=function(e){var n=l(e.components);return t.createElement(o.Provider,{value:n},e.children)},s="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var a=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=l(a),d=i,y=s["".concat(o,".").concat(d)]||s[d]||g[d]||r;return a?t.createElement(y,p(p({ref:n},u),{},{components:a})):t.createElement(y,p({ref:n},u))}));function y(e,n){var a=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=a.length,p=new Array(r);p[0]=d;var c={};for(var o in n)hasOwnProperty.call(n,o)&&(c[o]=n[o]);c.originalType=e,c[s]="string"==typeof e?e:i,p[1]=c;for(var l=2;l<r;l++)p[l]=a[l];return t.createElement.apply(null,p)}return t.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5811:(e,n,a)=>{a.r(n),a.d(n,{contentTitle:()=>p,default:()=>s,frontMatter:()=>r,metadata:()=>c,toc:()=>o});var t=a(45072),i=(a(11504),a(95788));const r={title:"API\u6587\u6863\u7ba1\u7406",keywords:["api doc \u63a5\u53e3 \u6587\u6863"],description:"API\u6587\u6863\u7ba1\u7406"},p=void 0,c={unversionedId:"user-guide/admin-usage/api-document",id:"version-2.6.1/user-guide/admin-usage/api-document",isDocsHomePage:!1,title:"API\u6587\u6863\u7ba1\u7406",description:"API\u6587\u6863\u7ba1\u7406",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.6.1/user-guide/admin-usage/api-document.md",sourceDirName:"user-guide/admin-usage",slug:"/user-guide/admin-usage/api-document",permalink:"/zh/docs/user-guide/admin-usage/api-document",editUrl:"https://github.com/apache/shenyu-website/edit/main/i18n/zh/docusaurus-plugin-content-docs/version-2.6.1/user-guide/admin-usage/api-document.md",version:"2.6.1",frontMatter:{title:"API\u6587\u6863\u7ba1\u7406",keywords:["api doc \u63a5\u53e3 \u6587\u6863"],description:"API\u6587\u6863\u7ba1\u7406"},sidebar:"version-2.6.0/tutorialSidebar",previous:{title:"Websocket\u5feb\u901f\u5f00\u59cb",permalink:"/zh/docs/quick-start/quick-start-websocket"},next:{title:"\u6570\u636e\u6743\u9650\u7ba1\u7406",permalink:"/zh/docs/user-guide/admin-usage/data-permission"}},o=[{value:"1. \u80cc\u666f\u4e0e\u8bf4\u660e",id:"1-\u80cc\u666f\u4e0e\u8bf4\u660e",children:[]},{value:"2. \u4f7f\u7528\u6d41\u7a0b",id:"2-\u4f7f\u7528\u6d41\u7a0b",children:[]},{value:"3. \u8bbe\u7f6e\u5168\u5c40\u7684\u73af\u5883\u5730\u5740",id:"3-\u8bbe\u7f6e\u5168\u5c40\u7684\u73af\u5883\u5730\u5740",children:[]},{value:"4. \u652f\u6301\u591a\u79cd\u65b9\u5f0f\u805a\u5408API\u6587\u6863",id:"4-\u652f\u6301\u591a\u79cd\u65b9\u5f0f\u805a\u5408api\u6587\u6863",children:[{value:"4.1 \u624b\u52a8\u586b\u5199API\u6587\u6863",id:"41-\u624b\u52a8\u586b\u5199api\u6587\u6863",children:[]},{value:"4.2 \u8fdc\u7a0b\u62c9\u53d6swagger\u6ce8\u518cAPI\u6587\u6863",id:"42-\u8fdc\u7a0b\u62c9\u53d6swagger\u6ce8\u518capi\u6587\u6863",children:[]},{value:"4.3 Shenyu\u5ba2\u6237\u7aef\u6ce8\u89e3\u6ce8\u518cAPI\u6587\u6863",id:"43-shenyu\u5ba2\u6237\u7aef\u6ce8\u89e3\u6ce8\u518capi\u6587\u6863",children:[]}]},{value:"5. \u53d1\u5e03API",id:"5-\u53d1\u5e03api",children:[]},{value:"6. \u4e0b\u7ebfAPI(\u53ef\u9009)",id:"6-\u4e0b\u7ebfapi\u53ef\u9009",children:[]},{value:"7. \u8bf7\u6c42API\uff08\u63a5\u53e3\u8c03\u8bd5\uff09",id:"7-\u8bf7\u6c42api\u63a5\u53e3\u8c03\u8bd5",children:[]}],l={toc:o},u="wrapper";function s(e){let{components:n,...r}=e;return(0,i.yg)(u,(0,t.c)({},l,r,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"1-\u80cc\u666f\u4e0e\u8bf4\u660e"},"1. \u80cc\u666f\u4e0e\u8bf4\u660e"),(0,i.yg)("p",null,"\u524d\u540e\u7aef\u8054\u8c03\u65f6\uff0c\u901a\u5e38\u9700\u8981\u540e\u7aef\u7ed9\u51fa\u6587\u6863\u4ee5\u8be6\u7ec6\u8bf4\u660e\u63a5\u53e3\u7684\u8f93\u5165\u8f93\u51fa\uff1b"),(0,i.yg)("p",null,"\u540e\u7aef\u5f00\u53d1\u5b8c\u6210\u540e\uff0c\u9700\u8981\u6d4b\u8bd5\u63a5\u5165\u7f51\u5173\u662f\u5426\u6210\u529f\u3002"),(0,i.yg)("p",null,"\u4e3a\u4e86\u51cf\u5c11\u5272\u88c2\u611f\u3001\u63d0\u5347\u524d\u540e\u7aef\u5f00\u53d1\u7684\u7528\u6237\u4f53\u9a8c\uff0c\u9700\u8981\u5728shenyu-admin\u4e2d\u770b\u5230API\u6587\u6863\uff0c\u4ee5\u53ca\u76f4\u63a5\u5bf9API\u8fdb\u884c\u6d4b\u8bd5\u3002"),(0,i.yg)("h2",{id:"2-\u4f7f\u7528\u6d41\u7a0b"},"2. \u4f7f\u7528\u6d41\u7a0b"),(0,i.yg)("p",null,"\u5927\u4f53\u7684\u6d41\u7a0b\u5982\u4e0b\uff1a"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"\u540e\u7aef\u5f00\u53d1\u5728shenyu-admin\u4e2d\u4ea7\u51faAPI\u6587\u6863\u3002",(0,i.yg)("blockquote",{parentName:"li"},(0,i.yg)("p",{parentName:"blockquote"},"\u5df2\u7ecf\u652f\u6301",(0,i.yg)("inlineCode",{parentName:"p"},"\u8fdc\u7a0b\u62c9\u53d6swagger"),"\u3001",(0,i.yg)("inlineCode",{parentName:"p"},"\u624b\u52a8\u586b\u5199"),"\u3001",(0,i.yg)("inlineCode",{parentName:"p"},"\u5ba2\u6237\u7aef\u6ce8\u518c"),"3\u79cd\u65b9\u5f0f\u3002\u4ece\u529f\u80fd\u5b8c\u6574\u6027\u548c\u4f7f\u7528\u4f53\u9a8c\u4e0a\uff0c\u76ee\u524d\u66f4\u63a8\u8350",(0,i.yg)("inlineCode",{parentName:"p"},"\u8fdc\u7a0b\u62c9\u53d6swagger"),"\uff0c\u540e2\u79cd\u65b9\u5f0f\u5c06\u4f1a\u5728\u540e\u9762\u7248\u672c\u6301\u7eed\u529f\u80fd\u589e\u5f3a\u3002"))),(0,i.yg)("li",{parentName:"ul"},"\u524d\u7aef\u5728shenyu-admin\u4e2d\u67e5\u770bAPI\u6587\u6863\u5e76\u5f00\u59cb\u5f00\u53d1\u3002",(0,i.yg)("blockquote",{parentName:"li"},(0,i.yg)("p",{parentName:"blockquote"},"\u8054\u8c03\u671f\u95f4\u5f00\u53d1\u4eba\u5458(\u5305\u62ec\u524d\u540e\u7aef)\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528shenyu-admin\u4e2d\u7684\u63a5\u53e3\u8c03\u8bd5\u529f\u80fd\u53d1\u8d77API\u8c03\u7528\u3002")))),(0,i.yg)("h2",{id:"3-\u8bbe\u7f6e\u5168\u5c40\u7684\u73af\u5883\u5730\u5740"},"3. \u8bbe\u7f6e\u5168\u5c40\u7684\u73af\u5883\u5730\u5740"),(0,i.yg)("p",null,"\u5b9e\u9645\u4f7f\u7528\u4e2d\uff0c\u53ef\u80fd\u4f60\u6709\u591a\u4e2a\u7f51\u5173\u5730\u5740\uff08\u6bd4\u5982\u751f\u4ea7\u73af\u5883\u3001\u6d4b\u8bd5\u73af\u5883\uff0c\u6216\u8005\u516c\u7f51\u73af\u5883\u3001\u5185\u7f51\u73af\u5883\uff09\uff0c\u4f60\u53ef\u4ee5\u5728",(0,i.yg)("inlineCode",{parentName:"p"},"Apache ShenYu"),"\u7f51\u5173\u7ba1\u7406\u7cfb\u7edf --\x3e \u57fa\u7840\u914d\u7f6e --\x3e \u5b57\u5178\u7ba1\u7406\uff0c\u914d\u7f6e\u591a\u4e2a\u7f51\u5173\u5730\u5740\u3002"),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"apidoc-env-cn",src:a(9932).c})),(0,i.yg)("blockquote",null,(0,i.yg)("p",{parentName:"blockquote"},"\u5b57\u5178\u7c7b\u578b\uff1a\u586b\u5199\u503c\u5fc5\u987b\u662f",(0,i.yg)("inlineCode",{parentName:"p"},"apidocEnv"),"\uff1b"),(0,i.yg)("p",{parentName:"blockquote"},"\u5b57\u5178\u7f16\u7801\uff1a\u7f51\u5173\u5730\u5740\u7684\u7f16\u7801\u6807\u8bc6\uff0c\u65e0\u5b9e\u9645\u542b\u4e49\uff0c\u5efa\u8bae\u4ee5 ",(0,i.yg)("inlineCode",{parentName:"p"},"ENV_LABEL_"),"\u4f5c\u4e3a\u524d\u7f00\uff0c\u6bd4\u5982 ",(0,i.yg)("inlineCode",{parentName:"p"},"ENV_LABEL_OFFLINE"),"\uff1b"),(0,i.yg)("p",{parentName:"blockquote"},"\u5b57\u5178\u540d\u79f0\uff1a\u8868\u793a\u7f51\u5173\u7c7b\u578b\uff0c\u6bd4\u5982\u586b\u5199 ",(0,i.yg)("inlineCode",{parentName:"p"},"\u6d4b\u8bd5\u73af\u5883"),"\u3001",(0,i.yg)("inlineCode",{parentName:"p"},"\u751f\u4ea7\u73af\u5883"),"\u3002\u8be5\u503c\u5c06\u4f1a\u51fa\u73b0\u5728API\u6587\u6863\u8be6\u60c5\u9875\u9762\uff1b"),(0,i.yg)("p",{parentName:"blockquote"},"\u5b57\u5178\u503c\uff1a\u8868\u793a\u7f51\u5173\u5730\u5740\uff0c\u6bd4\u5982 ",(0,i.yg)("a",{parentName:"p",href:"http://127.0.0.1:9195%E3%80%82%E8%AF%A5%E5%80%BC%E5%B0%86%E4%BC%9A%E5%87%BA%E7%8E%B0%E5%9C%A8API%E6%96%87%E6%A1%A3%E8%AF%A6%E6%83%85%E9%A1%B5%E9%9D%A2%EF%BC%9B"},"http://127.0.0.1:9195\u3002\u8be5\u503c\u5c06\u4f1a\u51fa\u73b0\u5728API\u6587\u6863\u8be6\u60c5\u9875\u9762\uff1b")),(0,i.yg)("p",{parentName:"blockquote"},"\u5b57\u5178\u63cf\u8ff0\u6216\u5907\u6ce8\uff1a\u8be5\u7f51\u5173\u5730\u5740\u7528\u4e8e\u4f55\u79cd\u573a\u666f\uff0c\u505a\u4e00\u4e2a\u7b80\u77ed\u63cf\u8ff0\u3002\u8be5\u503c\u5c06\u4f1a\u51fa\u73b0\u5728API\u6587\u6863\u8be6\u60c5\u9875\u9762\uff1b"),(0,i.yg)("p",{parentName:"blockquote"},"\u6392\u5e8f\uff1a\u6570\u503c\u5927\u5c0f\u51b3\u5b9a\u4e86\u7f51\u5173\u5730\u5740\u7684\u5c55\u793a\u987a\u5e8f\uff1b"),(0,i.yg)("p",{parentName:"blockquote"},"\u72b6\u6001\uff1a\u6253\u5f00\u6216\u5173\u95ed\u3002")),(0,i.yg)("h2",{id:"4-\u652f\u6301\u591a\u79cd\u65b9\u5f0f\u805a\u5408api\u6587\u6863"},"4. \u652f\u6301\u591a\u79cd\u65b9\u5f0f\u805a\u5408API\u6587\u6863"),(0,i.yg)("h3",{id:"41-\u624b\u52a8\u586b\u5199api\u6587\u6863"},"4.1 \u624b\u52a8\u586b\u5199API\u6587\u6863"),(0,i.yg)("p",null,'\u70b9\u51fb\u83dc\u5355 "\u6587\u6863 -> API\u6587\u6863", \u5c55\u793a\u7684\u9875\u9762\u4e2d\u65b0\u589e\u6570\u636e\u3002'),(0,i.yg)("h5",{id:"\u521b\u5efa\u9879\u76ee"},"\u521b\u5efa\u9879\u76ee"),(0,i.yg)("p",null,"\u5982\u679c\u4f60\u8fd8\u6ca1\u6709\u521b\u5efa\u8fc7\u9879\u76ee\u6216\u8005\u4f60\u8981\u628a\u65b0\u5efa\u7684API\u5f52\u7c7b\u5230\u65b0\u9879\u76ee\uff0c\u8fd9\u65f6\u9700\u8981\u4f60\u521b\u5efa\u4e00\u4e2a\u9879\u76ee\u3002"),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"app-create-cn",src:a(9144).c})),(0,i.yg)("h5",{id:"\u589e\u52a0api\u6587\u6863"},"\u589e\u52a0API\u6587\u6863"),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"create-api-cn",src:a(9476).c})),(0,i.yg)("h3",{id:"42-\u8fdc\u7a0b\u62c9\u53d6swagger\u6ce8\u518capi\u6587\u6863"},"4.2 \u8fdc\u7a0b\u62c9\u53d6swagger\u6ce8\u518cAPI\u6587\u6863"),(0,i.yg)("p",null," \u901a\u8fc7\u8fdc\u7a0b\u62c9\u53d6swaager\u6587\u6863\u81ea\u52a8\u6ce8\u518cAPI\u6587\u6863\u3002\u8bf7\u53c2\u8003",(0,i.yg)("a",{parentName:"p",href:"/zh/docs/user-guide/api-doc/swagger-apidoc"},"\u8fdc\u7a0b\u62c9\u53d6swagger\u6ce8\u518cAPI\u6587\u6863")),(0,i.yg)("h3",{id:"43-shenyu\u5ba2\u6237\u7aef\u6ce8\u89e3\u6ce8\u518capi\u6587\u6863"},"4.3 Shenyu\u5ba2\u6237\u7aef\u6ce8\u89e3\u6ce8\u518cAPI\u6587\u6863"),(0,i.yg)("p",null," \u901a\u8fc7Shenyu\u5ba2\u6237\u7aef\u6ce8\u89e3\u81ea\u52a8\u6ce8\u518cAPI\u6587\u6863\u3002\u8bf7\u53c2\u8003",(0,i.yg)("a",{parentName:"p",href:"/zh/docs/user-guide/api-doc/shenyu-annotation-apidoc"},"\u5ba2\u6237\u7aef\u6ce8\u518cAPI\u6587\u6863")),(0,i.yg)("blockquote",null,(0,i.yg)("p",{parentName:"blockquote"},"\u82e5\u4f60\u6ca1\u6709\u67e5\u770b\u5b8c\u6574\u63a5\u53e3\u6587\u6863\u8be6\u60c5\u7684\u8bc9\u6c42\uff0c\u63a8\u8350\u4f7f\u7528\u8fd9\u6b64\u65b9\u5f0f\u3002\u5f53\u4f60\u9009\u62e9\u4e86\u8fd9\u79cd\u81ea\u52a8\u6ce8\u518c\u65b9\u5f0f\uff0c\u8bf7\u5173\u95ed\u8fdc\u7a0b\u81ea\u52a8\u62c9\u53d6swagger\u7684\u6ce8\u518c\u65b9\u5f0f\uff0c\u5426\u5219\u4f1a\u6709\u51b2\u7a81\u3002")),(0,i.yg)("h2",{id:"5-\u53d1\u5e03api"},"5. \u53d1\u5e03API"),(0,i.yg)("p",null,"\u5982\u679c\u8be5API\u4ece\u672a\u53d1\u5e03\u5230proxy\u63d2\u4ef6\u6216\u4f60\u4e0d\u6253\u7b97\u4f7f\u7528shenyu\u5ba2\u6237\u7aef\u63d0\u4f9b\u7684\u6ce8\u89e3\u6ce8\u518cURI\uff0cshenyu-admin\u7684\u53d1\u5e03API\u529f\u80fd\u4e3a\u4f60\u63d0\u4f9b\u4e86\u53e6\u4e00\u79cd\u53ef\u9009\u65b9\u5f0f\uff0c\u5b83\u5c06\u81ea\u52a8\u6ce8\u518c\u8be5API\u5230\u7f51\u5173\uff0c\u8ddf\u4f60\u4f7f\u7528shenyu\u5ba2\u6237\u7aef\u7684\u6ce8\u89e3\u6548\u679c\u4e00\u6837\u3002"),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"publish-api-cn",src:a(43644).c})),(0,i.yg)("p",null,"\u70b9\u51fb\u4fdd\u5b58\u540e\uff0c\u4f60\u4f1a\u770b\u5230\uff0c\u5728\u9009\u62e9\u5668\u548c\u89c4\u5219\u4e0b\u9762\u63d2\u5165\u4e86\u8be5API\u7684\u6ce8\u518c\u6570\u636e\u3002\u5982\u4e0b\u56fe\u6240\u793a\uff1a"),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"api-published-divide-list-cn",src:a(50044).c})),(0,i.yg)("h2",{id:"6-\u4e0b\u7ebfapi\u53ef\u9009"},"6. \u4e0b\u7ebfAPI(\u53ef\u9009)"),(0,i.yg)("blockquote",null,(0,i.yg)("p",{parentName:"blockquote"},"\u7279\u522b\u6ce8\u610f\uff1a\u70b9\u51fb\u4e0b\u7ebf\u540e\uff0c\u8be5API\u867d\u7136\u5728API\u6587\u6863\u5217\u8868\u4ecd\u7136\u53ef\u89c1\uff0c\u4f46\u4f1a\u4eceproxy\u63d2\u4ef6\u548c\u5143\u6570\u636e\u7ba1\u7406\u5217\u8868\u4e2d\u5220\u9664\uff0c\u5728\u4f60\u91cd\u65b0\u53d1\u5e03\u8be5API\u524d\uff0c\u7f51\u5173\u4e0d\u4f1a\u4ee3\u7406\u8be5API\uff0c\u5f53\u4f60\u901a\u8fc7\u7f51\u5173\u8bf7\u6c42\u8be5API\u65f6\uff0c\u4f1a\u62a5\u5f02\u5e38\u3002")),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"offline-api-cn",src:a(80791).c})),(0,i.yg)("h2",{id:"7-\u8bf7\u6c42api\u63a5\u53e3\u8c03\u8bd5"},"7. \u8bf7\u6c42API\uff08\u63a5\u53e3\u8c03\u8bd5\uff09"),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"api-debug-cn",src:a(23240).c})))}s.isMDXComponent=!0},23240:(e,n,a)=>{a.d(n,{c:()=>t});const t=a.p+"assets/images/api-debug-cn-21e21d8268e56ae0e5c6aca38a3201a2.png"},50044:(e,n,a)=>{a.d(n,{c:()=>t});const t=a.p+"assets/images/api-published-divide-list-cn-5c677c65014b02736e92693f3dc24ca4.png"},9932:(e,n,a)=>{a.d(n,{c:()=>t});const t=a.p+"assets/images/apidoc-env-cn-ba396443dab0ba1f1af6b2b2b9c1911d.png"},9144:(e,n,a)=>{a.d(n,{c:()=>t});const t=a.p+"assets/images/app-create-cn-9c4b22ae090633358810cdbecbed308a.png"},9476:(e,n,a)=>{a.d(n,{c:()=>t});const t=a.p+"assets/images/create-api-cn-4ed530b398dcc5a3bbbbfdcc601aa4b5.png"},80791:(e,n,a)=>{a.d(n,{c:()=>t});const t=a.p+"assets/images/offline-api-cn-9175cc887808adbcb7462288867254b1.png"},43644:(e,n,a)=>{a.d(n,{c:()=>t});const t=a.p+"assets/images/publish-api-cn-c4aa8cded9a30cabbe93dc0a4be3f41a.png"}}]);