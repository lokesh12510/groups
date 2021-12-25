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
  isFetched: {
    payments: false,
    pendingPayment: false,
  },
};

export const userPaymentReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_USER_PAYMENTS:
      return {
        ...state,
        payments: payload,
        isFetched: { ...state.isFetched, payments: true },
      };

    case SET_USER_PENDING_LIST:
      return {
        ...state,
        pendingPayment: payload,
        isFetched: {
          ...state.isFetched,
          pendingPayment: true,
        },
      };
    case CLEAR_USER_PENDING_LIST:
      return {
        ...state,
        pendingPayment: [],
        isFetched: {
          payments: false,
          pendingPayment: false,
        },
      };
    default:
      return state;
  }
};
