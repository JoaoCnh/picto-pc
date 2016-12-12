import React, { Component } from 'react';
import { Link } from 'react-router';

import styles from './Nav.css';

export class NavLink extends Component {
    render() {
        let isActive = this.props.currentRoute === this.props.route;
        let linkStyle = isActive ? styles.active : "";

        return (
            <li>
                <Link to={this.props.route} className={linkStyle}>
                    <span>{this.props.title}</span>
                    <i className={`fa fa-${this.props.icon}`}></i>
                </Link>
            </li>
        );
    }
}

export class NavAction extends Component {
    render() {
        return (
            <li>
                <a href="#" onClick={this.props.callback}>
                    <span>{this.props.title}</span>
                    <i className={`fa fa-${this.props.icon}`}></i>
                </a>
            </li>
        );
    }
}