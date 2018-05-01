import { GET_DAY_MATCHES_SUCCESS } from '../constants/action-types';
import { PLAY_DAY_MATCHES_SUCCESS } from '../constants/action-types';

import Api from '../services/http/api';
import { apiIsLoading, apiErrorOccurred } from './generic'

// Action creator for getting all matches on a specific day.
export function getDayMatches(gameId, matchDayId) {
    return (dispatch) => {
        dispatch(apiIsLoading(true));
        var url = '/games/' + gameId + '/days/' + matchDayId + '/matches';
        Api.get(url, (responseData) => dispatch(getDayMatchesSuccess(responseData)), (error) => dispatch(apiErrorOccurred(true)));
    }
};

// Action for getting all matches on a specific day.
export function getDayMatchesSuccess(dayMatches) {
    
    return {
        type: GET_DAY_MATCHES_SUCCESS,
        dayMatches: dayMatches
    };
}

// Action creator for playing all matches on a specific day.
export function playMatches(gameId, matchDayId) {
    return (dispatch) => {
        dispatch(apiIsLoading(true));
        var url = '/games/' + gameId + '/days/' + matchDayId + '/matches';
        const payload = {};
        Api.post(url, payload, (responseData) => dispatch(playMatchesSuccess(responseData)), (error) => dispatch(apiErrorOccurred(true)));
    }
};

// Action for playing all matches on a specific day.
export function playMatchesSuccess() {
    return {
        type: PLAY_DAY_MATCHES_SUCCESS,
//        match: match
    };
}
