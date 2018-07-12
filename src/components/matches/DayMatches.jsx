import React from 'react';
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { getDayMatches } from '../../modules/daymatches-module'

import Title from '../Title';
import CompetitionMatchList from './CompetitionMatchList';
import PlayNextRound from '../matches/PlayNextRound';

class DayMatches extends React.Component {

    refresh() {
        this.props.dispatch(getDayMatches(this.props.match.params.gameId, this.props.match.params.matchDayId));
    }

//    componentDidMount() {
//        this.refresh();
//    }

    doSomething() {
        this.refresh();
    }

    render() {

        var stateSet = typeof (this.props.dayMatches['_embedded']) !== 'undefined';
        var matchCanBePlayed = stateSet
            && typeof (this.props.dayMatches['_forms']) !== 'undefined'
            && typeof (this.props.dayMatches['_forms']['play-match-day']) !== 'undefined';

        if (stateSet) {
            if (matchCanBePlayed) {
                let nextRoundProps = {
                    nextmatchdayform: this.props.dayMatches['_forms']['play-match-day'],
                    doSomething: this.doSomething
                };

                return (
                    <div>
                        <Title title="Matches" subtitle="" />
                        <div className="blocks">
                            <CompetitionMatchList matchesPerCompetition={this.props.dayMatches['_embedded']['rel:matches-per-competition']} />
                            <PlayNextRound {...nextRoundProps} />
                        </div>
                    </div>
                );
            }
            else {
                return (
                    <div>
                        <Title title="Matches" subtitle="" />
                        <div className="blocks">
                            <CompetitionMatchList matchesPerCompetition={this.props.dayMatches['_embedded']['rel:matches-per-competition']} />
                        </div>
                    </div>
                );                
            }
        }
        else {
            return null;
        }
    }
}

const mapStateToProps = (state) => ({
    dayMatches: state.dayMatches,
});

export default withRouter(connect(mapStateToProps)(DayMatches));
