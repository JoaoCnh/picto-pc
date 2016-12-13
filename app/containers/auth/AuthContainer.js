// @flow
import React, { Component, PropTypes } from 'react';
// @flow
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { routerActions } from 'react-router-redux';

import Auth from '../../components/auth/Auth';

function mapStateToProps(state, ownProps) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(routerActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
