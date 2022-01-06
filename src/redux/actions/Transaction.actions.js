import { TransactionServices } from "../../Services/TransactionService";
import {
  ADD_DONATION,
  ADD_EXPENSE,
  CLEAR_TRANSACTION,
  HISTORY_FILTER_CHANGE,
  SET_FETCH,
  SET_MESSAGE,
  SET_REPORT_TRANSACTION,
  SET_TRANSACTION,
  START_LOADER,
  STOP_LOADER,
} from "../actionTypes";

export const addExpense = (reason, amount, createdAt) => (dispatch) => {
  return TransactionServices.createTransaction(
    {
      amount: amount,
      event: reason,
      createdAt: createdAt,
      type: "Expense",
    },
    () => {
      dispatch({
        type: START_LOADER,
      });
    },
    (data) => {
      dispatch({
        type: ADD_EXPENSE,
      });
      dispatch({
        type: SET_FETCH,
      });
      dispatch({
        type: SET_MESSAGE,
        payload: { message: "Expense Added Successfully!", type: "success" },
      });
    },
    (error) => {
      dispatch({
        type: SET_MESSAGE,
        payload: { message: "", type: "error" },
      });
    },
    () => {
      dispatch({
        type: STOP_LOADER,
      });
    }
  );
};

export const addDonation =
  (contributor, amount, createdAt, event) => (dispatch) => {
    return TransactionServices.createTransaction(
      {
        amount: amount,
        contributor: contributor,
        createdAt: createdAt,
        event: event,
        type: "Donation",
      },
      () => {
        dispatch({
          type: START_LOADER,
        });
      },
      (data) => {
        dispatch({
          type: ADD_DONATION,
          payload: data.data.data,
        });
        dispatch({
          type: SET_FETCH,
        });
        dispatch({
          type: SET_MESSAGE,
          payload: { message: "Donation Added Successfully!", type: "success" },
        });
      },
      (error) => {
        dispatch({
          type: SET_MESSAGE,
          payload: { message: "", type: "error" },
        });
      },
      () => {
        dispatch({
          type: STOP_LOADER,
        });
      }
    );
  };

export const getHistoryTransaction =
  (type, year, month, skip, limit) => (dispatch) => {
    console.log(year);
    return TransactionServices.historyTransaction(
      {
        type: type,
        year: year,
        month: month === "All" ? "" : month,
        skip: skip,
        limit: limit,
      },
      () => {
        dispatch({
          type: START_LOADER,
        });
      },
      (data) => {
        dispatch({
          type: SET_TRANSACTION,
          payload: data.data.data,
        });
      },
      (error) => {
        dispatch({
          type: SET_MESSAGE,
          payload: { message: "", type: "error" },
        });
      },
      () => {
        dispatch({
          type: STOP_LOADER,
        });
      }
    );
  };

export const clearTransaction = () => ({
  type: CLEAR_TRANSACTION,
});

export const historyChange = () => ({
  type: HISTORY_FILTER_CHANGE,
});

export const getReportTransaction = (type) => (dispatch) => {
  return TransactionServices.reportTransaction(
    {
      type: type,
    },
    () => {
      dispatch({
        type: START_LOADER,
      });
    },
    (data) => {
      dispatch({
        type: SET_REPORT_TRANSACTION,
        payload: data.data.data,
      });
    },
    (error) => {
      dispatch({
        type: SET_MESSAGE,
        payload: { message: "", type: "error" },
      });
    },
    () => {
      dispatch({
        type: STOP_LOADER,
      });
    }
  );
};
