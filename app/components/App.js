import React, { Component } from 'react';

import Nav from './layout/Nav';
import BubbleWrap from './common/BubbleWrap';

import AuthAPI from '../api/auth';

export default class App extends Component {
    _logout() {
        this.props.logout();
        return this.props.push("/auth/login");
    }

    componentWillMount() {
        if (!AuthAPI.isAuthenticated()) {
            return this.props.push("/auth/login");
        }
    }

    render() {
        return (
            <BubbleWrap>
                <Nav route={this.props.location.pathname}
                    active={this.props.app.isMenuActive}
                    toggleMenu={this.props.toggleMenu}
                    logout={this._logout.bind(this)} />

                {this.props.children}
            </BubbleWrap>
        );
    }
}