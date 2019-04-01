export const createComment = (comment) => {
    return (dispatch, {getFirestore}) => {
        const firestore = getFirestore()
        firestore.collection('comment').add({
            ...comment,
            createComment: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_COMMENT_SUCCESS' })
        }).catch(err => {
            dispatch({ type: 'CREATE_COMMENT_ERROR' }, err)
        })
    }
  };