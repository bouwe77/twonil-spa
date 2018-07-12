import { GET_GAMES_SUCCESS } from './action-types';
import Api from '../services/http/api';
import { apiIsLoading, apiErrorOccurred } from './generic-module'

// Reducers
export function gamesReducer(state = [], action) {
    switch (action.type) {
        case GET_GAMES_SUCCESS:
            return { ...state, games: [...action.games] };
        default:
            return state;
    }
};

// Action creators
export function getGames() {
    return (dispatch) => {
        dispatch(apiIsLoading(true));
        var url = '/games';
        Api.get(url, (responseData) => dispatch(getGamesSuccess(responseData['_embedded']['rel:games'])), (error) => dispatch(apiErrorOccurred(true)));
    }
};

// Actions
export function getGamesSuccess(games) {
    return {
        type: GET_GAMES_SUCCESS,
        games: games
    };
}
