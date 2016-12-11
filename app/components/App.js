import React, { Component } from 'react';

import Nav from './layout/Nav';

export default class App extends Component {
    _toggleMenu() {
        this.props.toggleMenu();
    }

    render() {
        return (
            <div>
                <Nav route={this.props.router.location.pathname}
                    active={this.props.app.isMenuActive}
                    toggleMenu={this._toggleMenu.bind(this)} />

                {this.props.children}
            </div>
        );
    }
}