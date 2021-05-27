import React, {useState} from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Gap} from '../..';
import {cart} from '../../../constant/type/itemType';
import IconFeather from 'react-native-vector-icons/Feather';
import {useDispatch} from 'react-redux';
import {
  updateCartHandler,
  deleteCartHandler,
} from '../../../config/redux/actions/cartAction';
import {useAppSelector} from '@redux/store';
import {addToFavorite, deleteFav} from '@redux/actions/favoriteActions';

type itemType = {
  item: cart;
};

const cardCart = (itemCart: itemType) => {
  const {item} = itemCart;
  const dispatch = useDispatch();
  const favorites = useAppSelector(state => state.favorites);

  const numHandler = (action: 'plus' | 'min') => {
    const result = action == 'plus' ? item.number + 1 : item.number - 1;
    dispatch(updateCartHandler(item, result));
  };

  const deleteHandler = () => {
    dispatch(deleteCartHandler(item));
  };

  const isExist = favorites.some(fav => fav.uid == item.item.uid);
  const favoriteHandler = () => {
    if (isExist) {
      dispatch(deleteFav(item.item));
    } else {
      dispatch(addToFavorite(item.item));
    }
  };

  return (
    <View style={styles.cardContainer}>
      <View style={{flexDirection: 'row'}}>
        <Image
          source={{uri: item.item.img}}
          style={styles.cardImage}
          resizeMode="contain"
        />
        <View style={styles.cardDetail}>
          <Text style={{fontSize: 16}}>{item.item.name}</Text>
          <Text style={{fontWeight: 'bold'}}>
            Rp. {item.item.price.number}/{item.item.price.type}
          </Text>
        </View>
      </View>
      <Gap height={20} />
      <View style={styles.cardAction}>
        <Pressable onPress={() => favoriteHandler()}>
          <Text style={{color: '#888'}}>
            {isExist ? 'Sudah ada di favorit' : 'Masukan ke favorit'}
          </Text>
        </Pressable>
        <View style={styles.cardActionNum}>
          <TouchableOpacity onPress={() => deleteHandler()}>
            <IconFeather name="trash-2" size={20} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => numHandler('min')}>
            <IconFeather name="minus-circle" size={20} />
          </TouchableOpacity>
          <Text style={{textDecorationLine: 'underline'}}>{item.number}</Text>
          <TouchableOpacity onPress={() => numHandler('plus')}>
            <IconFeather name="plus-circle" size={20} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default cardCart;

const styles = StyleSheet.create({
  cardContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 7,
    borderBottomColor: '#f0f0f0',
  },
  cardAction: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardActionNum: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 110,
    justifyContent: 'space-around',
  },
  cardImage: {
    height: 80,
    width: 80,
  },
  cardDetail: {marginLeft: 10, justifyContent: 'space-around'},
});
