import React from 'react';

import Title from '../Title';

import GameList from './GameList'
import CreateGame from './CreateGame'

class GamesContainer extends React.Component {

//  componentDidMount() {
//    this.props.dispatchGetGames();
//  }

  render() {
    return (
      <div>
        <Title title="Games" subtitle="" />

        <div className="blocks">
          <GameList games={this.props.games} />
          <CreateGame />
        </div>
      </div>
    );
  }
}

export default Games;