import {createStore, applyMiddleware} from 'redux';
import Thunk from 'redux-thunk';
import rootReducer from '../reducers';
import {composeWithDevTools} from 'redux-devtools-extension';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';

const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(Thunk)),
);

export default store;

export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
