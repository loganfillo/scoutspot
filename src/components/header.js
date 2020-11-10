import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from 'next/link'

import { useLocale } from 'providers/locale';
import { useTheme } from 'providers/theme';

const useStyles = makeStyles(theme => ({
    header: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        textAlign: 'left',
        padding: '5vh'
    },
    headerLink: {
        margin: '2vw'
    }
}))

const Header = () => {

    const classes = useStyles()
    const locale = useLocale()
    const theme = useTheme()
    const text = locale.text

    return (
        <div className={classes.header}>
            <Link href="/" >
                <button className={classes.headerLink}>Home</button>
            </Link>
            <Link href="/explore" >
                <a className={classes.headerLink}>Explore</a>
            </Link>
            <Link href="/events" >
                <a className={classes.headerLink}>Events</a>
            </Link>
            <Link href="/about" >
                <a className={classes.headerLink}>About</a>
            </Link>
            <button onClick={() => {}}>Log Off</button>
            <label> 
                {'   ' + text.msg + '  '}
                <select onChange={(e) => locale.onLocaleChange(e.target.value)}>
                    <option value="en">English</option>
                    <option value="es">Spanish</option>
                    <option value="fr">French</option>
                    <option value="gr">German</option>
                </select>
            </label>
            <label>
                {'   Theme:  '}
                <select onChange={(e) => theme.onThemeChange(e.target.value)}>
                    <option value="LIGHT">Light</option>
                    <option value="DARK">Dark</option>
                </select>
            </label>
        </div>
    )
}

export default Header;