"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[8754],{85407:(e,a)=>{function t(e,a){var t,l,s,i,n;return e.format?e.format:e.allOf?"string"==typeof e.allOf[0]&&e.allOf[0].includes("circular")?e.allOf[0]:"object":e.oneOf||e.anyOf?"object":"object"===e.type?null!=(l=null==(t=e.xml)?void 0:t.name)?l:e.type:"array"===e.type?null!=(i=null==(s=e.xml)?void 0:s.name)?i:e.type:null!=(n=e.title)?n:e.type}a.A4=a.uc=void 0,a.uc=function(e,a){var l;return e.items?t(e.items)+"[]":null!=(l=t(e))?l:""},a.A4=function e(a){if(!a)return;if(a.items&&void 0===a.minItems&&void 0===a.maxItems)return e(a.items);let t=[];if(a.items&&a.items.enum&&a.items.enum&&t.push(`[${a.items.enum.map((e=>`\`${e}\``)).join(", ")}]`),a.minLength||a.maxLength){let e,l,s="";a.minLength&&a.minLength>1&&(e=`\`>= ${a.minLength} characters\``),a.minLength&&1===a.minLength&&(e="`non-empty`"),a.maxLength&&(l=`\`<= ${a.maxLength} characters\``),e&&!l&&(s+=e),l&&!e&&(s+=l),e&&l&&(s+=`${e} and ${l}`),t.push(s)}if(a.minimum||a.maximum||"number"==typeof a.exclusiveMinimum||"number"==typeof a.exclusiveMaximum){let e,l,s="";"number"==typeof a.exclusiveMinimum?e=`\`> ${a.exclusiveMinimum}\``:a.minimum&&!a.exclusiveMinimum?e=`\`>= ${a.minimum}\``:a.minimum&&!0===a.exclusiveMinimum&&(e=`\`> ${a.minimum}\``),"number"==typeof a.exclusiveMaximum?l=`\`< ${a.exclusiveMaximum}\``:a.maximum&&!a.exclusiveMaximum?l=`\`<= ${a.maximum}\``:a.maximum&&!0===a.exclusiveMaximum&&(l=`\`< ${a.maximum}\``),e&&!l&&(s+=e),l&&!e&&(s+=l),e&&l&&(s+=`${e} and ${l}`),t.push(s)}a.pattern&&t.push(`Value must match regular expression \`${a.pattern}\``);const l=a;if(l.mapping){const e=Object.keys(l.mapping);t.push(`[${e.map((e=>`\`${e}\``)).join(", ")}]`)}return a.enum&&t.push(`[${a.enum.map((e=>`\`${e}\``)).join(", ")}]`),a.minItems&&t.push(`\`>= ${a.minItems}\``),a.maxItems&&t.push(`\`<= ${a.maxItems}\``),0!==t.length?"**Possible values:** "+t.join(", "):void 0}},34168:(e,a,t)=>{t.d(a,{Z:()=>y});var l=t(67294),s=t(58750),i=t(82479),n=t(62574),m=t(94693),r=t(85407),o=t(52347),c=t(25365),p=t(88453),d=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable;const y=function({param:{description:e,example:a,examples:t,name:y,required:g,schema:f}}){f&&(null==f?void 0:f.type)||(f={type:"any"});const k=(0,o.lo)(f,(e=>l.createElement("span",{className:"openapi-schema__type"}," ",(0,r.uc)(e)))),b=(0,o.lo)(g,(()=>l.createElement("span",{className:"openapi-schema__required"},"required"))),x=(0,o.lo)((0,r.A4)(f),(e=>l.createElement("div",null,l.createElement(c.D,{children:(0,m.T)(e),rehypePlugins:[p.Z]})))),T=(0,o.lo)(e,(e=>l.createElement("div",null,l.createElement(c.D,{children:(0,m.T)(e),components:{pre:"div",code(e){var a=e,{node:t,inline:i,className:n,children:m}=a;((e,a)=>{var t={};for(var l in e)u.call(e,l)&&a.indexOf(l)<0&&(t[l]=e[l]);if(null!=e&&d)for(var l of d(e))a.indexOf(l)<0&&h.call(e,l)&&(t[l]=e[l])})(a,["node","inline","className","children"]);const r=/language-(\w+)/.exec(n||"");return i?l.createElement("code",null,m):!i&&r?l.createElement(s.Z,{className:n},m):l.createElement(s.Z,null,m)}},rehypePlugins:[p.Z]})))),v=(0,o.lo)(f&&f.items?f.items.default:f?f.default:void 0,(e=>l.createElement("div",null,l.createElement(c.D,{children:`**Default value:** \`${e}\``})))),S=(0,o.lo)((0,o.toString)(a),(e=>l.createElement("div",null,l.createElement("strong",null,"Example: "),e))),E=(0,o.lo)(t,(e=>{const a=Object.entries(e);return l.createElement(l.Fragment,null,l.createElement("strong",null,"Examples:"),l.createElement(i.default,null,a.map((([e,a])=>l.createElement(n.default,{value:e,label:e},a.summary&&l.createElement("p",null,a.summary),a.description&&l.createElement("p",null,l.createElement("strong",null,"Description: "),l.createElement("span",null,a.description)),l.createElement("p",null,l.createElement("strong",null,"Example: "),l.createElement("code",null,a.value)))))))}));return l.createElement("div",{className:"openapi-params__list-item"},l.createElement("span",{className:"openapi-schema__container"},l.createElement("strong",{className:"openapi-schema__property"},y),k,g&&l.createElement("span",{className:"openapi-schema__divider"}),b),x,v,T,S,E)}},69214:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>L,contentTitle:()=>E,default:()=>A,frontMatter:()=>S,metadata:()=>q,toc:()=>R});var l=t(3905),s=t(68562),i=t(67001),n=t.n(i),m=t(98439),r=t(34168),o=t(3655),c=t(13503),p=t(82479),d=t(62574),u=Object.defineProperty,h=Object.defineProperties,y=Object.getOwnPropertyDescriptors,g=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,b=(e,a,t)=>a in e?u(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,x=(e,a)=>{for(var t in a||(a={}))f.call(a,t)&&b(e,t,a[t]);if(g)for(var t of g(a))k.call(a,t)&&b(e,t,a[t]);return e},T=(e,a)=>h(e,y(a)),v=(e,a)=>{var t={};for(var l in e)f.call(e,l)&&a.indexOf(l)<0&&(t[l]=e[l]);if(null!=e&&g)for(var l of g(e))a.indexOf(l)<0&&k.call(e,l)&&(t[l]=e[l]);return t};const S={id:"delete-account-async",sidebar_label:"Remove Account",hide_title:!0,hide_table_of_contents:!0,api:"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",sidebar_class_name:"post api-method",info_path:"docs/api/beta/identity-security-cloud-beta-api",custom_edit_url:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Remove Account' (delete-account-async)"},E=void 0,q={unversionedId:"api/beta/delete-account-async",id:"api/beta/delete-account-async",title:"delete-account-async",description:"Remove Account",source:"@site/docs/api/beta/delete-account-async.api.mdx",sourceDirName:"api/beta",slug:"/api/beta/delete-account-async",permalink:"/docs/api/beta/delete-account-async",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Remove Account' (delete-account-async)",tags:[],version:"current",frontMatter:{id:"delete-account-async",sidebar_label:"Remove Account",hide_title:!0,hide_table_of_contents:!0,api:"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",sidebar_class_name:"post api-method",info_path:"docs/api/beta/identity-security-cloud-beta-api",custom_edit_url:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Remove Account' (delete-account-async)"},sidebar:"openApiSidebar",previous:{title:"Unlock Account",permalink:"/docs/api/beta/unlock-account"},next:{title:"Enable IDN Account for Identity",permalink:"/docs/api/beta/enable-account-for-identity"}},L={},R=[{value:"Request",id:"request",level:2}],N={toc:R},I="wrapper";function A(e){var a=e,{components:t}=a,i=v(a,["components"]);return(0,l.kt)(I,T(x(x({},N),i),{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{className:"openapi__heading"},"Remove Account"),(0,l.kt)(n(),{method:"post",path:"/accounts/{id}/remove",mdxType:"MethodEndpoint"}),(0,l.kt)("p",null,"Use this endpoint to remove accounts from the system without provisioning changes to the source. Accounts that are removed could be re-created during the next aggregation."),(0,l.kt)("p",null,"This endpoint is good for:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Removing accounts that no longer exist on the source."),(0,l.kt)("li",{parentName:"ul"},"Removing accounts that won't be aggregated following updates to the source configuration."),(0,l.kt)("li",{parentName:"ul"},"Forcing accounts to be re-created following the next aggregation to re-run account processing, support testing, etc.")),(0,l.kt)("h2",x({},{id:"request"}),"Request"),(0,l.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{}},(0,l.kt)("h3",{className:"openapi-markdown__details-summary-header-params"},"Path Parameters")),(0,l.kt)("div",null,(0,l.kt)("ul",null,(0,l.kt)(r.Z,{className:"paramsItem",param:{in:"path",name:"id",schema:{type:"string"},required:!0,description:"The account id",example:"c350d6aa4f104c61b062cb632421ad10"},mdxType:"ParamsItem"})))),(0,l.kt)("div",null,(0,l.kt)("div",null,(0,l.kt)(s.Z,{mdxType:"ApiTabs"},(0,l.kt)(d.default,{label:"202",value:"202",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("p",null,"Accepted. Returns task result details of removal request.")),(0,l.kt)("div",null,(0,l.kt)(m.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,l.kt)(d.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,l.kt)(p.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,l.kt)(d.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,l.kt)("strong",null,"Schema")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)(c.Z,{collapsible:!1,name:"type",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** [`TASK_RESULT`]",schema:{type:"string",description:"Task result DTO type.",enum:["TASK_RESULT"],example:"TASK_RESULT"},mdxType:"SchemaItem"}),(0,l.kt)(c.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Task result ID.",example:"464ae7bf791e49fdb74606a2e4a89635"},mdxType:"SchemaItem"}),(0,l.kt)(c.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Task result display name.",nullable:!0,example:null},mdxType:"SchemaItem"})))),(0,l.kt)(d.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,l.kt)(o.Z,{responseExample:'{\n  "type": "TASK_RESULT",\n  "id": "464ae7bf791e49fdb74606a2e4a89635",\n  "name": null\n}',language:"json",mdxType:"ResponseSamples"})),(0,l.kt)(d.default,{label:"Example",value:"Example",mdxType:"TabItem"},(0,l.kt)(o.Z,{responseExample:'{\n  "type": "TASK_RESULT",\n  "id": "464ae7bf791e49fdb74606a2e4a89635",\n  "name": null\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,l.kt)(d.default,{label:"400",value:"400",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("p",null,"Client Error - Returned if the request body is invalid.")),(0,l.kt)("div",null,(0,l.kt)(m.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,l.kt)(d.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,l.kt)(p.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,l.kt)(d.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,l.kt)("strong",null,"Schema")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)(c.Z,{collapsible:!1,name:"detailCode",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Fine-grained error code providing more detail of the error.",example:"400.1 Bad Request Content"},mdxType:"SchemaItem"}),(0,l.kt)(c.Z,{collapsible:!1,name:"trackingId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Unique tracking id for the error.",example:"e7eab60924f64aa284175b9fa3309599"},mdxType:"SchemaItem"}),(0,l.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,l.kt)("details",{style:{},className:"openapi-markdown__details"},(0,l.kt)("summary",{style:{}},(0,l.kt)("span",{className:"openapi-schema__container"},(0,l.kt)("strong",{className:"openapi-schema__property"},"messages"),(0,l.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,l.kt)("div",{style:{marginLeft:"1rem"}},(0,l.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,l.kt)("p",null,"Generic localized reason for error")),(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,l.kt)(c.Z,{collapsible:!1,name:"locale",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The locale for the message text, a BCP 47 language tag.",example:"en-US",nullable:!0},mdxType:"SchemaItem"}),(0,l.kt)(c.Z,{collapsible:!1,name:"localeOrigin",required:!1,schemaName:"LocaleOrigin",qualifierMessage:"**Possible values:** [`DEFAULT`, `REQUEST`, `null`]",schema:{type:"string",enum:["DEFAULT","REQUEST",null],description:"An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.",example:"DEFAULT",nullable:!0,title:"LocaleOrigin"},mdxType:"SchemaItem"}),(0,l.kt)(c.Z,{collapsible:!1,name:"text",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Actual text of the error message in the indicated locale.",example:"The request was syntactically correct but its content is semantically invalid."},mdxType:"SchemaItem"}),(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,l.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,l.kt)("details",{style:{},className:"openapi-markdown__details"},(0,l.kt)("summary",{style:{}},(0,l.kt)("span",{className:"openapi-schema__container"},(0,l.kt)("strong",{className:"openapi-schema__property"},"causes"),(0,l.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,l.kt)("div",{style:{marginLeft:"1rem"}},(0,l.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,l.kt)("p",null,"Plain-text descriptive reasons to provide additional detail to the text provided in the messages field")),(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,l.kt)(c.Z,{collapsible:!1,name:"locale",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The locale for the message text, a BCP 47 language tag.",example:"en-US",nullable:!0},mdxType:"SchemaItem"}),(0,l.kt)(c.Z,{collapsible:!1,name:"localeOrigin",required:!1,schemaName:"LocaleOrigin",qualifierMessage:"**Possible values:** [`DEFAULT`, `REQUEST`, `null`]",schema:{type:"string",enum:["DEFAULT","REQUEST",null],description:"An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.",example:"DEFAULT",nullable:!0,title:"LocaleOrigin"},mdxType:"SchemaItem"}),(0,l.kt)(c.Z,{collapsible:!1,name:"text",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Actual text of the error message in the indicated locale.",example:"The request was syntactically correct but its content is semantically invalid."},mdxType:"SchemaItem"}),(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,l.kt)(d.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,l.kt)(o.Z,{responseExample:'{\n  "detailCode": "400.1 Bad Request Content",\n  "trackingId": "e7eab60924f64aa284175b9fa3309599",\n  "messages": [\n    {\n      "locale": "en-US",\n      "localeOrigin": "DEFAULT",\n      "text": "The request was syntactically correct but its content is semantically invalid."\n    }\n  ],\n  "causes": [\n    {\n      "locale": "en-US",\n      "localeOrigin": "DEFAULT",\n      "text": "The request was syntactically correct but its content is semantically invalid."\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,l.kt)(d.default,{label:"401",value:"401",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("p",null,"Unauthorized - Returned if there is no authorization header, or if the JWT token is expired.")),(0,l.kt)("div",null,(0,l.kt)(m.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,l.kt)(d.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,l.kt)(p.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,l.kt)(d.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,l.kt)("strong",null,"Schema")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)(c.Z,{collapsible:!1,name:"error",required:!1,schemaName:"",qualifierMessage:void 0,schema:{description:"A message describing the error",example:"JWT validation failed: JWT is expired"},mdxType:"SchemaItem"})))),(0,l.kt)(d.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,l.kt)(o.Z,{responseExample:'{\n  "error": "JWT validation failed: JWT is expired"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,l.kt)(d.default,{label:"403",value:"403",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("p",null,"Forbidden - Returned if the user you are running as, doesn't have access to this end-point.")),(0,l.kt)("div",null,(0,l.kt)(m.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,l.kt)(d.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,l.kt)(p.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,l.kt)(d.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,l.kt)("strong",null,"Schema")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)(c.Z,{collapsible:!1,name:"detailCode",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Fine-grained error code providing more detail of the error.",example:"400.1 Bad Request Content"},mdxType:"SchemaItem"}),(0,l.kt)(c.Z,{collapsible:!1,name:"trackingId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Unique tracking id for the error.",example:"e7eab60924f64aa284175b9fa3309599"},mdxType:"SchemaItem"}),(0,l.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,l.kt)("details",{style:{},className:"openapi-markdown__details"},(0,l.kt)("summary",{style:{}},(0,l.kt)("span",{className:"openapi-schema__container"},(0,l.kt)("strong",{className:"openapi-schema__property"},"messages"),(0,l.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,l.kt)("div",{style:{marginLeft:"1rem"}},(0,l.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,l.kt)("p",null,"Generic localized reason for error")),(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,l.kt)(c.Z,{collapsible:!1,name:"locale",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The locale for the message text, a BCP 47 language tag.",example:"en-US",nullable:!0},mdxType:"SchemaItem"}),(0,l.kt)(c.Z,{collapsible:!1,name:"localeOrigin",required:!1,schemaName:"LocaleOrigin",qualifierMessage:"**Possible values:** [`DEFAULT`, `REQUEST`, `null`]",schema:{type:"string",enum:["DEFAULT","REQUEST",null],description:"An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.",example:"DEFAULT",nullable:!0,title:"LocaleOrigin"},mdxType:"SchemaItem"}),(0,l.kt)(c.Z,{collapsible:!1,name:"text",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Actual text of the error message in the indicated locale.",example:"The request was syntactically correct but its content is semantically invalid."},mdxType:"SchemaItem"}),(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,l.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,l.kt)("details",{style:{},className:"openapi-markdown__details"},(0,l.kt)("summary",{style:{}},(0,l.kt)("span",{className:"openapi-schema__container"},(0,l.kt)("strong",{className:"openapi-schema__property"},"causes"),(0,l.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,l.kt)("div",{style:{marginLeft:"1rem"}},(0,l.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,l.kt)("p",null,"Plain-text descriptive reasons to provide additional detail to the text provided in the messages field")),(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,l.kt)(c.Z,{collapsible:!1,name:"locale",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The locale for the message text, a BCP 47 language tag.",example:"en-US",nullable:!0},mdxType:"SchemaItem"}),(0,l.kt)(c.Z,{collapsible:!1,name:"localeOrigin",required:!1,schemaName:"LocaleOrigin",qualifierMessage:"**Possible values:** [`DEFAULT`, `REQUEST`, `null`]",schema:{type:"string",enum:["DEFAULT","REQUEST",null],description:"An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.",example:"DEFAULT",nullable:!0,title:"LocaleOrigin"},mdxType:"SchemaItem"}),(0,l.kt)(c.Z,{collapsible:!1,name:"text",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Actual text of the error message in the indicated locale.",example:"The request was syntactically correct but its content is semantically invalid."},mdxType:"SchemaItem"}),(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,l.kt)(d.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,l.kt)(o.Z,{responseExample:'{\n  "detailCode": "400.1 Bad Request Content",\n  "trackingId": "e7eab60924f64aa284175b9fa3309599",\n  "messages": [\n    {\n      "locale": "en-US",\n      "localeOrigin": "DEFAULT",\n      "text": "The request was syntactically correct but its content is semantically invalid."\n    }\n  ],\n  "causes": [\n    {\n      "locale": "en-US",\n      "localeOrigin": "DEFAULT",\n      "text": "The request was syntactically correct but its content is semantically invalid."\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"})),(0,l.kt)(d.default,{label:"403",value:"403",mdxType:"TabItem"},(0,l.kt)("p",null," An example of a 403 response object"),(0,l.kt)(o.Z,{responseExample:'{\n  "detailCode": "403 Forbidden",\n  "trackingId": "b21b1f7ce4da4d639f2c62a57171b427",\n  "messages": [\n    {\n      "locale": "en-US",\n      "localeOrigin": "DEFAULT",\n      "text": "The server understood the request but refuses to authorize it."\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,l.kt)(d.default,{label:"429",value:"429",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("p",null,"Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again.")),(0,l.kt)("div",null,(0,l.kt)(m.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,l.kt)(d.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,l.kt)(p.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,l.kt)(d.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,l.kt)("strong",null,"Schema")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)(c.Z,{collapsible:!1,name:"message",required:!1,schemaName:"",qualifierMessage:void 0,schema:{description:"A message describing the error",example:" Rate Limit Exceeded "},mdxType:"SchemaItem"})))),(0,l.kt)(d.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,l.kt)(o.Z,{responseExample:'{\n  "message": " Rate Limit Exceeded "\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,l.kt)(d.default,{label:"500",value:"500",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("p",null,"Internal Server Error - Returned if there is an unexpected error.")),(0,l.kt)("div",null,(0,l.kt)(m.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,l.kt)(d.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,l.kt)(p.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,l.kt)(d.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,l.kt)("strong",null,"Schema")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)(c.Z,{collapsible:!1,name:"detailCode",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Fine-grained error code providing more detail of the error.",example:"400.1 Bad Request Content"},mdxType:"SchemaItem"}),(0,l.kt)(c.Z,{collapsible:!1,name:"trackingId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Unique tracking id for the error.",example:"e7eab60924f64aa284175b9fa3309599"},mdxType:"SchemaItem"}),(0,l.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,l.kt)("details",{style:{},className:"openapi-markdown__details"},(0,l.kt)("summary",{style:{}},(0,l.kt)("span",{className:"openapi-schema__container"},(0,l.kt)("strong",{className:"openapi-schema__property"},"messages"),(0,l.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,l.kt)("div",{style:{marginLeft:"1rem"}},(0,l.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,l.kt)("p",null,"Generic localized reason for error")),(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,l.kt)(c.Z,{collapsible:!1,name:"locale",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The locale for the message text, a BCP 47 language tag.",example:"en-US",nullable:!0},mdxType:"SchemaItem"}),(0,l.kt)(c.Z,{collapsible:!1,name:"localeOrigin",required:!1,schemaName:"LocaleOrigin",qualifierMessage:"**Possible values:** [`DEFAULT`, `REQUEST`, `null`]",schema:{type:"string",enum:["DEFAULT","REQUEST",null],description:"An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.",example:"DEFAULT",nullable:!0,title:"LocaleOrigin"},mdxType:"SchemaItem"}),(0,l.kt)(c.Z,{collapsible:!1,name:"text",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Actual text of the error message in the indicated locale.",example:"The request was syntactically correct but its content is semantically invalid."},mdxType:"SchemaItem"}),(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,l.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,l.kt)("details",{style:{},className:"openapi-markdown__details"},(0,l.kt)("summary",{style:{}},(0,l.kt)("span",{className:"openapi-schema__container"},(0,l.kt)("strong",{className:"openapi-schema__property"},"causes"),(0,l.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,l.kt)("div",{style:{marginLeft:"1rem"}},(0,l.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,l.kt)("p",null,"Plain-text descriptive reasons to provide additional detail to the text provided in the messages field")),(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,l.kt)(c.Z,{collapsible:!1,name:"locale",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The locale for the message text, a BCP 47 language tag.",example:"en-US",nullable:!0},mdxType:"SchemaItem"}),(0,l.kt)(c.Z,{collapsible:!1,name:"localeOrigin",required:!1,schemaName:"LocaleOrigin",qualifierMessage:"**Possible values:** [`DEFAULT`, `REQUEST`, `null`]",schema:{type:"string",enum:["DEFAULT","REQUEST",null],description:"An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.",example:"DEFAULT",nullable:!0,title:"LocaleOrigin"},mdxType:"SchemaItem"}),(0,l.kt)(c.Z,{collapsible:!1,name:"text",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Actual text of the error message in the indicated locale.",example:"The request was syntactically correct but its content is semantically invalid."},mdxType:"SchemaItem"}),(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,l.kt)(d.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,l.kt)(o.Z,{responseExample:'{\n  "detailCode": "400.1 Bad Request Content",\n  "trackingId": "e7eab60924f64aa284175b9fa3309599",\n  "messages": [\n    {\n      "locale": "en-US",\n      "localeOrigin": "DEFAULT",\n      "text": "The request was syntactically correct but its content is semantically invalid."\n    }\n  ],\n  "causes": [\n    {\n      "locale": "en-US",\n      "localeOrigin": "DEFAULT",\n      "text": "The request was syntactically correct but its content is semantically invalid."\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"})),(0,l.kt)(d.default,{label:"500",value:"500",mdxType:"TabItem"},(0,l.kt)("p",null," An example of a 500 response object"),(0,l.kt)(o.Z,{responseExample:'{\n  "detailCode": "500.0 Internal Fault",\n  "trackingId": "b21b1f7ce4da4d639f2c62a57171b427",\n  "messages": [\n    {\n      "locale": "en-US",\n      "localeOrigin": "DEFAULT",\n      "text": "An internal fault occurred."\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}A.isMDXComponent=!0}}]);