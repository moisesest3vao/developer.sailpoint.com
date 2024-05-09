"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[89515],{85407:(e,a)=>{function t(e,a){var t,s,l,i,n;return e.format?e.format:e.allOf?"string"==typeof e.allOf[0]&&e.allOf[0].includes("circular")?e.allOf[0]:"object":e.oneOf||e.anyOf?"object":"object"===e.type?null!=(s=null==(t=e.xml)?void 0:t.name)?s:e.type:"array"===e.type?null!=(i=null==(l=e.xml)?void 0:l.name)?i:e.type:null!=(n=e.title)?n:e.type}a.A4=a.uc=void 0,a.uc=function(e,a){var s;return e.items?t(e.items)+"[]":null!=(s=t(e))?s:""},a.A4=function e(a){if(!a)return;if(a.items&&void 0===a.minItems&&void 0===a.maxItems)return e(a.items);let t=[];if(a.items&&a.items.enum&&a.items.enum&&t.push(`[${a.items.enum.map((e=>`\`${e}\``)).join(", ")}]`),a.minLength||a.maxLength){let e,s,l="";a.minLength&&a.minLength>1&&(e=`\`>= ${a.minLength} characters\``),a.minLength&&1===a.minLength&&(e="`non-empty`"),a.maxLength&&(s=`\`<= ${a.maxLength} characters\``),e&&!s&&(l+=e),s&&!e&&(l+=s),e&&s&&(l+=`${e} and ${s}`),t.push(l)}if(a.minimum||a.maximum||"number"==typeof a.exclusiveMinimum||"number"==typeof a.exclusiveMaximum){let e,s,l="";"number"==typeof a.exclusiveMinimum?e=`\`> ${a.exclusiveMinimum}\``:a.minimum&&!a.exclusiveMinimum?e=`\`>= ${a.minimum}\``:a.minimum&&!0===a.exclusiveMinimum&&(e=`\`> ${a.minimum}\``),"number"==typeof a.exclusiveMaximum?s=`\`< ${a.exclusiveMaximum}\``:a.maximum&&!a.exclusiveMaximum?s=`\`<= ${a.maximum}\``:a.maximum&&!0===a.exclusiveMaximum&&(s=`\`< ${a.maximum}\``),e&&!s&&(l+=e),s&&!e&&(l+=s),e&&s&&(l+=`${e} and ${s}`),t.push(l)}a.pattern&&t.push(`Value must match regular expression \`${a.pattern}\``);const s=a;if(s.mapping){const e=Object.keys(s.mapping);t.push(`[${e.map((e=>`\`${e}\``)).join(", ")}]`)}return a.enum&&t.push(`[${a.enum.map((e=>`\`${e}\``)).join(", ")}]`),a.minItems&&t.push(`\`>= ${a.minItems}\``),a.maxItems&&t.push(`\`<= ${a.maxItems}\``),0!==t.length?"**Possible values:** "+t.join(", "):void 0}},34168:(e,a,t)=>{t.d(a,{Z:()=>g});var s=t(67294),l=t(58750),i=t(82479),n=t(62574),m=t(94693),r=t(85407),o=t(52347),c=t(25365),p=t(88453),d=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable;const g=function({param:{description:e,example:a,examples:t,name:g,required:y,schema:b}}){b&&(null==b?void 0:b.type)||(b={type:"any"});const f=(0,o.lo)(b,(e=>s.createElement("span",{className:"openapi-schema__type"}," ",(0,r.uc)(e)))),x=(0,o.lo)(y,(()=>s.createElement("span",{className:"openapi-schema__required"},"required"))),k=(0,o.lo)((0,r.A4)(b),(e=>s.createElement("div",null,s.createElement(c.D,{children:(0,m.T)(e),rehypePlugins:[p.Z]})))),T=(0,o.lo)(e,(e=>s.createElement("div",null,s.createElement(c.D,{children:(0,m.T)(e),components:{pre:"div",code(e){var a=e,{node:t,inline:i,className:n,children:m}=a;((e,a)=>{var t={};for(var s in e)u.call(e,s)&&a.indexOf(s)<0&&(t[s]=e[s]);if(null!=e&&d)for(var s of d(e))a.indexOf(s)<0&&h.call(e,s)&&(t[s]=e[s])})(a,["node","inline","className","children"]);const r=/language-(\w+)/.exec(n||"");return i?s.createElement("code",null,m):!i&&r?s.createElement(l.Z,{className:n},m):s.createElement(l.Z,null,m)}},rehypePlugins:[p.Z]})))),v=(0,o.lo)(b&&b.items?b.items.default:b?b.default:void 0,(e=>s.createElement("div",null,s.createElement(c.D,{children:`**Default value:** \`${e}\``})))),E=(0,o.lo)((0,o.toString)(a),(e=>s.createElement("div",null,s.createElement("strong",null,"Example: "),e))),L=(0,o.lo)(t,(e=>{const a=Object.entries(e);return s.createElement(s.Fragment,null,s.createElement("strong",null,"Examples:"),s.createElement(i.default,null,a.map((([e,a])=>s.createElement(n.default,{value:e,label:e},a.summary&&s.createElement("p",null,a.summary),a.description&&s.createElement("p",null,s.createElement("strong",null,"Description: "),s.createElement("span",null,a.description)),s.createElement("p",null,s.createElement("strong",null,"Example: "),s.createElement("code",null,a.value)))))))}));return s.createElement("div",{className:"openapi-params__list-item"},s.createElement("span",{className:"openapi-schema__container"},s.createElement("strong",{className:"openapi-schema__property"},g),f,y&&s.createElement("span",{className:"openapi-schema__divider"}),x),k,v,T,E,L)}},24719:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>I,contentTitle:()=>L,default:()=>w,frontMatter:()=>E,metadata:()=>S,toc:()=>q});var s=t(3905),l=t(68562),i=t(67001),n=t.n(i),m=t(98439),r=t(34168),o=t(3655),c=t(13503),p=t(82479),d=t(62574),u=Object.defineProperty,h=Object.defineProperties,g=Object.getOwnPropertyDescriptors,y=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,x=(e,a,t)=>a in e?u(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,k=(e,a)=>{for(var t in a||(a={}))b.call(a,t)&&x(e,t,a[t]);if(y)for(var t of y(a))f.call(a,t)&&x(e,t,a[t]);return e},T=(e,a)=>h(e,g(a)),v=(e,a)=>{var t={};for(var s in e)b.call(e,s)&&a.indexOf(s)<0&&(t[s]=e[s]);if(null!=e&&y)for(var s of y(e))a.indexOf(s)<0&&f.call(e,s)&&(t[s]=e[s]);return t};const E={id:"export-outliers-zip",sidebar_label:"IAI Identity Outliers Export",hide_title:!0,hide_table_of_contents:!0,api:"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",sidebar_class_name:"get api-method",info_path:"docs/api/beta/identity-security-cloud-beta-api",custom_edit_url:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'IAI Identity Outliers Export' (export-outliers-zip)"},L=void 0,S={unversionedId:"api/beta/export-outliers-zip",id:"api/beta/export-outliers-zip",title:"export-outliers-zip",description:"IAI Identity Outliers Export",source:"@site/docs/api/beta/export-outliers-zip.api.mdx",sourceDirName:"api/beta",slug:"/api/beta/export-outliers-zip",permalink:"/docs/api/beta/export-outliers-zip",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'IAI Identity Outliers Export' (export-outliers-zip)",tags:[],version:"current",frontMatter:{id:"export-outliers-zip",sidebar_label:"IAI Identity Outliers Export",hide_title:!0,hide_table_of_contents:!0,api:"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",sidebar_class_name:"get api-method",info_path:"docs/api/beta/identity-security-cloud-beta-api",custom_edit_url:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'IAI Identity Outliers Export' (export-outliers-zip)"},sidebar:"openApiSidebar",previous:{title:"IAI Identity Outliers Unignore",permalink:"/docs/api/beta/un-ignore-identity-outliers"},next:{title:"Get identity outlier contibuting feature summary",permalink:"/docs/api/beta/get-outlier-contributing-feature-summary"}},I={},q=[{value:"Request",id:"request",level:2}],N={toc:q},F="wrapper";function w(e){var a=e,{components:t}=a,i=v(a,["components"]);return(0,s.kt)(F,T(k(k({},N),i),{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{className:"openapi__heading"},"IAI Identity Outliers Export"),(0,s.kt)(n(),{method:"get",path:"/outliers/export",mdxType:"MethodEndpoint"}),(0,s.kt)("p",null,"This API exports a list of ignored outliers to a CSV as well as list of non-ignored outliers to a CSV. These two CSVs will be zipped and exported Columns will include: identityID, type, firstDetectionDate, latestDetectionDate, ignored, & attributes (defined set of identity attributes)\nRequires authorization scope of 'iai:outliers-management:read'"),(0,s.kt)("h2",k({},{id:"request"}),"Request"),(0,s.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("h3",{className:"openapi-markdown__details-summary-header-params"},"Query Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(r.Z,{className:"paramsItem",param:{name:"type",in:"query",description:"Type of the identity outliers snapshot to filter on",required:!1,schema:{type:"string",enum:["LOW_SIMILARITY","STRUCTURAL"]}},mdxType:"ParamsItem"})))),(0,s.kt)("div",null,(0,s.kt)("div",null,(0,s.kt)(l.Z,{mdxType:"ApiTabs"},(0,s.kt)(d.default,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Succeeded. Returns zip of 2 CSVs to download. 1 CSV for ignored outliers and 1 for non-ignored outliers")),(0,s.kt)("div",null,(0,s.kt)(m.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(d.default,{label:"application/zip",value:"application/zip",mdxType:"TabItem"},(0,s.kt)(p.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,s.kt)(d.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem",marginLeft:"1rem"}},(0,s.kt)("p",null,"string")))))))))),(0,s.kt)(d.default,{label:"400",value:"400",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Client Error - Returned if the request body is invalid.")),(0,s.kt)("div",null,(0,s.kt)(m.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(d.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(p.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,s.kt)(d.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(c.Z,{collapsible:!1,name:"detailCode",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Fine-grained error code providing more detail of the error.",example:"400.1 Bad Request Content"},mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"trackingId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Unique tracking id for the error.",example:"e7eab60924f64aa284175b9fa3309599"},mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("span",{className:"openapi-schema__container"},(0,s.kt)("strong",{className:"openapi-schema__property"},"messages"),(0,s.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"Generic localized reason for error")),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)(c.Z,{collapsible:!1,name:"locale",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The locale for the message text, a BCP 47 language tag.",example:"en-US",nullable:!0},mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"localeOrigin",required:!1,schemaName:"LocaleOrigin",qualifierMessage:"**Possible values:** [`DEFAULT`, `REQUEST`, `null`]",schema:{type:"string",enum:["DEFAULT","REQUEST",null],description:"An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.",example:"DEFAULT",nullable:!0,title:"LocaleOrigin"},mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"text",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Actual text of the error message in the indicated locale.",example:"The request was syntactically correct but its content is semantically invalid."},mdxType:"SchemaItem"}),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,s.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("span",{className:"openapi-schema__container"},(0,s.kt)("strong",{className:"openapi-schema__property"},"causes"),(0,s.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"Plain-text descriptive reasons to provide additional detail to the text provided in the messages field")),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)(c.Z,{collapsible:!1,name:"locale",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The locale for the message text, a BCP 47 language tag.",example:"en-US",nullable:!0},mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"localeOrigin",required:!1,schemaName:"LocaleOrigin",qualifierMessage:"**Possible values:** [`DEFAULT`, `REQUEST`, `null`]",schema:{type:"string",enum:["DEFAULT","REQUEST",null],description:"An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.",example:"DEFAULT",nullable:!0,title:"LocaleOrigin"},mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"text",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Actual text of the error message in the indicated locale.",example:"The request was syntactically correct but its content is semantically invalid."},mdxType:"SchemaItem"}),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,s.kt)(d.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(o.Z,{responseExample:'{\n  "detailCode": "400.1 Bad Request Content",\n  "trackingId": "e7eab60924f64aa284175b9fa3309599",\n  "messages": [\n    {\n      "locale": "en-US",\n      "localeOrigin": "DEFAULT",\n      "text": "The request was syntactically correct but its content is semantically invalid."\n    }\n  ],\n  "causes": [\n    {\n      "locale": "en-US",\n      "localeOrigin": "DEFAULT",\n      "text": "The request was syntactically correct but its content is semantically invalid."\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(d.default,{label:"401",value:"401",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Unauthorized - Returned if there is no authorization header, or if the JWT token is expired.")),(0,s.kt)("div",null,(0,s.kt)(m.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(d.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(p.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,s.kt)(d.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(c.Z,{collapsible:!1,name:"error",required:!1,schemaName:"",qualifierMessage:void 0,schema:{description:"A message describing the error",example:"JWT validation failed: JWT is expired"},mdxType:"SchemaItem"})))),(0,s.kt)(d.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(o.Z,{responseExample:'{\n  "error": "JWT validation failed: JWT is expired"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(d.default,{label:"403",value:"403",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Forbidden - Returned if the user you are running as, doesn't have access to this end-point.")),(0,s.kt)("div",null,(0,s.kt)(m.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(d.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(p.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,s.kt)(d.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(c.Z,{collapsible:!1,name:"detailCode",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Fine-grained error code providing more detail of the error.",example:"400.1 Bad Request Content"},mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"trackingId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Unique tracking id for the error.",example:"e7eab60924f64aa284175b9fa3309599"},mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("span",{className:"openapi-schema__container"},(0,s.kt)("strong",{className:"openapi-schema__property"},"messages"),(0,s.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"Generic localized reason for error")),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)(c.Z,{collapsible:!1,name:"locale",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The locale for the message text, a BCP 47 language tag.",example:"en-US",nullable:!0},mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"localeOrigin",required:!1,schemaName:"LocaleOrigin",qualifierMessage:"**Possible values:** [`DEFAULT`, `REQUEST`, `null`]",schema:{type:"string",enum:["DEFAULT","REQUEST",null],description:"An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.",example:"DEFAULT",nullable:!0,title:"LocaleOrigin"},mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"text",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Actual text of the error message in the indicated locale.",example:"The request was syntactically correct but its content is semantically invalid."},mdxType:"SchemaItem"}),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,s.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("span",{className:"openapi-schema__container"},(0,s.kt)("strong",{className:"openapi-schema__property"},"causes"),(0,s.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"Plain-text descriptive reasons to provide additional detail to the text provided in the messages field")),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)(c.Z,{collapsible:!1,name:"locale",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The locale for the message text, a BCP 47 language tag.",example:"en-US",nullable:!0},mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"localeOrigin",required:!1,schemaName:"LocaleOrigin",qualifierMessage:"**Possible values:** [`DEFAULT`, `REQUEST`, `null`]",schema:{type:"string",enum:["DEFAULT","REQUEST",null],description:"An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.",example:"DEFAULT",nullable:!0,title:"LocaleOrigin"},mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"text",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Actual text of the error message in the indicated locale.",example:"The request was syntactically correct but its content is semantically invalid."},mdxType:"SchemaItem"}),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,s.kt)(d.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(o.Z,{responseExample:'{\n  "detailCode": "400.1 Bad Request Content",\n  "trackingId": "e7eab60924f64aa284175b9fa3309599",\n  "messages": [\n    {\n      "locale": "en-US",\n      "localeOrigin": "DEFAULT",\n      "text": "The request was syntactically correct but its content is semantically invalid."\n    }\n  ],\n  "causes": [\n    {\n      "locale": "en-US",\n      "localeOrigin": "DEFAULT",\n      "text": "The request was syntactically correct but its content is semantically invalid."\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"})),(0,s.kt)(d.default,{label:"403",value:"403",mdxType:"TabItem"},(0,s.kt)("p",null," An example of a 403 response object"),(0,s.kt)(o.Z,{responseExample:'{\n  "detailCode": "403 Forbidden",\n  "trackingId": "b21b1f7ce4da4d639f2c62a57171b427",\n  "messages": [\n    {\n      "locale": "en-US",\n      "localeOrigin": "DEFAULT",\n      "text": "The server understood the request but refuses to authorize it."\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(d.default,{label:"429",value:"429",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again.")),(0,s.kt)("div",null,(0,s.kt)(m.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(d.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(p.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,s.kt)(d.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(c.Z,{collapsible:!1,name:"message",required:!1,schemaName:"",qualifierMessage:void 0,schema:{description:"A message describing the error",example:" Rate Limit Exceeded "},mdxType:"SchemaItem"})))),(0,s.kt)(d.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(o.Z,{responseExample:'{\n  "message": " Rate Limit Exceeded "\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(d.default,{label:"500",value:"500",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Internal Server Error - Returned if there is an unexpected error.")),(0,s.kt)("div",null,(0,s.kt)(m.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(d.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(p.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,s.kt)(d.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(c.Z,{collapsible:!1,name:"detailCode",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Fine-grained error code providing more detail of the error.",example:"400.1 Bad Request Content"},mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"trackingId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Unique tracking id for the error.",example:"e7eab60924f64aa284175b9fa3309599"},mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("span",{className:"openapi-schema__container"},(0,s.kt)("strong",{className:"openapi-schema__property"},"messages"),(0,s.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"Generic localized reason for error")),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)(c.Z,{collapsible:!1,name:"locale",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The locale for the message text, a BCP 47 language tag.",example:"en-US",nullable:!0},mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"localeOrigin",required:!1,schemaName:"LocaleOrigin",qualifierMessage:"**Possible values:** [`DEFAULT`, `REQUEST`, `null`]",schema:{type:"string",enum:["DEFAULT","REQUEST",null],description:"An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.",example:"DEFAULT",nullable:!0,title:"LocaleOrigin"},mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"text",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Actual text of the error message in the indicated locale.",example:"The request was syntactically correct but its content is semantically invalid."},mdxType:"SchemaItem"}),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,s.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("span",{className:"openapi-schema__container"},(0,s.kt)("strong",{className:"openapi-schema__property"},"causes"),(0,s.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"Plain-text descriptive reasons to provide additional detail to the text provided in the messages field")),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)(c.Z,{collapsible:!1,name:"locale",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The locale for the message text, a BCP 47 language tag.",example:"en-US",nullable:!0},mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"localeOrigin",required:!1,schemaName:"LocaleOrigin",qualifierMessage:"**Possible values:** [`DEFAULT`, `REQUEST`, `null`]",schema:{type:"string",enum:["DEFAULT","REQUEST",null],description:"An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.",example:"DEFAULT",nullable:!0,title:"LocaleOrigin"},mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"text",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Actual text of the error message in the indicated locale.",example:"The request was syntactically correct but its content is semantically invalid."},mdxType:"SchemaItem"}),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,s.kt)(d.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(o.Z,{responseExample:'{\n  "detailCode": "400.1 Bad Request Content",\n  "trackingId": "e7eab60924f64aa284175b9fa3309599",\n  "messages": [\n    {\n      "locale": "en-US",\n      "localeOrigin": "DEFAULT",\n      "text": "The request was syntactically correct but its content is semantically invalid."\n    }\n  ],\n  "causes": [\n    {\n      "locale": "en-US",\n      "localeOrigin": "DEFAULT",\n      "text": "The request was syntactically correct but its content is semantically invalid."\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"})),(0,s.kt)(d.default,{label:"500",value:"500",mdxType:"TabItem"},(0,s.kt)("p",null," An example of a 500 response object"),(0,s.kt)(o.Z,{responseExample:'{\n  "detailCode": "500.0 Internal Fault",\n  "trackingId": "b21b1f7ce4da4d639f2c62a57171b427",\n  "messages": [\n    {\n      "locale": "en-US",\n      "localeOrigin": "DEFAULT",\n      "text": "An internal fault occurred."\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}w.isMDXComponent=!0}}]);