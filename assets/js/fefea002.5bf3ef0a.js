"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[75288],{95788:(e,t,n)=>{n.d(t,{Iu:()=>u,yg:()=>g});var r=n(11504);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,g=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(g,l(l({ref:t},u),{},{components:n})):r.createElement(g,l({ref:t},u))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},25396:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var r=n(45072),o=(n(11504),n(95788));const a={title:"Custom Jwt convert Algorithm",keywords:["Custom Jwt Convert"],description:"Custom Jwt convert Algorithm"},l=void 0,i={unversionedId:"developer/custom-jwt-covert-algorithm",id:"version-2.5.1/developer/custom-jwt-covert-algorithm",isDocsHomePage:!1,title:"Custom Jwt convert Algorithm",description:"Custom Jwt convert Algorithm",source:"@site/versioned_docs/version-2.5.1/developer/custom-jwt-covert-algorithm.md",sourceDirName:"developer",slug:"/developer/custom-jwt-covert-algorithm",permalink:"/docs/2.5.1/developer/custom-jwt-covert-algorithm",editUrl:"https://github.com/apache/shenyu-website/edit/main/versioned_docs/version-2.5.1/developer/custom-jwt-covert-algorithm.md",version:"2.5.1",frontMatter:{title:"Custom Jwt convert Algorithm",keywords:["Custom Jwt Convert"],description:"Custom Jwt convert Algorithm"},sidebar:"version-2.5.1/tutorialSidebar",previous:{title:"Custom Filter",permalink:"/docs/2.5.1/developer/custom-filter"},next:{title:"Fetching Correct IP Address And Host",permalink:"/docs/2.5.1/developer/custom-parsing-ip-and-host"}},s=[{value:"Description",id:"description",children:[]},{value:"Extension",id:"extension",children:[]}],c={toc:s},u="wrapper";function p(e){let{components:t,...n}=e;return(0,o.yg)(u,(0,r.c)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"description"},"Description"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Users can customize the convert algorithm of ",(0,o.yg)("inlineCode",{parentName:"li"},"Jwt-plugin")," to achieve convert.")),(0,o.yg)("h2",{id:"extension"},"Extension"),(0,o.yg)("p",null," The default implementation is ",(0,o.yg)("inlineCode",{parentName:"p"},"org.apache.shenyu.plugin.jwt.strategy.DefaultJwtConvertStrategy"),". The SPI mechanism is adopted for extension, and the steps are as follows:"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Implements interface ",(0,o.yg)("inlineCode",{parentName:"p"},"org.apache.shenyu.plugin.jwt.strategy.JwtConvertStrategy")),(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre",className:"language-java"},"   /**\n    * Represents a conversion strategy that convert jwt to some attributes of\n    * serverWebExchange, especially attributes of the request header.\n    */\n   @SPI\n   public interface JwtConvertStrategy {\n   \n       /**\n        * HandleJson needs to be parsed into jwtRuleHandle in order to\n        * specify how to convert jwt.\n        *\n        * @param handleJson handleJson from rule\n        * @return jwtRuleHandle\n        */\n       JwtRuleHandle parseHandleJson(String handleJson);\n   \n       /**\n        * Converts jwt to some attributes of serverWebExchange based on jwtRuleHandle.\n        *\n        * @param jwtRuleHandle jwtRuleHandle\n        * @param exchange      exchange\n        * @param jwtBody       jwtBody\n        * @return serverWebExchange\n        */\n       ServerWebExchange convert(JwtRuleHandle jwtRuleHandle, ServerWebExchange exchange, Map<String, Object> jwtBody);\n   \n   }\n")),(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre",className:"language-java"},'\n    @Join\n    public class CustomJwtConvertStrategy implements JwtConvertStrategy {\n    \n        @Override\n        public CustomJwtRuleHandle parseHandleJson(final String handleJson) {\n    \n            return GsonUtils.getInstance().fromJson(handleJson, CustomJwtRuleHandle.class);\n        }\n    \n        @Override\n        public ServerWebExchange convert(final JwtRuleHandle jwtRuleHandle, final ServerWebExchange exchange, final Map<String, Object> jwtBody) {\n            final CustomJwtRuleHandle customJwtRuleHandle = (CustomJwtRuleHandle) jwtRuleHandle;\n            String customConvert = customJwtRuleHandle.getCustomConvert();\n            ServerHttpRequest modifiedRequest =\n                    exchange.getRequest().mutate().header("custom", customConvert).build();\n    \n            return exchange.mutate().request(modifiedRequest).build();\n        }\n    }\n'))),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Configures SPI"),(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre",className:"language-tex"},"custom=org.apache.shenyu.plugin.jwt.strategy.CustomJwtConvertStrategy\n")))),(0,o.yg)("p",null,"The project would use different conversion strategies based on the",(0,o.yg)("inlineCode",{parentName:"p"},"handleType")," parameter of  ",(0,o.yg)("inlineCode",{parentName:"p"},"JwtRuleHandle")," . For example, for the following ",(0,o.yg)("inlineCode",{parentName:"p"},"JwtRuleHandle"),",the project  would use our above ",(0,o.yg)("inlineCode",{parentName:"p"},"CustomJwtConvertStrategy")," . (Note: ",(0,o.yg)("inlineCode",{parentName:"p"},"handleType")," is ",(0,o.yg)("inlineCode",{parentName:"p"},"default")," or nonexistent, the project would use default ",(0,o.yg)("inlineCode",{parentName:"p"},"DefaultJwtConvertStrategy"),")"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "handleType":"custom",\n    "customConvert":"customConvert"\n}\n')),(0,o.yg)("p",null,"The case code is available for viewing in ",(0,o.yg)("inlineCode",{parentName:"p"},"org.apache.shenyu.plugin.jwt.strategy.CustomJwtConvertStrategy")))}p.isMDXComponent=!0}}]);