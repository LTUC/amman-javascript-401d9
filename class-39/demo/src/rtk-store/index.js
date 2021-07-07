import { combineReducers, configureStore } from "@reduxjs/toolkit";
import peopleSlice from './people';

const reducers = combineReducers({ people: peopleSlice });
// thunk middleware is included by default
// also the combose dev tools is included as well
const store = configureStore({ reducer: reducers });

export default store;