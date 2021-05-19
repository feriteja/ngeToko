import {AnyAction} from 'redux';
import * as actions from '../actions';

const initialState = {auth: false, info: null};

export default function (state = initialState, action: AnyAction) {
  switch (action.type) {
    case actions.LOGINAUTH:
      return {auth: true, info: action.payload};

    case actions.LOGOUTAUTH:
      return {auth: false, info: null};

    default:
      return state;
  }
}
