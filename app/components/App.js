import React, { Component } from 'react';

import Nav from './layout/Nav';

export default class App extends Component {
    _logout() {
        this.props.logout();
        return this.props.push("/auth/login");
    }

    render() {
        return (
            <div>
                <Nav route={this.props.location.pathname}
                    active={this.props.app.isMenuActive}
                    toggleMenu={this.props.toggleMenu}
                    logout={this._logout.bind(this)} />

                {this.props.children}
            </div>
        );
    }
}