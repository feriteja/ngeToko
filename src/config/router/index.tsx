import React, {useEffect} from 'react';
import {
  NavigationContainer,
  NavigatorScreenParams,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Auth, {authStackParamList} from './auth';
import Main, {bottomStackParamList} from './bottomTab';
import {Splash} from '../../screens';
import {useAppSelector} from '../redux/store';
import {useDispatch} from 'react-redux';
import {clearCartList, getCartList} from '../redux/actions/cartAction';

export type rootStackParamList = {
  splash: undefined;
  main: NavigatorScreenParams<bottomStackParamList>;
  auth: NavigatorScreenParams<authStackParamList>;
};

const RootStack = createStackNavigator<rootStackParamList>();

const index = () => {
  const auth = useAppSelector(state => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (auth.auth) {
      dispatch(getCartList());
    } else if (!auth.auth) {
      dispatch(clearCartList);
    }
    return () => {
      dispatch(clearCartList);
    };
  }, [auth.auth]);

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
