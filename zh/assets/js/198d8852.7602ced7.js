"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[7280],{95788:(e,n,a)=>{a.d(n,{Iu:()=>c,yg:()=>u});var r=a(11504);function t(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){t(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function p(e,n){if(null==e)return{};var a,r,t=function(e,n){if(null==e)return{};var a,r,t={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],n.indexOf(a)>=0||(t[a]=e[a]);return t}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var l=r.createContext({}),s=function(e){var n=r.useContext(l),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},c=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},y="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var a=e.components,t=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),y=s(a),m=t,u=y["".concat(l,".").concat(m)]||y[m]||g[m]||o;return a?r.createElement(u,i(i({ref:n},c),{},{components:a})):r.createElement(u,i({ref:n},c))}));function u(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=a.length,i=new Array(o);i[0]=m;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p[y]="string"==typeof e?e:t,i[1]=p;for(var s=2;s<o;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},30040:(e,n,a)=>{a.r(n),a.d(n,{contentTitle:()=>i,default:()=>y,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var r=a(45072),t=(a(11504),a(95788));const o={title:"Sofa\u670d\u52a1\u63a5\u5165",keywords:["Sofa"],description:"sofa \u63a5\u5165 Apache ShenYu \u7f51\u5173"},i=void 0,p={unversionedId:"user-guide/proxy/sofa-rpc-proxy",id:"version-2.6.1/user-guide/proxy/sofa-rpc-proxy",isDocsHomePage:!1,title:"Sofa\u670d\u52a1\u63a5\u5165",description:"sofa \u63a5\u5165 Apache ShenYu \u7f51\u5173",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.6.1/user-guide/proxy/sofa-rpc-proxy.md",sourceDirName:"user-guide/proxy",slug:"/user-guide/proxy/sofa-rpc-proxy",permalink:"/zh/docs/user-guide/proxy/sofa-rpc-proxy",editUrl:"https://github.com/apache/shenyu-website/edit/main/i18n/zh/docusaurus-plugin-content-docs/version-2.6.1/user-guide/proxy/sofa-rpc-proxy.md",version:"2.6.1",frontMatter:{title:"Sofa\u670d\u52a1\u63a5\u5165",keywords:["Sofa"],description:"sofa \u63a5\u5165 Apache ShenYu \u7f51\u5173"},sidebar:"version-2.6.0/tutorialSidebar",previous:{title:"Motan\u670d\u52a1\u63a5\u5165",permalink:"/zh/docs/user-guide/proxy/motan-proxy"},next:{title:"Spring Cloud\u670d\u52a1\u63a5\u5165",permalink:"/zh/docs/user-guide/proxy/spring-cloud-proxy"}},l=[{value:"\u5728\u7f51\u5173\u4e2d\u5f15\u5165 sofa \u63d2\u4ef6",id:"\u5728\u7f51\u5173\u4e2d\u5f15\u5165-sofa-\u63d2\u4ef6",children:[]},{value:"sofa\u670d\u52a1\u63a5\u5165\u7f51\u5173",id:"sofa\u670d\u52a1\u63a5\u5165\u7f51\u5173",children:[]},{value:"sofa\u7528\u6237\u8bf7\u6c42\u53ca\u53c2\u6570\u8bf4\u660e",id:"sofa\u7528\u6237\u8bf7\u6c42\u53ca\u53c2\u6570\u8bf4\u660e",children:[]}],s={toc:l},c="wrapper";function y(e){let{components:n,...a}=e;return(0,t.yg)(c,(0,r.c)({},s,a,{components:n,mdxType:"MDXLayout"}),(0,t.yg)("p",null,"\u6b64\u7bc7\u6587\u7ae0\u662f\u4ecb\u7ecd ",(0,t.yg)("inlineCode",{parentName:"p"},"sofa")," \u670d\u52a1\u63a5\u5165\u5230 ",(0,t.yg)("inlineCode",{parentName:"p"},"Apache ShenYu")," \u7f51\u5173\uff0c",(0,t.yg)("inlineCode",{parentName:"p"},"Apache ShenYu")," \u7f51\u5173\u4f7f\u7528 ",(0,t.yg)("inlineCode",{parentName:"p"},"sofa")," \u63d2\u4ef6\u6765\u63a5\u5165",(0,t.yg)("inlineCode",{parentName:"p"},"sofa"),"\u670d\u52a1\u3002"),(0,t.yg)("p",null,"\u63a5\u5165\u524d\uff0c\u8bf7\u6b63\u786e\u542f\u52a8 ",(0,t.yg)("inlineCode",{parentName:"p"},"shenyu-admin"),"\uff0c\u5e76\u5f00\u542f",(0,t.yg)("inlineCode",{parentName:"p"},"sofa"),"\u63d2\u4ef6\uff0c\u5728\u7f51\u5173\u7aef\u548c",(0,t.yg)("inlineCode",{parentName:"p"},"sofa"),"\u670d\u52a1\u7aef\u5f15\u5165\u76f8\u5173\u4f9d\u8d56\u3002\u53ef\u4ee5\u53c2\u8003\u524d\u9762\u7684 ",(0,t.yg)("a",{parentName:"p",href:"../quick-start/quick-start-sofa"},"Sofa\u5feb\u901f\u5f00\u59cb"),"\u3002"),(0,t.yg)("p",null,"\u5173\u4e8e\u63d2\u4ef6\u4f7f\u7528\u53ef\u8bf7\u53c2\u8003\uff1a",(0,t.yg)("a",{parentName:"p",href:"/zh/docs/plugin-center/proxy/sofa-plugin"},"Sofa\u63d2\u4ef6")),(0,t.yg)("p",null,"\u5e94\u7528\u5ba2\u6237\u7aef\u63a5\u5165\u7684\u76f8\u5173\u914d\u7f6e\u8bf7\u53c2\u8003\uff1a",(0,t.yg)("a",{parentName:"p",href:"/zh/docs/user-guide/property-config/register-center-access"},"\u5ba2\u6237\u7aef\u63a5\u5165\u914d\u7f6e"),"\u3002"),(0,t.yg)("p",null,"\u6570\u636e\u540c\u6b65\u7684\u76f8\u5173\u914d\u7f6e\u8bf7\u53c2\u8003\uff1a",(0,t.yg)("a",{parentName:"p",href:"/zh/docs/user-guide/property-config/use-data-sync"},"\u6570\u636e\u540c\u6b65\u914d\u7f6e"),"\u3002"),(0,t.yg)("h2",{id:"\u5728\u7f51\u5173\u4e2d\u5f15\u5165-sofa-\u63d2\u4ef6"},"\u5728\u7f51\u5173\u4e2d\u5f15\u5165 sofa \u63d2\u4ef6"),(0,t.yg)("blockquote",null,(0,t.yg)("p",{parentName:"blockquote"},"\u5f53\u524d\u7248\u672c\uff0c\u9ed8\u8ba4\u5df2\u7ecf\u5f15\u5165\u6b64\u4f9d\u8d56")),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"\u5728\u7f51\u5173\u7684 ",(0,t.yg)("inlineCode",{parentName:"p"},"pom.xml")," \u6587\u4ef6\u4e2d\u589e\u52a0\u5982\u4e0b\u4f9d\u8d56\uff1a"),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-xml"},"       <dependency>\n           <groupId>com.alipay.sofa</groupId>\n           <artifactId>sofa-rpc-all</artifactId>\n           <version>5.7.6</version>\n           <exclusions>\n               <exclusion>\n                   <groupId>net.jcip</groupId>\n                   <artifactId>jcip-annotations</artifactId>\n               </exclusion>\n           </exclusions>\n       </dependency>\n       <dependency>\n           <groupId>org.apache.curator</groupId>\n           <artifactId>curator-client</artifactId>\n           <version>4.0.1</version>\n       </dependency>\n       <dependency>\n           <groupId>org.apache.curator</groupId>\n           <artifactId>curator-framework</artifactId>\n           <version>4.0.1</version>\n       </dependency>\n       <dependency>\n           <groupId>org.apache.curator</groupId>\n           <artifactId>curator-recipes</artifactId>\n           <version>4.0.1</version>\n       </dependency>\n       <dependency>\n           <groupId>org.apache.shenyu</groupId>\n           <artifactId>shenyu-spring-boot-starter-plugin-sofa</artifactId>\n           <version>${project.version}</version>\n       </dependency>\n"))),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"\u91cd\u542f\u7f51\u5173\u670d\u52a1\u3002"))),(0,t.yg)("h2",{id:"sofa\u670d\u52a1\u63a5\u5165\u7f51\u5173"},"sofa\u670d\u52a1\u63a5\u5165\u7f51\u5173"),(0,t.yg)("p",null,"\u53ef\u4ee5\u53c2\u8003\u793a\u4f8b\uff1a",(0,t.yg)("a",{parentName:"p",href:"https://github.com/apache/shenyu/tree/master/shenyu-examples/shenyu-examples-sofa"},"shenyu-examples-sofa")),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("inlineCode",{parentName:"p"},"springboot"),"\u6784\u5efa\uff0c\u5f15\u5165\u4ee5\u4e0b\u4f9d\u8d56\uff1a"),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-xml"},"        <dependency>\n            <groupId>com.alipay.sofa</groupId>\n            <artifactId>rpc-sofa-boot-starter</artifactId>\n            <version>${rpc-sofa-boot-starter.version}</version>\n        </dependency>\n                <dependency>\n            <groupId>org.apache.shenyu</groupId>\n            <artifactId>shenyu-spring-boot-starter-client-sofa</artifactId>\n            <version>${shenyu.version}</version>\n        </dependency>\n"))),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"\u5728 application.yml \u4e2d\u914d\u7f6e"))),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-yaml"},"com:\n  alipay:\n    sofa:\n      rpc:\n        registry-address: zookeeper://127.0.0.1:2181 # consul # nacos\n        bolt-port: 8888\nshenyu:\n  register:\n    registerType: http #zookeeper #etcd #nacos #consul\n    serverLists: http://localhost:9095 #localhost:2181 #http://localhost:2379 #localhost:8848\n    props:\n      username: admin\n      password: 123456\n  client:\n    sofa:\n      props:\n        contextPath: /sofa\n        ipAndPort: sofa\n        appName: sofa\n        port: 8888\n")),(0,t.yg)("ol",{start:3},(0,t.yg)("li",{parentName:"ol"},"\u5728 resources \u76ee\u5f55\u4e0bxml \u6587\u4ef6\u4e2d\u914d\u7f6e sofa \u670d\u52a1\u66b4\u9732\u7684\u670d\u52a1\u63a5\u53e3")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-xml"},'<beans xmlns="http://www.springframework.org/schema/beans"\n       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n       xmlns:sofa="http://sofastack.io/schema/sofaboot"\n       xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd\n            http://sofastack.io/schema/sofaboot https://sofastack.io/schema/sofaboot.xsd"\n       default-autowire="byName">\n        \x3c!-- \u793a\u4f8b sofa \u63a5\u53e3 --\x3e\n    <sofa:service ref="sofaSingleParamService" interface="org.apache.shenyu.examples.sofa.api.service.SofaSingleParamService">\n        <sofa:binding.bolt/>\n    </sofa:service>\n        \x3c!-- \u793a\u4f8b sofa \u63a5\u53e3 --\x3e\n    <sofa:service ref="sofaMultiParamService" interface="org.apache.shenyu.examples.sofa.api.service.SofaMultiParamService">\n        <sofa:binding.bolt/>\n    </sofa:service>\n</beans>\n')),(0,t.yg)("ol",{start:4},(0,t.yg)("li",{parentName:"ol"},"\u5728\u63a5\u53e3\u4e0a\u589e\u52a0",(0,t.yg)("inlineCode",{parentName:"li"},"@ShenyuSofaClient"),"\u6ce8\u89e3")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-java"},'@ShenyuSofaClient("/demo")\n@Service\npublic class SofaClientMultiParamServiceImpl implements SofaClientMultiParamService {\n    \n    @Override\n    @ShenyuSofaClient("/findByIdsAndName")\n    public SofaSimpleTypeBean findByIdsAndName(final List<Integer> ids, final String name) {\n        return new SofaSimpleTypeBean(ids.toString(), "hello world shenyu sofa param findByIdsAndName \uff1a" + name);\n    }\n}\n')),(0,t.yg)("ol",{start:5},(0,t.yg)("li",{parentName:"ol"},"\u542f\u52a8",(0,t.yg)("inlineCode",{parentName:"li"},"sofa"),"\u670d\u52a1\uff0c\u6210\u529f\u6ce8\u518c\u540e")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"\u8fdb\u5165\u540e\u53f0\u7ba1\u7406\u7cfb\u7edf\u7684 ",(0,t.yg)("inlineCode",{parentName:"li"},"\u63d2\u4ef6\u5217\u8868 -> Proxy -> Sofa"),"\uff0c\u4f1a\u770b\u5230\u81ea\u52a8\u6ce8\u518c\u7684\u9009\u62e9\u5668\u3001\u89c4\u5219\u4fe1\u606f\u3002"),(0,t.yg)("li",{parentName:"ul"},"\u8fdb\u5165\u540e\u53f0\u7ba1\u7406\u7cfb\u7edf\u7684 ",(0,t.yg)("inlineCode",{parentName:"li"},"\u57fa\u7840\u914d\u7f6e-> \u5143\u6570\u636e\u7ba1\u7406"),"\uff0c\u641c\u7d22appName\uff08\u901a\u8fc7\uff09\u53ef\u4ee5\u770b\u5230\u5143\u6570\u636e\uff0c\u6bcf\u4e00\u4e2a",(0,t.yg)("inlineCode",{parentName:"li"},"sofa"),"\u63a5\u53e3\u65b9\u6cd5\uff0c\u90fd\u4f1a\u5bf9\u5e94\u4e00\u6761\u5143\u6570\u636e\u3002")),(0,t.yg)("h2",{id:"sofa\u7528\u6237\u8bf7\u6c42\u53ca\u53c2\u6570\u8bf4\u660e"},"sofa\u7528\u6237\u8bf7\u6c42\u53ca\u53c2\u6570\u8bf4\u660e"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"\u53ef\u4ee5\u901a\u8fc7 ",(0,t.yg)("inlineCode",{parentName:"li"},"http")," \u7684\u65b9\u5f0f\u6765\u8bf7\u6c42\u7f51\u5173\uff0c\u4ece\u800c\u8bf7\u6c42\u5230\u4f60\u7684 ",(0,t.yg)("inlineCode",{parentName:"li"},"sofa")," \u670d\u52a1\u3002",(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"Apache ShenYu")," \u7f51\u5173\u9700\u8981\u6709\u4e00\u4e2a\u8def\u7531\u524d\u7f00\uff0c\u8fd9\u4e2a\u8def\u7531\u524d\u7f00\u5c31\u662f\u63a5\u5165\u7f51\u5173\u914d\u7f6e\u7684 ",(0,t.yg)("inlineCode",{parentName:"li"},"contextPath"),"\u3002")))),(0,t.yg)("blockquote",null,(0,t.yg)("p",{parentName:"blockquote"},"\u6bd4\u5982\u4f60\u6709\u4e00\u4e2a ",(0,t.yg)("inlineCode",{parentName:"p"},"order")," \u670d\u52a1 \u5b83\u6709\u4e00\u4e2a\u63a5\u53e3\uff0c\u5b83\u7684\u6ce8\u518c\u8def\u5f84 ",(0,t.yg)("inlineCode",{parentName:"p"},"/order/test/save")),(0,t.yg)("p",{parentName:"blockquote"},"\u73b0\u5728\u5c31\u662f\u901a\u8fc7 ",(0,t.yg)("inlineCode",{parentName:"p"},"post")," \u65b9\u5f0f\u8bf7\u6c42\u7f51\u5173\uff1ahttp://localhost:9195/order/test/save"),(0,t.yg)("p",{parentName:"blockquote"},"\u5176\u4e2d ",(0,t.yg)("inlineCode",{parentName:"p"},"localhost:9195")," \u4e3a\u7f51\u5173\u7684 ",(0,t.yg)("inlineCode",{parentName:"p"},"ip")," \u7aef\u53e3\uff0c\u9ed8\u8ba4\u7aef\u53e3\u662f ",(0,t.yg)("inlineCode",{parentName:"p"},"9195")," \uff0c",(0,t.yg)("inlineCode",{parentName:"p"},"/order")," \u662f\u4f60",(0,t.yg)("inlineCode",{parentName:"p"},"sofa"),"\u63a5\u5165\u7f51\u5173\u914d\u7f6e\u7684 ",(0,t.yg)("inlineCode",{parentName:"p"},"contextPath"))),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"\u53c2\u6570\u4f20\u9012\uff1a"),(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},"\u901a\u8fc7 ",(0,t.yg)("inlineCode",{parentName:"li"},"http"),"\u534f\u8bae\uff0c ",(0,t.yg)("inlineCode",{parentName:"li"},"post")," \u65b9\u5f0f\u8bbf\u95ee\u7f51\u5173\uff0c\u901a\u8fc7\u5728",(0,t.yg)("inlineCode",{parentName:"li"},"http body"),"\u4e2d\u4f20\u5165",(0,t.yg)("inlineCode",{parentName:"li"},"json"),"\u7c7b\u578b\u53c2\u6570\u3002"),(0,t.yg)("li",{parentName:"ul"},"\u66f4\u591a\u53c2\u6570\u7c7b\u578b\u4f20\u9012\uff0c\u53ef\u4ee5\u53c2\u8003 ",(0,t.yg)("a",{parentName:"li",href:"https://github.com/apache/shenyu/tree/master/shenyu-examples/shenyu-examples-sofa"},"shenyu-examples-sofa")," \u4e2d\u7684\u63a5\u53e3\u5b9a\u4e49\uff0c\u4ee5\u53ca\u53c2\u6570\u4f20\u9012\u65b9\u5f0f\u3002"))),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"\u5355\u4e2a",(0,t.yg)("inlineCode",{parentName:"p"},"java bean"),"\u53c2\u6570\u7c7b\u578b \uff08\u9ed8\u8ba4\uff09")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"\u81ea\u5b9a\u4e49\u5b9e\u73b0\u591a\u53c2\u6570\u652f\u6301\uff1a"),(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},"\u5728\u4f60\u642d\u5efa\u7684\u7f51\u5173\u9879\u76ee\u4e2d\uff0c\u65b0\u589e\u4e00\u4e2a\u7c7b ",(0,t.yg)("inlineCode",{parentName:"li"},"MySofaParamResolveService"),"\uff0c\u5b9e\u73b0 ",(0,t.yg)("inlineCode",{parentName:"li"},"org.apache.shenyu.plugin.api.sofa.SofaParamResolveService"),"\u63a5\u53e3\u3002")),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-java"},"public interface SofaParamResolveService {\n\n  /**\n   * Build parameter pair.\n   * this is Resolve http body to get sofa param.\n   *\n   * @param body           the body\n   * @param parameterTypes the parameter types\n   * @return the pair\n   */\n  Pair<String[], Object[]> buildParameter(String body, String parameterTypes);\n}\n"))),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("inlineCode",{parentName:"p"},"body"),"\u4e3a",(0,t.yg)("inlineCode",{parentName:"p"},"http"),"\u4e2d",(0,t.yg)("inlineCode",{parentName:"p"},"body"),"\u4f20\u7684",(0,t.yg)("inlineCode",{parentName:"p"},"json"),"\u5b57\u7b26\u4e32\u3002")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("inlineCode",{parentName:"p"},"parameterTypes"),": \u5339\u914d\u5230\u7684\u65b9\u6cd5\u53c2\u6570\u7c7b\u578b\u5217\u8868\uff0c\u5982\u679c\u6709\u591a\u4e2a\uff0c\u5219\u4f7f\u7528",(0,t.yg)("inlineCode",{parentName:"p"},","),"\u5206\u5272\u3002")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("inlineCode",{parentName:"p"},"Pair"),"\u4e2d\uff0c",(0,t.yg)("inlineCode",{parentName:"p"},"left"),"\u4e3a\u53c2\u6570\u7c7b\u578b\uff0c",(0,t.yg)("inlineCode",{parentName:"p"},"right"),"\u4e3a\u53c2\u6570\u503c\uff0c\u8fd9\u662f",(0,t.yg)("inlineCode",{parentName:"p"},"sofa"),"\u6cdb\u5316\u8c03\u7528\u7684\u6807\u51c6\u3002")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"\u628a\u4f60\u7684\u7c7b\u6ce8\u518c\u6210",(0,t.yg)("inlineCode",{parentName:"p"},"Spring"),"\u7684",(0,t.yg)("inlineCode",{parentName:"p"},"bean"),"\uff0c\u8986\u76d6\u9ed8\u8ba4\u7684\u5b9e\u73b0\u3002"),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-java"},"@Bean\npublic SofaParamResolveService mySofaParamResolveService() {\n  return new MySofaParamResolveService();\n}\n")))))}y.isMDXComponent=!0}}]);