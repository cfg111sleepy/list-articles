import { articleReducer } from './articleReducer'
import { commentReducer } from './commentReducer'
import { searchReducer } from './searchReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'

export const rootReducer = combineReducers({
    articleReducer,
    commentReducer,
    searchReducer,
    firestore: firestoreReducer
})