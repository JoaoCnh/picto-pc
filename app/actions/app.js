// @flow

export const APP_LOAD_START = 'APP_LOAD_START';
export const APP_LOAD_END = 'APP_LOAD_END';
export const TOGGLE_MENU = 'TOGGLE_MENU';

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