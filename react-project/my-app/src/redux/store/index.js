import { createStore, combineReducers } from "redux";
import bookReducer from "../reducers/bookReducer";
import noteReducer from "../reducers/noteReducer";


const allReducers = combineReducers({
    bookReducer: bookReducer,
    noteReducer: noteReducer
})

const store = createStore(allReducers);

export default store;