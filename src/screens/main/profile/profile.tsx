import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import auth from '@react-native-firebase/auth';

const profile = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Pressable onPress={() => auth().signOut()}>
        <Text>Logout</Text>
      </Pressable>
    </View>
  );
};

export default profile;

const styles = StyleSheet.create({});
