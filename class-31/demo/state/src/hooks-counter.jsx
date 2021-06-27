import React, { useState } from 'react';

function App(props) {
    const [clicks, setClicks] = useState(0);
    const [factorOfFive, setFactorOfFive] = useState(false);

    // const [state, setState] =
    //  useState({ clicks: 0, factorOfFive: false });

    const updateCounters = () => {
        let newCount = clicks + 1;
        setClicks(newCount);// set clicks state

        setFactorOfFive(newCount % 5 === 0);
    }

    return (
        <div>
            <h2>Button has been clicked {clicks} item(s)</h2>
            <h2>Factor of Five? {factorOfFive.toString()}</h2>
            <button onClick={updateCounters}>Update Clicks</button>
        </div>
    )
}

export default App;