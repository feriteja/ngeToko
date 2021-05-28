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
import {Gap} from 'components';

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
  const totalPrice = cart
    .map(item => item.item.price.number * item.number)
    .reduce((acc, curr) => acc + curr, 0);

  const totalItem = cart
    .map(item => item.number)
    .reduce((acc, curr) => acc + curr, 0);

  const modalHandler = () => {
    setModalVisible(true);
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
        animationType="slide"
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
            <Text style={{fontWeight: 'bold', fontSize: 16}}>
              Ringkasan Belanja
            </Text>
            <Gap height={10} />
            {cart.map(item => {
              return (
                <View
                  key={item.item.uid}
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginVertical: 5,
                  }}>
                  <Text>
                    {item.item.name} ({item.number} Barang)
                  </Text>
                  <Text style={{fontWeight: 'bold'}}>
                    Rp{item.item.price.number * item.number}
                  </Text>
                </View>
              );
            })}
            <Gap
              height={5}
              style={{backgroundColor: '#f0f0f0', marginVertical: 10}}
            />
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text>Total bayar</Text>
              <Text style={{fontWeight: 'bold', fontSize: 16}}>
                Rp{totalPrice}
              </Text>
            </View>
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
