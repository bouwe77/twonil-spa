import React from 'react';

const MatchListItem = (props) => {

    var match = props.match;

    return (
        <div>
            {match['_embedded']['home-team'].name} - {match['_embedded']['away-team'].name}

            {match.played &&
                <div>
                    {match['home-score']} - {match['away-score']}
                </div>
            }
            <br />
        </div>
    );
}

export default MatchListItem;





