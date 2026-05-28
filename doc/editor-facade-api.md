# Editor Facade API

## 调用方式

根级 facade 直接挂载在 `OfficeSDK` 实例上：

以下新增 API 均为 `PC only`。

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

## 方法列表

| 方法                                                     | 说明             | 平台      |
| -------------------------------------------------------- | ---------------- | --------- |
| `sdk.title?.addChangedListener(listener)`                | 监听标题变化     | `PC only` |
| `sdk.title?.setTitle(title)`                             | 设置标题         | `PC only` |
| `sdk.comments?.show(type?)`                              | 显示评论         | `PC only` |
| `sdk.comments?.hide(type?)`                              | 隐藏评论         | `PC only` |
| `sdk.history?.show()`                                    | 显示历史         | `PC only` |
| `sdk.history?.hide()`                                    | 隐藏历史         | `PC only` |
| `sdk.locks?.show()`                                      | 显示锁定侧边栏   | `PC only` |
| `sdk.locks?.hide()`                                      | 隐藏锁定侧边栏   | `PC only` |
| `sdk.locks?.addRangeLock(options)`                       | 创建单元格锁定   | `PC only` |
| `sdk.locks?.addSheetLock(options)`                       | 创建工作表锁定   | `PC only` |
| `sdk.locks?.removeRangeLocksInRanges(options)`           | 删除范围锁定     | `PC only` |
| `sdk.locks?.removeSheetLock(options)`                    | 删除工作表锁定   | `PC only` |
| `sdk.mention?.locateCellByGuid(guid, notificationType?)` | 按通知定位单元格 | `PC only` |
| `sdk.content?.setContent(content)`                       | 设置内容         | `PC only` |
| `sdk.version?.createRevision(options?)`                  | 创建版本         | `PC only` |
| `sdk.presentation?.start(index?)`                        | 启动演示         | `PC only` |
| `sdk.presentation?.quit()`                               | 退出演示         | `PC only` |
| `sdk.presentation?.startFromCurrent()`                   | 从当前页开始演示 | `PC only` |
| `sdk.presentation?.startRemoteLive()`                    | 启动远程演示     | `PC only` |
| `sdk.presentation?.startSpeakerView()`                   | 启动演讲者视图   | `PC only` |

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
