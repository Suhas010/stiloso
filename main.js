import {h} from 'preact';
import tags from './html-tags';

const isClassName = def => typeof def === 'string';
const isStyle = def => def !== null && typeof def === 'object';
const isDynamicFn = def => typeof def === 'function';

const stiloso = (tagName, ...definers) => {
	const staticClassNames = definers.filter(isClassName);
	const staticStyles = definers.filter(isStyle);
	const dynamicFns = definers.filter(isDynamicFn);
	// A console.log({className, style, definers});

	return props => {
		const dynamicDefs = dynamicFns
			.map(fn =>
				fn(props)
			)
			.reduce((result, def) => result.concat(def), []);

		const dynamicClassNames = dynamicDefs.filter(isClassName);
		const dynamicStyles = dynamicDefs.filter(isStyle);

		const className = [props.className || null]
			.concat(staticClassNames)
			.concat(dynamicClassNames)
			.filter(c => c !== null)
			.join(' ') || null;

		const style = Object.assign({}, ...[props.style || null]
			.concat(staticStyles)
			.concat(dynamicStyles)
			.filter(c => c !== null)
		);

		delete props.style;
		delete props.className;

		return h(
			tagName,
			Object.assign({className, style}, props),
			props.children
		);
	};
};

stiloso.partial = (tagName, ...definers) => (...otherDefiners) =>
	stiloso(tagName, ...definers.concat(otherDefiners))
;

tags.forEach(tag => {
	stiloso[tag] = stiloso.partial(tag);
});

export default stiloso;
