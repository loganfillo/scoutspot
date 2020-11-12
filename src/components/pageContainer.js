import React from 'react'
import Header from './header'
import Footer from './footer'

import { LocaleProvider } from 'providers/locale'

const PageContainer = ({ localization, children }) => {
    return (
      <LocaleProvider localization={localization}>
        <Header />
        {children}
        <Footer />
      </LocaleProvider>
    )
}

export default PageContainer;