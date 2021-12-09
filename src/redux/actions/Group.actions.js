import {
  CLEAR_GROUP,
  SET_GROUP,
  SWITCH_GROUP,
  UPDATE_GROUP,
} from "../actionTypes";

export const setGroup = (group) => ({
  type: SET_GROUP,
  payload: group,
});
export const updateGroup = (group) => ({
  type: UPDATE_GROUP,
  payload: group,
});

export const switchGroup = (currentGroup) => ({
  type: SWITCH_GROUP,
  payload: currentGroup,
});

export const clearGroup = () => ({
  type: CLEAR_GROUP,
});
