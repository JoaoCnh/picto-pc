// @flow
import {
    SELECT_ICON,
} from '../../actions/profile/info';

const initialState = {
    selectedIcon: null,
};

export default function info(state = initialState, action = Object) {
    switch (action.type) {
        case SELECT_ICON:
            return {...state, selectedIcon: action.payload};
        default:
            return state;
    }
}