import { GET_GAME_NAVIGATION_SUCCESS } from '../constants/action-types';

const gamenavigation = (state = [], action) => {
    switch (action.type) {
        case GET_GAME_NAVIGATION_SUCCESS:
            return { ...state, gameNavigationItems: [...action.gameNavigationItems] };
        default:
            return state;
    }
};

export default gamenavigation;
