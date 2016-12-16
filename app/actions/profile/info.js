// @flow
import imageUtils from '../../utils/images';

export const SELECT_ICON = "SELECT_ICON";
export const SAVING_INFO = "SAVING_INFO";

export function selectIcon(icon) {
    return {
        type: SELECT_ICON,
        payload: icon != null ? icon : imageUtils.getDefault(),
    };
}

export function savingInfo(status) {
    return {
        type: SAVING_INFO,
        payload: status,
    };
}