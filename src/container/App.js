import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from '../component/header/Header'
import ArticleList from '../component/ArticleList/ArticleList'
import ItemPage from '../component/ItemPage/ItemPage'
import { searchArticle } from '../actions/searchAction'
import { BrowserRouter as Router, Route } from 'react-router-dom'


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
                                    />
                        }} />
                </Router>
            </div>
        )
    }
}

const mapStateToProps = (store) => {
    return {
        article: store.article,
        comments: store.comments,
        search: store.search
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        searchArticle: article => dispatch(searchArticle(article))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)