import React, { Component, Fragment } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import classnames from 'classnames'
import IconButton from '@material-ui/core/IconButton'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Collapse from '@material-ui/core/Collapse'
import TextField from '@material-ui/core/TextField'
import AddComment from '@material-ui/icons/AddComment'
import Fab from '@material-ui/core/Fab'
import Divider from '@material-ui/core/Divider'
import { PropTypes } from 'prop-types'




class ItemPage extends Component {

    constructor() {
        super()

        this.state = {
            expanded: false,
            email: '',
            comment: ''
        }
    }

    handleExpandClick = () => {
        this.setState(state => ({ expanded: !state.expanded }))
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        })
    }

    addCommentToDB = e => {
        e.preventDefault()
        const { email, comment } = this.state
        const { itemId, createComment } = this.props 
        
        createComment(email, comment, itemId)
    }

    render() {
        const { itemId, articles, comments, classes, dbComments } = this.props
        let commentsArrayDB = null
        let commentsElementDB = null
        let idx = null
        let commentsArray = null
        let commentsElement = null
        let articleElement = null

        if (articles && comments) {
            idx = articles.map(item => item.id).indexOf(Number(itemId))
        

            articleElement = articles[idx]
                
            commentsArray = comments.filter(item => 
                                                    item.postId === Number(itemId))
            
            commentsElement = commentsArray.map(item => (
                                                            <div key={item.id}>
                                                                <Typography component="p">
                                                                    <Typography variant="caption">
                                                                        email: {item.email}
                                                                    </Typography>
                                                                    {item.name}
                                                                </Typography>
                                                                <Divider />
                                                            </div>))
        }

        if (dbComments) {
            commentsArrayDB = Object.values(dbComments).filter(item => 
                                                                    Number(item.itemId) === Number(itemId))

            commentsElementDB = commentsArrayDB.map(item =>(
                                                        <div key={item.createComment}>
                                                            <Typography component="p">
                                                                <Typography variant="caption">
                                                                    email: {item.email}
                                                                </Typography>
                                                                {item.comment}
                                                            </Typography>
                                                            <Divider />
                                                        </div>
                                                            
            ))
        }

        return (
            <Fragment>
                <div className={classes.center}>
                    <Paper className={classes.root} elevation={1}>
                        <Typography variant="h5" component="h3" align="center">
                            {articleElement ? articleElement.title : null}
                        </Typography>
                        <Typography component="p" variant="subtitle1">
                            {articleElement ? articleElement.body : null}
                        </Typography>
                        <IconButton
                            className={classnames(classes.expand, {
                                [classes.expandOpen]: this.state.expanded,
                            })}
                            onClick={this.handleExpandClick}
                            aria-expanded={this.state.expanded}
                            aria-label="Show more"
                        >
                            <ExpandMoreIcon />
                        </IconButton>
                        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                            <Typography variant="h6" component="h4" >
                               Comments:
                            </Typography>
                            {commentsElement}
                            {commentsElementDB}
                            <Typography component="h4" >
                               Add Comment
                            </Typography>
                            <form className={classes.commentForm} >
                                <TextField
                                    onChange={this.handleChange('email')}
                                    value={this.state.email}
                                    id="outlined-email-input"
                                    label="Email"
                                    className={classes.textField}
                                    type="email"
                                    name="email"
                                    autoComplete="email"
                                    margin="normal"
                                    variant="outlined"
                                />
                                <TextField
                                    onChange={this.handleChange('comment')}
                                    value={this.state.comment}
                                    id="outlined-textarea"
                                    label="Text Comment"
                                    multiline
                                    className={classes.textField}
                                    margin="normal"
                                    variant="outlined"
                                />
                                <Fab 
                                    color='primary' 
                                    variant="extended" 
                                    aria-label="Delete" 
                                    className={classes.fab}
                                    onClick={this.addCommentToDB}
                                >
                                    <AddComment 
                                        className={classes.extendedIcon} 
                                    />
                                    Add Comment
                                </Fab>
                            </form>
                        </Collapse>
                    </Paper>
                </div>
            </Fragment>
        )
    }
}

ItemPage.proptype = {
    classes: PropTypes.object.isRequired,
    itemId: PropTypes.number.isRequired,
    article: PropTypes.object.isRequired,
    comments: PropTypes.object.isRequired,
    createComment: PropTypes.func.isRequired,
    dbComments: PropTypes.object.isRequired
}

const styles = theme => ({
    root: {
        width: '85%',
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
    },
    center: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
    commentForm: { 
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifContent: 'start'
    }
  });

export default withStyles(styles)(ItemPage)