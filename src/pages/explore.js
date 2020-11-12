import React from 'react';
import { makeStyles } from '@material-ui/core/styles'

import PageContainer from 'components/pageContainer'
import { getLocalizationProps } from 'providers/locale'

const useStyles = makeStyles(theme => ({
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

const Explore = ({ localization }) => {

    const classes = useStyles();

    return (
        <PageContainer localization={localization}>
            <div className={classes.explore}>
                <h1>{localization.text.EXPLORE}</h1>
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

export default Explore;