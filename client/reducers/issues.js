import paginationFactory from './paginationFactory'

/* put in global constants? */
const ENDPOINT = 'https://api.github.com/repos/angular/protractor/issues'

export default paginationFactory(ENDPOINT)
