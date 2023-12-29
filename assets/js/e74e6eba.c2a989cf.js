"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[18790],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=a.createContext({}),s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=s(n),m=i,g=d["".concat(o,".").concat(m)]||d[m]||c[m]||r;return n?a.createElement(g,l(l({ref:t},u),{},{components:n})):a.createElement(g,l({ref:t},u))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=m;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[d]="string"==typeof e?e:i,l[1]=p;for(var s=2;s<r;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},75711:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>p,toc:()=>o});var a=n(87462),i=(n(67294),n(3905));const r={title:"Sign Plugin",keywords:["sign"],description:"sign plugin"},l="1. Overview",p={unversionedId:"plugin-center/security/sign-plugin",id:"plugin-center/security/sign-plugin",isDocsHomePage:!1,title:"Sign Plugin",description:"sign plugin",source:"@site/docs/plugin-center/security/sign-plugin.md",sourceDirName:"plugin-center/security",slug:"/plugin-center/security/sign-plugin",permalink:"/docs/next/plugin-center/security/sign-plugin",editUrl:"https://github.com/apache/shenyu-website/edit/main/docs/plugin-center/security/sign-plugin.md",version:"current",frontMatter:{title:"Sign Plugin",keywords:["sign"],description:"sign plugin"},sidebar:"tutorialSidebar",previous:{title:"OAuth2 Plugin",permalink:"/docs/next/plugin-center/security/oauth2-plugin"},next:{title:"Waf Plugin",permalink:"/docs/next/plugin-center/security/waf-plugin"}},o=[{value:"1.1 Plugin Name",id:"11-plugin-name",children:[]},{value:"1.2 Appropriate Scenario",id:"12-appropriate-scenario",children:[]},{value:"1.3 Plugin functionality",id:"13-plugin-functionality",children:[]},{value:"1.4 Plugin code",id:"14-plugin-code",children:[]},{value:"1.5 Added Since Which shenyu version",id:"15-added-since-which-shenyu-version",children:[]},{value:"2.1 Plugin-use procedure chart",id:"21-plugin-use-procedure-chart",children:[]},{value:"2.2 Import pom",id:"22-import-pom",children:[]},{value:"2.3 Enable plugin",id:"23-enable-plugin",children:[]},{value:"2.4 Config Plugin With Authorize\uff081.0.0\uff09",id:"24-config-plugin-with-authorize100",children:[{value:"2.4.1 AK/SK Config",id:"241-aksk-config",children:[]},{value:"2.4.2 Implementation of Gateway Technology",id:"242-implementation-of-gateway-technology",children:[]},{value:"2.4.3 Authentication Guide",id:"243-authentication-guide",children:[]},{value:"2.4.4 Request GateWay",id:"244-request-gateway",children:[]},{value:"2.4.5 Plugin Config",id:"245-plugin-config",children:[]},{value:"2.4.6 Selector Config",id:"246-selector-config",children:[]},{value:"2.4.7 Rule Config",id:"247-rule-config",children:[]}]},{value:"2.5 Config Plugin With Authorize\uff082.0.0\uff09",id:"25-config-plugin-with-authorize200",children:[{value:"2.5.1 Authentication Guide",id:"251-authentication-guide",children:[]},{value:"2.5.2 Request GateWay",id:"252-request-gateway",children:[]}]},{value:"2.6 Examples",id:"26-examples",children:[{value:"2.6.1 Verify api with sign plugin\uff081.0.0\uff09",id:"261-verify-api-with-sign-plugin100",children:[]},{value:"2.6.2 Verify api with sign plugin\uff082.0.0\uff09",id:"262-verify-api-with-sign-plugin200",children:[]}]}],s={toc:o},u="wrapper";function d(e){let{components:t,...r}=e;return(0,i.kt)(u,(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"1-overview"},"1. Overview"),(0,i.kt)("h2",{id:"11-plugin-name"},"1.1 Plugin Name"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Sign Plugin")),(0,i.kt)("h2",{id:"12-appropriate-scenario"},"1.2 Appropriate Scenario"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Support http header to authorize"),(0,i.kt)("li",{parentName:"ul"},"Support http header and request body to authorize")),(0,i.kt)("h2",{id:"13-plugin-functionality"},"1.3 Plugin functionality"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Process signature authentication of requests.")),(0,i.kt)("h2",{id:"14-plugin-code"},"1.4 Plugin code"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Core Module: ",(0,i.kt)("inlineCode",{parentName:"p"},"shenyu-plugin-sign"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Core Class: ",(0,i.kt)("inlineCode",{parentName:"p"},"org.apache.shenyu.plugin.sign.SignPlugin")))),(0,i.kt)("h2",{id:"15-added-since-which-shenyu-version"},"1.5 Added Since Which shenyu version"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Since ShenYu 2.4.0")),(0,i.kt)("h1",{id:"2-how-to-use-plugin"},"2. How to use plugin"),(0,i.kt)("h2",{id:"21-plugin-use-procedure-chart"},"2.1 Plugin-use procedure chart"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(74327).Z})),(0,i.kt)("h2",{id:"22-import-pom"},"2.2 Import pom"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Introducing ",(0,i.kt)("inlineCode",{parentName:"li"},"sign")," dependency in the ",(0,i.kt)("inlineCode",{parentName:"li"},"pom.xml")," file of the gateway")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"\x3c!-- apache shenyu sign plugin start--\x3e\n<dependency>\n  <groupId>org.apache.shenyu</groupId>\n  <artifactId>shenyu-spring-boot-starter-plugin-sign</artifactId>\n  <version>${project.version}</version>\n</dependency>\n\x3c!-- apache shenyu sign plugin end--\x3e\n")),(0,i.kt)("h2",{id:"23-enable-plugin"},"2.3 Enable plugin"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"In ",(0,i.kt)("inlineCode",{parentName:"li"},"shenyu-admin"),"--\x3e BasicConfig --\x3e Plugin --\x3e ",(0,i.kt)("inlineCode",{parentName:"li"},"sign")," set to enable.")),(0,i.kt)("h2",{id:"24-config-plugin-with-authorize100"},"2.4 Config Plugin With Authorize\uff081.0.0\uff09"),(0,i.kt)("h3",{id:"241-aksk-config"},"2.4.1 AK/SK Config"),(0,i.kt)("h4",{id:"2411-explanation"},"2.4.1.1 Explanation"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Manage and control the permissions of requests passing through the Apache ShenYu gateway."),(0,i.kt)("li",{parentName:"ul"},"Generate ",(0,i.kt)("inlineCode",{parentName:"li"},"AK/SK")," and use it with the ",(0,i.kt)("inlineCode",{parentName:"li"},"Sign")," plugin to achieve precise authority control based on URI level.")),(0,i.kt)("h4",{id:"2412-tutorial"},"2.4.1.2 Tutorial"),(0,i.kt)("p",null,"First, we can add a piece of authentication information in ",(0,i.kt)("inlineCode",{parentName:"p"},"BasicConfig")," - ",(0,i.kt)("inlineCode",{parentName:"p"},"Authentication")),(0,i.kt)("img",{src:"/img/shenyu/basicConfig/authorityManagement/auth_manages_add_en.jpg",width:"100%",height:"70%"}),(0,i.kt)("p",null,"Then configure this authentication information"),(0,i.kt)("img",{src:"/img/shenyu/basicConfig/authorityManagement/auth_param_en.jpg",width:"50%",height:"40%"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"AppName\uff1aThe application name associated with this account, it can can fill in or choose (data comes from the application name configured in the Metadata)."),(0,i.kt)("li",{parentName:"ul"},"TelPhone\uff1aTelphone information."),(0,i.kt)("li",{parentName:"ul"},"AppParams\uff1aWhen the requested context path is the same as the AppName\uff0cadd this value to the header, the key is ",(0,i.kt)("inlineCode",{parentName:"li"},"appParam"),"."),(0,i.kt)("li",{parentName:"ul"},"UserId\uff1aGive the user a name, just as an information record."),(0,i.kt)("li",{parentName:"ul"},"ExpandInfo\uff1aDescription of the account."),(0,i.kt)("li",{parentName:"ul"},"PathAuth\uff1aAfter opening, the account only allows access to the resource path configured below."),(0,i.kt)("li",{parentName:"ul"},"ResourcePath\uff1aAllow access to the resource path, support path matching\uff0ce.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"/order/**")," .")),(0,i.kt)("p",null,"After submit, a piece of authentication information is generated, which contains ",(0,i.kt)("inlineCode",{parentName:"p"},"AppKey")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"AppSecret"),", which is the ",(0,i.kt)("inlineCode",{parentName:"p"},"AK/SK")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Sign")," plugin."),(0,i.kt)("p",null,"Please refer to the detailed instructions of the ",(0,i.kt)("inlineCode",{parentName:"p"},"Sign")," plugin\uff1a ",(0,i.kt)("a",{parentName:"p",href:"../../plugin-center/authority-and-certification/sign-plugin"},"Sign Plugin"),"."),(0,i.kt)("h4",{id:"2413-pathoperation"},"2.4.1.3 PathOperation"),(0,i.kt)("p",null,"For the created authentication information, you can click ",(0,i.kt)("inlineCode",{parentName:"p"},"PathOperation")," at the end of a piece of authentication information."),(0,i.kt)("img",{src:"/img/shenyu/basicConfig/authorityManagement/auth_manage_modifyPath_en.jpg",width:"90%",height:"80%"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"On the left is a list of configurable paths, and on the right is a list of paths that allow the account to access."),(0,i.kt)("li",{parentName:"ul"},"Check the resource path, click the ",(0,i.kt)("inlineCode",{parentName:"li"},">")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"<")," in the middle to move the checked data to the corresponding list."),(0,i.kt)("li",{parentName:"ul"},'In the list of configurable paths on the left, click "Editor" at the end of the account information line, and add them in the "Resource Path" in the pop-up box.')),(0,i.kt)("h3",{id:"242-implementation-of-gateway-technology"},"2.4.2 Implementation of Gateway Technology"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Adopt ",(0,i.kt)("inlineCode",{parentName:"li"},"AK/SK")," authentication technical scheme."),(0,i.kt)("li",{parentName:"ul"},"Adopt authentication plug-in and Chain of Responsibility Pattern to realize."),(0,i.kt)("li",{parentName:"ul"},"Take effect when the authentication plugin is enabled and all interfaces are configured for authentication.")),(0,i.kt)("h3",{id:"243-authentication-guide"},"2.4.3 Authentication Guide"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Step 1: ",(0,i.kt)("inlineCode",{parentName:"p"},"AK/SK")," is assigned by the gateway. For example, the ",(0,i.kt)("inlineCode",{parentName:"p"},"AK")," assigned to you is: ",(0,i.kt)("inlineCode",{parentName:"p"},"1TEST123456781")," SK is: ` 506eeb535cf740d7a755cb49f4a1536'")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Step 2: Decide the gateway path you want to access, such as ",(0,i.kt)("inlineCode",{parentName:"p"},"/api/service/abc"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Step 3: Construct parameters (the following are general parameters)"))),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Field"),(0,i.kt)("th",{parentName:"tr",align:null},"Value"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"timestamp"),(0,i.kt)("td",{parentName:"tr",align:null},"current timestamp(String)"),(0,i.kt)("td",{parentName:"tr",align:"center"},"The number of milliseconds of the current time\uff08gateway will filter requests the before 5 minutes\uff09")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"path"),(0,i.kt)("td",{parentName:"tr",align:null},"/api/service/abc"),(0,i.kt)("td",{parentName:"tr",align:"center"},"The path that you want to request(Modify by yourself according to your configuration of gateway)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"version"),(0,i.kt)("td",{parentName:"tr",align:null},"1.0.0"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"1.0.0")," is a fixed string value")))),(0,i.kt)("p",null,"Sort the above three field natually according to the key, then splice fields and fields, finally splice SK. The following is a code example."),(0,i.kt)("h4",{id:"2431-generate-sign-with-request-header"},"2.4.3.1 Generate sign with request header"),(0,i.kt)("p",null,"Step 1: First, construct a Map."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'\n   Map<String, String> map = Maps.newHashMapWithExpectedSize(3);\n   //timestamp is string format of millisecond. String.valueOf(LocalDateTime.now().toInstant(ZoneOffset.of("+8")).toEpochMilli())\n   map.put("timestamp","1571711067186");  // Value should be string format of milliseconds\n   map.put("path", "/api/service/abc");\n   map.put("version", "1.0.0");\n')),(0,i.kt)("p",null,"Step 2: Sort the ",(0,i.kt)("inlineCode",{parentName:"p"},"Keys")," naturally, then splice the key and values, and finally splice the ",(0,i.kt)("inlineCode",{parentName:"p"},"SK")," assigned to you."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'List<String> storedKeys = Arrays.stream(map.keySet()\n                .toArray(new String[]{}))\n                .sorted(Comparator.naturalOrder())\n                .collect(Collectors.toList());\nfinal String sign = storedKeys.stream()\n                .map(key -> String.join("", key, map.get(key)))\n                .collect(Collectors.joining()).trim()\n                .concat("506EEB535CF740D7A755CB4B9F4A1536");\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The returned sign value should be:",(0,i.kt)("inlineCode",{parentName:"li"},"path/api/service/abctimestamp1571711067186version1.0.0506EEB535CF740D7A755CB4B9F4A1536"))),(0,i.kt)("p",null,"Step 3: Md5 encryption and then capitalization."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"DigestUtils.md5DigestAsHex(sign.getBytes()).toUpperCase()\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The final returned value is: ",(0,i.kt)("inlineCode",{parentName:"li"},"A021BF82BE342668B78CD9ADE593D683"),".")),(0,i.kt)("h4",{id:"2432-generate-sign-with-request-header-and-request-body"},"2.4.3.2 Generate sign with request header and request body"),(0,i.kt)("p",null,"Step 1: First, construct a Map, and the map must save every request body parameters"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'\n   Map<String, String> map = Maps.newHashMapWithExpectedSize(3);\n   //timestamp is string format of millisecond. String.valueOf(LocalDateTime.now().toInstant(ZoneOffset.of("+8")).toEpochMilli())\n   map.put("timestamp","1660659201000");  // Value should be string format of milliseconds\n   map.put("path", "/http/order/save");\n   map.put("version", "1.0.0");\n   // if your request body is:{"id":123,"name":"order"}\n   map.put("id", "1");\n   map.put("name", "order")\n')),(0,i.kt)("p",null,"Step 2: Sort the ",(0,i.kt)("inlineCode",{parentName:"p"},"Keys")," naturally, then splice the key and values, and finally splice the ",(0,i.kt)("inlineCode",{parentName:"p"},"SK")," assigned to you."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'List<String> storedKeys = Arrays.stream(map.keySet()\n                .toArray(new String[]{}))\n                .sorted(Comparator.naturalOrder())\n                .collect(Collectors.toList());\nfinal String sign = storedKeys.stream()\n                .map(key -> String.join("", key, map.get(key)))\n                .collect(Collectors.joining()).trim()\n                .concat("2D47C325AE5B4A4C926C23FD4395C719");\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The returned sign value should be:",(0,i.kt)("inlineCode",{parentName:"li"},"id123nameorderpath/http/order/savetimestamp1660659201000version1.0.02D47C325AE5B4A4C926C23FD4395C719"))),(0,i.kt)("p",null,"Step 3: Md5 encryption and then capitalization."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"DigestUtils.md5DigestAsHex(sign.getBytes()).toUpperCase()\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The final returned value is: ",(0,i.kt)("inlineCode",{parentName:"li"},"35FE61C21F73E9AAFC46954C14F299D7"),".")),(0,i.kt)("h3",{id:"244-request-gateway"},"2.4.4 Request GateWay"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If your visited path is:",(0,i.kt)("inlineCode",{parentName:"p"},"/api/service/abc"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Address: http: domain name of gateway ",(0,i.kt)("inlineCode",{parentName:"p"},"/api/service/abc"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Set ",(0,i.kt)("inlineCode",{parentName:"p"},"header"),"\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"header")," Parameter\uff1a"))),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Field"),(0,i.kt)("th",{parentName:"tr",align:"right"},"Value"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"timestamp"),(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("inlineCode",{parentName:"td"},"1571711067186")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Timestamp when signing")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"appKey"),(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("inlineCode",{parentName:"td"},"1TEST123456781")),(0,i.kt)("td",{parentName:"tr",align:"center"},"The AK value assigned to you")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"sign"),(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("inlineCode",{parentName:"td"},"A90E66763793BDBC817CF3B52AAAC041")),(0,i.kt)("td",{parentName:"tr",align:"center"},"The signature obtained above")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"version"),(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("inlineCode",{parentName:"td"},"1.0.0")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"1.0.0")," is a fixed value.")))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The signature plugin will filter requests before ",(0,i.kt)("inlineCode",{parentName:"p"},"5")," minutes by default")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If the authentication fails, will return code ",(0,i.kt)("inlineCode",{parentName:"p"},"401"),", message may change."))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "code": 401,\n  "message": "sign is not pass,Please check you sign algorithm!",\n  "data": null\n}\n')),(0,i.kt)("h3",{id:"245-plugin-config"},"2.4.5 Plugin Config"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(52249).Z})),(0,i.kt)("h3",{id:"246-selector-config"},"2.4.6 Selector Config"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(88764).Z})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Only those matched requests can be authenticated by signature.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Selectors and rules, please refer to: ",(0,i.kt)("a",{parentName:"p",href:"../../user-guide/admin-usage/selector-and-rule"},"Selector And Rule Config")))),(0,i.kt)("h3",{id:"247-rule-config"},"2.4.7 Rule Config"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(51440).Z})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"close(signRequestBody): generate signature with request header.  "),(0,i.kt)("li",{parentName:"ul"},"open(signRequestBody): generate signature with request header and request body.")),(0,i.kt)("h2",{id:"25-config-plugin-with-authorize200"},"2.5 Config Plugin With Authorize\uff082.0.0\uff09"),(0,i.kt)("p",null,"This authentication algorithm is the version 2.0.0 algorithm, which is same as version1's except ",(0,i.kt)("strong",{parentName:"p"},"Authentication Guide")," and ",(0,i.kt)("strong",{parentName:"p"},"Request GateWay.")),(0,i.kt)("h3",{id:"251-authentication-guide"},"2.5.1 Authentication Guide"),(0,i.kt)("p",null,"Authentication algorithm of Version 2.0.0 generates a Token based on the signature algorithm, and puts the Token value into the request header ",(0,i.kt)("inlineCode",{parentName:"p"},"ShenYu-Authorization")," parameter when sending a request. To distinguish it from version 1.0.0, the ",(0,i.kt)("inlineCode",{parentName:"p"},"version")," parameter of the request header is left, which is 2.0.0."),(0,i.kt)("h4",{id:"2511-prepare"},"2.5.1.1 prepare"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Step 1: ",(0,i.kt)("inlineCode",{parentName:"p"},"AK/SK")," is assigned by the gateway. For example, the ",(0,i.kt)("inlineCode",{parentName:"p"},"AK")," assigned to you is: ",(0,i.kt)("inlineCode",{parentName:"p"},"1TEST123456781")," SK is: ` 506eeb535cf740d7a755cb49f4a1536'")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Step 2: Decide the gateway path you want to access, such as ",(0,i.kt)("inlineCode",{parentName:"p"},"/api/service/abc")))),(0,i.kt)("h4",{id:"2512-generate-token"},"2.5.1.2 Generate Token"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"build parameter"),(0,i.kt)("p",{parentName:"li"},"build the ",(0,i.kt)("inlineCode",{parentName:"p"},"parameters")," that is json string"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "alg":"MD5",\n    "appKey":"506EEB535CF740D7A755CB4B9F4A1536",\n    "timestamp":"1571711067186"\n}\n')),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"alg"),": signature algorithm\uff08result is uppercase HEX string\uff09"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"MD5: MD5-HASH(data+key)"),(0,i.kt)("li",{parentName:"ul"},"HMD5:HMAC-MD5"),(0,i.kt)("li",{parentName:"ul"},"HS256:HMAC-SHA-256"),(0,i.kt)("li",{parentName:"ul"},"HS512:HMAC-SHA-512")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"appKey"),"\uff1aappKey"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"timestamp"),": timestamp of the length is 13")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Calculate signature value"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-tex"},'signature = sign(\n  base64Encoding(parameters) + Relative URL + Body*,\n  secret\n);\n* indicate Optional , it depends on handler config\nRelative URL = path [ "?" query ] eg: /apache/shenyu/pulls?name=jack\n')),(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},"note :",(0,i.kt)("inlineCode",{parentName:"p"},"Relative URL")," is not include fragment"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Calculate Token"),(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"}," token = base64Encoding(parameters) + '.' + base64Encoding(signature)")),(0,i.kt)("p",{parentName:"li"},"Put the Token into the request header ",(0,i.kt)("inlineCode",{parentName:"p"},"ShenYu-Authorization")," parameter."))),(0,i.kt)("h3",{id:"252-request-gateway"},"2.5.2 Request GateWay"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u503c"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"ShenYu-Authorization"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Token"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Token")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"version"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"2.0.0")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Fixed value")))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"please change the Authorization field to ShenYu-Authorization as soon as possible to avoid conflicts with application Authorization.")),(0,i.kt)("h2",{id:"26-examples"},"2.6 Examples"),(0,i.kt)("h3",{id:"261-verify-api-with-sign-plugin100"},"2.6.1 Verify api with sign plugin\uff081.0.0\uff09"),(0,i.kt)("h4",{id:"2611-plugin-config"},"2.6.1.1 Plugin Config"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(52249).Z})),(0,i.kt)("h4",{id:"2612-selector-config"},"2.6.1.2 Selector Config"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(77941).Z})),(0,i.kt)("h4",{id:"2613-rule-config"},"2.6.1.3 Rule Config"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(9639).Z})),(0,i.kt)("h4",{id:"2614-add-appkeysecretkey"},"2.6.1.4 Add AppKey/SecretKey"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(31927).Z})),(0,i.kt)("h4",{id:"2615-request-service-and-check-result"},"2.6.1.5 Request Service and check result"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"build request params with ",(0,i.kt)("inlineCode",{parentName:"li"},"Authentication Guide"),",")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'public class Test1 {\n  public static void main(String[] args) {\n    Map<String, String> map = Maps.newHashMapWithExpectedSize(3);\n    //timestamp\u4e3a\u6beb\u79d2\u6570\u7684\u5b57\u7b26\u4e32\u5f62\u5f0f String.valueOf(LocalDateTime.now().toInstant(ZoneOffset.of("+8")).toEpochMilli())\n    map.put("timestamp","1660658725000");  //\u503c\u5e94\u8be5\u4e3a\u6beb\u79d2\u6570\u7684\u5b57\u7b26\u4e32\u5f62\u5f0f\n    map.put("path", "/http/order/save");\n    map.put("version", "1.0.0");\n    map.put("id", "123");\n    map.put("name", "order");\n    // map.put("body", "{\\"id\\":123,\\"name\\":\\"order\\"}");\n\n    List<String> storedKeys = Arrays.stream(map.keySet()\n                    .toArray(new String[]{}))\n            .sorted(Comparator.naturalOrder())\n            .collect(Collectors.toList());\n    final String sign = storedKeys.stream()\n            .map(key -> String.join("", key, map.get(key)))\n            .collect(Collectors.joining()).trim()\n            .concat("2D47C325AE5B4A4C926C23FD4395C719");\n    System.out.println(sign);\n\n    System.out.println(DigestUtils.md5DigestAsHex(sign.getBytes()).toUpperCase());\n  }\n}\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"signature without body: ",(0,i.kt)("inlineCode",{parentName:"li"},"path/http/order/savetimestamp1571711067186version1.0.02D47C325AE5B4A4C926C23FD4395C719")),(0,i.kt)("li",{parentName:"ul"},"sign without body result is: ",(0,i.kt)("inlineCode",{parentName:"li"},"9696D3E549A6AEBE763CCC2C7952DDC1"))),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(63367).Z})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'public class Test2 {\n  public static void main(String[] args) {\n    Map<String, String> map = Maps.newHashMapWithExpectedSize(3);\n    //timestamp\u4e3a\u6beb\u79d2\u6570\u7684\u5b57\u7b26\u4e32\u5f62\u5f0f String.valueOf(LocalDateTime.now().toInstant(ZoneOffset.of("+8")).toEpochMilli())\n    map.put("timestamp","1660659201000");  //\u503c\u5e94\u8be5\u4e3a\u6beb\u79d2\u6570\u7684\u5b57\u7b26\u4e32\u5f62\u5f0f\n    map.put("path", "/http/order/save");\n    map.put("version", "1.0.0");\n\n    List<String> storedKeys = Arrays.stream(map.keySet()\n                    .toArray(new String[]{}))\n            .sorted(Comparator.naturalOrder())\n            .collect(Collectors.toList());\n    final String sign = storedKeys.stream()\n            .map(key -> String.join("", key, map.get(key)))\n            .collect(Collectors.joining()).trim()\n            .concat("2D47C325AE5B4A4C926C23FD4395C719");\n    System.out.println(sign);\n\n    System.out.println(DigestUtils.md5DigestAsHex(sign.getBytes()).toUpperCase());\n  }\n}\n')),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"signature with body:",(0,i.kt)("inlineCode",{parentName:"em"},"id123nameorderpath/http/order/savetimestamp1660659201000version1.0.02D47C325AE5B4A4C926C23FD4395C719")),"sign with body result is:",(0,i.kt)("inlineCode",{parentName:"p"},"35FE61C21F73E9AAFC46954C14F299D7")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(80294).Z})),(0,i.kt)("h3",{id:"262-verify-api-with-sign-plugin200"},"2.6.2 Verify api with sign plugin\uff082.0.0\uff09"),(0,i.kt)("p",null,"All the configuration parts are the same, so let's look directly at the the calculation part of parameter of request header and the part of sending request."),(0,i.kt)("h4",{id:"2621-request-service-and-check-result"},"2.6.2.1 Request Service and check result"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"implements the algorithm"),(0,i.kt)("p",{parentName:"li"},"Suppose we use a signature algorithm named MD5. According to the previous description, the signature value is to concatenate the data and key, and then hash."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-java"},'    private static String sign(final String signKey, final String base64Parameters, final URI uri, final String body) {\n\n        String data = base64Parameters\n                + getRelativeURL(uri)\n                + Optional.ofNullable(body).orElse("");\n\n        return DigestUtils.md5Hex(data+signKey).toUpperCase();\n    }\n\n    private static String getRelativeURL(final URI uri) {\n        if (Objects.isNull(uri.getQuery())) {\n            return uri.getPath();\n        }\n        return uri.getPath() + "?" + uri.getQuery();\n    }\n'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"verify without the request body"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-java"},'public static void main(String[] args) {\n    \n    String appSecret = "2D47C325AE5B4A4C926C23FD4395C719";\n\n    URI uri = URI.create("/http/order/save");\n\n    String parameters = JsonUtils.toJson(ImmutableMap.of(\n        "alg","MD5",\n        "appKey","BD7980F5688A4DE6BCF1B5327FE07F5C",\n        "timestamp","1673708353996"));\n\n    String base64Parameters = Base64.getEncoder()\n        .encodeToString(parameters.getBytes(StandardCharsets.UTF_8));\n\n    String signature = sign(appSecret,base64Parameters,uri,null);\n\n    String Token = base64Parameters+"."+signature;\n\n    System.out.println(Token);\n\n}\n')),(0,i.kt)("p",{parentName:"li"},"Token:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-tex"},"eyJhbGciOiJNRDUiLCJhcHBLZXkiOiJCRDc5ODBGNTY4OEE0REU2QkNGMUI1MzI3RkUwN0Y1QyIsInRpbWVzdGFtcCI6IjE2NzM3MDgzNTM5OTYifQ==.33ED53DF79CA5B53C0BF2448B670AF35\n")),(0,i.kt)("p",{parentName:"li"},"\u53d1\u9001\u8bf7\u6c42\uff1a"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"image-20230114230500887",src:n(59115).Z}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"verify with the request body"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'    public static void main(String[] args) {\n        String appSecret = "2D47C325AE5B4A4C926C23FD4395C719";\n\n        URI uri = URI.create("/http/order/save");\n\n        String parameters = JsonUtils.toJson(ImmutableMap.of(\n                "alg","MD5",\n                "appKey","BD7980F5688A4DE6BCF1B5327FE07F5C",\n                "timestamp","1673708905488"));\n\n        String base64Parameters = Base64.getEncoder()\n                .encodeToString(parameters.getBytes(StandardCharsets.UTF_8));\n\n        String requestBody = "{\\"id\\":123,\\"name\\":\\"order\\"}";\n\n        String signature = sign(appSecret,base64Parameters,uri,requestBody);\n\n        String Token = base64Parameters+"."+signature;\n\n        System.out.println(Token);\n\n    }\n')),(0,i.kt)("p",null,"Token:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tex"},"eyJhbGciOiJNRDUiLCJhcHBLZXkiOiJCRDc5ODBGNTY4OEE0REU2QkNGMUI1MzI3RkUwN0Y1QyIsInRpbWVzdGFtcCI6IjE2NzM3MDg5MDU0ODgifQ==.FBCEB6D816644A98378635050AB85EF1\n")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20230114231032837",src:n(12231).Z})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20230114230922598",src:n(13367).Z})),(0,i.kt)("h1",{id:"3-how-to-disable-plugin"},"3. How to disable plugin"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"In ",(0,i.kt)("inlineCode",{parentName:"li"},"shenyu-admin"),"--\x3e BasicConfig --\x3e Plugin --\x3e ",(0,i.kt)("inlineCode",{parentName:"li"},"sign")," set to disabled.")),(0,i.kt)("h1",{id:"4-extension"},"4. Extension"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Please refer to: ",(0,i.kt)("a",{parentName:"li",href:"../../developer/custom-sign-algorithm"},"dev-sign"),".")))}d.isMDXComponent=!0},74327:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/plugin_use_en-8b5661551cdf92fdabc9cb2e7947cffc.jpg"},9639:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/example-rule-en-503e8b5697e5aada40d67b999ce281c7.png"},77941:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/example-selector-en-5f344f0f789b9b37e2ddefe245149eaf.png"},31927:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/example-sign-auth-en-7531558c55916cf987b149f58a336d16.png"},12231:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/request_body-1fa3cc7c11fa0dff45216ec5e90c34cd.png"},80294:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/result-with-body-d430bbcc77fef2c8bdd89cace7d6e418.png"},63367:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/result-1c40210c3da55750298242b3b037f289.png"},51440:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/rule-en-66585f6eca8f875a4a6e1fd5c65646d1.png"},88764:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/selector-en-993bda66883505a34953d527663d7475.png"},52249:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/sign_open_en-7a1bcfbe89eec35490eec64c037a7103.jpg"},59115:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/version2_sign_request-07e41df7117f83bea75f60631e3c7ec1.png"},13367:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/version2_sign_request_with_body-1823973903b2b06403e1bda8fda9de15.png"}}]);