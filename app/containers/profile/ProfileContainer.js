// @flow
import React, { Component, PropTypes } from 'react';
// @flow
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { routerActions } from 'react-router-redux';

import * as AppActions from '../../actions/app';

import BubbleWrap from '../../components/common/BubbleWrap';

function mapStateToProps(state, ownProps) {
    return {
        app: state.app,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ ...routerActions, ...AppActions}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BubbleWrap);
