[shimo-js-sdk](/README.md) / [Exports](/modules.md) / UrlSharingType

# Enumeration: UrlSharingType

分享链接的类型，用于在 generateUrl 中返回不同的 URL。
比如 return sharingType === UrlSharingType.FormFill ? '/form/1/fill' : '/form/1'。
'/form/1/fill' 为对外匿名可访问填写表单的链接，'/form/1' 为对内编辑表单元素、需鉴权的链接。

## Table of contents

### Enumeration members

- [Doc](/enums/UrlSharingType.md#doc)
- [Docx](/enums/UrlSharingType.md#docx)
- [Spreadsheet](/enums/UrlSharingType.md#spreadsheet)
- [Form](/enums/UrlSharingType.md#form)
- [FormPreview](/enums/UrlSharingType.md#formpreview)
- [FormFill](/enums/UrlSharingType.md#formfill)
- [Presentation](/enums/UrlSharingType.md#presentation)
- [Table](/enums/UrlSharingType.md#table)
- [Flowchart](/enums/UrlSharingType.md#flowchart)
- [Mindmap](/enums/UrlSharingType.md#mindmap)
- [Board](/enums/UrlSharingType.md#board)

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

### Spreadsheet

• **Spreadsheet** = `"sheet"`

代表分享的是表格链接

#### Defined in

node_modules/shimo-js-sdk-shared/dist/types.d.ts:298

___

### Form

• **Form** = `"form"`

代表分享的是表单编辑器链接

#### Defined in

node_modules/shimo-js-sdk-shared/dist/types.d.ts:302

___

### FormPreview

• **FormPreview** = `"formPreview"`

代表分享的是表单预览链接

#### Defined in

node_modules/shimo-js-sdk-shared/dist/types.d.ts:306

___

### FormFill

• **FormFill** = `"formFill"`

代表分享的是表单填写链接

#### Defined in

node_modules/shimo-js-sdk-shared/dist/types.d.ts:310

___

### Presentation

• **Presentation** = `"presentation"`

代表分享的是幻灯片链接

#### Defined in

node_modules/shimo-js-sdk-shared/dist/types.d.ts:314

___

### Table

• **Table** = `"table"`

代表分享的是应用表格链接

#### Defined in

node_modules/shimo-js-sdk-shared/dist/types.d.ts:318

___

### Flowchart

• **Flowchart** = `"flowchart"`

代表分享的是流程图链接

#### Defined in

node_modules/shimo-js-sdk-shared/dist/types.d.ts:322

___

### Mindmap

• **Mindmap** = `"mindmap"`

代表分享的是思维导图链接

#### Defined in

node_modules/shimo-js-sdk-shared/dist/types.d.ts:326

___

### Board

• **Board** = `"board"`

代表分享的是白板链接

#### Defined in

node_modules/shimo-js-sdk-shared/dist/types.d.ts:330
