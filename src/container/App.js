import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from '../component/header/Header'
import ArticleList from '../component/ArticleList/ArticleList'
import ItemPage from '../component/ItemPage/ItemPage'
import { searchArticle } from '../actions/searchAction'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { createComment } from '../actions/commentAction'

class App extends Component {
    render() {
        const { article, comments, search, searchArticle } = this.props
        return (
            <div>
                <Router>
                    <Header searchArticle={searchArticle} />
                    <Route path='/' exact render={() => 
                                                        <ArticleList 
                                                            article={article}
                                                            search={search} 
                                                            />} 
                    />
                    <Route path='/:id' render={({match}) => {
                        const { id } = match.params
                        return <ItemPage 
                                    itemId={id} 
                                    article={article}
                                    comments={comments}
                                    createComment={createComment}
                                />
                        }} />
                </Router>
            </div>
        )
    }
}

const mapStateToProps = (store) => {
    return {
        article: store.articleReducer.article,
        comments: store.commentReducer.comments,
        search: store.searchReducer.search
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        searchArticle: article => dispatch(searchArticle(article)),
        createComment: (comment) => dispatch(createComment(comment))

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)