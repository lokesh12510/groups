import { CLEAR_USER, IS_ADMIN, SET_USER, UPDATE_USER } from "../actionTypes";

export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

export const updateUser = (user) => ({
  type: UPDATE_USER,
  payload: user,
});

export const isAdmin = () => ({
  type: IS_ADMIN,
});

export const clearUser = () => ({
  type: CLEAR_USER,
});
