import React from 'react';
import WrapWithBlock from '../Wrapper';

const LeagueTable = (props) => {

    return (
        <div>
            {props.leaguetable['competition-name']}
            <ol>
                {props.leaguetable['_embedded'].positions.map((pos, index) => (
                    <li key={index}>
                        {pos['_embedded'].team.name} {pos.played}-{pos.points}
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default WrapWithBlock(LeagueTable, 3, 'LeagueTable');
