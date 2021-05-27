import {CompositeNavigationProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {authStackParamList} from '../../config/router/auth';
import {bottomStackParamList} from '../../config/router/bottomTab';
import {rootStackParamList} from '../../config/router';
import {dashBoardStackParamList} from '../../config/router/sideBar';

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
export type favNavProp = StackNavigationProp<rootStackParamList, 'favorite'>;

export type dashBoardNavProp = CompositeNavigationProp<
  DrawerNavigationProp<dashBoardStackParamList, 'dashBoard' | 'filtered'>,
  CompositeNavigationProp<
    BottomTabNavigationProp<bottomStackParamList>,
    StackNavigationProp<rootStackParamList>
  >
>;

export type sideNavProp = DrawerNavigationProp<
  dashBoardStackParamList,
  'dashBoard' | 'filtered'
>;

export type bottomNavPropRoot = CompositeNavigationProp<
  BottomTabNavigationProp<bottomStackParamList, 'dashBoard' | 'cart'>,
  StackNavigationProp<rootStackParamList>
>;

export type bottomNavPropProfile = BottomTabNavigationProp<
  bottomStackParamList,
  'profile'
>;

export type bottomNavPropCart = CompositeNavigationProp<
  BottomTabNavigationProp<bottomStackParamList, 'cart'>,
  StackNavigationProp<rootStackParamList>
>;
