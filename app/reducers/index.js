// @flow
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import app from './app';
import login from './auth/login';
import register from './auth/register';
import info from './profile/info';

const rootReducer = combineReducers({
    routing,
    app,
    login,
    register,
    info,
});

export default rootReducer;
