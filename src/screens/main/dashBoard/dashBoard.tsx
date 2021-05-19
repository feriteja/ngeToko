import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import Header from './header';
import {dashBoardNavProp} from '../../../constant/type/routerType';
import {Carousel} from '../../../components';

const dashBoard = ({}) => {
  const navigation = useNavigation<dashBoardNavProp>();

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Carousel />
      </View>
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
