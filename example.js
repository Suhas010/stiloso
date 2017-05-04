const stiloso = require('stiloso');
const {h} = require('preact');
const {render} = require('preact-render-to-string');

const ToolbarHeader = stiloso.header('toolbar', 'toolbar-header');
const Window = stiloso.main('window');
const Warning = stiloso.span({color: 'red'});
const Title = stiloso.h1('title', {fontSize: 40});
const Pane = stiloso.section('pane', props =>
	props.small ? 'pane-sm' : null
);

render(h(Window, {}, [
	h(ToolbarHeader, {}, [h(Title, {}, ['Example Window'])]),
	h(Pane, {active: true}, [h(Warning, {}, ['this is an example'])])
]));
