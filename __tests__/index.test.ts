import useWave from '../src/index'
import { DEFAULT_OPTIONS, IWaveOptions } from '../src/options'

describe('useWave', () => {
  test('handles null element', () => {
    const el = null

    const wave = useWave()

    expect(() => wave(el)).not.toThrow()
  })
  test('adds pointerdown listener', () => {
    const el = ({ addEventListener: jest.fn() } as unknown) as HTMLElement

    const wave = useWave()

    wave(el)

    expect(el.addEventListener).toHaveBeenCalled()
  })
  test('only adds pointerdown listener once per element', () => {
    const el = ({ addEventListener: jest.fn() } as unknown) as HTMLElement

    const wave = useWave()

    wave(el)
    wave(el)
    wave(el)

    expect(el.addEventListener).toHaveBeenCalledTimes(1)
  })
  test('updates options on re-render', () => {
    // Set up mock of wave.ts
    const waveMock = jest.fn()
    jest.resetModules()
    jest.mock('../src/wave', () => ({
      wave: (...args: any[]) => {
        waveMock(...args)
      }
    }))
    const useWave = require('../src/index').default

    // test
    let onPointerdown = (): any => {
      throw 'listener not attached'
    }

    const fakeElement = {
      addEventListener(_: string, cb: () => any) {
        onPointerdown = cb
      }
    }

    const renderComponent = (opts: Partial<IWaveOptions>) => {
      const wave = useWave(opts)

      // Same as ref={wave}
      wave(fakeElement)
    }

    renderComponent({})

    onPointerdown()

    expect(waveMock).toHaveBeenCalledWith(undefined, fakeElement, DEFAULT_OPTIONS)

    renderComponent({ color: '#fff' })

    onPointerdown()

    expect(waveMock).toHaveBeenCalledWith(undefined, fakeElement, { ...DEFAULT_OPTIONS, color: '#fff' })
  })
})
