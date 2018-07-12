import React from 'react';
import { Route, Switch } from 'react-router-dom'

import Home from '../home/Home'
import Games from '../games/Games'
import PageNotFound from '../error/PageNotFound'

const Content = () => {
  return (
    <div className="content-container">
      <div className="sidemenu">
        <div id="game-navigation">
        </div>
      </div>
      <div className="content" id="content">
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/games' component={Games} exact />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </div>
  );
}

export default Content;
