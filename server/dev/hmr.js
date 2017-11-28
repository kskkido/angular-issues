const express = require('express')
const webpack = require('webpack')
const webpackDev = require('webpack-dev-middleware')
const webpackHot = require('webpack-hot-middleware')
const config = require('../../webpack.config')

const router = express.Router()
const compiler = webpack(config)

module.exports = router
	.use(webpackDev(compiler, {
		noInfo: true,
		publicPath: config.output.publicPath
	}))
	.use(webpackHot(compiler, {
		quiet: true
	}))
