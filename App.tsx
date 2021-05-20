import React, {useEffect} from 'react';
import {LogBox, StyleSheet, Text, View} from 'react-native';
import Router from './src/config/router';
import {Provider} from 'react-redux';
import Store from './src/config/redux/store';

const App = () => {
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);
  return (
    <Provider store={Store}>
      <View style={{flex: 1}}>
        <Router />
      </View>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
