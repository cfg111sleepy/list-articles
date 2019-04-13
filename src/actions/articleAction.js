import { FETCH_ARTICLES_SUCCESS,
         FETCH_ARTICLES_FAILURE }   from '../constans/constants'

export const getArticle = () => {
    return dispatch => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => dispatch({
                type: FETCH_ARTICLES_SUCCESS,
                payload: json
            }))
            .catch(()=> dispatch({
                type: FETCH_ARTICLES_FAILURE,
                payload: null
            }))
    }
}