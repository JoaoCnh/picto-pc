import React, { Component } from 'react';

import AuthBubbles from './AuthBubbles';

import styles from './Auth.css';

import AuthAPI from '../../api/auth';

export default class Auth extends Component {
    componentWillMount() {
        if (AuthAPI.isAuthenticated()) {
            return this.props.push("/");
        }
    }

    render() {
        return (
            <div className={styles.authWrapper}>
                {this.props.children}
                <AuthBubbles />
            </div>
        );
    }
}