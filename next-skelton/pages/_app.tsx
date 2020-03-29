import App, { AppContext } from 'next/app';
import Head from 'next/head';
import React from 'react';
import {
  ThemeProvider as MaterialThemeProvider,
  StylesProvider,
} from '@material-ui/styles';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { Provider as ReduxProvider } from 'react-redux';
import withRedux, { ReduxWrapperAppProps } from 'next-redux-wrapper';
import { theme } from '../src/lib/page-context';
import { initStore } from '../src/store/index';

class MyApp extends App<ReduxWrapperAppProps> {
  static async getInitialProps({ Component, ctx }: AppContext) {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};
    return { pageProps };
  }

  componentDidMount() {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps, store } = this.props;

    return (
      <React.Fragment>
        <Head>
          <title>Artree</title>
        </Head>
        <StylesProvider injectFirst>
          <MaterialThemeProvider theme={theme}>
            <StyledThemeProvider theme={theme}>
              <ReduxProvider store={store}>
                <Component {...pageProps} />
              </ReduxProvider>
            </StyledThemeProvider>
          </MaterialThemeProvider>
        </StylesProvider>
      </React.Fragment>
    );
  }
}

export default withRedux(initStore)(MyApp);
