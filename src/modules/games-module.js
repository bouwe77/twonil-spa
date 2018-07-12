import axios from 'axios'
import config from '../constants/config'

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

export function gamesReducer(state = initialState, action) {
    switch (action.type) {
        case GET_GAMES_LOADING:
            console.log('loading...')
            return {
                ...state,
                loading: true,
                error: null
            };

        case GET_GAMES_SUCCESS:
            console.log('success!')
            return {
                ...state,
                loading: false,
                error: null,
                games: action.games
            };

        case GET_GAMES_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error,
                games: []
            };

        default:
            return state;
    }
}

// Action creators
export function getGames() {
    return dispatch => {
        dispatch(getGamesLoading());
        return axios.get(config.apiUrl + "/games")
            .then(res => dispatch(getGamesSuccess(res.data['_embedded']['rel:games'])))
            .catch(error => dispatch(getGamesFailure(error)));
    };
};

// Actions
export function getGamesSuccess(games) {
    return {
        type: GET_GAMES_SUCCESS,
        games: games
    };
}

export function getGamesLoading() {
    return {
        type: GET_GAMES_LOADING
    };
}

export function getGamesFailure(error) {
    return {
        type: GET_GAMES_FAILURE,
        error: error
    };
}