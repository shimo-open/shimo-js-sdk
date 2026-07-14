# API

## 方法

### 方法列表

| 方法                                                                         | 说明                                           |
| ---------------------------------------------------------------------------- | ---------------------------------------------- |
| [sdk.history.show](#sdkhistoryshow)                                          | 显示历史（PC only，`co-1.8+`）                 |
| [sdk.history.hide](#sdkhistoryhide)                                          | 隐藏历史（PC only，`co-1.8+`）                 |
| [sdk.branding.getEditorFooterLogo](#sdkbrandinggeteditorfooterlogo)          | 获取编辑器底栏 Logo 配置（PC only，`co-1.8+`） |
| [sdk.branding.setEditorFooterLogoSrc](#sdkbrandingseteditorfooterlogosrcsrc) | 设置编辑器底栏 Logo（PC only，`co-1.8+`）      |
| [sdk.comments.show](#sdkcommentsshowtype)                                    | 显示评论（PC only，`co-1.8+`）                 |
| [sdk.comments.hide](#sdkcommentshidetype)                                    | 隐藏评论（PC only，`co-1.8+`）                 |
| [sdk.version.createRevision](#sdkversioncreaterevisionoptions)               | 创建版本（PC only，`co-1.8+`）                 |
| [sdk.presentation](#sdkpresentation)                                         | 演示模式能力（PC only，`co-1.8+`）             |
| [sdk.slides](#sdkslides)                                                     | 幻灯片集合能力（PC only，`co-1.8+`）           |
| [slide: PresentationSlideFacade](#sdkslidesslide)                            | 单个幻灯片对象能力（PC only，`co-1.8+`）       |
| [sdk.selection](#sdkselection)                                               | 选区能力（PC only，`co-1.8+`）                 |
| [textRange: PresentationTextRangeFacade](#sdkselectiontextrange)             | 文本范围对象能力（PC only，`co-1.8+`）         |
| [sdk.text](#sdktext)                                                         | 文本格式能力（PC only，`co-1.8+`）             |
| [sdk.zoom](#sdkzoom)                                                         | 缩放能力（PC only，`co-1.8+`）                 |
| [sdk.eventSubscription](#sdkeventsubscription)                               | 事件订阅能力（PC only，`co-1.8+`）             |
| [sdk.batchChanges](#sdkbatchchangescallback)                                 | 批量变更（PC only，`co-1.8+`）                 |
| [sdk.print](#sdkprint)                                                       | 打印（PC only，`co-1.8+`）                     |
| [sdk.export](#sdkexporttype)                                                 | 导出（PC only，`co-1.8+`）                     |

### API 调用方式

```typescript
const sdk = await connect(options)

await sdk.history?.show()
await sdk.branding.setEditorFooterLogoSrc('https://cdn.example.com/brand.svg')
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

### sdk.branding.getEditorFooterLogo()

#### 说明

获取当前编辑器底栏 Logo 的品牌配置。当前没有可用配置时返回 `undefined`。

#### 类型定义

```typescript
sdk.branding.getEditorFooterLogo(): Promise<SDKBrandConfig | undefined>
```

#### 相关类型

- [SDKBrandConfig](#sdkbrandconfig)
- [SDKBrandMode](#sdkbrandmode)
- [SDKBrandSource](#sdkbrandsource)

---

### sdk.branding.setEditorFooterLogoSrc(src)

#### 说明

设置当前编辑器底栏 Logo 的图片地址。Logo 自定义权限由 iframe 的 checkpoint mode 校验。

#### 类型定义

```typescript
sdk.branding.setEditorFooterLogoSrc(src: string): Promise<void>
```

#### 参数

- `src`: 新的 Logo 图片地址

#### 返回值

- `Promise<void>`：设置成功后完成；如果 iframe 拒绝修改或调用失败，Promise 会被拒绝

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

#### 说明补充

- 上述 `slides` API 继续对外保留；其中 `addSlide`、`duplicateSlide`、`deleteSlide`、`hideSlide` 需等待底层 runtime 承接后再复测。

---

<h3 id="sdkslidesslide">slide: PresentationSlideFacade</h3>

#### 说明

通过 `const slide = await sdk.slides?.getCurrentSlide()`、`getSlideById()`、`getSlides()` 等方法获取 `slide: PresentationSlideFacade`，再调用其上的实例 API。

#### API 一览表

| API                                                                                                                      | 说明         |
| ------------------------------------------------------------------------------------------------------------------------ | ------------ |
| `slide.id: string`                                                                                                       | 幻灯片 ID    |
| `slide.getIndex(): Promise<number>`                                                                                      | 获取页码     |
| `slide.getShapes(): Promise<PresentationShape[]>`                                                                        | 获取形状列表 |
| `slide.getTables(): Promise<PresentationTableItem[]>`                                                                    | 获取表格列表 |
| `slide.insertShape(options: PresentationInsertShapeOptions): Promise<PresentationShape>`                                 | 插入形状     |
| `slide.insertTextBox(options: PresentationTextBoxOptions): Promise<PresentationShape>`                                   | 插入文本框   |
| `slide.insertTable(options: PresentationTableOptions): Promise<PresentationTableItem>`                                   | 插入表格     |
| `slide.insertImage(image: File, size?: PresentationSize, offset?: PresentationOffset): Promise<void>`                    | 插入图片     |
| `slide.insertAudio(data: File, size?: PresentationSize, offset?: PresentationOffset, name?: string): Promise<void>`      | 插入音频     |
| `slide.insertVideo(data: File, size?: PresentationSize, offset?: PresentationOffset, name?: string): Promise<void>`      | 插入视频     |
| `slide.insertAttachment(file: File, size?: PresentationSize, offset?: PresentationOffset, name?: string): Promise<void>` | 插入附件     |

#### 逐条类型定义

#### slide.id

```typescript
slide.id: string
```

功能说明：表示当前幻灯片对象的唯一 ID。

#### slide.getIndex()

```typescript
slide.getIndex(): Promise<number>
```

功能说明：获取当前幻灯片的页码位置。

#### slide.getShapes()

```typescript
slide.getShapes(): Promise<PresentationShape[]>
```

功能说明：获取当前幻灯片中的形状列表。

#### slide.getTables()

```typescript
slide.getTables(): Promise<PresentationTableItem[]>
```

功能说明：获取当前幻灯片中的表格列表。

#### slide.insertShape(options)

```typescript
slide.insertShape(
  options: PresentationInsertShapeOptions
): Promise<PresentationShape>
```

功能说明：在当前幻灯片中插入一个形状。线条类型返回 `PresentationShapeBase`，可承载文本的形状返回 `PresentationTextShape`。

#### slide.insertTextBox(options)

```typescript
slide.insertTextBox(options: PresentationTextBoxOptions): Promise<PresentationTextShape>
```

功能说明：在当前幻灯片中插入一个文本框，并返回可编辑文本内容的形状对象。

#### slide.insertTable(options)

```typescript
slide.insertTable(options: PresentationTableOptions): Promise<PresentationTableItem>
```

功能说明：在当前幻灯片中插入一个表格。

#### slide.insertImage(image, size?, offset?)

```typescript
slide.insertImage(
  image: File,
  size?: PresentationSize,
  offset?: PresentationOffset
): Promise<void>
```

功能说明：在当前幻灯片中插入图片。

#### slide.insertAudio(data, size?, offset?, name?)

```typescript
slide.insertAudio(
  data: File,
  size?: PresentationSize,
  offset?: PresentationOffset,
  name?: string
): Promise<void>
```

功能说明：在当前幻灯片中插入音频。

#### slide.insertVideo(data, size?, offset?, name?)

```typescript
slide.insertVideo(
  data: File,
  size?: PresentationSize,
  offset?: PresentationOffset,
  name?: string
): Promise<void>
```

功能说明：在当前幻灯片中插入视频。

#### slide.insertAttachment(file, size?, offset?, name?)

```typescript
slide.insertAttachment(
  file: File,
  size?: PresentationSize,
  offset?: PresentationOffset,
  name?: string
): Promise<void>
```

功能说明：在当前幻灯片中插入附件。

#### 相关类型

- [PresentationSlideFacade](#presentationslidefacade)
- [PresentationShape](#presentationshape)
- [PresentationTableItem](#presentationtableitem)
- [PresentationInsertShapeOptions](#presentationinsertshapeoptions)
- [PresentationTextBoxOptions](#presentationtextboxoptions)
- [PresentationTableOptions](#presentationtableoptions)
- [PresentationSize](#presentationsize)
- [PresentationOffset](#presentationoffset)

#### 说明补充

- 上述 `slide` API 继续对外保留；`getTables` 和各类插入/写入接口需等待底层 runtime 承接后再复测。

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

<h3 id="sdkselectiontextrange">textRange: PresentationTextRangeFacade</h3>

#### 说明

这里的 `sdk.selection.textRange` 仅用于文档章节索引，并不是可直接通过 `sdk.selection.textRange` 调用的模块；实际应先通过 `const textRange = await sdk.selection?.getTextRange()` 获取 `textRange: PresentationTextRangeFacade`，再调用其上的实例 API。

#### API 一览表

| API                                                                                                  | 说明         |
| ---------------------------------------------------------------------------------------------------- | ------------ |
| `range.start: string`                                                                                | 起始位置     |
| `range.end: string`                                                                                  | 结束位置     |
| `range.getText(): Promise<string>`                                                                   | 获取文本     |
| `range.setText(text: string): Promise<void>`                                                         | 设置文本     |
| `range.getHtml(): Promise<string>`                                                                   | 获取 HTML    |
| `range.setHtml(html: string): Promise<void>`                                                         | 设置 HTML    |
| `range.getBounding(): Promise<{ left: number; top: number; width: number; height: number } \| null>` | 获取选区位置 |
| `range.setStyle(style: PresentationTextStyle): Promise<void>`                                        | 设置文本样式 |
| `range.setVerticalAlign(vertical: PresentationVerticalAlign): Promise<void>`                         | 设置垂直对齐 |
| `range.setHorizontalAlign(align: PresentationHorizontalAlign): Promise<void>`                        | 设置水平对齐 |
| `range.setListStyle(style: PresentationListType): Promise<void>`                                     | 设置列表样式 |
| `range.setLineSpacing(spacing: PresentationParagraphLineSpacing): Promise<void>`                     | 设置行距     |
| `range.increaseIndent(): Promise<void>`                                                              | 增加缩进     |
| `range.decreaseIndent(): Promise<void>`                                                              | 减少缩进     |
| `range.setTextDirection(direction: 'ltr' \| 'rtl'): Promise<void>`                                   | 设置文字方向 |
| `range.clearStyle(): Promise<void>`                                                                  | 清除样式     |
| `range.clearContent(): Promise<void>`                                                                | 清除内容     |
| `range.clearAll(): Promise<void>`                                                                    | 清除全部     |
| `range.insertLink(url: string, text: string): Promise<void>`                                         | 插入链接     |

#### 逐条类型定义

#### range.start

```typescript
range.start: string
```

功能说明：表示当前文本选区的起始位置。

#### range.end

```typescript
range.end: string
```

功能说明：表示当前文本选区的结束位置。

#### range.getText()

```typescript
range.getText(): Promise<string>
```

功能说明：获取当前文本选区的文本内容。

#### range.setText(text)

```typescript
range.setText(text: string): Promise<void>
```

功能说明：设置当前文本选区的文本内容。

#### range.getHtml()

```typescript
range.getHtml(): Promise<string>
```

功能说明：获取当前文本选区的 HTML 内容。

#### range.setHtml(html)

```typescript
range.setHtml(html: string): Promise<void>
```

功能说明：设置当前文本选区的 HTML 内容。

#### range.getBounding()

```typescript
range.getBounding(): Promise<{ left: number; top: number; width: number; height: number } | null>
```

功能说明：获取当前文本选区在页面中的位置信息。

#### range.setStyle(style)

```typescript
range.setStyle(style: PresentationTextStyle): Promise<void>
```

功能说明：设置当前文本选区的文本样式。

#### range.setVerticalAlign(vertical)

```typescript
range.setVerticalAlign(vertical: PresentationVerticalAlign): Promise<void>
```

功能说明：设置当前文本选区的垂直对齐方式。

#### range.setHorizontalAlign(align)

```typescript
range.setHorizontalAlign(align: PresentationHorizontalAlign): Promise<void>
```

功能说明：设置当前文本选区的水平对齐方式。

#### range.setListStyle(style)

```typescript
range.setListStyle(style: PresentationListType): Promise<void>
```

功能说明：设置当前文本选区的列表样式。

#### range.setLineSpacing(spacing)

```typescript
range.setLineSpacing(spacing: PresentationParagraphLineSpacing): Promise<void>
```

功能说明：设置当前文本选区的段落行距。

#### range.increaseIndent()

```typescript
range.increaseIndent(): Promise<void>
```

功能说明：增加当前文本选区的段落缩进。

#### range.decreaseIndent()

```typescript
range.decreaseIndent(): Promise<void>
```

功能说明：减少当前文本选区的段落缩进。

#### range.setTextDirection(direction)

```typescript
range.setTextDirection(direction: 'ltr' | 'rtl'): Promise<void>
```

功能说明：设置当前文本选区的文字方向。

#### range.clearStyle()

```typescript
range.clearStyle(): Promise<void>
```

功能说明：清除当前文本选区的样式。

#### range.clearContent()

```typescript
range.clearContent(): Promise<void>
```

功能说明：清除当前文本选区的内容。

#### range.clearAll()

```typescript
range.clearAll(): Promise<void>
```

功能说明：清除当前文本选区的内容和样式。

#### range.insertLink(url, text)

```typescript
range.insertLink(url: string, text: string): Promise<void>
```

功能说明：在当前文本选区插入链接。

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
interface PresentationShapeBase {
  id: string
  name: string
  type: string
  setFill(fill: PresentationShapeFill): void
  setLine(line: PresentationShapeLine): void
  setLayout(layout: PresentationShapeLayout): void
  remove(): void
}

interface PresentationTextShape extends PresentationShapeBase {
  type: PresentationTextShapeType
  textContent?: string
  setContent(content: PresentationShapeContent): void
  appendText(text: string): void
  appendParagraphs(paragraphs: PresentationParagraph[]): void
}
```

`PresentationShape` 为 `PresentationShapeBase | PresentationTextShape` 联合类型。

### PresentationSlideFacade

```typescript
interface PresentationSlideFacade {
  id: string
  getIndex(): Promise<number>
  getShapes(): Promise<PresentationShape[]>
  getTables(): Promise<PresentationTableItem[]>
  insertShape: {
    (
      options: Extract<
        PresentationInsertShapeOptions,
        { type: PresentationLineShapeType }
      >
    ): Promise<PresentationShapeBase>
    (
      options: Extract<
        PresentationInsertShapeOptions,
        { type: PresentationTextShapeType }
      >
    ): Promise<PresentationTextShape>
  }
  insertTextBox(
    options: PresentationTextBoxOptions
  ): Promise<PresentationTextShape>
  insertTable(options: PresentationTableOptions): Promise<PresentationTableItem>
  insertImage(
    image: File,
    size?: PresentationSize,
    offset?: PresentationOffset
  ): Promise<void>
  insertAudio(
    data: File,
    size?: PresentationSize,
    offset?: PresentationOffset,
    name?: string
  ): Promise<void>
  insertVideo(
    data: File,
    size?: PresentationSize,
    offset?: PresentationOffset,
    name?: string
  ): Promise<void>
  insertAttachment(
    file: File,
    size?: PresentationSize,
    offset?: PresentationOffset,
    name?: string
  ): Promise<void>
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

### SDKBrandConfig

```typescript
interface SDKBrandConfig {
  mode: SDKBrandMode
  customAddress?: string
  source: SDKBrandSource
}
```

- `mode`: iframe 返回的品牌模式标识
- `customAddress`: 当前自定义 Logo 图片地址
- `source`: iframe 返回的品牌来源标识

### SDKBrandMode

```typescript
type SDKBrandMode = '0' | '1' | '2'
```

### SDKBrandSource

```typescript
type SDKBrandSource = 0 | 1 | 2 | 3
```

## 注意事项

- `sdk.branding` 是根级 API，没有对应的旧 `sdk.getEditor()` 方法
- Logo 自定义权限由 iframe 的 checkpoint mode 校验；没有权限或调用失败时，`setEditorFooterLogoSrc()` 会拒绝 Promise
- `getEditorFooterLogo()` 在当前编辑器没有可用配置时返回 `undefined`
- `sdk.headerBars.getCommand('logo').src` 修改的是 HeaderBars Logo，不是编辑器底栏 Logo

---
