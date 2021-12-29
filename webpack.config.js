const path = require( 'path' );

const HtmlWebpackPlugin = require( 'html-webpack-plugin' );

module.exports = {
	entry: './src/index.js',

	output: {
		path:      path.resolve( __dirname, 'dist' ),
		filename: 'webpack-bundle.js',
	},

	module: {
		rules: [

			// JS
			{
				test: /\.(js)$/,
				use:  'babel-loader',
			},

		],
	},

	plugins: [
		new HtmlWebpackPlugin( {
			template: 'src/index.html',
		} ),
	],

	mode: 'development'
};
