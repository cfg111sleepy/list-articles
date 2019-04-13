import { SEARCH_ARTICLES }  from '../constans/constants'
import { initialState }     from './index'

export const searchReducer = (state = initialState, action) => {

    switch(action.type){
        case SEARCH_ARTICLES:
            return { ...state, search: action.payload }

        default:
            return state
      }
}