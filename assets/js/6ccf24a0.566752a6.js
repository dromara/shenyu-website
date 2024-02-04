"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[28592],{95788:(e,n,t)=>{t.d(n,{Iu:()=>s,yg:()=>y});var a=t(11504);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var g=a.createContext({}),p=function(e){var n=a.useContext(g),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=p(e.components);return a.createElement(g.Provider,{value:n},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,g=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=p(t),d=i,y=u["".concat(g,".").concat(d)]||u[d]||c[d]||r;return t?a.createElement(y,l(l({ref:n},s),{},{components:t})):a.createElement(y,l({ref:n},s))}));function y(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,l=new Array(r);l[0]=d;var o={};for(var g in n)hasOwnProperty.call(n,g)&&(o[g]=n[g]);o.originalType=e,o[u]="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},92920:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>g});var a=t(45072),i=(t(11504),t(95788));const r={title:"Sign Plugin",keywords:["sign"],description:"sign plugin"},l="1. Overview",o={unversionedId:"plugin-center/authority-and-certification/sign-plugin",id:"version-2.4.0/plugin-center/authority-and-certification/sign-plugin",isDocsHomePage:!1,title:"Sign Plugin",description:"sign plugin",source:"@site/versioned_docs/version-2.4.0/plugin-center/authority-and-certification/sign-plugin.md",sourceDirName:"plugin-center/authority-and-certification",slug:"/plugin-center/authority-and-certification/sign-plugin",permalink:"/docs/2.4.0/plugin-center/authority-and-certification/sign-plugin",editUrl:"https://github.com/apache/shenyu-website/edit/main/versioned_docs/version-2.4.0/plugin-center/authority-and-certification/sign-plugin.md",version:"2.4.0",frontMatter:{title:"Sign Plugin",keywords:["sign"],description:"sign plugin"},sidebar:"version-2.4.0/tutorialSidebar",previous:{title:"OAuth2 Plugin",permalink:"/docs/2.4.0/plugin-center/authority-and-certification/oauth2-plugin"},next:{title:"Waf Plugin",permalink:"/docs/2.4.0/plugin-center/authority-and-certification/waf-plugin"}},g=[{value:"1.1 Plugin Name",id:"11-plugin-name",children:[]},{value:"1.2 Appropriate Scenario",id:"12-appropriate-scenario",children:[]},{value:"1.3 Plugin functionality",id:"13-plugin-functionality",children:[]},{value:"1.4 Plugin code",id:"14-plugin-code",children:[]},{value:"1.5 Added Since Which shenyu version",id:"15-added-since-which-shenyu-version",children:[]},{value:"2.1 Plugin-use procedure chart",id:"21-plugin-use-procedure-chart",children:[]},{value:"2.2 Import pom",id:"22-import-pom",children:[]},{value:"2.3 Enable plugin",id:"23-enable-plugin",children:[]},{value:"2.4 Config Plugin With Authorize",id:"24-config-plugin-with-authorize",children:[{value:"2.4.1 AK/SK Config",id:"241-aksk-config",children:[]},{value:"2.4.2 Implementation of Gateway Technology",id:"242-implementation-of-gateway-technology",children:[]},{value:"2.4.3 Authentication Guide",id:"243-authentication-guide",children:[]},{value:"2.4.4 Request GateWay",id:"244-request-gateway",children:[]},{value:"2.4.5 Plugin Config",id:"245-plugin-config",children:[]},{value:"2.4.6 Selector Config",id:"246-selector-config",children:[]},{value:"2.4.7 Rule Config",id:"247-rule-config",children:[]}]},{value:"2.5 Examples",id:"25-examples",children:[{value:"2.5.1 Verify api with sign plugin",id:"251-verify-api-with-sign-plugin",children:[]}]}],p={toc:g},s="wrapper";function u(e){let{components:n,...r}=e;return(0,i.yg)(s,(0,a.c)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"1-overview"},"1. Overview"),(0,i.yg)("h2",{id:"11-plugin-name"},"1.1 Plugin Name"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Sign Plugin")),(0,i.yg)("h2",{id:"12-appropriate-scenario"},"1.2 Appropriate Scenario"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Support http header to authorize"),(0,i.yg)("li",{parentName:"ul"},"Support http header and request body to authorize")),(0,i.yg)("h2",{id:"13-plugin-functionality"},"1.3 Plugin functionality"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Process signature authentication of requests.")),(0,i.yg)("h2",{id:"14-plugin-code"},"1.4 Plugin code"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Core Module: ",(0,i.yg)("inlineCode",{parentName:"p"},"shenyu-plugin-sign"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Core Class: ",(0,i.yg)("inlineCode",{parentName:"p"},"org.apache.shenyu.plugin.sign.SignPlugin")))),(0,i.yg)("h2",{id:"15-added-since-which-shenyu-version"},"1.5 Added Since Which shenyu version"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Since ShenYu 2.4.0")),(0,i.yg)("h1",{id:"2-how-to-use-plugin"},"2. How to use plugin"),(0,i.yg)("h2",{id:"21-plugin-use-procedure-chart"},"2.1 Plugin-use procedure chart"),(0,i.yg)("p",null,(0,i.yg)("img",{src:t(33783).c})),(0,i.yg)("h2",{id:"22-import-pom"},"2.2 Import pom"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Introducing ",(0,i.yg)("inlineCode",{parentName:"li"},"sign")," dependency in the ",(0,i.yg)("inlineCode",{parentName:"li"},"pom.xml")," file of the gateway")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-xml"},"\x3c!-- apache shenyu sign plugin start--\x3e\n<dependency>\n  <groupId>org.apache.shenyu</groupId>\n  <artifactId>shenyu-spring-boot-starter-plugin-sign</artifactId>\n  <version>${project.version}</version>\n</dependency>\n\x3c!-- apache shenyu sign plugin end--\x3e\n")),(0,i.yg)("h2",{id:"23-enable-plugin"},"2.3 Enable plugin"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"In ",(0,i.yg)("inlineCode",{parentName:"li"},"shenyu-admin"),"--\x3e BasicConfig --\x3e Plugin --\x3e ",(0,i.yg)("inlineCode",{parentName:"li"},"sign")," set to enable.")),(0,i.yg)("h2",{id:"24-config-plugin-with-authorize"},"2.4 Config Plugin With Authorize"),(0,i.yg)("h3",{id:"241-aksk-config"},"2.4.1 AK/SK Config"),(0,i.yg)("h4",{id:"2411-explanation"},"2.4.1.1 Explanation"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Manage and control the permissions of requests passing through the Apache ShenYu gateway."),(0,i.yg)("li",{parentName:"ul"},"Generate ",(0,i.yg)("inlineCode",{parentName:"li"},"AK/SK")," and use it with the ",(0,i.yg)("inlineCode",{parentName:"li"},"Sign")," plugin to achieve precise authority control based on URI level.")),(0,i.yg)("h4",{id:"2412-tutorial"},"2.4.1.2 Tutorial"),(0,i.yg)("p",null,"First, we can add a piece of authentication information in ",(0,i.yg)("inlineCode",{parentName:"p"},"BasicConfig")," - ",(0,i.yg)("inlineCode",{parentName:"p"},"Authentication")),(0,i.yg)("img",{src:"/img/shenyu/basicConfig/authorityManagement/auth_manages_add_en.jpg",width:"100%",height:"70%"}),(0,i.yg)("p",null,"Then configure this authentication information"),(0,i.yg)("img",{src:"/img/shenyu/basicConfig/authorityManagement/auth_param_en.jpg",width:"50%",height:"40%"}),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"AppName\uff1aThe application name associated with this account, it can can fill in or choose (data comes from the application name configured in the Metadata)."),(0,i.yg)("li",{parentName:"ul"},"TelPhone\uff1aTelphone information."),(0,i.yg)("li",{parentName:"ul"},"AppParams\uff1aWhen the requested context path is the same as the AppName\uff0cadd this value to the header, the key is ",(0,i.yg)("inlineCode",{parentName:"li"},"appParam"),"."),(0,i.yg)("li",{parentName:"ul"},"UserId\uff1aGive the user a name, just as an information record."),(0,i.yg)("li",{parentName:"ul"},"ExpandInfo\uff1aDescription of the account."),(0,i.yg)("li",{parentName:"ul"},"PathAuth\uff1aAfter opening, the account only allows access to the resource path configured below."),(0,i.yg)("li",{parentName:"ul"},"ResourcePath\uff1aAllow access to the resource path, support path matching\uff0ce.g. ",(0,i.yg)("inlineCode",{parentName:"li"},"/order/**")," .")),(0,i.yg)("p",null,"After submit, a piece of authentication information is generated, which contains ",(0,i.yg)("inlineCode",{parentName:"p"},"AppKey")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"AppSecret"),", which is the ",(0,i.yg)("inlineCode",{parentName:"p"},"AK/SK")," in the ",(0,i.yg)("inlineCode",{parentName:"p"},"Sign")," plugin."),(0,i.yg)("p",null,"Please refer to the detailed instructions of the ",(0,i.yg)("inlineCode",{parentName:"p"},"Sign")," plugin\uff1a ",(0,i.yg)("a",{parentName:"p",href:"../../plugin-center/authority-and-certification/sign-plugin"},"Sign Plugin"),"."),(0,i.yg)("h4",{id:"2413-pathoperation"},"2.4.1.3 PathOperation"),(0,i.yg)("p",null,"For the created authentication information, you can click ",(0,i.yg)("inlineCode",{parentName:"p"},"PathOperation")," at the end of a piece of authentication information."),(0,i.yg)("img",{src:"/img/shenyu/basicConfig/authorityManagement/auth_manage_modifyPath_en.jpg",width:"90%",height:"80%"}),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"On the left is a list of configurable paths, and on the right is a list of paths that allow the account to access."),(0,i.yg)("li",{parentName:"ul"},"Check the resource path, click the ",(0,i.yg)("inlineCode",{parentName:"li"},">")," or ",(0,i.yg)("inlineCode",{parentName:"li"},"<")," in the middle to move the checked data to the corresponding list."),(0,i.yg)("li",{parentName:"ul"},'In the list of configurable paths on the left, click "Editor" at the end of the account information line, and add them in the "Resource Path" in the pop-up box.')),(0,i.yg)("h3",{id:"242-implementation-of-gateway-technology"},"2.4.2 Implementation of Gateway Technology"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Adopt ",(0,i.yg)("inlineCode",{parentName:"li"},"AK/SK")," authentication technical scheme."),(0,i.yg)("li",{parentName:"ul"},"Adopt authentication plug-in and Chain of Responsibility Pattern to realize."),(0,i.yg)("li",{parentName:"ul"},"Take effect when the authentication plugin is enabled and all interfaces are configured for authentication.")),(0,i.yg)("h3",{id:"243-authentication-guide"},"2.4.3 Authentication Guide"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Step 1: ",(0,i.yg)("inlineCode",{parentName:"p"},"AK/SK")," is assigned by the gateway. For example, the ",(0,i.yg)("inlineCode",{parentName:"p"},"AK")," assigned to you is: ",(0,i.yg)("inlineCode",{parentName:"p"},"1TEST123456781")," SK is: ` 506eeb535cf740d7a755cb49f4a1536'")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Step 2: Decide the gateway path you want to access, such as ",(0,i.yg)("inlineCode",{parentName:"p"},"/api/service/abc"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Step 3: Construct parameters (the following are general parameters)"))),(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:null},"Field"),(0,i.yg)("th",{parentName:"tr",align:null},"Value"),(0,i.yg)("th",{parentName:"tr",align:"center"},"Description"))),(0,i.yg)("tbody",{parentName:"table"},(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"timestamp"),(0,i.yg)("td",{parentName:"tr",align:null},"current timestamp(String)"),(0,i.yg)("td",{parentName:"tr",align:"center"},"The number of milliseconds of the current time\uff08gateway will filter requests the before 5 minutes\uff09")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"path"),(0,i.yg)("td",{parentName:"tr",align:null},"/api/service/abc"),(0,i.yg)("td",{parentName:"tr",align:"center"},"The path that you want to request(Modify by yourself according to your configuration of gateway)")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"version"),(0,i.yg)("td",{parentName:"tr",align:null},"1.0.0"),(0,i.yg)("td",{parentName:"tr",align:"center"},(0,i.yg)("inlineCode",{parentName:"td"},"1.0.0")," is a fixed string value")))),(0,i.yg)("p",null,"Sort the above three field natually according to the key, then splice fields and fields, finally splice SK. The following is a code example."),(0,i.yg)("h4",{id:"2431-generate-sign-with-request-header"},"2.4.3.1 Generate sign with request header"),(0,i.yg)("p",null,"Step 1: First, construct a Map."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-java"},'\n   Map<String, String> map = Maps.newHashMapWithExpectedSize(3);\n   //timestamp is string format of millisecond. String.valueOf(LocalDateTime.now().toInstant(ZoneOffset.of("+8")).toEpochMilli())\n   map.put("timestamp","1571711067186");  // Value should be string format of milliseconds\n   map.put("path", "/api/service/abc");\n   map.put("version", "1.0.0");\n')),(0,i.yg)("p",null,"Step 2: Sort the ",(0,i.yg)("inlineCode",{parentName:"p"},"Keys")," naturally, then splice the key and values, and finally splice the ",(0,i.yg)("inlineCode",{parentName:"p"},"SK")," assigned to you."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-java"},'List<String> storedKeys = Arrays.stream(map.keySet()\n                .toArray(new String[]{}))\n                .sorted(Comparator.naturalOrder())\n                .collect(Collectors.toList());\nfinal String sign = storedKeys.stream()\n                .map(key -> String.join("", key, params.get(key)))\n                .collect(Collectors.joining()).trim()\n                .concat("506EEB535CF740D7A755CB4B9F4A1536");\n')),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"The returned sign value should be:",(0,i.yg)("inlineCode",{parentName:"li"},"path/api/service/abctimestamp1571711067186version1.0.0506EEB535CF740D7A755CB4B9F4A1536"))),(0,i.yg)("p",null,"Step 3: Md5 encryption and then capitalization."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-java"},"DigestUtils.md5DigestAsHex(sign.getBytes()).toUpperCase()\n")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"The final returned value is: ",(0,i.yg)("inlineCode",{parentName:"li"},"A021BF82BE342668B78CD9ADE593D683"),".")),(0,i.yg)("h4",{id:"2432-generate-sign-with-request-header-and-request-body"},"2.4.3.2 Generate sign with request header and request body"),(0,i.yg)("p",null,"Step 1: First, construct a Map, and the map must save every request body parameters"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-java"},'\n   Map<String, String> map = Maps.newHashMapWithExpectedSize(3);\n   //timestamp is string format of millisecond. String.valueOf(LocalDateTime.now().toInstant(ZoneOffset.of("+8")).toEpochMilli())\n   map.put("timestamp","1660659201000");  // Value should be string format of milliseconds\n   map.put("path", "/http/order/save");\n   map.put("version", "1.0.0");\n   // if your request body is:{"id":123,"name":"order"}\n   map.put("id", "1");\n   map.put("name", "order")\n')),(0,i.yg)("p",null,"Step 2: Sort the ",(0,i.yg)("inlineCode",{parentName:"p"},"Keys")," naturally, then splice the key and values, and finally splice the ",(0,i.yg)("inlineCode",{parentName:"p"},"SK")," assigned to you."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-java"},'List<String> storedKeys = Arrays.stream(map.keySet()\n                .toArray(new String[]{}))\n                .sorted(Comparator.naturalOrder())\n                .collect(Collectors.toList());\nfinal String sign = storedKeys.stream()\n                .map(key -> String.join("", key, params.get(key)))\n                .collect(Collectors.joining()).trim()\n                .concat("2D47C325AE5B4A4C926C23FD4395C719");\n')),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"The returned sign value should be:",(0,i.yg)("inlineCode",{parentName:"li"},"id123nameorderpath/http/order/savetimestamp1660659201000version1.0.02D47C325AE5B4A4C926C23FD4395C719"))),(0,i.yg)("p",null,"Step 3: Md5 encryption and then capitalization."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-java"},"DigestUtils.md5DigestAsHex(sign.getBytes()).toUpperCase()\n")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"The final returned value is: ",(0,i.yg)("inlineCode",{parentName:"li"},"35FE61C21F73E9AAFC46954C14F299D7"),".")),(0,i.yg)("h3",{id:"244-request-gateway"},"2.4.4 Request GateWay"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"If your visited path is:",(0,i.yg)("inlineCode",{parentName:"p"},"/api/service/abc"),".")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Address: http: domain name of gateway ",(0,i.yg)("inlineCode",{parentName:"p"},"/api/service/abc"),".")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Set ",(0,i.yg)("inlineCode",{parentName:"p"},"header"),"\uff0c",(0,i.yg)("inlineCode",{parentName:"p"},"header")," Parameter\uff1a"))),(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:null},"Field"),(0,i.yg)("th",{parentName:"tr",align:"right"},"Value"),(0,i.yg)("th",{parentName:"tr",align:"center"},"Description"))),(0,i.yg)("tbody",{parentName:"table"},(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"timestamp"),(0,i.yg)("td",{parentName:"tr",align:"right"},(0,i.yg)("inlineCode",{parentName:"td"},"1571711067186")),(0,i.yg)("td",{parentName:"tr",align:"center"},"Timestamp when signing")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"appKey"),(0,i.yg)("td",{parentName:"tr",align:"right"},(0,i.yg)("inlineCode",{parentName:"td"},"1TEST123456781")),(0,i.yg)("td",{parentName:"tr",align:"center"},"The AK value assigned to you")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"sign"),(0,i.yg)("td",{parentName:"tr",align:"right"},(0,i.yg)("inlineCode",{parentName:"td"},"A90E66763793BDBC817CF3B52AAAC041")),(0,i.yg)("td",{parentName:"tr",align:"center"},"The signature obtained above")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"version"),(0,i.yg)("td",{parentName:"tr",align:"right"},(0,i.yg)("inlineCode",{parentName:"td"},"1.0.0")),(0,i.yg)("td",{parentName:"tr",align:"center"},(0,i.yg)("inlineCode",{parentName:"td"},"1.0.0")," is a fixed value.")))),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"The signature plugin will filter requests before ",(0,i.yg)("inlineCode",{parentName:"p"},"5")," minutes by default")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"If the authentication fails, will return code ",(0,i.yg)("inlineCode",{parentName:"p"},"401"),", message may change."))),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "code": 401,\n  "message": "sign is not pass,Please check you sign algorithm!",\n  "data": null\n}\n')),(0,i.yg)("h3",{id:"245-plugin-config"},"2.4.5 Plugin Config"),(0,i.yg)("p",null,(0,i.yg)("img",{src:t(40028).c})),(0,i.yg)("h3",{id:"246-selector-config"},"2.4.6 Selector Config"),(0,i.yg)("p",null,(0,i.yg)("img",{src:t(38148).c})),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Only those matched requests can be authenticated by signature.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Selectors and rules, please refer to: ",(0,i.yg)("a",{parentName:"p",href:"../../user-guide/admin-usage/selector-and-rule"},"Selector And Rule Config")))),(0,i.yg)("h3",{id:"247-rule-config"},"2.4.7 Rule Config"),(0,i.yg)("p",null,(0,i.yg)("img",{src:t(59988).c})),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"close(signRequestBody): generate signature with request header.  "),(0,i.yg)("li",{parentName:"ul"},"open(signRequestBody): generate signature with request header and request body.")),(0,i.yg)("h2",{id:"25-examples"},"2.5 Examples"),(0,i.yg)("h3",{id:"251-verify-api-with-sign-plugin"},"2.5.1 Verify api with sign plugin"),(0,i.yg)("h4",{id:"2511-plugin-config"},"2.5.1.1 Plugin Config"),(0,i.yg)("p",null,(0,i.yg)("img",{src:t(40028).c})),(0,i.yg)("h4",{id:"2512-selector-config"},"2.5.1.2 Selector Config"),(0,i.yg)("p",null,(0,i.yg)("img",{src:t(38048).c})),(0,i.yg)("h4",{id:"2513-rule-config"},"2.5.1.3 Rule Config"),(0,i.yg)("p",null,(0,i.yg)("img",{src:t(65788).c})),(0,i.yg)("h4",{id:"2515-add-appkeysecretkey"},"2.5.1.5 Add AppKey/SecretKey"),(0,i.yg)("p",null,(0,i.yg)("img",{src:t(92656).c})),(0,i.yg)("h4",{id:"2516-request-service-and-check-result"},"2.5.1.6 Request Service and check result"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"build request params with ",(0,i.yg)("inlineCode",{parentName:"li"},"Authentication Guide"),",")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-java"},'public class Test1 {\n  public static void main(String[] args) {\n    Map<String, String> map = Maps.newHashMapWithExpectedSize(3);\n    //timestamp\u4e3a\u6beb\u79d2\u6570\u7684\u5b57\u7b26\u4e32\u5f62\u5f0f String.valueOf(LocalDateTime.now().toInstant(ZoneOffset.of("+8")).toEpochMilli())\n    map.put("timestamp","1660658725000");  //\u503c\u5e94\u8be5\u4e3a\u6beb\u79d2\u6570\u7684\u5b57\u7b26\u4e32\u5f62\u5f0f\n    map.put("path", "/http/order/save");\n    map.put("version", "1.0.0");\n    map.put("id", "123");\n    map.put("name", "order");\n    // map.put("body", "{\\"id\\":123,\\"name\\":\\"order\\"}");\n\n    List<String> storedKeys = Arrays.stream(map.keySet()\n                    .toArray(new String[]{}))\n            .sorted(Comparator.naturalOrder())\n            .collect(Collectors.toList());\n    final String sign = storedKeys.stream()\n            .map(key -> String.join("", key, map.get(key)))\n            .collect(Collectors.joining()).trim()\n            .concat("2D47C325AE5B4A4C926C23FD4395C719");\n    System.out.println(sign);\n\n    System.out.println(DigestUtils.md5DigestAsHex(sign.getBytes()).toUpperCase());\n  }\n}\n')),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"signature without body: ",(0,i.yg)("inlineCode",{parentName:"li"},"path/http/order/savetimestamp1571711067186version1.0.02D47C325AE5B4A4C926C23FD4395C719")),(0,i.yg)("li",{parentName:"ul"},"sign without body result is: ",(0,i.yg)("inlineCode",{parentName:"li"},"9696D3E549A6AEBE763CCC2C7952DDC1"))),(0,i.yg)("p",null,(0,i.yg)("img",{src:t(13016).c})),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-java"},'public class Test2 {\n  public static void main(String[] args) {\n    Map<String, String> map = Maps.newHashMapWithExpectedSize(3);\n    //timestamp\u4e3a\u6beb\u79d2\u6570\u7684\u5b57\u7b26\u4e32\u5f62\u5f0f String.valueOf(LocalDateTime.now().toInstant(ZoneOffset.of("+8")).toEpochMilli())\n    map.put("timestamp","1660659201000");  //\u503c\u5e94\u8be5\u4e3a\u6beb\u79d2\u6570\u7684\u5b57\u7b26\u4e32\u5f62\u5f0f\n    map.put("path", "/http/order/save");\n    map.put("version", "1.0.0");\n\n    List<String> storedKeys = Arrays.stream(map.keySet()\n                    .toArray(new String[]{}))\n            .sorted(Comparator.naturalOrder())\n            .collect(Collectors.toList());\n    final String sign = storedKeys.stream()\n            .map(key -> String.join("", key, map.get(key)))\n            .collect(Collectors.joining()).trim()\n            .concat("2D47C325AE5B4A4C926C23FD4395C719");\n    System.out.println(sign);\n\n    System.out.println(DigestUtils.md5DigestAsHex(sign.getBytes()).toUpperCase());\n  }\n}\n')),(0,i.yg)("p",null,(0,i.yg)("em",{parentName:"p"},"signature with body:",(0,i.yg)("inlineCode",{parentName:"em"},"id123nameorderpath/http/order/savetimestamp1660659201000version1.0.02D47C325AE5B4A4C926C23FD4395C719")),"sign with body result is:",(0,i.yg)("inlineCode",{parentName:"p"},"35FE61C21F73E9AAFC46954C14F299D7")),(0,i.yg)("p",null,(0,i.yg)("img",{src:t(24572).c})),(0,i.yg)("h1",{id:"3-how-to-disable-plugin"},"3. How to disable plugin"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"In ",(0,i.yg)("inlineCode",{parentName:"li"},"shenyu-admin"),"--\x3e BasicConfig --\x3e Plugin --\x3e ",(0,i.yg)("inlineCode",{parentName:"li"},"sign")," set to disabled.")),(0,i.yg)("h1",{id:"4-extension"},"4. Extension"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Please refer to: ",(0,i.yg)("a",{parentName:"li",href:"../../developer/custom-sign-algorithm"},"dev-sign"),".")))}u.isMDXComponent=!0},33783:(e,n,t)=>{t.d(n,{c:()=>a});const a=t.p+"assets/images/plugin_use_en-8b5661551cdf92fdabc9cb2e7947cffc.jpg"},65788:(e,n,t)=>{t.d(n,{c:()=>a});const a=t.p+"assets/images/example-rule-en-503e8b5697e5aada40d67b999ce281c7.png"},38048:(e,n,t)=>{t.d(n,{c:()=>a});const a=t.p+"assets/images/example-selector-en-5f344f0f789b9b37e2ddefe245149eaf.png"},92656:(e,n,t)=>{t.d(n,{c:()=>a});const a=t.p+"assets/images/example-sign-auth-en-7531558c55916cf987b149f58a336d16.png"},24572:(e,n,t)=>{t.d(n,{c:()=>a});const a=t.p+"assets/images/result-with-body-d430bbcc77fef2c8bdd89cace7d6e418.png"},13016:(e,n,t)=>{t.d(n,{c:()=>a});const a=t.p+"assets/images/result-1c40210c3da55750298242b3b037f289.png"},59988:(e,n,t)=>{t.d(n,{c:()=>a});const a=t.p+"assets/images/rule-en-66585f6eca8f875a4a6e1fd5c65646d1.png"},38148:(e,n,t)=>{t.d(n,{c:()=>a});const a=t.p+"assets/images/selector-en-993bda66883505a34953d527663d7475.png"},40028:(e,n,t)=>{t.d(n,{c:()=>a});const a=t.p+"assets/images/sign_open_en-7a1bcfbe89eec35490eec64c037a7103.jpg"}}]);