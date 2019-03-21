import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from '../component/header/Header'
import ItemList from '../component/ItemList/ItemList'
import ItemPage from '../component/ItemPage/ItemPage';
import { BrowserRouter as Router, Route } from 'react-router-dom'


class App extends Component {
    render() {
        const data = this.props.store
        return (
            <div>
                <Router>
                    <Header />
                    <Route path='/' exact render={() => <ItemList data={data} />} />
                    <Route path='/:id' render={({match}) => {
                        const { id } = match.params
                        return <ItemPage itemId={id} />
                        }} />
                </Router>
            </div>
        )
    }
}

const mapDispatchToProps = (store) => {
    return {
        store,
    }
}

export default connect(mapDispatchToProps)(App)