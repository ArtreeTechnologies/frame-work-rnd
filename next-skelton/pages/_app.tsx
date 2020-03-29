import App from 'next/app';
import Head from 'next/head';
import React from 'react';
import {
  ThemeProvider as MaterialThemeProvider,
  StylesProvider,
} from '@material-ui/styles';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import theme from '../src/lib/page-context';

export default class MyApp extends App {
  componentDidMount() {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <React.Fragment>
        <Head>
          <title>Artree</title>
        </Head>
        <StylesProvider injectFirst>
          <MaterialThemeProvider theme={theme}>
            <StyledThemeProvider theme={theme}>
              <Component {...pageProps} />
            </StyledThemeProvider>
          </MaterialThemeProvider>
        </StylesProvider>
      </React.Fragment>
    );
  }
}
