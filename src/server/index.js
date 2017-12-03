import { join } from 'path'
import { port, root } from 'Root'
import express from 'express'
import bodyParser from 'body-parser'
import devMiddleware from './dev'
import ssr from './ssr'

const app = express()

const PATH_STATIC = join(root, 'dist')

export default app
	.use(bodyParser.urlencoded({ extended: false }))
	.use(bodyParser.json())
	.use(express.static(PATH_STATIC))

	.get('/', (req, res) => {
		res.redirect('/issues?page=1')
	})

	.get('*', ssr)

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
