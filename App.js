import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';

import Store from './src/Store'
import {Header, CryptoContainer} from './src/components';


export default class App extends React.Component {
  render() {
    return (
      <Provider store={Store}>
        <View style={headerContainer}>
          <Header />
          <CryptoContainer />
        </View>
      </Provider>
     
    );
  }
}

const styles = StyleSheet.create({
  headerContainer: {
    display: 'flex',
    marginTop: 55,
    alignItems: 'center'
  },
  header: {
    fontWeight: 'bold',
    fontSize: 20,
  }
});

const {headerContainer, header} = styles
