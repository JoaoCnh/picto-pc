// @flow
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { routerActions } from 'react-router-redux';

import * as RegisterActions from '../../actions/auth/register';

import Register from '../../components/auth/Register';

function mapStateToProps(state, ownProps) {
    return {
        register: state.register,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ ...routerActions, ...RegisterActions}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);