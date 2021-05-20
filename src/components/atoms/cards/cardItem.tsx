import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {item} from '../../../constant/type/itemType';
import cardColor from '../../../constant/color/cardCollectionsColor';
import measurement from '../../../constant/measurement';
import IconFa from 'react-native-vector-icons/FontAwesome';

const cardItem = ({item, index}: {item: item; index: number}) => {
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
      <View
        style={{
          height: 140,
          width: 40,
          backgroundColor: cardColor[index % 4],
          position: 'absolute',
          bottom: -10,
          right: 10,
          elevation: 2,
          borderRadius: 10,
          justifyContent: 'space-between',
          paddingVertical: 20,
          alignItems: 'center',
        }}>
        <IconFa name="heart-o" size={20} />
        <IconFa name="opencart" size={20} />
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
});
