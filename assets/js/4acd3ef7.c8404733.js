"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[91256],{95788:(e,a,n)=>{n.d(a,{Iu:()=>c,yg:()=>g});var t=n(11504);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function s(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=t.createContext({}),l=function(e){var a=t.useContext(p),n=a;return e&&(n="function"==typeof e?e(a):i(i({},a),e)),n},c=function(e){var a=l(e.components);return t.createElement(p.Provider,{value:a},e.children)},y="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},u=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),y=l(n),u=r,g=y["".concat(p,".").concat(u)]||y[u]||d[u]||o;return n?t.createElement(g,i(i({ref:a},c),{},{components:n})):t.createElement(g,i({ref:a},c))}));function g(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var p in a)hasOwnProperty.call(a,p)&&(s[p]=a[p]);s.originalType=e,s[y]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2264:(e,a,n)=>{n.r(a),n.d(a,{contentTitle:()=>i,default:()=>y,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var t=n(45072),r=(n(11504),n(95788));const o={title:"Sofa Proxy",keywords:["Sofa"],description:"sofa access shenyu gateway"},i=void 0,s={unversionedId:"user-guide/proxy/sofa-rpc-proxy",id:"user-guide/proxy/sofa-rpc-proxy",isDocsHomePage:!1,title:"Sofa Proxy",description:"sofa access shenyu gateway",source:"@site/docs/user-guide/proxy/sofa-rpc-proxy.md",sourceDirName:"user-guide/proxy",slug:"/user-guide/proxy/sofa-rpc-proxy",permalink:"/docs/next/user-guide/proxy/sofa-rpc-proxy",editUrl:"https://github.com/apache/shenyu-website/edit/main/docs/user-guide/proxy/sofa-rpc-proxy.md",version:"current",frontMatter:{title:"Sofa Proxy",keywords:["Sofa"],description:"sofa access shenyu gateway"},sidebar:"tutorialSidebar",previous:{title:"Motan Proxy",permalink:"/docs/next/user-guide/proxy/motan-proxy"},next:{title:"Spring Cloud Proxy",permalink:"/docs/next/user-guide/proxy/spring-cloud-proxy"}},p=[{value:"Add sofa plugin in gateway",id:"add-sofa-plugin-in-gateway",children:[]},{value:"Sofa service access gateway",id:"sofa-service-access-gateway",children:[]},{value:"User request and parameter description",id:"user-request-and-parameter-description",children:[]}],l={toc:p},c="wrapper";function y(e){let{components:a,...n}=e;return(0,r.yg)(c,(0,t.c)({},l,n,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"This document is intended to help the ",(0,r.yg)("inlineCode",{parentName:"p"},"Sofa")," service access the ",(0,r.yg)("inlineCode",{parentName:"p"},"Apache ShenYu")," gateway. The ",(0,r.yg)("inlineCode",{parentName:"p"},"Apache ShenYu")," gateway uses the ",(0,r.yg)("inlineCode",{parentName:"p"},"Sofa")," plugin to handle ",(0,r.yg)("inlineCode",{parentName:"p"},"sofa")," service."),(0,r.yg)("p",null,"Before the connection, start ",(0,r.yg)("inlineCode",{parentName:"p"},"shenyu-admin")," correctly, start ",(0,r.yg)("inlineCode",{parentName:"p"},"Sofa")," plugin, and add related dependencies on the gateway and ",(0,r.yg)("inlineCode",{parentName:"p"},"Sofa")," application client. Refer to the previous ",(0,r.yg)("a",{parentName:"p",href:"../quick-start/quick-start-sofa"},"Quick start with Sofa")," ."),(0,r.yg)("p",null,"For the use of the plugin, see\uff1a",(0,r.yg)("a",{parentName:"p",href:"/docs/next/plugin-center/proxy/sofa-plugin"},"Sofa Plugin")),(0,r.yg)("p",null,"For details about client access configuration, see ",(0,r.yg)("a",{parentName:"p",href:"/docs/next/user-guide/property-config/register-center-access"},"Application Client Access Config")," ."),(0,r.yg)("p",null,"For details about data synchronization configurations, see ",(0,r.yg)("a",{parentName:"p",href:"/docs/next/user-guide/property-config/use-data-sync"},"Data Synchronization Config")," ."),(0,r.yg)("h2",{id:"add-sofa-plugin-in-gateway"},"Add sofa plugin in gateway"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"In the current version, this dependency has been introduced by default.")),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Add the following dependencies in the gateway's ",(0,r.yg)("inlineCode",{parentName:"p"},"pom.xml")," file\uff1a"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-xml"},"       <dependency>\n           <groupId>com.alipay.sofa</groupId>\n           <artifactId>sofa-rpc-all</artifactId>\n           <version>5.7.6</version>\n           <exclusions>\n               <exclusion>\n                   <groupId>net.jcip</groupId>\n                   <artifactId>jcip-annotations</artifactId>\n               </exclusion>\n           </exclusions>\n       </dependency>\n       <dependency>\n           <groupId>org.apache.curator</groupId>\n           <artifactId>curator-client</artifactId>\n           <version>4.0.1</version>\n       </dependency>\n       <dependency>\n           <groupId>org.apache.curator</groupId>\n           <artifactId>curator-framework</artifactId>\n           <version>4.0.1</version>\n       </dependency>\n       <dependency>\n           <groupId>org.apache.curator</groupId>\n           <artifactId>curator-recipes</artifactId>\n           <version>4.0.1</version>\n       </dependency>\n       <dependency>\n           <groupId>org.apache.shenyu</groupId>\n           <artifactId>shenyu-spring-boot-starter-plugin-sofa</artifactId>\n           <version>${project.version}</version>\n       </dependency>\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Restart the gateway service."))),(0,r.yg)("h2",{id:"sofa-service-access-gateway"},"Sofa service access gateway"),(0,r.yg)("p",null,"Please refer to\uff1a",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/shenyu/tree/master/shenyu-examples/shenyu-examples-sofa"},"shenyu-examples-sofa")),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Based on the ",(0,r.yg)("inlineCode",{parentName:"p"},"springboot")," project\uff0cIntroduce the following dependencies\uff1a"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-xml"},"        <dependency>\n            <groupId>com.alipay.sofa</groupId>\n            <artifactId>rpc-sofa-boot-starter</artifactId>\n            <version>${rpc-sofa-boot-starter.version}</version>\n        </dependency>\n                <dependency>\n            <groupId>org.apache.shenyu</groupId>\n            <artifactId>shenyu-spring-boot-starter-client-sofa</artifactId>\n            <version>${shenyu.version}</version>\n        </dependency>\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Configure in application.yml"))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},"com:\n  alipay:\n    sofa:\n      rpc:\n        registry-address: zookeeper://127.0.0.1:2181 # consul # nacos\n        bolt-port: 8888\nshenyu:\n  register:\n    registerType: http #zookeeper #etcd #nacos #consul\n    serverLists: http://localhost:9095 #localhost:2181 #http://localhost:2379 #localhost:8848\n    props:\n      username: admin\n      password: 123456\n  client:\n    sofa:\n      props:\n        contextPath: /sofa\n        ipAndPort: sofa\n        appName: sofa\n        port: 8888\n")),(0,r.yg)("ol",{start:3},(0,r.yg)("li",{parentName:"ol"},"Configure the service interface exposed by the sofa service in the xml file in the resources.")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-xml"},'<beans xmlns="http://www.springframework.org/schema/beans"\n       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n       xmlns:sofa="http://sofastack.io/schema/sofaboot"\n       xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd\n            http://sofastack.io/schema/sofaboot https://sofastack.io/schema/sofaboot.xsd"\n       default-autowire="byName">\n    <sofa:service ref="sofaSingleParamService" interface="org.apache.shenyu.examples.sofa.api.service.SofaSingleParamService">\n        <sofa:binding.bolt/>\n    </sofa:service>\n    <sofa:service ref="sofaMultiParamService" interface="org.apache.shenyu.examples.sofa.api.service.SofaMultiParamService">\n        <sofa:binding.bolt/>\n    </sofa:service>\n</beans>\n')),(0,r.yg)("ol",{start:4},(0,r.yg)("li",{parentName:"ol"},"Add the ",(0,r.yg)("inlineCode",{parentName:"li"},"@ShenyuSofaClient")," annotation to the interface")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},'@ShenyuSofaClient("/demo")\n@Service\npublic class SofaClientMultiParamServiceImpl implements SofaClientMultiParamService {\n    \n    @Override\n    @ShenyuSofaClient("/findByIdsAndName")\n    public SofaSimpleTypeBean findByIdsAndName(final List<Integer> ids, final String name) {\n        return new SofaSimpleTypeBean(ids.toString(), "hello world shenyu sofa param findByIdsAndName \uff1a" + name);\n    }\n}\n')),(0,r.yg)("ol",{start:5},(0,r.yg)("li",{parentName:"ol"},"Start the ",(0,r.yg)("inlineCode",{parentName:"li"},"sofa")," service, and after successful registration:")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Go to ",(0,r.yg)("inlineCode",{parentName:"li"},"PluginList -> Proxy -> Sofa")," in the backend management system, you will see the information of auto-registered selectors and rules."),(0,r.yg)("li",{parentName:"ul"},"Go to ",(0,r.yg)("inlineCode",{parentName:"li"},"BasicConfig -> Metadata")," and search by app name . You will see the metadata of sofa, each ",(0,r.yg)("inlineCode",{parentName:"li"},"sofa")," interface method, will correspond to a metadata.")),(0,r.yg)("h2",{id:"user-request-and-parameter-description"},"User request and parameter description"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"The gateway can be requested by means of ",(0,r.yg)("inlineCode",{parentName:"li"},"http")," to request your ",(0,r.yg)("inlineCode",{parentName:"li"},"sofa")," service.",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"ShenYu gateway needs to have a routing prefix, this routing prefix is for you to access the project for configuration ",(0,r.yg)("inlineCode",{parentName:"li"},"contextPath")," .")))),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"For example, if you have an ",(0,r.yg)("inlineCode",{parentName:"p"},"order")," service, it has an interface and its registration path ",(0,r.yg)("inlineCode",{parentName:"p"},"/order/test/save")),(0,r.yg)("p",{parentName:"blockquote"},"Now it's to request the gateway via post\uff1a",(0,r.yg)("inlineCode",{parentName:"p"},"http://localhost:9195/order/test/save")),(0,r.yg)("p",{parentName:"blockquote"},"Where ",(0,r.yg)("inlineCode",{parentName:"p"},"localhost:9195")," is the IP port of the gateway, default port is ",(0,r.yg)("inlineCode",{parentName:"p"},"9195"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"/order")," is the ",(0,r.yg)("inlineCode",{parentName:"p"},"contextPath")," of your sofa access gateway configuration.")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Parameter passing\uff1a"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Access the gateway through http post\uff0cand pass through body and json."),(0,r.yg)("li",{parentName:"ul"},"For more parameter type transfer, please refer to the interface definition in ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/shenyu/tree/master/shenyu-examples/shenyu-examples-sofa"},"shenyu-examples-sofa")," and the parameter transfer method."))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Single java bean parameter type (default)")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Customize multi-parameter support:")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"In the gateway project you built, add a new class ",(0,r.yg)("inlineCode",{parentName:"p"},"MySofaParamResolveService"),", implements ",(0,r.yg)("inlineCode",{parentName:"p"},"org.apache.shenyu.plugin.api.sofa.SofaParamResolveService")," ."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-java"},"public interface SofaParamResolveService {\n\n  /**\n   * Build parameter pair.\n   * this is Resolve http body to get sofa param.\n   *\n   * @param body           the body\n   * @param parameterTypes the parameter types\n   * @return the pair\n   */\n  Pair<String[], Object[]> buildParameter(String body, String parameterTypes);\n}\n"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"body")," is the json string passed by body in http.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"parameterTypes"),": list of matched method parameter types, If there are multiple, use ",(0,r.yg)("inlineCode",{parentName:"p"},",")," to separate.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"In Pair\uff0cleft is the parameter type\uff0cand right is the parameter value. This is the standard for sofa generalization calls.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Register your class as a String bean and override the default implementation."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-java"},"@Bean\npublic SofaParamResolveService mySofaParamResolveService() {\n  return new MySofaParamResolveService();\n}\n")))))}y.isMDXComponent=!0}}]);