export interface SlashMenuButton {
  name: string
  type: 'button'
  disabled?: boolean
  label?: string
  icon?: string
  callback?: () => void
}

export interface SlashMenuEntry {
  name: string
  type: 'entry'
  disabled?: boolean
  label?: string
  icon?: string
  children?: Array<SlashMenuEntry | SlashMenuButton>
}

export interface SlashMenuOptions {
  entries: Array<SlashMenuEntry | SlashMenuButton>
}
