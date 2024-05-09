"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[65412],{17377:(e,t,r)=>{r.d(t,{Z:()=>O});var o=r(67294),n=r(86010),i=r(76828),a=r(39130),s=r(35096),c=r(33084);const l={cardContainer:"cardContainer_S8oU",cardTitle:"cardTitle_HoSo",cardDescription:"cardDescription_c27F",docCardIcon:"docCardIcon_elTJ"};var m=r(99603),u=r(21702);function d({href:e,children:t}){return o.createElement(a.default,{href:e,className:(0,n.default)("card padding--lg",l.cardContainer)},t)}function f({href:e,icon:t,title:r,description:i}){return o.createElement(d,{href:e},o.createElement("h2",{className:(0,n.default)("text--truncate",l.cardTitle),title:r},t,r),i&&o.createElement("p",{className:l.cardDescription,title:i},i))}function p({item:e}){var t,r;const n=(0,i.Wl)(e);return n?o.createElement(f,{href:n,icon:o.createElement(m.G,{icon:u.cC_,className:l.docCardIcon}),title:e.label,description:null!=(r=null==(t=e.customProps)?void 0:t.description)?r:(0,c.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e.items.length})}):null}function h({item:e}){var t,r;const n=(0,s.Z)(e.href)?o.createElement(m.G,{icon:u.FL8,className:l.docCardIcon}):o.createElement(m.G,{icon:u.wlW,className:l.docCardIcon}),a=(0,i.xz)(null!=(t=e.docId)?t:void 0);return o.createElement(f,{href:e.href,icon:n,title:e.label,description:null!=(r=e.description)?r:null==a?void 0:a.description})}function b({item:e}){switch(e.type){case"link":return o.createElement(h,{item:e});case"category":return o.createElement(p,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}var g=Object.defineProperty,w=Object.getOwnPropertySymbols,y=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,k=(e,t,r)=>t in e?g(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,C=(e,t)=>{for(var r in t||(t={}))y.call(t,r)&&k(e,r,t[r]);if(w)for(var r of w(t))v.call(t,r)&&k(e,r,t[r]);return e};function E({className:e}){const t=(0,i.jA)();return o.createElement(O,{items:t.items,className:e})}function O(e){const{items:t,className:r}=e;if(!t)return o.createElement(E,C({},e));const a=(0,i.MN)(t);return o.createElement("section",{className:(0,n.default)("row",r)},a.map(((e,t)=>o.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},o.createElement(b,{item:e})))))}},87867:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>y,contentTitle:()=>g,default:()=>E,frontMatter:()=>b,metadata:()=>w,toc:()=>v});var o=r(3905),n=r(17377),i=r(76828),a=Object.defineProperty,s=Object.defineProperties,c=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,d=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,f=(e,t)=>{for(var r in t||(t={}))m.call(t,r)&&d(e,r,t[r]);if(l)for(var r of l(t))u.call(t,r)&&d(e,r,t[r]);return e},p=(e,t)=>s(e,c(t)),h=(e,t)=>{var r={};for(var o in e)m.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&l)for(var o of l(e))t.indexOf(o)<0&&u.call(e,o)&&(r[o]=e[o]);return r};const b={id:"custom-forms",title:"Custom Forms",description:"Custom Forms",custom_edit_url:null},g=void 0,w={unversionedId:"api/beta/custom-forms",id:"api/beta/custom-forms",title:"Custom Forms",description:"Custom Forms",source:"@site/docs/api/beta/custom-forms.tag.mdx",sourceDirName:"api/beta",slug:"/api/beta/custom-forms",permalink:"/docs/api/beta/custom-forms",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"custom-forms",title:"Custom Forms",description:"Custom Forms",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Validate Connector Rule",permalink:"/docs/api/beta/validate-connector-rule"},next:{title:"Export form definitions by tenant.",permalink:"/docs/api/beta/search-form-definitions-by-tenant"}},y={},v=[],k={toc:v},C="wrapper";function E(e){var t=e,{components:r}=t,a=h(t,["components"]);return(0,o.kt)(C,p(f(f({},k),a),{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Use this API to build and manage custom forms.\nWith this functionality in place, administrators can create and view form definitions and form instances."),(0,o.kt)("p",null,"Forms are composed of sections and fields. Sections split the form into logical groups of fields and fields are the data collection points within the form. Configure conditions to modify elements of the form as the responder provides input. Create form inputs to pass information from a calling feature, like a workflow, to your form."),(0,o.kt)("p",null,"Forms can be used within workflows as an action or as a trigger. The Form Action allows you to assign a form as a step in a running workflow, suspending the workflow until the form is submitted or times out, and the workflow resumes. The Form Submitted Trigger initiates a workflow when a form is submitted. The trigger can be configured to initiate on submission of a full form, a form element with any value, or a form element with a particular value."),(0,o.kt)("p",null,"Refer to ",(0,o.kt)("a",f({parentName:"p"},{href:"https://documentation.sailpoint.com/saas/help/forms/index.html"}),"Forms")," for more information about using forms in Identity Security Cloud."),(0,o.kt)(n.Z,{items:(0,i.jA)().items,mdxType:"DocCardList"}))}E.isMDXComponent=!0}}]);