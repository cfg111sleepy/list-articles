import { CREATE_COMMENTS_REQUEST,
         CREATE_COMMENTS_FAILURE,
         CREATE_COMMENTS_SUCCESS }       from '../constans/constants'
import { initialState }                  from './index'


export const commentReducerCreate = (state = initialState, action) => {

    switch (action.type) {

        case CREATE_COMMENTS_REQUEST:
            return console.log('Loading...')

        case CREATE_COMMENTS_SUCCESS:
            return { ...state, comments: action.payload }

        case CREATE_COMMENTS_FAILURE:
            return console.error('error comment')
            
        default:
            return state
    }
}


