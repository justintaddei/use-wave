import { DEFAULT_OPTIONS, IUseWaveOptions } from '@/options'
import { wave } from '@/wave'

const elementMap = new WeakMap<HTMLElement, Partial<IUseWaveOptions>>()

function register(el: HTMLElement) {
  el.addEventListener('pointerdown', (event) => {
    wave(event, el, {
      ...DEFAULT_OPTIONS,
      ...elementMap.get(el)!
    })
  })
}

function useWave(options: Partial<IUseWaveOptions> = {}) {
  return (el: HTMLElement) => {
    if (!el) return

    if (!elementMap.has(el)) register(el)

    elementMap.set(el, options)
  }
}

export default useWave
