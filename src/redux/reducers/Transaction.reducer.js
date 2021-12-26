import { ADD_EXPENSE, ADD_DONATION } from "../actionTypes";

const initialState = {
  expense: { isFetched: false },
  donation: { isFetched: false },
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

    default:
      return state;
  }
};
