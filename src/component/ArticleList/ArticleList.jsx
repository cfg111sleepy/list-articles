import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import { withStyles } from '@material-ui/core/styles'



class ArticleList extends Component {

    
    render() {
        const { article, classes, search } = this.props
        let articleArray = null
        let element = null

        if (article){
            articleArray = Object.values(article).filter(item => item.title.indexOf(search) !== -1 )

            element = articleArray.map((item) =>
                                            <Link 
                                                to={`/${item.id}`} 
                                                className={classes.url} 
                                                key={item.id}
                                            >
                                                <ListItem button>
                                                    <ListItemText primary={item.title} />
                                                <Divider/>
                                                </ListItem>
                                            </Link>
                                        )
        }
        return (
            <div>
                <List component="nav" className={classes.root}>
                    {element}
                </List>
            </div>
        )
    }
}

const styles = theme => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
    url: {
        textDecoration: 'none'
    }
});

export default withStyles(styles)(ArticleList);

