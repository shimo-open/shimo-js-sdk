[shimo-js-sdk](../README.md) / [Exports](../modules.md) / UrlSharingType

# Enumeration: UrlSharingType

分享链接的类型，用于在 generateUrl 中返回不同的 URL。
比如 return sharingType === UrlSharingType.FormFill ? '/form/1/fill' : '/form/1'。
'/form/1/fill' 为对外匿名可访问填写表单的链接，'/form/1' 为对内编辑表单元素、需鉴权的链接。

## Table of contents

### Enumeration members

- [Doc](UrlSharingType.md#doc)
- [Docx](UrlSharingType.md#docx)
- [Form](UrlSharingType.md#form)
- [FormFill](UrlSharingType.md#formfill)
- [FormPreview](UrlSharingType.md#formpreview)
- [Presentation](UrlSharingType.md#presentation)
- [Spreadsheet](UrlSharingType.md#spreadsheet)
- [Table](UrlSharingType.md#table)

## Enumeration members

### Doc

• **Doc** = `"doc"`

代表分享的是轻文档链接

#### Defined in

node_modules/shimo-js-sdk-shared/dist/types.d.ts:290

___

### Docx

• **Docx** = `"docx"`

代表分享的是传统文档链接

#### Defined in

node_modules/shimo-js-sdk-shared/dist/types.d.ts:294

___

### Form

• **Form** = `"form"`

代表分享的是表单编辑器链接

#### Defined in

node_modules/shimo-js-sdk-shared/dist/types.d.ts:302

___

### FormFill

• **FormFill** = `"formFill"`

代表分享的是表单填写链接

#### Defined in

node_modules/shimo-js-sdk-shared/dist/types.d.ts:310

___

### FormPreview

• **FormPreview** = `"formPreview"`

代表分享的是表单预览链接

#### Defined in

node_modules/shimo-js-sdk-shared/dist/types.d.ts:306

___

### Presentation

• **Presentation** = `"presentation"`

代表分享的是幻灯片链接

#### Defined in

node_modules/shimo-js-sdk-shared/dist/types.d.ts:314

___

### Spreadsheet

• **Spreadsheet** = `"sheet"`

代表分享的是表格链接

#### Defined in

node_modules/shimo-js-sdk-shared/dist/types.d.ts:298

___

### Table

• **Table** = `"table"`

代表分享的是应用表格链接

#### Defined in

node_modules/shimo-js-sdk-shared/dist/types.d.ts:318
