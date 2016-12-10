// @flow
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import app from './app';
import login from './auth/login';
import register from './auth/register';

const rootReducer = combineReducers({
  routing,
  app,
  login,
  register,
});

export default rootReducer;
