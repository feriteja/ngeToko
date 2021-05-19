import firestore from '@react-native-firebase/firestore';
import * as action from './index';

const getItemList = () => {
  return async (dispatch: any) => {
    try {
      const items = await firestore().collection('items').get();

      const data = items.docs.map(item => {
        return item.data();
      });

      dispatch({type: action.GET_ITEM, payload: data});
    } catch (error) {}
  };
};

const clearItemList = {
  type: action.CLEAR_ITEM,
};

export {getItemList, clearItemList};
