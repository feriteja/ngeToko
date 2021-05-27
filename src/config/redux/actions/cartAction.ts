import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import {cart, item} from '../../../constant/type/itemType';
import {
  CartAction,
  CartState,
  DispatchTypeCart,
} from '../../../constant/type/reduxType';
import * as action from './index';

const getCartList = () => {
  return async (dispatch: DispatchTypeCart) => {
    const myUid = auth().currentUser?.uid;
    try {
      const dataCarts = await firestore()
        .collection('users')
        .doc(myUid)
        .collection('cart')
        .get();

      const carts = dataCarts.docs.map(cart => {
        return cart.data() as cart;
      });

      dispatch({type: action.GET_CART, payload: carts});
    } catch (error) {}
  };
};

const addCartHandler = (props: cart) => {
  return async (dispatch: DispatchTypeCart) => {
    const myUid = auth().currentUser?.uid;

    console.log(props.number);

    try {
      await firestore()
        .collection('users')
        .doc(myUid)
        .collection('cart')
        .doc(props.item.uid)
        .set({...props, number: props.number + 1});
      dispatch({type: action.ADD_CART_ITEM, payload: props});
    } catch (error) {}
  };
};

const updateCartHandler = (props: cart, number: number) => {
  return async (dispatch: DispatchTypeCart) => {
    const myUid = auth().currentUser?.uid;

    await firestore()
      .collection('users')
      .doc(myUid)
      .collection('cart')
      .doc(props.item.uid)
      .update({number: number});
    dispatch({type: action.UPDATE_CART_ITEM, payload: {...props, number}});
  };
};

const deleteCartHandler = (props: cart) => {
  return async (dispatch: DispatchTypeCart) => {
    const myUid = auth().currentUser?.uid;

    try {
      await firestore()
        .collection('users')
        .doc(myUid)
        .collection('cart')
        .doc(props.item.uid)
        .delete();

      dispatch({type: action.DELETE_CART_ITEM, payload: props});
    } catch (error) {}
  };
};

const clearCartList = {
  type: action.CLEAR_CART,
};

export {
  getCartList,
  clearCartList,
  addCartHandler,
  updateCartHandler,
  deleteCartHandler,
};
