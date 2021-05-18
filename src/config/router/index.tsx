import React from 'react';
import {
  NavigationContainer,
  NavigatorScreenParams,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Auth, {authStackParamList} from './auth';
import Main, {bottomStackParamList} from './bottomTab';
import {Splash} from '../../screens';

export type rootStackParamList = {
  splash: undefined;
  main: NavigatorScreenParams<bottomStackParamList>;
  auth: NavigatorScreenParams<authStackParamList>;
};

const RootStack = createStackNavigator<rootStackParamList>();

const index = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator headerMode="none">
        <RootStack.Screen name="splash" component={Splash} />
        <RootStack.Screen name="auth" component={Auth} />
        <RootStack.Screen name="main" component={Main} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default index;
