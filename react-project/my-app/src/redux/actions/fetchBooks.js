import {fetchBooksPending, fetchBooksSuccess, fetchBooksError} from './bookActions';


function fetchBooks() {
    return dispatch => {
        dispatch(fetchBooksPending());
        fetch('http://localhost:4200/api/books')
        .then(res => res.json())
        .then(res => {
            console.log(res)
            if(res.error) {
                throw(res.error);
            }
            dispatch(fetchBooksSuccess(res));
            return res.books;
        })
        .catch(error => {
            dispatch(fetchBooksError(error));
        })
    }
}

export default fetchBooks;
