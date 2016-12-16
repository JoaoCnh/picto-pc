// @flow
import {
    SELECT_ICON,
    SAVING_INFO,
} from '../../actions/profile/info';

const initialState = {
    selectedIcon: null,
    savingInfo: false,
    saveInfoError: false,
};

export default function info(state = initialState, action = Object) {
    switch (action.type) {
        case SELECT_ICON:
            return {...state, selectedIcon: action.payload};
        case SAVING_INFO:
            return {...state, savingInfo: action.payload};
        default:
            return state;
    }
}