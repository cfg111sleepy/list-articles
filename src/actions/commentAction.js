import { CREATE_COMMENTS_FAILURE,
         CREATE_COMMENTS_SUCCESS,
         FETCH_COMMENTS_SUCCESS,
         FETCH_COMMENTS_FAILURE }      from '../constans/constants'


export const createComment = (email, comment, itemId) => {
    return (dispatch, getState, { getFirestore }) => {
        const firestore = getFirestore()
        firestore.collection('comment').add({
            createComment: new Date(),
            email,
            comment,
            itemId
        }).then(() => {
            dispatch({ type: CREATE_COMMENTS_SUCCESS })
        }).catch(err => {
            dispatch({ type: CREATE_COMMENTS_FAILURE }, err)
        })
    }
}

export const getComment = () => {
    return dispatch => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(response => response.json())
            .then(json => dispatch({
                type: FETCH_COMMENTS_SUCCESS,
                payload: json
            }))
            .catch(()=> dispatch({
                type: FETCH_COMMENTS_FAILURE,
                payload: null
            }))
    }
}