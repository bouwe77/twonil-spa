import React from 'react';
import MatchList from './MatchList';
import WrapWithBlock from '../Wrapper'

const numberOfColumns = 6;
const title = '';

const CompetitionMatchList = (props) => {
    return (
        <div>
            {props.matchesPerCompetition.map((competition, index) => (
                <div key={index}>
                    <b>{competition['competition-name']}</b>
                    <br />
                    <MatchList matches={competition['_embedded']['rel:matches']} />
                    <br />
                </div>
            ))}

        </div>
    );
};

export default WrapWithBlock(CompetitionMatchList, numberOfColumns, title);
