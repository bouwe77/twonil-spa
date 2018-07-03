import React from 'react';
import { NavLink } from 'react-router-dom';

const Game = (props) => {
    return (
        <li>
            <NavLink to={props._links.self.href}>
                {props.name} ({props['my-team']})
            </NavLink>
        </li>
    );
}

export default Game