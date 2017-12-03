/* eslint-disable global-require */
import express from 'express'
import { env } from 'Root'

const router = express.Router()

export default env.NODE_ENV === 'development' ?
	router
		.use(require('./hmr'))
		.use(require('morgan')('dev'))
		.use((req, res, next) => {
			require('source-map-support').install()
			next()
		})
	:
	(req, res, next) => next()
