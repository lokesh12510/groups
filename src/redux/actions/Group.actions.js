import { GroupServices } from "../../Services/GroupServices";
import { UserServices } from "../../Services/UserServices";
import {
  CLEAR_GROUP,
  SET_GROUP,
  SET_MESSAGE,
  START_LOADER,
  STOP_LOADER,
  SWITCH_GROUP,
  UPDATE_GROUP,
} from "../actionTypes";

export const setGroup = () => (dispatch) => {
  return UserServices.home(
    {},
    () => {
      dispatch({
        type: START_LOADER,
      });
    },
    (data) => {
      if (data.data.data != null) {
        dispatch({
          type: SET_GROUP,
          payload: data.data.data,
        });
      }
      if (data.data.data === null) {
        dispatch({
          type: SET_MESSAGE,
          payload: {
            message: "Wait for admin confirmation!",
            type: "success",
          },
        });
      }
    },
    (error) => {
      console.log(error);
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

export const updateGroup = (groupId) => (dispatch) => {
  return GroupServices.getGroupInfo(
    groupId,
    {},
    () => {
      dispatch({
        type: START_LOADER,
      });
    },
    (data) => {
      dispatch({
        type: UPDATE_GROUP,
        payload: data.data.data,
      });
    },
    (error) => {
      console.log(error);
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

export const switchGroup = (currentGroup) => ({
  type: SWITCH_GROUP,
  payload: currentGroup,
});

export const clearGroup = () => ({
  type: CLEAR_GROUP,
});
