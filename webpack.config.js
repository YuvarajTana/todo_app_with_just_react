const webpack = require('webpack');
const path = require('path');

const config = {
	entry:path.resolve(__dirname,'./src/app.jsx'),
	output:{
		path:path.resolve(__dirname,'dist'),
		filename:'bundle.js'
	},
	module:{
		rules:[
			{
				test:/\.jsx?$/,
				exclude:[/node_modules/],
				use:[
					'babel-loader'
				]
			}
		]
	},
	resolve: {
	    extensions: ['*', '.js', '.jsx']
	},
	watchOptions:{
		ignored:/node_modules/
	},
	plugins:[]
};
module.exports = config;

