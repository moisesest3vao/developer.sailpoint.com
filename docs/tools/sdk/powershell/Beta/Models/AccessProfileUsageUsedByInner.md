---
id: access-profile-usage-used-by-inner
title: AccessProfileUsageUsedByInner
pagination_label: AccessProfileUsageUsedByInner
sidebar_label: AccessProfileUsageUsedByInner
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'AccessProfileUsageUsedByInner'] 
slug: /tools/sdk/powershell/beta/models/access-profile-usage-used-by-inner
tags: ['SDK', 'Software Development Kit', 'AccessProfileUsageUsedByInner']
---


# AccessProfileUsageUsedByInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  Pointer to  **Enum** [  "ROLE" ] | DTO type of role using the access profile. | [optional] 
**Id** |  Pointer to **String** | ID of role using the access profile. | [optional] 
**Name** |  Pointer to **String** | Display name of role using the access profile. | [optional] 

## Examples

- Prepare the resource
```powershell
$AccessProfileUsageUsedByInner = Initialize-PSSailpointBetaAccessProfileUsageUsedByInner  -Type ROLE `
 -Id 2c8180857a9b3da0017aa03418480f9d `
 -Name Manager Role
```

- Convert the resource to JSON
```powershell
$AccessProfileUsageUsedByInner | ConvertTo-JSON
```


[[Back to top]](#) 
