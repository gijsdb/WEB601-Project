export const bookReducer = (listOfBooks=[] , action) => {
    if(action.type === 'CREATE_CLAIM') {
      //Update this action
      return [...listOfClaims, action.payload]
    }
    return listOfClaims
  }