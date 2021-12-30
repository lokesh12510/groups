import { GroupServices } from "../../Services/GroupServices";
import { UserServices } from "../../Services/UserServices";
import {
  ADD_MEMBER,
  CLEAR_MEMBERS,
  SET_MEMBERS,
  SET_MESSAGE,
  START_LOADER,
  STOP_LOADER,
} from "../actionTypes";

export const getMembersList = () => (dispatch) => {
  return GroupServices.getMembersList(
    {},
    () => {
      dispatch({
        type: START_LOADER,
      });
    },
    (data) => {
      dispatch({
        type: SET_MEMBERS,
        payload: data.data.data.members,
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

export const addMember = () => ({
  type: ADD_MEMBER,
});

export const clearMembers = () => ({
  type: CLEAR_MEMBERS,
});
