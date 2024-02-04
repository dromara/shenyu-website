"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[11072],{95788:(e,n,t)=>{t.d(n,{Iu:()=>d,yg:()=>m});var a=t(11504);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),c=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=c(e.components);return a.createElement(p.Provider,{value:n},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(t),g=r,m=u["".concat(p,".").concat(g)]||u[g]||s[g]||i;return t?a.createElement(m,o(o({ref:n},d),{},{components:t})):a.createElement(m,o({ref:n},d))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=g;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},42692:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=t(45072),r=(t(11504),t(95788));const i={title:"Custom Predicate Judge",keywords:["PredicateJudge"],description:"Custom Predicate Judge"},o=void 0,l={unversionedId:"developer/spi/custom-predicate-judge",id:"version-2.5.0/developer/spi/custom-predicate-judge",isDocsHomePage:!1,title:"Custom Predicate Judge",description:"Custom Predicate Judge",source:"@site/versioned_docs/version-2.5.0/developer/spi/custom-predicate-judge.md",sourceDirName:"developer/spi",slug:"/developer/spi/custom-predicate-judge",permalink:"/docs/2.5.0/developer/spi/custom-predicate-judge",editUrl:"https://github.com/apache/shenyu-website/edit/main/versioned_docs/version-2.5.0/developer/spi/custom-predicate-judge.md",version:"2.5.0",frontMatter:{title:"Custom Predicate Judge",keywords:["PredicateJudge"],description:"Custom Predicate Judge"},sidebar:"version-2.5.0/tutorialSidebar",previous:{title:"Custom Parameter Data",permalink:"/docs/2.5.0/developer/spi/custom-parameter-data"},next:{title:"Custom Rate Limiter",permalink:"/docs/2.5.0/developer/spi/custom-rate-limiter"}},p=[{value:"Introduction",id:"introduction",children:[]},{value:"Extension",id:"extension",children:[]},{value:"Example",id:"example",children:[]}],c={toc:p},d="wrapper";function u(e){let{components:n,...t}=e;return(0,r.yg)(d,(0,a.c)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"introduction"},"Introduction"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"This paper describes how to customize the extension of  ",(0,r.yg)("inlineCode",{parentName:"li"},"org.apache.shenyu.plugin.base.condition.judge.PredicateJudge"),"."),(0,r.yg)("li",{parentName:"ul"},"The conditional predicate is the bridge between data and rules in the selector and serves to filter out requests that match the conditions."),(0,r.yg)("li",{parentName:"ul"},"There are already seven conditional predicates including match, =, regex, contains, TimeBefore, TimeAfter, exclude."),(0,r.yg)("li",{parentName:"ul"},"Please refer to ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/shenyu/tree/v2.5.0/shenyu-plugin/shenyu-plugin-base/src/main/java/org/apache/shenyu/plugin/base/condition/judge"},"judge")," module, add your own conditional predicates, or submit ",(0,r.yg)("inlineCode",{parentName:"li"},"pr")," to the official website if you have a good common plugin.")),(0,r.yg)("h2",{id:"extension"},"Extension"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Create a new project and introduce the following dependencies:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-xml"},"<dependencies>\n    <dependency>\n        <groupId>org.apache.shenyu</groupId>\n        <artifactId>shenyu-plugin-base</artifactId>\n        <version>${project.version}</version>\n    </dependency>\n</dependencies>\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Create a new class ",(0,r.yg)("inlineCode",{parentName:"li"},"CustomPredicateJudge"),", implements ",(0,r.yg)("inlineCode",{parentName:"li"},"org.apache.shenyu.plugin.base.condition.judge.PredicateJudge"),", add annotation ",(0,r.yg)("inlineCode",{parentName:"li"},"org.apache.shenyu.spi.Join"),".")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},"/**\n * custom predicate judge.\n */\n@Join\npublic class CustomPredicateJudge implements PredicateJudge {\n\n    @Override\n    public Boolean judge(final ConditionData conditionData, final String realData) {\n        // Custom Predicate Judge\n    }\n}\n\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"In the project's META-INF/services directory, create ",(0,r.yg)("inlineCode",{parentName:"li"},"org.apache.shenyu.plugin.base.condition.judge.PredicateJudge")," file, add key-value as following:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell",metastring:'title="script"',title:'"script"'},"${spi name} = ${custom class path}\n")),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"${spi name}")," represents the name of ",(0,r.yg)("inlineCode",{parentName:"p"},"spi")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"${custom class path}")," represents the fully qualified name of the class. Such as:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell",metastring:'title="script"',title:'"script"'},"custom=xxx.xxx.xxx.CustomPredicateJudge\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Package the project and copy it to the ",(0,r.yg)("inlineCode",{parentName:"p"},"lib")," or ",(0,r.yg)("inlineCode",{parentName:"p"},"ext-lib")," directory of the gateway (bootstrap-bin).")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"In the ",(0,r.yg)("inlineCode",{parentName:"p"},"Apache ShenYu")," gateway management system --\x3e BasicConfig --\x3e Dictionary, find the dictionary code as ",(0,r.yg)("inlineCode",{parentName:"p"},"OPERATOR"),", add a new piece of data, pay attention to the dictionary name: ",(0,r.yg)("inlineCode",{parentName:"p"},"${spi name}"),"."))),(0,r.yg)("img",{src:"/img/shenyu/custom/custom_predicate_judge_en.png",width:"70%",height:"60%"}),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"DictionaryType: ",(0,r.yg)("inlineCode",{parentName:"p"},"operator"),";"),(0,r.yg)("p",{parentName:"blockquote"},"DictionaryCode: ",(0,r.yg)("inlineCode",{parentName:"p"},"OPERATOR"),";"),(0,r.yg)("p",{parentName:"blockquote"},"DictionaryName: ",(0,r.yg)("inlineCode",{parentName:"p"},"${spi name}"),", input your custom spi name;"),(0,r.yg)("p",{parentName:"blockquote"},"DictionaryValue: When used, the value of the drop-down box, do not repeat with the existing;"),(0,r.yg)("p",{parentName:"blockquote"},"DictionaryDescribe: desc your custom match strategy;"),(0,r.yg)("p",{parentName:"blockquote"},"Sort: to sort;"),(0,r.yg)("p",{parentName:"blockquote"},"Status: open or close.")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"When adding selectors or rules, you can use custom predicate judge:")),(0,r.yg)("img",{src:"/img/shenyu/custom/use_custom_predicate_judge_en.png",width:"80%",height:"70%"}),(0,r.yg)("h2",{id:"example"},"Example"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Add ",(0,r.yg)("inlineCode",{parentName:"li"},"GroovyPredicateJudge")," and ",(0,r.yg)("inlineCode",{parentName:"li"},"SpELPredicateJudge")," extension.")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},"/**\n * Groovy predicate judge.\n */\n@Join\npublic class GroovyPredicateJudge implements PredicateJudge {\n    \n    @Override\n    public Boolean judge(final ConditionData conditionData, final String realData) {\n        return (Boolean) Eval.me(conditionData.getParamName(), realData, conditionData.getParamValue());\n    }\n}\n")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},"/**\n * SpEL predicate judge.\n */\n@Join\npublic class SpELPredicateJudge implements PredicateJudge {\n    \n    private static final ExpressionParser EXPRESSION_PARSER = new SpelExpressionParser();\n    \n    @Override\n    public Boolean judge(final ConditionData conditionData, final String realData) {\n        Expression expression = EXPRESSION_PARSER.parseExpression(conditionData.getParamValue().replace('#' + conditionData.getParamName(), realData));\n        return expression.getValue(Boolean.class);\n    }\n}\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Update ",(0,r.yg)("inlineCode",{parentName:"li"},"org.apache.shenyu.plugin.base.condition.judge.PredicateJudge"),":")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell",metastring:'title="script"',title:'"script"'},"Groovy=xxx.xxx.xxx.GroovyPredicateJudge\nSpEL=xxx.xxx.xxx.SpELPredicateJudge\n")))}u.isMDXComponent=!0}}]);