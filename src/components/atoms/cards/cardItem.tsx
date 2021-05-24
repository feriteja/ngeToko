import React, {useMemo} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {item, cart} from '../../../constant/type/itemType';
import cardColor from '../../../constant/color/cardCollectionsColor';
import measurement from '../../../constant/measurement';
import IconFa from 'react-native-vector-icons/FontAwesome';
import {useAppDispatch, useAppSelector} from '../../../config/redux/store';
import {addCartHandler} from '../../../config/redux/actions/cartAction';
import {useDispatch} from 'react-redux';

const cardItem = ({item, index}: {item: item; index: number}) => {
  const dispatch = useDispatch();

  const carts = useAppSelector(state => state.cart);

  const numberItem = useMemo(() => {
    const findIdx = carts.findIndex(
      (cartidx: cart) => cartidx.item.uid == item.uid,
    );
    return carts[findIdx]?.number || 0;
  }, [carts]);

  return (
    <View
      style={[styles.cardContainer, {backgroundColor: cardColor[index % 4]}]}>
      <Image
        source={{uri: item.img}}
        style={{flex: 1, resizeMode: 'contain'}}
      />
      <View style={{flex: 2, marginLeft: 20, justifyContent: 'space-evenly'}}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            textTransform: 'capitalize',
          }}>
          {item.name}
        </Text>
        <Text style={{fontWeight: 'bold', fontSize: 15}}>
          Rp. {item.price.number}/
          <Text style={{fontWeight: 'normal'}}>{item.price.type}</Text>
        </Text>
      </View>
      <View style={[styles.cardActionContent]}>
        <IconFa name="heart-o" size={20} />
        <TouchableOpacity
          style={[styles.cartAction, {backgroundColor: cardColor[index % 4]}]}
          onPress={() =>
            dispatch(addCartHandler({item: item, number: numberItem}))
          }>
          <IconFa name="opencart" size={20} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default cardItem;

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    borderRadius: 10,
    paddingVertical: 20,
    elevation: 1,
    overflow: 'visible',
    height: measurement.CARD_ITEM_HEIGTH,
  },
  cardActionContent: {
    height: 130,
    position: 'absolute',
    paddingVertical: 15,
    width: 40,
    right: 10,
    borderRadius: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cartAction: {
    elevation: 2,
    paddingVertical: 10,
    paddingHorizontal: 7,
    borderRadius: 10,
    position: 'absolute',
    bottom: -5,
  },
});
