// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Home.css';
import loaderStyles from './AppLoader.css';

import AppLoader from './AppLoader';

import AuthAPI from '../api/auth';

export default class Home extends Component {
    componentWillMount() {
        if (!AuthAPI.isAuthenticated()) {
            return this.props.router.push('/auth/login');
        }

        this.props.startAppLoading();

        setTimeout(() => {
            this.props.stopAppLoading();
        }, 5000);
    }

    render() {
        let loadClassName = this.props.app.isLoadingApp ? "loading" : loaderStyles.loaded;

        return (
            <div className={loadClassName}>
                <AppLoader />

                <div className={styles.container}>
                    <h1>Olá ELECTRON</h1>
                </div>
            </div>
        );
    }
}
