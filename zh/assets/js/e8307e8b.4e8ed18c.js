"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[7496],{95788:(e,n,t)=>{t.d(n,{Iu:()=>u,yg:()=>d});var r=t(11504);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},g="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,p=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),g=s(t),c=a,d=g["".concat(l,".").concat(c)]||g[c]||y[c]||p;return t?r.createElement(d,i(i({ref:n},u),{},{components:t})):r.createElement(d,i({ref:n},u))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var p=t.length,i=new Array(p);i[0]=c;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o[g]="string"==typeof e?e:a,i[1]=o;for(var s=2;s<p;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},68100:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>i,default:()=>g,frontMatter:()=>p,metadata:()=>o,toc:()=>l});var r=t(45072),a=(t(11504),t(95788));const p={title:"Http\u670d\u52a1\u63a5\u5165",keywords:["Http"],description:"Http\u670d\u52a1\u63a5\u5165"},i=void 0,o={unversionedId:"user-guide/proxy/http-proxy",id:"version-2.6.1/user-guide/proxy/http-proxy",isDocsHomePage:!1,title:"Http\u670d\u52a1\u63a5\u5165",description:"Http\u670d\u52a1\u63a5\u5165",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.6.1/user-guide/proxy/http-proxy.md",sourceDirName:"user-guide/proxy",slug:"/user-guide/proxy/http-proxy",permalink:"/zh/docs/user-guide/proxy/http-proxy",editUrl:"https://github.com/apache/shenyu-website/edit/main/i18n/zh/docusaurus-plugin-content-docs/version-2.6.1/user-guide/proxy/http-proxy.md",version:"2.6.1",frontMatter:{title:"Http\u670d\u52a1\u63a5\u5165",keywords:["Http"],description:"Http\u670d\u52a1\u63a5\u5165"},sidebar:"version-2.6.0/tutorialSidebar",previous:{title:"gRPC\u670d\u52a1\u63a5\u5165",permalink:"/zh/docs/user-guide/proxy/grpc-proxy"},next:{title:"Motan\u670d\u52a1\u63a5\u5165",permalink:"/zh/docs/user-guide/proxy/motan-proxy"}},l=[{value:"\u5728\u7f51\u5173\u4e2d\u5f15\u5165 divide \u63d2\u4ef6",id:"\u5728\u7f51\u5173\u4e2d\u5f15\u5165-divide-\u63d2\u4ef6",children:[]},{value:"Http\u8bf7\u6c42\u63a5\u5165\u7f51\u5173\uff08springMvc \u4f53\u7cfb\u7528\u6237\uff09",id:"http\u8bf7\u6c42\u63a5\u5165\u7f51\u5173springmvc-\u4f53\u7cfb\u7528\u6237",children:[]},{value:"Http\u8bf7\u6c42\u63a5\u5165\u7f51\u5173\uff08\u5176\u4ed6\u8bed\u8a00\uff0c\u975espringMvc\u4f53\u7cfb\uff09",id:"http\u8bf7\u6c42\u63a5\u5165\u7f51\u5173\u5176\u4ed6\u8bed\u8a00\u975espringmvc\u4f53\u7cfb",children:[]},{value:"\u7528\u6237\u8bf7\u6c42",id:"\u7528\u6237\u8bf7\u6c42",children:[]}],s={toc:l},u="wrapper";function g(e){let{components:n,...t}=e;return(0,a.yg)(u,(0,r.c)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"\u672c\u6587\u6863\u65e8\u5728\u5e2e\u52a9 ",(0,a.yg)("inlineCode",{parentName:"p"},"http")," \u670d\u52a1\u63a5\u5165\u5230 ",(0,a.yg)("inlineCode",{parentName:"p"},"Apache ShenYu")," \u7f51\u5173\u3002",(0,a.yg)("inlineCode",{parentName:"p"},"Apache ShenYu")," \u7f51\u5173\u4f7f\u7528 ",(0,a.yg)("inlineCode",{parentName:"p"},"divide")," \u63d2\u4ef6\u6765\u5904\u7406 ",(0,a.yg)("inlineCode",{parentName:"p"},"http")," \u8bf7\u6c42\u3002"),(0,a.yg)("p",null,"\u63a5\u5165\u524d\uff0c\u8bf7\u6b63\u786e\u542f\u52a8 ",(0,a.yg)("inlineCode",{parentName:"p"},"shenyu-admin"),"\uff0c\u5e76\u5f00\u542f",(0,a.yg)("inlineCode",{parentName:"p"},"divide"),"\u63d2\u4ef6\uff0c\u5728\u7f51\u5173\u7aef\u548c",(0,a.yg)("inlineCode",{parentName:"p"},"Http"),"\u670d\u52a1\u7aef\u5f15\u5165\u76f8\u5173\u4f9d\u8d56\u3002\u53ef\u4ee5\u53c2\u8003\u524d\u9762\u7684 ",(0,a.yg)("a",{parentName:"p",href:"../../quick-start/quick-start-http"},"Http\u5feb\u901f\u5f00\u59cb"),"\u3002"),(0,a.yg)("p",null,"\u5e94\u7528\u5ba2\u6237\u7aef\u63a5\u5165\u7684\u76f8\u5173\u914d\u7f6e\u8bf7\u53c2\u8003\uff1a",(0,a.yg)("a",{parentName:"p",href:"/zh/docs/user-guide/property-config/register-center-access"},"\u5ba2\u6237\u7aef\u63a5\u5165\u914d\u7f6e"),"\u3002"),(0,a.yg)("p",null,"\u6570\u636e\u540c\u6b65\u7684\u76f8\u5173\u914d\u7f6e\u8bf7\u53c2\u8003\uff1a",(0,a.yg)("a",{parentName:"p",href:"/zh/docs/user-guide/property-config/use-data-sync"},"\u6570\u636e\u540c\u6b65\u914d\u7f6e"),"\u3002"),(0,a.yg)("h2",{id:"\u5728\u7f51\u5173\u4e2d\u5f15\u5165-divide-\u63d2\u4ef6"},"\u5728\u7f51\u5173\u4e2d\u5f15\u5165 divide \u63d2\u4ef6"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"\u5728\u7f51\u5173\u7684 ",(0,a.yg)("inlineCode",{parentName:"p"},"pom.xml")," \u6587\u4ef6\u4e2d\u589e\u52a0\u5982\u4e0b\u4f9d\u8d56\uff1a"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-xml"},"    <dependency>\n        <groupId>org.apache.shenyu</groupId>\n        <artifactId>shenyu-spring-boot-starter-plugin-divide</artifactId>\n        <version>${project.version}</version>\n    </dependency>\n    \n    <dependency>\n        <groupId>org.apache.shenyu</groupId>\n        <artifactId>shenyu-spring-boot-starter-plugin-httpclient</artifactId>\n        <version>${project.version}</version>\n    </dependency>\n")))),(0,a.yg)("h2",{id:"http\u8bf7\u6c42\u63a5\u5165\u7f51\u5173springmvc-\u4f53\u7cfb\u7528\u6237"},"Http\u8bf7\u6c42\u63a5\u5165\u7f51\u5173\uff08springMvc \u4f53\u7cfb\u7528\u6237\uff09"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"SpringBoot")," \u7528\u6237"),(0,a.yg)("p",{parentName:"li"},"\u53ef\u4ee5\u53c2\u8003\uff1a",(0,a.yg)("a",{parentName:"p",href:"https://github.com/apache/shenyu/tree/master/shenyu-examples/shenyu-examples-http"},"shenyu-examples-http")),(0,a.yg)("ol",{parentName:"li"},(0,a.yg)("li",{parentName:"ol"},"\u5728\u4f60\u7684",(0,a.yg)("inlineCode",{parentName:"li"},"http"),"\u670d\u52a1\u4e2d\u7684 ",(0,a.yg)("inlineCode",{parentName:"li"},"pom.xml"),"\u6587\u4ef6 \u65b0\u589e\u5982\u4e0b\u4f9d\u8d56:")),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-xml"},"    <dependency>\n        <groupId>org.apache.shenyu</groupId>\n        <artifactId>shenyu-spring-boot-starter-client-springmvc</artifactId>\n        <version>${shenyu.version}</version>\n    </dependency>\n")),(0,a.yg)("ol",{parentName:"li",start:2},(0,a.yg)("li",{parentName:"ol"},"\u5728 application.yaml \u589e\u52a0\u5982\u4e0b\u914d\u7f6e\uff1a")),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-yaml"},"shenyu:\n  register:\n    registerType: http #zookeeper #etcd #nacos #consul\n    serverLists: http://localhost:9095 #localhost:2181 #http://localhost:2379 #localhost:8848\n    props:\n      username: admin\n      password: 123456\n  client:\n    http:\n      props:\n        contextPath: /http\n        appName: http\n  #      port: 8189\n"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"SpringMvc")," \u7528\u6237"),(0,a.yg)("p",{parentName:"li"},"\u53ef\u4ee5\u53c2\u8003\uff1a",(0,a.yg)("a",{parentName:"p",href:"https://github.com/apache/shenyu/tree/master/shenyu-examples/shenyu-examples-springmvc"},"shenyu-examples-springmvc")),(0,a.yg)("p",{parentName:"li"},"\u5728\u4f60\u7684",(0,a.yg)("inlineCode",{parentName:"p"},"http"),"\u670d\u52a1\u4e2d\u7684 ",(0,a.yg)("inlineCode",{parentName:"p"},"pom.xml"),"\u6587\u4ef6 \u65b0\u589e\u5982\u4e0b\u4f9d\u8d56:"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-xml"},"    <dependency>\n        <groupId>org.apache.shenyu</groupId>\n        <artifactId>shenyu-client-springmvc</artifactId>\n        <version>${shenyu.version}</version>\n    </dependency>\n")),(0,a.yg)("p",{parentName:"li"},"\u5e76\u5728\u4f60\u7684 ",(0,a.yg)("inlineCode",{parentName:"p"},"bean")," \u5b9a\u4e49\u7684 ",(0,a.yg)("inlineCode",{parentName:"p"},"xml")," \u6587\u4ef6\u4e2d\u65b0\u589e\u5982\u4e0b\uff1a"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-xml"},'   <bean id="springMvcClientBeanPostProcessor" class="org.apache.shenyu.client.springmvc.init.SpringMvcClientBeanPostProcessor">\n       <constructor-arg ref="clientPropertiesConfig"/>\n       <constructor-arg ref="clientRegisterRepository"/>\n   </bean>\n       \n   \x3c!-- \u6839\u636e\u5b9e\u9645\u7684\u6ce8\u518c\u7c7b\u578b\u914d\u7f6e\u6ce8\u518c\u4e2d\u5fc3 --\x3e\n   <bean id="shenyuRegisterCenterConfig" class="org.apache.shenyu.register.common.config.ShenyuRegisterCenterConfig">\n       <property name="registerType" value="http"/>\n       <property name="serverLists" value="http://localhost:9095"/>\n   </bean>\n\n   \x3c!-- \u5ba2\u6237\u7aef\u5c5e\u6027\u914d\u7f6e --\x3e\n   <bean id="clientPropertiesConfig"\n         class="org.apache.shenyu.register.common.config.ShenyuClientConfig.ClientPropertiesConfig">\n     <property name="props">\n         <map>\n             <entry key="contextPath" value="/\u4f60\u7684contextPath"/>\n             <entry key="appName" value="\u4f60\u7684app\u540d\u5b57"/>\n             <entry key="port" value="\u4f60\u7684\u7aef\u53e3"/>\n             <entry key="isFull" value="false"/>\n         </map>\n     </property>\n   </bean>\n\n   \x3c!-- \u6839\u636e\u5b9e\u9645\u7684\u6ce8\u518c\u7c7b\u578b\u914d\u7f6e\u5ba2\u6237\u7aef\u6ce8\u518c\u4ed3\u5e93 --\x3e\n   <bean id="clientRegisterRepository" class="org.apache.shenyu.register.client.http.HttpClientRegisterRepository">\n       <constructor-arg ref="shenyuRegisterCenterConfig"/>\n   </bean>\n   \n   <bean id="shenyuClientShutdownHook" class="org.apache.shenyu.client.core.shutdown.ShenyuClientShutdownHook">\n       <constructor-arg ref="shenyuRegisterCenterConfig"/>\n       <constructor-arg ref="clientRegisterRepository"/>\n   </bean>\n   \n   <bean id="contextRegisterListener" class="org.apache.shenyu.client.springmvc.init.ContextRegisterListener">\n       <constructor-arg ref="clientPropertiesConfig"/>\n   </bean>\n')),(0,a.yg)("p",{parentName:"li"},"\u5728\u4f60\u7684 ",(0,a.yg)("inlineCode",{parentName:"p"},"controller")," \u7684\u63a5\u53e3\u4e0a\u52a0\u4e0a ",(0,a.yg)("inlineCode",{parentName:"p"},"@ShenyuSpringMvcClient")," \u6ce8\u89e3\u3002"),(0,a.yg)("p",{parentName:"li"},"\u4f60\u53ef\u4ee5\u628a\u6ce8\u89e3\u52a0\u5230 ",(0,a.yg)("inlineCode",{parentName:"p"},"Controller")," \u7c7b\u4e0a\u9762\uff0c\u91cc\u9762\u7684",(0,a.yg)("inlineCode",{parentName:"p"},"path"),"\u5c5e\u6027\u5219\u4e3a\u524d\u7f00\uff0c\u5982\u679c\u542b\u6709 ",(0,a.yg)("inlineCode",{parentName:"p"},"/**")," \u4ee3\u8868\u4f60\u7684\u6574\u4e2a\u63a5\u53e3\u9700\u8981\u88ab\u7f51\u5173\u4ee3\u7406\u3002"))),(0,a.yg)("p",null,"\u793a\u4f8b\u4e00"),(0,a.yg)("p",null,"\u4e0b\u9762\u8868\u793a\u7684\u662f ",(0,a.yg)("inlineCode",{parentName:"p"},"/test/payment"),"\uff0c",(0,a.yg)("inlineCode",{parentName:"p"},"/test/findByUserId")," \u90fd\u4f1a\u88ab\u7f51\u5173\u4ee3\u7406\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-java"},'  @RestController\n  @RequestMapping("/test")\n  @ShenyuSpringMvcClient(path = "/test/**")\n  public class HttpTestController {\n\n      @PostMapping("/payment")\n      public UserDTO post(@RequestBody final UserDTO userDTO) {\n          return userDTO;\n      }\n\n      @GetMapping("/findByUserId")\n      public UserDTO findByUserId(@RequestParam("userId") final String userId) {\n          UserDTO userDTO = new UserDTO();\n          userDTO.setUserId(userId);\n          userDTO.setUserName("hello world");\n          return userDTO;\n      }\n   }\n')),(0,a.yg)("p",null,"\u793a\u4f8b\u4e8c"),(0,a.yg)("p",null,"\u4e0b\u9762\u8868\u793a\u7684\u662f\uff1a ",(0,a.yg)("inlineCode",{parentName:"p"},"/order/save")," \u4f1a\u88ab\u7f51\u5173\u4ee3\u7406\uff0c\u800c ",(0,a.yg)("inlineCode",{parentName:"p"},"/order/findById")," \u5219\u4e0d\u4f1a\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-java"},'  @RestController\n  @RequestMapping("/order")\n  @ShenyuSpringMvcClient(path = "/order")\n  public class OrderController {\n\n      @PostMapping("/save")\n      @ShenyuSpringMvcClient(path = "/save")\n      public OrderDTO save(@RequestBody final OrderDTO orderDTO) {\n          orderDTO.setName("hello world save order");\n          return orderDTO;\n      }\n\n      @GetMapping("/findById")\n      public OrderDTO findById(@RequestParam("id") final String id) {\n          OrderDTO orderDTO = new OrderDTO();\n          orderDTO.setId(id);\n          orderDTO.setName("hello world findById");\n          return orderDTO;\n      }\n  }\n')),(0,a.yg)("p",null,"\u793a\u4f8b\u4e09\uff1a\u8fd9\u662f\u4e00\u79cd\u7b80\u5316\u7684\u4f7f\u7528\u65b9\u5f0f\uff0c\u53ea\u9700\u8981\u4e00\u4e2a\u7b80\u5355\u7684\u6ce8\u91ca\u5373\u53ef\u4f7f\u7528\u5143\u6570\u636e\u6ce8\u518c\u5230\u7f51\u5173.\n\u7279\u522b\u8bf4\u660e\uff1a\u76ee\u524d\u53ea\u652f\u6301",(0,a.yg)("inlineCode",{parentName:"p"},"@RequestMapping\u3001@GetMapping\u3001@PostMapping\u3001@DeleteMapping\u3001@PutMapping"),"\u6ce8\u89e3\uff0c\u5e76\u4e14\u53ea\u5bf9",(0,a.yg)("inlineCode",{parentName:"p"},"@XXXMapping"),"\u4e2d\u7684\u7b2c\u4e00\u4e2a\u8def\u5f84\u6709\u6548"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-java"},'  @RestController\n  @RequestMapping("new/feature")\n  public class NewFeatureController {\n  \n    /**\n     * no support gateway access api.\n     *\n     * @return result\n     */\n    @RequestMapping("/gateway/not")\n    public EntityResult noSupportGateway() {\n      return new EntityResult(200, "no support gateway access");\n    }\n  \n    /**\n     * Do not use shenyu annotation path. used request mapping path.\n     *\n     * @return result\n     */\n    @RequestMapping("/requst/mapping/path")\n    @ShenyuSpringCloudClient\n    public EntityResult requestMappingUrl() {\n      return new EntityResult(200, "Do not use shenyu annotation path. used request mapping path");\n    }\n  \n    /**\n     * Do not use shenyu annotation path. used post mapping path.\n     *\n     * @return result\n     */\n    @PostMapping("/post/mapping/path")\n    @ShenyuSpringCloudClient\n    public EntityResult postMappingUrl() {\n      return new EntityResult(200, "Do not use shenyu annotation path. used post mapping path");\n    }\n  \n    /**\n     * Do not use shenyu annotation path. used post mapping path.\n     *\n     * @return result\n     */\n    @GetMapping("/get/mapping/path")\n    @ShenyuSpringCloudClient\n    public EntityResult getMappingUrl() {\n      return new EntityResult(200, "Do not use shenyu annotation path. used get mapping path");\n    }\n  }\n\n')),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u542f\u52a8\u4f60\u7684\u9879\u76ee\uff0c\u4f60\u7684\u670d\u52a1\u63a5\u53e3\u63a5\u5165\u5230\u4e86\u7f51\u5173\uff0c\u8fdb\u5165",(0,a.yg)("inlineCode",{parentName:"li"},"shenyu-admin"),"\u540e\u53f0\u7ba1\u7406\u7cfb\u7edf\u7684",(0,a.yg)("inlineCode",{parentName:"li"},"\u63d2\u4ef6\u5217\u8868 -> http process -> divide"),"\uff0c\u770b\u5230\u81ea\u52a8\u521b\u5efa\u7684\u9009\u62e9\u5668\u548c\u89c4\u5219\u3002")),(0,a.yg)("h2",{id:"http\u8bf7\u6c42\u63a5\u5165\u7f51\u5173\u5176\u4ed6\u8bed\u8a00\u975espringmvc\u4f53\u7cfb"},"Http\u8bf7\u6c42\u63a5\u5165\u7f51\u5173\uff08\u5176\u4ed6\u8bed\u8a00\uff0c\u975espringMvc\u4f53\u7cfb\uff09"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"\u9996\u5148\u5728 ",(0,a.yg)("inlineCode",{parentName:"p"},"shenyu-admin")," \u627e\u5230 ",(0,a.yg)("inlineCode",{parentName:"p"},"divide")," \u63d2\u4ef6\uff0c\u8fdb\u884c\u9009\u62e9\u5668\uff0c\u548c\u89c4\u5219\u7684\u6dfb\u52a0\uff0c\u8fdb\u884c\u6d41\u91cf\u7684\u5339\u914d\u7b5b\u9009\u3002")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"\u5982\u679c\u4e0d\u61c2\u600e\u4e48\u914d\u7f6e\uff0c\u8bf7\u53c2\u8003 ",(0,a.yg)("a",{parentName:"p",href:"../admin-usage/selector-and-rule"},"\u9009\u62e9\u5668\u548c\u89c4\u5219\u7ba1\u7406"),"\u3002")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"\u60a8\u4e5f\u53ef\u4ee5\u81ea\u5b9a\u4e49\u5f00\u53d1\u5c5e\u4e8e\u4f60\u7684 ",(0,a.yg)("inlineCode",{parentName:"p"},"http-client"),"\uff0c\u53c2\u8003 ",(0,a.yg)("a",{parentName:"p",href:"../../developer/developer-shenyu-client"},"\u591a\u8bed\u8a00 Http \u5ba2\u6237\u7aef\u5f00\u53d1"),"\u3002"))),(0,a.yg)("h2",{id:"\u7528\u6237\u8bf7\u6c42"},"\u7528\u6237\u8bf7\u6c42"),(0,a.yg)("p",null,"\u5f53\u4f60\u7684",(0,a.yg)("inlineCode",{parentName:"p"},"Http"),"\u670d\u52a1\u63a5\u5165\u5230",(0,a.yg)("inlineCode",{parentName:"p"},"Apache ShenYu"),"\u7f51\u5173\u540e\uff0c\u8bf7\u6c42\u65b9\u5f0f\u6ca1\u6709\u5f88\u5927\u7684\u53d8\u52a8\uff0c\u5c0f\u7684\u6539\u52a8\u6709\u4e24\u70b9\u3002"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"\u7b2c\u4e00\u70b9\uff0c\u4f60\u4e4b\u524d\u8bf7\u6c42\u7684\u57df\u540d\u662f\u4f60\u81ea\u5df1\u7684\u670d\u52a1\uff0c\u73b0\u5728\u8981\u6362\u6210\u7f51\u5173\u7684\u57df\u540d\u3002")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"\u7b2c\u4e8c\u70b9\uff0c",(0,a.yg)("inlineCode",{parentName:"p"},"Apache ShenYu")," \u7f51\u5173\u9700\u8981\u6709\u4e00\u4e2a\u8def\u7531\u524d\u7f00\uff0c\u8fd9\u4e2a\u8def\u7531\u524d\u7f00\u5c31\u662f\u4f60\u63a5\u5165\u9879\u76ee\u8fdb\u884c\u914d\u7f6e ",(0,a.yg)("inlineCode",{parentName:"p"},"contextPath"),"\uff0c\u5982\u679c\u719f\u7684\u8bdd\uff0c\u53ef\u4ee5\u5728 ",(0,a.yg)("inlineCode",{parentName:"p"},"shenyu-admin")," \u4e2d\u7684",(0,a.yg)("inlineCode",{parentName:"p"},"divide"),"\u63d2\u4ef6\u8fdb\u884c\u81ea\u7531\u66f4\u6539\u3002"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"\u6bd4\u5982\u4f60\u6709\u4e00\u4e2a ",(0,a.yg)("inlineCode",{parentName:"p"},"order")," \u670d\u52a1 \u5b83\u6709\u4e00\u4e2a\u63a5\u53e3\uff0c\u8bf7\u6c42\u8def\u5f84 ",(0,a.yg)("inlineCode",{parentName:"p"},"http://localhost:8080/test/save"),"\u3002")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"\u73b0\u5728\u5c31\u9700\u8981\u6362\u6210\uff1a",(0,a.yg)("inlineCode",{parentName:"p"},"http://localhost:9195/order/test/save"),"\u3002")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"\u5176\u4e2d ",(0,a.yg)("inlineCode",{parentName:"p"},"localhost:9195")," \u4e3a\u7f51\u5173\u7684",(0,a.yg)("inlineCode",{parentName:"p"},"ip"),"\u7aef\u53e3\uff0c\u9ed8\u8ba4\u7aef\u53e3\u662f",(0,a.yg)("inlineCode",{parentName:"p"},"9195")," \uff0c",(0,a.yg)("inlineCode",{parentName:"p"},"/order")," \u662f\u4f60\u63a5\u5165\u7f51\u5173\u914d\u7f6e\u7684 ",(0,a.yg)("inlineCode",{parentName:"p"},"contextPath"),"\u3002")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"\u5176\u4ed6\u53c2\u6570\uff0c\u8bf7\u6c42\u65b9\u5f0f\u4e0d\u53d8\u3002"))))),(0,a.yg)("p",null,"\u7136\u540e\u4f60\u5c31\u53ef\u4ee5\u8fdb\u884c\u8bbf\u95ee\u4e86\uff0c\u5982\u6b64\u7684\u65b9\u4fbf\u4e0e\u7b80\u5355\u3002"))}g.isMDXComponent=!0}}]);