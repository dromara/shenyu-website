"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[27230],{95788:(e,n,r)=>{r.d(n,{Iu:()=>c,yg:()=>g});var t=r(11504);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=t.createContext({}),p=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},c=function(e){var n=p(e.components);return t.createElement(s.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(r),m=o,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return r?t.createElement(g,i(i({ref:n},c),{},{components:r})):t.createElement(g,i({ref:n},c))}));function g(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},45208:(e,n,r)=>{r.r(n),r.d(n,{contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var t=r(45072),o=(r(11504),r(95788));const a={title:"\u6b63\u786e\u83b7\u53d6IP\u4e0eHost",description:"\u6b63\u786e\u83b7\u53d6Ip\u4e0ehost"},i=void 0,l={unversionedId:"developer/custom-parsing-ip-and-host",id:"version-2.6.1/developer/custom-parsing-ip-and-host",isDocsHomePage:!1,title:"\u6b63\u786e\u83b7\u53d6IP\u4e0eHost",description:"\u6b63\u786e\u83b7\u53d6Ip\u4e0ehost",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.6.1/developer/custom-parsing-ip-and-host.md",sourceDirName:"developer",slug:"/developer/custom-parsing-ip-and-host",permalink:"/zh/docs/developer/custom-parsing-ip-and-host",editUrl:"https://github.com/apache/shenyu-website/edit/main/i18n/zh/docusaurus-plugin-content-docs/version-2.6.1/developer/custom-parsing-ip-and-host.md",version:"2.6.1",frontMatter:{title:"\u6b63\u786e\u83b7\u53d6IP\u4e0eHost",description:"\u6b63\u786e\u83b7\u53d6Ip\u4e0ehost"},sidebar:"version-2.6.0/tutorialSidebar",previous:{title:"\u81ea\u5b9a\u4e49JWT\u63d2\u4ef6\u8f6c\u5316\u7b97\u6cd5",permalink:"/zh/docs/developer/custom-jwt-covert-algorithm"},next:{title:"\u63d2\u4ef6\u6269\u5c55",permalink:"/zh/docs/developer/custom-plugin"}},s=[{value:"\u8bf4\u660e",id:"\u8bf4\u660e",children:[]},{value:"\u9ed8\u8ba4\u5b9e\u73b0",id:"\u9ed8\u8ba4\u5b9e\u73b0",children:[]},{value:"\u6269\u5c55\u5b9e\u73b0",id:"\u6269\u5c55\u5b9e\u73b0",children:[]}],p={toc:s},c="wrapper";function u(e){let{components:n,...r}=e;return(0,o.yg)(c,(0,t.c)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"\u8bf4\u660e"},"\u8bf4\u660e"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"\u672c\u6587\u662f\u8bf4\u660e\uff0c\u5982\u679c\u7f51\u5173\u524d\u9762\u6709\u4e00\u5c42",(0,o.yg)("inlineCode",{parentName:"li"},"nginx")," \u7684\u65f6\u5019\uff0c\u5982\u4f55\u83b7\u53d6\u6b63\u786e\u7684",(0,o.yg)("inlineCode",{parentName:"li"},"ip"),"\u4e0e\u7aef\u53e3\u3002"),(0,o.yg)("li",{parentName:"ul"},"\u83b7\u53d6\u6b63\u786e\u7684\u4e4b\u540e\uff0c\u5728\u63d2\u4ef6\u4ee5\u53ca\u9009\u62e9\u5668\u4e2d\uff0c\u53ef\u4ee5\u6839\u636e ",(0,o.yg)("inlineCode",{parentName:"li"},"ip"),"\uff0c\u4e0e",(0,o.yg)("inlineCode",{parentName:"li"},"host"),"\u6765\u8fdb\u884c\u5339\u914d\u3002")),(0,o.yg)("h2",{id:"\u9ed8\u8ba4\u5b9e\u73b0"},"\u9ed8\u8ba4\u5b9e\u73b0"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"\u5728 ",(0,o.yg)("inlineCode",{parentName:"p"},"Apache ShenYu")," \u7f51\u5173\u81ea\u5e26\u5b9e\u73b0\u4e3a\uff1a",(0,o.yg)("inlineCode",{parentName:"p"},"org.apache.shenyu.web.forward.ForwardedRemoteAddressResolver"),"\u3002")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"\u5b83\u9700\u8981\u4f60\u5728 ",(0,o.yg)("inlineCode",{parentName:"p"},"nginx")," \u8bbe\u7f6e ",(0,o.yg)("inlineCode",{parentName:"p"},"X-Forwarded-For"),"\uff0c\u4ee5\u4fbf\u6765\u83b7\u53d6\u6b63\u786e\u7684 ",(0,o.yg)("inlineCode",{parentName:"p"},"ip")," \u4e0e ",(0,o.yg)("inlineCode",{parentName:"p"},"host"),"\u3002"))),(0,o.yg)("h2",{id:"\u6269\u5c55\u5b9e\u73b0"},"\u6269\u5c55\u5b9e\u73b0"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"\u65b0\u589e\u4e00\u4e2a\u7c7b ",(0,o.yg)("inlineCode",{parentName:"li"},"CustomRemoteAddressResolver"),"\uff0c\u5b9e\u73b0",(0,o.yg)("inlineCode",{parentName:"li"},"org.apache.shenyu.plugin.api.RemoteAddressResolver"))),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-java"},"public interface RemoteAddressResolver {\n\n    /**\n     * Resolve inet socket address.\n     *\n     * @param exchange the exchange\n     * @return the inet socket address\n     */\n    default InetSocketAddress resolve(ServerWebExchange exchange) {\n        return exchange.getRequest().getRemoteAddress();\n    }\n\n}\n")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"\u628a\u4f60\u65b0\u589e\u7684\u5b9e\u73b0\u7c7b\u6ce8\u518c\u6210\u4e3aspring\u7684bean\uff0c\u5982\u4e0b")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-java"},"   @Bean\npublic RemoteAddressResolver customRemoteAddressResolver() {\n        return new CustomRemoteAddressResolver();\n        }\n")))}u.isMDXComponent=!0}}]);