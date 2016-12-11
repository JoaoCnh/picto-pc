import { APP_LOAD_START, APP_LOAD_END, TOGGLE_MENU } from '../actions/app';

export default function app(state = {
    isLoadingApp: false,
    loadFinished: false,
    isMenuActive: false,
}, action = Object) {
    switch (action.type) {
        case APP_LOAD_START:
            return {...state, isLoadingApp: true};
        case APP_LOAD_END:
            return {...state, isLoadingApp: false, loadFinished: true};
        case TOGGLE_MENU:
            return {...state, isMenuActive: !state.isMenuActive};
        default:
            return state;
    }
}