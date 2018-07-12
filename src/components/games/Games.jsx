import React from 'react';
import { connect } from 'react-redux';

import { getGames } from '../../modules/games-module';

import Title from '../Title';
import GameList from './GameList'
import CreateGame from './CreateGame'

class Games extends React.Component {

  componentDidMount() {
    console.log('did mount')
    this.props.dispatch(getGames());
  }

  render() {
    console.log('render Games', this.props.games)

    return (
      <div>
        <Title title="Games" subtitle="" />

        <div className="blocks">
          <GameList games={this.props.games} loading={this.props.loading} error={this.props.error} />
          <CreateGame />
        </div>
      </div>
    );
  }
}

const mapStateToProps = function (state) {
  console.log('mapStateToProps')
  return {
    games: state.games,
    loading: state.loading,
    error: state.error
  }
};

export default connect(mapStateToProps)(Games);
