import React from 'react';

import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

const withLayout = props => (
  <>
    <Header />
    {props.children}
    <Footer />
  </>
);

export default withLayout;
