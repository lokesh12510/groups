import {
  CLEAR_GROUP_PAYMENT_HISTORY,
  SET_GROUP_PAYMENT_HISTORY,
  FILTER_CHANGE,
} from "../actionTypes";

const initialState = {
  paymentHistory: [],
  filterType: "",
  filterDate: "",
  isFetched: false,
};

export const groupPaymentHistoryReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_GROUP_PAYMENT_HISTORY:
      return {
        ...state,
        paymentHistory: payload,
        isFetched: true,
      };
    case CLEAR_GROUP_PAYMENT_HISTORY:
      return {
        ...state,
        paymentHistory: [],
        isFetched: false,
      };
    case FILTER_CHANGE:
      return {
        ...state,
        isFetched: false,
      };

    default:
      return state;
  }
};
