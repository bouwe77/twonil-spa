import { GET_DAY_MATCHES_SUCCESS, PLAY_DAY_MATCHES_SUCCESS } from './action-types';

import Api from '../services/http/api';

// Reducers
export function daymatchesReducer (state = [], action) {
  switch (action.type) {
    case GET_DAY_MATCHES_SUCCESS:
      return { ...state, dayMatches: action.dayMatches };

    case PLAY_DAY_MATCHES_SUCCESS:
      return { ...state }; // geen data teruggeven???
    default:
      return state;
  }
};

// Action creator for getting all matches on a specific day.
export function getDayMatches(gameId, matchDayId) {
    return (dispatch) => {
        //dispatch(apiIsLoading(true));
        var url = '/games/' + gameId + '/days/' + matchDayId + '/matches';
        Api.get(url, (responseData) => dispatch(getDayMatchesSuccess(responseData)), (error) => /*dispatch(apiErrorOccurred(true))*/ console.log(error));
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
        //dispatch(apiIsLoading(true));
        var url = '/games/' + gameId + '/days/' + matchDayId + '/matches';
        const payload = {};
        Api.post(url, payload, (responseData) => dispatch(playMatchesSuccess(responseData)), (error) => /*dispatch(apiErrorOccurred(true))*/ console.log(error));
    }
};

// Action for playing all matches on a specific day.
export function playMatchesSuccess() {
    return {
        type: PLAY_DAY_MATCHES_SUCCESS,
//        match: match
    };
}
