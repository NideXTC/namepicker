import { ADD_TASK, REMOVE_TASK, EDIT_TASK, DELETE_ALL_TASKS } from '../actions/tasks';

export function tasks(state = { list: [] }, action) {
  let list = state.list;
  switch (action.type) {
    case ADD_TASK:
      list = state.list.concat(action.name);
      return { ...state, list };
    case EDIT_TASK:
      list[action.id] = action.name;
      return { ...state, list };
    case REMOVE_TASK:
      delete list[action.id];
      return { ...state, list };
    case DELETE_ALL_TASKS:
      list = [];
      return { ...state, list };
    default:
      return state;
  }
}
