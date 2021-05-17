import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigatorScreenParams} from '@react-navigation/native';
import DashBoard from './sideBar';
import {Cart, Profile} from '../../screens';
import {dashBoardStackParamList} from './sideBar';

export type bottomStackParamList = {
  dashBoard: NavigatorScreenParams<dashBoardStackParamList>;
  cart: undefined;
  profile: undefined;
};

const BottomTab = createBottomTabNavigator<bottomStackParamList>();

const bottomTab = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name="dashBoard" component={DashBoard} />
      <BottomTab.Screen name="cart" component={Cart} />
      <BottomTab.Screen name="profile" component={Profile} />
    </BottomTab.Navigator>
  );
};

export default bottomTab;
