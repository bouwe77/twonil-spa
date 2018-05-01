import React from 'react';
import Api from '../../services/http/api';

import WrapWithBlock from '../Wrapper'

const numberOfColumns = 2;
const title = '';

class PlayNextRound extends React.Component {

    playNextRound() {
        const url = this.props.nextmatchdayform.action;
        Api.post(
            url,
            {},
            this.props.doSomething, // this is the parent component's function that is being called when the POST was successful
            (error) => { /* do nothing, for now */ });
    }

    render() {

        return (
            <div>
                <button onClick={(event) => this.playNextRound(event)}>{this.props.nextmatchdayform.title}</button>
            </div>
        );
    }
}

export default WrapWithBlock(PlayNextRound, numberOfColumns, title);
