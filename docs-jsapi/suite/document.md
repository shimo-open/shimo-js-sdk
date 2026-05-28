# API

## 方法

### 调用方式

以下新增 API 均为 `PC only`。

```typescript
const sdk = await connect(options)

await sdk.title?.setTitle('Weekly Report')
await sdk.comments?.show('list')
await sdk.presentation?.start()
```

### 新旧兼容

```typescript
const sdk = await connect(options)

// 旧写法
await sdk.getEditor().setTitle?.('Weekly Report')
await sdk.getEditor().showComments?.()

// 新写法
await sdk.title?.setTitle('Weekly Report')
await sdk.comments?.show()
```

### 方法列表

| 方法                                                                | 说明         | 平台      |
| ------------------------------------------------------------------- | ------------ | --------- |
| [sdk.title.addChangedListener](#sdktitleaddchangedlistenerlistener) | 监听标题变化 | `PC only` |
| [sdk.title.setTitle](#sdktitlesettitletitle)                        | 设置标题     | `PC only` |
| [sdk.comments.show](#sdkcommentsshowtype)                           | 显示评论     | `PC only` |
| [sdk.comments.hide](#sdkcommentshidetype)                           | 隐藏评论     | `PC only` |
| [sdk.presentation.start](#sdkpresentationstartindex)                | 启动演示     | `PC only` |

---

### sdk.title.addChangedListener(listener)

#### 说明

监听文档标题变化。

`PC only`

#### 类型定义

```typescript
sdk.title?.addChangedListener(
  listener: (title: string) => void
): (() => void) | undefined
```

#### 参数

- `listener`: 标题变化时触发的回调函数

#### 返回值

- `() => void`：取消当前监听函数

#### 示例

```typescript
const sdk = await connect(options)

const dispose = sdk.title?.addChangedListener((title) => {
  console.log('title changed:', title)
})

dispose?.()
```

---

### sdk.title.setTitle(title)

#### 说明

设置当前文档标题。

`PC only`

#### 类型定义

```typescript
sdk.title?.setTitle(title: string): Promise<void>
```

#### 参数

- `title`: 要设置的新标题

#### 示例

```typescript
const sdk = await connect(options)

await sdk.title?.setTitle('Weekly Report')
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
await sdk.comments?.show('list')
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

### sdk.presentation.start(index?)

#### 说明

启动文档演示模式。

`PC only`

#### 类型定义

```typescript
sdk.presentation?.start(index?: number): Promise<void>
```

#### 参数

- `index`: 可选的起始位置参数

#### 示例

```typescript
const sdk = await connect(options)

await sdk.presentation?.start()
```

---

## 兼容说明

- 本页仅描述根级 facade 的调用方式
- `document` 当前只支持 `sdk.presentation?.start(index?)`
- 以下方法当前未在 `document` 套件承接：
  - `sdk.presentation?.quit()`
  - `sdk.presentation?.startFromCurrent()`
  - `sdk.presentation?.startRemoteLive()`
  - `sdk.presentation?.startSpeakerView()`
