import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
import { Global } from "@emotion/react";
import GlobalStyles from "../GlobalStyles";
import "antd/dist/antd.css";
import wrapper from "../store/configureStore";
import Header from "../components/frames/Header";
import Footer from "../components/frames/Footer";

const App = ({ Component }) => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <title>SNSApp</title>
    </Head>
    <Global styles={GlobalStyles} />
    <div className="app-container">
      <Header />
      <Component />
      <Footer />
    </div>
  </>
);

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

// export function reportWebVitals(metric) {
//   console.log(metric);
// }

// export default App;
export default wrapper.withRedux(App);
