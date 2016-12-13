// @flow
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { routerActions } from 'react-router-redux';

import * as LoginActions from '../../actions/auth/login';

import Login from '../../components/auth/Login';

function mapStateToProps(state, ownProps) {
    return {
        login: state.login,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ ...routerActions, ...LoginActions}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);