import { SEARCH_ARTICLES }  from '../constans/constants'


export function searchArticle(article) {
    return {
        type: SEARCH_ARTICLES,
        payload: article
    }
}