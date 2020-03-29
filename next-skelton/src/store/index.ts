import {
  createStore,
  combineReducers,
  applyMiddleware,
  PreloadedState,
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import { userReducer } from './reducers/user';
import { User } from './state/user';

export interface StoreState {
  users: User[];
}

export const reducers = combineReducers<StoreState>({
  users: userReducer,
});

// TODO: if possible, try not use any type
export const initStore = (initialState: PreloadedState<any>) =>
  createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware)),
  );
