// @flow
import imageUtils from '../../utils/images';

export const SELECT_ICON = "SELECT_ICON";

export function selectIcon(icon) {
    return {
        type: SELECT_ICON,
        payload: icon != null ? icon : imageUtils.getDefault(),
    };
}