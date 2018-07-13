import React from 'react';
import Game from './Game';

const GameList = (props) => {

    if (props.loading) {
        return ('loading...');
    }

//TODO error moet hier nog bij

    return (
        <ul>
            {props.games.map((game) => <Game key={game._links.self.href} {...game} />)}
        </ul>
    );
}

export default GameList