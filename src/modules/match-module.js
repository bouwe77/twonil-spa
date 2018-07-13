import axios from 'axios'
import config from '../constants/config'
import { loading, failure } from './shared'

// Action types
export const GET_MATCH_LOADING = 'GET_MATCH_LOADING';
export const GET_MATCH_SUCCESS = 'GET_MATCH_SUCCESS';
export const GET_MATCH_FAILURE = 'GET_MATCH_FAILURE';

// Reducers
const initialState = {
    match: {},
    loading: false,
    error: null
};

export function match(state = initialState, action) {
    switch (action.type) {
        case GET_MATCH_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                match: action.match
            };

        case GET_MATCH_LOADING:
            return {
                ...state,
                loading: true,
                error: null
            };

        case GET_MATCH_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error,
                match: {}
            };

        default:
            return state;
    }
};

// Action creators
export function getMatch(gameId, matchId) {
    return dispatch => {
        dispatch(loading(GET_MATCH_LOADING));
        var url = config.apiUrl + '/games/' + gameId + '/matches/' + matchId;
        return axios.get(url)
            .then(res => dispatch(getMatchSuccess(res.data)))
            .catch(error => dispatch(failure(GET_MATCH_FAILURE, error)));
    };
};

// Actions
export function getMatchSuccess(match) {
    return {
        type: GET_MATCH_SUCCESS,
        match: match
    };
}