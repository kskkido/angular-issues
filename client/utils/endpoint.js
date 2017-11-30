/* GITHUB STUFF */
const ROOT = 'https://api.github.com/repos/angular/protractor/issues'
const LIMIT = 10

const create = page => `${ROOT}?page=${page}&per_page=${LIMIT}`

export default create
