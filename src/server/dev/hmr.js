import express from 'express'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import configs from 'Root/webpack.config'
import { env } from 'Root'

const router = express.Router()
// webpack config is an array, [0: clientConfig, 1: serverConfig]
const clientConfig = configs[0]
let compiler

if (env.NODE_ENV === 'development') {
	compiler = webpack(clientConfig)
}

export default router
	.use(webpackDevMiddleware(compiler, {
		noInfo: true,
		publicPath: clientConfig.output.publicPath
	}))
	.use(webpackHotMiddleware(compiler, {
		quiet: true
	}))
