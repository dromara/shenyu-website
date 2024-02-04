"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[61060],{95788:(e,n,i)=>{i.d(n,{Iu:()=>c,yg:()=>y});var t=i(11504);function r(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function a(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function l(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?a(Object(i),!0).forEach((function(n){r(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function o(e,n){if(null==e)return{};var i,t,r=function(e,n){if(null==e)return{};var i,t,r={},a=Object.keys(e);for(t=0;t<a.length;t++)i=a[t],n.indexOf(i)>=0||(r[i]=e[i]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)i=a[t],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var u=t.createContext({}),g=function(e){var n=t.useContext(u),i=n;return e&&(i="function"==typeof e?e(n):l(l({},n),e)),i},c=function(e){var n=g(e.components);return t.createElement(u.Provider,{value:n},e.children)},p="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var i=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=g(i),d=r,y=p["".concat(u,".").concat(d)]||p[d]||s[d]||a;return i?t.createElement(y,l(l({ref:n},c),{},{components:i})):t.createElement(y,l({ref:n},c))}));function y(e,n){var i=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=i.length,l=new Array(a);l[0]=d;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o[p]="string"==typeof e?e:r,l[1]=o;for(var g=2;g<a;g++)l[g]=i[g];return t.createElement.apply(null,l)}return t.createElement.apply(null,i)}d.displayName="MDXCreateElement"},89548:(e,n,i)=>{i.r(n),i.d(n,{contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var t=i(45072),r=(i(11504),i(95788));const a={title:"JWT plugin",keywords:["JWT"],description:"JWT plugin"},l=void 0,o={unversionedId:"plugin-center/authority-and-certification/jwt-plugin",id:"version-2.4.2/plugin-center/authority-and-certification/jwt-plugin",isDocsHomePage:!1,title:"JWT plugin",description:"JWT plugin",source:"@site/versioned_docs/version-2.4.2/plugin-center/authority-and-certification/jwt-plugin.md",sourceDirName:"plugin-center/authority-and-certification",slug:"/plugin-center/authority-and-certification/jwt-plugin",permalink:"/docs/2.4.2/plugin-center/authority-and-certification/jwt-plugin",editUrl:"https://github.com/apache/shenyu-website/edit/main/versioned_docs/version-2.4.2/plugin-center/authority-and-certification/jwt-plugin.md",version:"2.4.2",frontMatter:{title:"JWT plugin",keywords:["JWT"],description:"JWT plugin"},sidebar:"version-2.4.2/tutorialSidebar",previous:{title:"CryptorResponse plugin",permalink:"/docs/2.4.2/plugin-center/authority-and-certification/cryptor-response-plugin"},next:{title:"OAuth2 Plugin",permalink:"/docs/2.4.2/plugin-center/authority-and-certification/oauth2-plugin"}},u=[{value:"1.1 Plugin Name",id:"11-plugin-name",children:[]},{value:"1.2 Appropriate Scenario",id:"12-appropriate-scenario",children:[]},{value:"1.3 Plugin functionality",id:"13-plugin-functionality",children:[]},{value:"1.4 Plugin code",id:"14-plugin-code",children:[]},{value:"1.5 Added Since Which shenyu version",id:"15-added-since-which-shenyu-version",children:[]},{value:"2.1 Plugin-use procedure chart",id:"21-plugin-use-procedure-chart",children:[]},{value:"2.2 Import pom",id:"22-import-pom",children:[]},{value:"2.3 Enable plugin",id:"23-enable-plugin",children:[]},{value:"2.4 Config plugin",id:"24-config-plugin",children:[{value:"2.4.1 Config plugin in ShenYu-Admin",id:"241-config-plugin-in-shenyu-admin",children:[]},{value:"2.4.2 Selector config",id:"242-selector-config",children:[]},{value:"2.4.3 Rule Config",id:"243-rule-config",children:[]}]},{value:"2.5 Examples",id:"25-examples",children:[{value:"2.5.1 Use jwt token for authentication judgment",id:"251-use-jwt-token-for-authentication-judgment",children:[]}]}],g={toc:u},c="wrapper";function p(e){let{components:n,...a}=e;return(0,r.yg)(c,(0,t.c)({},g,a,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("hr",null),(0,r.yg)("h1",{id:"1-overview"},"1. Overview"),(0,r.yg)("h2",{id:"11-plugin-name"},"1.1 Plugin Name"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"jwt")," plugin")),(0,r.yg)("h2",{id:"12-appropriate-scenario"},"1.2 Appropriate Scenario"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Requires unified authentication by jwt at the gateway.")),(0,r.yg)("h2",{id:"13-plugin-functionality"},"1.3 Plugin functionality"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"The ",(0,r.yg)("inlineCode",{parentName:"li"},"jwt")," plug-in is for the ",(0,r.yg)("inlineCode",{parentName:"li"},"token")," attribute or ",(0,r.yg)("inlineCode",{parentName:"li"},"authorization")," of the http request header to carry the attribute value for authentication judgment and judge ",(0,r.yg)("inlineCode",{parentName:"li"},"OAuth2.0")," .")),(0,r.yg)("h2",{id:"14-plugin-code"},"1.4 Plugin code"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Core module is ",(0,r.yg)("inlineCode",{parentName:"li"},"shenyu-plugin-jwt"),"."),(0,r.yg)("li",{parentName:"ul"},"Core class is ",(0,r.yg)("inlineCode",{parentName:"li"},"org.apache.shenyu.plugin.jwt.JwtPlugin"),".")),(0,r.yg)("h2",{id:"15-added-since-which-shenyu-version"},"1.5 Added Since Which shenyu version"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Since ShenYu 2.4.0")),(0,r.yg)("h1",{id:"2how-to-use-plugin"},"2.How to use plugin"),(0,r.yg)("h2",{id:"21-plugin-use-procedure-chart"},"2.1 Plugin-use procedure chart"),(0,r.yg)("p",null,(0,r.yg)("img",{src:i(33783).c})),(0,r.yg)("h2",{id:"22-import-pom"},"2.2 Import pom"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>org.apache.shenyu</groupId>\n    <artifactId>shenyu-spring-boot-starter-plugin-jwt</artifactId>\n    <version>${project.version}</version>\n</dependency>\n")),(0,r.yg)("h2",{id:"23-enable-plugin"},"2.3 Enable plugin"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"In shenyu-admin --\x3e BasicConfig --\x3e Plugin --\x3e jwt set Status enable.")),(0,r.yg)("h2",{id:"24-config-plugin"},"2.4 Config plugin"),(0,r.yg)("h3",{id:"241-config-plugin-in-shenyu-admin"},"2.4.1 Config plugin in ShenYu-Admin"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Config secretKey of jwt-plugin in shenyu-admin, the secretKey must more than 256 bit."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"secretKey"),": The private key when using ",(0,r.yg)("inlineCode",{parentName:"li"},"jwt")," to generate ",(0,r.yg)("inlineCode",{parentName:"li"},"token"),", it is required.")),(0,r.yg)("p",null,(0,r.yg)("img",{src:i(24028).c})),(0,r.yg)("h3",{id:"242-selector-config"},"2.4.2 Selector config"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Selector and rule Config. Please refer: ",(0,r.yg)("a",{parentName:"li",href:"/docs/2.4.2/user-guide/admin-usage/selector-and-rule"},"Selector and rule config"),".")),(0,r.yg)("h3",{id:"243-rule-config"},"2.4.3 Rule Config"),(0,r.yg)("p",null,(0,r.yg)("img",{src:i(33236).c})),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"convert means jwt converter"),(0,r.yg)("li",{parentName:"ul"},"jwtVal: jwt of body name"),(0,r.yg)("li",{parentName:"ul"},"headerVal: jwt header name")),(0,r.yg)("h2",{id:"25-examples"},"2.5 Examples"),(0,r.yg)("h3",{id:"251-use-jwt-token-for-authentication-judgment"},"2.5.1 Use jwt token for authentication judgment"),(0,r.yg)("h4",{id:"2511-config-jwt-plugin"},"2.5.1.1 Config jwt-plugin"),(0,r.yg)("p",null,(0,r.yg)("img",{src:i(24028).c})),(0,r.yg)("h4",{id:"2512-config-selector-match-service"},"2.5.1.2 Config selector match service"),(0,r.yg)("p",null,(0,r.yg)("img",{src:i(83180).c})),(0,r.yg)("h4",{id:"2513-config-rule-match-service"},"2.5.1.3 Config rule match service"),(0,r.yg)("p",null,(0,r.yg)("img",{src:i(33236).c})),(0,r.yg)("h4",{id:"2514-generate-json-web-tokenjwt-with-website"},"2.5.1.4 Generate json web token(jwt) with website"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"You can open ",(0,r.yg)("inlineCode",{parentName:"li"},"https://jwt.io/")," in your browser and fill in the corresponding parameters."),(0,r.yg)("li",{parentName:"ul"},"Config jwt header ",(0,r.yg)("inlineCode",{parentName:"li"},"HEADER")," in ",(0,r.yg)("inlineCode",{parentName:"li"},"https://jwt.io/")),(0,r.yg)("li",{parentName:"ul"},"Config jwt body ",(0,r.yg)("inlineCode",{parentName:"li"},"PAYLOAD")," in ",(0,r.yg)("inlineCode",{parentName:"li"},"https://jwt.io/")," "),(0,r.yg)("li",{parentName:"ul"},"Config jwt signature ",(0,r.yg)("inlineCode",{parentName:"li"},"VERIFY SIGNATURE")," in ",(0,r.yg)("inlineCode",{parentName:"li"},"https://jwt.io/"))),(0,r.yg)("p",null,(0,r.yg)("img",{src:i(9429).c})),(0,r.yg)("h4",{id:"2515-generate-json-web-tokenjwt-with-java-code"},"2.5.1.5 Generate json web token(jwt) with java code"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},'public final class JwtPluginTest {\n    \n  public void generateJwtCode() {\n    final String secreteKey = "shenyu-test-shenyu-test-shenyu-test";\n    Map<String, String> map = new HashMap<>();\n    map.put("id", "1");\n    map.put("name", "xiaoming");\n    Date date = new Date();\n    date.setTime(1655524800000L);\n    String token = Jwts.builder()\n            .setIssuedAt(date)\n            .setExpiration(new Date())\n            .setClaims(map)\n            .signWith(Keys.hmacShaKeyFor(secreteKey.getBytes(StandardCharsets.UTF_8)), SignatureAlgorithm.HS256)\n            .compact();\n    System.out.println(token);\n  }\n}\n')),(0,r.yg)("h4",{id:"2516-request-service"},"2.5.1.6 Request Service"),(0,r.yg)("h5",{id:"25161-request-service-with-token"},"2.5.1.6.1 Request service with token"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"request your service with jwt token ",(0,r.yg)("inlineCode",{parentName:"li"},"token: eyJhbGciOiJIUzI1NiJ9.eyJuYW1lIjoieGlhb21pbmciLCJpZCI6IjEifQ.LdRzGlB49alhq204chwF7pf3C0z8ZpuowPvoQdJmSRw")," in your request header.")),(0,r.yg)("h5",{id:"25162-request-service-authorization"},"2.5.1.6.2 Request service Authorization"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"request your service with Authorization ",(0,r.yg)("inlineCode",{parentName:"li"},"Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJuYW1lIjoieGlhb21pbmciLCJpZCI6IjEifQ.LdRzGlB49alhq204chwF7pf3C0z8ZpuowPvoQdJmSRw")," in your request header.")),(0,r.yg)("h4",{id:"2517-validate-request-result"},"2.5.1.7 Validate request result"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"error token request result")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'{\n  "code": 401,\n  "message": "Illegal authorization"\n}\n')),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"normal token request result")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'{\n  "id": "123",\n  "name": "hello world save order"\n}\n')),(0,r.yg)("h1",{id:"3-how-to-disable-plugin"},"3. How to disable plugin"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"In ",(0,r.yg)("inlineCode",{parentName:"li"},"shenyu-admin")," --\x3e BasicConfig --\x3e Plugin --\x3e ",(0,r.yg)("inlineCode",{parentName:"li"},"jwt")," set Status disable.")),(0,r.yg)("p",null,(0,r.yg)("img",{src:i(28404).c})))}p.isMDXComponent=!0},28404:(e,n,i)=>{i.d(n,{c:()=>t});const t=i.p+"assets/images/jwt-plugin-close_en-47c04e90a85f27746b2a9b3e771de5a9.jpg"},24028:(e,n,i)=>{i.d(n,{c:()=>t});const t=i.p+"assets/images/jwt-plugin-config-en-41fdb635e52370b6882c09741a0c29aa.jpg"},33236:(e,n,i)=>{i.d(n,{c:()=>t});const t=i.p+"assets/images/jwt-plugin-rule-handle-en-3efcc377c242e0047edd129a535d50d5.jpg"},83180:(e,n,i)=>{i.d(n,{c:()=>t});const t=i.p+"assets/images/jwt-plugin-selector-config-en-73506b6e96a35eac7fe268145cebbc3b.jpg"},9429:(e,n,i)=>{i.d(n,{c:()=>t});const t=i.p+"assets/images/jwt-web-428e7d369c17035e0daa838740150227.jpg"},33783:(e,n,i)=>{i.d(n,{c:()=>t});const t=i.p+"assets/images/plugin_use_en-8b5661551cdf92fdabc9cb2e7947cffc.jpg"}}]);