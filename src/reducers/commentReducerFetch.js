import { FETCH_COMMENTS_SUCCESS,
         FETCH_COMMENTS_REQUEST,
         FETCH_COMMENTS_FAILURE }       from '../constans/constants'
import { initialState }                 from './index'


export const commentReducerFetch = (state = initialState, action) => {

switch (action.type) {

   case FETCH_COMMENTS_REQUEST:
       return console.log('Loading...')

   case FETCH_COMMENTS_SUCCESS:
       return { ...state, comments: action.payload }

   case FETCH_COMMENTS_FAILURE:
       return console.error('error comment')
       
   default:
       return state
}
}


