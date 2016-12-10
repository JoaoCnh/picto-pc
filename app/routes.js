// @flow
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import LoginPage from './containers/LoginPage';
import RegisterPage from './containers/RegisterPage';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage} />

        <Route path="auth/login" component={LoginPage} />
        <Route path="auth/register" component={RegisterPage} />
    </Route>
);
