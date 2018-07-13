import axios from 'axios'
import config from '../constants/config'
import { loading, failure } from './shared'

// Action types
export const GET_GAMES_LOADING = 'GET_GAMES_LOADING';
export const GET_GAMES_SUCCESS = 'GET_GAMES_SUCCESS';
export const GET_GAMES_FAILURE = 'GET_GAMES_FAILURE';

// Reducers
const initialState = {
    games: [],
    loading: false,
    error: null
};

export function games(state = initialState, action) {
    switch (action.type) {
        case GET_GAMES_SUCCESS:
            return {
                ...state,
                games: action.games,
                loading: false,
                error: null,
            };

        case GET_GAMES_LOADING:
            return {
                ...state,
                loading: true,
                error: null
            };

        case GET_GAMES_FAILURE:
            return {
                ...state,
                games: [],
                loading: false,
                error: action.error
            };

        default:
            return state;
    }
}

// Action creators
export function getGames() {
    return dispatch => {
        dispatch(loading(GET_GAMES_LOADING));
        return axios.get(config.apiUrl + "/games")
            .then(res => dispatch(getGamesSuccess(res.data['_embedded']['rel:games'])))
            .catch(error => dispatch(failure(GET_GAMES_FAILURE, error)));
    };
};

// Actions
export function getGamesSuccess(games) {
    return {
        type: GET_GAMES_SUCCESS,
        games: games
    };
}
