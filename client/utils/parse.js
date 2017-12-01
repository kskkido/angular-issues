import queryString from 'query-string'

/**
 * returns an array of paginated labels based on github style pagination
 * @param {string} url String url
 * @param {string} key Optional property getter
 * @returns {object|string|null} A query object or query object property
 */
const parse = (url, key) => {
	const query = queryString.extract(url)

	if (!query) {
		return null
	}

	const parsed = queryString.parse(query)

	return key ? parsed[key] : parsed
}

export default parse
