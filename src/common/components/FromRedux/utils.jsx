import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

/**
 * Extract a component's _meta object and optional key.
 * Handles literal _meta objects, classes with _meta, objects with _meta
 * @param {object} props Component props
 * @returns {object|function} returns component by passing props to children as parameters
 */
const RenderProps = ({ children, ...props }) =>
	children(props)

RenderProps.propTypes = {
	children: PropTypes.func.isRequired
}

/**
 * Same interface as connect, but returns function as children components
 * @param {function|object} mapStateToProps An object or a function that returns an object
 * @param {function|object} mapDispatchToProps An object or a function that returns an object
 * @returns {function} A react element that passes redux props to children as parameters
 */
const withRedux = (mapStateToProps, mapDispatchToProps) =>
	connect(mapStateToProps, mapDispatchToProps)(RenderProps)

export default withRedux
