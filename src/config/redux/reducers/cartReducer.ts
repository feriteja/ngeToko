import {cart} from '../../../constant/type/itemType';
import {CartAction, CartState} from '../../../constant/type/reduxType';
import * as actionSTATE from '../actions/index';

const initialState: CartState = [];

export default function (state = initialState, action: CartAction) {
  const payload = action.payload as cart;
  const findIDX = state.findIndex(x => x.item.uid === payload.item.uid);

  switch (action.type) {
    case actionSTATE.GET_CART:
      if (Array.isArray(action.payload)) {
        return [...action.payload];
      }

    case actionSTATE.ADD_CART_ITEM:
      const newArray = [...state];
      if (findIDX < 0) {
        return [...state, {...payload, number: 1}];
      } else if (findIDX >= 0) {
        newArray[findIDX].number = payload.number + 1;
        return newArray;
      }

    default:
      return state;
  }
}
