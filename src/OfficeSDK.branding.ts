export const BRANDING_METHOD = {
  getEditorFooterLogo: 'branding.getEditorFooterLogo',
  setEditorFooterLogoSrc: 'branding.setEditorFooterLogoSrc'
} as const

export const BRANDING_CHANGED_EVENT = 'branding:changed'

export type SDKBrandMode = '0' | '1' | '2'
export type SDKBrandSource = 0 | 1 | 2 | 3

export interface SDKBrandConfig {
  mode: SDKBrandMode
  customAddress?: string
  source: SDKBrandSource
}

export interface BrandingChangedPayload {
  editorFooterLogo?: SDKBrandConfig
}

export interface BrandingFacade {
  getEditorFooterLogo: () => Promise<SDKBrandConfig | undefined>
  setEditorFooterLogoSrc: (src: string) => Promise<void>
}

interface BrandingHost {
  getEditorFooterLogoState(): SDKBrandConfig | undefined
  setEditorFooterLogoState(config: SDKBrandConfig | undefined): void
  invokeBranding<T>(
    method: string,
    payload?: Record<string, unknown>
  ): Promise<T>
  emitBrandingError(message: string, err: unknown): void
}

export function initBrandingFacade(host: BrandingHost): BrandingFacade {
  return {
    getEditorFooterLogo: async () => {
      const config = await host.invokeBranding<SDKBrandConfig | undefined>(
        BRANDING_METHOD.getEditorFooterLogo
      )
      host.setEditorFooterLogoState(config)
      return host.getEditorFooterLogoState()
    },
    setEditorFooterLogoSrc: async (src: string) => {
      try {
        const config = await host.invokeBranding<SDKBrandConfig>(
          BRANDING_METHOD.setEditorFooterLogoSrc,
          { src }
        )
        host.setEditorFooterLogoState(config)
      } catch (err: unknown) {
        host.emitBrandingError('set editor footer logo src failed', err)
        throw err
      }
    }
  }
}

export function applyBrandingChanged(
  host: BrandingHost,
  payload?: BrandingChangedPayload
) {
  if (
    !payload ||
    !Object.prototype.hasOwnProperty.call(payload, 'editorFooterLogo')
  ) {
    return
  }
  host.setEditorFooterLogoState(payload.editorFooterLogo)
}
