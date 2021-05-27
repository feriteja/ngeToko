import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {item} from '../../../constant/type/itemType';
import measurement from '../../../constant/measurement';
import cardColor from '../../../constant/color/cardCollectionsColor';
import IconFa from 'react-native-vector-icons/FontAwesome';
import {useAppSelector} from '@redux/store';
import {useDispatch} from 'react-redux';
import {addToFavorite, deleteFav} from '@redux/actions/favoriteActions';

type props = {item: item; index: number};

const CardCarousel = ({item, index}: props) => {
  const favorites = useAppSelector(state => state.favorites);
  const isExist = favorites.some(fav => fav.uid == item.uid);

  const dispatch = useDispatch();

  const favoriteHandler = () => {
    if (isExist) {
      dispatch(deleteFav(item));
    } else {
      dispatch(addToFavorite(item));
    }
  };

  return (
    <View
      style={[styles.cardContainer, {backgroundColor: cardColor[index % 4]}]}>
      <Image
        source={{uri: item.img}}
        style={{
          height: 100,
          width: 100,
          marginVertical: 10,
          resizeMode: 'contain',
        }}
      />
      <View style={styles.cardTitle}>
        <View>
          <Text style={{fontSize: 16, textTransform: 'capitalize'}}>
            {item.name}
          </Text>
          <Text style={{fontWeight: 'bold'}}>
            Rp. {item.price.number}/
            <Text style={{fontWeight: 'normal'}}>{item.price.type}</Text>
          </Text>
        </View>
        <View style={{justifyContent: 'space-between'}}>
          <TouchableOpacity onPress={() => favoriteHandler()}>
            {isExist ? (
              <IconFa name="heart" color="red" size={20} />
            ) : (
              <IconFa name="heart-o" color="#444" size={20} />
            )}
          </TouchableOpacity>
          <TouchableOpacity>
            <IconFa name="opencart" size={20} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CardCarousel;

const styles = StyleSheet.create({
  cardContainer: {
    height: measurement.CAROUSEL_HEIGHT,
    width: measurement.CAROUSEL_WIDTH,
    borderRadius: measurement.CAROUSEL_BORDERRADIUS,

    justifyContent: 'center',
    alignItems: 'center',
    elevation: 1,
    overflow: 'hidden',
  },
  cardTitle: {
    justifyContent: 'space-between',
    // alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 10,
    flexDirection: 'row',
  },
});
