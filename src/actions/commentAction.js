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