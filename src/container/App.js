import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from '../component/header/Header'
import ArticleList from '../component/ArticleList/ArticleList'
import ItemPage from '../component/ItemPage/ItemPage'
import { searchArticle } from '../actions/searchAction'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { createComment } from '../actions/commentAction'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { getArticle } from '../actions/articleAction'
import { getComment } from '../actions/commentAction'

 

class App extends Component {
    render() {
        const { article, comments, search, searchArticle, createComment, dbComments } = this.props
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
                    <Route path='/:id' render={({ match }) => {
                                            const { id } = match.params
                                            return  <ItemPage 
                                                        itemId={id} 
                                                        article={article}
                                                        comments={comments}
                                                        createComment={createComment}
                                                        dbComments={dbComments}
                                                    />
                                        }} 
                    />
                </Router>
            </div>
        )
    }
}

const mapStateToProps = (store) => {
    return {
        article: store.articleReducer,
        comments: store.commentReducer,
        search: store.searchReducer.search,
        dbComments: store.firestore.data.comment
    }
    
}

const mapDispatchToProps = (dispatch) => {
    return {
        searchArticle: article => dispatch(searchArticle(article)),
        createComment: (email, comment, itemId) => dispatch(createComment(email, comment, itemId)),
        getArticle: dispatch(getArticle()),
        getComment: dispatch(getComment())
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
        { collection: 'comment' }
    ])
)(App)