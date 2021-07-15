module.exports = {
	// @see https://tailwindcss.com/docs/upcoming-changes
	purge: [
		'./src/components/**/*.js',
		'./pages/**/*.js'],
	theme: {
		minHeight:{
			'60vh': '60vh'
		}
	},
	variants: {},
	plugins: [
		require( 'tailwindcss' ),
		require( 'precss' ),
		require( 'autoprefixer' )
	]
}