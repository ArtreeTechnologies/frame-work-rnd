import axios from 'axios';
import { Dispatch } from 'redux';
import { User } from '../state/user';
import { ActionTypes } from './types';

const url = 'https://jsonplaceholder.typicode.com/users';

export interface FetchUserAction {
  type: ActionTypes.fetchUser;
  payload: User[];
}

export const fetchUser = () => async (dispatch: Dispatch) => {
  try {
    const { data } = await axios.get<User[]>(url);
    return dispatch<FetchUserAction>({
      type: ActionTypes.fetchUser,
      payload: data,
    });
  } catch (err) {
    throw new Error(err);
  }
};
