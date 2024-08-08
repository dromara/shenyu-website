"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[31378],{15680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>m});var a=n(96540);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,i=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=c(n),p=s,m=u["".concat(l,".").concat(p)]||u[p]||h[p]||i;return n?a.createElement(m,r(r({ref:t},d),{},{components:n})):a.createElement(m,r({ref:t},d))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=n.length,r=new Array(i);r[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:s,r[1]=o;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},60598:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var a=n(58168),s=(n(96540),n(15680));const i={title:"E2e Test Analysis",author:"Haiqi Qin",author_title:"Apache ShenYu Committer",author_url:"https://github.com/HaiqiQin",author_image_url:"https://avatars.githubusercontent.com/u/80969210?v=4",tags:["E2e Test","Apache ShenYu"]},r=void 0,o={permalink:"/blog/E2eTest-Analysis",editUrl:"https://github.com/apache/shenyu-website/edit/main/blog/E2eTest-Analysis.md",source:"@site/blog/E2eTest-Analysis.md",title:"E2e Test Analysis",description:"This article will conduct an in-depth analysis of Apache ShenYu e2e module.",date:"2024-08-08T02:55:47.293Z",formattedDate:"August 8, 2024",tags:[{label:"E2e Test",permalink:"/blog/tags/e-2-e-test"},{label:"Apache ShenYu",permalink:"/blog/tags/apache-shen-yu"}],readingTime:7.27,truncated:!1,prevItem:{title:"Http Long Polling Data Synchronization Source Code Analysis",permalink:"/blog/DataSync-SourceCode-Analysis-Http-Data-Sync"},nextItem:{title:"ZooKeeper Data Synchronization Source Code Analysis",permalink:"/blog/DataSync-SourceCode-Analysis-ZooKeeper-Data-Sync"}},l=[{value:"what is e2e",id:"what-is-e2e",children:[]},{value:"Advantages of e2e",id:"advantages-of-e2e",children:[]},{value:"How to implement automated e2e testing",id:"how-to-implement-automated-e2e-testing",children:[]},{value:"How to run e2e test locally",id:"how-to-run-e2e-test-locally",children:[]},{value:"Analysis of e2e startup process",id:"analysis-of-e2e-startup-process",children:[]}],c={toc:l},d="wrapper";function u(e){let{components:t,...i}=e;return(0,s.yg)(d,(0,a.A)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,s.yg)("p",null,"This article will conduct an in-depth analysis of Apache ShenYu e2e module."),(0,s.yg)("h3",{id:"what-is-e2e"},"what is e2e"),(0,s.yg)("p",null,"e2e (end to end), also known as end-to-end testing, is a method used to test whether the application flow performs as designed from the beginning to the end. The purpose of performing end-to-end testing is to identify system dependencies and ensure that the correct information is passed between various system components and systems. The purpose of end-to-end testing is to test the entire software for dependencies, data integrity, and communication with other systems, interfaces, and databases to simulate a complete production scenario."),(0,s.yg)("h3",{id:"advantages-of-e2e"},"Advantages of e2e"),(0,s.yg)("p",null,"e2e testing can test the integrity and accuracy of software systems in simulated real user scenarios, and can verify whether the entire system works as expected and whether different components can work together. There are several benefits of e2e testing:"),(0,s.yg)("ol",null,(0,s.yg)("li",{parentName:"ol"},"Help ensure the correctness of system functions.e2e testing can simulate the interaction and operation in real user scenarios, verify whether the entire system can work as expected, and help discover potential problems and defects in the system."),(0,s.yg)("li",{parentName:"ol"},"Improve test coverage.e2e testing can cover the entire system, including front-end, back-end, database and other different levels and components, thereby improving test coverage and ensuring comprehensiveness and accuracy of testing."),(0,s.yg)("li",{parentName:"ol"},"Ensure the stability of the system.e2e testing can check the stability and robustness of the system in various situations, including system response time, error handling capabilities, concurrency, etc., to help ensure that the system is in the face of high load and abnormal conditions Still able to maintain stable operation."),(0,s.yg)("li",{parentName:"ol"},"Reduce testing cost.e2e testing can improve testing efficiency and accuracy, reduce testing cost and time, and thus help enterprises release and deliver high-quality software products more quickly.")),(0,s.yg)("p",null,"In short, e2e testing is a comprehensive testing method that can verify whether the entire system works as expected, improve test coverage and test efficiency, thereby ensuring the stability and correctness of the system, and reducing testing costs and time. And effective testing methods, so we need to improve e2e related codes."),(0,s.yg)("h3",{id:"how-to-implement-automated-e2e-testing"},"How to implement automated e2e testing"),(0,s.yg)("p",null,"In Apache ShenYu, the main steps of e2e testing are reflected in the script of the GitHub Action workflow, as shown below, the script is located at ",(0,s.yg)("a",{parentName:"p",href:"https://github.com/apache/incubator-shenyu/tree/master/.github/workflows"},"~/.github/workflows")," directory in the e2e file."),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-yaml"},'name: e2e\n\non:\n  pull_request:\n  push:\n    branches:\n      - master\njobs:\n  changes:\n    ...\n  build-docker-images:\n    ...\n  e2e-http:\n    ...\n  e2e-case:\n    runs-on: ubuntu-latest\n    needs:\n      - changes\n      - build-docker-images\n    if: ${{ needs.changes.outputs.e2e == \'true\' }}\n    strategy:\n      matrix:\n        case: [ "shenyu-e2e-case-spring-cloud", "shenyu-e2e-case-apache-dubbo", "shenyu-e2e-case-sofa" ]\n    steps:\n      - uses: actions/checkout@v3\n        with:\n          submodules: true\n      - name: Load ShenYu Docker Images\n        run: |\n          docker load --input /tmp/apache-shenyu-admin.tar\n          docker load --input /tmp/apache-shenyu-bootstrap.tar\n          docker image ls -a\n      - name: Build examples with Maven\n        run: ./mvnw -B clean install -Pexample -Dmaven.javadoc.skip=true -Dmaven.test.skip=true -f ./shenyu-examples/pom.xml\n      - name: Run ShenYu E2E Tests\n        env:\n          storage: mysql\n        run: |\n          bash ./shenyu-e2e/script/storage_init.sh\n          ./mvnw -B -f ./shenyu-e2e/pom.xml -pl shenyu-e2e-case/${{ matrix.case }} -Dstorage=mysql test\n')),(0,s.yg)("p",null,"When the workflow is triggered, use the dockerfile under the shenyu-dist module to build and upload the images of the admin and bootstrap projects. When the e2e test module is running, the admin and bootstrap images can be loaded. Then build the modules in the examples, and finally execute the test method of the corresponding test module."),(0,s.yg)("h3",{id:"how-to-run-e2e-test-locally"},"How to run e2e test locally"),(0,s.yg)("p",null,"If you need to write e2e test cases, you first need to code and debug locally. Currently e2e supports two startup methods, one is docker startup and the other is host startup. These two modes can be switched in the @ShenYuTest annotation in the test class. The host startup method directly starts the services that need to be started locally to run the test code. Before using docker to start, you need to build the corresponding image first. Because ShenYu currently needs to support e2e testing in the github workflow, it is recommended to use the docker startup method."),(0,s.yg)("h3",{id:"analysis-of-e2e-startup-process"},"Analysis of e2e startup process"),(0,s.yg)("p",null,"Currently, the e2e module is mainly divided into four parts: case, client, common and engine."),(0,s.yg)("p",null,(0,s.yg)("img",{alt:"e2e-modules",src:n(76208).A})),(0,s.yg)("p",null,"The case module stores the test cases of the plug-in, and the client module writes the clients of admin and gateway to request corresponding interfaces. Common stores some public classes, and the engine module is the core of the framework. Relying on the testcontainer framework, use java code to start the docker container and complete the configuration operations for admin and gatewat."),(0,s.yg)("p",null,"Next, I will analyze the e2e startup process based on the source code."),(0,s.yg)("p",null,"When we execute the test method in the case, the @ShenYuTest annotation will take effect and extend the test class. Through @ShenYuTest, we can choose the startup method, configure related parameters for admin and gateway, and choose the docker-compose file to be executed. For admin and gateway, you can configure the user name, password, data synchronization method and modify the content of yaml required for login."),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-java"},'@ShenYuTest(\n        mode = ShenYuEngineConfigure.Mode.DOCKER,\n        services = {\n                @ShenYuTest.ServiceConfigure(\n                        serviceName = "admin",\n                        port = 9095,\n                        baseUrl = "http://{hostname:localhost}:9095",\n                        parameters = {\n                                @ShenYuTest.Parameter(key = "username", value = "admin"),\n                                @ShenYuTest.Parameter(key = "password", value = "123456"),\n                                @ShenYuTest.Parameter(key = "dataSyn", value = "admin_websocket")\n                        }\n                ),\n                @ShenYuTest.ServiceConfigure(\n                        serviceName = "gateway",\n                        port = 9195,\n                        baseUrl = "http://{hostname:localhost}:9195", \n                        type = ShenYuEngineConfigure.ServiceType.SHENYU_GATEWAY,\n                        parameters = {\n                          @ShenYuTest.Parameter(key = "application", value =  "spring.cloud.discovery.enabled:true,eureka.client.enabled:true"), \n                          @ShenYuTest.Parameter(key = "dataSyn", value = "gateway_websocket")})},           \n        dockerComposeFile = "classpath:./docker-compose.mysql.yml")\n\n')),(0,s.yg)("p",null,"@ShenYuTest is extended through the ShenYuExtension class, and the configuration of admin and gateway takes effect in beforeAll in ShenYuExtension. The specific effective logic is implemented in the DockerServiceCompose class."),(0,s.yg)("p",null,(0,s.yg)("img",{alt:"e2e-shenyutest",src:n(23665).A})),(0,s.yg)("p",null,(0,s.yg)("img",{alt:"e2e-beforeall",src:n(9673).A})),(0,s.yg)("p",null,"@ShenYuTest configuration items take effect before docker starts, mainly by modifying the yaml file in the resource directory of the test module. Currently, e2e supports testing of different data synchronization methods. The principle is to use the chooseDataSyn method in the DockerServiceCompose class. In the DataSyncHandler, initialize the content that needs to be modified in various data synchronization methods, and finally start the container."),(0,s.yg)("p",null,(0,s.yg)("img",{alt:"e2e-docer-service-compose",src:n(85489).A})),(0,s.yg)("p",null,(0,s.yg)("img",{alt:"e2e-datahandle-syn",src:n(42712).A})),(0,s.yg)("p",null,"When docker is started, start testing the plug-in function. In the PluginsTest class, there are pre- and post-operations for testing."),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-java"},'    @BeforeAll\n    static void setup(final AdminClient adminClient, final GatewayClient gatewayClient) throws InterruptedException, JsonProcessingException {\n        adminClient.login();\n        Thread.sleep(10000);\n        List<SelectorDTO> selectorDTOList = adminClient.listAllSelectors();\n        List<MetaDataDTO> metaDataDTOList = adminClient.listAllMetaData();\n        List<RuleDTO> ruleDTOList = adminClient.listAllRules();\n        Assertions.assertEquals(2, selectorDTOList.size());\n        Assertions.assertEquals(13, metaDataDTOList.size());\n        Assertions.assertEquals(14, ruleDTOList.size());\n        \n        for (SelectorDTO selectorDTO : selectorDTOList) {\n            if (selectorDTO.getHandle() != null && !"".equals(selectorDTO.getHandle())) {\n                SpringCloudPluginCases.verifierUri(selectorDTO.getHandle());\n            }\n        }\n        List<MetaData> metaDataCacheList = gatewayClient.getMetaDataCache();\n        List<SelectorCacheData> selectorCacheList = gatewayClient.getSelectorCache();\n        List<RuleCacheData> ruleCacheList = gatewayClient.getRuleCache();\n        Assertions.assertEquals(2, selectorCacheList.size());\n        Assertions.assertEquals(13, metaDataCacheList.size());\n        Assertions.assertEquals(14, ruleCacheList.size());\n\n        MultiValueMap<String, String> formData = new LinkedMultiValueMap<>();\n        formData.add("id", "8");\n        formData.add("name", "springCloud");\n        formData.add("enabled", "true");\n        formData.add("role", "Proxy");\n        formData.add("sort", "200");\n        adminClient.changePluginStatus("8", formData);\n        String id = "";\n        for (SelectorDTO selectorDTO : selectorDTOList) {\n            if (!"".equals(selectorDTO.getHandle())) {\n                id = selectorDTO.getId();\n            }\n        }\n        adminClient.deleteSelectors(id);\n        selectorDTOList = adminClient.listAllSelectors();\n        Assertions.assertEquals(1, selectorDTOList.size());\n    }\n')),(0,s.yg)("p",null,"Taking the springcloud plug-in as an example, you first need to test whether the registration center and data synchronization can work normally, then start the plug-in and delete the existing selector. To test whether the data is successfully registered into the registration center, you can call the interface of the admin client to test, and to test whether the data synchronization is successful, you can obtain the cache of the gateway for testing."),(0,s.yg)("p",null,"Then run the test case in the case file and get the use case through @ShenYuScenario."),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-java"},"    @ShenYuScenario(provider = SpringCloudPluginCases.class)\n    void testSpringCloud(GatewayClient gateway, CaseSpec spec) {\n        spec.getVerifiers().forEach(verifier -> verifier.verify(gateway.getHttpRequesterSupplier().get()));\n    }\n")),(0,s.yg)("p",null,"For different plug-ins, we can build a Case class to store the rules to be tested. All test rules are stored in the list and tested in order. Build selectors and rules in beforeEachSpec, caseSpec stores test entities, if they meet the uri rules, they should exist, otherwise they don\u2019t exist. We need to simulate users to add selectors and rules, because the handler rules of the selectors of each plug-in are not necessarily the same, so we need to write its handle class according to the plug-in requirements. And verify that it complies with the rules with the request. Specific test cases are mainly divided into two categories, one is to match uri rules, such as euqal, path_pattern, start_with, end_with, and the other is request types, such as get, put, post, delete."),(0,s.yg)("p",null,"When all eight matching conditions are tested, it can be judged that the plug-in function is normal. After the test, we need to restore the environment, delete all selectors, set the plug-in to unavailable, and finally close all containers."),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-java"},'    @Override\n    public List<ScenarioSpec> get() {\n        return Lists.newArrayList(\n                testWithUriEquals(),\n                testWithUriPathPattern(),\n                testWithUriStartWith(),\n                testWithEndWith(),\n                testWithMethodGet(),\n                testWithMethodPost(),\n                testWithMethodPut(),\n                testWithMethodDelete()\n        );\n    }\n\n    private ShenYuScenarioSpec testWithUriEquals() {\n        return ShenYuScenarioSpec.builder()\n                .name("single-spring-cloud uri =]")\n                .beforeEachSpec(\n                        ShenYuBeforeEachSpec.builder()\n                                .addSelectorAndRule(\n                                        newSelectorBuilder("selector", Plugin.SPRING_CLOUD)                                               .handle(SpringCloudSelectorHandle.builder().serviceId("springCloud-test")\n                                                        .gray(true)\n                                                        .divideUpstreams(DIVIDE_UPSTREAMS).build())\n                                                .conditionList(newConditions(Condition.ParamType.URI, Condition.Operator.EQUAL, TEST))\n                                                .build(),\n                                        newRuleBuilder("rule")                               .handle(SpringCloudRuleHandle.builder().loadBalance("hash").timeout(3000).build())\n                                                .conditionList(newConditions(Condition.ParamType.URI, Condition.Operator.EQUAL, TEST))\n                                                .build()\n                                )\n                                .checker(notExists(TEST))\n                                .waiting(exists(TEST))\n                                .build()\n                )\n                .caseSpec(\n                        ShenYuCaseSpec.builder()\n                                .addExists(TEST)\n                                .addNotExists("/springcloud/te")\n                                .addNotExists("/put")\n                                .addNotExists("/get")\n                                .build()\n                )\n                .afterEachSpec(ShenYuAfterEachSpec.DEFAULT)\n                .build();\n    }\n')))}u.isMDXComponent=!0},9673:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/e2e-beforeall-51fdb9d49dbc3eae99f77268b0e1a5c9.png"},42712:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/e2e-datahandle-syn-92a7b3dc57bc8b46972128042b8281cb.png"},85489:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/e2e-docer-service-compose-ac329d9290f48407e5c8310031913fb2.png"},76208:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/e2e-modules-1ff1ff840f0fe5a53970e750624f61b6.png"},23665:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/e2e-shenyutest-8ea26c9ea373d2c182be8d19c53cb021.png"}}]);