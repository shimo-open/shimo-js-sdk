[shimo-js-sdk - v2.0.2](../README.md) / EmptyPageContentOverride

# Interface: EmptyPageContentOverride

单个 scene 的文案/按钮自定义。未提供的字段走内置默认（文案走默认，按钮不渲染）。

## Table of contents

### Properties

- [title](EmptyPageContentOverride.md#title)
- [description](EmptyPageContentOverride.md#description)
- [primary](EmptyPageContentOverride.md#primary)
- [secondary](EmptyPageContentOverride.md#secondary)

## Properties

### title

• `Optional` **title**: `string`

覆盖标题。

#### Defined in

[src/types/EmptyPage.ts:44](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/types/EmptyPage.ts#L44)

___

### description

• `Optional` **description**: `string`

覆盖描述。

#### Defined in

[src/types/EmptyPage.ts:46](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/types/EmptyPage.ts#L46)

___

### primary

• `Optional` **primary**: [`EmptyPageActionOverride`](EmptyPageActionOverride.md)

主按钮。不传则不渲染主按钮。

#### Defined in

[src/types/EmptyPage.ts:48](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/types/EmptyPage.ts#L48)

___

### secondary

• `Optional` **secondary**: [`EmptyPageActionOverride`](EmptyPageActionOverride.md)

次按钮。不传则不渲染次按钮。

#### Defined in

[src/types/EmptyPage.ts:50](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/types/EmptyPage.ts#L50)
