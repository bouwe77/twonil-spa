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

const GameList = (props) => {
    return (
        <ul>
            {props.games.map((game) => <Game key={game._links.self.href} {...game} />)}
        </ul>
    );
}

export default GameList