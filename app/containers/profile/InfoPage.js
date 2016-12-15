// @flow
import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { routerActions } from "react-router-redux";

import * as InfoActions from "../../actions/profile/info";

import Info from "../../components/profile/Info";

function mapStateToProps(state, ownProps) {
    return {
        info: state.info,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ ...routerActions, ...InfoActions }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Info);