import {useAppSelector} from '@redux/store';
import React, {useRef, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  Alert,
  Pressable,
  StatusBar,
  ViewProps,
  ViewStyle,
} from 'react-native';
import IconFa from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';
import {BaseNavigationContainer} from '@react-navigation/core';

const slideIn = {
  from: {
    transform: [{translateY: 0}],
  },
  to: {
    transform: [{translateY: 100}],
  },
};

const cartFoot = () => {
  const cart = useAppSelector(state => state.cart);
  const [modalVisible, setModalVisible] = useState(false);
  const modalRef =
    useRef<Animatable.AnimatableComponent<ViewProps, ViewStyle>>(null);
  const totalPrice = cart
    .map(item => item.item.price.number * item.number)
    .reduce((acc, curr) => acc + curr, 0);

  const totalItem = cart
    .map(item => item.number)
    .reduce((acc, curr) => acc + curr, 0);

  const modalHandler = () => {
    setModalVisible(true);
    // modalRef.current?.transition(slideIn);
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={{fontSize: 15}}>Total Harga</Text>
        <Pressable
          onPress={() => modalHandler()}
          style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={{fontSize: 17, fontWeight: 'bold'}}>
            Rp {totalPrice}
          </Text>
          <IconFa name="angle-up" size={25} style={{marginLeft: 10}} />
        </Pressable>
      </View>
      <TouchableOpacity
        style={{
          paddingHorizontal: 15,
          paddingVertical: 10,
          backgroundColor: '#2B88FF',
          borderRadius: 5,
        }}
        onPress={() => {}}>
        <Text
          style={{
            color: 'white',
            fontWeight: 'bold',
            fontSize: 14,
          }}>{`Beli (${totalItem})`}</Text>
      </TouchableOpacity>

      <Modal
        animationType="fade"
        statusBarTranslucent
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(prev => !prev);
        }}>
        <StatusBar barStyle="light-content" />
        <TouchableOpacity
          onPress={() => setModalVisible(prev => !prev)}
          style={{
            flex: 1,
            backgroundColor: '#00000099',
            height: 200,
            justifyContent: 'flex-end',
          }}>
          <View
            style={{
              backgroundColor: 'white',
              paddingVertical: 20,
              paddingHorizontal: 20,
            }}>
            <View
              style={{
                position: 'absolute',
                top: 10,
                alignSelf: 'center',
                height: 5,
                width: 60,
                backgroundColor: '#aaa',
                borderRadius: 999,
              }}
            />
            <Text>asdsad</Text>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

export default cartFoot;

const styles = StyleSheet.create({
  container: {
    elevation: 10,
    backgroundColor: 'white',
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
});
