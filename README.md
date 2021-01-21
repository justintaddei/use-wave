<p align="center">
<img src="https://raw.githubusercontent.com/justintaddei/use-wave/assets/logo-small.png">
</p>

<h2 align="center">use-wave</h2>

<p align="center">
The material-ripple hook for React that actually works
</p>

![Checks](https://github.com/justintaddei/use-wave/workflows/checks/badge.svg)
![Issues](https://img.shields.io/github/issues-raw/justintaddei/use-wave.svg?style=flat)
![NPM version](https://img.shields.io/npm/v/use-wave.svg?style=flat)
![Downloads](https://img.shields.io/npm/dt/use-wave.svg?style=flat)
![License](https://img.shields.io/npm/l/use-wave.svg?style=flat)
![Language](https://img.shields.io/badge/language-typescript-blue.svg?style=flat)

## Why did I make this? 

Because every ripple hook/component I've tried to use in the past either didn't work, or was missing basic features.

<sub>Also available for Vue: [v-wave](https://github.com/justintaddei/v-wave)</sub>

**Here's what you can expect from this hook:**

- It works ([see for yourself](https://justintaddei.github.io/use-wave)).
- The wave appears on `pointerdown` instead of `pointerup`  
  *(you might think that's an obvious choice... but you'd be wrong).*
- There is a small delay before the ripple appears, during which the animation will be canceled if the user moves the pointer (e.g. scrolling on a mobile phone). This is similar to how native Android ripples work.
- Uses CSS transforms instead of `width` and `height`.
- Doesn't effect the appearance of the element you apply it to (won't explode when used on an element with  `display: flex`).
- Guesses the color of the wave automatically by default (using `currentColor`).
- Works with fixed, absolute, relative, and statically positioned elements.
- Will handle independent border-radii (e.g. `border-radius: 5px 20px 15px 30px`) perfectly fine.

If you have a feature request or you found a bug, please open an issue!


## [[ Live Demo ]](https://justintaddei.github.io/use-wave)
> Source code for the demo page can be found on the [example branch.](https://github.com/justintaddei/use-wave/tree/example)

## Install

**npm**
```sh
$ npm i use-wave
```
or

**CDN**
```html
<script src="https://unpkg.com/use-wave"></script>
```

## Usage

```jsx
import useWave from 'use-wave'

function MyComponent() {
    const wave = useWave()

    return <button ref={wave}>Click me!</button>
}
```

## Options

#### Usage with options 

```js
useWave({
    color: 'red',
    startingOpacity: 0.5,
    easing: 'ease-in',
})
```

#### Global options

```js
// your/hooks/directory/use-custom-wave.js

export const useCustomWave = (overrides = {}) => {
    const defaults = {color: 'red'} // your custom global options
    return useWave({...defaults, ...overrides})
}
```

### Options Summary
| Name                 | Type     |     Default      |
| -------------------- | -------- | :--------------: |
| `color`              | `string` | `"currentColor"` |
| `initialOpacity`     | `number` |      `0.2`       |
| `finialOpacity`      | `number` |      `0.1`       |
| `duration`           | `number` |      `0.4`       |
| `easing`             | `string` |    `ease-out`    |
| `cancellationPeriod` | `number` |       `75`       |



### Details

#### color  
- **type:** `string`  
- *default:* `"currentColor"`  
  
    The `background-color` of the wave.

#### initialOpacity  
- **type:** `number`  
- *default:* `0.2`  
  
    The opacity of the wave when it first appears.

#### finalOpacity  
- **type:** `number`  
- *default:* `0.1`  
  
    The opacity the wave should be when it has stopped moving.

#### duration  
- **type:** `number`  
- *default:* `0.4`  
  
    The duration of the wave animation in seconds.

#### easing  
- **type:** `string`  
- *default:* `"ease-out"`  
  
    Any valid CSS `<timing-function>`

#### cancellationPeriod  
- **type:** `number`  
- *default:* `75`  
  
    The delay, *in milliseconds*, during which the animation will be canceled by the user moving their figure/pointer (e.g. while scrolling on a mobile phone).

    **Note:**  
    The wave will not appear until after the delay, meaning a delay greater than 100ms can make the site feel sluggish.


## License

This project is distributed under the [MIT License](https://github.com/justintaddei/v-shared-element/blob/master/LICENSE.md).

### The MIT License (MIT)  <!-- omit in toc -->

Copyright (c) 2021 Justin Taddei

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
