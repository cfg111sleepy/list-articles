import { SET_PAGE_REQUEST,
         SET_PAGE_SUCCESS } from '../constans/constants'

export const setPage = (page) => {
    return dispatch => {
        dispatch({
            type: SET_PAGE_REQUEST,
            payload: null,
        })

        setTimeout(() => {
            dispatch({
                type: SET_PAGE_SUCCESS,
                payload: page,
                })
        }, 3000)
    }
}