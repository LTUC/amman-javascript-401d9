const initialState = [];

export default (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case 'GET':
            return payload;
        default:
            return state;
    }
}


// const someAction = () => {
//     return {
//         type: 'ANY_TYPE',
//         payload: 'test'
//     }
// }
