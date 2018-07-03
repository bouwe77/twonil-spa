import { GET_DASHBOARD_SUCCESS } from '../constants/action-types';
import Api from '../services/http/api';
import { apiIsLoading, apiErrorOccurred } from './generic'

// The action creator.
export function getDashboard(gameId) {
    return (dispatch) => {
        dispatch(apiIsLoading(true));
        var url = '/games/' + gameId;
        Api.get(url, (responseData) => dispatch(getDashboardSuccess(responseData['_embedded'])), (error) => dispatch(apiErrorOccurred(true)));
    }
};

// The action.
export function getDashboardSuccess(dashboard) {
    return {
        type: GET_DASHBOARD_SUCCESS,
        dashboard: dashboard
    };
}
