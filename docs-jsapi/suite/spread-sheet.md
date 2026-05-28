# API

## 方法

### 调用方式

以下新增 API 均为 `PC only`。

```typescript
const sdk = await connect(options)

await sdk.history?.show()
await sdk.locks?.show()
await sdk.mention?.locateCellByGuid(guid)
await sdk.presentation?.quit()
```

### 新旧兼容

```typescript
const sdk = await connect(options)

// 旧写法
await sdk.getEditor().showHistory?.()
await sdk.getEditor().createRevision?.()

// 新写法
await sdk.history?.show()
await sdk.version?.createRevision()
```

### 方法列表

| 方法                                                                             | 说明             | 平台      |
| -------------------------------------------------------------------------------- | ---------------- | --------- |
| [sdk.history.show](#sdkhistoryshow)                                              | 显示历史         | `PC only` |
| [sdk.history.hide](#sdkhistoryhide)                                              | 隐藏历史         | `PC only` |
| [sdk.comments.show](#sdkcommentsshowtype)                                        | 显示评论         | `PC only` |
| [sdk.comments.hide](#sdkcommentshidetype)                                        | 隐藏评论         | `PC only` |
| [sdk.locks.show](#sdklocksshow)                                                  | 显示锁定侧边栏   | `PC only` |
| [sdk.locks.hide](#sdklockshide)                                                  | 隐藏锁定侧边栏   | `PC only` |
| [sdk.locks.addRangeLock](#sdklocksaddrangelockoptions)                           | 创建单元格锁定   | `PC only` |
| [sdk.locks.addSheetLock](#sdklocksaddsheetlockoptions)                           | 创建工作表锁定   | `PC only` |
| [sdk.locks.removeRangeLocksInRanges](#sdklocksremoverangelocksinrangesoptions)   | 删除范围锁定     | `PC only` |
| [sdk.locks.removeSheetLock](#sdklocksremovesheetlockoptions)                     | 删除工作表锁定   | `PC only` |
| [sdk.mention.locateCellByGuid](#sdkmentionlocatecellbyguidguid-notificationtype) | 按通知定位单元格 | `PC only` |
| [sdk.content.setContent](#sdkcontentsetcontentcontent)                           | 设置内容         | `PC only` |
| [sdk.version.createRevision](#sdkversioncreaterevisionoptions)                   | 创建版本         | `PC only` |
| [sdk.presentation.start](#sdkpresentationstartindex)                             | 启动演示         | `PC only` |
| [sdk.presentation.quit](#sdkpresentationquit)                                    | 退出演示         | `PC only` |

---

### sdk.history.show()

#### 说明

显示表格历史侧边栏。

`PC only`

#### 类型定义

```typescript
sdk.history?.show(): Promise<void>
```

#### 示例

```typescript
const sdk = await connect(options)

await sdk.history?.show()
```

---

### sdk.history.hide()

#### 说明

隐藏表格历史侧边栏。

`PC only`

#### 类型定义

```typescript
sdk.history?.hide(): Promise<void>
```

#### 示例

```typescript
const sdk = await connect(options)

await sdk.history?.hide()
```

---

### sdk.comments.show(type?)

#### 说明

显示评论能力入口。

`PC only`

#### 类型定义

```typescript
sdk.comments?.show(type?: 'list' | 'card'): Promise<void>
```

#### 参数

- `type`: 可选的评论展示类型

#### 示例

```typescript
const sdk = await connect(options)

await sdk.comments?.show()
```

---

### sdk.comments.hide(type?)

#### 说明

隐藏评论能力入口。

`PC only`

#### 类型定义

```typescript
sdk.comments?.hide(type?: 'list' | 'card'): Promise<void>
```

#### 参数

- `type`: 可选的评论展示类型

#### 示例

```typescript
const sdk = await connect(options)

await sdk.comments?.hide()
```

---

### sdk.locks.show()

#### 说明

显示锁定侧边栏。

`PC only`

#### 类型定义

```typescript
sdk.locks?.show(): Promise<void>
```

#### 示例

```typescript
const sdk = await connect(options)

await sdk.locks?.show()
```

---

### sdk.locks.hide()

#### 说明

隐藏锁定侧边栏。

`PC only`

#### 类型定义

```typescript
sdk.locks?.hide(): Promise<void>
```

#### 示例

```typescript
const sdk = await connect(options)

await sdk.locks?.hide()
```

---

### sdk.locks.addRangeLock(options)

#### 说明

创建单元格范围锁定。

`PC only`

#### 类型定义

```typescript
sdk.locks?.addRangeLock(options: Record<string, unknown>): Promise<void>
```

#### 参数

- `options`: 锁定参数

#### 示例

```typescript
const sdk = await connect(options)

await sdk.locks?.addRangeLock({
  userPermissions: { 1001: 0 },
  description: 'Editable range'
})
```

---

### sdk.locks.addSheetLock(options)

#### 说明

创建工作表锁定。

`PC only`

#### 类型定义

```typescript
sdk.locks?.addSheetLock(options: Record<string, unknown>): Promise<void>
```

#### 参数

- `options`: 锁定参数

#### 示例

```typescript
const sdk = await connect(options)

await sdk.locks?.addSheetLock({
  userPermissions: { 1001: 0 },
  description: 'Main sheet lock'
})
```

---

### sdk.locks.removeRangeLocksInRanges(options)

#### 说明

删除指定范围内的单元格锁定。

`PC only`

#### 类型定义

```typescript
sdk.locks?.removeRangeLocksInRanges(
  options: Record<string, unknown>
): Promise<void>
```

#### 参数

- `options`: 删除条件

#### 示例

```typescript
const sdk = await connect(options)

await sdk.locks?.removeRangeLocksInRanges({
  sheetId: 'sheet-1'
})
```

---

### sdk.locks.removeSheetLock(options)

#### 说明

删除工作表锁定。

`PC only`

#### 类型定义

```typescript
sdk.locks?.removeSheetLock(options: Record<string, unknown>): Promise<void>
```

#### 参数

- `options`: 删除条件

#### 示例

```typescript
const sdk = await connect(options)

await sdk.locks?.removeSheetLock({
  sheetId: 'sheet-1'
})
```

---

### sdk.mention.locateCellByGuid(guid, notificationType?)

#### 说明

根据通知 guid 定位到对应单元格。

`PC only`

#### 类型定义

```typescript
sdk.mention?.locateCellByGuid(
  guid: string,
  notificationType?: string
): Promise<void>
```

#### 参数

- `guid`: 通知对应的 guid
- `notificationType`: 可选的通知类型

#### 示例

```typescript
const sdk = await connect(options)

await sdk.mention?.locateCellByGuid('message-guid', 'comment')
```

---

### sdk.content.setContent(content)

#### 说明

设置表格内容。

`PC only`

#### 类型定义

```typescript
sdk.content?.setContent(content: unknown): Promise<void>
```

#### 参数

- `content`: 要写入的内容

#### 示例

```typescript
const sdk = await connect(options)

await sdk.content?.setContent({
  sheets: []
})
```

---

### sdk.version.createRevision(options?)

#### 说明

创建表格版本。

`PC only`

#### 类型定义

```typescript
sdk.version?.createRevision(options?: { name?: string }): Promise<void>
```

#### 参数

- `options`: 可选的版本参数

#### 示例

```typescript
const sdk = await connect(options)

await sdk.version?.createRevision({ name: 'v1' })
```

---

### sdk.presentation.start(index?)

#### 说明

启动表格演示模式。

`PC only`

#### 类型定义

```typescript
sdk.presentation?.start(index?: number): Promise<void>
```

#### 参数

- `index`: 可选参数

#### 示例

```typescript
const sdk = await connect(options)

await sdk.presentation?.start()
```

---

### sdk.presentation.quit()

#### 说明

退出表格演示模式。

`PC only`

#### 类型定义

```typescript
sdk.presentation?.quit(): Promise<void>
```

#### 示例

```typescript
const sdk = await connect(options)

await sdk.presentation?.quit()
```

---

## 兼容说明

- 本页仅描述根级 facade 的调用方式
- `sdk.presentation?.start(index?)` 当前表格侧按无参启动演示处理，不承诺 `index` 生效
