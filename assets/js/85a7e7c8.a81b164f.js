"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[8327],{17377:(e,t,c)=>{c.d(t,{Z:()=>O});var r=c(67294),o=c(86010),n=c(76828),a=c(39130),i=c(35096),s=c(33084);const l={cardContainer:"cardContainer_S8oU",cardTitle:"cardTitle_HoSo",cardDescription:"cardDescription_c27F",docCardIcon:"docCardIcon_elTJ"};var m=c(99603),d=c(21702);function p({href:e,children:t}){return r.createElement(a.default,{href:e,className:(0,o.default)("card padding--lg",l.cardContainer)},t)}function u({href:e,icon:t,title:c,description:n}){return r.createElement(p,{href:e},r.createElement("h2",{className:(0,o.default)("text--truncate",l.cardTitle),title:c},t,c),n&&r.createElement("p",{className:l.cardDescription,title:n},n))}function f({item:e}){var t,c;const o=(0,n.Wl)(e);return o?r.createElement(u,{href:o,icon:r.createElement(m.G,{icon:d.cC_,className:l.docCardIcon}),title:e.label,description:null!=(c=null==(t=e.customProps)?void 0:t.description)?c:(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e.items.length})}):null}function b({item:e}){var t,c;const o=(0,i.Z)(e.href)?r.createElement(m.G,{icon:d.FL8,className:l.docCardIcon}):r.createElement(m.G,{icon:d.wlW,className:l.docCardIcon}),a=(0,n.xz)(null!=(t=e.docId)?t:void 0);return r.createElement(u,{href:e.href,icon:o,title:e.label,description:null!=(c=e.description)?c:null==a?void 0:a.description})}function y({item:e}){switch(e.type){case"link":return r.createElement(b,{item:e});case"category":return r.createElement(f,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}var v=Object.defineProperty,h=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable,C=(e,t,c)=>t in e?v(e,t,{enumerable:!0,configurable:!0,writable:!0,value:c}):e[t]=c,w=(e,t)=>{for(var c in t||(t={}))g.call(t,c)&&C(e,c,t[c]);if(h)for(var c of h(t))I.call(t,c)&&C(e,c,t[c]);return e};function E({className:e}){const t=(0,n.jA)();return r.createElement(O,{items:t.items,className:e})}function O(e){const{items:t,className:c}=e;if(!t)return r.createElement(E,w({},e));const a=(0,n.MN)(t);return r.createElement("section",{className:(0,o.default)("row",c)},a.map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(y,{item:e})))))}},3527:(e,t,c)=>{c.r(t),c.d(t,{assets:()=>g,contentTitle:()=>v,default:()=>E,frontMatter:()=>y,metadata:()=>h,toc:()=>I});var r=c(3905),o=c(17377),n=c(76828),a=Object.defineProperty,i=Object.defineProperties,s=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,p=(e,t,c)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:c}):e[t]=c,u=(e,t)=>{for(var c in t||(t={}))m.call(t,c)&&p(e,c,t[c]);if(l)for(var c of l(t))d.call(t,c)&&p(e,c,t[c]);return e},f=(e,t)=>i(e,s(t)),b=(e,t)=>{var c={};for(var r in e)m.call(e,r)&&t.indexOf(r)<0&&(c[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&d.call(e,r)&&(c[r]=e[r]);return c};const y={id:"iai-common-access",title:"IAI Common Access",description:"IAI Common Access",custom_edit_url:null},v=void 0,h={unversionedId:"api/beta/iai-common-access",id:"api/beta/iai-common-access",title:"IAI Common Access",description:"IAI Common Access",source:"@site/docs/api/beta/iai-common-access.tag.mdx",sourceDirName:"api/beta",slug:"/api/beta/iai-common-access",permalink:"/docs/api/beta/iai-common-access",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"iai-common-access",title:"IAI Common Access",description:"IAI Common Access",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Notification of Viewed Access Request Recommendations in Bulk",permalink:"/docs/api/beta/add-access-request-recommendations-viewed-items"},next:{title:"Get a paginated list of common access",permalink:"/docs/api/beta/get-common-access"}},g={},I=[],C={toc:I},w="wrapper";function E(e){var t=e,{components:c}=t,a=b(t,["components"]);return(0,r.kt)(w,f(u(u({},C),a),{components:c,mdxType:"MDXLayout"}),(0,r.kt)(o.Z,{items:(0,n.jA)().items,mdxType:"DocCardList"}))}E.isMDXComponent=!0}}]);