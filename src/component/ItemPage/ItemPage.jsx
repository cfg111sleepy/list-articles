import React, { Component } from 'react'

class ItemPage extends Component {
    render() {

        const { itemId, data } = this.props
        const idx = data.map(item => item.id).indexOf(Number(itemId))
        const element = data[idx]

        return (
            <div>
                <p>
                    {element.title}
                </p>
                <div>
                    {element.body}
                </div>
            </div>
        )
    }
}

export default ItemPage