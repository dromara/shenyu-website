"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[25364],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},28634:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const a={title:"\u6b63\u786e\u83b7\u53d6IP\u4e0eHost",description:"\u6b63\u786e\u83b7\u53d6Ip\u4e0ehost"},i=void 0,l={unversionedId:"developer/custom-parsing-ip-and-host",id:"version-2.6.1/developer/custom-parsing-ip-and-host",isDocsHomePage:!1,title:"\u6b63\u786e\u83b7\u53d6IP\u4e0eHost",description:"\u6b63\u786e\u83b7\u53d6Ip\u4e0ehost",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.6.1/developer/custom-parsing-ip-and-host.md",sourceDirName:"developer",slug:"/developer/custom-parsing-ip-and-host",permalink:"/zh/docs/developer/custom-parsing-ip-and-host",editUrl:"https://github.com/apache/shenyu-website/edit/main/i18n/zh/docusaurus-plugin-content-docs/version-2.6.1/developer/custom-parsing-ip-and-host.md",version:"2.6.1",frontMatter:{title:"\u6b63\u786e\u83b7\u53d6IP\u4e0eHost",description:"\u6b63\u786e\u83b7\u53d6Ip\u4e0ehost"},sidebar:"version-2.6.0/tutorialSidebar",previous:{title:"\u81ea\u5b9a\u4e49JWT\u63d2\u4ef6\u8f6c\u5316\u7b97\u6cd5",permalink:"/zh/docs/developer/custom-jwt-covert-algorithm"},next:{title:"\u63d2\u4ef6\u6269\u5c55",permalink:"/zh/docs/developer/custom-plugin"}},s=[{value:"\u8bf4\u660e",id:"\u8bf4\u660e",children:[]},{value:"\u9ed8\u8ba4\u5b9e\u73b0",id:"\u9ed8\u8ba4\u5b9e\u73b0",children:[]},{value:"\u6269\u5c55\u5b9e\u73b0",id:"\u6269\u5c55\u5b9e\u73b0",children:[]}],p={toc:s},c="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u8bf4\u660e"},"\u8bf4\u660e"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u672c\u6587\u662f\u8bf4\u660e\uff0c\u5982\u679c\u7f51\u5173\u524d\u9762\u6709\u4e00\u5c42",(0,o.kt)("inlineCode",{parentName:"li"},"nginx")," \u7684\u65f6\u5019\uff0c\u5982\u4f55\u83b7\u53d6\u6b63\u786e\u7684",(0,o.kt)("inlineCode",{parentName:"li"},"ip"),"\u4e0e\u7aef\u53e3\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u83b7\u53d6\u6b63\u786e\u7684\u4e4b\u540e\uff0c\u5728\u63d2\u4ef6\u4ee5\u53ca\u9009\u62e9\u5668\u4e2d\uff0c\u53ef\u4ee5\u6839\u636e ",(0,o.kt)("inlineCode",{parentName:"li"},"ip"),"\uff0c\u4e0e",(0,o.kt)("inlineCode",{parentName:"li"},"host"),"\u6765\u8fdb\u884c\u5339\u914d\u3002")),(0,o.kt)("h2",{id:"\u9ed8\u8ba4\u5b9e\u73b0"},"\u9ed8\u8ba4\u5b9e\u73b0"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"Apache ShenYu")," \u7f51\u5173\u81ea\u5e26\u5b9e\u73b0\u4e3a\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},"org.apache.shenyu.web.forward.ForwardedRemoteAddressResolver"),"\u3002")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u5b83\u9700\u8981\u4f60\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"nginx")," \u8bbe\u7f6e ",(0,o.kt)("inlineCode",{parentName:"p"},"X-Forwarded-For"),"\uff0c\u4ee5\u4fbf\u6765\u83b7\u53d6\u6b63\u786e\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"ip")," \u4e0e ",(0,o.kt)("inlineCode",{parentName:"p"},"host"),"\u3002"))),(0,o.kt)("h2",{id:"\u6269\u5c55\u5b9e\u73b0"},"\u6269\u5c55\u5b9e\u73b0"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u65b0\u589e\u4e00\u4e2a\u7c7b ",(0,o.kt)("inlineCode",{parentName:"li"},"CustomRemoteAddressResolver"),"\uff0c\u5b9e\u73b0",(0,o.kt)("inlineCode",{parentName:"li"},"org.apache.shenyu.plugin.api.RemoteAddressResolver"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"public interface RemoteAddressResolver {\n\n    /**\n     * Resolve inet socket address.\n     *\n     * @param exchange the exchange\n     * @return the inet socket address\n     */\n    default InetSocketAddress resolve(ServerWebExchange exchange) {\n        return exchange.getRequest().getRemoteAddress();\n    }\n\n}\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u628a\u4f60\u65b0\u589e\u7684\u5b9e\u73b0\u7c7b\u6ce8\u518c\u6210\u4e3aspring\u7684bean\uff0c\u5982\u4e0b")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"   @Bean\npublic RemoteAddressResolver customRemoteAddressResolver() {\n        return new CustomRemoteAddressResolver();\n        }\n")))}u.isMDXComponent=!0}}]);