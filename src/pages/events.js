import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles( theme => ({
    events: {
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.secondary.contrastText,
        padding: '25vh',
        border: '2px solid',
        borderColor: theme.palette.divider,
        margin: '5vw',
        textAlign: 'center'
    }
}))

const Events = (props) => {

    const classes = useStyles();

    return (
        <div className={classes.events}>
            <h1>Events</h1>
        </div>
    )
}

export default Events;