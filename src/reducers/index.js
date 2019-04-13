import { articleReducer } from './articleReducer'
import { commentReducerCreate } from './commentReducerCreate'
import { commentReducerFetch } from './commentReducerFetch'
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
    commentReducerFetch,
    commentReducerCreate,
    searchReducer,
    pageReducer,
    firestore: firestoreReducer
})