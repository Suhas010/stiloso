import test from 'ava';
import {h} from 'preact';
import {render} from 'preact-render-to-string';
import {stiloso, html, propsToClasses, partial} from '.';

test('apply class name', t => {
	const Title = stiloso('header', 'title');
	t.is('<header class="title"></header>', render(h(Title)));
});

test('mix with components class name', t => {
	const Title = stiloso('header', 'title');
	t.is('<header class="custom title"></header>', render(h(Title, {className: 'custom'})));
});

test('dynamic styles', t => {
	const Title = stiloso('header', 'jumbo', props => {
		const {active} = props;
		delete props.active;
		return [active ? 'red' : 'green'];
	});
	t.is('<header class="jumbo red"></header>', render(h(Title, {active: true})));
	t.is('<header class="jumbo green"></header>', render(h(Title, {active: false})));
});

test('propsToClasses', t => {
	const Title = stiloso('header', 'jumbo', propsToClasses({
		warning: 'red',
		info: 'blue'
	}));

	t.is('<header class="jumbo red"></header>', render(h(Title, {warning: true})));
	t.is('<header class="jumbo blue"></header>', render(h(Title, {info: true})));
	t.is('<header class="jumbo"></header>', render(h(Title, {})));
});

test('ignore empty styles', t => {
	const Title = stiloso('header', 'title', {});
	t.is('<header class="title"></header>', render(h(Title)));
});

test('apply custom styles', t => {
	const Sidebar = stiloso('aside', null, {color: 'red'});
	t.is('<aside style="color: red;"></aside>', render(h(Sidebar)));
});

test('apply classname & custom styles', t => {
	const Sidebar = stiloso('aside', 'title', {color: 'red'});
	t.is('<aside class="title" style="color: red;"></aside>', render(h(Sidebar)));
});

test('allow children', t => {
	const Menu = stiloso('div');
	t.is('<div><span>item1</span></div>', render(h(Menu, {}, [
		h('span', {}, ['item1'])
	])));
});

test('has shortcuts for all html5 tags', t => {
	const Awesome = html.main('awesome', {color: 'white'});
	t.is('<main class="awesome" style="color: white;"></main>', render(h(Awesome)));
});

test('partial partially apply arguments', t => {
	const comp = partial('div', 'claxx', {color: 'red'});
	const Compito = comp('clazz', {background: 'green'});
	const expected = '<div class="claxx clazz" style="color: red; background: green;"></div>';
	const actual = render(h(Compito));
	t.is(expected, actual);
});
