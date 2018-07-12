import { connect } from 'react-redux';
import { playMatches } from '../modules/daymatches-module';
import { getMatch } from '../modules/match-module';

import Match from '../components/match/Match';

const mapStateToProps = (state) => ({
    matchdata: state.match,
});

const mapDispatchToProps = (dispatch) => ({
    dispatchGetMatch: (gameId, matchId) => dispatch(getMatch(gameId, matchId)),
    dispatchPlayMatches: (gameId, matchId) => dispatch(playMatches(gameId, matchId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Match);