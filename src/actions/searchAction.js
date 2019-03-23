export function searchArticle(article) {
    return {
        type: 'SEARCH',
        payload: article
    }
}