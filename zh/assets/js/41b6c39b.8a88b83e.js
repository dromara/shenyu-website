"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[89617],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>g});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(t),d=a,g=u["".concat(p,".").concat(d)]||u[d]||m[d]||i;return t?r.createElement(g,o(o({ref:n},s),{},{components:t})):r.createElement(g,o({ref:n},s))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6883:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=t(87462),a=(t(67294),t(3905));const i={title:"\u81ea\u5b9a\u4e49mock\u6570\u636e\u751f\u6210\u5668",description:"\u81ea\u5b9a\u4e49mock\u6570\u636e\u751f\u6210\u5668"},o=void 0,l={unversionedId:"developer/spi/custom-mock-generator",id:"version-2.6.1/developer/spi/custom-mock-generator",isDocsHomePage:!1,title:"\u81ea\u5b9a\u4e49mock\u6570\u636e\u751f\u6210\u5668",description:"\u81ea\u5b9a\u4e49mock\u6570\u636e\u751f\u6210\u5668",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.6.1/developer/spi/custom-mock-generator.md",sourceDirName:"developer/spi",slug:"/developer/spi/custom-mock-generator",permalink:"/zh/docs/developer/spi/custom-mock-generator",editUrl:"https://github.com/apache/shenyu-website/edit/main/i18n/zh/docusaurus-plugin-content-docs/version-2.6.1/developer/spi/custom-mock-generator.md",version:"2.6.1",frontMatter:{title:"\u81ea\u5b9a\u4e49mock\u6570\u636e\u751f\u6210\u5668",description:"\u81ea\u5b9a\u4e49mock\u6570\u636e\u751f\u6210\u5668"},sidebar:"version-2.6.0/tutorialSidebar",previous:{title:"\u81ea\u5b9a\u4e49\u6307\u6807\u76d1\u63a7",permalink:"/zh/docs/developer/spi/custom-metrics-monitor"},next:{title:"\u81ea\u5b9a\u4e49\u6761\u4ef6\u53c2\u6570",permalink:"/zh/docs/developer/spi/custom-parameter-data"}},p=[{value:"\u8bf4\u660e",id:"\u8bf4\u660e",children:[]},{value:"\u6269\u5c55\u5b9e\u73b0",id:"\u6269\u5c55\u5b9e\u73b0",children:[]}],c={toc:p},s="wrapper";function u(e){let{components:n,...t}=e;return(0,a.kt)(s,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u8bf4\u660e"},"\u8bf4\u660e"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u5bf9 ",(0,a.kt)("inlineCode",{parentName:"li"},"org.apache.shenyu.plugin.mock.generator.Generator")," \u8fdb\u884c\u81ea\u5b9a\u4e49\u6269\u5c55\u3002"),(0,a.kt)("li",{parentName:"ol"},"mock \u6570\u636e\u751f\u6210\u8868\u8fbe\u5f0f\u9700\u8981\u6ee1\u8db3 ",(0,a.kt)("inlineCode",{parentName:"li"},"${name|param1|param2|...}")," \u7684\u683c\u5f0f\u3002")),(0,a.kt)("h2",{id:"\u6269\u5c55\u5b9e\u73b0"},"\u6269\u5c55\u5b9e\u73b0"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u65b0\u5efa\u4e00\u4e2a\u5de5\u7a0b\uff0c\u5f15\u5165\u5982\u4e0b\u4f9d\u8d56\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<dependencies>\n    <dependency>\n        <groupId>org.apache.shenyu</groupId>\n        <artifactId>shenyu-plugin-mock</artifactId>\n        <version>${project.version}</version>\n    </dependency>\n</dependencies>\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u65b0\u589e\u4e00\u4e2a\u7c7b ",(0,a.kt)("inlineCode",{parentName:"li"},"CustomerGenerator"),"\uff0c\u5b9e\u73b0 ",(0,a.kt)("inlineCode",{parentName:"li"},"org.apache.shenyu.plugin.mock.generator.Generator"),"\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"@Join\npublic class CustomGenerator implements Generator<String> {\n    @Override\n    public String getName() {\n       // \u751f\u6210\u5668\u7684\u540d\u79f0,\u5373 \u8868\u8fbe\u5f0f\u7b2c\u4e00\u4e2a | \u4e4b\u524d\u7684\u5185\u5bb9\n    }\n    \n    @Override\n    public String generate() {\n        // \u5b9e\u73b0\u6570\u636e\u751f\u6210\u7684\u903b\u8f91\n    }\n    \n    @Override\n    public int getParamSize() {\n        // \u8868\u8fbe\u5f0f\u5fc5\u586b\u53c2\u6570\u7684\u4e2a\u6570\n    }\n    \n    @Override\n    public void initParam(List params, String rule) {\n        // params \u4f1a\u8fd4\u56de \u8868\u8fbe\u5f0f\u6309\u7167 | \u5207\u5206\u540e\uff0c\u9664\u540d\u79f0\u4e4b\u5916\u7684\u5185\u5bb9\n        // rule \u539f\u8868\u8fbe\u5f0f\u7684\u5185\u5bb9\uff0c\u5982\u679c\u6709\u81ea\u5b9a\u7684\u53c2\u6570\u5904\u7406\u903b\u8f91 \u53ef\u4ee5\u4f7f\u7528\u8fd9\u4e2a\u53c2\u6570\n    }\n    \n    @Override\n    public boolean match(String rule) {\n        // \u6821\u9a8c\u5f53\u524d\u8868\u8fbe\u5f0f\u662f\u5426\u53ef\u4ee5\u5408\u6cd5\n    }\n    \n    @Override\n    public String[] getPrefixAndSuffix() {\n        // \u8fd4\u56de \u751f\u6210\u5185\u5bb9\u4e4b\u540e\u6dfb\u52a0\u7684\u524d\u7f00\u548c\u540e\u7f00 \uff0c\u8bf7\u8fd4\u56de \u5305\u542b\u4e24\u4e2a\u5143\u7d20\u7684\u5b57\u7b26\u4e32\u6570\u7ec4\n        // \u7b2c 0 \u4e2a\u5143\u7d20\u662f\u524d\u7f00\uff0c\u7b2c 1 \u4e2a\u5143\u7d20\u662f\u540e\u7f00\n    }\n}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5728\u5de5\u7a0b\u7684 META-INF/shenyu \u76ee\u5f55\u521b\u5efa ",(0,a.kt)("inlineCode",{parentName:"li"},"org.apache.shenyu.plugin.mock.generator.Generator"),"\u6587\u4ef6\u4e2d\u6dfb\u52a0\u5982\u4e0b\u5185\u5bb9\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="script"',title:'"script"'},"${spi name}=${custom class path}\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"${spi name}"),"\u8868\u793a",(0,a.kt)("inlineCode",{parentName:"p"},"spi"),"\u7684\u540d\u79f0\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"${spi name }")," \u9700\u8981\u4e0e Generator \u5b9e\u73b0\u7c7b\u4e2d getName() \u65b9\u6cd5\u5b9a\u4e49\u7684\u4e00\u81f4 ",(0,a.kt)("inlineCode",{parentName:"p"},"${custom class path}"),"\u8868\u793a\u8be5\u7c7b\u7684\u5168\u9650\u5b9a\u540d\u3002\u6bd4\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="script"',title:'"script"'},"custom=xxx.xxx.xxx.CustomGenerator\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5c06\u5de5\u7a0b\u6253\u5305\uff0c\u62f7\u8d1d\u5230\u7f51\u5173 (bootstrap-bin) \u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"lib")," \u6216 ",(0,a.kt)("inlineCode",{parentName:"li"},"ext-lib")," \u76ee\u5f55\u3002")))}u.isMDXComponent=!0}}]);