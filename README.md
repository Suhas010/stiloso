# stiloso

[![Greenkeeper badge](https://badges.greenkeeper.io/parro-it/stiloso.svg)](https://greenkeeper.io/)

> Simplify creation of modules that wraps CSS frameworks with react components.

preact modules that wraps CSS frameworks often are just a collection of  simple html elements components with a set of classes from the CSS framework applied.

This module simplify the creation of such react components.
It export a function that return a preact component that render to an html5 tag with specified classes and styles applied.

## Usage

This example create some components that wraps [photonkit](photonkit.com)
widgets.

It uses the html5 helpers function exported in `html`.

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

```html
<main class="window">
	<header class="toolbar toolbar-header">
		<h1 class="title" style="font-size: 40px;">
			Example Window
		</h1>
	</header>
	<section active class="pane">
		<span style="color: red;">
			this is an example
		</span>
	</section>
</main>
```

[![Travis Build Status](https://img.shields.io/travis/parro-it/stiloso/master.svg)](http://travis-ci.org/parro-it/stiloso)
[![NPM downloads](https://img.shields.io/npm/dt/stiloso.svg)](https://npmjs.org/package/stiloso)

## API

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

### stiloso

Create a preact component that render to the specified HTML element, applying
specified classes and styles.
Component children will become children of the HTML element, and props will be
forwarded to it as well. Class names and inline CSS styles will be coinstructed as specified below.

**Parameters**

-   `tagName` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** Tagname of the html element to use for the component
-   `definers` **([Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) \| [Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function) \| [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String))** Arguments that defines classes and styles to apply
    to the html element.
    When elements are of String type, the value will be used as a class of the HTML element;
    When elements are simple object, they will be used as style property of the element, using
    normal react syntax for styles;
    When they are Functions,  they will be called with component props as argument.
    The function should return a string or an array of string that will be used as classes of the HTML element.

Returns **Component** A stateless preact component.

## Install

With [npm](https://npmjs.org/) installed, run

    $ npm install stiloso

## See Also

-   [`noffle/common-readme`](https://github.com/noffle/common-readme)

## License

MIT