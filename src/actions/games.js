import { GET_GAMES_SUCCESS } from '../constants/action-types';
import Api from '../services/http/api';
import { apiIsLoading, apiErrorOccurred } from './generic'

// The action creator.
export function getGames() {
    return (dispatch) => {
        dispatch(apiIsLoading(true));
        var url = '/games';
        Api.get(url, (responseData) => dispatch(getGamesSuccess(responseData['_embedded']['rel:games'])), (error) => dispatch(apiErrorOccurred(true)));
    }
};

// The action.
export function getGamesSuccess(games) {
    return {
        type: GET_GAMES_SUCCESS,
        games: games
    };
}
