import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

/* converst connect hoc into function as children */
const RenderProps = ({ children, ...props }) =>
	children(props)

RenderProps.propTypes = {
	children: PropTypes.func.isRequired
}

const withRedux = (mapStateToProps, mapDispatchToProps) =>
	connect(mapStateToProps, mapDispatchToProps)(RenderProps)

export default withRedux
