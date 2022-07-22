import { USER_ROLE,
  USER_ID,
  USER_NAME, } from "./actions";

const initialState = {
  userRole: null,
  userId: null,
  userName: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case USER_ROLE:
      return {
        ...state,
        userRole: action.payload,
      };
    case USER_ID:
      return {
        ...state,
        userId: action.payload,
      };

    case USER_NAME:
      return {
        ...state,
        userName: action.payload,
      };

    default:
      return state;
  }
}
