import { GET_DASHBOARD_SUCCESS } from './action-types';
import Api from '../services/http/api';

// Reducers
export function dashboardReducer (state = {}, action) {
    switch (action.type) {
        case GET_DASHBOARD_SUCCESS:
            return { ...state, dashboard: action.dashboard };
        default:
            return state;
    }
};

// Actions
export function getDashboardSuccess(dashboard) {
    return {
        type: GET_DASHBOARD_SUCCESS,
        dashboard: dashboard
    };
}

// Action creators
export function getDashboard(gameId) {
    return (dispatch) => {
        //dispatch(apiIsLoading(true));
        var url = '/games/' + gameId;
        Api.get(url, (responseData) => dispatch(getDashboardSuccess(responseData['_embedded'])), (error) => /*dispatch(apiErrorOccurred(true))*/ console.log(error));
    }
};