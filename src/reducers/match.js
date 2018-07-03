import { GET_MATCH_SUCCESS } from '../constants/action-types';

const match = (state = {}, action) => {
    switch (action.type) {
        case GET_MATCH_SUCCESS:
            return { ...state, match: action.match };
        default:
            return state;
    }
};

export default match;
