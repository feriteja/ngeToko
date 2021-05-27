import {combineReducers} from 'redux';
import authReducer from './authReducer';
import itemReducer from './itemReducer';
import cartReducer from './cartReducer';
import favoriteReducer from './favoriteReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  items: itemReducer,
  cart: cartReducer,
  favorites: favoriteReducer,
});

export default rootReducer;
