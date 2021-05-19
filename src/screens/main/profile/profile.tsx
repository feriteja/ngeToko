import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import auth from '@react-native-firebase/auth';
import {useDispatch} from 'react-redux';
import {signOut} from '../../../config/redux/actions/auth';
import {useNavigation} from '@react-navigation/core';
import {bottomNavPropProfile} from '../../../constant/type/routerType';

const profile = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<bottomNavPropProfile>();

  const signOutHandler = async () => {
    try {
      dispatch(signOut());
      navigation.navigate('dashBoard', {screen: 'dashBoard'});
    } catch (error) {}
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Pressable onPress={() => signOutHandler()}>
        <Text>Logout</Text>
      </Pressable>
    </View>
  );
};

export default profile;

const styles = StyleSheet.create({});
