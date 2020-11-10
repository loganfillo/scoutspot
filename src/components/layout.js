import React, { Component, Fragment } from 'react';
import Header from './header';
import Footer from './footer';

class Layout extends Component {
  render () {
    const { children } = this.props
    return (
      <Fragment>
        <Header />
        {children}
        <Footer />
      </Fragment>
    );
  }
}

export default Layout;