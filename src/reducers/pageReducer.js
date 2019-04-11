import { initialState } from './index'

export const pageReducer = (state = initialState, action) => {
    
    switch(action.type) {
        case 'SET_PAGE_REQUEST':
            return {...state, currentPage: null, preLoader: true}

        case 'SET_PAGE_SUCCESS':
            return {...state, currentPage: action.payload, preLoader: false}

        default :
            return state
    }
}   