import {cart, item} from '../../../constant/type/itemType';
import {
  CartAction,
  CartState,
  ItemAction,
  ItemState,
} from '../../../constant/type/reduxType';
import * as actionSTATE from '../actions/index';

const initialState: ItemState = [];

export default function (state = initialState, action: ItemAction) {
  const payload = action.payload as item;
  const findIDX = state.findIndex(x => x?.uid === payload?.uid);
  const newArray = [...state];

  switch (action.type) {
    case actionSTATE.GET_FAVORITE:
      if (Array.isArray(action.payload)) {
        return [...action.payload];
      }

    case actionSTATE.ADD_FAVORITE:
      if (findIDX < 0) {
        return [...newArray, payload];
      } else if (findIDX >= 0) {
        return newArray;
      }

    case actionSTATE.DELETE_FAVORITE:
      return newArray.filter(item => item.uid !== payload.uid);

    case actionSTATE.CLEAR_FAVORITE:
      return initialState;

    default:
      return state;
  }
}
