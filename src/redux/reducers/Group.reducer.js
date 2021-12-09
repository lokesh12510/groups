import {
  CLEAR_GROUP,
  SET_GROUP,
  SWITCH_GROUP,
  UPDATE_GROUP,
} from "../actionTypes";
import { store } from "../Store";

const initialState = {
  group: null,
  currentGroupId: "",
  groupStatus: false,
  isGroupAdmin: false,
};

export const groupReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_GROUP:
      return {
        ...state,
        group: payload.data.group,
        currentGroupId:
          payload.data.group !== null ? payload.data.group.id : "",
        groupStatus: payload.data.group !== null ? true : false,
        isGroupAdmin:
          payload.data.group !== null &&
          payload.data.group.admin === store?.user?.profile?.id
            ? true
            : false,
      };

    case UPDATE_GROUP:
      return {
        ...state,
        group: payload,
        currentGroupId: payload.id,
        groupStatus: payload.id ? true : false,
        isGroupAdmin: payload.admin === store?.user?.id ? true : false,
      };

    case SWITCH_GROUP:
      return { ...state, currentGroupId: payload };

    case CLEAR_GROUP:
      return initialState;

    default:
      return state;
  }
};
