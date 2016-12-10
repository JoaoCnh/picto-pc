// @flow
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as AppActions from '../actions/app';

import Home from '../components/Home';

function mapStateToProps(state, ownProps) {
    return {
        app: state.app,
        router: ownProps.router,
    };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(AppActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);