"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[97744],{95788:(e,n,r)=>{r.d(n,{Iu:()=>p,yg:()=>y});var a=r(11504);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,a,t=function(e,n){if(null==e)return{};var r,a,t={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var s=a.createContext({}),u=function(e){var n=a.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},p=function(e){var n=u(e.components);return a.createElement(s.Provider,{value:n},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(r),c=t,y=d["".concat(s,".").concat(c)]||d[c]||g[c]||i;return r?a.createElement(y,l(l({ref:n},p),{},{components:r})):a.createElement(y,l({ref:n},p))}));function y(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=r.length,l=new Array(i);l[0]=c;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[d]="string"==typeof e?e:t,l[1]=o;for(var u=2;u<i;u++)l[u]=r[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},248:(e,n,r)=>{r.r(n),r.d(n,{contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=r(45072),t=(r(11504),r(95788));const i={sidebar_position:4,title:"SpringCloud Proxy",keywords:["soul"],description:"springCloud with soul gateway"},l=void 0,o={unversionedId:"users-guide/spring-cloud-proxy",id:"version-2.3.0-Legacy/users-guide/spring-cloud-proxy",isDocsHomePage:!1,title:"SpringCloud Proxy",description:"springCloud with soul gateway",source:"@site/versioned_docs/version-2.3.0-Legacy/users-guide/spring-cloud-proxy.md",sourceDirName:"users-guide",slug:"/users-guide/spring-cloud-proxy",permalink:"/docs/2.3.0-Legacy/users-guide/spring-cloud-proxy",editUrl:"https://github.com/apache/shenyu-website/edit/main/versioned_docs/version-2.3.0-Legacy/users-guide/spring-cloud-proxy.md",version:"2.3.0-Legacy",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"SpringCloud Proxy",keywords:["soul"],description:"springCloud with soul gateway"},sidebar:"version-2.3.0-Legacy/tutorialSidebar",previous:{title:"Integrate dubbo with soul gateway",permalink:"/docs/2.3.0-Legacy/users-guide/dubbo-proxy"},next:{title:"Sofa RPC Proxy",permalink:"/docs/2.3.0-Legacy/users-guide/sofa-rpc-proxy"}},s=[{value:"Features",id:"features",children:[]},{value:"Configure soul gateway as Spring Cloud proxy",id:"configure-soul-gateway-as-spring-cloud-proxy",children:[]},{value:"SpringCloud integration with gateway",id:"springcloud-integration-with-gateway",children:[]},{value:"Plugin Setting",id:"plugin-setting",children:[]},{value:"User Request",id:"user-request",children:[]}],u={toc:s},p="wrapper";function d(e){let{components:n,...r}=e;return(0,t.yg)(p,(0,a.c)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h2",{id:"features"},"Features"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"This article is a guide about how to integrate Spring Cloud with soul gateway quickly."),(0,t.yg)("li",{parentName:"ul"},"Please enable ",(0,t.yg)("inlineCode",{parentName:"li"},"springCloud")," plug-in in soul-admin background."),(0,t.yg)("li",{parentName:"ul"},"Please start ",(0,t.yg)("inlineCode",{parentName:"li"},"soul-admin")," successfully before integrating and ",(0,t.yg)("a",{parentName:"li",href:"./soul-set-up"},"Environment Setup")," is Ok.")),(0,t.yg)("h2",{id:"configure-soul-gateway-as-spring-cloud-proxy"},"Configure soul gateway as Spring Cloud proxy"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"add these dependencies in gateway's pom.xml:")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-xml"},"\x3c!--soul springCloud plugin start--\x3e\n<dependency>\n    <groupId>org.dromara</groupId>\n    <artifactId>soul-spring-boot-starter-plugin-springcloud</artifactId>\n    <version>${last.version}</version>\n</dependency>\n \x3c!--soul springCloud plugin end--\x3e\n\n<dependency>\n    <groupId>org.springframework.cloud</groupId>\n    <artifactId>spring-cloud-commons</artifactId>\n    <version>2.2.0.RELEASE</version>\n</dependency> \n<dependency>\n    <groupId>org.springframework.cloud</groupId>\n    <artifactId>spring-cloud-starter-netflix-ribbon</artifactId>\n    <version>2.2.0.RELEASE</version>\n</dependency>\n")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"If you use ",(0,t.yg)("inlineCode",{parentName:"p"},"eureka")," as SpringCloud registry center."),(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},"add these dependencies:")),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-xml"},"  <dependency>\n       <groupId>org.springframework.cloud</groupId>\n       <artifactId>spring-cloud-starter-netflix-eureka-client</artifactId>\n       <version>2.2.0.RELEASE</version>\n  </dependency>\n"))),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"add these config values in gateway's yaml file:"),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-yaml"},"   eureka:\n     client:\n       serviceUrl:\n         defaultZone: http://localhost:8761/eureka/ #your eureka address\n     instance:\n       prefer-ip-address: true\n"))),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"if you use ",(0,t.yg)("inlineCode",{parentName:"p"},"nacos")," as Spring Cloud registry center."),(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},"add these dependencies:")),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-xml"}," <dependency>\n       <groupId>com.alibaba.cloud</groupId>\n       <artifactId>spring-cloud-starter-alibaba-nacos-discovery</artifactId>\n       <version>2.1.0.RELEASE</version>\n </dependency>\n"))),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"add these config values in gateway's yaml file:"),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-yaml"},"  spring:\n     cloud:\n       nacos:\n         discovery:\n            server-addr: 127.0.0.1:8848 # your nacos address\n"))),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"restart your gateway service."))),(0,t.yg)("h2",{id:"springcloud-integration-with-gateway"},"SpringCloud integration with gateway"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"add these dependencies in your project\uff1a")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-xml"}," <dependency>\n      <groupId>org.dromara</groupId>\n      <artifactId>soul-spring-boot-starter-client-springcloud</artifactId>\n      <version>${last.version}</version>\n </dependency>\n")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"backend server register center config, please look:",(0,t.yg)("a",{parentName:"li",href:"../register-center/register-center-access"},"register center access"),".")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"add the annotation ",(0,t.yg)("inlineCode",{parentName:"p"},"@SoulSpringCloudClient")," in your ",(0,t.yg)("inlineCode",{parentName:"p"},"controller")," interface.")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"you can apply the annotation to class-level in a controller.the name of the path variable is prefix and '/**' will apply proxy for entire interfaces."),(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},"example \uff081\uff09\uff1aboth ",(0,t.yg)("inlineCode",{parentName:"li"},"/test/payment")," and ",(0,t.yg)("inlineCode",{parentName:"li"},"/test/findByUserId")," will be handled by gateway.")),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-java"},' @RestController\n @RequestMapping("/test")\n @SoulSpringCloudClient(path = "/test/**")\n public class HttpTestController {\n     \n     @PostMapping("/payment")\n     public UserDTO post(@RequestBody final UserDTO userDTO) {\n         return userDTO;\n     }\n     \n     @GetMapping("/findByUserId")\n     public UserDTO findByUserId(@RequestParam("userId") final String userId) {\n         UserDTO userDTO = new UserDTO();\n         userDTO.setUserId(userId);\n         userDTO.setUserName("hello world");\n         return userDTO;\n     }    \n  }\n')))),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},'  \n* example \uff082\uff09\uff1a`/order/save` will be handled by gateway, and `/order/findById` won\'t.\n  \n ```java\n  @RestController\n  @RequestMapping("/order")\n  @SoulSpringCloudClient(path = "/order")\n  public class OrderController {\n  \n      @PostMapping("/save")\n      @SoulSpringMvcClient(path = "/save")\n      public OrderDTO save(@RequestBody final OrderDTO orderDTO) {\n          orderDTO.setName("hello world save order");\n          return orderDTO;\n      }\n \n      @GetMapping("/findById")\n      public OrderDTO findById(@RequestParam("id") final String id) {\n          OrderDTO orderDTO = new OrderDTO();\n          orderDTO.setId(id);\n          orderDTO.setName("hello world findById");\n          return orderDTO;\n      }\n  }\n')),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"start your service, get the log ",(0,t.yg)("inlineCode",{parentName:"li"},"dubbo client register success"),", then your interface has been added with soul gateway successfully.")),(0,t.yg)("h2",{id:"plugin-setting"},"Plugin Setting"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"enable Spring Cloud plugin in ",(0,t.yg)("inlineCode",{parentName:"li"},"soul-admin"),".")),(0,t.yg)("h2",{id:"user-request"},"User Request"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"Send the request as before, only two points need to notice.")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"firstly\uff0cthe domain name that requested before in your service, now need to replace with gateway's domain name.")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"secondly\uff0csoul gateway needs a route prefix which comes from ",(0,t.yg)("inlineCode",{parentName:"p"},"contextPath"),", it configured during the integration with gateway, you can change it freely in divide plugin of ",(0,t.yg)("inlineCode",{parentName:"p"},"soul-admin"),", if your familiar with it. "))),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-yaml"},"\n# for example, your have an order service and it has a interface, the request url: http://localhost:8080/test/save\n\n# now need to change to\uff1ahttp://localhost:9195/order/test/save\n\n# we can see localhost:9195 is the gateway's ip port, default port number is 9195 \uff0c/order is the contextPath in your config yaml file. \n\n# the request of other parameters don't change.\n\n# Any questions, pls join the group and we can talk about it.\n\n")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Then you can visit, very easy and simple.")))}d.isMDXComponent=!0}}]);