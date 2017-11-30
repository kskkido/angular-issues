import queryString from 'query-string'

const parse = (url, key) => {
	const query = queryString.extract(url)

	if (!query) {
		return null
	}

	const parsed = queryString.parse(query)

	return key ? parsed[key] : parsed
}

export default parse
