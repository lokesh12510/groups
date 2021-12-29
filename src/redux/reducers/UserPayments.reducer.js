import {
  CLEAR_USER_PENDING_LIST,
  SET_USER_PAYMENTS,
  SET_USER_PENDING_LIST,
  USER_FILTER_CHANGE,
} from "../actionTypes";

const initialState = {
  payments: [],
  pendingPayment: [],
  paidStatus: false,
  UnPaidStatus: false,
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
        payments: [...state.payments, ...payload],
        isFetched: { ...state.isFetched, payments: true },
        paidStatus: payload.length === 0 ? false : true,
      };

    case SET_USER_PENDING_LIST:
      return {
        ...state,
        pendingPayment: payload,
        isFetched: {
          ...state.isFetched,
          pendingPayment: true,
        },
        unPaidStatus: payload.length === 0 ? false : true,
      };
    case CLEAR_USER_PENDING_LIST:
      return {
        ...state,
        payments: [],
        pendingPayment: [],
        isFetched: {
          payments: false,
          pendingPayment: false,
        },
        paidStatus: true,
        unPaidStatus: true,
      };

    case USER_FILTER_CHANGE:
      return {
        ...state,
        payments: [],
        paidStatus: true,
      };
    default:
      return state;
  }
};
