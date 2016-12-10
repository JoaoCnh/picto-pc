// @flow

export const ATTEMPTING_LOGIN = 'ATTEMPTING_LOGIN';
export const LOGIN_USERNAME_CHANGE = 'LOGIN_USERNAME_CHANGE';
export const LOGIN_PASSWORD_CHANGE = 'LOGIN_PASSWORD_CHANGE';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export function attemptLogin() {
    return {
        type: ATTEMPTING_LOGIN,
    };
}

export function usernameChanged(username) {
    return {
        type: LOGIN_USERNAME_CHANGE,
        payload: username,
    };
}

export function passwordChanged(password) {
    return {
        type: LOGIN_PASSWORD_CHANGE,
        payload: password,
    };
}

export function loginSuccess(username) {
    return {
        type: LOGIN_SUCCESS,
        payload: username,
    };
}

export function loginError(errorMessage) {
    return {
        type: LOGIN_ERROR,
        payload: errorMessage,
    };
}