import { FileType } from 'weboffice-js-sdk-shared'

import type {
  CollaboratorFacade,
  AddRangeLockParams,
  AddSheetLockParams,
  Content,
  ContentFacade,
  DiscussionFacade,
  DocsRangeFacade,
  DocsRangeValue,
  DocsSearchFacade,
  DocsSelectionFacade,
  DocsSettingsFacade,
  DocsSidebarFacade,
  DocsTOCsFacade,
  DocsTableCellFacade,
  DocsTableFacade,
  DocsTableRangeFacade,
  DocsTableSelection,
  DocsTablesFacade,
  ExternalAppFacade,
  HistoryFacade,
  LocksFacade,
  MentionFacade,
  MentionTypes,
  OfficeSDKRootFacadeState,
  PresentationEventSubscriptionFacade,
  PresentationFacade,
  PresentationSelectionFacade,
  PresentationSlideFacade,
  PresentationSlidesFacade,
  PresentationTextFacade,
  PresentationTextRangeFacade,
  PresentationTextRangeValue,
  PresentationZoomFacade,
  RemoveRangeLocksParams,
  RemoveSheetLockParams,
  RevisionCreateOptions,
  SheetChartsFacade,
  SheetCellFacade,
  SheetRangeFacade,
  SheetRangeValue,
  SheetSelectionsFacade,
  SheetWorkbookFacade,
  SheetWorksheetFacade,
  TitleFacade,
  VersionFacade
} from './OfficeSDK.facade.types'

type EditorFacadeCallback = (...args: unknown[]) => unknown | Promise<unknown>

interface FacadeHost {
  fileType: FileType
  invokeEditorFacade<T>(method: string, args?: unknown[]): Promise<T>
  listenEditorEvent<T>(
    event: string,
    listener: (payload: T) => void
  ): () => void
  createEditorFacadeModule<T extends object>(
    prefix: string,
    staticFields?: Partial<T>
  ): T
  createValueObjectFacade<T extends object>(
    prefix: string,
    locator: Record<string, unknown>,
    staticFields: Partial<T>
  ): T
  registerEditorFacadeListener<T>(
    method: string,
    listener: (payload: T) => void
  ): () => void
  registerEditorFacadeCallback(callback: EditorFacadeCallback): string
  unregisterEditorFacadeCallback(callbackId: string): void
}

function createDocsRangeFacade(
  host: FacadeHost,
  locator: { start: number; end: number } | null | undefined
): DocsRangeFacade | null {
  if (!locator) {
    return null
  }
  return host.createValueObjectFacade<DocsRangeFacade>(
    'selection.range',
    locator,
    {
      start: locator.start,
      end: locator.end,
      isCaret: locator.start === locator.end
    }
  )
}

function createDocsTableFacade(
  host: FacadeHost,
  locator: { tableId: string }
): DocsTableFacade {
  return host.createValueObjectFacade<DocsTableFacade>('tables.item', locator, {
    tableId: locator.tableId,
    getCell: async (row: number, column: number) => {
      const nextLocator = await host.invokeEditorFacade<{
        tableId: string
        row: number
        column: number
      } | null>('tables.item.getCell', [locator, row, column])
      if (!nextLocator) {
        return null
      }
      return host.createValueObjectFacade<DocsTableCellFacade>(
        'tables.cell',
        nextLocator,
        {
          tableId: nextLocator.tableId,
          row: nextLocator.row,
          column: nextLocator.column
        }
      )
    },
    getRange: async (selection: DocsTableSelection) => {
      const nextLocator = await host.invokeEditorFacade<{
        tableId: string
        selection: DocsTableSelection
      } | null>('tables.item.getRange', [locator, selection])
      if (!nextLocator) {
        return null
      }
      return host.createValueObjectFacade<DocsTableRangeFacade>(
        'tables.range',
        nextLocator,
        {
          tableId: nextLocator.tableId,
          selection: nextLocator.selection
        }
      )
    }
  })
}

function createSheetRangeFacade(
  host: FacadeHost,
  locator:
    | {
        sheetId?: string
        row: number
        column: number
        rowCount: number
        columnCount: number
      }
    | null
    | undefined
): SheetRangeFacade | null {
  if (!locator) {
    return null
  }
  return host.createValueObjectFacade<SheetRangeFacade>(
    'sheet.range',
    locator,
    locator
  )
}

function createSheetCellFacade(
  host: FacadeHost,
  locator:
    | {
        sheetId?: string
        row: number
        column: number
      }
    | null
    | undefined
): SheetCellFacade | null {
  if (!locator) {
    return null
  }
  return host.createValueObjectFacade<SheetCellFacade>(
    'sheet.cell',
    locator,
    locator
  )
}

function createSheetWorksheetFacade(
  host: FacadeHost,
  locator: {
    sheetId?: string
    id?: string
    name?: string
    active?: boolean
  }
): SheetWorksheetFacade {
  return host.createValueObjectFacade<SheetWorksheetFacade>(
    'sheet.worksheet',
    locator,
    {
      id: locator.id,
      name: locator.name,
      getRange: async (value: SheetRangeValue) => {
        const rangeLocator = await host.invokeEditorFacade<{
          sheetId?: string
          row: number
          column: number
          rowCount: number
          columnCount: number
        } | null>('sheet.worksheet.getRange', [locator, value])
        return createSheetRangeFacade(host, rangeLocator)
      },
      getCell: async (row: number, column: number) => {
        const cellLocator = await host.invokeEditorFacade<{
          sheetId?: string
          row: number
          column: number
        } | null>('sheet.worksheet.getCell', [locator, row, column])
        return createSheetCellFacade(host, cellLocator)
      },
      getActiveCell: async () => {
        const cellLocator = await host.invokeEditorFacade<{
          sheetId?: string
          row: number
          column: number
        } | null>('sheet.worksheet.getActiveCell', [locator])
        return createSheetCellFacade(host, cellLocator)
      }
    }
  )
}

function createPresentationTextRangeFacade(
  host: FacadeHost,
  locator: { start: string; end: string } | null | undefined
): PresentationTextRangeFacade | null {
  if (!locator) {
    return null
  }
  return host.createValueObjectFacade<PresentationTextRangeFacade>(
    'selection.textRange',
    locator,
    {
      start: locator.start,
      end: locator.end
    }
  )
}

function createPresentationSlideFacade(
  host: FacadeHost,
  locator: {
    slideId: string
  }
): PresentationSlideFacade {
  return host.createValueObjectFacade<PresentationSlideFacade>(
    'slides.slide',
    locator,
    {
      id: locator.slideId
    }
  )
}

export function buildRootFacadeState(
  host: FacadeHost
): OfficeSDKRootFacadeState {
  const titleFacade: TitleFacade = {
    addChangedListener: (listener: (title: string) => void) => {
      return host.listenEditorEvent<string>('titleChange', listener)
    },
    setTitle: async (title: string) => {
      await host.invokeEditorFacade('title.setTitle', [title])
    }
  }

  const commentsFacade = {
    show: async (type?: 'list' | 'card') => {
      await host.invokeEditorFacade(
        'comments.show',
        typeof type === 'undefined' ? [] : [type]
      )
    },
    hide: async (type?: 'list' | 'card') => {
      await host.invokeEditorFacade(
        'comments.hide',
        typeof type === 'undefined' ? [] : [type]
      )
    }
  }

  const historyFacade: HistoryFacade = {
    show: async () => {
      await host.invokeEditorFacade('history.show')
    },
    hide: async () => {
      await host.invokeEditorFacade('history.hide')
    }
  }

  const discussionFacade: DiscussionFacade = {
    show: async () => {
      await host.invokeEditorFacade('showDiscussion')
    },
    hide: async () => {
      await host.invokeEditorFacade('hideDiscussion')
    }
  }

  const collaboratorFacade: CollaboratorFacade = {
    show: async () => {
      await host.invokeEditorFacade('showCollaborator')
    },
    hide: async () => {
      await host.invokeEditorFacade('hideCollaborator')
    }
  }

  const externalAppFacade: ExternalAppFacade = {
    insert: async (url, params) => {
      return await host.invokeEditorFacade('insertExternalApp', [url, params])
    }
  }

  const locksFacade: LocksFacade = {
    show: async () => {
      await host.invokeEditorFacade('locks.show')
    },
    hide: async () => {
      await host.invokeEditorFacade('locks.hide')
    },
    addRangeLock: async (options: AddRangeLockParams) => {
      await host.invokeEditorFacade('locks.addRangeLock', [options])
    },
    addSheetLock: async (options: AddSheetLockParams) => {
      await host.invokeEditorFacade('locks.addSheetLock', [options])
    },
    removeRangeLocksInRanges: async (options: RemoveRangeLocksParams) => {
      await host.invokeEditorFacade('locks.removeRangeLocksInRanges', [options])
    },
    removeSheetLock: async (options: RemoveSheetLockParams) => {
      await host.invokeEditorFacade('locks.removeSheetLock', [options])
    }
  }

  const mentionFacade: MentionFacade = {
    locateCellByGuid: async (guid: string, notificationType?: MentionTypes) => {
      await host.invokeEditorFacade('mention.locateCellByGuid', [
        guid,
        notificationType
      ])
    }
  }

  const contentFacade: ContentFacade = {
    setContent: async (content: Content) => {
      await host.invokeEditorFacade('content.setContent', [content])
    }
  }

  const versionFacade: VersionFacade = {
    createRevision: async (options?: RevisionCreateOptions) => {
      await host.invokeEditorFacade('version.createRevision', [options])
      return undefined
    }
  }

  const docsHistoryFacade: HistoryFacade = {
    show: async () => {
      await host.invokeEditorFacade('showHistory')
    },
    hide: async () => {
      await host.invokeEditorFacade('hideHistory')
    }
  }

  const docsVersionFacade: VersionFacade = {
    show: async () => {
      await host.invokeEditorFacade('showRevision')
    },
    hide: async () => {
      await host.invokeEditorFacade('hideRevision')
    },
    createRevision: async (options?: RevisionCreateOptions) => {
      return await host.invokeEditorFacade('createRevision', [options])
    }
  }

  const presentationFacade: PresentationFacade = {
    start: async (index?: number) => {
      await host.invokeEditorFacade(
        'presentation.start',
        typeof index === 'number' ? [index] : []
      )
    },
    quit: async () => {
      await host.invokeEditorFacade('presentation.quit')
    },
    startFromCurrent: async () => {
      await host.invokeEditorFacade('presentation.startFromCurrent')
    },
    startRemoteLive: async () => {
      await host.invokeEditorFacade('presentation.startRemoteLive')
    },
    startSpeakerView: async () => {
      await host.invokeEditorFacade('presentation.startSpeakerView')
    }
  }

  const docsPresentationFacade: PresentationFacade = {
    ...presentationFacade,
    quit: async () => {
      await host.invokeEditorFacade('endDemonstration')
    }
  }

  const batchChangesFacade = async <T>(
    callback: () => T | Promise<T>
  ): Promise<Awaited<T>> => {
    const callbackId = host.registerEditorFacadeCallback(callback)
    try {
      return await host.invokeEditorFacade('batchChanges', [callbackId])
    } finally {
      host.unregisterEditorFacadeCallback(callbackId)
    }
  }

  const printFacade = async () => {
    await host.invokeEditorFacade('print')
  }

  const exportFacade = async (type: string) => {
    await host.invokeEditorFacade('export', [type])
  }

  const setFocusFacade = async (isFocus: boolean) => {
    await host.invokeEditorFacade('setFocus', [isFocus])
  }

  const docsSelectionFacade =
    host.createEditorFacadeModule<DocsSelectionFacade>('selection', {
      getRange: async (value?: DocsRangeValue) => {
        const locator = await host.invokeEditorFacade<{
          start: number
          end: number
        } | null>(
          'selection.getRange',
          typeof value === 'undefined' ? [] : [value]
        )
        return createDocsRangeFacade(host, locator)
      },
      getWholeRange: async () => {
        const locator = await host.invokeEditorFacade<{
          start: number
          end: number
        } | null>('selection.getWholeRange')
        return createDocsRangeFacade(host, locator)
      },
      addRangeListener: (listener: (payload: DocsRangeValue | null) => void) =>
        host.registerEditorFacadeListener(
          'selection.addRangeListener',
          listener
        )
    })

  const docsTablesFacade = host.createEditorFacadeModule<DocsTablesFacade>(
    'tables',
    {
      getAll: async () => {
        const tables = await host.invokeEditorFacade<
          Array<{ tableId: string }>
        >('tables.getAll')
        return tables.map((table) => createDocsTableFacade(host, table))
      },
      getOne: async (tableId: string) => {
        const table = await host.invokeEditorFacade<{ tableId: string } | null>(
          'tables.getOne',
          [tableId]
        )
        return table ? createDocsTableFacade(host, table) : null
      }
    }
  )

  const sheetWorkbookFacade =
    host.createEditorFacadeModule<SheetWorkbookFacade>('workbook', {
      getWorksheets: async () => {
        const worksheets = await host.invokeEditorFacade<
          Array<{ sheetId?: string; id?: string; name?: string }>
        >('workbook.getWorksheets')
        return worksheets.map((sheet) =>
          createSheetWorksheetFacade(host, sheet)
        )
      },
      getWorksheetById: async (sheetId: string) => {
        const worksheet = await host.invokeEditorFacade<{
          sheetId?: string
          id?: string
          name?: string
        } | null>('workbook.getWorksheetById', [sheetId])
        return worksheet ? createSheetWorksheetFacade(host, worksheet) : null
      },
      getActiveWorksheet: async () => {
        const worksheet = await host.invokeEditorFacade<{
          sheetId?: string
          id?: string
          name?: string
          active?: boolean
        }>('workbook.getActiveWorksheet')
        return createSheetWorksheetFacade(host, worksheet)
      }
    })

  const presentationSlidesFacade =
    host.createEditorFacadeModule<PresentationSlidesFacade>('slides', {
      getCurrentSlide: async () => {
        const slide = await host.invokeEditorFacade<{ slideId: string }>(
          'slides.getCurrentSlide'
        )
        return createPresentationSlideFacade(host, slide)
      },
      getSlides: async () => {
        const slides = await host.invokeEditorFacade<
          Array<{ slideId: string }>
        >('slides.getSlides')
        return slides.map((slide) => createPresentationSlideFacade(host, slide))
      },
      getSlideById: async (slideId: string) => {
        const slide = await host.invokeEditorFacade<{ slideId: string } | null>(
          'slides.getSlideById',
          [slideId]
        )
        return slide ? createPresentationSlideFacade(host, slide) : null
      },
      getSelectedSlides: async (ids?: string[]) => {
        const slides = await host.invokeEditorFacade<
          Array<{ slideId: string }>
        >('slides.getSelectedSlides', typeof ids === 'undefined' ? [] : [ids])
        return slides.map((slide) => createPresentationSlideFacade(host, slide))
      },
      addSlide: async () => {
        const slide = await host.invokeEditorFacade<{ slideId: string }>(
          'slides.addSlide'
        )
        return createPresentationSlideFacade(host, slide)
      },
      duplicateSlide: async (slideId: string) => {
        const slide = await host.invokeEditorFacade<{ slideId: string }>(
          'slides.duplicateSlide',
          [slideId]
        )
        return createPresentationSlideFacade(host, slide)
      }
    })

  const presentationSelectionFacade =
    host.createEditorFacadeModule<PresentationSelectionFacade>('selection', {
      getTextRange: async (value?: PresentationTextRangeValue) => {
        const locator = await host.invokeEditorFacade<{
          start: string
          end: string
        } | null>(
          'selection.getTextRange',
          typeof value === 'undefined' ? [] : [value]
        )
        return createPresentationTextRangeFacade(host, locator)
      },
      addRangeListener: (
        listener: (payload: PresentationTextRangeValue | null) => void
      ) =>
        host.registerEditorFacadeListener(
          'selection.addRangeListener',
          listener
        )
    })

  const presentationEventSubscriptionFacade: PresentationEventSubscriptionFacade =
    {
      addErrorListener: (
        listener: (error: { code: number | string; message?: string }) => void
      ) =>
        host.registerEditorFacadeListener(
          'eventSubscription.addErrorListener',
          listener
        ),
      addLoadedListener: (listener: () => void) =>
        host.registerEditorFacadeListener(
          'eventSubscription.addLoadedListener',
          listener
        )
    }

  switch (host.fileType) {
    case FileType.Document:
    case FileType.DocumentPro:
      return {
        title: titleFacade,
        history: docsHistoryFacade,
        comments: commentsFacade,
        discussion: discussionFacade,
        collaborator: collaboratorFacade,
        externalApp: externalAppFacade,
        version: docsVersionFacade,
        presentation: docsPresentationFacade,
        selection: docsSelectionFacade,
        settings: host.createEditorFacadeModule<DocsSettingsFacade>(
          'settings',
          {}
        ),
        search: host.createEditorFacadeModule<DocsSearchFacade>('search', {}),
        TOCs: host.createEditorFacadeModule<DocsTOCsFacade>('TOCs', {
          show: async () => {
            await host.invokeEditorFacade('showToc')
          },
          hide: async () => {
            await host.invokeEditorFacade('hideToc')
          }
        }),
        sidebar: host.createEditorFacadeModule<DocsSidebarFacade>(
          'sidebar',
          {}
        ),
        tables: docsTablesFacade,
        batchChanges: batchChangesFacade,
        print: printFacade
      }
    case FileType.Spreadsheet:
      return {
        history: historyFacade,
        comments: commentsFacade,
        locks: locksFacade,
        mention: mentionFacade,
        content: contentFacade,
        version: versionFacade,
        presentation: presentationFacade,
        workbook: sheetWorkbookFacade,
        activeSheet: createSheetWorksheetFacade(host, { active: true }),
        charts: host.createEditorFacadeModule<SheetChartsFacade>('charts', {}),
        selections: host.createEditorFacadeModule<SheetSelectionsFacade>(
          'selections',
          {}
        ),
        batchChanges: batchChangesFacade,
        print: printFacade,
        export: exportFacade,
        setFocus: setFocusFacade
      }
    case FileType.Presentation:
      return {
        history: historyFacade,
        comments: commentsFacade,
        version: versionFacade,
        presentation: presentationFacade,
        slides: presentationSlidesFacade,
        selection: presentationSelectionFacade,
        text: host.createEditorFacadeModule<PresentationTextFacade>('text', {}),
        zoom: host.createEditorFacadeModule<PresentationZoomFacade>('zoom', {}),
        eventSubscription: presentationEventSubscriptionFacade,
        batchChanges: batchChangesFacade,
        print: printFacade,
        export: exportFacade
      }
    default:
      return {}
  }
}
