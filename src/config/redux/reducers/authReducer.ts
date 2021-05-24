import {AnyAction} from 'redux';
import {AuthAction, AuthState} from '../../../constant/type/reduxType';
import * as actions from '../actions';

const initialState: AuthState = {auth: false, info: null};

export default function (state: AuthState = initialState, action: AuthAction) {
  switch (action.type) {
    case actions.LOGINAUTH:
      return {auth: true, info: action.payload};

    case actions.LOGOUTAUTH:
      return {auth: false, info: action.payload};

    default:
      return state;
  }
}
