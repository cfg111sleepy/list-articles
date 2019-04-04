export const getArticle = () => {
    return dispatch => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => dispatch({
                type: 'GET_ARTICLE_SUCCESS',
                payload: json
            }))
            .catch(()=> dispatch({
                type: 'GET_ARTICLE_FAIL',
                payload: null
            }))
    }
}