import { SET_USER_CONTRIBUTION } from "../actionTypes";

const initialState = {
  totalAmount: "",
  totalFine: "",
  isFetched: false,
};

export const userContributions = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_USER_CONTRIBUTION:
      return {
        ...state,
        totalAmount: payload.totalAmount,
        totalFine: payload.totalFine,
        isFetched: true,
      };
    default:
      return state;
  }
};
