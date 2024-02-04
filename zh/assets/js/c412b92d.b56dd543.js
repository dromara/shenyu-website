"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[41284],{95788:(e,n,t)=>{t.d(n,{Iu:()=>c,yg:()=>d});var r=t(11504);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=s(t),y=i,d=u["".concat(p,".").concat(y)]||u[y]||m[y]||a;return t?r.createElement(d,l(l({ref:n},c),{},{components:t})):r.createElement(d,l({ref:n},c))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,l=new Array(a);l[0]=y;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[u]="string"==typeof e?e:i,l[1]=o;for(var s=2;s<a;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},19552:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var r=t(45072),i=(t(11504),t(95788));const a={title:"\u81ea\u5b9a\u4e49\u9650\u6d41\u7b56\u7565",description:"\u81ea\u5b9a\u4e49\u9650\u6d41\u7b56\u7565"},l=void 0,o={unversionedId:"developer/spi/custom-rate-limiter",id:"version-2.5.1/developer/spi/custom-rate-limiter",isDocsHomePage:!1,title:"\u81ea\u5b9a\u4e49\u9650\u6d41\u7b56\u7565",description:"\u81ea\u5b9a\u4e49\u9650\u6d41\u7b56\u7565",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.5.1/developer/spi/custom-rate-limiter.md",sourceDirName:"developer/spi",slug:"/developer/spi/custom-rate-limiter",permalink:"/zh/docs/2.5.1/developer/spi/custom-rate-limiter",editUrl:"https://github.com/apache/shenyu-website/edit/main/i18n/zh/docusaurus-plugin-content-docs/version-2.5.1/developer/spi/custom-rate-limiter.md",version:"2.5.1",frontMatter:{title:"\u81ea\u5b9a\u4e49\u9650\u6d41\u7b56\u7565",description:"\u81ea\u5b9a\u4e49\u9650\u6d41\u7b56\u7565"},sidebar:"version-2.5.1/tutorialSidebar",previous:{title:"\u81ea\u5b9a\u4e49\u6761\u4ef6\u7b56\u7565",permalink:"/zh/docs/2.5.1/developer/spi/custom-predicate-judge"},next:{title:"\u81ea\u5b9a\u4e49Filter",permalink:"/zh/docs/2.5.1/developer/custom-filter"}},p=[{value:"\u8bf4\u660e",id:"\u8bf4\u660e",children:[]},{value:"\u6269\u5c55\u5b9e\u73b0",id:"\u6269\u5c55\u5b9e\u73b0",children:[]}],s={toc:p},c="wrapper";function u(e){let{components:n,...t}=e;return(0,i.yg)(c,(0,r.c)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"\u8bf4\u660e"},"\u8bf4\u660e"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"\u5728\u81ea\u5b9a\u4e49\u5f00\u53d1\u524d\uff0c\u8bf7\u5148\u81ea\u5b9a\u4e49\u642d\u5efa\u597d\u7f51\u5173\u73af\u5883\uff0c\u8bf7\u53c2\u8003: ",(0,i.yg)("a",{parentName:"p",href:"../../deployment/deployment-custom"},"\u81ea\u5b9a\u4e49\u90e8\u7f72"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u5bf9 ",(0,i.yg)("inlineCode",{parentName:"p"},"org.apache.shenyu.plugin.ratelimiter.algorithm.RateLimiterAlgorithm")," \u8fdb\u884c\u81ea\u5b9a\u4e49\u6269\u5c55\u3002"))),(0,i.yg)("h2",{id:"\u6269\u5c55\u5b9e\u73b0"},"\u6269\u5c55\u5b9e\u73b0"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"\u65b0\u5efa\u4e00\u4e2a\u5de5\u7a0b\uff0c\u5f15\u5165\u5982\u4e0b\u4f9d\u8d56\uff1a")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-xml"},"<dependencies>\n    <dependency>\n        <groupId>org.apache.shenyu</groupId>\n        <artifactId>shenyu-plugin-base</artifactId>\n        <version>${project.version}</version>\n    </dependency>\n</dependencies>\n")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"\u65b0\u589e\u4e00\u4e2a\u7c7b ",(0,i.yg)("inlineCode",{parentName:"li"},"${you class}"),"\uff0c\u5b9e\u73b0 ",(0,i.yg)("inlineCode",{parentName:"li"},"org.apache.shenyu.plugin.ratelimiter.algorithm.RateLimiterAlgorithm"))),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-java"},"public class ${you class} implements RateLimiterAlgorithm<T> {\n  \n    /**\n     * Gets script.\n     *\n     * @return the script\n     */\n    public RedisScript<T> getScript() {\n        //\u4f60\u7684\u5f00\u53d1\u903b\u8f91\n    }\n    \n    /**\n     * Gets keys.\n     *\n     * @param id the id\n     * @return the keys\n     */\n    public List<String> getKeys(String id) {\n        //\u4f60\u7684\u5f00\u53d1\u903b\u8f91\n    }\n    /**\n     * Callback string.\n     *\n     * @param script the script\n     * @param keys the keys\n     * @param scriptArgs the script args\n     */\n    default void callback(final RedisScript<?> script, final List<String> keys, final List<String> scriptArgs) {\n        //\u4f60\u7684\u5f00\u53d1\u903b\u8f91\n    }       \n}\n")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"\u5728\u9879\u76ee ",(0,i.yg)("inlineCode",{parentName:"li"},"resources")," \u76ee\u5f55\u4e0b\uff0c\u65b0\u5efa ",(0,i.yg)("inlineCode",{parentName:"li"},"META-INF/shenyu")," \u76ee\u5f55\uff0c \u5e76\u4e14\u65b0\u589e\u6587\u4ef6\u540d\u4e3a : ",(0,i.yg)("inlineCode",{parentName:"li"},"org.apache.shenyu.plugin.ratelimiter.algorithm.RateLimiterAlgorithm"),".\n\u5185\u5bb9\u65b0\u589e ",(0,i.yg)("inlineCode",{parentName:"li"},"${you spi name}")," = ",(0,i.yg)("inlineCode",{parentName:"li"},"${you class path}"),":")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"${you spi name} = ${you class path}\n")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"\u5c06\u5de5\u7a0b\u6253\u5305\uff0c\u62f7\u8d1d\u5230\u7f51\u5173 (bootstrap-bin) \u7684 ",(0,i.yg)("inlineCode",{parentName:"p"},"lib")," \u6216 ",(0,i.yg)("inlineCode",{parentName:"p"},"ext-lib")," \u76ee\u5f55\u3002")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"\u5728 ",(0,i.yg)("inlineCode",{parentName:"p"},"Admin")," \u540e\u53f0 ---\x3e \u57fa\u7840\u7ba1\u7406 ---\x3e \u5b57\u5178\u7ba1\u7406 ,  \u627e\u5230\u5b57\u5178\u7f16\u7801\u4e3a ",(0,i.yg)("inlineCode",{parentName:"p"},"ALGORITHM_*"),"\uff0c\u65b0\u589e\u4e00\u6761\u6570\u636e\uff0c\u6ce8\u610f\u5b57\u5178\u540d\u79f0\u8981\u4e3a: ",(0,i.yg)("inlineCode",{parentName:"p"},"${you spi name}"),"\u3002"))),(0,i.yg)("img",{src:"/img/shenyu/custom/custom-rate-limiter-zh.jpg",width:"40%",height:"30%"}),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"\u6216\u8005\u6267\u884c\u4ee5\u4e0b\u81ea\u5b9a\u4e49",(0,i.yg)("inlineCode",{parentName:"li"},"SQL"),"\u8bed\u53e5\uff1a")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"INSERT IGNORE INTO `shenyu_dict` (\n        `id`,\n        `type`,\n        `dict_code`,\n        `dict_name`,\n        `dict_value`,\n        `desc`,\n        `sort`,\n        `enabled`,\n        `date_created`,\n        `date_updated`\n    )\nVALUES (\n        'you id',\n        'matchMode',\n        'MATCH_MODE',\n        'you spi name',\n        'you value',\n        'you spi name',\n        0,\n        1,\n        '2021-08-30 19:29:10',\n        '2021-08-30 20:15:23'\n    );\n")))}u.isMDXComponent=!0}}]);