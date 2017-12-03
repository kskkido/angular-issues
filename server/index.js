module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 29);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-disable global-require, import/no-dynamic-require */
// define custom env constants through env.json file in your computers home directory
var _require = __webpack_require__(6),
    join = _require.join;

var pkg = __webpack_require__(31);

var _process = process,
    env = _process.env;

var customEnv = join(env.HOME, '.' + pkg.name + '.env.json');

try {
	Object.assign(env, !(function webpackMissingModule() { var e = new Error("Cannot find module \".\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
} catch (err) {
	console.log('could not find custom env file in home directory');
}

module.exports = {
	get baseUrl() {
		return env.BASE_URL || 'http://localhost:' + module.exports.port;
	},
	get name() {
		return pkg.name;
	},
	get port() {
		return env.PORT || 1337;
	},
	root: process.cwd(),
	package: pkg,
	env: env
};
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(env, 'env', '/Users/Kidokeisuke/coiney/index.js');

	__REACT_HOT_LOADER__.register(customEnv, 'customEnv', '/Users/Kidokeisuke/coiney/index.js');
}();

;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.merge = exports.DispatchRequest = exports.DispatchError = exports.LastPage = exports.CurrentPage = exports.IssuesByPage = exports.IssueByNumber = exports.FetchStatus = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Reducers = __webpack_require__(9);

var _fetch = __webpack_require__(10);

var _api = __webpack_require__(17);

var _utils = __webpack_require__(62);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/* MAP STATE TO PROPS */
var stateFetch = function stateFetch(state, _ref) {
	var endpoint = _ref.endpoint;
	return {
		error: (0, _Reducers.getFetchError)(state, endpoint),
		fetching: (0, _Reducers.getFetchStatus)(state, endpoint)
	};
};
var stateIssue = function stateIssue(state, _ref2) {
	var number = _ref2.number;
	return {
		issue: (0, _Reducers.getIssueByNumber)(state, number)
	};
};
var stateIssues = function stateIssues(state, _ref3) {
	var page = _ref3.page;
	return {
		issueNumbers: (0, _Reducers.getIssuesByPage)(state, page)
	};
};
var stateCurrentPage = function stateCurrentPage(state) {
	return {
		currentPage: (0, _Reducers.getCurrentPage)(state)
	};
};
var stateLastPage = function stateLastPage(state) {
	return {
		lastPage: (0, _Reducers.getLastPage)(state)
	};
};

/* MAP DISPATCH TO PROPS */
var dispatchFetchError = function dispatchFetchError(dispatch, _ref4) {
	var endpoint = _ref4.endpoint;
	return {
		dispatchError: function dispatchError(error) {
			return dispatch((0, _fetch.failureFetch)(error, endpoint));
		}
	};
};
var dispatchRequestPage = function dispatchRequestPage(dispatch, _ref5) {
	var page = _ref5.page;
	return {
		dispatchRequest: function dispatchRequest() {
			return dispatch((0, _api.requestPage)(page));
		}
	};
};

/* FROM REDUX STATE */
var FetchStatus = exports.FetchStatus = (0, _utils2.default)(stateFetch);
var IssueByNumber = exports.IssueByNumber = (0, _utils2.default)(stateIssue);
var IssuesByPage = exports.IssuesByPage = (0, _utils2.default)(stateIssues);
var CurrentPage = exports.CurrentPage = (0, _utils2.default)(stateCurrentPage);
var LastPage = exports.LastPage = (0, _utils2.default)(stateLastPage);

/* FROM REDUX DISPATCH */
var DispatchError = exports.DispatchError = (0, _utils2.default)(null, dispatchFetchError);
var DispatchRequest = exports.DispatchRequest = (0, _utils2.default)(null, dispatchRequestPage);

/* HELPER */
/**
 * Merges two render prop components together
 * Use to combine mapStateToProps render props and mapDispatchToProps render props
 * Runs with the assumption that both children receive the same props
 * @param {function} TargetComponent Render props component
 * @param {function} Component Render props component
 * @returns {function} Render props component that provides passed value from both components
 */
var merge = function merge(TargetComponent, Component) {
	var Merged = function Merged(_ref6) {
		var children = _ref6.children,
		    props = _objectWithoutProperties(_ref6, ['children']);

		return _react2.default.createElement(
			TargetComponent,
			props,
			function (_props) {
				return _react2.default.createElement(
					Component,
					props,
					function (__props) {
						return children(Object.assign({}, _props, __props));
					}
				);
			}
		);
	};

	Merged.propTypes = {
		children: _propTypes2.default.func.isRequired
	};

	return Merged;
};
exports.merge = merge;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(FetchStatus, 'FetchStatus', '/Users/Kidokeisuke/coiney/src/common/components/FromRedux/index.jsx');

	__REACT_HOT_LOADER__.register(IssueByNumber, 'IssueByNumber', '/Users/Kidokeisuke/coiney/src/common/components/FromRedux/index.jsx');

	__REACT_HOT_LOADER__.register(IssuesByPage, 'IssuesByPage', '/Users/Kidokeisuke/coiney/src/common/components/FromRedux/index.jsx');

	__REACT_HOT_LOADER__.register(CurrentPage, 'CurrentPage', '/Users/Kidokeisuke/coiney/src/common/components/FromRedux/index.jsx');

	__REACT_HOT_LOADER__.register(LastPage, 'LastPage', '/Users/Kidokeisuke/coiney/src/common/components/FromRedux/index.jsx');

	__REACT_HOT_LOADER__.register(DispatchError, 'DispatchError', '/Users/Kidokeisuke/coiney/src/common/components/FromRedux/index.jsx');

	__REACT_HOT_LOADER__.register(DispatchRequest, 'DispatchRequest', '/Users/Kidokeisuke/coiney/src/common/components/FromRedux/index.jsx');

	__REACT_HOT_LOADER__.register(merge, 'merge', '/Users/Kidokeisuke/coiney/src/common/components/FromRedux/index.jsx');

	__REACT_HOT_LOADER__.register(stateFetch, 'stateFetch', '/Users/Kidokeisuke/coiney/src/common/components/FromRedux/index.jsx');

	__REACT_HOT_LOADER__.register(stateIssue, 'stateIssue', '/Users/Kidokeisuke/coiney/src/common/components/FromRedux/index.jsx');

	__REACT_HOT_LOADER__.register(stateIssues, 'stateIssues', '/Users/Kidokeisuke/coiney/src/common/components/FromRedux/index.jsx');

	__REACT_HOT_LOADER__.register(stateCurrentPage, 'stateCurrentPage', '/Users/Kidokeisuke/coiney/src/common/components/FromRedux/index.jsx');

	__REACT_HOT_LOADER__.register(stateLastPage, 'stateLastPage', '/Users/Kidokeisuke/coiney/src/common/components/FromRedux/index.jsx');

	__REACT_HOT_LOADER__.register(dispatchFetchError, 'dispatchFetchError', '/Users/Kidokeisuke/coiney/src/common/components/FromRedux/index.jsx');

	__REACT_HOT_LOADER__.register(dispatchRequestPage, 'dispatchRequestPage', '/Users/Kidokeisuke/coiney/src/common/components/FromRedux/index.jsx');
}();

;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Reducer factory
 * @param {object} initialState The initialState of the reducer
 * @param {object} handlerObj An object containing action handlers indexed by action type
 * @returns {object} Returns a new state if action.type matched with handlerObj indexes
 */
var reducerCreator = function reducerCreator(initialState, handlerObj) {
  return function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];
    return action.type in handlerObj ? handlerObj[action.type](state, action) : state;
  };
};

var _default = reducerCreator;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(reducerCreator, "reducerCreator", "/Users/Kidokeisuke/coiney/src/common/reducers/utils.js");

  __REACT_HOT_LOADER__.register(_default, "default", "/Users/Kidokeisuke/coiney/src/common/reducers/utils.js");
}();

;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.getLastPage = exports.getCurrentPage = exports.getIssueByNumber = exports.getIssuesByPage = exports.getFetchStatus = exports.getFetchError = undefined;

var _redux = __webpack_require__(18);

var _fetch = __webpack_require__(52);

var fromFetch = _interopRequireWildcard(_fetch);

var _issues = __webpack_require__(54);

var fromIssues = _interopRequireWildcard(_issues);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/* ROOT REDUCER */
var _default = (0, _redux.combineReducers)({
	fetch: fromFetch.default,
	issues: fromIssues.default
});

exports.default = _default;

/* GETTERS */

var getFetchError = exports.getFetchError = function getFetchError(state, endpoint) {
	return fromFetch.getError(state.fetch, endpoint);
};
var getFetchStatus = exports.getFetchStatus = function getFetchStatus(state, endpoint) {
	return fromFetch.getStatus(state.fetch, endpoint);
};
var getIssuesByPage = exports.getIssuesByPage = function getIssuesByPage(state, page) {
	return fromIssues.getIssuesByPage(state.issues, page);
};
var getIssueByNumber = exports.getIssueByNumber = function getIssueByNumber(state, id) {
	return fromIssues.getIssueByNumber(state.issues, id);
};
var getCurrentPage = exports.getCurrentPage = function getCurrentPage(state) {
	return fromIssues.getCurrentPage(state.issues);
};
var getLastPage = exports.getLastPage = function getLastPage(state) {
	return fromIssues.getLastPage(state.issues);
};
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(getFetchError, 'getFetchError', '/Users/Kidokeisuke/coiney/src/common/reducers/index.js');

	__REACT_HOT_LOADER__.register(getFetchStatus, 'getFetchStatus', '/Users/Kidokeisuke/coiney/src/common/reducers/index.js');

	__REACT_HOT_LOADER__.register(getIssuesByPage, 'getIssuesByPage', '/Users/Kidokeisuke/coiney/src/common/reducers/index.js');

	__REACT_HOT_LOADER__.register(getIssueByNumber, 'getIssueByNumber', '/Users/Kidokeisuke/coiney/src/common/reducers/index.js');

	__REACT_HOT_LOADER__.register(getCurrentPage, 'getCurrentPage', '/Users/Kidokeisuke/coiney/src/common/reducers/index.js');

	__REACT_HOT_LOADER__.register(getLastPage, 'getLastPage', '/Users/Kidokeisuke/coiney/src/common/reducers/index.js');

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/Kidokeisuke/coiney/src/common/reducers/index.js');
}();

;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.failureFetch = exports.successFetch = exports.requestFetch = undefined;

var _utils = __webpack_require__(19);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var requestFetch = exports.requestFetch = (0, _utils2.default)('REQUEST_FETCH', function (endpoint) {
	return { endpoint: endpoint };
});
var successFetch = exports.successFetch = (0, _utils2.default)('SUCCESS_FETCH', function (endpoint) {
	return { endpoint: endpoint };
});
var failureFetch = exports.failureFetch = (0, _utils2.default)('FAILURE_FETCH', function (error, endpoint) {
	return {
		error: error.message || error,
		endpoint: endpoint
	};
});
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(requestFetch, 'requestFetch', '/Users/Kidokeisuke/coiney/src/common/actions/fetch/index.js');

	__REACT_HOT_LOADER__.register(successFetch, 'successFetch', '/Users/Kidokeisuke/coiney/src/common/actions/fetch/index.js');

	__REACT_HOT_LOADER__.register(failureFetch, 'failureFetch', '/Users/Kidokeisuke/coiney/src/common/actions/fetch/index.js');
}();

;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.receiveIssue = exports.receivePage = undefined;

var _parse = __webpack_require__(16);

var _parse2 = _interopRequireDefault(_parse);

var _utils = __webpack_require__(19);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var receivePage = exports.receivePage = (0, _utils2.default)('RECEIVE_PAGE', function (response, endpoint) {
	var page = (0, _parse2.default)(endpoint, 'page');

	return {
		page: page,
		response: response
	};
});

var receiveIssue = exports.receiveIssue = (0, _utils2.default)('RECEIVE_ISSUE', function (response) {
	return { response: response };
});
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(receivePage, 'receivePage', '/Users/Kidokeisuke/coiney/src/common/actions/issues/index.js');

	__REACT_HOT_LOADER__.register(receiveIssue, 'receiveIssue', '/Users/Kidokeisuke/coiney/src/common/actions/issues/index.js');
}();

;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Navigation = exports.Content = exports.View = undefined;

var _templateObject = _taggedTemplateLiteral(['', ''], ['', '']),
    _templateObject2 = _taggedTemplateLiteral(['\n\tposition: relative;\n\tpadding-top: 20px;\n\tmargin-left: auto;\n\tmargin-right: auto;\n\twidth: 70vw;\n'], ['\n\tposition: relative;\n\tpadding-top: 20px;\n\tmargin-left: auto;\n\tmargin-right: auto;\n\twidth: 70vw;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n\tpadding: 20px;\n\tmin-height: 80vh;\n'], ['\n\tpadding: 20px;\n\tmin-height: 80vh;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n\tpadding-top: 20px;\n\tpadding-bottom: 40px;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n'], ['\n\tpadding-top: 20px;\n\tpadding-bottom: 40px;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n']);

var _styledComponents = __webpack_require__(7);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _global = __webpack_require__(60);

var _global2 = _interopRequireDefault(_global);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); } /* eslint-disable no-unused-expressions */


(0, _styledComponents.injectGlobal)(_templateObject, _global2.default);

var View = exports.View = _styledComponents2.default.div(_templateObject2);

var Content = exports.Content = _styledComponents2.default.div(_templateObject3);

var Navigation = exports.Navigation = _styledComponents2.default.div(_templateObject4);
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(View, 'View', '/Users/Kidokeisuke/coiney/src/common/styles/base.jsx');

	__REACT_HOT_LOADER__.register(Content, 'Content', '/Users/Kidokeisuke/coiney/src/common/styles/base.jsx');

	__REACT_HOT_LOADER__.register(Navigation, 'Navigation', '/Users/Kidokeisuke/coiney/src/common/styles/base.jsx');
}();

;

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("webpack");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("webpack-merge");

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _queryString = __webpack_require__(51);

var _queryString2 = _interopRequireDefault(_queryString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * returns an array of paginated labels based on github style pagination
 * @param {string} url String url
 * @param {string} key Optional property getter
 * @returns {object|string|null} A query object or query object property
 */
var parse = function parse(url, key) {
	var query = _queryString2.default.extract(url);

	if (!query) {
		return null;
	}

	var parsed = _queryString2.default.parse(query);

	return key ? parsed[key] : parsed;
};

var _default = parse;
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(parse, 'parse', '/Users/Kidokeisuke/coiney/src/common/utils/parse.js');

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/Kidokeisuke/coiney/src/common/utils/parse.js');
}();

;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.requestIssue = exports.requestPage = undefined;

var _normalizr = __webpack_require__(22);

var _Reducers = __webpack_require__(9);

var _endpoint = __webpack_require__(23);

var _issues = __webpack_require__(11);

var _utils = __webpack_require__(58);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var itemSchema = new _normalizr.schema.Entity('items', {}, { idAttribute: 'number' });
var itemListSchema = [itemSchema];

var requestPage = exports.requestPage = (0, _utils2.default)(function (page) {
	var endpoint = (0, _endpoint.pageEndpoint)(page);

	return {
		endpoint: endpoint,
		onSuccess: _issues.receivePage,
		schema: itemListSchema,
		cache: function cache(state) {
			return (0, _Reducers.getIssuesByPage)(state, page);
		}
	};
});

var requestIssue = exports.requestIssue = (0, _utils2.default)(function (issueId) {
	var endpoint = (0, _endpoint.issueEndpoint)(issueId);

	return {
		endpoint: endpoint,
		onSuccess: _issues.receiveIssue,
		schema: itemSchema,
		cache: function cache(state) {
			return (0, _Reducers.getIssueByNumber)(state, issueId);
		}
	};
});
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(requestPage, 'requestPage', '/Users/Kidokeisuke/coiney/src/common/actions/api/index.js');

	__REACT_HOT_LOADER__.register(requestIssue, 'requestIssue', '/Users/Kidokeisuke/coiney/src/common/actions/api/index.js');

	__REACT_HOT_LOADER__.register(itemSchema, 'itemSchema', '/Users/Kidokeisuke/coiney/src/common/actions/api/index.js');

	__REACT_HOT_LOADER__.register(itemListSchema, 'itemListSchema', '/Users/Kidokeisuke/coiney/src/common/actions/api/index.js');
}();

;

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
/**
 * Action factory
 * @param {string} type Action type, used to match action handlers in reducers
 * @param {function|undefined} handlerFn If provided, uses params to create new object
 * @returns {object} Returns a new action object
 */
var actionCreator = function actionCreator(type, handlerFn) {
	return Object.assign(function () {
		return {
			type: type,
			payload: handlerFn ? handlerFn.apply(undefined, arguments) : null
		};
	}, { type: type });
};

var _default = actionCreator;
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(actionCreator, "actionCreator", "/Users/Kidokeisuke/coiney/src/common/actions/utils.js");

	__REACT_HOT_LOADER__.register(_default, "default", "/Users/Kidokeisuke/coiney/src/common/actions/utils.js");
}();

;

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _Issues = __webpack_require__(50);

var _Issues2 = _interopRequireDefault(_Issues);

var _Issue = __webpack_require__(80);

var _Issue2 = _interopRequireDefault(_Issue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = [{
	path: '/issues',
	component: _Issues2.default
}, {
	path: '/issue/:number',
	component: _Issue2.default
}];

var _default = routes;
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(routes, 'routes', '/Users/Kidokeisuke/coiney/src/common/routes.js');

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/Kidokeisuke/coiney/src/common/routes.js');
}();

;

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("normalizr");

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/* GITHUB STUFF */
var ROOT = 'https://api.github.com/repos/angular/protractor/issues';
var LIMIT = 10;

var pageEndpoint = exports.pageEndpoint = function pageEndpoint(page) {
  return ROOT + '?page=' + page + '&per_page=' + LIMIT;
};

var issueEndpoint = exports.issueEndpoint = function issueEndpoint(issueId) {
  return ROOT + '/' + issueId;
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(pageEndpoint, 'pageEndpoint', '/Users/Kidokeisuke/coiney/src/common/utils/endpoint.js');

  __REACT_HOT_LOADER__.register(issueEndpoint, 'issueEndpoint', '/Users/Kidokeisuke/coiney/src/common/utils/endpoint.js');

  __REACT_HOT_LOADER__.register(ROOT, 'ROOT', '/Users/Kidokeisuke/coiney/src/common/utils/endpoint.js');

  __REACT_HOT_LOADER__.register(LIMIT, 'LIMIT', '/Users/Kidokeisuke/coiney/src/common/utils/endpoint.js');
}();

;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _semanticUiReact = __webpack_require__(2);

var _base = __webpack_require__(12);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Content = function Content(_ref) {
	var children = _ref.children;
	return _react2.default.createElement(
		_semanticUiReact.Segment,
		{
			as: _base.Content,
			raised: true
		},
		children
	);
};

Content.propTypes = {
	children: _propTypes2.default.node.isRequired
};

var _default = Content;
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(Content, 'Content', '/Users/Kidokeisuke/coiney/src/common/components/Content.jsx');

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/Kidokeisuke/coiney/src/common/components/Content.jsx');
}();

;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _semanticUiReact = __webpack_require__(2);

var _base = __webpack_require__(12);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Navigation = function Navigation(_ref) {
	var children = _ref.children;
	return _react2.default.createElement(
		_base.Navigation,
		null,
		_react2.default.createElement(
			_semanticUiReact.Menu,
			null,
			children
		)
	);
};

Navigation.propTypes = {
	children: _propTypes2.default.node.isRequired
};

var _default = Navigation;
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(Navigation, 'Navigation', '/Users/Kidokeisuke/coiney/src/common/components/Navigation.jsx');

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/Kidokeisuke/coiney/src/common/components/Navigation.jsx');
}();

;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _semanticUiReact = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Overlay = function Overlay(_ref) {
	var children = _ref.children;
	return _react2.default.createElement(
		_semanticUiReact.Dimmer,
		{ active: true, inverted: true },
		children
	);
};

Overlay.propTypes = {
	children: _propTypes2.default.node.isRequired
};

var _default = Overlay;
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(Overlay, 'Overlay', '/Users/Kidokeisuke/coiney/src/common/components/Fetch/Overlay.jsx');

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/Kidokeisuke/coiney/src/common/components/Fetch/Overlay.jsx');
}();

;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterDom = __webpack_require__(3);

var _semanticUiReact = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SemanticLink = function SemanticLink(_ref) {
	var children = _ref.children,
	    active = _ref.active,
	    disabled = _ref.disabled,
	    to = _ref.to,
	    RenderLink = _ref.RenderLink;
	return !disabled ? _react2.default.createElement(
		RenderLink,
		{
			active: active,
			as: _reactRouterDom.Link,
			to: to
		},
		children
	) : _react2.default.createElement(
		RenderLink,
		{ disabled: true },
		children
	);
};

SemanticLink.propTypes = {
	children: _propTypes2.default.node,
	active: _propTypes2.default.bool,
	disabled: _propTypes2.default.bool,
	to: _propTypes2.default.string,
	RenderLink: _propTypes2.default.func
};

SemanticLink.defaultProps = {
	children: null,
	active: false,
	disabled: false,
	to: null,
	RenderLink: _semanticUiReact.Menu.Item
};

var _default = SemanticLink;
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(SemanticLink, 'SemanticLink', '/Users/Kidokeisuke/coiney/src/common/components/Link.jsx');

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/Kidokeisuke/coiney/src/common/components/Link.jsx');
}();

;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Pre = exports.User = undefined;

var _templateObject = _taggedTemplateLiteral(['\n\tpadding-bottom: 10px;\n'], ['\n\tpadding-bottom: 10px;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n\tbackground: rgba(0,0,0,.05);\n\tpadding: 10px;\n\twhite-space: pre-wrap;\n'], ['\n\tbackground: rgba(0,0,0,.05);\n\tpadding: 10px;\n\twhite-space: pre-wrap;\n']);

var _styledComponents = __webpack_require__(7);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var User = exports.User = _styledComponents2.default.div(_templateObject);

var Pre = exports.Pre = _styledComponents2.default.pre(_templateObject2);
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(User, 'User', '/Users/Kidokeisuke/coiney/src/common/components/Issue/Styles.jsx');

	__REACT_HOT_LOADER__.register(Pre, 'Pre', '/Users/Kidokeisuke/coiney/src/common/components/Issue/Styles.jsx');
}();

;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _path = __webpack_require__(6);

var _Root = __webpack_require__(4);

var _express = __webpack_require__(13);

var _express2 = _interopRequireDefault(_express);

var _bodyParser = __webpack_require__(33);

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _dev = __webpack_require__(34);

var _dev2 = _interopRequireDefault(_dev);

var _ssr = __webpack_require__(47);

var _ssr2 = _interopRequireDefault(_ssr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

var PATH_STATIC = (0, _path.join)(_Root.root, 'dist');

var _default = app.use(_dev2.default).use(_bodyParser2.default.urlencoded({ extended: false })).use(_bodyParser2.default.json()).use(_express2.default.static(PATH_STATIC)).use(_ssr2.default).use(function (err, req, res) {
	console.error(err);
	res.status(err.status || 500).send(err.message || 'Internal server error');
});

exports.default = _default;


if (module === __webpack_require__.c[__webpack_require__.s]) {
	var server = app.listen(_Root.port, function () {
		console.log('connected');

		var _server$address = server.address(),
		    address = _server$address.address;

		var host = address === '::' ? 'localhost' : address;
		var urlSafeHost = host.includes(':') ? '[' + host + ']' : host;
		console.log('Listening on http://' + urlSafeHost + ':' + _Root.port);
	});
}
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(app, 'app', '/Users/Kidokeisuke/coiney/src/server/index.js');

	__REACT_HOT_LOADER__.register(PATH_STATIC, 'PATH_STATIC', '/Users/Kidokeisuke/coiney/src/server/index.js');

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/Kidokeisuke/coiney/src/server/index.js');
}();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(30)(module)))

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = {
	"name": "angularIssues",
	"version": "1.0.0",
	"description": "",
	"main": "index.js",
	"scripts": {
		"test": "mocha --compilers --watch-extensions js,jsx tests/**/*.test.js",
		"build-prod": "NODE_ENV=production webpack",
		"build-dev": "NODE_ENV=development webpack",
		"start": "node ./server",
		"start-dev": "npm run build-dev & NODE_ENV=development nodemon ./server",
		"start-prod": "npm run build-prod & NODE_ENV=production npm run start"
	},
	"keywords": [],
	"author": "",
	"license": "ISC",
	"dependencies": {
		"axios": "^0.17.1",
		"body-parser": "^1.17.2",
		"camelize": "^1.0.0",
		"connect-session-sequelize": "^4.1.0",
		"express": "^4.15.3",
		"morgan": "^1.8.2",
		"normalizr": "^3.2.4",
		"prop-types": "^15.6.0",
		"query-string": "^5.0.1",
		"react": "^16.0.0",
		"react-dom": "^16.0.0",
		"react-markdown": "^3.1.0",
		"react-redux": "^5.0.5",
		"react-router": "^4.2.0",
		"react-router-dom": "^4.2.2",
		"redux": "^3.7.2",
		"redux-devtools-extension": "^2.13.2",
		"redux-logger": "^3.0.6",
		"redux-thunk": "^2.2.0",
		"semantic-ui-react": "^0.77.0",
		"serialize-javascript": "^1.4.0",
		"styled-components": "^2.2.4"
	},
	"devDependencies": {
		"babel-core": "^6.25.0",
		"babel-eslint": "^8.0.2",
		"babel-loader": "^7.1.1",
		"babel-plugin-transform-object-rest-spread": "^6.26.0",
		"babel-preset-env": "^1.6.1",
		"babel-preset-react": "^6.24.1",
		"babel-preset-stage-0": "^6.24.1",
		"chai": "^4.1.0",
		"compression-webpack-plugin": "^1.0.0",
		"enzyme": "^3.2.0",
		"enzyme-adapter-react-16": "^1.1.0",
		"eslint": "^4.12.0",
		"eslint-config-airbnb": "^16.1.0",
		"eslint-import-resolver-webpack": "^0.8.3",
		"eslint-plugin-import": "^2.8.0",
		"eslint-plugin-jsx-a11y": "^6.0.2",
		"eslint-plugin-react": "^7.5.1",
		"mocha": "^3.4.2",
		"react-hot-loader": "^3.1.3",
		"source-map-support": "^0.5.0",
		"supertest": "^3.0.0",
		"webpack": "^3.2.0",
		"webpack-dev-middleware": "^1.12.2",
		"webpack-hot-middleware": "^2.21.0",
		"webpack-livereload-plugin": "^1.0.0",
		"webpack-merge": "^4.1.1",
		"webpack-node-externals": "^1.6.0"
	}
};

/***/ }),
/* 32 */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 32;

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _sourceMapSupport = __webpack_require__(35);

var _sourceMapSupport2 = _interopRequireDefault(_sourceMapSupport);

var _express = __webpack_require__(13);

var _express2 = _interopRequireDefault(_express);

var _morgan = __webpack_require__(36);

var _morgan2 = _interopRequireDefault(_morgan);

var _Root = __webpack_require__(4);

var _hmr = __webpack_require__(37);

var _hmr2 = _interopRequireDefault(_hmr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

var _default = _Root.env.NODE_ENV === 'development' ? router.use(_hmr2.default).use((0, _morgan2.default)('dev')).use(function (req, res, next) {
	_sourceMapSupport2.default.install();
	next();
}) : function (req, res, next) {
	return next();
};

exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(router, 'router', '/Users/Kidokeisuke/coiney/src/server/dev/index.js');

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/Kidokeisuke/coiney/src/server/dev/index.js');
}();

;

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("source-map-support");

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = require("morgan");

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _express = __webpack_require__(13);

var _express2 = _interopRequireDefault(_express);

var _webpack = __webpack_require__(14);

var _webpack2 = _interopRequireDefault(_webpack);

var _webpackDevMiddleware = __webpack_require__(38);

var _webpackDevMiddleware2 = _interopRequireDefault(_webpackDevMiddleware);

var _webpackHotMiddleware = __webpack_require__(39);

var _webpackHotMiddleware2 = _interopRequireDefault(_webpackHotMiddleware);

var _webpack3 = __webpack_require__(40);

var _webpack4 = _interopRequireDefault(_webpack3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();
// webpack config is an array, [0: clientConfig, 1: serverConfig]
var clientConfig = _webpack4.default[0];
var compiler = (0, _webpack2.default)(clientConfig);

var _default = router.use((0, _webpackDevMiddleware2.default)(compiler, {
	noInfo: true,
	publicPath: clientConfig.output.publicPath
})).use((0, _webpackHotMiddleware2.default)(compiler, {
	quiet: true
}));

exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(router, 'router', '/Users/Kidokeisuke/coiney/src/server/dev/hmr.js');

	__REACT_HOT_LOADER__.register(clientConfig, 'clientConfig', '/Users/Kidokeisuke/coiney/src/server/dev/hmr.js');

	__REACT_HOT_LOADER__.register(compiler, 'compiler', '/Users/Kidokeisuke/coiney/src/server/dev/hmr.js');

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/Kidokeisuke/coiney/src/server/dev/hmr.js');
}();

;

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = require("webpack-dev-middleware");

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("webpack-hot-middleware");

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(41);
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(4),
    env = _require.env;

var clientConfig = __webpack_require__(42);
var serverConfig = __webpack_require__(44);
var applyBaseConfig = __webpack_require__(46)(env);

module.exports = [clientConfig, serverConfig].map(applyBaseConfig);
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(applyBaseConfig, 'applyBaseConfig', '/Users/Kidokeisuke/coiney/webpack_config/index.js');
}();

;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var webpack = __webpack_require__(14);
var merge = __webpack_require__(15);
var CompressionPlugin = __webpack_require__(43);

var _require = __webpack_require__(6),
    join = _require.join;

var _require2 = __webpack_require__(4),
    root = _require2.root;

var PATHS = {
	entry: join(root, 'src/client'),
	output: join(root, 'dist')
};

var commonConfig = {
	output: {
		path: PATHS.output,
		filename: 'bundle.js'
	},
	resolve: {
		extensions: ['.js', '.jsx', '.json', '*']
	}
};

var prodConfig = {
	entry: PATHS.entry,
	plugins: [new webpack.optimize.UglifyJsPlugin({
		compress: {
			warnings: false, // Suppress uglification warnings
			unsafe: true,
			unsafe_comps: true,
			screw_ie8: true
		},
		output: {
			comments: false
		},
		exclude: [/\.min\.js$/gi]
	}), new webpack.optimize.AggressiveMergingPlugin(), new CompressionPlugin({
		asset: '[path].gz[query]',
		algorithm: 'gzip',
		test: /\.js$|\.css$|\.html$/,
		threshold: 10240,
		minRatio: 0.8
	})]
};

var devConfig = {
	entry: ['react-hot-loader/patch', 'webpack-hot-middleware/client', PATHS.entry],
	output: {
		hotUpdateChunkFilename: 'hot/hot-update.js',
		hotUpdateMainFilename: 'hot/hot-update.json'
	},
	plugins: [new webpack.NamedModulesPlugin(), new webpack.HotModuleReplacementPlugin()]
};

module.exports = function (env) {
	return env.NODE_ENV === 'production' ? merge(commonConfig, prodConfig) : merge(commonConfig, devConfig);
};
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(PATHS, 'PATHS', '/Users/Kidokeisuke/coiney/webpack_config/client.js');

	__REACT_HOT_LOADER__.register(commonConfig, 'commonConfig', '/Users/Kidokeisuke/coiney/webpack_config/client.js');

	__REACT_HOT_LOADER__.register(prodConfig, 'prodConfig', '/Users/Kidokeisuke/coiney/webpack_config/client.js');

	__REACT_HOT_LOADER__.register(devConfig, 'devConfig', '/Users/Kidokeisuke/coiney/webpack_config/client.js');
}();

;

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = require("compression-webpack-plugin");

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var nodeExternals = __webpack_require__(45);
var merge = __webpack_require__(15);

var _require = __webpack_require__(6),
    join = _require.join;

var _require2 = __webpack_require__(4),
    root = _require2.root;

var PATHS = {
	entry: join(root, 'src/server'),
	output: join(root, 'server')
};

var commonConfig = {
	entry: PATHS.entry,
	target: 'node',
	externals: [nodeExternals()],
	output: {
		path: PATHS.output,
		filename: 'index.js',
		libraryTarget: 'commonjs2'
	}
};

var prodConfig = {};

var devConfig = {};

module.exports = function (env) {
	return env.NODE_ENV === 'production' ? merge(commonConfig, prodConfig) : merge(commonConfig, devConfig);
};
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(PATHS, 'PATHS', '/Users/Kidokeisuke/coiney/webpack_config/server.js');

	__REACT_HOT_LOADER__.register(commonConfig, 'commonConfig', '/Users/Kidokeisuke/coiney/webpack_config/server.js');

	__REACT_HOT_LOADER__.register(prodConfig, 'prodConfig', '/Users/Kidokeisuke/coiney/webpack_config/server.js');

	__REACT_HOT_LOADER__.register(devConfig, 'devConfig', '/Users/Kidokeisuke/coiney/webpack_config/server.js');
}();

;

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = require("webpack-node-externals");

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var webpack = __webpack_require__(14);
var merge = __webpack_require__(15);

var _require = __webpack_require__(6),
    join = _require.join;

var _require2 = __webpack_require__(4),
    root = _require2.root;

var PATHS = {
	root: root,
	common: join(root, '/src/common'),
	actions: join(root, 'src/common/actions'),
	components: join(root, 'src/common/components'),
	reducers: join(root, 'src/common/reducers'),
	styles: join(root, 'src/common/styles'),
	utils: join(root, 'src/common/utils')
};

var commonConfig = {
	resolve: {
		alias: {
			Actions: PATHS.actions,
			Common: PATHS.common,
			Components: PATHS.components,
			Reducers: PATHS.reducers,
			Root: PATHS.root,
			Styles: PATHS.styles,
			Utils: PATHS.utils
		},
		extensions: ['.js', '.jsx', '.json', '*']
	},
	module: {
		rules: [{
			test: /\.jsx?$/,
			exclude: /(node_modules|bower_components)/,
			loader: 'babel-loader',
			options: {
				presets: ['react', 'env', 'stage-0']
			}
		}, {
			test: /\.css$/,
			loader: 'css-loader'
		}]
	}
};

var prodConfig = {
	plugins: [new webpack.DefinePlugin({
		'process.env': {
			NODE_ENV: '"production"'
		}
	})]
};

var devConfig = {
	devtool: 'cheap-source-map',
	plugins: [new webpack.DefinePlugin({
		'process.env': {
			NODE_ENV: '"development"'
		}
	})]
};

module.exports = function (env) {
	var envConfig = env.NODE_ENV === 'production' ? prodConfig : devConfig;

	return function (factory) {
		return merge(commonConfig, envConfig, factory(env));
	};
};
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(PATHS, 'PATHS', '/Users/Kidokeisuke/coiney/webpack_config/base.js');

	__REACT_HOT_LOADER__.register(commonConfig, 'commonConfig', '/Users/Kidokeisuke/coiney/webpack_config/base.js');

	__REACT_HOT_LOADER__.register(prodConfig, 'prodConfig', '/Users/Kidokeisuke/coiney/webpack_config/base.js');

	__REACT_HOT_LOADER__.register(devConfig, 'devConfig', '/Users/Kidokeisuke/coiney/webpack_config/base.js');
}();

;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _serializeJavascript = __webpack_require__(48);

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(20);

var _server = __webpack_require__(49);

var _reactRouterDom = __webpack_require__(3);

var _styledComponents = __webpack_require__(7);

var _routes = __webpack_require__(21);

var _routes2 = _interopRequireDefault(_routes);

var _configureStore = __webpack_require__(90);

var _configureStore2 = _interopRequireDefault(_configureStore);

var _App = __webpack_require__(98);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createHtml = function createHtml(_ref) {
	var css = _ref.css,
	    initialState = _ref.initialState,
	    markup = _ref.markup;

	var serializedState = (0, _serializeJavascript2.default)(initialState);

	return '\n\t<!DOCTYPE html>\n\t<html>\n\t\t<head>\n\t\t\t<meta charset="utf-8" />\n\t\t\t<meta name="viewport" content="width=device-width, initial-scale=1">\n\t\t\t<link href="https://fonts.googleapis.com/css?family=Open+Sans:300|Roboto" rel="stylesheet">\n\t\t\t<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"></link>\n\t\t\t' + css + '\n\t\t\t<script>window.__INITIAL_STATE__=' + serializedState + '</script>\n\t\t\t<title>angular-issues</title>\n\t\t</head>\n\t\t<body>\n\t\t\t<div id="app">' + markup + '</div>\n\t\t\t<script src="/bundle.js"></script>\n\t\t</body>\n\t</html>\n\t';
}; /* eslint-disable react/jsx-filename-extension */


var dispatchInitialActions = function dispatchInitialActions(store, req) {
	return _routes2.default.reduce(function (promises, route) {
		var component = (0, _reactRouterDom.matchPath)(req.path, route) && route.component;
		var initialAction = component && component.initialAction;

		if (initialAction) {
			var action = initialAction(req.url);

			promises.push(Promise.resolve(store.dispatch(action)));
		}

		return promises;
	}, []);
};

var renderHtml = function renderHtml(req, res) {
	var store = (0, _configureStore2.default)();
	var promises = dispatchInitialActions(store, req);

	return Promise.all(promises).then(function () {
		var initialState = store.getState();
		var sheet = new _styledComponents.ServerStyleSheet();

		var markup = (0, _server.renderToString)(_react2.default.createElement(
			_reactRedux.Provider,
			{ store: store },
			_react2.default.createElement(
				_reactRouterDom.StaticRouter,
				{ location: req.url, context: {} },
				_react2.default.createElement(
					_styledComponents.StyleSheetManager,
					{ sheet: sheet.instance },
					_react2.default.createElement(_App2.default, null)
				)
			)
		));

		var html = createHtml({
			css: sheet.getStyleTags(),
			markup: markup,
			initialState: initialState
		});

		res.send(html);
	});
};

var _default = renderHtml;
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(createHtml, 'createHtml', '/Users/Kidokeisuke/coiney/src/server/ssr.js');

	__REACT_HOT_LOADER__.register(dispatchInitialActions, 'dispatchInitialActions', '/Users/Kidokeisuke/coiney/src/server/ssr.js');

	__REACT_HOT_LOADER__.register(renderHtml, 'renderHtml', '/Users/Kidokeisuke/coiney/src/server/ssr.js');

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/Kidokeisuke/coiney/src/server/ssr.js');
}();

;

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _parse = __webpack_require__(16);

var _parse2 = _interopRequireDefault(_parse);

var _api = __webpack_require__(17);

var _reactRouterDom = __webpack_require__(3);

var _View = __webpack_require__(59);

var _View2 = _interopRequireDefault(_View);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Issues = function Issues(_ref) {
	var location = _ref.location;

	var page = (0, _parse2.default)(location.search, 'page');

	return page && page > 0 ? _react2.default.createElement(_View2.default, { page: +page }) : _react2.default.createElement(_reactRouterDom.Redirect, { to: '/' });
};

Issues.propTypes = {
	location: _propTypes2.default.objectOf(_propTypes2.default.any).isRequired
};

Issues.initialAction = function (url) {
	var page = (0, _parse2.default)(url, 'page');

	return (0, _api.requestPage)(page || '1');
};

var _default = Issues;
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(Issues, 'Issues', '/Users/Kidokeisuke/coiney/src/common/components/Issues/index.jsx');

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/Kidokeisuke/coiney/src/common/components/Issues/index.jsx');
}();

;

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = require("query-string");

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.getStatus = exports.getError = undefined;

var _reducerCreator;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _utils = __webpack_require__(8);

var _utils2 = _interopRequireDefault(_utils);

var _fetch = __webpack_require__(10);

var fetchActions = _interopRequireWildcard(_fetch);

var _endpoint = __webpack_require__(53);

var fromEndpoint = _interopRequireWildcard(_endpoint);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
* Creates a new fetch state for every new endpoint
* So that we can handle each endpoint request separately
*/

/* STATE */
var initialState = {};

/* REDUCER HANDLER */
var handleAction = function handleAction(state, action) {
	var endpoint = action.payload.endpoint;


	return _extends({}, state, _defineProperty({}, endpoint, (0, fromEndpoint.default)(state[endpoint], action)));
};

/* REDUCER */
var reducer = (0, _utils2.default)(initialState, (_reducerCreator = {}, _defineProperty(_reducerCreator, fetchActions.requestFetch.type, handleAction), _defineProperty(_reducerCreator, fetchActions.failureFetch.type, handleAction), _defineProperty(_reducerCreator, fetchActions.successFetch.type, handleAction), _reducerCreator));

var _default = reducer;
exports.default = _default;

/* GETTERS */

var getError = exports.getError = function getError(state, endpoint) {
	return fromEndpoint.getError(state[endpoint]);
};
var getStatus = exports.getStatus = function getStatus(state, endpoint) {
	return fromEndpoint.getStatus(state[endpoint]);
};
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(getError, 'getError', '/Users/Kidokeisuke/coiney/src/common/reducers/fetch/index.js');

	__REACT_HOT_LOADER__.register(getStatus, 'getStatus', '/Users/Kidokeisuke/coiney/src/common/reducers/fetch/index.js');

	__REACT_HOT_LOADER__.register(initialState, 'initialState', '/Users/Kidokeisuke/coiney/src/common/reducers/fetch/index.js');

	__REACT_HOT_LOADER__.register(handleAction, 'handleAction', '/Users/Kidokeisuke/coiney/src/common/reducers/fetch/index.js');

	__REACT_HOT_LOADER__.register(reducer, 'reducer', '/Users/Kidokeisuke/coiney/src/common/reducers/fetch/index.js');

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/Kidokeisuke/coiney/src/common/reducers/fetch/index.js');
}();

;

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.getStatus = exports.getError = undefined;

var _reducerCreator;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _utils = __webpack_require__(8);

var _utils2 = _interopRequireDefault(_utils);

var _fetch = __webpack_require__(10);

var fetchActions = _interopRequireWildcard(_fetch);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* STATE */
var initialState = {
	fetching: false,
	error: ''

	/* REDUCER HANDLER */
};var handleRequest = function handleRequest(state, action) {
	return _extends({}, initialState, {
		fetching: true
	});
};

var handleFailure = function handleFailure(state, action) {
	return _extends({}, initialState, {
		error: action.payload.error
	});
};

var handleSuccess = function handleSuccess(state, action) {
	return _extends({}, initialState, {
		fetching: false
	});
};

/* REDUCER */
var reducer = (0, _utils2.default)(initialState, (_reducerCreator = {}, _defineProperty(_reducerCreator, fetchActions.requestFetch.type, handleRequest), _defineProperty(_reducerCreator, fetchActions.failureFetch.type, handleFailure), _defineProperty(_reducerCreator, fetchActions.successFetch.type, handleSuccess), _reducerCreator));

var _default = reducer;
exports.default = _default;

/* GETTERS */

var getError = exports.getError = function getError(state) {
	return state && state.error;
};
var getStatus = exports.getStatus = function getStatus(state) {
	return state && state.status;
};
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(getError, 'getError', '/Users/Kidokeisuke/coiney/src/common/reducers/fetch/endpoint.js');

	__REACT_HOT_LOADER__.register(getStatus, 'getStatus', '/Users/Kidokeisuke/coiney/src/common/reducers/fetch/endpoint.js');

	__REACT_HOT_LOADER__.register(initialState, 'initialState', '/Users/Kidokeisuke/coiney/src/common/reducers/fetch/endpoint.js');

	__REACT_HOT_LOADER__.register(handleRequest, 'handleRequest', '/Users/Kidokeisuke/coiney/src/common/reducers/fetch/endpoint.js');

	__REACT_HOT_LOADER__.register(handleFailure, 'handleFailure', '/Users/Kidokeisuke/coiney/src/common/reducers/fetch/endpoint.js');

	__REACT_HOT_LOADER__.register(handleSuccess, 'handleSuccess', '/Users/Kidokeisuke/coiney/src/common/reducers/fetch/endpoint.js');

	__REACT_HOT_LOADER__.register(reducer, 'reducer', '/Users/Kidokeisuke/coiney/src/common/reducers/fetch/endpoint.js');

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/Kidokeisuke/coiney/src/common/reducers/fetch/endpoint.js');
}();

;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.getLastPage = exports.getCurrentPage = exports.getIssueByNumber = exports.getIssuesByPage = undefined;

var _redux = __webpack_require__(18);

var _pages = __webpack_require__(55);

var fromPages = _interopRequireWildcard(_pages);

var _items = __webpack_require__(56);

var fromItems = _interopRequireWildcard(_items);

var _navigation = __webpack_require__(57);

var fromNavigation = _interopRequireWildcard(_navigation);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
* Pages: an object which stores a list of items by page number
* Items: an object which stores item details by item id
* Navigation:
*/

/* REDUCER */
var reducer = (0, _redux.combineReducers)({
	pages: fromPages.default,
	items: fromItems.default,
	navigation: fromNavigation.default
});

var _default = reducer;
exports.default = _default;

/* GETTERS */

var getIssuesByPage = exports.getIssuesByPage = function getIssuesByPage(state, page) {
	return fromPages.getItemsByPage(state.pages, page);
};
var getIssueByNumber = exports.getIssueByNumber = function getIssueByNumber(state, number) {
	return fromItems.getItemById(state.items, number);
};
var getCurrentPage = exports.getCurrentPage = function getCurrentPage(state) {
	return fromNavigation.getCurrentPage(state.navigation);
};
var getLastPage = exports.getLastPage = function getLastPage(state) {
	return fromNavigation.getLastPage(state.navigation);
};
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(getIssuesByPage, 'getIssuesByPage', '/Users/Kidokeisuke/coiney/src/common/reducers/issues/index.js');

	__REACT_HOT_LOADER__.register(getIssueByNumber, 'getIssueByNumber', '/Users/Kidokeisuke/coiney/src/common/reducers/issues/index.js');

	__REACT_HOT_LOADER__.register(getCurrentPage, 'getCurrentPage', '/Users/Kidokeisuke/coiney/src/common/reducers/issues/index.js');

	__REACT_HOT_LOADER__.register(getLastPage, 'getLastPage', '/Users/Kidokeisuke/coiney/src/common/reducers/issues/index.js');

	__REACT_HOT_LOADER__.register(reducer, 'reducer', '/Users/Kidokeisuke/coiney/src/common/reducers/issues/index.js');

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/Kidokeisuke/coiney/src/common/reducers/issues/index.js');
}();

;

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.getItemsByPage = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _utils = __webpack_require__(8);

var _utils2 = _interopRequireDefault(_utils);

var _issues = __webpack_require__(11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* STATE */
var initialState = {};

/* HANDLE REDUCER */
var handleReceivePage = function handleReceivePage() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	var action = arguments[1];
	var _action$payload = action.payload,
	    page = _action$payload.page,
	    response = _action$payload.response;


	return _extends({}, state, _defineProperty({}, page, response.result));
};

/* REDUCER */
var reducer = (0, _utils2.default)(initialState, _defineProperty({}, _issues.receivePage.type, handleReceivePage));

var _default = reducer;
exports.default = _default;

/* GETTERS */

var getItemsByPage = exports.getItemsByPage = function getItemsByPage(state, page) {
	return state[page];
};
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(getItemsByPage, 'getItemsByPage', '/Users/Kidokeisuke/coiney/src/common/reducers/issues/pages.js');

	__REACT_HOT_LOADER__.register(initialState, 'initialState', '/Users/Kidokeisuke/coiney/src/common/reducers/issues/pages.js');

	__REACT_HOT_LOADER__.register(handleReceivePage, 'handleReceivePage', '/Users/Kidokeisuke/coiney/src/common/reducers/issues/pages.js');

	__REACT_HOT_LOADER__.register(reducer, 'reducer', '/Users/Kidokeisuke/coiney/src/common/reducers/issues/pages.js');

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/Kidokeisuke/coiney/src/common/reducers/issues/pages.js');
}();

;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.getItemById = undefined;

var _reducerCreator;

var _utils = __webpack_require__(8);

var _utils2 = _interopRequireDefault(_utils);

var _issues = __webpack_require__(11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* STATE */
var initialState = {};

/* HANDLE REDUCER */
var handleReceiveItems = function handleReceiveItems() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	var action = arguments[1];
	var response = action.payload.response;
	var entities = response.entities,
	    result = response.result;

	var ids = Array.isArray(result) ? result : [result];
	var nextState = Object.assign({}, state);

	return ids.reduce(function (acc, id) {
		acc[id] = entities.items[id];

		return acc;
	}, nextState);
};

/* REDUCER */
var reducer = (0, _utils2.default)(initialState, (_reducerCreator = {}, _defineProperty(_reducerCreator, _issues.receivePage.type, handleReceiveItems), _defineProperty(_reducerCreator, _issues.receiveIssue.type, handleReceiveItems), _reducerCreator));

var _default = reducer;
exports.default = _default;

/* GETTERS */

var getItemById = exports.getItemById = function getItemById(state, id) {
	return state[id];
};
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(getItemById, 'getItemById', '/Users/Kidokeisuke/coiney/src/common/reducers/issues/items.js');

	__REACT_HOT_LOADER__.register(initialState, 'initialState', '/Users/Kidokeisuke/coiney/src/common/reducers/issues/items.js');

	__REACT_HOT_LOADER__.register(handleReceiveItems, 'handleReceiveItems', '/Users/Kidokeisuke/coiney/src/common/reducers/issues/items.js');

	__REACT_HOT_LOADER__.register(reducer, 'reducer', '/Users/Kidokeisuke/coiney/src/common/reducers/issues/items.js');

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/Kidokeisuke/coiney/src/common/reducers/issues/items.js');
}();

;

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.getLastPage = exports.getNextPage = exports.getCurrentPage = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _utils = __webpack_require__(8);

var _utils2 = _interopRequireDefault(_utils);

var _issues = __webpack_require__(11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* STATE */
var initialState = {
	current: 1,
	last: null

	/* HANDLE REDUCER */
};var handleNavigation = function handleNavigation() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	var action = arguments[1];
	var _action$payload = action.payload,
	    page = _action$payload.page,
	    response = _action$payload.response;


	return _extends({}, state, {
		current: page,
		last: Math.max(page, response.last)
	});
};

/* REDUCER */
var reducer = (0, _utils2.default)(initialState, _defineProperty({}, _issues.receivePage.type, handleNavigation));

var _default = reducer;
exports.default = _default;

/* GETTERS */

var getCurrentPage = exports.getCurrentPage = function getCurrentPage(state) {
	return state.current;
};
var getNextPage = exports.getNextPage = function getNextPage(state) {
	return state.next;
};
var getLastPage = exports.getLastPage = function getLastPage(state) {
	return state.last;
};
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(getCurrentPage, 'getCurrentPage', '/Users/Kidokeisuke/coiney/src/common/reducers/issues/navigation.js');

	__REACT_HOT_LOADER__.register(getNextPage, 'getNextPage', '/Users/Kidokeisuke/coiney/src/common/reducers/issues/navigation.js');

	__REACT_HOT_LOADER__.register(getLastPage, 'getLastPage', '/Users/Kidokeisuke/coiney/src/common/reducers/issues/navigation.js');

	__REACT_HOT_LOADER__.register(initialState, 'initialState', '/Users/Kidokeisuke/coiney/src/common/reducers/issues/navigation.js');

	__REACT_HOT_LOADER__.register(handleNavigation, 'handleNavigation', '/Users/Kidokeisuke/coiney/src/common/reducers/issues/navigation.js');

	__REACT_HOT_LOADER__.register(reducer, 'reducer', '/Users/Kidokeisuke/coiney/src/common/reducers/issues/navigation.js');

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/Kidokeisuke/coiney/src/common/reducers/issues/navigation.js');
}();

;

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _utils = __webpack_require__(19);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var apiActionCreator = function apiActionCreator(handlerFn) {
	return (0, _utils2.default)('REQUEST_API', handlerFn);
};

var _default = apiActionCreator;
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(apiActionCreator, 'apiActionCreator', '/Users/Kidokeisuke/coiney/src/common/actions/api/utils.js');

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/Kidokeisuke/coiney/src/common/actions/api/utils.js');
}();

;

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _base = __webpack_require__(12);

var _Content = __webpack_require__(24);

var _Content2 = _interopRequireDefault(_Content);

var _Navigation = __webpack_require__(25);

var _Navigation2 = _interopRequireDefault(_Navigation);

var _Content3 = __webpack_require__(61);

var _Content4 = _interopRequireDefault(_Content3);

var _Navigation3 = __webpack_require__(77);

var _Navigation4 = _interopRequireDefault(_Navigation3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var View = function View(_ref) {
	var page = _ref.page;
	return _react2.default.createElement(
		_base.View,
		null,
		_react2.default.createElement(
			_Content2.default,
			null,
			_react2.default.createElement(_Content4.default, { page: page })
		),
		_react2.default.createElement(
			_Navigation2.default,
			null,
			_react2.default.createElement(_Navigation4.default, { page: page })
		)
	);
};

View.propTypes = {
	page: _propTypes2.default.number.isRequired
};

var _default = View;
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(View, 'View', '/Users/Kidokeisuke/coiney/src/common/components/Issues/View.jsx');

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/Kidokeisuke/coiney/src/common/components/Issues/View.jsx');
}();

;

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _templateObject = _taggedTemplateLiteral(['\n\tbody {\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t\toverflow-x: hidden;\n\t\tletter-spacing: 2px;\n\t}\n\n\tdiv {\n\t\tword-wrap: break-word;\n\t}\n\n\t#app {\n\t\theight: 100%;\n\t\twidth: 100%;\n\t}\n'], ['\n\tbody {\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t\toverflow-x: hidden;\n\t\tletter-spacing: 2px;\n\t}\n\n\tdiv {\n\t\tword-wrap: break-word;\n\t}\n\n\t#app {\n\t\theight: 100%;\n\t\twidth: 100%;\n\t}\n']);

var _styledComponents = __webpack_require__(7);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Global = (0, _styledComponents.css)(_templateObject);

var _default = Global;
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(Global, 'Global', '/Users/Kidokeisuke/coiney/src/common/styles/global.jsx');

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/Kidokeisuke/coiney/src/common/styles/global.jsx');
}();

;

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _endpoint = __webpack_require__(23);

var _FromRedux = __webpack_require__(5);

var _List = __webpack_require__(63);

var _List2 = _interopRequireDefault(_List);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IssuesByPageWithRequest = (0, _FromRedux.merge)(_FromRedux.IssuesByPage, _FromRedux.DispatchRequest);

var Body = function Body(_ref) {
	var page = _ref.page;

	var endpoint = (0, _endpoint.pageEndpoint)(page);

	return _react2.default.createElement(
		IssuesByPageWithRequest,
		{ page: page },
		function (_ref2) {
			var issueNumbers = _ref2.issueNumbers,
			    dispatchRequest = _ref2.dispatchRequest;
			return _react2.default.createElement(_List2.default, {
				endpoint: endpoint,
				fetch: dispatchRequest,
				numbers: issueNumbers
			});
		}
	);
};

Body.propTypes = {
	page: _propTypes2.default.number.isRequired
};

var _default = Body;
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(IssuesByPageWithRequest, 'IssuesByPageWithRequest', '/Users/Kidokeisuke/coiney/src/common/components/Issues/Content/index.jsx');

	__REACT_HOT_LOADER__.register(Body, 'Body', '/Users/Kidokeisuke/coiney/src/common/components/Issues/Content/index.jsx');

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/Kidokeisuke/coiney/src/common/components/Issues/Content/index.jsx');
}();

;

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(20);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 * Extract a component's _meta object and optional key.
 * Handles literal _meta objects, classes with _meta, objects with _meta
 * @param {object} props Component props
 * @returns {object|function} returns component by passing props to children as parameters
 */
var RenderProps = function RenderProps(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ['children']);

  return children(props);
};

RenderProps.propTypes = {
  children: _propTypes2.default.func.isRequired

  /**
   * Same interface as connect, but returns function as children components
   * @param {function|object} mapStateToProps An object or a function that returns an object
   * @param {function|object} mapDispatchToProps An object or a function that returns an object
   * @returns {function} A react element that passes redux props to children as parameters
   */
};var withRedux = function withRedux(mapStateToProps, mapDispatchToProps) {
  return (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(RenderProps);
};

var _default = withRedux;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(RenderProps, 'RenderProps', '/Users/Kidokeisuke/coiney/src/common/components/FromRedux/utils.jsx');

  __REACT_HOT_LOADER__.register(withRedux, 'withRedux', '/Users/Kidokeisuke/coiney/src/common/components/FromRedux/utils.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/Kidokeisuke/coiney/src/common/components/FromRedux/utils.jsx');
}();

;

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _semanticUiReact = __webpack_require__(2);

var _Fetch = __webpack_require__(64);

var _Fetch2 = _interopRequireDefault(_Fetch);

var _Item = __webpack_require__(75);

var _Item2 = _interopRequireDefault(_Item);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var List = function List(_ref) {
	var endpoint = _ref.endpoint,
	    fetch = _ref.fetch,
	    numbers = _ref.numbers;

	var items = numbers.map(function (number) {
		return _react2.default.createElement(
			_semanticUiReact.Segment,
			{ key: number, attached: true },
			_react2.default.createElement(_Item2.default, { number: number })
		);
	});

	return [_react2.default.createElement(
		_semanticUiReact.Header,
		{ as: 'h3', attached: 'top' },
		'Whats wrong with Angular'
	), _react2.default.createElement(
		_Fetch2.default,
		{
			endpoint: endpoint,
			fetch: fetch,
			shouldFetch: numbers.length === 0
		},
		items
	)];
};

List.propTypes = {
	endpoint: _propTypes2.default.string.isRequired,
	fetch: _propTypes2.default.func.isRequired,
	numbers: _propTypes2.default.arrayOf(_propTypes2.default.number)
};

List.defaultProps = {
	numbers: []
};

var _default = List;
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(List, 'List', '/Users/Kidokeisuke/coiney/src/common/components/Issues/Content/List.jsx');

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/Kidokeisuke/coiney/src/common/components/Issues/Content/List.jsx');
}();

;

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _FromRedux = __webpack_require__(5);

var _Loader = __webpack_require__(65);

var _Loader2 = _interopRequireDefault(_Loader);

var _Error = __webpack_require__(66);

var _Error2 = _interopRequireDefault(_Error);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FetchStatusWithError = (0, _FromRedux.merge)(_FromRedux.FetchStatus, _FromRedux.DispatchError);

/* uses endpoint to subscribe to fetch status */

var Fetch = function (_Component) {
	_inherits(Fetch, _Component);

	function Fetch() {
		_classCallCheck(this, Fetch);

		return _possibleConstructorReturn(this, (Fetch.__proto__ || Object.getPrototypeOf(Fetch)).apply(this, arguments));
	}

	_createClass(Fetch, [{
		key: 'componentWillMount',
		value: function componentWillMount() {
			var _props = this.props,
			    shouldFetch = _props.shouldFetch,
			    fetch = _props.fetch;


			if (shouldFetch) {
				fetch();
			}
		}
	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(_ref) {
			var endpoint = _ref.endpoint,
			    fetch = _ref.fetch,
			    shouldFetch = _ref.shouldFetch;

			if (shouldFetch && endpoint !== this.props.endpoint) {
				fetch();
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var _props2 = this.props,
			    children = _props2.children,
			    endpoint = _props2.endpoint,
			    fetch = _props2.fetch,
			    shouldFetch = _props2.shouldFetch,
			    RenderError = _props2.RenderError,
			    RenderLoad = _props2.RenderLoad;


			return _react2.default.createElement(
				FetchStatusWithError,
				{ endpoint: endpoint },
				function (_ref2) {
					var error = _ref2.error,
					    fetching = _ref2.fetching,
					    dispatchError = _ref2.dispatchError;

					if (error) {
						return _react2.default.createElement(RenderError, { error: error, onRetry: fetch });
					}

					if (shouldFetch || fetching) {
						var onTimeout = function onTimeout() {
							return dispatchError('Api call timed out!');
						};

						return _react2.default.createElement(RenderLoad, { timeout: 8000, onTimeout: onTimeout });
					}

					return children;
				}
			);
		}
	}]);

	return Fetch;
}(_react.Component);

Fetch.propTypes = {
	children: _propTypes2.default.node.isRequired,
	endpoint: _propTypes2.default.string.isRequired,
	fetch: _propTypes2.default.func.isRequired,
	shouldFetch: _propTypes2.default.bool.isRequired,
	RenderError: _propTypes2.default.func,
	RenderLoad: _propTypes2.default.func
};
Fetch.defaultProps = {
	RenderError: _Error2.default,
	RenderLoad: _Loader2.default
};
var _default = Fetch;
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(FetchStatusWithError, 'FetchStatusWithError', '/Users/Kidokeisuke/coiney/src/common/components/Fetch/index.jsx');

	__REACT_HOT_LOADER__.register(Fetch, 'Fetch', '/Users/Kidokeisuke/coiney/src/common/components/Fetch/index.jsx');

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/Kidokeisuke/coiney/src/common/components/Fetch/index.jsx');
}();

;

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _semanticUiReact = __webpack_require__(2);

var _Overlay = __webpack_require__(26);

var _Overlay2 = _interopRequireDefault(_Overlay);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Load = function (_Component) {
	_inherits(Load, _Component);

	function Load() {
		_classCallCheck(this, Load);

		return _possibleConstructorReturn(this, (Load.__proto__ || Object.getPrototypeOf(Load)).apply(this, arguments));
	}

	_createClass(Load, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _props = this.props,
			    onTimeout = _props.onTimeout,
			    timeout = _props.timeout;


			this.timeout = setTimeout(onTimeout, timeout);
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			clearTimeout(this.timeout);
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_Overlay2.default,
				null,
				_react2.default.createElement(
					_semanticUiReact.Loader,
					null,
					'Loading'
				)
			);
		}
	}]);

	return Load;
}(_react.Component);

Load.propTypes = {
	timeout: _propTypes2.default.number.isRequired,
	onTimeout: _propTypes2.default.func.isRequired
};
var _default = Load;
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(Load, 'Load', '/Users/Kidokeisuke/coiney/src/common/components/Fetch/Loader.jsx');

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/Kidokeisuke/coiney/src/common/components/Fetch/Loader.jsx');
}();

;

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _React = __webpack_require__(67);

var _React2 = _interopRequireDefault(_React);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterDom = __webpack_require__(3);

var _semanticUiReact = __webpack_require__(2);

var _Overlay = __webpack_require__(26);

var _Overlay2 = _interopRequireDefault(_Overlay);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ErrorMessage = function ErrorMessage(_ref) {
	var error = _ref.error,
	    onRetry = _ref.onRetry;
	return _React2.default.createElement(_reactRouterDom.Route, { render: function render(_ref2) {
			var history = _ref2.history;
			return _React2.default.createElement(
				_Overlay2.default,
				null,
				_React2.default.createElement(
					_semanticUiReact.Header,
					{ as: 'h2' },
					'Oh no! Its an error!',
					_React2.default.createElement('br', null),
					error
				),
				_React2.default.createElement(_semanticUiReact.Divider, { section: true }),
				_React2.default.createElement(
					_semanticUiReact.Button,
					{ onClick: function onClick() {
							return onRetry();
						} },
					'Retry that fetch'
				),
				_React2.default.createElement(_semanticUiReact.Divider, { hidden: true }),
				_React2.default.createElement(
					_semanticUiReact.Button,
					{ onClick: history.goBack },
					'Go back'
				)
			);
		}
	});
};

ErrorMessage.propTypes = {
	error: _propTypes2.default.string.isRequired,
	onRetry: _propTypes2.default.func
};

ErrorMessage.defaultProps = {
	onRetry: null
};

var _default = ErrorMessage;
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(ErrorMessage, 'ErrorMessage', '/Users/Kidokeisuke/coiney/src/common/components/Fetch/Error.jsx');

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/Kidokeisuke/coiney/src/common/components/Fetch/Error.jsx');
}();

;

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {
  module.exports = require('./cjs/react.production.min.js');
} else {
  module.exports = __webpack_require__(68);
}


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.0.0
 * react.development.js
 *
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
(function() {

'use strict';

var objectAssign$1 = __webpack_require__(69);
var require$$0 = __webpack_require__(70);
var emptyObject = __webpack_require__(71);
var invariant = __webpack_require__(72);
var emptyFunction = __webpack_require__(73);
var checkPropTypes = __webpack_require__(74);

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @providesModule reactProdInvariant
 * 
 */

{
  var warning = require$$0;
}

function warnNoop(publicInstance, callerName) {
  {
    var constructor = publicInstance.constructor;
    warning(false, '%s(...): Can only update a mounted or mounting component. ' + 'This usually means you called %s() on an unmounted component. ' + 'This is a no-op.\n\nPlease check the code for the %s component.', callerName, callerName, constructor && (constructor.displayName || constructor.name) || 'ReactClass');
  }
}

/**
 * This is the abstract API for an update queue.
 */
var ReactNoopUpdateQueue = {
  /**
   * Checks whether or not this composite component is mounted.
   * @param {ReactClass} publicInstance The instance we want to test.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */
  isMounted: function (publicInstance) {
    return false;
  },

  /**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldComponentUpdate`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueForceUpdate: function (publicInstance, callback, callerName) {
    warnNoop(publicInstance, 'forceUpdate');
  },

  /**
   * Replaces all of the state. Always use this or `setState` to mutate state.
   * You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} completeState Next state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueReplaceState: function (publicInstance, completeState, callback, callerName) {
    warnNoop(publicInstance, 'replaceState');
  },

  /**
   * Sets a subset of the state. This only exists because _pendingState is
   * internal. This provides a merging strategy that is not available to deep
   * properties which is confusing. TODO: Expose pendingState or don't use it
   * during the merge.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialState Next partial state to be merged with state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} Name of the calling function in the public API.
   * @internal
   */
  enqueueSetState: function (publicInstance, partialState, callback, callerName) {
    warnNoop(publicInstance, 'setState');
  }
};

var ReactNoopUpdateQueue_1 = ReactNoopUpdateQueue;

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @providesModule lowPriorityWarning
 */

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning_1 = lowPriorityWarning;

/**
 * Base class helpers for the updating state of a component.
 */
function ReactComponent(props, context, updater) {
  this.props = props;
  this.context = context;
  this.refs = emptyObject;
  // We initialize the default updater but the real one gets injected by the
  // renderer.
  this.updater = updater || ReactNoopUpdateQueue_1;
}

ReactComponent.prototype.isReactComponent = {};

/**
 * Sets a subset of the state. Always use this to mutate
 * state. You should treat `this.state` as immutable.
 *
 * There is no guarantee that `this.state` will be immediately updated, so
 * accessing `this.state` after calling this method may return the old value.
 *
 * There is no guarantee that calls to `setState` will run synchronously,
 * as they may eventually be batched together.  You can provide an optional
 * callback that will be executed when the call to setState is actually
 * completed.
 *
 * When a function is provided to setState, it will be called at some point in
 * the future (not synchronously). It will be called with the up to date
 * component arguments (state, props, context). These values can be different
 * from this.* because your function may be called after receiveProps but before
 * shouldComponentUpdate, and this new state, props, and context will not yet be
 * assigned to this.
 *
 * @param {object|function} partialState Next partial state or function to
 *        produce next partial state to be merged with current state.
 * @param {?function} callback Called after state is updated.
 * @final
 * @protected
 */
ReactComponent.prototype.setState = function (partialState, callback) {
  !(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null) ? invariant(false, 'setState(...): takes an object of state variables to update or a function which returns an object of state variables.') : void 0;
  this.updater.enqueueSetState(this, partialState, callback, 'setState');
};

/**
 * Forces an update. This should only be invoked when it is known with
 * certainty that we are **not** in a DOM transaction.
 *
 * You may want to call this when you know that some deeper aspect of the
 * component's state has changed but `setState` was not called.
 *
 * This will not invoke `shouldComponentUpdate`, but it will invoke
 * `componentWillUpdate` and `componentDidUpdate`.
 *
 * @param {?function} callback Called after update is complete.
 * @final
 * @protected
 */
ReactComponent.prototype.forceUpdate = function (callback) {
  this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
};

/**
 * Deprecated APIs. These APIs used to exist on classic React classes but since
 * we would like to deprecate them, we're not going to move them over to this
 * modern base class. Instead, we define a getter that warns if it's accessed.
 */
{
  var deprecatedAPIs = {
    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
  };
  var defineDeprecationWarning = function (methodName, info) {
    Object.defineProperty(ReactComponent.prototype, methodName, {
      get: function () {
        lowPriorityWarning_1(false, '%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);
        return undefined;
      }
    });
  };
  for (var fnName in deprecatedAPIs) {
    if (deprecatedAPIs.hasOwnProperty(fnName)) {
      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
    }
  }
}

/**
 * Base class helpers for the updating state of a component.
 */
function ReactPureComponent(props, context, updater) {
  // Duplicated from ReactComponent.
  this.props = props;
  this.context = context;
  this.refs = emptyObject;
  // We initialize the default updater but the real one gets injected by the
  // renderer.
  this.updater = updater || ReactNoopUpdateQueue_1;
}

function ComponentDummy() {}
ComponentDummy.prototype = ReactComponent.prototype;
var pureComponentPrototype = ReactPureComponent.prototype = new ComponentDummy();
pureComponentPrototype.constructor = ReactPureComponent;
// Avoid an extra prototype jump for these methods.
objectAssign$1(pureComponentPrototype, ReactComponent.prototype);
pureComponentPrototype.isPureReactComponent = true;

function ReactAsyncComponent(props, context, updater) {
  // Duplicated from ReactComponent.
  this.props = props;
  this.context = context;
  this.refs = emptyObject;
  // We initialize the default updater but the real one gets injected by the
  // renderer.
  this.updater = updater || ReactNoopUpdateQueue_1;
}

var asyncComponentPrototype = ReactAsyncComponent.prototype = new ComponentDummy();
asyncComponentPrototype.constructor = ReactAsyncComponent;
// Avoid an extra prototype jump for these methods.
objectAssign$1(asyncComponentPrototype, ReactComponent.prototype);
asyncComponentPrototype.unstable_isAsyncReactComponent = true;
asyncComponentPrototype.render = function () {
  return this.props.children;
};

var ReactBaseClasses = {
  Component: ReactComponent,
  PureComponent: ReactPureComponent,
  AsyncComponent: ReactAsyncComponent
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @providesModule ReactCurrentOwner
 * 
 */

/**
 * Keeps track of the current owner.
 *
 * The current owner is the component who should own any components that are
 * currently being constructed.
 */
var ReactCurrentOwner = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

var ReactCurrentOwner_1 = ReactCurrentOwner;

var hasOwnProperty = Object.prototype.hasOwnProperty;

{
  var warning$2 = require$$0;
}

// The Symbol used to tag the ReactElement type. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var REACT_ELEMENT_TYPE$1 = typeof Symbol === 'function' && Symbol['for'] && Symbol['for']('react.element') || 0xeac7;

var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};

var specialPropKeyWarningShown;
var specialPropRefWarningShown;

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;
      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }
  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;
      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }
  return config.key !== undefined;
}

function defineKeyPropWarningGetter(props, displayName) {
  var warnAboutAccessingKey = function () {
    if (!specialPropKeyWarningShown) {
      specialPropKeyWarningShown = true;
      warning$2(false, '%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
    }
  };
  warnAboutAccessingKey.isReactWarning = true;
  Object.defineProperty(props, 'key', {
    get: warnAboutAccessingKey,
    configurable: true
  });
}

function defineRefPropWarningGetter(props, displayName) {
  var warnAboutAccessingRef = function () {
    if (!specialPropRefWarningShown) {
      specialPropRefWarningShown = true;
      warning$2(false, '%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
    }
  };
  warnAboutAccessingRef.isReactWarning = true;
  Object.defineProperty(props, 'ref', {
    get: warnAboutAccessingRef,
    configurable: true
  });
}

/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, no instanceof check
 * will work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} key
 * @param {string|object} ref
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @param {*} owner
 * @param {*} props
 * @internal
 */
var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allow us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE$1,

    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,

    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {};

    // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.
    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    });
    // self and source are DEV only properties.
    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    });
    // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.
    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });
    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};

/**
 * Create and return a new ReactElement of the given type.
 * See https://facebook.github.io/react/docs/react-api.html#createelement
 */
ReactElement.createElement = function (type, config, children) {
  var propName;

  // Reserved names are extracted
  var props = {};

  var key = null;
  var ref = null;
  var self = null;
  var source = null;

  if (config != null) {
    if (hasValidRef(config)) {
      ref = config.ref;
    }
    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    self = config.__self === undefined ? null : config.__self;
    source = config.__source === undefined ? null : config.__source;
    // Remaining properties are added to a new props object
    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    }
  }

  // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.
  var childrenLength = arguments.length - 2;
  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);
    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }
    {
      if (Object.freeze) {
        Object.freeze(childArray);
      }
    }
    props.children = childArray;
  }

  // Resolve default props
  if (type && type.defaultProps) {
    var defaultProps = type.defaultProps;
    for (propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }
  }
  {
    if (key || ref) {
      if (typeof props.$$typeof === 'undefined' || props.$$typeof !== REACT_ELEMENT_TYPE$1) {
        var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;
        if (key) {
          defineKeyPropWarningGetter(props, displayName);
        }
        if (ref) {
          defineRefPropWarningGetter(props, displayName);
        }
      }
    }
  }
  return ReactElement(type, key, ref, self, source, ReactCurrentOwner_1.current, props);
};

/**
 * Return a function that produces ReactElements of a given type.
 * See https://facebook.github.io/react/docs/react-api.html#createfactory
 */
ReactElement.createFactory = function (type) {
  var factory = ReactElement.createElement.bind(null, type);
  // Expose the type on the factory and the prototype so that it can be
  // easily accessed on elements. E.g. `<Foo />.type === Foo`.
  // This should not be named `constructor` since this may not be the function
  // that created the element, and it may not even be a constructor.
  // Legacy hook TODO: Warn if this is accessed
  factory.type = type;
  return factory;
};

ReactElement.cloneAndReplaceKey = function (oldElement, newKey) {
  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);

  return newElement;
};

/**
 * Clone and return a new ReactElement using element as the starting point.
 * See https://facebook.github.io/react/docs/react-api.html#cloneelement
 */
ReactElement.cloneElement = function (element, config, children) {
  var propName;

  // Original props are copied
  var props = objectAssign$1({}, element.props);

  // Reserved names are extracted
  var key = element.key;
  var ref = element.ref;
  // Self is preserved since the owner is preserved.
  var self = element._self;
  // Source is preserved since cloneElement is unlikely to be targeted by a
  // transpiler, and the original source is probably a better indicator of the
  // true owner.
  var source = element._source;

  // Owner will be preserved, unless ref is overridden
  var owner = element._owner;

  if (config != null) {
    if (hasValidRef(config)) {
      // Silently steal the ref from the parent.
      ref = config.ref;
      owner = ReactCurrentOwner_1.current;
    }
    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    // Remaining properties override existing props
    var defaultProps;
    if (element.type && element.type.defaultProps) {
      defaultProps = element.type.defaultProps;
    }
    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        if (config[propName] === undefined && defaultProps !== undefined) {
          // Resolve default props
          props[propName] = defaultProps[propName];
        } else {
          props[propName] = config[propName];
        }
      }
    }
  }

  // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.
  var childrenLength = arguments.length - 2;
  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);
    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }
    props.children = childArray;
  }

  return ReactElement(element.type, key, ref, self, source, owner, props);
};

/**
 * Verifies the object is a ReactElement.
 * See https://facebook.github.io/react/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a valid component.
 * @final
 */
ReactElement.isValidElement = function (object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE$1;
};

var ReactElement_1 = ReactElement;

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @providesModule ReactDebugCurrentFrame
 * 
 */

var ReactDebugCurrentFrame = {};

{
  // Component that is being worked on
  ReactDebugCurrentFrame.getCurrentStack = null;

  ReactDebugCurrentFrame.getStackAddendum = function () {
    var impl = ReactDebugCurrentFrame.getCurrentStack;
    if (impl) {
      return impl();
    }
    return null;
  };
}

var ReactDebugCurrentFrame_1 = ReactDebugCurrentFrame;

{
  var warning$1 = require$$0;

  var _require = ReactDebugCurrentFrame_1,
      getStackAddendum = _require.getStackAddendum;
}

var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.
// The Symbol used to tag the ReactElement type. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var REACT_ELEMENT_TYPE = typeof Symbol === 'function' && Symbol['for'] && Symbol['for']('react.element') || 0xeac7;

var SEPARATOR = '.';
var SUBSEPARATOR = ':';

/**
 * Escape and wrap key so it is safe to use as a reactid
 *
 * @param {string} key to be escaped.
 * @return {string} the escaped key.
 */
function escape(key) {
  var escapeRegex = /[=:]/g;
  var escaperLookup = {
    '=': '=0',
    ':': '=2'
  };
  var escapedString = ('' + key).replace(escapeRegex, function (match) {
    return escaperLookup[match];
  });

  return '$' + escapedString;
}

/**
 * TODO: Test that a single child and an array with one item have the same key
 * pattern.
 */

var didWarnAboutMaps = false;

var userProvidedKeyEscapeRegex = /\/+/g;
function escapeUserProvidedKey(text) {
  return ('' + text).replace(userProvidedKeyEscapeRegex, '$&/');
}

var POOL_SIZE = 10;
var traverseContextPool = [];
function getPooledTraverseContext(mapResult, keyPrefix, mapFunction, mapContext) {
  if (traverseContextPool.length) {
    var traverseContext = traverseContextPool.pop();
    traverseContext.result = mapResult;
    traverseContext.keyPrefix = keyPrefix;
    traverseContext.func = mapFunction;
    traverseContext.context = mapContext;
    traverseContext.count = 0;
    return traverseContext;
  } else {
    return {
      result: mapResult,
      keyPrefix: keyPrefix,
      func: mapFunction,
      context: mapContext,
      count: 0
    };
  }
}

function releaseTraverseContext(traverseContext) {
  traverseContext.result = null;
  traverseContext.keyPrefix = null;
  traverseContext.func = null;
  traverseContext.context = null;
  traverseContext.count = 0;
  if (traverseContextPool.length < POOL_SIZE) {
    traverseContextPool.push(traverseContext);
  }
}

/**
 * @param {?*} children Children tree container.
 * @param {!string} nameSoFar Name of the key path so far.
 * @param {!function} callback Callback to invoke with each child found.
 * @param {?*} traverseContext Used to pass information throughout the traversal
 * process.
 * @return {!number} The number of children in this subtree.
 */
function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
  var type = typeof children;

  if (type === 'undefined' || type === 'boolean') {
    // All of the above are perceived as null.
    children = null;
  }

  if (children === null || type === 'string' || type === 'number' ||
  // The following is inlined from ReactElement. This means we can optimize
  // some checks. React Fiber also inlines this logic for similar purposes.
  type === 'object' && children.$$typeof === REACT_ELEMENT_TYPE) {
    callback(traverseContext, children,
    // If it's the only child, treat the name as if it was wrapped in an array
    // so that it's consistent if the number of children grows.
    nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar);
    return 1;
  }

  var child;
  var nextName;
  var subtreeCount = 0; // Count of children found in the current subtree.
  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      nextName = nextNamePrefix + getComponentKey(child, i);
      subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
    }
  } else {
    var iteratorFn = ITERATOR_SYMBOL && children[ITERATOR_SYMBOL] || children[FAUX_ITERATOR_SYMBOL];
    if (typeof iteratorFn === 'function') {
      {
        // Warn about using Maps as children
        if (iteratorFn === children.entries) {
          warning$1(didWarnAboutMaps, 'Using Maps as children is unsupported and will likely yield ' + 'unexpected results. Convert it to a sequence/iterable of keyed ' + 'ReactElements instead.%s', getStackAddendum());
          didWarnAboutMaps = true;
        }
      }

      var iterator = iteratorFn.call(children);
      var step;
      var ii = 0;
      while (!(step = iterator.next()).done) {
        child = step.value;
        nextName = nextNamePrefix + getComponentKey(child, ii++);
        subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
      }
    } else if (type === 'object') {
      var addendum = '';
      {
        addendum = ' If you meant to render a collection of children, use an array ' + 'instead.' + getStackAddendum();
      }
      var childrenString = '' + children;
      invariant(false, 'Objects are not valid as a React child (found: %s).%s', childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString, addendum);
    }
  }

  return subtreeCount;
}

/**
 * Traverses children that are typically specified as `props.children`, but
 * might also be specified through attributes:
 *
 * - `traverseAllChildren(this.props.children, ...)`
 * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
 *
 * The `traverseContext` is an optional argument that is passed through the
 * entire traversal. It can be used to store accumulations or anything else that
 * the callback might find relevant.
 *
 * @param {?*} children Children tree object.
 * @param {!function} callback To invoke upon traversing each child.
 * @param {?*} traverseContext Context for traversal.
 * @return {!number} The number of children in this subtree.
 */
function traverseAllChildren(children, callback, traverseContext) {
  if (children == null) {
    return 0;
  }

  return traverseAllChildrenImpl(children, '', callback, traverseContext);
}

/**
 * Generate a key string that identifies a component within a set.
 *
 * @param {*} component A component that could contain a manual key.
 * @param {number} index Index that is used if a manual key is not provided.
 * @return {string}
 */
function getComponentKey(component, index) {
  // Do some typechecking here since we call this blindly. We want to ensure
  // that we don't block potential future ES APIs.
  if (typeof component === 'object' && component !== null && component.key != null) {
    // Explicit key
    return escape(component.key);
  }
  // Implicit key determined by the index in the set
  return index.toString(36);
}

function forEachSingleChild(bookKeeping, child, name) {
  var func = bookKeeping.func,
      context = bookKeeping.context;

  func.call(context, child, bookKeeping.count++);
}

/**
 * Iterates through children that are typically specified as `props.children`.
 *
 * See https://facebook.github.io/react/docs/react-api.html#react.children.foreach
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} forEachFunc
 * @param {*} forEachContext Context for forEachContext.
 */
function forEachChildren(children, forEachFunc, forEachContext) {
  if (children == null) {
    return children;
  }
  var traverseContext = getPooledTraverseContext(null, null, forEachFunc, forEachContext);
  traverseAllChildren(children, forEachSingleChild, traverseContext);
  releaseTraverseContext(traverseContext);
}

function mapSingleChildIntoContext(bookKeeping, child, childKey) {
  var result = bookKeeping.result,
      keyPrefix = bookKeeping.keyPrefix,
      func = bookKeeping.func,
      context = bookKeeping.context;


  var mappedChild = func.call(context, child, bookKeeping.count++);
  if (Array.isArray(mappedChild)) {
    mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, emptyFunction.thatReturnsArgument);
  } else if (mappedChild != null) {
    if (ReactElement_1.isValidElement(mappedChild)) {
      mappedChild = ReactElement_1.cloneAndReplaceKey(mappedChild,
      // Keep both the (mapped) and old keys if they differ, just as
      // traverseAllChildren used to do for objects as children
      keyPrefix + (mappedChild.key && (!child || child.key !== mappedChild.key) ? escapeUserProvidedKey(mappedChild.key) + '/' : '') + childKey);
    }
    result.push(mappedChild);
  }
}

function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
  var escapedPrefix = '';
  if (prefix != null) {
    escapedPrefix = escapeUserProvidedKey(prefix) + '/';
  }
  var traverseContext = getPooledTraverseContext(array, escapedPrefix, func, context);
  traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
  releaseTraverseContext(traverseContext);
}

/**
 * Maps children that are typically specified as `props.children`.
 *
 * See https://facebook.github.io/react/docs/react-api.html#react.children.map
 *
 * The provided mapFunction(child, key, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func The map function.
 * @param {*} context Context for mapFunction.
 * @return {object} Object containing the ordered map of results.
 */
function mapChildren(children, func, context) {
  if (children == null) {
    return children;
  }
  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, func, context);
  return result;
}

/**
 * Count the number of children that are typically specified as
 * `props.children`.
 *
 * See https://facebook.github.io/react/docs/react-api.html#react.children.count
 *
 * @param {?*} children Children tree container.
 * @return {number} The number of children.
 */
function countChildren(children, context) {
  return traverseAllChildren(children, emptyFunction.thatReturnsNull, null);
}

/**
 * Flatten a children object (typically specified as `props.children`) and
 * return an array with appropriately re-keyed children.
 *
 * See https://facebook.github.io/react/docs/react-api.html#react.children.toarray
 */
function toArray(children) {
  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, emptyFunction.thatReturnsArgument);
  return result;
}

var ReactChildren = {
  forEach: forEachChildren,
  map: mapChildren,
  count: countChildren,
  toArray: toArray
};

var ReactChildren_1 = ReactChildren;

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @providesModule ReactVersion
 */

var ReactVersion = '16.0.0';

/**
 * Returns the first child in a collection of children and verifies that there
 * is only one child in the collection.
 *
 * See https://facebook.github.io/react/docs/react-api.html#react.children.only
 *
 * The current implementation of this function assumes that a single child gets
 * passed without a wrapper, but the purpose of this helper function is to
 * abstract away the particular structure of children.
 *
 * @param {?object} children Child collection structure.
 * @return {ReactElement} The first and only `ReactElement` contained in the
 * structure.
 */
function onlyChild(children) {
  !ReactElement_1.isValidElement(children) ? invariant(false, 'React.Children.only expected to receive a single React element child.') : void 0;
  return children;
}

var onlyChild_1 = onlyChild;

/**
 * Copyright (c) 2016-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @providesModule describeComponentFrame
 */

var describeComponentFrame$1 = function (name, source, ownerName) {
  return '\n    in ' + (name || 'Unknown') + (source ? ' (at ' + source.fileName.replace(/^.*[\\\/]/, '') + ':' + source.lineNumber + ')' : ownerName ? ' (created by ' + ownerName + ')' : '');
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @providesModule getComponentName
 * 
 */

function getComponentName$1(instanceOrFiber) {
  if (typeof instanceOrFiber.getName === 'function') {
    // Stack reconciler
    var instance = instanceOrFiber;
    return instance.getName();
  }
  if (typeof instanceOrFiber.tag === 'number') {
    // Fiber reconciler
    var fiber = instanceOrFiber;
    var type = fiber.type;

    if (typeof type === 'string') {
      return type;
    }
    if (typeof type === 'function') {
      return type.displayName || type.name;
    }
  }
  return null;
}

var getComponentName_1 = getComponentName$1;

{
  var checkPropTypes$1 = checkPropTypes;
  var lowPriorityWarning$1 = lowPriorityWarning_1;
  var ReactDebugCurrentFrame$1 = ReactDebugCurrentFrame_1;
  var warning$3 = require$$0;
  var describeComponentFrame = describeComponentFrame$1;
  var getComponentName = getComponentName_1;

  var currentlyValidatingElement = null;

  var getDisplayName = function (element) {
    if (element == null) {
      return '#empty';
    } else if (typeof element === 'string' || typeof element === 'number') {
      return '#text';
    } else if (typeof element.type === 'string') {
      return element.type;
    } else {
      return element.type.displayName || element.type.name || 'Unknown';
    }
  };

  var getStackAddendum$1 = function () {
    var stack = '';
    if (currentlyValidatingElement) {
      var name = getDisplayName(currentlyValidatingElement);
      var owner = currentlyValidatingElement._owner;
      stack += describeComponentFrame(name, currentlyValidatingElement._source, owner && getComponentName(owner));
    }
    stack += ReactDebugCurrentFrame$1.getStackAddendum() || '';
    return stack;
  };
}

var ITERATOR_SYMBOL$1 = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL$1 = '@@iterator'; // Before Symbol spec.

function getDeclarationErrorAddendum() {
  if (ReactCurrentOwner_1.current) {
    var name = getComponentName(ReactCurrentOwner_1.current);
    if (name) {
      return '\n\nCheck the render method of `' + name + '`.';
    }
  }
  return '';
}

function getSourceInfoErrorAddendum(elementProps) {
  if (elementProps !== null && elementProps !== undefined && elementProps.__source !== undefined) {
    var source = elementProps.__source;
    var fileName = source.fileName.replace(/^.*[\\\/]/, '');
    var lineNumber = source.lineNumber;
    return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
  }
  return '';
}

/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */
var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  var info = getDeclarationErrorAddendum();

  if (!info) {
    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;
    if (parentName) {
      info = '\n\nCheck the top-level render call using <' + parentName + '>.';
    }
  }
  return info;
}

/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */
function validateExplicitKey(element, parentType) {
  if (!element._store || element._store.validated || element.key != null) {
    return;
  }
  element._store.validated = true;

  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
  if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
    return;
  }
  ownerHasKeyUseWarning[currentComponentErrorInfo] = true;

  // Usually the current owner is the offender, but if it accepts children as a
  // property, it may be the creator of the child that's responsible for
  // assigning it a key.
  var childOwner = '';
  if (element && element._owner && element._owner !== ReactCurrentOwner_1.current) {
    // Give the component that originally created this child.
    childOwner = ' It was passed a child from ' + getComponentName(element._owner) + '.';
  }

  currentlyValidatingElement = element;
  {
    warning$3(false, 'Each child in an array or iterator should have a unique "key" prop.' + '%s%s See https://fb.me/react-warning-keys for more information.%s', currentComponentErrorInfo, childOwner, getStackAddendum$1());
  }
  currentlyValidatingElement = null;
}

/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */
function validateChildKeys(node, parentType) {
  if (typeof node !== 'object') {
    return;
  }
  if (Array.isArray(node)) {
    for (var i = 0; i < node.length; i++) {
      var child = node[i];
      if (ReactElement_1.isValidElement(child)) {
        validateExplicitKey(child, parentType);
      }
    }
  } else if (ReactElement_1.isValidElement(node)) {
    // This element was passed in a valid location.
    if (node._store) {
      node._store.validated = true;
    }
  } else if (node) {
    var iteratorFn = ITERATOR_SYMBOL$1 && node[ITERATOR_SYMBOL$1] || node[FAUX_ITERATOR_SYMBOL$1];
    if (typeof iteratorFn === 'function') {
      // Entry iterators used to provide implicit keys,
      // but now we print a separate warning for them later.
      if (iteratorFn !== node.entries) {
        var iterator = iteratorFn.call(node);
        var step;
        while (!(step = iterator.next()).done) {
          if (ReactElement_1.isValidElement(step.value)) {
            validateExplicitKey(step.value, parentType);
          }
        }
      }
    }
  }
}

/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */
function validatePropTypes(element) {
  var componentClass = element.type;
  if (typeof componentClass !== 'function') {
    return;
  }
  var name = componentClass.displayName || componentClass.name;
  var propTypes = componentClass.propTypes;

  if (propTypes) {
    currentlyValidatingElement = element;
    checkPropTypes$1(propTypes, element.props, 'prop', name, getStackAddendum$1);
    currentlyValidatingElement = null;
  }
  if (typeof componentClass.getDefaultProps === 'function') {
    warning$3(componentClass.getDefaultProps.isReactClassApproved, 'getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
  }
}

var ReactElementValidator$1 = {
  createElement: function (type, props, children) {
    var validType = typeof type === 'string' || typeof type === 'function';
    // We warn in this case but don't throw. We expect the element creation to
    // succeed and there will likely be errors in render.
    if (!validType) {
      var info = '';
      if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
        info += ' You likely forgot to export your component from the file ' + "it's defined in.";
      }

      var sourceInfo = getSourceInfoErrorAddendum(props);
      if (sourceInfo) {
        info += sourceInfo;
      } else {
        info += getDeclarationErrorAddendum();
      }

      info += ReactDebugCurrentFrame$1.getStackAddendum() || '';

      warning$3(false, 'React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', type == null ? type : typeof type, info);
    }

    var element = ReactElement_1.createElement.apply(this, arguments);

    // The result can be nullish if a mock or a custom function is used.
    // TODO: Drop this when these are no longer allowed as the type argument.
    if (element == null) {
      return element;
    }

    // Skip key warning if the type isn't valid since our key validation logic
    // doesn't expect a non-string/function type and can throw confusing errors.
    // We don't want exception behavior to differ between dev and prod.
    // (Rendering will throw with a helpful message and as soon as the type is
    // fixed, the key warnings will appear.)
    if (validType) {
      for (var i = 2; i < arguments.length; i++) {
        validateChildKeys(arguments[i], type);
      }
    }

    validatePropTypes(element);

    return element;
  },

  createFactory: function (type) {
    var validatedFactory = ReactElementValidator$1.createElement.bind(null, type);
    // Legacy hook TODO: Warn if this is accessed
    validatedFactory.type = type;

    {
      Object.defineProperty(validatedFactory, 'type', {
        enumerable: false,
        get: function () {
          lowPriorityWarning$1(false, 'Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');
          Object.defineProperty(this, 'type', {
            value: type
          });
          return type;
        }
      });
    }

    return validatedFactory;
  },

  cloneElement: function (element, props, children) {
    var newElement = ReactElement_1.cloneElement.apply(this, arguments);
    for (var i = 2; i < arguments.length; i++) {
      validateChildKeys(arguments[i], newElement.type);
    }
    validatePropTypes(newElement);
    return newElement;
  }
};

var ReactElementValidator_1 = ReactElementValidator$1;

{
  var warning$4 = require$$0;
}

function isNative(fn) {
  // Based on isNative() from Lodash
  var funcToString = Function.prototype.toString;
  var reIsNative = RegExp('^' + funcToString
  // Take an example native function source for comparison
  .call(Object.prototype.hasOwnProperty)
  // Strip regex characters so we can use it for regex
  .replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
  // Remove hasOwnProperty from the template to make it generic
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
  try {
    var source = funcToString.call(fn);
    return reIsNative.test(source);
  } catch (err) {
    return false;
  }
}

var canUseCollections =
// Array.from
typeof Array.from === 'function' &&
// Map
typeof Map === 'function' && isNative(Map) &&
// Map.prototype.keys
Map.prototype != null && typeof Map.prototype.keys === 'function' && isNative(Map.prototype.keys) &&
// Set
typeof Set === 'function' && isNative(Set) &&
// Set.prototype.keys
Set.prototype != null && typeof Set.prototype.keys === 'function' && isNative(Set.prototype.keys);

var setItem;
var getItem;
var removeItem;
var getItemIDs;
var addRoot;
var removeRoot;
var getRootIDs;

if (canUseCollections) {
  var itemMap = new Map();
  var rootIDSet = new Set();

  setItem = function (id, item) {
    itemMap.set(id, item);
  };
  getItem = function (id) {
    return itemMap.get(id);
  };
  removeItem = function (id) {
    itemMap['delete'](id);
  };
  getItemIDs = function () {
    return Array.from(itemMap.keys());
  };

  addRoot = function (id) {
    rootIDSet.add(id);
  };
  removeRoot = function (id) {
    rootIDSet['delete'](id);
  };
  getRootIDs = function () {
    return Array.from(rootIDSet.keys());
  };
} else {
  var itemByKey = {};
  var rootByKey = {};

  // Use non-numeric keys to prevent V8 performance issues:
  // https://github.com/facebook/react/pull/7232
  var getKeyFromID = function (id) {
    return '.' + id;
  };
  var getIDFromKey = function (key) {
    return parseInt(key.substr(1), 10);
  };

  setItem = function (id, item) {
    var key = getKeyFromID(id);
    itemByKey[key] = item;
  };
  getItem = function (id) {
    var key = getKeyFromID(id);
    return itemByKey[key];
  };
  removeItem = function (id) {
    var key = getKeyFromID(id);
    delete itemByKey[key];
  };
  getItemIDs = function () {
    return Object.keys(itemByKey).map(getIDFromKey);
  };

  addRoot = function (id) {
    var key = getKeyFromID(id);
    rootByKey[key] = true;
  };
  removeRoot = function (id) {
    var key = getKeyFromID(id);
    delete rootByKey[key];
  };
  getRootIDs = function () {
    return Object.keys(rootByKey).map(getIDFromKey);
  };
}

var unmountedIDs = [];

function purgeDeep(id) {
  var item = getItem(id);
  if (item) {
    var childIDs = item.childIDs;

    removeItem(id);
    childIDs.forEach(purgeDeep);
  }
}

function getDisplayName$1(element) {
  if (element == null) {
    return '#empty';
  } else if (typeof element === 'string' || typeof element === 'number') {
    return '#text';
  } else if (typeof element.type === 'string') {
    return element.type;
  } else {
    return element.type.displayName || element.type.name || 'Unknown';
  }
}

function describeID(id) {
  var name = ReactComponentTreeHook.getDisplayName(id);
  var element = ReactComponentTreeHook.getElement(id);
  var ownerID = ReactComponentTreeHook.getOwnerID(id);
  var ownerName = void 0;

  if (ownerID) {
    ownerName = ReactComponentTreeHook.getDisplayName(ownerID);
  }
  warning$4(element, 'ReactComponentTreeHook: Missing React element for debugID %s when ' + 'building stack', id);
  return describeComponentFrame$1(name || '', element && element._source, ownerName || '');
}

var ReactComponentTreeHook = {
  onSetChildren: function (id, nextChildIDs) {
    var item = getItem(id);
    !item ? invariant(false, 'Item must have been set') : void 0;
    item.childIDs = nextChildIDs;

    for (var i = 0; i < nextChildIDs.length; i++) {
      var nextChildID = nextChildIDs[i];
      var nextChild = getItem(nextChildID);
      !nextChild ? invariant(false, 'Expected hook events to fire for the child before its parent includes it in onSetChildren().') : void 0;
      !(nextChild.childIDs != null || typeof nextChild.element !== 'object' || nextChild.element == null) ? invariant(false, 'Expected onSetChildren() to fire for a container child before its parent includes it in onSetChildren().') : void 0;
      !nextChild.isMounted ? invariant(false, 'Expected onMountComponent() to fire for the child before its parent includes it in onSetChildren().') : void 0;
      if (nextChild.parentID == null) {
        nextChild.parentID = id;
        // TODO: This shouldn't be necessary but mounting a new root during in
        // componentWillMount currently causes not-yet-mounted components to
        // be purged from our tree data so their parent id is missing.
      }
      !(nextChild.parentID === id) ? invariant(false, 'Expected onBeforeMountComponent() parent and onSetChildren() to be consistent (%s has parents %s and %s).', nextChildID, nextChild.parentID, id) : void 0;
    }
  },
  onBeforeMountComponent: function (id, element, parentID) {
    var item = {
      element: element,
      parentID: parentID,
      text: null,
      childIDs: [],
      isMounted: false,
      updateCount: 0
    };
    setItem(id, item);
  },
  onBeforeUpdateComponent: function (id, element) {
    var item = getItem(id);
    if (!item || !item.isMounted) {
      // We may end up here as a result of setState() in componentWillUnmount().
      // In this case, ignore the element.
      return;
    }
    item.element = element;
  },
  onMountComponent: function (id) {
    var item = getItem(id);
    !item ? invariant(false, 'Item must have been set') : void 0;
    item.isMounted = true;
    var isRoot = item.parentID === 0;
    if (isRoot) {
      addRoot(id);
    }
  },
  onUpdateComponent: function (id) {
    var item = getItem(id);
    if (!item || !item.isMounted) {
      // We may end up here as a result of setState() in componentWillUnmount().
      // In this case, ignore the element.
      return;
    }
    item.updateCount++;
  },
  onUnmountComponent: function (id) {
    var item = getItem(id);
    if (item) {
      // We need to check if it exists.
      // `item` might not exist if it is inside an error boundary, and a sibling
      // error boundary child threw while mounting. Then this instance never
      // got a chance to mount, but it still gets an unmounting event during
      // the error boundary cleanup.
      item.isMounted = false;
      var isRoot = item.parentID === 0;
      if (isRoot) {
        removeRoot(id);
      }
    }
    unmountedIDs.push(id);
  },
  purgeUnmountedComponents: function () {
    if (ReactComponentTreeHook._preventPurging) {
      // Should only be used for testing.
      return;
    }

    for (var i = 0; i < unmountedIDs.length; i++) {
      var id = unmountedIDs[i];
      purgeDeep(id);
    }
    unmountedIDs.length = 0;
  },
  isMounted: function (id) {
    var item = getItem(id);
    return item ? item.isMounted : false;
  },
  getCurrentStackAddendum: function () {
    var info = '';
    var currentOwner = ReactCurrentOwner_1.current;
    if (currentOwner) {
      !(typeof currentOwner.tag !== 'number') ? invariant(false, 'Fiber owners should not show up in Stack stack traces.') : void 0;
      if (typeof currentOwner._debugID === 'number') {
        info += ReactComponentTreeHook.getStackAddendumByID(currentOwner._debugID);
      }
    }
    return info;
  },
  getStackAddendumByID: function (id) {
    var info = '';
    while (id) {
      info += describeID(id);
      id = ReactComponentTreeHook.getParentID(id);
    }
    return info;
  },
  getChildIDs: function (id) {
    var item = getItem(id);
    return item ? item.childIDs : [];
  },
  getDisplayName: function (id) {
    var element = ReactComponentTreeHook.getElement(id);
    if (!element) {
      return null;
    }
    return getDisplayName$1(element);
  },
  getElement: function (id) {
    var item = getItem(id);
    return item ? item.element : null;
  },
  getOwnerID: function (id) {
    var element = ReactComponentTreeHook.getElement(id);
    if (!element || !element._owner) {
      return null;
    }
    return element._owner._debugID;
  },
  getParentID: function (id) {
    var item = getItem(id);
    return item ? item.parentID : null;
  },
  getSource: function (id) {
    var item = getItem(id);
    var element = item ? item.element : null;
    var source = element != null ? element._source : null;
    return source;
  },
  getText: function (id) {
    var element = ReactComponentTreeHook.getElement(id);
    if (typeof element === 'string') {
      return element;
    } else if (typeof element === 'number') {
      return '' + element;
    } else {
      return null;
    }
  },
  getUpdateCount: function (id) {
    var item = getItem(id);
    return item ? item.updateCount : 0;
  },


  getRootIDs: getRootIDs,
  getRegisteredIDs: getItemIDs
};

var ReactComponentTreeHook_1 = ReactComponentTreeHook;

var createElement = ReactElement_1.createElement;
var createFactory = ReactElement_1.createFactory;
var cloneElement = ReactElement_1.cloneElement;

{
  var ReactElementValidator = ReactElementValidator_1;
  createElement = ReactElementValidator.createElement;
  createFactory = ReactElementValidator.createFactory;
  cloneElement = ReactElementValidator.cloneElement;
}

var React = {
  Children: {
    map: ReactChildren_1.map,
    forEach: ReactChildren_1.forEach,
    count: ReactChildren_1.count,
    toArray: ReactChildren_1.toArray,
    only: onlyChild_1
  },

  Component: ReactBaseClasses.Component,
  PureComponent: ReactBaseClasses.PureComponent,
  unstable_AsyncComponent: ReactBaseClasses.AsyncComponent,

  createElement: createElement,
  cloneElement: cloneElement,
  isValidElement: ReactElement_1.isValidElement,

  createFactory: createFactory,

  version: ReactVersion,

  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
    ReactCurrentOwner: ReactCurrentOwner_1,
    // Used by renderers to avoid bundling object-assign twice in UMD bundles:
    assign: objectAssign$1
  }
};

{
  objectAssign$1(React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, {
    // These should not be included in production.
    ReactComponentTreeHook: ReactComponentTreeHook_1,
    ReactDebugCurrentFrame: ReactDebugCurrentFrame_1
  });
}

var ReactEntry = React;

module.exports = ReactEntry;

})();
}


/***/ }),
/* 69 */
/***/ (function(module, exports) {

module.exports = require("object-assign");

/***/ }),
/* 70 */
/***/ (function(module, exports) {

module.exports = require("fbjs/lib/warning");

/***/ }),
/* 71 */
/***/ (function(module, exports) {

module.exports = require("fbjs/lib/emptyObject");

/***/ }),
/* 72 */
/***/ (function(module, exports) {

module.exports = require("fbjs/lib/invariant");

/***/ }),
/* 73 */
/***/ (function(module, exports) {

module.exports = require("fbjs/lib/emptyFunction");

/***/ }),
/* 74 */
/***/ (function(module, exports) {

module.exports = require("prop-types/checkPropTypes");

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterDom = __webpack_require__(3);

var _semanticUiReact = __webpack_require__(2);

var _Styles = __webpack_require__(76);

var _FromRedux = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Item = function Item(_ref) {
	var number = _ref.number;
	return _react2.default.createElement(
		_FromRedux.IssueByNumber,
		{ number: number },
		function (_ref2) {
			var issue = _ref2.issue;
			return _react2.default.createElement(
				_Styles.CustomGrid,
				{
					as: _reactRouterDom.Link,
					to: '/issue/' + number,
					divided: true,
					stackable: true
				},
				_react2.default.createElement(
					_semanticUiReact.Grid.Column,
					{
						width: 2,
						textAlign: 'center'
					},
					'#',
					issue.number
				),
				_react2.default.createElement(
					_semanticUiReact.Grid.Column,
					{ width: 10 },
					issue.title
				)
			);
		}
	);
};

Item.propTypes = {
	number: _propTypes2.default.number.isRequired
};

var _default = Item;
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(Item, 'Item', '/Users/Kidokeisuke/coiney/src/common/components/Issues/Content/Item.jsx');

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/Kidokeisuke/coiney/src/common/components/Issues/Content/Item.jsx');
}();

;

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.CustomGrid = undefined;

var _templateObject = _taggedTemplateLiteral(['\n\tcursor: pointer;\n\n\t&:hover {\n\t\tbackground-color: rgba(0,0,0,.05);\n\t\tcolor: rgba(0,0,0,.95);\n\t}\n'], ['\n\tcursor: pointer;\n\n\t&:hover {\n\t\tbackground-color: rgba(0,0,0,.05);\n\t\tcolor: rgba(0,0,0,.95);\n\t}\n']);

var _semanticUiReact = __webpack_require__(2);

var _styledComponents = __webpack_require__(7);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var CustomGrid = exports.CustomGrid = (0, _styledComponents2.default)(_semanticUiReact.Grid)(_templateObject);
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(CustomGrid, 'CustomGrid', '/Users/Kidokeisuke/coiney/src/common/components/Issues/Styles.jsx');
}();

;

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _FromRedux = __webpack_require__(5);

var _List = __webpack_require__(78);

var _List2 = _interopRequireDefault(_List);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Tabs = function Tabs(_ref) {
	var page = _ref.page;
	return _react2.default.createElement(
		_FromRedux.LastPage,
		null,
		function (_ref2) {
			var lastPage = _ref2.lastPage;
			return lastPage !== null && _react2.default.createElement(_List2.default, {
				currentPage: page,
				lastPage: lastPage
			});
		}
	);
};

Tabs.propTypes = {
	page: _propTypes2.default.number.isRequired
};

var _default = Tabs;
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(Tabs, 'Tabs', '/Users/Kidokeisuke/coiney/src/common/components/Issues/Navigation/index.jsx');

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/Kidokeisuke/coiney/src/common/components/Issues/Navigation/index.jsx');
}();

;

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _paginate = __webpack_require__(79);

var _paginate2 = _interopRequireDefault(_paginate);

var _semanticUiReact = __webpack_require__(2);

var _Link = __webpack_require__(27);

var _Link2 = _interopRequireDefault(_Link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var localEndpoint = function localEndpoint(page) {
	return '/issues?page=' + page;
};

var List = function List(_ref) {
	var currentPage = _ref.currentPage,
	    lastPage = _ref.lastPage;

	var labels = (0, _paginate2.default)(currentPage, lastPage);

	var Links = labels.map(function (label) {
		return _react2.default.createElement(
			_Link2.default,
			{
				key: Math.random(),
				active: currentPage === label,
				disabled: label === null,
				to: localEndpoint(label)
			},
			label || '...'
		);
	});

	return [_react2.default.createElement(
		_Link2.default,
		{
			key: 'previousPage',
			disabled: currentPage <= 1,
			to: localEndpoint(currentPage - 1)
		},
		_react2.default.createElement(_semanticUiReact.Icon, { name: 'left chevron' })
	), Links, _react2.default.createElement(
		_Link2.default,
		{
			key: 'nextPage',
			disabled: currentPage >= lastPage,
			to: localEndpoint(currentPage + 1)
		},
		_react2.default.createElement(_semanticUiReact.Icon, { name: 'right chevron' })
	)];
};

List.propTypes = {
	currentPage: _propTypes2.default.number.isRequired,
	lastPage: _propTypes2.default.number.isRequired
};

var _default = List;
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(localEndpoint, 'localEndpoint', '/Users/Kidokeisuke/coiney/src/common/components/Issues/Navigation/List.jsx');

	__REACT_HOT_LOADER__.register(List, 'List', '/Users/Kidokeisuke/coiney/src/common/components/Issues/Navigation/List.jsx');

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/Kidokeisuke/coiney/src/common/components/Issues/Navigation/List.jsx');
}();

;

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
/**
 * returns a range of consecutive numbers
 * @param {object} current Current page of pagination
 * @param {string} last Last page of pagination
 * @returns {array} An object consisting the start and end value of pagination
 */
var getRange = function getRange(current, last) {
	var startPage = void 0;
	var endPage = void 0;

	/* github pagination logic */
	if (last <= 8) {
		startPage = 1;
		endPage = last;
	} else if (current <= 6) {
		startPage = 1;
		endPage = 8;
	} else if (current + 5 >= last) {
		startPage = last - 7;
		endPage = last;
	} else {
		startPage = current - 2;
		endPage = current + 2;
	}

	return {
		startPage: startPage,
		endPage: endPage,
		length: 1 + (endPage - startPage)
	};
};

/**
 * returns an array of paginated labels based on github style pagination
 * @param {object} current Current page of pagination
 * @param {string} last Last page of pagination
 * @returns {array} An array which will be used to generate paginated component
 */
var getLabels = function getLabels(current, last) {
	var _getRange = getRange(current, last),
	    startPage = _getRange.startPage,
	    endPage = _getRange.endPage,
	    length = _getRange.length;

	var labels = [];

	if (startPage !== 1) {
		labels = labels.concat(1, 2, null);
	}

	for (var i = 0; i < length; i += 1) {
		labels.push(startPage + i);
	}

	if (endPage !== last) {
		labels = labels.concat(null, last - 1, last);
	}

	return labels;
};

var _default = getLabels;
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(getRange, "getRange", "/Users/Kidokeisuke/coiney/src/common/utils/paginate.js");

	__REACT_HOT_LOADER__.register(getLabels, "getLabels", "/Users/Kidokeisuke/coiney/src/common/utils/paginate.js");

	__REACT_HOT_LOADER__.register(_default, "default", "/Users/Kidokeisuke/coiney/src/common/utils/paginate.js");
}();

;

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _api = __webpack_require__(17);

var _reactRouterDom = __webpack_require__(3);

var _FromRedux = __webpack_require__(5);

var _View = __webpack_require__(81);

var _View2 = _interopRequireDefault(_View);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Issue = function Issue(_ref) {
	var match = _ref.match;
	var number = match.params.number;


	return _react2.default.createElement(
		_FromRedux.IssueByNumber,
		{ number: number },
		function (_ref2) {
			var issue = _ref2.issue;
			return issue ? _react2.default.createElement(_View2.default, { issue: issue }) : _react2.default.createElement(_reactRouterDom.Redirect, { to: '/' });
		}
	);
};

Issue.propTypes = {
	match: _propTypes2.default.objectOf(_propTypes2.default.any).isRequired
};

Issue.initialAction = function (url) {
	var index = url.search(/\/\d+/);
	var issueNumber = url.slice(index + 1);

	return (0, _api.requestIssue)(issueNumber || '');
};

var _default = Issue;
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(Issue, 'Issue', '/Users/Kidokeisuke/coiney/src/common/components/Issue/index.jsx');

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/Kidokeisuke/coiney/src/common/components/Issue/index.jsx');
}();

;

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _base = __webpack_require__(12);

var _Content = __webpack_require__(24);

var _Content2 = _interopRequireDefault(_Content);

var _Navigation = __webpack_require__(25);

var _Navigation2 = _interopRequireDefault(_Navigation);

var _Content3 = __webpack_require__(82);

var _Content4 = _interopRequireDefault(_Content3);

var _Navigation3 = __webpack_require__(89);

var _Navigation4 = _interopRequireDefault(_Navigation3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var View = function View(_ref) {
	var issue = _ref.issue;


	return _react2.default.createElement(
		_base.View,
		null,
		_react2.default.createElement(
			_Content2.default,
			null,
			_react2.default.createElement(_Content4.default, { issue: issue })
		),
		_react2.default.createElement(
			_Navigation2.default,
			null,
			_react2.default.createElement(_Navigation4.default, null)
		)
	);
};

View.propTypes = {
	issue: _propTypes2.default.objectOf(_propTypes2.default.any).isRequired
};

var _default = View;
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(View, 'View', '/Users/Kidokeisuke/coiney/src/common/components/Issue/View.jsx');

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/Kidokeisuke/coiney/src/common/components/Issue/View.jsx');
}();

;

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _semanticUiReact = __webpack_require__(2);

var _Article = __webpack_require__(83);

var _Article2 = _interopRequireDefault(_Article);

var _Title = __webpack_require__(88);

var _Title2 = _interopRequireDefault(_Title);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Content = function Content(_ref) {
	var issue = _ref.issue;
	var body = issue.body,
	    htmlUrl = issue.htmlUrl,
	    number = issue.number,
	    updatedAt = issue.updatedAt,
	    user = issue.user,
	    title = issue.title;


	return _react2.default.createElement(
		_semanticUiReact.Container,
		{
			text: true
		},
		_react2.default.createElement(_semanticUiReact.Divider, { hidden: true }),
		_react2.default.createElement(_Title2.default, {
			number: number,
			updatedAt: updatedAt,
			url: htmlUrl,
			title: title
		}),
		_react2.default.createElement(_semanticUiReact.Divider, null),
		_react2.default.createElement(_Article2.default, {
			source: body,
			user: user
		}),
		_react2.default.createElement(_semanticUiReact.Divider, null)
	);
};

Content.propTypes = {
	issue: _propTypes2.default.objectOf(_propTypes2.default.any).isRequired
};

var _default = Content;
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(Content, 'Content', '/Users/Kidokeisuke/coiney/src/common/components/Issue/Content/index.jsx');

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/Kidokeisuke/coiney/src/common/components/Issue/Content/index.jsx');
}();

;

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _semanticUiReact = __webpack_require__(2);

var _Styles = __webpack_require__(28);

var _Markdown = __webpack_require__(84);

var _Markdown2 = _interopRequireDefault(_Markdown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Article = function Article(_ref) {
	var source = _ref.source,
	    user = _ref.user;
	return _react2.default.createElement(
		'div',
		null,
		_react2.default.createElement(
			_Styles.User,
			null,
			_react2.default.createElement(_semanticUiReact.Icon, { name: 'user' }),
			_react2.default.createElement(
				'a',
				{ href: user.htmlUrl, target: 'blank' },
				user.login
			)
		),
		_react2.default.createElement(_Markdown2.default, { source: source })
	);
};

Article.propTypes = {
	source: _propTypes2.default.string.isRequired,
	user: _propTypes2.default.objectOf(_propTypes2.default.any).isRequired
};

var _default = Article;
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(Article, 'Article', '/Users/Kidokeisuke/coiney/src/common/components/Issue/Content/Article.jsx');

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/Kidokeisuke/coiney/src/common/components/Issue/Content/Article.jsx');
}();

;

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactMarkdown = __webpack_require__(85);

var _reactMarkdown2 = _interopRequireDefault(_reactMarkdown);

var _Url = __webpack_require__(86);

var _Url2 = _interopRequireDefault(_Url);

var _Code = __webpack_require__(87);

var _Code2 = _interopRequireDefault(_Code);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Markdown = function Markdown(_ref) {
	var source = _ref.source;
	return _react2.default.createElement(_reactMarkdown2.default, {
		source: source,
		renderers: {
			code: _Code2.default,
			image: _Url2.default
		}
	});
};

Markdown.propTypes = {
	source: _propTypes2.default.string.isRequired
};

var _default = Markdown;
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(Markdown, 'Markdown', '/Users/Kidokeisuke/coiney/src/common/components/Issue/Content/Markdown/index.jsx');

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/Kidokeisuke/coiney/src/common/components/Issue/Content/Markdown/index.jsx');
}();

;

/***/ }),
/* 85 */
/***/ (function(module, exports) {

module.exports = require("react-markdown");

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Url = function Url(_ref) {
	var value = _ref.value;
	return _react2.default.createElement(
		'a',
		{
			href: value,
			target: 'blank'
		},
		value
	);
};

Url.propTypes = {
	value: _propTypes2.default.string.isRequired
};

var _default = Url;
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(Url, 'Url', '/Users/Kidokeisuke/coiney/src/common/components/Issue/Content/Markdown/Url.jsx');

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/Kidokeisuke/coiney/src/common/components/Issue/Content/Markdown/Url.jsx');
}();

;

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Styles = __webpack_require__(28);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Code = function Code(_ref) {
	var value = _ref.value;
	return _react2.default.createElement(
		_Styles.Pre,
		null,
		_react2.default.createElement(
			'code',
			null,
			value
		)
	);
};

Code.propTypes = {
	value: _propTypes2.default.string.isRequired
};

var _default = Code;
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(Code, 'Code', '/Users/Kidokeisuke/coiney/src/common/components/Issue/Content/Markdown/Code.jsx');

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/Kidokeisuke/coiney/src/common/components/Issue/Content/Markdown/Code.jsx');
}();

;

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _semanticUiReact = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Content = function Content(_ref) {
	var number = _ref.number,
	    updatedAt = _ref.updatedAt,
	    url = _ref.url,
	    title = _ref.title;
	return _react2.default.createElement(
		'div',
		null,
		_react2.default.createElement(
			_semanticUiReact.Header,
			{ as: 'h2' },
			'Issue: #',
			number,
			_react2.default.createElement('br', null),
			title
		),
		_react2.default.createElement(
			_semanticUiReact.Header,
			{ sub: true },
			'Last Updated: ',
			updatedAt
		),
		_react2.default.createElement(
			'a',
			{ href: url, target: 'blank' },
			'Check it out on Github'
		)
	);
};

Content.propTypes = {
	number: _propTypes2.default.number.isRequired,
	updatedAt: _propTypes2.default.string.isRequired,
	url: _propTypes2.default.string.isRequired,
	title: _propTypes2.default.string.isRequired
};

var _default = Content;
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(Content, 'Content', '/Users/Kidokeisuke/coiney/src/common/components/Issue/Content/Title.jsx');

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/Kidokeisuke/coiney/src/common/components/Issue/Content/Title.jsx');
}();

;

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _FromRedux = __webpack_require__(5);

var _Link = __webpack_require__(27);

var _Link2 = _interopRequireDefault(_Link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Navigation = function Navigation() {
	return _react2.default.createElement(
		_FromRedux.CurrentPage,
		null,
		function (_ref) {
			var currentPage = _ref.currentPage;
			return _react2.default.createElement(
				_Link2.default,
				{ to: '/issues?page=' + currentPage },
				'Back to list'
			);
		}
	);
};

var _default = Navigation;
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(Navigation, 'Navigation', '/Users/Kidokeisuke/coiney/src/common/components/Issue/Navigation/index.jsx');

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/Kidokeisuke/coiney/src/common/components/Issue/Navigation/index.jsx');
}();

;

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _redux = __webpack_require__(18);

var _reduxDevtoolsExtension = __webpack_require__(91);

var _reduxLogger = __webpack_require__(92);

var _reduxThunk = __webpack_require__(93);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _api = __webpack_require__(94);

var _api2 = _interopRequireDefault(_api);

var _reducers = __webpack_require__(9);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var configureStore = function configureStore() {
	var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	var middlewares = [_api2.default, _reduxThunk2.default];
	var applyHandler = _redux.applyMiddleware;

	if (true) {
		middlewares.push((0, _reduxLogger.createLogger)({ collapsed: true }));
		applyHandler = (0, _reduxDevtoolsExtension.composeWithDevTools)(applyHandler);
	}

	var store = (0, _redux.createStore)(_reducers2.default, initialState, applyHandler.apply(undefined, middlewares));

	return store;
};

var _default = configureStore;
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(configureStore, 'configureStore', '/Users/Kidokeisuke/coiney/src/common/configureStore.js');

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/Kidokeisuke/coiney/src/common/configureStore.js');
}();

;

/***/ }),
/* 91 */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),
/* 92 */
/***/ (function(module, exports) {

module.exports = require("redux-logger");

/***/ }),
/* 93 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _fetch = __webpack_require__(10);

var fetchActions = _interopRequireWildcard(_fetch);

var _Reducers = __webpack_require__(9);

var _utils = __webpack_require__(95);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var apiMiddleware = function apiMiddleware(_ref) {
	var getState = _ref.getState;
	return function (next) {
		return function (action) {
			if (action.type === 'REQUEST_API') {
				var _action$payload = action.payload,
				    cache = _action$payload.cache,
				    endpoint = _action$payload.endpoint,
				    schema = _action$payload.schema,
				    onSuccess = _action$payload.onSuccess;


				var state = getState();
				console.log(endpoint, 'ENODIFJODIJFODIFJOSDIFJODSIFJOSIDJF');
				/* don't fetch if it already exists or in the middle of fetching */
				if (cache(state) || (0, _Reducers.getFetchStatus)(state, endpoint)) {
					return Promise.resolve();
				}

				next(fetchActions.requestFetch(endpoint));

				return (0, _utils2.default)(schema, endpoint).then(function (res) {
					next(onSuccess(res, endpoint));
					next(fetchActions.successFetch(endpoint));
				}, function (error) {
					return next(fetchActions.failureFetch(error, endpoint));
				});
			}

			return next(action);
		};
	};
};

var _default = apiMiddleware;
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(apiMiddleware, 'apiMiddleware', '/Users/Kidokeisuke/coiney/src/common/middleware/api.js');

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/Kidokeisuke/coiney/src/common/middleware/api.js');
}();

;

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _normalizr = __webpack_require__(22);

var _camelize = __webpack_require__(96);

var _camelize2 = _interopRequireDefault(_camelize);

var _axios = __webpack_require__(97);

var _axios2 = _interopRequireDefault(_axios);

var _parse = __webpack_require__(16);

var _parse2 = _interopRequireDefault(_parse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var empty = function empty(data) {
	return data === undefined || data === null || data.length === 0;
};

/**
* Gets last page of a pagination from the response object
* @param {object} response Api response
* @returns {number|null} last page of pagination
*/
var getLastPage = function getLastPage(response) {
	var link = response.headers.link;


	if (!link) {
		return null;
	}

	var split = link.split(',');

	return (0, _parse2.default)(split[1], 'page');
};

/**
 * Standardizes paginated Api fetch requests
 * Will camelize and extract next and last pages from response data
 * @param {object} schema Normalizr schema to convert response object
 * @param {string} endpoint Target Api endpoint
 * @returns {object|error} normalized response data
 */
var fetch = function fetch(schema, endpoint) {
	return _axios2.default.get(endpoint).then(function (response) {
		if (response.statusText.toUpperCase() !== 'OK') {
			return Promise.reject(new Error('The api fetch request returned a funky value'));
		}

		if (response.status !== 204 && empty(response.data)) {
			return Promise.reject(new Error('No such api endpoint'));
		}

		console.log(response, "DNFOISDFODIJFOSIDJFODIJFOSIDJFOIDSJFOIDSJFO");

		var last = getLastPage(response);
		var camelized = (0, _camelize2.default)(response.data);

		return Object.assign({}, (0, _normalizr.normalize)(camelized, schema), { last: last });
	});
};

var _default = fetch;
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(empty, 'empty', '/Users/Kidokeisuke/coiney/src/common/middleware/utils.js');

	__REACT_HOT_LOADER__.register(getLastPage, 'getLastPage', '/Users/Kidokeisuke/coiney/src/common/middleware/utils.js');

	__REACT_HOT_LOADER__.register(fetch, 'fetch', '/Users/Kidokeisuke/coiney/src/common/middleware/utils.js');

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/Kidokeisuke/coiney/src/common/middleware/utils.js');
}();

;

/***/ }),
/* 96 */
/***/ (function(module, exports) {

module.exports = require("camelize");

/***/ }),
/* 97 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(3);

var _routes = __webpack_require__(21);

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App() {
	var Routes = _routes2.default.map(function (route) {
		return _react2.default.createElement(_reactRouterDom.Route, _extends({ key: route.path }, route));
	});

	return _react2.default.createElement(
		_reactRouterDom.Switch,
		null,
		Routes,
		_react2.default.createElement(_reactRouterDom.Redirect, { from: '*', to: '/issues?page=1' })
	);
};

var _default = App;
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(App, 'App', '/Users/Kidokeisuke/coiney/src/common/App.jsx');

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/Kidokeisuke/coiney/src/common/App.jsx');
}();

;

/***/ })
/******/ ]);
//# sourceMappingURL=index.js.map