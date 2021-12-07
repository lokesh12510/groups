import {
  LOAD_PROFILE,
  LOGIN_FAIL,
  REQUEST,
  LOGIN_SUCCESS,
  LOG_OUT,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
} from "../actionTypes";

const initialState = {
  isLoggedIn: false,
  accessToken: null,
};

export const authReducer = (prevState = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case REQUEST:
      return {
        ...prevState,
      };

    case REGISTER_SUCCESS:
      return {
        ...prevState,
        accessToken: payload.data.token,
        isLoggedIn: true,
      };
    case REGISTER_FAIL:
      return {
        ...prevState,
        isLoggedIn: false,
      };

    case LOGIN_SUCCESS:
      return {
        ...prevState,
        accessToken: payload.data.token,
        isLoggedIn: true,
      };
    case LOGIN_FAIL:
      return {
        ...prevState,
        accessToken: null,
        error: payload,
      };
    case LOG_OUT:
      return {
        ...prevState,
        accessToken: null,
        user: null,
        isLoggedIn: false,
      };

    default:
      return prevState;
  }
};
