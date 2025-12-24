[shimo-js-sdk - v1.2.24](../README.md) / DocumentPro

# Namespace: DocumentPro

## Table of contents

### Interfaces

- [Comment](../interfaces/DocumentPro.Comment.md)
- [CommentData](../interfaces/DocumentPro.CommentData.md)
- [EventMap](../interfaces/DocumentPro.EventMap.md)
- [UpdateSignaturePayload](../interfaces/DocumentPro.UpdateSignaturePayload.md)
- [Editor](../interfaces/DocumentPro.Editor.md)
- [DocumentProComment](../interfaces/DocumentPro.DocumentProComment.md)
- [DocumentProCommentData](../interfaces/DocumentPro.DocumentProCommentData.md)

### Type aliases

- [DocumentPos](DocumentPro.md#documentpos)
- [HorizontalAlignment](DocumentPro.md#horizontalalignment)
- [Events](DocumentPro.md#events)

## Type aliases

### DocumentPos

Ƭ **DocumentPos**: ``0`` \| ``1`` \| ``2``

文档位置
0 - 正文
1 - 页眉
2 - 页脚

#### Defined in

[src/types/DocumentPro.ts:70](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/types/DocumentPro.ts#L70)

___

### HorizontalAlignment

Ƭ **HorizontalAlignment**: ``0`` \| ``1`` \| ``2``

水平对齐方式
0 - 右对齐
1 - 左对齐
2 - 居中对齐

#### Defined in

[src/types/DocumentPro.ts:78](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/types/DocumentPro.ts#L78)

___

### Events

Ƭ **Events**: ``"selectionEnded"`` \| ``"documentChanged"`` \| ``"commentClicked"`` \| ``"FullRecalculated"``

事件名

#### Defined in

[src/types/DocumentPro.ts:81](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/types/DocumentPro.ts#L81)
