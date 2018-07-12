import { connect } from 'react-redux';
import { getGames } from '../modules/games-module';
import Games from '../components/games/Games';

const mapStateToProps = (state) => ({
  games: state.games,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchGetGames: () => dispatch(getGames())
});

export default connect(mapStateToProps, mapDispatchToProps)(Games);
