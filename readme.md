# stiloso

[![Greenkeeper badge](https://badges.greenkeeper.io/parro-it/stiloso.svg)](https://greenkeeper.io/)

> Create styled and classed react components

background details relevant to understanding what this module does

## Usage

description of the example

```js
const stiloso = require('stiloso');

// Create a ToolbarHeader component rendered as
// <header className="toolbar toolbar-header"/>
export const ToolbarHeader = stiloso.header('toolbar', 'toolbar-header');

// Create a Window component rendered as <main className="window"/>
export const Window = stiloso.main('window');

// Create a Warning component rendered as <span style="color: red"/>
export const Warning = stiloso.span({color: 'red'});

// Create a Title component rendered as
// <span className="title" style="font-size: 40px" />
export const Title = stiloso.h1('title', {fontSize: 40});

// Create a Pane component rendered as
// <section className="pane"/>
// `section` element will contains additional class `pane-sm`
// if `small` boolean property is provided to the component.
// <Pane small> is rendered as <section className="pane pane-sm"/>
export const Pane = stiloso.section('pane', props =>
	props.small ? 'pane-sm' : null
);
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

