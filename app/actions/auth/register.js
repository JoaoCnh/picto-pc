// @flow

export const ATTEMPTING_REGISTER = 'ATTEMPTING_REGISTER';
export const REGISTER_USERNAME_CHANGE = 'REGISTER_USERNAME_CHANGE';
export const REGISTER_PASSWORD_CHANGE = 'REGISTER_PASSWORD_CHANGE';
export const PASSWORD_CONFIRMATION_CHANGE = 'PASSWORD_CONFIRMATION_CHANGE';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_ERROR = 'REGISTER_ERROR';

export function attemptRegister() {
  return {
    type: ATTEMPTING_REGISTER,
  };
}

export function usernameChanged(username) {
    return {
        type: REGISTER_USERNAME_CHANGE,
        payload: username,
    };
}

export function passwordChanged(password) {
    return {
        type: REGISTER_PASSWORD_CHANGE,
        payload: password,
    };
}

export function passwordConfirmationChanged(passwordConfirmation) {
    return {
        type: PASSWORD_CONFIRMATION_CHANGE,
        payload: passwordConfirmation,
    };
}

export function registerSuccess() {
  return {
    type: REGISTER_SUCCESS,
  };
}

export function registerError(errorMessage, resetPassword = false) {
    return {
        type: REGISTER_ERROR,
        payload: { errorMessage, resetPassword },
    };
}