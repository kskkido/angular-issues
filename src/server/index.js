import path from 'path'
import { port, root } from 'Root'
import express from 'express'
import bodyParser from 'body-parser'
import ssr from './ssr'

const app = express()

const PATH_STATIC = path.join(root, 'dist')

export default app
	.use(bodyParser.urlencoded({ extended: false }))
	.use(bodyParser.json())

	.get('/', (req, res) => {
		res.redirect('/issues?page=1')
	})

	.get('*', (req, res, next) => {
		const exts = new Set(['.css', '.gz', '.map', '.js'])
		const ext = path.extname(req.url)

		if (exts.has(ext)) {
			return next()
		}

		return ssr(req, res, next)
	})

	.use(express.static(PATH_STATIC))

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
