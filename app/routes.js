// @flow
import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import AppContainer from './containers/AppContainer';
import HomePage from './containers/HomePage';
import ProfilePage from './containers/ProfilePage';
import LoginPage from './containers/LoginPage';
import RegisterPage from './containers/RegisterPage';

export default (
    <Router>
        <Route path="/" component={AppContainer}>
            <IndexRoute component={HomePage} />

            <Route path="profile" component={ProfilePage} />
        </Route>
        <Route path="/auth/login" component={LoginPage} />
        <Route path="/auth/register" component={RegisterPage} />
    </Router>
);
