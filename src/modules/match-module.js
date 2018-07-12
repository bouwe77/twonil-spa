import { GET_MATCH_SUCCESS } from './action-types';
import Api from '../services/http/api';
import { apiIsLoading, apiErrorOccurred } from './generic-module'

// Reducers
export function matchReducer(state = {}, action) {
    switch (action.type) {
        case GET_MATCH_SUCCESS:
            return { ...state, match: action.match };
        default:
            return state;
    }
};

// Action creators
export function getMatch(gameId, matchId) {
    return (dispatch) => {
        dispatch(apiIsLoading(true));
        var url = '/games/' + gameId + '/matches/' + matchId;
        Api.get(url, (responseData) => dispatch(getMatchSuccess(responseData)), (error) => dispatch(apiErrorOccurred(true)));
    }
};

// Actions
export function getMatchSuccess(match) {
    return {
        type: GET_MATCH_SUCCESS,
        match: match
    };
}