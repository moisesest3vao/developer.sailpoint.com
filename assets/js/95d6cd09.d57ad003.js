"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[90488],{85407:(e,a)=>{function t(e,a){var t,l,r,i,m;return e.format?e.format:e.allOf?"string"==typeof e.allOf[0]&&e.allOf[0].includes("circular")?e.allOf[0]:"object":e.oneOf||e.anyOf?"object":"object"===e.type?null!=(l=null==(t=e.xml)?void 0:t.name)?l:e.type:"array"===e.type?null!=(i=null==(r=e.xml)?void 0:r.name)?i:e.type:null!=(m=e.title)?m:e.type}a.A4=a.uc=void 0,a.uc=function(e,a){var l;return e.items?t(e.items)+"[]":null!=(l=t(e))?l:""},a.A4=function e(a){if(!a)return;if(a.items&&void 0===a.minItems&&void 0===a.maxItems)return e(a.items);let t=[];if(a.items&&a.items.enum&&a.items.enum&&t.push(`[${a.items.enum.map((e=>`\`${e}\``)).join(", ")}]`),a.minLength||a.maxLength){let e,l,r="";a.minLength&&a.minLength>1&&(e=`\`>= ${a.minLength} characters\``),a.minLength&&1===a.minLength&&(e="`non-empty`"),a.maxLength&&(l=`\`<= ${a.maxLength} characters\``),e&&!l&&(r+=e),l&&!e&&(r+=l),e&&l&&(r+=`${e} and ${l}`),t.push(r)}if(a.minimum||a.maximum||"number"==typeof a.exclusiveMinimum||"number"==typeof a.exclusiveMaximum){let e,l,r="";"number"==typeof a.exclusiveMinimum?e=`\`> ${a.exclusiveMinimum}\``:a.minimum&&!a.exclusiveMinimum?e=`\`>= ${a.minimum}\``:a.minimum&&!0===a.exclusiveMinimum&&(e=`\`> ${a.minimum}\``),"number"==typeof a.exclusiveMaximum?l=`\`< ${a.exclusiveMaximum}\``:a.maximum&&!a.exclusiveMaximum?l=`\`<= ${a.maximum}\``:a.maximum&&!0===a.exclusiveMaximum&&(l=`\`< ${a.maximum}\``),e&&!l&&(r+=e),l&&!e&&(r+=l),e&&l&&(r+=`${e} and ${l}`),t.push(r)}a.pattern&&t.push(`Value must match regular expression \`${a.pattern}\``);const l=a;if(l.mapping){const e=Object.keys(l.mapping);t.push(`[${e.map((e=>`\`${e}\``)).join(", ")}]`)}return a.enum&&t.push(`[${a.enum.map((e=>`\`${e}\``)).join(", ")}]`),a.minItems&&t.push(`\`>= ${a.minItems}\``),a.maxItems&&t.push(`\`<= ${a.maxItems}\``),0!==t.length?"**Possible values:** "+t.join(", "):void 0}},34168:(e,a,t)=>{t.d(a,{Z:()=>h});var l=t(67294),r=t(58750),i=t(82479),m=t(62574),s=t(94693),n=t(85407),o=t(52347),p=t(25365),u=t(88453),d=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable;const h=function({param:{description:e,example:a,examples:t,name:h,required:b,schema:g}}){g&&(null==g?void 0:g.type)||(g={type:"any"});const y=(0,o.lo)(g,(e=>l.createElement("span",{className:"openapi-schema__type"}," ",(0,n.uc)(e)))),v=(0,o.lo)(b,(()=>l.createElement("span",{className:"openapi-schema__required"},"required"))),k=(0,o.lo)((0,n.A4)(g),(e=>l.createElement("div",null,l.createElement(p.D,{children:(0,s.T)(e),rehypePlugins:[u.Z]})))),x=(0,o.lo)(e,(e=>l.createElement("div",null,l.createElement(p.D,{children:(0,s.T)(e),components:{pre:"div",code(e){var a=e,{node:t,inline:i,className:m,children:s}=a;((e,a)=>{var t={};for(var l in e)c.call(e,l)&&a.indexOf(l)<0&&(t[l]=e[l]);if(null!=e&&d)for(var l of d(e))a.indexOf(l)<0&&f.call(e,l)&&(t[l]=e[l])})(a,["node","inline","className","children"]);const n=/language-(\w+)/.exec(m||"");return i?l.createElement("code",null,s):!i&&n?l.createElement(r.Z,{className:m},s):l.createElement(r.Z,null,s)}},rehypePlugins:[u.Z]})))),T=(0,o.lo)(g&&g.items?g.items.default:g?g.default:void 0,(e=>l.createElement("div",null,l.createElement(p.D,{children:`**Default value:** \`${e}\``})))),E=(0,o.lo)((0,o.toString)(a),(e=>l.createElement("div",null,l.createElement("strong",null,"Example: "),e))),_=(0,o.lo)(t,(e=>{const a=Object.entries(e);return l.createElement(l.Fragment,null,l.createElement("strong",null,"Examples:"),l.createElement(i.default,null,a.map((([e,a])=>l.createElement(m.default,{value:e,label:e},a.summary&&l.createElement("p",null,a.summary),a.description&&l.createElement("p",null,l.createElement("strong",null,"Description: "),l.createElement("span",null,a.description)),l.createElement("p",null,l.createElement("strong",null,"Example: "),l.createElement("code",null,a.value)))))))}));return l.createElement("div",{className:"openapi-params__list-item"},l.createElement("span",{className:"openapi-schema__container"},l.createElement("strong",{className:"openapi-schema__property"},h),y,b&&l.createElement("span",{className:"openapi-schema__divider"}),v),k,T,x,E,_)}},81053:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>S,contentTitle:()=>_,default:()=>M,frontMatter:()=>E,metadata:()=>N,toc:()=>j});var l=t(3905),r=t(68562),i=t(67001),m=t.n(i),s=t(98439),n=t(34168),o=t(3655),p=t(13503),u=t(82479),d=t(62574),c=Object.defineProperty,f=Object.defineProperties,h=Object.getOwnPropertyDescriptors,b=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable,v=(e,a,t)=>a in e?c(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,k=(e,a)=>{for(var t in a||(a={}))g.call(a,t)&&v(e,t,a[t]);if(b)for(var t of b(a))y.call(a,t)&&v(e,t,a[t]);return e},x=(e,a)=>f(e,h(a)),T=(e,a)=>{var t={};for(var l in e)g.call(e,l)&&a.indexOf(l)<0&&(t[l]=e[l]);if(null!=e&&b)for(var l of b(e))a.indexOf(l)<0&&y.call(e,l)&&(t[l]=e[l]);return t};const E={id:"get-role-profile",sidebar_label:"Find role-profile contributor relationship by id",hide_title:!0,hide_table_of_contents:!0,api:"eJydVd9v4zYM/lcIPm2A0qRput0M7KHDekOG3Q+03b0UwaBYTKw7W3IpKRcj8P8+UE6v6aW7tZcHx5ZI6fvIj+QOfUuso/VubrDANcUrX9N79itbEyo0FEq2rRhgga+tM8C+plE7WEDpXWS7TNEzMNX5pFDZFpYdWIMKo14HLG5RvGDvFXChsNWsG4rEsr1DpxvCArOPlbtaHasjAPPfwa8gVgR++ZHKCNEDU2RLG1KQWqMjKfAMhmqKQoDpLlkmg0XkRApDWVGjsdhh7Fq5MUS2bo0KV54bHbHAlDIK2uqmrcXkdDr7ybxano10Of1lNJucno9enZ7PRob0bHY20z+frTT2/UJuC613gYJcMJ1M5O8xg8ttS2UkA/emQkHDRtdW1u4ShYgKJa7kovjrtq1tmSM7/hjkkN0xiyEcqLBlyWi0AwSJ+j/7qP+/tTXPiQuTNu9c3Q0R7RWmp/0a6/4it44VFmdThY3eHn4enZKhPgdBn2ELo+eZ9wqjjTmRB9oeTbHPP4Wzp/L0mzZwNaQDRpCcXtY5VaUXUUQ6eUmSvKN3qyzzrxNwj2zusgL+FNde/bfdB7HK11wyew7YLwYS50+RmLtI7HQN18QbYsg+MJKSSezIgHeQXKWdqckAbUvKnuFF5L6tKZIrj5FdQEMh6DXBsL60bp3rerA/rL5rz9xB8A3FSqw+k4vwmb1b7zPYK5Q9v29gAkF6R4HjQ/mH8c6aHhWGHIuh6ySuscAqxjYU4/EuktMuvtUN9SfOO2ra2ndEJ6Vvxrq1qHCj2YoUMrcH84HgSqdadKfLhkp/1LxusjlIpwMdgl1LBkRSKUTfEAudheArE9vYZYBL0kx8kYTP7eJw+1oSMOA4NPqSDyGF+34n34MRqv3L6/siufGfyEGU56+dTzy85rKxbuXlRAnXQOH0ZHIyOZDj28urN3Dxfn7MtSK434RSO1gSpDDw1WVJIYB2Bhpv7KoDiapPQXqiT1xSAOsggyG3sexdQy6KKGtbkgs53PuB8WZ+k7G2PsRGu4Od7xhWjzjsHkrguwbfkIZI2zhua22lrge97fb6vH3UngMqLKyR0Vj5EGV7t1vqQH9z3feyfJeIRRWLBxlmjRgb5N1gsdJ1oG/Q+OFqPw1/hJdP0icJ7Re163Jx1Em+UOEn6oZp3i96hRVpQ5zBDhsXpbSaA5ejFiNS/1LVf1xKkv8FYij/QA==",sidebar_class_name:"get api-method",info_path:"docs/api/nerm/v1/nerm-api",custom_edit_url:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Find role-profile contributor relationship by id' (get-role-profile)"},_=void 0,N={unversionedId:"api/nerm/v1/get-role-profile",id:"api/nerm/v1/get-role-profile",title:"get-role-profile",description:"Find role-profile contributor relationship by id",source:"@site/docs/api/nerm/v1/get-role-profile.api.mdx",sourceDirName:"api/nerm/v1",slug:"/api/nerm/v1/get-role-profile",permalink:"/docs/api/nerm/v1/get-role-profile",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Find role-profile contributor relationship by id' (get-role-profile)",tags:[],version:"current",frontMatter:{id:"get-role-profile",sidebar_label:"Find role-profile contributor relationship by id",hide_title:!0,hide_table_of_contents:!0,api:"eJydVd9v4zYM/lcIPm2A0qRput0M7KHDekOG3Q+03b0UwaBYTKw7W3IpKRcj8P8+UE6v6aW7tZcHx5ZI6fvIj+QOfUuso/VubrDANcUrX9N79itbEyo0FEq2rRhgga+tM8C+plE7WEDpXWS7TNEzMNX5pFDZFpYdWIMKo14HLG5RvGDvFXChsNWsG4rEsr1DpxvCArOPlbtaHasjAPPfwa8gVgR++ZHKCNEDU2RLG1KQWqMjKfAMhmqKQoDpLlkmg0XkRApDWVGjsdhh7Fq5MUS2bo0KV54bHbHAlDIK2uqmrcXkdDr7ybxano10Of1lNJucno9enZ7PRob0bHY20z+frTT2/UJuC613gYJcMJ1M5O8xg8ttS2UkA/emQkHDRtdW1u4ShYgKJa7kovjrtq1tmSM7/hjkkN0xiyEcqLBlyWi0AwSJ+j/7qP+/tTXPiQuTNu9c3Q0R7RWmp/0a6/4it44VFmdThY3eHn4enZKhPgdBn2ELo+eZ9wqjjTmRB9oeTbHPP4Wzp/L0mzZwNaQDRpCcXtY5VaUXUUQ6eUmSvKN3qyzzrxNwj2zusgL+FNde/bfdB7HK11wyew7YLwYS50+RmLtI7HQN18QbYsg+MJKSSezIgHeQXKWdqckAbUvKnuFF5L6tKZIrj5FdQEMh6DXBsL60bp3rerA/rL5rz9xB8A3FSqw+k4vwmb1b7zPYK5Q9v29gAkF6R4HjQ/mH8c6aHhWGHIuh6ySuscAqxjYU4/EuktMuvtUN9SfOO2ra2ndEJ6Vvxrq1qHCj2YoUMrcH84HgSqdadKfLhkp/1LxusjlIpwMdgl1LBkRSKUTfEAudheArE9vYZYBL0kx8kYTP7eJw+1oSMOA4NPqSDyGF+34n34MRqv3L6/siufGfyEGU56+dTzy85rKxbuXlRAnXQOH0ZHIyOZDj28urN3Dxfn7MtSK434RSO1gSpDDw1WVJIYB2Bhpv7KoDiapPQXqiT1xSAOsggyG3sexdQy6KKGtbkgs53PuB8WZ+k7G2PsRGu4Od7xhWjzjsHkrguwbfkIZI2zhua22lrge97fb6vH3UngMqLKyR0Vj5EGV7t1vqQH9z3feyfJeIRRWLBxlmjRgb5N1gsdJ1oG/Q+OFqPw1/hJdP0icJ7Re163Jx1Em+UOEn6oZp3i96hRVpQ5zBDhsXpbSaA5ejFiNS/1LVf1xKkv8FYij/QA==",sidebar_class_name:"get api-method",info_path:"docs/api/nerm/v1/nerm-api",custom_edit_url:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Find role-profile contributor relationship by id' (get-role-profile)"},sidebar:"openApiSidebar",previous:{title:"Update multiple role-profile contributor relationships",permalink:"/docs/api/nerm/v1/patch-role-profiles"},next:{title:"Update a role-profile contributor relationship by id",permalink:"/docs/api/nerm/v1/patch-role-profile"}},S={},j=[{value:"Request",id:"request",level:2}],q={toc:j},I="wrapper";function M(e){var a=e,{components:t}=a,i=T(a,["components"]);return(0,l.kt)(I,x(k(k({},q),i),{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{className:"openapi__heading"},"Find role-profile contributor relationship by id"),(0,l.kt)(m(),{method:"get",path:"/role_profiles/{id}",mdxType:"MethodEndpoint"}),(0,l.kt)("p",null,"Find role-profile contributor relationship by id"),(0,l.kt)("h2",k({},{id:"request"}),"Request"),(0,l.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{}},(0,l.kt)("h3",{className:"openapi-markdown__details-summary-header-params"},"Path Parameters")),(0,l.kt)("div",null,(0,l.kt)("ul",null,(0,l.kt)(n.Z,{className:"paramsItem",param:{name:"id",in:"path",description:"ID of the object to retrieve, update, or delete",required:!0,schema:{type:"string",format:"uuid",example:"1246d8b3-ac29-4015-8154-dea4434a73fa"}},mdxType:"ParamsItem"})))),(0,l.kt)("div",null,(0,l.kt)("div",null,(0,l.kt)(r.Z,{mdxType:"ApiTabs"},(0,l.kt)(d.default,{label:"200",value:"200",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("p",null,"Expected response to a valid request")),(0,l.kt)("div",null,(0,l.kt)(s.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,l.kt)(d.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,l.kt)(u.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,l.kt)(d.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,l.kt)("strong",null,"Schema")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,l.kt)("details",{style:{},className:"openapi-markdown__details"},(0,l.kt)("summary",{style:{}},(0,l.kt)("span",{className:"openapi-schema__container"},(0,l.kt)("strong",{className:"openapi-schema__property"},"role_profile"),(0,l.kt)("span",{className:"openapi-schema__name"}," object"))),(0,l.kt)("div",{style:{marginLeft:"1rem"}},(0,l.kt)(p.Z,{collapsible:!1,name:"id",required:!1,schemaName:"uuid",qualifierMessage:void 0,schema:{type:"string",format:"uuid",readOnly:!0},mdxType:"SchemaItem"}),(0,l.kt)(p.Z,{collapsible:!1,name:"uid",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** `>= 32 characters` and `<= 32 characters`",schema:{type:"string",minLength:32,maxLength:32,readOnly:!0},mdxType:"SchemaItem"}),(0,l.kt)(p.Z,{collapsible:!1,name:"role_id",required:!1,schemaName:"uuid",qualifierMessage:void 0,schema:{type:"string",format:"uuid"},mdxType:"SchemaItem"}),(0,l.kt)(p.Z,{collapsible:!1,name:"profile_id",required:!1,schemaName:"uuid",qualifierMessage:void 0,schema:{type:"string",format:"uuid"},mdxType:"SchemaItem"}))))))),(0,l.kt)(d.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,l.kt)(o.Z,{responseExample:'{\n  "role_profile": {\n    "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n    "uid": "string",\n    "role_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n    "profile_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6"\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,l.kt)(d.default,{label:"400",value:"400",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("p",null,"Bad Request - unable to complete.")),(0,l.kt)("div",null,(0,l.kt)(s.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,l.kt)(d.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,l.kt)(u.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,l.kt)(d.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,l.kt)("strong",null,"Schema")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)("div",null,(0,l.kt)("span",{className:"badge badge--info"},"oneOf"),(0,l.kt)(u.default,{mdxType:"SchemaTabs"},(0,l.kt)(d.default,{label:"InvalidJson",value:"0-item-properties",mdxType:"TabItem"},(0,l.kt)(p.Z,{collapsible:!1,name:"error",required:!1,schemaName:"",qualifierMessage:void 0,schema:{example:"Invalid JSON syntax. Please check your syntax and try again."},mdxType:"SchemaItem"})),(0,l.kt)(d.default,{label:"ValidationErrors",value:"1-item-properties",mdxType:"TabItem"},(0,l.kt)(p.Z,{collapsible:!1,name:"error",required:!1,schemaName:"",qualifierMessage:void 0,schema:{example:"The <object> failed to create/update"},mdxType:"SchemaItem"}),(0,l.kt)(p.Z,{collapsible:!1,name:"errors",required:!1,schemaName:"",qualifierMessage:void 0,schema:{example:{attribute:"can't be blank"}},mdxType:"SchemaItem"}))))))),(0,l.kt)(d.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,l.kt)(o.Z,{responseExample:"{}",language:"json",mdxType:"ResponseSamples"}))))))),(0,l.kt)(d.default,{label:"500",value:"500",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("p",null,"Internal Server Error - returned on unhandled exceptions.")),(0,l.kt)("div",null,(0,l.kt)(s.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,l.kt)(d.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,l.kt)(u.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,l.kt)(d.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,l.kt)("strong",null,"Schema")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)(p.Z,{collapsible:!1,name:"error",required:!1,schemaName:"",qualifierMessage:void 0,schema:{description:"A message describing the error",example:"Sorry something went wrong"},mdxType:"SchemaItem"})))),(0,l.kt)(d.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,l.kt)(o.Z,{responseExample:'{\n  "error": "Sorry something went wrong"\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}M.isMDXComponent=!0}}]);