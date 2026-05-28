import type {
  AddChartFromSelectionResult,
  DocsRangeFacade,
  DocsRangeValue,
  DocsTableFacade,
  EditorTextFormat,
  OfficeSDK,
  PresentationSlideFacade,
  PresentationShape,
  PresentationTextRangeFacade,
  PresentationTextRangeValue,
  SheetRangeValue,
  SheetRangeFacade,
  SheetSelection
} from './OfficeSDK'

type IsAssignable<T, U> = T extends U ? true : false
type Assert<T extends true> = T
type RootSelection = NonNullable<OfficeSDK['selection']>
type DocsSelection = Extract<
  RootSelection,
  { getRange: (value?: DocsRangeValue) => Promise<DocsRangeFacade | null> }
>
type PresentationSelection = Extract<
  RootSelection,
  {
    getTextRange: (
      value?: PresentationTextRangeValue
    ) => Promise<PresentationTextRangeFacade | null>
  }
>

export type EditorFacadeContractAssertions = [
  Assert<
    IsAssignable<
      NonNullable<OfficeSDK['title']>['setTitle'],
      (title: string) => Promise<void>
    >
  >,
  Assert<
    IsAssignable<
      NonNullable<OfficeSDK['title']>['addChangedListener'],
      (listener: (title: string) => void) => () => void
    >
  >,
  Assert<
    IsAssignable<
      NonNullable<OfficeSDK['locks']>['addRangeLock'],
      (options: import('./OfficeSDK').AddRangeLockParams) => Promise<void>
    >
  >,
  Assert<
    IsAssignable<NonNullable<OfficeSDK['history']>['show'], () => Promise<void>>
  >,
  Assert<
    IsAssignable<
      NonNullable<OfficeSDK['mention']>['locateCellByGuid'],
      (
        guid: string,
        notificationType?: import('./OfficeSDK').MentionTypes
      ) => Promise<void>
    >
  >,
  Assert<
    IsAssignable<
      NonNullable<OfficeSDK['version']>['createRevision'],
      (
        options?: import('./OfficeSDK').RevisionCreateOptions
      ) => Promise<
        undefined | null | import('./types/Document').DocumentErrorMessage
      >
    >
  >,
  Assert<
    IsAssignable<
      NonNullable<OfficeSDK['presentation']>['start'],
      (index?: number) => Promise<void>
    >
  >,
  Assert<
    IsAssignable<
      NonNullable<OfficeSDK['presentation']>['startFromCurrent'],
      () => Promise<void>
    >
  >,
  Assert<
    IsAssignable<
      NonNullable<OfficeSDK['batchChanges']>,
      <T>(callback: () => T | Promise<T>) => Promise<Awaited<T>>
    >
  >,
  Assert<IsAssignable<NonNullable<OfficeSDK['print']>, () => Promise<void>>>,
  Assert<
    IsAssignable<
      NonNullable<OfficeSDK['export']>,
      (type: string) => Promise<void>
    >
  >,
  Assert<
    IsAssignable<
      NonNullable<OfficeSDK['setFocus']>,
      (isFocus: boolean) => Promise<void>
    >
  >,
  Assert<
    IsAssignable<
      DocsSelection['getRange'],
      (value?: DocsRangeValue) => Promise<DocsRangeFacade | null>
    >
  >,
  Assert<
    IsAssignable<
      PresentationSelection['getTextRange'],
      (
        value?: PresentationTextRangeValue
      ) => Promise<PresentationTextRangeFacade | null>
    >
  >,
  Assert<
    IsAssignable<
      NonNullable<OfficeSDK['tables']>['getAll'],
      () => Promise<DocsTableFacade[]>
    >
  >,
  Assert<
    IsAssignable<
      NonNullable<OfficeSDK['workbook']>['getWorksheets'],
      () => Promise<import('./OfficeSDK').SheetWorksheetFacade[]>
    >
  >,
  Assert<
    IsAssignable<
      NonNullable<OfficeSDK['activeSheet']>['getCell'],
      (
        row: number,
        column: number
      ) => Promise<import('./OfficeSDK').SheetCellFacade | null>
    >
  >,
  Assert<
    IsAssignable<
      NonNullable<OfficeSDK['slides']>['getCurrentSlide'],
      () => Promise<PresentationSlideFacade>
    >
  >,
  Assert<
    IsAssignable<
      NonNullable<OfficeSDK['text']>['apply'],
      (
        format: Partial<EditorTextFormat>,
        range?: PresentationTextRangeValue
      ) => Promise<Partial<EditorTextFormat>>
    >
  >,
  Assert<
    IsAssignable<
      NonNullable<OfficeSDK['activeSheet']>['getSelections'],
      () => Promise<SheetSelection[] | null>
    >
  >,
  Assert<
    IsAssignable<
      NonNullable<OfficeSDK['activeSheet']>['getRange'],
      (value: SheetRangeValue) => Promise<SheetRangeFacade | null>
    >
  >,
  Assert<
    IsAssignable<
      NonNullable<OfficeSDK['selections']>['getAll'],
      () => Promise<SheetRangeValue[]>
    >
  >,
  Assert<
    IsAssignable<
      NonNullable<OfficeSDK['charts']>['addChartFromSelection'],
      (
        params?: import('./OfficeSDK').AddChartFromSelectionParams
      ) => Promise<AddChartFromSelectionResult | undefined>
    >
  >,
  Assert<
    IsAssignable<
      PresentationSelection['getSelectedShapes'],
      (ids?: string[]) => Promise<PresentationShape[] | null>
    >
  >,
  Assert<
    IsAssignable<
      NonNullable<OfficeSDK['zoom']>['setPercentage'],
      (percentage: number) => Promise<void>
    >
  >,
  Assert<
    IsAssignable<
      NonNullable<OfficeSDK['eventSubscription']>['addLoadedListener'],
      (listener: () => void) => () => void
    >
  >
]
