import React from 'react';
import { connect } from 'react-redux';

import { getGames } from '../../modules/games-module';

import Title from '../Title';
import GameList from './GameList'
import CreateGame from './CreateGame'

class Games extends React.Component {

  componentDidMount() {
    this.props.dispatch(getGames());
  }

  render() {
    return (
      <div>
        <Title title="Games" subtitle="" />

        <div className="blocks">
          <GameList {...this.props} />
          <CreateGame />
        </div>
      </div>
    );
  }
}

const mapStateToProps = function (state) {
  return {
    games: state.games.games,
    loading: state.games.loading,
    error: state.games.error
  }
};

export default connect(mapStateToProps)(Games);
