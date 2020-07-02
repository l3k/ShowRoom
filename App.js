import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux'

import Routes from './src/routes';

import store from './src/store/storeConfig'

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar style="dark" />
      <Routes />
    </Provider>
  );
}
