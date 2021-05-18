import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigatorScreenParams} from '@react-navigation/native';
import DashBoard from './sideBar';
import {Cart, Profile} from '../../screens';
import {dashBoardStackParamList} from './sideBar';
import IconFa from 'react-native-vector-icons/FontAwesome';

export type bottomStackParamList = {
  dashBoard: NavigatorScreenParams<dashBoardStackParamList>;
  cart: undefined;
  profile: undefined;
};

const BottomTab = createBottomTabNavigator<bottomStackParamList>();

const bottomTab = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        name="dashBoard"
        component={DashBoard}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <IconFa name="delicious" color={color} size={size} />
          ),
        }}
      />
      <BottomTab.Screen
        name="cart"
        component={Cart}
        options={{
          tabBarLabel: 'Keranjang',
          tabBarIcon: ({color, size}) => (
            <IconFa name="opencart" color={color} size={size} />
          ),
        }}
      />
      <BottomTab.Screen
        name="profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color, size}) => (
            <IconFa name="user-o" color={color} size={size} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default bottomTab;
