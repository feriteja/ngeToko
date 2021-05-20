import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {CardCarousel, Gap} from '../..';
import {useAppSelector} from '../../../config/redux/store';

const carousel = () => {
  const items = useAppSelector(state => state.items);

  return (
    <View>
      <FlatList
        data={items.slice(1, 7)}
        horizontal
        keyExtractor={item => item.name + item.img}
        contentContainerStyle={{paddingHorizontal: 20, paddingVertical: 10}}
        ItemSeparatorComponent={() => <Gap width={10} />}
        renderItem={({item, index}) => {
          return <CardCarousel item={item} index={index} />;
        }}
      />
    </View>
  );
};

export default carousel;

const styles = StyleSheet.create({});
