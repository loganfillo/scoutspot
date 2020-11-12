import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from 'next/link'
import { useRouter } from 'next/router'

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
    const router = useRouter()
    const text = locale.text

    return (
        <div className={classes.header}>
            <Link href="/" >
                <a className={classes.headerLink}>{text.HOME}</a>
            </Link>
            <Link href="/explore" >
                <a className={classes.headerLink}>{text.EXPLORE}</a>
            </Link>
            <Link href="/events" >
                <a className={classes.headerLink}>{text.EVENTS}</a>
            </Link>
            <Link href="/about" >
                <a className={classes.headerLink}>{text.ABOUT}</a>
            </Link>
            <select onChange={(e) => router.push('/', '/', { locale: e.target.value })}>
                <option value="en" selected={locale.locale === "en"}>English</option>
                <option value="es" selected={locale.locale === "es"}>Spanish</option>
                <option value="fr" selected={locale.locale === "fr"}>French</option>
                <option value="gr" selected={locale.locale === "gr"}>German</option>
            </select>
            <select onChange={(e) => theme.onThemeChange(e.target.value)}>
                <option value="LIGHT">Light</option>
                <option value="DARK">Dark</option>
            </select>
        </div>
    )
}

export default Header;