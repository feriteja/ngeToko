import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigatorScreenParams, useNavigation} from '@react-navigation/native';
import DashBoard from './sideBar';
import {Cart, Profile} from '@screens';
import {dashBoardStackParamList} from './sideBar';
import IconFa from 'react-native-vector-icons/FontAwesome';
import {bottomNavPropRoot} from '@constant/type/routerType';
import {useSelector} from 'react-redux';
import {RootState, useAppSelector} from '@redux/store';
import {Pressable} from 'react-native';

export type bottomStackParamList = {
  dashBoard: NavigatorScreenParams<dashBoardStackParamList>;
  cart: undefined;
  profile: undefined;
};

const BottomTab = createBottomTabNavigator<bottomStackParamList>();

const bottomTab = () => {
  const auth = useAppSelector(state => state.auth);
  const cart = useAppSelector(state => state.cart);

  const navigation = useNavigation<bottomNavPropRoot>();

  const totalItem = cart
    .map(item => item.number)
    .reduce((acc, curr) => acc + curr, 0);

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
          tabBarBadge: totalItem,
          tabBarBadgeStyle: {backgroundColor: '#2f88FF'},
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
          tabBarButton: props => (
            <Pressable
              {...props}
              onPress={() =>
                auth.auth
                  ? navigation.navigate('profile')
                  : navigation.navigate('auth', {screen: 'login'})
              }
            />
          ),
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
