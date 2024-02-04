"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[90452],{95788:(e,t,n)=>{n.d(t,{Iu:()=>c,yg:()=>m});var a=n(11504);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),g=i,m=d["".concat(s,".").concat(g)]||d[g]||p[g]||o;return n?a.createElement(m,r(r({ref:t},c),{},{components:n})):a.createElement(m,r({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:i,r[1]=l;for(var u=2;u<o;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},4936:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(45072),i=(n(11504),n(95788));const o={title:"API Document Management",keywords:["api doc Document"],description:"API document management"},r=void 0,l={unversionedId:"user-guide/admin-usage/api-document",id:"version-2.6.0/user-guide/admin-usage/api-document",isDocsHomePage:!1,title:"API Document Management",description:"API document management",source:"@site/versioned_docs/version-2.6.0/user-guide/admin-usage/api-document.md",sourceDirName:"user-guide/admin-usage",slug:"/user-guide/admin-usage/api-document",permalink:"/docs/2.6.0/user-guide/admin-usage/api-document",editUrl:"https://github.com/apache/shenyu-website/edit/main/versioned_docs/version-2.6.0/user-guide/admin-usage/api-document.md",version:"2.6.0",frontMatter:{title:"API Document Management",keywords:["api doc Document"],description:"API document management"},sidebar:"version-2.6.0/tutorialSidebar",previous:{title:"Quick start with Websocket",permalink:"/docs/2.6.0/quick-start/quick-start-websocket"},next:{title:"Data Permission Management",permalink:"/docs/2.6.0/user-guide/admin-usage/data-permission"}},s=[{value:"1. Design Notes",id:"1-design-notes",children:[]},{value:"2. How to use",id:"2-how-to-use",children:[]},{value:"3. Set the global environment address",id:"3-set-the-global-environment-address",children:[]},{value:"4. Support Multiple Ways to Aggregate API Documents",id:"4-support-multiple-ways-to-aggregate-api-documents",children:[{value:"4.1 Add API Document Manually",id:"41-add-api-document-manually",children:[]},{value:"4.2 Remotely pull the swagger registration API Document.",id:"42-remotely-pull-the-swagger-registration-api-document",children:[]},{value:"4.3 Shenyu Client Annotation Registration API Documentation",id:"43-shenyu-client-annotation-registration-api-documentation",children:[]}]},{value:"5. Publish API",id:"5-publish-api",children:[]},{value:"6. Offline API(optional)",id:"6-offline-apioptional",children:[]},{value:"7. API Debug",id:"7-api-debug",children:[]}],u={toc:s},c="wrapper";function d(e){let{components:t,...o}=e;return(0,i.yg)(c,(0,a.c)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"1-design-notes"},"1. Design Notes"),(0,i.yg)("p",null,"When the front and back end are jointly debugged, it is usually necessary for the back end to give documents to detail the input and output of the interface; "),(0,i.yg)("p",null,"After the backend development is complete, you need to test whether the access gateway is successful. "),(0,i.yg)("p",null,"In order to reduce the sense of fragmentation and improve the user experience of front-end and back-end development, it is necessary to see the API documentation in shenyu-admin and test the API directly."),(0,i.yg)("h2",{id:"2-how-to-use"},"2. How to use"),(0,i.yg)("p",null,"The brief introduce is as follows."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Back-end development produces API documents in shenyu-admin.",(0,i.yg)("blockquote",{parentName:"li"},(0,i.yg)("p",{parentName:"blockquote"},"Three methods of ",(0,i.yg)("inlineCode",{parentName:"p"},"remotely pulling swagger"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"manual filling"),", and ",(0,i.yg)("inlineCode",{parentName:"p"},"client registration")," are already supported. From the perspective of functional integrity and user experience, ",(0,i.yg)("inlineCode",{parentName:"p"},"remotely pulling swagger")," is currently recommended, and the latter two methods will be in Continuous function enhancement in later versions."))),(0,i.yg)("li",{parentName:"ul"},"The frontend looks at the API documentation in shenyu-admin and starts development.",(0,i.yg)("blockquote",{parentName:"li"},(0,i.yg)("p",{parentName:"blockquote"},"During joint debugging, developers (including front-end and backend) may use the testing function in shenyu-admin to request APIs directly.")))),(0,i.yg)("h2",{id:"3-set-the-global-environment-address"},"3. Set the global environment address"),(0,i.yg)("p",null,"In actual use, you may have multiple gateway addresses (such as production environment, test environment, or public network environment, intranet environment), you can manage them in ",(0,i.yg)("inlineCode",{parentName:"p"},"Apache ShenYu")," Gateway Management System --\x3e BasicConfig --\x3e Dictionary, Set multiple gateway addresses."),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"apidoc-env-en",src:n(11276).c})),(0,i.yg)("blockquote",null,(0,i.yg)("p",{parentName:"blockquote"},"DictionaryType: Fill in the value must be ",(0,i.yg)("inlineCode",{parentName:"p"},"apidocEnv"),";"),(0,i.yg)("p",{parentName:"blockquote"},"DictionaryCode: The identifier of the gateway address has no actual meaning. It is recommended to use ",(0,i.yg)("inlineCode",{parentName:"p"},"ENV_LABEL_")," as a prefix, such as ",(0,i.yg)("inlineCode",{parentName:"p"},"ENV_LABEL_OFFLINE"),";"),(0,i.yg)("p",{parentName:"blockquote"},"DictionaryName: Indicates the gateway type, such as filling in ",(0,i.yg)("inlineCode",{parentName:"p"},"test environment"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"production environment"),". This value will appear on the API documentation details page;"),(0,i.yg)("p",{parentName:"blockquote"},"DictionaryValue: Indicates the gateway address, such as ",(0,i.yg)("a",{parentName:"p",href:"http://127.0.0.1:9195"},"http://127.0.0.1:9195"),". This value will appear on the API documentation details page;"),(0,i.yg)("p",{parentName:"blockquote"},"DictionaryDescribe: Give a brief description of what scenario the gateway address is used for. This value will appear on the API documentation details page;"),(0,i.yg)("p",{parentName:"blockquote"},"Sort: The numerical value determines the display order of the gateway address;"),(0,i.yg)("p",{parentName:"blockquote"},"Status: open or close\u3002")),(0,i.yg)("h2",{id:"4-support-multiple-ways-to-aggregate-api-documents"},"4. Support Multiple Ways to Aggregate API Documents"),(0,i.yg)("h3",{id:"41-add-api-document-manually"},"4.1 Add API Document Manually"),(0,i.yg)("p",null,'Clicking the menu "Document -> API Document" to create api.'),(0,i.yg)("h5",{id:"create-project"},"Create Project"),(0,i.yg)("p",null,"If you have not created a project or you want to classify the new API into a new project, you need to create a project."),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"app-create-en",src:n(41688).c})),(0,i.yg)("h5",{id:"add-api-documentation"},"Add API Documentation"),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"create-api-en",src:n(22581).c})),(0,i.yg)("h3",{id:"42-remotely-pull-the-swagger-registration-api-document"},"4.2 Remotely pull the swagger registration API Document."),(0,i.yg)("p",null,"Automatically register API documentation by remotely pulling swager documentation. Please refer to ",(0,i.yg)("a",{parentName:"p",href:"/docs/2.6.0/user-guide/api-doc/swagger-apidoc"},"Remote pull swagger registration API document")),(0,i.yg)("h3",{id:"43-shenyu-client-annotation-registration-api-documentation"},"4.3 Shenyu Client Annotation Registration API Documentation"),(0,i.yg)("p",null,"Automatically register API documents through Shenyu client annotations. Please refer to ",(0,i.yg)("a",{parentName:"p",href:"/docs/2.6.0/user-guide/api-doc/shenyu-annotation-apidoc"},"Client Registration API Documentation")),(0,i.yg)("blockquote",null,(0,i.yg)("p",{parentName:"blockquote"},"This method is recommended if you do not expect to view the full interface documentation details. When you choose this automatic registration method, please turn off the registration method of remote automatic pull swagger, otherwise there will be conflicts.")),(0,i.yg)("h2",{id:"5-publish-api"},"5. Publish API"),(0,i.yg)("p",null,"If the API has never been published and the user has not used the shenyu-client, shenyu-admin will automatically expose the API described in the API document to the gateway."),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"publish-api-en",src:n(72420).c})),(0,i.yg)("p",null,"After clicking Save, you'll see that the registration data for the API is inserted below the selectors and rules. As shown below:"),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"api-published-divide-list-en",src:n(212).c})),(0,i.yg)("h2",{id:"6-offline-apioptional"},"6. Offline API(optional)"),(0,i.yg)("blockquote",null,(0,i.yg)("p",{parentName:"blockquote"},"Special Note: After clicking Offline, the API will still be visible in the API document list, but it will be deleted from the proxy plug-in and metadata management list. Before you republish the API, the gateway will not proxy the API. When you pass through the gateway When requesting this API, an exception will be reported.")),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"offline-api-en",src:n(97832).c})),(0,i.yg)("h2",{id:"7-api-debug"},"7. API Debug"),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"api-debug-en",src:n(53996).c})))}d.isMDXComponent=!0},53996:(e,t,n)=>{n.d(t,{c:()=>a});const a=n.p+"assets/images/api-debug-en-9570194643e76ab71558d4030a16b398.png"},212:(e,t,n)=>{n.d(t,{c:()=>a});const a=n.p+"assets/images/api-published-divide-list-en-9083836b32186bd63352c7363e88deb4.png"},11276:(e,t,n)=>{n.d(t,{c:()=>a});const a=n.p+"assets/images/apidoc-env-en-3c165e72cf46ab2a29de2e601380faa8.png"},41688:(e,t,n)=>{n.d(t,{c:()=>a});const a=n.p+"assets/images/app-create-en-2aec5583662b2417491b20f2285a30e8.png"},22581:(e,t,n)=>{n.d(t,{c:()=>a});const a=n.p+"assets/images/create-api-en-39b874a6b163dfaaac45cf56d80bd7f7.png"},97832:(e,t,n)=>{n.d(t,{c:()=>a});const a=n.p+"assets/images/offline-api-en-6c6b5ac7404acc5e0d332ce8ececbd51.png"},72420:(e,t,n)=>{n.d(t,{c:()=>a});const a=n.p+"assets/images/publish-api-en-d234f19ac872e8fd384cdf7229a774b8.png"}}]);