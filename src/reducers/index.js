import { articleReducer } from './articleReducer'
import { commentReducer } from './commentReducer'
import { searchReducer } from './searchReducer'
import { combineReducers } from 'redux'

export const rootReducer = combineReducers({
    articleReducer,
    commentReducer,
    searchReducer
})