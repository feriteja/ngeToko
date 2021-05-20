import {cart} from '../../../constant/type/itemType';
import {CartAction, CartState} from '../../../constant/type/reduxType';
import * as actionSTATE from '../actions/index';

const initialState: CartState = [];

export default function (state = initialState, action: CartAction) {
  switch (action.type) {
    case actionSTATE.GET_CART:
      if (Array.isArray(action.payload)) {
        return [...action.payload];
      }

    case actionSTATE.ADD_CART_ITEM:
      const findIDX = state.findIndex(
        x => x.item.uid === action.payload.item.uid,
      );

      const addArrayNew = [...state];
      if (findIDX >= 0) {
        addArrayNew[findIDX] = action.payload;
        return addArrayNew;
      } else {
        return [...state, {...action.payload}];
      }

    default:
      return state;
  }
}
