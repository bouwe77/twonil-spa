import { GET_DASHBOARD_SUCCESS } from '../constants/action-types';

const dashboard = (state = {}, action) => {
    switch (action.type) {
        case GET_DASHBOARD_SUCCESS:
            return { ...state, dashboard: action.dashboard };
        default:
            return state;
    }
};

export default dashboard;
