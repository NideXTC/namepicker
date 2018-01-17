import { ADD_USER, EDIT_USER, REMOVE_USER, SHUFFLE_USERS, DELETE_ALL_USERS } from '../actions/users';
import _ from 'lodash'
 
export function users(state = { list: [] }, action) {
  let list = state.list;
  switch (action.type) {
    case ADD_USER:
      list = state.list.concat(action.name);
      return { ...state, list };
    case EDIT_USER:
      list[action.id] = action.name;
      return { ...state, list };
    case REMOVE_USER:
      delete list[action.id];
      return { ...state, list };
    case SHUFFLE_USERS:
      if (list.length !== 0) {
        list = _.shuffle(list);
        return { ...state, list };
      } else {
        return state;
      }
    case DELETE_ALL_USERS:
      list = [];
      return { ...state, list };
    default:
      return state;
  }
}
