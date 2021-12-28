import {
  CLEAR_GROUP_PAYMENT_HISTORY,
  SET_GROUP_PAYMENT_HISTORY,
  FILTER_CHANGE,
  SET_REPORT_PAYMENT,
} from "../actionTypes";

const initialState = {
  paymentHistory: [],
  filterType: true,
  filterDate: "",
  isFetched: [],
  reportPayments: [],
};

export const groupPaymentHistoryReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_GROUP_PAYMENT_HISTORY:
      return {
        ...state,
        paymentHistory: [...state.paymentHistory, ...payload],
        filterType: payload.length === 0 ? false : true,
      };
    case CLEAR_GROUP_PAYMENT_HISTORY:
      return {
        paymentHistory: [],
        filterType: true,
        filterDate: "",
        isFetched: [],
        reportPayments: [],
      };
    case FILTER_CHANGE:
      return {
        ...state,
        filterType: true,
        paymentHistory: [],
      };

    case SET_REPORT_PAYMENT:
      return {
        ...state,
        reportPayments: payload,
      };

    default:
      return state;
  }
};
