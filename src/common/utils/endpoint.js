/* GITHUB STUFF */
const ROOT = 'https://api.github.com/repos/angular/protractor/issues'
const LIMIT = 10

export const issueEndpoint = issueId => `${ROOT}/${issueId}`
export const pageEndpoint = page => `${ROOT}?page=${page}&per_page=${LIMIT}`
