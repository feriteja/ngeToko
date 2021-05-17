import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {DashBoard} from '../../screens';

export type dashBoardStackParamList = {
  dashBoard: undefined;
};

const Drawer = createDrawerNavigator<dashBoardStackParamList>();

const sideBar = () => {
  return (
    <Drawer.Navigator drawerType="slide">
      <Drawer.Screen name="dashBoard" component={DashBoard} />
    </Drawer.Navigator>
  );
};

export default sideBar;
