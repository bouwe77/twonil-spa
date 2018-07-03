import { combineReducers } from 'redux';

import dashboard from './dashboard';
import daymatches from './daymatches';
import gamenavigation from './gamenavigation';
import games from './games';
import match from './match';

export default combineReducers({
    dashboard,
    daymatches,
    gamenavigation,
    games,
    match
});