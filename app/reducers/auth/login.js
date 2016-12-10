import {
    ATTEMPTING_LOGIN,
    LOGIN_USERNAME_CHANGE,
    LOGIN_PASSWORD_CHANGE,
    LOGIN_SUCCESS,
    LOGIN_ERROR
} from '../../actions/auth/login';

import strUtils from '../../utils/str';

export default function app(state = {
    title: "Hello There",
    isAttemptingLogin: false,
    loginUsername: "",
    loginPassword: "",
    loginSuccess: false,
    loginError: false,
    loginErrorMessage: "",
}, action = Object) {
    switch (action.type) {
        case ATTEMPTING_LOGIN:
            return {...state, isAttemptingLogin: true};
        case LOGIN_USERNAME_CHANGE:
            let noPassword = strUtils.isEmptyOrWhitespace(state.loginPassword);

            return {
                ...state,
                loginUsername: action.payload,
                loginError: state.loginError && noPassword,
                loginErrorMessage: state.loginError && !noPassword ? "" : state.loginErrorMessage,
            };
        case LOGIN_PASSWORD_CHANGE:
            let noUsername = strUtils.isEmptyOrWhitespace(state.loginUsername);

            return {
                ...state,
                loginPassword: action.payload,
                loginError: state.loginError && noUsername,
                loginErrorMessage: state.loginError && !noUsername ? "" : state.loginErrorMessage,
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                title: `Welcome ${action.payload}`,
                isAttemptingLogin: false,
                loginSuccess: true,
            };
        case LOGIN_ERROR:
            return {
                ...state,
                isAttemptingLogin: false,
                loginError: true,
                loginErrorMessage: action.payload
            };
        default:
            return state;
    }
}