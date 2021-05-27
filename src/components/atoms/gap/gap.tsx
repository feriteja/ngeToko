import React from 'react';
import {View, Text, ViewStyle} from 'react-native';

const gap = ({
  height,
  width,
  style,
}: {
  height?: number;
  width?: number;
  style?: ViewStyle;
}) => {
  return <View style={{height, width, ...style}} />;
};

export default gap;
