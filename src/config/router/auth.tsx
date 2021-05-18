import React from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import {Forgot, Login, Regis, SuccessRegis} from '../../screens';

export type authStackParamList = {
  login: undefined;
  regis: undefined;
  forgot: undefined;
  success: undefined;
};

const AuthStack = createStackNavigator<authStackParamList>();

const auth = () => {
  return (
    <AuthStack.Navigator headerMode="none">
      <AuthStack.Screen
        name="login"
        component={Login}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <AuthStack.Screen
        name="regis"
        component={Regis}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <AuthStack.Screen
        name="forgot"
        component={Forgot}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <AuthStack.Screen
        name="success"
        component={SuccessRegis}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
    </AuthStack.Navigator>
  );
};

export default auth;
