"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[30446],{85408:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>k,contentTitle:()=>N,default:()=>v,frontMatter:()=>f,metadata:()=>h,toc:()=>b});var r=a(3905),n=Object.defineProperty,i=Object.defineProperties,s=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,p=(e,t,a)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,u=(e,t)=>{for(var a in t||(t={}))l.call(t,a)&&p(e,a,t[a]);if(o)for(var a of o(t))m.call(t,a)&&p(e,a,t[a]);return e},c=(e,t)=>i(e,s(t)),d=(e,t)=>{var a={};for(var r in e)l.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&o)for(var r of o(e))t.indexOf(r)<0&&m.call(e,r)&&(a[r]=e[r]);return a};const f={id:"name-normalizer",title:"Name Normalizer",pagination_label:"Name Normalizer",sidebar_label:"Name Normalizer",sidebar_class_name:"nameNormalizer",keywords:["transforms","operations","name normalizer"],description:"Clean or standardize the spelling of strings coming in from source systems.",slug:"/extensibility/transforms/operations/name-normalizer",tags:["Transforms","Transform Operations"]},N=void 0,h={unversionedId:"extensibility/transforms/operations/name-normalizer",id:"extensibility/transforms/operations/name-normalizer",title:"Name Normalizer",description:"Clean or standardize the spelling of strings coming in from source systems.",source:"@site/docs/extensibility/transforms/operations/name-normalizer.md",sourceDirName:"extensibility/transforms/operations",slug:"/extensibility/transforms/operations/name-normalizer",permalink:"/docs/extensibility/transforms/operations/name-normalizer",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/extensibility/transforms/operations/name-normalizer.md",tags:[{label:"Transforms",permalink:"/docs/tags/transforms"},{label:"Transform Operations",permalink:"/docs/tags/transform-operations"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1715245293,formattedLastUpdatedAt:"May 9, 2024",frontMatter:{id:"name-normalizer",title:"Name Normalizer",pagination_label:"Name Normalizer",sidebar_label:"Name Normalizer",sidebar_class_name:"nameNormalizer",keywords:["transforms","operations","name normalizer"],description:"Clean or standardize the spelling of strings coming in from source systems.",slug:"/extensibility/transforms/operations/name-normalizer",tags:["Transforms","Transform Operations"]},sidebar:"openApiSidebar",previous:{title:"Lower",permalink:"/docs/extensibility/transforms/operations/lower"},next:{title:"Random Alphanumeric",permalink:"/docs/extensibility/transforms/operations/random-alphanumeric"}},k={},b=[{value:"Overview",id:"overview",level:2},{value:"Transform Structure",id:"transform-structure",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Examples",id:"examples",level:2}],g={toc:b},y="wrapper";function v(e){var t=e,{components:a}=t,n=d(t,["components"]);return(0,r.kt)(y,c(u(u({},g),n),{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h2",u({},{id:"overview"}),"Overview"),(0,r.kt)("p",null,"Use the name normalizer transform to clean or standardize the spelling of strings coming in from source systems. The most common use for this transform is for names and other proper nouns, but the transform is not necessarily limited to those data elements."),(0,r.kt)("p",null,"The normalization logic within the transform handles a wide range of use cases:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Proper casing/capitalization of names",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Any string containing either a space, a hyphen or an apostrophe - the transform splits these by that character and capitalizes the first character of each resulting substring."))),(0,r.kt)("li",{parentName:"ul"},'Special replacements of patterns that include "MC" and "MAC" (or case-based variations of those two strings)',(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'The transform automatically converts "MC" to "Mc" and "MAC" to "Mac" when they are part of a patronymic last name.'))),(0,r.kt)("li",{parentName:"ul"},"Consistent capitalization of strings that are part of a toponymic surname or a generational suffix:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'Convert "VON" to "von"'),(0,r.kt)("li",{parentName:"ul"},'Convert "DEL" to "del"'),(0,r.kt)("li",{parentName:"ul"},'Convert "OF" to "of"'),(0,r.kt)("li",{parentName:"ul"},'Convert "DE" to "de"'),(0,r.kt)("li",{parentName:"ul"},'Convert "LA" to "la"'),(0,r.kt)("li",{parentName:"ul"},'Convert "Y" to "y"'),(0,r.kt)("li",{parentName:"ul"},'Convert Roman numeral suffixes to all capitalized letters (e.g., "iii" becomes "III")')))),(0,r.kt)("h2",u({},{id:"transform-structure"}),"Transform Structure"),(0,r.kt)("p",null,"The name normalizer transform only requires the transform's ",(0,r.kt)("inlineCode",{parentName:"p"},"type")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," attributes:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-json"}),'{\n  "type": "normalizeNames",\n  "name": "Name Normalizer Transform"\n}\n')),(0,r.kt)("h2",u({},{id:"attributes"}),"Attributes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Required Attributes")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"type")," - This must always be set to ",(0,r.kt)("inlineCode",{parentName:"li"},"normalizeNames"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"name")," - This is a required attribute for all transforms. It represents the name of the transform as it will appear in the UI's dropdown menus."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Optional Attributes")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"requiresPeriodicRefresh")," - This ",(0,r.kt)("inlineCode",{parentName:"li"},"true")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"false")," value indicates whether the transform logic should be reevaluated every evening as part of the identity refresh process."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"input")," - This is an optional attribute that can explicitly define the input data passed into the transform logic. If no input is provided, the transform takes its input from the source and attribute combination configured with the UI.")))),(0,r.kt)("h2",u({},{id:"examples"}),"Examples"),(0,r.kt)("p",null,"This transform takes a static value and normalizes it to a consistent format."),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-bash"}),'Input: "jOHN VON SmITh"\nOutput: "John von Smith"\n')),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-json"}),'{\n  "attributes": {\n    "input": {\n      "attributes": {\n        "value": "jOHN VON SmITh"\n      },\n      "type": "static"\n    }\n  },\n  "type": "normalizeNames",\n  "name": "Name Normalizer Transform"\n}\n')),(0,r.kt)("hr",null),(0,r.kt)("p",null,"\xa0"),(0,r.kt)("p",null,'This transform takes the user\'s "LastName" attribute from the "HR Source" and normalizes the name to a consistent format.'),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-bash"}),'Input: "Dr. JOHN D. O\'BRIEN"\nOutput: "Dr. John D. O\'Brien"\n')),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-json"}),'{\n  "attributes": {\n    "input": {\n      "attributes": {\n        "sourceName": "HR Source",\n        "attributeName": "LastName"\n      },\n      "type": "accountAttribute"\n    }\n  },\n  "type": "normalizeNames",\n  "name": "Name Normalizer Transform"\n}\n')))}v.isMDXComponent=!0}}]);