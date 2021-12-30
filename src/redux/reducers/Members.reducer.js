import {
  ADD_MEMBER,
  REMOVE_MEMBER,
  SET_MEMBERS,
  SET_NON_MEMBERS,
  CLEAR_MEMBERS,
} from "../actionTypes";

const initialState = {
  membersList: [],
  membersCount: 0,
  isFetched: false,
};

export const membersReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_MEMBERS:
      return {
        membersList: payload,
        membersCount: payload.length,
        isFetched: true,
      };

    case ADD_MEMBER:
      return {
        ...state,
        isFetched: false,
      };

    case REMOVE_MEMBER:
      return {
        membersList: payload,
        membersCount: payload.length,
        isFetched: true,
      };

    case CLEAR_MEMBERS:
      return {
        membersList: [],
        membersCount: 0,
        isFetched: false,
      };
    default:
      return state;
  }
};
