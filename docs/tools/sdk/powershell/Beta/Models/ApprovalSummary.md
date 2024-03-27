---
id: approval-summary
title: ApprovalSummary
pagination_label: ApprovalSummary
sidebar_label: ApprovalSummary
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'ApprovalSummary'] 
slug: /tools/sdk/powershell/beta/models/approval-summary
tags: ['SDK', 'Software Development Kit', 'ApprovalSummary']
---


# ApprovalSummary

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Pending** |  Pointer to **Int32** | The number of pending access requests approvals. | [optional] 
**Approved** |  Pointer to **Int32** | The number of approved access requests approvals. | [optional] 
**Rejected** |  Pointer to **Int32** | The number of rejected access requests approvals. | [optional] 

## Examples

- Prepare the resource
```powershell
$ApprovalSummary = Initialize-PSSailpointBetaApprovalSummary  -Pending null `
 -Approved null `
 -Rejected null
```

- Convert the resource to JSON
```powershell
$ApprovalSummary | ConvertTo-JSON
```


[[Back to top]](#) 
