import { createWaveElement } from '../../src/utils/createWaveElement'
import { IWaveOptions } from '../../src/options'

test('createWaveElement returns a <div>', () => {
  expect(createWaveElement(0, 0, 0, {} as IWaveOptions)).toBeInstanceOf(HTMLDivElement)
})
