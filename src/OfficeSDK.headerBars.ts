import { InvokeMethod } from 'weboffice-js-sdk-shared'

export const HEADER_BARS_METHOD = {
  getVisible: 'headerBars.getVisible',
  setVisible: 'headerBars.setVisible',
  addCommand: 'headerBars.addCommand',
  getCommand: 'headerBars.getCommand',
  setCommandVisible: 'headerBars.setCommandVisible',
  setCommandDisabled: 'headerBars.setCommandDisabled',
  setCommandActive: 'headerBars.setCommandActive',
  setCommandSrc: 'headerBars.setCommandSrc',
  setCommandLabel: 'headerBars.setCommandLabel',
  setCommandEditable: 'headerBars.setCommandEditable',
  setCommandCallbackEnabled: 'headerBars.setCommandCallbackEnabled',
  listViewCommands: 'headerBars.listViewCommands',
  handleCommandClick: 'headerBars.handleCommandClick'
} as const

export const HEADER_BARS_CHANGED_EVENT = 'headerBars:changed'

export interface HeaderBarsCommandDefinition {
  id: string
  section?: string
  order?: number
  label?: string
  visible?: boolean
  disabled?: boolean
  active?: boolean
  editable?: boolean
  type?: 'action' | 'structural'
  renderType?: string
  src?: string
  onClick?: () => void | Promise<void>
}

export interface HeaderBarsCommandState extends HeaderBarsCommandDefinition {
  type: 'action' | 'structural'
}

export interface HeaderBarsCommandRef {
  readonly id: string
  visible: boolean
  disabled: boolean
  active: boolean
  src?: string
  label?: string
  editable?: boolean
  onCommandClick?: () => void | Promise<void>
  getState: () => HeaderBarsCommandState | undefined
}

export type HeaderBarsTitleChangeHandler = (
  title: string
) => void | Promise<void>

export interface HeaderBarsFacade {
  visible: boolean
  onTitleChange?: HeaderBarsTitleChangeHandler
  getVisible: () => Promise<boolean>
  setVisible: (visible: boolean) => Promise<void>
  addCommand: (
    command: HeaderBarsCommandDefinition,
    posCommand: string,
    pos?: 'before' | 'after'
  ) => Promise<boolean>
  getCommand: (id: string) => HeaderBarsCommandRef
  listViewCommands: () => Promise<HeaderBarsCommandState[]>
}

export interface HeaderBarsChangedPayload {
  reason?: string
  commandId?: string
  version?: number
  snapshot?: {
    visible: boolean
    commands: HeaderBarsCommandState[]
  }
}

interface HeaderBarsHost {
  getVisibleState(): boolean
  setVisibleState(visible: boolean): void
  getCommandsMap(): Map<string, HeaderBarsCommandState>
  getOverridesMap(): Map<string, (() => void | Promise<void>) | undefined>
  getRefsMap(): Map<string, HeaderBarsCommandRef>
  getTitleHandler(): HeaderBarsTitleChangeHandler | undefined
  setTitleHandler(handler: HeaderBarsTitleChangeHandler | undefined): void
  isTitleSubscribed(): boolean
  setTitleSubscribed(subscribed: boolean): void
  invokeHeaderBars<T>(
    method: string,
    payload?: Record<string, unknown>
  ): Promise<T>
  emitHeaderBarsError(message: string, err: unknown): void
  onInternalTitleChange(listener: (title: unknown) => void): void
  subscribeEditorTitleChange(): Promise<void>
}

export function initHeaderBarsFacade(host: HeaderBarsHost): HeaderBarsFacade {
  const facade: HeaderBarsFacade = {
    visible: false,
    onTitleChange: undefined,
    getVisible: async () => {
      return await syncHeaderBarsVisible(host)
    },
    setVisible: async (visible: boolean) => {
      await setHeaderBarsVisible(host, visible)
    },
    addCommand: async (
      command: HeaderBarsCommandDefinition,
      posCommand: string,
      pos: 'before' | 'after' = 'after'
    ) => {
      const { onClick, ...commandPayload } = command
      const added = await host.invokeHeaderBars<boolean>(
        HEADER_BARS_METHOD.addCommand,
        { command: commandPayload, posCommand, pos }
      )
      const clickHandler = onClick
      if (added && typeof clickHandler === 'function') {
        host.getOverridesMap().set(command.id, clickHandler)
        await host.invokeHeaderBars<undefined>(
          HEADER_BARS_METHOD.setCommandCallbackEnabled,
          {
            id: command.id,
            enabled: true
          }
        )
      }
      return added
    },
    getCommand: (id: string) => getHeaderBarsCommandRef(host, id),
    listViewCommands: async () => {
      const commands = await host.invokeHeaderBars<HeaderBarsCommandState[]>(
        HEADER_BARS_METHOD.listViewCommands
      )
      syncHeaderBarsCommands(host, commands)
      return commands
    }
  }

  Object.defineProperty(facade, 'visible', {
    configurable: true,
    enumerable: true,
    get: () => host.getVisibleState(),
    set: (next: boolean) => {
      setHeaderBarsVisible(host, next).catch((err: unknown) => {
        host.emitHeaderBarsError('set headerBars.visible failed', err)
      })
    }
  })

  Object.defineProperty(facade, 'onTitleChange', {
    configurable: true,
    enumerable: true,
    get: () => host.getTitleHandler(),
    set: (handler: HeaderBarsTitleChangeHandler | undefined) => {
      host.setTitleHandler(handler)
      if (typeof handler !== 'function') {
        return
      }
      ensureHeaderBarsTitleChangeSubscription(host).catch((err: unknown) => {
        host.emitHeaderBarsError('subscribe headerBars titleChange failed', err)
      })
    }
  })

  return facade
}

export async function ensureHeaderBarsTitleChangeSubscription(
  host: HeaderBarsHost
): Promise<void> {
  if (host.isTitleSubscribed()) {
    return
  }
  host.setTitleSubscribed(true)
  host.onInternalTitleChange((title: unknown) => {
    if (typeof title !== 'string') {
      return
    }
    host.getTitleHandler()?.(title)
  })
  try {
    await host.subscribeEditorTitleChange()
  } catch (error: unknown) {
    host.setTitleSubscribed(false)
    throw error
  }
}

export function syncHeaderBarsCommands(
  host: HeaderBarsHost,
  commands: HeaderBarsCommandState[]
) {
  const commandMap = host.getCommandsMap()
  commandMap.clear()
  for (const command of commands) {
    commandMap.set(command.id, command)
  }
}

export function applyHeaderBarsChanged(
  host: HeaderBarsHost,
  payload?: HeaderBarsChangedPayload
) {
  const snapshot = payload?.snapshot
  if (!snapshot) {
    return
  }
  host.setVisibleState(snapshot.visible)
  syncHeaderBarsCommands(host, snapshot.commands)
}

export async function syncHeaderBarsVisible(
  host: HeaderBarsHost
): Promise<boolean> {
  const payload = await host.invokeHeaderBars<{ visible: boolean }>(
    HEADER_BARS_METHOD.getVisible
  )
  host.setVisibleState(payload.visible)
  return host.getVisibleState()
}

export async function setHeaderBarsVisible(
  host: HeaderBarsHost,
  visible: boolean
) {
  host.setVisibleState(visible)
  await host.invokeHeaderBars<undefined>(HEADER_BARS_METHOD.setVisible, {
    visible
  })
}

export function getHeaderBarsCommandRef(
  host: HeaderBarsHost,
  id: string
): HeaderBarsCommandRef {
  const refs = host.getRefsMap()
  const existing = refs.get(id)
  if (existing) {
    return existing
  }

  const commands = host.getCommandsMap()
  if (!commands.has(id)) {
    host
      .invokeHeaderBars<{ command: HeaderBarsCommandState | null }>(
        HEADER_BARS_METHOD.getCommand,
        { id }
      )
      .then((payload) => {
        if (payload.command) {
          commands.set(id, payload.command)
        }
      })
      .catch((err: unknown) => {
        host.emitHeaderBarsError('fetch headerBars command failed', err)
      })
  }

  const ref: HeaderBarsCommandRef = {
    id,
    visible: true,
    disabled: false,
    active: false,
    src: undefined,
    label: undefined,
    editable: undefined,
    onCommandClick: undefined,
    getState: () => commands.get(id)
  }

  Object.defineProperties(ref, {
    visible: {
      configurable: true,
      enumerable: true,
      get: () => commands.get(id)?.visible !== false,
      set: (next: boolean) => {
        const current = commands.get(id)
        if (current) {
          commands.set(id, { ...current, visible: next })
        }
        host
          .invokeHeaderBars<undefined>(HEADER_BARS_METHOD.setCommandVisible, {
            id,
            visible: next
          })
          .catch((err: unknown) => {
            host.emitHeaderBarsError(
              'set headerBars command visible failed',
              err
            )
          })
      }
    },
    disabled: {
      configurable: true,
      enumerable: true,
      get: () => commands.get(id)?.disabled === true,
      set: (next: boolean) => {
        const current = commands.get(id)
        if (current) {
          commands.set(id, { ...current, disabled: next })
        }
        host
          .invokeHeaderBars<undefined>(HEADER_BARS_METHOD.setCommandDisabled, {
            id,
            disabled: next
          })
          .catch((err: unknown) => {
            host.emitHeaderBarsError(
              'set headerBars command disabled failed',
              err
            )
          })
      }
    },
    active: {
      configurable: true,
      enumerable: true,
      get: () => commands.get(id)?.active === true,
      set: (next: boolean) => {
        const current = commands.get(id)
        if (current) {
          commands.set(id, { ...current, active: next })
        }
        host
          .invokeHeaderBars<undefined>(HEADER_BARS_METHOD.setCommandActive, {
            id,
            active: next
          })
          .catch((err: unknown) => {
            host.emitHeaderBarsError(
              'set headerBars command active failed',
              err
            )
          })
      }
    },
    src: {
      configurable: true,
      enumerable: true,
      get: () => commands.get(id)?.src,
      set: (next: string | undefined) => {
        if (typeof next !== 'string') {
          return
        }
        const current = commands.get(id)
        if (current) {
          commands.set(id, { ...current, src: next })
        }
        host
          .invokeHeaderBars<undefined>(HEADER_BARS_METHOD.setCommandSrc, {
            id,
            src: next
          })
          .catch((err: unknown) => {
            host.emitHeaderBarsError('set headerBars command src failed', err)
          })
      }
    },
    label: {
      configurable: true,
      enumerable: true,
      get: () => commands.get(id)?.label,
      set: (next: string | undefined) => {
        if (
          typeof next !== 'string' ||
          id === 'title' ||
          id === 'save-status'
        ) {
          return
        }
        const current = commands.get(id)
        if (current) {
          commands.set(id, { ...current, label: next })
        }
        host
          .invokeHeaderBars<undefined>(HEADER_BARS_METHOD.setCommandLabel, {
            id,
            label: next
          })
          .catch((err: unknown) => {
            host.emitHeaderBarsError('set headerBars command label failed', err)
          })
      }
    },
    editable: {
      configurable: true,
      enumerable: true,
      get: () => commands.get(id)?.editable,
      set: (next: boolean | undefined) => {
        if (id !== 'title') {
          host.emitHeaderBarsError(
            'headerBars command editable is only supported for title',
            new Error('headerBars command editable is only supported for title')
          )
          return
        }
        const current = commands.get(id)
        if (current) {
          commands.set(id, { ...current, editable: next })
        }
        host
          .invokeHeaderBars<undefined>(HEADER_BARS_METHOD.setCommandEditable, {
            id,
            editable: next
          })
          .catch((err: unknown) => {
            host.emitHeaderBarsError(
              'set headerBars command editable failed',
              err
            )
          })
      }
    },
    onCommandClick: {
      configurable: true,
      enumerable: true,
      get: () => host.getOverridesMap().get(id),
      set: (handler: (() => void | Promise<void>) | undefined) => {
        host.getOverridesMap().set(id, handler)
        host
          .invokeHeaderBars<undefined>(
            HEADER_BARS_METHOD.setCommandCallbackEnabled,
            {
              id,
              enabled: typeof handler === 'function'
            }
          )
          .catch((err: unknown) => {
            host.emitHeaderBarsError(
              'set headerBars command callback failed',
              err
            )
          })
      }
    }
  })

  refs.set(id, ref)
  return ref
}

export async function subscribeHeaderBarsTitleChange(
  invoke: <T>(method: string, args: unknown[]) => Promise<T>
) {
  await invoke(InvokeMethod.ListenEditorEvent, ['titleChange'])
}
