import { GET_GAME_NAVIGATION_SUCCESS } from './action-types';
import Api from '../services/http/api';
import { apiIsLoading, apiErrorOccurred } from './generic-module'

// Reducer
export function gamenavigationReducer (state = [], action) {
    switch (action.type) {
        case GET_GAME_NAVIGATION_SUCCESS:
            return { ...state, gameNavigationItems: [...action.gameNavigationItems] };
        default:
            return state;
    }
};

// Action creators
export function getGameNavigation(gameId) {
    return (dispatch) => {
        dispatch(apiIsLoading(true));
        var url = '/games/' + gameId + '/links';
        Api.get(url, (responseData) => dispatch(getGameNavigationSuccess(responseData['_links'].game)), (error) => dispatch(apiErrorOccurred(true)));
    }
};

// Actions
export function getGameNavigationSuccess(gameNavigationItems) {
    return {
        type: GET_GAME_NAVIGATION_SUCCESS,
        gameNavigationItems: gameNavigationItems
    };
}
