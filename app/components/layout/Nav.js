import React, { Component } from 'react';

import { NavAction, NavLink, NavStub } from './NavButtons';

import styles from './Nav.css';

export default class Nav extends Component {
    _handleMenuToggle(event) {
        event.preventDefault();
        this.props.toggleMenu();
    }

    shouldComponentUpdate(nextProps) {
        // Because I don't want to render the nav again just because the battery changed and it was closed.
        return this.props.active || this.props.active !== nextProps.active;
    }

    _renderBattery(batteryLevel) {
        if (batteryLevel === 0) {
            return (<i className="fa fa-battery-empty"></i>);
        } else if (batteryLevel <= 0.25) {
            return (<i className="fa fa-battery-quarter"></i>);
        } else if (batteryLevel >= 0.25 && batteryLevel <= 0.5) {
            return (<i className="fa fa-battery-half"></i>);
        } else if (batteryLevel >= 0.5 && batteryLevel <= 0.75) {
            return (<i className="fa fa-battery-half"></i>);
        } else {
            return (<i className="fa fa-battery-full"></i>);
        }
    }

    render() {
        let navCssClass = this.props.active ? `${styles.pictoNav} ${styles.visible}` : styles.pictoNav;

        let batteryComp = null;

        let batteryIcon = this._renderBattery(this.props.batteryLevel);

        return (
            <nav className={navCssClass}>
                <a className={styles.pictoNavTrigger} href="#"
                    onClick={this._handleMenuToggle.bind(this)}>
                    Menu
                    <span aria-hidden="true"></span>
                </a>

                <ul>
                    <NavStub text={`${this.props.batteryLevel * 100} %`}>
                        {batteryIcon}
                    </NavStub>
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