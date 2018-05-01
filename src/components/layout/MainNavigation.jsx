/* import React from 'react';
import {NavLink} from 'react-router-dom';

const MainNavigation = () => {

    const links = [
        { name: 'Home', url: '/', exact: true },
        { name: 'Games', url: '/games', exact: true },
    ];

    let linksComponents = links.map((link, index) => {
        return (
            <li key={index} className={'main-nav-item'}>
                <NavLink className={'main-nav-item'} activeClassName={'main-nav-item-active'} to={link.url} exact={link.exact}>
                  {link.name}
                </NavLink>
            </li>
        );
    });

    return (
        <div className={'main-nav'}>
            <ul>
                {linksComponents}
            </ul>
        </div>
    );
};

export default MainNavigation; */