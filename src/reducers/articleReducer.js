const initialState = {
}

export function articleReducer(state = initialState, action) {
    switch(action.type){
        case 'GET_ARTICLE_FAIL':
            return {...state}

        case 'GET_ARTICLE_SUCCESS':
            return {...state, ...action.payload}

        default:
            return state
    }
}