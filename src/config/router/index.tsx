import React from 'react';
import {
  NavigationContainer,
  NavigatorScreenParams,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Auth, {authStackParamList} from './auth';
import Main, {bottomStackParamList} from './bottomTab';

type rootStackParamList = {
  main: NavigatorScreenParams<bottomStackParamList>;
  auth: NavigatorScreenParams<authStackParamList>;
};

const RootStack = createStackNavigator<rootStackParamList>();

const index = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name="main" component={Main} />
        <RootStack.Screen name="auth" component={Auth} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default index;
