export default class ApiService {
    _apiBaseURL = 'https://jsonplaceholder.typicode.com'
    _postURL = '/posts/'
    _commentsURL = '/comments/'

    async getResource(url) {
        const res = await fetch(this._apiBaseURL + url)
        if (!res.ok) {
            throw new Error(`Could not fetch ${url} recived ${res.status}`)
        }
        return await res.json();
    }

    getAllPosts = async () => {
        const res = await this.getResource(this._postURL)
        return res.results
    }
    getAllComments = async () => {
        const res = await this.getResource(this._commentsURL)
        return res.results
    }
}