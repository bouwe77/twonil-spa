import React from 'react';

import MatchListItem from './MatchListItem';

const MatchList = (props) => {
    return (
        <div>
            {props.matches.map((match, index) => (
                <MatchListItem match={match} key={index} />
            ))}
        </div>
    );
}

export default MatchList;