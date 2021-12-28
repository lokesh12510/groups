import { GroupServices } from "../../Services/GroupServices";
import { UserServices } from "../../Services/UserServices";
import {
  ACCEPT_PAYMENT,
  CLEAR_GROUP_PAYMENT_HISTORY,
  CREATE_PAYMENT,
  PENDING_PAYMENTS,
  SET_FETCH,
  SET_MESSAGE,
  START_LOADER,
  STOP_LOADER,
} from "../actionTypes";
import { store } from "../Store";
import { getReportPayments } from "./GroupPaymentHistory.actions";

export const getPendingPayments = (id, status) => (dispatch) => {
  return GroupServices.payments(
    {
      group_id: id,
      status: status,
    },
    () => {
      dispatch({
        type: START_LOADER,
      });
    },
    (data) => {
      dispatch({
        type: PENDING_PAYMENTS,
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

export const acceptPayment = (id) => (dispatch) => {
  return UserServices.acceptPayment(
    { payment_id: id },
    () => {
      dispatch({
        type: START_LOADER,
      });
    },
    (data) => {
      dispatch({
        type: ACCEPT_PAYMENT,
      });
      dispatch({
        type: CLEAR_GROUP_PAYMENT_HISTORY,
      });

      dispatch({
        type: SET_FETCH,
      });
      dispatch({
        type: SET_MESSAGE,
        payload: { message: "Payment Accepted Successfully!", type: "success" },
      });
    },
    (error) => {
      dispatch({
        type: SET_MESSAGE,
        payload: { message: "Something went wrong!Try again!", type: "error" },
      });
    },
    () => {
      dispatch({
        type: STOP_LOADER,
      });
    }
  );
};

export const createPayment = (user_id, amount, date) => (dispatch) => {
  const state = store.getState();
  let group_id = state.groups.currentGroupId;

  return UserServices.createPayment(
    { user_id: user_id, group_id: group_id, amount: amount, createdAt: date },
    () => {
      dispatch({
        type: START_LOADER,
      });
    },
    (data) => {
      dispatch({
        type: CREATE_PAYMENT,
      });
      dispatch({
        type: SET_MESSAGE,
        payload: { message: data.data.message, type: "success" },
      });
    },
    (error) => {
      dispatch({
        type: SET_MESSAGE,
        payload: { message: "Something went wrong!Try again!", type: "error" },
      });
    },
    () => {
      dispatch({
        type: STOP_LOADER,
      });
    }
  );
};
