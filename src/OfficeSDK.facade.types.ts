import type { DocumentErrorMessage, ExternalAppParams } from './types/Document'

export interface TitleFacade {
  addChangedListener: (listener: (title: string) => void) => () => void
  setTitle: (title: string) => Promise<void>
}

export interface CommentsFacade {
  show: (type?: 'list' | 'card') => Promise<void>
  hide: (type?: 'list' | 'card') => Promise<void>
}

export interface HistoryFacade {
  show: () => Promise<void>
  hide: () => Promise<void>
}

export interface DiscussionFacade {
  show: () => Promise<void>
  hide: () => Promise<void>
}

export interface CollaboratorFacade {
  show: () => Promise<void>
  hide: () => Promise<void>
}

export interface ExternalAppFacade {
  insert: (
    url: string,
    params?: ExternalAppParams
  ) => Promise<null | DocumentErrorMessage>
}

export interface DocsRangeBounding {
  top: number
  right: number
  bottom: number
  left: number
  start: number
  end: number
}

export interface DocsRangeValue {
  start: number
  end: number
}

export interface DocsReplaceParams {
  value: string
}

export interface DocsReplaceResult {
  id: string
  oldValue: string
}

export type DocsSearchDirection = 'forward' | 'backward'

export interface DocsSearchParams {
  content: string
  highlight?: boolean
  caseSensitive?: boolean
  wholeWord?: boolean
  useRegex?: boolean
  searchDirection?: DocsSearchDirection
  range?: DocsRangeValue
}

export interface DocsSearchResult {
  keyword: string
  id: string
  range: DocsRangeValue
  isProtected?: boolean
}

export type DocsContinueWritingType = 'text' | 'html' | 'markdown'
export type DocsBulletListStyle = 'disc' | 'circle' | 'square'
export type DocsOrderedListStyle = 'decimal' | 'lower-alpha' | 'lower-roman'
export type DocsListStyle =
  | { type: 'none' }
  | { type: 'ordered'; style?: DocsOrderedListStyle }
  | { type: 'bullet'; style?: DocsBulletListStyle }
  | { type: 'task' }
export type DocsPageWidth = 'standard' | 'wide' | 'full'
export type DocsParagraphType =
  | 'paragraph'
  | 'title'
  | 'subtitle'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'

export interface DocsTextStyle {
  bold?: boolean
  italic?: boolean
  underline?: boolean
  strikethrough?: boolean
  color?: string
  backgroundColor?: string
  fontFamily?: string
  fontSize?: number
}

export interface DocsParagraphStyle {
  align?: 'left' | 'center' | 'right' | 'justify'
  vertical?: 'top' | 'middle' | 'bottom'
}

export type DocsTableCellStyle = DocsTextStyle & DocsParagraphStyle

export interface DocsDefaultStyle {
  color: string
  fontSize: string
  fontFamily: string
  lineSpacing: string
  font: string
  size: string
  linespacing: string
}

export type DocsKnownCodeBlockLanguage =
  | 'plaintext'
  | 'arduino'
  | 'bash'
  | 'basic'
  | 'csharp'
  | 'cpp'
  | 'css'
  | 'clojure'
  | 'coffeescript'
  | 'dart'
  | 'diff'
  | 'docker'
  | 'elixir'
  | 'erlang'
  | 'fsharp'
  | 'fortran'
  | 'glsl'
  | 'gherkin'
  | 'go'
  | 'groovy'
  | 'html'
  | 'haskell'
  | 'json'
  | 'java'
  | 'javascript'
  | 'less'
  | 'lisp'
  | 'lua'
  | 'makefile'
  | 'markdown'
  | 'matlab'
  | 'nix'
  | 'ocaml'
  | 'objectivec'
  | 'php'
  | 'perl'
  | 'powershell'
  | 'prolog'
  | 'protobuf'
  | 'python'
  | 'r'
  | 'ruby'
  | 'rust'
  | 'scss'
  | 'sql'
  | 'scala'
  | 'scheme'
  | 'shellsession'
  | 'swift'
  | 'typescript'
  | 'vbnet'
  | 'vala'
  | 'verilog'
  | (string & {})

export interface DocsCodeBlockAttrs {
  language?: DocsKnownCodeBlockLanguage
  wordWrap?: boolean
}

export type DocsCodeBlockDirection = 'ltr' | 'rtl'
export type DocsCodeBlockAlignment = 'start' | 'end' | 'center' | 'justify'
export type DocsCodeBlockIndent = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8

export interface DocsCodeBlockTextNode {
  element: 'text'
  text: string
}

export interface DocsCodeBlockParagraphAttrs {
  direction?: DocsCodeBlockDirection
  lineHeight?: string
  textIndent?: string
  alignment?: DocsCodeBlockAlignment
  indent?: DocsCodeBlockIndent
}

export interface DocsCodeBlockParagraphNode {
  element: 'paragraph'
  attrs: DocsCodeBlockParagraphAttrs | null
  content: DocsCodeBlockTextNode[]
}

export interface DocsCodeBlockInsertOptions {
  attrs?: DocsCodeBlockAttrs
  content?: DocsCodeBlockParagraphNode[]
}

export type TOCNodeType =
  | 'heading'
  | 'ordered-list'
  | 'bullet-list'
  | 'task'
  | string

export interface DocsTOCItem {
  id: string
  level: string
  text: string
  pos: number
  nodeType: TOCNodeType
  leadingSymbol: string | null
}

export interface DocsSidebarState {
  visible: boolean
  selectedTab: string
}

export interface DocsTableSelection {
  row: number
  column: number
  rowCount: number
  columnCount: number
}

export enum EditorSaveStatus {
  NoChange = 0,
  Success = 1,
  Fail = 2
}

export interface EditorSaveResult {
  status: EditorSaveStatus
}

export type Content = string | ArrayBuffer | Record<string, never> | object

export interface ClipboardPasteParams {
  html: string
  text: string
  base64File?: string
  removeTrailingEmptyRows?: boolean
  removeTrailingEmptyColumns?: boolean
}

export type SheetAppendDataAxis = 'row' | 'column'

export interface SheetSelection {
  getRange: (value?: SheetRangeValue) => SheetRangeFacade | null
  setRange: (value: SheetRangeValue | null) => Promise<void>
}

export enum SheetRangeType {
  Cells = 'cells',
  Rows = 'rows',
  Columns = 'columns',
  Sheet = 'sheet'
}

export type SheetRangeValue =
  | {
      type: `${SheetRangeType.Cells}`
      row: number
      rowCount: number
      column: number
      columnCount: number
    }
  | {
      type: `${SheetRangeType.Rows}`
      row: number
      rowCount: number
    }
  | {
      type: `${SheetRangeType.Columns}`
      column: number
      columnCount: number
    }
  | {
      type: `${SheetRangeType.Sheet}`
    }

export type SheetCellRange = Omit<
  Extract<SheetRangeValue, { type: `${SheetRangeType.Cells}` }>,
  'type'
>

export type SheetRangeText = string | string[][]

export type SheetCellValue =
  | { type: 'primitive'; value: string | number | boolean }
  | { type: 'date'; value: number }
  | { type: 'calcError'; value: { error: string } }

export type SheetWritableCellValue = Exclude<
  SheetCellValue,
  { type: 'calcError' }
>

export type FormatCategory = string
export type AlignValue = 'left' | 'right' | 'center' | 'justify'
export type VerticalValue = 'top' | 'middle' | 'bottom'
export type WrapValue = 'overflow' | 'wrap' | 'clip'

export interface BorderStyle {
  style?: string
  color?: string
}

export interface RichTextItem {
  text: string
  [key: string]: string | number | boolean | undefined
}

export interface SheetWritableCellMeta {
  formatCategory?: FormatCategory
  color?: string
  background?: string
  fontFamily?: string
  fontSize?: number
  align?: AlignValue
  bold?: boolean
  italic?: boolean
  underline?: boolean
  strike?: boolean
  vertical?: VerticalValue
  wrap?: WrapValue
  textRotation?: number
  textIndent?: number
  borderTop?: BorderStyle
  borderRight?: BorderStyle
  borderBottom?: BorderStyle
  borderLeft?: BorderStyle
  diagonalDown?: BorderStyle
  diagonalUp?: BorderStyle
  precision?: number
}

export interface SheetCellData extends SheetWritableCellMeta {
  value: SheetCellValue | null
  formula: string | null
  text: string
  format?: string
  span?: SheetCellRange
  richText?: RichTextItem[]
}

export type SheetWritableCellData =
  | ({ value: string | number | boolean | Date | null } & SheetWritableCellMeta)
  | ({
      formula: string | null
      quotePrefix?: boolean
    } & SheetWritableCellMeta)
  | ({
      text: string | null
      richText?: RichTextItem[]
    } & SheetWritableCellMeta)

export interface SearchMatch {
  row: number
  column: number
  text: string
  isLinkCell?: boolean
  formulaInfo?: {
    formulaText: string
    hasFormula: boolean
  }
}

export type PermissionDict = Record<number, PermissionLevel>

export enum PermissionLevel {
  Editable = 0,
  ReadOnly = 1,
  Private = 2
}

export interface AddRangeLockParams {
  ranges?: SheetCellRange[]
  sheetId?: string
  description?: string
  userPermissions: PermissionDict
  departmentPermissions?: PermissionDict
  visitorPermission?: PermissionLevel
}

export interface AddSheetLockParams {
  sheetId?: string
  description?: string
  userPermissions: PermissionDict
  departmentPermissions?: PermissionDict
  visitorPermission?: PermissionLevel
}

export interface RemoveRangeLocksParams {
  sheetId?: string
  ranges?: SheetCellRange[]
}

export interface RemoveSheetLockParams {
  sheetId?: string
}

export enum MentionTypes {
  Comment = 'comment',
  Mention = 'mention_at',
  DateMention = 'date_mention'
}

export type RevisionCreateOptions = string | { name: string }

export type SheetChartFirstAs =
  | 'auto'
  | 'seriesLabel'
  | 'categoryLabel'
  | 'none'
export type SheetChartSeriesOrientation = 'auto' | 'horizontal' | 'vertical'
export type SheetChartType =
  | 'pie'
  | 'doughnut'
  | 'chinaMap'
  | 'funnel'
  | 'sunburst'
  | 'gauge'
  | 'gantt'
  | 'abstract'
  | 'columnClustered'
  | 'columnStacked'
  | 'columnStacked100'
  | 'barClustered'
  | 'barStacked'
  | 'barStacked100'
  | 'line'
  | 'lineStacked'
  | 'lineStacked100'
  | 'lineMarkers'
  | 'lineMarkersStacked'
  | 'lineMarkersStacked100'
  | 'area'
  | 'areaStacked'
  | 'areaStacked100'
  | 'stockOHLC'
  | 'xyScatter'
  | 'bubble'
  | 'histogram'
  | 'waterfall'
  | 'combination'

export interface AddChartFromSelectionBuiltinParams {
  chartType?: SheetChartType
  series?: {
    orientation?: SheetChartSeriesOrientation
    trimPaddings?: boolean
    firstAs?: SheetChartFirstAs
  }
}

export interface AddChartFromSelectionExternalParams
  extends AddChartFromSelectionBuiltinParams {
  recommendationMode?: 'builtin' | 'external'
}

export type AddChartFromSelectionParams =
  | AddChartFromSelectionBuiltinParams
  | AddChartFromSelectionExternalParams

export interface AddChartFromSelectionResult {
  chartId: string
  chartType: SheetChartType
}

export interface EditorTextFormat<Color = string> {
  bold: boolean
  italic: boolean
  underline: boolean
  strike: boolean
  color: Color
  highlight: Color
  size: number | string
  family: string
}

export type PresentationHorizontalAlign =
  | 'left'
  | 'center'
  | 'right'
  | 'justify'
  | 'dist'

export type PresentationVerticalAlign =
  | 'top'
  | 'mid'
  | 'bottom'
  | 'wordArtVert'
  | 'eaVert'
  | 'mongolianVert'
  | 'vert'
  | 'vert270'

export interface PresentationIndent {
  left?: number
  right?: number
  firstLine?: number
}

export type PresentationLineSpaceRule = 'atLeast' | 'auto' | 'exact'
export type PresentationBulletSubType = string
export type PresentationOrderedSubType =
  | 'arabicPeriod'
  | 'arabicParenBoth'
  | 'ea1ChsPeriod'
  | 'chineseNumberParenBoth'
  | 'alphaLcParenR'
  | 'romanLcPeriod'
  | 'alphaUcPeriod'

export type PresentationListType =
  | { type: 'none' }
  | { type: 'bullet'; subType?: PresentationBulletSubType; char?: string }
  | {
      type: 'ordered'
      subType?: PresentationOrderedSubType
      startAt?: number
    }

export interface PresentationParagraphSpacing {
  line?: number
  lineRule?: PresentationLineSpaceRule
  before?: number
  after?: number
}

export interface PresentationParagraphStyle {
  align?: PresentationHorizontalAlign
  vertical?: PresentationVerticalAlign
  direction?: 'ltr' | 'rtl'
  indent?: PresentationIndent
  spacing?: PresentationParagraphSpacing
  listType?: PresentationListType
}

export interface PresentationTextStyle {
  bold?: boolean
  italic?: boolean
  underline?: boolean
  strikethrough?: boolean
  fontSize?: number
  fontFamily?: string
}

export interface PresentationParagraph {
  text: string
  textStyle?: PresentationTextStyle
  paragraphStyle?: PresentationParagraphStyle
}

export interface PresentationOffset {
  x: number
  y: number
}

export interface PresentationSize {
  width: number
  height: number
}

export interface PresentationShapeFill {
  type?: 'solid' | 'none'
  color?: string
  transparency?: number
}

export interface PresentationShapeLayout {
  rotation?: number
  flipHorizontal?: boolean
  flipVertical?: boolean
}

export type PresentationShapeDashType =
  | 'dash'
  | 'dashDot'
  | 'dot'
  | 'lgDash'
  | 'lgDashDot'
  | 'lgDashDotDot'
  | 'solid'

export interface PresentationShapeLine {
  visible?: boolean
  color?: string
  transparency?: number
  width?: number
  dashType?: PresentationShapeDashType
}

export type PresentationShapeContent = string | PresentationParagraph[]
export type PresentationLineShapeType =
  | 'line'
  | 'lineWithArrow'
  | 'lineWithTwoArrows'
  | 'bentConnector5'
  | 'bentConnector5WithArrow'
  | 'bentConnector5WithTwoArrows'
  | 'curvedConnector3'
  | 'curvedConnector3WithArrow'
  | 'curvedConnector3WithTwoArrows'
  | 'spline'
export type PresentationShapeType = string

export interface PresentationShapeBaseOptions {
  offset: PresentationOffset
  size: PresentationSize
  fill?: PresentationShapeFill
  line?: PresentationShapeLine
  layout?: PresentationShapeLayout
}

export type PresentationInsertShapeOptions =
  | (PresentationShapeBaseOptions & {
      type: PresentationLineShapeType
      content?: never
    })
  | (PresentationShapeBaseOptions & {
      type: Exclude<PresentationShapeType, PresentationLineShapeType>
      content?: PresentationShapeContent
    })

export interface PresentationShape {
  id: string
  name: string
  type: PresentationShapeType
  textContent?: string
  setFill: (fill: PresentationShapeFill) => void
  setLine: (line: PresentationShapeLine) => void
  setLayout: (layout: PresentationShapeLayout) => void
  remove: () => void
}

export type PresentationParagraphLineSpacing =
  | 0.9
  | 1.0
  | 1.15
  | 1.5
  | 2.0
  | 2.5
  | 3.0

export interface PresentationTableCell {
  setStyle: (style: PresentationTableCellStyle) => void
  clearStyle: () => void
}

export type PresentationTableCellStyle = PresentationTextStyle &
  PresentationParagraphStyle

export interface PresentationTableSelection {
  row: number
  column: number
  rowCount: number
  columnCount: number
}

export interface PresentationTableRange {
  setStyle: (style: PresentationTableCellStyle) => void
  clearStyle: () => void
  setSpan: () => void
  removeSpan: () => void
}

export interface PresentationTableItem {
  id: string
  rowCount: number
  columnCount: number
  remove: () => void
  insertRows: (
    index: number,
    count: number,
    placement?: 'before' | 'after'
  ) => void
  insertColumns: (
    index: number,
    count: number,
    placement?: 'before' | 'after'
  ) => void
  deleteRows: (index: number, count: number) => void
  deleteColumns: (index: number, count: number) => void
  setRowHeight: (index: number, height: number) => void
  setColumnWidth: (index: number, width: number) => void
  getCell: (row: number, column: number) => PresentationTableCell | null
  getRange: (range: PresentationTableSelection) => PresentationTableRange | null
  setDirection: (direction: 'ltr' | 'rtl') => void
}

export interface PresentationTableOptions {
  offset: PresentationOffset
  rowCount: number
  columnCount: number
  rowHeights: number[]
  columnWidths: number[]
  content?: string | PresentationParagraph[]
}

export type PresentationTextBoxDirection = 'horizontal' | 'vertical'

export interface PresentationTextBoxOptions
  extends PresentationShapeBaseOptions {
  content?: PresentationShapeContent
  direction?: PresentationTextBoxDirection
}

export interface PresentationTextRangeValue {
  start: string
  end: string
}

export interface LocksFacade {
  show: () => Promise<void>
  hide: () => Promise<void>
  addRangeLock: (options: AddRangeLockParams) => Promise<void>
  addSheetLock: (options: AddSheetLockParams) => Promise<void>
  removeRangeLocksInRanges: (options: RemoveRangeLocksParams) => Promise<void>
  removeSheetLock: (options: RemoveSheetLockParams) => Promise<void>
}

export interface MentionFacade {
  locateCellByGuid: (
    guid: string,
    notificationType?: MentionTypes
  ) => Promise<void>
}

export interface ContentFacade {
  setContent: (content: Content) => Promise<void>
}

export interface VersionFacade {
  show?: () => Promise<void>
  hide?: () => Promise<void>
  createRevision: (
    options?: RevisionCreateOptions
  ) => Promise<undefined | null | DocumentErrorMessage>
}

export interface PresentationFacade {
  start: (index?: number) => Promise<void>
  quit: () => Promise<void>
  startFromCurrent: () => Promise<void>
  startRemoteLive: () => Promise<void>
  startSpeakerView: () => Promise<void>
}

export interface DocsRangeFacade {
  start: number
  end: number
  isCaret: boolean
  getText: () => Promise<string>
  getHtml: () => Promise<string>
  setText: (text: string) => Promise<void>
  setHtml: (html: string) => Promise<void>
  getBounding: () => Promise<DocsRangeBounding | null>
  setStyle: (style: DocsTextStyle) => Promise<void>
  continueWriting: (
    content: string,
    type: DocsContinueWritingType,
    abort?: () => void
  ) => Promise<boolean>
  setListStyle: (style: DocsListStyle) => Promise<void>
  insertLink: (
    href: string,
    text: string,
    viewType: 'link' | 'card' | 'preview'
  ) => Promise<void>
  insertImage: (data: File | string) => Promise<void>
  insertAttachment: (
    data: File,
    viewType: 'link' | 'card' | 'preview'
  ) => Promise<void>
  setParagraphType: (type: DocsParagraphType) => Promise<void>
  clearStyle: () => Promise<void>
  clearContent: () => Promise<void>
  clearAll: () => Promise<void>
  insertHorizontalRule: () => Promise<void>
  insertQuote: () => Promise<void>
}

export interface DocsSelectionFacade {
  getRange: (value?: DocsRangeValue) => Promise<DocsRangeFacade | null>
  setRange: (value: DocsRangeValue | null) => Promise<void>
  addRangeListener: (
    listener: (value: DocsRangeValue | null) => void
  ) => () => void
  getWholeRange: () => Promise<DocsRangeFacade | null>
  insertText: (text: string) => Promise<DocsRangeValue>
  insertHtml: (html: string) => Promise<DocsRangeValue>
  insertTable: (
    rowCount: number,
    columnCount: number
  ) => Promise<{ tableId: string }>
  insertCodeBlock: (options?: DocsCodeBlockInsertOptions) => Promise<void>
}

export interface DocsSearchFacade {
  findOne: (params: DocsSearchParams) => Promise<DocsSearchResult | null>
  findAll: (params: DocsSearchParams) => Promise<DocsSearchResult[] | null>
  replaceOne: (
    id: string,
    params: DocsReplaceParams
  ) => Promise<DocsReplaceResult | null>
  replaceAll: (params: DocsReplaceParams) => Promise<void>
  clear: () => Promise<void>
}

export interface DocsOutlineFacade {
  show: () => Promise<void>
  hide: () => Promise<void>
  getOpen: () => Promise<boolean>
  setOpen: (isOpen: boolean) => Promise<void>
  getAll: () => Promise<DocsTOCItem[]>
  getOne: (id: string) => Promise<DocsTOCItem | null>
  deleteAll: () => Promise<boolean>
  deleteOne: (id: string) => Promise<boolean>
  add: (item: Omit<DocsTOCItem, 'id'>) => Promise<boolean>
}

export interface DocsSidebarFacade {
  show: (tab?: string) => Promise<void>
  close: () => Promise<void>
  getState: () => Promise<DocsSidebarState>
}

export interface DocsTableCellFacade {
  tableId: string
  row: number
  column: number
  setFormula: (
    formula: 'sum' | 'average',
    ranges: DocsTableSelection[]
  ) => Promise<void>
  removeFormula: () => Promise<void>
  setStyle: (style: DocsTableCellStyle) => Promise<void>
  clearStyle: () => Promise<void>
}

export interface DocsTableRangeFacade {
  tableId: string
  selection: DocsTableSelection
  setStyle: (style: DocsTableCellStyle) => Promise<void>
  clearStyle: () => Promise<void>
  setSpan: () => Promise<void>
  removeSpan: () => Promise<void>
}

export interface DocsTableFacade {
  tableId: string
  insertRows: (
    index: number,
    count: number,
    placement?: 'before' | 'after'
  ) => Promise<void>
  insertColumns: (
    index: number,
    count: number,
    placement?: 'before' | 'after'
  ) => Promise<void>
  deleteRows: (index: number, count: number) => Promise<void>
  deleteColumns: (index: number, count: number) => Promise<void>
  setRowHeight: (index: number, height: number) => Promise<void>
  setColumnWidth: (index: number, width: number) => Promise<void>
  setFullscreen: (status: boolean) => Promise<void>
  getCell: (row: number, column: number) => Promise<DocsTableCellFacade | null>
  getRange: (
    selection: DocsTableSelection
  ) => Promise<DocsTableRangeFacade | null>
}

export interface DocsTablesFacade {
  getAll: () => Promise<DocsTableFacade[]>
  getOne: (tableId: string) => Promise<DocsTableFacade | null>
  deleteOne: (tableId: string) => Promise<boolean>
}

export interface DocsSettingsFacade {
  getPageWidth: () => Promise<DocsPageWidth>
  setPageWidth: (width: DocsPageWidth) => Promise<void>
  getDefaultStyle: () => Promise<DocsDefaultStyle>
  setDefaultStyle: (style: Partial<DocsDefaultStyle>) => Promise<void>
}

export interface SheetRangeFacade {
  sheetId?: string
  row: number
  column: number
  rowCount: number
  columnCount: number
  getText: (format?: 'plain' | 'matrix') => Promise<string | string[][]>
  setText: (text: SheetRangeText) => Promise<void>
  getHtml: () => Promise<string>
  setHtml: (html: string) => Promise<void>
  getValue: () => Promise<(SheetCellValue | null)[][]>
  setValue: (values: (SheetWritableCellValue | null)[][]) => Promise<void>
  getData: () => Promise<SheetCellData[][]>
  getFormula: () => Promise<(string | null)[][]>
  setFormula: (formula: (string | null)[][]) => Promise<void>
  setData: (data: SheetWritableCellData[][]) => Promise<void>
  setSpan: () => Promise<void>
  removeSpan: () => Promise<void>
  getSpans: () => Promise<SheetCellRange[] | null>
  clearContent: () => Promise<void>
  clearStyle: () => Promise<void>
  clearAll: () => Promise<void>
}

export interface SheetCellFacade {
  sheetId?: string
  row: number
  column: number
  getCellText: () => Promise<string>
  setCellText: (text: string) => Promise<void>
  getCellValue: () => Promise<SheetCellValue | null>
  getCellData: () => Promise<SheetCellData>
  getCellFormula: () => Promise<string | null>
  setCellFormula: (formula: string) => Promise<void>
  setCellValue: (value: SheetWritableCellValue | null) => Promise<void>
  setCellData: (data: SheetWritableCellData) => Promise<void>
  setCheckbox: (checked: boolean) => Promise<void>
  setScore: (score: 0 | 1 | 2 | 3 | 4 | 5) => Promise<void>
  setProgress: (progress: number) => Promise<void>
  insertImage: (data: File | string) => Promise<void>
  insertMention: (userId: number, userName: string) => Promise<void>
  insertAttachmentLink: (data: File) => Promise<void>
  clearContent: () => Promise<void>
  clearStyle: () => Promise<void>
  clearAll: () => Promise<void>
}

export interface SheetWorksheetFacade {
  id?: string
  name?: string
  getSelections: () => Promise<SheetSelection[] | null>
  getRange: (value: SheetRangeValue) => Promise<SheetRangeFacade | null>
  addRangeListener: (
    listener: (value: {
      sheet: string
      ranges: SheetRangeValue[] | null
    }) => void
  ) => () => void
  getBounding: (range: SheetRangeValue) => Promise<{
    left: number
    top: number
    width: number
    height: number
  } | null>
  locateCell: (row: number, column: number) => Promise<void>
  getCell: (row: number, column: number) => Promise<SheetCellFacade | null>
  getActiveCell: () => Promise<SheetCellFacade | null>
  setActiveCell: (options: { row: number; column: number }) => Promise<void>
  search: (
    text: string,
    range?: SheetRangeValue | SheetRangeValue[]
  ) => Promise<void>
  cancelSearch: () => Promise<void>
  paste: (params: ClipboardPasteParams) => Promise<void>
  getViewportSize: () => Promise<{ width: number; height: number }>
  endEdit: () => Promise<void>
  addRows: (index: number, count: number) => Promise<void>
  addColumns: (index: number, count: number) => Promise<void>
  deleteRows: (index: number, count: number) => Promise<void>
  deleteColumns: (index: number, count: number) => Promise<void>
  appendData: (
    data: SheetWritableCellData[][],
    axis?: SheetAppendDataAxis
  ) => Promise<void>
  setRowsHeight: (data: Array<{ row: number; height: number }>) => Promise<void>
  setColumnsWidth: (
    data: Array<{ column: number; width: number }>
  ) => Promise<void>
  setRowsVisible: (rows: number[], visible: boolean) => Promise<void>
  setColumnsVisible: (columns: number[], visible: boolean) => Promise<void>
  setFrozenRowCount: (count: number) => Promise<void>
  setFrozenColumnCount: (count: number) => Promise<void>
  setTabColor: (color: string) => Promise<void>
  rename: (name: string) => Promise<void>
  setVisible: (visible: boolean) => Promise<void>
}

export interface SheetWorkbookFacade {
  getWorksheets: () => Promise<SheetWorksheetFacade[]>
  getWorksheetById: (sheetId: string) => Promise<SheetWorksheetFacade | null>
  getActiveWorksheet: () => Promise<SheetWorksheetFacade>
  setActiveWorksheet: (sheetId: string) => Promise<void>
  save: () => Promise<EditorSaveResult>
  addWorksheet: (name?: string, index?: number) => Promise<void>
  deleteWorksheet: (sheetId: string) => Promise<void>
  moveWorksheet: (sheetId: string, index: number) => Promise<void>
}

export interface SheetChartsFacade {
  addChartFromSelection: (
    params?: AddChartFromSelectionParams
  ) => Promise<AddChartFromSelectionResult | undefined>
}

export interface SheetSelectionsFacade {
  getAll: () => Promise<SheetRangeValue[]>
}

export interface PresentationSlideFacade {
  id: string
  getIndex: () => Promise<number>
  getShapes: () => Promise<PresentationShape[]>
  getTables: () => Promise<PresentationTableItem[]>
  insertShape: (
    options: PresentationInsertShapeOptions
  ) => Promise<PresentationShape>
  insertTextBox: (
    options: PresentationTextBoxOptions
  ) => Promise<PresentationShape>
  insertTable: (
    options: PresentationTableOptions
  ) => Promise<PresentationTableItem>
  insertImage: (
    image: File,
    size?: PresentationSize,
    offset?: PresentationOffset
  ) => Promise<void>
  insertAudio: (
    data: File,
    size?: PresentationSize,
    offset?: PresentationOffset,
    name?: string
  ) => Promise<void>
  insertVideo: (
    data: File,
    size?: PresentationSize,
    offset?: PresentationOffset,
    name?: string
  ) => Promise<void>
  insertAttachment: (
    file: File,
    size?: PresentationSize,
    offset?: PresentationOffset,
    name?: string
  ) => Promise<void>
}

export interface PresentationSlidesFacade {
  getCurrentSlide: () => Promise<PresentationSlideFacade>
  setCurrentSlideIndex: (slideId: string) => Promise<void>
  getSlideIndex: (slideId: string) => Promise<number>
  getSlidesCount: () => Promise<number>
  getSlides: () => Promise<PresentationSlideFacade[]>
  getSlideById: (slideId: string) => Promise<PresentationSlideFacade | null>
  getSelectedSlides: (ids?: string[]) => Promise<PresentationSlideFacade[]>
  setSelectedSlides: (ids: string[]) => Promise<void>
  addSlide: () => Promise<PresentationSlideFacade>
  duplicateSlide: (slideId: string) => Promise<PresentationSlideFacade>
  deleteSlide: (slideId: string) => Promise<void>
  hideSlide: (slideId: string) => Promise<void>
}

export interface PresentationTextRangeFacade {
  start: string
  end: string
  getText: () => Promise<string>
  setText: (text: string) => Promise<void>
  getHtml: () => Promise<string>
  setHtml: (html: string) => Promise<void>
  getBounding: () => Promise<{
    left: number
    top: number
    width: number
    height: number
  } | null>
  setStyle: (style: PresentationTextStyle) => Promise<void>
  setVerticalAlign: (vertical: PresentationVerticalAlign) => Promise<void>
  setHorizontalAlign: (align: PresentationHorizontalAlign) => Promise<void>
  setListStyle: (style: PresentationListType) => Promise<void>
  setLineSpacing: (spacing: PresentationParagraphLineSpacing) => Promise<void>
  increaseIndent: () => Promise<void>
  decreaseIndent: () => Promise<void>
  setTextDirection: (direction: 'ltr' | 'rtl') => Promise<void>
  clearStyle: () => Promise<void>
  clearContent: () => Promise<void>
  clearAll: () => Promise<void>
  insertLink: (url: string, text: string) => Promise<void>
}

export interface PresentationSelectionFacade {
  getTextRange: (
    value?: PresentationTextRangeValue
  ) => Promise<PresentationTextRangeFacade | null>
  setTextRange: (value: PresentationTextRangeValue | null) => Promise<void>
  getSelectedShapes: (ids?: string[]) => Promise<PresentationShape[] | null>
  setSelectedShapes: (ids: string[] | null) => Promise<void>
  addRangeListener: (
    listener: (value: PresentationTextRangeValue | null) => void
  ) => () => void
}

export interface PresentationTextFacade {
  get: (
    range?: PresentationTextRangeValue
  ) => Promise<Partial<EditorTextFormat>>
  apply: (
    format: Partial<EditorTextFormat>,
    range?: PresentationTextRangeValue
  ) => Promise<Partial<EditorTextFormat>>
  clear: (range: PresentationTextRangeValue) => Promise<void>
}

export interface PresentationZoomFacade {
  getPercentage: () => Promise<number>
  setPercentage: (percentage: number) => Promise<void>
  setFitMode: (mode: 'none' | 'window') => Promise<void>
  getFitMode: () => Promise<'none' | 'window'>
  zoomIn: () => Promise<void>
  zoomOut: () => Promise<void>
}

export interface PresentationEventSubscriptionFacade {
  addErrorListener: (
    listener: (error: { code: number | string; message?: string }) => void
  ) => () => void
  addLoadedListener: (listener: () => void) => () => void
}

export interface OfficeSDKRootFacadeState {
  title?: TitleFacade
  history?: HistoryFacade
  comments?: CommentsFacade
  discussion?: DiscussionFacade
  collaborator?: CollaboratorFacade
  externalApp?: ExternalAppFacade
  locks?: LocksFacade
  mention?: MentionFacade
  content?: ContentFacade
  version?: VersionFacade
  presentation?: PresentationFacade
  selection?: DocsSelectionFacade | PresentationSelectionFacade
  search?: DocsSearchFacade
  outline?: DocsOutlineFacade
  sidebar?: DocsSidebarFacade
  tables?: DocsTablesFacade
  settings?: DocsSettingsFacade
  workbook?: SheetWorkbookFacade
  activeSheet?: SheetWorksheetFacade
  charts?: SheetChartsFacade
  selections?: SheetSelectionsFacade
  slides?: PresentationSlidesFacade
  text?: PresentationTextFacade
  zoom?: PresentationZoomFacade
  eventSubscription?: PresentationEventSubscriptionFacade
  batchChanges?: <T>(callback: () => T | Promise<T>) => Promise<Awaited<T>>
  export?: (type: string) => Promise<void>
  print?: () => Promise<void>
  setFocus?: (isFocus: boolean) => Promise<void>
}
