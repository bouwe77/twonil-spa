import { connect } from 'react-redux';
import { getGameNavigation } from '../actions/gamenavigation';
import GameNavigation from '../components/gamenavigation/GameNavigation';

const mapStateToProps = (state) => ({
    gameNavigationItems: state.gameNavigationItems,
});

const mapDispatchToProps = (dispatch) => ({
    dispatchGetGameNavigation: (gameId) => dispatch(getGameNavigation(gameId))
});

export default connect(mapStateToProps, mapDispatchToProps)(GameNavigation);
