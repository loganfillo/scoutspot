import React, { Fragment, useEffect } from 'react'
import PropTypes from 'prop-types';
import Head from 'next/head'
import CssBaseline from '@material-ui/core/CssBaseline'

import { AuthProvider } from 'providers/auth'
import { ThemeProvider } from 'providers/theme'

const App = ({ Component, pageProps }) => {

  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, [])

  return (
    <Fragment>
      <Head>
        <title>Scoutspot</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider>
        <AuthProvider>
          <CssBaseline />
          <Component {...pageProps} />
        </AuthProvider>
      </ThemeProvider>
    </Fragment>
  )
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default App