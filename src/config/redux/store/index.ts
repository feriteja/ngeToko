import {createStore, applyMiddleware} from 'redux';
import Thunk from 'redux-thunk';
import rootReducer from '../reducers';
import {composeWithDevTools} from 'redux-devtools-extension';

const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(Thunk)),
);

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
