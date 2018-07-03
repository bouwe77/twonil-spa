import { connect } from 'react-redux';
import { getDashboard } from '../actions/dashboard';
import Dashboard from '../components/dashboard/Dashboard';

const mapStateToProps = (state) => ({
  dashboard: state.dashboard,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchGetDashboard: (gameId) => dispatch(getDashboard(gameId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
