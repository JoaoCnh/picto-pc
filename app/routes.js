// @flow
import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import AppContainer from './containers/AppContainer';
import AuthContainer from './containers/auth/AuthContainer';

import HomePage from './containers/HomePage';
import ProfilePage from './containers/ProfilePage';
import LoginPage from './containers/auth/LoginPage';
import RegisterPage from './containers/auth/RegisterPage';

export default (
    <Router>
        <Route path="/" component={AppContainer}>
            <IndexRoute component={HomePage} />
            <Route path="profile" component={ProfilePage} />
        </Route>
        <Route path="/auth" component={AuthContainer}>
            <Route path="login" component={LoginPage} />
            <Route path="register" component={RegisterPage} />
        </Route>
    </Router>
);
