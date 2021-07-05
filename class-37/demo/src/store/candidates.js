// state
let initialState = [
    { name: 'Omar', votes: 0 },
    { name: 'Yasmeen', votes: 0 },
    { name: 'Amjad', votes: 0 },
];

//reducer
export default (state = initialState, action) => {
    let { type, payload } = action;
    switch (type) {
        case 'INCREMENT':
            return state.map(c => {// the c should be renamed as candidate. it's not recommended to name variables with characters.
                if (c.name === payload.name) {
                    return { name: c.name, votes: c.votes + 1 }
                }
                return c;
            });
        case 'DISABLE':
            // return state.map(candidate => candidate.name === payload.name ?  candidate.disable = true  : candidate);// this is wrong
            // return state.map(candidate => candidate.name === payload.name ? { name: candidate.name, votes: candidate.votes, disabled: true } : candidate);// this is correct
            return state.map(candidate => candidate.name === payload.name ? { ...candidate, disabled: true } : candidate);
        case 'RESET':
            return initialState;
        default:
            return state;
    }
}

// actions
export const increment = (person) => {
    return {
        type: 'INCREMENT',
        payload: person
    }
}

export const disable = (person) => {
    return {
        type: 'DISABLE',
        payload: person
    }
}

export const reset = () => {
    return {
        type: 'RESET'
    }
}
