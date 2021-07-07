import { createSlice } from "@reduxjs/toolkit";

//create slice
const peopleSlice = createSlice({
    name: 'people',
    initialState: [],
    reducers: {
        add(state, action) { state.push(action.payload) },
        remove(state, action) {
            return state.filter(p => p != action.payload)
        },
    }
});

/*
    const add = payload => {
        type: 'ADD',
        payload: payload
    }

    const remove = payload => {
        type: 'REMOVE',
        payload: payload
    }

    const reducer => (state = initialState, action) {
        switch(type)
            case 'ADD'
                return state.push(action.payload);
            case 'REMOVE'
                return state.filter(p => p != action.payload)
            case default
                return state;
    }
*/

// export reducer
export default peopleSlice.reducer;
// export actions
export const { add, remove } = peopleSlice.actions;
// get startwars people from async method.
export const get = () => async dispatch => {
    const res = await fetch('https://swapi.dev/api/people');
    const people = await res.json();

    people.results.forEach(item => dispatch(add(item.name)));
}
