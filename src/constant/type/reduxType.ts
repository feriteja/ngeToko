import {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {item} from './itemType';

export type itemState = item[] | [];

export type itemAction = {
  type: string;
  payload: item[];
};

export type authState = {
  auth: boolean;
  info: FirebaseAuthTypes.UserInfo[] | null;
};

export type authAction = {
  type: string;
  payload: authState;
};
