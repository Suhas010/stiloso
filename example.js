const {html, propsToClasses} = require('stiloso');
const {h} = require('preact');
const {render} = require('preact-render-to-string');

const ToolbarHeader = html.header('toolbar', 'toolbar-header');
const Window = html.main('window');
const Warning = html.span({color: 'red'});
const Title = html.h1('title', {fontSize: 40});
const Pane = html.section('pane', propsToClasses({small: 'pane-sm'}));

render(h(Window, {}, [
	h(ToolbarHeader, {}, [h(Title, {}, ['Example Window'])]),
	h(Pane, {active: true}, [h(Warning, {}, ['this is an example'])])
]));
