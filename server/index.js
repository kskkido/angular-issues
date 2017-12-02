const { join } = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const { port, root } = require('../')
const devMiddleware = require('./dev')

const app = express()

const PATH_STATIC = join(root, 'dist')

module.exports = app
	.use(devMiddleware)

	.use(bodyParser.urlencoded({ extended: false }))
	.use(bodyParser.json())

	.use(express.static(PATH_STATIC))

	.get('*', (req, res) => {
		res.sendFile(join(PATH_STATIC, 'index.html'))
	})

	.use((err, req, res) => {
		console.error(err)
		res.status(err.status || 500).send(err.message || 'Internal server error')
	})

if (module === require.main) {
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
}
