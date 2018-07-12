import React from 'react';
import { Route, Switch } from 'react-router-dom'

import GameNavigationContainer from '../../containers/GameNavigationContainer'
import DashboardContainer from '../../containers/DashboardContainer'
import MatchContainer from '../../containers/MatchContainer'
import DayMatchesContainer from '../../containers/DayMatchesContainer'

import PageNotFound from '../error/PageNotFound'

const GameContent = () => {
    return (
        <div className="content-container">
            <div className="sidemenu">
                <div id="game-navigation">
                    <Switch>
                        <Route path='/games/:gameId' component={GameNavigationContainer} />
                    </Switch>
                </div>
            </div>
            <div className="content" id="content">
                <Switch>
                    <Route exact path='/games/:gameId' component={DashboardContainer} />
                    <Route exact path='/games/:gameId/matches/:matchId' component={MatchContainer} />
                    <Route exact path='/games/:gameId/days/:matchDayId/matches' component={DayMatchesContainer} />
                    <Route component={PageNotFound} />
                </Switch>
            </div>
        </div>
    );
}

export default GameContent;
