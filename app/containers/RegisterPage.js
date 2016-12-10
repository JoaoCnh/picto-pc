// @flow
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as RegisterActions from '../actions/auth/register';

import Register from '../components/auth/Register';

function mapStateToProps(state, ownProps) {
    return {
        register: state.register,
        router: ownProps.router,
    };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(RegisterActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);