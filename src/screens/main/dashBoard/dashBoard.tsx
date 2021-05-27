import React, {useEffect} from 'react';
import {
  ActivityIndicator,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import Header from './header';
import {dashBoardNavProp} from '../../../constant/type/routerType';
import {Carousel, Gap, ItemList} from '@components';
import {useAppDispatch, useAppSelector} from '@redux/store';

import {getItemList} from '@redux/actions/itemActions';
import {ThunkDispatch} from 'redux-thunk';
import {AnyAction} from 'redux';

const LoadingItems = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ActivityIndicator size="large" color="rgb(34,73,242)" />
    </View>
  );
};

type State = {a: string}; // your state type
type AppDispatch = ThunkDispatch<State, any, AnyAction>;

const dashBoard = ({}) => {
  const navigation = useNavigation<dashBoardNavProp>();
  const items = useAppSelector(state => state.items);

  const dispatch: AppDispatch = useAppDispatch();

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      dispatch(getItemList());
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      {items.length > 0 ? (
        <ScrollView>
          <Header />
          <Gap height={10} />
          <Carousel />
          <View style={styles.content}>
            <Gap height={10} />
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>Semua produk</Text>
            <Gap height={10} />
            <ItemList />
          </View>
        </ScrollView>
      ) : (
        <LoadingItems />
      )}
    </View>
  );
};

export default dashBoard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    paddingHorizontal: 20,
    overflow: 'visible',
  },
});
