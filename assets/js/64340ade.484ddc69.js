"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[65416],{95788:(e,n,r)=>{r.d(n,{Iu:()=>u,yg:()=>d});var t=r(11504);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=t.createContext({}),c=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},u=function(e){var n=c(e.components);return t.createElement(s.Provider,{value:n},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),m=i,d=p["".concat(s,".").concat(m)]||p[m]||g[m]||o;return r?t.createElement(d,a(a({ref:n},u),{},{components:r})):t.createElement(d,a({ref:n},u))}));function d(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[p]="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=r[c];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},59332:(e,n,r)=>{r.r(n),r.d(n,{contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var t=r(45072),i=(r(11504),r(95788));const o={title:"Custom Sign Algorithm",keywords:["Custom Sign"],description:"specify sign plugins for examination"},a=void 0,l={unversionedId:"developer/custom-sign-algorithm",id:"version-2.4.0/developer/custom-sign-algorithm",isDocsHomePage:!1,title:"Custom Sign Algorithm",description:"specify sign plugins for examination",source:"@site/versioned_docs/version-2.4.0/developer/custom-sign-algorithm.md",sourceDirName:"developer",slug:"/developer/custom-sign-algorithm",permalink:"/docs/2.4.0/developer/custom-sign-algorithm",editUrl:"https://github.com/apache/shenyu-website/edit/main/versioned_docs/version-2.4.0/developer/custom-sign-algorithm.md",version:"2.4.0",frontMatter:{title:"Custom Sign Algorithm",keywords:["Custom Sign"],description:"specify sign plugins for examination"},sidebar:"version-2.4.0/tutorialSidebar",previous:{title:"Custom Response",permalink:"/docs/2.4.0/developer/custom-result"},next:{title:"A multilingual HTTP client",permalink:"/docs/2.4.0/developer/developer-shenyu-client"}},s=[{value:"Description",id:"description",children:[]},{value:"Extension",id:"extension",children:[]}],c={toc:s},u="wrapper";function p(e){let{components:n,...r}=e;return(0,i.yg)(u,(0,t.c)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"description"},"Description"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Users can customize the signature authentication algorithm to achieve verification.")),(0,i.yg)("h2",{id:"extension"},"Extension"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"The default implementation is ",(0,i.yg)("inlineCode",{parentName:"li"},"org.apache.shenyu.plugin.sign.service.DefaultSignService"),"."),(0,i.yg)("li",{parentName:"ul"},"Declare a new class named ",(0,i.yg)("inlineCode",{parentName:"li"},"CustomSignService")," and implements  ",(0,i.yg)("inlineCode",{parentName:"li"},"org.apache.shenyu.plugin.api.SignService"),".")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-java"}," public interface SignService {\n \n     /**\n      * Sign verify pair.\n      *\n      * @param exchange   the exchange\n      * @return the pair\n      */\n     Pair<Boolean, String> signVerify(ServerWebExchange exchange);\n }\n\n")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"When returning true in Pair, the sign verification passes. If there's false, the String in Pair will be return to the frontend to show."),(0,i.yg)("li",{parentName:"ul"},"Register defined class as a Spring Bean.")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-java"},"   @Bean\n   public SignService customSignService() {\n         return new CustomSignService();\n   }\n")))}p.isMDXComponent=!0}}]);