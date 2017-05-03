import jsx from 'rollup-plugin-jsx';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import json from 'rollup-plugin-json';

export default {
	entry: 'main.js',
	dest: 'index.js',
	format: 'cjs',
	external: ['preact'],
	plugins: [
		jsx({
			factory: 'h',
			passUnknownTagsToFactory: true
		}),
		resolve({
			main: true
		}),
		commonjs(),
		json()
	],
	sourceMap: false
};
