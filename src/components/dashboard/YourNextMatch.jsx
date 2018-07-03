import React from 'react';

const YourNextMatch = (props) => {
    if (typeof (props.nextmatch) !== 'undefined') {

        return (
            <div>
                <div>
                    {props.nextmatch.date} - {props.nextmatch['competition-name']}
                    <br/>
                    {props.nextmatch['_embedded']['your-opponent'].name}
                </div>
            </div>
        );
    }
    else {
        return (
            <div>Your team doesn't play</div>
        );
    }
}

export default YourNextMatch;
