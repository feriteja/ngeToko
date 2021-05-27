import {bottomNavPropCart} from '@constant/type/routerType';
import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {CardCart, Gap, Header} from '../../../components';
import {useAppSelector} from '../../../config/redux/store';
import CartFoot from './cartFoot';

const cart = () => {
  const navigation = useNavigation<bottomNavPropCart>();

  const cart = useAppSelector(state => state.cart);
  const auth = useAppSelector(state => state.auth);
  return (
    <View style={styles.container}>
      <Header
        title="Keranjang"
        favorite
        navigation={() => navigation.navigate('favorite')}
      />
      <Gap height={10} />
      <FlatList
        data={cart}
        contentContainerStyle={{}}
        keyExtractor={item => item.item.uid}
        // ItemSeparatorComponent={() => (
        //   <Gap height={7} style={{backgroundColor: '#f0f0f0'}} />
        // )}
        renderItem={({item}) => <CardCart item={item} />}
      />
      <CartFoot />
    </View>
  );
};

export default cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
