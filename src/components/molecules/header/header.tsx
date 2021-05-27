import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import measurement from '../../../constant/measurement';
import IconFa from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/core';
import {Gap} from 'components';

type headerType = {
  title: string;
  favorite?: boolean;
  cart?: boolean;
  navigation: () => void;
};

const header = ({title = 'title', favorite, cart, navigation}: headerType) => {
  const navigationHeader = useNavigation();

  return (
    <View style={styles.headerContainer}>
      <Gap height={30} />
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TouchableOpacity
          style={{paddingHorizontal: 10}}
          onPress={() => navigationHeader.goBack()}>
          <IconFa name="angle-left" color="#000" size={40} style={{}} />
        </TouchableOpacity>
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>{title}</Text>
      </View>
      {favorite && (
        <TouchableOpacity
          onPress={() => navigation()}
          style={{paddingHorizontal: 10}}>
          <IconFa name="heart-o" size={20} />
        </TouchableOpacity>
      )}
      {cart && (
        <TouchableOpacity
          onPress={() => navigation()}
          style={{paddingHorizontal: 10}}>
          <IconFa name="opencart" size={20} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default header;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    height: measurement.HEADER_HEIGHT,

    alignItems: 'center',
    elevation: 0.2,
    borderBottomWidth: 0.1,
    justifyContent: 'space-between',
  },
});
