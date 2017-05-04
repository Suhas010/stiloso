# stiloso

[![Greenkeeper badge](https://badges.greenkeeper.io/parro-it/stiloso.svg)](https://greenkeeper.io/)

> Create styled and classed react components

background details relevant to understanding what this module does

## Usage

description of the example

```js
const {html, propsToClasses} = require('stiloso');
const {h} = require('preact');
const {render} = require('preact-render-to-string');

const ToolbarHeader = html.header('toolbar', 'toolbar-header');
const Window = html.main('window');
const Warning = html.span({color: 'red'});
const Title = html.h1('title', {fontSize: 40});
const Pane = html.section('pane', propsToClasses({small: 'pane-sm'}));

console.log(render(h(Window, {}, [
	h(ToolbarHeader, {}, [h(Title, {}, ['Example Window'])]),
	h(Pane, {active: true}, [h(Warning, {}, ['this is an example'])])
])));
```

This will output

```
```

[![Travis Build Status](https://img.shields.io/travis/parro-it/stiloso/master.svg)](http://travis-ci.org/parro-it/stiloso)
[![NPM downloads](https://img.shields.io/npm/dt/stiloso.svg)](https://npmjs.org/package/stiloso)


## API

```js
const stiloso = (): object
```

description of the function signature

## Install

With [npm](https://npmjs.org/) installed, run

```
$ npm install stiloso
```

## See Also

- [`noffle/common-readme`](https://github.com/noffle/common-readme)

## License

MIT

