import {
    APP_LOAD_START,
    APP_LOAD_END,
    TOGGLE_MENU,
    LOGOUT,
    BATTERY_LEVEL_CHANGED,
    SETUP_SOCKET,
} from '../actions/app';

const initialState = {
    isLoadingApp: false,
    loadFinished: false,
    isMenuActive: false,
    batteryLevel: null,
    socket: null,
};

export default function app(state = initialState, action = Object) {
    switch (action.type) {
        case APP_LOAD_START:
            return {...state, isLoadingApp: true};
        case APP_LOAD_END:
            return {...state, isLoadingApp: false, loadFinished: true};
        case TOGGLE_MENU:
            return {...state, isMenuActive: !state.isMenuActive};
        case LOGOUT:
            return initialState;
        case BATTERY_LEVEL_CHANGED:
            return {...state, batteryLevel: action.payload};
        case SETUP_SOCKET:
            return {...state, socket: action.payload};
        default:
            return state;
    }
}