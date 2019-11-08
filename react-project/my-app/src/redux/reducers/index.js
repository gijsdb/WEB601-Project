import { combineReducers } from 'redux'
import bookReducer from '../reducers/bookReducer'

// Combines the reducer todos and visibility filter
export default combineReducers({
  bookReducer,
})