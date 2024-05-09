"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[20591],{20942:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>g,contentTitle:()=>h,default:()=>v,frontMatter:()=>c,metadata:()=>k,toc:()=>b});var n=a(3905),r=Object.defineProperty,i=Object.defineProperties,s=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,d=(t,e,a)=>e in t?r(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,u=(t,e)=>{for(var a in e||(e={}))l.call(e,a)&&d(t,a,e[a]);if(o)for(var a of o(e))p.call(e,a)&&d(t,a,e[a]);return t},m=(t,e)=>i(t,s(e)),f=(t,e)=>{var a={};for(var n in t)l.call(t,n)&&e.indexOf(n)<0&&(a[n]=t[n]);if(null!=t&&o)for(var n of o(t))e.indexOf(n)<0&&p.call(t,n)&&(a[n]=t[n]);return a};const c={id:"left-pad",title:"Left Pad",pagination_label:"Left Pad",sidebar_label:"Left Pad",sidebar_class_name:"leftPad",keywords:["transforms","operations","left","pad"],description:"Left pad of the input string.",slug:"/extensibility/transforms/operations/left-pad",tags:["Transforms","Transform Operations"]},h=void 0,k={unversionedId:"extensibility/transforms/operations/left-pad",id:"extensibility/transforms/operations/left-pad",title:"Left Pad",description:"Left pad of the input string.",source:"@site/docs/extensibility/transforms/operations/left-pad.md",sourceDirName:"extensibility/transforms/operations",slug:"/extensibility/transforms/operations/left-pad",permalink:"/docs/extensibility/transforms/operations/left-pad",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/extensibility/transforms/operations/left-pad.md",tags:[{label:"Transforms",permalink:"/docs/tags/transforms"},{label:"Transform Operations",permalink:"/docs/tags/transform-operations"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1715245293,formattedLastUpdatedAt:"May 9, 2024",frontMatter:{id:"left-pad",title:"Left Pad",pagination_label:"Left Pad",sidebar_label:"Left Pad",sidebar_class_name:"leftPad",keywords:["transforms","operations","left","pad"],description:"Left pad of the input string.",slug:"/extensibility/transforms/operations/left-pad",tags:["Transforms","Transform Operations"]},sidebar:"openApiSidebar",previous:{title:"Last Index Of",permalink:"/docs/extensibility/transforms/operations/last-index-of"},next:{title:"Lookup",permalink:"/docs/extensibility/transforms/operations/lookup"}},g={},b=[{value:"Overview",id:"overview",level:2},{value:"Transform Structure",id:"transform-structure",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Examples",id:"examples",level:2}],y={toc:b},N="wrapper";function v(t){var e=t,{components:a}=e,r=f(e,["components"]);return(0,n.kt)(N,m(u(u({},y),r),{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h2",u({},{id:"overview"}),"Overview"),(0,n.kt)("p",null,"Use the left pad transform to pad an incoming string with a user-supplied character out to a specific number of characters. This transform is often useful for data normalization situations in which data such as employee IDs are not uniform in length but need to be for downstream systems."),(0,n.kt)("admonition",u({},{title:"Other Considerations",type:"note"}),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"If the input to the left pad transform is null, the transform returns a null value."))),(0,n.kt)("h2",u({},{id:"transform-structure"}),"Transform Structure"),(0,n.kt)("p",null,"In addition to the standard ",(0,n.kt)("inlineCode",{parentName:"p"},"type")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"name")," attributes, the left pad transform requires the ",(0,n.kt)("inlineCode",{parentName:"p"},"length")," attribute, which tells the transform how many characters to pad the incoming string to."),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-json"}),'{\n  "attributes": {\n    "padding": "0",\n    "length": "5"\n  },\n  "type": "leftPad",\n  "name": "Left Pad Transform"\n}\n')),(0,n.kt)("h2",u({},{id:"attributes"}),"Attributes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Required Attributes")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"type")," - This must always be set to ",(0,n.kt)("inlineCode",{parentName:"li"},"leftPad"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"name")," - This is a required attribute for all transforms. It represents the name of the transform as it will appear in the UI's dropdown menus."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"length")," - This is an integer value for the final output string's desired length."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Optional Attributes")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"requiresPeriodicRefresh")," - This ",(0,n.kt)("inlineCode",{parentName:"li"},"true")," or ",(0,n.kt)("inlineCode",{parentName:"li"},"false")," value indicates whether the transform logic should be reevaluated every evening as part of the identity refresh process."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"padding")," - This string value represents the character the transform will pad the incoming data to to get to the desired length.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},'If no padding value is provided, the transform defaults to a single space (" ") character for padding.'))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"input")," - This is an optional attribute that can explicitly define the input data passed into the transform logic. If no input is provided, the transform takes its input from the source and attribute combination configured with the UI.")))),(0,n.kt)("h2",u({},{id:"examples"}),"Examples"),(0,n.kt)("p",null,'This transform takes the incoming attribute configured in the identity profile attribute UI and ensures it is padded out to 8 characters in length by adding "0"s to the left.'),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-bash"}),'Input: "1234"\nOutput: "00001234"\n')),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Transform Request Body"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-json"}),'{\n  "attributes": {\n    "padding": "0",\n    "length": "8"\n  },\n  "type": "leftPad",\n  "name": "Left Pad Transform"\n}\n')),(0,n.kt)("hr",null),(0,n.kt)("p",null,"\xa0"),(0,n.kt)("p",null,"This transform takes the user's ",(0,n.kt)("inlineCode",{parentName:"p"},"employeeID"),' attribute from the HR source and ensures it is padded out to 7 characters in length by adding "x"s to the left.'),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-bash"}),'Input: "1234"\nOutput: "xxx1234"\n')),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Transform Request Body"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-json"}),'{\n  "attributes": {\n    "padding": "x",\n    "length": "7",\n    "input": {\n      "attributes": {\n        "sourceName": "HR Source",\n        "attributeName": "employeeID"\n      },\n      "type": "accountAttribute"\n    }\n  },\n  "type": "leftPad",\n  "name": "Left Pad Transform"\n}\n')))}v.isMDXComponent=!0}}]);