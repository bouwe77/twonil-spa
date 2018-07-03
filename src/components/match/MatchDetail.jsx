import React from 'react';

import WrapWithBlock from '../Wrapper'

const numberOfColumns = 6;
const title = '';

const MatchDetail = (props) => {

    const match = props.matchdetail;
    const homeTeam = match['_embedded']['home-team']
    const awayTeam = match['_embedded']['away-team']

    return (
        <div>
            {homeTeam.name} - {awayTeam.name}
            <br />

            {match.played &&
                <div>
                    {match['home-score']} - {match['away-score']}
                </div>
            }

        </div>
    );
}

export default WrapWithBlock(MatchDetail, numberOfColumns, title);
