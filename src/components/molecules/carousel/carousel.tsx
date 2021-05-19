import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {useAppSelector} from '../../../config/redux/store';

const carousel = () => {
  const items = useAppSelector(state => state.items);
  const auth = useAppSelector(state => state.auth);

  return (
    <View>
      <FlatList
        data={items}
        keyExtractor={item => item.name + item.img}
        renderItem={({item, index}) => {
          return (
            <View>
              <Text>{item.name}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default carousel;

const styles = StyleSheet.create({});
