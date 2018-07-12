import React from 'react';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router'
import { connect } from 'react-redux';

//import { getGameNavigation } from '../modules/gamenavigation-module';

class GameNavigation extends React.Component {

    //    componentDidMount() {
    //        this.props.dispatch(getGameNavigation(this.props.match.params.gameId);
    //    }

    render() {

        var stateSet = typeof (this.props.gameNavigationItems) !== 'undefined';
        if (stateSet) {

            return (
                <div className={'game-nav'} >
                    <ul>
                        {this.props.gameNavigationItems.map((nav, index) => (
                            <li key={index} className={'game-nav-item'}>
                                <NavLink exact className={'game-nav-item'} activeClassName={'game-nav-item-active'} to={nav.href}>
                                    {nav.title}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            );
        }

        return null;
    }
}

const mapStateToProps = (state) => ({
    gameNavigationItems: state.gameNavigationItems,
});

export default withRouter(connect(mapStateToProps)(GameNavigation));
