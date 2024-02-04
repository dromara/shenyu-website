"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[80864],{95788:(e,n,t)=>{t.d(n,{Iu:()=>u,yg:()=>m});var a=t(11504);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),c=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(p.Provider,{value:n},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},y=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=c(t),y=r,m=s["".concat(p,".").concat(y)]||s[y]||d[y]||o;return t?a.createElement(m,l(l({ref:n},u),{},{components:t})):a.createElement(m,l({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=y;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[s]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=t[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}y.displayName="MDXCreateElement"},62340:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>l,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=t(45072),r=(t(11504),t(95788));const o={sidebar_position:1,title:"Local Quick Deployment",keywords:["Deployment"],description:"Local Quick Deployment"},l=void 0,i={unversionedId:"deployment/deployment-quick",id:"version-2.5.1/deployment/deployment-quick",isDocsHomePage:!1,title:"Local Quick Deployment",description:"Local Quick Deployment",source:"@site/versioned_docs/version-2.5.1/deployment/deployment-quick.md",sourceDirName:"deployment",slug:"/deployment/deployment-quick",permalink:"/docs/2.5.1/deployment/deployment-quick",editUrl:"https://github.com/apache/shenyu-website/edit/main/versioned_docs/version-2.5.1/deployment/deployment-quick.md",version:"2.5.1",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Local Quick Deployment",keywords:["Deployment"],description:"Local Quick Deployment"},sidebar:"version-2.5.1/tutorialSidebar",previous:{title:"Local Deployment",permalink:"/docs/2.5.1/deployment/deployment-local"},next:{title:"Binary Packages Deployment",permalink:"/docs/2.5.1/deployment/deployment-package"}},p=[{value:"Environmental preparation",id:"environmental-preparation",children:[]},{value:"Start Apache ShenYu Bootstrap",id:"start-apache-shenyu-bootstrap",children:[]},{value:"Selector and rule configuration",id:"selector-and-rule-configuration",children:[]},{value:"by postman",id:"by-postman",children:[]},{value:"by curl",id:"by-curl",children:[]}],c={toc:p},u="wrapper";function s(e){let{components:n,...t}=e;return(0,r.yg)(u,(0,a.c)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"This article introduces how to quickly start the ",(0,r.yg)("inlineCode",{parentName:"p"},"Apache ShenYu")," gateway in the standalone environment."),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Before you read this document, you need to complete some preparations before deploying Shenyu according to the ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.5.1/deployment/deployment-before"},"Deployment Prerequisites document"),".")),(0,r.yg)("h3",{id:"environmental-preparation"},"Environmental preparation"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Install JDK1.8+ locally")),(0,r.yg)("h3",{id:"start-apache-shenyu-bootstrap"},"Start Apache ShenYu Bootstrap"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"download ",(0,r.yg)("a",{parentName:"p",href:"https://archive.apache.org/dist/shenyu/2.5.1/apache-shenyu-2.5.1-bootstrap-bin.tar.gz"},"apache-shenyu-${current.version}-bootstrap-bin.tar.gz"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"unzip ",(0,r.yg)("inlineCode",{parentName:"p"},"apache-shenyu-${current.version}-bootstrap-bin.tar.gz"),"\u3002 go to the ",(0,r.yg)("inlineCode",{parentName:"p"},"bin")," directory."))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"> windwos : start.bat \n\n> linux : ./start.sh \n")),(0,r.yg)("h3",{id:"selector-and-rule-configuration"},"Selector and rule configuration"),(0,r.yg)("p",null,"please refer to ",(0,r.yg)("a",{parentName:"p",href:"../developer/local-model#add-selector-and-rules"},"Developer Local Model")," add the selector and rule."),(0,r.yg)("p",null,"example\uff1a"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"your service address is",(0,r.yg)("inlineCode",{parentName:"li"},"http://127.0.0.1:8080/helloworld")," and the response like follow:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "name" : "Shenyu",\n  "data" : "hello world"\n}\n')),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"use the follow data to add selector and rule")),(0,r.yg)("h3",{id:"by-postman"},"by postman"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Add ",(0,r.yg)("inlineCode",{parentName:"p"},"localKey: 123456")," to Headers. If you need to customize the localKey, you can use the sha512 tool to generate the key based on plaintext and update the ",(0,r.yg)("inlineCode",{parentName:"p"},"shenyu.local.sha512Key")," property."),(0,r.yg)("p",{parentName:"blockquote"},(0,r.yg)("inlineCode",{parentName:"p"},"POST")," method\uff0caddress",(0,r.yg)("inlineCode",{parentName:"p"},"http://localhost:9195/shenyu/plugin/selectorAndRules"),", body use ",(0,r.yg)("inlineCode",{parentName:"p"},"raw json")," content\uff1a")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"Headers\n\nlocalKey: 123456\n")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "pluginName": "divide",\n    "selectorHandler": "[{\\"upstreamUrl\\":\\"127.0.0.1:8080\\"}]",\n    "conditionDataList": [{\n        "paramType": "uri",\n        "operator": "match",\n        "paramValue": "/**"\n    }],\n    "ruleDataList": [{\n        "ruleHandler": "{\\"loadBalance\\":\\"random\\"}",\n        "conditionDataList": [{\n            "paramType": "uri",\n            "operator": "match",\n            "paramValue": "/**"\n        }]\n    }]\n}\n')),(0,r.yg)("h3",{id:"by-curl"},"by curl"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'curl --location --request POST \'http://localhost:9195/shenyu/plugin/selectorAndRules\' \\\n--header \'Content-Type: application/json\' \\\n--header \'localKey: 123456\' \\\n--data-raw \'{\n    "pluginName": "divide",\n    "selectorHandler": "[{\\"upstreamUrl\\":\\"127.0.0.1:8080\\"}]",\n    "conditionDataList": [{\n        "paramType": "uri",\n        "operator": "match",\n        "paramValue": "/**"\n    }],\n    "ruleDataList": [{\n        "ruleHandler": "{\\"loadBalance\\":\\"random\\"}",\n        "conditionDataList": [{\n            "paramType": "uri",\n            "operator": "match",\n            "paramValue": "/**"\n        }]\n    }]\n}\'\n')),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"open ",(0,r.yg)("inlineCode",{parentName:"li"},"http://localhost:9195/helloworld"),":")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "name" : "Shenyu",\n  "data" : "hello world"\n}\n')))}s.isMDXComponent=!0}}]);