---
id: completed-approval-pre-approval-trigger-result
title: CompletedApprovalPreApprovalTriggerResult
pagination_label: CompletedApprovalPreApprovalTriggerResult
sidebar_label: CompletedApprovalPreApprovalTriggerResult
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'CompletedApprovalPreApprovalTriggerResult'] 
slug: /tools/sdk/powershell/beta/models/completed-approval-pre-approval-trigger-result
tags: ['SDK', 'Software Development Kit', 'CompletedApprovalPreApprovalTriggerResult']
---


# CompletedApprovalPreApprovalTriggerResult

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Comment** |  Pointer to **String** | The comment from the trigger | [optional] 
**Decision** |  Pointer to [**CompletedApprovalState**](completed-approval-state) |  | [optional] 
**Reviewer** |  Pointer to **String** | The name of the approver | [optional] 
**Date** |  Pointer to **System.DateTime** | The date and time the trigger decided on the request | [optional] 

## Examples

- Prepare the resource
```powershell
$CompletedApprovalPreApprovalTriggerResult = Initialize-PSSailpointBetaCompletedApprovalPreApprovalTriggerResult  -Comment This request was autoapproved by our automated ETS subscriber `
 -Decision null `
 -Reviewer Automated AR Approval `
 -Date 2022-06-07T19:18:40.748Z
```

- Convert the resource to JSON
```powershell
$CompletedApprovalPreApprovalTriggerResult | ConvertTo-JSON
```


[[Back to top]](#) 
