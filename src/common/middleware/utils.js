import { normalize } from 'normalizr'
import camelize from 'camelize'
import axios from 'axios'
import parse from 'Utils/parse'

const empty = data =>
	data === undefined ||
	data === null ||
	data.length === 0

	/**
 * Gets last page of a pagination from the response object
 * @param {object} response Api response
 * @returns {number|null} last page of pagination
 */
const getLastPage = (response) => {
	const { link } = response.headers

	if (!link) {
		return null
	}

	const split = link.split(',')

	return parse(split[1], 'page')
}

/**
 * Standardizes paginated Api fetch requests
 * Will camelize and extract next and last pages from response data
 * @param {object} schema Normalizr schema to convert response object
 * @param {string} endpoint Target Api endpoint
 * @returns {object|error} normalized response data
 */
const fetch = (schema, endpoint) =>
	axios.get(endpoint)
		.then((response) => {
			if (response.statusText.toUpperCase() !== 'OK') {
				return Promise.reject(new Error('The api fetch request returned a funky value'))
			}

			if (response.status !== 204 && empty(response.data)) {
				return Promise.reject(new Error('No such api endpoint'))
			}

			const last = getLastPage(response)
			const camelized = camelize(response.data)

			return Object.assign(
				{},
				normalize(camelized, schema),
				{ last }
			)
		})

export default fetch
