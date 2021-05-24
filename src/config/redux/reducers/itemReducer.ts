import {AnyAction} from 'redux';
import {ItemAction, ItemState} from '../../../constant/type/reduxType';
import * as actionSTATE from '../actions/index';

const initialState: ItemState = [];

export default function (state: ItemState = initialState, action: ItemAction) {
  switch (action.type) {
    case actionSTATE.GET_ITEM:
      return [...action.payload];

    case actionSTATE.CLEAR_ITEM:
      return [];

    default:
      return state;
  }
}
