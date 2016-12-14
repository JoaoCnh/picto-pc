import React, { Component } from 'react';

import Nav from './layout/Nav';
import BubbleWrap from './common/BubbleWrap';

import AuthAPI from '../api/auth';
import batteryUtils from '../utils/battery';

export default class App extends Component {
    _logout() {
        this.props.logout();
        return this.props.push("/auth/login");
    }

    componentWillMount() {
        if (!AuthAPI.isAuthenticated()) {
            return this.props.push("/auth/login");
        }

        batteryUtils.setup(this.props.batteryLevelChanged);
    }

    render() {
        return (
            <BubbleWrap>
                <Nav route={this.props.location.pathname}
                    active={this.props.app.isMenuActive}
                    batteryLevel={this.props.app.batteryLevel}
                    toggleMenu={this.props.toggleMenu}
                    logout={this._logout.bind(this)} />

                {this.props.children}
            </BubbleWrap>
        );
    }
}