/* eslint-disable react/no-unescaped-entities */
import "./../styles/globals.css"
import React from "react";
import App from "next/app";
import { wrapper } from "../redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { ReactReduxContext } from "react-redux";
import Script from "next/script";
import { GoogleOAuthProvider } from "@react-oauth/google";

class MyApp extends App {
  constructor(props) {
    super(props);
  }

  // Getting Initial props.
  static getInitialProps = async ({ Component, ctx }) => {
    const pageProps = {
      ...(Component.getInitialProps
        ? await Component.getInitialProps(ctx)
        : {}),
    };

    return {
      pageProps,
    };
  };

  render() {
    const { Component, pageProps } = this.props;
    return (
      <ReactReduxContext.Consumer>
        {({ store }) => (
          <PersistGate
            persistor={store.__PERSISTOR}
            loading={
              <div className="loaderContainer">
                <div className="loaderWrapper">
                  <span className="loaderSpinner" />
                </div>
              </div>
            }
          >
            <GoogleOAuthProvider clientId="251988766101-s9iaqkrca96jmloioji5iksorf49vrou.apps.googleusercontent.com">
              <Component {...pageProps} />
            </GoogleOAuthProvider>

            <Script
              async
              src="https://www.googletagmanager.com/gtag/js?id=G-CB7EBMGB0B"
            ></Script>
            <Script>
              {`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-CB7EBMGB0B');
  `}
            </Script>
          </PersistGate>
        )}
      </ReactReduxContext.Consumer>
    );
  }
}

export default wrapper.withRedux(MyApp);
