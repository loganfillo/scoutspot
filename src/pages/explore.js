import React from 'react';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles( theme => ({
    explore: {
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.secondary.contrastText,
        padding: '25vh',
        border: '2px solid',
        borderColor: theme.palette.divider,
        margin: '5vw',
        textAlign: 'center'
    }
}))

const Explore = (props) => {

    const classes = useStyles();

    const { user } = props;

    return (
        <div className={classes.explore}>
            <h1>Explore</h1>
        </div>
    )
}

export default Explore;