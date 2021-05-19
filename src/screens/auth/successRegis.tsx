import {useNavigation} from '@react-navigation/core';
import React, {useEffect} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import IconFa from 'react-native-vector-icons/FontAwesome';
import {useDispatch} from 'react-redux';
import {Gap} from '../../components';
import {signOut} from '../../config/redux/actions/auth';

import {authNavigationPropSuccess} from '../../constant/type/router';

const successRegis = () => {
  const navigation = useNavigation<authNavigationPropSuccess>();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(signOut());
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 9,
            elevation: 2,
          }}
          onPress={() => navigation.goBack()}>
          <IconFa name="angle-left" color="#fff" size={40} style={{}} />
        </TouchableOpacity>
        <View
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 18,
              color: '#fff',
            }}>
            Terimakasih
          </Text>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          marginHorizontal: 40,
        }}>
        <IconFa name="opencart" size={60} color="#fff" />
        <Gap height={20} />
        <Text style={{fontWeight: 'bold', fontSize: 18, color: '#fff'}}>
          Terimakasih telah mendaftar
        </Text>
        <Gap height={10} />
        <Text style={{fontSize: 16, color: '#fff'}}>Selamat berbelanja</Text>
      </View>
    </View>
  );
};

export default successRegis;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(34,73,242)',
  },
  header: {
    height: 60,
    marginHorizontal: 25,
    alignItems: 'center',
    flexDirection: 'row',
  },
});
