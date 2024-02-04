"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[53272],{95788:(e,a,n)=>{n.d(a,{Iu:()=>p,yg:()=>c});var t=n(11504);function i(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){i(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function s(e,a){if(null==e)return{};var n,t,i=function(e,a){if(null==e)return{};var n,t,i={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(i[n]=e[n]);return i}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=t.createContext({}),d=function(e){var a=t.useContext(o),n=a;return e&&(n="function"==typeof e?e(a):l(l({},a),e)),n},p=function(e){var a=d(e.components);return t.createElement(o.Provider,{value:a},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},g=t.forwardRef((function(e,a){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(n),g=i,c=u["".concat(o,".").concat(g)]||u[g]||m[g]||r;return n?t.createElement(c,l(l({ref:a},p),{},{components:n})):t.createElement(c,l({ref:a},p))}));function c(e,a){var n=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=g;var s={};for(var o in a)hasOwnProperty.call(a,o)&&(s[o]=a[o]);s.originalType=e,s[u]="string"==typeof e?e:i,l[1]=s;for(var d=2;d<r;d++)l[d]=n[d];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}g.displayName="MDXCreateElement"},49272:(e,a,n)=>{n.r(a),n.d(a,{contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>o});var t=n(45072),i=(n(11504),n(95788));const r={sidebar_position:1,title:"Admin Database Design",keywords:["db"],description:"ShenYu Admin Database Design"},l=void 0,s={unversionedId:"design/database-design",id:"version-2.5.1/design/database-design",isDocsHomePage:!1,title:"Admin Database Design",description:"ShenYu Admin Database Design",source:"@site/versioned_docs/version-2.5.1/design/database-design.md",sourceDirName:"design",slug:"/design/database-design",permalink:"/docs/2.5.1/design/database-design",editUrl:"https://github.com/apache/shenyu-website/edit/main/versioned_docs/version-2.5.1/design/database-design.md",version:"2.5.1",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Admin Database Design",keywords:["db"],description:"ShenYu Admin Database Design"},sidebar:"version-2.5.1/tutorialSidebar",previous:{title:"Overview",permalink:"/docs/2.5.1/index"},next:{title:"Data Sync Design",permalink:"/docs/2.5.1/design/data-sync"}},o=[{value:"Plugin, Selector And Rule",id:"plugin-selector-and-rule",children:[]},{value:"Resource Permission",id:"resource-permission",children:[]},{value:"Data Permission",id:"data-permission",children:[]},{value:"Meta Data",id:"meta-data",children:[]},{value:"Dictionary Management",id:"dictionary-management",children:[]},{value:"API Documentation",id:"API-documentation",children:[]}],d={toc:o},p="wrapper";function u(e){let{components:a,...r}=e;return(0,i.yg)(p,(0,t.c)({},d,r,{components:a,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"Apache Shenyu Admin is the management system of the gateway, which can manage all plugins, selectors and rules visually, set users, roles and resources."),(0,i.yg)("h2",{id:"plugin-selector-and-rule"},"Plugin, Selector And Rule"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Plugin: ShenYu uses the plugin design idea to realize the hot plug of the plugin, which is easy to expand. Built-in rich plugins, including RPC proxy, circuit breaker and current limiting, authority and certification, monitoring, and more.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Selector: Each plugin can set multiple selectors to carry out preliminary filtering of traffic.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Rule: Multiple rules can be set per selector for more fine-grained control of flow.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"The Database Table UML Diagram:"))),(0,i.yg)("p",null,(0,i.yg)("img",{src:n(71212).c})),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Detailed design:"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"One plugin corresponds to multiple selectors,one selector corresponds to multiple rules.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"One selector corresponds to multiple match conditions,one rule corresponds to multiple match conditions.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Each rule handles differently in corresponding plugin according to field handler,field handler is a kind of data of JSON string type.You can view detail during the use of shenyu-admin."))))),(0,i.yg)("h2",{id:"resource-permission"},"Resource Permission"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"The resource are the menus and buttons in the shenyu-admin console.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Resource Permission use database to store user name,role,resource data and relationship. ")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"The Resource Permission Table UML Diagram:\n",(0,i.yg)("img",{src:n(59892).c}))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Detailed design:"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"one user corresponds to multiple role,one role corresponds to multiple resources.")))),(0,i.yg)("h2",{id:"data-permission"},"Data Permission"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Data Permission use database to store the relationship between users, selectors and rules.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"The Data Permission Table UML Diagram:\n",(0,i.yg)("img",{alt:"data permission uml",src:n(54560).c})))),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Detailed design:",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"The most important table is ",(0,i.yg)("inlineCode",{parentName:"li"},"data_permission"),", where a user corresponds to multiple data permissions."),(0,i.yg)("li",{parentName:"ul"},"The field ",(0,i.yg)("inlineCode",{parentName:"li"},"data_type")," distinguishes between different types of data, which corresponds to the following: 0 -> selector, 1 -> rule."),(0,i.yg)("li",{parentName:"ul"},"The field ",(0,i.yg)("inlineCode",{parentName:"li"},"data_id")," holds the primary key id of the corresponding type.")))),(0,i.yg)("h2",{id:"meta-data"},"Meta Data"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Metadata is used for generic invoke by gateway."),(0,i.yg)("li",{parentName:"ul"},"For each interface method, there is one piece of metadata."),(0,i.yg)("li",{parentName:"ul"},"The Database Table UML Diagram:")),(0,i.yg)("img",{src:"/img/shenyu/db/mata_data_table.png",width:"30%",height:"30%"}),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Detailed design\uff1a"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"p"},"path"),": When the gateway is requested, a piece of data will be matched according to ",(0,i.yg)("inlineCode",{parentName:"p"},"path"),", and then the subsequent process will be carried out.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"p"},"rpc_ext"),": Used to hold extended information for the RPC proxy.\u3002"))))),(0,i.yg)("h2",{id:"dictionary-management"},"Dictionary Management"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Dictionary management is used to maintain and manage public data dictionaries."),(0,i.yg)("li",{parentName:"ul"},"The Database Table UML Diagram:")),(0,i.yg)("img",{src:"/img/shenyu/db/shenyu_dict.png",width:"30%",height:"30%"}),(0,i.yg)("h2",{id:"API-documentation"},"API Documentation"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"The API document tables used to maintain and manage API documents."),(0,i.yg)("li",{parentName:"ul"},"The API document (such as json, md, html, etc.) of common specifications (such as OpenApi3.0 and yapi) can be imported into ",(0,i.yg)("inlineCode",{parentName:"li"},"shenyu-admin")," and finally stored in the API document tables."),(0,i.yg)("li",{parentName:"ul"},"API documents of other common specifications can be generated through the API document tables."),(0,i.yg)("li",{parentName:"ul"},"The Database Table UML Diagram:")),(0,i.yg)("img",{src:"/img/shenyu/db/shenyu-api-doc-table.png",width:"105%",height:"105%"}),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Detailed design:",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"A tag can have multiple child tags, the level of tags is unlimited, the lowest leaf node is API."),(0,i.yg)("li",{parentName:"ul"},"Interfaces with the same path but supporting multiple http methods, they are counted as multiple APIs."),(0,i.yg)("li",{parentName:"ul"},"An API has multiple request parameters and response fields."),(0,i.yg)("li",{parentName:"ul"},"A parameter/field has its own type (model), and each type have multiple fields."),(0,i.yg)("li",{parentName:"ul"},"A field has its own type, which corresponds to multiple values."),(0,i.yg)("li",{parentName:"ul"},"A value can be used as either a request example value, or a response example value (for example, 200 indicates OK, and 400 indicates illegal parameters)."),(0,i.yg)("li",{parentName:"ul"},"The ",(0,i.yg)("inlineCode",{parentName:"li"},"query"),", ",(0,i.yg)("inlineCode",{parentName:"li"},"header")," and ",(0,i.yg)("inlineCode",{parentName:"li"},"body"),", all of them are ",(0,i.yg)("inlineCode",{parentName:"li"},"json")," stored in ",(0,i.yg)("inlineCode",{parentName:"li"},"mock_request_record"),"\uff0cbut ",(0,i.yg)("inlineCode",{parentName:"li"},"body")," does not support special types such as file\u3002"),(0,i.yg)("li",{parentName:"ul"},"The ",(0,i.yg)("inlineCode",{parentName:"li"},"ext")," of the ",(0,i.yg)("inlineCode",{parentName:"li"},"tag")," table stores the full amount of json data of its parent tag (including the parent tag of the parent tag, and so on)."),(0,i.yg)("li",{parentName:"ul"},"The ",(0,i.yg)("inlineCode",{parentName:"li"},"ext")," of the ",(0,i.yg)("inlineCode",{parentName:"li"},"api")," table may store the IP list and the service name of ",(0,i.yg)("inlineCode",{parentName:"li"},"SpringCloud"),"."),(0,i.yg)("li",{parentName:"ul"},"The ",(0,i.yg)("inlineCode",{parentName:"li"},"type")," of the ",(0,i.yg)("inlineCode",{parentName:"li"},"parameter")," table mainly includes ",(0,i.yg)("inlineCode",{parentName:"li"},"requestUrlParam"),", ",(0,i.yg)("inlineCode",{parentName:"li"},"requestHeader"),", ",(0,i.yg)("inlineCode",{parentName:"li"},"requestBody"),", ",(0,i.yg)("inlineCode",{parentName:"li"},"requestPathVariable"),", ",(0,i.yg)("inlineCode",{parentName:"li"},"responseHeader"),", and ",(0,i.yg)("inlineCode",{parentName:"li"},"responseBody"),"; If the returned type is a special type (such as file), do not associate ",(0,i.yg)("inlineCode",{parentName:"li"},"model_id"),"."),(0,i.yg)("li",{parentName:"ul"},"The ",(0,i.yg)("inlineCode",{parentName:"li"},"ext")," of the ",(0,i.yg)("inlineCode",{parentName:"li"},"field")," table stores generic type in json format (convenient for subsequent expansion), such as ",(0,i.yg)("inlineCode",{parentName:"li"},'{"genericTypes": [model_id1, model_id2]}'),"; ",(0,i.yg)("inlineCode",{parentName:"li"},"model_id")," indicates which type has this field, ",(0,i.yg)("inlineCode",{parentName:"li"},"self_model_id")," indicates which type of this field."),(0,i.yg)("li",{parentName:"ul"},"The ",(0,i.yg)("inlineCode",{parentName:"li"},"is_example")," of ",(0,i.yg)("inlineCode",{parentName:"li"},"detail")," table indicates whether a value is a request sample value, true is a request sample value, and false is a response value.")))))}u.isMDXComponent=!0},54560:(e,a,n)=>{n.d(a,{c:()=>t});const t=n.p+"assets/images/data_permission-f382375f134eeb359e481ee2cd43482d.png"},71212:(e,a,n)=>{n.d(a,{c:()=>t});const t=n.p+"assets/images/shenyu-db-0847449c4fb817f83e61abad7125ae4a.png"},59892:(e,a,n)=>{n.d(a,{c:()=>t});const t=n.p+"assets/images/shenyu-permission-db-90c870eefea0da663079cdf6638c7ce7.png"}}]);