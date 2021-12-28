import { GroupServices } from "../../Services/GroupServices";
import { UserServices } from "../../Services/UserServices";
import {
  CLEAR_GROUP_PAYMENT_HISTORY,
  FILTER_CHANGE,
  SET_GROUP_PAYMENT_HISTORY,
  SET_MESSAGE,
  SET_REPORT_PAYMENT,
  START_LOADER,
  STOP_LOADER,
} from "../actionTypes";

import { store } from "../Store";

export const getGroupPaymentHistory =
  (id, status, year, month, skip, limit) => (dispatch) => {
    return GroupServices.payments(
      {
        group_id: id,
        status: status,
        month: month === "All" ? "" : month,
        year: year,
        sort: "desc",
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
          type: SET_GROUP_PAYMENT_HISTORY,
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

export const filterChange = () => ({
  type: FILTER_CHANGE,
});

export const clearPaymentHistory = () => ({
  type: CLEAR_GROUP_PAYMENT_HISTORY,
});

export const getReportPayments = () => (dispatch) => {
  return GroupServices.reportPayment(
    {},
    () => {
      dispatch({
        type: START_LOADER,
      });
    },
    (data) => {
      dispatch({
        type: SET_REPORT_PAYMENT,
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
