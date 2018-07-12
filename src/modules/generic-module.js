import { ERROR_OCCURRED, LOADING } from './action-types';

// Reducers
// ==> none yet...

// Action creators
// ==> none yet...

// Actions
export function apiErrorOccurred(bool) {
    return {
        type: ERROR_OCCURRED,
        errorOcurred: bool
    };
}

export function apiIsLoading(bool) {
    return {
        type: LOADING,
        isLoading: bool
    };
}