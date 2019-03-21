import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from '../component/header/Header'

class App extends Component {
    render() {
        return (
            <div>
                <Header />
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