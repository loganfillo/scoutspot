import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles( theme => ({
    home: {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.secondary.contrastText,
      padding: '25vh',
      border: '2px solid',
      borderColor: theme.palette.divider,
      margin: '5vw',
      textAlign: 'center'
    }
}))

const Home = (props) => {

    const classes = useStyles();

    const { user } = props;

    return (
        <div className={classes.home}>
            <h1>Home</h1>
            <h3>Welcome To Scoutspot</h3>
        </div>
    )
}

export default Home;