import React from 'react';
import { connect } from 'react-redux';

import { increment, reset } from '../store/votes';

const VoteCounter = props => {
    return (
        <section>
            <ul>
                {props.counter.candidates.map(person =>
                    <li onClick={() => props.increment(person.name)} key={person.name}>{person.name} : {person.votes}</li>)}
            </ul>
            <button onClick={props.reset}>Reset</button>
        </section>
    );
}

// <someParentCOmponenet>

//  <AnyComponent counter={state.candidates} increment={() => {some code}} />
//  <AnyComponent counter={state.candidates} increment={dispatch(someaction)} />
// </someParentCOmponenet>

const mapStateToProps = state => ({
    counter: state.counter
})

const mapDispatchToProps = { increment, reset };

// const mapDispatchToProps = ({
//     increment: () => dispatch(increment()),
//     reset: () => dispatch(reset()),
// })

export default connect(mapStateToProps, mapDispatchToProps)(VoteCounter);
