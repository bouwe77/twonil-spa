import React from 'react';
import Game from './Game';

const GameList = (props) => {
    return (
        <ul>
            {props.games.map((game) => <Game key={game._links.self.href} {...game} />)}
        </ul>
    );
}

export default GameList