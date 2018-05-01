import React from 'react';
import WrapWithBlock from '../Wrapper';

const numberOfColumns = 3;
const title = 'Team';

const TeamRating = (props) => {

    var team = props.team;

    return (
        <span>
            <ul>
                <li>Rating: {team.rating}</li>
                <li>Goalkeeping: {team['rating-goalkeeper']}</li>
                <li>Defence: {team['rating-defence']}</li>
                <li>Midfield: {team['rating-midfield']}</li>
                <li>Attack: {team['rating-attack']}</li>
            </ul>
        </span>
    );
}

export default WrapWithBlock(TeamRating, numberOfColumns, title);