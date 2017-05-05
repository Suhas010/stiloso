import {h} from 'preact';
import flatMap from 'flatmap';
import tags from 'html-tags/html-tags.json';

const isClassName = def => typeof def === 'string';
const isStyle = def => def !== null && typeof def === 'object';
const isDynamicFn = def => typeof def === 'function';
const applyProps = props => fn => fn(props);

/**
 * Create a preact component that render to the specified HTML element, applying
 * specified classes and styles.
 * Component children will become children of the HTML element, and props will be
 * forwarded to it as well. Class names and inline CSS styles will be coinstructed as specified below.
 *
 * @param  {String} tagName Tagname of the html element to use for the component
 * @param  {Object|Function|String}definers Arguments that defines classes and styles to apply to the html element.
 * Array elements could have following types:
 * - String:  argument value will be used as a class of the HTML element
 * - Object:  argument will be used as style property of the element, using normal react syntax
 * - Function:  provided function will be called with component props as argument. The function should return a string or an array of string that will be used as classes of the HTML element.
 * @return {Component} A stateless preact component.
 */
export const stiloso = (tagName, ...definers) => {
	const staticClassNames = definers.filter(isClassName);
	const staticStyles = definers.filter(isStyle);
	const dynamicFns = definers.filter(isDynamicFn);

	return props => {
		const dynamicDefs = flatMap(dynamicFns, applyProps(props));

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

		return h(
			tagName,
			Object.assign({}, props, {className, style}),
			props.children
		);
	};
};

export const partial = (tagName, ...definers) => (...otherDefiners) =>
	stiloso(tagName, ...definers.concat(otherDefiners))
;

export const html = {};
tags.forEach(tag => {
	html[tag] = partial(tag);
});

export const propsToClasses = opts => props => {
	const defs = [];
	let someClassApplied = false;
	for (const prop of Object.keys(opts)) {
		if (props[prop]) {
			defs.push(opts[prop]);
			delete props[prop];
			someClassApplied = true;
		}
	}
	if (!someClassApplied && opts._) {
		defs.push(opts._);
	}

	return defs;
};
