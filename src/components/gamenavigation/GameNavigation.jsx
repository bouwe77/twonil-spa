import React from 'react';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router'

class GameNavigation extends React.Component {

    //    componentDidMount() {
    //        this.props.dispatchGetGameNavigation(this.props.match.params.gameId);
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

export default withRouter(GameNavigation);