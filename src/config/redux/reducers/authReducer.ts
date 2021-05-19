import {AnyAction} from 'redux';
import {authAction, authState} from '../../../constant/type/reduxType';
import * as actions from '../actions';

const initialState: authState = {auth: false, info: null};

export default function (state: authState = initialState, action: authAction) {
  switch (action.type) {
    case actions.LOGINAUTH:
      return {auth: true, info: action.payload};

    case actions.LOGOUTAUTH:
      return {auth: false, info: action.payload};

    default:
      return state;
  }
}
