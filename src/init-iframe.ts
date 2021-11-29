export default function initIframe(options: {
  id: string
  src: string
  allowPolicy?: string
}): HTMLIFrameElement {
  const iframe = document.createElement('iframe')
  iframe.style.border = 'none'
  iframe.style.overflow = 'hidden'
  iframe.style.width = '100%'
  iframe.style.height = '100%'

  if ('allow' in iframe) {
    iframe.allow =
      options.allowPolicy ?? 'fullscreen *;clipboard-read *;clipboard-write *;'
  } else {
    iframe.allowFullscreen = true
  }

  iframe.src = options.src

  return iframe
}
