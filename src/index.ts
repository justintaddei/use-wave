import { DEFAULT_OPTIONS, IUseWaveOptions } from '@/options'
import { wave } from '@/wave'
import { useCallback, useRef } from 'react'

const optionMap = new WeakMap<HTMLElement, Partial<IUseWaveOptions>>()

function onCreated(el: HTMLElement) {
  el.addEventListener('pointerdown', (event) => {
    wave(event, el, {
      ...DEFAULT_OPTIONS,
      ...optionMap.get(el)!
    })
  })
}

function updateOptions(el: HTMLElement, options: Partial<IUseWaveOptions>) {
  optionMap.set(el, options)
}

function useWave(options: Partial<IUseWaveOptions> = {}) {
  const ref = useRef<HTMLElement | null>(null)

  if (ref.current) updateOptions(ref.current, options)

  return useCallback((el: HTMLElement) => {
    if (!el) return

    ref.current = el

    updateOptions(el, options)
    onCreated(el)
  }, [])
}

export default useWave
