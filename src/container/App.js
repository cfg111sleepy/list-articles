import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from '../component/header/Header'
import ArticleList from '../component/ArticleList/ArticleList'
import ItemPage from '../component/ItemPage/ItemPage';
import { BrowserRouter as Router, Route } from 'react-router-dom'


class App extends Component {
    render() {
        const { article, comments } = this.props
        return (
            <div>
                <Router>
                    <Header />
                    <Route path='/' exact render={() => <ArticleList article={article} />} />
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

const mapDispatchToProps = (store) => {
    return {
        article: store.article,
        comments: store.comments
    }
}

export default connect(mapDispatchToProps)(App)