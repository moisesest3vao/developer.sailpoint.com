"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[41173],{17377:(e,t,r)=>{r.d(t,{Z:()=>P});var n=r(67294),o=r(86010),i=r(76828),a=r(39130),c=r(35096),s=r(33084);const l={cardContainer:"cardContainer_S8oU",cardTitle:"cardTitle_HoSo",cardDescription:"cardDescription_c27F",docCardIcon:"docCardIcon_elTJ"};var d=r(99603),u=r(21702);function p({href:e,children:t}){return n.createElement(a.default,{href:e,className:(0,o.default)("card padding--lg",l.cardContainer)},t)}function f({href:e,icon:t,title:r,description:i}){return n.createElement(p,{href:e},n.createElement("h2",{className:(0,o.default)("text--truncate",l.cardTitle),title:r},t,r),i&&n.createElement("p",{className:l.cardDescription,title:i},i))}function m({item:e}){var t,r;const o=(0,i.Wl)(e);return o?n.createElement(f,{href:o,icon:n.createElement(d.G,{icon:u.cC_,className:l.docCardIcon}),title:e.label,description:null!=(r=null==(t=e.customProps)?void 0:t.description)?r:(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e.items.length})}):null}function g({item:e}){var t,r;const o=(0,c.Z)(e.href)?n.createElement(d.G,{icon:u.FL8,className:l.docCardIcon}):n.createElement(d.G,{icon:u.wlW,className:l.docCardIcon}),a=(0,i.xz)(null!=(t=e.docId)?t:void 0);return n.createElement(f,{href:e.href,icon:o,title:e.label,description:null!=(r=e.description)?r:null==a?void 0:a.description})}function w({item:e}){switch(e.type){case"link":return n.createElement(g,{item:e});case"category":return n.createElement(m,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}var h=Object.defineProperty,v=Object.getOwnPropertySymbols,y=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,C=(e,t,r)=>t in e?h(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,O=(e,t)=>{for(var r in t||(t={}))y.call(t,r)&&C(e,r,t[r]);if(v)for(var r of v(t))b.call(t,r)&&C(e,r,t[r]);return e};function E({className:e}){const t=(0,i.jA)();return n.createElement(P,{items:t.items,className:e})}function P(e){const{items:t,className:r}=e;if(!t)return n.createElement(E,O({},e));const a=(0,i.MN)(t);return n.createElement("section",{className:(0,o.default)("row",r)},a.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(w,{item:e})))))}},68431:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>y,contentTitle:()=>h,default:()=>E,frontMatter:()=>w,metadata:()=>v,toc:()=>b});var n=r(3905),o=r(17377),i=r(76828),a=Object.defineProperty,c=Object.defineProperties,s=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,f=(e,t)=>{for(var r in t||(t={}))d.call(t,r)&&p(e,r,t[r]);if(l)for(var r of l(t))u.call(t,r)&&p(e,r,t[r]);return e},m=(e,t)=>c(e,s(t)),g=(e,t)=>{var r={};for(var n in e)d.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&u.call(e,n)&&(r[n]=e[n]);return r};const w={id:"password-configuration",title:"Password Configuration",description:"Password Configuration",custom_edit_url:null},h=void 0,v={unversionedId:"api/v3/password-configuration",id:"api/v3/password-configuration",title:"Password Configuration",description:"Password Configuration",source:"@site/docs/api/v3/password-configuration.tag.mdx",sourceDirName:"api/v3",slug:"/api/v3/password-configuration",permalink:"/docs/api/v3/password-configuration",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"password-configuration",title:"Password Configuration",description:"Password Configuration",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Patch OAuth Client",permalink:"/docs/api/v3/patch-oauth-client"},next:{title:"Get Password Org Config",permalink:"/docs/api/v3/get-password-org-config"}},y={},b=[],C={toc:b},O="wrapper";function E(e){var t=e,{components:r}=t,a=g(t,["components"]);return(0,n.kt)(O,m(f(f({},C),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Use this API to implement organization password configuration functionality.\nWith this functionality in place, organization administrators can create organization-specific password configurations. "),(0,n.kt)("p",null,"These configurations include details like custom password instructions, as well as digit token length and duration. "),(0,n.kt)("p",null,"Refer to ",(0,n.kt)("a",f({parentName:"p"},{href:"https://documentation.sailpoint.com/saas/help/pwd/pwd_reset.html"}),"Configuring User Authentication for Password Resets")," for more information about organization password configuration functionality."),(0,n.kt)(o.Z,{items:(0,i.jA)().items,mdxType:"DocCardList"}))}E.isMDXComponent=!0}}]);