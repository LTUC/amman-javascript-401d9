import React from 'react';
import { connect } from 'react-redux';

import { increment, disable, reset } from '../store/candidates';

const VotesCounter = props => {
    return (

        <section>
            <table>
                <thead>
                    <tr>
                        <th>Candidate</th>
                        <th>Votes</th>
                        <th>PCT %</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.candidates.map((person, idx) =>
                            <tr
                                key={idx}
                                onDoubleClick={() => props.disable(person)}
                                onClick={() => person.disabled ? {} : props.increment(person)}
                            >
                                <td>{person.name}</td>
                                <td>{person.votes}</td>
                                <td>{person.votes ? ((person.votes / props.votes.totalVotes) * 100).toFixed(2) + '%' : '0%'}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
            <button onClick={props.reset}>Reset</button>
        </section>
    )
}

const mapStateToProps = state => ({
    votes: state.votes,
    candidates: state.candidates
});

const mapDispatchToProps = { increment, disable, reset };

export default connect(mapStateToProps, mapDispatchToProps)(VotesCounter);