import jsx from 'rollup-plugin-jsx';

export default {
	entry: 'main.js',
	dest: 'index.js',
	format: 'cjs',
	external: ['preact'],
	plugins: [
		jsx({
			factory: 'h',
			passUnknownTagsToFactory: true
		})
	],
	sourceMap: false
};
