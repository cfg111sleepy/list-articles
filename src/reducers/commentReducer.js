import { initialState } from './index'


export const commentReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'CREATE_COMMENT_SUCCESS':
            return state

        case 'CREATE_COMMENT_ERROR':
            return state

        case 'GET_COMMENT_SUCCESS':
            return { ...state, comments: action.payload }

        case 'GET_COMMENT_FAIL':
            return console.error('error comment')
            
        default:
            return state
    }
}


