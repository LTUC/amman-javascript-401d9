import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import candidates from './candidates';
import votes from './votes';

let reducers = combineReducers({ candidates, votes });

const store = () => {
    return createStore(reducers, composeWithDevTools());
}

export default store();
