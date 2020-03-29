import { User } from '../state/user';
import { UserAction, ActionTypes } from '../actions/types';

export const userReducer = (state: User[] = [], action: UserAction) => {
  switch (action.type) {
    case ActionTypes.fetchUser:
      return action.payload;
    default:
      return state;
  }
};
