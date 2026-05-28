import type { OfficeSDK } from './OfficeSDK'

type IsAssignable<T, U> = T extends U ? true : false
type Assert<T extends true> = T
type RootSelection = NonNullable<OfficeSDK['selection']>
type DocsSelection = Extract<RootSelection, { getRange: unknown }>
type PresentationSelection = Extract<RootSelection, { getTextRange: unknown }>

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
      (options: Record<string, unknown>) => Promise<void>
    >
  >,
  Assert<
    IsAssignable<NonNullable<OfficeSDK['history']>['show'], () => Promise<void>>
  >,
  Assert<
    IsAssignable<
      NonNullable<OfficeSDK['mention']>['locateCellByGuid'],
      (guid: string, notificationType?: string) => Promise<void>
    >
  >,
  Assert<
    IsAssignable<
      NonNullable<OfficeSDK['version']>['createRevision'],
      (options?: { name?: string }) => Promise<void>
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
      (value?: unknown) => Promise<unknown>
    >
  >,
  Assert<
    IsAssignable<
      PresentationSelection['getTextRange'],
      (value?: unknown) => Promise<unknown>
    >
  >,
  Assert<
    IsAssignable<
      NonNullable<OfficeSDK['tables']>['getAll'],
      () => Promise<unknown[]>
    >
  >,
  Assert<
    IsAssignable<
      NonNullable<OfficeSDK['workbook']>['getWorksheets'],
      () => Promise<unknown[]>
    >
  >,
  Assert<
    IsAssignable<
      NonNullable<OfficeSDK['activeSheet']>['getCell'],
      (row: number, column: number) => Promise<unknown>
    >
  >,
  Assert<
    IsAssignable<
      NonNullable<OfficeSDK['slides']>['getCurrentSlide'],
      () => Promise<unknown>
    >
  >,
  Assert<
    IsAssignable<
      NonNullable<OfficeSDK['text']>['apply'],
      (
        format: Partial<Record<string, unknown>>,
        range?: unknown
      ) => Promise<Partial<Record<string, unknown>>>
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
