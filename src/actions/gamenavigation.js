import { GET_GAME_NAVIGATION_SUCCESS } from '../constants/action-types';
import Api from '../services/http/api';
import { apiIsLoading, apiErrorOccurred } from './generic'

// The action creator.
export function getGameNavigation(gameId) {
    return (dispatch) => {
        dispatch(apiIsLoading(true));
        var url = '/games/' + gameId + '/links';
        Api.get(url, (responseData) => dispatch(getGameNavigationSuccess(responseData['_links'].game)), (error) => dispatch(apiErrorOccurred(true)));
    }
};

// The action.
export function getGameNavigationSuccess(gameNavigationItems) {
    return {
        type: GET_GAME_NAVIGATION_SUCCESS,
        gameNavigationItems: gameNavigationItems
    };
}
