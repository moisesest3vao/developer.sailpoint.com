---
id: certifier-response
title: CertifierResponse
pagination_label: CertifierResponse
sidebar_label: CertifierResponse
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'CertifierResponse'] 
slug: /tools/sdk/powershell/beta/models/certifier-response
tags: ['SDK', 'Software Development Kit', 'CertifierResponse']
---


# CertifierResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **String** | the id of the certifier | [optional] 
**DisplayName** |  Pointer to **String** | the name of the certifier | [optional] 

## Examples

- Prepare the resource
```powershell
$CertifierResponse = Initialize-PSSailpointBetaCertifierResponse  -Id 8a80828f643d484f01643e14202e206f `
 -DisplayName John Snow
```

- Convert the resource to JSON
```powershell
$CertifierResponse | ConvertTo-JSON
```


[[Back to top]](#) 
