---
id: access-constraint
title: AccessConstraint
pagination_label: AccessConstraint
sidebar_label: AccessConstraint
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'AccessConstraint'] 
slug: /tools/sdk/powershell/beta/models/access-constraint
tags: ['SDK', 'Software Development Kit', 'AccessConstraint']
---


# AccessConstraint

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |   **Enum** [  "ENTITLEMENT",    "ACCESS_PROFILE",    "ROLE" ] | Type of Access | 
**Ids** |  Pointer to **[]String** | Must be set only if operator is SELECTED. | [optional] 
**Operator** |   **Enum** [  "ALL",    "SELECTED" ] | Used to determine whether the scope of the campaign should be reduced for selected ids or all. | 

## Examples

- Prepare the resource
```powershell
$AccessConstraint = Initialize-PSSailpointBetaAccessConstraint  -Type ENTITLEMENT `
 -Ids [2c90ad2a70ace7d50170acf22ca90010] `
 -Operator SELECTED
```

- Convert the resource to JSON
```powershell
$AccessConstraint | ConvertTo-JSON
```


[[Back to top]](#) 
