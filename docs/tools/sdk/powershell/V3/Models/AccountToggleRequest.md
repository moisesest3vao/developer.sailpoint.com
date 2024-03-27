---
id: account-toggle-request
title: AccountToggleRequest
pagination_label: AccountToggleRequest
sidebar_label: AccountToggleRequest
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'AccountToggleRequest'] 
slug: /tools/sdk/powershell/v3/models/account-toggle-request
tags: ['SDK', 'Software Development Kit', 'AccountToggleRequest']
---


# AccountToggleRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ExternalVerificationId** |  Pointer to **String** | If set, an external process validates that the user wants to proceed with this request. | [optional] 
**ForceProvisioning** |  Pointer to **Boolean** | If set, provisioning updates the account attribute at the source.   This option is used when the account is not synced to ensure the attribute is updated. Providing &#39;true&#39; for an unlocked account will add and process &#39;Unlock&#39; operation by the workflow. | [optional] 

## Examples

- Prepare the resource
```powershell
$AccountToggleRequest = Initialize-PSSailpointAccountToggleRequest  -ExternalVerificationId 3f9180835d2e5168015d32f890ca1581 `
 -ForceProvisioning false
```

- Convert the resource to JSON
```powershell
$AccountToggleRequest | ConvertTo-JSON
```


[[Back to top]](#) 
