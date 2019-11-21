export const FETCH_BOOKS_PENDING = 'FETCH_BOOKS_PENDING';
export const FETCH_BOOKS_SUCCESS = 'FETCH_BOOKS_SUCCESS';
export const FETCH_BOOKS_ERROR = 'FETCH_BOOKS_ERROR';

export function fetchBooksPending() {
    return {
        type: FETCH_BOOKS_PENDING
    }
}

export function fetchBooksSuccess(books) {
    return {
        type: FETCH_BOOKS_SUCCESS,
        books: books
    }
}

export function fetchBooksError(error) {
    return {
        type: FETCH_BOOKS_ERROR,
        error: error
    }
}