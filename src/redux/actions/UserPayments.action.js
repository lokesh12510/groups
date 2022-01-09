
import { UserServices } from "../../Services/UserServices";
import {
  SET_MESSAGE,
  SET_USER_PAYMENTS,
  START_LOADER,
  STOP_LOADER,
  SET_USER_PENDING_LIST,
  CLEAR_USER_PENDING_LIST,
  USER_FILTER_CHANGE,
} from "../actionTypes";


export const getUserPayments =
  (groupId, status, sort, year, skip, limit) => (dispatch) => {
    return UserServices.userPayments(
      {
        group_id: groupId,
        status: status,
        sort: sort,
        year: year === "All" ? "" : year,
        skip: skip,
        limit: limit,
      },
      () => {
        dispatch({
          type: START_LOADER,
        });
      },
      (data) => {
        if (status === "Paid") {
          dispatch({
            type: SET_USER_PAYMENTS,
            payload: data.data.data,
          });
        }
        if (status === "Unpaid") {
          dispatch({
            type: SET_USER_PENDING_LIST,
            payload: data.data.data,
          });
        }
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

export const clearPayments = () => ({
  type: CLEAR_USER_PENDING_LIST,
});

export const userFilterChange = () => ({
  type: USER_FILTER_CHANGE,
});
