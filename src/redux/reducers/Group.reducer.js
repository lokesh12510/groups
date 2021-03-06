import {
  CLEAR_GROUP,
  SET_GROUP,
  SWITCH_GROUP,
  UPDATE_GROUP,
  SET_FETCH,
  SET_DASHBOARD,
} from "../actionTypes";

const initialState = {
  groupName: "",
  currentGroupId: "",
  groupStatus: false,
  groupAdmin: null,
  groupInfo: null,
  isFetched: false,
  dashboard: {},
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

    case SET_FETCH:
      return {
        ...state,
        isFetched: false,
      };

    case SWITCH_GROUP:
      return { ...state, currentGroupId: payload };

    case CLEAR_GROUP:
      return initialState;

    default:
      return state;
  }
};

export const dashboardReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_DASHBOARD:
      return {
        dashboard: { ...payload },
      };
    default:
      return state;
  }
};
