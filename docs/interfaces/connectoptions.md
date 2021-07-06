[shimo-js-sdk](../README.md) / [Exports](../modules.md) / ConnectOptions

# Interface: ConnectOptions

## Table of contents

### Properties

- [appId](connectoptions.md#appid)
- [container](connectoptions.md#container)
- [endpoint](connectoptions.md#endpoint)
- [fileId](connectoptions.md#fileid)
- [getSignature](connectoptions.md#getsignature)
- [params](connectoptions.md#params)
- [signature](connectoptions.md#signature)
- [token](connectoptions.md#token)

## Properties

### appId

• **appId**: `string`

Shimo App ID

#### Defined in

src/connect.ts:24

___

### container

• **container**: `HTMLElement`

The HTML element that iframe will be attached to

#### Defined in

src/connect.ts:50

___

### endpoint

• **endpoint**: `string`

The endpoint of Shimo server

#### Defined in

src/connect.ts:29

___

### fileId

• **fileId**: `string`

The file ID

#### Defined in

src/connect.ts:34

___

### getSignature

• `Optional` **getSignature**: () => `Promise`<`string`\>

#### Type declaration

▸ (): `Promise`<`string`\>

App signaure generator

##### Returns

`Promise`<`string`\>

#### Defined in

src/connect.ts:40

___

### params

• `Optional` **params**: `Object`

Params for requesting editor page

#### Index signature

▪ [key: `string`]: `string`

#### Defined in

src/connect.ts:60

___

### signature

• `Optional` **signature**: `string`

App signaure

#### Defined in

src/connect.ts:45

___

### token

• **token**: `string`

User authorization token

#### Defined in

src/connect.ts:55
