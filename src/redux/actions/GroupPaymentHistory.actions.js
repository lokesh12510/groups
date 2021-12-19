import { GroupServices } from "../../Services/GroupServices";
import { UserServices } from "../../Services/UserServices";
import {
  FILTER_CHANGE,
  SET_GROUP_PAYMENT_HISTORY,
  SET_MESSAGE,
  SET_USER_PAYMENTS,
  START_LOADER,
  STOP_LOADER,
} from "../actionTypes";

import { store } from "../Store";

export const getGroupPaymentHistory = (id, status) => (dispatch) => {
  return GroupServices.payments(
    {
      group_id: id,
      status: status,
      month: 12,
      year: 2021,
      sort: "asc",
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
