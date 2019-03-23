const initialState = {
    search: ''
}

export function searchReducer(state = initialState, action) {
    switch(action.type){

        case 'SEARCH':
        return { ...state, search: action.payload }
  
        default:
        return state
      }
}