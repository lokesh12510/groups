import { GroupServices } from "../../Services/GroupServices";
import { UserServices } from "../../Services/UserServices";
import {
  SET_MESSAGE,
  SET_USER_PAYMENTS,
  START_LOADER,
  STOP_LOADER,
} from "../actionTypes";

import { store } from "../Store";

export const getUserPayments = (groupId, status, sort, year) => (dispatch) => {
  return UserServices.userPayments(
    {
      group_id: groupId,
      status: status,
      sort: sort,
      year: year,
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
