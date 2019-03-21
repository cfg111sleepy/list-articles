import React, { Component } from 'react'

class ItemPage extends Component {
    render() {
        return (
            <div>
                {this.props.itemId}
            </div>
        )
    }
}

export default ItemPage