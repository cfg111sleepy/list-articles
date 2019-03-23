import React, { Component, Fragment } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import classnames from 'classnames'
import IconButton from '@material-ui/core/IconButton'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Collapse from '@material-ui/core/Collapse'


class ItemPage extends Component {

    constructor() {
        super()

        this.state = {
            expanded: false
        }
    }

    handleExpandClick = () => {
        this.setState(state => ({ expanded: !state.expanded }));
    };

    render() {

        const { itemId, article, comments, classes } = this.props

        const idx = article.map(item => 
                                        item.id).indexOf(Number(itemId))

        const artcleElement = article[idx]

        const commentsArray = comments.filter(item => 
                                                    item.postId === Number(itemId))

        const commentsElement = commentsArray.map(item => (
                                                        <div key={item.id}>
                                                            <Typography component="p">
                                                                <Typography variant="caption">
                                                                    {item.email}
                                                                </Typography>
                                                                {item.name}
                                                            </Typography>
                                                        </div>))

        return (
            <Fragment>
                <div className={classes.center}>
                    <Paper className={classes.root} elevation={1}>
                        <Typography variant="h5" component="h3" align="center">
                            {artcleElement.title}
                        </Typography>
                        <Typography component="p" variant="subtitle1">
                            {artcleElement.body}
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
                        </Collapse>
                    </Paper>
                </div>
            </Fragment>
        )
    }
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
  });

export default withStyles(styles)(ItemPage)