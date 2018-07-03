import React from 'react';
import { Link } from 'react-router-dom';
import WrapWithBlock from '../Wrapper'

import YourNextMatch from './YourNextMatch';

const numberOfColumns = 4;
const title = 'Next match';

const NextMatchDay = (props) => {

    var stateSet = typeof (props.nextmatchday) !== 'undefined';
    var yourTeamPlays = stateSet
        && typeof (props.nextmatchday['_embedded']) !== 'undefined'
        && typeof (props.nextmatchday['_embedded']['next-match']) !== 'undefined'

    if (stateSet) {
        if (yourTeamPlays) {
            var yourNextMatch = props.nextmatchday['_embedded']['next-match'];

            return (
                <div>
                    <YourNextMatch nextmatch={yourNextMatch} />
                    <br />
                    <Link to={yourNextMatch['_links'].self.href}>Play matches</Link>
                </div>
            );
        }
        else {
            return (
                <div>
                    Your team does not play
                    <br />
                    <Link to={props.nextmatchday['_links'].self.href}>Play matches</Link>
                </div>
            );
        }
    }
    else {
        return (<div>No matches...</div>);
    }
}

export default WrapWithBlock(NextMatchDay, numberOfColumns, title);
