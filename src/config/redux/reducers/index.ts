import {combineReducers} from 'redux';
import authReducer from './authReducer';
import itemReducer from './itemReducer';
import cartReducer from './cartReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  items: itemReducer,
  cart: cartReducer,
});

export default rootReducer;
