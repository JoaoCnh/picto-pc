// @flow
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { routerActions } from 'react-router-redux';

import * as AppActions from '../actions/app';
import * as ChatActions from '../actions/chat';

import Home from '../components/Home';

function mapStateToProps(state, ownProps) {
    return {
        app: state.app,
        chat: state.chat,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        ...routerActions,
        ...AppActions,
        ...ChatActions
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);