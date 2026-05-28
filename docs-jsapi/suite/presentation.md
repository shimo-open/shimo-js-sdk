# API

## 方法

### 方法列表

| 方法                                                           | 说明                                 |
| -------------------------------------------------------------- | ------------------------------------ |
| [sdk.history.show](#sdkhistoryshow)                            | 显示历史（PC only，`co-1.8+`）       |
| [sdk.history.hide](#sdkhistoryhide)                            | 隐藏历史（PC only，`co-1.8+`）       |
| [sdk.comments.show](#sdkcommentsshowtype)                      | 显示评论（PC only，`co-1.8+`）       |
| [sdk.comments.hide](#sdkcommentshidetype)                      | 隐藏评论（PC only，`co-1.8+`）       |
| [sdk.version.createRevision](#sdkversioncreaterevisionoptions) | 创建版本（PC only，`co-1.8+`）       |
| [sdk.presentation](#sdkpresentation)                           | 演示模式能力（PC only，`co-1.8+`）   |
| [sdk.slides](#sdkslides)                                       | 幻灯片集合能力（PC only，`co-1.8+`） |
| [sdk.slides.slide](#sdkslidesslide)                            | 单个幻灯片能力（PC only，`co-1.8+`） |
| [sdk.selection](#sdkselection)                                 | 选区能力（PC only，`co-1.8+`）       |
| [sdk.selection.textRange](#sdkselectiontextrange)              | 文本范围能力（PC only，`co-1.8+`）   |
| [sdk.text](#sdktext)                                           | 文本格式能力（PC only，`co-1.8+`）   |
| [sdk.zoom](#sdkzoom)                                           | 缩放能力（PC only，`co-1.8+`）       |
| [sdk.eventSubscription](#sdkeventsubscription)                 | 事件订阅能力（PC only，`co-1.8+`）   |
| [sdk.batchChanges](#sdkbatchchangescallback)                   | 批量变更（PC only，`co-1.8+`）       |
| [sdk.print](#sdkprint)                                         | 打印（PC only，`co-1.8+`）           |
| [sdk.export](#sdkexporttype)                                   | 导出（PC only，`co-1.8+`）           |

### API 调用方式

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

### 旧方法兼容

以下旧方法调用方式继续保留说明；如存在根级 facade，优先使用新写法。

| 旧方法                                     | 说明           | 推荐新写法                              |
| ------------------------------------------ | -------------- | --------------------------------------- |
| `sdk.getEditor().showHistory()`            | 显示历史侧边栏 | `sdk.history?.show()`                   |
| `sdk.getEditor().hideHistory()`            | 隐藏历史侧边栏 | `sdk.history?.hide()`                   |
| `sdk.getEditor().createRevision(options?)` | 创建版本       | `sdk.version?.createRevision(options?)` |
| `sdk.getEditor().startDemonstration()`     | 启动本地演示   | `sdk.presentation?.start(index?)`       |
| `sdk.getEditor().endDemonstration()`       | 退出本地演示   | `sdk.presentation?.quit()`              |
| `sdk.getEditor().print()`                  | 打印           | `sdk.print?.()`                         |
| `sdk.getEditor().export(type)`             | 导出           | `sdk.export?.(type)`                    |

### 新增 API 方法

以下方法为本次补充的根级 API 调用方式。

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
sdk.presentation?.start(index?: number): Promise<void>
sdk.presentation?.quit(): Promise<void>
sdk.presentation?.startFromCurrent(): Promise<void>
sdk.presentation?.startSpeakerView(): Promise<void>
```

#### 说明补充

- `sdk.presentation?.startRemoteLive()` 当前未在 `presentation` 套件承接

---

### sdk.slides

#### 说明

幻灯片集合能力。

#### 类型定义

```typescript
sdk.slides?.getCurrentSlide(): Promise<PresentationSlideFacade>
sdk.slides?.setCurrentSlideIndex(slideId: string): Promise<void>
sdk.slides?.getSlideIndex(slideId: string): Promise<number>
sdk.slides?.getSlidesCount(): Promise<number>
sdk.slides?.getSlides(): Promise<PresentationSlideFacade[]>
sdk.slides?.getSlideById(
  slideId: string
): Promise<PresentationSlideFacade | null>
sdk.slides?.getSelectedSlides(ids?: string[]): Promise<PresentationSlideFacade[]>
sdk.slides?.setSelectedSlides(ids: string[]): Promise<void>
sdk.slides?.addSlide(): Promise<PresentationSlideFacade>
sdk.slides?.duplicateSlide(slideId: string): Promise<PresentationSlideFacade>
sdk.slides?.deleteSlide(slideId: string): Promise<void>
sdk.slides?.hideSlide(slideId: string): Promise<void>
```

#### 相关类型

- [PresentationSlideFacade](#presentationslidefacade)

---

### sdk.slides.slide

#### 说明

`sdk.slides` 返回的单个幻灯片对象能力。

#### 类型定义

```typescript
slide.id: string
slide.getIndex(): Promise<number>
slide.getShapes(): Promise<PresentationShape[]>
slide.getTables(): Promise<PresentationTableItem[]>
slide.insertShape(
  options: PresentationInsertShapeOptions
): Promise<PresentationShape>
slide.insertTextBox(options: PresentationTextBoxOptions): Promise<PresentationShape>
slide.insertTable(options: PresentationTableOptions): Promise<PresentationTableItem>
slide.insertImage(
  image: File,
  size?: PresentationSize,
  offset?: PresentationOffset
): Promise<void>
slide.insertAudio(
  data: File,
  size?: PresentationSize,
  offset?: PresentationOffset,
  name?: string
): Promise<void>
slide.insertVideo(
  data: File,
  size?: PresentationSize,
  offset?: PresentationOffset,
  name?: string
): Promise<void>
slide.insertAttachment(
  file: File,
  size?: PresentationSize,
  offset?: PresentationOffset,
  name?: string
): Promise<void>
```

#### 相关类型

- [PresentationSlideFacade](#presentationslidefacade)
- [PresentationShape](#presentationshape)
- [PresentationTableItem](#presentationtableitem)
- [PresentationInsertShapeOptions](#presentationinsertshapeoptions)
- [PresentationTextBoxOptions](#presentationtextboxoptions)
- [PresentationTableOptions](#presentationtableoptions)
- [PresentationSize](#presentationsize)
- [PresentationOffset](#presentationoffset)

---

### sdk.selection

#### 说明

演示文稿选区能力。

#### 类型定义

```typescript
sdk.selection?.getTextRange(
  value?: PresentationTextRangeValue
): Promise<PresentationTextRangeFacade | null>
sdk.selection?.setTextRange(value: PresentationTextRangeValue | null): Promise<void>
sdk.selection?.getSelectedShapes(ids?: string[]): Promise<PresentationShape[] | null>
sdk.selection?.setSelectedShapes(ids: string[] | null): Promise<void>
sdk.selection?.addRangeListener(
  listener: (value: PresentationTextRangeValue | null) => void
): (() => void) | undefined
```

#### 相关类型

- [PresentationTextRangeValue](#presentationtextrangevalue)
- [PresentationTextRangeFacade](#presentationtextrangefacade)
- [PresentationShape](#presentationshape)

---

### sdk.selection.textRange

#### 说明

`sdk.selection.getTextRange()` 返回的文本范围对象能力。

#### 类型定义

```typescript
range.start: string
range.end: string
range.getText(): Promise<string>
range.setText(text: string): Promise<void>
range.getHtml(): Promise<string>
range.setHtml(html: string): Promise<void>
range.getBounding(): Promise<{ left: number; top: number; width: number; height: number } | null>
range.setStyle(style: PresentationTextStyle): Promise<void>
range.setVerticalAlign(vertical: PresentationVerticalAlign): Promise<void>
range.setHorizontalAlign(align: PresentationHorizontalAlign): Promise<void>
range.setListStyle(style: PresentationListType): Promise<void>
range.setLineSpacing(spacing: PresentationParagraphLineSpacing): Promise<void>
range.increaseIndent(): Promise<void>
range.decreaseIndent(): Promise<void>
range.setTextDirection(direction: 'ltr' | 'rtl'): Promise<void>
range.clearStyle(): Promise<void>
range.clearContent(): Promise<void>
range.clearAll(): Promise<void>
range.insertLink(url: string, text: string): Promise<void>
```

#### 相关类型

- [PresentationTextRangeFacade](#presentationtextrangefacade)
- [PresentationTextStyle](#presentationtextstyle)
- [PresentationVerticalAlign](#presentationverticalalign)
- [PresentationHorizontalAlign](#presentationhorizontalalign)
- [PresentationListType](#presentationlisttype)
- [PresentationParagraphLineSpacing](#presentationparagraphlinespacing)

---

### sdk.text

#### 说明

文本格式能力。

#### 类型定义

```typescript
sdk.text?.get(
  range?: PresentationTextRangeValue
): Promise<Partial<EditorTextFormat>>
sdk.text?.apply(
  format: Partial<EditorTextFormat>,
  range?: PresentationTextRangeValue
): Promise<Partial<EditorTextFormat>>
sdk.text?.clear(range: PresentationTextRangeValue): Promise<void>
```

#### 相关类型

- [PresentationTextRangeValue](#presentationtextrangevalue)
- [EditorTextFormat](#editortextformat)

---

### sdk.zoom

#### 说明

缩放能力。

#### 类型定义

```typescript
sdk.zoom?.getPercentage(): Promise<number>
sdk.zoom?.setPercentage(percentage: number): Promise<void>
sdk.zoom?.setFitMode(mode: 'none' | 'window'): Promise<void>
sdk.zoom?.getFitMode(): Promise<'none' | 'window'>
sdk.zoom?.zoomIn(): Promise<void>
sdk.zoom?.zoomOut(): Promise<void>
```

---

### sdk.eventSubscription

#### 说明

事件订阅能力。

#### 类型定义

```typescript
sdk.eventSubscription?.addErrorListener(
  listener: (error: { code: number | string; message?: string }) => void
): (() => void) | undefined
sdk.eventSubscription?.addLoadedListener(
  listener: () => void
): (() => void) | undefined
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

## 类型定义

### PresentationShape

```typescript
interface PresentationShape {
  id: string
  name: string
  type: string
  textContent?: string
}
```

### PresentationSlideFacade

```typescript
interface PresentationSlideFacade {
  id: string
}
```

### PresentationTextRangeFacade

```typescript
interface PresentationTextRangeFacade {
  start: string
  end: string
}
```

### PresentationOffset

```typescript
interface PresentationOffset {
  x: number
  y: number
}
```

### PresentationSize

```typescript
interface PresentationSize {
  width: number
  height: number
}
```

### PresentationTextStyle

```typescript
interface PresentationTextStyle {
  bold?: boolean
  italic?: boolean
  underline?: boolean
  strikethrough?: boolean
  fontSize?: number
  fontFamily?: string
}
```

### PresentationParagraph

```typescript
interface PresentationParagraph {
  text: string
  textStyle?: PresentationTextStyle
  paragraphStyle?: {
    align?: PresentationHorizontalAlign
    vertical?: PresentationVerticalAlign
    direction?: 'ltr' | 'rtl'
    listType?: PresentationListType
  }
}
```

### PresentationInsertShapeOptions

```typescript
type PresentationInsertShapeOptions =
  | {
      type: string
      offset: PresentationOffset
      size: PresentationSize
      content?: never
    }
  | {
      type: string
      offset: PresentationOffset
      size: PresentationSize
      content?: string | PresentationParagraph[]
    }
```

### PresentationTextBoxOptions

```typescript
interface PresentationTextBoxOptions {
  offset: PresentationOffset
  size: PresentationSize
  content?: string | PresentationParagraph[]
  direction?: 'horizontal' | 'vertical'
}
```

### PresentationTableItem

```typescript
interface PresentationTableItem {
  id: string
  rowCount: number
  columnCount: number
}
```

### PresentationTableOptions

```typescript
interface PresentationTableOptions {
  offset: PresentationOffset
  rowCount: number
  columnCount: number
  rowHeights: number[]
  columnWidths: number[]
  content?: string | PresentationParagraph[]
}
```

### PresentationTextRangeValue

```typescript
interface PresentationTextRangeValue {
  start: string
  end: string
}
```

### PresentationVerticalAlign

```typescript
type PresentationVerticalAlign =
  | 'top'
  | 'mid'
  | 'bottom'
  | 'wordArtVert'
  | 'eaVert'
  | 'mongolianVert'
  | 'vert'
  | 'vert270'
```

### PresentationHorizontalAlign

```typescript
type PresentationHorizontalAlign =
  | 'left'
  | 'center'
  | 'right'
  | 'justify'
  | 'dist'
```

### PresentationListType

```typescript
type PresentationListType =
  | { type: 'none' }
  | { type: 'bullet'; subType?: string; char?: string }
  | { type: 'ordered'; subType?: string; startAt?: number }
```

### PresentationParagraphLineSpacing

```typescript
type PresentationParagraphLineSpacing = 0.9 | 1.0 | 1.15 | 1.5 | 2.0 | 2.5 | 3.0
```

### EditorTextFormat

```typescript
interface EditorTextFormat {
  bold: boolean
  italic: boolean
  underline: boolean
  strike: boolean
  color: string
  highlight: string
  size: number | string
  family: string
}
```

---
