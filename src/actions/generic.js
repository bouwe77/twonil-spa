import { ERROR_OCCURRED } from '../constants/action-types';
import { LOADING } from '../constants/action-types';

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