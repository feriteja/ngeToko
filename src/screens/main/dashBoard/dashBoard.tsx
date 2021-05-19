import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import Header from './header';
import {dashBoardNavProp} from '../../../constant/type/routerType';

const dashBoard = ({}) => {
  const navigation = useNavigation<dashBoardNavProp>();

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}></View>
      <Text>dashboard</Text>
    </View>
  );
};

export default dashBoard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {},
});
