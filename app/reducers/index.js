// @flow
import { combineReducers } from "redux";
import { routerReducer as routing } from "react-router-redux";
import { reducer as toastrReducer } from "react-redux-toastr";

import app from "./app";
import login from "./auth/login";
import register from "./auth/register";
import info from "./profile/info";

const rootReducer = combineReducers({
    routing,
    toastr: toastrReducer,

    // global app
    app,

    // auth
    login,
    register,

    info,
});

export default rootReducer;
