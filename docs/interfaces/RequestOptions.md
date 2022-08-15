[shimo-js-sdk](../README.md) / [Exports](../modules.md) / RequestOptions

# Interface: RequestOptions

请求参数

## Table of contents

### Properties

- [headers](RequestOptions.md#headers)
- [method](RequestOptions.md#method)
- [query](RequestOptions.md#query)
- [url](RequestOptions.md#url)

## Properties

### headers

• `Optional` **headers**: `Object`

#### Index signature

▪ [K: `string`]: `string`

#### Defined in

node_modules/shimo-js-sdk-shared/dist/APIAdaptor.d.ts:17

___

### method

• **method**: ``"GET"`` \| ``"POST"`` \| ``"PUT"`` \| ``"DELETE"`` \| ``"PATCH"``

#### Defined in

node_modules/shimo-js-sdk-shared/dist/APIAdaptor.d.ts:16

___

### query

• `Optional` **query**: `Record`<`string`, `string`\>

URL query string 参数

#### Defined in

node_modules/shimo-js-sdk-shared/dist/APIAdaptor.d.ts:23

___

### url

• **url**: `string`

目标 URL，不含 query string

#### Defined in

node_modules/shimo-js-sdk-shared/dist/APIAdaptor.d.ts:15
