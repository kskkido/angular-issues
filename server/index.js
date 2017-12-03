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

exports.default = reducerCreator;

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
exports.default = (0, _redux.combineReducers)({
	fetch: fromFetch.default,
	issues: fromIssues.default
});

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

exports.default = parse;

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

exports.default = actionCreator;

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

var _Issue = __webpack_require__(78);

var _Issue2 = _interopRequireDefault(_Issue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = [{
	path: '/issues',
	component: _Issues2.default
}, {
	path: '/issue/:number',
	component: _Issue2.default
}];

exports.default = routes;

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

exports.default = Content;

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

/* used as navigation view component */
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

exports.default = Navigation;

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

exports.default = Overlay;

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

/* custom link used in navigation components */
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

exports.default = SemanticLink;

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

var PATH_STATIC = (0, _path.join)(_Root.root, '/dist');

exports.default = app.use(_dev2.default).use(_bodyParser2.default.urlencoded({ extended: false })).use(_bodyParser2.default.json()).use('/dist', _express2.default.static(PATH_STATIC)).get('/', function (req, res) {
	res.redirect('/issues?page=1');
}).get('*', _ssr2.default).use(function (err, req, res) {
	console.error(err, req.url);
	res.status(err.status || 500).send(err.message || 'Internal server error');
});


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
	"engine": {
		"yarn": "0.24.6"
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

var _express = __webpack_require__(13);

var _express2 = _interopRequireDefault(_express);

var _Root = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable global-require */
var router = _express2.default.Router();

exports.default = _Root.env.NODE_ENV === 'development' ? router.use(__webpack_require__(35).default).use(__webpack_require__(45)('dev')).use(function (req, res, next) {
	__webpack_require__(46).install();
	next();
}) : function (req, res, next) {
	return next();
};

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _express = __webpack_require__(13);

var _express2 = _interopRequireDefault(_express);

var _webpack = __webpack_require__(14);

var _webpack2 = _interopRequireDefault(_webpack);

var _webpackDevMiddleware = __webpack_require__(36);

var _webpackDevMiddleware2 = _interopRequireDefault(_webpackDevMiddleware);

var _webpackHotMiddleware = __webpack_require__(37);

var _webpackHotMiddleware2 = _interopRequireDefault(_webpackHotMiddleware);

var _webpack3 = __webpack_require__(38);

var _webpack4 = _interopRequireDefault(_webpack3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();
// webpack config is an array, [0: clientConfig, 1: serverConfig]
var clientConfig = _webpack4.default[0];
var compiler = (0, _webpack2.default)(clientConfig);

exports.default = router.use((0, _webpackDevMiddleware2.default)(compiler, {
	noInfo: true,
	publicPath: clientConfig.output.publicPath
})).use((0, _webpackHotMiddleware2.default)(compiler, {
	quiet: true
}));

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = require("webpack-dev-middleware");

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = require("webpack-hot-middleware");

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(39);

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(4),
    env = _require.env;

var clientConfig = __webpack_require__(40);
var serverConfig = __webpack_require__(42);
var applyBaseConfig = __webpack_require__(44)(env);

module.exports = [clientConfig, serverConfig].map(applyBaseConfig);

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var webpack = __webpack_require__(14);
var merge = __webpack_require__(15);
var CompressionPlugin = __webpack_require__(41);

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
		filename: 'bundle.js',
		publicPath: 'dist/'
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

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = require("compression-webpack-plugin");

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var nodeExternals = __webpack_require__(43);
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
	node: {
		__dirname: false,
		__filename: false
	},
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

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = require("webpack-node-externals");

/***/ }),
/* 44 */
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

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = require("morgan");

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = require("source-map-support");

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

var _configureStore = __webpack_require__(88);

var _configureStore2 = _interopRequireDefault(_configureStore);

var _App = __webpack_require__(96);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createHtml = function createHtml(_ref) {
	var css = _ref.css,
	    initialState = _ref.initialState,
	    markup = _ref.markup;

	var serializedState = (0, _serializeJavascript2.default)(initialState);

	return '\n\t<!DOCTYPE html>\n\t<html>\n\t\t<head>\n\t\t\t<meta name="viewport" content="width=device-width, initial-scale=1">\n\t\t\t<link href="https://fonts.googleapis.com/css?family=Open+Sans:300|Roboto" rel="stylesheet">\n\t\t\t<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"></link>\n\t\t\t<script src="dist/bundle.js" defer></script>\n\t\t\t<script>window.__INITIAL_STATE__=' + serializedState + '</script>\n\t\t\t' + css + '\n\t\t\t<title>angular-issues</title>\n\t\t</head>\n\t\t<body>\n\t\t\t<div id="app">' + markup + '</div>\n\t\t</body>\n\t</html>\n\t';
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

var renderHtml = function renderHtml(req, res, next) {
	var store = (0, _configureStore2.default)();
	var promises = dispatchInitialActions(store, req);

	if (promises.length === 0) {
		res.status(404).send('Not found');
		return null;
	}

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
	}).catch(next);
};

exports.default = renderHtml;

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

/* redirects to root if query does not contain page property */
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

	return (0, _api.requestPage)(page || 1);
};

exports.default = Issues;

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

exports.default = reducer;

/* GETTERS */

var getError = exports.getError = function getError(state, endpoint) {
	return fromEndpoint.getError(state[endpoint]);
};
var getStatus = exports.getStatus = function getStatus(state, endpoint) {
	return fromEndpoint.getStatus(state[endpoint]);
};

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

exports.default = reducer;

/* GETTERS */

var getError = exports.getError = function getError(state) {
	return state && state.error;
};
var getStatus = exports.getStatus = function getStatus(state) {
	return state && state.status;
};

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

exports.default = reducer;

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

exports.default = reducer;

/* GETTERS */

var getItemsByPage = exports.getItemsByPage = function getItemsByPage(state, page) {
	return state[page];
};

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

exports.default = reducer;

/* GETTERS */

var getItemById = exports.getItemById = function getItemById(state, id) {
	return state[id];
};

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

exports.default = reducer;

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

exports.default = apiActionCreator;

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

var _Navigation3 = __webpack_require__(75);

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

exports.default = View;

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

exports.default = Global;

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

var Content = function Content(_ref) {
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

Content.propTypes = {
	page: _propTypes2.default.number.isRequired
};

exports.default = Content;

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

exports.default = withRedux;

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

var _Item = __webpack_require__(73);

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
		{
			key: 'header',
			as: 'h3',
			attached: 'top'
		},
		'Whats wrong with Angular'
	), _react2.default.createElement(
		_Fetch2.default,
		{
			key: 'fetch',
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

exports.default = List;

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
exports.default = Fetch;

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
exports.default = Load;

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

exports.default = ErrorMessage;

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(68);
} else {
  module.exports = require('./cjs/react.development.js');
}


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 React v16.0.0
 react.production.min.js

 Copyright (c) 2013-present, Facebook, Inc.

 This source code is licensed under the MIT license found in the
 LICENSE file in the root directory of this source tree.
*/
var f=__webpack_require__(69),p=__webpack_require__(70);__webpack_require__(71);var r=__webpack_require__(72);
function t(a){for(var b=arguments.length-1,d="Minified React error #"+a+"; visit http://facebook.github.io/react/docs/error-decoder.html?invariant\x3d"+a,e=0;e<b;e++)d+="\x26args[]\x3d"+encodeURIComponent(arguments[e+1]);b=Error(d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings.");b.name="Invariant Violation";b.framesToPop=1;throw b;}
var u={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}};function v(a,b,d){this.props=a;this.context=b;this.refs=p;this.updater=d||u}v.prototype.isReactComponent={};v.prototype.setState=function(a,b){"object"!==typeof a&&"function"!==typeof a&&null!=a?t("85"):void 0;this.updater.enqueueSetState(this,a,b,"setState")};v.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};
function w(a,b,d){this.props=a;this.context=b;this.refs=p;this.updater=d||u}function x(){}x.prototype=v.prototype;var y=w.prototype=new x;y.constructor=w;f(y,v.prototype);y.isPureReactComponent=!0;function z(a,b,d){this.props=a;this.context=b;this.refs=p;this.updater=d||u}var A=z.prototype=new x;A.constructor=z;f(A,v.prototype);A.unstable_isAsyncReactComponent=!0;A.render=function(){return this.props.children};
var B={Component:v,PureComponent:w,AsyncComponent:z},C={current:null},D=Object.prototype.hasOwnProperty,E="function"===typeof Symbol&&Symbol["for"]&&Symbol["for"]("react.element")||60103,F={key:!0,ref:!0,__self:!0,__source:!0};function G(a,b,d,e,c,g,k){return{$$typeof:E,type:a,key:b,ref:d,props:k,_owner:g}}
G.createElement=function(a,b,d){var e,c={},g=null,k=null,m=null,q=null;if(null!=b)for(e in void 0!==b.ref&&(k=b.ref),void 0!==b.key&&(g=""+b.key),m=void 0===b.__self?null:b.__self,q=void 0===b.__source?null:b.__source,b)D.call(b,e)&&!F.hasOwnProperty(e)&&(c[e]=b[e]);var l=arguments.length-2;if(1===l)c.children=d;else if(1<l){for(var h=Array(l),n=0;n<l;n++)h[n]=arguments[n+2];c.children=h}if(a&&a.defaultProps)for(e in l=a.defaultProps,l)void 0===c[e]&&(c[e]=l[e]);return G(a,g,k,m,q,C.current,c)};
G.createFactory=function(a){var b=G.createElement.bind(null,a);b.type=a;return b};G.cloneAndReplaceKey=function(a,b){return G(a.type,b,a.ref,a._self,a._source,a._owner,a.props)};
G.cloneElement=function(a,b,d){var e=f({},a.props),c=a.key,g=a.ref,k=a._self,m=a._source,q=a._owner;if(null!=b){void 0!==b.ref&&(g=b.ref,q=C.current);void 0!==b.key&&(c=""+b.key);if(a.type&&a.type.defaultProps)var l=a.type.defaultProps;for(h in b)D.call(b,h)&&!F.hasOwnProperty(h)&&(e[h]=void 0===b[h]&&void 0!==l?l[h]:b[h])}var h=arguments.length-2;if(1===h)e.children=d;else if(1<h){l=Array(h);for(var n=0;n<h;n++)l[n]=arguments[n+2];e.children=l}return G(a.type,c,g,k,m,q,e)};
G.isValidElement=function(a){return"object"===typeof a&&null!==a&&a.$$typeof===E};var H="function"===typeof Symbol&&Symbol.iterator,I="function"===typeof Symbol&&Symbol["for"]&&Symbol["for"]("react.element")||60103;function escape(a){var b={"\x3d":"\x3d0",":":"\x3d2"};return"$"+(""+a).replace(/[=:]/g,function(a){return b[a]})}var J=/\/+/g,K=[];
function L(a,b,d,e){if(K.length){var c=K.pop();c.result=a;c.keyPrefix=b;c.func=d;c.context=e;c.count=0;return c}return{result:a,keyPrefix:b,func:d,context:e,count:0}}function M(a){a.result=null;a.keyPrefix=null;a.func=null;a.context=null;a.count=0;10>K.length&&K.push(a)}
function N(a,b,d,e){var c=typeof a;if("undefined"===c||"boolean"===c)a=null;if(null===a||"string"===c||"number"===c||"object"===c&&a.$$typeof===I)return d(e,a,""===b?"."+O(a,0):b),1;var g=0;b=""===b?".":b+":";if(Array.isArray(a))for(var k=0;k<a.length;k++){c=a[k];var m=b+O(c,k);g+=N(c,m,d,e)}else if(m=H&&a[H]||a["@@iterator"],"function"===typeof m)for(a=m.call(a),k=0;!(c=a.next()).done;)c=c.value,m=b+O(c,k++),g+=N(c,m,d,e);else"object"===c&&(d=""+a,t("31","[object Object]"===d?"object with keys {"+
Object.keys(a).join(", ")+"}":d,""));return g}function O(a,b){return"object"===typeof a&&null!==a&&null!=a.key?escape(a.key):b.toString(36)}function P(a,b){a.func.call(a.context,b,a.count++)}function Q(a,b,d){var e=a.result,c=a.keyPrefix;a=a.func.call(a.context,b,a.count++);Array.isArray(a)?R(a,e,d,r.thatReturnsArgument):null!=a&&(G.isValidElement(a)&&(a=G.cloneAndReplaceKey(a,c+(!a.key||b&&b.key===a.key?"":(""+a.key).replace(J,"$\x26/")+"/")+d)),e.push(a))}
function R(a,b,d,e,c){var g="";null!=d&&(g=(""+d).replace(J,"$\x26/")+"/");b=L(b,g,e,c);null==a||N(a,"",Q,b);M(b)}var S={forEach:function(a,b,d){if(null==a)return a;b=L(null,null,b,d);null==a||N(a,"",P,b);M(b)},map:function(a,b,d){if(null==a)return a;var e=[];R(a,e,null,b,d);return e},count:function(a){return null==a?0:N(a,"",r.thatReturnsNull,null)},toArray:function(a){var b=[];R(a,b,null,r.thatReturnsArgument);return b}};
module.exports={Children:{map:S.map,forEach:S.forEach,count:S.count,toArray:S.toArray,only:function(a){G.isValidElement(a)?void 0:t("143");return a}},Component:B.Component,PureComponent:B.PureComponent,unstable_AsyncComponent:B.AsyncComponent,createElement:G.createElement,cloneElement:G.cloneElement,isValidElement:G.isValidElement,createFactory:G.createFactory,version:"16.0.0",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentOwner:C,assign:f}};


/***/ }),
/* 69 */
/***/ (function(module, exports) {

module.exports = require("object-assign");

/***/ }),
/* 70 */
/***/ (function(module, exports) {

module.exports = require("fbjs/lib/emptyObject");

/***/ }),
/* 71 */
/***/ (function(module, exports) {

module.exports = require("fbjs/lib/invariant");

/***/ }),
/* 72 */
/***/ (function(module, exports) {

module.exports = require("fbjs/lib/emptyFunction");

/***/ }),
/* 73 */
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

var _Styles = __webpack_require__(74);

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

exports.default = Item;

/***/ }),
/* 74 */
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

var _FromRedux = __webpack_require__(5);

var _List = __webpack_require__(76);

var _List2 = _interopRequireDefault(_List);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* redirects to root if query does not contain page property */
var Navigation = function Navigation(_ref) {
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

Navigation.propTypes = {
	page: _propTypes2.default.number.isRequired
};

exports.default = Navigation;

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _paginate = __webpack_require__(77);

var _paginate2 = _interopRequireDefault(_paginate);

var _semanticUiReact = __webpack_require__(2);

var _Link = __webpack_require__(27);

var _Link2 = _interopRequireDefault(_Link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var localEndpoint = function localEndpoint(page) {
	return '/issues?page=' + page;
}; /* eslint-disable react/no-array-index-key */


var List = function List(_ref) {
	var currentPage = _ref.currentPage,
	    lastPage = _ref.lastPage;

	var labels = (0, _paginate2.default)(currentPage, lastPage);

	var Links = labels.map(function (label, i) {
		return _react2.default.createElement(
			_Link2.default,
			{
				key: label + '_' + i,
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

exports.default = List;

/***/ }),
/* 77 */
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

exports.default = getLabels;

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

var _api = __webpack_require__(17);

var _reactRouterDom = __webpack_require__(3);

var _FromRedux = __webpack_require__(5);

var _View = __webpack_require__(79);

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

exports.default = Issue;

/***/ }),
/* 79 */
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

var _Content3 = __webpack_require__(80);

var _Content4 = _interopRequireDefault(_Content3);

var _Navigation3 = __webpack_require__(87);

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

exports.default = View;

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

var _semanticUiReact = __webpack_require__(2);

var _Article = __webpack_require__(81);

var _Article2 = _interopRequireDefault(_Article);

var _Title = __webpack_require__(86);

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
		_react2.default.createElement(_semanticUiReact.Divider, { section: true })
	);
};

Content.propTypes = {
	issue: _propTypes2.default.objectOf(_propTypes2.default.any).isRequired
};

exports.default = Content;

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

var _semanticUiReact = __webpack_require__(2);

var _Styles = __webpack_require__(28);

var _Markdown = __webpack_require__(82);

var _Markdown2 = _interopRequireDefault(_Markdown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Article = function Article(_ref) {
	var source = _ref.source,
	    user = _ref.user;
	return [_react2.default.createElement(
		_Styles.User,
		{ key: 'user_label' },
		_react2.default.createElement(_semanticUiReact.Icon, { name: 'user' }),
		_react2.default.createElement(
			'a',
			{ href: user.htmlUrl, target: 'blank' },
			user.login
		)
	), _react2.default.createElement(_Markdown2.default, {
		key: 'markdown',
		source: source
	})];
};

Article.propTypes = {
	source: _propTypes2.default.string.isRequired,
	user: _propTypes2.default.objectOf(_propTypes2.default.any).isRequired
};

exports.default = Article;

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

var _reactMarkdown = __webpack_require__(83);

var _reactMarkdown2 = _interopRequireDefault(_reactMarkdown);

var _Url = __webpack_require__(84);

var _Url2 = _interopRequireDefault(_Url);

var _Code = __webpack_require__(85);

var _Code2 = _interopRequireDefault(_Code);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* parses jekyll into pure react components */
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

exports.default = Markdown;

/***/ }),
/* 83 */
/***/ (function(module, exports) {

module.exports = require("react-markdown");

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* helper used to render links in react markdown */
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

exports.default = Url;

/***/ }),
/* 85 */
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

/* helper used to render code blocks in react markdown */
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

exports.default = Code;

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

exports.default = Content;

/***/ }),
/* 87 */
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

exports.default = Navigation;

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _redux = __webpack_require__(18);

var _reduxDevtoolsExtension = __webpack_require__(89);

var _reduxLogger = __webpack_require__(90);

var _reduxThunk = __webpack_require__(91);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _api = __webpack_require__(92);

var _api2 = _interopRequireDefault(_api);

var _reducers = __webpack_require__(9);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var configureStore = function configureStore() {
	var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	var middlewares = [_api2.default, _reduxThunk2.default];
	var applyHandler = _redux.applyMiddleware;

	if (false) {
		middlewares.push((0, _reduxLogger.createLogger)({ collapsed: true }));
		applyHandler = (0, _reduxDevtoolsExtension.composeWithDevTools)(applyHandler);
	}

	var store = (0, _redux.createStore)(_reducers2.default, initialState, applyHandler.apply(undefined, middlewares));

	return store;
};

exports.default = configureStore;

/***/ }),
/* 89 */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),
/* 90 */
/***/ (function(module, exports) {

module.exports = require("redux-logger");

/***/ }),
/* 91 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _fetch = __webpack_require__(10);

var fetchActions = _interopRequireWildcard(_fetch);

var _Reducers = __webpack_require__(9);

var _utils = __webpack_require__(93);

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

exports.default = apiMiddleware;

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _normalizr = __webpack_require__(22);

var _camelize = __webpack_require__(94);

var _camelize2 = _interopRequireDefault(_camelize);

var _axios = __webpack_require__(95);

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

		var last = getLastPage(response);
		var camelized = (0, _camelize2.default)(response.data);

		return Object.assign({}, (0, _normalizr.normalize)(camelized, schema), { last: last });
	});
};

exports.default = fetch;

/***/ }),
/* 94 */
/***/ (function(module, exports) {

module.exports = require("camelize");

/***/ }),
/* 95 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 96 */
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

exports.default = App;

/***/ })
/******/ ]);