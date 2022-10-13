import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import 'antd/dist/antd.css';
import wrapper from '../store/configureStore';

const SNSApp = ({ Component }) => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <title>SNSApp</title>
    </Head>
    <Component />
  </>
);

SNSApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export function reportWebVitals(metric) {
  console.log(metric);
}

export default wrapper.withRedux(SNSApp);

