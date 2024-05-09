"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[53082],{85407:(e,a)=>{function t(e,a){var t,l,i,s,n;return e.format?e.format:e.allOf?"string"==typeof e.allOf[0]&&e.allOf[0].includes("circular")?e.allOf[0]:"object":e.oneOf||e.anyOf?"object":"object"===e.type?null!=(l=null==(t=e.xml)?void 0:t.name)?l:e.type:"array"===e.type?null!=(s=null==(i=e.xml)?void 0:i.name)?s:e.type:null!=(n=e.title)?n:e.type}a.A4=a.uc=void 0,a.uc=function(e,a){var l;return e.items?t(e.items)+"[]":null!=(l=t(e))?l:""},a.A4=function e(a){if(!a)return;if(a.items&&void 0===a.minItems&&void 0===a.maxItems)return e(a.items);let t=[];if(a.items&&a.items.enum&&a.items.enum&&t.push(`[${a.items.enum.map((e=>`\`${e}\``)).join(", ")}]`),a.minLength||a.maxLength){let e,l,i="";a.minLength&&a.minLength>1&&(e=`\`>= ${a.minLength} characters\``),a.minLength&&1===a.minLength&&(e="`non-empty`"),a.maxLength&&(l=`\`<= ${a.maxLength} characters\``),e&&!l&&(i+=e),l&&!e&&(i+=l),e&&l&&(i+=`${e} and ${l}`),t.push(i)}if(a.minimum||a.maximum||"number"==typeof a.exclusiveMinimum||"number"==typeof a.exclusiveMaximum){let e,l,i="";"number"==typeof a.exclusiveMinimum?e=`\`> ${a.exclusiveMinimum}\``:a.minimum&&!a.exclusiveMinimum?e=`\`>= ${a.minimum}\``:a.minimum&&!0===a.exclusiveMinimum&&(e=`\`> ${a.minimum}\``),"number"==typeof a.exclusiveMaximum?l=`\`< ${a.exclusiveMaximum}\``:a.maximum&&!a.exclusiveMaximum?l=`\`<= ${a.maximum}\``:a.maximum&&!0===a.exclusiveMaximum&&(l=`\`< ${a.maximum}\``),e&&!l&&(i+=e),l&&!e&&(i+=l),e&&l&&(i+=`${e} and ${l}`),t.push(i)}a.pattern&&t.push(`Value must match regular expression \`${a.pattern}\``);const l=a;if(l.mapping){const e=Object.keys(l.mapping);t.push(`[${e.map((e=>`\`${e}\``)).join(", ")}]`)}return a.enum&&t.push(`[${a.enum.map((e=>`\`${e}\``)).join(", ")}]`),a.minItems&&t.push(`\`>= ${a.minItems}\``),a.maxItems&&t.push(`\`<= ${a.maxItems}\``),0!==t.length?"**Possible values:** "+t.join(", "):void 0}},34168:(e,a,t)=>{t.d(a,{Z:()=>g});var l=t(67294),i=t(58750),s=t(82479),n=t(62574),m=t(94693),r=t(85407),o=t(52347),c=t(25365),p=t(88453),d=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable;const g=function({param:{description:e,example:a,examples:t,name:g,required:y,schema:f}}){f&&(null==f?void 0:f.type)||(f={type:"any"});const k=(0,o.lo)(f,(e=>l.createElement("span",{className:"openapi-schema__type"}," ",(0,r.uc)(e)))),v=(0,o.lo)(y,(()=>l.createElement("span",{className:"openapi-schema__required"},"required"))),b=(0,o.lo)((0,r.A4)(f),(e=>l.createElement("div",null,l.createElement(c.D,{children:(0,m.T)(e),rehypePlugins:[p.Z]})))),T=(0,o.lo)(e,(e=>l.createElement("div",null,l.createElement(c.D,{children:(0,m.T)(e),components:{pre:"div",code(e){var a=e,{node:t,inline:s,className:n,children:m}=a;((e,a)=>{var t={};for(var l in e)u.call(e,l)&&a.indexOf(l)<0&&(t[l]=e[l]);if(null!=e&&d)for(var l of d(e))a.indexOf(l)<0&&h.call(e,l)&&(t[l]=e[l])})(a,["node","inline","className","children"]);const r=/language-(\w+)/.exec(n||"");return s?l.createElement("code",null,m):!s&&r?l.createElement(i.Z,{className:n},m):l.createElement(i.Z,null,m)}},rehypePlugins:[p.Z]})))),x=(0,o.lo)(f&&f.items?f.items.default:f?f.default:void 0,(e=>l.createElement("div",null,l.createElement(c.D,{children:`**Default value:** \`${e}\``})))),E=(0,o.lo)((0,o.toString)(a),(e=>l.createElement("div",null,l.createElement("strong",null,"Example: "),e))),q=(0,o.lo)(t,(e=>{const a=Object.entries(e);return l.createElement(l.Fragment,null,l.createElement("strong",null,"Examples:"),l.createElement(s.default,null,a.map((([e,a])=>l.createElement(n.default,{value:e,label:e},a.summary&&l.createElement("p",null,a.summary),a.description&&l.createElement("p",null,l.createElement("strong",null,"Description: "),l.createElement("span",null,a.description)),l.createElement("p",null,l.createElement("strong",null,"Example: "),l.createElement("code",null,a.value)))))))}));return l.createElement("div",{className:"openapi-params__list-item"},l.createElement("span",{className:"openapi-schema__container"},l.createElement("strong",{className:"openapi-schema__property"},g),k,y&&l.createElement("span",{className:"openapi-schema__divider"}),v),b,x,T,E,q)}},99028:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>N,contentTitle:()=>q,default:()=>w,frontMatter:()=>E,metadata:()=>S,toc:()=>I});var l=t(3905),i=t(68562),s=t(67001),n=t.n(s),m=t(98439),r=t(34168),o=t(3655),c=t(13503),p=t(82479),d=t(62574),u=Object.defineProperty,h=Object.defineProperties,g=Object.getOwnPropertyDescriptors,y=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,v=(e,a,t)=>a in e?u(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,b=(e,a)=>{for(var t in a||(a={}))f.call(a,t)&&v(e,t,a[t]);if(y)for(var t of y(a))k.call(a,t)&&v(e,t,a[t]);return e},T=(e,a)=>h(e,g(a)),x=(e,a)=>{var t={};for(var l in e)f.call(e,l)&&a.indexOf(l)<0&&(t[l]=e[l]);if(null!=e&&y)for(var l of y(e))a.indexOf(l)<0&&k.call(e,l)&&(t[l]=e[l]);return t};const E={id:"delete-managed-client",sidebar_label:"Delete a Managed Client",hide_title:!0,hide_table_of_contents:!0,api:"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",sidebar_class_name:"delete api-method",info_path:"docs/api/v3/identity-security-cloud-v-3-api",custom_edit_url:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Delete a Managed Client' (delete-managed-client)"},q=void 0,S={unversionedId:"api/v3/delete-managed-client",id:"api/v3/delete-managed-client",title:"delete-managed-client",description:"Delete a Managed Client",source:"@site/docs/api/v3/delete-managed-client.api.mdx",sourceDirName:"api/v3",slug:"/api/v3/delete-managed-client",permalink:"/docs/api/v3/delete-managed-client",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Delete a Managed Client' (delete-managed-client)",tags:[],version:"current",frontMatter:{id:"delete-managed-client",sidebar_label:"Delete a Managed Client",hide_title:!0,hide_table_of_contents:!0,api:"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",sidebar_class_name:"delete api-method",info_path:"docs/api/v3/identity-security-cloud-v-3-api",custom_edit_url:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Delete a Managed Client' (delete-managed-client)"},sidebar:"openApiSidebar",previous:{title:"Update a Managed Client",permalink:"/docs/api/v3/update-managed-client"},next:{title:"Get Managed Client Status.",permalink:"/docs/api/v3/get-managed-client-status"}},N={},I=[{value:"Request",id:"request",level:2}],L={toc:I},U="wrapper";function w(e){var a=e,{components:t}=a,s=x(a,["components"]);return(0,l.kt)(U,T(b(b({},L),s),{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{className:"openapi__heading"},"Delete a Managed Client"),(0,l.kt)(n(),{method:"delete",path:"/managed-clients/{id}",mdxType:"MethodEndpoint"}),(0,l.kt)("p",null,"Delete an existing Managed Client."),(0,l.kt)("h2",b({},{id:"request"}),"Request"),(0,l.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{}},(0,l.kt)("h3",{className:"openapi-markdown__details-summary-header-params"},"Path Parameters")),(0,l.kt)("div",null,(0,l.kt)("ul",null,(0,l.kt)(r.Z,{className:"paramsItem",param:{in:"path",name:"id",schema:{type:"string"},required:!0,description:"The Managed Client ID",example:"aClientId"},mdxType:"ParamsItem"})))),(0,l.kt)("div",null,(0,l.kt)("div",null,(0,l.kt)(i.Z,{mdxType:"ApiTabs"},(0,l.kt)(d.default,{label:"204",value:"204",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("p",null,"No content - indicates the request was successful but there is no content to be returned in the response.")),(0,l.kt)("div",null)),(0,l.kt)(d.default,{label:"400",value:"400",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("p",null,"Client Error - Returned if the request body is invalid.")),(0,l.kt)("div",null,(0,l.kt)(m.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,l.kt)(d.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,l.kt)(p.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,l.kt)(d.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,l.kt)("strong",null,"Schema")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)(c.Z,{collapsible:!1,name:"detailCode",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Fine-grained error code providing more detail of the error.",example:"400.1 Bad Request Content"},mdxType:"SchemaItem"}),(0,l.kt)(c.Z,{collapsible:!1,name:"trackingId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Unique tracking id for the error.",example:"e7eab60924f64aa284175b9fa3309599"},mdxType:"SchemaItem"}),(0,l.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,l.kt)("details",{style:{},className:"openapi-markdown__details"},(0,l.kt)("summary",{style:{}},(0,l.kt)("span",{className:"openapi-schema__container"},(0,l.kt)("strong",{className:"openapi-schema__property"},"messages"),(0,l.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,l.kt)("div",{style:{marginLeft:"1rem"}},(0,l.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,l.kt)("p",null,"Generic localized reason for error")),(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,l.kt)(c.Z,{collapsible:!1,name:"locale",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The locale for the message text, a BCP 47 language tag.",example:"en-US",nullable:!0},mdxType:"SchemaItem"}),(0,l.kt)(c.Z,{collapsible:!1,name:"localeOrigin",required:!1,schemaName:"LocaleOrigin",qualifierMessage:"**Possible values:** [`DEFAULT`, `REQUEST`, `null`]",schema:{type:"string",enum:["DEFAULT","REQUEST",null],description:"An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.",example:"DEFAULT",nullable:!0,title:"LocaleOrigin"},mdxType:"SchemaItem"}),(0,l.kt)(c.Z,{collapsible:!1,name:"text",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Actual text of the error message in the indicated locale.",example:"The request was syntactically correct but its content is semantically invalid."},mdxType:"SchemaItem"}),(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,l.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,l.kt)("details",{style:{},className:"openapi-markdown__details"},(0,l.kt)("summary",{style:{}},(0,l.kt)("span",{className:"openapi-schema__container"},(0,l.kt)("strong",{className:"openapi-schema__property"},"causes"),(0,l.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,l.kt)("div",{style:{marginLeft:"1rem"}},(0,l.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,l.kt)("p",null,"Plain-text descriptive reasons to provide additional detail to the text provided in the messages field")),(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,l.kt)(c.Z,{collapsible:!1,name:"locale",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The locale for the message text, a BCP 47 language tag.",example:"en-US",nullable:!0},mdxType:"SchemaItem"}),(0,l.kt)(c.Z,{collapsible:!1,name:"localeOrigin",required:!1,schemaName:"LocaleOrigin",qualifierMessage:"**Possible values:** [`DEFAULT`, `REQUEST`, `null`]",schema:{type:"string",enum:["DEFAULT","REQUEST",null],description:"An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.",example:"DEFAULT",nullable:!0,title:"LocaleOrigin"},mdxType:"SchemaItem"}),(0,l.kt)(c.Z,{collapsible:!1,name:"text",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Actual text of the error message in the indicated locale.",example:"The request was syntactically correct but its content is semantically invalid."},mdxType:"SchemaItem"}),(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,l.kt)(d.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,l.kt)(o.Z,{responseExample:'{\n  "detailCode": "400.1 Bad Request Content",\n  "trackingId": "e7eab60924f64aa284175b9fa3309599",\n  "messages": [\n    {\n      "locale": "en-US",\n      "localeOrigin": "DEFAULT",\n      "text": "The request was syntactically correct but its content is semantically invalid."\n    }\n  ],\n  "causes": [\n    {\n      "locale": "en-US",\n      "localeOrigin": "DEFAULT",\n      "text": "The request was syntactically correct but its content is semantically invalid."\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,l.kt)(d.default,{label:"401",value:"401",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("p",null,"Unauthorized - Returned if there is no authorization header, or if the JWT token is expired.")),(0,l.kt)("div",null,(0,l.kt)(m.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,l.kt)(d.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,l.kt)(p.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,l.kt)(d.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,l.kt)("strong",null,"Schema")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)(c.Z,{collapsible:!1,name:"error",required:!1,schemaName:"",qualifierMessage:void 0,schema:{description:"A message describing the error",example:"JWT validation failed: JWT is expired"},mdxType:"SchemaItem"})))),(0,l.kt)(d.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,l.kt)(o.Z,{responseExample:'{\n  "error": "JWT validation failed: JWT is expired"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,l.kt)(d.default,{label:"403",value:"403",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("p",null,"Forbidden - Returned if the user you are running as, doesn't have access to this end-point.")),(0,l.kt)("div",null,(0,l.kt)(m.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,l.kt)(d.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,l.kt)(p.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,l.kt)(d.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,l.kt)("strong",null,"Schema")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)(c.Z,{collapsible:!1,name:"detailCode",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Fine-grained error code providing more detail of the error.",example:"400.1 Bad Request Content"},mdxType:"SchemaItem"}),(0,l.kt)(c.Z,{collapsible:!1,name:"trackingId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Unique tracking id for the error.",example:"e7eab60924f64aa284175b9fa3309599"},mdxType:"SchemaItem"}),(0,l.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,l.kt)("details",{style:{},className:"openapi-markdown__details"},(0,l.kt)("summary",{style:{}},(0,l.kt)("span",{className:"openapi-schema__container"},(0,l.kt)("strong",{className:"openapi-schema__property"},"messages"),(0,l.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,l.kt)("div",{style:{marginLeft:"1rem"}},(0,l.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,l.kt)("p",null,"Generic localized reason for error")),(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,l.kt)(c.Z,{collapsible:!1,name:"locale",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The locale for the message text, a BCP 47 language tag.",example:"en-US",nullable:!0},mdxType:"SchemaItem"}),(0,l.kt)(c.Z,{collapsible:!1,name:"localeOrigin",required:!1,schemaName:"LocaleOrigin",qualifierMessage:"**Possible values:** [`DEFAULT`, `REQUEST`, `null`]",schema:{type:"string",enum:["DEFAULT","REQUEST",null],description:"An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.",example:"DEFAULT",nullable:!0,title:"LocaleOrigin"},mdxType:"SchemaItem"}),(0,l.kt)(c.Z,{collapsible:!1,name:"text",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Actual text of the error message in the indicated locale.",example:"The request was syntactically correct but its content is semantically invalid."},mdxType:"SchemaItem"}),(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,l.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,l.kt)("details",{style:{},className:"openapi-markdown__details"},(0,l.kt)("summary",{style:{}},(0,l.kt)("span",{className:"openapi-schema__container"},(0,l.kt)("strong",{className:"openapi-schema__property"},"causes"),(0,l.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,l.kt)("div",{style:{marginLeft:"1rem"}},(0,l.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,l.kt)("p",null,"Plain-text descriptive reasons to provide additional detail to the text provided in the messages field")),(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,l.kt)(c.Z,{collapsible:!1,name:"locale",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The locale for the message text, a BCP 47 language tag.",example:"en-US",nullable:!0},mdxType:"SchemaItem"}),(0,l.kt)(c.Z,{collapsible:!1,name:"localeOrigin",required:!1,schemaName:"LocaleOrigin",qualifierMessage:"**Possible values:** [`DEFAULT`, `REQUEST`, `null`]",schema:{type:"string",enum:["DEFAULT","REQUEST",null],description:"An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.",example:"DEFAULT",nullable:!0,title:"LocaleOrigin"},mdxType:"SchemaItem"}),(0,l.kt)(c.Z,{collapsible:!1,name:"text",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Actual text of the error message in the indicated locale.",example:"The request was syntactically correct but its content is semantically invalid."},mdxType:"SchemaItem"}),(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,l.kt)(d.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,l.kt)(o.Z,{responseExample:'{\n  "detailCode": "400.1 Bad Request Content",\n  "trackingId": "e7eab60924f64aa284175b9fa3309599",\n  "messages": [\n    {\n      "locale": "en-US",\n      "localeOrigin": "DEFAULT",\n      "text": "The request was syntactically correct but its content is semantically invalid."\n    }\n  ],\n  "causes": [\n    {\n      "locale": "en-US",\n      "localeOrigin": "DEFAULT",\n      "text": "The request was syntactically correct but its content is semantically invalid."\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"})),(0,l.kt)(d.default,{label:"403",value:"403",mdxType:"TabItem"},(0,l.kt)("p",null," An example of a 403 response object"),(0,l.kt)(o.Z,{responseExample:'{\n  "detailCode": "403 Forbidden",\n  "trackingId": "b21b1f7ce4da4d639f2c62a57171b427",\n  "messages": [\n    {\n      "locale": "en-US",\n      "localeOrigin": "DEFAULT",\n      "text": "The server understood the request but refuses to authorize it."\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,l.kt)(d.default,{label:"429",value:"429",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("p",null,"Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again.")),(0,l.kt)("div",null,(0,l.kt)(m.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,l.kt)(d.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,l.kt)(p.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,l.kt)(d.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,l.kt)("strong",null,"Schema")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)(c.Z,{collapsible:!1,name:"message",required:!1,schemaName:"",qualifierMessage:void 0,schema:{description:"A message describing the error",example:" Rate Limit Exceeded "},mdxType:"SchemaItem"})))),(0,l.kt)(d.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,l.kt)(o.Z,{responseExample:'{\n  "message": " Rate Limit Exceeded "\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,l.kt)(d.default,{label:"500",value:"500",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("p",null,"Internal Server Error - Returned if there is an unexpected error.")),(0,l.kt)("div",null,(0,l.kt)(m.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,l.kt)(d.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,l.kt)(p.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,l.kt)(d.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,l.kt)("strong",null,"Schema")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)(c.Z,{collapsible:!1,name:"detailCode",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Fine-grained error code providing more detail of the error.",example:"400.1 Bad Request Content"},mdxType:"SchemaItem"}),(0,l.kt)(c.Z,{collapsible:!1,name:"trackingId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Unique tracking id for the error.",example:"e7eab60924f64aa284175b9fa3309599"},mdxType:"SchemaItem"}),(0,l.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,l.kt)("details",{style:{},className:"openapi-markdown__details"},(0,l.kt)("summary",{style:{}},(0,l.kt)("span",{className:"openapi-schema__container"},(0,l.kt)("strong",{className:"openapi-schema__property"},"messages"),(0,l.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,l.kt)("div",{style:{marginLeft:"1rem"}},(0,l.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,l.kt)("p",null,"Generic localized reason for error")),(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,l.kt)(c.Z,{collapsible:!1,name:"locale",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The locale for the message text, a BCP 47 language tag.",example:"en-US",nullable:!0},mdxType:"SchemaItem"}),(0,l.kt)(c.Z,{collapsible:!1,name:"localeOrigin",required:!1,schemaName:"LocaleOrigin",qualifierMessage:"**Possible values:** [`DEFAULT`, `REQUEST`, `null`]",schema:{type:"string",enum:["DEFAULT","REQUEST",null],description:"An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.",example:"DEFAULT",nullable:!0,title:"LocaleOrigin"},mdxType:"SchemaItem"}),(0,l.kt)(c.Z,{collapsible:!1,name:"text",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Actual text of the error message in the indicated locale.",example:"The request was syntactically correct but its content is semantically invalid."},mdxType:"SchemaItem"}),(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,l.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,l.kt)("details",{style:{},className:"openapi-markdown__details"},(0,l.kt)("summary",{style:{}},(0,l.kt)("span",{className:"openapi-schema__container"},(0,l.kt)("strong",{className:"openapi-schema__property"},"causes"),(0,l.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,l.kt)("div",{style:{marginLeft:"1rem"}},(0,l.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,l.kt)("p",null,"Plain-text descriptive reasons to provide additional detail to the text provided in the messages field")),(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,l.kt)(c.Z,{collapsible:!1,name:"locale",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The locale for the message text, a BCP 47 language tag.",example:"en-US",nullable:!0},mdxType:"SchemaItem"}),(0,l.kt)(c.Z,{collapsible:!1,name:"localeOrigin",required:!1,schemaName:"LocaleOrigin",qualifierMessage:"**Possible values:** [`DEFAULT`, `REQUEST`, `null`]",schema:{type:"string",enum:["DEFAULT","REQUEST",null],description:"An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.",example:"DEFAULT",nullable:!0,title:"LocaleOrigin"},mdxType:"SchemaItem"}),(0,l.kt)(c.Z,{collapsible:!1,name:"text",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Actual text of the error message in the indicated locale.",example:"The request was syntactically correct but its content is semantically invalid."},mdxType:"SchemaItem"}),(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,l.kt)(d.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,l.kt)(o.Z,{responseExample:'{\n  "detailCode": "400.1 Bad Request Content",\n  "trackingId": "e7eab60924f64aa284175b9fa3309599",\n  "messages": [\n    {\n      "locale": "en-US",\n      "localeOrigin": "DEFAULT",\n      "text": "The request was syntactically correct but its content is semantically invalid."\n    }\n  ],\n  "causes": [\n    {\n      "locale": "en-US",\n      "localeOrigin": "DEFAULT",\n      "text": "The request was syntactically correct but its content is semantically invalid."\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"})),(0,l.kt)(d.default,{label:"500",value:"500",mdxType:"TabItem"},(0,l.kt)("p",null," An example of a 500 response object"),(0,l.kt)(o.Z,{responseExample:'{\n  "detailCode": "500.0 Internal Fault",\n  "trackingId": "b21b1f7ce4da4d639f2c62a57171b427",\n  "messages": [\n    {\n      "locale": "en-US",\n      "localeOrigin": "DEFAULT",\n      "text": "An internal fault occurred."\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}w.isMDXComponent=!0}}]);