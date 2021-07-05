let initialState = {
    totalVotes: 0
}

export default (state = initialState, action) => {
    let { type, payload } = action;
    switch (type) {
        case 'INCREMENT':
            return payload.disabled ? state : { ...state, totalVotes: state.totalVotes + 1 };
        case 'RESET':
            return initialState;
        default:
            return state;
    }
}

// action should be in different files
// we already have the same actions in a the candidates file. 
// so we can move all the actions into seperate file.
// and use them in both files.
// export const increment = (person) => {
//     return {
//         type: 'INCREMENT',// for the string it should be in different file with const values
//         payload: person
//     }
// }

// export const reset = () => {
//     return {
//         type: 'RESET'
//     }
// }
