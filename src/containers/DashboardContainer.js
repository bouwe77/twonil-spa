import { connect } from 'react-redux';
import { getDashboard } from '../modules/dashboard-module';
import Dashboard from '../components/dashboard/Dashboard';

const mapStateToProps = (state) => ({
  dashboard: state.dashboard,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchGetDashboard: (gameId) => dispatch(getDashboard(gameId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
