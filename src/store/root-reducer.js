import { combineReducers } from 'redux';

import { dashboardReducer } from '../modules/dashboard-module';
import { daymatchesReducer } from '../modules/daymatches-module';
import { gamenavigationReducer } from '../modules/gamenavigation-module';
import { gamesReducer } from '../modules/games-module';
import { matchReducer } from '../modules/match-module';

export default combineReducers({
    dashboardReducer,
    daymatchesReducer,
    gamenavigationReducer,
    gamesReducer,
    matchReducer
});