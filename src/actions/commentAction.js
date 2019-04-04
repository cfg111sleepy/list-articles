export const createComment = (email, comment, itemId) => {
    return (dispatch, getState, { getFirestore }) => {
        const firestore = getFirestore()
        firestore.collection('comment').add({
            createComment: new Date(),
            email,
            comment,
            itemId
        }).then(() => {
            dispatch({ type: 'CREATE_COMMENT_SUCCESS' })
        }).catch(err => {
            dispatch({ type: 'CREATE_COMMENT_ERROR' }, err)
        })
    }
}

export const getComment = () => {
    return dispatch => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(response => response.json())
            .then(json => dispatch({
                type: 'GET_COMMENT_SUCCESS',
                payload: json
            }))
            .catch(()=> dispatch({
                type: 'GET_COMMENT_FAIL',
                payload: null
            }))
    }
}