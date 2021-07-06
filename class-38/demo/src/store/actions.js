import superagent from 'superagent';

const api = 'https://api-server-0.herokuapp.com/todo';


export const getRemoteData = () => (dispatch, state) => {
    // do some async calls
    // return data from the server
    // then call the action create 'getAction'
    return superagent.get(api).then(res => {//100 SECOND
        dispatch(getAction(res.body));
        // dispatch({
        //     type: 'GET',
        //     payload: res.body,
        // });
    });
}

export const getAction = payload => {
    return {
        type: 'GET',
        payload: payload,
        // payload,
    }
}
