import { combineReducers } from 'redux';

import { dashboard } from '../modules/dashboard-module';
import { daymatches } from '../modules/daymatches-module';
import { gamenavigation } from '../modules/gamenavigation-module';
import { games } from '../modules/games-module';
import { match } from '../modules/match-module';

export default combineReducers({
    dashboard,
    daymatches,
    gamenavigation,
    games,
    match
});