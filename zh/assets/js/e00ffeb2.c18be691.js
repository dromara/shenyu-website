"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[15960],{95788:(e,a,r)=>{r.d(a,{Iu:()=>c,yg:()=>m});var n=r(11504);function t(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function o(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?o(Object(r),!0).forEach((function(a){t(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function d(e,a){if(null==e)return{};var r,n,t=function(e,a){if(null==e)return{};var r,n,t={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],a.indexOf(r)>=0||(t[r]=e[r]);return t}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var p=n.createContext({}),u=function(e){var a=n.useContext(p),r=a;return e&&(r="function"==typeof e?e(a):i(i({},a),e)),r},c=function(e){var a=u(e.components);return n.createElement(p.Provider,{value:a},e.children)},s="mdxType",l={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},b=n.forwardRef((function(e,a){var r=e.components,t=e.mdxType,o=e.originalType,p=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),s=u(r),b=t,m=s["".concat(p,".").concat(b)]||s[b]||l[b]||o;return r?n.createElement(m,i(i({ref:a},c),{},{components:r})):n.createElement(m,i({ref:a},c))}));function m(e,a){var r=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var o=r.length,i=new Array(o);i[0]=b;var d={};for(var p in a)hasOwnProperty.call(a,p)&&(d[p]=a[p]);d.originalType=e,d[s]="string"==typeof e?e:t,i[1]=d;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},35156:(e,a,r)=>{r.r(a),r.d(a,{contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>d,toc:()=>p});var n=r(45072),t=(r(11504),r(95788));const o={title:"Dubbo\u5feb\u901f\u5f00\u59cb",description:"Dubbo\u5feb\u901f\u5f00\u59cb"},i=void 0,d={unversionedId:"quick-start/quick-start-dubbo",id:"version-2.4.3/quick-start/quick-start-dubbo",isDocsHomePage:!1,title:"Dubbo\u5feb\u901f\u5f00\u59cb",description:"Dubbo\u5feb\u901f\u5f00\u59cb",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.4.3/quick-start/quick-start-dubbo.md",sourceDirName:"quick-start",slug:"/quick-start/quick-start-dubbo",permalink:"/zh/docs/2.4.3/quick-start/quick-start-dubbo",editUrl:"https://github.com/apache/shenyu-website/edit/main/i18n/zh/docusaurus-plugin-content-docs/version-2.4.3/quick-start/quick-start-dubbo.md",version:"2.4.3",frontMatter:{title:"Dubbo\u5feb\u901f\u5f00\u59cb",description:"Dubbo\u5feb\u901f\u5f00\u59cb"},sidebar:"version-2.4.3/tutorialSidebar",previous:{title:"\u96c6\u7fa4\u90e8\u7f72",permalink:"/zh/docs/2.4.3/deployment/deployment-cluster"},next:{title:"gRPC\u5feb\u901f\u5f00\u59cb",permalink:"/zh/docs/2.4.3/quick-start/quick-start-grpc"}},p=[{value:"\u73af\u5883\u51c6\u5907",id:"\u73af\u5883\u51c6\u5907",children:[]},{value:"\u8fd0\u884cshenyu-examples-dubbo\u9879\u76ee",id:"\u8fd0\u884cshenyu-examples-dubbo\u9879\u76ee",children:[]},{value:"\u6d4b\u8bd5",id:"\u6d4b\u8bd5",children:[]}],u={toc:p},c="wrapper";function s(e){let{components:a,...o}=e;return(0,t.yg)(c,(0,n.c)({},u,o,{components:a,mdxType:"MDXLayout"}),(0,t.yg)("p",null,"\u672c\u6587\u6863\u6f14\u793a\u5982\u4f55\u5c06",(0,t.yg)("inlineCode",{parentName:"p"},"Dubbo"),"\u670d\u52a1\u63a5\u5165\u5230",(0,t.yg)("inlineCode",{parentName:"p"},"Apache ShenYu"),"\u7f51\u5173\u3002\u60a8\u53ef\u4ee5\u76f4\u63a5\u5728\u5de5\u7a0b\u4e0b\u627e\u5230\u672c\u6587\u6863\u7684",(0,t.yg)("a",{parentName:"p",href:"https://github.com/apache/shenyu/tree/v2.4.3/shenyu-examples/shenyu-examples-dubbo"},"\u793a\u4f8b\u4ee3\u7801")," \u3002"),(0,t.yg)("h2",{id:"\u73af\u5883\u51c6\u5907"},"\u73af\u5883\u51c6\u5907"),(0,t.yg)("p",null,"\u8bf7\u53c2\u8003\u8fd0\u7ef4\u90e8\u7f72\u7684\u5185\u5bb9\uff0c\u9009\u62e9\u4e00\u79cd\u65b9\u5f0f\u542f\u52a8",(0,t.yg)("inlineCode",{parentName:"p"},"shenyu-admin"),"\u3002\u6bd4\u5982\uff0c\u901a\u8fc7 ",(0,t.yg)("a",{parentName:"p",href:"../deployment/deployment-local"},"\u672c\u5730\u90e8\u7f72")," \u542f\u52a8",(0,t.yg)("inlineCode",{parentName:"p"},"Apache ShenYu"),"\u540e\u53f0\u7ba1\u7406\u7cfb\u7edf\u3002"),(0,t.yg)("p",null,"\u542f\u52a8\u6210\u529f\u540e\uff0c\u9700\u8981\u5728\u57fa\u7840\u914d\u7f6e",(0,t.yg)("inlineCode",{parentName:"p"},"->"),"\u63d2\u4ef6\u7ba1\u7406\u4e2d\uff0c\u628a",(0,t.yg)("inlineCode",{parentName:"p"},"dubbo")," \u63d2\u4ef6\u8bbe\u7f6e\u4e3a\u5f00\u542f\uff0c\u5e76\u8bbe\u7f6e\u4f60\u7684\u6ce8\u518c\u5730\u5740\uff0c\u8bf7\u786e\u4fdd\u6ce8\u518c\u4e2d\u5fc3\u5728\u4f60\u672c\u5730\u5df2\u7ecf\u5f00\u542f\u3002"),(0,t.yg)("p",null,(0,t.yg)("img",{src:r(16276).c})),(0,t.yg)("p",null,"\u542f\u52a8\u7f51\u5173\uff0c\u5982\u679c\u662f\u901a\u8fc7\u6e90\u7801\u7684\u65b9\u5f0f\uff0c\u76f4\u63a5\u8fd0\u884c",(0,t.yg)("inlineCode",{parentName:"p"},"shenyu-bootstrap"),"\u4e2d\u7684",(0,t.yg)("inlineCode",{parentName:"p"},"ShenyuBootstrapApplication"),"\u3002"),(0,t.yg)("blockquote",null,(0,t.yg)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff0c\u5728\u542f\u52a8\u524d\uff0c\u8bf7\u786e\u4fdd\u7f51\u5173\u5df2\u7ecf\u5f15\u5165\u76f8\u5173\u4f9d\u8d56\u3002")),(0,t.yg)("p",null,"\u5982\u679c\u5ba2\u6237\u7aef\u662f",(0,t.yg)("inlineCode",{parentName:"p"},"apache dubbo"),"\uff0c\u6ce8\u518c\u4e2d\u5fc3\u4f7f\u7528",(0,t.yg)("inlineCode",{parentName:"p"},"zookeeper"),"\uff0c\u8bf7\u53c2\u8003\u5982\u4e0b\u914d\u7f6e\uff1a"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-java"},"        \x3c!-- apache shenyu  apache dubbo plugin start--\x3e\n        <dependency>\n            <groupId>org.apache.shenyu</groupId>\n            <artifactId>shenyu-spring-boot-starter-client-apache-dubbo</artifactId>\n            <version>${project.version}</version>\n        </dependency>\n        <dependency>\n            <groupId>org.apache.dubbo</groupId>\n            <artifactId>dubbo</artifactId>\n            <version>2.7.5</version>\n        </dependency>\n        \x3c!-- Dubbo zookeeper registry dependency start --\x3e\n        <dependency>\n            <groupId>org.apache.curator</groupId>\n            <artifactId>curator-client</artifactId>\n            <version>4.0.1</version>\n            <exclusions>\n                <exclusion>\n                    <artifactId>log4j</artifactId>\n                    <groupId>log4j</groupId>\n                </exclusion>\n            </exclusions>\n        </dependency>\n        <dependency>\n            <groupId>org.apache.curator</groupId>\n            <artifactId>curator-framework</artifactId>\n            <version>4.0.1</version>\n        </dependency>\n        <dependency>\n            <groupId>org.apache.curator</groupId>\n            <artifactId>curator-recipes</artifactId>\n            <version>4.0.1</version>\n        </dependency>\n        \x3c!-- Dubbo zookeeper registry dependency end --\x3e\n        \x3c!-- apache shenyu  apache dubbo plugin end--\x3e\n")),(0,t.yg)("p",null,"\u5982\u679c\u5ba2\u6237\u7aef\u662f",(0,t.yg)("inlineCode",{parentName:"p"},"alibaba dubbo"),"\uff0c\u6ce8\u518c\u4e2d\u5fc3\u4f7f\u7528",(0,t.yg)("inlineCode",{parentName:"p"},"zookeeper"),"\uff0c\u8bf7\u53c2\u8003\u5982\u4e0b\u914d\u7f6e\uff1a"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-java"},"        \x3c!-- apache shenyu alibaba dubbo plugin start--\x3e\n        <dependency>\n            <groupId>org.apache.shenyu</groupId>\n            <artifactId>shenyu-spring-boot-starter-client-alibaba-dubbo</artifactId>\n            <version>${project.version}</version>\n        </dependency>\n        <dependency>\n            <groupId>com.alibaba</groupId>\n            <artifactId>dubbo</artifactId>\n            <version>${alibaba.dubbo.version}</version>\n        </dependency>\n        <dependency>\n            <groupId>org.apache.curator</groupId>\n            <artifactId>curator-client</artifactId>\n            <version>${curator.version}</version>\n            <exclusions>\n                <exclusion>\n                    <artifactId>log4j</artifactId>\n                    <groupId>log4j</groupId>\n                </exclusion>\n            </exclusions>\n        </dependency>\n        <dependency>\n            <groupId>org.apache.curator</groupId>\n            <artifactId>curator-framework</artifactId>\n            <version>${curator.version}</version>\n        </dependency>\n        <dependency>\n            <groupId>org.apache.curator</groupId>\n            <artifactId>curator-recipes</artifactId>\n            <version>${curator.version}</version>\n        </dependency>\n        \x3c!-- apache shenyu  alibaba dubbo plugin end--\x3e\n")),(0,t.yg)("h2",{id:"\u8fd0\u884cshenyu-examples-dubbo\u9879\u76ee"},"\u8fd0\u884cshenyu-examples-dubbo\u9879\u76ee"),(0,t.yg)("p",null,"\u4e0b\u8f7d ",(0,t.yg)("a",{parentName:"p",href:"https://github.com/apache/shenyu/tree/v2.4.3/shenyu-examples/shenyu-examples-dubbo"},"shenyu-examples-dubbo")," ."),(0,t.yg)("p",null,"\u4fee\u6539 ",(0,t.yg)("inlineCode",{parentName:"p"},"spring-dubbo.xml")," \u4e2d\u7684\u6ce8\u518c\u5730\u5740\u4e3a\u4f60\u672c\u5730\uff08\u6ce8\u610f\u533a\u5206",(0,t.yg)("inlineCode",{parentName:"p"},"dubbo"),"\u7684\u7248\u672c\u662f",(0,t.yg)("inlineCode",{parentName:"p"},"apache dubbo"),"\u8fd8\u662f",(0,t.yg)("inlineCode",{parentName:"p"},"alibaba dubbo"),"\uff09\uff0c\u5982\uff1a"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-xml"},'<dubbo:registry address="zookeeper://localhost:2181"/>\n')),(0,t.yg)("p",null,"\u8fd0\u884c\u76f8\u5e94\u7684",(0,t.yg)("inlineCode",{parentName:"p"},"main"),"\u65b9\u6cd5\u542f\u52a8\u9879\u76ee\uff0c\uff08\u6ce8\u610f\u533a\u5206",(0,t.yg)("inlineCode",{parentName:"p"},"dubbo"),"\u7684\u7248\u672c\u662f",(0,t.yg)("inlineCode",{parentName:"p"},"apache dubbo"),"\u8fd8\u662f",(0,t.yg)("inlineCode",{parentName:"p"},"alibaba dubbo"),"\uff09\u3002"),(0,t.yg)("p",null,"\u6210\u529f\u542f\u52a8\u4f1a\u6709\u5982\u4e0b\u65e5\u5fd7\uff1a"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-shell"},'2021-02-06 20:58:01.807  INFO 3724 --- [pool-2-thread-1] o.d.s.client.common.utils.RegisterUtils  : dubbo client register success: {"appName":"dubbo","contextPath":"/dubbo","path":"/dubbo/insert","pathDesc":"Insert a row of data","rpcType":"dubbo","serviceName":"org.dromara.shenyu.examples.dubbo.api.service.DubboTestService","methodName":"insert","ruleName":"/dubbo/insert","parameterTypes":"org.dromara.shenyu.examples.dubbo.api.entity.DubboTest","rpcExt":"{\\"group\\":\\"\\",\\"version\\":\\"\\",\\"loadbalance\\":\\"random\\",\\"retries\\":2,\\"timeout\\":10000,\\"url\\":\\"\\"}","enabled":true} \n2021-02-06 20:58:01.821  INFO 3724 --- [pool-2-thread-1] o.d.s.client.common.utils.RegisterUtils  : dubbo client register success: {"appName":"dubbo","contextPath":"/dubbo","path":"/dubbo/findAll","pathDesc":"Get all data","rpcType":"dubbo","serviceName":"org.dromara.shenyu.examples.dubbo.api.service.DubboTestService","methodName":"findAll","ruleName":"/dubbo/findAll","parameterTypes":"","rpcExt":"{\\"group\\":\\"\\",\\"version\\":\\"\\",\\"loadbalance\\":\\"random\\",\\"retries\\":2,\\"timeout\\":10000,\\"url\\":\\"\\"}","enabled":true} \n2021-02-06 20:58:01.833  INFO 3724 --- [pool-2-thread-1] o.d.s.client.common.utils.RegisterUtils  : dubbo client register success: {"appName":"dubbo","contextPath":"/dubbo","path":"/dubbo/findById","pathDesc":"Query by Id","rpcType":"dubbo","serviceName":"org.dromara.shenyu.examples.dubbo.api.service.DubboTestService","methodName":"findById","ruleName":"/dubbo/findById","parameterTypes":"java.lang.String","rpcExt":"{\\"group\\":\\"\\",\\"version\\":\\"\\",\\"loadbalance\\":\\"random\\",\\"retries\\":2,\\"timeout\\":10000,\\"url\\":\\"\\"}","enabled":true} \n2021-02-06 20:58:01.844  INFO 3724 --- [pool-2-thread-1] o.d.s.client.common.utils.RegisterUtils  : dubbo client register success: {"appName":"dubbo","contextPath":"/dubbo","path":"/dubbo/findByListId","pathDesc":"","rpcType":"dubbo","serviceName":"org.dromara.shenyu.examples.dubbo.api.service.DubboMultiParamService","methodName":"findByListId","ruleName":"/dubbo/findByListId","parameterTypes":"java.util.List","rpcExt":"{\\"group\\":\\"\\",\\"version\\":\\"\\",\\"loadbalance\\":\\"random\\",\\"retries\\":2,\\"timeout\\":10000,\\"url\\":\\"\\"}","enabled":true} \n2021-02-06 20:58:01.855  INFO 3724 --- [pool-2-thread-1] o.d.s.client.common.utils.RegisterUtils  : dubbo client register success: {"appName":"dubbo","contextPath":"/dubbo","path":"/dubbo/findByIdsAndName","pathDesc":"","rpcType":"dubbo","serviceName":"org.dromara.shenyu.examples.dubbo.api.service.DubboMultiParamService","methodName":"findByIdsAndName","ruleName":"/dubbo/findByIdsAndName","parameterTypes":"java.util.List,java.lang.String","rpcExt":"{\\"group\\":\\"\\",\\"version\\":\\"\\",\\"loadbalance\\":\\"random\\",\\"retries\\":2,\\"timeout\\":10000,\\"url\\":\\"\\"}","enabled":true} \n2021-02-06 20:58:01.866  INFO 3724 --- [pool-2-thread-1] o.d.s.client.common.utils.RegisterUtils  : dubbo client register success: {"appName":"dubbo","contextPath":"/dubbo","path":"/dubbo/batchSave","pathDesc":"","rpcType":"dubbo","serviceName":"org.dromara.shenyu.examples.dubbo.api.service.DubboMultiParamService","methodName":"batchSave","ruleName":"/dubbo/batchSave","parameterTypes":"java.util.List","rpcExt":"{\\"group\\":\\"\\",\\"version\\":\\"\\",\\"loadbalance\\":\\"random\\",\\"retries\\":2,\\"timeout\\":10000,\\"url\\":\\"\\"}","enabled":true} \n2021-02-06 20:58:01.876  INFO 3724 --- [pool-2-thread-1] o.d.s.client.common.utils.RegisterUtils  : dubbo client register success: {"appName":"dubbo","contextPath":"/dubbo","path":"/dubbo/findByArrayIdsAndName","pathDesc":"","rpcType":"dubbo","serviceName":"org.dromara.shenyu.examples.dubbo.api.service.DubboMultiParamService","methodName":"findByArrayIdsAndName","ruleName":"/dubbo/findByArrayIdsAndName","parameterTypes":"[Ljava.lang.Integer;,java.lang.String","rpcExt":"{\\"group\\":\\"\\",\\"version\\":\\"\\",\\"loadbalance\\":\\"random\\",\\"retries\\":2,\\"timeout\\":10000,\\"url\\":\\"\\"}","enabled":true} \n2021-02-06 20:58:01.889  INFO 3724 --- [pool-2-thread-1] o.d.s.client.common.utils.RegisterUtils  : dubbo client register success: {"appName":"dubbo","contextPath":"/dubbo","path":"/dubbo/saveComplexBeanTestAndName","pathDesc":"","rpcType":"dubbo","serviceName":"org.dromara.shenyu.examples.dubbo.api.service.DubboMultiParamService","methodName":"saveComplexBeanTestAndName","ruleName":"/dubbo/saveComplexBeanTestAndName","parameterTypes":"org.dromara.shenyu.examples.dubbo.api.entity.ComplexBeanTest,java.lang.String","rpcExt":"{\\"group\\":\\"\\",\\"version\\":\\"\\",\\"loadbalance\\":\\"random\\",\\"retries\\":2,\\"timeout\\":10000,\\"url\\":\\"\\"}","enabled":true} \n2021-02-06 20:58:01.901  INFO 3724 --- [pool-2-thread-1] o.d.s.client.common.utils.RegisterUtils  : dubbo client register success: {"appName":"dubbo","contextPath":"/dubbo","path":"/dubbo/batchSaveAndNameAndId","pathDesc":"","rpcType":"dubbo","serviceName":"org.dromara.shenyu.examples.dubbo.api.service.DubboMultiParamService","methodName":"batchSaveAndNameAndId","ruleName":"/dubbo/batchSaveAndNameAndId","parameterTypes":"java.util.List,java.lang.String,java.lang.String","rpcExt":"{\\"group\\":\\"\\",\\"version\\":\\"\\",\\"loadbalance\\":\\"random\\",\\"retries\\":2,\\"timeout\\":10000,\\"url\\":\\"\\"}","enabled":true} \n2021-02-06 20:58:01.911  INFO 3724 --- [pool-2-thread-1] o.d.s.client.common.utils.RegisterUtils  : dubbo client register success: {"appName":"dubbo","contextPath":"/dubbo","path":"/dubbo/saveComplexBeanTest","pathDesc":"","rpcType":"dubbo","serviceName":"org.dromara.shenyu.examples.dubbo.api.service.DubboMultiParamService","methodName":"saveComplexBeanTest","ruleName":"/dubbo/saveComplexBeanTest","parameterTypes":"org.dromara.shenyu.examples.dubbo.api.entity.ComplexBeanTest","rpcExt":"{\\"group\\":\\"\\",\\"version\\":\\"\\",\\"loadbalance\\":\\"random\\",\\"retries\\":2,\\"timeout\\":10000,\\"url\\":\\"\\"}","enabled":true} \n2021-02-06 20:58:01.922  INFO 3724 --- [pool-2-thread-1] o.d.s.client.common.utils.RegisterUtils  : dubbo client register success: {"appName":"dubbo","contextPath":"/dubbo","path":"/dubbo/findByStringArray","pathDesc":"","rpcType":"dubbo","serviceName":"org.dromara.shenyu.examples.dubbo.api.service.DubboMultiParamService","methodName":"findByStringArray","ruleName":"/dubbo/findByStringArray","parameterTypes":"[Ljava.lang.String;","rpcExt":"{\\"group\\":\\"\\",\\"version\\":\\"\\",\\"loadbalance\\":\\"random\\",\\"retries\\":2,\\"timeout\\":10000,\\"url\\":\\"\\"}","enabled":true} \n')),(0,t.yg)("p",null,"\u6ce8\u610f\uff1a\u5f53\u60a8\u9700\u8981\u540c\u65f6\u66b4\u9732",(0,t.yg)("inlineCode",{parentName:"p"},"\u591a\u4e2a\u534f\u8bae"),"\u65f6\uff0c\u8bf7\u4e0d\u8981\u914d\u7f6e",(0,t.yg)("inlineCode",{parentName:"p"},"shenyu.client.dubbo.props.port"),"\u3002"),(0,t.yg)("h2",{id:"\u6d4b\u8bd5"},"\u6d4b\u8bd5"),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"shenyu-examples-dubbo"),"\u9879\u76ee\u6210\u529f\u542f\u52a8\u4e4b\u540e\u4f1a\u81ea\u52a8\u628a\u52a0 ",(0,t.yg)("inlineCode",{parentName:"p"},"@ShenyuDubboClient")," \u6ce8\u89e3\u7684\u63a5\u53e3\u65b9\u6cd5\u6ce8\u518c\u5230\u7f51\u5173\u3002"),(0,t.yg)("p",null,"\u6253\u5f00",(0,t.yg)("inlineCode",{parentName:"p"},"\u63d2\u4ef6\u5217\u8868 -> rpc proxy -> dubbo"),"\u53ef\u4ee5\u770b\u5230\u63d2\u4ef6\u89c4\u5219\u914d\u7f6e\u5217\u8868\uff1a"),(0,t.yg)("p",null,(0,t.yg)("img",{src:r(22860).c})),(0,t.yg)("p",null,"\u4e0b\u9762\u4f7f\u7528",(0,t.yg)("inlineCode",{parentName:"p"},"postman"),"\u6a21\u62df",(0,t.yg)("inlineCode",{parentName:"p"},"http"),"\u7684\u65b9\u5f0f\u6765\u8bf7\u6c42\u4f60\u7684",(0,t.yg)("inlineCode",{parentName:"p"},"dubbo"),"\u670d\u52a1\uff1a"),(0,t.yg)("p",null,(0,t.yg)("img",{src:r(45704).c})),(0,t.yg)("p",null,"\u590d\u6742\u591a\u53c2\u6570\u793a\u4f8b\uff1a\u5bf9\u5e94\u63a5\u53e3\u5b9e\u73b0\u7c7b\u4e3a",(0,t.yg)("inlineCode",{parentName:"p"},"org.apache.shenyu.examples.alibaba.dubbo.service.impl.DubboMultiParamServiceImpl#batchSaveAndNameAndId")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-java"},'@Override\n@ShenyuDubboClient(path = "/batchSaveAndNameAndId")\npublic DubboTest batchSaveAndNameAndId(List<DubboTest> dubboTestList, String id, String name) {\n    DubboTest test = new DubboTest();\n    test.setId(id);\n    test.setName("hello world shenyu alibaba dubbo param batchSaveAndNameAndId :" + name + ":" + dubboTestList.stream().map(DubboTest::getName).collect(Collectors.joining("-")));\n    return test;\n}\n')),(0,t.yg)("p",null,(0,t.yg)("img",{src:r(24092).c})),(0,t.yg)("p",null,"\u5f53\u4f60\u7684\u53c2\u6570\u4e0d\u5339\u914d\u65f6\u4f1a\u62a5\u5982\u4e0b\u5f02\u5e38\uff1a"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-java"},"2021-02-07 22:24:04.015 ERROR 14860 --- [:20888-thread-3] o.d.shenyu.web.handler.GlobalErrorHandler  : [e47b2a2a] Resolved [ShenyuException: org.apache.dubbo.remoting.RemotingException: java.lang.IllegalArgumentException: args.length != types.length\n        java.lang.IllegalArgumentException: args.length != types.length\n        at org.apache.dubbo.common.utils.PojoUtils.realize(PojoUtils.java:91)\n        at org.apache.dubbo.rpc.filter.GenericFilter.invoke(GenericFilter.java:82)\n        at org.apache.dubbo.rpc.protocol.ProtocolFilterWrapper$1.invoke(ProtocolFilterWrapper.java:81)\n        at org.apache.dubbo.rpc.filter.ClassLoaderFilter.invoke(ClassLoaderFilter.java:38)\n        at org.apache.dubbo.rpc.protocol.ProtocolFilterWrapper$1.invoke(ProtocolFilterWrapper.java:81)\n        at org.apache.dubbo.rpc.filter.EchoFilter.invoke(EchoFilter.java:41)\n        at org.apache.dubbo.rpc.protocol.ProtocolFilterWrapper$1.invoke(ProtocolFilterWrapper.java:81)\n        at org.apache.dubbo.rpc.protocol.dubbo.DubboProtocol$1.reply(DubboProtocol.java:150)\n        at org.apache.dubbo.remoting.exchange.support.header.HeaderExchangeHandler.handleRequest(HeaderExchangeHandler.java:100)\n        at org.apache.dubbo.remoting.exchange.support.header.HeaderExchangeHandler.received(HeaderExchangeHandler.java:175)\n        at org.apache.dubbo.remoting.transport.DecodeHandler.received(DecodeHandler.java:51)\n        at org.apache.dubbo.remoting.transport.dispatcher.ChannelEventRunnable.run(ChannelEventRunnable.java:57)\n        at java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1149)\n        at java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:624)\n        at java.lang.Thread.run(Thread.java:748)\n        ] for HTTP POST /dubbo/batchSaveAndNameAndId\n")))}s.isMDXComponent=!0},16276:(e,a,r)=>{r.d(a,{c:()=>n});const n=r.p+"assets/images/dubbo-enable-zh-a89aee91f8ccc2c71faa781c8641375f.jpg"},45704:(e,a,r)=>{r.d(a,{c:()=>n});const n=r.p+"assets/images/postman-findbyid-2db0a41b2665dfc615923b07b0d27221.jpg"},24092:(e,a,r)=>{r.d(a,{c:()=>n});const n=r.p+"assets/images/postman-multiparams-b5bf03d0e31f67a605b7f2b19775ba34.jpg"},22860:(e,a,r)=>{r.d(a,{c:()=>n});const n=r.p+"assets/images/rule-list-826032a15f07a3e467617873e9ab894c.jpg"}}]);