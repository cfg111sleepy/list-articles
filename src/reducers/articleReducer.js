import { FETCH_ARTICLES_SUCCESS,
         FETCH_ARTICLES_REQUEST,
         FETCH_ARTICLES_FAILURE }   from '../constans/constants'
import { initialState }             from './index'

export function articleReducer(state = initialState, action) {

    switch(action.type){
        case FETCH_ARTICLES_FAILURE:
            return console.error('error article')

        case FETCH_ARTICLES_SUCCESS:
            return { ...state, articles: action.payload }

        case FETCH_ARTICLES_REQUEST:
            return console.log('Loading...')

        default:
            return state
    }
}