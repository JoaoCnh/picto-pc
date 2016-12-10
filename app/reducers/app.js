import { APP_LOAD_START, APP_LOAD_END } from '../actions/app';

export default function app(state = {
    isLoadingApp: false,
}, action = Object) {
    switch (action.type) {
        case APP_LOAD_START:
            return {...state, isLoadingApp: true};
        case APP_LOAD_END:
            return {...state, isLoadingApp: false};
        default:
            return state;
    }
}