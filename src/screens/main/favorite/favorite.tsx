import {favNavProp} from '@constant/type/routerType';
import {useNavigation} from '@react-navigation/core';
import {getFavList} from '@redux/actions/favoriteActions';
import {useAppSelector} from '@redux/store';
import {CardFav, CardItem, Gap, Header} from 'components';

import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {useDispatch} from 'react-redux';

const favorite = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<favNavProp>();
  const favorites = useAppSelector(state => state.favorites);

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      dispatch(getFavList());
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <View>
      <Header
        title="Favorite"
        cart
        navigation={() => navigation.navigate('main', {screen: 'cart'})}
      />
      <FlatList
        data={favorites}
        keyExtractor={item => item.uid}
        contentContainerStyle={{paddingVertical: 20}}
        ItemSeparatorComponent={() => <Gap height={25} />}
        renderItem={({item, index}) => {
          return <CardFav index={index} item={item} />;
        }}
      />
    </View>
  );
};

export default favorite;

const styles = StyleSheet.create({});
