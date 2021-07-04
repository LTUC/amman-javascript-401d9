let initialState = {
    candidates: [
        { name: 'Omar', votes: 0 },
        { name: 'Shady', votes: 0 },
        { name: 'Tamara', votes: 0 },
    ],
    totalVotes: 0,
}

// this is a reducer
export default (state = initialState, action) => {
    let { type, payload } = action;

    switch (type) {
        case 'INCREMENT':
            let totalVotes = state.totalVotes + 1;
            let candidates = state.candidates.map(candidate => {
                if (candidate.name === payload) {
                    return { name: candidate.name, votes: candidate.votes + 1 }
                }
                return candidate;
            });

            return { totalVotes, candidates };
        case 'RESET':
            return initialState;
        default:
            return state;
    }

    // if (type === 'INCREMENT') {
    //     //THEN DO SOME STUFF
    // } else if (type === 'RESET') {
    //     return initialState;
    // } else {
    //     return state;
    // }

    //we need to return a new state
}

// BELOW ARE THE ACTIONS
export const increment = (name) => {
    return {
        type: 'INCREMENT',
        payload: name
    }
};

export const reset = () => {
    return {
        type: 'RESET',
    }
};
