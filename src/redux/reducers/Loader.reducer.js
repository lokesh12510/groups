import { START_LOADER, STOP_LOADER } from "../actionTypes";

const initialState = {
  loading: false,
};

export const loaderReducer = (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    case START_LOADER:
      return { loading: true };

    case STOP_LOADER:
      return { loading: false };

    default:
      return state;
  }
};
