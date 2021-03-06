// @flow
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { routerActions } from 'react-router-redux';

import * as AppActions from '../../actions/app';

import Profile from '../../components/profile/Profile';

function mapStateToProps(state, ownProps) {
    return {
        app: state.app,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ ...routerActions, ...AppActions }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);