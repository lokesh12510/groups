import { GroupServices } from "../../Services/GroupServices";
import { UserServices } from "../../Services/UserServices";
import {
  SET_MESSAGE,
  SET_USER_PAYMENTS,
  START_LOADER,
  STOP_LOADER,
} from "../actionTypes";

import { store } from "../Store";

export const getUserPayments = (status, sort) => (dispatch) => {
  console.log("payments", status, sort);
  return UserServices.userPayments(
    {
      group_id: "GRP0",
      status: status,
      sort: sort,
    },
    () => {
      dispatch({
        type: START_LOADER,
      });
    },
    (data) => {
      dispatch({
        type: SET_USER_PAYMENTS,
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
