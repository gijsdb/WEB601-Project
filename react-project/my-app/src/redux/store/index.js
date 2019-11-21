import { applyMiddleware,createStore, combineReducers } from "redux";
//import bookReducer from "../reducers/bookReducer";
import noteReducer from "../reducers/noteReducer";
import bookReducer from "../reducers/bookReducerNew";
import thunk from 'redux-thunk';


const allReducers = combineReducers({
    bookReducer: bookReducer,
    noteReducer: noteReducer
})

const middlewares = [thunk];

const store = createStore(allReducers, applyMiddleware(...middlewares));

export default store;