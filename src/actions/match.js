import { GET_MATCH_SUCCESS } from '../constants/action-types';

import Api from '../services/http/api';
import { apiIsLoading, apiErrorOccurred } from './generic'

// Action creator for getting a single match.
export function getMatch(gameId, matchId) {
    return (dispatch) => {
        dispatch(apiIsLoading(true));
        var url = '/games/' + gameId + '/matches/' + matchId;
        Api.get(url, (responseData) => dispatch(getMatchSuccess(responseData)), (error) => dispatch(apiErrorOccurred(true)));
    }
};

// Action for getting the match.
export function getMatchSuccess(match) {
    return {
        type: GET_MATCH_SUCCESS,
        match: match
    };
}