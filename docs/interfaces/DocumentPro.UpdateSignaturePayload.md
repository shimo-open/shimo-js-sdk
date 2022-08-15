[shimo-js-sdk](../README.md) / [Exports](../modules.md) / [DocumentPro](../modules/DocumentPro.md) / UpdateSignaturePayload

# Interface: UpdateSignaturePayload

[DocumentPro](../modules/DocumentPro.md).UpdateSignaturePayload

## Table of contents

### Properties

- [id](DocumentPro.UpdateSignaturePayload.md#id)
- [url](DocumentPro.UpdateSignaturePayload.md#url)

## Properties

### id

• **id**: `string`

待更新的签名图片 ID，用于指定更新的签名组件，需要和 showSignatureComponent 中的一致。

#### Defined in

[src/types/DocumentPro.ts:151](https://github.com/shimohq/shimo-js-sdk/blob/8051ee1/src/types/DocumentPro.ts#L151)

___

### url

• **url**: ``null`` \| `string`

待更新的签名图片，需要是 data:<media type>;base64,<base64 data> 的格式，传 null 则清除签名图片。
Ref: https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URLs

#### Defined in

[src/types/DocumentPro.ts:146](https://github.com/shimohq/shimo-js-sdk/blob/8051ee1/src/types/DocumentPro.ts#L146)
