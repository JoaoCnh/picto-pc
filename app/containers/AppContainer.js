// @flow
import React, { Component, PropTypes } from 'react';
// @flow
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as AppActions from '../actions/app';

import App from '../components/App';

function mapStateToProps(state, ownProps) {
    return {
        app: state.app,
        router: ownProps.router,
    };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(AppActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
