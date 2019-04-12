import React from 'react'
import { Link } from 'react-router-dom'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import { withStyles } from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress'
import { PropTypes } from 'prop-types'    
    

    function ArticleList(props) {

        const handleClick = event => {
            const { setPage } = props
            const page = Number(event.target.id)
            console.log(page)
            setPage(page)
        }

        const { articles,
                classes,
                search,
                currentPage,
                preLoader,
                articlePerPage } = props
                
        let articleArray = null
        let element = null
        let list = null
        let currentArticle = []
        const pageNumbers = []

        const indexOfLastArticle = currentPage * articlePerPage
        const indexOfFirstArticle = indexOfLastArticle - articlePerPage

       
        
        if (articles){
            currentArticle = articles.slice(indexOfFirstArticle, indexOfLastArticle)

            articleArray = currentArticle.filter(item => item.title.indexOf(search) !== -1 )

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
            
            for (let i = 1; i <= Math.ceil(articles.length / articlePerPage); i++) {
                pageNumbers.push(i);
            }        

            const renderPageNumbers = pageNumbers.map(number => {
                return (
                    <li
                        key={number}
                        id={number}
                        onClick={handleClick}
                    >   
                        { number }
                  </li>
                )
              })
            list = (<List component="nav" className={classes.root}>
                        { element }
                        <ul id="page-numbers">
                            {renderPageNumbers}
                        </ul> 
                    </List>)
        }
        const getBody = () => {
            if (list && !preLoader) return list
            else return <CircularProgress   />
        }

        return (
            <div>
                {getBody()}
            </div>
        )
    }


ArticleList.propTypes = {
    classes: PropTypes.object.isRequired,
    articles: PropTypes.array.isRequired,
    search: PropTypes.string,
    currentPage: PropTypes.number.isRequired,
    preLoader: PropTypes.bool.isRequired
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

