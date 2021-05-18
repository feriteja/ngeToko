import {CompositeNavigationProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {authStackParamList} from '../../config/router/auth';
import {rootStackParamList} from '../../config/router';

export type authNavigationPropLogin = CompositeNavigationProp<
  StackNavigationProp<authStackParamList, 'login'>,
  StackNavigationProp<rootStackParamList>
>;

export type authNavigationPropForgot = StackNavigationProp<
  authStackParamList,
  'forgot'
>;
export type authNavigationPropRegis = StackNavigationProp<
  authStackParamList,
  'regis'
>;
export type authNavigationPropSuccess = StackNavigationProp<
  authStackParamList,
  'success'
>;

export type splashNavProp = StackNavigationProp<rootStackParamList, 'splash'>;
