import {
  CLEAR_USER_PENDING_LIST,
  SET_USER_PAYMENTS,
  SET_USER_PENDING_LIST,
} from "../actionTypes";

const initialState = {
  payments: [],
  pendingPayment: [],
  filterType: "",
  filterDate: "",
  isFetched: false,
};

export const userPaymentReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_USER_PAYMENTS:
      return {
        ...state,
        payments: payload,
        isFetched: true,
      };

    case SET_USER_PENDING_LIST:
      return {
        ...state,
        pendingPayment: payload,
        isFetched: true,
      };
    case CLEAR_USER_PENDING_LIST:
      return {
        ...state,
        pendingPayment: [],
        isFetched: false,
      };
    default:
      return state;
  }
};
