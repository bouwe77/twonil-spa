import axios from 'axios'
import config from '../constants/config'
import { loading, failure } from './shared'

// Action types
export const GET_DASHBOARD_SUCCESS = 'GET_DASHBOARD_SUCCESS';
export const GET_DASHBOARD_LOADING = 'GET_DASHBOARD_LOADING';
export const GET_DASHBOARD_FAILURE = 'GET_DASHBOARD_FAILURE';

// Reducers
var initialState = {
    dashboard: {},
    loading: false,
    error: null
}

export function dashboard(state = initialState, action) {
    switch (action.type) {
        case GET_DASHBOARD_SUCCESS:
            return {
                ...state,
                dashboard: action.dashboard,
                loading: false,
                error: null
            };

        case GET_DASHBOARD_LOADING:
            return {
                ...state,
                loading: true,
                error: null
            };

        case GET_DASHBOARD_FAILURE:
            return {
                ...state,
                dashboard: {},
                loading: false,
                error: action.error
            };

        default:
            return state;
    }
};

// Action creators
export function getDashboard(gameId) {
    return dispatch => {
        dispatch(loading(GET_DASHBOARD_LOADING));
        return axios.get(config.apiUrl + "/games" + gameId)
            .then(res => dispatch(getDashboardSuccess(res.data['_embedded'])))
            .catch(error => dispatch(failure(GET_DASHBOARD_FAILURE, error)));
    };
};

// Actions
export function getDashboardSuccess(dashboard) {
    return {
        type: GET_DASHBOARD_SUCCESS,
        dashboard: dashboard
    };
}
