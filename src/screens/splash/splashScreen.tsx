import React, {useEffect} from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import IconFa from 'react-native-vector-icons/FontAwesome';
import {Gap} from '../../components';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/core';
import {splashNavProp} from '../../constant/type/routerType';
import {useDispatch} from 'react-redux';
import {splash} from '../../config/redux/actions/auth';
import {getItemList} from '../../config/redux/actions/itemActions';

const splashScreen = () => {
  const navigation = useNavigation<splashNavProp>();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getItemList());

    if (auth().currentUser) {
      dispatch(splash(auth().currentUser?.providerData));
    }
    navigation.replace('main', {
      screen: 'dashBoard',
      params: {screen: 'dashBoard'},
    });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <IconFa name="opencart" size={160} color="#fff" />
      </View>
      <View style={styles.footer}>
        <ActivityIndicator size="large" color="#fff" />
        <Gap height={20} />
        <Text style={{color: '#fff', fontSize: 14}}>Mohon tunggu sebentar</Text>
      </View>
    </View>
  );
};

export default splashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(34,73,242)',
  },
  logo: {
    flex: 9,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
