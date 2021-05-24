import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useAppSelector} from '../../../config/redux/store';

const cart = () => {
  const cart = useAppSelector(state => state.cart);
  const auth = useAppSelector(state => state.auth);
  return (
    <View>
      <Text></Text>
    </View>
  );
};

export default cart;

const styles = StyleSheet.create({});
