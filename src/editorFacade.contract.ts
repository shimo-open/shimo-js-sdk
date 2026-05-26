import type { OfficeSDK } from './OfficeSDK'

type IsAssignable<T, U> = T extends U ? true : false
type Assert<T extends true> = T

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
  >
]
