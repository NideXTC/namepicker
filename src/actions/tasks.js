export const ADD_TASK = 'ADD_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';
export const EDIT_TASK = 'EDIT_TASK';
export const DELETE_ALL_TASKS = 'DELETE_ALL_TASKS';

export function add_task(name) {
  return {
    type: ADD_TASK,
    name
  }
}

export function remove_task(id) {
  return {
    type: REMOVE_TASK,
    id
  }
}

export function edit_task(id, name) {
  return {
    type: EDIT_TASK,
    id,
    name
  }
}

export function delete_all_tasks() {
  return {
    type: DELETE_ALL_TASKS
  }
}