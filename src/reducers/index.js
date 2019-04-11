import { articleReducer } from './articleReducer'
import { commentReducer } from './commentReducer'
import { searchReducer } from './searchReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import { pageReducer } from './pageReducer'

export const initialState = {
    articles: [],
    comments: [],
    preLoader: false,
    currentPage: 1,
    articlePerPage: 10,
    search: ''
}

export const rootReducer = combineReducers({
    articleReducer,
    commentReducer,
    searchReducer,
    pageReducer,
    firestore: firestoreReducer
})