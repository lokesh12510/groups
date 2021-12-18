import {
  ACCEPT_PAYMENT,
  CLEAR_MESSAGE,
  CREATE_PAYMENT,
  PENDING_PAYMENTS,
  SET_MESSAGE,
} from "../actionTypes";

const initialState = {
  pendingList: [],
  pendingCount: 0,
  isFetched: false,
};

export const paymentsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case PENDING_PAYMENTS:
      return {
        ...state,
        pendingList: payload,
        pendingCount: payload.length,
        isFetched: true,
      };

    case ACCEPT_PAYMENT:
      return {
        ...state,
        pendingCount: state.pendingCount > 0 && state.pendingCount--,
        isFetched: false,
      };

    case CREATE_PAYMENT:
      return {
        ...state,
        isFetched: false,
      };

    default:
      return state;
  }
};
