import React from 'react';
import { connect } from 'react-redux';

const Status = (props) => {
    return (
        <section>
            {props.totalVotes}
        </section>
    );
}

const mapStateToProps = state => ({
    totalVotes: state.counter.totalVotes
});

export default connect(mapStateToProps)(Status);


// high ordered function
// function Test(x){
//  return NestedFunction(y);
// }

// Test(1)(5);

// var t = Test(1);
// t(5)
