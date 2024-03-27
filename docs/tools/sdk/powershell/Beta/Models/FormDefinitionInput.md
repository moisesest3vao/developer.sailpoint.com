---
id: form-definition-input
title: FormDefinitionInput
pagination_label: FormDefinitionInput
sidebar_label: FormDefinitionInput
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'FormDefinitionInput'] 
slug: /tools/sdk/powershell/beta/models/form-definition-input
tags: ['SDK', 'Software Development Kit', 'FormDefinitionInput']
---


# FormDefinitionInput

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **String** | Unique identifier for the form input. | [optional] 
**Type** |  Pointer to  **Enum** [  "STRING" ] | FormDefinitionInputType value. STRING FormDefinitionInputTypeString | [optional] 
**Label** |  Pointer to **String** | Name for the form input. | [optional] 
**Description** |  Pointer to **String** | Form input&#39;s description. | [optional] 

## Examples

- Prepare the resource
```powershell
$FormDefinitionInput = Initialize-PSSailpointBetaFormDefinitionInput  -Id 00000000-0000-0000-0000-000000000000 `
 -Type STRING `
 -Label input1 `
 -Description A single dynamic scalar value (i.e. number, string, date, etc.) that can be passed into the form for use in conditional logic
```

- Convert the resource to JSON
```powershell
$FormDefinitionInput | ConvertTo-JSON
```


[[Back to top]](#) 
