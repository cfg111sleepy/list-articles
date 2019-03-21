import React, { Component } from 'react'
import { connect } from 'react-redux'

class App extends Component {
    render() {
        const { name } = this.props.store
        return (
            <div>
                {name}
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