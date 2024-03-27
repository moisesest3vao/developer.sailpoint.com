---
id: account-correlated-account
title: AccountCorrelatedAccount
pagination_label: AccountCorrelatedAccount
sidebar_label: AccountCorrelatedAccount
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'AccountCorrelatedAccount'] 
slug: /tools/sdk/go/beta/models/account-correlated-account
tags: ['SDK', 'Software Development Kit', 'AccountCorrelatedAccount']
---

# AccountCorrelatedAccount

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **string** | The correlated account&#39;s DTO type. | 
**Id** |  **string** | The correlated account&#39;s ID. | 
**Name** |  **string** | The correlated account&#39;s display name. | 
**NativeIdentity** |  **string** | Unique ID of the account on the source. | 
**Uuid** |  Pointer to **NullableString** | The source&#39;s unique identifier for the account. UUID is generated by the source system. | [optional] 

## Methods

### NewAccountCorrelatedAccount

`func NewAccountCorrelatedAccount(type_ string, id string, name string, nativeIdentity string, ) *AccountCorrelatedAccount`

NewAccountCorrelatedAccount instantiates a new AccountCorrelatedAccount object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccountCorrelatedAccountWithDefaults

`func NewAccountCorrelatedAccountWithDefaults() *AccountCorrelatedAccount`

NewAccountCorrelatedAccountWithDefaults instantiates a new AccountCorrelatedAccount object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *AccountCorrelatedAccount) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *AccountCorrelatedAccount) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *AccountCorrelatedAccount) SetType(v string)`

SetType sets Type field to given value.


### GetId

`func (o *AccountCorrelatedAccount) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *AccountCorrelatedAccount) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *AccountCorrelatedAccount) SetId(v string)`

SetId sets Id field to given value.


### GetName

`func (o *AccountCorrelatedAccount) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *AccountCorrelatedAccount) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *AccountCorrelatedAccount) SetName(v string)`

SetName sets Name field to given value.


### GetNativeIdentity

`func (o *AccountCorrelatedAccount) GetNativeIdentity() string`

GetNativeIdentity returns the NativeIdentity field if non-nil, zero value otherwise.

### GetNativeIdentityOk

`func (o *AccountCorrelatedAccount) GetNativeIdentityOk() (*string, bool)`

GetNativeIdentityOk returns a tuple with the NativeIdentity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNativeIdentity

`func (o *AccountCorrelatedAccount) SetNativeIdentity(v string)`

SetNativeIdentity sets NativeIdentity field to given value.


### GetUuid

`func (o *AccountCorrelatedAccount) GetUuid() string`

GetUuid returns the Uuid field if non-nil, zero value otherwise.

### GetUuidOk

`func (o *AccountCorrelatedAccount) GetUuidOk() (*string, bool)`

GetUuidOk returns a tuple with the Uuid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUuid

`func (o *AccountCorrelatedAccount) SetUuid(v string)`

SetUuid sets Uuid field to given value.

### HasUuid

`func (o *AccountCorrelatedAccount) HasUuid() bool`

HasUuid returns a boolean if a field has been set.

### SetUuidNil

`func (o *AccountCorrelatedAccount) SetUuidNil(b bool)`

 SetUuidNil sets the value for Uuid to be an explicit nil

### UnsetUuid
`func (o *AccountCorrelatedAccount) UnsetUuid()`

UnsetUuid ensures that no value is present for Uuid, not even an explicit nil

[[Back to top]](#) 

