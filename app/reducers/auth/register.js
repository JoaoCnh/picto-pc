import {
    ATTEMPTING_REGISTER,
    REGISTER_USERNAME_CHANGE,
    REGISTER_PASSWORD_CHANGE,
    PASSWORD_CONFIRMATION_CHANGE,
    REGISTER_SUCCESS,
    REGISTER_ERROR
} from '../../actions/auth/register';

import strUtils from '../../utils/str';

export default function app(state = {
    title: "Register Account",
    isAttemptingRegister: false,
    registerUsername: '',
    registerPassword: '',
    registerPasswordConfirmation: '',
    registerSuccess: false,
    registerError: false,
    registerErrorMessage: '',
}, action = Object) {
    switch (action.type) {
        case ATTEMPTING_REGISTER:
            return {...state, isAttemptingRegister: true};
        case REGISTER_USERNAME_CHANGE:
            let noPassword = strUtils.isEmptyOrWhitespace(state.registerPassword);

            return {
                ...state,
                registerUsername: action.payload,
                registerError: state.registerError && noPassword,
                registerErrorMessage: state.registerError && !noPassword ? '' : state.registerErrorMessage,
            };
        case REGISTER_PASSWORD_CHANGE:
            let noUsername = strUtils.isEmptyOrWhitespace(state.registerUsername);

            return {
                ...state,
                registerPassword: action.payload,
                registerError: state.registerError && noUsername,
                registerErrorMessage: state.registerError && !noUsername ? '' : state.registerErrorMessage,
            };
        case PASSWORD_CONFIRMATION_CHANGE:
            return {...state, registerPasswordConfirmation: action.payload};
        case REGISTER_SUCCESS:
            return {
                ...state,
                title: "Nice!",
                isAttemptingRegister: false,
                registerSuccess: true,
            };
        case REGISTER_ERROR:
            return {
                ...state,
                isAttemptingRegister: false,
                registerError: true,
                registerErrorMessage: action.payload.errorMessage,
                registerPassword: action.payload.resetPassword ? '' : state.registerPassword,
                registerPasswordConfirmation: action.payload.resetPassword ? '' : state.registerPasswordConfirmation,
            };
        default:
            return state;
    }
}