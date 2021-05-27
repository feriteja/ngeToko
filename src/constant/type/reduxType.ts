import {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {cart, item} from './itemType';

export type ItemState = item[] | [];

export type ItemAction = {
  type: string;
  payload: item[] | item;
};

export type DispatchTypeItem = (args: ItemAction) => ItemAction;

export type AuthState = {
  auth: boolean;
  info: FirebaseAuthTypes.UserInfo[] | null;
};

export type AuthAction = {
  type: string;
  payload: FirebaseAuthTypes.UserInfo[] | null;
};

export type DispatchTypeAuth = (args: AuthAction) => AuthAction;

export type CartState = cart[];

export type CartAction = {
  type: string;
  payload: cart[] | cart;
  number?: number;
};

export type DispatchTypeCart = (args: CartAction) => CartAction;
