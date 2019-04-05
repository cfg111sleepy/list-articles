import { articleReducer } from './articleReducer'
import { commentReducer } from './commentReducer'
import { searchReducer } from './searchReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import { pageReducer } from './pageReducer'

export const rootReducer = combineReducers({
    articleReducer,
    commentReducer,
    searchReducer,
    pageReducer,
    firestore: firestoreReducer
})