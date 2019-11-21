import {FETCH_BOOKS_PENDING, FETCH_BOOKS_SUCCESS, FETCH_BOOKS_ERROR} from '../actions/bookActions';

export const initialState = {
    pending: false,
    books: [],
    error: null
}

export default function bookReducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_BOOKS_PENDING: 
            return {
                ...state,
                pending: true
            }
        case FETCH_BOOKS_SUCCESS:
            console.log(action)
            return {
                ...state,
                pending: false,
                books: action.payload
            }
        case FETCH_BOOKS_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        default: 
            return state;
    }
}

export const getBooks = state => state.books;
export const getBooksPending = state => state.pending;
export const getBooksError = state => state.error;