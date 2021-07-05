import React from 'react';
import { connect } from 'react-redux';

const Status = props => {
    let currentLeader = { name: 'No Leader', votes: 0 };
    let leader = props.candidates.reduce((winning, record) => {
        let r = record.votes > winning.votes ? record : winning
        return r;
    }, currentLeader);

    return (
        <section>
            <span>Current Leader: {leader.name}</span>
            <span>Votes Cast: {props.votes.totalVotes}</span>
        </section>
    );
}

const mapStateToProps = state => ({
    votes: state.votes,
    candidates: state.candidates
});

export default connect(mapStateToProps)(Status);
