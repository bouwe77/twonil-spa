import { GET_DAY_MATCHES_SUCCESS, PLAY_DAY_MATCHES_SUCCESS } from '../constants/action-types';

const daymatches = (state = [], action) => {
  switch (action.type) {
    case GET_DAY_MATCHES_SUCCESS:
      return { ...state, dayMatches: action.dayMatches };

    case PLAY_DAY_MATCHES_SUCCESS:
      return { ...state }; // geen data teruggeven???
    default:
      return state;
  }
};

export default daymatches;
