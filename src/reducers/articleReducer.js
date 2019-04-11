import { initialState } from './index'

export function articleReducer(state = initialState, action) {

    switch(action.type){
        case 'GET_ARTICLE_FAIL':
            return console.error('error article')

        case 'GET_ARTICLE_SUCCESS':
            return { ...state, articles: action.payload }

        default:
            return state
    }
}