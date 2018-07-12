import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_SUCCESS } from "./action-types";

// Reducers
export function loginReducer (state = {}, action) {
    switch (action.type) {
        case EMAIL_CHANGED:
            return { ...state, email: action.email };
        case PASSWORD_CHANGED:
            return { ...state, password: action.password };
        default:
            return state;
    }
};

// Actions
export function changeEmail(email) {
    return {
        type: EMAIL_CHANGED,
        email: email
    };
};

export function changePassword(password) {
    return {
        type: PASSWORD_CHANGED,
        password: password
    };
};

export function login() {
    return {
        type: LOGIN_SUCCESS
    };
};

// Action creators
// ==> none yet...