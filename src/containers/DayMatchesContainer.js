import { connect } from 'react-redux';
import { getDayMatches } from '../modules/daymatches-module';
import DayMatches from '../components/matches/DayMatches';

const mapStateToProps = (state) => ({
    dayMatches: state.dayMatches,
});

const mapDispatchToProps = (dispatch) => ({
    dispatchGetDayMatches: (gameId, matchDayId) => dispatch(getDayMatches(gameId, matchDayId))
});

export default connect(mapStateToProps, mapDispatchToProps)(DayMatches);
