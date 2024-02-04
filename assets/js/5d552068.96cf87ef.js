"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[8608],{95788:(e,a,t)=>{t.d(a,{Iu:()=>d,yg:()=>m});var r=t(11504);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function n(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?n(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,r,o=function(e,a){if(null==e)return{};var t,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),u=function(e){var a=r.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},d=function(e){var a=u(e.components);return r.createElement(l.Provider,{value:a},e.children)},c="mdxType",b={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},p=r.forwardRef((function(e,a){var t=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=u(t),p=o,m=c["".concat(l,".").concat(p)]||c[p]||b[p]||n;return t?r.createElement(m,i(i({ref:a},d),{},{components:t})):r.createElement(m,i({ref:a},d))}));function m(e,a){var t=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var n=t.length,i=new Array(n);i[0]=p;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s[c]="string"==typeof e?e:o,i[1]=s;for(var u=2;u<n;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},68924:(e,a,t)=>{t.r(a),t.d(a,{contentTitle:()=>i,default:()=>c,frontMatter:()=>n,metadata:()=>s,toc:()=>l});var r=t(45072),o=(t(11504),t(95788));const n={title:"Quick start with Dubbo",description:"Quick start with Dubbo"},i=void 0,s={unversionedId:"quick-start/quick-start-dubbo",id:"version-2.3.0-Legacy/quick-start/quick-start-dubbo",isDocsHomePage:!1,title:"Quick start with Dubbo",description:"Quick start with Dubbo",source:"@site/versioned_docs/version-2.3.0-Legacy/quick-start/quick-start-dubbo.md",sourceDirName:"quick-start",slug:"/quick-start/quick-start-dubbo",permalink:"/docs/2.3.0-Legacy/quick-start/quick-start-dubbo",editUrl:"https://github.com/apache/shenyu-website/edit/main/versioned_docs/version-2.3.0-Legacy/quick-start/quick-start-dubbo.md",version:"2.3.0-Legacy",frontMatter:{title:"Quick start with Dubbo",description:"Quick start with Dubbo"},sidebar:"version-2.3.0-Legacy/tutorialSidebar",previous:{title:"Register Center Design",permalink:"/docs/2.3.0-Legacy/register-center/register-center-design"},next:{title:"Quick start with grpc",permalink:"/docs/2.3.0-Legacy/quick-start/quick-start-grpc"}},l=[{value:"Environment to prepare",id:"environment-to-prepare",children:[]},{value:"Run the soul-examples-dubbo project",id:"run-the-soul-examples-dubbo-project",children:[]},{value:"Dubbo plugin settings",id:"dubbo-plugin-settings",children:[]},{value:"Testing",id:"testing",children:[]}],u={toc:l},d="wrapper";function c(e){let{components:a,...n}=e;return(0,o.yg)(d,(0,r.c)({},u,n,{components:a,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"This document introduces how to quickly access the Soul Gateway using Dubbo. You can get the code example of this document by clicking ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/dromara/soul/tree/2.3.0/soul-examples/soul-examples-dubbo"},"here"),"."),(0,o.yg)("h2",{id:"environment-to-prepare"},"Environment to prepare"),(0,o.yg)("p",null,"Please refer to the ",(0,o.yg)("a",{parentName:"p",href:"../users-guide/soul-set-up"},"setup")," and launch ",(0,o.yg)("inlineCode",{parentName:"p"},"soul-admin")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"soul-bootstrap"),", In addition, if you use ZooKeeper for Dubbo, you need to download it in advance."),(0,o.yg)("h2",{id:"run-the-soul-examples-dubbo-project"},"Run the soul-examples-dubbo project"),(0,o.yg)("p",null,"Download",(0,o.yg)("a",{parentName:"p",href:"https://github.com/dromara/soul/tree/2.3.0/soul-examples/soul-examples-dubbo"},"soul-examples-dubbo"),", replace the register address in ",(0,o.yg)("inlineCode",{parentName:"p"},"spring-dubbo.xml")," with your local zk address, such as:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-xml"},'<dubbo:registry address="zookeeper://localhost:2181"/>\n')),(0,o.yg)("p",null,"Execute the ",(0,o.yg)("inlineCode",{parentName:"p"},"TestApacheDubboApplication")," main method to start dubbo project."),(0,o.yg)("p",null,"The following log appears when the startup is successful:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},'2021-02-06 20:58:01.807  INFO 3724 --- [pool-2-thread-1] o.d.s.client.common.utils.RegisterUtils  : dubbo client register success: {"appName":"dubbo","contextPath":"/dubbo","path":"/dubbo/insert","pathDesc":"Insert a row of data","rpcType":"dubbo","serviceName":"org.dromara.soul.examples.dubbo.api.service.DubboTestService","methodName":"insert","ruleName":"/dubbo/insert","parameterTypes":"org.dromara.soul.examples.dubbo.api.entity.DubboTest","rpcExt":"{\\"group\\":\\"\\",\\"version\\":\\"\\",\\"loadbalance\\":\\"random\\",\\"retries\\":2,\\"timeout\\":10000,\\"url\\":\\"\\"}","enabled":true} \n2021-02-06 20:58:01.821  INFO 3724 --- [pool-2-thread-1] o.d.s.client.common.utils.RegisterUtils  : dubbo client register success: {"appName":"dubbo","contextPath":"/dubbo","path":"/dubbo/findAll","pathDesc":"Get all data","rpcType":"dubbo","serviceName":"org.dromara.soul.examples.dubbo.api.service.DubboTestService","methodName":"findAll","ruleName":"/dubbo/findAll","parameterTypes":"","rpcExt":"{\\"group\\":\\"\\",\\"version\\":\\"\\",\\"loadbalance\\":\\"random\\",\\"retries\\":2,\\"timeout\\":10000,\\"url\\":\\"\\"}","enabled":true} \n2021-02-06 20:58:01.833  INFO 3724 --- [pool-2-thread-1] o.d.s.client.common.utils.RegisterUtils  : dubbo client register success: {"appName":"dubbo","contextPath":"/dubbo","path":"/dubbo/findById","pathDesc":"Query by Id","rpcType":"dubbo","serviceName":"org.dromara.soul.examples.dubbo.api.service.DubboTestService","methodName":"findById","ruleName":"/dubbo/findById","parameterTypes":"java.lang.String","rpcExt":"{\\"group\\":\\"\\",\\"version\\":\\"\\",\\"loadbalance\\":\\"random\\",\\"retries\\":2,\\"timeout\\":10000,\\"url\\":\\"\\"}","enabled":true} \n2021-02-06 20:58:01.844  INFO 3724 --- [pool-2-thread-1] o.d.s.client.common.utils.RegisterUtils  : dubbo client register success: {"appName":"dubbo","contextPath":"/dubbo","path":"/dubbo/findByListId","pathDesc":"","rpcType":"dubbo","serviceName":"org.dromara.soul.examples.dubbo.api.service.DubboMultiParamService","methodName":"findByListId","ruleName":"/dubbo/findByListId","parameterTypes":"java.util.List","rpcExt":"{\\"group\\":\\"\\",\\"version\\":\\"\\",\\"loadbalance\\":\\"random\\",\\"retries\\":2,\\"timeout\\":10000,\\"url\\":\\"\\"}","enabled":true} \n2021-02-06 20:58:01.855  INFO 3724 --- [pool-2-thread-1] o.d.s.client.common.utils.RegisterUtils  : dubbo client register success: {"appName":"dubbo","contextPath":"/dubbo","path":"/dubbo/findByIdsAndName","pathDesc":"","rpcType":"dubbo","serviceName":"org.dromara.soul.examples.dubbo.api.service.DubboMultiParamService","methodName":"findByIdsAndName","ruleName":"/dubbo/findByIdsAndName","parameterTypes":"java.util.List,java.lang.String","rpcExt":"{\\"group\\":\\"\\",\\"version\\":\\"\\",\\"loadbalance\\":\\"random\\",\\"retries\\":2,\\"timeout\\":10000,\\"url\\":\\"\\"}","enabled":true} \n2021-02-06 20:58:01.866  INFO 3724 --- [pool-2-thread-1] o.d.s.client.common.utils.RegisterUtils  : dubbo client register success: {"appName":"dubbo","contextPath":"/dubbo","path":"/dubbo/batchSave","pathDesc":"","rpcType":"dubbo","serviceName":"org.dromara.soul.examples.dubbo.api.service.DubboMultiParamService","methodName":"batchSave","ruleName":"/dubbo/batchSave","parameterTypes":"java.util.List","rpcExt":"{\\"group\\":\\"\\",\\"version\\":\\"\\",\\"loadbalance\\":\\"random\\",\\"retries\\":2,\\"timeout\\":10000,\\"url\\":\\"\\"}","enabled":true} \n2021-02-06 20:58:01.876  INFO 3724 --- [pool-2-thread-1] o.d.s.client.common.utils.RegisterUtils  : dubbo client register success: {"appName":"dubbo","contextPath":"/dubbo","path":"/dubbo/findByArrayIdsAndName","pathDesc":"","rpcType":"dubbo","serviceName":"org.dromara.soul.examples.dubbo.api.service.DubboMultiParamService","methodName":"findByArrayIdsAndName","ruleName":"/dubbo/findByArrayIdsAndName","parameterTypes":"[Ljava.lang.Integer;,java.lang.String","rpcExt":"{\\"group\\":\\"\\",\\"version\\":\\"\\",\\"loadbalance\\":\\"random\\",\\"retries\\":2,\\"timeout\\":10000,\\"url\\":\\"\\"}","enabled":true} \n2021-02-06 20:58:01.889  INFO 3724 --- [pool-2-thread-1] o.d.s.client.common.utils.RegisterUtils  : dubbo client register success: {"appName":"dubbo","contextPath":"/dubbo","path":"/dubbo/saveComplexBeanTestAndName","pathDesc":"","rpcType":"dubbo","serviceName":"org.dromara.soul.examples.dubbo.api.service.DubboMultiParamService","methodName":"saveComplexBeanTestAndName","ruleName":"/dubbo/saveComplexBeanTestAndName","parameterTypes":"org.dromara.soul.examples.dubbo.api.entity.ComplexBeanTest,java.lang.String","rpcExt":"{\\"group\\":\\"\\",\\"version\\":\\"\\",\\"loadbalance\\":\\"random\\",\\"retries\\":2,\\"timeout\\":10000,\\"url\\":\\"\\"}","enabled":true} \n2021-02-06 20:58:01.901  INFO 3724 --- [pool-2-thread-1] o.d.s.client.common.utils.RegisterUtils  : dubbo client register success: {"appName":"dubbo","contextPath":"/dubbo","path":"/dubbo/batchSaveAndNameAndId","pathDesc":"","rpcType":"dubbo","serviceName":"org.dromara.soul.examples.dubbo.api.service.DubboMultiParamService","methodName":"batchSaveAndNameAndId","ruleName":"/dubbo/batchSaveAndNameAndId","parameterTypes":"java.util.List,java.lang.String,java.lang.String","rpcExt":"{\\"group\\":\\"\\",\\"version\\":\\"\\",\\"loadbalance\\":\\"random\\",\\"retries\\":2,\\"timeout\\":10000,\\"url\\":\\"\\"}","enabled":true} \n2021-02-06 20:58:01.911  INFO 3724 --- [pool-2-thread-1] o.d.s.client.common.utils.RegisterUtils  : dubbo client register success: {"appName":"dubbo","contextPath":"/dubbo","path":"/dubbo/saveComplexBeanTest","pathDesc":"","rpcType":"dubbo","serviceName":"org.dromara.soul.examples.dubbo.api.service.DubboMultiParamService","methodName":"saveComplexBeanTest","ruleName":"/dubbo/saveComplexBeanTest","parameterTypes":"org.dromara.soul.examples.dubbo.api.entity.ComplexBeanTest","rpcExt":"{\\"group\\":\\"\\",\\"version\\":\\"\\",\\"loadbalance\\":\\"random\\",\\"retries\\":2,\\"timeout\\":10000,\\"url\\":\\"\\"}","enabled":true} \n2021-02-06 20:58:01.922  INFO 3724 --- [pool-2-thread-1] o.d.s.client.common.utils.RegisterUtils  : dubbo client register success: {"appName":"dubbo","contextPath":"/dubbo","path":"/dubbo/findByStringArray","pathDesc":"","rpcType":"dubbo","serviceName":"org.dromara.soul.examples.dubbo.api.service.DubboMultiParamService","methodName":"findByStringArray","ruleName":"/dubbo/findByStringArray","parameterTypes":"[Ljava.lang.String;","rpcExt":"{\\"group\\":\\"\\",\\"version\\":\\"\\",\\"loadbalance\\":\\"random\\",\\"retries\\":2,\\"timeout\\":10000,\\"url\\":\\"\\"}","enabled":true} \n')),(0,o.yg)("h2",{id:"dubbo-plugin-settings"},"Dubbo plugin settings"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"first enabled the ",(0,o.yg)("inlineCode",{parentName:"li"},"dubbo")," plugin in the ",(0,o.yg)("inlineCode",{parentName:"li"},"soul-admin")," plugin management."),(0,o.yg)("li",{parentName:"ul"},"then configure your registry address in ",(0,o.yg)("inlineCode",{parentName:"li"},"dubbo"),".")),(0,o.yg)("h2",{id:"testing"},"Testing"),(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"soul-examples-dubbo")," project will automatically register interface methods annotated with ",(0,o.yg)("inlineCode",{parentName:"p"},"@SoulDubboClient")," in the soul gateway after successful startup."),(0,o.yg)("p",null,"Open Plugin Management -> dubbo to see the list of plugin rule configurations"),(0,o.yg)("p",null,(0,o.yg)("img",{src:t(6388).c})),(0,o.yg)("p",null,"Use PostMan to simulate HTTP to request your Dubbo service"),(0,o.yg)("p",null,(0,o.yg)("img",{src:t(37340).c})),(0,o.yg)("p",null,"Complex multi-parameter example: The related interface implementation class is ",(0,o.yg)("inlineCode",{parentName:"p"},"org.dromara.soul.examples.apache.dubbo.service.impl.DubboMultiParamServiceImpl#batchSaveAndNameAndId"),"."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-java"},'@Override\n@SoulDubboClient(path = "/batchSaveAndNameAndId")\npublic DubboTest batchSaveAndNameAndId(List<DubboTest> dubboTestList, String id, String name) {\n    DubboTest test = new DubboTest();\n    test.setId(id);\n    test.setName("hello world soul apache dubbo param batchSaveAndNameAndId :" + name + ":" + dubboTestList.stream().map(DubboTest::getName).collect(Collectors.joining("-")));\n    return test;\n}\n')),(0,o.yg)("p",null,(0,o.yg)("img",{src:t(48812).c})),(0,o.yg)("p",null,"When your arguments do not match, the following exception will occur:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-java"},"2021-02-07 22:24:04.015 ERROR 14860 --- [:20888-thread-3] o.d.soul.web.handler.GlobalErrorHandler  : [e47b2a2a] Resolved [SoulException: org.apache.dubbo.remoting.RemotingException: java.lang.IllegalArgumentException: args.length != types.length\njava.lang.IllegalArgumentException: args.length != types.length\n    at org.apache.dubbo.common.utils.PojoUtils.realize(PojoUtils.java:91)\n    at org.apache.dubbo.rpc.filter.GenericFilter.invoke(GenericFilter.java:82)\n    at org.apache.dubbo.rpc.protocol.ProtocolFilterWrapper$1.invoke(ProtocolFilterWrapper.java:81)\n    at org.apache.dubbo.rpc.filter.ClassLoaderFilter.invoke(ClassLoaderFilter.java:38)\n    at org.apache.dubbo.rpc.protocol.ProtocolFilterWrapper$1.invoke(ProtocolFilterWrapper.java:81)\n    at org.apache.dubbo.rpc.filter.EchoFilter.invoke(EchoFilter.java:41)\n    at org.apache.dubbo.rpc.protocol.ProtocolFilterWrapper$1.invoke(ProtocolFilterWrapper.java:81)\n    at org.apache.dubbo.rpc.protocol.dubbo.DubboProtocol$1.reply(DubboProtocol.java:150)\n    at org.apache.dubbo.remoting.exchange.support.header.HeaderExchangeHandler.handleRequest(HeaderExchangeHandler.java:100)\n    at org.apache.dubbo.remoting.exchange.support.header.HeaderExchangeHandler.received(HeaderExchangeHandler.java:175)\n    at org.apache.dubbo.remoting.transport.DecodeHandler.received(DecodeHandler.java:51)\n    at org.apache.dubbo.remoting.transport.dispatcher.ChannelEventRunnable.run(ChannelEventRunnable.java:57)\n    at java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1149)\n    at java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:624)\n    at java.lang.Thread.run(Thread.java:748)\n] for HTTP POST /dubbo/batchSaveAndNameAndId\n")))}c.isMDXComponent=!0},37340:(e,a,t)=>{t.d(a,{c:()=>r});const r=t.p+"assets/images/postman-findbyid-2db0a41b2665dfc615923b07b0d27221.jpg"},48812:(e,a,t)=>{t.d(a,{c:()=>r});const r=t.p+"assets/images/postman-multiparams-b5bf03d0e31f67a605b7f2b19775ba34.jpg"},6388:(e,a,t)=>{t.d(a,{c:()=>r});const r=t.p+"assets/images/rule-list-826032a15f07a3e467617873e9ab894c.jpg"}}]);