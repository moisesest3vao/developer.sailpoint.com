"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[91078],{17377:(e,t,r)=>{r.d(t,{Z:()=>N});var a=r(67294),n=r(86010),o=r(76828),i=r(39130),c=r(35096),s=r(33084);const l={cardContainer:"cardContainer_S8oU",cardTitle:"cardTitle_HoSo",cardDescription:"cardDescription_c27F",docCardIcon:"docCardIcon_elTJ"};var u=r(99603),d=r(21702);function p({href:e,children:t}){return a.createElement(i.default,{href:e,className:(0,n.default)("card padding--lg",l.cardContainer)},t)}function m({href:e,icon:t,title:r,description:o}){return a.createElement(p,{href:e},a.createElement("h2",{className:(0,n.default)("text--truncate",l.cardTitle),title:r},t,r),o&&a.createElement("p",{className:l.cardDescription,title:o},o))}function f({item:e}){var t,r;const n=(0,o.Wl)(e);return n?a.createElement(m,{href:n,icon:a.createElement(u.G,{icon:d.cC_,className:l.docCardIcon}),title:e.label,description:null!=(r=null==(t=e.customProps)?void 0:t.description)?r:(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e.items.length})}):null}function g({item:e}){var t,r;const n=(0,c.Z)(e.href)?a.createElement(u.G,{icon:d.FL8,className:l.docCardIcon}):a.createElement(u.G,{icon:d.wlW,className:l.docCardIcon}),i=(0,o.xz)(null!=(t=e.docId)?t:void 0);return a.createElement(m,{href:e.href,icon:n,title:e.label,description:null!=(r=e.description)?r:null==i?void 0:i.description})}function b({item:e}){switch(e.type){case"link":return a.createElement(g,{item:e});case"category":return a.createElement(f,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}var h=Object.defineProperty,y=Object.getOwnPropertySymbols,v=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable,E=(e,t,r)=>t in e?h(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,O=(e,t)=>{for(var r in t||(t={}))v.call(t,r)&&E(e,r,t[r]);if(y)for(var r of y(t))w.call(t,r)&&E(e,r,t[r]);return e};function C({className:e}){const t=(0,o.jA)();return a.createElement(N,{items:t.items,className:e})}function N(e){const{items:t,className:r}=e;if(!t)return a.createElement(C,O({},e));const i=(0,o.MN)(t);return a.createElement("section",{className:(0,n.default)("row",r)},i.map(((e,t)=>a.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},a.createElement(b,{item:e})))))}},61065:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>v,contentTitle:()=>h,default:()=>C,frontMatter:()=>b,metadata:()=>y,toc:()=>w});var a=r(3905),n=r(17377),o=r(76828),i=Object.defineProperty,c=Object.defineProperties,s=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))u.call(t,r)&&p(e,r,t[r]);if(l)for(var r of l(t))d.call(t,r)&&p(e,r,t[r]);return e},f=(e,t)=>c(e,s(t)),g=(e,t)=>{var r={};for(var a in e)u.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&l)for(var a of l(e))t.indexOf(a)<0&&d.call(e,a)&&(r[a]=e[a]);return r};const b={id:"source-usages",title:"Source Usages",description:"Source Usages",custom_edit_url:null},h=void 0,y={unversionedId:"api/beta/source-usages",id:"api/beta/source-usages",title:"Source Usages",description:"Source Usages",source:"@site/docs/api/beta/source-usages.tag.mdx",sourceDirName:"api/beta",slug:"/api/beta/source-usages",permalink:"/docs/api/beta/source-usages",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"source-usages",title:"Source Usages",description:"Source Usages",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Account Aggregation",permalink:"/docs/api/beta/import-accounts"},next:{title:"Finds status of source usage",permalink:"/docs/api/beta/get-status-by-source-id"}},v={},w=[],E={toc:w},O="wrapper";function C(e){var t=e,{components:r}=t,i=g(t,["components"]);return(0,a.kt)(O,f(m(m({},E),i),{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Use this API to implement source usage insight functionality.\nWith this functionality in place, administrators can gather information and insights about how their tenants' sources are being used.\nThis allows organizations to get the information they need to start optimizing and securing source usage."),(0,a.kt)(n.Z,{items:(0,o.jA)().items,mdxType:"DocCardList"}))}C.isMDXComponent=!0}}]);