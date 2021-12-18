import { GroupServices } from "../../Services/GroupServices";
import { UserServices } from "../../Services/UserServices";
import {
  ACCEPT_PAYMENT,
  CREATE_PAYMENT,
  PENDING_PAYMENTS,
  SET_MESSAGE,
  START_LOADER,
  STOP_LOADER,
} from "../actionTypes";
import { store } from "../Store";

export const getPendingPayments = (id, status) => (dispatch) => {
  return GroupServices.pendingPayments(
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

export const createPayment = (user_id, amount) => (dispatch) => {
  const state = store.getState();
  let group_id = state.groups.currentGroupId;

  return UserServices.createPayment(
    { user_id: user_id, group_id: group_id, amount: amount },
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
