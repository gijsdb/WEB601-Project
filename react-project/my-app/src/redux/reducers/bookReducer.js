import {ADD_BOOK,DEL_BOOK} from "../actions/constants"

const initialState = {
  listOfBooks: []
};


export const bookReducer = (listOfBooks=[] , action) => {
    
  
  if (action.type === ADD_BOOK) {

      return [...listOfBooks, action.payload]

  } else if (action.type === DEL_BOOK) {
    console.log("Reached reducer")
    return listOfBooks.filter(name => name !== action.payload.name)
  }
    
    return listOfBooks
  }

  export default bookReducer;