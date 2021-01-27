import { DEFAULT_OPTIONS, IWaveOptions } from './options'
import { wave } from './wave'

const elementMap = new WeakMap<HTMLElement, Partial<IWaveOptions>>()

function register(el: HTMLElement) {
  el.addEventListener('pointerdown', (event) => {
    wave(event, el, {
      ...DEFAULT_OPTIONS,
      ...elementMap.get(el)!
    })
  })
}

function useWave(options: Partial<IWaveOptions> = {}) {
  return (el: HTMLElement | null) => {
    if (!el) return

    if (!elementMap.has(el)) register(el)

    elementMap.set(el, options)
  }
}

export default useWave
export { IWaveOptions }
