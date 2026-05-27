# Editor Facade API

## 调用方式

根级 facade 直接挂载在 `OfficeSDK` 实例上：

```typescript
const sdk = await connect(options)

await sdk.title?.setTitle('Weekly Report')
await sdk.comments?.show()
await sdk.history?.show()
await sdk.presentation?.start()
```

## 新旧兼容

旧的 `sdk.getEditor()` 调用方式仍可兼容，新增能力推荐优先使用根级 facade。

```typescript
const sdk = await connect(options)

// 旧写法
await sdk.getEditor().setTitle?.('Weekly Report')
await sdk.getEditor().showHistory?.()

// 新写法
await sdk.title?.setTitle('Weekly Report')
await sdk.history?.show()
```

## 套件支持

### document

已支持：

- `sdk.title?.addChangedListener(listener)`
- `sdk.title?.setTitle(title)`
- `sdk.comments?.show(type?)`
- `sdk.comments?.hide(type?)`
- `sdk.presentation?.start(index?)`

未支持：

- `sdk.presentation?.quit()`
- `sdk.presentation?.startFromCurrent()`
- `sdk.presentation?.startRemoteLive()`
- `sdk.presentation?.startSpeakerView()`

### spread-sheet

已支持：

- `sdk.history?.show()`
- `sdk.history?.hide()`
- `sdk.comments?.show(type?)`
- `sdk.comments?.hide(type?)`
- `sdk.locks?.show()`
- `sdk.locks?.hide()`
- `sdk.locks?.addRangeLock(options)`
- `sdk.locks?.addSheetLock(options)`
- `sdk.locks?.removeRangeLocksInRanges(options)`
- `sdk.locks?.removeSheetLock(options)`
- `sdk.mention?.locateCellByGuid(guid, notificationType?)`
- `sdk.content?.setContent(content)`
- `sdk.version?.createRevision(options?)`
- `sdk.presentation?.start(index?)`
- `sdk.presentation?.quit()`

说明：

- `sdk.presentation?.start(index?)` 当前表格侧按无参启动演示处理，不承诺 `index` 生效

### presentation

已支持：

- `sdk.history?.show()`
- `sdk.history?.hide()`
- `sdk.comments?.show(type?)`
- `sdk.comments?.hide(type?)`
- `sdk.version?.createRevision(options?)`
- `sdk.presentation?.start(index?)`
- `sdk.presentation?.quit()`
- `sdk.presentation?.startFromCurrent()`
- `sdk.presentation?.startSpeakerView()`

未支持：

- `sdk.presentation?.startRemoteLive()`
