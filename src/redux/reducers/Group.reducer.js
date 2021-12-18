import {
  CLEAR_GROUP,
  SET_GROUP,
  SWITCH_GROUP,
  UPDATE_GROUP,
} from "../actionTypes";
import { store } from "../Store";

const initialState = {
  groupName: "",
  currentGroupId: "",
  groupStatus: false,
  groupAdmin: null,
  groupInfo: null,
  isFetched: false,
};

export const groupReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_GROUP:
      return {
        ...state,
        groupName: payload.name,
        currentGroupId: payload.id,
        groupStatus: payload !== null ? true : false,
        groupAdmin: payload.admin,
        isFetched: true,
      };

    case UPDATE_GROUP:
      return {
        ...state,
        groupInfo: payload,
        isFetched: true,
      };

    case SWITCH_GROUP:
      return { ...state, currentGroupId: payload };

    case CLEAR_GROUP:
      return initialState;

    default:
      return state;
  }
};
