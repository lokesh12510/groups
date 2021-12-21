import {
  CLEAR_GROUP_PAYMENT_HISTORY,
  SET_GROUP_PAYMENT_HISTORY,
  FILTER_CHANGE,
} from "../actionTypes";

const initialState = {
  paymentHistory: [],
  filterType: false,
  filterDate: "",
  isFetched: [],
};

export const groupPaymentHistoryReducer = (state = initialState, action) => {
  const { type, payload } = action;
  console.log(payload);
  switch (type) {
    case SET_GROUP_PAYMENT_HISTORY:
      let [year, list] = payload;
      return {
        ...state,
        paymentHistory: { ...state.paymentHistory, [year]: list },
        isFetched: [...new Set([...state.isFetched, year])],
        filterType: true,
      };
    case CLEAR_GROUP_PAYMENT_HISTORY:
      return {
        ...state,
        paymentHistory: {},
        isFetched: false,
      };
    case FILTER_CHANGE:
      return {
        ...state,
        filterType: false,
      };

    default:
      return state;
  }
};
