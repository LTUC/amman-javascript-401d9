import { createStore, combineReducers } from 'redux';

// This dependency enables the Redux Dev Tools in your chrome browser
import { composeWithDevTools } from 'redux-devtools-extension';

// import counter from './votes';
import reducer from './votes';

// Combine reducers isn't really necessary when you only have one reducer.
// But 99.99% of all Redux apps will have more than one reducer to 'combine'
// and we need to use combineReducers, since Redux only work with one root-reducer
let reducers = combineReducers({ counter: reducer });

const store = () => {
    return createStore(reducers, composeWithDevTools());
}

export default store();

// import { createStore } from 'redux';
// import reducer from './votes';
// const store = () => {
//     return createStore(reducers);
// }
// export default store();