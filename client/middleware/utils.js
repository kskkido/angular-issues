import { normalize } from 'normalizr'
import axios from 'axios'
import parse from 'Utils/parse'

const getPages = (response) => {
	const { link } = response.headers

	if (!link) {
		return null
	}

	const split = link.split(',')

	return {
		next: parse(split[0], 'page'),
		last: parse(split[1], 'page')
	}
}

const fetch = (schema, endpoint) =>
	axios.get(endpoint)
		.then((response) => {
			if (!response) {
				return Promise.reject(new Error('api fetch call returned faulty value'))
			}

			const pages = getPages(response)

			return Object.assign(
				{},
				normalize(response.data, schema),
				pages
			)
		})

export default fetch
