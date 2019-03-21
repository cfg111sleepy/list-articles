import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class ItemList extends Component {
    render() {
        const { data } = this.props

        const element = data.map((item) =>
                                    <div key={item.id}>
                                        <Link to={`/${item.id}`}> 
                                            <p>{item.title}</p>
                                        </Link>
                                    </div>)
        return (
            <div>
                {element}
            </div>
        )
    }
}

export default ItemList