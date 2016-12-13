// @flow
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as AppActions from '../../actions/app';

import Achievements from '../../components/profile/Achievements';

function mapStateToProps(state, ownProps) {
    return {
        app: state.app,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(AppActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Achievements);