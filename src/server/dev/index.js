/* eslint-disable global-require */
import express from 'express'
import morgan from 'morgan'
import { env } from 'Root'
import hmr from './hmr'

const router = express.Router()

export default env.NODE_ENV === 'development' ?
	router
		.use(hmr)
		.use(morgan('dev'))
		.use((req, res, next) => {
			require('source-map-support').install()
			next()
		})
	:
	(req, res, next) => next()
