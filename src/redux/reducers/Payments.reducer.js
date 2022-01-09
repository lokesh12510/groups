import {
  ACCEPT_PAYMENT,
  CREATE_PAYMENT,
  PENDING_PAYMENTS,
} from "../actionTypes";

const initialState = {
  pendingList: [],
  pendingCount: 0,
  isFetched: false,
  hasMore: true,
};

export const paymentsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case PENDING_PAYMENTS:
      return {
        ...state,
        pendingList: [...state.pendingList, ...payload],
        pendingCount: payload.length,
        hasMore: payload.length > 0 ? true : false,
      };

    case ACCEPT_PAYMENT:
      return {
        ...state,
        pendingCount: state.pendingCount > 0 && state.pendingCount--,
        isFetched: !state.isFetched,
      };

    case CREATE_PAYMENT:
      return {
        ...state,
        isFetched: !state.isFetched,
      };

    default:
      return state;
  }
};
