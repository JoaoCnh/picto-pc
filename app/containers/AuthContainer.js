// @flow
import React, { Component, PropTypes } from 'react';
// @flow
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Auth from '../../components/auth/Auth';

function mapStateToProps(state, ownProps) {
    return {
        router: ownProps.router,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
