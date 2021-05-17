import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Forgot, Login, Regis} from '../../screens';

export type authStackParamList = {
  login: undefined;
  regis: undefined;
  forgot: undefined;
};

const AuthStack = createStackNavigator<authStackParamList>();

const auth = () => {
  return (
    <AuthStack.Navigator headerMode="none">
      <AuthStack.Screen name="login" component={Login} />
      <AuthStack.Screen name="regis" component={Regis} />
      <AuthStack.Screen name="forgot" component={Forgot} />
    </AuthStack.Navigator>
  );
};

export default auth;
