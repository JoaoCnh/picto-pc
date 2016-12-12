import React, { Component } from 'react';

import { NavAction, NavLink } from './NavButtons';

import styles from './Nav.css';

export default class Nav extends Component {
    _handleMenuToggle(event) {
        event.preventDefault();
        this.props.toggleMenu();
    }
    render() {
        let navCssClass = this.props.active ? `${styles.pictoNav} ${styles.visible}` : styles.pictoNav;

        return (
            <nav className={navCssClass}>
                <a className={styles.pictoNavTrigger} href="#"
                    onClick={this._handleMenuToggle.bind(this)}>
                    Menu
                    <span aria-hidden="true"></span>
                </a>

                <ul>
                    <NavLink currentRoute={this.props.route} title="Home" icon="home" route="/" />
                    <NavLink currentRoute={this.props.route} title="Profile" icon="user-circle-o"
                        route="/profile" />
                    <NavAction callback={this.props.logout} title="Logout" icon="sign-out" />
                </ul>

                <span aria-hidden="true" className={styles.pictoNavBg}></span>
            </nav>
        );
    }
}