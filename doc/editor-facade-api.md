# 根级 Editor Facade API 文档

> 所在分支：`feat-headerbars`
>
> 本文档说明 `headerBars` 之外新增的根级结构化能力入口，以及它与旧扁平 editor proxy 的关系。

---

## 1. 概览

新增公开入口直接挂在 `OfficeSDK` 根级：

```ts
const sdk = await connect(options)

await sdk.title?.setTitle('New title')
await sdk.history?.show()
await sdk.mention?.locateCellByGuid(guid)
await sdk.presentation?.startFromCurrent()
```

设计目标：

- 对外结构尽量与 `@shimo/editor-sdk-core` 的能力命名保持一致
- 通过显式 facade 桥接通信，不再把新增能力继续挂到旧动态 proxy 上
- 默认一次只存在一种套件，因此按当前套件把能力直接暴露到 SDK 根级

当前已接入的是一个“可序列化子集”，优先覆盖：

- docs / docx：标题、评论、演示
- sheet：历史、评论、锁定、提及定位、内容写入、版本、演示
- presentation：历史、评论、版本、演示

---

## 2. 与旧 API 的关系

旧调用方式仍然可用，例如：

```ts
sdk.getEditor().showHistory?.()
sdk.getEditor().setTitle?.('New title')
```

但新增结构化能力推荐改用根级 facade：

```ts
await sdk.title?.setTitle('New title')
await sdk.locks?.show()
await sdk.presentation?.start()
```

约定说明：

- 旧扁平 `editor` proxy：兼容层
- 根级 facade：新增能力的推荐入口
- `sdk.presentation` 已改为“演示能力命名空间”，不再表示旧 `Presentation.Editor` 实例

---

## 3. 根级能力

### 3.1 `sdk.title`

```ts
title.addChangedListener(listener)
title.setTitle(title)
```

示例：

```ts
const unsubscribe = sdk.title?.addChangedListener((title) => {
  console.log(title)
})

await sdk.title?.setTitle('Weekly Report')

unsubscribe?.()
```

### 3.2 `sdk.comments`

```ts
comments.show(type?)
comments.hide(type?)
```

### 3.3 `sdk.history`

```ts
history.show()
history.hide()
```

### 3.4 `sdk.locks`

```ts
locks.show()
locks.hide()
locks.addRangeLock(options)
locks.addSheetLock(options)
locks.removeRangeLocksInRanges(options)
locks.removeSheetLock(options)
```

### 3.5 `sdk.mention`

```ts
mention.locateCellByGuid(guid, notificationType?)
```

### 3.6 `sdk.content`

```ts
content.setContent(content)
```

### 3.7 `sdk.version`

```ts
version.createRevision(options?)
```

### 3.8 `sdk.presentation`

```ts
presentation.start(index?)
presentation.quit()
presentation.startFromCurrent()
presentation.startRemoteLive()
presentation.startSpeakerView()
```

---

## 4. 套件挂载规则

- docs / docx：`title`、`comments`、`presentation`
- sheet：`history`、`comments`、`locks`、`mention`、`content`、`version`、`presentation`
- presentation：`history`、`comments`、`version`、`presentation`

不支持的能力在当前套件下保持为 `undefined`。

---

## 5. 限制

- 当前 facade 只暴露可稳定通过跨窗通信承接的子集
- 像 DocsRange、Worksheet、Slide 这类带方法句柄的运行时对象，暂未直接透出到宿主侧
- 新增能力统一走根级结构化入口，不再新增 `docs / sheet / presentation` 分组层
