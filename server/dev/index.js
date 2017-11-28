const express = require('express')
const morgan = require('morgan')
const hmr = require('./hmr')
const { NODE_ENV } = require('../../').env

const router = express.Router()

module.exports = NODE_ENV === 'development' ?
	router
		.use(hmr)
		.use(morgan('dev'))
	:
	(req, res, next) => next()
