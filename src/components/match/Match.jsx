import React from 'react';
import { withRouter } from 'react-router'

import Title from '../Title';
import MatchDetail from './MatchDetail';
//import PlayNextRound from '../matches/PlayNextRound';

class Match extends React.Component {

    getMatch() {
        console.log('----> getMatch BEGIN...');
        this.props.dispatchGetMatch(this.props.match.params.gameId, this.props.match.params.matchId);
        console.log('----> getMatch END...');
    }

    playMatches() {
        console.log('----> playMatch BEGIN...');
        this.props.dispatchPlayMatches(this.props.match.params.gameId, '0001100420');
        console.log('----> playMatch END...');
    }

//    componentDidMount() {
//        console.log('----> componentDidMount BEGIN...');
//        this.getMatch();
//        console.log('----> componentDidMount END...');
//    }

    render() {

        var stateSet = typeof (this.props.matchdata['_embedded']) !== 'undefined';
        if (stateSet) {
            return (
                <div>
                    <Title title="Match" subtitle="" />
                    <div className="blocks">
                        <MatchDetail matchdetail={this.props.matchdata['_embedded']['rel:match']} />
                        <button onClick={() => { this.playMatches(); this.getMatch() }}>moio de poio</button>
                    </div>
                </div>
            );
        }

        return null;
    }
}

export default withRouter(Match);