const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		path: path.join(__dirname, 'dist')
	},
	devtool: 'source-map',
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		compress: true,
		port: 9000,
		historyApiFallback: true
	},
	module: {
		rules: [
			{
				test: /\.js?$/,
				use: ['eslint-loader'],
				include: path.join(__dirname, 'src'),
				enforce: 'pre'
			},
			{
				test: /\.jsx?$/,
				use: ['babel-loader']
			},
			{
				test: /\.css?$/,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/i,
				use: [
					'file-loader?name=assets/[name].[ext]',
					'image-webpack-loader'
				]
			}
		]
	},
	plugins: [
		new CopyWebpackPlugin([{
			from: path.join(__dirname, 'src/index.html'),
			to: path.join(__dirname, 'dist')
		}])
	]
};
