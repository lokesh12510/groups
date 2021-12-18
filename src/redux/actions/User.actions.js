import { CLEAR_USER, IS_ADMIN, SET_USER, UPDATE_USER } from "../actionTypes";
import { store } from "../Store";

export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

export const updateUser = (user) => ({
  type: UPDATE_USER,
  payload: user,
});

export const isAdmin = () => (dispatch) => {
  const state = store.getState();
  return dispatch({
    type: IS_ADMIN,
    payload: state.user?.userId === state.groups?.groupAdmin ? true : false,
  });
};

export const clearUser = () => ({
  type: CLEAR_USER,
});
