import { connect } from 'react-redux';
import { getMatch } from '../actions/match';
import { playMatches } from '../actions/daymatches';

import Match from '../components/match/Match';

const mapStateToProps = (state) => ({
    matchdata: state.match,
});

const mapDispatchToProps = (dispatch) => ({
    dispatchGetMatch: (gameId, matchId) => dispatch(getMatch(gameId, matchId)),
    dispatchPlayMatches: (gameId, matchId) => dispatch(playMatches(gameId, matchId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Match);