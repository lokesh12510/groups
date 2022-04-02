import {
  ADD_EXPENSE,
  ADD_DONATION,
  SET_TRANSACTION,
  CLEAR_TRANSACTION,
  HISTORY_FILTER_CHANGE,
  SET_REPORT_TRANSACTION,
  DELETE_TRANSACTION,
} from "../actionTypes";

const initialState = {
  expense: { isFetched: false },
  donation: { isFetched: false },
  historyList: [],
  filterChange: true,
  reportTransaction: [],
};

export const transactionReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_EXPENSE:
      return {
        ...state,
        expense: {
          ...state.expense,
          isFetched: !state.isFetched,
        },
      };
    case ADD_DONATION:
      return {
        ...state,
        donation: {
          ...state.donation,
          isFetched: !state.isFetched,
        },
      };

    case SET_TRANSACTION:
      return {
        ...state,
        historyList: [...state.historyList, ...payload],
        filterChange: payload.length === 0 ? false : true,
      };

    case SET_REPORT_TRANSACTION:
      return {
        ...state,
        reportTransaction: payload,
      };

    case CLEAR_TRANSACTION:
      return {
        expense: { isFetched: false },
        donation: { isFetched: false },
        historyList: [],
        filterChange: true,
        reportTransaction: [],
      };

    case HISTORY_FILTER_CHANGE:
      return {
        ...state,
        filterChange: false,
        historyList: [],
      };

    case DELETE_TRANSACTION:
      return {
        expense: { isFetched: false },
        donation: { isFetched: false },
        filterChange: true,
      };

    default:
      return state;
  }
};
