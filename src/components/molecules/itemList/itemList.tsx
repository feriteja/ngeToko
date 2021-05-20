import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {CardItem, Gap} from '../..';
import {useAppSelector} from '../../../config/redux/store';

const itemList = () => {
  const items = useAppSelector(state => state.items);

  return (
    <FlatList
      data={items}
      scrollEnabled={false}
      keyExtractor={item => item.name + item.name + item.img}
      contentContainerStyle={{paddingVertical: 20}}
      ItemSeparatorComponent={() => <Gap height={25} />}
      renderItem={({index, item}) => {
        return <CardItem index={index} item={item} />;
      }}
    />
  );
};

export default itemList;

const styles = StyleSheet.create({});
