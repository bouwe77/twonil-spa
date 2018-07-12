import React from 'react';
import { Route, Switch } from 'react-router-dom'

import GameNavigation from '../gamenavigation/GameNavigation'
import Dashboard from '../dashboard/Dashboard'
import Match from '../match/Match'
import DayMatches from '../matches/DayMatches'

import PageNotFound from '../error/PageNotFound'

const GameContent = () => {
    return (
        <div className="content-container">
            <div className="sidemenu">
                <div id="game-navigation">
                    <Switch>
                        <Route path='/games/:gameId' component={GameNavigation} />
                    </Switch>
                </div>
            </div>
            <div className="content" id="content">
                <Switch>
                    <Route exact path='/games/:gameId' component={Dashboard} />
                    <Route exact path='/games/:gameId/matches/:matchId' component={Match} />
                    <Route exact path='/games/:gameId/days/:matchDayId/matches' component={DayMatches} />
                    <Route component={PageNotFound} />
                </Switch>
            </div>
        </div>
    );
}

export default GameContent;
