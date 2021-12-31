import { GroupServices } from "../../Services/GroupServices";
import { UserServices } from "../../Services/UserServices";
import {
  ADD_MEMBER,
  CLEAR_GROUP,
  CLEAR_MEMBERS,
  SET_DASHBOARD,
  SET_FETCH,
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

export const switchGroup = (currentGroup) => ({
  type: SWITCH_GROUP,
  payload: currentGroup,
});

export const setDashboard = () => (dispatch) => {
  return GroupServices.getDashboardDetails(
    {},
    () => {
      dispatch({
        type: START_LOADER,
      });
    },
    (data) => {
      dispatch({
        type: SET_DASHBOARD,
        payload: data.data.data,
      });
      dispatch({
        type: SET_MESSAGE,
        payload: { message: "", type: "success" },
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

export const clearGroup = () => ({
  type: CLEAR_GROUP,
});

export const updateGroupInfo =
  (male, female, fineAmount, finePeriod) => (dispatch) => {
    return GroupServices.updateGroupInfo(
      {
        minimum_amount_female: female,
        minimum_amount_male: male,
        fine_amount: fineAmount,
        fine_period: finePeriod,
      },
      () => {
        dispatch({
          type: START_LOADER,
        });
      },
      (data) => {
        dispatch({
          type: SET_FETCH,
        });
        dispatch({
          type: SET_MESSAGE,
          payload: {
            message: "Group Info Updated Successfully!",
            type: "success",
          },
        });
      },
      (error) => {
        console.log(error);
        dispatch({
          type: SET_MESSAGE,
          payload: {
            message: "",
            type: "error",
          },
        });
      },
      () => {
        dispatch({
          type: STOP_LOADER,
        });
      }
    );
  };

export const updatePosition = (userId, position) => (dispatch) => {
  return GroupServices.updatePosition(
    {
      user_id: userId,
      position: position,
    },
    () => {
      dispatch({
        type: START_LOADER,
      });
    },
    (data) => {
      dispatch({
        type: SET_FETCH,
      });
      dispatch({
        type: CLEAR_MEMBERS,
      });
      dispatch({
        type: SET_MESSAGE,
        payload: {
          message: "Profile Updated Successfully!",
          type: "success",
        },
      });
    },
    (error) => {
      console.log(error);
      dispatch({
        type: SET_MESSAGE,
        payload: {
          message: "Something went wrong!Try again!",
          type: "error",
        },
      });
    },
    () => {
      dispatch({
        type: STOP_LOADER,
      });
    }
  );
};
