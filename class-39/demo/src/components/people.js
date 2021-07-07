import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { get, add, remove } from '../rtk-store/people';

const People = (props) => {
    const dispatch = useDispatch();
    // this is the componenet local state.
    // not the store state from redux.
    const [name, setName] = useState('');

    const state = useSelector(state => {
        return {
            people: state.people
        }
    });

    useEffect(() => {
        //get all the people from the api
        //do some stuff
        dispatch(get());
    }, []);

    const handleSubmit = e => {
        e.preventDefault();
        e.target.reset();
        // dispatch the name from local state to redux store state.
        dispatch(add(name));
    }

    const handleChange = e => {
        setName(e.target.value);
    }

    return (
        <React.Fragment>
            <ul>
                {
                    state.people.map((person, idx) => {
                        return (
                            <li
                                key={idx}
                                onClick={() => dispatch(remove(person))}>
                                {person}
                            </li>
                        )
                    })
                }
            </ul>
            <form onSubmit={handleSubmit}>
                <input name="name" onChange={handleChange} />
            </form>
        </React.Fragment>
    );
}

export default People;