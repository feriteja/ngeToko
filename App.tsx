import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Router from './src/config/router';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <Router />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
