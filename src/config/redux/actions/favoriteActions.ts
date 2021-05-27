import {DispatchTypeItem} from '../../../constant/type/reduxType';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {cart, item} from '../../../constant/type/itemType';
import * as action from './index';

const getFavList = () => {
  return async (dispatch: DispatchTypeItem) => {
    const myUid = auth().currentUser?.uid;
    try {
      const dataFavs = await firestore()
        .collection('users')
        .doc(myUid)
        .collection('fav')
        .get();

      const favorites = dataFavs.docs.map(cart => {
        return cart.data() as item;
      });

      dispatch({type: action.GET_FAVORITE, payload: favorites});
    } catch (error) {}
  };
};

const addToFavorite = (props: item) => {
  return async (dispatch: DispatchTypeItem) => {
    const myUid = auth().currentUser?.uid;

    try {
      await firestore()
        .collection('users')
        .doc(myUid)
        .collection('fav')
        .doc(props.uid)
        .set(props);

      dispatch({type: action.ADD_FAVORITE, payload: props});
    } catch (error) {}
  };
};

const deleteFav = (props: item) => {
  return async (dispatch: DispatchTypeItem) => {
    const myUid = auth().currentUser?.uid;

    try {
      await firestore()
        .collection('users')
        .doc(myUid)
        .collection('fav')
        .doc(props.uid)
        .delete();

      dispatch({type: action.DELETE_FAVORITE, payload: props});
    } catch (error) {}
  };
};

const clearFav = {
  type: action.CLEAR_FAVORITE,
};

export {getFavList, clearFav, addToFavorite, deleteFav};
