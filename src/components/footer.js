import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles( theme => ({
    footer: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        padding: '5vh'
    }
}))

const Footer = () => {

    const classes = useStyles();

    return (
        <div className={classes.footer}>
            <b>scoutspot.io@gmail.com</b>
        </div>
    )
}

export default Footer;