/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';

import AppNavigation from './src/routes/index';

export default class App extends Component {
  render() {
    return <AppNavigation uriPrefix="myapp://" />;
  }
}
