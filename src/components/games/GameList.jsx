import React from 'react';
import Game from './Game';

const GameList = (props) => {

    console.log('render GameList', props.games)

    /*
    if (props.loading) {
        return (<div>Loading...</div>);
    }
    else {
        return (<div>Nee</div>)
    }
*/

    var stateSet = typeof (props.games) !== 'undefined';
    if (stateSet) {
        return (
            <ul>
                {props.games.map((game) => <Game key={game._links.self.href} {...game} />)}
            </ul>
        );
    } else return(null)
}

export default GameList