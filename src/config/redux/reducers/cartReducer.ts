import {itemAction, itemState} from '../../../constant/type/reduxType';
import * as actionSTATE from '../actions/index';

const initialState: itemState = [];

export default function (state: itemState = initialState, action: itemAction) {
  switch (action.type) {
    case actionSTATE.GET_ITEM:
      return [...action.payload];

    case actionSTATE.CLEAR_ITEM:
      return [];

    default:
      return state;
  }
}
