// @flow
import AuthAPI from "../api/auth";

export const APP_LOAD_START = "APP_LOAD_START";
export const APP_LOAD_END = "APP_LOAD_END";
export const TOGGLE_MENU = "TOGGLE_MENU";
export const LOGOUT = "LOGOUT";
export const BATTERY_LEVEL_CHANGED = "BATTERY_LEVEL_CHANGED";

export function startAppLoading() {
    return {
        type: APP_LOAD_START,
    };
}

export function stopAppLoading() {
    return {
        type: APP_LOAD_END,
    };
}

export function toggleMenu() {
    return {
        type: TOGGLE_MENU,
    };
}

export function logout() {
    AuthAPI.logout();
    return {
        type: LOGOUT,
    };
}

export function batteryLevelChanged(level) {
    return {
        type: BATTERY_LEVEL_CHANGED,
        payload: level,
    };
}