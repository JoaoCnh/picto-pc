// @flow
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import AppContainer from './containers/AppContainer';
import HomePage from './containers/HomePage';
import ProfilePage from './containers/ProfilePage';
import LoginPage from './containers/LoginPage';
import RegisterPage from './containers/RegisterPage';

export default (
    <Route path="/" component={AppContainer}>
        <IndexRoute component={HomePage} />

        <Route path="profile" component={ProfilePage} />

        <Route path="auth/login" component={LoginPage} />
        <Route path="auth/register" component={RegisterPage} />
    </Route>
);
