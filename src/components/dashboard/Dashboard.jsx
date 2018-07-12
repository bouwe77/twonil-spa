import React from 'react';
import { withRouter } from 'react-router'
import { connect } from 'react-redux';

//import { getDashboard } from '../modules/dashboard-module';

import Title from '../Title';
import NextMatchDay from './NextMatchDay';
import TeamRating from './TeamRating';
import LeagueTable from './LeagueTable';

class Dashboard extends React.Component {

//  componentDidMount() {
//this.props.dispatch(getDashboard(this.props.match.params.gameId))
//  }

  render() {

    var stateSet = typeof (this.props.dashboard["rel:my-team"]) !== 'undefined'; 
    if (stateSet) {

      return (
        <div>

          <Title title="Dashboard" subtitle={this.props.dashboard["rel:my-team"].name} />

          <div className="blocks">

            <NextMatchDay nextmatchday={this.props.dashboard['rel:next-match-day']} />

            <TeamRating team={this.props.dashboard["rel:my-team"]} />

            <LeagueTable leaguetable={this.props.dashboard['rel:leaguetable']} />

          </div>

        </div>
      );
    }

    return null;
  }
}

const mapStateToProps = (state) => ({
  dashboard: state.dashboard,
});

export default withRouter(connect(mapStateToProps)(Dashboard));
