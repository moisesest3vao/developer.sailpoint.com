"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[30394],{66194:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>f,contentTitle:()=>m,default:()=>v,frontMatter:()=>k,metadata:()=>b,toc:()=>h});var n=o(3905),r=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,d=(e,t,o)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,c=(e,t)=>{for(var o in t||(t={}))l.call(t,o)&&d(e,o,t[o]);if(s)for(var o of s(t))p.call(t,o)&&d(e,o,t[o]);return e},u=(e,t)=>a(e,i(t)),g=(e,t)=>{var o={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&s)for(var n of s(e))t.indexOf(n)<0&&p.call(e,n)&&(o[n]=e[n]);return o};const k={id:"go-sdk-create",title:"Creating resources with the Go SDK",pagination_label:"Go SDK",sidebar_label:"Create a resource",sidebar_position:2,sidebar_class_name:"gosdk",keywords:["go","golang","sdk","create"],description:"Learn how to create new resources the Golang SDK in this guide.",slug:"/tools/sdk/go/create",tags:["SDK","Software Development Kit"]},m=void 0,b={unversionedId:"tools/sdk/go/go-sdk-create",id:"tools/sdk/go/go-sdk-create",title:"Creating resources with the Go SDK",description:"Learn how to create new resources the Golang SDK in this guide.",source:"@site/docs/tools/sdk/go/creating-resources.md",sourceDirName:"tools/sdk/go",slug:"/tools/sdk/go/create",permalink:"/docs/tools/sdk/go/create",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/tools/sdk/go/creating-resources.md",tags:[{label:"SDK",permalink:"/docs/tags/sdk"},{label:"Software Development Kit",permalink:"/docs/tags/software-development-kit"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1715245293,formattedLastUpdatedAt:"May 9, 2024",sidebarPosition:2,frontMatter:{id:"go-sdk-create",title:"Creating resources with the Go SDK",pagination_label:"Go SDK",sidebar_label:"Create a resource",sidebar_position:2,sidebar_class_name:"gosdk",keywords:["go","golang","sdk","create"],description:"Learn how to create new resources the Golang SDK in this guide.",slug:"/tools/sdk/go/create",tags:["SDK","Software Development Kit"]},sidebar:"openApiSidebar",previous:{title:"Go SDK",permalink:"/docs/tools/sdk/go/getting-started"},next:{title:"Go SDK",permalink:"/docs/tools/sdk/go/update"}},f={},h=[],w={toc:h},D="wrapper";function v(e){var t=e,{components:o}=t,r=g(t,["components"]);return(0,n.kt)(D,u(c(c({},w),r),{components:o,mdxType:"MDXLayout"}),(0,n.kt)("p",null,'Here is an example create workgroup script from the beta APIs you can copy into your "sdk.go" instance to try it out:'),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-go",metastring:"showLineNumbers",showLineNumbers:!0}),'package main\n\nimport (\n "context"\n "encoding/json"\n "fmt"\n "os"\n\n sailpoint "github.com/sailpoint-oss/golang-sdk"\n "github.com/sailpoint-oss/golang-sdk/beta"\n)\n\nfunc main() {\n\n ctx := context.TODO()\n configuration := sailpoint.NewDefaultConfiguration()\n apiClient := sailpoint.NewAPIClient(configuration)\n\n resp, _, err := apiClient.V3.PublicIdentitiesApi.GetPublicIdentities(ctx).Limit(1).Execute()\n\n identity := "IDENTITY"\n workgroupName := "DB Access Governance Group"\n workgroupDescription := "Description of the Governance Group"\n\n workgroup := beta.WorkgroupDto{\n  Name:        &workgroupName,\n  Description: &workgroupDescription,\n  Owner: &beta.OwnerDto{\n   Id:   resp[0].Id,\n   Name: resp[0].Name,\n   Type: &identity,\n  },\n }\n\n newWorkgroup, request, errMessage := apiClient.Beta.GovernanceGroupsApi.CreateWorkgroup(ctx).WorkgroupDto(workgroup).Execute()\n\n if errMessage != nil {\n  fmt.Fprintf(os.Stderr, "Error when calling `GovernanceGroupsApi.CreateWorkgroup``: %v\\n", err)\n  fmt.Fprintf(os.Stderr, "Full HTTP response: %v\\n", request)\n }\n\n b, _ := json.MarshalIndent(newWorkgroup, "", "  ")\n fmt.Fprint(os.Stdout, string(b))\n}\n')),(0,n.kt)("p",null,"The example uses the ",(0,n.kt)("inlineCode",{parentName:"p"},"GetPublicIdentities")," method from the ",(0,n.kt)("inlineCode",{parentName:"p"},"PublicIdentitiesApi")," to pull an identity needed to be the owner of the Workgroup."),(0,n.kt)("p",null,"On lines 20-32 the new workgroup object is initialized and sent to the ",(0,n.kt)("inlineCode",{parentName:"p"},"CreateWorkgroup")," method on line 34."),(0,n.kt)("p",null,"To run the code, run this command:"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-go"}),"go run sdk.go\n")),(0,n.kt)("p",null,"The WorkGroup is assigned to the ",(0,n.kt)("inlineCode",{parentName:"p"},"newWorkgroup")," variable and the details are printed out:"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-json"}),'{\n  "created": null,\n  "description": "Description of the Governance Group",\n  "modified": null,\n  "name": "DB Access Governance Group",\n  "owner": {\n    "displayName": "Brian Mendoza",\n    "emailAddress": null,\n    "id": "0003c25c365e492381d4e557b6159f9b",\n    "name": "Brian Mendoza",\n    "type": "IDENTITY"\n  }\n}\n')))}v.isMDXComponent=!0}}]);