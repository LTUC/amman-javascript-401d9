import React from 'react';
import { getRemoteData } from './store/actions';
import { useDispatch, useSelector } from 'react-redux';


const App = (props) => {
    const dispatch = useDispatch();
    const state = useSelector((state) => {
        return { todos: state.todos }
    });

    return (
        <React.Fragment>
            <button onClick={() => dispatch(getRemoteData())}>Get TODO List</button>
            <section>
                {
                    state.todos.map((item, idx) => {
                        return (
                            <div key={idx}>
                                <h3>{item.assignee}</h3>
                                <span>{item.text}</span>
                                <hr />
                            </div>
                        )
                    })
                }
            </section>
        </React.Fragment>
    )
}

export default App;