import { CLEAR_MESSAGE, SET_MESSAGE } from "../actionTypes";

const initialState = {
  message: "",
  type: "",
};

export const messageReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_MESSAGE:
      return { message: payload.message, type: payload.type };

    case CLEAR_MESSAGE:
      return { message: "" };

    default:
      return state;
  }
};
