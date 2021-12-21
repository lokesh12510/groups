import { UserServices } from "../../Services/UserServices";
import {
  SET_MESSAGE,
  SET_USER_CONTRIBUTION,
  START_LOADER,
  STOP_LOADER,
} from "../actionTypes";

export const getUserContribution = () => (dispatch) => {
  return UserServices.userContribution(
    {},
    () => {
      dispatch({
        type: START_LOADER,
      });
    },
    (data) => {
      dispatch({
        type: SET_USER_CONTRIBUTION,
        payload: data.data.data,
      });
    },
    (error) => {
      dispatch({
        type: SET_MESSAGE,
        payload: { message: "Something went Wrong!", type: "error" },
      });
    },
    () => {
      dispatch({
        type: STOP_LOADER,
      });
    }
  );
};
