// @flow
export const UPDATE_MESSAGE = "UPDATE_MESSAGE";
export const SENDING_MESSAGE = "SENDING_MESSAGE";
export const SEND_MESSAGE = "SEND_MESSAGE";
export const MESSAGE_ERROR = "MESSAGE_ERROR";

export function updateMessage(message) {
    return {
        type: UPDATE_MESSAGE,
        payload: message,
    };
}

export function sendingMessage() {
    return {
        type: SENDING_MESSAGE,
    };
}

export function sendMessage(message) {
    return {
        type: SEND_MESSAGE,
        payload: message,
    };
}

export function messageError() {
    return {
        type: MESSAGE_ERROR,
    };
}