import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {useNavigation, useRoute} from '@react-navigation/core';
import {dashBoardStackParamList} from '@router/sideBar';
import {useAppSelector} from '@redux/store';
import {Header} from 'components';
import {dashBoardNavProp} from '@constant/type/routerType';

type routeType = RouteProp<dashBoardStackParamList, 'filtered'>;

const filteredItem = () => {
  const route = useRoute<routeType>();
  const navigation = useNavigation<dashBoardNavProp>();
  const {categorie} = route.params;
  const items = useAppSelector(state => state.items);

  const itemByCat = items.filter(
    item => item.type === route.params.categorie.toLocaleLowerCase(),
  );

  return (
    <View>
      <Header
        title={categorie}
        navigation={() => navigation.push('favorite')}
        favorite
      />
    </View>
  );
};

export default filteredItem;

const styles = StyleSheet.create({});
