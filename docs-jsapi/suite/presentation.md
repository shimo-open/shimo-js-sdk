# API

## 方法

### 调用方式

```typescript
const sdk = await connect(options)

await sdk.history?.show()
await sdk.comments?.show()
await sdk.presentation?.startFromCurrent()
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

| 方法                                                                  | 说明             |
| --------------------------------------------------------------------- | ---------------- |
| [sdk.history.show](#sdkhistoryshow)                                   | 显示历史         |
| [sdk.history.hide](#sdkhistoryhide)                                   | 隐藏历史         |
| [sdk.comments.show](#sdkcommentsshowtype)                             | 显示评论         |
| [sdk.comments.hide](#sdkcommentshidetype)                             | 隐藏评论         |
| [sdk.version.createRevision](#sdkversioncreaterevisionoptions)        | 创建版本         |
| [sdk.presentation.start](#sdkpresentationstartindex)                  | 启动演示         |
| [sdk.presentation.quit](#sdkpresentationquit)                         | 退出演示         |
| [sdk.presentation.startFromCurrent](#sdkpresentationstartfromcurrent) | 从当前页开始演示 |
| [sdk.presentation.startSpeakerView](#sdkpresentationstartspeakerview) | 启动演讲者视图   |

---

### sdk.history.show()

#### 说明

显示演示文稿历史侧边栏。

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

隐藏演示文稿历史侧边栏。

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

### sdk.version.createRevision(options?)

#### 说明

创建演示文稿版本。

#### 类型定义

```typescript
sdk.version?.createRevision(options?: { name?: string }): Promise<void>
```

#### 参数

- `options`: 可选的版本参数

#### 示例

```typescript
const sdk = await connect(options)

await sdk.version?.createRevision({ name: 'presentation-v1' })
```

---

### sdk.presentation.start(index?)

#### 说明

启动演示文稿演示模式。

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

### sdk.presentation.quit()

#### 说明

退出演示模式。

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

### sdk.presentation.startFromCurrent()

#### 说明

从当前页开始演示。

#### 类型定义

```typescript
sdk.presentation?.startFromCurrent(): Promise<void>
```

#### 示例

```typescript
const sdk = await connect(options)

await sdk.presentation?.startFromCurrent()
```

---

### sdk.presentation.startSpeakerView()

#### 说明

启动演讲者视图。

#### 类型定义

```typescript
sdk.presentation?.startSpeakerView(): Promise<void>
```

#### 示例

```typescript
const sdk = await connect(options)

await sdk.presentation?.startSpeakerView()
```

---

## 兼容说明

- 本页仅描述根级 facade 的调用方式
- `sdk.presentation?.startRemoteLive()` 当前未在 `presentation` 套件承接，不应视为已支持接口
