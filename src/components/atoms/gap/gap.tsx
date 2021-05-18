import React from 'react';
import {View, Text, ViewStyle} from 'react-native';

const gap = ({
  height = 0,
  width = 0,
  style,
}: {
  height?: number;
  width?: number;
  style?: ViewStyle;
}) => {
  return <View style={{height, width, ...style}} />;
};

export default gap;
