import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_SUCCESS } from "./action-types";

var initialState = {
    loggedIn: false
}

// Reducers
export function loginReducer(state = initialState, action) {
    switch (action.type) {
        case EMAIL_CHANGED:
            return { ...state, email: action.email };
        case PASSWORD_CHANGED:
            return { ...state, password: action.password };
        case LOGIN_SUCCESS:
            return { ...state, loggedIn: action.loggedIn };
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
        type: LOGIN_SUCCESS,
        loggedIn: true
    };
};

// Action creators
// ==> none yet...