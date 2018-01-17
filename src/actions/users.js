export const ADD_USER = 'ADD_USER';
export const REMOVE_USER = 'REMOVE_USER';
export const EDIT_USER = 'EDIT_USER';
export const SHUFFLE_USERS = 'SHUFFLE_USERS';
export const DELETE_ALL_USERS = 'DELETE_ALL_USERS';

export function add_user(name) {
  return {
    type: ADD_USER,
    name
  }
}

export function remove_user(id) {
  return {
    type: REMOVE_USER,
    id
  }
}

export function edit_user(id, name) {
  return {
    type: EDIT_USER,
    id,
    name
  }
}

export function shuffle_users() {
  return {
    type: SHUFFLE_USERS
  }
}

export function delete_all_users() {
  return {
    type: DELETE_ALL_USERS
  }
}