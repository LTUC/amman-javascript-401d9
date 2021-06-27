import React, { useState, useEffect } from 'react';

const People = (props) => {
    const [people, setPeople] = useState([]);
    const [name, setName] = useState('');

    const addPerson = (e) => {
        e.preventDefault();
        e.target.reset();
        // name && setPeople(['ibrahim', 'mohammad', name]);
        name && setPeople([...people, name]);
        // if(name) {
        //     setPeople([...people, name]);
        // }
    }

    const changeName = (e) => {
        setName(e.target.value);
        // console.log(e.target.value)
    }

    // use effects

    // This runs on EVERY re-render of the current component
    useEffect(() => {
        console.log('I RUN ON EVERY RE-RENDER');
    });

    // This runs only when the name changes
    useEffect(() => {
        console.log('Name Changed to', name);
        //TODO: make some validation checks it can be async
    }, [name]);

    // This runs only when the form is submitted (people has changed)
    useEffect(() => {
        console.log('Person Added');
        if (people.length >= 1) { document.title = `Welcom, ${name}!` }
    }, [people]);

    // This runs only once on the initial rendering
    useEffect(() => {
        console.log('Initial mount');
    }, []);

    // this effect has a cleanup
    // this could be in any of the previouse examples
    useEffect(() => {
        return (() => {
            console.log('component un mounted');
        })
    });

    return (
        <React.Fragment>
            <form onSubmit={addPerson}>
                <input onChange={changeName} />
            </form>
            <ul>
                {
                    people.map((person, idx) =>
                        <li key={idx}>{person}</li>
                    )
                }
            </ul>

        </React.Fragment>
    );
}

export default People;