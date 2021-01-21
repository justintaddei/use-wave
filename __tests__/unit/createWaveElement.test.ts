import { createWaveElement } from '../../src/utils/createWaveElement'
import { IUseWaveOptions } from '../../src/options'

test('createWaveElement returns a <div>', () => {
  expect(createWaveElement(0, 0, 0, {} as IUseWaveOptions)).toBeInstanceOf(HTMLDivElement)
})
