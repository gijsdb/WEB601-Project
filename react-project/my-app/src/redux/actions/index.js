import {ADD_BOOK, DEL_BOOK, ADD_NOTE,DEL_NOTE} from "./constants"

// All actions you can perform in my app
let nextBookId = 0;
let nextNoteId = 0;

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

export const addNote = data => ({
  type: ADD_NOTE,
  id: nextNoteId++,
  payload: {
    data
  }
})

export const delNote = (id) => ({
  type: DEL_NOTE,
  payload: {
    id: id
  }
})

