import {
    UPDATE_MESSAGE,
    SENDING_MESSAGE,
    SEND_MESSAGE,
    NEW_MESSAGE,
    MESSAGE_ERROR,
} from '../actions/chat';

const initialState = {
    messages: [],
    error: false,
    currentMessage: "",
    isSendingMessage: false,
};

export default function chat(state = initialState, action = Object) {
    switch (action.type) {
        case UPDATE_MESSAGE:
            return {...state, currentMessage: action.payload};
        case SENDING_MESSAGE:
            return {...state, isSendingMessage: true};
        case SEND_MESSAGE:
            return {
                ...state,
                currentMessage: "",
                error: false,
                isSendingMessage: false,
                messages: [...state.messages, action.payload],
            };
        case NEW_MESSAGE:
            return {...state, messages: [...state.messages, action.payload]};
        case MESSAGE_ERROR:
            return {...state, error: true};
        default:
            return state;
    }
}