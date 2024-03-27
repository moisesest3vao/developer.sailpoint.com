---
id: access-request-config
title: AccessRequestConfig
pagination_label: AccessRequestConfig
sidebar_label: AccessRequestConfig
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'AccessRequestConfig'] 
slug: /tools/sdk/go/v3/models/access-request-config
tags: ['SDK', 'Software Development Kit', 'AccessRequestConfig']
---

# AccessRequestConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ApprovalsMustBeExternal** |  Pointer to **bool** | If true, then approvals must be processed by external system. | [optional] 
**AutoApprovalEnabled** |  Pointer to **bool** | If true and requester and reviewer are the same, then automatically approve the approval. | [optional] 
**RequestOnBehalfOfConfig** |  Pointer to [**RequestOnBehalfOfConfig**](request-on-behalf-of-config) |  | [optional] 
**ApprovalReminderAndEscalationConfig** |  Pointer to [**ApprovalReminderAndEscalationConfig**](approval-reminder-and-escalation-config) |  | [optional] 
**EntitlementRequestConfig** |  Pointer to [**EntitlementRequestConfig**](entitlement-request-config) |  | [optional] 

## Methods

### NewAccessRequestConfig

`func NewAccessRequestConfig() *AccessRequestConfig`

NewAccessRequestConfig instantiates a new AccessRequestConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccessRequestConfigWithDefaults

`func NewAccessRequestConfigWithDefaults() *AccessRequestConfig`

NewAccessRequestConfigWithDefaults instantiates a new AccessRequestConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetApprovalsMustBeExternal

`func (o *AccessRequestConfig) GetApprovalsMustBeExternal() bool`

GetApprovalsMustBeExternal returns the ApprovalsMustBeExternal field if non-nil, zero value otherwise.

### GetApprovalsMustBeExternalOk

`func (o *AccessRequestConfig) GetApprovalsMustBeExternalOk() (*bool, bool)`

GetApprovalsMustBeExternalOk returns a tuple with the ApprovalsMustBeExternal field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovalsMustBeExternal

`func (o *AccessRequestConfig) SetApprovalsMustBeExternal(v bool)`

SetApprovalsMustBeExternal sets ApprovalsMustBeExternal field to given value.

### HasApprovalsMustBeExternal

`func (o *AccessRequestConfig) HasApprovalsMustBeExternal() bool`

HasApprovalsMustBeExternal returns a boolean if a field has been set.

### GetAutoApprovalEnabled

`func (o *AccessRequestConfig) GetAutoApprovalEnabled() bool`

GetAutoApprovalEnabled returns the AutoApprovalEnabled field if non-nil, zero value otherwise.

### GetAutoApprovalEnabledOk

`func (o *AccessRequestConfig) GetAutoApprovalEnabledOk() (*bool, bool)`

GetAutoApprovalEnabledOk returns a tuple with the AutoApprovalEnabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAutoApprovalEnabled

`func (o *AccessRequestConfig) SetAutoApprovalEnabled(v bool)`

SetAutoApprovalEnabled sets AutoApprovalEnabled field to given value.

### HasAutoApprovalEnabled

`func (o *AccessRequestConfig) HasAutoApprovalEnabled() bool`

HasAutoApprovalEnabled returns a boolean if a field has been set.

### GetRequestOnBehalfOfConfig

`func (o *AccessRequestConfig) GetRequestOnBehalfOfConfig() RequestOnBehalfOfConfig`

GetRequestOnBehalfOfConfig returns the RequestOnBehalfOfConfig field if non-nil, zero value otherwise.

### GetRequestOnBehalfOfConfigOk

`func (o *AccessRequestConfig) GetRequestOnBehalfOfConfigOk() (*RequestOnBehalfOfConfig, bool)`

GetRequestOnBehalfOfConfigOk returns a tuple with the RequestOnBehalfOfConfig field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestOnBehalfOfConfig

`func (o *AccessRequestConfig) SetRequestOnBehalfOfConfig(v RequestOnBehalfOfConfig)`

SetRequestOnBehalfOfConfig sets RequestOnBehalfOfConfig field to given value.

### HasRequestOnBehalfOfConfig

`func (o *AccessRequestConfig) HasRequestOnBehalfOfConfig() bool`

HasRequestOnBehalfOfConfig returns a boolean if a field has been set.

### GetApprovalReminderAndEscalationConfig

`func (o *AccessRequestConfig) GetApprovalReminderAndEscalationConfig() ApprovalReminderAndEscalationConfig`

GetApprovalReminderAndEscalationConfig returns the ApprovalReminderAndEscalationConfig field if non-nil, zero value otherwise.

### GetApprovalReminderAndEscalationConfigOk

`func (o *AccessRequestConfig) GetApprovalReminderAndEscalationConfigOk() (*ApprovalReminderAndEscalationConfig, bool)`

GetApprovalReminderAndEscalationConfigOk returns a tuple with the ApprovalReminderAndEscalationConfig field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovalReminderAndEscalationConfig

`func (o *AccessRequestConfig) SetApprovalReminderAndEscalationConfig(v ApprovalReminderAndEscalationConfig)`

SetApprovalReminderAndEscalationConfig sets ApprovalReminderAndEscalationConfig field to given value.

### HasApprovalReminderAndEscalationConfig

`func (o *AccessRequestConfig) HasApprovalReminderAndEscalationConfig() bool`

HasApprovalReminderAndEscalationConfig returns a boolean if a field has been set.

### GetEntitlementRequestConfig

`func (o *AccessRequestConfig) GetEntitlementRequestConfig() EntitlementRequestConfig`

GetEntitlementRequestConfig returns the EntitlementRequestConfig field if non-nil, zero value otherwise.

### GetEntitlementRequestConfigOk

`func (o *AccessRequestConfig) GetEntitlementRequestConfigOk() (*EntitlementRequestConfig, bool)`

GetEntitlementRequestConfigOk returns a tuple with the EntitlementRequestConfig field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntitlementRequestConfig

`func (o *AccessRequestConfig) SetEntitlementRequestConfig(v EntitlementRequestConfig)`

SetEntitlementRequestConfig sets EntitlementRequestConfig field to given value.

### HasEntitlementRequestConfig

`func (o *AccessRequestConfig) HasEntitlementRequestConfig() bool`

HasEntitlementRequestConfig returns a boolean if a field has been set.


[[Back to top]](#) 

