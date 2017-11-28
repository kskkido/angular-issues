const webpack = require('webpack')
const merge = require('webpack-merge')
const CompressionPlugin = require('compression-webpack-plugin')
const { join } = require('path')
const { root, env } = require('./')

const PATHS = {
	entry: join(root, 'client'),
	output: join(root, 'dist')
}

const commonConfig = {
	output: {
		path: PATHS.output,
		filename: 'bundle.js'
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '*']
	},
	module: {
		rules: [{
			test: /\.jsx?$/,
			exclude: /(node_modules|bower_components)/,
			loader: 'babel-loader',
			options: {
				presets: ['react', 'env', 'stage-0']
			}
		},
		{
			test: /\.ts?x$/,
			exclude: /(node_modules|bower_components)/,
			loader: 'awesome-typescript-loader'
		}]
	}
}

const devConfig = {
	entry: [
		'react-hot-loader/patch',
		'webpack-hot-middleware/client',
		PATHS.entry
	],
	devtool: 'source-map',
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: '"development"'
			}
		}),
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin()
	]
}

const prodConfig = {
	entry: PATHS.entry,
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: '"production"'
			}
		}),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false, // Suppress uglification warnings
				unsafe: true,
				unsafe_comps: true,
				screw_ie8: true
			},
			output: {
				comments: false,
			},
			exclude: [/\.min\.js$/gi]
		}),
		new webpack.optimize.AggressiveMergingPlugin(),
		new CompressionPlugin({
			asset: '[path].gz[query]',
			algorithm: 'gzip',
			test: /\.js$|\.css$|\.html$/,
			threshold: 10240,
			minRatio: 0.8
		})
	]
}

module.exports = merge(
	commonConfig,
	env.NODE_ENV === 'development' ? devConfig : prodConfig
)
