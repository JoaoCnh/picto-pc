// @flow
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as LoginActions from '../actions/auth/login';

import Login from '../components/auth/Login';

function mapStateToProps(state, ownProps) {
    return {
        login: state.login,
        router: ownProps.router,
    };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(LoginActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);