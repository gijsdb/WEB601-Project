// All actions you can perform in my app
let nextBookId = 0;
let nextNoteId = 0;

export const ADD_BOOK = 'ADD_BOOK';
export const DEL_BOOK = 'DEL_BOOK';
export const ADD_NOTE = 'ADD_NOTE';
export const DEL_NOTE = 'DEL_NOTE';

export const addBook = data => ({
    type: ADD_BOOK,
    id: nextBookId++,
    payload: {
      data
    }
})

export const delBook = (id) => ({
  type: DEL_BOOK,
  payload: {
    id: id
  }
})
