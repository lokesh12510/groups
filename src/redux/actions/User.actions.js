import { CLEAR_USER, SET_USER, UPDATE_USER } from "../actionTypes";

export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

// TODO: Update user service call, So get the api
export const updateUser = (user) => ({
  type: UPDATE_USER,
  payload: user,
});

export const clearUser = () => ({
  type: CLEAR_USER,
});
