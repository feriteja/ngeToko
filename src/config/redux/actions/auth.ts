import auth from '@react-native-firebase/auth';
import * as action from './index';

type userPass = {
  email: string;
  password: string;
};

export const signOut = () => {
  return (dispatch: any) => {
    auth().signOut();
    dispatch({type: action.LOGOUTAUTH});
    dispatch({type: action.CLEAR_CART});
    dispatch({type: action.CLEAR_FAVORITE});
  };
};

export const signIn = ({email, password}: userPass) => {
  return async (dispatch: any) => {
    try {
      const authLogin = await auth().signInWithEmailAndPassword(
        email.trim().toLowerCase(),
        password.trim(),
      );

      if (!authLogin.user.emailVerified) {
        auth().signOut();
        return {
          type: 'error',
          message: 'Mohon periksa email anda',
          data: null,
        };
      }

      dispatch({type: 'LOGINAUTH', payload: authLogin.user.providerData});

      return {
        type: 'success',
        message: '',
        data: authLogin.user,
      };
    } catch (error) {
      if (
        error.code === 'auth/invalid-email' ||
        error.code === 'auth/wrong-password' ||
        error.code === 'auth/user-not-found'
      ) {
        return {
          type: 'error',
          message: 'Invalid email or password',
          data: null,
        };
      } else if (error.code === 'auth/network-request-failed') {
        return {
          type: 'error',
          message: 'no internet, please check your connection',
          data: null,
        };
      } else {
        return {type: 'error', message: '', data: null};
      }
    }
  };
};

export const signUp = ({email, password}: userPass) => {
  return async (dispatch: any) => {
    try {
      await auth().createUserWithEmailAndPassword(
        email.trim(),
        password.trim(),
      );

      return {type: 'success'};
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        return {
          type: 'error',
          message: 'That email address is already in use!',
        };
      } else if (error.code === 'auth/invalid-email') {
        return {type: 'error', message: 'That email address is invalid!'};
      } else if (error.code === 'auth/network-request-failed') {
        return {
          type: 'error',
          message: 'Network error, please check your connection',
        };
      } else {
        return {type: 'error', message: error.code};
      }
    }
  };
};
