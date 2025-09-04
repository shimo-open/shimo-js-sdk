[shimo-js-sdk - v1.2.10](/README.md) / [DocumentPro](/modules/DocumentPro.md) / UpdateSignaturePayload

# Interface: UpdateSignaturePayload

[DocumentPro](/modules/DocumentPro.md).UpdateSignaturePayload

## Table of contents

### Properties

- [url](/interfaces/DocumentPro.UpdateSignaturePayload.md#url)
- [id](/interfaces/DocumentPro.UpdateSignaturePayload.md#id)

## Properties

### url

• **url**: ``null`` \| `string`

待更新的签名图片，需要是 data:<media type>;base64,<base64 data> 的格式，传 null 则清除签名图片。
Ref: https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URLs

#### Defined in

[src/types/DocumentPro.ts:141](https://github.com/byte9527/shimo-js-sdk/blob/main/src/types/DocumentPro.ts#L141)

___

### id

• **id**: `string`

待更新的签名图片 ID，用于指定更新的签名组件，需要和 `showSignatureComponent` 事件中的 `id` 一致。

#### Defined in

[src/types/DocumentPro.ts:146](https://github.com/byte9527/shimo-js-sdk/blob/main/src/types/DocumentPro.ts#L146)
