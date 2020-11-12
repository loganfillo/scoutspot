import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import PageContainer from 'components/pageContainer'
import { getLocalizationProps } from 'common/localeContext'

const useStyles = makeStyles(theme => ({
    about: {
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.secondary.contrastText,
        padding: '25vh',
        border: '2px solid',
        borderColor: theme.palette.divider,
        margin: '5vw',
        textAlign: 'center'
    }
}))

const About = ({ localization }) => {

    const classes = useStyles();

    return (
        <PageContainer localization={localization}>
            <div className={classes.about}>
                <h1>{localization.text.ABOUT}</h1>
            </div>
        </PageContainer>
    )
}

export async function getStaticProps({ ...locale }) {
    const localization = getLocalizationProps(locale.locale)
    return {
        props: { localization }
    }
}

export default About;