const webpack = require('webpack')
const merge = require('webpack-merge')
const { join } = require('path')
const { root } = require('../')

const PATHS = {
	root,
	common: join(root, '/src/common'),
	actions: join(root, 'src/common/actions'),
	components: join(root, 'src/common/components'),
	reducers: join(root, 'src/common/reducers'),
	styles: join(root, 'src/common/styles'),
	utils: join(root, 'src/common/utils')
}

const commonConfig = {
	resolve: {
		alias: {
			Actions: PATHS.actions,
			Common: PATHS.common,
			Components: PATHS.components,
			Reducers: PATHS.reducers,
			Root: PATHS.root,
			Styles: PATHS.styles,
			Utils: PATHS.utils
		},
		extensions: ['.js', '.jsx', '.json', '*'],
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel-loader',
				options: {
					presets: ['react', 'env', 'stage-0']
				}
			},
			{
				test: /\.css$/,
				loader: 'css-loader'
			}
		]
	}
}

const prodConfig = {
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: '"production"'
			}
		})
	]
}

const devConfig = {
	devtool: 'cheap-source-map',
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: '"development"'
			}
		})
	]
}

module.exports = (env) => {
	const envConfig = env.NODE_ENV === 'production' ? prodConfig : devConfig

	return factory => merge(commonConfig, envConfig, factory(env))
}

