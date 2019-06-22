/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { PureComponent } from 'react';
//Redux
import { Provider, connect } from 'react-redux';
import { ThemeProvider } from 'react-native-elements';

import AppNavigation from './src/routes/index';
import theme from './src/styles/theme';

import configureStore from './src/redux/store/index';

const store = configureStore();

class App extends PureComponent {
  render() {
    return <AppNavigation uriPrefix="myapp://" />;
  }
}

export default () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>
);
