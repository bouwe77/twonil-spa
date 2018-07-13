// Action types
export const EMAIL_CHANGED = 'EMAIL_CHANGED';
export const PASSWORD_CHANGED = 'PASSWORD_CHANGED';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

// Reducers
var initialState = {
    loggedIn: false,
    loading: false,
    error: null
}

export function login(state = initialState, action) {
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

export function processLogin() {
    return {
        type: LOGIN_SUCCESS,
        loggedIn: true
    };
};

// Action creators
// ==> none yet...