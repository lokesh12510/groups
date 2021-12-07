import { CLEAR_USER, SET_USER, UPDATE_USER } from "../actionTypes";

const initialState = {
  profile: {},
  username: "",
  userId: "",
  isAdmin: false,
  isActive: false,
  isVerified: false,
};

export const userReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_USER:
      return {
        ...state,
        profile: payload.data,
        username: payload.data.username,
        userId: payload.data.user_id,
      };
    case UPDATE_USER:
      return {
        ...state,
        profile: payload.data,
      };
    case CLEAR_USER:
      return initialState;
    default:
      return state;
  }
};
