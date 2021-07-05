import React from 'react';
import Votes from './components/vote-counter';
import Status from './components/status';

function App() {
    return (
        <React.Fragment>
            <Votes />
            <Status />
        </React.Fragment>
    );
}

export default App;
