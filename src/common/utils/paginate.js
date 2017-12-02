/**
 * returns a range of consecutive numbers
 * @param {object} current Current page of pagination
 * @param {string} last Last page of pagination
 * @returns {array} An object consisting the start and end value of pagination
 */
const getRange = (current, last) => {
	let startPage
	let endPage

	/* github pagination logic */
	if (last <= 8) {
		startPage = 1
		endPage = last
	} else if (current <= 6) {
		startPage = 1
		endPage = 8
	} else if (current + 5 >= last) {
		startPage = last - 7
		endPage = last
	} else {
		startPage = current - 2
		endPage = current + 2
	}

	return {
		startPage,
		endPage,
		length: 1 + (endPage - startPage)
	}
}

/**
 * returns an array of paginated labels based on github style pagination
 * @param {object} current Current page of pagination
 * @param {string} last Last page of pagination
 * @returns {array} An array which will be used to generate paginated component
 */
const getLabels = (current, last) => {
	const { startPage, endPage, length } = 	getRange(current, last)
	let labels = []

	if (startPage !== 1) {
		labels = labels.concat(1, 2, null)
	}

	for (let i = 0; i < length; i += 1) {
		labels.push(startPage + i)
	}

	if (endPage !== last) {
		labels = labels.concat(null, last - 1, last)
	}

	return labels
}

export default getLabels
