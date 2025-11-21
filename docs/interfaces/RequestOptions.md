[shimo-js-sdk - v1.2.17](/README.md) / RequestOptions

# Interface: RequestOptions

请求参数

## Table of contents

### Properties

- [url](/interfaces/RequestOptions.md#url)
- [method](/interfaces/RequestOptions.md#method)
- [headers](/interfaces/RequestOptions.md#headers)
- [query](/interfaces/RequestOptions.md#query)

## Properties

### url

• **url**: `string`

目标 URL，不含 query string

#### Defined in

node_modules/shimo-js-sdk-shared/dist/APIAdaptor.d.ts:15

___

### method

• **method**: ``"GET"`` \| ``"POST"`` \| ``"PUT"`` \| ``"DELETE"`` \| ``"PATCH"``

#### Defined in

node_modules/shimo-js-sdk-shared/dist/APIAdaptor.d.ts:16

___

### headers

• `Optional` **headers**: `Object`

#### Index signature

▪ [K: `string`]: `string`

#### Defined in

node_modules/shimo-js-sdk-shared/dist/APIAdaptor.d.ts:17

___

### query

• `Optional` **query**: `Record`<`string`, `string`\>

URL query string 参数

#### Defined in

node_modules/shimo-js-sdk-shared/dist/APIAdaptor.d.ts:23
