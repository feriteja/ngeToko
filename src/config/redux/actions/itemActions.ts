import firestore from '@react-native-firebase/firestore';
import {item} from '../../../constant/type/itemType';
import {DispatchTypeItem} from '../../../constant/type/reduxType';
import * as action from './index';

const getItemList = () => {
  return async (dispatch: DispatchTypeItem) => {
    try {
      const items = await firestore().collection('items').get();

      const data = items.docs.map(item => {
        return {...item.data(), uid: item.id} as item;
      });

      return dispatch({type: action.GET_ITEM, payload: data});
    } catch (error) {}
  };
};

const clearItemList = {
  type: action.CLEAR_ITEM,
};

export {getItemList, clearItemList};
