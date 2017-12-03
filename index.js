/* eslint-disable global-require, import/no-dynamic-require */
// define custom env constants through env.json file in your computers home directory
const { join } = require('path')
const pkg = require('./package.json')

const { env } = process
const customEnv = join(env.HOME, `.${pkg.name}.env.json`)

try {
	Object.assign(env, require(customEnv))
} catch (err) {
	console.log('could not find custom env file in home directory')
}

module.exports = {
	get baseUrl() {
		return env.BASE_URL || `http://localhost:${module.exports.port}`
	},
	get name() { return pkg.name },
	get port() { return env.PORT || 1337 },
	root: process.env.CWD || process.cwd(),
	package: pkg,
	env,
}
