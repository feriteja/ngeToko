import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import IconFa from 'react-native-vector-icons/FontAwesome';
import IconFeather from 'react-native-vector-icons/Feather';
import measurement from '../../../constant/measurement';
import {dashBoardNavProp} from '../../../constant/type/routerType';
import {useNavigation} from '@react-navigation/core';

const header = () => {
  const navigation = useNavigation<dashBoardNavProp>();

  return (
    <View style={styles.header}>
      <TouchableOpacity
        onPress={() => navigation.openDrawer()}
        style={{padding: 10}}>
        <IconFa name="navicon" size={25} />
      </TouchableOpacity>
      <View
        style={{
          flex: 1,
          marginHorizontal: 10,
          backgroundColor: '#f5f5f5',
          borderRadius: 10,
          paddingVertical: 7,
          paddingHorizontal: 10,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <IconFeather name="search" size={20} />
          <TextInput
            placeholderTextColor="#aaa"
            placeholder="Silahkan cari apa ?"
            style={{
              flex: 1,
              color: '#000',
              paddingVertical: 0,
              marginVertical: 0,
              marginHorizontal: 5,
            }}
          />
        </View>
      </View>
      <TouchableOpacity
        onPress={() => navigation.push('favorite')}
        style={{padding: 10, borderRadius: 9999, backgroundColor: '#f5F5F5'}}>
        <IconFa name="heart-o" size={20} />
      </TouchableOpacity>
    </View>
  );
};

export default header;

const styles = StyleSheet.create({
  header: {
    paddingTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    height: measurement.HEADER_HEIGHT,
    alignItems: 'center',
    elevation: 0.2,
    borderBottomWidth: 0.1,
  },
});
