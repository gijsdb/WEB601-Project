import {ADD_NOTE,DEL_NOTE} from "../actions/constants"

const initialState = {
    listOfNotes: []
};

export const noteReducer = (listOfNotes=[] , action) => {
    
    if(action.type === ADD_NOTE) {

      return [...listOfNotes, action.payload]

    } else if(action.type == DEL_NOTE) {

        return listOfNotes.filter(name => name !== action.payload.name)   

    }
    return listOfNotes;
  }

  export default noteReducer;