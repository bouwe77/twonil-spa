import axios from 'axios'
import config from '../constants/config'
import { loading, failure } from './shared'

// Action types
export const GET_GAME_NAVIGATION_SUCCESS = 'GET_GAME_NAVIGATION_SUCCESS';
export const GET_GAME_NAVIGATION_LOADING = 'GET_GAME_NAVIGATION_LOADING';
export const GET_GAME_NAVIGATION_FAILURE = 'GET_GAME_NAVIGATION_FAILURE';

// Reducer
const initialState = {
    gameNavigationItems: [],
    loading: false,
    error: null
};

export function gamenavigation(state = initialState, action) {
    switch (action.type) {
        case GET_GAME_NAVIGATION_SUCCESS:
            return {
                ...state,
                gameNavigationItems: [...action.gameNavigationItems],
                loading: false,
                error: null
            };

        case GET_GAME_NAVIGATION_LOADING:
            return {
                ...state,
                loading: true,
                error: null
            };

        case GET_GAME_NAVIGATION_FAILURE:
            return {
                ...state,
                gameNavigationItems: [...action.gameNavigationItems],
                loading: false,
                error: action.error,
            };

        default:
            return state;
    }
};

// Action creators
export function getGameNavigation(gameId) {
    return dispatch => {
        dispatch(loading(GET_GAME_NAVIGATION_LOADING));
        var url = config.apiUrl + '/games/' + gameId + '/links';
        return axios.get(url)
            .then(res => dispatch(getGameNavigationSuccess(res.data['_links'].game)))
            .catch(error => dispatch(failure(GET_GAME_NAVIGATION_FAILURE, error)));
    };
};

// Actions
export function getGameNavigationSuccess(gameNavigationItems) {
    return {
        type: GET_GAME_NAVIGATION_SUCCESS,
        gameNavigationItems: gameNavigationItems
    };
}
