import axios from 'axios'
import config from '../constants/config'
import { loading, failure } from './shared'

// Action types
export const GET_DAY_MATCHES_SUCCESS = 'GET_DAY_MATCHES_SUCCESS';
export const GET_DAY_MATCHES_LOADING = 'GET_DAY_MATCHES_LOADING';
export const GET_DAY_MATCHES_FAILURE = 'GET_DAY_MATCHES_FAILURE';
export const PLAY_DAY_MATCHES_SUCCESS = 'PLAY_DAY_MATCHES_SUCCESS';
export const PLAY_DAY_MATCHES_LOADING = 'PLAY_DAY_MATCHES_LOADING';
export const PLAY_DAY_MATCHES_FAILURE = 'PLAY_DAY_MATCHES_FAILURE';

// Reducers
const initialState = {
    dayMatches: [],
    loading: false,
    error: null
};

export function daymatches(state = initialState, action) {
    switch (action.type) {
        case GET_DAY_MATCHES_SUCCESS:
            return {
                ...state,
                dayMatches: action.dayMatches,
                loading: false,
                error: null
            };

        case GET_DAY_MATCHES_LOADING:
            return {
                ...state,
                loading: true,
                error: null
            };

        case GET_DAY_MATCHES_FAILURE:
            return {
                ...state,
                dayMatches: [],
                loading: false,
                error: action.error
            };

        case PLAY_DAY_MATCHES_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null
            }; // geen data teruggeven???

        case PLAY_DAY_MATCHES_LOADING:
            return {
                ...state,
                loading: true,
                error: null
            };

        case PLAY_DAY_MATCHES_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            };

        default:
            return state;
    }
};

// Action creator for getting all matches on a specific day.
export function getDayMatches(gameId, matchDayId) {
    return dispatch => {
        dispatch(loading(GET_DAY_MATCHES_LOADING));
        var url = config.apiUrl + '/games/' + gameId + '/days/' + matchDayId + '/matches';
        return axios.get(url)
            .then(res => dispatch(getDayMatchesSuccess(res.data)))
            .catch(error => dispatch(failure(GET_DAY_MATCHES_FAILURE, error)));
    };
};

// Action for getting all matches on a specific day.
export function getDayMatchesSuccess(dayMatches) {
    return {
        type: GET_DAY_MATCHES_SUCCESS,
        dayMatches: dayMatches
    };
}

// Action creator for playing all matches on a specific day.
export function playDayMatches(gameId, matchDayId) {
    return dispatch => {
        dispatch(loading(PLAY_DAY_MATCHES_LOADING));
        var url = config.apiUrl + '/games/' + gameId + '/days/' + matchDayId + '/matches';
        const payload = {}
        return axios.post(url, payload)
            .then(res => dispatch(playDayMatchesSuccess(res.data)))
            .catch(error => dispatch(failure(PLAY_DAY_MATCHES_FAILURE, error)));
    };
}

// Action for playing all matches on a specific day.
export function playDayMatchesSuccess() {
    return {
        type: PLAY_DAY_MATCHES_SUCCESS,
    };
}
