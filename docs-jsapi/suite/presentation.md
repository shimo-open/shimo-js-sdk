# API

## 方法

### 调用方式

以下新增 API 均为 `PC only`。

```typescript
const sdk = await connect(options)

await sdk.history?.show()
const slide = await sdk.slides?.getCurrentSlide()
await slide?.insertTextBox?.({ text: 'Hello' })
```

### 新旧兼容

```typescript
const sdk = await connect(options)

// 旧写法
await sdk.getEditor().showHistory?.()

// 新写法
await sdk.history?.show()
```

### 方法列表

| 方法                                                           | 说明           | 平台      |
| -------------------------------------------------------------- | -------------- | --------- |
| [sdk.history.show](#sdkhistoryshow)                            | 显示历史       | `PC only` |
| [sdk.history.hide](#sdkhistoryhide)                            | 隐藏历史       | `PC only` |
| [sdk.comments.show](#sdkcommentsshowtype)                      | 显示评论       | `PC only` |
| [sdk.comments.hide](#sdkcommentshidetype)                      | 隐藏评论       | `PC only` |
| [sdk.version.createRevision](#sdkversioncreaterevisionoptions) | 创建版本       | `PC only` |
| [sdk.presentation](#sdkpresentation)                           | 演示模式能力   | `PC only` |
| [sdk.slides](#sdkslides)                                       | 幻灯片集合能力 | `PC only` |
| [sdk.slides.slide](#sdkslidesslide)                            | 单个幻灯片能力 | `PC only` |
| [sdk.selection](#sdkselection)                                 | 选区能力       | `PC only` |
| [sdk.selection.textRange](#sdkselectiontextrange)              | 文本范围能力   | `PC only` |
| [sdk.text](#sdktext)                                           | 文本格式能力   | `PC only` |
| [sdk.zoom](#sdkzoom)                                           | 缩放能力       | `PC only` |
| [sdk.eventSubscription](#sdkeventsubscription)                 | 事件订阅能力   | `PC only` |
| [sdk.batchChanges](#sdkbatchchangescallback)                   | 批量变更       | `PC only` |
| [sdk.print](#sdkprint)                                         | 打印           | `PC only` |
| [sdk.export](#sdkexporttype)                                   | 导出           | `PC only` |

---

### sdk.history.show()

#### 说明

显示演示文稿历史侧边栏。

#### 类型定义

```typescript
sdk.history?.show(): Promise<void>
```

---

### sdk.history.hide()

#### 说明

隐藏演示文稿历史侧边栏。

#### 类型定义

```typescript
sdk.history?.hide(): Promise<void>
```

---

### sdk.comments.show(type?)

#### 说明

显示评论能力入口。

#### 类型定义

```typescript
sdk.comments?.show(type?: 'list' | 'card'): Promise<void>
```

---

### sdk.comments.hide(type?)

#### 说明

隐藏评论能力入口。

#### 类型定义

```typescript
sdk.comments?.hide(type?: 'list' | 'card'): Promise<void>
```

---

### sdk.version.createRevision(options?)

#### 说明

创建演示文稿版本。

#### 类型定义

```typescript
sdk.version?.createRevision(options?: { name?: string }): Promise<void>
```

---

### sdk.presentation

#### 说明

演示模式能力。

#### 类型定义

```typescript
sdk.presentation?.start(index?)
sdk.presentation?.quit()
sdk.presentation?.startFromCurrent()
sdk.presentation?.startSpeakerView()
```

#### 说明补充

- `sdk.presentation?.startRemoteLive()` 当前未在 `presentation` 套件承接

---

### sdk.slides

#### 说明

幻灯片集合能力。

#### 类型定义

```typescript
sdk.slides?.getCurrentSlide()
sdk.slides?.setCurrentSlideIndex(slideId)
sdk.slides?.getSlideIndex(slideId)
sdk.slides?.getSlidesCount()
sdk.slides?.getSlides()
sdk.slides?.getSlideById(slideId)
sdk.slides?.getSelectedSlides(ids?)
sdk.slides?.setSelectedSlides(ids)
sdk.slides?.addSlide()
sdk.slides?.duplicateSlide(slideId)
sdk.slides?.deleteSlide(slideId)
sdk.slides?.hideSlide(slideId)
```

---

### sdk.slides.slide

#### 说明

`sdk.slides` 返回的单个幻灯片对象能力。

#### 类型定义

```typescript
slide.id
slide.getIndex()
slide.getShapes()
slide.getTables()
slide.insertShape(options)
slide.insertTextBox(options)
slide.insertTable(options)
slide.insertImage(image, size?, offset?)
slide.insertAudio(data, size?, offset?, name?)
slide.insertVideo(data, size?, offset?, name?)
slide.insertAttachment(file, size?, offset?, name?)
```

---

### sdk.selection

#### 说明

演示文稿选区能力。

#### 类型定义

```typescript
sdk.selection?.getTextRange(value?)
sdk.selection?.setTextRange(value)
sdk.selection?.getSelectedShapes(ids?)
sdk.selection?.setSelectedShapes(ids)
sdk.selection?.addRangeListener(listener)
```

---

### sdk.selection.textRange

#### 说明

`sdk.selection.getTextRange()` 返回的文本范围对象能力。

#### 类型定义

```typescript
range.start
range.end
range.getText()
range.setText(text)
range.getHtml()
range.setHtml(html)
range.getBounding()
range.setStyle(style)
range.setVerticalAlign(vertical)
range.setHorizontalAlign(align)
range.setListStyle(style)
range.setLineSpacing(spacing)
range.increaseIndent()
range.decreaseIndent()
range.setTextDirection(direction)
range.clearStyle()
range.clearContent()
range.clearAll()
range.insertLink(url, text)
```

---

### sdk.text

#### 说明

文本格式能力。

#### 类型定义

```typescript
sdk.text?.get(range?)
sdk.text?.apply(format, range?)
sdk.text?.clear(range)
```

---

### sdk.zoom

#### 说明

缩放能力。

#### 类型定义

```typescript
sdk.zoom?.getPercentage()
sdk.zoom?.setPercentage(percentage)
sdk.zoom?.setFitMode(mode)
sdk.zoom?.getFitMode()
sdk.zoom?.zoomIn()
sdk.zoom?.zoomOut()
```

---

### sdk.eventSubscription

#### 说明

事件订阅能力。

#### 类型定义

```typescript
sdk.eventSubscription?.addErrorListener(listener)
sdk.eventSubscription?.addLoadedListener(listener)
```

---

### sdk.batchChanges(callback)

#### 说明

将一组演示文稿变更放在同一个批处理中执行。

#### 类型定义

```typescript
sdk.batchChanges?.<T>(callback: () => T | Promise<T>): Promise<Awaited<T>>
```

---

### sdk.print

#### 说明

打印演示文稿。

#### 类型定义

```typescript
sdk.print?.(): Promise<void>
```

---

### sdk.export(type)

#### 说明

导出演示文稿。

#### 类型定义

```typescript
sdk.export?.(type: string): Promise<void>
```

---

## 兼容说明

- 本页仅描述根级 facade 的调用方式
- 本页新增接口均为 `PC only`
- `sdk.presentation?.startRemoteLive()` 当前未在 `presentation` 套件承接，不应视为已支持接口
