// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';

import styles from './Auth.css';

export default class AuthError extends Component {
    render() {
        return (
            <div className={styles.authError}>
                <ul>
                    <li>{this.props.errorMessage}</li>
                </ul>
            </div>
        );
    }
}
