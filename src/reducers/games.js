import { GET_GAMES_SUCCESS } from '../constants/action-types';

const games = (state = [], action) => {
    switch (action.type) {
        case GET_GAMES_SUCCESS:
            return { ...state, games: [...action.games] };
        default:
            return state;
    }
};

export default games;
