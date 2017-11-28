import axios from 'axios'

const fetchPage = (page) => {
	const limit = 10

	return axios.get(`https://api.github.com/repos/angular/protractor/issues?page=${page}&per_page=${limit}`)
}

export default fetchPage
