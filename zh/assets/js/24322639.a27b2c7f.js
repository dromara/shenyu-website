"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[81760],{95788:(e,n,r)=>{r.d(n,{Iu:()=>u,yg:()=>y});var a=r(11504);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,a,t=function(e,n){if(null==e)return{};var r,a,t={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var p=a.createContext({}),s=function(e){var n=a.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},u=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(r),c=t,y=d["".concat(p,".").concat(c)]||d[c]||g[c]||l;return r?a.createElement(y,i(i({ref:n},u),{},{components:r})):a.createElement(y,i({ref:n},u))}));function y(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var l=r.length,i=new Array(l);i[0]=c;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[d]="string"==typeof e?e:t,i[1]=o;for(var s=2;s<l;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},55192:(e,n,r)=>{r.r(n),r.d(n,{contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=r(45072),t=(r(11504),r(95788));const l={sidebar_position:4,title:"SpringCloud\u63a5\u5165Soul\u7f51\u5173",keywords:["soul"],description:"SpringCloud\u63a5\u5165Soul\u7f51\u5173"},i=void 0,o={unversionedId:"users-guide/spring-cloud-proxy",id:"version-2.3.0-Legacy/users-guide/spring-cloud-proxy",isDocsHomePage:!1,title:"SpringCloud\u63a5\u5165Soul\u7f51\u5173",description:"SpringCloud\u63a5\u5165Soul\u7f51\u5173",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.3.0-Legacy/users-guide/spring-cloud-proxy.md",sourceDirName:"users-guide",slug:"/users-guide/spring-cloud-proxy",permalink:"/zh/docs/2.3.0-Legacy/users-guide/spring-cloud-proxy",editUrl:"https://github.com/apache/shenyu-website/edit/main/i18n/zh/docusaurus-plugin-content-docs/version-2.3.0-Legacy/users-guide/spring-cloud-proxy.md",version:"2.3.0-Legacy",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"SpringCloud\u63a5\u5165Soul\u7f51\u5173",keywords:["soul"],description:"SpringCloud\u63a5\u5165Soul\u7f51\u5173"},sidebar:"version-2.3.0-Legacy/tutorialSidebar",previous:{title:"Dubbo\u63a5\u5165soul\u7f51\u5173",permalink:"/zh/docs/2.3.0-Legacy/users-guide/dubbo-proxy"},next:{title:"Sofa\u63a5\u5165\u7f51\u5173",permalink:"/zh/docs/2.3.0-Legacy/users-guide/sofa-rpc-proxy"}},p=[{value:"\u8bf4\u660e",id:"\u8bf4\u660e",children:[]},{value:"\u5f15\u5165\u7f51\u5173 springCloud\u7684\u63d2\u4ef6\u652f\u6301",id:"\u5f15\u5165\u7f51\u5173-springcloud\u7684\u63d2\u4ef6\u652f\u6301",children:[]},{value:"SpringCloud\u670d\u52a1\u63a5\u5165\u7f51\u5173",id:"springcloud\u670d\u52a1\u63a5\u5165\u7f51\u5173",children:[]},{value:"\u63d2\u4ef6\u8bbe\u7f6e",id:"\u63d2\u4ef6\u8bbe\u7f6e",children:[]},{value:"\u7528\u6237\u8bf7\u6c42",id:"\u7528\u6237\u8bf7\u6c42",children:[]}],s={toc:p},u="wrapper";function d(e){let{components:n,...r}=e;return(0,t.yg)(u,(0,a.c)({},s,r,{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h2",{id:"\u8bf4\u660e"},"\u8bf4\u660e"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"\u6b64\u7bc7\u6587\u7ae0\u662f\u6559\u4f60\u5982\u4f55\u5c06springCloud\u63a5\u53e3\uff0c\u5feb\u901f\u63a5\u5165\u5230soul\u7f51\u5173\u3002")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"\u8bf7\u5728 soul-admin \u540e\u53f0\u5c06 ",(0,t.yg)("inlineCode",{parentName:"p"},"springCloud")," \u63d2\u4ef6\u8bbe\u7f6e\u4e3a\u5f00\u542f\u3002")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"\u63a5\u5165\u524d\uff0c\u8bf7\u6b63\u786e\u7684\u542f\u52a8 ",(0,t.yg)("inlineCode",{parentName:"p"},"soul-admin"),"\u4ee5\u53ca",(0,t.yg)("a",{parentName:"p",href:"./soul-set-up"},"\u642d\u5efa\u73af\u5883")," Ok\u3002"))),(0,t.yg)("h2",{id:"\u5f15\u5165\u7f51\u5173-springcloud\u7684\u63d2\u4ef6\u652f\u6301"},"\u5f15\u5165\u7f51\u5173 springCloud\u7684\u63d2\u4ef6\u652f\u6301"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"\u5728\u7f51\u5173\u7684 pom.xml \u6587\u4ef6\u4e2d\u5f15\u5165\u5982\u4e0b\u4f9d\u8d56\u3002")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-xml"},"  \x3c!--soul springCloud plugin start--\x3e\n  <dependency>\n       <groupId>org.dromara</groupId>\n       <artifactId>soul-spring-boot-starter-plugin-springcloud</artifactId>\n        <version>${last.version}</version>\n  </dependency>\n\n  <dependency>\n       <groupId>org.dromara</groupId>\n       <artifactId>soul-spring-boot-starter-plugin-httpclient</artifactId>\n       <version>${last.version}</version>\n   </dependency>\n   \x3c!--soul springCloud plugin end--\x3e\n\n   <dependency>\n        <groupId>org.springframework.cloud</groupId>\n        <artifactId>spring-cloud-commons</artifactId>\n        <version>2.2.0.RELEASE</version>\n   </dependency>\n   <dependency>\n        <groupId>org.springframework.cloud</groupId>\n        <artifactId>spring-cloud-starter-netflix-ribbon</artifactId>\n        <version>2.2.0.RELEASE</version>\n   </dependency>\n")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"\u5982\u679c\u4f60\u4f7f\u7528 ",(0,t.yg)("inlineCode",{parentName:"p"},"eureka")," \u4f5c\u4e3a springCloud\u7684\u6ce8\u518c\u4e2d\u5fc3"),(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},"\u65b0\u589e\u5982\u4e0b\u4f9d\u8d56\uff1a")),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-xml"},"  <dependency>\n       <groupId>org.springframework.cloud</groupId>\n       <artifactId>spring-cloud-starter-netflix-eureka-client</artifactId>\n       <version>2.2.0.RELEASE</version>\n  </dependency>\n"))),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"\u5728\u7f51\u5173\u7684yml\u6587\u4ef6\u4e2d \u65b0\u589e\u5982\u4e0b\u914d\u7f6e\uff1a"),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-yaml"},"   eureka:\n     client:\n       serviceUrl:\n         defaultZone: http://localhost:8761/eureka/ # \u4f60\u7684eureka\u5730\u5740\n     instance:\n       prefer-ip-address: true\n"))),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"\u5982\u679c\u4f60\u4f7f\u7528 ",(0,t.yg)("inlineCode",{parentName:"p"},"nacos")," \u4f5c\u4e3a springCloud\u7684\u6ce8\u518c\u4e2d\u5fc3"),(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},"\u65b0\u589e\u5982\u4e0b\u4f9d\u8d56\uff1a")),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-xml"}," <dependency>\n       <groupId>com.alibaba.cloud</groupId>\n       <artifactId>spring-cloud-starter-alibaba-nacos-discovery</artifactId>\n       <version>2.1.0.RELEASE</version>\n </dependency>\n"))),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"\u5728\u7f51\u5173\u7684yml\u6587\u4ef6\u4e2d \u65b0\u589e\u5982\u4e0b\u914d\u7f6e\uff1a"),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-yaml"},"  spring:\n     cloud:\n       nacos:\n         discovery:\n            server-addr: 127.0.0.1:8848 # \u4f60\u7684nacos\u5730\u5740\n"))),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"\u91cd\u542f\u4f60\u7684\u7f51\u5173\u670d\u52a1\u3002"))),(0,t.yg)("h2",{id:"springcloud\u670d\u52a1\u63a5\u5165\u7f51\u5173"},"SpringCloud\u670d\u52a1\u63a5\u5165\u7f51\u5173"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"\u5728\u4f60\u63d0\u4f9b\u670d\u52a1\u7684\u9879\u76ee\u4e2d\uff0c\u5f15\u5165\u5982\u4e0b\u4f9d\u8d56\uff1a")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-xml"}," <dependency>\n      <groupId>org.dromara</groupId>\n      <artifactId>soul-spring-boot-starter-client-springcloud</artifactId>\n      <version>${last.version}</version>\n </dependency>\n")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"\u6ce8\u518c\u4e2d\u5fc3\u8be6\u7ec6\u63a5\u5165\u914d\u7f6e\u8bf7\u53c2\u8003\uff1a",(0,t.yg)("a",{parentName:"li",href:"../register-center/register-center-access"},"\u6ce8\u518c\u4e2d\u5fc3\u63a5\u5165"))),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"\u5728\u4f60\u7684 ",(0,t.yg)("inlineCode",{parentName:"p"},"controller"),"\u7684\u63a5\u53e3\u4e0a\u52a0\u4e0a ",(0,t.yg)("inlineCode",{parentName:"p"},"@SoulSpringCloudClient")," \u6ce8\u89e3")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"\u4f60\u53ef\u4ee5\u628a\u6ce8\u89e3\u52a0\u5230 ",(0,t.yg)("inlineCode",{parentName:"p"},"Controller")," \u7c7b\u4e0a\u9762, \u91cc\u9762\u7684path\u5c5e\u6027\u5219\u4e3a\u524d\u7f00\uff0c\u5982\u679c\u542b\u6709 ",(0,t.yg)("inlineCode",{parentName:"p"},"/**")," \u4ee3\u8868\u4f60\u7684\u6574\u4e2a\u63a5\u53e3\u9700\u8981\u88ab\u7f51\u5173\u4ee3\u7406"),(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},"\u4e3e\u5217\u5b50 \uff081\uff09\uff1a \u4ee3\u8868 ",(0,t.yg)("inlineCode",{parentName:"li"},"/test/payment"),", ",(0,t.yg)("inlineCode",{parentName:"li"},"/test/findByUserId")," \u90fd\u4f1a\u88ab\u7f51\u5173\u4ee3\u7406\u3002")),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-java"},' @RestController\n @RequestMapping("/test")\n @SoulSpringCloudClient(path = "/test/**")\n public class HttpTestController {\n\n     @PostMapping("/payment")\n     public UserDTO post(@RequestBody final UserDTO userDTO) {\n         return userDTO;\n     }\n\n     @GetMapping("/findByUserId")\n     public UserDTO findByUserId(@RequestParam("userId") final String userId) {\n         UserDTO userDTO = new UserDTO();\n         userDTO.setUserId(userId);\n         userDTO.setUserName("hello world");\n         return userDTO;\n     }\n  }\n')))),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},'\n* \u4e3e\u5217\u5b50 \uff082\uff09\uff1a \u4ee3\u8868 `/order/save`,\u4f1a\u88ab\u7f51\u5173\u4ee3\u7406,\u800c`/order/findById` \u5219\u4e0d\u4f1a\u3002\n\n ```java\n  @RestController\n  @RequestMapping("/order")\n  @SoulSpringCloudClient(path = "/order")\n  public class OrderController {\n\n      @PostMapping("/save")\n      @SoulSpringMvcClient(path = "/save")\n      public OrderDTO save(@RequestBody final OrderDTO orderDTO) {\n          orderDTO.setName("hello world save order");\n          return orderDTO;\n      }\n\n      @GetMapping("/findById")\n      public OrderDTO findById(@RequestParam("id") final String id) {\n          OrderDTO orderDTO = new OrderDTO();\n          orderDTO.setId(id);\n          orderDTO.setName("hello world findById");\n          return orderDTO;\n      }\n  }\n')),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"\u4e3e\u5217\u5b50 \uff083\uff09\uff1a isFull\uff1a",(0,t.yg)("inlineCode",{parentName:"li"},"true"),"  \u4ee3\u8868 ",(0,t.yg)("inlineCode",{parentName:"li"},"/sb-demo7-api/**"),"\uff0c\u6574\u4e2a\u670d\u52a1\u4f1a\u88ab\u7f51\u5173\u4ee3\u7406 ")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-yaml"},"soul:\n  client:\n    registerType: http\n    serverLists: http://localhost:9095\n    props:\n      contextPath: /http\n      appName: http\n      isFull: true\n# registerType : \u670d\u52a1\u6ce8\u518c\u7c7b\u578b\uff0c\u652f\u6301 http/zookeeper\n# serverList: \u4e3ahttp\u6ce8\u518c\u7c7b\u578b\u65f6\uff0c\u586b\u5199Soul-Admin\u9879\u76ee\u7684\u5730\u5740\uff0c\u6ce8\u610f\u52a0\u4e0ahttp://\uff0c\u591a\u4e2a\u5730\u5740\u7528\u82f1\u6587\u9017\u53f7\u5206\u9694\n#             \u4e3azookeeper\u6ce8\u518c\u7c7b\u578b\u65f6\uff0c\u586b\u5199zookeeper\u5730\u5740\uff0c\u591a\u4e2a\u5730\u5740\u7528\u82f1\u6587\u5206\u9694\n# contextPath: \u4e3a\u4f60\u7684\u8fd9\u4e2amvc\u9879\u76ee\u5728soul\u7f51\u5173\u7684\u8def\u7531\u524d\u7f00\uff0c\u8fd9\u4e2a\u4f60\u5e94\u8be5\u61c2\u610f\u601d\u628a\uff1f \u6bd4\u5982/order \uff0c/product \u7b49\u7b49\uff0c\u7f51\u5173\u4f1a\u6839\u636e\u4f60\u7684\u8fd9\u4e2a\u524d\u7f00\u6765\u8fdb\u884c\u8def\u7531.\n# appName\uff1a\u4f60\u7684\u5e94\u7528\u540d\u79f0\uff0c\u4e0d\u914d\u7f6e\u7684\u8bdd\uff0c\u4f1a\u9ed8\u8ba4\u53d6 dubbo\u914d\u7f6e\u4e2dapplication \u4e2d\u7684\u540d\u79f0\n# isFull: \u8bbe\u7f6etrue \u4ee3\u8868\u4ee3\u7406\u4f60\u7684\u6574\u4e2a\u670d\u52a1\uff0cfalse\u8868\u793a\u4ee3\u7406\u4f60\u5176\u4e2d\u67d0\u51e0\u4e2acontroller\n")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-java"},' @RestController\n @RequestMapping("/order")\n public class OrderController {\n\n     @PostMapping("/save")\n     @SoulSpringMvcClient(path = "/save")\n     public OrderDTO save(@RequestBody final OrderDTO orderDTO) {\n         orderDTO.setName("hello world save order");\n         return orderDTO;\n     }\n\n     @GetMapping("/findById")\n     public OrderDTO findById(@RequestParam("id") final String id) {\n         OrderDTO orderDTO = new OrderDTO();\n         orderDTO.setId(id);\n         orderDTO.setName("hello world findById");\n         return orderDTO;\n     }\n }\n')),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"\u542f\u52a8\u4f60\u7684\u670d\u52a1\uff0c\u5982\u679c\u8f93\u51fa\u4ee5\u4e0b\u65e5\u5fd7\uff1a",(0,t.yg)("inlineCode",{parentName:"li"},"http client register success"),"\uff0c\u8bc1\u660e\u4f60\u7684\u63a5\u53e3\u5df2\u7ecf\u88ab\u6ce8\u518c\u5230soul\u7f51\u5173\u3002")),(0,t.yg)("h2",{id:"\u63d2\u4ef6\u8bbe\u7f6e"},"\u63d2\u4ef6\u8bbe\u7f6e"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"\u5728 ",(0,t.yg)("inlineCode",{parentName:"li"},"soul-admin")," \u63d2\u4ef6\u7ba1\u7406\u4e2d\uff0c\u628a springCloud\u63d2\u4ef6\u8bbe\u7f6e\u4e3a\u5f00\u542f\u3002")),(0,t.yg)("h2",{id:"\u7528\u6237\u8bf7\u6c42"},"\u7528\u6237\u8bf7\u6c42"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"\u8bf4\u767d\u4e86\uff0c\u4f60\u4e4b\u524d\u600e\u4e48\u8bf7\u6c42\u5c31\u600e\u4e48\u8bf7\u6c42\uff0c\u6ca1\u6709\u5f88\u5927\u7684\u53d8\u52a8\uff0c\u53d8\u52a8\u7684\u5730\u65b9\u67092\u70b9\u3002")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"\u7b2c\u4e00\u70b9\uff0c\u4f60\u4e4b\u524d\u8bf7\u6c42\u7684\u57df\u540d\u662f\u4f60\u81ea\u5df1\u7684\u670d\u52a1\uff0c\u73b0\u5728\u8981\u6362\u6210\u7f51\u5173\u7684\u57df\u540d \uff08\u8fd9\u4e2a\u4f60\u542c\u7684\u61c2\uff1f\uff09")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"\u7b2c\u4e8c\u70b9\uff0csoul\u7f51\u5173\u9700\u8981\u6709\u4e00\u4e2a\u8def\u7531\u524d\u7f00\uff0c\u8fd9\u4e2a\u8def\u7531\u524d\u7f00\u5c31\u662f\u4f60\u63a5\u5165\u9879\u76ee\u8fdb\u884c\u914d\u7f6e ",(0,t.yg)("inlineCode",{parentName:"p"},"contextPath"),"\uff0c\u5982\u679c\u719f\u7684\u8bdd\uff0c\u53ef\u4ee5\u81ea\u7531\u5728 ",(0,t.yg)("inlineCode",{parentName:"p"},"soul-admin")," \u4e2d\u7684 springCloud\u63d2\u4ef6\u8fdb\u884c\u81ea\u7531\u66f4\u6539\u3002"))),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-yaml"},"\n# \u6bd4\u5982\u4f60\u6709\u4e00\u4e2a order\u670d\u52a1 \u5b83\u6709\u4e00\u4e2a\u63a5\u53e3\uff0c\u8bf7\u6c42\u8def\u5f84 http://localhost:8080/test/save\n\n# \u73b0\u5728\u5c31\u9700\u8981\u6362\u6210\uff1ahttp://localhost:9195/order/test/save\n\n# \u5176\u4e2d localhost:9195 \u4e3a\u7f51\u5173\u7684ip\u7aef\u53e3\uff0c\u9ed8\u8ba4\u7aef\u53e3\u662f9195 \uff0c/order \u662f\u4f60\u63a5\u5165\u7f51\u5173\u914d\u7f6e\u7684 contextPath\n\n# \u5176\u4ed6\u53c2\u6570\uff0c\u8bf7\u6c42\u65b9\u5f0f\u4e0d\u53d8\u3002\n\n# \u6211\u8bb2\u5230\u8fd9\u91cc\u8fd8\u4e0d\u61c2\uff1f \u8bf7\u52a0\u7fa4\u95ee\u5427\n\n")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"\u7136\u540e\u4f60\u5c31\u53ef\u4ee5\u8fdb\u884c\u8bbf\u95ee\u4e86\uff0c\u5982\u6b64\u7684\u65b9\u4fbf\u4e0e\u7b80\u5355\u3002")))}d.isMDXComponent=!0}}]);