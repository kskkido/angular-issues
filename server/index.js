const { join } = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const passport = require('passport')
const session = require('express-session')
const SequelizeStore = require('connect-session-sequelize')(session.Store)
const db = require('../db')
const { port, root } = require('../')
const devMiddleware = require('./dev')

const dbStore = new SequelizeStore({ db })
const app = express()

const PATH_STATIC = join(root, 'dist')

module.exports = app
	.use(devMiddleware)

	.use(bodyParser.urlencoded({ extended: false }))
	.use(bodyParser.json())

	.use(session({
		secret: process.env.SESSION_SECRET || 'insecure secret',
		store: dbStore,
		resave: false,
		saveUninitialized: false
	}))

	.use(passport.initialize())
	.use(passport.session())

	.use('/api', require('./api'))

	.use(express.static(PATH_STATIC))

	.get('*', (req, res) => {
		res.sendFile(join(PATH_STATIC, 'index.html'))
	})

	.use((err, req, res) => {
		console.error(err)
		res.status(err.status || 500).send(err.message || 'Internal server error')
	})

if (module === require.main) {
	db.syncAndLaunch(() => {
		console.log('successfully synced database')
		const server = app.listen(
			port,
			() => {
				console.log('connected')
				const { address } = server.address()
				const host = address === '::' ? 'localhost' : address
				const urlSafeHost = host.includes(':') ? `[${host}]` : host
				console.log(`Listening on http://${urlSafeHost}:${port}`)
			}
		)
	})
}
